.. qnum::
   :prefix: 7-17-
   :start: 1

Free Response - Number Cube A
=============================

..	index::
	single: numbercubea
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

     // There may be instance variables, constructors, and methods not shown.
   }

You will implement a method ``getCubeTosses`` that collects the results of several tosses of a number cube.

How to Solve
----------------
.. mchoice:: numbercubea_1
   :answer_a: Math.random();
   :answer_b: int randomNum;
   :answer_c: new String();
   :correct: a
   :feedback_a: This expression correctly generates a random number.
   :feedback_b: This expression simply declares an integer and does not generate a value.
   :feedback_c: This expression creates a String object and does not generate a numeric value.

   Which Java expression correctly generates a random number?

The Algorithm
-------------------
.. parsonsprob:: NumberCubeA

  The method getCubeTosses below contains the correct code for one solution to this problem, but it is mixed up and contains extra blocks that are not needed.  Drag the needed code from the left to the right and put them in order with the correct indention so that the code would work correctly.
  -----
  public static int[] getCubeTosses(NumberCube cube,
  int numTosses)
  {
  =====
      int[] cubeTosses = new int[numTosses];
  =====
      for (int i = 0; i < numTosses; i++)
      {
  =====
          cubeTosses[i] = cube.toss();
  =====
      } // end for
  =====
      return cubeTosses;
  =====
  } // end method


Try and Solve Part A
--------------------

Write the method ``getCubeTosses`` that takes a number cube and a number of tosses as parameters. The method should return an array of the values produced by tossing the number cube the given number of times.

.. activecode:: FRQNumberCubeA
   :language: java

    public class NumberCube
    {
        public NumberCube()
        {

        }

        public int toss()
        {
            return (int)( (Math.random() * 6) + 1 );
        }

        public static int[] getCubeTosses(NumberCube cube, int numTosses)
        {
            // Complete this method
        }

        public static void main(String[] args){
            NumberCube cube = new NumberCube();
            int numTosses = 9;
            int[] tosses = getCubeTosses(cube, numTosses);

            if(tosses.length < numTosses){
              System.out.println("It looks like youre not returning the correct \n" +
                                                "amount of tosses.\n" +
                                  "\nRemember that your array should be of length\nnumTosses.");
            } else {
              System.out.println("Looks like your code works well!");
            }
        }
    }
