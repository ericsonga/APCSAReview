.. qnum::
   :prefix: 8-1-
   :start: 1

2D Arrays
==========================

..	index::
    single: 2D Arrays
    single: row
    single: column
	pair: arrays; 2D
	pair: 2D Array; definition
	pair: 2D Array; row
	pair: 2D Array; column

Arrays in Java can store many items of the same type.  You can even store items in **two-dimensional** (2D) arrays which are arrays that have both **rows** and **columns**.  A **row** has horizontal elements.  A **column** has vertical elements.  In the picture below there are 3 rows of lockers and 6 columns.  

.. figure:: Figures/2DLockers.jpg
    :width: 400px
    :align: center
    :figclass: align-center

    Figure 1: Lockers in rows and columns 
   
Two dimensional arrays are especially useful when the data is naturally organized in rows and columns like in a spreadsheet, bingo, battleship, theater seats, classroom seats, or a picture.  In battleship, letters map to the rows (A is the first row, B is the second row, and so on) and the column indices start with 1.    

Array Storage
---------------

..	index::
	single: row-major order
	single: column-major order
	single: array of arrays
	pair: 2D Array; row-major order
	pair: 2D Array; column-major order
	pair: 2D Array; array of arrays

Many programming languages actually store two-dimensional array data in a one-dimensional array.  The typical way to do this is to store all the data for the first row followed by all the data for the second row and so on.  This is called **row-major** order.  Some languages store all the data for the first column followed by all the data for the second column and so on.  This called **column-major** order.  

.. figure:: Figures/rowMajor.png
    :width: 250px
    :align: center
    :figclass: align-center

    Figure 1: A 2D array stored in row-major order or column-major order as a 1D array.
    
How Java Stores 2D Arrays
---------------------------

Java actually stores two-dimensional arrays as arrays of arrays.  Each element of the outer array has a reference to each inner array.  The picture below shows a 2D array that has 3 rows and 7 columns.  Notice that the array indices start at 0 and end at the length - 1.  

.. figure:: Figures/ArrayRowsAndCols.png
    :width: 300px
    :align: center
    :figclass: align-center

    Figure 3: Java arrays of arrays
    
On the exam assume that any 2 dimensional (2D) array is in row-major order.  The outer array can be thought of as the rows and the inner arrays the columns.  On the exam all inner arrays will have the same length even though it is possible in Java to have inner arrays of different lengths (also called **ragged arrays**).  

**Check your understanding**

Try to answer the following questions.  Click on the value or values to select them.  Click again to unselect a value.

.. clickablearea:: clicktd1
   :question: Click on all the values in the row at index 2
   :feedback: Rows are horizontal and columns are vertical and both start with index 0.
   :table:
   :correct: 3,1;3,2;3,3;3,4;
   :incorrect: 1,1;1,2;1,3;1,4;2,1;2,2;2,3;2,4;

   +----+----+----+----+
   | 8  | -2 | 3  | -1 |
   +----+----+----+----+
   | 4  |  5 | 0  | -7 |
   +----+----+----+----+
   | 2  | -3 | -4 | -5 |
   +----+----+----+----+
   
.. clickablearea:: clicktd2
   :question: Click on all the values in the column at index 1
   :feedback: Rows are horizontal and columns are vertical and both start with index 0.
   :table:
   :correct: 1,2;2,2;3,2;
   :incorrect: 1,1;1,3;1,4;2,1;2,3;2,4;3,1;3,3;3,4;

   +----+----+----+----+
   | 8  | -2 | 3  | -1 |
   +----+----+----+----+
   | 4  |  5 | 0  | -7 |
   +----+----+----+----+
   | 2  | -3 | -4 | -5 |
   +----+----+----+----+

.. clickablearea:: clicktd3
   :question: Click on the value at row index 2 and column index 1
   :feedback: Rows are horizontal and columns are vertical and both start with index 0.
   :table:
   :correct: 3,2
   :incorrect: 1,1;1,2;1,3;1,4;2,1;2,2;2,3;2,4;3,1;3,3;3,4;

   +----+----+----+----+
   | 8  | -2 | 3  | -1 |
   +----+----+----+----+
   | 4  |  5 | 0  | -7 |
   +----+----+----+----+
   | 2  | -3 | -4 | -5 |
   +----+----+----+----+
   
