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
    question: "What is the primary goal of abstraction in programming?",
    a: "To write code faster",
    b: "To hide implementation details and show only essential functionality",
    c: "To make all code visible to the user",
    d: "To enhance the aesthetics of the code",
    correct: "b",
    explanation: "Abstraction simplifies complex systems by hiding implementation details and exposing only the necessary functionality. This makes it easier to work with objects and reduces dependencies on specific implementations."
  },
    {
      question: 'Which of the following best describes high-level abstraction?',
      a: 'Deals with the "what" of the system, focusing on user interaction and system behavior',
      b: 'Focuses on the "how," detailing specific implementations like code and algorithms',
      c: 'Manages system components and their responsibilities',
      d: 'Defines private attributes for a class',
      correct: 'a',
      explanation: 'High-level abstraction defines broad system behavior and user interaction without focusing on specific implementations. It is more about describing the system’s purpose rather than the inner workings.'
    },
    {
      question: 'Which programming construct typically represents high-level abstraction?',
      a: 'Interfaces',
      b: 'Concrete classes',
      c: 'Abstract methods only',
      d: 'Algorithms',
      correct: 'a',
      explanation: "Interfaces define what a class must do without specifying how. They provide a high level of abstraction by outlining behaviors without dictating implementation."
    },
    {
      question: 'What does mid-level abstraction typically involve?',
      a: 'Interfaces that define what actions can be performed',
      b: 'Concrete classes that provide full implementations',
      c: 'Abstract classes with a mix of abstract and concrete methods',
      d: 'High-level user interfaces',
      correct: 'c',
      explanation: "Mid-level abstraction is often represented by abstract classes, which contain both abstract methods (unimplemented) and concrete methods (implemented). This balances flexibility with some predefined behavior."
    },
    {
      question: 'Which example demonstrates low-level abstraction?',
      a: 'A Dog class implementing the makeSound() method',
      b: 'An interface defining methods like draw() and area()',
      c: 'An abstract class with the breathe() method defined',
      d: 'A program\'s graphical user interface',
      correct: 'a',
      explanation: "Low-level abstraction deals with concrete implementations. A Dog class implementing makeSound() provides a direct and detailed implementation, making it a lower level of abstraction."
    },
    {
      question: 'What level of abstraction does the Animal class represent?',
      code: `
  abstract class Animal {
    abstract void makeSound();
    void breathe() {
      System.out.println("Breathing...");
    }
  }`,
      a: 'High-Level',
      b: 'Mid-Level',
      c: 'Low-Level',
      d: 'None of the above',
      correct: 'b',
      explanation: "The Animal class is an abstract class containing both abstract and concrete methods. This represents a mid-level abstraction since it provides a base structure while allowing subclasses to define specific behaviors."
    },
    {
      question: 'Which of the following is NOT a benefit of abstraction?',
      a: 'Simplifies complexity',
      b: 'Enhances reusability',
      c: 'Makes code execution faster',
      d: 'Improves maintainability',
      correct: 'c',
      explanation: "Abstraction helps with code organization, maintainability, and reusability, but it does not directly improve execution speed."
    },
    {
      question: 'What is an example of abstraction in real life?',
      a: 'Opening a car hood to repair the engine',
      b: 'Typing a message and sending it without knowing how it\'s delivered',
      c: 'Cooking by following a detailed recipe',
      d: 'Manually calculating a sum instead of using a calculator',
      correct: 'b',
      explanation: "When you send a message, you don’t need to understand the internal processes of how it is transmitted. This is an example of abstraction—hiding complex details while exposing a simple interface."
    },
    {
      question: 'Why are abstract classes preferred for mid-level abstraction?',
      a: 'They can include both abstract and concrete methods',
      b: 'They hide all implementation details',
      c: 'They enforce a specific coding style',
      d: 'They are faster to compile',
      correct: 'a',
      explanation: "Abstract classes allow for a mix of abstract and concrete methods, making them ideal for mid-level abstraction where some functionality is defined while others are left for subclasses."
    },
    {
      question: 'How does abstraction encourage modularity?',
      a: 'By allowing only a single object to exist',
      b: 'By breaking down systems into independent, manageable components',
      c: 'By enforcing strict coding rules',
      d: 'By restricting the use of concrete classes',
      correct: 'b',
      explanation: "Abstraction allows large systems to be divided into smaller, independent modules, making them easier to develop, test, and maintain."
    },
    {
      question: "What is the main purpose of an abstract class in Java?",
      a: "To create objects.",
      b: "To serve as a blueprint for other classes.",
      c: "To store constant values.",
      d: "To replace interfaces.",
      correct: "b",
      explanation: "Abstract classes act as blueprints for other classes, defining common behavior but not allowing direct instantiation."
    },
    {
      question: "Which keyword is used to declare an abstract class in Java?",
      a: "static",
      b: "final",
      c: "abstract",
      d: "public",
      correct: "c",
      explanation: "The 'abstract' keyword is used to define an abstract class in Java, indicating that it cannot be instantiated directly."
    },
    {
      question: "What is true about abstract methods?",
      a: "They have a body.",
      b: "They must be implemented in a subclass.",
      c: "They cannot exist in an abstract class.",
      d: "They are optional to override in subclasses.",
      correct: "b",
      explanation: "Abstract methods do not have a body and must be implemented by subclasses of an abstract class."
    },
    {
      question: "Can you create an object directly from an abstract class?",
      a: "Yes, using the new keyword.",
      b: "No, abstract classes cannot be instantiated.",
      c: "Yes, but only with special methods.",
      d: "No, unless it contains only concrete methods.",
      correct: "b",
      explanation: "Abstract classes cannot be instantiated directly; they require a subclass that implements all abstract methods."
    },
    {
      question: "What type of method is eat() in the following code?",
      code: `
    abstract class Animal {
      abstract void makeSound();
      void eat() {
        System.out.println("This animal eats food.");
      }
    }`,
      a: "Abstract method",
      b: "Concrete method",
      c: "Static method",
      d: "Final method",
      correct: "b",
      explanation: "The eat() method has a body and provides an implementation, making it a concrete method."
    },
    {
      question: "In the following code, what will myDog.makeSound() output?",
      code: `
    class Dog extends Animal {
      void makeSound() {
        System.out.println("Woof Woof");
      }
    }`,
      a: "Meow Meow",
      b: "Woof Woof",
      c: "This animal eats food.",
      d: "No output, as Animal is abstract.",
      correct: "b",
      explanation: "Since Dog overrides makeSound(), calling myDog.makeSound() will output 'Woof Woof'."
    },
    {
      question: "What will happen if a subclass does not override all abstract methods of its superclass?",
      a: "It will compile successfully.",
      b: "The subclass must also be declared abstract.",
      c: "It will throw a runtime error.",
      d: "The superclass methods will be used by default.",
      correct: "b",
      explanation: "If a subclass does not implement all abstract methods of its parent, it must also be declared abstract."
    },
    {
      question: "Why might you use an abstract class instead of an interface?",
      a: "To allow multiple inheritance.",
      b: "To provide both abstract and concrete methods.",
      c: "To define constants.",
      d: "To avoid inheritance.",
      correct: "b",
      explanation: "Abstract classes allow a mix of abstract and concrete methods, while interfaces contain only abstract methods (before Java 8)."
    },
    {
      question: "Which of the following best describes a concrete class?",
      a: "A class with only abstract methods.",
      b: "A class that extends an abstract class and implements all its abstract methods.",
      c: "A class that cannot be instantiated.",
      d: "A class declared with the keyword abstract.",
      correct: "b",
      explanation: "A concrete class fully implements all abstract methods of its parent class and can be instantiated."
    },
    {
      question: "What will the main() method output?",
      code: `
    abstract class Shape {
      abstract void draw();
    }
    class Circle extends Shape {
      void draw() {
        System.out.println("Drawing a circle");
      }
    }
    Shape myShape = new Circle();
    myShape.draw();`,
      a: "Drawing a square",
      b: "Drawing a circle",
      c: "Compilation error",
      d: "No output",
      correct: "b",
      explanation: "Since Circle extends Shape and implements draw(), calling myShape.draw() will output 'Drawing a circle'."
    },
    {
      question: "What is an interface in Java?",
      a: "A class that contains concrete methods only.",
      b: "A class with both abstract and concrete methods.",
      c: "A contract specifying what methods a class must implement but not how.",
      d: "A method that overrides another method.",
      correct: "c",
      explanation: "An interface in Java defines a set of methods that a class must implement without providing their implementation."
    },
    {
      question: "How does an interface differ from an abstract class?",
      a: "Interfaces can only have concrete methods, abstract classes cannot.",
      b: "Interfaces define what a class should do, abstract classes define shared behavior.",
      c: "Abstract classes allow multiple inheritance, interfaces do not.",
      d: "Abstract classes only contain abstract methods, interfaces can have concrete methods.",
      correct: "b",
      explanation: "Interfaces specify what a class should do, while abstract classes define common behavior that multiple subclasses can share."
    },
    {
      question: "What is the correct way for a class to use an interface?",
      a: "Extend the interface.",
      b: "Implement the interface.",
      c: "Import the interface.",
      d: "Override the interface.",
      correct: "b",
      explanation: "A class implements an interface in Java using the `implements` keyword to provide definitions for the interface methods."
    },
    {
      question: "What happens if a class implements an interface but does not provide all implementations?",
      a: "It throws a compile-time error.",
      b: "It runs with default method implementations.",
      c: "It becomes an abstract class.",
      d: "The missing methods are ignored.",
      correct: "c",
      explanation: "If a class does not implement all methods of an interface, it must be declared abstract."
    },
    {
      question: "Which scenario is suitable for using an interface instead of an abstract class?",
      a: "When multiple inheritance is required.",
      b: "When shared behavior needs to be defined.",
      c: "When fields need to be shared among subclasses.",
      d: "When creating a base class for related classes.",
      correct: "a",
      explanation: "Interfaces allow multiple inheritance by letting a class implement multiple interfaces."
    },
    {
      question: "What is the output of the following code?",
      code: `
  interface Camera { void takePhoto(); }
  interface GPS { void navigate(); }
  class Smartphone implements Camera, GPS {
    public void takePhoto() { System.out.println("Photo taken."); }
    public void navigate() { System.out.println("Navigating to destination."); }
  }
  Smartphone phone = new Smartphone();
  phone.takePhoto();
  phone.navigate();`,
      a: "Compilation error",
      b: "\"Photo taken.\" and \"Navigating to destination.\"",
      c: "No output",
      d: "\"Interface methods called.\"",
      correct: "b",
      explanation: "The code correctly implements both interfaces, so it prints \"Photo taken.\" and \"Navigating to destination.\"."
    },
    {
      question: "Which keyword is used to define an interface in Java?",
      a: "abstract",
      b: "extends",
      c: "interface",
      d: "implements",
      correct: "c",
      explanation: "The `interface` keyword is used to define an interface in Java."
    },
    {
      question: "What does the following code represent?",
      code: `
  interface Vehicle {
    void start();
    void stop();
  }`,
      a: "A class with abstract methods.",
      b: "A contract that defines what a class must implement.",
      c: "A class with concrete methods only.",
      d: "A method that overrides an abstract method.",
      correct: "b",
      explanation: "An interface in Java acts as a contract that defines method signatures without implementation."
    },
    {
      question: "What is the main purpose of implementing multiple interfaces in Java?",
      a: "To inherit fields from different classes.",
      b: "To avoid overriding methods.",
      c: "To provide multiple sets of behavior in a single class.",
      d: "To reduce the number of classes in a program.",
      correct: "c",
      explanation: "A class can implement multiple interfaces to inherit behavior from different sources."
    },
    {
      question: "Why might you choose an abstract class over an interface?",
      a: "To define unrelated behavior.",
      b: "To use multiple inheritance.",
      c: "To share fields or common methods among related classes.",
      d: "To avoid implementing methods in subclasses.",
      correct: "c",
      explanation: "Abstract classes allow code reuse by defining fields and concrete methods that subclasses can inherit."
    },
  {
    question: 'What is the main purpose of using an abstract class in Java?',
    a: 'To create instances of the class.',
    b: 'To allow a class to implement multiple interfaces.',
    c: 'To provide shared functionality and allow subclasses to implement abstract methods.',
    d: 'To define methods that can be overridden only in the parent class.',
    correct: 'c',
    explanation: "Abstract classes allow code reuse and enforce method implementation in subclasses while also providing concrete methods."
  },
  {
    question: 'Which class implements the Playable interface?',
    code: `
interface Playable { void play(); }
class Game implements Playable {
  public void play() { System.out.println("Game is being played"); }
}`,
    a: 'Vehicle',
    b: 'Game',
    c: 'Playable',
    d: 'None of the above',
    correct: 'b',
    explanation: "The Game class implements the Playable interface by providing a concrete implementation of the play() method."
  },
  {
    question: 'What is the correct use of the fuelType() method in the Car class?',
    code: `
class Car extends FuelVehicle {
  public void fuelType() { System.out.println("Car uses petrol"); }
}`,
    a: 'It is inherited from FuelVehicle.',
    b: 'It is implemented from the Vehicle interface.',
    c: 'It is overridden in the Car class.',
    d: 'It is an abstract method in the Car class.',
    correct: 'c',
    explanation: "The fuelType() method is already defined in FuelVehicle and is being overridden in the Car class."
  },
  {
    question: 'What happens when the following line of code is executed?',
    code: `myCar.start();`,
    a: 'The start() method in the Car class is invoked.',
    b: 'The start() method in the FuelVehicle class is invoked.',
    c: 'The start() method in the Vehicle interface is invoked.',
    d: 'It will result in a compile-time error.',
    correct: 'b',
    explanation: "If Car extends FuelVehicle and does not override start(), the method in FuelVehicle is called."
  },
  {
    question: 'Which classes implement the GPS interface?',
    code: `
interface GPS { void navigate(); }
class Car implements GPS {
  public void navigate() { System.out.println("Car navigation is on"); }
}
class Bike extends FuelVehicle {}`,
    a: 'FuelVehicle',
    b: 'Car',
    c: 'Bike',
    d: 'FuelVehicle and Car',
    correct: 'b',
    explanation: "Only the Car class implements the GPS interface, providing the navigate() method."
  },

  {
    question: 'Which method does the Game class implement from the Playable interface?',
    code: `
interface Playable { void play(); }
class Game implements Playable {
  public void play() { System.out.println("Playing the game."); }
}`,
    a: 'play()',
    b: 'fuelType()',
    c: 'navigate()',
    d: 'start()',
    correct: 'a',
    explanation: "The Game class implements the Playable interface by providing an implementation for play()."
  },
  {
    question: 'Which class implements both the Vehicle and GPS interfaces?',
    code: `
interface Vehicle { void start(); void stop(); }
interface GPS { void navigate(); }
class Car implements Vehicle, GPS {
  public void start() { System.out.println("Starting"); }
  public void navigate() { System.out.println("Navigation on"); }
}`,
    a: 'FuelVehicle',
    b: 'Car',
    c: 'Bike',
    d: 'Vehicle',
    correct: 'b',
    explanation: "The Car class implements both the Vehicle and GPS interfaces by defining their required methods."
  },
  {
    question: 'Which statement about abstract classes and interfaces is true?',
    a: 'Abstract classes are used for unrelated classes, interfaces for related classes.',
    b: 'Abstract classes can implement interfaces.',
    c: 'Interfaces can have constructors.',
    d: 'Abstract classes cannot have concrete methods.',
    correct: 'b',
    explanation: "Abstract classes can implement interfaces and provide method definitions for some of their methods."
  },
  {
    question: 'What is the primary benefit of using interfaces in Java?',
    a: 'To define shared functionality across multiple unrelated classes.',
    b: 'To define default methods for the classes that implement the interface.',
    c: 'To provide a common ancestor for unrelated classes.',
    d: 'To allow a class to have only one implementation.',
    correct: 'a',
    explanation: "Interfaces allow different, unrelated classes to implement shared behavior without being part of the same class hierarchy."
  }
  ];