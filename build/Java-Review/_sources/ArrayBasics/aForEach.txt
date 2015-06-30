.. qnum::
   :prefix: 7-2-
   :start: 1
  
Looping with the For-Each Loop
==============================

..	index::
	single: for-each
	pair: loop; for-each
   
You will often loop through all of the elements of an array (to get the average or to get each one to display).  You will typically do this using a **for-each** loop.  A **for-each** loop is a loop that can only be used on a collection of items.  It will loop through the collection and each time through the loop it will use the next item from the collection.  It starts with the first item in the array (the one at index 0) and continues through in order to the last item in the array.

.. code-block:: java
  :linenos:
  
  public static double getAvg(int[ ] values) 
  {
     double total = 0;
     for (int val : values) 
     {
        total = total + val;
     }
     return total / values.length;
  }
  
..	index::
	single: static
	single: class method
	pair: method; class
	pair: method; static

The **for-each** loop is shown on line 4 above.  It says to loop through the array called **values** and each time through the loop set the variable **val** to the next item in the array.  We have to specify the type of **val** first since this declares a variable.  The type must match the type of objects in the array.

The code above wasn't object-oriented.  You may have noticed that it was declared to be **static**.  This means that it is a **class method** not an **object method**.  It is a **class method** since it doesn't operate on any object fields - all data that it needs has been passed in to the method.  Class methods can be called using ``ClassName.methodName()``.  They can also be called on an object of the class.  Object methods can only be called on an object of the class.  
    
A more object-oriented way of doing this would be if the array was a field called ``values`` in the same class as the ``getAverage`` method.  Then you don't need to pass the array **values** to the method and the method is an object (instance) method since it operates on the fields of the object.

.. code-block:: java 
   :linenos:

   private int[ ] values; 

   public double getAverage()
   {
      double total = 0;
      for (int val : values)
      {
         total = total + val;
      }
      return total / values.length;
    }
    
Since ``values`` is an object field and the method ``getAverage`` is in the same class it can directly access the field ``values``.  The code could have also been written as ``this.values`` to indicate the current object's field called ``values``.  Every object method is passed the object the method was called on and it can be referenced using the Java keyword ``this``.  
    
**Mixed up programs**

.. parsonsprob:: pab_2

   The following method has the correct code to return the largest value in an integer array called <b>vals</b> (a field of the current object), but the code is mixed up.  Drag the blocks from the left into the correct order on the right. You will be told if any of the blocks are in the wrong order or not indented correctly.</p>
   -----
   public int getLargest()
   {
   =====
     int largest = vals[0];
   =====
     for (int item : vals)
     {
   =====
       if (item > largest)
       {
   =====
         largest = item;
   =====
       }  // end if 
   =====
     } // end for
     return largest;
   =====
   } // end method
   
Some examples of finding the largest value in an array start by setting the largest variable to 0.  But, what happens if the array only contains negative numbers?  What value could you set largest to and still have it work correctly even if the field **values** contained only negative numbers?

.. mchoicemf:: qab_3
   :answer_a: Whenever the first element in a is equal to val.
   :answer_b: Whenever a contains any element which equals val.
   :answer_c: Whenever the last element in a is equal to val.
   :answer_d: Whenever only 1 element in a is equal to val.
   :correct: c
   :feedback_a: This would be true if the loop started at the end of the array and moved toward the beginning.  But, it will loop from the first element to the last.  
   :feedback_b: This would be true if temp was only set to the result of checking if the current element in the array is equal to val when it is false.  But, it is reset each time through the loop.
   :feedback_c: The variable temp is assigned to the result of checking if the current element in the array is equal to val.  The last time through the loop it will check if the last element is equal to val.
   :feedback_d: There is no count of the number of times the array element is equal to value.  

   Given that a is an array of integers, which of the following best describes the conditions under which the following code segment will return true?
   
   .. code-block:: java 

     boolean temp = false;
     for ( int i = 0; i < a.length; i++) 
     { 
       temp = ( a[i] == val ); 
     }
     return temp;
     
.. mchoicemf:: qab_4
   :answer_a: All values in positions m+1 through myStuff.length-1 are greater than or equal to n.
   :answer_b: All values in position 0 through m are less than n.
   :answer_c: All values in position m+1 through myStuff.length-1 are less than n.
   :answer_d: The smallest value is at position m.
   :correct: a
   :feedback_a: Mystery steps backwards through the array until the first value less than the passed num (n) is found and then it returns the index where this value is found.
   :feedback_b: This would be true if mystery looped forward through the array and returned when it found a value greater than the passed num (n).
   :feedback_c: This would be true if it returned when it found a value at the current index that was greater than num (n).
   :feedback_d: It returns the first time the condition is met so nothing is known about the values which are unchecked. 

   Given the following field and method, which of the following best describes the contents of myStuff after (int m = mystery(n);) has been executed?
   
   .. code-block:: java 

     // private field in the class
     private int[ ] myStuff;

     //precondition: myStuff contains
     //  integers in no particular order
     public int mystery(int num)
     {
        for (int k = myStuff.length - 1; k >= 0; k--)
        {
            if (myStuff[k] < num)
            {
               return k;
            }
        }

        return -1;
      }
      
.. mchoicemf:: qab_5
   :answer_a: The values don't matter this will always cause an infinite loop.
   :answer_b: Whenever a includes a value that is less than or equal to zero.
   :answer_c: Whenever a has values larger then temp.
   :answer_d: When all values in a are larger than temp.
   :answer_e: Whenever a includes a value equal to temp.
   :correct: b
   :feedback_a: An infinite loop will not always occur in this code segment.
   :feedback_b: When a contains a value that is less than or equal to zero then multiplying that value by 2 will never make the result larger than the temp value (which was set to some value > 0), so an infinite loop will occur.
   :feedback_c: Values larger then temp will not cause an infinite loop.
   :feedback_d: Values larger then temp will not cause an infinite loop.
   :feedback_e: Values equal to temp will not cause the infinite loop.

   Given the following code segment, which of the following will cause an infinite loop?  Assume that temp is an int variable initialized to be greater than zero and that a is an array of ints.
   
   .. code-block:: java 

      for ( int k = 0; k < a.length; k++ )
      {
         while ( a[ k ] < temp )
         {
            a[ k ] *= 2;
         }
      }
      
 