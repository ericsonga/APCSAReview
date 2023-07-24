.. qnum::
   :prefix: 9-10-
   :start: 1

Free Response - Gray Image A
-------------------------------

.. index::
    single: gray image
    single: free response

The following is part a of a free response question from 2012.  It was question 4 on the exam.  You can see all the free response questions from past exams at https://apstudents.collegeboard.org/courses/ap-computer-science-a/free-response-questions-by-year.

**Question 4.**  A grayscale image is represented by a 2-dimensional rectangular array of pixels (picture elements). A pixel is an integer value that represents a shade of gray. In this question, pixel values can be in the range from 0 through 255, inclusive. A black pixel is represented by 0, and a white pixel is represented by 255. The declaration of the ``GrayImage`` class is shown below.

.. code-block:: java

   public class GrayImage
   {
       public static final int BLACK = 0;
       public static final int WHITE = 255;

       /**
        * The 2-dimensional representation of this image. Guaranteed not to be null.
        * All values in the array are within the range [BLACK, WHITE], inclusive.
        */
       private int[][] pixelValues;

       /**
        * @return the total number of white pixels in this image. Postcondition: this
        *     image has not been changed.
        */
       public int countWhitePixels()
       {
           /* to be implemented in part (a) */
       }
   }

**Part a.**  Write the method ``countWhitePixels`` that returns the number of pixels in the image that contain the value ``WHITE``.  For example, assume that ``pixelValues`` contains the following image.

.. figure:: Figures/grayImageA.png
    :width: 300px
    :align: center
    :figclass: align-center

    Figure 1: Example 2D array

A call to ``countWhitePixels`` method would return 5 because there are 5 entries (shown in boldface)
that have the value ``WHITE``.

.. code-block:: java

   public class GrayImage
   {
       public static final int BLACK = 0;
       public static final int WHITE = 255;

       /**
        * The 2-dimensional representation of this image. Guaranteed not to be null.
        * All values in the array are within the range [BLACK, WHITE], inclusive.
        */
       private int[][] pixelValues;

       /**
        * @return the total number of white pixels in this image. Postcondition: this
        *     image has not been changed.
        */
       public int countWhitePixels()
       {
           /* to be implemented in part (a) */
       }
   }

How to solve this problem
===========================

To solve this problem, we will need to loop through the entire 2D array, looking for instances of a ``WHITE`` pixel, keeping track of our count during the loop.

.. reveal:: 2012greyScale_Q1
    :showtitle: Reveal Loop Type Problem
    :hidetitle: Hide Loop T Problem

    .. mchoice:: frgia_1
       :answer_a: single for each loop
       :answer_b: nested for loop
       :answer_c: nested while loop
       :correct: b
       :feedback_a: This is a two-dimensional array so you would need a nested for-each loop.
       :feedback_b: Correct!
       :feedback_c: You could use a nested while loop, but since you know the numbers of rows and columns a nested for loop is usually better since with a while loop you could forget to increment the row or column index.

       What kind of loop could you use to solve this problem?

.. reveal:: 2012greyScale_Q1.5
    :showtitle: Reveal Alternate Loop Problem
    :hidetitle: Hide Alternate Loop Problem

    .. mchoice:: frgia_1.5
       :answer_a: nested for each loop
       :answer_b: single for loop
       :answer_c: nested switch statement
       :correct: a
       :feedback_a: Correct!
       :feedback_b: For a two-dimensional array you would need to use a nested for loop.
       :feedback_c: Nested switch statements would not work in this situation and are generally convoluted and difficult to read.

       What is another kind of loop you could use to solve this problem?



Looping through a 2D array is more complicated than the simple arrays we usually see, requiring nested for loops. Check out the questions and code below, which displays how nested for loops work to display a block of numbers.

.. reveal:: 2012greyScale
    :showtitle: Reveal Nested For Loop Iteration Example
    :hidetitle: Hide Nested For Loop Iteration Example

    .. activecode:: lcfrgia1
       :language: java

       public class Test
       {
           public static void main(String[] args)
           {
               for (int i = 0; i < 5; i++)
               {
                   for (int j = 0; j < 5; j++)
                   {
                       System.out.print(j);
                   }
                   System.out.println();
               }
           }
       }

.. reveal:: 2012greyScaleForEach
    :showtitle: Reveal Nested For Each Iteration Example
    :hidetitle: Hide Nested For Each Iteration Example

    .. activecode:: 2012greyScaleForEach_A
       :language: java

        public class Test
        {
            public static void main(String[] args)
            {
                int[][] arr = new int[5][5];
                for (int[] row : arr)
                {
                    for (int ent : row)
                    {
                        System.out.print(ent);
                    }
                    System.out.println();
                }
            }
        }

