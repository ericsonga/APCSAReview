.. include:: ../common.rst

.. qnum::
   :prefix: 5-2-
   :start: 1

|Time45|

Writing Constructors
====================

.. index::
   pair: class; constructor

In Unit 2, we learned how to create objects by calling **constructors**. To
review, a call to a constructor consists of the word ``new`` followed by the
name of the class being constructed, and then an argument list in parentheses.
For example, here is how we create ``World``, ``Turtle``, and ``Person``
objects.

.. code-block:: java

    // To create a new object, write:
    // ClassName variableName = new ConstructorName(arguments);
    World world = new World();
    Turtle t = new Turtle(world);
    Person p = new Person("Pat", "pat@gmail.com", "123-456-7890");

Now it's time to learn to write our own constructors.

Constructor Signature
--------------------------------

In the source code for a class, constructors are usually written after the
instance variables and before any methods.

The signature of a constructor is similar to the signature of a method except
there is no return type, not even ``void``, and instead of a method name, the
name of the constructor is the same as the name of the class. The constructors
you write will almost always be marked ``public``. Like methods, constructors
also have a **parameter list** specified in parenthesis that declare the
variables that will be used to hold the arguments passed when the constructor is
called.

.. code-block:: java

   public class ClassName
   {
       /* Instance variable declarations go here, before constructors */

       /* Constructor - same name as Class, no return type */
       public ClassName()
       {
           /* Implementation not shown */
       }

       /* Method definitions go here, after constructors */
   }

.. note::

   Constructors must have the same name as the class! Constructors have no return type!

The Job of a Constructor
---------------------------------------

The job of a constructor is to set the initial values for the object’s instance
variables to useful values. But what does “useful” mean? Sometimes we describe
the values of all an object's instance variables at a given time as the object's
**state**. And we say an object is in a **valid state** when all its instance
variables have values that let us use the object by invoking its public methods.
So another way to describe the job of a constructor is to set the object’s
instance values so it’s in a valid state and ready to be used.

Classes can have zero or more constructors but they should all produce an object
in a valid state.

The easiest way to write a constructor is to *not* write one. If you do not
write a constructor your class will automatically get what is called the
**default no-argument constructor**. This constructor will initialize all your
instance variables to the default value for their type: 0 for ``int`` and
``double``, ``false`` for ``boolean``, and ``null`` for all reference types. If
those default values are sufficient to put your object into a valid state you may
not need to write a constructor at all.

Usually, however, if you are writing a class that has instance variables, you
need to initialize your instance values to some other values. In that case you
probably need to write a constructor that takes arguments and uses them to
initialize your instance variables.

For example, consider the constructor from the ``Person`` class from the last
section.

.. code-block:: java

   public Person(String initName, String initEmail, String initPhone)
   {
       name = initName;
       email = initEmail;
       phoneNumber = initPhone;
   }

This constructor ensures that all three of the instance variables (``name``, ``email``, and ``phoneNumber``) in ``Person`` 
are initialized to the values provided by whatever code called the constructor. For example, in the constructor call  
``new Person("Pat", "pat@gmail.com", "123-456-7890")``, the argument "Pat" is passed into the parameter variable ``initName``, 
which the constructor then assigns to the instance variable ``name``.  

One important note: if you do write a constructor, Java will not generate the
default constructor for you. This is a good thing because it lets you make sure
that instances of your class are always properly initialized. With this
constructor in place, for instance, there’s no way to construct a ``Person``
object without providing the three required ``String`` values.

Sometimes you will want to write more than one constructor so there are
different ways of making an instance of your class. One reason to do that is to
make it convenient to create instances from different kinds of arguments. This
is called **overloading** and we discussed it in Chapter 2 from the perspective
of calling constructors.

For instance, suppose we were writing a program that had another class
``AddressBookEntry`` which had getters for name, email, and phone number. In
that program it might be useful to write another ``Person`` constructor like
this:

