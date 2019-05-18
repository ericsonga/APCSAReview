.. qnum::
   :prefix: 6-2-
   :start: 1

.. strings are char arrays? hangman? file of words? search findMin/Max
    histogram? draw with stars? # of m&ms?

Traversing Arrays with For Loops
==========================================

..	index::
    single: for loop
	pair: loop; from front to back
	
You can use a ``for`` loop to loop through all the elements of an array.  Just start the index at 0 and loop while the index is less than the length of the array.

.. activecode:: lcal1
   :language: java
   
   public class ArrayWorker
   {
      private int[ ] values;
      
      public ArrayWorker(int[] theValues)
      {
         values = theValues;
      }

      public void multAll(int amt)
      {
        for (int i = 0; i < values.length; i++)
        {
          values[i] = values[i] * amt;
        } // end for loop
      } // end method
      
      public void printValues()
      {
        for (int val : values )
        {
          System.out.println(val);
        }
      }
      
      public static void main(String[] args)
      {
        int[] numArray =  {2, 6, 7, 12, 5};
        ArrayWorker aWorker = new ArrayWorker(numArray); 
        aWorker.multAll(2);
        aWorker.printValues();
        
      }
   }
      
**Mixed up programs**

.. parsonsprob:: pab_1r
   :adaptive:

   The following method has the correct code to subtract amt from all the values in the array <b>values</b> (a field of the current object), but the code is mixed up.  Drag the blocks from the left into the correct order on the right and indent them correctly. You will be told if any of the blocks are in the wrong order or not indented correctly.
   -----
   public void subAll(int amt)
   {
   =====
      for (int i = 0; 
           i < values.length; 
           i++)
      {
   =====
         values[i] = values[i] - amt;
   =====
      } // end for loop
   =====
   } // end method
    


Looping From Back to Front
--------------------------
..	index::
	pair: loop; from back to front
	
You don't have to loop through an array from the front to the back.  You can loop by starting at the back of the array and move toward the front during each time through the loop.  This can be handy when you are looping through a sorted array and want to find the index of the last number that is less than some given number as shown in the method ``getIndexLastSmaller`` below.  Notice that the method returns -1 if there is no number in the array that is smaller than the given number.  Why does this work?  

.. activecode:: lcbf1
   :language: java
   
   public class ArrayWorker
   {
      private int[ ] values;

      public ArrayWorker(int[] theValues)
      {
         values = theValues;
      }

      public int getIndexLastSmaller(int target)
      {
         for (int index = values.length - 1; index >= 0; index--)
         {
            if (values[index] < target)
                return index;
         }
         return -1;
      }

      public void printValues()
      {
        for (int val : values )
        {
          System.out.print(val + ", ");
        }
        System.out.println();
      }
   
      public static void main (String[] args)
      {
         int[] theArray = {-30, -5, 8, 23, 46};
         ArrayWorker worker = new ArrayWorker(theArray);
         System.out.println(worker.getIndexLastSmaller(50));
         System.out.println(worker.getIndexLastSmaller(30));
         System.out.println(worker.getIndexLastSmaller(10));
         System.out.println(worker.getIndexLastSmaller(0));
         System.out.println(worker.getIndexLastSmaller(-20));
         System.out.println(worker.getIndexLastSmaller(-30));
      }
   }
   
.. note:: 
   
   Notice that if the array is a field of the ArrayWorker class you must create an ArrayWorker object in the main method.  You don't have to pass the array to the ``getIndexLastSmaller`` method like you do if the method is static.  The object already has the array as a field and any object method has access to it.
   
You can step through execution of this code using the Java Visualizer by clicking on the following `link1 <http://www.pythontutor.com/java.html#code=public%20class%20ArrayWorker%0A%7B%0A%20%20%20private%20int%5B%20%5D%20values%3B%0A%0A%20%20%20public%20ArrayWorker%28int%5B%5D%20theValues%29%0A%20%20%20%7B%0A%20%20%20%20%20%20values%20%3D%20theValues%3B%0A%20%20%20%7D%0A%0A%20%20%20public%20void%20multAll%28int%20amt%29%0A%20%20%20%7B%0A%20%20%20%20%20for%20%28int%20i%20%3D%200%3B%20i%20%3C%20values.length%3B%20i%2B%2B%29%0A%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20values%5Bi%5D%20%3D%20values%5Bi%5D%20*%20amt%3B%0A%20%20%20%20%20%7D%20//%20end%20for%20loop%0A%20%20%20%7D%20//%20end%20method%0A%0A%20%20%20public%20void%20printValues%28%29%0A%20%20%20%7B%0A%20%20%20%20%20for%20%28int%20val%20%3A%20values%20%29%0A%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20System.out.print%28val%20%2B%20%22,%20%22%29%3B%0A%20%20%20%20%20%7D%0A%20%20%20%20%20System.out.println%28%29%3B%0A%20%20%20%7D%0A%20%20%20%0A%20%20%20public%20static%20void%20main%20%28String%5B%5D%20args%29%0A%20%20%20%7B%0A%20%20%20%20%20%20int%5B%5D%20theArray%20%3D%20%7B1,2,3,-1,-2%7D%3B%0A%20%20%20%20%20%20ArrayWorker%20worker%20%3D%20new%20ArrayWorker%28theArray%29%3B%0A%20%20%20%20%20%20worker.printValues%28%29%3B%0A%20%20%20%20%20%20worker.multAll%282%29%3B%0A%20%20%20%20%20%20worker.printValues%28%29%3B%0A%20%20%20%7D%0A%7D&cumulative=false&curInstr=25&heapPrimitives=false&mode=display&origin=opt-frontend.js&py=java&rawInputLstJSON=%5B%5D&textReferences=false>`_. 

