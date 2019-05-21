.. qnum::
   :prefix: 5-7-
   :start: 1

.. |CodingEx| image:: ../../_static/codingExercise.png
    :width: 30px
    :align: middle
    :alt: coding exercise
    
    
.. |Exercise| image:: ../../_static/exercise.png
    :width: 35
    :align: middle
    :alt: exercise
    
    
.. |Groupwork| image:: ../../_static/groupwork.png
    :width: 35
    :align: middle
    :alt: groupwork
    
    
Static Variables and Methods
============================

In Unit 2, we explored the Math class and its many static methods like Math.random(), and we've always used a main method which is static. In this lesson, you will learn to write your own static variables and methods.

**Static** variables and methods belong to a class and are called with the Class Name rather than using object variables. There is only one copy of a static variable or method for the whole class. For example, the main method is static because there should only be 1 main method. Static methods can be public or private.

The static keyword is placed right after the public/private modifier and right before the type of variables and methods in their declarations, as seen below. To use a static method or variable, you use the Class Name and the dot (.) operator.

.. code-block:: java
     
     // static variable
     public static type variableName;
     
     // static method
     public static returnType methodName(parameters) {
     
     }
     
     // To call a static method or variable, use the Class Name
     System.out.println(ClassName.staticVariable);
     ClassName.staticMethod();

.. |Java visualizer| raw:: html

   <a href="http://www.pythontutor.com/visualize.html#code=%20public%20class%20Person%20%0A%20%20%7B%0A%20%20%20%20%20//%20instance%20variables%20%0A%20%20%20%20%20private%20String%20name%3B%0A%20%20%20%20%20private%20String%20email%3B%0A%20%20%20%20%20private%20String%20phoneNumber%3B%0A%20%20%20%20%20%0A%20%20%20%20%20//%20Static%20counter%20variable%0A%20%20%20%20%20public%20static%20int%20personCounter%20%3D%200%3B%0A%20%20%20%20%20%0A%20%20%20%20%20//%20static%20method%20to%20print%20out%20counter%0A%20%20%20%20%20public%20static%20void%20printPersonCounter%28%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20System.out.println%28%22Person%20counter%3A%20%22%20%2B%20personCounter%29%3B%0A%20%20%20%20%20%7D%0A%20%20%20%20%20%0A%20%20%20%20%20//%20constructor%3A%20construct%20a%20Person%20copying%20in%20the%20data%20into%20the%20instance%20variables%0A%20%20%20%20%20public%20Person%28String%20initName,%20String%20initEmail,%20String%20initPhone%29%0A%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20name%20%3D%20initName%3B%0A%20%20%20%20%20%20%20%20email%20%3D%20initEmail%3B%0A%20%20%20%20%20%20%20%20phoneNumber%20%3D%20initPhone%3B%0A%20%20%20%20%20%20%20%20personCounter%2B%2B%3B%0A%20%20%20%20%20%7D%0A%20%20%20%20%20%0A%20%20%20%20%20//%20toString%28%29%20method%0A%20%20%20%20%20public%20String%20toString%28%29%20%0A%20%20%20%20%20%7B%20%0A%20%20%20%20%20%20%20return%20%20name%20%2B%20%22%3A%20%22%20%2B%20email%20%2B%20%22%20%22%20%2B%20phoneNumber%3B%0A%20%20%20%20%20%7D%0A%20%20%20%20%20%0A%20%20%20%20%20//%20main%20method%20for%20testing%0A%20%20%20%20%20public%20static%20void%20main%28String%5B%5D%20args%29%0A%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20//%20call%20the%20constructor%20to%20create%20a%20new%20person%0A%20%20%20%20%20%20%20%20Person%20p1%20%3D%20new%20Person%28%22Sana%22,%20%22sana%40gmail.com%22,%20%22123-456-7890%22%29%3B%0A%20%20%20%20%20%20%20%20Person%20p2%20%3D%20new%20Person%28%22Jean%22,%20%22jean%40gmail.com%22,%20%22404%20899-9955%22%29%3B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20Person.printPersonCounter%28%29%3B%0A%20%20%20%20%20%7D%0A%20%20%7D%0A%20%20&cumulative=false&curInstr=30&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=java&rawInputLstJSON=%5B%5D&textReferences=falsecurInstr=0" target="_blank" style="text-decoration:underline">Java visualizer</a>

Since there is only 1 copy of a static variable or method, static variables are often used to count how many objects are generated. In the following class Person, there is a static variable called personCounter that is incremented each time the Person constructor is called to initialize a new Person object. The static method printCounter() prints out its value. Note that static methods only have access to static variables and static methods, not the other instance variables or methods. You can also watch how it works in the |Java visualizer|.

.. activecode:: PersonClassStaticCounter
  :language: java

  public class Person 
  {
     // instance variables 
     private String name;
     private String email;
     private String phoneNumber;
     
     // Static counter variable
     public static int personCounter = 0;
     
     // static method to print out counter
     public static void printPersonCounter() {
          System.out.println("Person counter: " + personCounter);
     }
     
     // constructor: construct a Person copying in the data into the instance variables
     public Person(String initName, String initEmail, String initPhone)
     {
        name = initName;
        email = initEmail;
        phoneNumber = initPhone;
        personCounter++;
     }
     
     // toString() method
     public String toString() 
     { 
       return  name + ": " + email + " " + phoneNumber;
     }
     
     // main method for testing
     public static void main(String[] args)
     {
        // call the constructor to create a new person
        Person p1 = new Person("Sana", "sana@gmail.com", "123-456-7890");
        Person p2 = new Person("Jean", "jean@gmail.com", "404 899-9955");
        
        Person.printPersonCounter();
     }
  }
  

|Groupwork| Programming Challenge : Static Song and counter
------------------------------------------------------------

.. |The Ants Go Marching| raw:: html

   <a href="https://www.lingokids.com/english-for-kids/songs/the-ants-go-marching-song" target="_blank">The Ants Go Marching</a>

In the last lesson, we wrote a class with methods to print out the song |The Ants Go Marching|. Notice that this is a class where there are no instance variables and we don't really need to generate multiple objects. With students or pets, it makes sense to have multiple objects. With the Song, we can just make the methods static and have just 1 copy of them. 

1. Copy in your class from the last lesson into this active code window. Change the method(s) that print out the verses of the Song to be static. In the main method, change how you call the static methods by using just the classname instead of creating an object.

2. Add a static variable to the class that keeps track of the number of verses. Increment this variable each time the method to print a verse is called and print it out. 

.. activecode:: challenge-5-7-static-song
  :language: java

  public class Song 
  { 
    // Change the method(s) to be static
    
    
    // Add a static verse counter variable
    
    
    public static void main(String args[]) 
    {
      // Call the static method(s) to print out the Song 
    
    }
  }


Summary
-------

- Static methods and variables include the keyword static  before their name in the header or declaration. They can be public or private.

- Static variables belong to the class, with all objects of a class sharing a single static variable.

- Static methods are associated with the class, not objects of the class.

- Static variables are used with the class name and the dot operator, since they are associated with a class, not objects of a class.

- Static methods cannot access or change the values of instance variables, but they can access or change the values of static variables.

- Static methods cannot call non-static methods.

