.. qnum::
   :prefix: 7-9-
   :start: 1
   
Easy Multiple Choice Questions
----------------------------------

These problems are easier than most of those that you will usually see on the AP CS A exam.

.. mchoice:: qaeasy_1
   :answer_a: <code>nums.length</code>
   :answer_b: <code>nums.length - 1</code>
   :correct: b
   :feedback_a: <code>nums.length</code> would result in an OutOfBoundsException
   :feedback_b: Since the first element in an array is at index 0 the last element is the length minus 1.

   Which index is the last element in an array called ``nums`` at?
   
.. mchoice:: qaeasy_2
   :answer_a: The values don't matter this will always cause an infinite loop.
   :answer_b: Whenever <code>a</code> includes a value that is less than or equal to zero.
   :answer_c: Whenever <code>a</code> has values larger then <code>temp</code>.
   :answer_d: When all values in <code>a</code> are larger than <code>temp</code>.
   :answer_e: Whenever <code>a</code> includes a value equal to <code>temp</code>.
   :correct: b
   :feedback_a: An infinite loop will not always occur in this code segment.
   :feedback_b: When <code>a</code> contains a value that is less than or equal to zero then multiplying that value by 2 will never make the result larger than the <code>temp</code> value (which was set to some value > 0), so an infinite loop will occur.
   :feedback_c: Values larger then <code>temp</code> will not cause an infinite loop.
   :feedback_d: Values larger then <code>temp</code> will not cause an infinite loop.
   :feedback_e: Values equal to <code>temp</code> will not cause an infinite loop.

   Given the following code segment, which of the following will cause an infinite loop?  Assume that ``temp`` is an integer initialized to be greater than zero and that ``a`` is an array of integers.
   
   .. code-block:: java 

      for ( int k = 0; k < a.length; k++ )
      {
         while ( a[ k ] < temp )
         {
            a[ k ] *= 2;
         }
      }

.. mchoice:: qaeasy_3
   :answer_a: <code>{-20, -10, 2, 8, 16, 60}</code>
   :answer_b: <code>{-20, -10, 2, 4, 8, 30}</code>
   :answer_c: <code>{-10, -5, 1, 8, 16, 60}</code>
   :answer_d: <code>{-10, -5, 1, 4, 8, 30}</code>
   :correct: c
   :feedback_a: This would true if it looped through the whole array.  Does it?
   :feedback_b: This would be true if it looped from the beginning to the middle.  Does it?
   :feedback_c: It loops from the middle to the end doubling each value. Since there are 6 elements it will start at index 3.  
   :feedback_d: This would be true if array elements didn't change, but they do.  

   Given the following values of ``a`` and the method ``doubleLast`` what will the values of ``a`` be after you execute: ``doubleLast()``?
   
   .. code-block:: java 
   
      private int[ ] a = {-10, -5, 1, 4, 8, 30};

      public void doubleLast()
      {
    
         for (int i = a.length / 2; i < a.length; i++)
         {
            a[i] = a[i] * 2;
         }
      }
