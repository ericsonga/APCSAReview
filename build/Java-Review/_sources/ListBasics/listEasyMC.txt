.. qnum::
   :prefix: 8-7-
   :start: 1
   
Easy Multiple Choice Questions
----------------------------------

These problems are easier than most of those that you will usually see on the AP CS A exam.

.. mchoicemf:: qale_1
   :answer_a: nums.length
   :answer_b: nums.length - 1
   :answer_c: nums.size()
   :answer_d: nums.size() - 1
   :correct: d
   :feedback_a: You can't use length on lists and the last index is one less than the size.
   :feedback_b: You can't use length on lists, use size instead.
   :feedback_c: Since the first element in a list is at index 0 the last element is at the size minus 1.
   :feedback_d: The last element is at the size of the list minus 1.

   Which index is the last element in a list called ``nums`` at?
   
.. mchoicemf:: qale_2
   :answer_a: An array has faster access to its elements than a list does.
   :answer_b: An array knows it length, but a list doesn't know its length.  
   :answer_c: An ArrayList can allocate more space than it needs.  
   :correct: c
   :feedback_a: Since an ArrayList is implemented by an array, it has the same access time.
   :feedback_b: Lists do know their length, but they don't make it public.  
   :feedback_c: Every time an ArrayList fills up a new array is created that is twice as big.  This can lead to extra space that is wasted.  

   Which of the following is a reason to use an array instead of an ArrayList?  
   
.. mchoicemf:: qale_3
   :answer_a: An ArrayList can grow or shrink as needed, while an array is always the same size.   
   :answer_b: You can use a for-each loop on an ArrayList, but not in an array.  
   :answer_c: You can store objects in an ArrayList, but not in an array.  
   :correct: a
   :feedback_a: This is the main advantage to an ArrayList.  
   :feedback_b: You can use a for-each loop on either an ArrayList or array.
   :feedback_c: Arrays can also store objects of the same type.  

   Which of the following is a reason to use an ArrayList instead of an array? 
      

   

