.. qnum::
   :prefix: 7-11-
   :start: 1
   
Hard Multiple Choice Questions
----------------------------------

These problems are harder than most of those that you will usually see on the AP CS A exam.

.. mchoice:: qcb_1
   :answer_a: Both implementations work as intended and are equally fast.
   :answer_b: Both implementations work as intended, but implementation 1 is faster than implementation 2.
   :answer_c: Both implementations work as intended, but implementation 2 is faster than implementation 1.
   :answer_d: Implementation 1 does not work as intended, because it will cause an ArrayIndexOutOfBoundsException.
   :answer_e: Implementation 2 does not work as intended, because it will cause an ArrayIndexOutOfBoundsException.
   :correct: d
   :feedback_a: Implementation 1 doesn't work and will cause an ArrayIndexOutOfBoundsException. If implementation was correct, it would be faster.
   :feedback_b: Implementation 1 doesn't work and will cause an ArrayIndexOutOfBoundsException.
   :feedback_c: Implementation 1 doesn't work and will cause an ArrayIndexOutOfBoundsException. If it did work, it would be faster than 2.
   :feedback_d: When j is 0, sum[j-1] will be sum[-1] which will cause an ArrayIndexOutOfBoundsException.
   :feedback_e: Implementation 1 doesn't work and will cause an ArrayIndexOutOfBoundsException.

   Consider the following data field and incomplete method, ``partialSum``, which is intended to return an integer array ``sum`` such that for all ``i``, ``sum[i]`` is equal to ``arr[0] + arr[1] + ... + arr[i]``. For instance, if arr contains the values ``{1, 4, 1, 3}``, the array ``sum`` will contain the values ``{1, 5, 6, 9}``. Which of the following is true about the two implementations of ``missing code`` on line 9 that are proposed?
   
   .. code-block:: java
     :linenos:

     private int[] arr;

     public int[] partialSum() {
        int[] sum = new int[arr.length];
        
        for (int j = 0; j < sum.length; j++)
           sum[j] = 0;
        
        /* missing code */
        return sum;
     }


     Implementation 1

     for (int j = 0; j < arr.lenth; j++)
         sum[j] = sum[j - 1] + arr[j];


     Implementation 2

     for (int j = 0; j < arr.length; j++)
        for (int k = 0; k <= j; k++)
           sum[j] = sum [j] + arr[k];

.. mchoice:: qcb_2
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

     public int findMax(int[][] imagePixels) {
        int r, c;
        int i, iMax = 0;

        for (r = 0; r < imagePixels.length; r++) {
           for (c = 0; c < imagePixels[0].length; c++) {
              i = image[r][c];
              if (i > iMax)
                 iMax = i;
            }
         }
         return iMax;
      }
