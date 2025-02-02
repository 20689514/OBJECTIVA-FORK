import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrl: './account-settings.component.scss'
})
export class AccountSettingsComponent implements OnInit {
  accountForm!: FormGroup;
  isEditing = false;
  apiUrl = 'http://127.0.0.1:8000/api/update-profile'; // Update this with your API endpoint

  constructor(private fb: FormBuilder, private authService: AuthService, private http: HttpClient) {}

  ngOnInit(): void {
    this.accountForm = this.fb.group({
      first_name: [{ value: this.authService.getFirstName(), disabled: true }, [Validators.required, Validators.maxLength(255)]],
      last_name: [{ value: this.authService.getLastName(), disabled: true }, [Validators.required, Validators.maxLength(255)]],
      email : [{ value: this.authService.getEmail(), disabled: true }, [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(8)]],
      confirm_password: ['']
    }, { validators: this.passwordsMatch });

  }



  passwordsMatch(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirm_password')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  enableEditing(): void {
    this.isEditing = true;
    this.accountForm.get('first_name')?.enable();
    this.accountForm.get('last_name')?.enable();
  }

  cancelEditing(): void {
    this.isEditing = false;
    this.accountForm.get('first_name')?.disable();
    this.accountForm.get('last_name')?.disable();
    this.accountForm.get('email')?.disable();
    this.accountForm.patchValue({
      first_name: this.authService.getFirstName(),
      last_name: this.authService.getLastName(),
      password: '',
      confirm_password: ''
    });
  }

  updateProfile(): void {
    if (this.accountForm.valid) {
      // Only send the fields that can be updated
      const formData = {
        first_name: this.accountForm.get('first_name')?.value,
        last_name: this.accountForm.get('last_name')?.value,
        // Don't include email in the update
        ...(this.accountForm.get('password')?.value ? {
          password: this.accountForm.get('password')?.value
        } : {})
      };
  
      this.http.put(this.apiUrl, formData).subscribe({
        next: (response: any) => {
          alert('Profile updated successfully');
          localStorage.setItem('firstName', response.user.first_name);
          localStorage.setItem('lastName', response.user.last_name);
          this.isEditing = false;
          this.accountForm.get('first_name')?.disable();
          this.accountForm.get('last_name')?.disable();
        },
        error: (error) => {
          alert('Error updating profile');
          console.error(error);
        }
      });
    }
  }
}