.. qnum::
   :prefix: 2-5-
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

.. index::
    single: method
    single: parameter
    single: argument
    single: return

.. |runbutton| image:: Figures/run-button.png
    :height: 30px
    :align: top
    :alt: run button

.. |repl link| raw:: html

   <a href="https://firewalledreplit.com/@BerylHoffman/Java-Swing-Turtle" target="_blank" style="text-decoration:underline">repl.it link</a>

.. |github| raw:: html

   <a href="https://github.com/bhoffman0/APCSA-2019/tree/master/_sources/Unit2-Using-Objects/TurtleJavaSwingCode.zip" target="_blank" style="text-decoration:underline">here</a>

.. raw:: html

   <div class="unit-time">
     <svg xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi
          bi-clock"
          viewBox="0 0 16 16">
       <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
       <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
     </svg> Time estimate: 45 min.
   </div>

Calling Methods that Return Values
===================================

If a method is a **void method** and has **void** as its return type, like most
of the methods we have seen so far, that means that it does not return anything.
But some methods **return** a value back that the program can use. Because
methods are invoked `on` a given object, they can be used to return values that
tell us things about the object’s internal state.

Accessors, a.k.a. Getters
-------------------------

A simple kind of method that returs a value is what is formally called an
**accessor** becauses it accesses a value in an object. In the real world
everyone calls them **getters**. A getter is a method, almost always named
something that starts with ``get``, that takes no arguments and has a non-\
``void`` return type. It usually just returns the value of one of the object’s
instance variables. For example, the ``Turtle`` class has several getters,
``getWidth`` and ``getHeight`` which return the width and the height of a
``Turtle`` object and ``getXPos`` and ``getYPos`` which are the x and y values
of the ``Turtle``\ ’s position, all of which are in fact stored as instance
variables within the ``Turtle`` class.

That means that after you construct a ``Turtle``, either one of the default size
or by specifying a specific width and height as arguments to the constructor,
you don’t need to keep track of its size; you can always get the with and height
values from the ``Turtle`` itself via the ``getWidth`` and ``getHeight``
getters. And even better, if you create a ``Turtle`` and move it all around with
the ``forward`` and ``turn`` methods we discussed in the last section, you don’t
have to figure out where it ended up, you can just ask it with the ``getXPos``
and ``getYPos`` getters.

Note that when you use a getter, you need to do something with the value it
returns. You might assign it to a variable, use it in an expression , or print
it out. But if you don’t you’re just retrieving a value and doing nothing with
it and might as well not have bothered to call it in the first place.

Here are some examples of using getters on the ``Turtle`` object ``yertle``.

.. code-block:: java

    Turtle yertle = new Turtle(world);
    int width = yertle.getWidth();
    int height = yertle.getHeight();
    System.out.println("Yertle's width is: " + width);
    System.out.println("Yertle's height is: " + height);
    System.out.println("Yertle's x position is: " + yertle.getXPos() );
    System.out.println("Yertle's y position is: " + yertle.getYPos() );


.. note::

    A common error is forgetting to do something with the value returned from a method. When you call a method that returns a value, you should do something with that value like assigning it to a variable or printing it out.

|CodingEx| **Coding Exercise:**

