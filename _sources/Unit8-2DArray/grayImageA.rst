.. qnum::
   :prefix: 9-10-
   :start: 1

Free Response - Gray Image A
-------------------------------

..	index::
	single: gray image
    single: free response
    
The following is part a of a free response question from 2012.  It was question 4 on the exam.  You can see all the free response questions from past exams at https://apstudents.collegeboard.org/courses/ap-computer-science-a/free-response-questions-by-year.  

**Question 4.**  A grayscale image is represented by a 2-dimensional rectangular array of pixels (picture elements). A pixel is an integer value that represents a shade of gray. In this question, pixel values can be in the range from 0 through 255, inclusive. A black pixel is represented by 0, and a white pixel is represented by 255. The declaration of the ``GrayImage`` class is shown below.

.. code-block:: java

   public class GrayImage
   {
      public static final int BLACK = 0;
      public static final int WHITE = 255;

      /** The 2-dimensional representation of this image. 
       *  Guaranteed not to be null.
       *  All values in the array are within the range 
       *  [BLACK, WHITE], inclusive.
       */
      private int[][] pixelValues;

      /** @return the total number of white pixels in 
       *    this image.
       * Postcondition: this image has not been changed.
       */
      public int countWhitePixels()
      { /* to be implemented in part (a) */ }
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

      /** The 2-dimensional representation of this image. 
       *  Guaranteed not to be null.
       *  All values in the array are within the range 
       *  [BLACK, WHITE], inclusive.
       */
      private int[][] pixelValues;

      /** @return the total number of white pixels in 
       *    this image.
       * Postcondition: this image has not been changed.
       */
      public int countWhitePixels()
      { /* to be implemented in part (a) */ }
   }
    
How to solve this problem
===========================

To solve this problem, we will need to loop through the entire 2D array, looking for instances of a ``WHITE`` pixel, keeping track of our count during the loop.

.. mchoice:: frgia_1
   :answer_a: single for each loop
   :answer_b: nested for loop
   :answer_c: nested while loop
   :correct: b
   :feedback_a: This is a two-dimensional array so you would need a nested for-each loop. 
   :feedback_b: For a two-dimensional array you can use a nested for loop or you could also use a nested for-each loop.    
   :feedback_c: You could use a nested while loop, but since you know the numbers of rows and columns a nested for loop is usually better since with a while loop you could forget to increment the row or column index.

   Which loop should you use to solve this problem?


Looping through a 2D array is more complicated than the simple arrays we usually see, requiring nested for loops. Check out the code below, which displays how nested for loops work to display a block of numbers.

.. activecode:: lcfrgia1
   :language: java
   
   public class Test
   {
      public static void main(String[] args)
      {
        for (int i = 0; i < 5; i++) {
          for (int j = 0; j < 5; j++) {
            System.out.print(j);
          }
          System.out.println();
        }
      }
   } 
   
   
   
.. activecode:: lcfrgia2
   :language: java
   :autograde: unittest      
   
   FRQ Gray Image A: write the code for the method ``countWhitePixels``. When you are ready click "Run" to test your solution.
   ~~~~
   public class GrayImage
   {
      public static final int BLACK = 0;
      public static final int WHITE = 255;

      /** The 2-dimensional representation of this image. 
       *  Guaranteed not to be null.
       *  All values in the array are within the range 
       *  [BLACK, WHITE], inclusive.
       */
      private int[][] pixelValues;
      
      /** constructor that takes a 2D array */
      public GrayImage(int[][] theArray)
      {
         pixelValues = theArray;
      }

      /** @return the total number of white pixels in 
       *    this image.
       * Postcondition: this image has not been changed.
       */
      public int countWhitePixels()
      {
        
      }

      /** main for testing */
      public static void main (String[] args)
      {
        int[][] values = { {255, 184, 178, 84, 129}, 
                          {84, 255, 255, 130, 94}, 
                          {78, 255, 0, 0, 78}, 
                          {84, 130, 255, 130, 84}};
        GrayImage image = new GrayImage(values);
        System.out.println("count white should be 5 and is " + 
                           image.countWhitePixels());
      }
   }
   ====
   import static org.junit.Assert.*;
     import org.junit.*;
     import java.io.*;
     import java.util.List;
     import java.util.ArrayList;

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
         int[][] values = { {255, 255, 255},
                            {255, 255, 255},
                            {255, 255, 255}};

         GrayImage image = new GrayImage(values);
         String output = String.valueOf(image.countWhitePixels());
         String expect = "9";

         boolean passed = getResults(expect, output, "countWhitePixels 3X3, all are white");
         assertTrue(passed);
       }

       @Test
       public void test2()
       {
         int[][] values = { {255, 0},
                            {0, 255},
                            {255, 0},
                            {0, 255},};

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
         String target = "for (int * = #;";

         int num = countOccurencesRegex(code, target);

         boolean passed = num == 2;

         getResults("2", ""+num, "2 For loops (nested)", passed);
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