.. code-block:: java

   public Person(AddressBookEntry address) {
   {
       name = address.getName();
       email = address.getEmail();
       phoneNumber = address.getPhoneNumber();
   }

Sometimes you might still even want to provide a no-argument constructor. If
there’s a valid object that you can create without any arguments, you could
write a no-argument constructor for ``Person`` like:

.. code-block:: java

   public Person()
   {
       name = "Anonymous";
       email = "unknown";
       phoneNumber = "unknown";
   }


It’s up to you to decide if this is actually a useful value to have or if it
would be better to force the users of the ``Person`` class to choose the
values themselves.


|Exercise| **Check Your Understanding**

.. clickablearea:: name_constructor
    :question: Click on all the lines of code that are part of constructors in the following class.
    :iscode:
    :feedback: Constructors are public and have the same name as the class.

    :click-incorrect:public class Name:endclick:
    :click-incorrect:{:endclick:
        :click-incorrect:private String first;:endclick:
        :click-incorrect:private String last;:endclick:

        :click-correct:public Name(String theFirst, String theLast):endclick:
        :click-correct:{:endclick:
            :click-correct:first = theFirst;:endclick:
            :click-correct:last = theLast;:endclick:
        :click-correct:}:endclick:

        :click-incorrect:public void setFirst(String theFirst):endclick:
        :click-incorrect:{:endclick:
            :click-incorrect:first = theFirst;:endclick:
        :click-incorrect:}:endclick:

        :click-incorrect:public void setLast(String theLast):endclick:
        :click-incorrect:{:endclick:
            :click-incorrect:last = theLast;:endclick:
        :click-incorrect:}:endclick:

    :click-incorrect:}:endclick:

.. mchoice:: qsse_5
   :practice: T
   :answer_a: Determines the amount of space needed for an object and creates the object
   :answer_b: Names the new object
   :answer_c: Return to free storage all the memory used by this instance of the class.
   :answer_d: Initialize the instance variables in the object
   :correct: d
   :feedback_a: The object is already created before the constructor is called but the constructor initializes the instance variables.
   :feedback_b: Constructors do not name the object.
   :feedback_c: Constructors do not free any memory. In Java the freeing of memory is done when the object is no longer referenced.
   :feedback_d: A constructor  initializes the instance variables to their default values or in the case of a parameterized constructor, to the values passed in to the constructor.

   What best describes the purpose of a class's constructor?


|CodingEx| **Coding Exercise**

.. activecode:: class-Fraction
   :language: java
   :autograde: unittest

   The following class defines a ``Fraction`` with the instance variables
   ``numerator`` and ``denominator``. It uses 2 constructors. Note that the
   no-argument constructor sets the default instance variable values to 1 rather
   than 0 since a fraction with 0 in the denominator is not valid. Try to guess
   what it will print before you run it. Hint! Remember to start with the
   ``main`` method! You can also view it in the Java visualizer by clicking on
   the Show CodeLens button below.
   ~~~~
   public class Fraction
   {
       //  instance variables
       private int numerator;
       private int denominator;

       // constructor: set instance variables to default values
       public Fraction()
       {
           numerator = 1;
           denominator = 1;
       }

       // constructor: set instance variables to init parameters
       public Fraction(int initNumerator, int initDenominator)
       {
           numerator = initNumerator;
           denominator = initDenominator;
       }

       // Print fraction
       public void print()
       {
           System.out.println(numerator + "/" + denominator);
       }

       // main method for testing
       public static void main(String[] args)
       {
           Fraction f1 = new Fraction();
           Fraction f2 = new Fraction(1, 2);
           // What will these print out?
           f1.print();
           f2.print();
       }
   }

   ====
   // Test Code for Lesson 5.2.0.1 - Fraction
   import static org.junit.Assert.*;

   import org.junit.Test;

   import java.io.*;

   public class RunestoneTests extends CodeTestHelper
   {
       @Test
       public void test() throws IOException
       {
           String output = getMethodOutput("main");
           String expect = "1/1\n1/2";

           boolean passed = getResults(expect, output, "Running main", true);
           assertTrue(passed);
       }
   }

|CodingEx| **Coding Exercise**

.. activecode:: class-Car
   :language: java
   :autograde: unittest
   :practice: T

   The following class defines a Car with the instance variables model and year,
   for example a Honda 2010 car. However, some of the code is missing. First, fill in
   the code to create a ``Car`` constructor. Then, fill in the code to call the constructor 
   in the main method to create 2 ``Car`` objects. The first car should be a 2023 Ford and 
   the second car should be a 2010 Honda. Run your program and make sure it works and 
   prints out the information for both cars.
   ~~~~
   public class Car
   {
      //  instance variables
      private String model;
      private int year;

      // constructor: set instance variables to init parameters
      public Car(String initModel, int initYear)
      {
          // 1. set the instance variables to the init parameter variables


      }

      // Print Car info
      public void print()
      {
        System.out.println("Car model: " + model);
        System.out.println("Car year: " + year);
      }

      // main method for testing
      public static void main(String[] args)
      {
          // 2. Call the constructor to create 2 new Car objects with different
          // values The first car should be a 2023 Ford and the second car
          // should be a 2010 Honda.

          Car car1 =
          Car car2 =

          car1.print();
          car2.print();
      }
   }
   ====
   // Test Code for Lesson 5.2.0 - Car
   import static org.junit.Assert.*;

   import org.junit.Test;

   import java.io.*;

   public class RunestoneTests extends CodeTestHelper
   {
       @Test
       public void testMain() throws IOException
       {
           String output = getMethodOutput("main");
           String expect = "Car model: Ford\nCar year: 2023\nCar model: Honda\nCar year: 2010";

           boolean passed = getResults(expect, output, "Running main");
           assertTrue(passed);
       }
   }

Advanced AP Topic: Reference parameters 
------------------------------------------------

When you pass object references as parameters to
constructors or methods, those references refer to the same objects as the
references in the caller. If the objects are immutable, like ``String`` objects
it doesn’t matter at all. On the other hand, if the objects are **mutable**,
meaning their instance variables can change after they are constructed, then
storing the passed-in reference in an instance variable in your object can lead
to surprising results: if some other code changes the object it will change for
you too. If that’s not what you want, sometimes it makes sense to copy the
object passed to the constructor and store the copy in the instance variable
instead. How to make the copy will depend on the class of the object but often
you can just construct a new object of the appropriate class using values from
the original object as shown below.

.. code-block:: java

     public class Person
     {
         private String name;
         private Address addr; // Assumes an Address class is already defined

         // constructor: initialize instance variable and call Address constructor to
         // make a copy
         public Person(String initName, Address initAddr)
         {
             name = initName;
             addr =
                     new Address(
                             initAddr.getStreet(),
                             initAddr.getCity(),
                             initAddr.getState());
         }
     }

|Groupwork| Programming Challenge : Student Class
--------------------------------------------------

We encourage you to work in pairs for this challenge to create a Student class with constructors.

1. First, brainstorm in pairs to do the **Object-Oriented Design** for a Student class. What data should we store about Students? Come up with at least 4 different instance variables. What are the data types for the instance variables?

2. Write a Student class below that has your 4 instance variables and write a constructor that has 4 parameters to set all of the instance variables.

3. Add a print() method that uses System.out.println to print out all the instance variables.

4. Add a main method that constructs at least 2 Student objects using the constructor with different values and then calls their print() methods.

.. activecode:: challenge-5-2-Student-class
  :language: java
  :autograde: unittest

  Create a class Student with 4 instance variables, a constructor, and a print method. Write a main method that creates 2 Student objects with the constructor and calls their print() method.
  ~~~~
  /**
   * class Student with 4 instance variables, a constructor, a print method, and a
   * main method to test them.
   */
  public class Student
  {
      // Write 4 instance variables

      // Write a constructor with 4 parameters to initialize all of the instance
      // variables

      // Write a print method that prints all the instance variables
      public void print() {}

      // main method
      public static void main(String[] args)
      {
          // Construct 2 Student objects using the constructor with different values

          // call their print() methods

      }
  }

   ====
    // Test Code for Lesson 5.2.1 - Challenge - Student
    import static org.junit.Assert.*;

    import org.junit.Test;

    import java.io.*;

    public class RunestoneTests extends CodeTestHelper
    {
        public RunestoneTests()
        {
            super("Student");

            Object[] values = new Object[] {"Name", 0};
            setDefaultValues(values);
        }

        @Test
        public void testCallConstructors()
        {
            String code = getCodeWithoutComments();
            String search = "= new Student(";

            int num = countOccurences(code, search);

            String expect = search + "...) x 2";
            String actual = search + "...) x " + num;

            boolean passed = getResults(expect, actual, "Checking that you made 2 Student objects");
            assertTrue(passed);
        }

        @Test
        public void testConstructors()
        {
            String code = getCodeWithoutComments();
            String search = "public Student(";

            int num = countOccurences(code, search);

            String expect = search + "...) x 1";
            String actual = search + "...) x " + num;

            boolean passed = getResults(expect, actual, "Checking that you made a constructor");
            assertTrue(passed);
        }

        @Test
        public void testPrint()
        {
            String code = getCodeWithoutComments();
            String search = ".print()";

            int num = countOccurences(code, search);

            String expect = search + " x 2";
            String actual = search + " x " + num;

            boolean passed = getResults(expect, actual, "Checking that you called print 2 times");
            assertTrue(passed);
        }

        @Test
        public void testPrivateVariables()
        {
            String expect = "4 Private";
            String output = testPrivateInstanceVariables();

            boolean passed = getResults(expect, output, "Checking for 4 Private Instance Variable(s)");
            assertTrue(passed);
        }
    }

|Groupwork| Design a Class for your Community
----------------------------------------------------------

.. |community5.1| raw:: html

   <a href="https://runestone.academy/ns/books/published/csawesome/Unit5-Writing-Classes/topic-5-1-parts-of-class.html#groupwork-design-a-class-for-your-community" target="_blank">Lesson 5.1 Community Challenge</a>

In the last lesson, you came up with a class of your own choice relevant to you or your community. In this lesson, you will add a constructor to this class.

1. Consult your completed worksheet or your code in |community5.1| for the class name and its 3 instance variables that you created. Copy them into the active code exercise below.

2. Add a constructor with 3 parameters to set all of the instance variables to the given parameters.

3. Write a print() method that uses System.out.println to print out all the instance variables.

4. Write a main method that constructs at least 2 objects of your class using the constructor and then calls their print() methods.

.. activecode:: community-challenge-5-2
  :language: java
  :autograde: unittest

  Copy your class with its 3 instance variables from |community5.1|. Add a constructor with 3 parameters to set all of the instance variables to the given parameters. Write a print() method that uses System.out.println to print out all the instance variables. Write a main method that constructs at least 2 objects of your class using the constructors and then calls their print() methods.
  ~~~~
  public class          // Add your class name here!
  {
      // 1. copy in your instance variables for class from the last lesson

      // 2. Add a constructor with 3 parameters to set all of the instance variables to the given parameters.


      // 3. Write a print() method that uses System.out.println to print out all the instance variables.

      // 4. Write a main method that constructs at least 2 objects of your class
      // using the constructor and then calls their print() methods.
      public static void main(String[] args)
      {
         // Construct 2 objects of your class to test the constructors


         // call the objects print() methods

      }
  }
  ====
  import static org.junit.Assert.*;

  import org.junit.*;

  import java.io.*;

  public class RunestoneTests extends CodeTestHelper
  {
      @Test
      public void testPrivateVariables()
      {
          String expect = "3 Private";
          String output = testPrivateInstanceVariables();
          boolean passed = false;
          if (Integer.parseInt(expect.substring(0, 1)) <= Integer.parseInt(output.substring(0, 1)))
              passed = true;
          passed = getResults(expect, output, "Checking private instance variable(s)", passed);
          assertTrue(passed);
      }

      /* No longer required
      @Test
      public void testDefaultConstructor()
      {
          String output = checkDefaultConstructor();
          String expect = "pass";

          boolean passed = getResults(expect, output, "Checking default constructor");
          assertTrue(passed);
      }
      */

      @Test
      public void testConstructor3()
      {
          String output = checkConstructor(3);
          String expect = "pass";

          boolean passed = getResults(expect, output, "Checking constructor with 3 parameters");
          assertTrue(passed);
      }

      @Test
      public void testPrint()
      {
          String output = getMethodOutput("print");
          String expect = "More than 15 characters";
          String actual = " than 15 characters";

          if (output.length() < 15)
          {
              actual = "Less" + actual;
          }
          else
          {
              actual = "More" + actual;
          }
          boolean passed = getResults(expect, actual, "Checking print method");
          assertTrue(passed);
      }

      @Test
      public void testMain() throws IOException
      {
          String output = getMethodOutput("main"); // .split("\n");
          String expect = "3+ line(s) of text";
          String actual = " line(s) of text";
          int len = output.split("\n").length;

          if (output.length() > 0)
          {
              actual = len + actual;
          }
          else
          {
              actual = output.length() + actual;
          }
          boolean passed = len >= 3;

          getResults(expect, actual, "Checking output", passed);
          assertTrue(passed);
      }
  }

Summary
--------


- **Constructors** are used to set the initial state of an object, which includes initial values for all instance variables.

- When no constructor is written, Java provides a no-argument **default constructor**, and the instance variables are set to their default values (0 for ``int`` and ``double``, ``null`` for objects like ``String``).

- Constructor parameters are local variables to the constructor and provide data to initialize instance variables.



AP Practice
------------



.. mchoice:: AP5-2-1
    :practice: T

    Consider the definition of the Cat class below. The class uses the instance variable isSenior to indicate whether a cat is old enough to be considered a senior cat or not.

    .. code-block:: java

        public class Cat
        {
            private String name;
            private int age;
            private boolean isSenior;

            public Cat(String n, int a)
            {
                name = n;
                age = a;
                if (age >= 10)
                {
                    isSenior = true;
                }
                else
                {
                    isSenior = false;
                }
            }
        }

    Which of the following statements will create a Cat object that represents a cat that is considered a senior cat?

    - Cat c = new Cat ("Oliver", 7);

      - The age 7 is less than 10, so this cat would not be considered a senior cat.

    - Cat c = new Cat ("Max", "15");

      - An integer should be passed in as the second parameter, not a string.

    - Cat c = new Cat ("Spots", true);

      - An integer should be passed in as the second parameter, not a boolean.

    - Cat c = new Cat ("Whiskers", 10);

      + Correct!

    - Cat c = new Cat ("Bella", isSenior);

      - An integer should be passed in as the second parameter and isSenior would be undefined outside of the class.




.. mchoice:: AP5-2-2
   :practice: T
   :answer_a: I only
   :answer_b: II only
   :answer_c: III only
   :answer_d: I and III only
   :answer_e: I, II and III
   :correct: d
   :feedback_a: Option III can also create a correct Cat instance.
   :feedback_b: Option II will create a cat that is 0 years old with 5 kittens.
   :feedback_c: Option I can also create a correct Cat instance.
   :feedback_d: Good job!
   :feedback_e: Option II will create a cat that is 0 years old with 5 kittens.

   Consider the following class definition. Each object of the class Cat will store the cat’s name as name, the cat’s age as age, and the number of kittens the cat has as kittens. Which of the following code segments, found in a class other than Cat, can be used to create a cat that is 5 years old with no kittens?

   .. code-block:: java

    public class Cat
    {
        private String name;
        private int age;
        private int kittens;

        public Cat(String n, int a, int k)
        {
            name = n;
            age = a;
            kittens = k;
        }
        public Cat(String n, int a)
        {
            name = n;
            age = a;
            kittens = 0;
        }
        /* Other methods not shown */
    }

    I.   Cat c = new Cat("Sprinkles", 5, 0);
    II.  Cat c = new Cat("Lucy", 0, 5);
    III. Cat c = new Cat("Luna", 5);

.. mchoice:: AP5-2-3
    :practice: T

    Consider the following class definition.

    .. code-block:: java

        public class Cat
        {
            private String color;
            private boolean isHungry;
            /* missing constructor */
        }

    The following statement appears in a method in a class other than Cat. It is intended to create a new Cat object c with its attributes set to "black" and true. Which of the following can be used to replace  **missing constructor code** in the class definition so that the object c below is correctly created?

    .. code-block:: java

        Cat c = new Cat("black", true);

    - .. code-block:: java

        public Cat(String c, boolean h)
        {
            c = "black";
            h = true;
        }

      - The constructor should be changing the instance variables, not the local variables.

    - .. code-block:: java

        public Cat(String c, boolean h)
        {
            c = "black";
            h = "true";
        }

      - The constructor should be changing the instance variables, not the local variables.

    - .. code-block:: java

        public Cat(String c, boolean h)
        {
            c = color;
            h = isHungry;
        }

      - The constructor should be changing the instance variables, not the local variables.

    - .. code-block:: java

        public Cat(String c, boolean h)
        {
            color = black;
            isHungry = true;
        }

      - The constructor should be using  the local variables to set the instance variables.

    - .. code-block:: java

        public Cat(String c, boolean h)
        {
            color = c;
            isHungry = h;
        }

      + Correct!
