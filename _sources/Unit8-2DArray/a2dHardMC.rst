.. qnum::
   :prefix: 8-8-
   :start: 7

Hard Multiple Choice Questions
----------------------------------

These problems are harder than those that you will typically see on the AP CSA exam.

.. mchoice:: qa2dh_1
   :practice: T
   :answer_a: { {6, 4, 2}, {2, 4, 6}}
   :answer_b: { {3, 2, 1}, {1, 4, 6}}
   :answer_c: { {3, 2, 1}, {1, 4, 8}}
   :answer_d: { {4, 4, 2}, {2, 4, 4}}
   :answer_e: { {3, 2, 1}, {2, 4, 4}}
   :correct: c
   :feedback_a: Check the starting values on the nested loops.
   :feedback_b: Notice that there are two if's, not an if and else.
   :feedback_c: The first if will change an odd number to an even.  The second if will also execute after an odd number has been made even.  Both loops start at index 1 so this only changes the items in the second row and second and third column.
   :feedback_d: Both if's will execute.  Also, check the bounds on the nested loop.
   :feedback_e: Both if's will execute.  Check the bounds on the inner loop.  When does it stop?

   What are the contents of ``arr`` after the following code has been executed?

   .. code-block:: java

      int[][] arr = { {3,2,1},{1,2,3}};
      int value = 0;
      for (int row = 1; row < arr.length; row++) 
      {
         for (int col = 1; col < arr[0].length; col++) 
         {
            if (arr[row][col] % 2 == 1)
            {
                arr[row][col] = arr[row][col] + 1;
            }
            if (arr[row][col] % 2 == 0)
            {
                arr[row][col] = arr[row][col] * 2;
            }
         }
      }

To step through this code in the Java Visualizer click on the following link: `Hard 1 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=public+class+ClassNameHere+%7B%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A++++++int%5B%5D%5B%5D+arr+%3D+%7B%7B3,2,1%7D,%7B1,2,3%7D%7D%3B%0A++++++for+(int+row+%3D+1%3B+row+%3C+arr.length%3B+row%2B%2B)+%7B%0A+++++++++for+(int+col+%3D+1%3B+col+%3C+arr%5B0%5D.length%3B+col%2B%2B)+%7B%0A++++++++++++if+(arr%5Brow%5D%5Bcol%5D+%25+2+%3D%3D+1)+%0A++++++++++++%7B%0A+++++++++++++++arr%5Brow%5D%5Bcol%5D+%3D+arr%5Brow%5D%5Bcol%5D+%2B+1%3B%0A++++++++++++%7D%0A++++++++++++if+(arr%5Brow%5D%5Bcol%5D+%25+2+%3D%3D+0)+%0A++++++++++++%7B%0A+++++++++++++++arr%5Brow%5D%5Bcol%5D+%3D+arr%5Brow%5D%5Bcol%5D+*+2%3B%0A++++++++++++%7D%0A+++++++++%7D%0A++++++%7D%0A++++++%0A+++%7D%0A%7D&mode=display&curInstr=0>`_.

.. mchoice:: qa2hard_2
   :practice: T
   :answer_a: The maximum brightness value for all pixels in imagePixel
   :answer_b: The column with the greatest brightness sum
   :answer_c: The most frequent brightness value in imagePixels
   :answer_d: The row with the greatest brightness sum
   :answer_e: The sum of the total brightness of imagePixels
   :correct: a
   :feedback_a: The method works by scanning all the pixels in imagePixels and comparing them to the current iMax value. If the current is greater, it replaces iMax and becomes the new maximum brightness. This is the value that is returned.
   :feedback_b: This could be accomplished by adding the brightness in the second loop and comparing the sum to iMax after the second loop finishes and before the first loop starts again.
   :feedback_c: To do this you would need a third loop and an array, 256 in size. In the second loop you would track how many pixels of a certain brightness had occurred using, countBright[i]++, and then in the third loop find the item in countBright with the highest value.
   :feedback_d: Firstly, you would need to traverse the 2D array in the opposite order, going through the rows instead of the columns. Then, you would sum each row's brightness in the second loop and compare it to the max in the first loop.
   :feedback_e: This would be accomplished by instead of having an if statement to track the currentmax, simply using, sum += imagePixels[r][c];

   A two-dimensional array, ``imagePixels``, holds the brightness values for the pixels in an image. The brightness can range from 0 to 255. What does the following method compute?

   .. code-block:: java
     :linenos:

     public int findMax(int[][] imagePixels) 
     {
        int r, c;
        int i, iMax = 0;

        for (r = 0; r < imagePixels.length; r++) 
        {
           for (c = 0; c < imagePixels[0].length; c++) 
           {
              i = imagePixels[r][c];
              if (i > iMax)
                 iMax = i;
            }
         }
         return iMax;
      }



