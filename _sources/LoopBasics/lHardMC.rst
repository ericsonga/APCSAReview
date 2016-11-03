.. qnum::
   :prefix: 6-9-
   :start: 1
   
Hard Multiple Choice Questions
----------------------------------

These problems are harder than most of those that you will usually see on the AP CS A exam. 

This problem is about big O notation which is not covered on the A exam.  It used to be covered on the AB exam, but they
stopped offering that exam several years ago.

.. mchoice:: qlh_1n
   :answer_a: O(log n)
   :answer_b: O(n log n)
   :answer_c: O(n)
   :answer_d: O(n*n)
   :answer_e: O(n!)
   :correct: b
   :feedback_a: This would be correct if there was just the inner loop.
   :feedback_b: The outer loop is n but the inner loop is log n since k is multiplied by 2 each time through the loop.
   :feedback_c: This would be correct if there was just the outer loop.
   :feedback_d: This would be correct if the inner lop was incremented by 1 instead of multiplied by 2.
   :feedback_e: To get n! as big-oh we would need n nested loops.

   Which best characterizes the running time of the following code segment?
   
   .. code-block:: java

     for (int j = 1; j <= n; j++) {
        for (int k = 1; k <= n; k = k * 2)
           System.out.println(j + " " + k);
     }

