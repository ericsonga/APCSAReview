.. qnum::
   :prefix: 3-10-
   :start: 1

Medium Multiple Choice Questions
----------------------------------

These problems are similar to those you will see on the AP CS A exam.

.. mchoicemf:: qvm_1
   :answer_a: 222
   :answer_b: 120
   :answer_c: 118
   :answer_d: 121
   :answer_e: 214
   :correct: b
   :feedback_a: That would be the answer if these were all decimal values, but they are not.
   :feedback_b: 12 in octal is 10 in decimal and 111 in binary is 7 in decimal so this is 123 - 10 + 7.  
   :feedback_c: This would be the answer if it was 123 - 12 + 111 (binary) but the 12 is in octal.  
   :feedback_d: Remember that the rightmost digit in any base is the base to the 0th power which is 1.   
   :feedback_e: Remember that the 111 is in binary (base 2).  Its decimal value is 7.

   Which of the following would be the correct result from the following expression: 123 (decimal) - 12 (octal) + 111 (binary)?

.. mchoicemf:: qvm_2
   :answer_a: 2147483647
   :answer_b: 0
   :answer_c: There will be a compile time error
   :answer_d: -2147483648
   :answer_e: There will be a run time error
   :correct: d
   :feedback_a: This would be true if it was printing just the maximum integer value.
   :feedback_b: This might make sense, but adding one to the maximum integer value gives the minimum integer value.
   :feedback_c: It will compile, but what will it do when you run it?
   :feedback_d: Adding one to the maximum integer value gives the minimum integer value due to overflow.   
   :feedback_e: This makes sense, but it is not what happens.

   What will be printed by ``System.out.println(Integer.MAX_VALUE + 1);``?
   
   
