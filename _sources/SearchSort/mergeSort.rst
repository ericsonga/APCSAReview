.. qnum::
   :prefix: 12-6-
   :start: 1

Merge Sort
==========================

..	index::
	single: merge sort
	pair: sort; merge
	
A merge sort recursively breaks the values to be sorted in half until there is only one value to be sorted and then it merges the two sorted lists into one sorted list.  The code shown below uses a second array the same size as the original array for merging the values in order.  Then it copies all of the sorted values back into the original array.

Here is a folk dance video that shows the merge sort process.

.. youtube:: XaqR3G_NVoo
    :align: center

To identify a merge sort look for the following:

* 3 methods, mergeSort, mergeSortHelper, and merge
* mergeSortHelper is recursive

The code for ``mergeSort`` below is from the AP CS A course description. 

.. activecode:: mergeSort
  :language: java
  
  import java.util.Arrays;
  
  public class SortTest
  {
     public static void mergeSort(int[] elements) 
     {
        int n = elements.length;
        int[] temp = new int[n]; 
        mergeSortHelper(elements, 0, n - 1, temp);
     }
     
     private static void mergeSortHelper(int[] elements, 
                                         int from, int to, int[] temp)
     {
         if (from < to)
         {
            int middle = (from + to) / 2; 
            mergeSortHelper(elements, from, middle, temp); 
            mergeSortHelper(elements, middle + 1, to, temp); 
            merge(elements, from, middle, to, temp);
         }
     }
     
     private static void merge(int[] elements, int from, 
                               int mid, int to, int[] temp)
     {
        int i = from; 
        int j = mid + 1; 
        int k = from;
        
        while (i <= mid && j <= to) 
        {
           if (elements[i] < elements[j]) 
           {
              temp[k] = elements[i];
              i++; 
           }
           else 
           {
              temp[k] = elements[j];
              j++; 
           }
           k++; 
        }

        while (i <= mid) 
        {
           temp[k] = elements[i]; 
           i++;
           k++;
        }
        
        while (j <= to) 
        {
           temp[k] = elements[j]; 
           j++;
           k++;
        }
        
        for (k = from; k <= to; k++) 
        {
           elements[k] = temp[k]; 
        }
     }
        
     public static void main(String[] args)
     {
        int[] arr1 = {86, 3, 43};
        System.out.println(Arrays.toString(arr1));
        mergeSort(arr1);
        System.out.println(Arrays.toString(arr1));
     }
  }
   
To see this executing using the Java Visualizer click on the following `Merge-Sort <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=++import+java.util.Arrays%3B%0A++%0A++public+class+SortTest%0A++%7B%0A+++++public+static+void+mergeSort(int%5B%5D+elements)+%0A+++++%7B%0A++++++++int+n+%3D+elements.length%3B%0A++++++++int%5B%5D+temp+%3D+new+int%5Bn%5D%3B+%0A++++++++mergeSortHelper(elements,+0,+n+-+1,+temp)%3B%0A+++++%7D%0A+++++%0A+++++private+static+void+mergeSortHelper(int%5B%5D+elements,+int+from,+int+to,+int%5B%5D+temp)%0A+++++%7B%0A+++++++++if+(from+%3C+to)%0A+++++++++%7B%0A++++++++++++int+middle+%3D+(from+%2B+to)+/+2%3B+%0A++++++++++++mergeSortHelper(elements,+from,+middle,+temp)%3B+%0A++++++++++++mergeSortHelper(elements,+middle+%2B+1,+to,+temp)%3B+%0A++++++++++++merge(elements,+from,+middle,+to,+temp)%3B%0A+++++++++%7D%0A+++++%7D%0A+++++%0A+++++private+static+void+merge(int%5B%5D+elements,+int+from,+int+mid,+int+to,+int%5B%5D+temp)%0A+++++%7B%0A++++++++int+i+%3D+from%3B+%0A++++++++int+j+%3D+mid+%2B+1%3B+%0A++++++++int+k+%3D+from%3B%0A++++++++%0A++++++++while+(i+%3C%3D+mid+%26%26+j+%3C%3D+to)+%0A++++++++%7B%0A+++++++++++if+(elements%5Bi%5D+%3C+elements%5Bj%5D)+%0A+++++++++++%7B%0A++++++++++++++temp%5Bk%5D+%3D+elements%5Bi%5D%3B%0A++++++++++++++i%2B%2B%3B+%0A+++++++++++%7D%0A+++++++++++else+%0A+++++++++++%7B%0A++++++++++++++temp%5Bk%5D+%3D+elements%5Bj%5D%3B%0A++++++++++++++j%2B%2B%3B+%0A+++++++++++%7D%0A+++++++++++k%2B%2B%3B+%0A++++++++%7D%0A%0A++++++++while+(i+%3C%3D+mid)+%0A++++++++%7B%0A+++++++++++temp%5Bk%5D+%3D+elements%5Bi%5D%3B+%0A+++++++++++i%2B%2B%3B%0A+++++++++++k%2B%2B%3B%0A++++++++%7D%0A++++++++%0A++++++++while+(j+%3C%3D+to)+%0A++++++++%7B%0A+++++++++++temp%5Bk%5D+%3D+elements%5Bj%5D%3B+%0A+++++++++++j%2B%2B%3B%0A+++++++++++k%2B%2B%3B%0A++++++++%7D%0A++++++++%0A++++++++for+(k+%3D+from%3B+k+%3C%3D+to%3B+k%2B%2B)+%0A++++++++%7B%0A+++++++++++elements%5Bk%5D+%3D+temp%5Bk%5D%3B+%0A++++++++%7D%0A+++++%7D%0A++++++++%0A++++++%0A+++++public+static+void+main(String%5B%5D+args)%0A+++++%7B%0A++++++++int%5B%5D+arr1+%3D+%7B86,+3,+43%7D%3B%0A++++++++System.out.println(Arrays.toString(arr1))%3B%0A++++++++mergeSort(arr1)%3B%0A++++++++System.out.println(Arrays.toString(arr1))%3B%0A+++++%7D%0A++%7D&mode=display&curInstr=0>`_
   
.. mchoice:: qms_1
   :answer_a: If the data is already sorted in ascending order
   :answer_b: If the data is already sorted in descending order
   :answer_c: It will always take the same amount of time to execute
   :correct: c
   :feedback_a: This won't really affect the execution time for merge sort.
   :feedback_b: This won't really affect the execution time for merge sort.
   :feedback_c: It will take about the same time regardless of the data.
   
   Under what condition will a merge sort execute faster?
   
.. mchoice:: qms_2
   :answer_a: selection sort
   :answer_b: insertion sort
   :answer_c: merge sort
   :correct: c
   :feedback_a: Selection sort always takes about the same time.  Merge sort is always more effecient than selection sort.  
   :feedback_b: Merge sort is usually faster than insertion sort.
   :feedback_c: Merge sort is always faster than selection sort and usually faster than insertion sort.  
   
   Which sort should be the fastest most of the time?
   

     
      

  