Algorithm
===================
When approaching this problem, it can be helpful to look for keywords or hints that maybe be in the problem statement. This section contains a plain English explanation of one way to solve this problem as well as problems that test your understanding of how to write the code to do those things.  Click on the buttons to reveal the questions.

.. shortanswer:: gray_image_A

   Explain in plain English what your code will have to do to answer this question.  Use the variable names given above.

.. reveal:: 2012GreyScale_alg
   :showtitle: Reveal Class Problem
   :hidetitle: Hide Class Problem

   .. mchoice:: 2012GreyScale_alg_ans
      :answer_a: pixelValues
      :answer_b: greyimage
      :answer_c: countWhitePixels
      :answer_d: GrayImage
      :correct: d
      :feedback_a: Pixel values is a private member variable of the overall class, it is not the class that contains countWhitePixels
      :feedback_b: Capitalization and spelling are important! Check the class name again carefully.
      :feedback_c: This is the name of the method you are writing! Since it is not a constructor, the overall Class name cannot be countWhitePixels
      :feedback_d: Correct!

      Which class is ``countWhitePixels`` a method in?

.. reveal:: 2012GreyScale_alg1
    :showtitle: Reveal Variable Problem
    :hidetitle: Hide Variable Problem

    .. mchoice:: 2012GreyScale_alg1_ans
       :answer_a: pixelValues
       :answer_b: You need to initialize your own
       :answer_c: countWhitePixels
       :answer_d: This method is called using the dot operation so you can just write "this"
       :correct: a
       :feedback_a: Correct!
       :feedback_b: This method iterates through an already existing image, which can be found in the GreyImage class initialization.
       :feedback_c: This is the name of the method you are writing, not an array.
       :feedback_d: Although this method is called with the dot operator, you still need to specify the name of the array and cannot only write "this"

       What array will you be modifying in this method?

There are many ways to solve this question, but we will only cover two in this section. Although it is a good exercise to be able to write the solution in multiple ways, you do not need to write both for the AP exam and you can just look at the problems below which relate to the method that is more intuitive to you.

If you want to solve this problem using nested for loops, complete the three questions below.

.. reveal:: 2012GreyScale_alg2
    :showtitle: Reveal For Loop Outer Bound Problem
    :hidetitle: Hide For Loop Outer Bound Problem

    .. mchoice:: 2012GreyScale_alg2_ans
     :answer_a: (int row = 0; row < pixelValues.length - 1; row++)
     :answer_b: (int row = 0; row < pixelValues.length; row++)
     :answer_c: (int row = 0; row < pixelValues.height; row++)
     :answer_d: (int row = 0; row < pixelValues.height - 1; row++)
     :correct: b
     :feedback_a: This does not iterate through all the rows of the array
     :feedback_b: Correct
     :feedback_c: The .height method does not exist
     :feedback_d: The .height method does not exist

     What could you write for the outer for loop so that it iterates through the rows of the array?

.. reveal:: 2012GreyScale_alg3
    :showtitle: Reveal For Loop Inner Bound Problem
    :hidetitle: Hide For Loop Inner Bound Problem

    .. mchoice:: 2012GreyScale_alg3_ans
     :answer_a: (int col = 0; col <= row; col++)
     :answer_b: (int col = 0; col < pixelValues[0].length - 1; col++)
     :answer_c: (int col = 0; col < row; col++)
     :answer_d: (int col = 0; col < pixelValues[0].length; col++)
     :correct: d
     :feedback_a: This does not correctly iterate through all the columns in the array
     :feedback_b: This stops one short of iterating through the whole array
     :feedback_c: This does not correctly iterate through all the columns in the array
     :feedback_d: Correct!

     What could you write for the inner for loop so that it iterates through the columns of the array?

.. reveal:: 2012GreyScale_alg4
    :showtitle: Reveal For Loop Equivalence Problem
    :hidetitle: Hide For Loop Equivalence Problem

    .. mchoice:: 2012GreyScale_alg4_ans
     :answer_a: if (pixelValues[row][col] == 0)
     :answer_b: if (pixelValues[col][row] == 255)
     :answer_c: if (pixelValues[row][col] == WHITE)
     :answer_d: if (pixelValue == WHITE)
     :correct: c
     :feedback_a: 0 is actually equal to black
     :feedback_b: the column and row variables are switched, so the array could possibly go out of bounds.
     :feedback_c: Correct!
     :feedback_d: pixelValue does not access the integers stored in the array

     how could you check if the current value is white?

Alternatively, if you want to solve this problem using nested for each loops, complete the three questions below.

