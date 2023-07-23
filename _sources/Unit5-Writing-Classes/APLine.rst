Free Response Question - APLine
================================

.. index::
    single: apline
    single: free response

The following is a free response question from 2010.  It was question 2 on the exam.  You can see all the free response questions from past exams at https://apstudents.collegeboard.org/courses/ap-computer-science-a/free-response-questions-by-year.

**Question 2.**  An `APLine` is a line defined by the equation ``ax + by + c = 0``,where ``a`` is not equal to zero, ``b`` is not equal to
zero, and ``a``, ``b``, and ``c`` are all integers. The slope of an `APLine` is defined to be the double value ``-a / b`` . A point (represented by integers ``x`` and ``y``) is on an `APLine` if the equation of the `APLine` is satisfied when those ``x`` and ``y`` values are substituted into the equation. That is, a point represented by ``x`` and ``y`` is on the line if
``ax + by + c`` is equal to 0. Examples of two `APLine` equations are shown in the following table.

.. figure:: Figures/apLineTable.png
    :width: 850px
    :align: center
    :figclass: align-center

Assume that the following code segment appears in a class other than `APLine`. The code segment shows an example of using the `APLine` class to represent the two equations shown in the table.

.. code-block:: java

   APLine line1 = new APLine(5, 4, -17);
   double slope1 = line1.getSlope();        // slope1 is assigned -1.25
   boolean onLine1 = line1.isOnLine(5, -2); // true because 5(5) + 4(-2) + (-17) = 0

   APLine line2 = new APLine(-25, 40, 30);
   double slope2 = line2.getSlope();        // slope2 is assigned 0.625
   boolean onLine2 = line2.isOnLine(5, -2); // false because -25(5) + 40(-2) + 30 != 0

Try and Solve It
----------------

Write the `APLine` class. Your implementation must include a constructor that has three integer parameters that represent ``a``, ``b``, and ``c``, in that order.
You may assume that the values of the parameters representing ``a`` and ``b`` are not zero.

It must also include a method ``getSlope()`` that calculates and returns the slope of the line (using the equation ``-a / b``) and a method ``isOnLine(x, y)`` that returns ``true`` if the point represented by its two parameters (``x`` and ``y``, in that order) is on the ``APLine`` and returns ``false`` otherwise, by testing  if
``ax + by + c`` is equal to 0.

Your class must produce the indicated results when the main method below is run. You may ignore any issues related to integer overflow.

.. activecode:: APLineFRQ
   :language: java
   :autograde: unittest

   Write a class APLine with instance variables, a constructor with 3 paramaters for a, b, c, and the methods getSlope() and isOnLine(x,y).
   ~~~~
   // Declare the APLine class

   {
    /** Declare instance variables */

    /** Constructor with 3 int parameters. */

    /** method getSlope(): Determine the slope of this APLine. */

    /** method isOnLine(x,y): Determine if coordinates (x,y) represent a point on this APLine. */

    /** Test with this main method */
    public static void main(String[] args)
    {
        APLine line1 = new APLine(5, 4, -17);
        double slope1 = line1.getSlope(); // slope1 is assigned -1.25
        boolean onLine1 = line1.isOnLine(5, -2); // true because 5(5) + 4(-2) + (-17) = 0

        APLine line2 = new APLine(-25, 40, 30);
        double slope2 = line2.getSlope(); // slope2 is assigned 0.625
        boolean onLine2 = line2.isOnLine(5, -2); // false because -25(5) + 40(-2) + 30 != 0
        // Should print out true and false
        System.out.println(onLine1 + " " + onLine2);
     }
   }
   ====
   // Test Code for Lesson 5.15 - FRQ - APLine
   import static org.junit.Assert.*;

   import org.junit.Test;

   import java.io.*;

   public class RunestoneTests extends CodeTestHelper
   {
       public RunestoneTests()
       {
           super("APLine");
           // This sets default values for when objects are instantiated
           Object[] values = new Object[] {3, 2, -6};
           setDefaultValues(values);
       }

       @Test
       public void testMain() throws IOException
       {
           String output = getMethodOutput("main");
           String expect = " true false";

           boolean passed = getResults(expect, output, "Running main");
           assertTrue(passed);
       }

       @Test
       public void testConstructor()
       {
           String output = checkConstructor(3);
           String expect = "pass";

           boolean passed = getResults(expect, output, "Checking constructor with 3 parameters");
           assertTrue(passed);
       }

       @Test
       public void testGetSlope() throws IOException
       {
           double output = Double.parseDouble(getMethodOutput("getSlope"));
           double expect = -1.5;

           boolean passed = getResults(expect, output, "Checking method getSlope()");
           assertTrue(passed);
       }

       @Test
       public void testIsOnLine1() throws IOException
       {
           Object[] args = {2, 0};
           String output = getMethodOutput("isOnLine", args);
           String expect = "true";

           boolean passed = getResults(expect, output, "Checking method isOnLine(5, -2)");
           assertTrue(passed);
       }

       @Test
       public void testIsOnLine2() throws IOException
       {
           Object[] args = {5, -2};
           String output = getMethodOutput("isOnLine", args);
           String expect = "false";

           boolean passed = getResults(expect, output, "Checking method isOnLine(5, -2)");
           assertTrue(passed);
       }

       @Test
       public void testPrivateVariables()
       {
           String expect = "3 Private";
           // Will produce a printout with number of private and public variables
           String output = testPrivateInstanceVariables();

           boolean passed = getResults("3 Private", output, "Checking Instance Variable(s)");

           assertTrue(passed);
       }
   }

