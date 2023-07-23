.. qnum::
   :prefix: 9-11-
   :start: 1

Free Response - Gray Image B
-------------------------------

.. index::
    single: gray image
    single: free response

The following is part b of a free response question from 2012.  It was question 4 on the exam.  You can see all the free response questions from past exams at https://apstudents.collegeboard.org/courses/ap-computer-science-a/free-response-questions-by-year.

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
        * Processes this image in row-major order and decreases the value of each
        * pixel at position (row, col) by the value of the pixel at position (row + 2,
        * col + 2) if it exists. Resulting values that would be less than BLACK are
        * replaced by BLACK. Pixels for which there is no pixel at position (row + 2,
        * col + 2) are unchanged.
        */
       public void processImage()
       {
           /* to be implemented in part (b) */
       }
   }

**Part b.**  Write the method ``processImage`` that modifies the image by changing the values in the instance variable ``pixelValues`` according to the following description. The pixels in the image are processed one at a time in row-major order. Row-major order processes the first row in the array from left to right and then processes the second row from left to right, continuing until all rows are processed from left to right. The first index of ``pixelValues`` represents the row number, and the second index represents the column number.

The pixel value at position (row, col) is decreased by the value at position (row + 2, col + 2) if such a position exists. If the result of the subtraction is less than the value ``BLACK``, the pixel is assigned the value of ``BLACK``. The values of the pixels for which there is no pixel at position (row + 2, col + 2) remain unchanged. You may assume that all the original values in the array are within the range [``BLACK``, ``WHITE``], inclusive.

The following diagram shows the contents of the instance variable ``pixelValues`` before and after a call
to ``processImage``. The values shown in boldface represent the pixels that could be modified in a
grayscale image with 4 rows and 5 columns.

.. figure:: Figures/grayImageB.png
    :width: 600px
    :align: center
    :figclass: align-center

    Figure 1: Example before and after a call to processImage

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
        * Processes this image in row-major order and decreases the value of each
        * pixel at position (row, col) by the value of the pixel at position (row + 2,
        * col + 2) if it exists. Resulting values that would be less than BLACK are
        * replaced by BLACK. Pixels for which there is no pixel at position (row + 2,
        * col + 2) are unchanged.
        */
       public void processImage()
       {
           /* to be implemented in part (b) */
       }
   }

How to solve this problem
===========================

Once again, this problem starts with looping through the array of pixels, using a nested for loop for the 2D array. As we loop we will need to subtract pixel values from one another.

.. reveal:: 2012GreyScaleB_alg
    :showtitle: Reveal Subtraction Problem
    :hidetitle: Hide Subtraction Problem

    .. mchoice:: grayImageB_0
       :answer_a: result = int1 - int2;
       :answer_b: int1 -= int2;
       :answer_c: int1.subtract(int2);
       :correct: b
       :feedback_a: While the syntax here is correct, there's an even simpler way to execute subtraction that doesn't create a new variable.
       :feedback_b: The "-=" syntax correct subtracts int2 from int1, without creating an additional variable, which is ideal in our solution for this problem.
       :feedback_c: Because the pixels are of primitive type "int,"  there is not subtract() method which can be executed in this case.

       Which is the simplest way to subtract one integer value from another integer value?

.. reveal:: 2012GreyScaleB_alg_1
    :showtitle: Reveal Looping Problem
    :hidetitle: Hide Looping Problem

    .. mchoice:: grayImageB_1
       :answer_a: two while loops
       :answer_b: linked for each loops
       :answer_c: nested for loops
       :correct: c
       :feedback_a: This is not the most efficient way to iterate through a 2D array.
       :feedback_b: "linked" does not refer to anything specific in this context, and for each loops would not work in this situation.
       :feedback_c: Correct!

       Which loop is the best for iterating through the image?