.. activecode:: TurtleTestGetSet
    :language: java
    :autograde: unittest
    :datafile: turtleClasses.jar

    Try the code below that creates a turtle and moves it around a bit. Can you
    confirm that its new position matches what you’d expect given the movements
    it made? Try changing where it moves to make sure.

    (If the code below does not work in your browser, you can also copy in the
    code below into the Turtle code at this |repl link| (refresh page after
    forking and if it gets stuck) or download the files |github| to use in your
    own IDE.)

    ~~~~
    import java.util.*;
    import java.awt.*;
    import java.lang.Math;

    public class TurtleTestGetSet
    {
      public static void main(String[] args)
      {
          World world = new World(300,300);
          Turtle yertle = new Turtle(world);
          System.out.println("Yertle's is starting at: " + yertle.getXPos + ", " + yertle.getYPos());
          yertle.forward(100);
          yertle.turn(90);
          yertle.forward(50);
          System.out.println("Yertle's end up at: " + yertle.getXPos + ", " + yertle.getYPos());
          world.show(true);
      }
    }
    ====
    import static org.junit.Assert.*;
    import org.junit.*;;
    import java.io.*;

    public class RunestoneTests extends CodeTestHelper
    {
        public RunestoneTests() {
            super("TurtleTestGetSet");
        }

        @Test
        public void test1()
        {
            String orig = "import java.util.*;\nimport java.awt.*;\nimport java.lang.Math;\n\npublic class TurtleTestGetSet\n{\npublic static void main(String[] args)\n{\nWorld world = new World(300,300);\nTurtle yertle = new Turtle(world);\nSystem.out.println(\"Yertle's is starting at: \" + yertle.getXPos + \", \" + yertle.getYPos());\nyertle.forward(100);\nyertle.turn(90);\nyertle.forward(50);\nSystem.out.println(\"Yertle's end up at: \" + yertle.getXPos + \", \" + yertle.getYPos());\nworld.show(true);\n}\n}\n";
            boolean passed = codeChanged(orig);
            assertTrue(passed);
        }
    }

|CodingEx| **Coding Exercise:**

.. activecode:: TurtleArea
    :language: java
    :autograde: unittest
    :datafile: turtleClasses.jar

    Fix the errors in the code below so that it prints out the area of the space
    that the turtle occupies by multiplying its width and height. Remember that
    you have to do something with the values that the get methods return.

    ~~~~
    import java.util.*;
    import java.awt.*;
    import java.lang.Math;

    public class TurtleArea
    {
      public static void main(String[] args)
      {
          World world = new World(300,300);
          Turtle yertle = new Turtle(world);

          int area;
          yertle.getWidth() * getHeight;
          System.out.println("Yertle's area is: ");
      }
    }
    ====
    import static org.junit.Assert.*;
    import org.junit.*;;
    import java.io.*;

    public class RunestoneTests extends CodeTestHelper
    {
        public RunestoneTests() {
            super("TurtleArea");
        }

        @Test
        public void test1()
        {
            String actual = getMethodOutput("main");
            String expected = "Yertle's area is: 270";
            boolean passed = getResults(expected, actual, "Prints correct answer");
            assertTrue(passed);
        }
         @Test
        public void test2() {
            String code = getCode();
            String target = ".getHeight()";

            int num = countOccurences(code, target);

            boolean passed = num >= 1;

            getResults("1+", "" + num, "Calls to " + target, passed);
            assertTrue(passed);
        }

        @Test
        public void test3() {
            String code = getCode();
            String target = ".getWidth()";

            int num = countOccurences(code, target);

            boolean passed = num >= 1;

            getResults("1+", "" + num, "Calls to " + target, passed);
            assertTrue(passed);
        }
    }

|CodingEx| **Coding Exercise:**

.. activecode:: TurtleTestMethodsReturn2
    :language: java
    :autograde: unittest
    :datafile: turtleClasses.jar

    Try some of the get methods in the program below. Note that you have to
    print out the values the get methods return in order to see them! If you
    just call the get method and don’t print it, you’re computing a value and
    then doing nothing with it.
    ~~~~
    import java.util.*;
    import java.awt.*;
    import java.lang.Math;

    public class TurtleTestMethods2
    {
      public static void main(String[] args)
      {
          World world = new World(300,300);
          Turtle yertle = new Turtle(world);

          // Try some get methods here!



          world.show(true);
      }
    }
    ====
    import static org.junit.Assert.*;
    import org.junit.*;;
    import java.io.*;

    public class RunestoneTests extends CodeTestHelper
    {
        public RunestoneTests() {
            super("TurtleTestMethods2");
        }

        @Test
        public void test1()
        {
            String code = getCode();
            int num = countOccurences(code, "getWidth()");

            boolean passed = num > 0;
            getResults(">=1", "" + num, "Calls to getWidth()", passed);
            assertTrue(passed);
        }

        @Test
        public void test2()
        {
            String code = getCode();
            int num = countOccurences(code, "getHeight()");

            boolean passed = num > 0;
            getResults(">=1", "" + num, "Calls to getHeight()", passed);
            assertTrue(passed);
        }

        @Test
        public void test3()
        {
            String code = getCode();
            int num = countOccurences(code, "toString()") + countOccurences(code, "System.out.println(yertle)");

            boolean passed = num > 0;
            getResults(">=1", "" + num, "Calls to toString()", passed);
            assertTrue(passed);
        }
    }

