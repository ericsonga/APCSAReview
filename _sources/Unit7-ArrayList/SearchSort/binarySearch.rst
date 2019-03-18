.. qnum::
   :prefix: 13-3-
   :start: 1

Binary Search
==========================

..	index::
	single: binary search
	pair: search; binary

A binary search can only be used if the data is sorted.

It compares a target value to the value in the middle of a range of indices.  If the value isn't found it looks again in either the left or right half of the current range. Each time through the loop it eliminates half the values in the search area until either the value is found or there is no more data to look at.  Click on this `Binary Search Animation <http://cs.armstrong.edu/liang/animation/web/BinarySearch.html>`_ to see how it works.

Binary search calculates the middle index as ``left + right / 2`` where left starts out at 0 and right starts out at the array length - 1 (the index of the last element).   Remember that integer division gives an integer result so 2.5 becomes 2.  It compares the value at the middle index with the target value (the value you are searching for).  If the target value is less than the value at the middle it sets right to middle minus one.  If the target value is greater than the value at the middle it sets left to middle plus one. Otherwise the values match and it returns the middle index.    It also stops when left is greater than right which indicates that the value wasn't found and it returns -1.

The code for ``binarySearch`` below is from the AP CS A course description.

.. activecode:: binSearch
  :language: java

  public class SearchTest
  {
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

     public static void main(String[] args)
     {
        int[] arr1 = {-20, 3, 15, 81, 432};

        // test when the target is in the middle
        int index = binarySearch(arr1,15);
        System.out.println(index);

        // test when the target is the first item in the array
        index = binarySearch(arr1,-20);
        System.out.println(index);

        // test when the target is in the array - last
        index = binarySearch(arr1,432);
        System.out.println(index);

        // test when the target is not in the array
        index = binarySearch(arr1,53);
        System.out.println(index);
     }
  }

To see this executing using the Java Visualizer click on the following link: `BinarySearch Ex <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=++public+class+SearchTest%0A++%7B%0A+++++%0A+++++/**+%0A++++++*+Find+the+index+of+a+value+in+an+array+of+integers+sorted+in+ascending+order.%0A++++++*+%40param+elements+an+array+containing+the+items+to+be+searched.+Precondition%3A+items+in+elements+are+sorted+in+ascending+order.%0A++++++*+%40param+target+the+item+to+be+found+in+elements.%0A++++++*+%40return+an+index+of+target+in+elements+if+target+found%3B%0A++++++*+-1+other+wise.%0A++++++*/%0A+++++public+static+int+binarySearch(int%5B%5D+elements,+int+target)+%7B%0A++++++++int+left+%3D+0%3B%0A++++++++int+right+%3D+elements.length+-+1%3B%0A++++++++while+(left+%3C%3D+right)+%0A++++++++%7B%0A+++++++++++int+middle+%3D+(left+%2B+right)+/+2%3B+%0A+++++++++++if+(target+%3C+elements%5Bmiddle%5D)%0A+++++++++++%7B%0A++++++++++++++right+%3D+middle+-+1%3B%0A+++++++++++%7D%0A+++++++++++else+if+(target+%3E+elements%5Bmiddle%5D)+%0A+++++++++++%7B%0A++++++++++++++left+%3D+middle+%2B+1%3B+%0A+++++++++++%7D%0A+++++++++++else+%7B%0A++++++++++++++return+middle%3B+%0A+++++++++++%7D%0A+++++++++%7D%0A+++++++++return+-1%3B%0A++++++%7D%0A++++++%0A++++++public+static+void+main(String%5B%5D+args)%0A++++++%7B%0A+++++++++int%5B%5D+arr1+%3D+%7B-20,+3,+15,+81,+432%7D%3B%0A++++++++%0A+++++++++//+test+when+the+target+is+in+the+array%0A+++++++++int+index+%3D+binarySearch(arr1,-20)%3B%0A+++++++++System.out.println(index)%3B%0A++++++++%0A+++++++++//+test+when+the+target+is+not+in+the+array%0A+++++++++index+%3D+binarySearch(arr1,53)%3B%0A+++++++++System.out.println(index)%3B%0A+++++++%7D%0A++%7D%0A&mode=display&curInstr=0>`_

.. mchoice:: qbs_1
   :answer_a: The value is the first one in the array
   :answer_b: The value is in the middle of the array
   :answer_c: The value is the last one in the array
   :answer_d: The value isn't in the array
   :correct: b
   :feedback_a: This would be true for sequential search, not binary.
   :feedback_b: If the value is in the middle of the array the binary search will return after one iteration of the loop.
   :feedback_c: How would that be the shortest in a binary search?
   :feedback_d: This is true for the longest execution time, but we are looking for the shortest.

   Which will cause the *shortest* execution of a binary search looking for a value in an array of integers?

.. mchoice:: qbs_2
   :answer_a: I only
   :answer_b: I and II
   :answer_c: II only
   :answer_d: II and III
   :correct: c
   :feedback_a: You can use a binary search on any type of data that can be compared, but the data must be in order.
   :feedback_b: You can use a binary search on any type of data that can be compared.
   :feedback_c: The only requirement for using a Binary Search is that the values must be ordered.
   :feedback_d: The array can contain duplicate values.

   Which of the following conditions must be true in order to search for a value using binary search?

   .. code-block:: java

      I. The values in the array must be integers.
      II. The values in the array must be in sorted order.
      III. The array must not contain duplicate values.

.. mchoice:: qbs_3
   :answer_a: 2
   :answer_b: 1
   :answer_c: 3
   :correct: a
   :feedback_a: It will first compare with the value at index 2 and then index 4 and then return 4.
   :feedback_b: This would be true if we were looking for 23.
   :feedback_c: This would be true if we were looking for 31.

   How many times would the while loop execute if you first do int[] arr = {2, 10, 23, 31, 55, 86} and then call  binarySearch(arr,55)?
