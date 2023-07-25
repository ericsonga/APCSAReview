.. qnum::
   :prefix: 8-8-
   :start: 4

Medium Multiple Choice Questions
----------------------------------

These problems are similar to those you will see on the AP CSA exam.

.. mchoice:: qa2dm_1
   :practice: T
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

      int[][] matrix = { {1,1,2,2},{1,2,2,4},{1,2,3,4},{1,4,1,2}};

      int sum = 0;
      int col = matrix[0].length - 2;
      for (int row = 0; row < 4; row++)
      {
         sum = sum + matrix[row][col];
      }

You can step through this code using the following link `Example-9-8-1 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=public+class+ClassNameHere+%7B%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A++++++%0A++++++int%5B%5D%5B%5D+matrix+%3D+%7B%7B1,1,2,2%7D,%7B1,2,2,4%7D,%7B1,2,3,4%7D,%7B1,4,1,2%7D%7D%3B%0A%0A++++++int+sum+%3D+0%3B%0A++++++int+col+%3D+matrix%5B0%5D.length+-+2%3B%0A++++++for+(int+row+%3D+0%3B+row+%3C+4%3B+row%2B%2B)%0A++++++%7B%0A+++++++++sum+%3D+sum+%2B+matrix%5Brow%5D%5Bcol%5D%3B%0A++++++%7D%0A++++++System.out.println(sum)%3B%0A++++++%0A+++%7D%0A%7D&mode=display&curInstr=2>`_.

.. mchoice:: qa2dm_2
   :practice: T
   :answer_a: { {2 3 3}, {1 2 3}, {1 1 2}, {1 1 1}}
   :answer_b: { {2 1 1}, {3 2 1}, {3 3 2}, {3 3 3}}
   :answer_c: { {2 1 1 1}, {3 2 1 1}, {3 3 2 1}}
   :answer_d: { {2 3 3 3}, {1 2 3 3}, {1 1 2 3}}
   :answer_e: { {1 1 1 1}, {2 2 2 2}, {3 3 3 3}}
   :correct: b
   :feedback_a: This woud be true if the code put a 3 in the array when the row index is less than the column index and a 2 in the array when the row and column index are the same, and a 1 in the array when the row index is greater than the column index.
   :feedback_b: This code will put a 1 in the array when the row index is less than the column index and a 2 in the array when the row and column index are the same, and a 3 in the array when the row index is greater than the column index.
   :feedback_c: This code creates a 2D array with 4 rows and 3 columns so this can't be right.
   :feedback_d: This code creates a 2D array with 4 rows and 3 columns so this can't be right.
   :feedback_e: This code creates a 2D array with 4 rows and 3 columns so this can't be right.

   What are the contents of ``mat`` after the following code segment has been executed?

   .. code-block:: java

      int [][] mat = new int [4][3];
      for (int row = 0; row < mat.length; row++) 
      {
         for (int col = 0; col < mat[0].length; col++) 
         {
            if (row < col)
               mat[row][col] = 1;
            else if (row == col)
               mat[row][col] = 2;
            else
               mat[row][col] = 3; 
         } 
      }

You can step through this code using the following link `Example-9-8-2 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=public+class+ClassNameHere+%7B%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A++++++%0A++++++int+%5B%5D%5B%5D+mat+%3D+new+int+%5B4%5D%5B3%5D%3B%0A++++++for+(int+row+%3D+0%3B+row+%3C+mat.length%3B+row%2B%2B)+%7B+%0A+++++++++for+(int+col+%3D+0%3B+col+%3C+mat%5B0%5D.length%3B+col%2B%2B)+%7B+%0A++++++++++++if+(row+%3C+col)+%0A+++++++++++++++mat%5Brow%5D%5Bcol%5D+%3D+1%3B%0A++++++++++++else+if+(row+%3D%3D+col)++++%0A+++++++++++++++mat%5Brow%5D%5Bcol%5D+%3D+2%3B+%0A++++++++++++else+%0A+++++++++++++++mat%5Brow%5D%5Bcol%5D+%3D+3%3B+%7D+%7D+%0A++++++%0A++++++%0A+++%7D%0A%7D&mode=display&curInstr=0>`_.

.. mchoice:: qa2dm_3
   :practice: T
   :answer_a: 4
   :answer_b: 6
   :answer_c: 9
   :answer_d: 10
   :answer_e: 20
   :correct: c
   :feedback_a: This would be correct if it was adding up all the values in the first row.  Does it?
   :feedback_b: This would be correct if it was adding up all the values in column 0.
   :feedback_c: This adds all the values in column 1 starting with the one in the last row (row 3).
   :feedback_d: This would be correct if it was adding up all the values in the second row.
   :feedback_e: This would be correct if it was adding up all the values in the last row.

   Given the following code segment, what is the value of sum after this code executes?

   .. code-block:: java

      int[][] m = { {1,1,1,1},{1,2,3,4},{2,2,2,2},{2,4,6,8}};

      int sum = 0;
      for (int k = 0; k < m.length; k++) 
      {
          sum = sum + m[m.length-1-k][1];
      }

You can step through this code using the following link `Example-9-8-3 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=import+java.util.*%3B%0Apublic+class+Test+%7B%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A+++++int%5B%5D%5B%5D+m+%3D+%7B%7B1,1,1,1%7D,%7B1,2,3,4%7D,%7B2,2,2,2%7D,%7B2,4,6,8%7D%7D%3B%0A%0A+++++int+sum+%3D+0%3B%0A+++++for+(int+k+%3D+0%3B+k+%3C+m.length%3B+k%2B%2B)+%7B%0A+++++++++sum+%3D+sum+%2B+m%5Bm.length-1-k%5D%5B1%5D%3B%0A+++++%7D%0A+++++System.out.println(sum)%3B%0A+++%7D%0A%7D&mode=display&curInstr=0>`_.


