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
          System.out.print(val + ", ");
        }
        System.out.println();
      }
   
      public static void main (String[] args)
      {
         int[] theArray = {1,2,3,-1,-2};
         ArrayWorker worker = new ArrayWorker(theArray);
         worker.printValues();
         worker.multAll(2);
         worker.printValues();
      }
   }
   
.. note:: 
   
   Notice that if the array is a field of the ArrayWorker class you must create an ArrayWorker object in the main method.  You don't have to pass the array to the multAll method like you do if the method is static.  The object already has the array as a field and any object method has access to it.
   
You can step through execution of this code using the Java Visualizer by clicking on the following `link1 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=public+class+ArrayWorker%0A%7B%0A+++private+int%5B+%5D+values%3B%0A%0A+++public+ArrayWorker(int%5B%5D+theValues)%0A+++%7B%0A++++++values+%3D+theValues%3B%0A+++%7D%0A%0A+++public+void+multAll(int+amt)%0A+++%7B%0A+++++for+(int+i+%3D+0%3B+i+%3C+values.length%3B+i%2B%2B)%0A+++++%7B%0A+++++++values%5Bi%5D+%3D+values%5Bi%5D+*+amt%3B%0A+++++%7D+//+end+for+loop%0A+++%7D+//+end+method%0A%0A+++public+void+printValues()%0A+++%7B%0A+++++for+(int+val+%3A+values+)%0A+++++%7B%0A+++++++System.out.print(val+%2B+%22,+%22)%3B%0A+++++%7D%0A+++++System.out.println()%3B%0A+++%7D%0A+++%0A+++public+static+void+main+(String%5B%5D+args)%0A+++%7B%0A++++++int%5B%5D+theArray+%3D+%7B1,2,3,-1,-2%7D%3B%0A++++++ArrayWorker+worker+%3D+new+ArrayWorker(theArray)%3B%0A++++++worker.printValues()%3B%0A++++++worker.multAll(2)%3B%0A++++++worker.printValues()%3B%0A+++%7D%0A%7D&mode=display&curInstr=0>`_

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
    
