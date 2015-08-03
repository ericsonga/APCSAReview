.. qnum::
   :prefix: 9-3-
   :start: 1

Getting the Number of Rows and Columns
========================================

..	index::
	pair: 2D Array; number of rows
	pair: 2D Array; number of columns

Arrays know their length (how many elements they can store).  It is a public read-only field so you can use *dot-notation* to access the field (``arrayName.length``). The length of the outer array is the number of rows and the length of one of the inner arrays is the number of columns. **Note that length is a field and not a method, so you don't add parentheses after length**.  However, if you use parentheses after length during the exam, you won't lose any points.

.. code-block:: java 

  ticketInfo.length // returns the number of rows
  ticketInfo[0].length // returns the number of columns

**Check your understanding**

.. mchoicemf:: qa2db_2
   :answer_a: 2
   :answer_b: 4
   :answer_c: 8
   :correct: a
   :feedback_a: The size of outer list is the number of rows.
   :feedback_b: The size of the inner list is the number of columns.
   :feedback_c: This is the total number of items in the array.

   How many rows does ``a`` have if it is created as follows ``int[][] a = {{2, 4, 6, 8}, {1, 2, 3, 4}};``?	
   
.. mchoicemf:: qa2db_3
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
============================

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
         for (int row = 0; row < a.length; row++)
         {
            for (int col = 0; col < a[0].length; col++)
            {
               total = total + a[row][col];
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

**Mixed up programs**

.. parsonsprob:: 9_largest

   The following has the correct code to find the largest value in a 2D array. Drag the blocks from the left into the correct order on the right and indent them as well. Check your solution by clicking on the <i>Check Me</i> button.  You will be told if any of the blocks are in the wrong order or have the wrong indention.
   -----
   public static int getLargest(int[][] arr)  {
    int largest = arr[0][0];
    for (int r = 0; r < arr.length; r++)  {
      for (int c = 0; c < arr[0].length; c++)  {
        if (arr[r][c] > largest)  {
          largest = arr[r][c];
        } // end if
      } // end column loop
    } // end row loop
    return largest;
   } // end method

Use a For-Each to Loop Through an Array
========================================

..	index::
	pair: 2D Array; for-each loop

Since 2D arrays are really arrays of arrays you can also use a nested for-each loop to loop through all elements in an array.

.. code-block:: java 

  public static double getAvg(int[][] a)
  {
     double total = 0;
     for (int[] colArray : a)
     {
         for (int val : colArray)
         {
            total = total + val;
         }
     }
     return total / (a.length * a[0].length);
  }
  
In this case the ``for (int[] colArray : a)`` means to loop through each element of the outer array which will set colArray to the current column array.  Then you can loop through the value in the column array.

