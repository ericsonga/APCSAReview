.. qnum::
   :prefix: 7-2-
   :start: 1
  
Looping with the For-Each Loop
==============================

..	index::
	single: for-each
	pair: loop; for-each
   
You will often loop through all of the elements of an array (to get the average or to get each one to display).  You will typically do this using a **for-each** loop.  A **for-each** loop is a loop that can only be used on a collection of items.  It will loop through the collection and each time through the loop it will use the next item from the collection.  It starts with the first item in the array (the one at index 0) and continues through in order to the last item in the array.  You can step through this code using the Java Visualizer by clicking on the following link  `link1 <http://www.pythontutor.com/java.html#code=public+class+Test1%0A%7B%0A+++public+static+double+getAvg(int%5B%5D+values)%0A+++%7B%0A+++++double+total+%3D+0%3B%0A+++++for+(int+val+%3A+values)%0A+++++%7B%0A+++++++total++%3D+total+%2B+val%3B%0A+++++%7D%0A+++++return+total+/+values.length%3B%0A+++%7D%0A%0A+++public+static+void+main(String%5B%5D+args)%0A+++%7B%0A+++++int%5B+%5D+values+%3D+%7B2,+6,+7,+12,+5%7D%3B%0A+++++System.out.println(getAvg(values))%3B%0A+++%7D%0A%7D&mode=display&curInstr=0>`_. 

.. activecode:: lcaf1
   :language: java
   
   public class Test1
   {
      public static double getAvg(int[] values)
      {
        double total = 0;
        for (int val : values)
        {
          total  = total + val;
        }
        return total / values.length;
      }
      
      public static void main(String[] args)
      {
        int[ ] values = {2, 6, 7, 12, 5};
        System.out.println(getAvg(values));
      }
   }
  
..	index::
	single: static
	single: class method
	pair: method; class
	pair: method; static

The **for-each** loop is shown on line 6 above.  It says to loop through the array called ``values`` and each time through the loop set the variable ``val`` to the next item in the array.  We have to specify the type of ``val`` first since this declares a variable.  The type must match the type of objects in the array.

.. note ::

   Only use the for-each loop when you want to loop through **all** the values in an array or list.  If you only want to loop through part of an array or list use a for loop instead.  Also use a for loop instead of a for-each loop if you want to **change** any of the values in the array or list.  

The code above wasn't object-oriented.  You may have noticed that it was declared to be **static**.  This means that it is a **class method** not an **object method**.  It is a **class method** since it doesn't operate on any object fields - all data that it needs has been passed in to the method.  Class methods can be called using ``ClassName.methodName()``.  They can also be called on an object of the class.  Object methods can only be called on an object of the class.  
    
A more object-oriented way of doing this would be if the array was a field called ``values`` in the same class as the ``getAverage`` method.  Then you don't need to pass the array ``values`` to the method and the method is an object (instance) method since it operates on the fields of the object.  You will typically initialize fields in the constructor as shown below.  

.. activecode:: lcaf2
   :language: java
   
   public class ArrayWorker
   {
      private int[ ] values;
      
      public ArrayWorker(int[] theValues)
      {
         values = theValues;
      }
      
      public double getAverage()
      {
        double total = 0;
        for (int val : values)
        {
          total  = total + val;
        }
        return total / values.length;
      }
      
      public static void main(String[] args)
      {
        int[] numArray =  {2, 6, 7, 12, 5};
        ArrayWorker aWorker = new ArrayWorker(numArray); 
        System.out.println(aWorker.getAverage());
      }
   }
   
You can use the Java Visualizer to step through this code by clicking on the following link `link2 <http://www.pythontutor.com/java.html#code=public+class+ArrayWorker%0A%7B%0A+++private+int%5B+%5D+values%3B%0A%0A+++public+ArrayWorker(int%5B%5D+theValues)%0A+++%7B%0A++++++values+%3D+theValues%3B%0A+++%7D%0A%0A+++public+double+getAverage()%0A+++%7B%0A+++++double+total+%3D+0%3B%0A+++++for+(int+val+%3A+values)%0A+++++%7B%0A+++++++total++%3D+total+%2B+val%3B%0A+++++%7D%0A+++++return+total+/+values.length%3B%0A+++%7D%0A%0A+++public+static+void+main(String%5B%5D+args)%0A+++%7B%0A+++++int%5B%5D+numArray+%3D++%7B2,+6,+7,+12,+5%7D%3B%0A+++++ArrayWorker+aWorker+%3D+new+ArrayWorker(numArray)%3B%0A+++++System.out.println(aWorker.getAverage())%3B%0A+++%7D%0A%7D%0A%0A&mode=display&curInstr=0>`_.
   
Notice that we have to create an object of the class now in the ``main`` method.  Object methods have to be called on an object of the class.  

.. note::
    
   Since ``values`` is an object field and the method ``getAverage`` is in the same class it can directly access the field ``values``.  The code could have also been written as ``this.values`` to indicate the current object's field called ``values``.  Every object method is passed the object the method was called on and it can be referenced using the Java keyword ``this``.  
    
**Mixed up programs**

.. parsonsprob:: pab_2
   :adaptive:

   The following method has the correct code to return the largest value in an integer array called <i>vals</i> (a field of the current object), but the code is mixed up.  Drag the blocks from the left into the correct order on the right and indent them correctly as well. You will be told if any of the blocks are in the wrong order or not indented correctly.</p>
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
   
