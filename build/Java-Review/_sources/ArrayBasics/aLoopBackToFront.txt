.. qnum::
   :prefix: 7-4-
   :start: 1

Looping From Back to Front
================================

..	index::
	pair: loop; from back to front
	
You don't have to loop through an array from the front to the back.  You can loop by starting at the back of the array and move toward the front during each time through the loop.  This can be handy when you are looping through a sorted array and want to find the index of the first number that is less than some given number as shown in the method ``getIndexFirstSmaller`` below.  Notice that the method returns -1 if there is no number in the array that is smaller than the given number.  Why does this work?  

.. code-block:: java

   // private field 
   private int[ ] values = {-3, -2, 4, 16, 23, 55};

   public int getIndexFirstSmaller(int compare)
   {
     
      for (int i = values.length - 1; i >=0; i--)
      {
         if (values[i] < compare) return i;
      }
      return -1; // to show none found
   }
   
.. mchoicemf:: qab_6
   :answer_a: -1
   :answer_b: -15
   :answer_c: 1
   :answer_d: You will get an out of bounds error.  
   :correct: c
   :feedback_a: The method will only return -1 if no value in the array is less than the passed value.  
   :feedback_b: The method returns the index of the first item in the array that is less than the value, not the value.
   :feedback_c: Since the method loops from the back towards the front -15 is the first value less than -13 and it is at index 1. 
   :feedback_d: No, the method correctly starts the index at values.length - 1 and continues as long as i is greater than or equal to 0.  

   Given the following code segment what will be returned when you execute: getIndexFirstSmaller(-13);
   
   .. code-block:: java 
   
      private int[ ] values = {-20, -15, 2, 8, 16, 33};
      
      public int getIndexFirstSmaller(int compare)
      { 
         for (int i = values.length - 1; i >=0; i--)
         {
            if (values[i] < compare) return i;
         }
         return -1; // to show none found
      }

.. mchoicemf:: qab_7
   :answer_a: -1
   :answer_b: 1
   :answer_c: 2
   :answer_d: You will get an out of bounds error.  
   :correct: d
   :feedback_a: The method will only return -1 if no value in the array is less than the passed value.  
   :feedback_b: Check the starting index.   Is it correct?
   :feedback_c: Check the starting index.  Is it correct?
   :feedback_d: You can not start the index at the length of the array.  You must start at the length of the array minus one.  This is a common mistake.

   Given the following code segment what will be returned when you execute: getIndexFirstSmaller(7);
   
   .. code-block:: java
   
      private int[ ] values = {-20, -15, 2, 8, 16, 33};
      
      public int getIndexFirstSmaller(int compare)
      {
         for (int i = values.length; i >=0; i--)
         {
            if (values[i] < compare) return i;
         }
         return -1; // to show none found
      }
    