.. mchoice:: qab_6
   :answer_a: -1
   :answer_b: -15
   :answer_c: 1
   :answer_d: You will get an out of bounds error.  
   :correct: c
   :feedback_a: The method will only return -1 if no value in the array is less than the passed value.  
   :feedback_b: The method returns the index of the first item in the array that is less than the value, not the value.
   :feedback_c: Since the method loops from the back towards the front -15 is the last value in the array that is less than -13 and it is at index 1. 
   :feedback_d: No, the method correctly starts the index at values.length - 1 and continues as long as i is greater than or equal to 0.  

   Given the following code segment what will be returned when you execute: getIndexLastSmaller(-13);
   
   .. code-block:: java 
   
      private int[ ] values = {-20, -15, 2, 8, 16, 33};
      
      public int getIndexLastSmaller(int compare)
      { 
         for (int i = values.length - 1; i >=0; i--)
         {
            if (values[i] < compare) return i;
         }
         return -1; // to show none found
      }

.. mchoice:: qab_7
   :answer_a: -1
   :answer_b: 1
   :answer_c: 2
   :answer_d: You will get an out of bounds error.  
   :correct: d
   :feedback_a: The method will only return -1 if no value in the array is less than the passed value.  
   :feedback_b: Check the starting index.   Is it correct?
   :feedback_c: Check the starting index.   Is it correct?
   :feedback_d: You can not start the index at the length of the array.  You must start at the length of the array minus one.  This is a common mistake.

   Given the following code segment what will be returned when you execute: getIndexLastSmaller(7);
   
   .. code-block:: java
   
      private int[ ] values = {-20, -15, 2, 8, 16, 33};
      
      public int getIndexLastSmaller(int compare)
      {
         for (int i = values.length; i >=0; i--)
         {
            if (values[i] < compare) return i;
         }
         return -1; // to show none found
      }
    



Looping through Part of an Array
--------------------------------

..	index::
	pair: loop; range
	
You don't have to loop through all of the elements of an array.  You can loop through just some of the elements of an array using a for loop.  The following code doubles the first five elements in an array.  Notice that it uses a complex conditional (``&&``) on line 12 to make sure that the loop doesn't go beyond the bounds of the array.

.. activecode:: lclp1
   :language: java
   
   public class ArrayWorker
   {
      private int[ ] values;
      
      public ArrayWorker(int[] theValues)
      {
         values = theValues;
      }
      
      public void doubleFirstFive()
      {
        for (int i = 0; i < values.length && i < 5; i++)
        {
          values[i] = values[i] * 2;
        }
      }
      
      public void printArray()
      {
         for (int val: values)
         {
            System.out.println(val);
         }
      }
      
      public static void main(String[] args)
      {
        int[] numArray = {3, 8, -3, 2, 20, 5, 33, 1};
        ArrayWorker worker = new ArrayWorker(numArray);
        worker.doubleFirstFive();
        worker.printArray();
      }
   }
   
You can even start in the middle and loop through the rest of the array.  Does this work for arrays that have an even number of elements?  Does it work for arrays that have an odd number of elements?  Modify the main code below to test with both arrays with an even number of items and an odd number.

.. activecode:: lclp2
   :language: java
   
   public class ArrayWorker
   {
      private int[ ] values;
      
      public ArrayWorker(int[] theValues)
      {
         values = theValues;
      }
      
      public void doubleLastHalf()
      {
        for (int i = values.length / 2; i < values.length; i++)
        {
          values[i] = values[i] * 2;
        }
      }
      
      public void printArray()
      {
         for (int val: values)
         {
            System.out.println(val);
         }
      }
      
      public static void main(String[] args)
      {
        int[] numArray = {3,8,-3, 2};
        ArrayWorker worker = new ArrayWorker(numArray);
        worker.doubleLastHalf();
        worker.printArray();
      }
   }
   
