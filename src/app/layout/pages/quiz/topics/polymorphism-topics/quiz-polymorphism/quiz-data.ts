export interface QuizData {
    question: string;
    a: string;
    b: string;
    c: string;
    d: string;
    correct: string;
    code?: string;
    explanation: string;
  }
export const quizData: QuizData[] = [
    {
        question: "What does polymorphism mean in programming?",
        a: "The ability to change data types.",
        b: "The ability of one type to take multiple forms.",
        c: "A way to write complex code.",
        d: "A method to override parent classes.",
        correct: "b",
        explanation: "Polymorphism allows objects to be treated as instances of their parent class or as their own class. This flexibility is a key feature of object-oriented programming."
    },
    {
        question: "Name the two types of polymorphism in Java.",
        a: "Static and Dynamic",
        b: "Early and Late",
        c: "Compile-time and Runtime",
        d: "Both A and C",
        correct: "d",
        explanation: "Static polymorphism is resolved at compile time, while dynamic polymorphism is resolved at runtime."
    },
    {
        question: "What is another name for static polymorphism?",
        a: "Runtime Polymorphism",
        b: "Late Binding",
        c: "Compile-time Polymorphism",
        d: "Method Overriding",
        correct: "c",
        explanation: "Static polymorphism is also known as compile-time polymorphism because method resolution occurs during compilation."
    },
    {
        question: "What is another name for dynamic polymorphism?",
        a: "Compile-time Polymorphism",
        b: "Method Overloading",
        c: "Runtime Polymorphism",
        d: "Early Binding",
        correct: "c",
        explanation: "Dynamic polymorphism is also known as runtime polymorphism because method resolution occurs during program execution."
    },
    {
        question: "What is method overloading?",
        a: "Defining methods with the same name but different parameters.",
        b: "Overriding methods from a parent class.",
        c: "Using methods without parameters.",
        d: "None of the above.",
        correct: "a",
        explanation: "Method overloading allows multiple methods with the same name but different parameters to be defined in the same class."
    },
    {
        question: "How does constructor overloading differ from method overloading?",
        a: "Constructor overloading doesn't exist.",
        b: "Constructor overloading applies to constructors only.",
        c: "Method overloading applies to constructors only.",
        d: "Both are the same.",
        correct: "b",
        explanation: "Constructor overloading allows multiple constructors with different parameters to be defined in the same class."
    },
    {
        question: "Does Java support operator overloading explicitly?",
        a: "Yes",
        b: "No",
        c: "Only for addition",
        d: "Only for subtraction",
        correct: "b",
        explanation: "Java does not support operator overloading for user-defined classes, unlike some other languages like C++."
    },
    {
        question: "What is type promotion in method overloading?",
        a: "Converting a large data type to a smaller one.",
        b: "Automatically converting a smaller data type to a larger one.",
        c: "Promoting methods to the parent class.",
        d: "None of the above.",
        correct: "b",
        explanation: "Type promotion in method overloading automatically converts smaller data types to larger ones to match the method signature."
    },
    {
        question: "What is method overriding?",
        a: "Methods sharing the same name and parameters in different classes.",
        b: "Methods in the same class with different parameters.",
        c: "Methods in the same class with no parameters.",
        d: "None of the above.",
        correct: "a",
        explanation: "Method overriding occurs when a subclass provides a specific implementation of a method defined in its parent class."
    },
    {
        question: "What determines which overridden method is executed at runtime?",
        a: "The reference type.",
        b: "The actual object type.",
        c: "The compiler.",
        d: "None of the above.",
        correct: "b",
        explanation: "The actual object type determines which overridden method is executed at runtime, not the reference type."
    },
    {
        question: "What is dynamic method dispatch?",
        a: "Resolving overloaded methods at compile time.",
        b: "Resolving overridden methods at runtime.",
        c: "Invoking methods based on static reference types.",
        d: "None of the above.",
        correct: "b",
        explanation: "Dynamic method dispatch is the mechanism by which the correct overridden method is called at runtime."
    },
    {
        question: "What is late binding?",
        a: "Resolving methods at compile time.",
        b: "Resolving overridden methods during runtime.",
        c: "Resolving static methods during runtime.",
        d: "None of the above.",
        correct: "b",
        explanation: "Late binding refers to resolving overridden methods at runtime, allowing for dynamic polymorphism."
    },
    {
        question: "Which of the following is NOT a benefit of polymorphism?",
        a: "Code reusability",
        b: "Flexibility",
        c: "Fixed behavior",
        d: "Easier maintenance",
        correct: "c",
        explanation: "Polymorphism allows for flexible behavior based on object types, not fixed behavior."
    },
    {
        question: "How does polymorphism enhance maintainability?",
        a: "By adding more code.",
        b: "By using the same method for different objects.",
        c: "By avoiding dynamic behavior.",
        d: "By simplifying logic.",
        correct: "b",
        explanation: "Polymorphism enhances maintainability by allowing the same method to be used for different objects, reducing code duplication."
    },
    {
        question: "What allows objects to share methods and behave differently as needed?",
        a: "Abstraction",
        b: "Polymorphism",
        c: "Encapsulation",
        d: "Inheritance",
        correct: "b",
        explanation: "Polymorphism allows objects to share methods from a common interface or parent class while providing unique implementations."
    },
    {
        question: "Which access modifier is required for method overriding?",
        a: "private",
        b: "public",
        c: "protected or public",
        d: "No modifier",
        correct: "c",
        explanation: "Methods must be declared as protected or public in the parent class to be overridden in a subclass."
    },
    {
        question: "Can static methods be overridden in Java?",
        a: "Yes",
        b: "No",
        c: "Only if marked final",
        d: "Only if in the same package",
        correct: "b",
        explanation: "Static methods cannot be overridden in Java because they are resolved at compile time, not runtime."
    },
    {
        question: "What happens if the parent and child classes have the same method but different return types?",
        a: "It causes an error.",
        b: "It results in overriding.",
        c: "It’s allowed only if the return types are covariant.",
        d: "It results in overloading.",
        correct: "c",
        explanation: "Covariant return types allow the child class method to return a subclass of the parent class method's return type."
    },
    {
        question: "What is a covariant return type?",
        a: "A return type that matches the parent class exactly.",
        b: "A return type that is a subclass of the parent class's return type.",
        c: "A completely different return type.",
        d: "None of the above.",
        correct: "b",
        explanation: "A covariant return type allows a subclass method to return a more specific type than the parent class method."
    },
    {
        question: "Why is polymorphism important in real-world applications?",
        a: "It enforces strict coding rules.",
        b: "It allows flexibility and reusable code.",
        c: "It improves hardware performance.",
        d: "It makes debugging easier.",
        correct: "b",
        explanation: "Polymorphism provides flexibility and code reusability, making it easier to maintain and extend software applications."
    },
    {
        question: "Which of the following is an example of polymorphism in Java?",
        a: "Method overloading",
        b: "Method overriding",
        c: "Interfaces",
        d: "All of the above",
        correct: "d",
        explanation: "Method overloading, method overriding, and interfaces are all examples of polymorphism in Java."
    },
    {
        question: "How can polymorphism reduce code redundancy?",
        a: "By writing unique methods for every object.",
        b: "By using inheritance and overriding.",
        c: "By avoiding abstraction.",
        d: "By ignoring dynamic behavior.",
        correct: "b",
        explanation: "Polymorphism allows methods to be shared among objects, reducing the need for duplicate code."
    },
    {
        question: "Can an interface support polymorphism?",
        a: "Yes",
        b: "No",
        c: "Only with abstract classes",
        d: "None of the above",
        correct: "a",
        explanation: "Interfaces can support polymorphism by allowing objects to be treated as instances of the interface."
    },
    {
        question: "Which of the following cannot be used as a return type for method overriding?",
        a: "Covariant types",
        b: "Primitive data types",
        c: "Unrelated types",
        d: "Abstract classes",
        correct: "c",
        explanation: "Method overriding requires a return type that is a subclass of the parent class method's return type."
    },
    {
        question: "What happens if the overridden method in the parent class throws an exception, but the child class method does not?",
        a: "Compilation error",
        b: "It is allowed",
        c: "The exception is ignored",
        d: "Runtime error",
        correct: "b",
        explanation: "A child class method can throw fewer exceptions or no exceptions compared to the parent class method."
    },
    {
        question: "Which type of polymorphism is implemented using interfaces in Java?",
        a: "Static",
        b: "Dynamic",
        c: "Compile-time",
        d: "None of the above",
        correct: "b",
        explanation: "Dynamic polymorphism is achieved through method overriding, which is often implemented using interfaces in Java."
    },
    {
        question: "What is the role of the super keyword in method overriding?",
        a: "Calls the parent class's method.",
        b: "Prevents overriding.",
        c: "Refers to the current object.",
        d: "Creates a new method.",
        correct: "a",
        explanation: "The super keyword is used to call the parent class's method from the child class's overridden method."
    },
    {
        question: "Why can't private methods be overridden?",
        a: "They are static.",
        b: "They are final by default.",
        c: "They are not visible in subclasses.",
        d: "None of the above.",
        correct: "c",
        explanation: "Private methods are not visible in subclasses, so they cannot be overridden."
    },
    {
        question: "How does polymorphism promote scalability in software?",
        a: "By allowing hardcoding",
        b: "By supporting dynamic behavior",
        c: "By limiting flexibility",
        d: "By avoiding inheritance",
        correct: "b",
        explanation: "Polymorphism allows for dynamic behavior, making software more adaptable to changes and scalable."
    },
    {
        question: "Which design principle is directly supported by polymorphism?",
        a: "Encapsulation",
        b: "Code reuse",
        c: "Open-Closed Principle",
        d: "Single Responsibility Principle",
        correct: "c",
        explanation: "The Open-Closed Principle states that software entities should be open for extension but closed for modification, which is supported by polymorphism."
    },
    {
        question: "Why is polymorphism considered an OOP pillar?",
        a: "It is unique to Java.",
        b: "It integrates other OOP concepts.",
        c: "It is used in procedural programming.",
        d: "It works without objects.",
        correct: "b",
        explanation: "Polymorphism is a key feature of object-oriented programming that integrates with other OOP concepts like inheritance and encapsulation."
    },
    {
        question: "Which of the following can break polymorphism?",
        a: "Final methods",
        b: "Interfaces",
        c: "Abstract classes",
        d: "Method overloading",
        correct: "a",
        explanation: "Final methods cannot be overridden, which can break polymorphism by restricting dynamic behavior."
    },
    {
        question: "What is required to implement polymorphism in real-world applications?",
        a: "Using static methods only",
        b: "Having a parent-child class relationship",
        c: "Avoiding dynamic behavior",
        d: "Using primitive types",
        correct: "b",
        explanation: "Polymorphism is implemented through inheritance and method overriding, which require a parent-child class relationship."
    },
    {
        question: "What does it mean if a reference variable is 'polymorphic'?",
        a: "It can hold objects of different types.",
        b: "It is restricted to one type only.",
        c: "It cannot access overridden methods.",
        d: "It is only used for interfaces.",
        correct: "a",
        explanation: "A polymorphic reference variable can hold objects of different types, allowing for dynamic behavior."
    },
    {
        question: "Which of these is an example of dynamic polymorphism?",
        a: "A method overloaded in the same class",
        b: "A subclass overriding a parent class method",
        c: "A method with no parameters",
        d: "A private method",
        correct: "b",
        explanation: "Dynamic polymorphism occurs when a subclass provides a specific implementation of a method defined in its parent class."
    },
    {
        question: "Why is method overriding commonly used in frameworks?",
        a: "To simplify object creation",
        b: "To allow customization of behavior",
        c: "To eliminate inheritance",
        d: "To restrict dynamic behavior",
        correct: "b",
        explanation: "Method overriding allows subclasses to provide specific implementations of parent class methods, enabling customization of behavior in frameworks."
    },
    {
        question: "What happens when an overridden method in a child class is called using a parent class reference?",
        a: "The parent's version is executed.",
        b: "The child's version is executed.",
        c: "Both versions are executed.",
        d: "Compilation error.",
        correct: "b",
        explanation: "When an overridden method is called using a parent class reference, the child class's version is executed due to dynamic polymorphism."
    },
    {
        question: "Which keyword should be used to avoid breaking polymorphism in a subclass?",
        a: "final",
        b: "static",
        c: "protected",
        d: "private",
        correct: "c",
        explanation: "The protected keyword allows subclasses to access and override methods without breaking polymorphism."
    },
    {
        question: "How does polymorphism simplify API design?",
        a: "By supporting fixed behavior",
        b: "By allowing a single interface for multiple implementations",
        c: "By avoiding inheritance",
        d: "By promoting static methods",
        correct: "b",
        explanation: "Polymorphism simplifies API design by allowing a single interface to be used for multiple implementations, promoting flexibility and code reuse."
    },
    {
        question: "Which keyword prevents a method from being overridden?",
        a: "final",
        b: "static",
        c: "protected",
        d: "private",
        correct: "a",
        explanation: "The final keyword prevents a method from being overridden in a subclass, ensuring fixed behavior."
    },
    { // code problem 1
        question: "What is the output of the following code about the zoo management system scenario?",
        a: "Bark",
        b: "Some generic animal sound",
        c: "Meow",
        d: "Compilation error",
        correct: "b",
        explanation: "The code demonstrates polymorphism by calling the makeSound method of the Dog class through a reference to the Animal class.",
        code: `class Animal {
    public void makeSound() {
        System.out.println("Some generic animal sound");
    }
}

class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Bark");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal animal = new Dog(); // Polymorphism: Parent reference, child object
        animal.makeSound();
    }
}`
    },
    { // code problem 2
        question: "What is the output of the following code about the payment system scenario?",
        a: "Processing generic payment",
        b: "Error: Method not found",
        c: "Processing credit card payment",
        d: "Compilation error",
        correct: "c",
        code: `class Payment {
    public void processPayment() {
        System.out.println("Processing generic payment");
    }
}

class CreditCard extends Payment {
    @Override
    public void processPayment() {
        System.out.println("Processing credit card payment");
    }
}

public class Main {
    public static void main(String[] args) {
        Payment payment = new CreditCard(); // Polymorphism: Parent reference, child object
        payment.processPayment();
    }
}`,
        explanation: "The code demonstrates polymorphism by calling the processPayment method of the CreditCard class through a reference to the Payment class."
    },
    { // code problem 3
        question: "What is the output of the following code about the online store scenario?",
        a: "Applying general discount",
        b: "Applying seasonal discount",
        c: "No discount applied",
        d: "Compilation error",
        correct: "b",
        code: `class Discount {
    public void applyDiscount() {
        System.out.println("Applying general discount");
    }
}

class SeasonalDiscount extends Discount {
    @Override
    public void applyDiscount() {
        System.out.println("Applying seasonal discount");
    }
}

public class Main {
    public static void main(String[] args) {
        Discount discount = new SeasonalDiscount(); // Polymorphism: Parent reference, child object
        discount.applyDiscount();
    }
}`,
        explanation: "The code demonstrates polymorphism by calling the applyDiscount method of the SeasonalDiscount class through a reference to the Discount class."
    },
    { // code problem 4
        question: "What is the output of the following code about the transportation system scenario?",
        a: "Starting vehicle engine",
        b: "Starting car engine",
        c: "Engine not started",
        d: "Compilation error",
        correct: "b",
        code: `class Vehicle {
    public void startEngine() {
        System.out.println("Starting vehicle engine");
    }
}

class Car extends Vehicle {
    @Override
    public void startEngine() {
        System.out.println("Starting car engine");
    }
}

public class Main {
    public static void main(String[] args) {
        Vehicle vehicle = new Car(); // Polymorphism: Parent reference, child object
        vehicle.startEngine();
    }
}`,
        explanation: "The code demonstrates polymorphism by calling the startEngine method of the Car class through a reference to the Vehicle class."
    },
    { // code problem 5
        question: "What is the output of the following code in the company scenario?",
        a: "Employee is working",
        b: "Compilation error",
        c: "Employee is managing the team",
        d: "Manager is managing the team",
        correct: "d",
        code: `class Employee {
    public void work() {
        System.out.println("Employee is working");
    }
}
class Manager extends Employee {
    @Override
    public void work() {
        System.out.println("Manager is managing the team");
    }
}
public class Main {
    public static void main(String[] args) {
        Employee employee = new Manager(); // Polymorphism: Parent reference, child object
        employee.work();
    }
}`,
        explanation: "The code demonstrates polymorphism by calling the work method of the Manager class through a reference to the Employee class."
    },
    { // code problem 6
        question: "What is the output of the following code about the media player scenario?",
        a: "Playing media",
        b: "Playing audio file",
        c: "Playing audio file Playing video file",
        d: "Playing media Playing media",
        correct: "c",
        code: `class Media {
    public void play() {
        System.out.println("Playing media");
    }
}
class Audio extends Media {
    @Override
    public void play() {
        System.out.println("Playing audio file");
    }
}
class Video extends Media {
    @Override
    public void play() {
        System.out.println("Playing video file");
    }
}
public class Main {
    public static void main(String[] args) {
        Media media1 = new Audio();  // Polymorphism: Parent reference, Audio object
        Media media2 = new Video();  // Polymorphism: Parent reference, Video object
        
        media1.play();
        media2.play();
    }
}`,
        explanation: "The code demonstrates polymorphism by calling the play method of the Audio and Video classes through references to the Media class."
    },
    { // quetion problem 1
        question: "Which feature of polymorphism allows an interface to be implemented in multiple ways?",
        a: "Method overloading",
        b: "Method overriding",
        c: "Dynamic method dispatch",
        d: "Both B and C",
        correct: "d",
        explanation: "Method overriding and dynamic method dispatch allow interfaces to be implemented in multiple ways, providing flexibility and code reusability in Java."
    },
    { // quetion problem 2
        question: "Which of the following statements is true about method overloading?",
        a: "It is possible only if the return type differs.",
        b: "It depends on different method names.",
        c: "It only applies to static methods.",
        d: "Runtime error",
        correct: "c",
        explanation: "Method overloading allows multiple methods with the same name but different parameters to be defined in the same class, including static methods."
    },
    { // quetion problem 3
        question: "What is the primary advantage of dynamic polymorphism?",
        a: "It allows code execution to be determined at compile time.",
        b: "It increases memory consumption.",
        c: "It enables flexibility by allowing method calls to be resolved at runtime.",
        d: "It prevents subclasses from modifying parent class behavior.",
        correct: "c",
        explanation: "Dynamic polymorphism enables flexibility by allowing method calls to be resolved at runtime based on the actual object type, promoting dynamic behavior and code reusability."
    },
    { // quetion problem 4
        question: "What is the main advantage of polymorphism?",
        a: "Reduces the need for multiple classes",
        b: "Improves performance",
        c: "Allows for code that works with multiple data types in a uniform way",
        d: "Increases code complexity",
        correct: "c",
        explanation: "Polymorphism allows code to work with multiple data types in a uniform way, promoting flexibility and code reusability."
    },
    { // quetion problem 5
        question: "What happens if two overloaded methods have the same parameters but different return types?",
        a: "Compilation error",
        b: "The method with the larger return type is chosen",
        c: "Runtime error",
        d: "The method with the smaller return type is chosen",
        correct: "a",
        explanation: "Overloaded methods must have different parameter lists, including the return type, to avoid compilation errors."
    },
    { // quetion problem 6
        question: "Which of the following best describes how polymorphism works in Java?",
        a: "It allows a subclass to modify private fields of a superclass",
        b: "It forces all subclasses to have the same",
        c: "It prevents method overriding",
        d: "It enables different classes to share a common interface while having unique behaviors ",
        correct: "d",
        explanation: "Polymorphism allows different classes to share a common interface while providing unique implementations, promoting code reusability and flexibility."
    },
    { // quetion problem 7
        question: "Which of the following statements about method overloading is true?",
        a: "Method overloading is determined at runtime",
        b: "Overloaded methods must have different parameter lists ",
        c: "Overloaded methods must have the same return type",
        d: "Overloaded methods must belong to different classes",
        correct: "b",
        explanation: "Method overloading allows multiple methods with the same name but different parameters to be defined in the same class, promoting code reusability and flexibility."
    },
    { // quetion problem 8
        question: "Which of the following can be overloaded in Java?",
        a: "Constructors",
        b: "Methods",
        c: "Operators (partially, for built-in classes)",
        d: "All of the above",
        correct: "d",
        explanation: "Constructors, methods, and operators can be overloaded in Java, allowing for flexibility and code reusability in object-oriented programming."
    },
    { // quetion problem 9
        question: "What is required for method overriding to occur?",
        a: "The method must have a different return type",
        b: "The method name must be different",
        c: "The method in the child class must have the same name and parameter list as the parent class method",
        d: "The method in the child class must be private",
        correct: "c",
        explanation: "Method overriding occurs when a subclass provides a specific implementation of a method defined in its parent class, using the same method name and parameter list."
    },
    { // quetion problem 10
        question: "How does polymorphism improve reusability?",
        a: "It prevents code from being used in multiple places",
        b: "A single method can work for different object types ",
        c: "It forces developers to write separate code for each type of object",
        d: "It makes code more difficult to extend",
        correct: "b",
        explanation: "Polymorphism allows a single method to work for different object types, promoting code reusability and reducing redundancy."
    },
    { // quetion problem 11
        question: "How does polymorphism support dynamic behavior?",
        a: "It ensures that all methods are executed at compile time",
        b: "It forces all method calls to be statically bound",
        c: "The method that gets executed is determined at runtime based on the object type",
        d: "It makes method calls slower",
        correct: "c",
        explanation: "Polymorphism allows the method that gets executed to be determined at runtime based on the actual object type, promoting dynamic behavior and flexibility."
    },
    { // quetion problem 12
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
}`,
        explanation: "The code demonstrates polymorphism by calling the display method of the Child class through a reference to the Parent class."
    },
    
];