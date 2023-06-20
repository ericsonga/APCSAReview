.. qnum::
   :prefix: 8-8-
   :start: 1

Easier Multiple Choice Questions
----------------------------------

These problems are easier than most of those that you will usually see on the AP CSA exam.


.. mchoice:: qa2de_1
   :practice: T
   :answer_a: 2
   :answer_b: 4
   :answer_c: 8
   :correct: b
   :feedback_a: The size of outer array is the number of rows.  Remember that two-dimensional arrays are actually an array of arrays in Java.
   :feedback_b: The size of the inner array is the number of columns.
   :feedback_c: This is the total number of items in the array.

   How many columns does ``a`` have if it is created as follows ``int[][] a = { {2, 4, 6, 8}, {1, 2, 3, 4}};``?

You can see how the array looks by clicking on the following `Ex-9-7-1 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=public+class+ClassNameHere+%7B%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A++++++%0A++++++int%5B%5D%5B%5D+a+%3D+%7B%7B2,+4,+6,+8%7D,+%7B1,+2,+3,+4%7D%7D%3B%0A++++++System.out.println(a%5B0%5D%5B0%5D)%3B%0A++++++System.out.println(a%5B0%5D%5B1%5D)%3B%0A++++++System.out.println(a%5B0%5D%5B2%5D)%3B%0A++++++System.out.println(a%5B0%5D%5B3%5D)%3B%0A++++++System.out.println(a%5B1%5D%5B0%5D)%3B%0A++++++System.out.println(a%5B1%5D%5B1%5D)%3B%0A++++++System.out.println(a%5B1%5D%5B2%5D)%3B%0A++++++System.out.println(a%5B1%5D%5B3%5D)%3B%0A++++++%0A++++++%0A+++%7D%0A%7D&mode=display&curInstr=0>`_.

.. mchoice:: qa2de_2
   :practice: T
   :answer_a: <code>strGrid[0][2] = "S";</code>
   :answer_b: <code>strGrid[1][3] = "S";</code>
   :answer_c: <code>strGrid[3][1] = "S";</code>
   :answer_d: <code>strGrid[2][0] = "S";</code>
   :answer_e: <code>strGrid[0][0] = "S";</code>
   :correct: d
   :feedback_a: The code <code>letterGrid[0][2] = "S";</code> actually sets the 1st row and 3rd column to hold a reference to the <code>String</code> object "S".
   :feedback_b: This would be true if row and column indicies started at 1 instead of 0 and if this was in column major order.
   :feedback_c: This would be true if row and column indicies started at 1 instead of 0.
   :feedback_d: In row-major order the row is specified first followed by the column.  Row and column indicies start with 0.  So <code>letterGrid[2][0]</code> is the 3rd row and 1st column.
   :feedback_e: This would set the element at the first row and column.

   Which of the following statements assigns the letter S to the third row and first column of a two-dimensional array named ``strGrid`` (assuming row-major order).

.. mchoice:: qa2de_3
   :practice: T
   :answer_a: a[0][3]
   :answer_b: a[1][3]
   :answer_c: a[0][2]
   :answer_d: a[2][0]
   :answer_e: a[3][1]
   :correct: c
   :feedback_a: This would be true if the row index started at 0, but the column index started at 1.
   :feedback_b: Both the row and column indicies start with 0.
   :feedback_c: The value 6 is at row 0 and column 2.
   :feedback_d: The row index is specified first, then the column index.
   :feedback_e: The row index is specified first and the indicies start at 0.

   How would you get the value 6 out of the following array ``int[][] a = { {2, 4, 6, 8}, {1, 2, 3, 4}};``?



