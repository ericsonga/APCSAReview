.. qnum::
   :prefix:  10-17-
   :start: 1

Free Response - APLine
======================

..	index::
	single: apline
    single: free response

The following is a free response question from 2010.  It was question 2 on the exam.  You can see all the free response questions from past exams at https://apstudent.collegeboard.org/apcourse/ap-computer-science-a/exam-practice.

**Question 2.**  An ``APLine`` is a line defined by the equation *ax* + *by* + *c* = 0,where *a* is not equal to zero,*b* is not equal to
zero, and *a*, *b*, and *c* are all integers. The slope of an ``APLine`` is defined to be the double value *-a* / *b* . A point (represented by integers x and y) is on an ``APLine`` if the equation of the ``APLine`` is satisfied when those x and y values are substituted into the equation. That is, a point represented by x and y is on the line if
*ax* + *by* + *c* is equal to 0. Examples of two ``APLine`` equations are shown in the following table.

.. figure:: Figures/apLineTable.png
    :width: 850px
    :align: center
    :figclass: align-center

Assume that the following code segment appears in a class other than `APLine`. The code segment shows an example of using the `APLine` class to represent the two equations shown in the table.

.. code-block:: java

   APLine line1 = new APLine(5, 4, -17);
   double slope1 = line1.getSlope();       // slope1 is assigned -1.25
   boolean onLine1 = line1.isOnLine(5, -2);// true because 5(5) + 4(-2) + (-17) = 0

   APLine line2 = new APLine(-25, 40, 30);
   double slope2 = line2.getSlope();       // slope2 is assigned 0.625
   boolean onLine2 = line2.isOnLine(5, -2);// false because -25(5) + 40(-2) + 30 != 0

How to Solve
----------------
.. mchoice:: apline_1
   :answer_a: public interface MyClass
   :answer_b: public class MyClass
   :answer_c: public static void main(String[] args)
   :correct: b
   :feedback_a: This is the declaration of an interface. A proper class definition will not have the word "interface" included.
   :feedback_b: A valid class declaration always uses the reserved word "class" before the name of the class.
   :feedback_c: This is a method declaration. Classes in Java cannot be declared void, as they cannot return values. They also cannot have parameters.

   How do you declare a class in Java?

.. mchoice:: apline_2
   :answer_a: public MyClass(int a, int b, int c)
   :answer_b: public String MyClass(int a, int b, int c)
   :answer_c: public class MyClass(int a, int b, int c)
   :correct: a
   :feedback_a: Constructor methods have the same name as the class, do not return values, and do not contain the reserved word "class".
   :feedback_b: Constructor methods do not return values.
   :feedback_c: Although constructor declarations may appear to be similar to class declarations, constructors never use the "class" reserved word.

   How do you declare a constructor method that requires three parameters?

Try and Solve It
----------------

Write the ``APLine`` class. Your implementation must include a constructor that has three integer parameters that represent ``a``, ``b``, and ``c``, in that order.
You may assume that the values of the parameters representing ``a`` and ``b`` are not zero.
It must also include a method ``getSlope`` that calculates and returns the slope of the line, and a method ``isOnLine`` that returns ``true`` if the point represented by its two parameters (*x* and *y*, in that order) is on the ``APLine`` and returns ``false`` otherwise.
Your class must produce the indicated results when invoked by the code segment given above.
You may ignore any issues related to integer overflow.

.. activecode:: APLineFRQ
   :language: java

   // Declare the APLine class.
   {
    /** State variables. Any numeric type; object or primitive. */

    /** Constructor with 3 int parameters. */
    {}

    /** getSlope method */
    {}

    /** isOnLine method */
    {}

    public static void main(String[] args){
      APLine lineOne = new APLine(5, 4, -17);
      APLine lineTwo = new APLine(-25, 40, 30);

      boolean test1 = lineOne.isOnLine(5, -2) && !(lineTwo.isOnLine(5, -2));
      boolean test2 = (lineOne.getSlope() == -1.25) && (lineTwo.getSlope() == 0.625);

      if(test1 && test2){
        System.out.println("Looks like your code works well!");
      } else {
        System.out.println("Oops!");
        if(!test1)
          System.out.println("Looks like your isOnLine method doesn't work properly.\n");

        if(!test2)
          System.out.println("Looks like your getSlope method doesn't work properly.\n");

        System.out.println("Make a few changes to your code, please.");
      }
    }

   }
