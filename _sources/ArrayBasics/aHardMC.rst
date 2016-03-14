.. qnum::
   :prefix: 7-11-
   :start: 1
   
Hard Multiple Choice Questions
----------------------------------

These problems are harder than most of those that you will usually see on the AP CS A exam.

.. mchoice:: qahard_1
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


      