.. reveal:: 2012GreyScale_alg5
    :showtitle: Reveal For Each Outer Bounds Problem
    :hidetitle: Hide For Each Outer Bounds Problem

    .. mchoice:: 2012GreyScale_alg5_ans
     :answer_a: (int[] row; row < pixelValues; row++)
     :answer_b: (int row : this.pixelValues)
     :answer_c: (int[] row : this.pixelValues)
     :answer_d: (int[] row ; pixelValues)
     :correct: c
     :feedback_a: This is not the correct way to initialize a for each loop
     :feedback_b: When looping through an array with a for each loop you need to include the '[]'
     :feedback_c: Correct!
     :feedback_d: A for each loop has a colon not a semicolon.

     What could you write for the outer for loop so that it iterates through the rows of the array?

.. reveal:: 2012GreyScale_alg6
    :showtitle: Reveal For Each Inner Bounds Problem
    :hidetitle: Hide For Each Inner Bounds Problem

    .. mchoice:: 2012GreyScale_alg6_ans
     :answer_a: (int col = 0; col < pixelValues.length; col++)
     :answer_b: (int pv : row)
     :answer_c: (int pv[] : row)
     :answer_d: (int col : pixelValues)
     :correct: b
     :feedback_a: This is not the correct way to initialize a for each loop
     :feedback_b: Correct!
     :feedback_c: For the inner bound, you are no longer iterating through an array so you do not need to include the '[]'
     :feedback_d: Your outer bound is already iterating through pixelValues, your inner bound needs to loop through something else

     What could you write for the inner for loop so that it iterates through the columns of the array?

.. reveal:: 2012GreyScale_alg7
    :showtitle: Reveal For Each Equivalence Problem
    :hidetitle: Hide For Each Equivalence Problem

    .. mchoice:: 2012GreyScale_alg7_ans
     :answer_a: if (pv == this.WHITE)
     :answer_b: if (pv == {255,255,255})
     :answer_c: if (pv == 0)
     :answer_d: if (pv == white)
     :correct: a
     :feedback_a: Correct!
     :feedback_b: Our image is in greyscale and is not a three value color
     :feedback_c: 0 is the value of black
     :feedback_d: When using private variables, you need to make sure the spelling is the same.

     How will you check if pv is white?

Try and Solve It
===================

.. activecode:: lcfrgia2
   :language: java
   :autograde: unittest

   FRQ Gray Image A: write the code for the method ``countWhitePixels``. When you are ready click "Run" to test your solution.
   ~~~~
   public class GrayImage
   {
       public static final int BLACK = 0;
       public static final int WHITE = 255;

       /**
        * The 2-dimensional representation of this image. Guaranteed not to be null.
        * All values in the array are within the range [BLACK, WHITE], inclusive.
        */
       private int[][] pixelValues;

       /** constructor that takes a 2D array */
       public GrayImage(int[][] theArray)
       {
           pixelValues = theArray;
       }

       /**
        * @return the total number of white pixels in this image. Postcondition: this
        *     image has not been changed.
        */
       public int countWhitePixels() {}

       /** main for testing */
       public static void main(String[] args)
       {
           int[][] values =
           {
               {255, 184, 178, 84, 129},
               {84, 255, 255, 130, 94},
               {78, 255, 0, 0, 78},
               {84, 130, 255, 130, 84}
           };
           GrayImage image = new GrayImage(values);
           System.out.println(
                   "count white should be 5 and is " + image.countWhitePixels());
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
           String expect = "count white should be 5 and is 5\n";

           boolean passed = getResults(expect, output, "Expected output from main");
           assertTrue(passed);
       }

       @Test
       public void test1()
       {
           int[][] values =
           {
               {255, 255, 255},
               {255, 255, 255},
               {255, 255, 255}
           };

           GrayImage image = new GrayImage(values);
           String output = String.valueOf(image.countWhitePixels());
           String expect = "9";

           boolean passed = getResults(expect, output, "countWhitePixels 3X3, all are white");
           assertTrue(passed);
       }

       @Test
       public void test2()
       {
           int[][] values =
           {
               {255, 0},
               {0, 255},
               {255, 0},
               {0, 255},
           };

           GrayImage image = new GrayImage(values);
           String output = String.valueOf(image.countWhitePixels());
           String expect = "4";

           boolean passed = getResults(expect, output, "countWhitePixels 4X2, half are white");
           assertTrue(passed);
       }

       @Test
       public void test3()
       {
           String code = getCode();
           String target = "for";

           int num = countOccurencesRegex(code, target);

           boolean passed = num == 2;

           getResults("2", "" + num, "2 for loops (nested)", passed);
           assertTrue(passed);
       }
   }

Video - One way to code the solution
=====================================

.. the video is 2012Q4A.mov

The following video is also on YouTube at https://youtu.be/Rx4bPs0wkxU.  It walks through coding a solution.

.. youtube:: Rx4bPs0wkxU
    :width: 800
    :align: center
