export interface QuizData {
    question: string;
    a: string;
    b: string;
    c: string;
    d: string;
    correct: string;
    code?: string;
  }
export const quizData: QuizData[] = [
    {
        question: "What is inheritance in Java?",
        a: "A process where a class acquires the properties of another class",
        b: "A way to define multiple constructors in a class",
        c: "A method to execute parent class methods only",
        d: "A tool to create standalone classes",
        correct: "a"
    },
    {
        question: "Which of the following terms refers to the class being inherited?",
        a: "Derived class",
        b: "Parent class",
        c: "Subclass",
        d: "Instance class",
        correct: "b"
    },
    {
        question: "Which of the following statements is true regarding a derived class in OOP?",
        a: "A derived class cannot have additional features beyond the base class",
        b: "A derived class automatically inherits all methods and fields from its base class",
        c: "A derived class cannot access methods from the base class",
        d: "A derived class must override all methods from the base class",
        correct: "b",
    },
    {
        question: "Which of the following is a benefit of inheritance?",
        a: "It increases the complexity of the code",
        b: "It promotes code reusability",
        c: "It eliminates the need for methods",
        d: "It restricts access to parent class data",
        correct: "b"
    },
    { // Added the code problem
        question: "What type of inheritance is this?",
        a: "Single Inheritance",
        b: "Multilevel Inheritance",
        c: "Hierarchical Inheritance",
        d: "Not an Inheritance",
        correct: "b",
        code: `class A {
} 
class B extends A {
} 
class C extends B {
}`
    },
    {
        question: "Which of the following is an example of how inheritance would be used in an object-oriented programming language, such as Java, to model a Motorcycle inheriting from Vehicle?",
        a: "class Motorcycle implements Vehicle {}",
        b: "class Motorcycle extends Vehicle {}",
        c: "class Vehicle extends Motorcycle {}",
        d: "class Motorcycle inherits Vehicle {}",
        correct: "b"
    },
    {
        question: "What is single inheritance?",
        a: "When a class is inherited by multiple classes",
        b: "When a class inherits properties from one parent class",
        c: "When multiple classes share a single method",
        d: "When a class inherits methods without attributes",
        correct: "b"
    },
    {
        question: "What is multilevel inheritance?",
        a: "When a class inherits directly from multiple classes",
        b: "When a class is inherited by another class that is also inherited",
        c: "When all classes in a program share the same properties",
        d: "When a class inherits static methods",
        correct: "b"
    },
    {
        question: "What is hierarchical inheritance?",
        a: "A single parent class has multiple child classes",
        b: "A child class has multiple parent classes",
        c: "A parent class inherits from another parent class",
        d: "A class that inherits private methods",
        correct: "a"
    },
    {
        question: "What is a parent class in single inheritance?",
        a: "A class that has no methods or attributes",
        b: "A class that acquires properties from another class",
        c: "A class that provides its properties and behaviors to the child class",
        d: "A class that contains only private methods",
        correct: "c"
    },
    {
        question: "What is constructor chaining in inheritance?",
        a: "Calling one constructor from another within the same class",
        b: "Defining multiple constructors with the same parameters",
        c: "Calling a parent class constructor from a child class",
        d: "Linking methods from parent and child classes",
        correct: "c"
    },
    {
        question: "What does the super keyword do in inheritance?",
        a: "Calls the immediate parent class constructor or method",
        b: "Creates a new instance of the subclass",
        c: "Restricts inheritance to a single class",
        d: "Declares a class as final",
        correct: "a"
    },
    {
        question: "What is method overriding in Object-Oriented Programming (OOP)?",
        a: "A method is defined in multiple classes",
        b: "A subclass provides its own implementation for a method that is already defined in its superclass",
        c: "A method in the superclass is deleted",
        d: "A method is created in the base class only",
        correct: "b",
    },
    {
        question: "Which of the following must be true when overriding a method in a subclass?",
        a: "The method name can be different from the superclass",
        b: "The method signature must match the one in the superclass",
        c: "The method in the subclass must have a different return type",
        d: "The overridden method must be private",
        correct: "b",
    },
    {
        question: "What is the primary difference between method overriding and method overloading?",
        a: "Method overriding changes the method signature, while overloading does not",
        b: "Overloading allows methods with the same name and parameters, while overriding requires different names",
        c: "Overloading is when a subclass provides a specific implementation, while overriding involves methods with different names",
        d: "Method overloading involves defining multiple methods with the same name but different parameters, while method overriding allows a subclass to modify a method from the superclass",
        correct: "d",
    },
    {
        question: "What is the purpose of the @Override annotation in Java?",
        a: "To indicate that a method is overloaded",
        b: "To indicate that a method is intended to override a method in the superclass",
        c: "To prevent a method from being overridden",
        d: "To define a method that can be accessed by all subclasses",
        correct: "b",
    },
    {
        question: "What is the output of the following code?",
        a: "Parent's display()",
        b: "Child's display()",
        c: "Compile-time error",
        d: "Runtime error",
        correct: "b",
        code: `class Parent {
void display() {
        System.out.println("Parent's display()");
    }
}

class Child extends Parent {
    @Override
    void display() {
        System.out.println("Child's display()");
    }
}

public class Main {
    public static void main(String[] args) {
        Parent p = new Child();
        p.display();
    }
}`
    },
    {
        question: "What does the super keyword refer to in a subclass?",
        a: "The child class",
        b: "The immediate parent class",
        c: "The constructor of the child class",
        d: "The constructor of the superclass",
        correct: "b"
    },
    {
        question: "If a method in a superclass is private, can it be overridden by a subclass?",
        a: "Yes, because private methods are inherited",
        b: "No, private methods cannot be inherited",
        c: "Yes, if the method signature is the same",
        d: "No, private methods can only be accessed within the same class",
        correct: "b"
    },
    {
        question: "What would happen if a subclass does not provide an overridden method for a method in its superclass?",
        a: "The program will throw an error",
        b: "The subclass will use the method from the superclass",
        c: "The subclass will ignore the method entirely",
        d: "The subclass will automatically create a new method",
        correct: "b"
    },
    {
        question: "What does the final keyword do when applied to a class in Java?",
        a: "It prevents a class from having any fields",
        b: "It prevents a class from being inherited",
        c: "It allows a class to be inherited only once",
        d: "It allows a class to have no constructors",
        correct: "b"
    },
    {
        question: "What is the purpose of using the final keyword on a method in Java?",
        a: "To prevent the method from being inherited",
        b: "To prevent the method from being overridden by subclasses",
        c: "To make the method return a constant value",
        d: "To ensure the method is always public",
        correct: "b"
    },
    {
        question: "What does the final keyword do when applied to a variable in Java?",
        a: "It makes the variable static",
        b: "It creates a constant that cannot be modified after initialization",
        c: "It allows the variable to be inherited by subclasses",
        d: "It makes the variable available only to the parent class",
        correct: "b"
    },
    {
        question: "In the following code, what will happen when the display() method is called?",
        a: "The program will compile and display 'This animal has 2 legs.'",
        b: "The program will compile and display 'This animal has 4 legs.'",
        c: "The program will throw a compilation error because legs is final",
        d: "The program will throw a runtime error",
        correct: "c",
        code: `class Animal {
    final int legs = 4;

    void display() {
        legs = 2; 
        System.out.println("This animal has " + legs + " legs.");
    }
}`
    },
    {
        question: "What does the equals() method in the Object class do?",
        a: "It compares the memory address of two objects",
        b: "It compares the actual content of two objects for equality",
        c: "It compares the class name of two objects",
        d: "It compares the string representation of two objects",
        correct: "b"
    },
    {
        question: "What does the hashCode() method in the Object class provide?",
        a: "A string representation of an object",
        b: "A unique integer for each object",
        c: "The class name of the object",
        d: "The memory address of the object",
        correct: "b"
    },
    {
        question: "What is the purpose of the instanceof operator in Java?",
        a: "To check if an object is an instance of a specific class or subclass",
        b: "To create a new instance of a class",
        c: "To check if a class is inherited from another class",
        d: "To check if two objects are of the same class",
        correct: "a"
    },
    {
        question: "What keyword is used in Java to implement inheritance?",
        a: "implements",
        b: "super",
        c: "extends",
        d: "inherit",
        correct: "c"
    },
    {
        question: "In the following code, which class is the parent class?",
        a: "Dog",
        b: "Animal",
        c: "Both Animal and Dog",
        d: "None",
        correct: "b",
        code: `class Animal { 
    void eat() { 
        System.out.println("This animal eats food.");
    }
}

class Dog extends Animal { 
    void bark() { 
        System.out.println("The dog barks.");
    }
}`
    },
    {
        question: "How does the super keyword work in inheritance?",
        a: "It creates a new object of the parent class",
        b: "It allows the child class to access methods, fields, and constructors from the parent class",
        c: "It prevents the child class from overriding a method of the parent class",
        d: "It creates a method in the child class with the same name as the parent class",
        correct: "b",
    },
    {
        question: "What will be the output of the following program?",
        a: "This animal eats food.\nThe dog eats bones.",
        b: "The dog eats bones.\nThis animal eats food.",
        c: "Compilation error",
        d: "No output",
        correct: "a",
        code: `class Animal { 
    void eat() { 
        System.out.println("This animal eats food.");
    }
}

class Dog extends Animal { 
    void eat() { 
        super.eat();
        System.out.println("The dog eats bones.");
    }
}

public class Main { 
    public static void main(String[] args) { 
        Dog dog = new Dog();
        dog.eat();
    }
}`
    },
    {
        question: "When should you use inheritance in Java?",
        a: "When the child class is a specialized version of the parent class",
        b: "When the child class needs completely different functionality from the parent class",
        c: "When you want to hide the properties of the parent class",
        d: "When the child class does not need to reuse any methods from the parent class",
        correct: "a"
    },
    {
        question: "Which of the following is a common use case for inheritance in Java?",
        a: "Creating a hierarchy of classes with shared properties and methods",
        b: "Implementing polymorphism and method overloading",
        c: "Reusing methods within the same class",
        d: "Avoiding the use of interfaces",
        correct: "a"
    },
    {
        question: "Which of the following is a real-world example of inheritance?",
        a: "A vehicle and a motorcycle",
        b: "A file and a folder",
        c: "A string and a number",
        d: "A pen and a notebook",
        correct: "a"
    },
    {
        question: "What differentiates a car and a motorcycle in terms of inheritance?",
        a: "A motorcycle is a subclass of a car",
        b: "Both are subclasses of a Vehicle class",
        c: "A car inherits a motorcycle class",
        d: "Inheritance does not apply to cars and motorcycles",
        correct: "b"
    },
    {
        question: "What is the primary purpose of inheritance in OOP?",
        a: "To allow code reuse and establish a relationship between classes",
        b: "To create multiple instances of a class",
        c: "To define private methods",
        d: "To implement interfaces",
        correct: "a"
    },
    {
        question: "Which keyword is used to inherit a class in Java?",
        a: "inherits",
        b: "extends",
        c: "implements",
        d: "super",
        correct: "b"
    },
    {
        question: "Can a class in Java inherit multiple classes?",
        a: "Yes, using the extends keyword",
        b: "Yes, using the implements keyword",
        c: "No, Java does not support multiple inheritance",
        d: "Yes, using both extends and implements keywords",
        correct: "c"
    },
    {
        question: "What is the purpose of the @Override annotation?",
        a: "To indicate that a method is overloaded",
        b: "To indicate that a method is intended to override a method in the superclass",
        c: "To prevent a method from being overridden",
        d: "To define a method that can be accessed by all subclasses",
        correct: "b"
    },
    {
        question: "What is the output of the following code?",
        a: "Parent constructor\nChild constructor",
        b: "Child constructor\nParent constructor",
        c: "Parent constructor",
        d: "Child constructor",
        correct: "a",
        code: `class Parent {
    Parent() {
        System.out.println("Parent constructor");
    }
}

class Child extends Parent {
    Child() {
        System.out.println("Child constructor");
    }
}

public class Main {
    public static void main(String[] args) {
        Child child = new Child();
    }
}`
    },
    {
        question: "What is method overriding?",
        a: "Defining multiple methods with the same name but different parameters",
        b: "A subclass providing its own implementation for a method already defined in its superclass",
        c: "A method calling another method",
        d: "A method that cannot be overridden",
        correct: "b"
    },
    {
        question: "What is the purpose of the super keyword?",
        a: "To call the constructor of the current class",
        b: "To call the constructor or method of the parent class",
        c: "To create a new object",
        d: "To define a method",
        correct: "b"
    },
    {
        question: "What is the output of the following code?",
        a: "Parent method\nChild method",
        b: "Child method\nParent method",
        c: "Parent method",
        d: "Child method",
        correct: "a",
        code: `class Parent {
    void display() {
        System.out.println("Parent method");
    }
}

class Child extends Parent {
    void display() {
        super.display();
        System.out.println("Child method");
    }
}

public class Main {
    public static void main(String[] args) {
        Child child = new Child();
        child.display();
    }
}`
    },
    {
    question: "What is the output of the following code?",
    a: "Parent method",
    b: "Child method",
    c: "Compilation error",
    d: "Runtime error",
    correct: "b",
    code: `class Parent {
    void display() {
        System.out.println("Parent method");
    }
}

class Child extends Parent {
    @Override
    void display() {
        System.out.println("Child method");
    }
}

public class Main {
    public static void main(String[] args) {
        Parent parent = new Child();
        parent.display();
    }
}`
    },
    {
        question: "What will be the output of the following code?",
        a: "Some generic sound",
        b: "Bark",
        c: "Meow",
        d: " Error: No method in Dog class",
        correct: "a",
        code: `class Pet {
public void makeSound() {
        System.out.println("Some generic sound");
    }
}

class Dog extends Pet {
    // No method override here
}

public class Main {
    public static void main(String[] args) {
        Pet pet = new Dog();
        pet.makeSound();
    }
}`
    },
    {
        question: "What is the output of the following code about the store scenario?",
        a: "Clothing Name",
        b: "Product Name",
        c: "Unknown Product",
        d: "Error: No method in Clothing class",
        correct: "b",
        code: `class Product {
protected String name;

public Product(String name) {
    this.name = name;
}

public void displayName() {
    System.out.println(name);
    }
}

class Clothing extends Product {
    // No method override here
    public Clothing(String name) {
        super(name);
    }
}

public class Main {
    public static void main(String[] args) {
        Product product = new Clothing("Product Name");
        product.displayName();
    }
}`
    },
    {
        question: "What is the output of the following code?",
        a: "Withdrawal successful. Balance: -100",
        b: "Insufficient funds",
        c: "Withdrawal successful. Balance: 100",
        d: "Compilation error",
        correct: "c",
        code: `class BankAccount {
double balance = 500;

public void withdraw(double amount) {
    if (amount > balance) {
        System.out.println("Insufficient funds");
    } else {
        balance -= amount;
        System.out.println("Withdrawal successful. Balance: " + balance);
    }
    }
}

class SavingsAccount extends BankAccount {
    // Inherits from BankAccount
}

public class Main {
    public static void main(String[] args) {
        SavingsAccount account = new SavingsAccount();
        account.withdraw(600); // Trying to withdraw more than the balance
    }
}`
        },
        {
            question: "What is the output of the following code?",
            a: "Speed: 120",
            b: "Speed limit exceeded",
            c: "Speed: 120 and Speed limit exceeded",
            d: "Compilation error",
            correct: "a",
            code: `class Vehicle {
int speed;

public void accelerate(int increment) {
        if (speed + increment > 200) {
            System.out.println("Speed limit exceeded");
        } else {
            speed += increment;
            System.out.println("Speed: " + speed);
        }
    }
}

class Car extends Vehicle {}
public class Main {
    public static void main(String[] args) {
        Car car = new Car();
        car.accelerate(120);
    }
}`
        },
        {
            question: "What will be the output of the following code?",
            a: "Error: No method in Magazine class",
            b: "Magazine Title",
            c: "The Great Gatsby",
            d: "Unknown Book",
            correct: "c",
            code: `class Book {
    protected String title;

    public Book(String title) {
        this.title = title;
    }

    public void displayTitle() {
        System.out.println(title);
    }
}

class Magazine extends Book {
    // No method override here
    public Magazine(String title) {
        super(title);
    }
}

public class Main {
    public static void main(String[] args) {
        Book book = new Magazine("The Great Gatsby");
        book.displayTitle();
    }
}`
        },
        {
            question: "What will be the output of the following code?",
            a: "Employee",
            b: "John",
            c: "Manager",
            d: "Error: No method in Manager class",
            correct: "b",
            code: `class Employee {
    protected String name;

    public Employee(String name) {
        this.name = name;
    }

    public void displayName() {
        System.out.println(name);
    }
}

class Manager extends Employee {
    public Manager(String name) {
        super(name);
    }
}

public class Main {
    public static void main(String[] args) {
        Employee employee = new Manager("John");
        employee.displayName();
    }
}
`
        },
        {
        question: "What is the output of the following code?",
        a: "This is a colored box with value: 0",
        b: "50",
        c: "Error: Method not found",
        d: "This is a colored box with value: 50",
        correct: "d",
        code: `class Box {
    private int value;

    public void setValue(int value) {
        this.value = value;
    }
    public int getValue() {
        return value;
    }
}

class ColoredBox extends Box {
    public void display() {
        System.out.println("This is a colored box with value: " + getValue());
    }
}
public class Main {
    public static void main(String[] args) {
        ColoredBox box = new ColoredBox();
        box.setValue(50);  // Inherited from Box
        box.display();  // From ColoredBox
    }
}`
        }
];