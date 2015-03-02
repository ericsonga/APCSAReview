.. qnum::
   :prefix: 9-2-
   :start: 1


Declaring 2D Arrays
====================

..	index::
	pair: 2D Array; declaration

To declare a 2D array, specify the type of elements that will be stored in the array, then (``[][]``) to show that it is a 2D array of that type, then at least one space, and then a name for the array.  Note that the declarations below just name the variable and say what type of array it will reference.  **The declarations do not create the array**.  Arrays are objects in Java, so any variable that declares an array holds a reference to an object.  If the array hasn't been created yet and you try to print the value of the variable, it will print **null** (meaning it doesn't reference any object yet).  Try the the following in DrJava's interaction pane.
 
.. code-block:: java 

  int[][] ticketInfo;
  String[][] seatingChart; 

.. fillintheblank:: nullInit
   :correct: null$
   :feedback1: ('.*','Did you actually try this in DrJava?')
   :blankid: 2darrayNullblank

   What is printed in DrJava when you type System.out.println(ticketInfo); and hit enter after you do the above declarations? :textfield:`2darrayNullblank::mini`

..	index::
	pair: 2D Array; creation
	
To create an array use the **new** keyword, followed by a space, then the type, and then the number of rows in square brackets followed by the number of columns in square brackets.  The code below creates a 2D array with 2 rows and 3 columns named ``ticketInfo`` and a 2D array with 3 rows and 2 columns named ``seatingChart``.  

.. code-block:: java 

  ticketInfo = new int [2][3];
  seatingChart = new String [3][2];
  
.. fillintheblank:: NumElements
   :correct: 6$
   :feedback1: ('.*','Multiply the number of rows and the number of columns')
   :blankid: 2daNumElblank

   How many elements are in ticketInfo? :textfield:`2daNumElblank::mini`
  
Set Value(s) in a 2D Array
===========================

..	index::
	pair: 2D Array; initialization
	pair: 2D Array; set value

When arrays are created their contents are automatically initialized to 0 for numeric types, null for object references, and false for type boolean.  To explicitly put a value in an array you give the name of the array followed by the row index in brackets followed by the column index in brackets and then an ``=`` followed by a value.    

.. code-block:: java 

  ticketInfo[0][0] = 25;
  ticketInfo[0][1] = 20;
  ticketInfo[0][2] = 25;
  ticketInfo[1][0] = 25;
  ticketInfo[1][1] = 20;
  ticketInfo[1][2] = 25;
  seatingChart[0][0] = "Jamal";
  seatingChart[0][1] = "Maria";
  seatingChart[1][0] = "Jacob";
  seatingChart[1][1] = "Suzy";
  seatingChart[2][0] = "Emma";
  seatingChart[2][1] = "Luke";
  
**Check your understanding**

.. mchoicemf:: qa2db_1
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
  
.. fillintheblank:: GetElement
   :correct: Luke$
   :feedback1: ('.*','Indicies start at 0 and the row is first then the column')
   :blankid: 2daGetElblank

   What is the value at ``seatingInfo[2][1]`` after the code above exectues? :textfield:`2daGetElblank::medium`
  
Get a Value from a 2D Array
============================

..	index::
	pair: 2D Array; access value

To get the value in a 2D array give the name of the array followed by the row and column indicies in square brackets. The code below will get the value at row index 1 and column index 0 from ``ticketInfo``.  It will also get the value at row index 0 and column index 1 from ``seatingChart``. 

.. code-block:: java 

  int value = ticketInfo[1][0];
  String name = seatingInfo[0][1]; 
  
**Check your understanding**

.. mchoicemf:: qa2db_2
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

