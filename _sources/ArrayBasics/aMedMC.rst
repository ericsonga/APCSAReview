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
   :feedback_c: Because each time through the loop <code>temp</code> is reset, it will only be returned as true if the last value in <code>a</code> is equal to <code>val</code>.  
   :feedback_d: Because <code>temp</code> is reset every time through the loop, only the last element controls whether the final value is true or false, so it is possible for just the last value to be equal to <code>val</code>.
   :feedback_e: Because <code>temp</code> is reset every time through the loop, only the last element controls whether the final value is true or false, so it is possible for several elements to be equal to <code>val</code>.

   Consider the following code segment. Which of the following statements best describes the condition when it returns true?
   
   .. code-block:: java

     boolean temp = false;
     for (int i = 0; i < a.length; i++) {
        temp = (a[i] == val);
     }
     return temp;
     
You can step through the code above with the Java Visualizer by clicking the following link `Prob-7-10-2 <http://www.pythontutor.com/java.html#code=public+class+ClassNameHere+%7B%0A+++%0A+++public+static+boolean+test(int%5B%5D+a,int+val)+%7B%0A++++++boolean+temp+%3D+false%3B%0A+++++for+(int+i+%3D+0%3B+i+%3C+a.length%3B+i%2B%2B)+%7B%0A++++++++temp+%3D+(a%5Bi%5D+%3D%3D+val)%3B%0A+++++%7D%0A+++++return(temp)%3B%0A+++%7D%0A++++++%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A++++++int%5B%5D+myArray+%3D+%7B9,+-3,+81,+-3028,+5%7D%3B%0A++++++System.out.println(test(myArray,9))%3B%0A++++++System.out.println(test(myArray,5))%3B%0A++++++System.out.println(test(myArray,0))%3B%0A++++++System.out.println(test(myArray,-3))%3B+%0A+++%7D%0A%7D&mode=display&curInstr=0>`_.

