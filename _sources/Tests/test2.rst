.. qnum::
   :prefix: 15-2-
   :start: 1
   
.. |start| image:: Figures/start.png
    :height: 24px
    :align: top
    :alt: start
    
.. |next| image:: Figures/next.png
    :height: 24px
    :align: top
    :alt: next
    
.. |prev| image:: Figures/prev.png
    :height: 24px
    :align: top
    :alt: previous
    
.. |pause| image:: Figures/pause.png
    :height: 24px
    :align: top
    :alt: pause
    
.. |finish| image:: Figures/finishExam.png
    :height: 24px
    :align: top
    :alt: finish exam
   
Practice Exam 2 for the AP CS A Exam
-------------------------------------

The following 20 questions are similar to what you might see on the AP CS A exam.  Please answer each to the best of your ability.  

Click the |start| button when you are ready to begin the exam, but only then as you can only take the exam once.  Click on the |next| button to go to the next question.  Click on the |prev| button to go to the previous question.  Use the number buttons to jump to a particular question.  Click the |pause| button to pause the exam (you will not be able to see the questions when the exam is paused).  Click on the |finish| button after you have answered all the questions.  The number correct, number wrong, and number skipped will be displayed.

.. timed:: postexam2
    :timelimit: 45
    
    .. mchoice:: pe2_1-14
       :answer_a: The value you are searching for is the first element in the array.
       :answer_b: The value you are searching for is the last element in the array
       :answer_c: The value you are searching for is in the middle of the array.
       :answer_d: The value you are searching for is not in the array
       :answer_e: Sequential Search can never be faster than Binary Search.
       :correct: a
       :feedback_a: Only when the search value is the first item in the array, and thus the first value encountered in sequential search, will sequential be faster than binary.
       :feedback_b: In this case a sequential search will have to check every element before finding the correct one, whereas a binary search will not.
       :feedback_c: Results will differ depending on the exact location of the element, but Binary Search will still find the element faster while Sequential will have to check more elements.
       :feedback_d: If the search value is not in the array, a sequential search will have to check every item in the array before failing, a binary search will be faster.
       :feedback_e: When the search value is the first element, Sequential will always be faster, as it will only need to check one element.

       Under which of these conditions will a sequential search be faster than a binary search?

    .. mchoice:: pe2_2-9
       :answer_a: (c || d)
       :answer_b: (c && d)
       :answer_c: (!c) || (!d)
       :answer_d: !(c && d)
       :answer_e: (!c) && (!d)
       :correct: e
       :feedback_a: NOTing an OR expression does not result in the same values ORed.
       :feedback_b: You do negate the OR to AND, but you also need to negate the values of d and d.
       :feedback_c: This would be equivalent to (!(c && d)) using De Morgans laws.
       :feedback_d: This would be equivalent to (!c || !d)
       :feedback_e: NOTing (negating) an OR expression is the same as the AND of the individual values NOTed (negated). See De Morgans laws.

       Which of the following expressions is equivalent to the following? 
   
       .. code-block:: java

           !(c || d)

    .. mchoice:: pe2_3-19
       :answer_a: Data (fields) can be directly accessed by all code in all classes. 
       :answer_b: Data (fields) can be hidden inside of an object using the abstract visibility modifier.
       :answer_c: Data (fields) are directly accessible by objects in the same package and in subclasses.
       :answer_d: Data (fields) can be hidden inside an object using the visibility modifier private.
       :answer_e: Data (fields) are directly accessible by objects in the same package.
       :correct: d
       :feedback_a: Encapsulation is making data private so only code in the same class has direct access.
       :feedback_b: There is no abstract visibility modfier. The keyword abstract is used on classes and methods. An abstract class is one that can't be instantiated and an abstract method is one that just has a method signature and no method body. You can not use the keyword abstract on field declarations.
       :feedback_c: Encapsulation means that only code in the defining class has direct access. The visibility modifier protected gives diredct access to code in classes in the same package and subclasses.
       :feedback_e: Encapsulation means that only code in the defining class has direct access. The default package access gives direct access to code in classes in the same package.
       :feedback_d: This is the definition of encapsulation and this is done in Java using private (a member is direclty accessible only in the class that defines it) and protected (a member is direclty accessible only within code in the same package and in subclasses).

       What is encapsulation and how does Java implement it?

    .. mchoice:: pe2_4-10
       :answer_a: The values don't matter this will always cause an infinite loop.
       :answer_b: Whenever a has values larger then temp.
       :answer_c: When all values in a are larger than temp.
       :answer_d: Whenever a includes a value that is less than or equal to zero.
       :answer_e: Whenever a includes a value equal to temp.
       :correct: d
       :feedback_a: An infinite loop will not always occur in this program segment. It occurs when at least one value in a is less than or equal to 0.
       :feedback_b: Values larger then temp will not cause an infinite loop.
       :feedback_c: Values larger then temp will not cause an infinite loop.
       :feedback_d: When a contains a value that is less than or equal to zero then multiplying that value by 2 will never make the result larger than the temp value (which was set to some value > 0), so an infinite loop will occur.
       :feedback_e: Values equal to temp will not cause the infinite loop.

       Which of the following will cause an infinite loop when ``temp`` is greater than zero and ``a`` is an array of integers.  
   
       .. code-block:: java

         for (int k = 0; k < a.length; k++ )
         {
            while (a[k] < temp )
            {
               a[k] *= 2;
            }
         }
     
    .. mchoice:: pe2_5-5
       :answer_a: if (x > 0) x = 0;
       :answer_b: x = 0;
       :answer_c: if (x < 0) x = 0;   
       :answer_d: if (x > 0) x = -x; else x = 0;
       :answer_e: if ( x < 0) x = 0; else x = -1;  
       :correct: b
       :feedback_a: Even if x is < 0, the above code will set it to 0.
       :feedback_b: No matter what x is set to originally, the code will reset it to 0.
       :feedback_c: Even if x is > than 0 originally, it will be set to 0 after the code executes.
       :feedback_d: The first if statment will always cause the second to be executed unless x already equals 0, such that x will never equal -x
       :feedback_e: The first if statement will always cause the second to be executed unless x already equals 0, such that x will never equal -x

       Given the following code segment, which of the following is this equivalent to?
   
       .. code-block:: java

         if ( x > 0) x = -x; 
         if (x < 0) x = 0;
     
    .. mchoice:: pe2_6-15
       :answer_a: [1, 2, 3, 4, 5]
       :answer_b: [1, 2, 4, 5, 6]
       :answer_c: [1, 6, 2, 4, 5]
       :answer_d: [1, 5, 2, 4, 6]
       :answer_e: [1, 2, 5, 4, 6] 
       :correct: e
       :feedback_a: The set replaces the 3 with the 4 so this can't be right
       :feedback_b: The add with an index of 2 and a value of 5 adds the 5 at index 2 not 3. Remember that the first index is 0.
       :feedback_c: How did the 6 get in position 2? 
       :feedback_d: The add with an index of 2 and a value of 5 adds the 5 at index 2 not 1. Remember that the first index is 0.
       :feedback_e: The add method that takes just a value as a parameter adds that value to the end of the list. The set replaces the value at that index with the new value. The add with parameters of an index and a value puts the passed value at that index and moves any existing values by one index to the right (increments the index). So the list looks like: 1 // add 1 1 2 // add 2 1 2 3 // add 3 1 2 4 // set index 2 to 4 1 2 5 4 // add 5 to index 2 (move rest right) 1 2 5 4 6 // add 6 to end

       Given the following code segment, what will be printed when it is executed?
   
       .. code-block:: java
   
          List<Integer> list1 = new ArrayList<Integer>();
          list1.add(new Integer(1));
          list1.add(new Integer(2));
          list1.add(new Integer(3));
          list1.set(2, new Integer(4));
          list1.add(2, new Integer(5));
          list1.add(new Integer(6));
          System.out.println(list1);
     
    .. mchoice:: pe2_7-20
       :answer_a: IV
       :answer_b: I and II
       :answer_c: I and III
       :answer_d: V
       :answer_e: I only
       :correct: a
       :feedback_a: All of these are valid reasons to use an inheritance heirarchy.
       :feedback_b: III is also valid. In some cases you might want to store subclasses together in a single array, and inheritance allows for this.
       :feedback_c: II is also valid. In some cases a single method is applicable for a number of subclasses, and inheritance allows you to pass objects of the subclasses to the same method instead of writing individual methods for each subclass.
       :feedback_d: In fact, all of the reasons listed are valid. Subclasses can reuse methods written for superclasses without code replication, subclasses can be stored in the same array, and passed as arguments to methods meant for the superclass. All of which make writing code more streamlined.
       :feedback_e: II and III are also valid, in some cases a single method is applicable for a number of subclasses, and inheritance allows you to pass all the subclasses to the same method instead of writing individual methods for each subclass and you might want to store subclasses together in a single array, and inheritance allows for this.

       Which of the following reasons for using an inheritance heirarchy are valid?
   
       .. code-block:: java

          I.   Methods from a superclass can be used in a subclass without 
               rewriting or copying code.
          II.  Objects from subclasses can be passed as arguments to a method 
               designed for the superclass
          III. Objects from subclasses can be stored in the same array
          IV.  All of the above
          V.   None of the above
            

    .. mchoice:: pe2_8-13
       :answer_a: Many digits are printed due to infinite recursion. 
       :answer_b: 3443
       :answer_c: 43211234
       :answer_d: 1441
       :answer_e: 12344321
       :correct: c
       :feedback_a: When the recursive call to mystery(1) occurs (the 4th call to mystery), the division of x /10 equals .01--this becomes 0 because this is integer division and the remainder is thrown away. Therefore the current call will be completed and all of the previous calls to mystery will be completed.
       :feedback_b: The first call to mystery with the integer 1234 will print 1234 % 10. The '%' means modulus or remainder. The remainder of 1234 divided by 10 is 4 so the first thing printed must be 4.
       :feedback_c: This has a recursive call which means that the method calls itself when (x / 10) is greater than or equal to zero. Each time the method is called it prints the remainder of the passed value divided by 10 and then calls the method again with the result of the integer division of the passed number by 10 (which throws away the decimal part). After the recursion stops by (x / 10) == 0 the method will print the remainder of the passed value divided by 10 again.
       :feedback_d: The first call to mystery with the integer 1234 will print 1234 % 10. The '%' means modulus or remainder. The remainder of 1234 divided by 10 is 4 so the first thing printed must be 4.
       :feedback_e: The first call to mystery with the integer 1234 will print 1234 % 10. The '%' means modulus or remainder. The remainder of 1234 divided by 10 is 4 so the first thing printed must be 4.

       Which of the following is printed as the result of the call ``mystery(1234);``?
   
       .. code-block:: java
     
         //precondition:  x >=0
         public void mystery (int x)
         {
           System.out.print(x % 10);

           if ((x / 10) != 0)
           {
               mystery(x / 10);
           }
           System.out.print(x % 10);
         }

    .. mchoice:: pe2_9-18
       :answer_a: a = 6 and b = 7
       :answer_b: a = 13 and b = 0
       :answer_c: a = 6 and b = 0
       :answer_d: a = 0 and b = 13
       :answer_e: a = 6 and b = 13
       :correct: b
       :feedback_a: This would be true if the loop stopped when i was equal to 6.
       :feedback_b: The variable i loops from 1 to 6 and each time the values are as follows: i = 1, t = 10, a = 4, b = 9, i = 2, t = 4, a  = 11, b =2, i = 3, t = 11, a = 5, b = 8, i = 4, t = 5, a = 12, b = 1, i = 5, t = 12, a = 6, b = 7, i = 6, t = 6, a = 13, b = 0
       :feedback_c: Actually i = 6 and t = 6 and b = 0 after the loop finishes.
       :feedback_d: Actually a = 13 and b = 0 after the loop finishes.
       :feedback_e: Actually i = 6 and t = 6 and a = 13 after the loop finishes.

       Given the following code segment, what are the values of ``a`` and ``b`` after the ``for`` loop finishes?
   
       .. code-block:: java

          int a = 10, b = 3, t;
          for (int i=1; i<=6; i++)
          {
             t = a;
             a = i + b;
             b = t - i;
          }
    
    .. mchoice:: pe2_10-1
       :answer_a: 112233445566  
       :answer_b: 123456
       :answer_c: 1223344556    
       :answer_d: 123234345456 
       :answer_e: Nothing will be printed due to an IndexOutOfBoundsException.    
       :correct: c
       :feedback_a: This would be true if the loop was printing each character twice and was incrementing the index by 1, but it prints two characters at a time and increments the index by 2.  
       :feedback_b: This would be true if the loop was incremented by 2 instead of 1.
       :feedback_c: This code loops through the string printing 2 characters at a time.  The last time through the loop the index is test.length() - 2.
       :feedback_d: This would be true if the loop was printing 3 characters at a time instead of 2.  Remember that the substring doesn't include the character at the specified last index.
       :feedback_e: This would be true if the loop stopped when index was less than the string length instead of one less than the string length.

       Given the following code segment, what is printed when it is executed?
   
       .. code-block:: java

         String test = "123456";
         for (int index = 0; index < test.length() - 1; index = index + 1) 
         {
              System.out.print(test.substring(index,index+2));
         }
     
    .. mchoice:: pe2_11-3
       :answer_a: var1=2, var2=0
       :answer_b: var1=3, var2=-1
       :answer_c: var1=0, var2=2    
       :answer_d: var1=1, var2=1
       :answer_e: The loop won't finish executing because of a division by zero.   
       :correct: a
       :feedback_a: The loop starts with var1=0 and var2=2. The while checks that var2 isn't 0 (2!=0) and that var1 / var2 is greater than or equal to zero (0/2=0) so this is equal to zero and the body of the while loop will execute. The variable var1 has 1 added to it for a new value of 1. The variable var2 has 1 subtracted from it for a value of 1. At this point var1=1 and var2=1. The while condition is checked again. Since var2 isn't 0 (1!=0) and var1/var2 (1/1=1) is >= 0 so the body of the loop will execute again. The variable var1 has 1 added to it for a new value of 2. The variable var2 has 1 subtracted from it for a value of 0. At this point var1=2 and var2=0. The while condition is checked again. Since var2 is zero the while loop stops and the value of var1 is 2 and var2 is 0.
       :feedback_b: This would be true if the body of the while loop executed 3 times, but it exectues twice.
       :feedback_c: This would be true if the body of the while loop never executed. This would have happened if the while check was if var1 != 0 instead of var2 != 0.
       :feedback_d: This would be true if the body of the while loop only executed one time, but it executes twice.
       :feedback_e: The operation 0 / 2 won't cause a division by zero. The result is just zero.

       Given the following code segment, what are the values of ``var1`` and ``var2`` after the while loop finishes?
   
       .. code-block:: java

         int var1 = 0;
         int var2 = 2;

         while ((var2 != 0) && ((var1 / var2) >= 0))
         {
            var1 = var1 + 1;
            var2 = var2 - 1;
         }
     
     
    .. mchoice:: pe2_12-6
       :answer_a: (s == m - 5) && (s - 3 == 2 * (m - 3))
       :answer_b: s == m + 5 && s + 3 == 2 * m + 6 
       :answer_c: s == (m - 5) && (2 * s + 3) == (m + 3) 
       :answer_d: None of the above is correct
       :answer_e:  (s == (m + 5)) && ((s + 3) == (2 * m + 3)) 
       :correct: b
       :feedback_a: This would be true if Susan was 5 years younger than Matt and three years ago she was twice his age. But, how could she be younger than him now and twice his age three years ago?
       :feedback_b: Susan is 5 years older than Matt so s == m + 5 should be true and in 3 years she will be twice as old so s + 3 = 2 * (m + 3) = 2 * m + 6.
       :feedback_c: This can't be right because Susan is 5 years older than Matt, so the first part is wrong. It has susan equal to Matt's age minus 5 which would have Matt older than Susan.
       :feedback_d: The answer is s == m + 5 && s + 3 == 2 * m + 6.
       :feedback_e: This is almost right. It has Susan as 5 years older than Matt now. But the second part is wrong. Multiplication will be done before addition so (2 * m + 3) won't be correct for in 3 years Susan will be twice as old as Matt. It should be (2 * (m + 3)) or (2 * m + 6).

       Susan is 5 years older than Matt. Three years from now Susan's age will be twice Matt's age.  What should be in place of ``condition`` in the code segment below to solve this problem?
   
       .. code-block:: java

         for (int s = 1; s <= 100; s++) {
            for (int m = 1; m <= 100; m++) {
               if (condition)
                   System.out.println("Susan is " + s + " and Matt is " + m);
            }
         }
    
     
    .. mchoice:: pe2_13-16
       :answer_a: {{2 3 3 3}, {1 2 3 3}, {1 1 2 3}}
       :answer_b: {{2 3 3}, {1 2 3}, {1 1 2}, {1 1 1}}
       :answer_c: {{2 1 1}, {3 2 1}, {3 3 2}, {3 3 3}}
       :answer_d: {{2 1 1 1}, {3 2 1 1}, {3 3 2 1}}
       :answer_e: {{1 1 1 1}, {2 2 2 2}, {3 3 3 3}}
       :correct: d
       :feedback_a: This would be true if you set the value to 3 when the column index was greater than the row and a 1 when the row index was greater than the column index.
       :feedback_b: This would be true if the first value when you create a 2-d array was the number of columns and the second was the number of rows. Also you would need to set the value to 3 when the column index was greater than the row and a 1 when the row index was greater than the column index.
       :feedback_c: This would be true if the first value when you create a 2-d array was the number of columns and the second was the number of rows.
       :feedback_d: When you create a 2-d array the first value is the number of rows and the second is the number of columns. This code will put a 1 in the array when the row index is less than the column index and a 2 in the array when the row and column index are the same, and a 3 in the array when the row index is greater than the column index.
       :feedback_e: This would be true if you set the value to the row index. 

       Given the following code segment, What are the contents of ``mat`` after the code segment has been executed?
   
       .. code-block:: java

         int [][] mat = new int [3][4];
         for (int row = 0; row < mat.length; row++)
         {
           for (int col = 0; col < mat[0].length; col++)
           {
              if (row < col)
                mat[row][col] = 1;
              else if (row == col)
                mat[row][col] = 2;
              else
                mat[row][col] = 3;
           }
        }
    
    .. mchoice:: pe2_14-12
       :answer_a: hI tHERE 
       :answer_b: hi there
       :answer_c: HI THERE  
       :answer_d: null
       :answer_e: Hi There
       :correct: e
       :feedback_a: Strings are immutable and so any changes to a string returns a new string.
       :feedback_b: This would only be correct if we had s1 = s2; after s2.toLowerCase(); was executed. Strings are immutable and so any change to a string returns a new string.
       :feedback_c: This would be correct if we had s1 = s3; after s3.toUpperCase(); was executed. Strings are immutable and so any change to a string returns a new string.
       :feedback_d: This would be true if we had s1 = s4; after s4 = null; was executed. Strings are immutable and so any changes to a string returns a new string.
       :feedback_e: Strings are immutable meaning that any changes to a string creates and returns a new string, so the string referred to by s1 does not change

       Given the following code segment, what will the value of ``s1`` be after this executes?
   
       .. code-block:: java

         String s1 = "Hi There";
         String s2 = s1;
         String s3 = s2;
         String s4 = s1;
         s2 = s2.toLowerCase();
         s3 = s3.toUpperCase();
         s4 = null;

     
    .. mchoice:: pe2_15-7
       :answer_a: 0 1 2 0 1 2 0 1
       :answer_b: 0 2 1 0 2 1 0 2
       :answer_c: 0 2 1 0 2 1 0 2 1  
       :answer_d: 2 1 0 2 1 0 2 1
       :answer_e: 0 2 1 0 2 1 0  
       :correct: b
       :feedback_a: The second time through the loop the value of num is 2 and 2 % 3 is 2 not 1.
       :feedback_b: The while loop will iterate 8 times. The value of num each time through the loop is: 0, 2, 4, 6, 8, 10, 12, and 14. The corresponding remainder operator of 3 is: 0, 2, 1, 0, 2, 1, 0, 2, which is print to the console.
       :feedback_c: The loop will iterate 8 times not 9. When the value of num exceeds 14, num will no longer be evaluated against the conditional statements. The remainder operator of 3 will be evaluated on the num values of 0, 2, 4, 6, 8, 10, 12 and 14.
       :feedback_d: The value of num the first time through the loop is 0 so the first remainder is 0 not 2. This would be true if the value of num was 2 to start.
       :feedback_e: This would be true if the loop stopped when the value of num was less than 14 but it is less than or equal to 14.

       Given the following code segment, what is printed when it executes?
   
       .. code-block:: java

         public static void test()
         {
           int num = 0;
           while(num <= 14) 
           {
             if(num % 3 == 1) 
             {
                System.out.print("1 ");
             }
             else if (num % 3 == 2) 
             {
                System.out.print("2 ");
             }
             else
             {
                System.out.print("0 ");
             }

             num += 2; 
           }    
        }
     

    .. mchoice:: pe2_16-2
       :answer_a: It is the length of the array nums. 
       :answer_b: It is the length of the first consecutive block of the value target in nums.
       :answer_c:  It is the length of the shortest consecutive block of the value target in nums.
       :answer_d: It is the number of occurrences of the value target in nums. 
       :answer_e: It is the length of the last consecutive block of the value target in nums.    
       :correct: d
       :feedback_a: This can't be true. There is no nums.length in the code and the only count happens lenCount is incremented when nums[k] == target.
       :feedback_b: It doesn't reset the count ever so it just counts all the times the target value appears in the array.
       :feedback_c: It doesn't reset the count ever so it just counts all the times the target value appears in the array.
       :feedback_d: The variable lenCount is incremented each time the current array element is the same value as the target. It is never reset so it counts the number of occurrences of the value target in nums. The method returns maxLen which is set to lenCount after the loop finishes if lenCount is greater than maxLen. 
       :feedback_e: It doesn't reset the count ever so it just counts all the times the target value appears in the array.

       Consider the following data field and method ``findLongest``. Method ``findLongest`` is intended to find the longest consecutive block of the value target occurring in the array nums; however, ``findLongest`` does not work as intended. For example, if the array nums contains the values [7, 10, 10, 15, 15, 15, 15, 10, 10, 10, 15, 10, 10], the call ``findLongest(10)`` should return 3, the length of the longest consecutive block of 10s.  Which of the following best describes the value returned by a call to ``findLongest``?

       .. code-block:: java
   
         private int[] nums;
         public int findLongest(int target)
         {
            int lenCount = 0;
            int maxLen = 0;

            for (int k = 0; k < nums.length; k++)
            {
              if (nums[k] == target)
              {
                lenCount++;
              }
              else
              {
                 if (lenCount > maxLen)
                 {
                    maxLen = lenCount;
                 }
              }
           }
           if (lenCount > maxLen)
           {
              maxLen = lenCount;
           }
           return maxLen;
         }
      
    .. mchoice:: pe2_17-11
       :answer_a: 4
       :answer_b: 3
       :answer_c: 16  
       :answer_d: 7
       :answer_e: 2
       :correct: e
       :feedback_a: This would be true if it was return (a[1] *= 2); 
       :feedback_b: This can't be true because a[1]--; means the same as a[1] = a[1] - 1; so the 3 changes to 2.  Parameters are all pass by value in Java which means that a copy of the value is passed to a method. But, since an array is an object a copy of the value is a copy of the reference to the object. So changes to objects in methods are permanent.
       :feedback_c: This would be true if it was return (a[0] *= 2);
       :feedback_d: This would be true if it was a[0]--;
       :feedback_e: The statement a[1]--; is the same as a[1] = a[1] - 1; so this will change to 3 to 2.  The return (a[1] * 2) does not change the value at a[1].  

       Given the following method declaration, and ``int[] a = {8, 3, 1}``, what is the value in ``a[1]`` after ``m1(a);`` is run?
   
       .. code-block:: java

         public static int m1(int[] a)
         {
            a[1]--;
            return (a[1] * 2);
         }
      
    .. mchoice:: pe2_18-4
       :answer_a: I and II only
       :answer_b: II only
       :answer_c: III only    
       :answer_d: I and III only
       :answer_e: I, II, and III  
       :correct: d
       :feedback_a: Choice II won't work since if you had a score of 94 it would first assign the grade to an "A" but then it would execute the next if and change the grade to a "B" and so on until the grade was set to a "C". This could have been fixed by using else if instead of just if.
       :feedback_b: Choice II won't work since if you had a score of 94 it would first assign the grade to an "A" but then it would execute the next if and change the grade to a "B" and so on until the grade was set to a "C". This could have been fixed by using else if instead of just if.
       :feedback_c: Choice III is one of the correct answers. However, choice I is also correct. Choice I uses multiple if's with logical ands in the conditions to check that the numbers are in range. Choice III uses ifs with else if to make sure that only one conditional is executed.
       :feedback_d: Choice I uses multiple if's with logical ands in the conditions to check that the numbers are in range. Choice Choice II won't work since if you had a score of 94 it would first assign the grade to an "A" but then it would execute the next if and change the grade to a "B" and so on until the grade was set to a "C". Choice III uses ifs with else if to make sure that only one conditional is executed.
       :feedback_e: Choice II won't work since if you had a score of 94 it would first assign the grade to an "A" but then it would execute the next if and change the grade to a "B" and so on until the grade was set to a "C". This could have been fixed by using else if instead of just if.

       At a certain high school students receive letter grades based on the following scale: 93 or above is an A, 84 to 92 inclusive is a B, 75 to 83 inclusive is a C, and below 75 is an F.  Which of the following code segments will assign the correct string to ``grade`` for a given integer score?
   
       .. code-block:: java
      
         I.   if (score >= 93)
                 grade = "A";
              if (score >= 84 && score <= 92)
                 grade = "B";
              if (score >= 75 && score <= 83)
                 grade = "C";
              if (score < 75)
                 grade = "F";

         II.  if (score >= 93)
                 grade = "A";
              if (score >= 84)
                 grade = "B";
              if (score >= 75)
                 grade = "C";
              if (score < 75)
                 grade = "F";

         III. if (score >= 93)
                 grade = "A";
              else if (score >= 84)
                 grade = "B";
              else if (score >= 75)
                 grade = "C";
              else
                 grade = "F";
    

    .. mchoice:: pe2_19-8
       :answer_b: minutes = minutes % 60;
       :answer_c: minutes = minutes + hours % 60; 
       :answer_d: hours = hours + minutes / 60; minutes = minutes % 60;
       :answer_e: hours = hours + minutes / 60;
       :correct: d
       :feedback_a: This will set hours to hours plus the remainder of dividing minutes by 60 and then set minutes to the number of hours (int division of minutes by 60).
       :feedback_b: This won't add to hour so it can't be correct. It will set minutes to the remainder of dividing minutes by 60 so minutes will be set correctly.
       :feedback_c: This will set the minutes to the minutes plus the remainder of dividing the hours by 60.
       :feedback_d: This will update the hours and minutes correctly. It will add the floor of the division of minutes by 60 to hours and then set minutes to the remainder of the division of minutes by 60.
       :feedback_e: This will correctly update the hours, but not update the minutes.

       Given the following incomplete class declaration, which of the following can be used to replace the missing code in the ``advance`` method so that it will correctly update the time?
   
       .. code-block:: java

         public class TimeRecord
         {
           private int hours;
           private int minutes; // 0<=minutes<60

           public TimeRecord(int h, int m)
           {
             hours = h;
             minutes = m;
           }

           // postcondition: returns the
           // number of hours
           public int getHours()
           { /* implementation not shown */ }

           // postcondition: returns the number
           // of minutes; 0 <= minutes < 60
           public int getMinutes()
           { /* implementation not shown */ }

           // precondition: h >= 0; m >= 0
           // postcondition: adds h hours and
           // m minutes to this TimeRecord
           public void advance(int h, int m)
           {
             hours = hours + h;
             minutes = minutes + m;
             /* missing code */
           }

           // ... other methods not shown
         }
     
    .. mchoice:: pe2_20-17
       :answer_a: AB
       :answer_b: ABCD
       :answer_c: ABDC
       :answer_d: ABC
       :answer_e: Nothing is printed due to infinite recursion.
       :correct: c
       :feedback_a: This would be true if the object was created of type Base using new Base. But the object is really a Derived object. So all methods are looked for starting with the Derived class.
       :feedback_b: After the call to methodOne in the super class printing "A", the code continues with the implicit this.methodTwo which resolves from the current object's class which is Derived. methodTwo in the Derived class is executed which then calls super.methodTwo which invokes printin "B" from methodTwo in the Base class. Then the "D" in the Derive methodTwo is printed. Finally the program returns to methodOne in the Derived class are prints "C".
       :feedback_c: Even though b is declared as type Base it is created as an object of the Derived class, so all methods to it will be resolved starting with the Derived class. So the methodOne() in Derived will be called. This method first calls super.methodOne so this will invoke the method in the superclass (which is Base). So next the methodOne in Base will execute. This prints the letter "A" and invokes this.methodTwo(). Since b is really a Derived object, we check there first to see if it has a methodTwo. It does, so execution continues in Derived's methodTwo. This method invokes super.methodTwo. So this will invoke the method in the super class (Base) named methodTwo. This method prints the letter "B" and then returns. Next the execution returns from the call to the super.methodTwo and prints the letter "D". We return to the Base class methodOne and return from that to the Derived class methodOne and print the letter "C".
       :feedback_d: The call to methodTwo in super.methodOne is to this.methodTwo which is the method from the Derived class. Consequently the "D" is also printed.
       :feedback_e: This is not an example of recursion. No method is called from within itself.

        Given the following class declarations, and assuming that the following declaration appears in a client program: ``Base b = new Derived();``, what is the result of the call ``b.methodOne();``?
   
        .. code-block:: java

         public class Base
         {
            public void methodOne()
            {
              System.out.print("A");
              methodTwo();
            }

            public void methodTwo()
            {
              System.out.print("B");
            }
         }

         public class Derived extends Base
         {
            public void methodOne()
            {
               super.methodOne();
               System.out.print("C");
            }

            public void methodTwo()
            {
              super.methodTwo();
              System.out.print("D");
            }
         }
     