Methods with Arguments and Return Values
-----------------------------------------

Methods that take arguments and return values are like mathematical functions. Given some input, they return a value. For example, a square(x) method would take an argument x and return its square by multiplying it by itself.

.. figure:: Figures/function.png
    :width: 400px
    :align: center
    :alt: function
    :figclass: align-center

    Figure 1: Method that takes arguments and returns a value

You will not write your own methods until Unit 5, but you should be able to trace through method calls like below. Notice that the **return statement** in a method returns the value that is indicated in the return type back to the calling method. The calling method must save or use or print that value.

|Exercise| **Check your understanding**

.. mchoice:: traceReturnMethods
   :practice: T
   :answer_a: 5
   :answer_b: 7
   :answer_c: 4 3
   :answer_d: 2 3
   :answer_e: Does not compile.
   :correct: b
   :feedback_a: Make sure you call both methods and compute the square of 2 and then add the results.
   :feedback_b: Yes, square(2) returns 4 which is added to divide(6,2) which returns 3. The total of 4 + 3 is 7.
   :feedback_c: Make sure you add the results before printing it out.
   :feedback_d: Make sure you square(2) and add the results before printint it out.
   :feedback_e: Try the code in an active code window.

   What does the following code print out?

   .. code-block:: java

      public class MethodTrace
      {
        public int square(int x)
        {
            return x*x;
        }
        public int divide(int x, int y)
        {
              return x/y;
        }
        public static void main(String[] args) {
            MethodTrace traceObj = new MethodTrace();
            System.out.println( traceObj.square(2) + traceObj.divide(6,2) );
        }
       }


.. |visualization| raw:: html

   <a href="http://www.pythontutor.com/visualize.html#code=public%20class%20MethodTrace%20%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20public%20int%20square%28int%20x%29%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20x*x%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20public%20int%20divide%28int%20x,%20int%20y%29%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20x/y%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20public%20static%20void%20main%28String%5B%5D%20args%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20MethodTrace%20traceObj%20%3D%20new%20MethodTrace%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20System.out.println%28%20traceObj.square%282%29%20%2B%20traceObj.divide%286,2%29%20%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%7D&cumulative=false&curInstr=16&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=java&rawInputLstJSON=%5B%5D&textReferences=false" target="_blank" style="text-decoration:underline">visualization</a>

Try this |visualization| to see this code in action.

|Groupwork| Programming Challenge : Turtle Distances
----------------------------------------------------

1. The ``Turtle`` class has a method called ``getDistance(x,y)`` which will return the turtle's distance from a point (x,y). Can you find yertle's distance from the point (0,0)?

2. Add another turtle and make both turtles move. Then find the distance between them. You must use the ``getXPos`` and ``getYPos`` methods as well as the ``getDistance`` method.

