.. qnum::
   :prefix: 7-5-
   :start: 1


Looping through Part of an Array
================================

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
   :answer_a: <code>{-40, -30, 4, 16, 32, 66}</code>
   :answer_b: <code>{-40, -30, 4, 8, 16, 32}</code>
   :answer_c: <code>{-20, -15, 2, 16, 32, 66}</code>
   :answer_d: <code>{-20, -15, 2, 8, 16, 33}</code> 
   :correct: c
   :feedback_a: This would true if it looped through the whole array.  Does it?
   :feedback_b: This would be true if it looped from the beginning to the middle.  Does it?
   :feedback_c: It loops from the middle to the end doubling each value. Since there are 6 elements it will start at index 3.  
   :feedback_d: This would be true if array elements didn't change, but they do.  

   Given the following values of ``a`` and the method ``doubleLast`` what will the values of ``a`` be after you execute: ``doubleLast()``?
   
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
   :answer_a: <code>{-40, -30, 4, 16, 32, 66}</code>
   :answer_b: <code>{-40, -30, 4, 8, 16, 33}</code>
   :answer_c: <code>{-20, -15, 2, 16, 32, 66}</code>
   :answer_d: <code>{-40, -15, 4, 8, 16, 33}</code>
   :answer_e: <code>{-40, -15, 4, 8, 32, 33}</code>
   :correct: d
   :feedback_a: This would true if it looped through the whole array and doubled each.  Does it?
   :feedback_b: This would be true if it looped from the beginning to the middle and doubled each.  Does it?
   :feedback_c: This would be true if it looped from the middle to the end and doubled each.  Does it?  
   :feedback_d: This loops from the beginning to the middle and doubles every other element (<code>i+=2</code> is the same as <code>i = i + 2</code>). 
   :feedback_e: This would be true if it looped through the whole array and doubled every other element.  Does it?

   Given the following values of ``a`` and the method ``mystery`` what will the values of ``a`` be after you execute: ``mystery()``?
   
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

   The following program has the correct code to reverse the elements in an array, <code>a</code>,  but the code is mixed up.  Drag the blocks from the left into the correct order on the right. You will be told if any of the blocks are in the wrong order or are indented incorrectly.</p>
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

   The following program has the correct code to return the average of the first 3 items in the array <code>a</code>, but the code is mixed up.  Drag the blocks from the left into the correct order on the right. You will be told if any of the blocks are in the wrong order or are indented incorrectly.</p>
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

