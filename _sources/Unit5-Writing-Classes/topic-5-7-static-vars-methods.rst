.. include:: ../common.rst

.. qnum::
   :prefix: 5-7-
   :start: 1

|Time45|

Static Variables and Methods
============================

In Unit 2, we explored the Math class and its many static methods like Math.random(), and we've always used a main method which is static. In this lesson, you will learn to write your own static variables and methods.

- **Static** variables and methods belong to a class and are called with the Class Name rather than using object variables, like ClassName.methodName();

- There is only one copy of a static variable or method for the whole class. For example, the main method is static because there should only be 1 main method.

- Static methods can be public or private.

- The static keyword is placed right after the public/private modifier and right before the type of variables and methods in their declarations.

.. code-block:: java

   class ClassName 
   {
     // static variable
     public static type variableName;

     // static method
     public static returnType methodName(parameters) 
     {
           // implementation not shown
     }
   }
   // To call a static method or variable, use the Class Name
   System.out.println(ClassName.staticVariable);
   ClassName.staticMethod();

.. |Java visualizer| raw:: html

   <a href="http://www.pythontutor.com/visualize.html#code=%20public%20class%20Person%20%0A%20%20%7B%0A%20%20%20%20%20//%20instance%20variables%20%0A%20%20%20%20%20private%20String%20name%3B%0A%20%20%20%20%20private%20String%20email%3B%0A%20%20%20%20%20private%20String%20phoneNumber%3B%0A%20%20%20%20%20%0A%20%20%20%20%20//%20Static%20counter%20variable%0A%20%20%20%20%20public%20static%20int%20personCounter%20%3D%200%3B%0A%20%20%20%20%20%0A%20%20%20%20%20//%20static%20method%20to%20print%20out%20counter%0A%20%20%20%20%20public%20static%20void%20printPersonCounter%28%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20System.out.println%28%22Person%20counter%3A%20%22%20%2B%20personCounter%29%3B%0A%20%20%20%20%20%7D%0A%20%20%20%20%20%0A%20%20%20%20%20//%20constructor%3A%20construct%20a%20Person%20copying%20in%20the%20data%20into%20the%20instance%20variables%0A%20%20%20%20%20public%20Person%28String%20initName,%20String%20initEmail,%20String%20initPhone%29%0A%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20name%20%3D%20initName%3B%0A%20%20%20%20%20%20%20%20email%20%3D%20initEmail%3B%0A%20%20%20%20%20%20%20%20phoneNumber%20%3D%20initPhone%3B%0A%20%20%20%20%20%20%20%20personCounter%2B%2B%3B%0A%20%20%20%20%20%7D%0A%20%20%20%20%20%0A%20%20%20%20%20//%20toString%28%29%20method%0A%20%20%20%20%20public%20String%20toString%28%29%20%0A%20%20%20%20%20%7B%20%0A%20%20%20%20%20%20%20return%20%20name%20%2B%20%22%3A%20%22%20%2B%20email%20%2B%20%22%20%22%20%2B%20phoneNumber%3B%0A%20%20%20%20%20%7D%0A%20%20%20%20%20%0A%20%20%20%20%20//%20main%20method%20for%20testing%0A%20%20%20%20%20public%20static%20void%20main%28String%5B%5D%20args%29%0A%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20//%20call%20the%20constructor%20to%20create%20a%20new%20person%0A%20%20%20%20%20%20%20%20Person%20p1%20%3D%20new%20Person%28%22Sana%22,%20%22sana%40gmail.com%22,%20%22123-456-7890%22%29%3B%0A%20%20%20%20%20%20%20%20Person%20p2%20%3D%20new%20Person%28%22Jean%22,%20%22jean%40gmail.com%22,%20%22404%20899-9955%22%29%3B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20Person.printPersonCounter%28%29%3B%0A%20%20%20%20%20%7D%0A%20%20%7D%0A%20%20&cumulative=false&curInstr=1&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=java&rawInputLstJSON=%5B%5D&textReferences=false" target="_blank" style="text-decoration:underline">Java visualizer</a>

Static methods only have access to other static variables and static methods. Static methods cannot access or change the values of instance variables or the this reference (since there is no calling object for them), and static methods cannot call non-static methods. However, non-static methods have access to all variables (instance or static) and methods (static or non-static) in the class.

