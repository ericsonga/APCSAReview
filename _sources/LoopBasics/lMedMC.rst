.. qnum::
   :prefix: 6-7-
   :start: 1

Medium Multiple Choice Questions
----------------------------------

These problems are similar to those you will see on the AP CS A exam.

.. mchoice:: qlm_1
   :answer_a: 10
   :answer_b: 5
   :answer_c: 25
   :answer_d: 50
   :answer_e: 15
   :correct: c
   :feedback_a: The second loop executes 5 times for each of the 5 times the first loop executes, so the answer should be 5 * 5.
   :feedback_b: The second loop executes 5 times for each of the 5 times the first loop executes, so the answer should be 5 * 5. 
   :feedback_c: The first loop will execute 5 times, and for each time through, the second loop will execute 5 times. So the answer is the number of times through the first loop times the number of times through the second.  
   :feedback_d: The second loop executes 5 times for each of the 5 times the first loop executes, so the answer should be 5 * 5.
   :feedback_e: The second loop executes 5 times for each of the 5 times the first loop executes, so the answer should be 5 * 5.

   How many stars are output when the following code is executed?  
   
   .. code-block:: java

     for (int i = 0; i < 5; i++) {
        for (int j = 0; j < 5; j++)
           System.out.println("*");
     }

.. mchoice:: qlm_2
   :answer_a: I
   :answer_b: II
   :answer_c: III
   :answer_d: IV
   :answer_e: V
   :correct: a
   :feedback_a: This will loop with i changing from 1 to 5 and then for each i, j will loop from i to 0 printing the value of i and then a new line.
   :feedback_b: This will loop i from 0 to 4 and j from 0 to i, neglecting to ouput 5.
   :feedback_c: This will loop with i changing from 1 to 4 and j from i to 0. 
   :feedback_d: This will loop with i changing from 1 to 5 and j from 0 to i but it will print each value on a different line.
   :feedback_e: This will loop with i changing from 0 to 4 and j from 0 to i.  

   Which of the following code segments will produce the displayed output?  
   
   .. code-block:: java

     1
     22
     333
     4444
     55555


     I.   for (int i = 1; i <= 5; i++) {
             for (int j = i; j > 0; j--) {
                System.out.print(i);
             }
             System.out.println();
          }

     II.  for (int i = 0; i < 5; i++) {
             for (int j = 0; j < i; j++) {
                System.out.print(i);
             }
             System.out.println();
          }

     III. for (int i = 1; i < 5; i++) {
             for (int j = i; j > 0; j--) {
                System.out.print(i);
             }
             System.out.println();
          }

     IV.  for (int i = 1; i < 6; i++) {
             for (int j = 0; j < i; j++) {
                System.out.println(i);
             }
          }

     V.   for (int i = 0; i < 5; i++) {
             for (int j = 0; j < i; j++) {
                System.out.print(i+1);
             }
             System.out.println();
          }

.. mchoice:: qlm_3
   :answer_a: 0 2 4 6 8 10 12 14 16 18
   :answer_b: 4 16
   :answer_c: 0 6 12 18
   :answer_d: 1 4 7 10 13 16 19
   :answer_e: 4 10 16
   :correct: e
   :feedback_a: This would be correct if we were printing out all of the values of k, not just the ones that have a remainder of 1 when divided by 3.
   :feedback_b: This is missing the value 10 (10 divided by 3 does have a remainder of 1).
   :feedback_c: None of these answers have a remainder of 1 when divided by 3.
   :feedback_d: This answer would be correct if k was incremented by 1 instead of 2. K will be 0, 2, 4, 6, 8, 10, 12, 14, 16, 18 in this loop.
   :feedback_e: This will loop with k having a value of 0 to 18 (it will stop when k = 20). It will print out the value of k followed by a space when the remainder of dividing k by 3 is 1.

   What is printed as a result of the following code segment?  
   
   .. code-block:: java

     for (int k = 0; k < 20; k+=2) {
        if (k % 3 == 1)
           System.out.println(k + " ");
     }

