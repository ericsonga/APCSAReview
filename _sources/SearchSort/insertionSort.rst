.. qnum::
   :prefix: 12-5-
   :start: 1

Insertion Sort
==========================

..	index::
	single: insertion sort
	pair: sort; insertion
	
The insertion sort that you need to know for the exam starts at index 1 and inserts the value at index 1 into its correct place in the already sorted part (the part to the left of the current index). It moves any value larger than the value stored in temp to the right until it either finds the appropriate place to put temp or gets to the front of the array.

.. youtube:: ROalU379l3U
    :align: center

To identify an insertion sort look for the following:

* an outer for loop that starts at 1 and loops through the entire array (see line 7)
* storing the element value at the outer loop index in temp (see line 9)
* setting the possible index to the outer loop index (see line 10)
* an inner while loop that loops while the possible index is greater than 0 and the value in temp is less than the value at the possible index minus one (see line 11)
* set the value at the possible index to the one to the left of it (the one at possible index minus one) (see line 13)
* decrement the possible index (subtract one from it) (see line 14)
* when the while loop ends set the value at the possible index to temp (see line 16)

The code for ``insertionSort`` below is from the AP CS A course description. 

.. code-block:: java 
  :linenos:
  
  import java.util.Arrays;
  
  public class SortTest
  {
     public static void insertionSort(int[] elements) 
     {
        for (int j = 1; j < elements.length; j++) 
        {
           int temp = elements[j];
           int possibleIndex = j;
           while (possibleIndex > 0 && temp < elements[possibleIndex - 1]) 
           {
              elements[possibleIndex] = elements[possibleIndex - 1];
              possibleIndex--; 
           }
           elements[possibleIndex] = temp;
        }
    }
      
     public static void main(String[] args)
     {
        int[] arr1 = {3, 86, -20, 14, 40};
        System.out.println(Arrays.toString(arr1));
        insertionSort(arr1);
        System.out.println(Arrays.toString(arr1));
     }
  }
   
To see this executing using the Java Visualizer click on this `link <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=++import+java.util.Arrays%3B%0A++%0A++public+class+SortTest%0A++%7B%0A+++++public+static+void+insertionSort(int%5B%5D+elements)+%0A+++++%7B%0A++++++++for+(int+j+%3D+1%3B+j+%3C+elements.length%3B+j%2B%2B)+%0A++++++++%7B%0A+++++++++++int+temp+%3D+elements%5Bj%5D%3B%0A+++++++++++int+possibleIndex+%3D+j%3B%0A+++++++++++while+(possibleIndex+%3E+0+%26%26+temp+%3C+elements%5BpossibleIndex+-+1%5D)+%0A+++++++++++%7B%0A++++++++++++++elements%5BpossibleIndex%5D+%3D+elements%5BpossibleIndex+-+1%5D%3B%0A++++++++++++++possibleIndex--%3B+%0A+++++++++++%7D%0A+++++++++++elements%5BpossibleIndex%5D+%3D+temp%3B%0A++++++++%7D%0A++++%7D%0A++++++%0A+++++public+static+void+main(String%5B%5D+args)%0A+++++%7B%0A++++++++int%5B%5D+arr1+%3D+%7B3,+86,+-20,+14,+40%7D%3B%0A++++++++System.out.println(Arrays.toString(arr1))%3B%0A++++++++insertionSort(arr1)%3B%0A++++++++System.out.println(Arrays.toString(arr1))%3B%0A+++++%7D%0A++%7D&mode=display&curInstr=0>`_

.. mchoicemf:: qins_1  
   :answer_a: If the data is already sorted in ascending order
   :answer_b: If the data is already sorted in descending order
   :answer_c: It will always take the same amount of time to execute
   :correct: a
   :feedback_a: If the data is already sorted in the correct order you don't need to move any values.
   :feedback_b: This would actually result in the longest execution.
   :feedback_c: This would be true if it was a selection sort.  
   
   Under what condition will an insertion sort execute faster?
   
.. mchoicemf:: qins_2
   :answer_a: line 1
   :answer_b: line 2
   :answer_c: line 3
   :answer_d: line 4
   :answer_e: line 5
   :correct: a
   :feedback_a: It should loop through the entire array.  
   :feedback_b: The value at the outer loop index should be stored in temp.
   :feedback_c: The possible index should be set to the outer loop index before the inner loop executes.
   :feedback_d: Loop while the possible index is greater than 0 and the temp value is less than the value at the possible index minus one.
   :feedback_e: Move the value at possible index minus one to the possible index (move to the right).  
   
   This method should sort the numbers in the passed array into ascending order. But, it does not work. Which of the following lines is wrong?
   
   .. code-block:: java 

      public static void insertionSort(int[] elements) 
      {
        for (int j = 1; j < elements.length - 1; j++)                       // line 1
        {
           int temp = elements[j];                                          // line 2
           int possibleIndex = j;                                           // line 3
           while (possibleIndex > 0 && temp < elements[possibleIndex - 1])  // line 4
           {
              elements[possibleIndex] = elements[possibleIndex - 1];        // line 5
              possibleIndex--; 
           }
           elements[possibleIndex] = temp;
        }
      }
     
      

  