.. activecode:: challenge2-5-TurtleDistance
    :language: java
    :autograde: unittest
    :datafile: turtleClasses.jar

    import java.util.*;
    import java.awt.*;
    import java.lang.Math;

    public class TurtleTestDistance
    {
      public static void main(String[] args)
      {
          World world = new World(300,300);
          Turtle yertle = new Turtle(world);

          // Can you find yertle's distance from the point (0,0)?

          // Can you find the distance between 2 turtles?



          world.show(true);
      }
    }
    ====
    import static org.junit.Assert.*;
    import org.junit.*;;
    import java.io.*;

    public class RunestoneTests extends CodeTestHelper
    {
        public RunestoneTests() {
            super("TurtleTestDistance");
        }

        @Test
        public void test2()
        {
            String code = getCode();
            int num = countOccurences(code, ".getXPos()");

            boolean passed = num > 0;
            getResults(">=1", "" + num, "Calls to getXPos()", passed);
            assertTrue(passed);
        }

        @Test
        public void test3()
        {
            String code = getCode();
            int num = countOccurences(code, ".getYPos()");

            boolean passed = num > 0;
            getResults(">=1", "" + num, "Calls to getYPos()", passed);
            assertTrue(passed);
        }

        @Test
        public void test4()
        {
            String code = getCode();
            int num = countOccurences(code, ".getDistance(");

            boolean passed = num >= 2;
            getResults(">=2", "" + num, "Calls to getDistance(...)", passed);
            assertTrue(passed);
        }

        @Test
        public void test1()
        {
            String code = getCode();
            int num = countOccurences(code, ".getDistance(0,0)");

            boolean passed = num >= 1;
            getResults(">=1", "" + num, "Calls getDistance(0,0)", passed);
            assertTrue(passed);
        }
    }


Summary
-------------------

- Some methods return values.
- To use the return value when calling a method, it must be stored in a variable or used as part of an expression. The variable data type must match the return type of the method.

AP Practice
-------------

.. mchoice:: AP2-5-1
    :practice: T

    Consider the following method.

    .. code-block:: java

        public double calculatePizzaBoxes(int numOfPeople, double slicesPerBox)
        { /*implementation not shown */}

    Which of the following lines of code, if located in a method in the same class as calculatePizzaBoxes, will compile without an error?

    - int result = calculatePizzaBoxes(45, 9.0);

      - The method calculatePizzaBoxes returns a double value that cannot be saved into an int variable.

    - double result = calculatePizzaBoxes(45.0, 9.0);

      - The method calculatePizzaBoxes has an int parameter that cannot hold a double value 45.0.

    - int result = calculatePizzaBoxes(45.0, 9);

      - The method calculatePizzaBoxes has an int parameter that cannot hold a double value 45.0. Note that the int 9 can be passed into a double parameter.

    - double result = calculatePizzaBoxes(45, 9.0);

      + The method calculatePizzaBoxes has an int and a double parameter and returns a double result.

    - result = calculatePizzaBoxes(45, 9);

      - The variable result has not been declared (with an appropriate data type).

.. mchoice:: AP2-5-2
    :practice: T

    Consider the following class definition.

    .. code-block:: java

        public class Liquid
        {
            private double boilingPoint;
            private double freezingPoint;
            private double currentTemp;

            public Liquid()
            {
                currentTemp = 50;
            }

            public void lowerTemp()
            {
                currentTemp -= 10;
            }

            public double getTemp()
            {
                return currentTemp;
            }
        }

    Assume that the following code segment appears in a class other than Liquid.

    .. code-block:: java

        Liquid water = new Liquid();
        water.lowerTemp();
        System.out.println(water.getTemp());

    What is printed as a result of executing the code segment?

    - \-10

      - The Liquid() constructor sets the currentTemp instance variable to 50 and the lowerTemp() method subtracts 10 from it.

    - 50

      - The Liquid() constructor sets the currentTemp instance variable to 50 and the lowerTemp() method subtracts 10 from it.

    - water.getTemp()

      - The System.out.println will print the value returned from water.getTemp().

    - The code will not compile.

      - This code should compile.

    - 40.0

      + Correct, the Liquid() constructor sets the currentTemp instance variable to 50 and the lowerTemp() method subtracts 10 from it, and getTemp() returns the currentTemp value as a double.
