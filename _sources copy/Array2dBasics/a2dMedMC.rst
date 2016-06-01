.. qnum::
   :prefix: 9-8-
   :start: 1

Medium Multiple Choice Questions
----------------------------------

These problems are similar to those you will see on the AP CS A exam.

.. mchoice:: qa2dm_1
   :answer_a: 4
   :answer_b: 8
   :answer_c: 9
   :answer_d: 12
   :answer_e: 10
   :correct: b
   :feedback_a: This would be correct if the variable col was 0 because then it would add 1 + 1 + 1 + 1 which is 4.   
   :feedback_b: Since col is matrix[0].length - 2 it is 4 - 2 which is 2.  This code will loop through all the rows and add all the numbers in the third column (index is 2) which is 2  + 2 + 3 + 1 which is 8.
   :feedback_c: This would be correct if the variable col was 1 because then it would add 1 + 2 + 2 + 4 which is 9.  
   :feedback_d: This would be correct if the variable col was 3 becuase then it would add 2 + 4 + 4+ 2 which is 12. 
   :feedback_e: This would be true if we were adding the values in the 3rd row (row = 2) instead of the 3rd column.  This would be 1 + 2 + 3 + 4 which is 10.   

   Given the following code segment, what is the value of sum after this code executes?
   
   .. code-block:: java 

      int[][] matrix = {{1,1,2,2},{1,2,2,4},{1,2,3,4},{1,4,1,2}};

      int sum = 0;
      int col = matrix[0].length - 2;
      for (int row = 0; row < 4; row++)
      {
         sum = sum + matrix[row][col];
      }
      
.. mchoice:: qa2dm_2
   :answer_a: {{2 3 3}, {1 2 3}, {1 1 2}, {1 1 1}} 
   :answer_b: {{2 1 1}, {3 2 1}, {3 3 2}, {3 3 3}} 
   :answer_c: {{2 1 1 1}, {3 2 1 1}, {3 3 2 1}} 
   :answer_d: {{2 3 3 3}, {1 2 3 3}, {1 1 2 3}} 
   :answer_e: {{1 1 1 1}, {2 2 2 2}, {3 3 3 3}} 
   :correct: b
   :feedback_a: This woud be true if the code put a 3 in the array when the row index is less than the column index and a 2 in the array when the row and column index are the same, and a 1 in the array when the row index is greater than the column index. 
   :feedback_b: This code will put a 1 in the array when the row index is less than the column index and a 2 in the array when the row and column index are the same, and a 3 in the array when the row index is greater than the column index. 
   :feedback_c: This code creates a 2D array with 4 rows and 3 columns so this can't be right.  
   :feedback_d: This code creates a 2D array with 4 rows and 3 columns so this can't be right.  
   :feedback_e: This code creates a 2D array with 4 rows and 3 columns so this can't be right.    

   What are the contents of ``mat`` after the following code segment has been executed? 
   
   .. code-block:: java 

      int [][] mat = new int [4][3];
      for (int row = 0; row < mat.length; row++) { 
         for (int col = 0; col < mat[0].length; col++) { 
            if (row < col) 
               mat[row][col] = 1;
            else if (row == col)    
               mat[row][col] = 2; 
            else 
               mat[row][col] = 3; } } 

   
