.. qnum::
   :prefix:  12-8-
   :start: 1
   
Medium Multiple Choice Questions
----------------------------------

These problems are similar to those you will see on the AP CS A exam.

.. mchoice:: qssm_1
   :answer_a: -1
   :answer_b: 0
   :answer_c: 1
   :answer_d: 2
   :answer_e: 50
   :correct: d
   :feedback_a: This value is returned if the target is not in the list since this is a sequential search.
   :feedback_b: This would be true if the target was 90 since this is a sequential search.
   :feedback_c: This would be true if the target was -30 since this is a sequential search.
   :feedback_d: This is a sequential search that returns the index where the target appears in the elements list
   :feedback_e: A sequential search returns the index, not the value.  What is the index of the 50?

   What would the following code return from mystery([90, -30, 50], 50)?
   
   .. code-block:: java 
   
      public static int mystery(String[] elements, String target)
      {
        for (int j = 0; j < elements.length; j++)
        {
           if (elements[j].equals(target))
           {
              return j;
           } 
       }
       return -1;
     }
    
.. mchoice:: qssm_2
   :answer_a: -1
   :answer_b: 0
   :answer_c: 1
   :answer_d: 2
   :answer_e: -20
   :correct: a
   :feedback_a: A sequential search returns -1 if the target value is not found in the list.
   :feedback_b: This would be true if the target was 90 since this is a sequential search.
   :feedback_c: This would be true if the target was -30 since this is a sequential search.
   :feedback_d: This would be true if the target was 
   :feedback_e: A sequential search returns negative one when the value isn't found in the list.

   What would the following code return from mystery([90, -30, 50], -20)?
   
   .. code-block:: java 
   
      public static int mystery(String[] elements, String target)
      {
        for (int j = 0; j < elements.length; j++)
        {
           if (elements[j].equals(target))
           {
              return j;
           } 
       }
       return -1;
     }
      
.. mchoice:: qssm_3
   :answer_a: 1
   :answer_b: 2
   :answer_c: 3 
   :correct: b
   :feedback_a: This would be true if we were looking for 23.
   :feedback_b: It first compares 23 at index 2 (5 / 2 is 2) to 2.  The second time it compares the 2 at index 0 (1 / 2 = 0) to 2 and returns 0.  
   :feedback_c: This would be true if we were looking for 10.  
   
   Consider the ``binarySearch`` method below.  How many times would the while loop execute if you first do int[] arr = {2, 10, 23, 31, 55, 86} and then call  binarySearch(arr,2)?

   .. code-block:: java 
   
      public static int binarySearch(int[] elements, int target) {
         int left = 0;
         int right = elements.length - 1;
         while (left <= right) 
         {
            int middle = (left + right) / 2; 
            if (target < elements[middle])
            {
               right = middle - 1; 
            }
            else if (target > elements[middle]) 
            {
               left = middle + 1; 
            }
            else {
               return middle; 
            }
          }
          return -1; 
      }
   
.. mchoice:: qssm_4
   :answer_a: selection sort
   :answer_b: insertion sort
   :answer_c: merge sort
   :correct: c
   :feedback_a: A selection sort has nested for loops.
   :feedback_b: An insertion sort has a while loop inside a for loop.
   :feedback_c: A merge sort has a recursive call to mergeSortHelper in mergeSortHelper.  

   Which sort contains a recursive call?
   
.. mchoice:: qssm_5
   :answer_a: If the data is already sorted in ascending order
   :answer_b: If the data is already sorted in descending order
   :answer_c: It will always take the same amount of time to execute
   :correct: b
   :feedback_a: If the data is already sorted in the correct order you don't need to move any values.
   :feedback_b: All values will have to be moved multiple times since the data was sorted into descending order.  
   :feedback_c: This would be true if it was a selection sort.  
   
   Under what condition will an ascending insertion sort execute the slowest?
   
.. mchoice:: qssm_6
   :answer_a: The search value is the first element in the array
   :answer_b: The search value is not in the array
   :answer_c: The search value is the last element in the array
   :answer_d: The value is in the middle of the array
   :answer_e: A sequential Search can never be faster than a binary Search.
   :correct: a
   :feedback_a: Only when the search value is the first item in the array, and thus the first value encountered in sequential search, will sequential be faster than binary.
   :feedback_b: If the search value is not in the array, a sequential search will have to check every item in the array before failing, a binary search will be faster.  
   :feedback_c: In this case a sequential search will have to check every element before finding the correct one, whereas a binary search will not.  
   :feedback_d: Results will differ depending on the exact location of the element, but binary Search will still find the element faster while Sequential will have to check more elements.
   :feedback_e: When the target value is the first element, sequential search will always be faster, as it will only need to check one element.
   
   Under which of these conditions will a sequential search be faster than a binary search?
   



   
   
    
      
      
      

