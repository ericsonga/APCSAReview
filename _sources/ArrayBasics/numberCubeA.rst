.. qnum::
   :prefix: 7-17-
   :start: 1

Free Response - Number Cube A
=============================

..      index::
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

**Part a.** Write the method ``getCubeTosses`` that takes a number cube and a number of tosses as parameters. The
method should return an array of the values produced by tossing the number cube the given number of times.

How to Solve
----------------

You will need to create an array to hold the results of each cube toss.  The size of the array should be the passed number of times you will call ``toss``.  You will need to loop that number of times and each time set the value of the array at that index to the result of the ``toss``.  Return the array.   

.. mchoice:: numbercubea_1
   :answer_a: <code>(int) (Math.random() * 6) + 1)</code>
   :answer_b: <code>(int) (Math.random() * 6)</code>
   :answer_c: <code>Math.random(6);</code>
   :correct: a
   :feedback_a: This expression correctly generates a random number between 1 and 6.
   :feedback_b: This expression generates a random number from 0 to 5.  
   :feedback_c: This isn't valid

   Which Java expression correctly generates a random number between 1 and 6?
   
.. mchoice:: numbercubea_2
   :answer_a: <code>int[] tossArray = new int[];</code>
   :answer_b: <code>int[] tossArray = new int(numTosses);</code>
   :answer_c: <code>int[] tossArray = new int[numTosses];</code>
   :correct: c
   :feedback_a: You need to specify the size of the array when you create it.
   :feedback_b: It should be <code>new int[numTosses]</code>.
   :feedback_c: This will create an array of size <code>numTosses</code>.

   Which of the following correctly creates an array of size ``numTosses``?
   
.. mchoice:: numbercubea_3
   :answer_a: <code>for (int i = 0; i <= numTosses; i++)</code>
   :answer_b: <code>for (int i = 1; i < numTosses; i++)</code>
   :answer_c: <code>for (int i = 0; i < numTosses; i++)</code>
   :correct: c
   :feedback_a: This will execute <code>numTosses + 1</code> times.
   :feedback_b: This will execute <code>numTosses - 1</code> times.
   :feedback_c: This will execute <code>numTosses</code> times.

   Which of the following correctly loops ``numTosses`` number of times?
   

Mixed Up Code
-------------------
.. parsonsprob:: NumberCubeA

  The method <code>getCubeTosses</code> below contains the correct code for one solution to this problem, but it is mixed up.  Drag the needed code from the left to the right and put them in order with the correct indention so that the code would work correctly.
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
-----------------------

Write the method ``getCubeTosses`` that takes a number cube and a number of tosses as parameters. The method should return an array of the values produced by tossing the number cube the given number of times.

.. activecode:: FRQNumberCubeA
   :language: java

    import java.util.Arrays;
    public class NumberCube
    {

        public int toss()
        {
            return (int)( (Math.random() * 6) + 1 );
        }

        public static int[] getCubeTosses(NumberCube cube, int numTosses)
        {
            // Complete this method
        }

        public static void main(String[] args) {
            NumberCube cube = new NumberCube();
            int numTosses = 9;
            int[] tosses = getCubeTosses(cube, numTosses);

            if(tosses.length < numTosses) {
              System.out.println("It looks like you are not returning an array of the correct size:");
              System.out.println(Arrays.toString(tosses));
            } else {
              System.out.println("You returned an array of the correct size:");
              System.out.println(Arrays.toString(tosses));
            }
        }
    }
