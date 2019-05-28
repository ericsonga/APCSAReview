.. qnum::
   :prefix: 8-2-
   :start: 1

Traversing 2D Arrays (nested loops)
===================================


Getting the Number of Rows and Columns
---------------------------------------
..	index::
	pair: 2D Array; number of rows
	pair: 2D Array; number of columns

Arrays know their length (how many elements they can store).  It is a public read-only field so you can use *dot-notation* to access the field (``arrayName.length``). The length of the outer array is the number of rows and the length of one of the inner arrays is the number of columns. 

.. note::

   Note that length is a field and not a method, so you don't add parentheses after length.  However, if you use parentheses after length during the exam, you won't lose any points.

.. code-block:: java 

  ticketInfo.length // returns the number of rows
  ticketInfo[0].length // returns the number of columns
  
.. note::

   Since for the AP CS A exam all two-dimensional arrays are rectangular arrays (arrays that have the same number of columns in each row) you can just use the length of the first inner array as the number of columns as shown by ``ticketInfo[0].length``.

**Check your understanding**

.. mchoice:: qa2ldb_2
   :answer_a: 2
   :answer_b: 4
   :answer_c: 8
   :correct: a
   :feedback_a: The size of outer list is the number of rows.
   :feedback_b: The size of the inner list is the number of columns.
   :feedback_c: This is the total number of items in the array.

   How many rows does ``a`` have if it is created as follows ``int[][] a = {{2, 4, 6, 8}, {1, 2, 3, 4}};``?	
   
.. mchoice:: qa2ldb_3
   :answer_a: nums[3][2]
   :answer_b: nums[2][3]
   :answer_c: nums[2][1]
   :answer_d: nums[1][2]
   :correct: c
   :feedback_a: This would be true if array indices started with 1 but they start with 0. 
   :feedback_b: This would be true if array indicies started with 1 and the column was specified first.  However, array indices start at 0 and the row is given first in row-major order.
   :feedback_c: Array indices start with 0 so the third row has an index of 2 and the second column has an index of 1.  
   :feedback_d: This would be true if the column index was first, but in row-major order the row index is first.

   Which of the following would I use to get the value in the third row and second column from a 2D array called ``nums``?
   
 
Looping Through a 2D Array
--------------------------

..	index::
	pair: 2D Array; looping through
	pair: loop; nested

Since you can find out the number of rows and columns in a 2D array you can use a **nested for loop** (one loop inside of another loop) to loop through all of the elements of a 2D array.

.. activecode:: lcgetAverage
   :language: java 
   
   public class Test
   {

      public static double getAverage(int[][] a)
      {
         double total = 0;
         int value = 0;
         for (int row = 0; row < a.length; row++)
         {
            for (int col = 0; col < a[0].length; col++)
            {
               value = a[row][col];
               total = total + value;
            }
         }
         return total / (a.length * a[0].length);
      }
      
      public static void main(String[] args)
      {
         int[][] matrix = {{1,2,3},{4,5,6}};
         System.out.println(getAverage(matrix));
      }
   }
   
Some key things to notice about this code are:

- ``total`` is declared to be a double so that the result will be a double.  If ``total`` was declared to be an ``int`` then the result would be an integer and the values after the decimal point would be thrown away.  
- The number of rows is ``a.length``
- The number of columns is ``a[0].length``
- The number of times this loop executes is the number of rows times the number of columns.  

You can step through the code by clicking on this `link1 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=public+class+Test%0A%7B%0A%0A+++public+static+double+getAverage(int%5B%5D%5B%5D+a)%0A+++%7B%0A++++++double+total+%3D+0%3B%0A++++++int+value+%3D+0%3B%0A++++++for+(int+row+%3D+0%3B+row+%3C+a.length%3B+row%2B%2B)%0A++++++%7B%0A+++++++++for+(int+col+%3D+0%3B+col+%3C+a%5B0%5D.length%3B+col%2B%2B)%0A+++++++++%7B%0A++++++++++++value+%3D+a%5Brow%5D%5Bcol%5D%3B%0A++++++++++++total+%3D+total+%2B+value%3B%0A+++++++++%7D%0A++++++%7D%0A++++++return+total+/+(a.length+*+a%5B0%5D.length)%3B%0A+++%7D%0A%0A+++public+static+void+main(String%5B%5D+args)%0A+++%7B%0A++++++int%5B%5D%5B%5D+matrix+%3D+%7B%7B1,2,3%7D,%7B4,5,6%7D%7D%3B%0A++++++System.out.println(getAverage(matrix))%3B%0A+++%7D%0A%7D&mode=display&curInstr=0/>`_

