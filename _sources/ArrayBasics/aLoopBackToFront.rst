.. qnum::
   :prefix: 7-4-
   :start: 1

Looping From Back to Front
================================

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
    
