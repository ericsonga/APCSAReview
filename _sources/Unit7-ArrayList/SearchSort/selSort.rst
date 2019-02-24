.. qnum::
   :prefix: 12-4-
   :start: 1

Selection Sort
==========================

..	index::
	single: selection sort
	pair: sort; selection
	
The selection sort that you need to know for the exam starts at index 0 and looks through the entire array keeping track of the the index of the smallest value in the array and then swaps the value at the smallest index with the value at index 0.  Then it does the same thing for index 1, then 2, and so on until it reaches the length of the array minus one.  At this point the array is sorted in ascending order. 

Here is a folk dance video that shows the selection sort process.

.. youtube:: Ns4TPTC8whw
    :align: center

To identify a selection sort look for the following:

* a nested for loop with the outer loop starting at 0 and ending when the index reaches length - 1 (see line 7 below)
* the index of the smallest value should start at the outer loop index (see line 9 below)
* the inner loop should start at the outer loop index + 1 and loop through the whole array (see line 10 below)

* if the value in the array at the index of the inner loop is less than the value at the smallest index then set the smallest index to the index of the inner loop (see lines 12 - 15)
* swap the value at the outer loop index and the smallest value (the one at the smallest value index) (see lines 17-19)

The code for ``selectionSort`` below is from the AP CS A course description. 

.. activecode:: selSort
  :language: java
  
  import java.util.Arrays;
  
  public class SortTest
  {
     public static void selectionSort(int[] elements) 
     {
        for (int j = 0; j < elements.length - 1; j++) 
        {
           int minIndex = j;
           for (int k = j + 1; k < elements.length; k++) 
           {
              if (elements[k] < elements[minIndex]) 
              {
                 minIndex = k; 
              }
           }
           int temp = elements[j]; 
           elements[j] = elements[minIndex]; 
           elements[minIndex] = temp;
         }
     }
      
     public static void main(String[] args)
     {
        int[] arr1 = {3, 86, -20, 14, 40};
        System.out.println(Arrays.toString(arr1));
        selectionSort(arr1);
        System.out.println(Arrays.toString(arr1));
     }
  }
   
To see this executing using the Java Visualizer click on the following `SelectionSort <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=+import+java.util.Arrays%3B%0A+%0A+public+class+SortTest%0A++%7B%0A+++++public+static+void+selectionSort(int%5B%5D+elements)+%0A+++++%7B%0A++++++++for+(int+j+%3D+0%3B+j+%3C+elements.length+-+1%3B+j%2B%2B)+%0A++++++++%7B%0A+++++++++++int+minIndex+%3D+j%3B%0A+++++++++++for+(int+k+%3D+j+%2B+1%3B+k+%3C+elements.length%3B+k%2B%2B)+%0A+++++++++++%7B%0A++++++++++++++if+(elements%5Bk%5D+%3C+elements%5BminIndex%5D)+%0A++++++++++++++%7B%0A+++++++++++++++++minIndex+%3D+k%3B+%0A++++++++++++++%7D%0A+++++++++++%7D%0A+++++++++++int+temp+%3D+elements%5Bj%5D%3B+%0A+++++++++++elements%5Bj%5D+%3D+elements%5BminIndex%5D%3B+%0A+++++++++++elements%5BminIndex%5D+%3D+temp%3B%0A+++++++++%7D%0A+++++%7D%0A++++++%0A+++++public+static+void+main(String%5B%5D+args)%0A+++++%7B%0A++++++++int%5B%5D+arr1+%3D+%7B3,+86,+-20,+14,+40%7D%3B%0A++++++++System.out.println(Arrays.toString(arr1))%3B%0A++++++++selectionSort(arr1)%3B%0A++++++++System.out.println(Arrays.toString(arr1))%3B%0A+++++%7D%0A++%7D&mode=display&curInstr=0>`_

.. mchoice:: qsel_1
   :answer_a: If the data is already sorted in ascending order
   :answer_b: If the data is already sorted in descending order
   :answer_c: It will always take the same amount of time to execute
   :correct: c
   :feedback_a: How would this be faster?  Look at the code.
   :feedback_b: How would this be faster?  Look at the code.
   :feedback_c: A selection sort always does the same number of comparisons and always takes the same time to execute regardless of the order of the data.   
   
   Under what condition will a selection sort execute faster?
   
.. mchoice:: qsel_2
   :answer_a: line 1
   :answer_b: line 2
   :answer_c: line 3
   :answer_d: line 4
   :answer_e: line 5
   :correct: c
   :feedback_a: The outer loop starts at 0 and ends when it reaches the length - 1.
   :feedback_b: The min index should be set to the outer loop index before the start of the inner loop.
   :feedback_c: The inner loop should start at the outer loop index + 1. 
   :feedback_d: You should compare the element at the inner loop index to the element at the min index to see if it is smaller.
   :feedback_e: You should save the new min index as the inner loop index.  
   
   This method should sort the numbers in the passed array into ascending order. But, it does not work. Which of the following lines is wrong?
   
   .. code-block:: java 

      public static void selectionSort(int[] elements) 
      {
        for (int j = 0; j < elements.length − 1; j++)      // line 1
        {
           int minIndex = j;                               // line 2
           for (int k = 0; k < elements.length; k++)       // line 3
           {
              if (elements[k] < elements[minIndex])        // line 4
              {
                 minIndex = k;                             // line 5
              }
           }
           int temp = elements[j]; 
           elements[j] = elements[minIndex]; 
           elements[minIndex] = temp;
         }
      }
      
You can step through the code above by clicking on the following `Ex-12-4-2 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=import+java.util.Arrays%3B%0A%0Apublic+class+SortTest2%0A%7B%0A+++%0A+++public+static+void+selectionSort(int%5B%5D+elements)%0A+++%7B%0A++++++for+(int+j+%3D+0%3B+j+%3C+elements.length+-+1%3B+j%2B%2B)++++++//+line+1%0A++++++%7B%0A+++++++++int+minIndex+%3D+j%3B+++++++++++++++++++++++++++++++//+line+2%0A+++++++++for+(int+k+%3D+0%3B+k+%3C+elements.length%3B+k%2B%2B)+++++++//+line+3%0A+++++++++%7B%0A++++++++++++if+(elements%5Bk%5D+%3C+elements%5BminIndex%5D)++++++++//+line+4%0A++++++++++++%7B%0A+++++++++++++++minIndex+%3D+k%3B+++++++++++++++++++++++++++++//+line+5%0A++++++++++++%7D%0A+++++++++%7D%0A+++++++++int+temp+%3D+elements%5Bj%5D%3B%0A+++++++++elements%5Bj%5D+%3D+elements%5BminIndex%5D%3B%0A+++++++++elements%5BminIndex%5D+%3D+temp%3B%0A++++++%7D%0A+++%7D%0A+++%0A+++public+static+void+main(String%5B%5D+args)%0A+++%7B%0A++++++int%5B%5D+arr1+%3D+%7B3,+86,+-20,+14,+40%7D%3B%0A++++++System.out.println(Arrays.toString(arr1))%3B%0A++++++selectionSort(arr1)%3B%0A++++++System.out.println(Arrays.toString(arr1))%3B%0A+++%7D%0A++++++%0A%7D&mode=display&curInstr=0>`_.
      

  
