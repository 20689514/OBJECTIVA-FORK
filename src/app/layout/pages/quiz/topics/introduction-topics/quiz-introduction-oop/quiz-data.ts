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
        question: "What is programming?",
        a: "Designing computer hardware",
        b: "Writing instructions for a computer to follow",
        c: "Solving mathematical equations",
        d: "Drawing flowcharts",
        correct: "b"
    },
    {
        question: "Which of the following is a correct definition of a programming paradigm?",
        a: "A set of programming languages",
        b: "A way of organizing and solving problems using programming languages",
        c: "A type of operating system",
        d: "A library of functions",
        correct: "b"
    },
    {
        question: "Which programming paradigm is based on the concept of objects containing data and code?",
        a: "Procedural Programming",
        b: "Functional Programming",
        c: "Object-Oriented Programming",
        d: "Declarative Programming",
        correct: "c"
    },
    {
        question: "Which of the following is a key benefit of using Object-Oriented Programming?",
        a: "Reduced need for comments in code",
        b: "Better organization by grouping related data and behaviors",
        c: "Faster execution of code",
        d: "Simplified control flow",
        correct: "b"
    },
    {
        question: "What is the purpose of creating a class in Object-Oriented Programming?",
        a: "To define a blueprint for objects",
        b: "To store variables",
        c: "To run algorithms",
        d: "To delete objects",
        correct: "a"
    },
    {
        question: "Which of the following is an example of object-oriented programming in real life?",
        a: "A car object that has attributes like color and model and methods like start and accelerate",
        b: "A loop that calculates a factorial",
        c: "A variable storing a number",
        d: "A function that adds two numbers",
        correct: "a"
    },
    {
        question: "Which of the following programming languages was the first to introduce object-oriented concepts?",
        a: "Java",
        b: "Python",
        c: "Simula",
        d: "C++",
        correct: "c"
    },
    {
        question: "Which of the following is NOT a benefit of Object-Oriented Programming?",
        a: "Improved code organization",
        b: "Enhanced testing capabilities",
        c: "Elimination of all bugs in the software",
        d: "Code reusability",
        correct: "b"
    },
    {
        question: "What is an object in programming?",
        a: "A set of instructions for a program to follow",
        b: "A blueprint for creating classes",
        c: "A specific instance of a class",
        d: "A type of programming paradigm",
        correct: "c",
    },
    {
        question: "What is a class in programming?",
        a: "A set of data specific to an object",
        b: "A blueprint or template for creating objects",
        c: "A function that defines the behavior of an object",
        d: "A data field in a program",
        correct: "b",
    },
    {
        question: "What are attributes in an object?",
        a: "Actions the object can perform",
        b: "Data fields that define characteristics of the object",
        c: "A set of instructions for creating an object",
        d: "Relationships between different objects",
        correct: "b",
    },
    {
        question: "If a class is a blueprint for a motorcycle, which of the following would be an example of an object of the motorcycle class?",
        a: "A blueprint for building a motorcycle",
        b: "A specific motorcycle like a Honda CB400 with a 400cc engine",
        c: "A set of behaviors such as starting and accelerating",
        d: "The template used to define attributes like color and brand",
        correct: "b",
    },
    {
        question: "What does the new keyword do when creating an object from a class?",
        a: "It defines the class.",
        b: "It assigns values to the attributes of an object.",
        c: "It creates a specific instance (object) of a class.",
        d: "It modifies the methods of the class.",
        correct: "c",
    },
    {
        question: "Given a class Motorcycle, which of the following is an example of an object?",
        a: "The method accelerate() inside the Motorcycle class",
        b: "A new instance like hondaCB400 created from the Motorcycle class",
        c: "The engine displacement of a motorcycle",
        d: "The Motorcycle class itself",
        correct: "b"
    },
    {
        question: "Given the following code, what is the output?",
        a: "Error: The class does not have a main method",
        b: "Toyota - 2020",
        c: "Car - 2020",
        d: "Toyota",
        correct: "b",
        code: `class Car {
    String brand;
    int year;

    Car(String brand, int year) {
        this.brand = brand;
        this.year = year;
    }

    void displayInfo() {
        System.out.println(brand + " - " + year);
    }
}

public class Main {
    public static void main(String[] args) {
        Car car1 = new Car("Toyota", 2020);
        car1.displayInfo();
    }
}`
    },
    {
        question: "How would you create an object of the Person class below?",
        a: "Person person = new Person('John', 25);",
        b: "Person person = Person('John', 25);",
        c: "Person person = new Person();",
        d: "new Person = Person('John', 25);",
        correct: "a",
        code: `class Person {
    String name;
    int age;

    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
}`
    },
    {
        question: "What will the following code print?",
        a: "Dog",
        b: "This is a Dog",
        c: "Error: type is not initialized",
        d: "This is an animal",
        correct: "b",
        code: `class Animal {
    String type;

    Animal(String type) {
        this.type = type;
    }

    void displayType() {
        System.out.println('This is a ' + type);
    }
}

public class Main {
    public static void main(String[] args) {
        Animal animal1 = new Animal('Dog');
        animal1.displayType();
    }
}`
    },
    {
        question: "How do you create an object from the following Book class?",
        a: "Book book = new Book('Java Programming');",
        b: "Book book = Book('Java Programming');",
        c: "new Book('Java Programming');",
        d: "Book book = new Book;",
        correct: "a",
        code: `class Book {
    String title;

    Book(String title) {
        this.title = title;
    }
}`
    },
    {
        question: "What does the following code output?",
        a: "John says hello!",
        b: "Hello!",
        c: "Error: name is not defined",
        d: "John",
        correct: "a",
        code: `class Person {
    String name;

    Person(String name) {
        this.name = name;
    }

    void sayHello() {
        System.out.println(name + ' says hello!');
    }
}

public class Main {
    public static void main(String[] args) {
        Person person1 = new Person('John');
        person1.sayHello();
    }
}`
    },
    {
        question: "What is the first step in designing a system or application?",
        a: "Writing the main method",
        b: "Identifying objects from requirements",
        c: "Creating constructors for classes",
        d: "Writing pseudocode",
        correct: "b",
    },
    {
        question: "In the context of Object-Oriented Programming, what is an object?",
        a: "A single data type",
        b: "An instance of a class",
        c: "A Java method",
        d: "A static variable",
        correct: "b",
    },
    {
        question: "When designing a system for a library, which of the following could be considered as potential objects?",
        a: "Borrowing rules and fines",
        b: "Book, Member, Staff",
        c: "Library catalog",
        d: "None of the above",
        correct: "b"
    },
    {
        question: "What are attributes in an object?",
        a: "Behaviors or methods of the object",
        b: "Classes that inherit from a superclass",
        c: "Characteristics or data describing the object",
        d: "Static fields in the class",
        correct: "c",
    },
    {
        question: "In a school system, which of the following would likely be identified as an object?",
        a: "The lesson schedule",
        b: "Teachers, Students, Classes",
        c: "The school building's location",
        d: "None of the above",
        correct: "b"
    },
    {
        question: "Which of the following is NOT an attribute of a Student object?",
        a: "name",
        b: "age",
        c: "grades",
        d: "teach",
        correct: "d",
    },
    {
        question: "What is the purpose of a constructor in a class?",
        a: "To create static methods",
        b: "To initialize the attributes of an object",
        c: "To call instance methods",
        d: "To define object relationships",
        correct: "b",
    },
    {
        question: "Which relationship in Object-Oriented Programming describes objects that work together but do not own each other?",
        a: "Inheritance",
        b: "Composition",
        c: "Association",
        d: "Encapsulation",
        correct: "c",
    },
    {
        question: "In the following code snippet, which of these is an example of a behavior?",
        a: "String name",
        b: "String subject",
        c: "teach()",
        d: "Teacher",
        correct: "c",
        code: `public class Teacher {
    String name;
    String subject;

    public void teach() {
        System.out.println(name + " is teaching " + subject);
    }
}`
    },
    {
        question: "What does the main method do?",
        a: "It defines attributes of objects.",
        b: "It initializes objects and calls their behaviors.",
        c: "It defines constructors.",
        d: "It manages static relationships between objects.",
        correct: "b"
    },
    {
        question: "What is the primary way objects interact in object-oriented programming?",
        a: "By sharing methods",
        b: "By creating new objects",
        c: "By calling methods or passing data between them",
        d: "By inheriting from the same class",
        correct: "c",
    },
    {
        question: "What is an example of an object relationship?",
        a: "A method call between objects",
        b: "A Car object interacting with an Engine object",
        c: "A Driver object interacting with a Car object",
        d: "Sharing attributes between objects",
        correct: "c",
    },
    {
        question: "How do you define object communication in Java?",
        a: "Objects are created and destroyed dynamically",
        b: "Objects interact via method calls or sharing data",
        c: "Objects communicate by inheriting methods",
        d: "Objects share the same constructor",
        correct: "b",
    },
    {
        question: "What happens when the start method in the Car class is called?",
        a: "The car’s engine starts automatically",
        b: "The car's isStarted attribute is set to true",
        c: "A new car object is created",
        d: "The car's speed is set to 100 mph",
        correct: "b",
    },
    {
        question: "Why is it possible to create multiple objects of the same class in Java?",
        a: "Because classes are reusable blueprints",
        b: "Because constructors can return multiple objects",
        c: "Because objects share the same attributes",
        d: "Because objects inherit the class’s behavior",
        correct: "a",
    },
];