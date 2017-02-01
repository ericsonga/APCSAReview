.. qnum::
   :prefix: 7-10-
   :start: 1

Medium Multiple Choice Questions
----------------------------------

These problems are similar to those you will see on the AP CS A exam.

.. mchoice:: qamed_1
   :answer_a: The value in <code>b[0]</code> does not occur anywhere else in the array
   :answer_b: Array <code>b</code> is sorted
   :answer_c: Array <code>b</code> is not sorted
   :answer_d: Array <code>b</code> contains no duplicates
   :answer_e: The value in <code>b[0]</code> is the smallest value in the array
   :correct: a
   :feedback_a: The assertion denotes that <code>b[0]</code> occurs only once, regardless of the order or value of the other array values.
   :feedback_b: The array does not necessarily need to be in order for the assertion to be true.
   :feedback_c: We can't tell if it is sorted or not from this assertion.
   :feedback_d: The only value that must not have a duplicate is <code>b[0]</code>
   :feedback_e: <code>b[0]</code> can be any value, so long as no other array element is equal to it.

   Which of the following statements is a valid conclusion. Assume that variable ``b`` is an array of ``k`` integers and that the following is true: 
   
   .. code-block:: java

     b[0] != b[i] for all i from 1 to k-1

.. mchoice:: qamed_2
   :answer_a: whenever the first element in <code>a</code> is equal to <code>val</code>
   :answer_b: Whenever <code>a</code> contains any element which equals <code>val</code>
   :answer_c: Whenever the last element in <code>a</code> is equal to <code>val</code>
   :answer_d: Whenever more than 1 element in <code>a</code> is equal to <code>val</code>
   :answer_e: Whenever exactly 1 element in <code>a</code> is equal to <code>val</code>
   :correct: c
   :feedback_a: It is the last value in <code>a</code> that controls the final state of <code>temp</code>, as the loop is progressing through the array from 0 to the end.
   :feedback_b: Because <code>temp</code> is reset every time through the loop, only the last element controls whether the final value is true or false.
   :feedback_c: Because each time through the loop <code>temp</code> is reset, it will only be returned as true if the last value in a is equal to <code>val</code>.  
   :feedback_d: Because <code>temp</code> is reset every time through the loop, only the last element controls whether the final value is true or false, so it is possible for just the last value to be equal to <code>val</code>.
   :feedback_e: Because <code>temp</code> is reset every time through the loop, only the last element controls whether the final value is true or false, so it is possible for several elements to be equal to <code>val</code>.

   Consider the following code segment. Which of the following statements best describes the condition when it returns true?
   
   .. code-block:: java

     boolean temp = false;
     for (int i = 0; i < a.length; i++) {
        temp = (a[i] == val);
     }
     return temp;
     
You can step through the code above with the Java Visualizer by clicking the following link `Prob-7-10-2 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=public+class+ClassNameHere+%7B%0A+++%0A+++public+static+boolean+test(int%5B%5D+a,int+val)+%7B%0A++++++boolean+temp+%3D+false%3B%0A+++++for+(int+i+%3D+0%3B+i+%3C+a.length%3B+i%2B%2B)+%7B%0A++++++++temp+%3D+(a%5Bi%5D+%3D%3D+val)%3B%0A+++++%7D%0A+++++return(temp)%3B%0A+++%7D%0A++++++%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A++++++int%5B%5D+myArray+%3D+%7B9,+-3,+81,+-3028,+5%7D%3B%0A++++++System.out.println(test(myArray,9))%3B%0A++++++System.out.println(test(myArray,5))%3B%0A++++++System.out.println(test(myArray,0))%3B%0A++++++System.out.println(test(myArray,-3))%3B+%0A+++%7D%0A%7D&mode=display&curInstr=0>`_.

.. mchoice:: qamed_3
   :answer_a: It is the length of the shortest consecutive block of the value <code>target</code>  in <code>nums</code> 
   :answer_b: It is the length of the array <code>nums</code> 
   :answer_c: It is the length of the first consecutive block of the value <code>target</code>  in <code>nums</code> 
   :answer_d: It is the number of occurrences of the value <code>target</code>  in <code>nums</code> 
   :answer_e: It is the length of the last consecutive block of the value <code>target</code>  in <code>nums</code> 
   :correct: d
   :feedback_a: It doesn't reset <code>lenCount</code> ever, so it just counts all the times the <code>target</code> value appears in the array.
   :feedback_b: This can't be true. There is no <code>nums.length</code> in the code and the only count happens <code>lenCount</code> is incremented when <code>nums[k] == target</code>.
   :feedback_c: It doesn't reset <code>lenCount</code> ever, so it just counts all the times the <code>target</code> value appears in the array.
   :feedback_d: The variable <code>lenCount</code> is incremented each time the current array element is the same value as the <code>target</code>. It is never reset so it counts the number of occurrences of the value <code>target</code> in <code>nums</code>. The method returns <code>maxLen</code> which is set to <code>lenCount</code> after the loop finishes if <code>lenCount</code> is greater than <code>maxLen</code>.
   :feedback_e: It doesn't reset <code>lenCount</code> ever, so it just counts all the times the <code>target</code> value appears in the array.

   Consider the following data field and method findLongest. Method ``findLongest`` is intended to find the longest consecutive block of the value ``target`` occurring in the array ``nums``; however, ``findLongest`` does not work as intended. For example, if the array ``nums`` contains the values [7, 10, 10, 15, 15, 15, 15, 10, 10, 10, 15, 10, 10], the call findLongest(10) should return 3, the length of the longest consecutive block of 10s. Which of the following best describes the value returned by a call to ``findLongest``?
   
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
        return maxLen;
     }
     