**Mixed up programs**

.. parsonsprob:: 9_largest

   The following has the correct code to find the largest value in a 2D array. Drag the blocks from the left into the correct order on the right and indent them as well. Check your solution by clicking on the <i>Check Me</i> button.  You will be told if any of the blocks are in the wrong order or have the wrong indention.
   -----
   public static int getLargest(int[][] arr)  {
   =====
    int largest = arr[0][0];
    int current = 0;
    for (int r = 0; r < arr.length; r++)  {
    =====
      for (int c = 0; c < arr[0].length; c++)  {
    =====
        current = arr[r][c];
        if (current > largest)  {
    =====
          largest = current;
    =====
        } // end if
    =====
      } // end column loop
    =====
    } // end row loop
    return largest;
   =====
   } // end method
   
You can step through this code using the Java Visualizer by clicking on the following `link2 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=public+class+Test+%7B%0A+++%0A+++public+static+int+getLargest(int%5B%5D%5B%5D+arr)++%7B%0A++++int+largest+%3D+arr%5B0%5D%5B0%5D%3B%0A++++for+(int+row+%3D+0%3B+row+%3C+arr.length%3B+row%2B%2B)++%7B%0A++++++for+(int+col+%3D+0%3B+col+%3C+arr%5B0%5D.length%3B+col%2B%2B)++%7B%0A++++++++if+(arr%5Brow%5D%5Bcol%5D+%3E+largest)++%7B%0A++++++++++largest+%3D+arr%5Brow%5D%5Bcol%5D%3B%0A++++++++%7D+//+end+if%0A++++++%7D+//+end+column+loop%0A++++%7D+//+end+row+loop%0A++++return+largest%3B%0A+++%7D+//+end+method%0A+++%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A++++++int%5B%5D%5B%5D+testArray+%3D+%7B%7B-32,+-6,+-3%7D,+%7B-392,+-93,+-2%7D%7D%3B%0A++++++System.out.println(getLargest(testArray))%3B%0A+++%7D%0A%7D&mode=display&curInstr=40>`_

Use a For-Each to Loop Through an Array
----------------------------------------

..	index::
	pair: 2D Array; for-each loop

Since 2D arrays are really arrays of arrays you can also use a nested for-each loop to loop through all elements in an array.  Loop through each of the inner arrays and loop through all the values in each inner array.

.. activecode:: getAvgForEach
   :language: java
   
   public class Test
   {

      public static double getAvg(int[][] a)
      {
         double total = 0;
         for (int[] innerArray : a)
         {
            for (int val : innerArray)
            {
               total = total + val;
            }
         }
         return total / (a.length * a[0].length);
      }
      
      public static void main(String[] args)
      {
         int[][] theArray = {{80, 90, 70}, {20, 80, 75}};
         System.out.println(getAvg(theArray));
      }
   }
  
In this case the ``for (int[] colArray : a)`` means to loop through each element of the outer array which will set colArray to the current column array.  Then you can loop through the value in the column array.

You can step through this code using the Java Visualizer by clicking on the following `link3 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=public+class+Test%0A+++%7B%0A%0A++++++public+static+double+getAvg(int%5B%5D%5B%5D+a)%0A++++++%7B%0A+++++++++double+total+%3D+0%3B%0A+++++++++for+(int%5B%5D+colArray+%3A+a)%0A+++++++++%7B%0A++++++++++++for+(int+val+%3A+colArray)%0A++++++++++++%7B%0A+++++++++++++++total+%3D+total+%2B+val%3B%0A++++++++++++%7D%0A+++++++++%7D%0A+++++++++return+total+/+(a.length+*+a%5B0%5D.length)%3B%0A++++++%7D%0A++++++%0A++++++public+static+void+main(String%5B%5D+args)%0A++++++%7B%0A+++++++++int%5B%5D%5B%5D+theArray+%3D+%7B%7B80,+90,+70%7D,+%7B20,+80,+75%7D%7D%3B%0A+++++++++System.out.println(getAvg(theArray))%3B%0A++++++%7D%0A+++%7D&mode=display&curInstr=0>`_

.. qnum::
   :prefix: 9-4-
   :start: 1

Loop Through Part of a 2D Array
-------------------------------

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
   


      

