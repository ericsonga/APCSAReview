.. qnum::
   :prefix:  10-16-
   :start: 1

Free Response - 2015 Question 1B
-----------------------------------

..	index::
	single: trio
    single: free response
    
The following is a free response question from 2015. It was question 1 part B on the exam. You can see all the free response questions from past exams at https://apstudent.collegeboard.org/apcourse/ap-computer-science-a/exam-practice.  

This question involves reasoning about one-dimensional and two-dimensional arrays of integers. You will write
three static methods, all of which are in a single enclosing class, named ``DiverseArray``, (not shown). The
first method returns the sum of the values of a one-dimensional array; the second method returns an array that
represents the sums of the rows of a two-dimensional array; and the third method analyzes row sums.

**PART B**

Write a ``static`` method ``rowSums`` that calculates the sums of each of the rows in a given two-dimensional array and returns these sums in a one-dimensional array. 
The method has one parameter, a two-dimensional array ``arr2D`` of ``int`` values. 
The array is in row-major order: ``arr2D[r][c]`` is the entry at row ``r`` and column ``c``.
The method returns a one-dimensional array with one entry for each row of ``arr2D`` such that each entry is the sum of the corresponding row in ``arr2D``.
As a reminder, each row of a two-dimensional array is a one-dimensional array. 
For example, if ``mat1`` is the array represented by the following table, the call ``rowSums(mat1)`` returns the array ``{16, 32, 28, 20}``.

.. figure:: Figures/2015q1partB2.png
    :width: 500px
    :align: center
    :figclass: align-center
    
    Figure 2: Example showing how ``rowSums`` works
    
Assume that ``arraySum`` works as specified, regardless of what you wrote in part (a). 
You must use ``arraySum`` appropriately to receive full credit.
     
**SOLVING PART B**   

To create a method ``rowSums``, first we should declare our resulting array. 

.. code-block:: java 

   int[] sums = 

Since we want our resulting array to have the same number of rows as ``arr2D``,
when we initialize the array we will say that we want it equal to ``arr2d``'s length.
    
.. code-block:: java 

    int[] sums = new int[arr2D.length];

Next we want to iterate through ``arr2d``'s rows, calling ``arraySum`` on each row k, 
placing those value at index k in the resulting array. 
To do this, we will start by iterating through rows of ``arr2d``.
  
So we need to go through each row, call on ``arraySum``, and take that value and put it in the result array. 
    
This for loop starts with k equals zero, and while k is less than the length of ``array2D``, it adds one to k.
    
.. code-block:: java 

   for(int k = 0; k > arr2D.length; k++);
   {
   }
  
To find sum of row k in the array, we want put something at index k in the array result. 

.. code-block:: java 
   
   for(int k = 0; k < arr2D.length; k++);
   {
   result[k]=
   }

We set the result of k equal to ``arraySum(array2D[k])``. 

``arraySum`` finds the sum of the entries in the one-dimensional array arr.

``arr2D[k]`` makes ``arraySum`` look at each row ``k``.

So ``arraySum`` will find the result of ``k`` at ``array2D`` of each row.  

.. code-block:: java 
   
   for(int k = 0; k < arr2D.length; k++);
   {
   result[k]= arraySum(arr2D[k]);
   }
   
Finally we want to display the final value we get from the for loop.
   
.. code-block:: java 
   
   return result;

Try to write and run the final code below.

.. activecode:: lcfrsda5
   :language: java
   
   

.. parsonsprob:: 2015Q1B

   The following has the correct code to 'swap' the values but the code is mixed up and contains one or more extra statements.  Drag the needed blocks from the left into the correct order on the right. Check your solution by clicking on the <i>Check Me</i> button.  You will be told if any of the blocks are in the wrong order or if you need to remove one or more blocks.
   -----
   public static int[] rowSums(int[][] arr2D)
   =====
   int[] sums = new int[arr2D.length];
   =====
   for (int k = 0; k < sums.length; k++)
   =====
   for (int k = 1; k < sums.length; k++) #distractor
   =====
   result[k] = arraySum(arr2D[k]);
   =====
   return sums;
   

