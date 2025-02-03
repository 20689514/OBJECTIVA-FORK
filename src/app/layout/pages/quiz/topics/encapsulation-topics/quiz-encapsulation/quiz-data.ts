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
            question: "What does encapsulation mean in Java?",
            a: "Combining data and methods into a single unit.",
            b: "Separating data from methods.",
            c: "Accessing private data directly.",
            d: "Hiding methods from other classes.",
            correct: "a",
            explanation: "Encapsulation is the bundling of data and methods that operate on the data into a single unit. It is used to hide the internal state of an object and restrict access to the object's data."
        },
        {
            question: "Which of the following is NOT a benefit of encapsulation?",
            a: "Security",
            b: "Flexibility",
            c: "Code complexity",
            d: "Maintainability",
            correct: "c",
            explanation: "Encapsulation helps improve security, flexibility, and maintainability by hiding the internal state of an object. It does not increase code complexity."
        },
        {
            question: "What is data hiding in encapsulation?",
            a: "Making data public for easy access.",
            b: "Protecting data by making it private.",
            c: "Deleting unused data.",
            d: "Storing data in external files.",
            correct: "b",
            explanation: "Data hiding is the process of making data private to prevent direct access from outside the class. This helps protect the data and ensures that it can only be accessed through the class's methods."
        },
        {
            question: "Which of these is an example of encapsulation?",
            a: "A bank account with private balance and public methods.",
            b: "A method that prints data directly.",
            c: "A program with only global variables.",
            d: "A class with only public attributes.",
            correct: "a",
            explanation: "A bank account with a private balance and public methods to deposit and withdraw money is an example of encapsulation. The private balance is hidden from direct access and can only be modified through the public methods."
        },
        {
            question: "Which access modifier restricts access to within the same class only?",
            a: "Public",
            b: "Protected",
            c: "Private",
            d: "Default",
            correct: "c",
            explanation: "The private access modifier restricts access to within the same class only. It is used to hide the internal state of an object and prevent direct access to its data."
        },
        {
            question: "What is the purpose of getters in Java?",
            a: "To directly access private variables.",
            b: "To set values for private variables.",
            c: "To retrieve values of private variables.",
            d: "To delete private variables.",
            correct: "c",
            explanation: "Getters are methods used to retrieve the values of private variables. They provide controlled access to the private data of an object."
        },
        {
            question: "Which access modifier allows access within the same package and subclasses?",
            a: "Private",
            b: "Default",
            c: "Public",
            d: "Protected",
            correct: "d",
            explanation: "The protected access modifier allows access within the same package and subclasses. It provides more visibility than private but less than public."
        },
        {
            question: "Why should we validate input in setters?",
            a: "To improve runtime speed.",
            b: "To ensure data integrity.",
            c: "To avoid writing getters.",
            d: "To bypass encapsulation.",
            correct: "b",
            explanation: "Validating input in setters helps ensure data integrity by checking the input before setting the value of a variable. It helps maintain the object's state and prevents invalid data from being stored."
        },
        {
            question: "What is the main purpose of encapsulation?",
            a: "To increase program size.",
            b: "To group unrelated classes.",
            c: "To protect and organize data.",
            d: "To simplify algorithms.",
            correct: "c",
            explanation: "The main purpose of encapsulation is to protect and organize data by bundling it with the methods that operate on the data. It helps maintain the integrity of an object and restricts access to its data."
        },
        {
            question: "Which of the following is NOT a real-world example of encapsulation?",
            a: "ATM system hiding hardware details.",
            b: "Bank account with private balance.",
            c: "Public variables shared globally.",
            d: "Mobile phone with hidden components.",
            correct: "c",
            explanation: "A bank account with a private balance, an ATM system hiding hardware details, and a mobile phone with hidden components are real-world examples of encapsulation. Public variables shared globally do not demonstrate encapsulation as they are not hidden or protected."
        },
        {
            question: "What does 'private' keyword in Java signify?",
            a: "Variable can be accessed by all classes.",
            b: "Variable can be accessed only within the class.",
            c: "Variable can be accessed by subclasses only.",
            d: "Variable can be accessed within the package.",
            correct: "b",
            explanation: "The 'private' keyword in Java signifies that a variable can be accessed only within the class where it is declared. It is used to hide the internal state of an object and prevent direct access to its data."
        },
        {
            question: "Which access modifier provides the most restricted access?",
            a: "Public",
            b: "Protected",
            c: "Private",
            d: "Default",
            correct: "c",
            explanation: "The private access modifier provides the most restricted access by limiting access to within the same class only. It is used to hide the internal state of an object and protect its data." 
        },
        {
            question: "What does a setter method typically do?",
            a: "Retrieve the value of a variable.",
            b: "Modify the value of a private variable.",
            c: "Delete a variable.",
            d: "Access a protected method.",
            correct: "b",
            explanation: "A setter method is used to modify the value of a private variable. It provides controlled access to the private data of an object and helps maintain the object's state."
        },
        {
            question: "Why is encapsulation important for reusability?",
            a: "It hides unrelated classes.",
            b: "It ensures code is independent of internal changes.",
            c: "It merges all methods into a single function.",
            d: "It provides global variables.",
            correct: "b",
            explanation: "Encapsulation is important for reusability because it ensures that code is independent of internal changes. By hiding the internal state of an object, encapsulation allows objects to be used without knowing how they are implemented."
        },
        {
            question: "What is the default access modifier in Java?",
            a: "Private",
            b: "Public",
            c: "Protected",
            d: "Default (package-private)",
            correct: "d",
            explanation: "The default access modifier in Java is also known as package-private. It allows access within the same package but not outside the package."
        },
        {
            question: "What is the purpose of data validation in encapsulation?",
            a: "To write longer programs.",
            b: "To ensure objects remain in a valid state.",
            c: "To allow unlimited access to variables.",
            d: "To merge unrelated classes.",
            correct: "b",
            explanation: "The purpose of data validation in encapsulation is to ensure that objects remain in a valid state. By validating input in setters, we can prevent invalid data from being stored and maintain the integrity of an object."
        },
        {
            question: "What is a key characteristic of encapsulated classes?",
            a: "Directly accessible public fields.",
            b: "Methods to control data access.",
            c: "Unlimited visibility of variables.",
            d: "Only static methods.",
            correct: "b",
            explanation: "A key characteristic of encapsulated classes is that they have methods to control data access. By using getters and setters, encapsulated classes can provide controlled access to their private data."
        },
        {
            question: "Why should fields in an encapsulated class be private?",
            a: "To restrict unauthorized access.",
            b: "To increase program length.",
            c: "To allow unrestricted access.",
            d: "To make debugging harder.",
            correct: "a",
            explanation: "Fields in an encapsulated class should be private to restrict unauthorized access and prevent direct modification of the object's data. This helps maintain the integrity of the object and ensures that data is accessed through controlled methods."
        },
        {
            question: "Which of the following best describes a 'getter' method?",
            a: "A method to directly access public variables.",
            b: "A method that returns private field values.",
            c: "A method to delete variables.",
            d: "A method to validate user input.",
            correct: "b",
            explanation: "A 'getter' method is used to return the values of private fields in an object. It provides controlled access to the object's data and allows other classes to retrieve the values of private variables."
        },
        {
            question: "What is a real-world analogy of a setter method?",
            a: "Reading a book.",
            b: "Adding money to a bank account.",
            c: "Deleting old files.",
            d: "Viewing a movie.",
            correct: "b",
            explanation: "A real-world analogy of a setter method is adding money to a bank account. Just as a setter method modifies the value of a private variable, adding money to a bank account changes the balance of the account."
        },
        {
            question: "Which access modifier provides unrestricted access?",
            a: "Public",
            b: "Private",
            c: "Protected",
            d: "Default",
            correct: "a",
            explanation: "The public access modifier provides unrestricted access to a class or its members. It allows classes from any package to access the public members of a class."
        },
        {
            question: "What happens if data validation in setters is skipped?",
            a: "Data integrity remains intact.",
            b: "Invalid data may be stored.",
            c: "Objects become immutable.",
            d: "Private variables become public.",
            correct: "b",
            explanation: "If data validation in setters is skipped, invalid data may be stored in the object, leading to data corruption and unexpected behavior. Data validation helps maintain the integrity of an object and ensures that only valid data is stored."
        },
        {
            question: "Why is encapsulation crucial in software design?",
            a: "To eliminate the need for constructors.",
            b: "To manage dependencies effectively.",
            c: "To maintain object integrity and security.",
            d: "To enable public access to all methods.",
            correct: "c",
            explanation: "Encapsulation is crucial in software design to maintain object integrity and security. By hiding the internal state of an object and providing controlled access to its data, encapsulation ensures that the object's state is maintained and data is protected."
        },
        {
            question: "Which method validates input before setting a value?",
            a: "Constructor",
            b: "Getter",
            c: "Setter",
            d: "Destructor",
            correct: "c",
            explanation: "A setter method validates input before setting a value to ensure that the data remains in a valid state. It checks the input and prevents invalid data from being stored in the object."
        },
        {
            question: "What is the Java keyword for creating encapsulated fields?",
            a: "Static",
            b: "Private",
            c: "Global",
            d: "External",
            correct: "b",
            explanation: "The 'private' keyword in Java is used to create encapsulated fields that are hidden from direct access. It is used to protect the internal state of an object and ensure that data is accessed through controlled methods."
        },
        {
            question: "Encapsulation helps in achieving:",
            a: "Data exposure",
            b: "Loose coupling",
            c: "Global visibility",
            d: "Code redundancy",
            correct: "b",
            explanation: "Encapsulation helps in achieving loose coupling by hiding the internal state of an object and providing controlled access to its data. It reduces dependencies between classes and allows objects to interact without knowing the details of each other's implementation."
        },
        {
            question: "Which of these violates encapsulation principles?",
            a: "Using private fields",
            b: "Using getters and setters",
            c: "Using public fields directly",
            d: "Validating input in setters",
            correct: "c",
            explanation: "Using public fields directly violates encapsulation principles as it exposes the internal state of an object and allows direct access to its data. Encapsulation is about hiding the internal state and providing controlled access to the object's data through methods."
        },
        {
            question: "What does encapsulation help prevent?",
            a: "Inheritance",
            b: "Global access to sensitive data",
            c: "Usage of constructors",
            d: "Polymorphism",
            correct: "b",
            explanation: "Encapsulation helps prevent global access to sensitive data by hiding the internal state of an object and providing controlled access to its data. It ensures that data is accessed through methods and prevents unauthorized access to sensitive information."
        },
        {
            question: "What is a Java class designed to follow encapsulation called?",
            a: "Abstract class",
            b: "Encapsulated class",
            c: "Static class",
            d: "Polymorphic class",
            correct: "b",
            explanation: "A Java class designed to follow encapsulation is called an encapsulated class. It encapsulates data and methods into a single unit, hiding the internal state of an object and providing controlled access to its data."
        },
        {
            question: "What is an example of poor encapsulation practice?",
            a: "Validating user input in setters",
            b: "Using meaningful variable names",
            c: "Making all fields public",
            d: "Providing controlled access through methods",
            correct: "c",
            explanation: "Making all fields public is an example of poor encapsulation practice as it exposes the internal state of an object and allows direct access to its data. Encapsulation is about hiding the internal state and providing controlled access through methods."
        },
        {
            question: "Which access modifier is typically used with getters and setters?",
            a: "Public",
            b: "Private",
            c: "Protected",
            d: "Default",
            correct: "a",
            explanation: "Getters and setters are typically declared with the public access modifier to provide controlled access to the private data of an object. The public modifier allows other classes to access the methods that retrieve and modify the object's data."
        },
        {
            question: "What is a valid use of the 'this' keyword in setters?",
            a: "To access global variables.",
            b: "To refer to the current object’s fields.",
            c: "To override public methods.",
            d: "To delete private fields.",
            correct: "b",
            explanation: "The 'this' keyword in setters is used to refer to the current object's fields. It helps distinguish between the object's fields and the method's parameters when setting the value of a variable."
        },
        {
            question: "How does encapsulation improve maintainability?",
            a: "By exposing internal logic.",
            b: "By centralizing data access.",
            c: "By eliminating constructors.",
            d: "By increasing code complexity.",
            correct: "b",
            explanation: "Encapsulation improves maintainability by centralizing data access and providing controlled access to an object's data through methods. It hides the internal state of an object and ensures that data is accessed and modified through controlled methods."
        },
        {
            question: "What is a common naming convention for getters in Java?",
            a: "fetch[Property]()",
            b: "retrieve[Property]()",
            c: "get[Property]()",
            d: "access[Property]()",
            correct: "c",
            explanation: "A common naming convention for getters in Java is to use the 'get' prefix followed by the property name. For example, a getter method for a 'balance' property would be named 'getBalance()'."
        },
        {
            question: "What principle ensures sensitive data is only accessed via methods?",
            a: "Inheritance",
            b: "Encapsulation",
            c: "Polymorphism",
            d: "Abstraction",
            correct: "b",
            explanation: "Encapsulation is the principle that ensures sensitive data is only accessed via methods. It hides the internal state of an object and provides controlled access to its data, preventing direct access to sensitive information."
        },
        {
            question: "What is the best practice for making an immutable field?",
            a: "Provide a getter only.",
            b: "Provide a setter only.",
            c: "Use public variables.",
            d: "Use global modifiers.",
            correct: "a",
            explanation: "The best practice for making an immutable field is to provide a getter only. By not providing a setter, the field cannot be modified once it is set, making it immutable."
        },
        {
            question: "What is encapsulation compared to in real life?",
            a: "An open book",
            b: "A bank vault",
            c: "A broken lock",
            d: "An exposed wire",
            correct: "b",
            explanation: "Encapsulation is compared to a bank vault in real life. Just as a bank vault protects valuable items from unauthorized access, encapsulation protects an object's data from direct access and ensures that it can only be accessed through controlled methods."
        }
    
];