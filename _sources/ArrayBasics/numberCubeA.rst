.. qnum::
   :prefix: 7-17-
   :start: 1

Free Response - Number Cube A
=============================

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

How to Solve
----------------
.. mchoice:: numbercubea_1
   :answer_a: public interface MyClass
   :answer_b: public class MyClass
   :answer_c: public static void main(String[] args)
   :correct: b
   :feedback_a: This is the declaration of an interface. A proper class definition will not have the word "interface" included.
   :feedback_b: A valid class declaration always uses the reserved word "class" before the name of the class.
   :feedback_c: This is a method declaration. Classes in Java cannot be declared void, as they cannot return values. They also cannot have parameters.

   How do you declare a class in Java?

.. mchoice:: numbercubea_2
   :answer_a: public MyClass(int a, int b, int c)
   :answer_b: public String MyClass(int a, int b, int c)
   :answer_c: public class MyClass(int a, int b, int c)
   :correct: a
   :feedback_a: Constructor methods have the same name as the class, do not return values, and do not contain the reserved word "class".
   :feedback_b: Constructor methods do not return values.
   :feedback_c: Although constructor declarations may appear to be similar to class declarations, constructors never use the "class" reserved word.

   How do you declare a constructor method that requires three parameters?

The Algorithm
-------------------
.. parsonsprob:: NumberCubeA

  The method getIndexForFit below contains the correct code for one solution to this problem, but it is mixed up and contains extra blocks that are not needed.  Drag the needed code from the left to the right and put them in order with the correct indention so that the code would work correctly.
  -----
  private int getIndexForFit(NumberTile tile) {
   boolean empty = this.board.size() == 0;
   boolean firstTile = tile.getRight() == this.board.get(0).getLeft();
 =====
   if (empty || firstTile)
     return 0;
 =====
   for (int i = 1; i < this.board.size(); i++)
   {
 =====
     if (tile.getLeft() == this.board.get(i-1).getRight() &&
       tile.getRight() == this.board.get(i).getLeft())
     return i;
 =====
   } // end for
 =====
   NumberTile lastTile = this.board.get(this.board.size() - 1);
   if (tile.getLeft() == lastTile.getRight())
       return this.board.size();
 =====
   return -1;
 =====
 } // end method

Try and Solve Part A
--------------------

(a) Write the method ``getCubeTosses`` that takes a number cube and a number of tosses as parameters. The method should return an array of the values produced by tossing the number cube the given number of times.

.. activecode:: FRQNumberCubeA
   :language: java

   public class NumberCube
   {
    /** @return an integer value between 1 and 6, inclusive
     */
     public int toss()
     { /* implementation not shown */ }

      public static int[] getCubeTosses(NumberCube cube, int numTosses){
        // Complete this method
      }

      public static void main(String[] args){

      }
   }

Try and Solve Part B
--------------------

(b) Write the method ``getLongestRun`` that takes as its parameter an array of integer values representing a series of number cube tosses. The method returns the starting index in the array of a run of maximum size. A run is defined as the repeated occurrence of the same value in two or more consecutive positions in the array.

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
