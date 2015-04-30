.. qnum::
   :prefix: 8-9-
   :start: 1
   
Hard Multiple Choice Questions
----------------------------------

These problems are about the same or harder than those you will see on the AP CS A exam.

.. mchoicemf:: qalh_1
   :answer_a: [5, 3, 1, 6]
   :answer_b: [4, 3, 1, 6]
   :answer_c: [4, 3, 6]
   :answer_d: [5, 3, 6]
   :answer_e: [4, 5, 3, 6]
   :correct: b
   :feedback_a: The remove(1) removes the item at index 1 which will be 5 after the 4 is added at index 0.  
   :feedback_b: The add(6) adds the 6 at the end of the list. The add(0,4) will add 4 at index 0. The remove(1) removes the 5 at index 1. 
   :feedback_c: The remove(1) doesn't remove the 1, it removes the value at index 1.
   :feedback_d: The 5 will be removed with the remove(1).  
   :feedback_e: This would be true if remove(1) removed the item with that value, but it removes the item at that index.

   What is in the list ``nums`` if it initially contained {5, 3, 1} and the following code is executed?
   
   .. code-block:: java
   
      nums.add(6);
      nums.add(0,4);
      nums.remove(1);

