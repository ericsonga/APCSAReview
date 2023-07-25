.. qnum::
   :prefix: 13-4-
   :start: 1

.. highlight:: java
   :linenothreshold: 4


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

Practice Exam X
============================================================

.. This said for first half of exam but it includes inheritance and has a lot of errors.

The following  questions are similar to what you might see on the AP Exam.  Please answer each to the best of your ability.

Click the |start| button when you are ready to begin the exam, but only then as you can only take the exam once.  Click on the |next| button to go to the next question.  Click on the |prev| button to go to the previous question.  Use the number buttons to jump to a particular question.  Click the |pause| button to pause the exam (you will not be able to see the questions when the exam is paused).  Click on the |finish| button after you have answered all the questions.  The number correct, number wrong, and number skipped will be displayed.




.. timed:: practiceExamX
   :timelimit: 40

   .. mchoice:: mt1_3
      :answer_a: I only
      :answer_b: II only
      :answer_c: IV only
      :answer_d: II and III
      :answer_e: I, II, and III
      :correct: d
      :feedback_a: This implementation of ''addMinutes'' does not account for values of additionMinutes that push the minute count above 60.
      :feedback_b: Implementation II works, but implementation III also works.
      :feedback_c: Implementation IV does not work for situations where additionMinutes + minutes does not go above 60.
      :feedback_d: Correct!
      :feedback_e: Implementations II and III are correct, but implementation I is not. Implementation I does not account for values of additionMinutes that push the minute count above 60.

      Consider the following declaration for a class that will be used to represent points in time.  Which of these options correctly implement ''addMinutes()''?

      .. code-block:: java

         public class Timer
         {
            private int hours; // number of hours
            private int minutes; // 0 <= minutes < 60

            void addHours(int addition)
            {
               hours = hours + addition;
            }

            void addMinutes(int additionMinutes)
            {
               // implementation not shown
            }

            // ... other methods not shown

         }

        Proposed Implementations:

        I.   public void addMinutes(int additionMinutes)
             {
                minutes = minutes + additionMinutes;
             }

        II.  public void addMinutes(int additionMinutes)
             {
                minutes += additionMinutes;
                if (minutes >= 60)
                {
                   hours += (minutes / 60);
                   minutes = (minutes % 60);
                }
             }

        III. public void addMinutes(int additionMinutes)
             {
                minutes += additionMinutes;
                while(minutes >= 60)
                {
                   hours++;
                   minutes -= 60;
                }
             }

        IV.  public void addMinutes(int additionMinutes)
             {
                if (additionMinutes + minutes >= 60)
                {
                   minutes = additionMinutes + minutes - 60;
                   hours += 1;
                }
             }

   .. mchoice:: mt1_4
      :answer_a: int[] nums = [5];
      :answer_b: int[] nums;
      :answer_c: int[] nums = { 2, 4, 6, 8, 10 };
      :answer_d: int[] nums = new int[5];
      :correct: a
      :feedback_a: The left side is okay, but the right side is wrong.
      :feedback_b: This correctly declares an array of integers.
      :feedback_c: This correctly declares and initializes an array of five integers.
      :feedback_d: This declares nums to be an array of integers and creates the array.

      Which is NOT a correct way to declare an array of integers?


   .. mchoice:: mt1_7
      :answer_a: { 1, 2, 5, 4, 3 }
      :answer_b: { 1, 2, 5, 4, 5 }
      :answer_c: { 5, 4, 1, 2, 3 }
      :answer_d: { 1, 2, 4, 4, 3 }
      :answer_e: { 1, 4, 3, 2, 5 }
      :correct: a
      :feedback_a: Correct!
      :feedback_b: Incorrect. Remember that arrays are indexed from 0.
      :feedback_c: Incorrect, temp is used to hold the value from index 2 and that value is put in index 4.
      :feedback_d: Nums at index 2 is set to the value of nums at index 4, not just the value 4.
      :feedback_e: Incorrect. Remember that arrays are indexed from 0.

      What are the contents of nums after the following code is executed?

      .. code-block:: java

         int [] nums = { 1, 2, 3, 4, 5 };
         int temp = nums[2];
         nums[2] = nums[4];
         nums[4] = temp;

   .. mchoice:: mt1_8
      :answer_a: !(a && b)
      :answer_b: !a && b
      :answer_c: !a && !b
      :answer_d: a && b
      :answer_e: a || !b
      :correct: c
      :feedback_a: This would be true if a OR b are false using De Morgan's laws: !(a && b) = !a || !b.
      :feedback_b: If b was false, this option would be false.
      :feedback_c: Correct!
      :feedback_d: This will only be true only when both a and b are true.
      :feedback_e: This will only be true if a is true, or b is false.

      Which option will evaluate to true, if and only if both a and b are false?

   .. mchoice:: mt1_10
      :answer_a: Prints the string in reverse order
      :answer_b: Deletes the second half of the string
      :answer_c: Prints string normally
      :answer_d: Compile-time error occurs
      :answer_e: Prints alternating characters from beginning and end of the string.
      :correct: a
      :feedback_a: This method prints the reversed string.
      :feedback_b: Incorrect, this method prints the string reversed.
      :feedback_c: Incorrect, this method prints the string reversed.
      :feedback_d: Incorrect, this method prints the string reversed.
      :feedback_e: Incorrect, this method prints the string reversed.

      What does the function ``mystery`` do?

      .. code-block:: java

         public void mystery(String tester)
         {
           for (int i = tester.length() - 1; i >= 0; i--)
           {
               System.out.print(tester.charAt(i));
           }
           System.out.println("");
         }

   .. mchoice:: mt1_11
      :answer_a: "Hello World!"
      :answer_b: "Hello "
      :answer_c: "He"
      :answer_d: "HloWrd"
      :answer_e: "el ol!"
      :correct: d
      :feedback_a: The variable holds all characters that were stored at even indices for the original phrase.
      :feedback_b: The variable holds all characters that were stored at even indices for the original phrase.
      :feedback_c: The variable holds all characters that were stored at even indices for the original phrase.
      :feedback_d: Correct! The variable holds all characters that were stored at even indices for the original phrase.
      :feedback_e: The variable holds all characters that were stored at even indices for the original phrase.

      After the following code is executed, what does the variable mystery hold?

      .. code-block:: java

         public class mysterious
         {
             public static void main(String[] args)
             {
                 String mystery;
                 String starter = "Hello World!";
                 for (int i = 0; i < starter.length(); i++)
                 {
                     if (i % 2 == 0)
                     {
                         mystery += starter.charAt(i);
                     }
                 }
             }
         }

   .. mchoice:: mt1_12
      :answer_a: The value is the first one in the array
      :answer_b: The value is in the middle of the array
      :answer_c: The value is at position 3 in the array
      :answer_d: The value isn't in the array
      :answer_e: The value is at position 6 in the array
      :correct: d
      :feedback_a: This would be true for the shortest execution.  This would only take one execution of the loop.
      :feedback_b: This would take 5 executions of the loop.
      :feedback_c: This would take 3 executions of the loop.
      :feedback_d: A sequential search loops through the elements of an array starting with the first and ending with the last and returns from the loop as soon as it finds the passed value.  It has to check every value in the array when the value it is looking for is not in the array.  This would take 10 executions of the loop.
      :feedback_e: This would take 6 executions of the loop.

      Which will cause the longest execution of a sequential search looking for a value in an array of 10 integers?

   .. mchoice:: mt1_13
      :answer_a: IV
      :answer_b: V
      :answer_c: I and II
      :answer_d: I and III
      :answer_e: I only
      :correct: a
      :feedback_a: All of these are valid reasons to use an inheritance hierarchy.
      :feedback_b: In fact, all of the reasons listed are valid. Subclasses can reuse methods written for superclasses without code replication, subclasses can be stored in the same array, and passed as arguments to methods meant for the superclass.   All of which make writing code more streamlined.
      :feedback_c: III is also valid. In some cases you might want to store subclasses together in a single array, and inheritance allows for this.
      :feedback_d: II is also valid. In some cases a single method is applicable for a number of subclasses, and inheritance allows you to pass objects of the subclasses to the same method instead of writing individual methods for each subclass.
      :feedback_e: II and III are also valid, in some cases a single method is applicable for a number of subclasses, and inheritance allows you to pass all the subclasses to the same method instead of writing individual methods for each subclass and you might want to store subclasses together in a single array, and inheritance allows for this.

      Which of the following reasons for using an inheritance hierarchy are valid?

      .. code-block:: java

         I.   Methods from a superclass can be used in a subclass without rewriting or copying code.
         II.  An object from a subclass can be passed as an argument to a method that takes an object of the superclass
         III. Objects from subclasses can be stored in the same array
         IV.  All of the above
         V.   None of the above

   .. mchoice:: mt1_14
      :answer_a: 4
      :answer_b: 16
      :answer_c: 7
      :answer_d: 2
      :answer_e: 3
      :correct: d
      :feedback_a: This would be true if it was return(a[1]*= 2);.
      :feedback_b: This would be true if the return statement was return (a[0]*=2);.
      :feedback_c: This would be true if it was a[0]--;  Or it would be true if array indicies started at 1, but they start with 0.
      :feedback_d: The statement a[1]--; is the same as a[1] = a[1] - 1; so this will change the 3 to a 2.  The return (a[1] * 2) does not change the value at a[1].
      :feedback_e: This can't be true because a[1]--; means the same as a[1] = a[1] - 1;  So the 3 will become a 2.  Parameters are all pass by value in Java which means that a copy of the value is passed to a method.  But, since an array is an object a copy of the value is a copy of the reference to the object.  So changes to objects in methods are permanent.

      Consider the following method and if ``int[] a = {8, 3, 1}``, what is the value in ``a[1]`` after ``m1(a);`` is run?

      .. code-block:: java

         public int m1(int[] a)
         {
            a[1]--;
            return (a[1] * 2);
         }

   .. mchoice:: mt1_15
      :answer_a: a = 6 and b = 7
      :answer_b: a = 6 and b = 13
      :answer_c: a = 13 and b = 0
      :answer_d: a = 6 and b = 0
      :answer_e: a = 0 and b = 13
      :correct: c
      :feedback_a: This would be true if the loop stopped when i was equal to 6.
      :feedback_b: Actually i = 6 and t = 6 and a = 13 after the loop finishes.
      :feedback_c: The variable i loops from 1 to 6 <br>i = 1, t = 10, a = 4, b = 9<br>i = 2, t = 4, a  = 11, b =2<br>i = 3, t = 11, a = 5, b = 8<br>i = 4, t = 5, a = 12, b = 1<br>i = 5, t = 12, a = 6, b = 7<br>i = 6, t = 6, a = 13, b = 0
      :feedback_d: Actually i = 6 and t = 6 and b = 0 after the loop finishes.
      :feedback_e: No a = 13 and b = 0 after the loop finishes.

      What are the values of ``a`` and ``b`` after the ``for`` loop finishes?

      .. code-block:: java

         int a = 10, b = 3, t;
         for (int i = 1; i <= 6; i++)
         {
            t = a;
            a = i + b;
            b = t - i;
         }

   .. mchoice:: mt1_16
      :answer_a: hi there
      :answer_b: HI THERE
      :answer_c: Hi There
      :answer_d: null
      :answer_e: hI tHERE
      :correct: c
      :feedback_a: This would only be correct if we had s1 = s2; after s2.toLowerCase(); was executed.  Strings are immutable and so any change to a string returns a new string.
      :feedback_b: This would be correct if we had s1 = s3; after s3.toUpperCase(); was executed.  Strings are immutable and so any change to a string returns a new string.
      :feedback_c: Strings are immutable meaning that any changes to a string creates and returns a new string, so the string referred to by s1 does not change
      :feedback_d: This would be true if we had s1 = s4; after s4 = null; was executed.  Strings are immutable and so any changes to a string returns a new string.
      :feedback_e: Strings are immutable and so any changes to a string returns a new string.

      Consider the following code.  What string is referenced by ``s1`` after the code executes?

      .. code-block:: java

         String s1 = "Hi There";
         String s2 = s1;
         String s3 = s2;
         String s4 = s1;
         s2 = s2.toLowerCase();
         s3 = s3.toUpperCase();
         s4 = null;

   .. mchoice:: mt1_17
      :answer_a: 4
      :answer_b: 8
      :answer_c: 9
      :answer_d: 12
      :answer_e: 10
      :correct: b
      :feedback_a: This would be correct if the variable col was 0 because then it would add 1 + 1 + 1 + 1 which is 4.
      :feedback_b: The variable col is 2, so it adds 2 + 2 + 3 + 1 which is 8.
      :feedback_c: This would be correct if the variable col was 1 because then it would add 1 + 2 + 2 + 4 which is 9.
      :feedback_d: This would be correct if the variable col was 3 becuase then it would add 2 + 4 + 4 + 2 which is 12.
      :feedback_e: This would be true if we were adding the values in the 3rd row (row = 2) instead of the 3rd column.  This would be 1 + 2 + 3 + 4 which is 10.

      Consider the following code segment.  What value is in sum after this code executes?

      .. code-block:: java

          int[][] matrix = { {1,1,2,2},{1,2,2,4},{1,2,3,4},{1,4,1,2}};

          int sum = 0;
          int col = matrix[0].length - 2;
          for (int row = 0; row < 4; row++)
          {
             sum = sum + matrix[row][col];
          }

   .. mchoice:: mt1_18
      :answer_a: { { 2, 1, 1, 1 }, { 2, 2, 1, 1 }, { 2, 2, 2, 1 } }
      :answer_b: { { 2, 3, 3, 3 }, { 1, 2, 3, 3 }, { 1, 1, 2, 3 } }
      :answer_c: { { 2, 1, 1 }, { 2, 2, 1 }, { 2, 2, 2 }, { 2, 2, 2 } }
      :answer_d: { { 2, 3, 3 }, { 1, 2, 3 }, { 1, 1, 2 }, { 1, 1, 1 } }
      :answer_e: { { 1, 3, 3, 3 }, { 2, 1, 3, 3 }, { 2, 2, 1, 3 } }
      :correct: b
      :feedback_a: This would be true if it was filling mat with 1 if the row index is less than the column index, but it fills with a 3 in this case.
      :feedback_b: This will fill mat with 3 if the row index is less than the column index, 2 if the row index is equal to the column index, and a 1 if the row index is greater than the column index.
      :feedback_c: This would be true if it was int [][] mat = new int [4][3] and it filled the mat with 1 if the row index is less than the column index.
      :feedback_d: This would be true if it was int [][] mat = new int [4][3]. Remember that the first number is the number of rows.
      :feedback_e: This would be true if it filled the mat with 1 if the row and column indices are equal and 2 if the row index is greater than the column index.

      Consider the following code segment, what are the contents of mat after the code segment has executed?

      .. code-block:: java

         int [][] mat = new int [3][4];
         for (int row = 0; row < mat.length; row++)
         {
            for (int col = 0; col < mat[0].length; col++)
            {
               if (row < col)
                  mat[row][col] = 3;
               else if (row == col)
                  mat[row][col] = 2;
               else
                  mat[row][col] = 1;
            }
         }

   .. mchoice:: mt1_19
      :answer_a: The values don't matter, this will always cause an infinite loop.
      :answer_b: Whenever a has a value larger than temp.
      :answer_c: When all values in a are larger than temp.
      :answer_d: Whenever a includes a value equal to temp.
      :answer_e: Whenever a includes a value that is less than or equal to zero.
      :correct: e
      :feedback_a: An infinite loop will not always occur in this program segment.
      :feedback_b: Values larger then temp will not cause an infinite loop.
      :feedback_c: Values larger then temp will not cause an infinite loop.
      :feedback_d: Values equal to temp will not cause an infinite loop.
      :feedback_e: When a contains a value that is less than or equal to zero, then multiplying that value by 2 will never make the result larger than the temp value (which was set to some value > 0), so an infinite loop will occur.

      Assume that ``temp`` is an ``int`` variable initialized to be greater than zero and that ``a`` is an array of type ``int``.  Also, consider the following code segment.  Which of the following will cause an infinite loop?

      .. code-block:: java

         for ( int k = 0; k < a.length; k++ )
         {
            while ( a[k] < temp )
            {
               a[k] *= 2;
            }
         }


   .. mchoice:: mt1_20
      :answer_a: A
      :answer_b: B
      :answer_c: C
      :answer_d: D
      :answer_e: E
      :correct: c
      :feedback_a: This would be true if num1 and num2 were both greater than 0 and num1 was greater than num2.  However, num2 is less than 0.
      :feedback_b: This would be true if num1 and num2 were both greater than 0 and num1 was less than or equal to num2.  However, num2 is less than 0.
      :feedback_c: The first test is false since num2 is less than 0 and for a complex conditional joined with And (&&) to be true both expressions must be true.  Next, else if ((num2<0) || (num1<0)) is executed and this will be true since num2 is less than 0 and for a complex conditional joined with Or (||) only one of the expressions must be true for it to execute.
      :feedback_d: This will not happen since if num2 is less than 0 the previous conditional would be true ((num2<0) || (num1<0))).
      :feedback_e: This will not happen since if num2 is less than 0 the previous conditional would be true ((num2<0) || (num1<0))).

      Consider the following method.  What is the output from ``conditionTest(3,-2);``?

      .. code-block:: java

         public static void conditionTest(int num1, int num2)
         {
            if ((num1 > 0) && (num2 > 0)) 
            {
               if (num1 > num2)
                  System.out.println("A");
               else
                  System.out.println("B");
            }
            else if ((num2 < 0) || (num1 < 0)) 
            {
                System.out.println("C");
            }
            else if (num2 < 0) 
            {
               System.out.println("D");
            }
            else 
            {
               System.out.println("E");
            }
        }

