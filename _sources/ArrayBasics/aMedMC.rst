.. qnum::
   :prefix: 7-9-
   :start: 1

Medium Multiple Choice Questions
----------------------------------

These problems are similar to those you will see on the AP CS A exam.

.. mchoicemf:: qcb_1
   :answer_a: The value in b[0] does not occur anywhere else in the array
   :answer_b: Array b is sorted
   :answer_c: Array b is not sorted
   :answer_d: Array b contains no duplicates
   :answer_e: The value in b[0] is the smallest value in the array
   :correct: a
   :feedback_a: The assertion denotes that b[0] occurs only once, regardless of the order or value of the other array values.
   :feedback_b: The array does not necessarily need to be in order for the assertion to be true.
   :feedback_c: The array does not necessarily need to be in order for the assertion to be true.
   :feedback_d: The only value that must not have a duplicate is b[0]
   :feedback_e: b[0] can be any value, so long as no other array element is equal to it.

   Which of the following statements is a valid conclusion. Assume that variable b is an array of k integers and that the following is true: 
   
   .. code-block:: java

     b[0] != b[k] for all k such that 1 <= k

.. mchoicemf:: qcb_2
   :answer_a: whenever the first element in a is equal to val
   :answer_b: Whenever a contains any element which equals val
   :answer_c: Whenever the last element in a is equal to val
   :answer_d: Whenever more than 1 element in a is equal to val
   :answer_e: Whenever exactly 1 element in a is equal to val
   :correct: c
   :feedback_a: It is the last value in a that controls the final state of temp , as the loop is progressing through the array from 0 to the end.
   :feedback_b: Because temp is reset every time through the loop, only the last element controls whether the final value is true or false.
   :feedback_c: Because each time through the loop temp is reset, it will only be returned as true if the last value in a is equal to val.  
   :feedback_d: Because temp is reset every time through the loop, only the last element controls whether the final value is true or false, so it is possible for just the last value to be equal to val.
   :feedback_e: Because temp is reset every time through the loop, only the last element controls whether the final value is true or false, so it is possible for several elements to be equal to val.

   Consider the following code segment. Which of the following statements best describes the conditions need for temp = true? 
   
   .. code-block:: java

     boolean temp = false;
     for (int i = 0; i < a.length; i++) {
        temp = (a[i] == val);
     }
     return temp;

.. mchoicemf:: qcb_3
   :answer_a: It is the length of the shortest consecutive block of the value target in nums
   :answer_b: It is the length of the array nums
   :answer_c: It is the length of the first consecutive block of the value target in nums
   :answer_d: It is the number of occurrences of the value target in nms
   :answer_e: It is the length of the last consecutive block of the value target in nums
   :correct: d
   :feedback_a: It doesn't reset the count ever, so it just counts all the times the target value appears in the array.
   :feedback_b: This can't be true. There is no nums.length in the code and the only count happens lenCount is incremented when nums[k] == target.
   :feedback_c: It doesn't reset the count ever, so it just counts all the times the target value appears in the array.
   :feedback_d: The variable lenCount is incremented each time the current array element is the same value as the target. It is never reset so it counts the number of occurrences of the value target in nums. The method returns maxLen which is set to lenCount after the loop finishes if lenCount is greater than maxLen.
   :feedback_e: It doesn't reset the count ever, so it just counts all the times the target value appears in the array.

   Consider the following data field and method findLongest. Mehtod findLongest is intended to find the longest consecutive block of the value target occurring in the array nums; however, finLongest does not work as intended. For example, if the array nums contains the values [7, 10, 10, 15, 15, 15, 15, 10, 10, 10, 15, 10, 10], the call findLongest(10) should return 3, the loength of the longest consecutive block of 10s. Which of the following best describes the value return by a call to findLongest?
   
   .. code-block:: java

     private int[] nums;
     public int findLongest(int target) {
        int lenCount = 0;
        int maxLen = 0;
        for (int k = 0; k < nums.length; k++) {
           if (nums[k] == target) {
              lenCount++;
           } else if (lenCount > maxLen) {
              maxLen = lenCount;
           }
        }
        if (lenCount > maxLen) {
           maxLen = lenCount;
        }

.. mchoicemf:: qcb_4
   :answer_a: All values in positions m+1 through myStuff.length-1 are greater than or equal to n.
   :answer_b: All values in position 0 through m are less than n.
   :answer_c: All values in position m+1 through myStuff.length-1 are less than n.
   :answer_d: The smallest value is at position m.
   :answer_e: The largest value that is smaller than n is at position m.
   :correct: a
   :feedback_a: Mystery steps backwards through the array until the first value less than the passed num (n) is found and then it returns the index where this value is found. Nothing is known about the elements of the array prior to the index at which the condition is met.
   :feedback_b: Mystery steps backwards through the array and quits the first time the value at the current index is less than the passed num (n). This would be true if we went forward through the array and returned when it found a value greater than the passed num (n).
   :feedback_c: This would be true if it returned when it found a value at the current index that was greater than num (n).
   :feedback_d: The condition compares the value at the current index of the array to the passed num. It returns the first time the condition is met so nothing is known about the values which are unchecked. One of the unchecked values could be smaller.
   :feedback_e: The condition checks for any value that is smaller than the passed num and returns from mystery the first time that the condition is encountered. The values are not ordered so we don't know if this is the largest value smaller than n.

   Consider the following data field and method. Which of the following best describes the contents of myStuff after the following statement has been executed?
   
   .. code-block:: java

     private int[] myStuff;

     //precondition: myStuff contains
     //   integers in no particular order
     public int mystery(int num) {
        for (int k = myStuff.length - 1; k >= 0; k--) {
           if (myStuff[k] < num) {
               return k;
           }
        }
        return -1;
     }



     int m = mystery(n)