.. |Java visualizer| raw:: html

    <a href= "http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=public+class+Test%0A%7B%0A+++public+static+void+main(String%5B%5D+args)%0A+++%7B%0A+++++int%5B%5D%5B%5D+values+%3D+%7B%7B9,+8,+7,+6,+5%7D,%0A+++++++++++++++++++++++%7B7,+6,+5,+4,+3%7D,
    %0A+++++++++++++++++++++++%7B4,+3,+2,+1,+0%7D,%0A+++++++++++++++++++++++%7B4,+3,+2,+1,+0%7D%7D%3B%0A+++++for+(int+i+%3D+0%3B+i+%3C+values.length%3B+i%2B%2B)%0A+++++%7B%0A+++++++for+(int+j+%3D+0%3B+j+%3C+values%5Bi%5D.length%3B+j%2B%2B)%0A+++++++%7B%0A
    +++++++++System.out.print(values%5Bi%5D%5Bj%5D+-+values%5Bi%2B2%5D%5Bj%2B2%5D)%3B%0A+++++++%7D%0A+++++++System.out.println()%3B%0A+++++%7D%0A+++%7D%0A%7D&mode=display&curInstr=6" style="text-decoration:underline" target="_blank" >Java Visualizer</a>


When comparing our pixel values to values deeper in the array, we need to be careful to correctly set the terminating conditions on the for loops.

.. reveal:: 2012GreyScaleB_alg_2
    :showtitle: Reveal Bounds exercise
    :hidetitle: Hide Bounds exercise

    The code below prints out the pixel value at position (row, col) after it is decreased by the value at position (row + 2, col + 2),
    but what if (row+2,col+2) is beyond the array bounds? Can you fix the terminating conditions of the loops so that we do not go beyond the array bounds? You can step through the code using the |Java Visualizer| or the CodeLens button.

    .. activecode:: lcfrgib3
       :language: java
       :autograde: unittest

       Fix the terminating conditions of the loops so that we do not go beyond the array bounds
       ~~~~
       public class LoopTest
       {
           public static void main(String[] args)
           {
               int[][] values =
               {
                   {9, 8, 7, 6, 5}, {7, 6, 5, 4, 3}, {4, 3, 2, 1, 0}, {4, 3, 2, 1, 0}
               };
               for (int i = 0; i < values.length; i++)
               {
                   for (int j = i; j < values[i].length; j++)
                   {
                       System.out.print(values[i][j] - values[i + 2][j + 2]);
                   }
                   System.out.println();
               }
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
               String expect = "777\n" + "55\n";

               boolean passed = getResults(expect, output, "Expected output from main");
               assertTrue(passed);
           }
       }

Algorithm
===================
There are several ways to solve this problem, we will focus on two possible solutions below. It is not required for you to
come up with both solutions but it would be good practice. If you wish to solve these exercises, click on the buttons to reveal them.

.. shortanswer:: gray_image_B

   Explain in plain English what your code will have to do to answer this question.  Use the variable names given above.

This set of questions will focus on a solution that starts indexing the array at zero, and stops 2 spaces before the end.

.. reveal:: 2012GreyScaleB_alg_3
    :showtitle: Reveal Outer Bounds Problem
    :hidetitle: Hide Outer Bounds Problem

    .. mchoice:: 2012GreyScaleB_3
     :answer_a: for (int row = this.pixelValues.length; row > 2;  row--)
     :answer_b: for (int row = this.pixelValues.length - 2; row > 0;  row--)
     :answer_c: for (int row = 0; row < this.pixelValues.length - 2; row++)
     :answer_d: for (int row = -2; row < this.pixelValues.length; row++)
     :correct: c
     :feedback_a: This starts and the end and stops two from the beginning.
     :feedback_b: This starts two from the end but never reaches the zero element.
     :feedback_c: Correct!
     :feedback_d: Starting at -2 is out of the bounds of the array and will return an error.

     What could you write for the outer for loop so that it iterates through the rows but stops 2 before the end?


