.. qnum::
   :prefix:  7-11-5-
   :start: 1

Medium Search/Sort Multiple Choice Questions
--------------------------------------------

These problems are similar to those you will see on the AP CSA exam.

.. mchoice:: qsearchsm_1
   :practice: T
   :answer_a: {3,7,8,5,2}, {3,7,8,5,2}, {3,5,7,8,2}, {2,3,5,7,8}
   :answer_b: {2,3,8,5,7}, {2,3,8,5,7}, {2,3,5,8,7}, {2,3,5,7,8}
   :answer_c: {3,7,8,5,2}, {3,5,7,8,2}, {2,3,5,7,8}
   :answer_d: {2,3,8,5,7}, {2,3,5,8,7}, {2,3,5,7,8}
   :answer_e: {2,7,3,8,5}, {2,3,7,8,5}, {2,3,5,7,8}
   :correct: a
   :feedback_a: The insertion sort starts at index 1 and inserts each value into the sorted list to the left by moving any larger values right.
   :feedback_b: This would be true if it was a selection sort.
   :feedback_c: This looks like an insertion sort, but it is missing one step.
   :feedback_d: This looks like a selection sort, but it is missing one step.
   :feedback_e: This is more like a selection sort, but not a correct one.

   Which of the following correctly shows the iterations of an ascending (from left to right) insertion sort on an array with the following elements: {7,3,8,5,2}?

You can step through an insertion sort with this data by clicking on the following `Ex-12-8-1 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=import+java.util.Arrays%3B%0A%0Apublic+class+SortTest%0A%7B%0A+++public+static+void+insertionSort(int%5B%5D+elements)%0A+++%7B%0A++++++for+(int+j+%3D+1%3B+j+%3C+elements.length%3B+j%2B%2B)%0A++++++%7B%0A+++++++++int+temp+%3D+elements%5Bj%5D%3B%0A+++++++++int+possibleIndex+%3D+j%3B%0A+++++++++while+(possibleIndex+%3E+0+%26%26+temp+%3C+elements%5BpossibleIndex+-+1%5D)%0A+++++++++%7B%0A++++++++++++elements%5BpossibleIndex%5D+%3D+elements%5BpossibleIndex+-+1%5D%3B%0A++++++++++++possibleIndex--%3B%0A+++++++++%7D%0A+++++++++elements%5BpossibleIndex%5D+%3D+temp%3B%0A+++++++++System.out.println(Arrays.toString(elements))%3B%0A++++++%7D%0A++%7D%0A%0A+++public+static+void+main(String%5B%5D+args)%0A+++%7B%0A++++++int%5B%5D+arr1+%3D+%7B7,3,8,5,2%7D%3B%0A++++++insertionSort(arr1)%3B%0A+++%7D%0A%7D&mode=display&curInstr=0>`_.

.. mchoice:: qsearchsm_2
   :practice: T
   :answer_a: -1
   :answer_b: 0
   :answer_c: 1
   :answer_d: 2
   :answer_e: 3
   :correct: c
   :feedback_a: This would be true if the third value was something that wasn't in the array.
   :feedback_b: This would be true if the third value was 1
   :feedback_c: This is a binary search and it returns the index of the value 3, which is 1.
   :feedback_d: This would be true if the third value was 5.
   :feedback_e: This would be true if the third value was 8.

   What is printed when the following main method is executed?

   .. code-block:: java

      public class Searcher
      {
          private int[] arr = {1, 3, 5, 8, 9};

          public int mystery(int low, int high, int num)
          {
              int mid = (low + high) / 2;
              if (low > high)
              {
                  return -1;
              }
              else if (arr[mid] < num)
              {
                  return mystery(mid + 1, high, num);
              }
              else if (arr[mid] > num)
              {
                  return mystery(low, mid - 1, num);
              } else return mid;
          }

          public static void main(String[] args)
          {
              Searcher s = new Searcher();
              System.out.println(s.mystery(0, 4, 3));
          }
      }