.. mchoice:: qab_8
   :answer_a: {-40, -30, 4, 16, 32, 66}
   :answer_b: {-40, -30, 4, 8, 16, 32}
   :answer_c: {-20, -15, 2, 16, 32, 66}
   :answer_d: {-20, -15, 2, 8, 16, 33} 
   :correct: c
   :feedback_a: This would true if it looped through the whole array.  Does it?
   :feedback_b: This would be true if it looped from the beginning to the middle.  Does it?
   :feedback_c: It loops from the middle to the end doubling each value. Since there are 6 elements it will start at index 3.  
   :feedback_d: This would be true if array elements didn't change, but they do.  

   Given the following values of a and the method doubleLast what will the values of a be after you execute: doubleLast()?
   
   .. code-block:: java 
   
      private int[ ] a = {-20, -15, 2, 8, 16, 33};

      public void doubleLast()
      {
    
         for (int i = a.length / 2; i < a.length; i++)
         {
            a[i] = a[i] * 2;
         }
      }
      
.. mchoice:: qab_9
   :answer_a: {-40, -30, 4, 16, 32, 66}
   :answer_b: {-40, -30, 4, 8, 16, 33}
   :answer_c: {-20, -15, 2, 16, 32, 66}
   :answer_d: {-40, -15, 4, 8, 16, 33}
   :answer_e: {-40, -15, 4, 8, 32, 33}
   :correct: d
   :feedback_a: This would true if it looped through the whole array and doubled each.  Does it?
   :feedback_b: This would be true if it looped from the beginning to the middle and doubled each.  Does it?
   :feedback_c: This would be true if it looped from the middle to the end and doubled each.  Does it?  
   :feedback_d: This loops from the beginning to the middle and doubles every other element (i+=2 is the same as i = i + 2). 
   :feedback_e: This would be true if it looped through the whole array and doubled every other element.  Does it?

   Given the following values of a and the method mystery what will the values of a be after you execute: mystery()?
   
   .. code-block:: java
   
      private int[ ] a = {-20, -15, 2, 8, 16, 33};

      public void mystery()
      {
    
         for (int i = 0; i < a.length/2; i+=2)
         {
            a[i] = a[i] * 2;
         }
      }
   
**Mixed up programs**

.. parsonsprob:: pab_3
   :adaptive:

   The following program has the correct code to reverse the elements in an array, a,  but the code is mixed up.  Drag the blocks from the left into the correct order on the right. You will be told if any of the blocks are in the wrong order or are indented incorrectly.</p>
   -----
   public void reverse()
   {
   =====
     int temp = 0;
     int half = a.length / 2;
     int max = a.length - 1;
     for (int i = 0; 
          i < half; 
          i++)
     {
   =====
        temp = a[i];
   =====
        a[i] = a[max - i];
   =====
        a[max - i] = temp;
   =====
     } // end for
   =====
   } // end method
   
.. parsonsprob:: pab_4
   :adaptive:

   The following program has the correct code to return the average of the first 3 items in the array a, but the code is mixed up.  Drag the blocks from the left into the correct order on the right. You will be told if any of the blocks are in the wrong order or are indented incorrectly.</p>
   -----
   public double avg3()
   {
   =====
     double total = 0;
     for (int i = 0; 
          i < a.length && i < 3; 
          i++)
     {
   =====
       total = total + a[i];
   =====
     } // end for
     return total / 3;
   =====
   } // end method




Things to Watch For When Looping Through an Array
-------------------------------------------------

When processing all array elements be careful to start at the first index which is ``0`` and end at the last index which is ``arrayName.length - 1``.  Be careful not to go past the bounds of the array which means don't use a negative number as an index or a number that is equal to or greater than the length of the array.  

Also, be careful not to jump out of loop too early when you are looking for a value in an array.  The method below uses **return** statements to stop the execution of the method and return a value to the method that called this method.  If a return statement returns a value, the type of that value must match the return type in the method header. Methods with a return type of **void** can't return any values, but can have one or more return statements. 

.. activecode:: lcap1
   :language: java
   
   public class StringWorker
   {
      private String[ ] arr = {"Hello", "Hey", "Good morning!"};

      public int findString(String target)
      {
        String word = null;
        for (int index = 0; index < arr.length; index++)
        {
          word = arr[index];
          
          if (word.equals(target))
          {
            return index;
          }
          else return -1;
        }
        return -1;
      }
      
      public static void main(String[] args)
      {
        StringWorker sWorker = new StringWorker();
        System.out.println(sWorker.findString("Hey"));
      }
   }
   
What is wrong with the code above?  The first time through the loop it will start with the element at index 0 and check if the item at the array index equals the passed target string.  If they have the same characters in the same order it will return 0, otherwise it will return -1.  But, it has only processed one element of the array.  How would you fix the code to work correctly (process all array elements before returning)?  
   
