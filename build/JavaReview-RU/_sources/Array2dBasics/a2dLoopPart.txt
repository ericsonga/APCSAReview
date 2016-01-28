.. qnum::
   :prefix: 9-4-
   :start: 1

Loop Through Part of a 2D Array
======================================

..	index::
	pair: 2D Array; loop range

You can loop through just part of a 2D array.  For example, you might want to sum all of the values in a given row.

.. activecode:: lca2dloopPart
   :language: java 
 

   public class Test
   {

      public static int getTotalForRow(int row, int[][] a)
      {
         int total = 0;
         for (int col = 0; col < a[0].length; col++)
         {
            total = total + a[row][col]; 
         }
         return total;
      }
      
      public static void main(String[] args)
      {
         int[][] matrix = {{1,2,3},{4,5,6}};
         System.out.println(getTotalForRow(0,matrix));
      }
   }
  
You can change the starting value and ending value to loop through a subset of a 2D array. 

.. activecode:: lca2dloopPart2
   :language: java 
 

   public class Test
   {
   
      public static int countValues(int value, int[][] a, 
                                 int rowStart, int rowEnd, 
                                 int colStart, int colEnd)
      {
         int count = 0;
         for (int row = rowStart; row <= rowEnd; row++)
         {
            for (int col = colStart; col <= colEnd; col++)
            {
               if (a[row][col] == value) count++;
            }
         }
         return count;
      } 
      
      public static void main(String[] args)
      {
         int[][] matrix = {{3,2,3},{4,3,6},{8,9,3},{10,3,3}};
         System.out.println(countValues(3,matrix,0,2,0,2));
      }  
   }
   


      