.. controversial
   .. mchoice:: mt1_5
      :answer_a: numStudents
      :answer_b: numberOfStudentsInClass
      :answer_c: numberStudents
      :answer_d: numStud
      :answer_e: #students
      :correct: a
      :feedback_a: numStudents is brief, but still tells the user what the variable represents. Num is a common shortening of number and is allowed.
      :feedback_b: While this name gives the user information about what the variable represents, it is too long and therefore should be shorter.
      :feedback_c: Number is commonly abbreviated as num and should be abbreviated here.
      :feedback_d: Num is a satisfactory abbreviation of number, but stud is not a common enough abbreviation for student.
      :feedback_e: Variable names can start with '_', '$', or a letter, but not '#'.

      Which of the following is a good name for an integer variable that represents the number of students in a class?

   .. mchoice:: mt1_6
      :answer_a: class
      :answer_b: boolean
      :answer_c: String
      :answer_d: static
      :answer_e: void
      :correct: c
      :feedback_a: Class is a reserved keyword.  It is used to declare a class.
      :feedback_b: Boolean is a reserved keyword and a primitive data type.
      :feedback_c: Correct! All other options are reserved keywords in Java.
      :feedback_d: Static is a reserved keyword in Java.
      :feedback_e: Void is a reserved keyword in Java.

      Which of the following is NOT a reserved keyword in Java


.. This one is misleading.
..    .. mchoice:: mt1_2
      :answer_a: 0 3 6 9 12 15
      :answer_b: 0 1 2 3 4 5
      :answer_c: 1 4 7 10 13
      :answer_d: This code will not print anything.
      :answer_e: 0 3 6 9 12
      :correct: d
      :feedback_a: This would be true if this loop had the correct syntax on the print.
      :feedback_b: The conditional would only match multiples of three, and the program does not output anything due to incorrect syntax.
      :feedback_c: The conditional would only match multiples of three, and the program does not output anything due to incorrect syntax.
      :feedback_d: The syntax to output text is System.out.print(), so this code will cause a compiler error.
      :feedback_e: The program would also output 15, since the loop runs until x <= 15. However, the program does not output anything due to incorrect syntax.

      What will be printed after this code is executed?

      .. code-block:: java

        for (int i = 0; i <= 15; i++) {
           if (i % 3 == 0) {
               System.print(i + " ");
           }
        }
