.. qnum::
   :prefix:  10-16-
   :start: 1

Free Response - 2015 Question 1A
-----------------------------------

..	index::
	single: trio
    single: free response
    
The following is a free response question from 2015. It was question 1 part A on the exam. You can see all the free response questions from past exams at https://apstudent.collegeboard.org/apcourse/ap-computer-science-a/exam-practice.  

This question involves reasoning about one-dimensional and two-dimensional arrays of integers. You will write
three static methods, all of which are in a single enclosing class, named ``DiverseArray``, (not shown). The
first method returns the sum of the values of a one-dimensional array; the second method returns an array that
represents the sums of the rows of a two-dimensional array; and the third method analyzes row sums.

**PART A**

Write a static method ``arraySum`` that calculates and returns the sum of the entries in a specified
one-dimensional array. The following example shows an array ``arr1`` and the value returned by a call to
``arraySum``. 

.. figure:: Figures/2015q1arr1.png
    :width: 600px
    :align: center
    :figclass: align-center
    
    Figure 1: Example showing how ``arraySum`` is the sum of the entries in ``arr1``
    
    1 + 3 + 2 + 7 + 3 = 16

   
**SOLVING PART A**
   
To complete the method ``arraySum``, first we should declare a sum variable. 
For simplicity's sake, we will initially set ``sum`` equal to zero, which means we will begin counting at zero.  

.. code-block:: java 

   int sum= 0;

Next we are going to use an enhanced for loop to add the values to ``sum``. 

    An enhanced for loop creates a variable that temporarily captures the value at each index in the array, starting at 0 until the end of the array. 
    This is useful because, unlike with regular for loops or while loops, 
    you don't have to worry about issues like index out of bound exceptions or having to check if the array is empty.

(Note: an enhanced for loop can be used in this case because all we need to do is access the values. 
An enhanced for loop can not be used if you need to modify the values.)

.. code-block:: java 

   for(int valueArray : arr);
   sum += valueArray;
   
The first line in the code above means "for every integer value in the array", and the second line 
adds the current value in the array to ``sum``.

.. code-block:: java 

   return sum;

Finally, we add this line of code so the computer knows to print the result of our for loop.

Try it yourself!

.. activecode:: lcfrsda5
   :language: java 

   
   
   
.. parsonsprob:: 2015Q1A

   The following has the correct code to 'swap' the values but the code is mixed up and contains one or more extra statements.  Drag the needed blocks from the left into the correct order on the right. Check your solution by clicking on the <i>Check Me</i> button.  You will be told if any of the blocks are in the wrong order or if you need to remove one or more blocks.
   -----
   public static int arraySum(int[] arr)
   =====
   int sum = 0;
   =====
   for (int valueArray : arr)
   =====
   sum += valueArray;
   =====
   return sum;
   =====
   for (int valueArray : sum) #distractor
   
