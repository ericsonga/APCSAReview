.. qnum::
   :prefix: 9-9-
   :start: 1

Hard Multiple Choice Questions
----------------------------------

These problems are harder than those that you will typically see on the AP CS A exam.
      
.. mchoicemf:: qa2dm_2
   :answer_a: {{6, 4, 2}, {2, 4, 6}}
   :answer_b: {{3, 2, 1}, {1, 4, 6}}
   :answer_c: {{3, 2, 1}, {1, 4, 8}}
   :answer_d: {{4, 4, 2}, {2, 4, 4}}
   :answer_e: {{3, 2, 1}, {2, 4, 4}}
   :correct: c
   :feedback_a: Check the starting values on the nested loops.
   :feedback_b: Notice that there are two if's, not an if and else.
   :feedback_c: The first if will change an odd number to an even.  The second if will also execute after an odd number has been made even.  Both loops start at index 1 so this only changes the items in the second row and second and third column.   
   :feedback_d: Both if's will execute.  Also, check the bounds on the nested loop. 
   :feedback_e: Both if's will execute.  Check the bounds on the inner loop.  When does it stop?    

   What are the contents of ``arr`` after the following code has been executed? 
   
   .. code-block:: java 

      int[][] arr = {{3,2,1},{1,2,3}};
      int value = 0;
      for (int row = 1; row < arr.length; row++) {
         for (int col = 1; col < arr.length; col++) {
            value = arr[row][col];
            if (value % 2 == 1) arr[row][col] = value + 1;
            if (arr[row][col] % 2 == 0) arr[row][col] = value * 2;
         }
      }


   
