.. qnum::
   :prefix: 13-1-
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

Practice Exam 1 for the AP CSA Exam
-------------------------------------

The following 20 questions are similar to what you might see on the AP CSA exam.  Please answer each to the best of your ability.

Click the |start| button when you are ready to begin the exam, but only then as you can only take the exam once.  Click on the |next| button to go to the next question.  Click on the |prev| button to go to the previous question.  Use the number buttons to jump to a particular question.  Click the |pause| button to pause the exam (you will not be able to see the questions when the exam is paused).  Click on the |finish| button after you have answered all the questions.  The number correct, number wrong, and number skipped will be displayed.

.. timed:: practiceexam1
   :timelimit: 45

   .. mchoice:: pe1_1
      :answer_a: 50
      :answer_b: 20
      :answer_c: 60
      :answer_d: 10
      :answer_e: 30
      :correct: a
      :feedback_a: This is a recursive method.  It will return 10 when a is equal to 1, otherwise it will do a recursive call.  Each call adds 10.
      :feedback_b: This would be true if the call was m(2).
      :feedback_c: This would be true if the call was m(6).
      :feedback_d: This would be true if the call was m(1).
      :feedback_e: This would be true if the call was m(3).

      Given the following method.  What is the output when ``m1(5)`` is called?

      .. code-block:: java

        public int m1 (int a)
        {
           if (a == 1)
              return 10;
           else
              return 10 + m1 (a – 1);
        }


   .. mchoice:: pe1_2
      :answer_a: 1 2 3 2 4 6
      :answer_b: 1 2 3 2 4 6 3 6 9
      :answer_c: 1 2 2 4 3 6
      :answer_d: 1 2 3 4 2 4 6 8 3 6 9 12
      :answer_e: 0 1 2 3 0 2 4 6 0 3 6 9
      :correct: b
      :feedback_a: This would be true if it was j < 3.
      :feedback_b: The variable j will range from 1 to 3 and k will range from 1 to 3.
      :feedback_c: This would be true if it was k <= 3.
      :feedback_d: This would be true if it was k <= 4.
      :feedback_e: This would be true if k started at 0 instead of 1.

      What will the following code print when it is executed?

      .. code-block:: java

        for (int j = 1; j <= 3; j++) 
        {
           for (int k = 1; k < 4; k++)
              System.out.print(j * k + " ");
        }

   .. mchoice:: pe1_3
      :answer_a: 128
      :answer_b: 256
      :answer_c: 64
      :answer_d: 2
      :answer_e: 1
      :correct: a
      :feedback_a: This is the result of mystery(7) since this method is 2 to the nth power.
      :feedback_b: This would be the result of mystery(8).
      :feedback_c: This would be the result of mystery(6).
      :feedback_d: This would be the result of mystery(1).
      :feedback_e: This would be the result of mystery(0).

      What value is returned as the result of ``mystery(7)``?

      .. code-block:: java

        public int mystery(int n)
        {
           if (n == 0) 
               return 1;
           else 
               return 2 * mystery (n - 1);
        }


   .. mchoice:: pe1_4
      :answer_a: I and II only
      :answer_b: I, II, III, and V
      :answer_c: All will return true
      :answer_d: I, II, and III only
      :answer_e: III, IV, and V only
      :correct: b
      :feedback_a: How about III and V?  Since int3 was set to int2 they do refer to the same object.
      :feedback_b: The variables int1 and int2 refer to two different objects (even though they have the same value) so IV will be false.
      :feedback_c: Look at IV.  Are int1 and int2 referring to the same object?
      :feedback_d: V is also true.
      :feedback_e: I and II are also true since they have the same value.  IV is not since they don't refere to the same object.

      Given the following code.  Which of the following would return true?

      .. code-block:: java

        Integer int1 = new Integer(3);
        Integer int2 = new Integer(3);
        Integer int3 = int2;

        I. (int3.equals(int2))
        II. (int1.equals(int2))
        III. (int3 == int2)
        IV. (int1 == int2)
        V. (int2 == int3)

   .. mchoice:: pe1_5
      :answer_a: The search value is not in the array
      :answer_b: The search value is the last element in the array
      :answer_c: The value is in the middle of the array.
      :answer_d: The search value is the first element in the array.
      :answer_e: Sequential search can never be faster than binary search.
      :correct: d
      :feedback_a: If the search value is not in the array, a sequential search will have to check every item in the array before failing, a binary search will be faster.
      :feedback_b: In this case a sequential search will have to check every element before finding the correct one, whereas a binary search will not.
      :feedback_c: This would be true for a binary search, not for a sequential search.
      :feedback_d: Only when the search value is the first item in the array, and thus the first value encountered in sequential search, will sequential be faster than binary.
      :feedback_e: When the search value is the first element, sequential will always be faster, as it will only need to check one element whereas a binary search would start in the middle of the array and have to keep looking.

      Under which of these conditions will a sequential search be faster than a binary search?

   .. mchoice:: pe1_6
      :answer_a: Data set 1 since it has more test cases.
      :answer_b: Data set 2 since it only contains strings with lower case characters.
      :answer_c: There are no advantages.
      :answer_d: Data set 1 since it has test cases with both upper and lower case characters.
      :answer_e: Data set 2 since it contains strings which should return true and should return false.
      :correct: e
      :feedback_a: More test cases isn't necessarily better.  The tests should test the range of possible outcomes.
      :feedback_b: It is actually better to test with strings that contain both upper and lower case characters.
      :feedback_c: Data set 1 only contains cases that should return true.  How about checking cases that should return false?
      :feedback_d: There is a better answer.  While it is good to test with strings that contain both upper and lower case characters there is another reason why data set 2 is better.
      :feedback_e: You want to test all possible results and data set 1 only contains strings that should return true.

      There is a method called ``checkString`` that determines whether a string is the same forwards and backwards. The following data sets can be used for testing the method.  Which is a best set of test cases?

      .. code-block:: java

         Data set 1: "aba", "abba", "aBa", "z"
         Data set 2: "bcb", "bcd", "c"



   .. mchoice:: pe1_7
      :answer_a: I
      :answer_b: II
      :answer_c: III
      :answer_d: IV
      :answer_e: V
      :correct: c
      :feedback_a: This will loop i from 0 to 4 and from j from 0 to i.  So, it won't output any 5s.
      :feedback_b: This will loop with i changing from 1 to 4 and j from i to 0.
      :feedback_c: This will loop with i changing from 1 to 5 and then for each I, j will loop from i to 0 printing the value of i and then a new line.
      :feedback_d: This will loop with i changing from 1 to 5 and j from 0 to i but it will print each value on a different line.
      :feedback_e: This will loop with i changing from 0 to 4 and j from 0 to i

      Which of the following code will produce this output:

      .. code-block:: java

         1
         22
         333
         4444
         55555

         I.

         for (int i = 0; i < 5; i++) 
         {
            for (int j = 0; j < i; j++) 
            {
               System.out.print(i);
            }
            System.out.println();
         }

         II.

         for (int i = 1; i < 5; i++) 
         {
            for (int j = i; j > 0; j--) 
            {
               System.out.print(i);
            }
            System.out.println();
         }

         III.

         for (int i  = 1; i <= 5; i++) 
         {
            for (int j = i; j > 0; j--) 
            {
               System.out.print(i);
            }
            System.out.println();
         }

         IV.

         for (int i = 1; i < 6; i++) 
         {
            for (int j = 0; j < i; j++) 
            {
               System.out.println(i);
            }
         }

         V.

         for (int i = 0; i < 5; i++) 
         {
            for (int j = 0; j < i; j++) 
            {
               System.out.print(i+1);
            }
            System.out.println();
         }

   .. mchoice:: pe1_8
      :answer_a: [0, 1, 2, 3, 4, 5]
      :answer_b: [0, 1, 2, 4, 5]
      :answer_c: [5, 4, 1, 0]
      :answer_d: [5, 4, 2, 1, 0]
      :answer_e: [5, 4, 1, 2, 0]
      :correct: e
      :feedback_a: This code does not sort the items in the list and set replaces the value at that index.
      :feedback_b: This code does not sort the items in the list.
      :feedback_c: There is only one set. The add moves all current values at the index and above to the right one before adding at that index.
      :feedback_d: The add moves over all items at that index before adding the value at the index.
      :feedback_e: The add method with one parameters will add that value to end of the list.  The method set changes the value at that index in the list.  The method add with an index will move anything at the index or above one to the right and then set the value of that index.

      What will the following print?

      .. code-block:: java

         List<Integer> list1 = new ArrayList<Integer>();
         list1.add(new Integer(5));
         list1.add(new Integer(4));
         list1.add(new Integer(3));
         list1.set(2, new Integer(2));
         list1.add(2, new Integer(1));
         list1.add(new Integer(0));
         System.out.println(list1);

   .. mchoice:: pe1_9
      :answer_a: I and III
      :answer_b: I only
      :answer_c: II only
      :answer_d: III only
      :answer_e: I and II
      :correct: a
      :feedback_a:  NamedPoint will inherit from Point all fields but the fields are private and they can not be directly accessed in NamedPoint.  You can use super as the first line in a constructor to initialize inherited fields.  You can also set your own fields in a constructor.  If you don't use super as the first line in a constructor one will be put there by the compiler that will call the parent's no argument constructor.
      :feedback_b: I is okay but III is also okay.
      :feedback_c: II is invalid.  Children inherit all of the fields from a parent but do not have direct access to private fields.  You can use super in a constructor to initialize inherited fields by calling the parent's constructor with the same parameter list.
      :feedback_d: I is also okay
      :feedback_e: I is okay but II is invalid.  Children inherit all of the fields from a parent but do not have direct access to private fields.  You can use super in a constructor to initialize inherited fields by calling the parent's constructor with the same parameter list.

      Consider the following declaration for a class that will be used to represent points in the xy-coordinate plane.  Which of these constructors would be legal for the NamedPoint class?

      .. code-block:: java

         public class Point
         {
            private int myX; // coordinates
            private int myY;

            public Point( )
            {
               myX = 0;
               myY = 0;
            }

            public Point(int a, int b)
            {
               myX = a;
               myY = b;
            }

            // ... other methods not shown

         }

         // The following incomplete class declaration is intended to extend the
         // above class so that two-dimensional points can be named.

         public class NamedPoint extends Point
         {
            private String myName;
            // constructors go here
            // ... other methods not shown
         }

        Proposed Constructors:

        I.   public NamedPoint()
             {
                myName = "";
             }
        II.  public NamedPoint(int d1, int d2, String name)
             {
                myX = d1;
                myY = d2;
                myName = name;
             }
        III. public NamedPoint(int d1, int d2, String name)
             {
                super(d1, d2);
                myName = name;
             }

   .. mchoice:: pe1_10
      :answer_a: I
      :answer_b: II
      :answer_c: III
      :answer_d: IV
      :answer_e: V
      :correct: a
      :feedback_a: This will add each current time card hours and minutes to the total.
      :feedback_b: This won't total the hours and minutes and there is no advance method that takes no arguments.
      :feedback_c: There is no advance method that takes no arguments and it doesn't return a value to add to a total.
      :feedback_d: The fields hours and minutes are private and can't be accessed directly in another class.
      :feedback_e: This will add the hour and minutes from the current time record to itself.

      Given the following incomplete class declaration:

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

            // postcondition: returns the number of hours
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

         // Consider the following declaration that appears in a client program:

         TimeRecord[] timeCards = new TimeRecord[100];


        // Assume that timeCards has been initialized with TimeRecord
        // objects. Consider the following code segment that is intended to compute
        // the total of all the times stored in timeCards.

         TimeRecord total = new TimeRecord(0,0);
         for (int k = 0; k < timeCards.length; k++)
         {
            /* missing expression */
         }

         Which of the following can be used to replace /* missing expression */ so that the code segment will work as intended?

         I.
            total.advance(timeCards[k].getHours(), timeCards[k].getMinutes());

         II.
            timeCards[k].advance();

         III.
            total += timeCards[k].advance();

         IV.
            total.advance(timeCards[k].hours, timeCards[k].minutes);

         V.
            timeCards[k].advance(timeCards[k].getHours(), timeCards[k].getMinutes());

   .. mchoice:: pe1_11
      :answer_a: I
      :answer_b: II
      :answer_c: III
      :answer_d: IV
      :answer_e: V
      :correct: e
      :feedback_a: There is no parent constructor which takes all three of these parameters.
      :feedback_b: You can not access private inherited fields directly.  You can either use public method to get and set their values or invoke the parent's constructor using super(paramList) as the first line of code in a constructor.
      :feedback_c: You can not access private inherited fields directly.  You can either use public method to get and set their values or invoke the parent's constructor using super(paramList) as the first line of code in a constructor.
      :feedback_d: You can not access private inherited fields directly.  You can either use public method to get and set their values or invoke the parent's constructor using super(paramList) as the first line of code in a constructor.
      :feedback_e: To initialize inherited private fields you can use the parent's constructor.  Use super followed by the parameter list as the first line of code in the constructor.

      Consider the following class definitions, which of the following can replace the missing code?

      .. code-block:: java

         public class ContactInfo
         {
            private String name;
            private String phoneNumber;

            public ContactInfo(String theName, String thePhoneNumber)
            {
               this.name = theName;
               this.phoneNumber = thePhoneNumber;
            }

            public String getName() { return name; }

            public String getPhoneNumber() { return phoneNumber; }
         }

         public class ExtendedContactInfo extends ContactInfo
         {
            private String nickname;

            public ExtendedContactInfo (String theNickname,
                                        String theName,
                                        String thePhoneNumber)
            {
               // missing code
            }
         }

         I.
            super(theNickname, theName, thePhoneNumber);

         II.
            this.name = theName;
            this.phoneNumber = thePhoneNumber;
            this.nickname = theNickname;

         III.
            this.nickname = theNickname;
            this.name = theName;
            this.phoneNumber = thePhoneNumber;

         IV.
            this.nickname = theNickname;
            this.name = theName;
            this.phoneNumber = thePhoneNumber;

         V.
            super(theName,thePhoneNumber);
            this.nickname = theNickname;

   .. mchoice:: pe1_12
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

   .. mchoice:: pe1_13
      :answer_a: IV
      :answer_b: V
      :answer_c: I and II
      :answer_d: I and III
      :answer_e: I only
      :correct: a
      :feedback_a: All of these are valid reasons to use an inheritance heirarchy.
      :feedback_b: In fact, all of the reasons listed are valid. Subclasses can reuse methods written for superclasses without code replication, subclasses can be stored in the same array, and passed as arguments to methods meant for the superclass.   All of which make writing code more streamlined.
      :feedback_c: III is also valid. In some cases you might want to store subclasses together in a single array, and inheritance allows for this.
      :feedback_d: II is also valid. In some cases a single method is applicable for a number of subclasses, and inheritance allows you to pass objects of the subclasses to the same method instead of writing individual methods for each subclass.
      :feedback_e: II and III are also valid, in some cases a single method is applicable for a number of subclasses, and inheritance allows you to pass all the subclasses to the same method instead of writing individual methods for each subclass and you might want to store subclasses together in a single array, and inheritance allows for this.

      Which of the following reasons for using an inheritance hierarchy are valid?

      .. code-block:: java

         I.   Methods from a superclass can be used in a subclass without rewriting
              or copying code.
         II.  Objects from subclasses can be passed as arguments to a method  designed
              for the superclass
         III. Objects from subclasses can be stored in the same array
         IV.  All of the above
         V.   None of the above

   .. mchoice:: pe1_14
      :answer_a: 4
      :answer_b: 16
      :answer_c: 7
      :answer_d: 2
      :answer_e: 3
      :correct: d
      :feedback_a: This would be true if it was <code>return(a[1]*= 2);</code>.
      :feedback_b: This would be true if the return statement was <code>return (a[0]*=2);</code>.
      :feedback_c: This would be true if it was <code>a[0]--;</code>  Or it would be true if array indicies started at 1, but they start with 0.
      :feedback_d: The statement <code>a[1]--;</code> is the same as <code>a[1] = a[1] - 1;</code> so this will change the 3 to a 2.  The return <code>(a[1] * 2)</code> does not change the value at <code>a[1]</code>.
      :feedback_e: This can't be true because <code>a[1]--;</code> means the same as <code>a[1] = a[1] - 1;</code>  So the 3 will become a 2.  Parameters are all pass by value in Java which means that a copy of the value is passed to a method.  But, since an array is an object a copy of the value is a copy of the reference to the object.  So changes to objects in methods are permanent.

      Consider the following method and if ``int[] a = {8, 3, 1}``, what is the value in ``a[1]`` after ``m1(a);`` is run?

      .. code-block:: java

         public int m1(int[] a)
         {
            a[1]--;
            return (a[1] * 2);
         }

   .. mchoice:: pe1_15
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
         for (int i=1; i<=6; i++)
         {
            t = a;
            a = i + b;
            b = t - i;
         }

   .. mchoice:: pe1_16
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

   .. mchoice:: pe1_17
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

   .. mchoice:: pe1_18
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

   .. mchoice:: pe1_19
      :answer_a: The values don't matter, this will always cause an infinite loop.
      :answer_b: Whenever a has a value larger then temp.
      :answer_c: When all values in a are larger than temp.
      :answer_d: Whenever a includes a value equal to temp.
      :answer_e: Whenever a includes a value that is less than or equal to zero.
      :correct: e
      :feedback_a: An infinite loop will not always occur in this program segment.
      :feedback_b: Values larger then temp will not cause an infinite loop.
      :feedback_c: Values larger then temp will not cause an infinite loop.
      :feedback_d: Values equal to temp will not cause an infinite loop.
      :feedback_e: When a contains a value that is less than or equal to zero, then multiplying that value by 2 will never make the result larger than the temp value (which was set to some value > 0), so an infinite loop will occur.

      Assume that ``temp`` is an ``int`` variable initialized to be greater than zero and that ``a`` is an array of type ``int``.  Also, consider the following code segment.  What of the following will cause an infinite loop?

      .. code-block:: java

         for ( int k = 0; k < a.length; k++ )
         {
            while ( a[ k ] < temp )
            {
               a[ k ] *= 2;
            }
         }


   .. mchoice:: pe1_20
      :answer_a: A
      :answer_b: B
      :answer_c: C
      :answer_d: D
      :answer_e: E
      :correct: c
      :feedback_a: This would be true if num1 and num2 were both greater than 0 and num1 was greater than num2.  However, num2 is less than 0.
      :feedback_b: This would be true if num1 and num2 were both greater than 0 and num1 was less than or equal to num2.  However, num2 is less than 0.
      :feedback_c: The first test is false since num2 is less than 0 and for a complex conditional joined with And (&&) to be true both expressions must be true.  Next, <code>else if ((num2<0) || (num1<0))</code> is executed and this will be true since num2 is less than 0 and for a complex conditional joined with Or (||) only one of the expressions must be true for it to execute.
      :feedback_d: This will not happen since if num2 is less than 0 the previous conditional would be true <code>((num2<0) || (num1<0))</code>).
      :feedback_e: This will not happen since if num2 is less than 0 the previous conditional would be true <code>((num2<0) || (num1<0))</code>).

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