.. clickablearea:: clicktd4
   :question: Click on the value at row index 0 and column index 2
   :feedback: Rows are horizontal and columns are vertical and both start with index 0.
   :table:
   :correct: 1,3
   :incorrect: 1,1;1,2;1,4;2,1;2,2;2,3;2,4;3,1;3,2;3,3;3,4;

   +----+----+----+----+
   | 8  | -2 | 3  | -1 |
   +----+----+----+----+
   | 4  |  5 | 0  | -7 |
   +----+----+----+----+
   | 2  | -3 | -4 | -5 |
   +----+----+----+----+
   
.. clickablearea:: clicktd5
   :question: Click on the value at row index 1 and column index 1
   :feedback: Rows are horizontal and columns are vertical and both start with index 0.
   :table:
   :correct: 2,2
   :incorrect: 1,1;1,2;1,3;1,4;2,1;2,3;2,4;3,1;3,2;3,3;3,4;

   +----+----+----+----+
   | 8  | -2 | 3  | -1 |
   +----+----+----+----+
   | 4  |  5 | 0  | -7 |
   +----+----+----+----+
   | 2  | -3 | -4 | -5 |
   +----+----+----+----+
   


Declaring 2D Arrays
--------------------

..	index::
	pair: 2D Array; declaration

To declare a 2D array, specify the type of elements that will be stored in the array, then (``[][]``) to show that it is a 2D array of that type, then at least one space, and then a name for the array.  Note that the declarations below just name the variable and say what type of array it will reference.  **The declarations do not create the array**.  Arrays are objects in Java, so any variable that declares an array holds a reference to an object.  If the array hasn't been created yet and you try to print the value of the variable, it will print **null** (meaning it doesn't reference any object yet).  Try the the following in DrJava's interaction pane.
 
.. code-block:: java 

  int[][] ticketInfo;
  String[][] seatingChart; 

.. fillintheblank:: 2darrayNullfill

   What is printed when you type System.out.println(ticketInfo); after you do the above declarations?
   
   -    :null$: Correct.  The array hasn't actually been created yet so it prints null.
        :.*: Did you actually try this?

..	index::
	pair: 2D Array; creation
	
To create an array use the **new** keyword, followed by a space, then the type, and then the number of rows in square brackets followed by the number of columns in square brackets, like this ``new int[numRows][numCols]``. 

The number of elements in a 2D  array is the number of rows times the number of columns. 

The code below creates a 2D array with 2 rows and 3 columns named ``ticketInfo`` and a 2D array with 3 rows and 2 columns named ``seatingChart``.  

.. code-block:: java 

  ticketInfo = new int [2][3];
  seatingChart = new String [3][2];
  
.. fillintheblank:: 2daNumElfill

   How many elements are in ticketInfo? 

   -    :6$: Correct.  2 * 3 = 6
        :.*: Multiply the number of rows and the number of columns
  
Set Value(s) in a 2D Array
--------------------------

..	index::
	pair: 2D Array; initialization
	pair: 2D Array; set value

When arrays are created their contents are automatically initialized to 0 for numeric types, null for object references, and false for type boolean.  To explicitly put a value in an array you give the name of the array followed by the row index in brackets followed by the column index in brackets and then an ``=`` followed by a value.    


.. activecode:: 2DArraySet
  :language: java
  
  public class Test 
  {
     public static void main(String[] args)
     {
        // declare arrays
        int[][] ticketInfo;
        String[][] seatingChart;
        
        // create arrays
        ticketInfo = new int [2][3];
        seatingChart =  new String [3][2];
        
        // initialize the array elements
        ticketInfo[0][0] = 15;
        ticketInfo[0][1] = 10;
        ticketInfo[0][2] = 15;
        ticketInfo[1][0] = 25;
        ticketInfo[1][1] = 20;
        ticketInfo[1][2] = 25;
        seatingChart[0][0] = "Jamal";
        seatingChart[0][1] = "Maria";
        seatingChart[1][0] = "Jacob";
        seatingChart[1][1] = "Suzy";
        seatingChart[2][0] = "Emma";
        seatingChart[2][1] = "Luke";
        
        // print the contents
        System.out.println(ticketInfo);
        System.out.println(seatingChart);
     }
  }
  
