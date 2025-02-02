import { Component, Input, HostListener, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private router: Router, private elementRef: ElementRef, private authService: AuthService) {}
  userName: string = '';
  
  @Input() collapsed = false;
  @Input() screenWidth = 0;
  @ViewChild('accountContainer') accountContainer!: ElementRef;
  showAccount = false;

  ngOnInit() {
    const firstName = this.authService.getFirstName();
    const lastName = this.authService.getLastName();
    if (firstName && lastName) {
      this.userName = `${firstName} ${lastName}`;
    }
  }

  toggleAccount(event: Event) {
    event.stopPropagation(); // Prevent the click event from bubbling up to document
    this.showAccount = !this.showAccount;
  }

  openAccountSettings() {
    this.router.navigate(['/account-settings']);
  }

  logout() {
    console.log('Logout');
    this.authService.logout(); // This will clear token and redirect to login
    this.showAccount = false; // Hide the account popup
  }

  homepage() {
    this.router.navigate(['/homepage']);
  }

  // Close pop-ups when clicking outside
  @HostListener('document:click', ['$event'])
  closePopups(event: Event) {
    if (this.accountContainer) {
      const clickedInsideAccount = this.accountContainer.nativeElement.contains(event.target);

      // Close the account pop-up if the click is outside the account container
      if (!clickedInsideAccount) {
        this.showAccount = false;
      }
    }
  }
}


