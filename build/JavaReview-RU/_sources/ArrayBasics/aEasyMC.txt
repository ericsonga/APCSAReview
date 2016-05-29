.. qnum::
   :prefix: 7-9-
   :start: 1
   
Easy Multiple Choice Questions
----------------------------------

These problems are easier than most of those that you will usually see on the AP CS A exam.

.. mchoice:: qaeasy_1
   :answer_a: nums.length
   :answer_b: nums.length - 1
   :correct: b
   :feedback_a: Look at the example above when we were setting the values for the highScore array.  
   :feedback_b: Since the first element in an array is at index 0 the last element is the length minus 1.

   Which index is the last element in an array called nums at?
   
.. mchoice:: qaeasy_2
   :answer_a: The values don't matter this will always cause an infinite loop.
   :answer_b: Whenever a includes a value that is less than or equal to zero.
   :answer_c: Whenever a has values larger then temp.
   :answer_d: When all values in a are larger than temp.
   :answer_e: Whenever a includes a value equal to temp.
   :correct: b
   :feedback_a: An infinite loop will not always occur in this code segment.
   :feedback_b: When a contains a value that is less than or equal to zero then multiplying that value by 2 will never make the result larger than the temp value (which was set to some value > 0), so an infinite loop will occur.
   :feedback_c: Values larger then temp will not cause an infinite loop.
   :feedback_d: Values larger then temp will not cause an infinite loop.
   :feedback_e: Values equal to temp will not cause the infinite loop.

   Given the following code segment, which of the following will cause an infinite loop?  Assume that temp is an int variable initialized to be greater than zero and that a is an array of ints.
   
   .. code-block:: java 

      for ( int k = 0; k < a.length; k++ )
      {
         while ( a[ k ] < temp )
         {
            a[ k ] *= 2;
         }
      }

.. mchoice:: qaeasy_3
   :answer_a: {-20, -10, 2, 8, 16, 60}
   :answer_b: {-20, -10, 2, 4, 8, 30}
   :answer_c: {-10, -5, 1, 8, 16, 60}
   :answer_d: {-10, -5, 1, 4, 8, 30} 
   :correct: c
   :feedback_a: This would true if it looped through the whole array.  Does it?
   :feedback_b: This would be true if it looped from the beginning to the middle.  Does it?
   :feedback_c: It loops from the middle to the end doubling each value. Since there are 6 elements it will start at index 3.  
   :feedback_d: This would be true if array elements didn't change, but they do.  

   Given the following values of a and the method doubleLast what will the values of a be after you execute: doubleLast()?
   
   .. code-block:: java 
   
      private int[ ] a = {-10, -5, 1, 4, 8, 30};

      public void doubleLast()
      {
    
         for (int i = a.length / 2; i < a.length; i++)
         {
            a[i] = a[i] * 2;
         }
      }