If you want to step through the correct code to see what it does in the Java Visualizer click on the following link `link3 <http://www.pythontutor.com/java.html#code=public+class+ArrayWorker%0A%7B%0A+++private+int%5B+%5D+values%3B%0A%0A+++public+ArrayWorker(int%5B%5D+theValues)%0A+++%7B%0A++++++values+%3D+theValues%3B%0A+++%7D%0A%0A+++public+double+getAverage()%0A+++%7B%0A+++++double+total+%3D+0%3B%0A+++++for+(int+val+%3A+values)%0A+++++%7B%0A+++++++total++%3D+total+%2B+val%3B%0A+++++%7D%0A+++++return+total+/+values.length%3B%0A+++%7D%0A+++%0A+++public+int+getLargest()%0A+++%7B%0A++%0A+++++int+largest+%3D+values%5B0%5D%3B%0A%0A+++++for+(int+item+%3A+values)%0A+++++%7B%0A%0A+++++++if+(item+%3E+largest)%0A+++++++%7B%0A%0A+++++++++largest+%3D+item%3B%0A%0A+++++++%7D++//+end+if+%0A%0A+++++%7D+//+end+for%0A+++++return+largest%3B%0A%0A+++%7D+//+end+method%0A%0A+++public+static+void+main(String%5B%5D+args)%0A+++%7B%0A+++++int%5B%5D+numArray+%3D++%7B2,+6,+7,+12,+5%7D%3B%0A+++++ArrayWorker+aWorker+%3D+new+ArrayWorker(numArray)%3B%0A+++++System.out.println(aWorker.getLargest())%3B%0A+++%7D%0A%7D%0A%0A&mode=display&curInstr=0>`_.
Some examples of finding the largest value in an array start by setting the largest variable to 0.  But, what happens if the array only contains negative numbers?  What value could you set largest to and still have it work correctly even if the field ``vals`` contained only negative numbers?

.. mchoice:: qab_3
   :answer_a: Whenever the first element in <i>a</i> is equal to <i>val</i>.
   :answer_b: Whenever <i>a</i> contains any element which equals <i>val</i>.
   :answer_c: Whenever the last element in <i>a</i> is equal to <i>val</i>.
   :answer_d: Whenever only 1 element in <i>a</i> is equal to <i>val</i>.
   :correct: c
   :feedback_a: This would be true if the loop started at the end of the array and moved toward the beginning.  But, it will loop from the first element to the last.  
   :feedback_b: This would be true if temp was only set to the result of checking if the current element in the array is equal to <i>val</i> when it is <i>false</i>.  But, it is reset each time through the loop.
   :feedback_c: The variable <i>temp</i> is assigned to the result of checking if the current element in the array is equal to <i>val</i>.  The last time through the loop it will check if the last element is equal to <i>val</i>.
   :feedback_d: There is no count of the number of times the array element is equal to <i>val</i>.  


   Given that ``a`` is an array of integers and ``val`` is an integer value, which of the following best describes the conditions under which the following code segment will return true?
   
   .. code-block:: java 

     boolean temp = false;
     for ( int i = 0; i < a.length; i++) 
     { 
       temp = ( a[i] == val ); 
     }
     return temp;
     
.. mchoice:: qab_4
   :answer_a: All values in positions <i>m+1</i> through <i>myStuff.length-1</i> are greater than or equal to <i>n</i>.
   :answer_b: All values in position 0 through <i>m</i> are less than <i>n</i>.
   :answer_c: All values in position <i>m+1</i> through <i>myStuff.length-1</i> are less than <i>n</i>.
   :answer_d: The smallest value is at position <i>m</i>.
   :correct: a
   :feedback_a: Mystery steps backwards through the array until the first value less than the passed num (<i>n</i>) is found and then it returns the index where this value is found.
   :feedback_b: This would be true if mystery looped forward through the array and returned when it found a value greater than the passed num (<i>n</i>).
   :feedback_c: This would be true if it returned when it found a value at the current index that was greater than num (<i>n</i>).
   :feedback_d: It returns the first time the condition is met so nothing is known about the values which are unchecked. 

   Given the following field and method, which of the following best describes the contents of ``myStuff`` after (``int m = mystery(n);``) has been executed?
   
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
      
.. mchoice:: qab_5
   :answer_a: The values don't matter this will always cause an infinite loop.
   :answer_b: Whenever <i>a</i> includes a value that is less than or equal to zero.
   :answer_c: Whenever <i>a</i> has values larger then <i>temp</i>.
   :answer_d: When all values in <i>a</i> are larger than <i>temp</i>.
   :answer_e: Whenever <i>a</i> includes a value equal to <i>temp</i>.
   :correct: b
   :feedback_a: An infinite loop will not always occur in this code segment.
   :feedback_b: When <i>a</i> contains a value that is less than or equal to zero then multiplying that value by 2 will never make the result larger than the <i>temp</i> value (which was set to some value > 0), so an infinite loop will occur.
   :feedback_c: Values larger then <i>temp</i> will not cause an infinite loop.
   :feedback_d: Values larger then <i>temp</i> will not cause an infinite loop.
   :feedback_e: Values equal to <i>temp</i> will not cause the infinite loop.

   Given the following code segment, which of the following will cause an infinite loop?  Assume that ``temp`` is an int variable initialized to be greater than zero and that ``a`` is an array of integers.
   
   .. code-block:: java 

      for ( int k = 0; k < a.length; k++ )
      {
         while ( a[ k ] < temp )
         {
            a[ k ] *= 2;
         }
      }
      
 