You can step through the code above by clicking on the following `Ex-12-8-2 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=import+java.util.Arrays%3B%0Apublic+class+Searcher%0A%7B%0A+++private+int%5B%5D+arr+%3D+%7B1,3,5,8,9%7D%3B%0A++%0A+++public+int+mystery(int+low,+int+high,+int+num)+%7B+++%0A++++++int+mid+%3D+(low+%2B+high)+/+2%3B+++%0A++++++if+(low+%3E+high)+%7B+++++%0A+++++++++return+-1%3B+++%7D+++%0A++++++else+if+(arr%5Bmid%5D+%3C+num)+%7B+++++%0A+++++++++return+mystery(mid+%2B+1,+high,+num)%3B+++%7D+++%0A++++++else+if+(arr%5Bmid%5D+%3E+num)+%7B+++++%0A+++++++++return+mystery(low,+mid+-+1,+num)%3B+++%7D+++%0A++++++else++++++%0A+++++++++return+mid%3B%0A+++%7D%0A%0A++%0A+++public+static+void+main(String%5B%5D+args)%0A+++%7B%0A++++++Searcher+s+%3D+new+Searcher()%3B%0A++++++System.out.println(s.mystery(0,4,3))%3B%0A+++%7D+%0A%7D&mode=display&curInstr=0>`_.

.. mchoice:: qsearchsm_3
   :practice: T
   :answer_a: {6,10,3,2,8}, {3,6,10,2,8}, {2,3,6,10,8}, {2,3,6,8,10}
   :answer_b: {6,10,3,2,8}, {3,6,10,2,8}, {2,3,6,8,10}
   :answer_c: {2,6,3,10,8}, {2,3,6,10,8}, {2,3,6,8,10}
   :answer_d: {2,6,3,10,8}, {2,3,6,10,8}, {2,3,6,10,8}, {2,3,6,8,10}
   :correct: d
   :feedback_a: This would be true if it was an insertion sort.
   :feedback_b: This would be true if it was an insertion sort, but you are also missing a step.
   :feedback_c: This is almost right, but is missing one step.
   :feedback_d: This is the result from a selection sort.

   Which of the following correctly shows the iterations of an ascending (from left to right) selection sort on an array with the following elements: {10, 6, 3, 2, 8}?

You can step through the code above by clicking on the folloiwng `Ex-12-8-3 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=import+java.util.Arrays%3B%0A%0Apublic+class+SortTest%0A%7B%0A+++public+static+void+selectionSort(int%5B%5D+elements)%0A+++%7B%0A++++++for+(int+j+%3D+0%3B+j+%3C+elements.length+-+1%3B+j%2B%2B)%0A++++++%7B%0A+++++++++int+minIndex+%3D+j%3B%0A+++++++++for+(int+k+%3D+j+%2B+1%3B+k+%3C+elements.length%3B+k%2B%2B)%0A+++++++++%7B%0A++++++++++++if+(elements%5Bk%5D+%3C+elements%5BminIndex%5D)%0A++++++++++++%7B%0A+++++++++++++++minIndex+%3D+k%3B%0A++++++++++++%7D%0A+++++++++%7D%0A+++++++++int+temp+%3D+elements%5Bj%5D%3B%0A+++++++++elements%5Bj%5D+%3D+elements%5BminIndex%5D%3B%0A+++++++++elements%5BminIndex%5D+%3D+temp%3B%0A+++++++++System.out.println(Arrays.toString(elements))%3B%0A+++++++%7D%0A+++%7D%0A%0A+++public+static+void+main(String%5B%5D+args)%0A+++%7B%0A++++++int%5B%5D+arr1+%3D+%7B10,+6,+3,+2,+8%7D%3B%0A++++++selectionSort(arr1)%3B%0A+++%7D%0A%7D%0A&mode=display&curInstr=0>`_.