.. reveal:: 2012GreyScaleB_alg_4
    :showtitle: Reveal Inner Bounds Problem
    :hidetitle: Hide Inner Bounds Problem

    .. mchoice:: 2012GreyScaleB_4
     :answer_a: for (int col = 0; col < this.pixelValues[0].length - 2; col++)
     :answer_b: for (int col = 0; col < this.pixelValues.length - 2; col++)
     :answer_c: for (int col = 0; col < row; col++)
     :answer_d: for (int col = this.pixelValues[0] - 2; col > 0; col--)
     :correct: a
     :feedback_a: Correct!
     :feedback_b: it is important to specify the row of which you are finding the length of (which will give you the height).
     :feedback_c: having the comparison col < row will lead to unwanted behavior because col will not iterate through the full image.
     :feedback_d: The sets col equal to the first VALUE in the image -2 rather than having it only loop through the length - 2

     What could you write for the Inner for loop so that it iterates through the rows but stops 2 before the bottom?

.. reveal:: 2012GreyScaleB_alg_5
    :showtitle: Reveal Below Zero Problem
    :hidetitle: Hide Below Zero Problem

    .. mchoice:: 2012GreyScaleB_5
     :answer_a: if (pixelValues[row][col] = -black) { this.pixelValues[row][col] = black }
     :answer_b: if (pixelValues[row][col] < black) { this.pixelValues[row][col] = black }
     :answer_c: if (pixelValues[row][col] = BLACK) { this.pixelValues[row][col] < BLACK }
     :answer_d: if (pixelValues[row][col] < BLACK) { this.pixelValues[row][col] = BLACK }
     :correct: d
     :feedback_a: We want to check if the pixel in below the value black, not -BLACK (which would be 0)
     :feedback_b: Variable names are case sensitive and the member variable for black is spelt in all caps.
     :feedback_c: This order does not make sense and would not contribute to the code.
     :feedback_d: Correct!

     The question requires if any value is less than the value ``BLACK`` after subtraction, it needs to be replaced with the value ``BLACK``. How could you write this?

Next we will have questions focused on a solution that starts at the beginning of the loop and iterated through the entire thing, but checks for out of bounds errors as it subtracts.

.. reveal:: 2012GreyScaleB_alg_6
    :showtitle: Reveal Outer Bounds Problem
    :hidetitle: Hide Outer Bounds Problem

    .. mchoice:: 2012GreyScaleB_6
     :answer_a: for (int row = 0; row < this.pixelValues.length; row++)
     :answer_b: for (int row = 1; row <= this.pixelValues.length; row++)
     :answer_c: for (int row = 0; row < this.pixelValues.length - 1; row++)
     :answer_d: for (int row = 1; row < this.pixelValues.length + 1; row++)
     :correct: a
     :feedback_a: Correct!
     :feedback_b: We need to start at the beginning of the image.
     :feedback_c: this syntax would be correct if the comparison was row <= this.pixelValues.length - 1;
     :feedback_d: We need to start at the beginning of the array

     What could you write for the outer for loop so that it iterates through the rows?

.. reveal:: 2012GreyScaleB_alg_7
    :showtitle: Reveal Inner Bounds Problem
    :hidetitle: Hide Inner Bounds Problem

    .. mchoice:: 2012GreyScaleB_7
     :answer_a: for (int col = 0; col <= this.pixelValues.length - 1; col++)
     :answer_b: for (int col = 0; col < this.pixelValues[0].length - 1; col++)
     :answer_c: for (int col = 0; col < this.pixelValues[0].length; col++)
     :answer_d: for (int col = 0; col < this.pixelValues.length + 1; col++)
     :correct: c
     :feedback_a: This would assume that the image is square, instead you should specify a row from which we can reference the height.
     :feedback_b: The comparison would need to be less <= for this statement to be true.
     :feedback_c: Correct!
     :feedback_d: This would make the loop go out of bounds.

     What could you write for the Inner for loop so that it iterates through the columns?