Did it print what you expected?  When you print a two dimensional array you just get the reference to the object.  To see what the values are after this code runs use the Java Visualizer by clicking on this `link <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=public+class+Test+%0A++%7B%0A+++++public+static+void+main(String%5B%5D+args)%0A+++++%7B%0A++++++++//+declare+arrays%0A++++++++int%5B%5D%5B%5D+ticketInfo%3B%0A++++++++String%5B%5D%5B%5D+seatingChart%3B%0A++++++++%0A++++++++//+create+arrays%0A++++++++ticketInfo+%3D+new+int+%5B2%5D%5B3%5D%3B%0A++++++++seatingChart+%3D++new+String+%5B3%5D%5B2%5D%3B%0A++++++++%0A++++++++//+initialize+the+array+elements%0A++++++++ticketInfo%5B0%5D%5B0%5D+%3D+15%3B%0A++++++++ticketInfo%5B0%5D%5B1%5D+%3D+10%3B%0A++++++++ticketInfo%5B0%5D%5B2%5D+%3D+15%3B%0A++++++++ticketInfo%5B1%5D%5B0%5D+%3D+25%3B%0A++++++++ticketInfo%5B1%5D%5B1%5D+%3D+20%3B%0A++++++++ticketInfo%5B1%5D%5B2%5D+%3D+25%3B%0A++++++++seatingChart%5B0%5D%5B0%5D+%3D+%22Jamal%22%3B%0A++++++++seatingChart%5B0%5D%5B1%5D+%3D+%22Maria%22%3B%0A++++++++seatingChart%5B1%5D%5B0%5D+%3D+%22Jacob%22%3B%0A++++++++seatingChart%5B1%5D%5B1%5D+%3D+%22Suzy%22%3B%0A++++++++seatingChart%5B2%5D%5B0%5D+%3D+%22Emma%22%3B%0A++++++++seatingChart%5B2%5D%5B1%5D+%3D+%22Luke%22%3B%0A++++++++%0A++++++++//+print+the+contents%0A++++++++System.out.println(ticketInfo)%3B%0A++++++++System.out.println(seatingChart)%3B%0A+++++%7D%0A++%7D&mode=display&curInstr=0>`_

  
**Check your understanding**

.. mchoice:: qa2dab_1
   :answer_a: nums[3][2] = 5;
   :answer_b: nums[1][2] = 5;
   :answer_c: nums[2][1] = 5;
   :answer_d: nums[2][3] = 5;
   :correct: c
   :feedback_a: Remember that the indices start at 0.
   :feedback_b: Remember that the row is first then the column.
   :feedback_c: This will set the value  of the 3rd row and 2nd column.
   :feedback_d: Remember that the row is first and then the column and that the indicies start at 0.

   Which of the following sets the value for the 3rd row and 2nd column of a 2D array called ``nums``?

You can also initialize (set) the values for the array when you create it.  In this case you don't need to specify the size of the array, it will be determined from the values you give.  The code below creates an array called ``ticketInfo`` with 2 rows and 3 columns.  It also creates an array called ``seatingInfo`` with 3 rows and 2 columns.

.. code-block:: java 

  int[][] ticketInfo = {{25,20,25}, {25,20,25}};
  String[][] seatingInfo = {{"Jamal", "Maria"}, {"Jake", "Suzy"}, {"Emma", "Luke"}};
  
.. fillintheblank:: 2daGetElfill

   What is the value at ``seatingInfo[2][1]`` after the code above exectues?

   -    :Luke$: Correct.  The string at row index 2 and column index 1 is Luke.
        :.*: Indicies start at 0 and the row is first then the column

        
  
Get a Value from a 2D Array
------------------------------

..	index::
	pair: 2D Array; access value

To get the value in a 2D array give the name of the array followed by the row and column indicies in square brackets. The code below will get the value at row index 1 and column index 0 from ``ticketInfo``.  It will also get the value at row index 0 and column index 1 from ``seatingChart``. 

.. code-block:: java 

  int[][] ticketInfo = {{25,20,25}, {25,20,25}};
  String[][] seatingInfo = {{"Jamal", "Maria"}, {"Jake", "Suzy"}, {"Emma", "Luke"}};
  int value = ticketInfo[1][0];
  String name = seatingInfo[0][1]; 
  
**Check your understanding**

.. mchoice:: qa2dab_2
   :answer_a: Jamal
   :answer_b: Maria
   :answer_c: Jake
   :answer_d: Suzy
   :answer_e: Emma
   :correct: b
   :feedback_a: This would be true for if <code>name</code> was set to <code>seatingInfo[0][0];</code> instead.
   :feedback_b: Maria is the value of <code>seatingInfo[0][1];</code>.
   :feedback_c: This would be true for if <code>name</code> was set to <code>seatingInfo[1][0];</code> instead.
   :feedback_d: This would be true for if <code>name</code> was set to <code>seatingInfo[1][1];</code> instead.
   :feedback_e: This would be true for if <code>name</code> was set to <code>seatingInfo[2][1];</code> instead.

   What is the value of ``name`` after the code above executes?  

