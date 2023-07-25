.. qnum::
   :prefix: 13-3-
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

Practice Exam 3 for the AP CSA Exam
-------------------------------------

The following 20 questions are similar to what you might see on the AP CSA exam.  Please answer each to the best of your ability.

Click the |start| button when you are ready to begin the exam, but only then as you can only take the exam once.  Click on the |next| button to go to the next question.  Click on the |prev| button to go to the previous question.  Use the number buttons to jump to a particular question.  Click the |pause| button to pause the exam (you will not be able to see the questions when the exam is paused).  Click on the |finish| button after you have answered all the questions.  The number correct, number wrong, and number skipped will be displayed.

.. timed:: practiceexam3
    :timelimit: 45

    .. mchoice:: pe4_1
       :answer_a: All three are valid
       :answer_b: II only
       :answer_c: III only
       :answer_d: II and III
       :answer_e: None are valid
       :correct: d
       :feedback_a:  If there is not a call to super as the first line in a child class constructor then super() is automatically added.  However, this will cause a problem if the parent class does not have a no argument constructor.
       :feedback_b:  While II is valid so is another choice.
       :feedback_c:  While III is valid so is another choice.
       :feedback_d:  Since C1 has constructors that take just an int and just a String both of these are valid.
       :feedback_e:  C2 constructors can call C1 constructors using the super keyword.  In fact this call is automatically added to C2 constructors as the first line in any C2 constructor if it isn't there.

       Consider the following partial class definitions.  Which of the constructors shown below (I, II, and III) are valid for C2?

       .. code-block:: java

         public class C1 
         {
            private int num;
            private String name;

            public C1(int theNum) 
            {
               num = theNum;
            }

            public C1(String theName) 
            {
               name = theName;
            }
            // other methods not shown
         }

         public class C2 extends C1 
         {
         // methods not shown
         }

         Possible constructors
         I.   public C2 () { }
         II.  public C2 (int quan) {super (quan); }
         III. public C2 (String label) { super(label); }

    .. mchoice:: pe4_2
       :answer_a: x != y
       :answer_b: x == y
       :answer_c: true
       :answer_d: false
       :answer_e: x < y
       :correct: d
       :feedback_a: If we assume that x is not equal to y then the expression is (false && true) || (true && false) which is false.
       :feedback_b: If we assume that x == y is the same than using it in the full expression should return true.  But, if x is equal to y you would get (true && false) || (false && true) which is false.
       :feedback_c: How can this be true?  Remember that && requires both expressions to be true in order to return true.  You can think of (x==y && !(x==y)) as A && !A which is always false.   You can think of ( x!=y && !(x!=y) as B && !B which is always false.
       :feedback_d: This can be simplified to (A && !A) || (B && !B) which is (false || false) which is false.  You can think of (x==y && !(x==y)) as A && !A which is always false.   You can think of ( x!=y && !(x!=y) as B && !B which is always false.
       :feedback_e: Since this expression is only about equality how could this be true?

       The Boolean expression (x==y && !(x==y)) || ( x!=y && !(x!=y)) can be simplified to which of the following?

    .. mchoice:: pe4_3
       :answer_a: if (a[savedIndex] > a[j]) { j = savedIndex; }
       :answer_b: if (a[j] > a[savedIndex]) { savedIndex = j;}
       :answer_c: if (a[j] < a[savedIndex]) { savedIndex = j; }
       :answer_d: if (a[j] > a[savedIndex]) { j = savedIndex;}
       :answer_e: if (a[j] == a[savedIndex]) { savedIndex = j; }
       :correct: b
       :feedback_a: Should j be set to the savedIndex?
       :feedback_b: This is a selection sort that is starting at end of the array and finding the largest value in the rest of the array and swapping it with the current index.
       :feedback_c: This would be correct if this was starting at index 0 and finding the smallest item in the rest of the array, but this starts at the end of the array instead and finds the largest value in the rest of the array.
       :feedback_d: Should j be set to the savedIndex?
       :feedback_e: Why would you want to change the savedIndex if the values are the same?

       Which of the following could be used to replace the missing code so that the method sort will sort the array a in ascending order?

       .. code-block:: java

         public static void sort(int[] a) 
         {
            int maxCompare = a.length - 1;
            int savedIndex = 0;
            int numSteps = 0;
            int temp = 0;

            for (int i = maxCompare; i > 0; i--) 
            {
               savedIndex = i;

               for (int j = i - 1; j >= 0; j--) 
               {
                 /* missing code */
               }

              temp = a[i];
              a[i] = a[savedIndex];
              a[savedIndex] = temp;
            }
         }

    .. mchoice:: pe4_5
       :answer_a: { {4, -5, 6},{-1, -2, 3}}
       :answer_b: { {4, 5, 6},{1, 2, 3}}
       :answer_c: { {1, 2, 3},{4, 5, 6}}
       :answer_d: { {-1, -2, 3},{4, -5, 6}}
       :answer_e: { {1, -2, 3},{4, 5, 6}}
       :correct: e
       :feedback_a: How did the values in row1 change to those in row2 and vice versa?  Why didn't any value change to the absolute value?
       :feedback_b: How did the values in row1 change to those in row2 and vice versa?
       :feedback_c: This would be true if all the matrix values were changed to their absolute value.  But, this only happens when the row and column index are the same.
       :feedback_d:  This would be true if none of the values in the matrix were changed.  But, this will change the value to the absolute value when the row and column index are the same.
       :feedback_e: This only changes the value in the matrix if the row and column index are the same.  So this changes the values at (0,0) and (1,1).

       Consider the following declarations.  If matrix is initialized to be: { {-1, -2, 3},{4, -5, 6}}.  What will the values in matrix be after changeMatrix(matrix) is called?

       .. code-block:: java

         int[][] matrix = new int[2][3];

         public static void changeMatrix(int[][] matrix )
         {
            for (int row = 0; row < matrix.length; row++)
               for(int col = 0; col < matrix[row].length; col++)
                  if(row==col)
                     matrix[row][col] = Math.abs(matrix[row][col]);
         }

    .. mchoice:: pe4_6
       :answer_a: a = 4 and b = 3
       :answer_b: a = 7 and b = 0
       :answer_c: a = 2 and b = -2
       :answer_d: a = 5 and b = 2
       :answer_e: a = 9 and b = 2
       :correct: b
       :feedback_a: This would be true if the for loop stopped when i was equal to 4.
       :feedback_b: Here are the values of a and b at the end of each loop: i=1, a=3, b=4; i=2, a=6, b=3; i=3, a=4, b=3; i=4; a=7; b=0;
       :feedback_c: Go back and check your values each time through the loop.
       :feedback_d: This would be true if the loop stopped when i was equal to 6, but it stops when i is equal to 5.
       :feedback_e: Keep a table of the variables and their values each time through the loop.

       What are the values of a and b after the for loop finishes?

       .. code-block:: java

         int a = 5, b = 2, temp;

         for (int i=1; i<=4; i++)
         {
            temp = a;
            a = i + b;
            b = temp – i;
         }

    .. mchoice:: pe4_7
       :answer_a: 243
       :answer_b: 0
       :answer_c: 3
       :answer_d: 81
       :answer_e: 27
       :correct: d
       :feedback_a: This would be true if it was mystery(5).
       :feedback_b: How can this be?  The value 0 is never returned.
       :feedback_c: Did you notice the recursive call?
       :feedback_d: This is the same as 3 to the 4th power (3 * 3 * 3 * 3 = 81).
       :feedback_e: This would be true if it was mystery(3).

       Condsider the following method.  What value is returned from a call of mystery(4)?

       .. code-block:: java

         public static int mystery(int n)
         {
            if (n == 0)
               return 1;
            else
               return 3 * mystery (n - 1);
         }

    .. mchoice:: pe4_8
       :answer_a: {3,6,8,5,1}, {3,5,6,8,1}, {1,3,5,6,8}
       :answer_b: {1,3,8,5,6}, {1,3,8,5,6}, {1,3,5,8,6}, {1,3,5,6,8}
       :answer_c: {3,6,8,5,1}, {3,6,8,5,1}, {3,5,6,8,1}, {1,3,5,6,8}
       :answer_d: {1,3,8,5,6}, {1,3,5,8,6}, {1,3,5,6,8}
       :answer_e: {1,6,3,8,5}, {1,3,6,8,5}, {1,3,5,6,8}
       :correct: c
       :feedback_a: This is almost right, but there should be 4 of these steps.
       :feedback_b: This is selection sort, not insertion.   Selection will find the smallest and swap it with the first element in the array.
       :feedback_c: An insertion sort will skip the first position and then loop inserting the next item into the correct place in the sorted elements to the left of the current item.
       :feedback_d: This is selection sort, not insertion and it is also an incorrect selection sort since it skips one step.
       :feedback_e: This doesn't match selection, insertion, or merge sort.

       Which of the following correctly shows the iterations of an ascending (from left to right) insertion sort on an array with the following elements: {6,3,8,5,1}?

    .. mchoice:: pe4_9
       :answer_a: 21
       :answer_b: 18
       :answer_c: 32
       :answer_d: 28
       :answer_e: 10
       :correct: a
       :feedback_a: The general formula for the number times a loop executes is the last value - the first value  + 1.  The outer loop will execute 3 times (2-0+1) and the inner loop will execute 7 times (7-1+1) so the total is 3 * 7 = 21.
       :feedback_b: This would be true if the inner loop stopped when j equals 7.
       :feedback_c: This would be true if the outer loop executed 4 times and the inner loop 8, but is that right?
       :feedback_d: This would be true if the outer loop executed 4 times, but is that right?
       :feedback_e: This would be true if you added the number of times the outer loop executes and the number of times the inner loop executes, but you multiply them.

       Consider the following code segment.  How many times will a * be printed?

       .. code-block:: java

         for(int i = 0; i < 3; i++)
         {
            for(int j = 1; j <= 7; j++)
               System.out.println("*");
         }


    .. mchoice:: pe4_10
       :answer_a: A
       :answer_b: B
       :answer_c: C
       :answer_d: D
       :answer_e: E
       :correct: e
       :feedback_a: This will only print if both num1 and num2 are greater than 0 and num1 is greater than num2.
       :feedback_b: This will only print if both num1 and num2 are greater than 0 and num1 is equal to or less than num2.
       :feedback_c: This will only print if both num1 and num2 are less than 0.
       :feedback_d: This will only print if num2 is less than 0 and num1 is greater than or equal to 0.
       :feedback_e: The first test will fail since num1 is less than 0, the second test will fail since num2 is greater than 0, the third test will also fail since num2 is greater than 0, which leads to the else being executed.

       Consider the following method.   What is the output from conditionTest(-3,2)?

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
            else if ((num2 < 0) && (num1 < 0)) 
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

    .. mchoice:: pe4_11
       :answer_a: hi there
       :answer_b: HI THERE
       :answer_c: Hi There
       :answer_d: null
       :answer_e: hI tHERE
       :correct: c
       :feedback_a: This would be true if we asked what the value of s3 was.
       :feedback_b: This would be true if we asked what the value of s2 was.
       :feedback_c: Strings are immutable in Java which means they never change.  Any method that looks like it changes a string returns a new string object.  Since s1 was never changed to refer to a different string it stays the same.
       :feedback_d: This would be true if we asked what the value of s4 was.
       :feedback_e: How could this have happened?

       What is value of s1 after the code below executes?

       .. code-block:: java

         String s1 = "Hi There";
         String s2 = s1;
         String s3 = s2;
         String s4 = s1;
         s2 = s2.toUpperCase();
         s3 = s3.toLowerCase();
         s4 = null;


    .. mchoice:: pe4_12
       :answer_a: mp
       :answer_b: mpu
       :answer_c: mpur
       :answer_d: omp
       :answer_e: om
       :correct: b
       :feedback_a: A substring of (0,3) will have 3 characters in it (index 0, index 1, and index 2).
       :feedback_b: Remember that substring with two numbers starts at the first index and ends before the second.  So s1 = Computer, s2 = mputer, s3 = mpu
       :feedback_c: A substring of (0,3) will have 3 characters in it (index 0, index 1, and index 2).
       :feedback_d: Remember that the first character in a string object is at index 0.
       :feedback_e: A substring of (0,3) will have 3 characters in it (index 0, index 1, and index 2).

       What is the output from the following code?

       .. code-block:: java

         String s = "Computer Science is fun!";
         String s1 = s.substring(0,8);
         String s2 = s1.substring(2);
         String s3 = s2.substring(0,3);
         System.out.println(s3);


    .. mchoice:: pe4_13
       :answer_a: Book b = new Book();
       :answer_b: Dictionary d = new Book();
       :answer_c: Book b = new Dictionary();
       :correct: b
       :feedback_a: A object can always be declared to be of the type of the class that creates it.
       :feedback_b: The declared type must the the type of the class that creates the object or the type of any parent class.   Dictionary is not a parent of the Book class.
       :feedback_c: The declared type can be the actual type (the class that creates the object) or any parent of the actual type.

       Given the following class declarations, which declaration below will result in a compiler error?

       .. code-block:: java

         public class Book
         {
             // code for class
         }

         public class Dictionary extends Book
         {
             // code for class
         }

    .. mchoice:: pe4_14
       :answer_a: 2
       :answer_b: 5
       :answer_c: 1
       :answer_d: 4
       :answer_e: 0
       :correct: b
       :feedback_a: This would be true if the recursion stopped when you first the first non "x", but is that what happens?
       :feedback_b: This returns the number of "x"'s it finds in the str.
       :feedback_c: Did you notice the recursive calls?
       :feedback_d: How does it miss one "x"?
       :feedback_e: Since the first character is "x" how can this be true?

       What will the method below return when called with mystery("xxzxyxx")?

       .. code-block:: java

         public static int mystery(String str)
         {
            if (str.length() == 0) 
                return 0;
            else
            {
               if (str.substring(0,1).equals("x")) 
                   return 1 + mystery(str.substring(1));
               else 
                   return mystery(str.substring(1));
            }
         }


    .. mchoice:: pe4_15
       :answer_a: The value is the first one in the array
       :answer_b: The value is in the middle of the array
       :answer_c: The value is at index 1 in the array
       :answer_d: The value isn’t in the array
       :answer_e: The value is at index 6 in the array
       :correct: d
       :feedback_a: This could take a long time, but there is an answer that takes longer.
       :feedback_b: This would be true if we were looking for the shortest execution of a binary search
       :feedback_c: This would be the second value checked if the value at the middle is greater than the desired value.
       :feedback_d: This will always take the longest when you are doing binary search.
       :feedback_e: This would be the second value checked if the value at the middle is less than the desired value.

       Which will cause the longest execution of a binary search looking for a value in an array of 9 integers?

    .. mchoice:: pe4_16
       :answer_a: Awk Awk Awk Awk Awk
       :answer_b: This won’t compile
       :answer_c: Meow Moo Woof Oink Tweet
       :answer_d: Meow Moo Woof Oink Awk
       :answer_e: Meow Moo Woof Awk Awk
       :correct: e
       :feedback_a: This would be true if none of the children classes overrode the speak method, but many do.
       :feedback_b: It is always okay to substitute a child object for a parent object.
       :feedback_c: This would be true if Pig had a speak method that returned "Oink" and Bird had a speak method that returned "Tweet", but they do not.  The inherited speak method will be called in Animal.
       :feedback_d: This would be true if Pig had a speak method that returned "Oink", but it does not.
       :feedback_e: Both Pig and Bird do not have a speak method so the one in Animal will be used.

       Given the following array declaration and the fact that Animal is the parent class for Bird, Dog, Pig, Cat, and Cow, what is output from looping through this array of animals and asking each object to speak()?

       .. code-block:: java

          Animal[] a = { new Cat(), new Cow(), new Dog(), new Pig(), new Bird() }

          Animal that has a method speak() which returns "Awk".
          Bird doesn’t have a speak method
          Dog has a speak method that returns "Woof"
          Pig doesn’t have a speak method
          Cow has a speak method that returns "Moo"
          Cat has a speak method that returns "Meow"


    .. mchoice:: pe4_17
       :answer_a: 4 in base 8
       :answer_b: 4 in base 16
       :answer_c: 00001100 in base 2
       :answer_d: 00000010 in base 2
       :answer_e: 4 in base 10
       :correct: c
       :feedback_a: You can't just subtract the two numbers since they are in different bases.  Convert both to decimal first.
       :feedback_b: You can't just subtract the two numbers since they are in different bases.  Convert both to decimal first.
       :feedback_c: 17 in base 16 is 23 in base 10.  13 in base 8 is 11 in base 10.  The answer is 12 in base 10 which is 00001100 in base 2.
       :feedback_d: This is 2 in base 10.  Convert both numbers to decimal and then convert the answer to binary.
       :feedback_e: You can't just subtract the two numbers since they are in different bases.  Convert both to decimal first.

       What is the result of 17 (in base 16) - 13 (in base 8)?

    .. mchoice:: pe4_18
       :answer_a: s={3, 8}; b=4;
       :answer_b: s={3, 4}; b=4;
       :answer_c: s={6, 4}; b=4;
       :answer_d: s={3, 8}; b=8;
       :answer_e: s={6, 8}; b=8;
       :correct: a
       :feedback_a: The value of a[1] will be doubled since passing a copy of the value of s is a copy of the reference to the array.  The value in b won't change since y will be set to a copy of b's value which is just a number.
       :feedback_b: What about a[1] = a[1] * 2?
       :feedback_c: Remember that the first index in an array is index 0.  This code will double the second value in the array (the one at index 1).
       :feedback_d: Java passes arguments by creating a copy of the current value so the value of b won't be affected by changes to y.
       :feedback_e: Java passes arguments by creating a copy of the current value so the value of b won't be affected by changes to y.

       Consider the following method and code.  What are the values of s and b after the following has executed?

       .. code-block:: java

         public static void test(int[] a, int y)
         {
            if (a.length > 1)
               a[1] = a[1] * 2;
            y = y * 2;
         }

         int[] s = {3,4};
         int b = 4;
         test(s,b);

    .. mchoice:: pe4_19
       :answer_a: I only
       :answer_b: II only
       :answer_c: III only
       :answer_d: I and II only
       :answer_e: I, II, and III
       :correct: d
       :feedback_a: This is true, but at least one other thing is true as well.
       :feedback_b: This is true, but at least one other thing is true as well.
       :feedback_c: Selection sort always takes the same amount of time to execute.
       :feedback_d: Mergesort does use recursion (has a method that calls itself).  Insertion sort does take longer to execute when the items to be sorted are in ascending order and you want them in descending order.
       :feedback_e: Selection sort always takes the same amount of time to execute.

       Which of the following is (are) true?

       .. code-block:: java

         I.  Insertion sort takes longer when the array is sorted in ascending order and
             you want it sorted in descending order.
         II.  Mergesort uses recursion.
         III.  Selection sort takes less time to execute if the array is already sorted
               in the correct order.


    .. mchoice:: pe4_20
       :answer_a: 1
       :answer_b: 2
       :answer_c: 3
       :answer_d: 4
       :answer_e: 5
       :feedback_a: No, the method is recursive and in the first call it will compare 3 to 5 and then do mystery(3,4,5).
       :feedback_b: There are two calls: mystery(0, 4, 5) and mystery(3, 4, 5).
       :feedback_c: This would be true if it was mystery(0, 4, 7);
       :feedback_d: This would be true if we were looking for a number that isn't in the array.
       :feedback_e: At most this will take log base 2 of the size of the array plus one to determine that the desired value isn't in the array.
       :correct: b

       Given the following code, how many calls to mystery are made (including the first call) when mystery(0, 4, 5) is executed when arr = {1, 2, 3, 5, 7}?

       .. code-block:: java

         private int[] arr;

         public int mystery(int low, int high, int num) 
         {

            int mid = (low+high) / 2;

            if (low > high) 
            {
               return -1;
            }
            else if (arr[mid] < num) 
            {
               return mystery(mid +1, high, num);
            }
            else if (arr[mid] > num) 
            {
               return mystery(low, mid - 1, num);
            }
            else
               return mid;
         }