Since there is only 1 copy of a ``static`` variable or method, static variables are often used to count how many objects are generated. In the following class ``Person``, there is a ``static`` variable called ``personCounter`` that is incremented each time the ``Person`` constructor is called to initialize a new ``Person`` object. The static method ``printCounter`` prints out its value.  You can also watch how it works in the |Java visualizer| by clicking the CodeLens button below.

.. activecode:: PersonClassStaticCounter
  :language: java
  :autograde: unittest

  What will the following code print out? Try adding another Person object and see what happens. Try the CodeLens button to run the code step by step.
  ~~~~
  public class Person
  {
      // instance variables
      private String name;
      private String email;
      private String phoneNumber;

      // Static counter variable
      public static int personCounter = 0;

      // static method to print out counter
      public static void printPersonCounter()
      {
          System.out.println("Person counter: " + personCounter);
      }

      // constructor: construct a Person copying in the data into the instance
      // variables
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
          return name + ": " + email + " " + phoneNumber;
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

  ====
  import static org.junit.Assert.*;

  import org.junit.*;

  import java.io.*;

  public class RunestoneTests extends CodeTestHelper
  {
      @Test
      public void testMain() throws IOException
      {
          String output = getMethodOutput("main");
          String expect = "Person counter: 2";
          boolean passed = getResults(expect, output, "Expected output from main", true);
          assertTrue(passed);
      }
  }

Another common use for static variables is the keep track of a minimum or maximum value or an average of the values in a collection of objects.

|Exercise| **Check Your Understanding**

.. mchoice:: staticTrace
   :practice: T

   Consider the class Temperature below which has a static variable. What is the output of the main method below?

   .. code-block:: java

       public class Temperature
       {
           private double temperature;
           public static double maxTemp = 0;

           public Temperature(double t)
           {
               temperature = t;
               if (t > maxTemp)
               {
                    maxTemp = t;
               }
           }

           public static void main(String[] args)
           {
               Temperature t1 = new Temperature(75);
               Temperature t2 = new Temperature(100);
               Temperature t3 = new Temperature(65);
               System.out.println("Max Temp: " + Temperature.maxTemp);
           }
       }

   - Max Temp: 0

     - maxTemp is changed in each call to the Temperature() constructor.

   - There is a compiler error because the static variable maxTemp cannot be used inside a non-static constructor.

     - Non-static methods and constructors can use any instance or static variables in the class.

   - Max Temp: 100

     + Yes, maxTemp is initialized to 0 and then changed to 75 and then 100 by the constructor calls.

   - Max Temp: 75

     - maxTemp will be changed to 100 by the second constructor call since 100 > 75.

   - Max Temp: 65

     - maxTemp will not be changed to 65 by the third constructor call because 67 is not > 100.


.. |visualizer2| raw:: html

   <a href="http://www.pythontutor.com/visualize.html#code=public%20class%20Temperature%20%0A%7B%0A%20%20%20private%20double%20temperature%3B%0A%20%20%20public%20static%20double%20maxTemp%20%3D%200%3B%0A%20%20%20%0A%20%20%20public%20Temperature%28double%20t%29%0A%20%20%20%7B%0A%20%20%20%20%20%20%20temperature%20%3D%20t%3B%0A%20%20%20%20%20%20%20if%20%28t%20%3E%20maxTemp%29%0A%20%20%20%20%20%20%20%20%20%20%20maxTemp%20%3D%20t%3B%0A%20%20%20%7D%0A%20%20%20public%20static%20void%20main%28String%5B%5D%20args%29%0A%20%20%20%7B%0A%20%20%20%20%20%20%20Temperature%20t1%20%3D%20new%20Temperature%2875%29%3B%0A%20%20%20%20%20%20%20Temperature%20t2%20%3D%20new%20Temperature%28100%29%3B%0A%20%20%20%20%20%20%20Temperature%20t3%20%3D%20new%20Temperature%2865%29%3B%0A%20%20%20%20%20%20%20System.out.println%28%22Max%20Temp%3A%20%22%20%2B%20Temperature.maxTemp%29%3B%0A%20%20%20%7D%0A%7D&cumulative=false&curInstr=0&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=java&rawInputLstJSON=%5B%5D&textReferences=false" target="_blank" style="text-decoration:underline">Java visualizer</a>

You can see this code in action in the |visualizer2|.

|CodingEx| **Coding Exercise**

.. activecode:: TemperatureBugs
  :language: java
  :autograde: unittest
  :practice: T

  Fix the bugs in the following code.
  ~~~~
  public class Temperature
  {
      private double temperature;
      public static double maxTemp = 0;

      public Temperature(double t)
      {
          temperature = t;
          if (t > maxTemp)
          {
               maxTemp = t;
          }
      }

      public static printMax()
      {
          System.out.println(temperature);
      }

      public static void main(String[] args)
      {
          Temperature t1 = new Temperature(75);
          Temperature t2 = new Temperature(100);
          Temperature.printMax();
      }
  }

   ====
   import static org.junit.Assert.*;

   import org.junit.*;

   import java.io.*;

   public class RunestoneTests extends CodeTestHelper
   {
       @Test
       public void testCodeContains1()
       {

           boolean passed =
                   checkCodeContains("static printMax() header", "public static void printMax()");
           assertTrue(passed);
       }

       @Test
       public void testCodeContains2()
       {
           String code = getCode();
           boolean passed =
                   code.contains("System.out.println(maxTemp);")
                           || code.contains("System.out.println(Temperature.maxTemp);");
           getResults("true", "" + passed, "printMax method returns the right value", passed);
           assertTrue(passed);
       }

       @Test
       public void testMain() throws IOException
       {
           String output = getMethodOutput("main");
           String expect = "100.0";
           boolean passed = getResults(expect, output, "Expected output from main", true);
           assertTrue(passed);
       }
   }

|Groupwork| Programming Challenge : Static Song and counter
------------------------------------------------------------

.. |The Ants Go Marching| raw:: html

   <a href="https://www.youtube.com/watch?v=QPwEZ8Vv2YQ" target="_blank">The Ants Go Marching</a>

.. |last lesson| raw:: html

   <a href="https://runestone.academy/ns/books/published/csawesome/Unit5-Writing-Classes/topic-5-6-writing-methods.html#groupwork-programming-challenge-song-with-parameters" target="_blank">last lesson</a>

In the |last lesson|, we wrote a class with methods to print out the song |The Ants Go Marching|. Notice that this is a class where there are no instance variables and we don't really need to generate multiple objects. With students or pets, it makes sense to have multiple objects. With the Song, we can just make the methods static and have just 1 copy of them.

1. Copy in your class from the |last lesson| into this active code window. Change the method(s) that print out the verses of the Song to be static. In the main method, change how you call the static methods by using just the classname instead of creating an object.

2. Add a public static variable called **numVerses** to the class that keeps track of the number of verses. Increment this variable in the method verse and print it out at the beginning of the verse.

.. activecode:: challenge-5-7-static-song
  :language: java
  :autograde: unittest

  public class Song
  {
      // Add a public static variable called numVerses

      // Change the method(s) to be static

      public static void main(String args[])
      {
          // Call the static method(s) to print out the Song
          // Print out the static variable numVerses

      }
  }

  ====
  import static org.junit.Assert.*;

  import org.junit.*;

  import java.io.*;

  /* Do NOT change Main or CodeTestHelper.java.
  Put the active code exercise in a file like ForLoop.java.
  Put your Junit test in the file RunestoneTests.java.
  Run. Test by changing ForLoop.java (student code).
  */
  public class RunestoneTests extends CodeTestHelper
  {
      @After
      public void tearDown()
      {
          super.tearDown();
          // Song.numVerses = 0;

      }

      @Test
      public void checkCodeContains1()
      {
          // check verse 1
          boolean passed =
                  checkCodeContains(
                          "verse(...) method header with two String parameters",
                          "public static void verse(String *, String *)");

          assertTrue(passed);
      }

      @Test
      public void checkCodeContains2()
      {
          // check static
          String code = getCode();
          int actual = countOccurences(code, "Song.verse(");
          String expected = "3";

          boolean passed = actual >= 3;
          getResults(
                  expected,
                  "" + actual,
                  "Checking that code contains three calls to verse(...) method using"
                      + " ClassName.staticMethod(...) syntax",
                  passed);
          assertTrue(passed);
      }

      @Test
      public void checkCodeContains3()
      {
          // check static
          String code = getCode();
          int actual = countOccurences(code, "public static int numVerses = 0");
          String expected = "1";

          boolean passed = actual >= 1;
          getResults(
                  expected,
                  "" + actual,
                  "Checking that code declares variable numVerses according to instructions and sets"
                      + " it to zero",
                  passed);

          assertTrue(passed);
      }

      @Test
      public void checkCodeContains4()
      {
          // check static
          String code = getCode();
          boolean increment = code.contains("numVerses++");
          String expected = "increments: true\n";
          String actual = "increments: " + increment + "\n";

          String anytext = "[\\s\\S]*";
          String regex = "System.out.print[ln]*\\([\"a-zA-Z0-9 +]*numVerses[\"a-zA-Z0-9 +]*\\);";
          boolean printed = code.matches(anytext + regex + anytext);
          expected += "prints: true";
          actual += "prints: " + printed;

          boolean passed = increment && printed;
          getResults(expected, actual, "Checking that code increments and prints numVerses", passed);

          assertTrue(passed);
      }

      @Test
      public void testVerses() throws IOException
      {
          String output = getMethodOutput("main").replaceAll(" his ", " a ").replaceAll("\n\n", "\n");
          String[] actualArray = output.split("\n");

          boolean passed = true;
          String error = "";
          String expect = "No errors";
          String actual = "No errors";

          int j = 0;

          for (int i = 0; i < actualArray.length; i++)
          {
              while (j < expectedArray.length && expectedArray[j].length() < 2) j++;
              while (i < expectedArray.length && actualArray[i].length() < 2) i++;

              if (j < expectedArray.length && actualArray[i].length() > 1)
              {
                  /*
                   * System.out.println(expectedArray[j]);
                   * System.out.println(actualArray[i]);
                   * System.out.println();
                   */
                  if (actualArray[i].matches("[\\s\\S]*[0-9]+[\\s\\S]*"))
                  {
                      continue;
                  }

                  String compAct = removeSpaces(actualArray[i].toLowerCase());
                  String compExp = removeSpaces(expectedArray[j].toLowerCase());

                  if (!compAct.equals(compExp))
                  {
                      expect = expectedArray[j].trim();
                      actual = actualArray[i].trim() + "\n(Error on line " + (i + 1) + " of output)";
                      passed = false;
                      error =
                              "\n"
                                  + "There may be more than one error! Did you forget a line?\n"
                                  + "(check spelling, new lines, and punctuation carefully)";
                      break;
                  }
              }

              j++;
          }

          getResults(expect, actual, "Checking output from main" + error, passed);
          assertTrue(passed);
      }

      private static String expectedOutput =
              "The ants go marching one by one, hurrah, hurrah\n"
                      + "The ants go marching one by one, hurrah, hurrah\n"
                      + "The ants go marching one by one\n"
                      + "The little one stops to suck a thumb\n"
                      + "And they all go marching down to the ground\n"
                      + "To get out of the rain, BOOM! BOOM! BOOM! BOOM!\n"
                      + "\n"
                      + "The ants go marching two by two, hurrah, hurrah\n"
                      + "The ants go marching two by two, hurrah, hurrah\n"
                      + "The ants go marching two by two\n"
                      + "The little one stops to tie a shoe\n"
                      + "And they all go marching down to the ground\n"
                      + "To get out of the rain, BOOM! BOOM! BOOM! BOOM!\n"
                      + "\n"
                      + "The ants go marching three by three, hurrah, hurrah\n"
                      + "The ants go marching three by three, hurrah, hurrah\n"
                      + "The ants go marching three by three\n"
                      + "The little one stops to climb a tree\n"
                      + "And they all go marching down to the ground\n"
                      + "To get out of the rain, BOOM! BOOM! BOOM! BOOM!";
      private static String[] expectedArray = expectedOutput.replaceAll("\n\n", "\n").split("\n");
  }

Summary
-------

- Static methods and variables include the keyword static  before their name in the header or declaration. They can be public or private.

- Static variables belong to the class, with all objects of a class sharing a single static variable.

- Static methods are associated with the class, not objects of the class.

- Static variables are used with the class name and the dot operator, since they are associated with a class, not objects of a class.

- Static methods cannot access or change the values of instance variables, but they can access or change the values of static variables.

- Static methods cannot call non-static methods.
