.. qnum::
   :prefix:  7-11-4-
   :start: 1

Easier Search/Sort Multiple Choice Questions
---------------------------------------------

These problems are easier than most of those that you will usually see on the AP CSA exam.

.. mchoice:: qsearchse_1
   :practice: T
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

      public static int mystery(int[] elements, int target)
      {
        for (int j = 0; j < elements.length; j++)
        {
           if (elements[j] == target)
           {
              return j;
           }
       }
       return -1;
     }

You can step through the code above by clicking on the following `Ex-12-7-1 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=import+java.util.Arrays%3B%0A%0Apublic+class+Test+%7B%0A+++%0A+++public+static+int+mystery(int%5B%5D+elements,+int+target)%0A+++%7B%0A++++++for+(int+j+%3D+0%3B+j+%3C+elements.length%3B+j%2B%2B)%0A++++++%7B%0A+++++++++if+(elements%5Bj%5D+%3D%3D+target)%0A+++++++++%7B%0A++++++++++++return+j%3B%0A+++++++++%7D%0A++++++%7D%0A++++++return+-1%3B%0A+++%7D%0A+++%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A++++++int%5B%5D+nums+%3D+%7B90,+-30,+50%7D%3B%0A++++++int+found+%3D+mystery(nums,+50)%3B%0A++++++System.out.println(found)%3B%0A++++++%0A+++%7D%0A%7D&mode=display&curInstr=0>`_.

.. mchoice:: qsearchse_2
   :practice: T
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

      public static int mystery(int[] elements, int target)
      {
        for (int j = 0; j < elements.length; j++)
        {
           if (elements[j] == target)
           {
              return j;
           }
       }
       return -1;
     }

You can step through the code above by clicking on the following `Ex-12-7-2 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=import+java.util.Arrays%3B%0A%0Apublic+class+Test+%7B%0A+++%0A+++public+static+int+mystery(int%5B%5D+elements,+int+target)%0A+++%7B%0A++++++for+(int+j+%3D+0%3B+j+%3C+elements.length%3B+j%2B%2B)%0A++++++%7B%0A+++++++++if+(elements%5Bj%5D+%3D%3D+target)%0A+++++++++%7B%0A++++++++++++return+j%3B%0A+++++++++%7D%0A++++++%7D%0A++++++return+-1%3B%0A+++%7D%0A+++%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A++++++int%5B%5D+nums+%3D+%7B90,+-30,+50%7D%3B%0A++++++int+found+%3D+mystery(nums,+-20)%3B%0A++++++System.out.println(found)%3B%0A++++++%0A+++%7D%0A%7D&mode=display&curInstr=0>`_.

.. mchoice:: qsearchse_3
   :practice: T
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

You can step through the code above by clicking on the following `Ex-12-7-3 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=public+class+SearchTest%0A%7B%0A+++public+static+int+binarySearch(int%5B%5D+elements,+int+target)+%7B%0A++++++int+left+%3D+0%3B%0A++++++int+right+%3D+elements.length+-+1%3B%0A++++++int+count+%3D+0%3B%0A++++++while+(left+%3C%3D+right)%0A++++++%7B%0A+++++++++count%2B%2B%3B%0A+++++++++System.out.println(%22count%3A+%22+%2B+count)%3B%0A+++++++++%0A+++++++++int+middle+%3D+(left+%2B+right)+/+2%3B%0A+++++++++if+(target+%3C+elements%5Bmiddle%5D)%0A+++++++++%7B%0A++++++++++++right+%3D+middle+-+1%3B%0A+++++++++%7D%0A+++++++++else+if+(target+%3E+elements%5Bmiddle%5D)%0A+++++++++%7B%0A++++++++++++left+%3D+middle+%2B+1%3B%0A+++++++++%7D%0A+++++++++else+%7B%0A++++++++++++return+middle%3B%0A+++++++++%7D%0A+++++++%7D%0A+++++++return+-1%3B%0A+++%7D%0A%0A+++public+static+void+main(String%5B%5D+args)%0A+++%7B%0A++++++int%5B%5D+arr+%3D+%7B2,+10,+23,+31,+55,+86%7D%3B%0A%0A++++++//+test+when+the+target+is+in+the+middle%0A++++++int+index+%3D+binarySearch(arr,2)%3B%0A++++++System.out.println(index)%3B%0A+++%7D%0A%7D%0A%0A&mode=display&curInstr=0>`_.

.. mchoice:: qsearchse_4
   :practice: T
   :answer_a: selection sort
   :answer_b: insertion sort
   :answer_c: merge sort
   :correct: c
   :feedback_a: A selection sort has nested for loops.
   :feedback_b: An insertion sort has a while loop inside a for loop.
   :feedback_c: A merge sort has a recursive call to mergeSortHelper in mergeSortHelper.

   Which sort contains a recursive call?

.. mchoice:: qsearchse_5
   :practice: T
   :answer_a: If the data is already sorted in ascending order
   :answer_b: If the data is already sorted in descending order
   :answer_c: It will always take the same amount of time to execute
   :correct: b
   :feedback_a: If the data is already sorted in the correct order you don't need to move any values.
   :feedback_b: All values will have to be moved multiple times since the data was sorted into descending order.
   :feedback_c: This would be true if it was a selection sort.

   Under what condition will an ascending insertion sort execute the slowest?
