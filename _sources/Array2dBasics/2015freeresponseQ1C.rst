.. qnum::
   :prefix:  10-16-
   :start: 1

Free Response - 2015 Question 1C
----------------------------------

..	index::
	single: trio
    single: free response
    
The following is a free response question from 2015. It was question 1 part C on the exam. You can see all the free response questions from past exams at https://apstudent.collegeboard.org/apcourse/ap-computer-science-a/exam-practice.  

This question involves reasoning about one-dimensional and two-dimensional arrays of integers. You will write
three static methods, all of which are in a single enclosing class, named ``DiverseArray``, (not shown). The
first method returns the sum of the values of a one-dimensional array; the second method returns an array that
represents the sums of the rows of a two-dimensional array; and the third method analyzes row sums.
   
**PART C**

A two-dimensional array is **diverse** if no two of its rows have entries that sum to the same value. 
In the following examples, the ``arraymat1`` is diverse because each row sum is different, 
but the ``arraymat2`` is not diverse because the first and last rows have the same sum.

.. figure:: Figures/2015q1partC.png
    :width: 700px
    :align: center
    :figclass: align-center
    
    Figure 3: Example showing a diverse array and a not diverse array
    
    The first array is diverse because each row sum is different.
    
       16, 32, 28, 20
    
    The second array is not diverse because the first and last rows have the same sum.
    
       14, 35, 36, 14

Write a ``static`` method ``isDiverse`` that determines whether or not a given two-dimensional array is diverse. 
The method has one parameter: a two-dimensional array ``arr2D`` of ``int`` values. 
The method should return ``true`` if all the row sums in the given array are unique; otherwise, it should return ``false``. 
In the arrays shown above, the call ``isDiverse(mat1)`` returns true and the call ``isDiverse(mat2)`` returns false.

Assume that ``arraySum`` and ``rowSums`` work as specified, regardless of what you wrote in parts (a) and(b). 
You must use ``rowSums`` appropriately to receive full credit.  

Try to complete method ``isDiverse`` below. 
 

**SOLVING PART C**

To complete the method ``isDiverse``, first we should initialize the array of row sums of arr2D.

.. code-block:: java 
   
   int rowSumsArray = rowSums(arr2D);
   
Next we want to use two pointing variables to compare all the sums in ``rowSumsArray``.

We want to start ``pointOne`` at zero. While it is at least one less than ``rowSumsArray``, we add one. 
The reason we start at zero and want it to be at least one less than ``rowSumsArray``
is because we want point one to come before point two. //
Point one will look at every number in ``rowSumsArray`` from zero to the next to last number.

.. code-block:: java 

   for(int pointOne = 0; pointOne < rowSumsArray.length - 1; pointOne ++);

We start ``pointTwo`` at one and while it is less than ``rowSumsArray``, we add one. 
The reason we start at one and go to right before ``rowSumsArray`` because we want
point two to be after point one. 
Point two will look at every number in ``rowSumsArray`` from one to the last number.

.. code-block:: java 
   
   for(int pointTwo = 1; pointTwo < rowSumsArray.length; pointTwo ++);

Then we compare the values of ``pointOne`` and ``pointTwo`` and if at any point they are equal, it is not diverse and we want to return false.

.. code-block:: java 
      
   if(rowSumsArray[pointOne] == rowSumsArray[pointTwo]);
   return false;

If ``pointOne`` and ``pointTwo`` do not have equal values, then it is diverse and we want to return true. 

.. code-block:: java 
   
   return true; 

Try to run the final code:

.. activecode:: lcfrsda5
   :language: java
   
   public class rowSumsArray
   {
   

.. parsonsprob:: 2015Q1C

   The following has the correct code to 'swap' the values but the code is mixed up and contains one or more extra statements.  Drag the needed blocks from the left into the correct order on the right. Check your solution by clicking on the <i>Check Me</i> button.  You will be told if any of the blocks are in the wrong order or if you need to remove one or more blocks.
   -----
   public static boolean isDiverse(int[][] arr2D)
   =====
   int[] sums = rowSums(arr2D);
   =====
   for (int pointOne = 0; pointOne < rowSumsArray.length - 1; pointOne++)
   =====
   for (int pointTwo = 1; pointTwo < rowSumsArray.length; pointTwo++)
   =====
   if(rowSumsArray[pointOne] == rowSumsArray[pointTwo]);
   =====
   return false;
   =====
   return true;
   =====
   for (int pointTwo = 0; pointTwo < rowSumsArray.length + 1; pointTwo++) #distractor
   =====
   public static int isDiverse(int[][] arr2D) #distractor