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
        question: "Who developed Java, and in what year?",
        a: "Dennis Ritchie, 1985",
        b: "James Gosling, 1991",
        c: "Bjarne Stroustrup, 1983",
        d: "Guido van Rossum, 1990",
        correct: "b",
        explanation: "Java was developed by James Gosling at Sun Microsystems in 1991."
    },
    {
        question: "Why is Java called 'Java'?",
        a: "It is a technical acronym for 'Just Another Virtual Application.'",
        b: "Named after the island Java where it was created.",
        c: "Named after a coffee bean that inspired its creator.",
        d: "It was an arbitrary name chosen randomly.",
        correct: "c",
        explanation: "Java was named after the coffee bean by its creators."
    },
    {
        question: "What is Java's primary feature that allows it to run on any platform?",
        a: "Its simplicity",
        b: "The JVM and bytecode",
        c: "Its security features",
        d: "Its use of pointers",
        correct: "b",
        explanation: "Java's JVM and bytecode allow it to run on any platform without recompilation."
    },
    {
        question: "Which feature of Java makes it simpler compared to other languages like C++?",
        a: "Use of pointers",
        b: "Complex syntax",
        c: "Elimination of complex features",
        d: "Incompatibility with C or C++",
        correct: "c",
        explanation: "Java eliminates complex features like pointers, operator overloading, and multiple inheritance."
    },
    {
        question: "What makes Java secure?",
        a: "Use of pointers for memory access",
        b: "Absence of pointers and boundary checks for arrays",
        c: "Open access to memory locations",
        d: "No compilation of code",
        correct: "b",
        explanation: "Java is secure due to the absence of pointers and boundary checks for arrays."
    },
    {
        question: "Which of these is NOT a feature of Java?",
        a: "Platform Independence",
        b: "Robustness",
        c: "High Performance",
        d: "Dependency on OS-specific compilers",
        correct: "d",
        explanation: "Java is platform-independent and does not depend on OS-specific compilers."
    },
    {
        question: "Which of the following is NOT a Java use case?",
        a: "Web applications",
        b: "Mobile applications",
        c: "Operating system development",
        d: "Internet of Things applications",
        correct: "c",
        explanation: "Java is not typically used for operating system development."
    },
    {
        question: "What is the starting point of any Java program?",
        a: "The System class",
        b: "The public keyword",
        c: "The main method",
        d: "The package declaration",
        correct: "c",
        explanation: "The main method is the starting point of any Java program."
    },
    {
        question: "What is the correct way to write a single-line comment in Java?",
        a: "# This is a comment",
        b: "// This is a comment",
        c: "<!-- This is a comment -->",
        d: "/* This is a comment */",
        correct: "b",
        explanation: "Single-line comments in Java are written using two forward slashes."
    },
    {
        question: "Which of the following is NOT a primitive data type in Java?",
        a: "int",
        b: "double",
        c: "String",
        d: "boolean",
        correct: "c",
        explanation: "String is a reference data type, not a primitive data type in Java."
    },
    {
        question: "Which operator is used for addition in Java?",
        a: "*",
        b: "+",
        c: "/",
        d: "=",
        correct: "b",
        explanation: "The + operator is used for addition in Java."
    },
    {
        question: "What is the purpose of package declarations in Java?",
        a: "To create comments",
        b: "To organize code into folders",
        c: "To store primitive data types",
        d: "To write the main method",
        correct: "b",
        explanation: "Package declarations in Java are used to organize code into folders."
    },
    {
        question: "Which keyword is used to include pre-made code or libraries in Java?",
        a: "package",
        b: "import",
        c: "include",
        d: "namespace",
        correct: "b",
        explanation: "The import keyword is used to include pre-made code or libraries in Java."
    },
    {
        question: "Which principle of OOP allows a child class to reuse code from a parent class?",
        a: "Polymorphism",
        b: "Abstraction",
        c: "Encapsulation",
        d: "Inheritance",
        correct: "d",
        explanation: "Inheritance allows a child class to reuse code from a parent class."
    },
    {
        question: "Which of these describes polymorphism in Java?",
        a: "Bundling data and methods into a single unit",
        b: "Hiding unnecessary details",
        c: "One action behaving differently depending on the object",
        d: "Allowing secure access to private variables",
        correct: "c",
        explanation: "Polymorphism in Java allows one action to behave differently depending on the object."
    },
    {
        question: "What is a class in Java?",
        a: "A variable type",
        b: "A blueprint for creating objects",
        c: "A method that initializes variables",
        d: "A reserved keyword",
        correct: "b",
        explanation: "A class in Java is a blueprint for creating objects."
    },
    {
        question: "What are instance variables in a class?",
        a: "Variables shared by all objects of a class",
        b: "Variables declared inside a method",
        c: "Variables declared inside a class, and each object has its own copy",
        d: "Constants defined in a class",
        correct: "c",
        explanation: "Instance variables are declared inside a class, and each object has its own copy."
    },
    {
        question: "Which of the following is NOT true about methods in Java?",
        a: "Methods perform actions or computations.",
        b: "Methods can access and modify instance variables.",
        c: "Methods cannot take parameters.",
        d: "Methods are defined inside a class.",
        correct: "c",
        explanation: "Methods in Java can take parameters and perform actions or computations."
    },
    {
        question: "What is the purpose of a constructor in Java?",
        a: "To declare variables in a class",
        b: "To perform computations",
        c: "To initialize objects when they are created",
        d: "To define the blueprint of an object",
        correct: "c",
        explanation: "Constructors in Java are used to initialize objects when they are created."
    },
    {
        question: "Which statement is correct regarding the default constructor in Java?",
        a: "It must be explicitly declared in every class.",
        b: "It sets default values for instance variables.",
        c: "It always accepts parameters.",
        d: "It is required to create objects.",
        correct: "b",
        explanation: "The default constructor in Java sets default values for instance variables."
    },
    {
        question: "What keyword is used to create an instance of a class?",
        a: "new",
        b: "this",
        c: "static",
        d: "instanceOf",
        correct: "a",
        explanation: "The new keyword is used to create an instance of a class in Java."
    },
    {
        question: "What does the 'this' keyword refer to in Java?",
        a: "The current class",
        b: "The superclass of the current object",
        c: "The current object instance",
        d: "A reserved keyword for memory allocation",
        correct: "c",
        explanation: "The 'this' keyword refers to the current object instance in Java."
    },
    {
        question: "Which of the following is an example of a parameterized constructor?",
        a: `public Student() {  
    name = "John";  
    age = 20;  
}`, 
        b: `public Student(String name, int age) {  
    this.name = name;  
    this.age = age;  
}`, 
        c: `public Student(String name) {  
    this.name = "Default";  
}`, 
        d: "All of the above",
        correct: "b",
        explanation: "A parameterized constructor takes parameters to initialize object properties."
    },
    {
        question: "What will the following code do?",
        a: "It creates an object of the Student class.",
        b: "It creates a reference to a Student object but does not allocate memory.",
        c: "It creates a blueprint of the Student class.",
        d: "It throws a compilation error if the Student class has no constructor.",
        correct: "a",
        explanation: "The code creates an object of the Student class.",
        code: `
Student student1 = new Student();`
    },
    {
        question: "What is the purpose of the following getAcademicStatus() method in the Student class?",
        a: "To update the student's GPA.",
        b: "To calculate and return the student's academic standing based on the GPA.",
        c: "To display the student's name.",
        d: "To check if the student has passed all subjects.",
        correct: "b",
        explanation: "The getAcademicStatus() method calculates and returns the student's academic standing based on the GPA.",
        code: `
public class Student {
    private double gpa;

    // Method to calculate academic standing
    public String getAcademicStatus() {
        if (gpa >= 3.5) {
            return "Dean's List";
        } else if (gpa >= 3.0) {
            return "Honors";
        } else if (gpa >= 2.0) {
            return "Good Standing";
        } else {
            return "Probation";
        }
    }

    // Method with parameters
    public void updateGPA(double newGPA) {
        this.gpa = newGPA;
    }
}`
    },
    {
        question: "What is the primary purpose of Java Class Libraries?",
        a: "To replace built-in classes",
        b: "To provide a wide range of pre-written classes and methods",
        c: "To create new data types",
        d: "To make Java slower",
        correct: "b",
        explanation: "Java Class Libraries provide a wide range of pre-written classes and methods for developers to use."
    },
    {
        question: "Which class is used for handling text in Java?",
        a: "Scanner",
        b: "ArrayList",
        c: "Math",
        d: "String",
        correct: "d",
        explanation: "The String class is used for handling text in Java."
    },
    {
        question: "What method can you use to read a string input from the user using the Scanner class?",
        a: "nextInt()",
        b: "nextDouble()",
        c: "nextLine()",
        d: "next()",
        correct: "c",
        explanation: "The nextLine() method reads a string input from the user using the Scanner class."
    },
    {
        question: "Which of the following is NOT a method of the Math class?",
        a: "Math.pow()",
        b: "Math.random()",
        c: "Math.sqrt()",
        d: "Math.add()",
        correct: "d",
        explanation: "The Math class does not have a method named Math.add()."
    },
    {
        question: "What does the size() method of the ArrayList class return?",
        a: "The current capacity of the list",
        b: "The number of elements in the list",
        c: "The first element in the list",
        d: "The last element in the list",
        correct: "b",
        explanation: "The size() method of the ArrayList class returns the number of elements in the list."
    },
    {
        question: "Which of the following examples correctly uses the Math class?",
        a: "int sum = Math.add(5, 10);",
        b: "double result = Math.pow(2, 3);",
        c: "String text = Math.concat('Hello', 'World');",
        d: "int random = Math.input();",
        correct: "b",
        explanation: "The Math class is used for mathematical operations like pow() to calculate powers."
    },
    {
        question: "Which statement about the String class is true?",
        a: "It can store numbers only.",
        b: "It is used for file handling.",
        c: "It provides methods for manipulating text.",
        d: "It is part of the Collections Framework.",
        correct: "c",
        explanation: "The String class provides methods for manipulating text in Java."
    },
    {
        question: "What is the purpose of the close() method in the Scanner class?",
        a: "To stop user input",
        b: "To release resources used by the Scanner",
        c: "To reset the Scanner object",
        d: "To add new input to the Scanner",
        correct: "b",
        explanation: "The close() method in the Scanner class releases resources used by the Scanner object."
    },
    {
        question: "What does the following code print?",
        a: "hello, java!",
        b: "HELLO, JAVA!",
        c: "Hello, Java!",
        d: "Error",
        correct: "b",
        explanation: "The toUpperCase() method converts the string to uppercase.",
        code: `
String text = "Hello, Java!";
System.out.println(text.toUpperCase());`
    },
    {
        question: "Which built-in class is part of the Java Collections Framework?",
        a: "Scanner",
        b: "ArrayList",
        c: "Math",
        d: "String",
        correct: "b",
        explanation: "The ArrayList class is part of the Java Collections Framework."
    },
    {
        question: "What does the get() method of the ArrayList class do?",
        a: "Adds a new element to the list",
        b: "Removes an element from the list",
        c: "Retrieves an element at a specific index",
        d: "Clears all elements from the list",
        correct: "c",
        explanation: "The get() method of the ArrayList class retrieves an element at a specific index."
    },
    {
        question: "What is an ArrayList in Java?",
        a: "A static array with a fixed size",
        b: "A dynamic array that can grow and shrink",
        c: "A two-dimensional array",
        d: "A collection of characters",
        correct: "b",
        explanation: "An ArrayList in Java is a dynamic array that can grow and shrink in size."
    },
    {
        question: "What is the correct syntax for importing the Scanner class?",
        a: "include java.util.Scanner;",
        b: "import Scanner;",
        c: "import java.util.Scanner;",
        d: "Scanner java.util;",
        correct: "c",
        explanation: "The correct syntax for importing the Scanner class is import java.util.Scanner;."
    }
];