.. mchoice:: qlm_4
   :answer_a: I
   :answer_b: II
   :answer_c: III
   :answer_d: IV
   :answer_e: V
   :correct: a
   :feedback_a: This will loop with j from 1 to 5 and k from 5 to j and print out the value of j and a space. So the first time through the loop it will print 1 five times and the next time it will print out 2 four times and so on.
   :feedback_b: This will print out each value from 1 to 5 five times.
   :feedback_c: This will loop with j from 1 to 5 and k from 1 times.
   :feedback_d: This will loop j from 1 to 5 and k from 1 to 5, printing each number 5 times.
   :feedback_e: This loops with j from 1 to 5 and k from j to 5 and prints out the value of k, printing 1 through 5 on the first line, 2 through 5 on the next, and so on.

   Which of the following code segments will produce the displayed output?  
   
   .. code-block:: java

     11111
     2222
     333
     44
     5


     I.   for (int j = 1; j <= 5; j++) {
             for (int k = 5; k >= j; k--) {
                System.out.print(j + " ");
             }
             System.out.println();
          }

     II.  for (int j = 1; j <= 5; j++) {
             for (int k = 5; k >= 1; k--) {
                System.out.print(j + " ");
             }
             System.out.println();
          }

     III. for (int j = 1; j <= 5; j++) {
             for (int k = 1; k <= j; k++) {
                System.out.print(j + " ");
             }
             System.out.println();
          }

     IV.  for (int j = 1; j <= 5; j++) {
             for (int k = 1; k <= 5; k++) {
                System.out.println(j + " ");
             }
          }

     V.   for (int j = 1; j <= 5; j++) {
             for (int k = j; k <= 5; k++) {
                System.out.print(k + " ");
             }
             System.out.println();
          }

.. mchoice:: qlm_5
   :answer_a: When all values in a are larger than temp.
   :answer_b: The values don't matter. This will always cause an infinite loop.
   :answer_c: Whenever a has values larger than temp.
   :answer_d: Whenever a includes a value that is less than or equal to zero.
   :answer_e: Whenever a includes a value equal to temp.
   :correct: d
   :feedback_a: Values larger than temp will not cause an infinite loop.
   :feedback_b: An infinite loop will not always occur in this program segment. It occurs when at least one value in a is less than or equal to 0.
   :feedback_c: Values larger than temp will not cause an infinite loop.
   :feedback_d: When a contains a value that is less than or equal to zero then multiplying that value by 2 will never make the result larger than the temp value (which was set to some value > 0), so an infinite loop will occur.
   :feedback_e: Values equal to temp will not cause the infinite loop.

   Assume that temp is an int variable intialized to be greater than zero and that a is an array of ints. What scenario will cause an infinite loop in the following code?  
   
   .. code-block:: java

     for (int k = 0; k < a.length; k++) {
        while (a[k] < temp) {
           a[k] *= 2;
        }
     }

.. mchoice:: qlm_6
   :answer_a: var1 = 0, var2 = 2
   :answer_b: var1 = 1, var2 = 1
   :answer_c: var1 = 3, var2 = -1
   :answer_d: var1 = 2, var2 = 0
   :answer_e: The loop won't finish executing because of a division by zero.
   :correct: d
   :feedback_a: This would be true if the body of the while loop never executed. This would have happened if the while check was if var1 != 0 instead of var2 != 0
   :feedback_b: This would be true if the body of the while loop only execued one time, but it executes twice.
   :feedback_c: This would be true if the body of the while loop executed 3 times, but it executes twice.
   :feedback_d: The loop starts with var1=0 and var2=2. The while checks that var2 isn't 0 and that var1/var2 is greater than or equal to zero (0/2=0) so this is equal to zero and the body of the while loop will execute. The variable var1 has 1 added to it for a new value of 1. The variable var2 has 1 subtracted from it for a value of 1. At this point var1=1 and var2=1. The while condition is checked again. Since var2 isn't 0 and var1/var2 (1/1=1) is >=0 so the body of the loop will execute a second time. The variable var1 has 1 added to it for a new value of 2. The variable var2 has 1 subtracted from it for a value of 0. At this point var1=2 and var2=0. The while condition is checked again. Since var2 is zero the while loop stops and the value of var1 is 2 and var2 is 0.
   :feedback_e: 0/2 won't cause a division by zero. The result is just zero.

   What are the values of var1 and var2 after the following code segment is executed and the while loop finishes?
   
   .. code-block:: java

     int var1 = 0;
     int var2 = 2;

     while ((var2 != 0) && ((var1 / var2) >= 0)) {
        var1 = var1 + 1;
        var2 = var2 - 1;
     }