.. mchoice:: qsearchsm_4
   :practice: T
   :answer_a: int k = j - 1; k >= 0; k--
   :answer_b: int k = j + 1; k < elem.length; k++
   :answer_c: int k = j; k < elem.length; k++
   :answer_d: int k = j; k >= 0; k--
   :answer_e: int k = j - 1; k > 0; k--
   :correct: b
   :feedback_a: The inner loop starts at the outer loop value plus one, not minus one.
   :feedback_b: The inner loop starts at the outer loop value plus one and ends at the last element.
   :feedback_c: The inner loop should start at the outer loop value plus one.
   :feedback_d: The inner loop should start at the outer loop value plus one and increment.
   :feedback_e: The inner loop should start at the outer loop value plus one and increment.

   Which of the following could be used to replace // missing code // in the code so that the method always sorts the array ``elem`` in ascending order?

   .. code-block:: java

      public class Searcher
      {

          public static void sort(int[] elem)
          {
              for (int j = 0; j < elem.length - 1; j++)
              {
                  int minIndex = j;

                  for (// missing code //)
                  {
                      if (elem [k] < elem [minIndex])
                      {
                          minIndex = k;
                      }
                  }
                  int temp = elem[j];
                  elem[j] = elem[minIndex];
                  elem[minIndex] = temp;
              }
          }

          public static void main(String[] args)
          {
              int[] nums = {28, -3, 2, 14, 30};
              Searcher.sort(nums);
          }
      }

You can step through the code above (with answer a in place of the missing code) by clicking on the following `Ex-12-8-4 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=import+java.util.Arrays%3B%0A%0Apublic+class+Searcher%0A%7B%0A++%0A+++public+static+void+sort(int%5B%5D+elem)%0A+++%7B%0A++++++for+(int+j+%3D+0%3B+j+%3C+elem.length+-+1%3B+j%2B%2B)%0A++++++%7B%0A+++++++++int+minIndex+%3D+j%3B%0A%0A+++++++++for+(int+k+%3D+j+-+1%3B+k+%3E%3D+0%3B+k--)%0A+++++++++%7B%0A++++++++++++if+(elem+%5Bk%5D+%3C+elem+%5BminIndex%5D)%0A++++++++++++%7B%0A+++++++++++++++minIndex+%3D+k%3B%0A++++++++++++%7D%0A+++++++++%7D%0A+++++++++int+temp+%3D+elem%5Bj%5D%3B%0A+++++++++elem%5Bj%5D+%3D+elem%5BminIndex%5D%3B%0A+++++++++elem%5BminIndex%5D+%3D+temp%3B%0A+++++++++System.out.println(Arrays.toString(elem))%3B%0A++++++%7D%0A+++%7D%0A++++++++++++++%0A+++public+static+void+main(String%5B%5D+args)%0A+++%7B%0A++++++int%5B%5D+nums+%3D+%7B28,+-3,+2,+14,+30%7D%3B%0A++++++Searcher.sort(nums)%3B%0A+++%7D+%0A%7D++%0A&mode=display&curInstr=0>`_.

.. mchoice:: qsearchsm_5
   :practice: T
   :answer_a: -1
   :answer_b: 0
   :answer_c: 1
   :answer_d: 2
   :answer_e: The code will not compile
   :correct: e
   :feedback_a: This would be true if the sequential search code was okay and v was a value that wasn't in the array, but the code is incorrect.  The <code>return -1</code> should be outside of the for loop.
   :feedback_b: This would be true if v was 1 and the code was correct for a sequential search.
   :feedback_c: This would be true if v was 2 and the code was correct for a sequential search.
   :feedback_d: This would be true if the code was correct for a sequential search, but it returns -1 inside the for loop instead of outside of it.
   :feedback_e: This method won't compile because it is supposed to return an integer and if the for loop doesn't execute it will not return anything.  The <code>return -1</code> should be outside the for loop to make this sequential search work as intended.

   What would test return if a = {1,2,3,4} and v =  3?

   .. code-block:: java

      public static int test(int[] a, int v)
      {
          for (int i = 0; i < a.length; i++)
          {
              if (a[i] == v)
                  return i;
              else return -1;
          }
      }

You can see this code at the following `Ex-12-8-5 <https://cscircles.cemc.uwaterloo.ca/java_visualize/#code=public+class+ClassNameHere+%7B%0A+++%0A+++public+static+int+test(int%5B%5D+a,+int+v)%0A%7B%0A++++for+(int+i+%3D+0%3B+i+%3C+a.length%3B+i%2B%2B)%0A++++%7B%0A++++++++if+(a%5Bi%5D+%3D%3D+v)%0A++++++++++++return+i%3B%0A++++++++//+this+jumps+out+of+the+loop+too+early+so+comment+it+out%0A++++++++//else+return+-1%3B%0A++++%7D%0A++++//+Move+the+return+out+of+the+loop+to+get+it+to+compile%0A++++return+-1%3B%0A%7D%0A%0A+++%0A+++%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A++++++%0A++++++int%5B%5D+nums+%3D+%7B1,2,3,4%7D%3B%0A++++++System.out.println(test(nums,3))%3B%0A++++++%0A+++%7D%0A%7D&mode=display&curInstr=0>`_.