You can step through the code above with the Java Visualizer by clicking the following link `Prob-7-10-3 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=public+class+ArrayWorker+%7B%0A+++%0A++++private+int%5B%5D+nums%3B%0A+++%0A++++public+ArrayWorker(int%5B%5D+theNums)%0A++++%7B%0A+++++++nums+%3D+theNums%3B%0A++++%7D%0A+++%0A+++++public+int+findLongest(int+target)+%7B%0A++++++++int+lenCount+%3D+0%3B%0A++++++++int+maxLen+%3D+0%3B%0A++++++++for+(int+k+%3D+0%3B+k+%3C+nums.length%3B+k%2B%2B)+%7B%0A+++++++++++if+(nums%5Bk%5D+%3D%3D+target)+%7B%0A++++++++++++++lenCount%2B%2B%3B%0A+++++++++++%7D+else+if+(lenCount+%3E+maxLen)+%7B%0A++++++++++++++maxLen+%3D+lenCount%3B%0A+++++++++++%7D%0A++++++++%7D%0A++++++++if+(lenCount+%3E+maxLen)+%7B%0A+++++++++++maxLen+%3D+lenCount%3B%0A++++++++%7D%0A++++++++return+maxLen%3B%0A+++++%7D%0A+++%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A++++++int%5B%5D+temp+%3D+%7B7,+10,+10,+15,+15,+15,+15,+10,+10,+10,+15,+10,+10%7D%3B%0A++++++ArrayWorker+arrayWorker+%3D+new+ArrayWorker(temp)%3B%0A++++++System.out.println(arrayWorker.findLongest(10))%3B%0A+++%7D%0A%7D&mode=display&curInstr=0>`_.  Can you fix the code in the Java Visualizer so that it works as intended?

.. mchoice:: qamed_4
   :answer_a: All values in positions <code>m+1</code> through <code>myStuff.length-1</code> are greater than or equal to <code>n</code>.
   :answer_b: All values in position 0 through <code>m</code> are less than <code>n</code>.
   :answer_c: All values in position <code>m+1</code> through <code>myStuff.length-1</code> are less than <code>n</code>.
   :answer_d: The smallest value is at position <code>m</code>.
   :answer_e: The largest value that is smaller than <code>n</code> is at position <code>m</code>.
   :correct: a
   :feedback_a: Mystery steps backwards through the array until the first value less than the passed <code>num</code> (<code>n</code>) is found and then it returns the index where this value is found. Nothing is known about the elements of the array prior to the index at which the condition is met.
   :feedback_b: Mystery steps backwards through the array and quits the first time the value at the current index is less than the passed <code>num</code> (<code>n</code>). This would be true if we went forward through the array and returned when it found a value greater than the passed <code>num</code> (<code>n</code>).
   :feedback_c: This would be true if it returned when it found a value at the current index that was greater than <code>num</code> (<code>n</code>).
   :feedback_d: The condition compares the value at the current index of the array to the passed <code>num</code>. It returns the first time the condition is met so nothing is known about the values which are unchecked. One of the unchecked values could be smaller.
   :feedback_e: The condition checks for any value that is smaller than the passed <code>num</code> and returns from <code>mystery</code> the first time that the condition is encountered. The values are not ordered so we don't know if this is the largest value smaller than <code>n</code>.

   Consider the following data field and method. Which of the following best describes the contents of ``myStuff`` in terms of ``m`` and ``n`` after the following statement has been executed?
   
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
     
You can step through the code above with the Java Visualizer by clicking the following link `Prob-7-10-4 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=public+class+ArrayWorker+%7B%0A+++%0A++++private+int%5B%5D+myStuff%3B%0A+++%0A++++public+ArrayWorker(int%5B%5D+theStuff)%0A++++%7B%0A+++++++myStuff+%3D+theStuff%3B%0A++++%7D%0A%0A+++++//precondition%3A+myStuff+contains%0A+++++//+++integers+in+no+particular+order%0A+++++public+int+mystery(int+num)+%7B%0A++++++++for+(int+k+%3D+myStuff.length+-+1%3B+k+%3E%3D+0%3B+k--)+%7B%0A+++++++++++if+(myStuff%5Bk%5D+%3C+num)+%7B%0A+++++++++++++++return+k%3B%0A+++++++++++%7D%0A++++++++%7D%0A++++++++return+-1%3B%0A+++++%7D%0A%0A+++++%0A+++%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A++++++int%5B%5D+temp+%3D+%7B-3,+1,+3,+2,+6%7D%3B%0A++++++ArrayWorker+arrayWorker+%3D+new+ArrayWorker(temp)%3B%0A++++++int+m+%3D+arrayWorker.mystery(2)%3B%0A++++++System.out.println(m)%3B%0A+++%7D%0A%7D&mode=display&curInstr=0>`_.