.. mchoice:: qamed_3
   :answer_a: It is the length of the shortest consecutive block of the value <code>target</code>  in <code>nums</code> 
   :answer_b: It is the length of the array <code>nums</code> 
   :answer_c: It is the length of the first consecutive block of the value <code>target</code>  in <code>nums</code> 
   :answer_d: It is the number of occurrences of the value <code>target</code>  in <code>nums</code> 
   :answer_e: It is the length of the last consecutive block of the value <code>target</code>  in <code>nums</code> 
   :correct: d
   :feedback_a: It doesn't reset <code>lenCount</code> ever, so it just counts all the times the <code>target</code> value appears in the array.
   :feedback_b: The only count happens when <code>lenCount</code> is incremented when <code>nums[k] == target</code>. <code>nums.length</code> is only used to stop the loop.
   :feedback_c: It doesn't reset <code>lenCount</code> ever, so it just counts all the times the <code>target</code> value appears in the array.
   :feedback_d: The variable <code>lenCount</code> is incremented each time the current array element is the same value as the <code>target</code>. It is never reset so it counts the number of occurrences of the value <code>target</code> in <code>nums</code>. The method returns <code>maxLen</code> which is set to <code>lenCount</code> after the loop finishes if <code>lenCount</code> is greater than <code>maxLen</code>.
   :feedback_e: It doesn't reset <code>lenCount</code> ever, so it just counts all the times the <code>target</code> value appears in the array.

   Consider the following data field and method ``findLongest``. Method ``findLongest`` is intended to find the longest consecutive block of the value ``target`` occurring in the array ``nums``; however, ``findLongest`` does not work as intended. For example given the code below the call ``findLongest(10)`` should return 3, the length of the longest consecutive block of 10s. Which of the following best describes the value actually returned by a call to ``findLongest``?
   
   .. code-block:: java

     private int[] nums = {7, 10, 10, 15, 15, 15, 15, 10, 10, 10, 15, 10, 10};
     
     public int findLongest(int target) {
        int lenCount = 0; // length of current consecutive numbers
        int maxLen = 0;   // max length of consecutive numbers 
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
     
You can step through the code above with the Java Visualizer by clicking the following link `Prob-7-10-3 <http://www.pythontutor.com/java.html#code=public+class+ArrayWorker+%7B%0A+++%0A++++private+int%5B%5D+nums%3B%0A+++%0A++++public+ArrayWorker(int%5B%5D+theNums)%0A++++%7B%0A+++++++nums+%3D+theNums%3B%0A++++%7D%0A+++%0A+++++public+int+findLongest(int+target)+%7B%0A++++++++int+lenCount+%3D+0%3B%0A++++++++int+maxLen+%3D+0%3B%0A++++++++for+(int+k+%3D+0%3B+k+%3C+nums.length%3B+k%2B%2B)+%7B%0A+++++++++++if+(nums%5Bk%5D+%3D%3D+target)+%7B%0A++++++++++++++lenCount%2B%2B%3B%0A+++++++++++%7D+else+if+(lenCount+%3E+maxLen)+%7B%0A++++++++++++++maxLen+%3D+lenCount%3B%0A+++++++++++%7D%0A++++++++%7D%0A++++++++if+(lenCount+%3E+maxLen)+%7B%0A+++++++++++maxLen+%3D+lenCount%3B%0A++++++++%7D%0A++++++++return+maxLen%3B%0A+++++%7D%0A+++%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A++++++int%5B%5D+temp+%3D+%7B7,+10,+10,+15,+15,+15,+15,+10,+10,+10,+15,+10,+10%7D%3B%0A++++++ArrayWorker+arrayWorker+%3D+new+ArrayWorker(temp)%3B%0A++++++System.out.println(arrayWorker.findLongest(10))%3B%0A+++%7D%0A%7D&mode=display&curInstr=0>`_.  Can you fix the code in the Java Visualizer so that it works as intended?

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
     
You can step through the code above with the Java Visualizer by clicking the following link `Prob-7-10-4 <http://www.pythontutor.com/java.html#code=public+class+ArrayWorker+%7B%0A+++%0A++++private+int%5B%5D+myStuff%3B%0A+++%0A++++public+ArrayWorker(int%5B%5D+theStuff)%0A++++%7B%0A+++++++myStuff+%3D+theStuff%3B%0A++++%7D%0A%0A+++++//precondition%3A+myStuff+contains%0A+++++//+++integers+in+no+particular+order%0A+++++public+int+mystery(int+num)+%7B%0A++++++++for+(int+k+%3D+myStuff.length+-+1%3B+k+%3E%3D+0%3B+k--)+%7B%0A+++++++++++if+(myStuff%5Bk%5D+%3C+num)+%7B%0A+++++++++++++++return+k%3B%0A+++++++++++%7D%0A++++++++%7D%0A++++++++return+-1%3B%0A+++++%7D%0A%0A+++++%0A+++%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A++++++int%5B%5D+temp+%3D+%7B-3,+1,+3,+2,+6%7D%3B%0A++++++ArrayWorker+arrayWorker+%3D+new+ArrayWorker(temp)%3B%0A++++++int+m+%3D+arrayWorker.mystery(2)%3B%0A++++++System.out.println(m)%3B%0A+++%7D%0A%7D&mode=display&curInstr=0>`_.


.. mchoice:: qamed_5
   :answer_a: Returns the index of the largest value in array <code>arr</code>.
   :answer_b: Returns the index of the first element in array <code>arr</code> whose value is greater than <code>arr[loc]</code>.
   :answer_c: Returns the index of the last element in array <code>arr</code> whose value is greater than <code>arr[loc]</code>.
   :answer_d: Returns the largest value in array <code>arr</code>.
   :answer_e: Returns the index of the largest value in the second half of array <code>arr</code>.
   :correct: a
   :feedback_a: This code sets <code>loc</code> to the middle of the array and then loops through all the array elements.  If the value at the current index is greater than the value at <code>loc</code> then it changes <code>loc</code> to the current index.  It returns <code>loc</code>, which is the index of the largest value in the array.
   :feedback_b: This would be true if there was a <code>return loc</code> after <code>loc = k</code> in the <code>if</code> block.
   :feedback_c: This would be true if it returned <code>loc</code> after setting <code>loc = k</code> and if it started at the end of the array and looped toward the beginning of the array.
   :feedback_d: It returns the <i>index</i> to the largest value in array <code>arr</code>, not the largest value.
   :feedback_e: <code>k</code> loops from 0 to <code>arr.length - 1</code>.  So it checks all of the elements in the array.

   Consider the following field ``arr`` and method ``checkArray``.  Which of the following best describes what ``checkArray`` returns?
   
   .. code-block:: java

     private int[] arr;

     // precondition: arr.length != 0
     public int checkArray()
     {
         int loc = arr.length / 2;
         for (int k = 0; k < arr.length; k++)
         {
             if (arr[k] > arr[loc])
             {
                 loc = k;
             }
         }
         return loc;
     }
     
You can step through the code above with the Java Visualizer by clicking the following link `Prob-7-10-5 <http://www.pythontutor.com/java.html#code=public+class+Test+%7B%0A+++%0A+++private+int%5B%5D+arr+%3D+null%3B%0A+++%0A+++public+Test(int%5B%5D+theArr)%0A+++%7B%0A++++++arr+%3D+theArr%3B%0A+++%7D%0A%0A+++//+precondition%3A+arr.length+!%3D+0%0A+++public+int+checkArray()%0A+++%7B%0A++++++int+loc+%3D+arr.length+/+2%3B%0A++++++for+(int+k+%3D+0%3B+k+%3C+arr.length%3B+k%2B%2B)%0A++++++%7B%0A++++++++if+(arr%5Bk%5D+%3E+arr%5Bloc%5D)%0A++++++++%7B%0A++++++++++++loc+%3D+k%3B%0A++++++++%7D%0A++++++%7D%0A++++++return+loc%3B%0A+++%7D%0A+++%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A++++++int%5B%5D+temp+%3D+%7B5,+93,+3,+20,+81%7D%3B%0A++++++Test+myTest+%3D+new+Test(temp)%3B%0A++++++System.out.println(myTest.checkArray())%3B%0A++++++%0A+++%7D%0A%7D&mode=display&curInstr=0>`_.
     
.. mchoice:: qamed_6
        :answer_a: 4
        :answer_b: 2
        :answer_c: 12 
        :answer_d: 6
        :answer_e: 3
        :correct: b
        :feedback_a: This would be true if it was <code>return (a[1] *= 2);</code>, which would change the value at <code>a[1]</code>. 
        :feedback_b: The statement <code>a[1]--;</code> is the same as <code>a[1] = a[1] - 1;</code> so this will change the 3 to 2.  The <code>return (a[1] * 2)</code> does not change the value at <code>a[1]</code>.  
        :feedback_c: This would be true if array indicies started at 1 instead of 0 and if the code changed the value at index 1 to the current value times two.  
        :feedback_d: This would be true if array indices started at 1 rather than 0.   
        :feedback_e: This can't be true because <code>a[1]--;</code>  means the same as <code>a[1] = a[1] - 1;</code>  so the 3 changes to 2.  Parameters are all pass by value in Java which means that a copy of the value is passed to a method. But, since an array is an object a copy of the value is a copy of the reference to the object. So changes to objects in methods are permanent.
       
        Given the following field and method declaration, what is the value in ``a[1]`` when ``m1(a)`` is run?
       
        .. code-block:: java

       	    int[] a = {7, 3, -1};

            public static int m1(int[] a)
            {
               a[1]--;
               return (a[1] * 2);
            }
            
You can step through the code above with the Java Visualizer by clicking the following link `Prob-7-10-6 <http://www.pythontutor.com/java.html#code=public+class+Test+%7B%0A+++%0A%0A+++public+static+int+m1(int%5B%5D+a)%0A+++%7B%0A++++++a%5B1%5D--%3B%0A++++++return+(a%5B1%5D+*+2)%3B%0A+++%7D%0A+++%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A++++++int%5B%5D+temp+%3D+%7B7,+3,+-1%7D%3B%0A++++++System.out.println(temp%5B1%5D)%3B%0A++++++m1(temp)%3B%0A++++++System.out.println(temp%5B1%5D)%3B+%0A+++%7D%0A%7D&mode=display&curInstr=0>`_.

.. mchoice:: qamed_7
   :answer_a: k - 1
   :answer_b: k + 1
   :answer_c: k 
   :answer_d: 1
   :answer_e: 0
   :correct: a
   :feedback_a: This loop will start at 1 and continue until <code>k</code> is reached as long as <code>arr[i] < someValue</code> is true.  The last time the loop executes, <code>i</code> will equal <code>k-1</code>, if the condition is always true.  The number of times a loop executes is equal to the largest value when the loop executes minus the smallest value plus one.  In this case that is <code>(k - 1) - 1 + 1</code> which equals <code>k - 1</code>.  
   :feedback_b: This would be true if <code>arr[i] < someValue</code> was always true and the loop started at 0 instead of 1 and continued while it was less than or equal to <code>k</code>.
   :feedback_c: This would be true if <code>arr[i] < someValue</code> was always true and the loop started at 0 instead of 1.  
   :feedback_d: This would be the case if only one element in the array would fulfill the condition that <code>arr[i] < someValue</code>.
   :feedback_e: This is the minimum number of times that <code>HELLO</code> could be executed.  This would be true if <code>k</code> was less than <code>i</code> initially.  

   Consider the following code. What is the *maximum* amount of times that ``HELLO`` could possibly be printed?

   .. code-block:: java
     
      for (int i = 1; i < k; i++) 
      {
         if (arr[i] < someValue) 
         {
           System.out.print("HELLO")
         }
      }
      
You can step through the code above with the Java Visualizer by clicking the following link `Prob-7-10-7 <http://www.pythontutor.com/java.html#code=public+class+ClassNameHere+%7B%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A++++++int%5B%5D+arr+%3D+%7B1,+5,+3%7D%3B%0A++++++int+someValue+%3D+10%3B%0A++++++int+k+%3D+3%3B%0A++++++%0A++++++for+(int+i+%3D+1%3B+i+%3C+k%3B+i%2B%2B)%0A++++++%7B%0A+++++++++if+(arr%5Bi%5D+%3C+someValue)%0A+++++++++%7B%0A++++++++++++System.out.print(%22HELLO%22)%3B%0A+++++++++%7D%0A++++++%7D%0A++++++%0A+++%7D%0A%7D&mode=display&curInstr=0>`_.

.. mchoice:: qamed_8
   :answer_a: {2, 6, 2, -1, -3}
   :answer_b: {-23, -21, -13, -3, 6}
   :answer_c: {10, 18, 19, 15, 6}
   :answer_d: This method results in an IndexOutOfBounds exception.
   :answer_e: {35, 33, 25, 15, 6}
   :correct: e
   :feedback_a: This would be correct if <code>data[k]</code> was modified in the for-loop. In this for-loop, <code>data[k - 1]</code> is the element that changes.
   :feedback_b: This would be correct if <code>data[k - 1]</code> was subtracted from <code>data[k]</code>. Notice that for every instance of the for-loop, <code>data[k]</code> and <code>data[k - 1]</code> are added together and <code>data[k - 1]</code> is set to that value.
   :feedback_c: This would be correct if the for-loop began at 1 and continued to <code>data.length - 1</code>. Notice the for-loop indexing.
   :feedback_d: The indexing of this method is correct. The for-loop begins at the last valid index and ends when <code>k</code> is equal to 0, and the method does not access any values other than the ones specified.
   :feedback_e: This method starts at the last valid index of the array and adds the value of the previous element to the element at index <code>k - 1</code>.
   
   Consider the following method ``changeArray``. An array is created that contains ``{2, 8, 10, 9, 6}`` and is passed to ``changeArray``. What are the contents of the array after the ``changeArray`` method executes?

   .. code-block:: java

      public static void changeArray(int[] data)
      {
         for (int k = data.length - 1; k > 0; k--)
            data[k - 1] = data[k] + data[k - 1];
      }
      
You can step through the code above with the Java Visualizer by clicking the following link `Prob-7-10-8 <http://www.pythontutor.com/java.html#code=public+class+Test+%7B%0A+++%0A+++public+static+void+changeArray(int%5B%5D+data)%0A+++%7B%0A++++++for+(int+k+%3D+data.length+-+1%3B+k+%3E+0%3B+k--)%0A+++++++++data%5Bk+-+1%5D+%3D+data%5Bk%5D+%2B+data%5Bk+-+1%5D%3B%0A+++%7D%0A+++%0A+++%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A++++++%0A++++++int%5B%5D+temp+%3D+%7B2,+8,+10,+9,+6%7D%3B%0A++++++changeArray(temp)%3B%0A+++%7D%0A%7D&mode=display&curInstr=0>`_.

.. mchoice:: qamed_9
   :answer_a: [-2, -1, -5, 3, -4]
   :answer_b: [-2, -1, 3, -8, 6]
   :answer_c: [1, 5, -5, 3, -4]
   :answer_d: [1, 5, 3, -8, 6]
   :answer_e: [1, 5, -2, -5, 2]
   :correct: c
   :feedback_a: This would be true if <code>i</code> started at 0 instead of <code>arr1.length / 2</code>.  
   :feedback_b: This would be true if <code>i</code> started at 0 and ended when it reached <code>arr1.length / 2</code>.
   :feedback_c: This loop starts at <code>arr2.length / 2</code> which is 2 and loops to the end of the array copying from <code>arr2</code> to <code>arr1</code>.
   :feedback_d: This would be correct if this loop didn't change <code>arr1</code>, but it does.  
   :feedback_e: This would be correct if it set <code>arr1[i]</code> equal to <code>arr[i] + arr[2]</code> instead.  
   
   Assume that ``arr1={1, 5, 3, -8, 6}`` and ``arr2={-2, -1, -5, 3, -4}`` what will the contents of ``arr1`` be after ``copyArray`` finishes executing?

   .. code-block:: java

      public static void copyArray(int[] arr1, int[] arr2)
      {
         for (int i = arr1.length / 2; i < arr1.length; i++)
         {
            arr1[i] = arr2[i];
         }
      }
      
You can step through the code above with the Java Visualizer by clicking the following link `Prob-7-10-9 <http://www.pythontutor.com/java.html#code=public+class+Test+%7B%0A+++%0A%0A+++public+static+void+copyArray(int%5B%5D+arr1,+int%5B%5D+arr2)%0A+++%7B%0A+++++++++for+(int+i+%3D+arr1.length+/+2%3B+i+%3C+arr1.length%3B+i%2B%2B)%0A+++++++++%7B%0A++++++++++++arr1%5Bi%5D+%3D+arr2%5Bi%5D%3B%0A+++++++++%7D%0A+++%7D%0A+++%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A++++++int%5B%5D+temp1+%3D+%7B1,+5,+3,+-8,+6%7D%3B%0A++++++int%5B%5D+temp2+%3D+%7B-2,+-1,+-5,+3,+-4%7D%3B%0A++++++copyArray(temp1,temp2)%3B%0A+++%7D%0A%7D&mode=display&curInstr=0>`_.

.. mchoice:: qamed_10
   :answer_a: The values don't matter this will always cause an infinite loop.
   :answer_b: Whenever <code>a</code> includes a value that is less than or equal to zero.
   :answer_c: Whenever <code>a</code> has values larger then <code>temp</code>.
   :answer_d: When all values in <code>a</code> are larger than <code>temp</code>.
   :answer_e: Whenever <code>a</code> includes a value equal to <code>temp</code>.
   :correct: b
   :feedback_a: An infinite loop will not always occur in this code segment.
   :feedback_b: When <code>a</code> contains a value that is less than or equal to zero then multiplying that value by 2 will never make the result larger than <code>temp</code> (which was set to some value > 0), so an infinite loop will occur.
   :feedback_c: Values larger then <code>temp</code> will not cause an infinite loop.
   :feedback_d: Values larger then <code>temp</code> will not cause an infinite loop.
   :feedback_e: Values equal to <code>temp</code> will not cause the infinite loop.

   Given the following code segment, which of the following will cause an infinite loop?  Assume that ``temp`` is an ``int`` variable initialized to be greater than zero and that ``a`` is an array of ints.
   
   .. code-block:: java 

      for ( int k = 0; k < a.length; k++ )
      {
         while ( a[ k ] < temp )
         {
            a[ k ] *= 2;
         }
      }
      
You can step through the code above using the Java Visualizer by clicking on the following link `Prob-7-10-10 <http://www.pythontutor.com/java.html#code=public+class+ClassNameHere+%7B%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A++++++%0A++++++int%5B%5D+a+%3D+%7B1,+5,+2,+-1,+3%7D%3B%0A++++++int+temp+%3D+10%3B%0A++++++%0A++++++for+(+int+k+%3D+0%3B+k+%3C+a.length%3B+k%2B%2B+)%0A++++++%7B%0A+++++++++while+(+a%5B+k+%5D+%3C+temp+)%0A+++++++++%7B%0A++++++++++++a%5B+k+%5D+*%3D+2%3B%0A+++++++++%7D%0A++++++%7D%0A++++++%0A+++%7D%0A%7D&mode=display&curInstr=0>`_. Can you fix the code so that it won't result in an infinite loop?
     
