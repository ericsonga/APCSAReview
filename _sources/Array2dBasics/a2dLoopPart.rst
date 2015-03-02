.. qnum::
   :prefix: 9-4-
   :start: 1

Loop Through Part of a 2D Array
======================================

..	index::
	pair: 2D Array; loop range

You can loop through just part of a 2D array.  For example, you might want to sum all of the values in a given row.

.. code-block:: java 

  public static int getTotalForRow(int row, int[][] a)
  {
     int total = 0;
     for (int col = 0; col < a[0].length; col++)
     {
       total = total + a[row][col]; 
     }
     return total;
  }
  
You can change the starting value and ending value to loop through a subset of a 2D array. 

.. code-block:: java 

   public static int countValues(int value, int[][] a, 
                                 int rowStart, int rowEnd, 
                                 int colStart, int colEnd)
   {
     int count = 0;
     for (int row = rowStart; row < rowEnd; row++)
     {
       for (int col = colStart; col < colEnd; col++)
       {
         if (a[row][col] == value) count++;
       }
     }
     return count;
   }
   


      

