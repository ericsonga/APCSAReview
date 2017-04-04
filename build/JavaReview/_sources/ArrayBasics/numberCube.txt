.. qnum::
   :prefix: 7-15-
   :start: 1

Free Response - Number Cube
===========================

..	index::
	single: self divisor
    single: free response

The following is a free response question from 2009.  It was question 1 on the exam.  You can see all the free response questions from past exams at https://apstudent.collegeboard.org/apcourse/ap-computer-science-a/exam-practice.

**Question 1.**  A statistician is studying sequences of numbers obtained by repeatedly tossing a six-sided number cube. On each side of the number cube is a single number in the range of 1 to 6, inclusive, and no number is repeated on the cube. The statistician is particularly interested in runs of numbers. A run occurs when two or more consecutive tosses of the cube produce the same value. For example, in the following sequence of cube tosses, there are runs starting at positions 1, 6, 12, and 14.

.. figure:: Figures/numberLine.png
    :width: 757px
    :align: center
    :figclass: align-center

.. code-block:: java

   public class NumberCube
   {
    /** @return an integer value between 1 and 6, inclusive
     */
     public int toss()
     { /* implementation not shown */ }

     // There may be instance variables, constructors, and methods that are not shown.
   }

You will implement a method that collects the results of several tosses of a number cube and another method that calculates the longest run found in a sequence of tosses.

Try and Solve Part A
--------------------

(a) Write the method *getCubeTosses* that takes a number cube and a number of tosses as parameters. The method should return an array of the values produced by tossing the number cube the given number of times.

.. activecode:: FRQNumberCubeA
   :language: java

   /** Returns an array of the values obtained by tossing a number cube numTosses times.
    *  @param cube a NumberCube
    *  @param numTosses the number of tosses to be recorded
    *         Precondition: numTosses > 0
    *  @return an array of numTosses values
    */
    public static int[] getCubeTosses(NumberCube cube, int numTosses)

Try and Solve Part B
--------------------

(b) Write the method *getLongestRun* that takes as its parameter an array of integer values representing a series of number cube tosses. The method returns the starting index in the array of a run of maximum size. A run is defined as the repeated occurrence of the same value in two or more consecutive positions in the array.

.. activecode:: FRQNumberCubeB
   :language: java

   /** Returns the starting index of a longest run of two or more consecutive repeated values
    *  in the array values.
    *  @param values an array of integer values representing a series of number cube tosses
    *         Precondition: values.length > 0
    *  @return the starting index of a run of maximum size;
    *          -1 if there is no run
    */
    public static int getLongestRun(int[] values)