.. reveal:: 2012GreyScaleB_alg_8
    :showtitle: Reveal Out of Bounds Problem
    :hidetitle: Hide Out of Bounds Problem

    .. mchoice:: 2012GreyScaleB_b
     :answer_a: if (row < pixelValues.length + 2 && col < pixelValues[row].length + 2)
     :answer_b: if (row + 2 < pixelValues.length && col + 2 < pixelValues[row].length)
     :answer_c: if (row + 2 <= pixelValues.length && col + 2 <= pixelValues[row].length)
     :answer_d: if (row + 2 < pixelValues.length && col + 2 < pixelValues.length)
     :correct: b
     :feedback_a: The would not check for out of bounds, in fact the bounds have been incorrectly extended making it possible to be even more out of bounds.
     :feedback_b: Correct!
     :feedback_c: We do not want to check for equality, remember arrays index from 0 while length returns the number of elements in the array.
     :feedback_d: Make sure to specify an element when checking for col bounds.

     Since you don't limit the iteration through the array, how can you check to make sure the subtraction isn't going out of bounds?

Try and Solve It
===================


.. activecode:: lcfrgib4
   :language: java
   :autograde: unittest

   FRQ Gray Image B: write the code for the method ``processImage``. Please use row and col for your loop variables.
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
        * Processes this image in row-major order and decreases the value of each
        * pixel at position (row, col) by the value of the pixel at position (row + 2,
        * col + 2) if it exists. Resulting values that would be less than BLACK are
        * replaced by BLACK. Pixels for which there is no pixel at position (row + 2,
        * col + 2) are unchanged.
        */
       public void processImage() {}

       public void printValues()
       {
           for (int r = 0; r < pixelValues.length; r++)
           {
               for (int c = 0; c < pixelValues[0].length; c++)
               {
                   System.out.print(pixelValues[r][c] + ", ");
               }
               System.out.println();
           }
       }

       /** main for testing */
       public static void main(String[] args)
       {
           int[][] values =
           {
               {221, 184, 178, 84, 135},
               {84, 255, 255, 130, 84},
               {78, 255, 0, 0, 78},
               {84, 130, 255, 130, 84}
           };
           GrayImage image = new GrayImage(values);
           image.printValues();
           image.processImage();
           System.out.println("after process image");
           image.printValues();
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
           String expect =
                   "221, 184, 178, 84, 135,\n"
                           + "84, 255, 255, 130, 84,\n"
                           + "78, 255, 0, 0, 78,\n"
                           + "84, 130, 255, 130, 84,\n"
                           + "after process image\n"
                           + "221, 184, 100, 84, 135,\n"
                           + "0, 125, 171, 130, 84,\n"
                           + "78, 255, 0, 0, 78,\n"
                           + "84, 130, 255, 130, 84,\n";

           boolean passed = getResults(expect, output, "Expected output from main");
           assertTrue(passed);
       }

       @Test
       public void test1()
       {
           String target = "pixelValues[row+2][col+2];";
           boolean passed = checkCodeContainsRegex("subtracting pixel at row+2, col+2", target);
           assertTrue(passed);
       }

       @Test
       public void test2()
       {
           String target1 = "pixelValues[row][col] < BLACK";
           String target2 = "pixelValues[row][col] < 0";

           boolean passed =
                   checkCodeContainsRegex("check of pixel value at row, col less than 0", target2)
                           || checkCodeContainsRegex(
                                   "or check of pixel value less than BLACK", target1);
           assertTrue(passed);
       }
   }

Video - One way to code the solution
=====================================

.. the video is 2012Q4B2.mov

The following video is also on YouTube at https://youtu.be/8j34xQkjsJI.  It walks through coding a solution.

.. youtube:: 8j34xQkjsJI
    :width: 800
    :align: center
