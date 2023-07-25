.. qnum::
   :prefix: 5-15-
   :start: 1

Midterm Test
--------------

The following 20 questions are similar to what you might see on the AP CSA exam for Units 1 - 5.  You may only take this test once while logged in. There are no time limits, but it will keep track of how much time you take. Click on the finish button after you have answered all the questions, and the number correct and feedback on the answers will be displayed.

We estimate that a score of about 50% on this test would correspond to the passing grade of 3 on the AP exam, a score of 65% to a 4, and a score of 80% and above to a 5 on the AP exam. These are just estimates and may not correspond to individual scores.


.. timed:: midterm-exam-in-unit-5

     .. mchoice:: mid_1_1
        :answer_a: I only
        :answer_b: I and II only
        :answer_c: III only
        :answer_d: IV and V only
        :answer_e: V only
        :correct: a
        :feedback_a: Correct! This will loop with i changing from 1 to 5 and then for each i, j will loop from i to 0 printing the value of i and then a new line.
        :feedback_b: II will loop i from 0 to 4 and j from 0 to i, neglecting to ouput 5.
        :feedback_c: III will loop with i changing from 1 to 4 and j from i to 0.
        :feedback_d: IV will loop with i changing from 1 to 5 and j from 0 to i but it will print each value on a different line.
        :feedback_e: V will loop with i changing from 0 to 4 and j from 0 to i.

        Which of the following code segments will produce the displayed output?

        .. code-block:: java

           /* Output:
           1
           22
           333
           4444
           55555
           */

           //Loop I
           for (int i = 1; i <= 5; i++)
           {
              for (int j = i; j > 0; j--)
              {
                 System.out.print(i);
              }
              System.out.println();
           }

           //Loop II
           for (int i = 0; i < 5; i++)
           {
              for (int j = 0; j < i; j++)
              {
                 System.out.print(i);
              }
              System.out.println();
           }

           //Loop III
           for (int i = 1; i < 5; i++)
           {
              for (int j = i; j > 0; j--)
              {
                 System.out.print(i);
              }
              System.out.println();
           }

           //Loop IV
           for (int i = 1; i < 6; i++)
           {
              for (int j = 0; j < i; j++)
              {
                 System.out.println(i);
              }
           }

           //Loop V
           for (int i = 0; i < 5; i++) {
              for (int j = 0; j < i; j++) {
                 System.out.print(i+1);
              }
              System.out.println();
           }



     .. mchoice:: mid_1_2
        :answer_a: A
        :answer_b: AC
        :answer_c: C
        :answer_d: BD
        :answer_e: E
        :correct: c
        :feedback_a: num2 is negative
        :feedback_b: Only one letter will be printed.
        :feedback_c: Correct because num2 is negative and an or is used.
        :feedback_d: Only one letter will be printed.
        :feedback_e: One of the other conditions is true.

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

     .. mchoice:: mid_1_3
        :answer_a: I only
        :answer_b: II only
        :answer_c: II and III only
        :answer_d: I and II only
        :answer_e: I, II, and III
        :correct: d
        :feedback_a: Loop I will produce this output, but it is not the only loop that will output these values.
        :feedback_b: Loop II will produce this output, but it is not the only loop that will output these values.
        :feedback_c: Loop II is correct, but loop III will produce the reverse output, 43210.
        :feedback_d: Correct! Both of these loops will produce the correct output.
        :feedback_e: While loop I and II will produce the correct output, loop III will actually produce the reverse of the correct output.

        Which of these loops will output ``01234``?

        .. code-block:: java

           int max = 5;

           //Loop I
           for (int i = 0; i < max; i++)
           {
              System.out.print(i);
           }

           //Loop II
           int j = 0;
           while (j < max)
           {
              System.out.print(j);
              j++;
           }

           //Loop III
           int k = 0;
           for (int i = max; i > 0; i--)
           {
              System.out.print(i);
           }

     .. mchoice:: mid_1_4
        :answer_a: 25
        :answer_b: 15
        :answer_c: 125
        :answer_d: 64
        :answer_e: 625
        :correct: c
        :feedback_a: This would be the correct answer if there were only two loops nested, but there are three. Try again!
        :feedback_b: Take a look at how many times each inner loop will execute every time the outer loop runs.
        :feedback_c: Correct!
        :feedback_d: Try again - check the difference between <= and < in each loop.
        :feedback_e: If you got this value you probably made one extra call to the each of the loops, notice that the loops start at 1 and not 0.

        Consider the following block of code. What value is returned from ``solution(5)``?

        .. code-block:: java

           public int solution(int limit)
           {
              int s = 0;
              for (int outside = 1; outside <= limit; outside++)
              {
                 for (int middle = 1; middle <= limit; middle++)
                 {
                    for (int inside = 1; inside <= limit; inside++)
                    {
                       s++;
                    }
                 }
              }
             return s;
           }

     .. mchoice:: mid_1_5
        :answer_a: (x < 10) && (x > 5)
        :answer_b: (x > 10) && (x <=5)
        :answer_c: (x <= 10) && (x > 5)
        :answer_d: (x <= 10) || (x > 5)
        :answer_e: (x > 10) || (x <= 5)
        :correct: d
        :feedback_a: Use A and B to represent the expressions -- A becomes (x > 10), B becomes (x <= 5). ! (A && B) is NOT equivalent to (!A && !B).
        :feedback_b: Use A and B to represent the expressions -- A becomes (x > 10), B becomes (x <= 5). ! (A && B) is NOT equivalent to (A && B).
        :feedback_c: Use A and B to represent the expressions -- A becomes (x > 10), B becomes (x <= 5). ! (A && B) is NOT equivalent to (!A && !B). The AND should be changed to an OR.
        :feedback_d: Correct!
        :feedback_e: Use A and B to represent the expressions -- A becomes (x > 10), B becomes (x <= 5). ! (A && B) is NOT equivalent to (A || B). Both A and B should also be negated.

        Which of the following is equivalent to !((x > 10) && (x <= 5)) ?

     .. mchoice:: mid_1_6
        :answer_a: s="rainbow"; b=8;
        :answer_b: s="rain";  b=8;
        :answer_c: s="rainbow"; b=4;
        :answer_d: s="rain"; b=4;
        :answer_e: s="bow";  b=4;
        :correct: d
        :feedback_a: Strings are immutable so changing str doesn't affect the string that s refers to.
        :feedback_b: Nothing done in the method test affects the value of b.
        :feedback_c: Strings are immutable so changing str doesn't affect the string that s refers to.
        :feedback_d: Correct!
        :feedback_e: All changes to string s result in a new string object.


        Consider the following class with the method ``test``. What is the output after the main method is executed calling ``test(s,b)``?

        .. code-block:: java

           public class Test1
           {
               public static void test(String str, int y)
               {
                   str = str + "bow";
                   y = y * 2;
               }

               public static void main(String[] args)
               {
                   String s = "rain";
                   int b = 4;
                   test(s, b);
                   System.out.println("s=" + s + "; b=" + b);
               }
           }

     .. mchoice:: mid_1_7
        :answer_a: The ``getAge()`` method should be declared as private.
        :answer_b: The return type of the ``getAge()`` method should be void.
        :answer_c: The ``getAge()`` method should have at least one parameter.
        :answer_d: The variable ``age`` is not declared inside the ``getAge()`` method.
        :answer_e: The instance variable ``age`` should be returned instead of a, which is local to the constructor.
        :correct: e
        :feedback_a: The method should be public so it can be accessed outside of the class.
        :feedback_b: The method's return type should be int.
        :feedback_c: The getAge method should not take any parameters.
        :feedback_d: This is an instance variable and should be declared outside of the method.
        :feedback_e: Correct! The accessor method getAge should return the instance variable age.

        Consider the following ``Cat`` class that has an ``age`` attribute of type int. The ``getAge`` method is intended to allow methods in other classes to access a Cat object’s age value; however, it does not work as intended. Which of the following best explains why the ``getAge`` method does NOT work as intended?

        .. code-block:: java

           public class Cat
           {
               private int age;

               public Cat(int a)
               {
                   age = a;
               }

               public int getAge()
               {
                   return a;
               }
           }

     .. mchoice:: mid_1_8
        :answer_a: I only
        :answer_b: I and II only
        :answer_c: I and III only
        :answer_d: I, II, and III
        :answer_e: II and III only
        :correct: d
        :feedback_a: It's true that the local variables can be declared in the body of constructors and methods, but there are other options that are also true about local variables.
        :feedback_b: Both I and II are true but III is also true regarding local variables.
        :feedback_c: Both I and III are true but II is also true regarding local variables.
        :feedback_d: Correct! All of the above are true.
        :feedback_e: Both of these are true but I is also true.

        Which of the following statements are TRUE about local variables?

        I.   Local variables can be declared in the body of constructors and methods.

        II.  Local variables may only be used within the constructor or method and cannot be declared to be public or private.

        III. When there is a local variable with the same name as an instance variable, the variable name will refer to the local variable instead of the instance variable.


     .. mchoice:: mid_1_9
        :answer_a: I and II only
        :answer_b: I, II, and III
        :answer_c: I and III only
        :answer_d: I only
        :answer_e: III only
        :correct: c
        :feedback_a: Static methods cannot acccess instance variables. They can only access static variables.
        :feedback_b: Static methods cannot acccess instance variables. They can only access static variables.
        :feedback_c: Correct! I and III are true, but static methods cannot acccess instance variables. They can only access static variables.
        :feedback_d: I is true, but there is another option that is true too.
        :feedback_e: III is true, but there is another option that is true too.

        Which of the following statements are TRUE about **static** methods?

        I.   Static methods and variables include the keyword static before their name in the header or declaration and can be public or private.

        II.  Static methods can access or change the values of instance variables.

        III.  Static methods are associated with the class, not objects of the class.

     .. mchoice:: mid_1_10
        :answer_a: var1 = 0, var2 = 2
        :answer_b: var1 = 1, var2 = 1
        :answer_c: var1 = 3, var2 = -1
        :answer_d: var1 = 2, var2 = 0
        :answer_e: The loop won't finish executing because of a division by zero.
        :correct: d
        :feedback_a: This would be true if the body of the while loop never executed. This would have happened if the while check was if var1 != 0 instead of var2 != 0
        :feedback_b: This would be true if the body of the while loop only execued one time, but it executes twice.
        :feedback_c: This would be true if the body of the while loop executed three times, but it executes twice.
        :feedback_d: Correct!
        :feedback_e: 0/2 won't cause a division by zero. The result is just zero.

        What are the values of ``var1`` and ``var2`` after the following code segment is executed and the while loop finishes?

        .. code-block:: java

           int var1 = 0;
           int var2 = 2;
           while ((var2 != 0) && ((var1 / var2) >= 0))
           {
              var1 = var1 + 1;
              var2 = var2 - 1;
           }

     .. mchoice:: mid_1_11
        :answer_a: 5 4 3 2 1
        :answer_b: -5 -4 -3 -2 -1
        :answer_c: -4 -3 -2 -1 0
        :answer_d: -5 -4 -3 -2 -1 0
        :answer_e: -4 -3 -2 -1
        :correct: c
        :feedback_a: x is initialized (set) to -5 to start and incremented (x++) before the print statement executes.
        :feedback_b: x is incremented (x++) from -5 before the print statement executes.
        :feedback_c: Correct!
        :feedback_d: x is incremented (x++) from -5 before the print statement executes.
        :feedback_e: 0 is printed out the last time through the loop when x is -1 and is incremented.

        What does the following code print?

        .. code-block:: java

           int x = -5;
           while (x < 0)
           {
              x++;
              System.out.print(x + " ");
           }

     .. mchoice:: mid_1_12
        :answer_a: 0 3 6 9 12
        :answer_b: 0 1 2 3 4 5
        :answer_c: 1 4 7 10 13
        :answer_d: 0 3 6 9 12 15
        :answer_e: This code will not print anything.
        :correct: d
        :feedback_a: It would also print 15.
        :feedback_b: The conditional would only match multiples of three.
        :feedback_c: The conditional would only match multiples of three.
        :feedback_d: Yes, the multiples of 3 from 0 to 15.
        :feedback_e: This code would print the multiples of 3.

        What will be printed after this code is executed?

        .. code-block:: java

           for (int i = 0; i <= 15; i++)
           {
              if (i % 3 == 0)
              {
                 System.out.print(i + " ");
              }
           }

     .. mchoice:: mid_1_13
        :answer_a: I only
        :answer_b: II only
        :answer_c: IV only
        :answer_d: II and III
        :answer_e: I, II, and III
        :correct: d
        :feedback_a: This implementation of ``addMinutes`` does not account for values of additionMinutes that push the minute count above 60.
        :feedback_b: Implementation II works, but implementation III also works.
        :feedback_c: Implementation IV does not work for situations where additionMinutes + minutes does not go above 60.
        :feedback_d: Correct!
        :feedback_e: Implementations II and III are correct, but implementation I is not. Implementation I does not account for values of additionMinutes that push the minute account above 60.

        Consider the following declaration for a class that will be used to represent points in time.  Which of these options correctly implement ``addMinutes()``?

        .. code-block:: java

           public class Timer
           {
              private int hours; // number of hours
              private int minutes; // 0 <= minutes < 60

              void addHours(int addition)
              {
                 hours = hours + addition;
              }

              /** addMinutes adds the given argument to the time stored in hours and minutes.
              The argument additionMinutes is between 0 and 119.  **/
              void addMinutes(int additionMinutes)
              {
                 // implementation not shown
              }

              // ... other methods not shown
           }


           //Proposed Implementations:
           I.   public void addMinutes(int additionMinutes)
                {
                    minutes = minutes + additionMinutes;
                }
           II.  public void addMinutes(int additionMinutes)
                {
                    minutes += additionMinutes;
                    if (minutes >= 60)
                    {
                       hours += minutes / 60;
                       minutes = minutes % 60;
                    }
                }
           III. public void addMinutes(int additionMinutes)
                {
                    minutes += additionMinutes;
                    while (minutes >= 60)
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

     .. mchoice:: mid_1_14
        :answer_a: !(a && b)
        :answer_b: !a && b
        :answer_c: !a && !b
        :answer_d: a && b
        :answer_e: a || !b
        :correct: c
        :feedback_a: This would be true in any case where a and b weren't both true
        :feedback_b: If b was false, this option would be false.
        :feedback_c: Correct!
        :feedback_d: This will only be true only when both a and b are true.
        :feedback_e: This will only be true if a is true, or b is false.

        Which option will evaluate to true, if and only if both a and b are false?

     .. mchoice:: mid_1_15
        :answer_a: Prints the string in reverse order
        :answer_b: Deletes the second half of the string
        :answer_c: Prints string normally
        :answer_d: Compile-time error occurs
        :answer_e: Prints alternating characters from beginning and end of the string.
        :correct: a
        :feedback_a: Correct! This method prints the reversed string.
        :feedback_b: Incorrect, this method prints the parameter reversed.
        :feedback_c: Incorrect, this method prints the parameter reversed.
        :feedback_d: Incorrect, this method prints the parameter reversed.
        :feedback_e: Incorrect, this method prints the parameter reversed.

        What does the function ``mystery`` do?

        .. code-block:: java

           public void mystery(String tester)
           {
              for (int i = tester.length() - 1; i >= 0; i--)
              {
                 System.out.print(tester.substring(i,i+1));
              }
              System.out.println("");
           }

     .. mchoice:: mid_1_16
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

        After the following code is executed, what does the variable ``mystery`` hold?

        .. code-block:: java

           public class Mysterious
           {
               public static void main(String[] args)
               {
                   String mystery = "";
                   String starter = "Hello World!";
                   for (int i = 0; i < starter.length(); i++)
                   {
                       if (i % 2 == 0)
                       {
                           mystery += starter.substring(i, i + 1);
                       }
                   }
               }
           }

     .. mchoice:: mid_1_17
        :answer_a: I only
        :answer_b: I and II
        :answer_c: II only
        :answer_d: II and III
        :answer_e: I, II, and III
        :correct: c
        :feedback_a: I contains incorrect syntax. Try again!
        :feedback_b: I contains incorrect syntax. Try again!
        :feedback_c: Correct! II is the only correct option.
        :feedback_d: III is incorrect due to a problem with the constructor argument. Try again!
        :feedback_e: Two of these options are incorrect. Take a closer look at the syntax of I and parameters of III.

        Which of the following code segments correctly creates an instance of a new ``Party`` object?

        .. code-block:: java

           public class Party
           {

              private int numInvited;
              private boolean partyCancelled;

              public Party()
              {
                 numInvited = 1;
                 partyCancelled = false;
              }

              public Party(int invites)
              {
                 numInvited = invites;
                 partyCancelled = false;
              }
           }

           I.   Party myParty;
           II.  int classSize = 20;
                Party ourParty = new Party(classSize);
           III. int numOfFriends = 6;
                Party yourParty = new Party(numOfFriends + 3.0);

     .. mchoice:: mid_1_18
        :answer_a: a = 6 and b = 7
        :answer_b: a = 6 and b = 13
        :answer_c: a = 13 and b = 0
        :answer_d: a = 6 and b = 0
        :answer_e: a = 0 and b = 13
        :correct: c
        :feedback_a: This would be true if the loop stopped when i was equal to 6. Try again!
        :feedback_b: Take another look at how a and b change in each iteration of the loop.
        :feedback_c: Correct!
        :feedback_d: Almost there! b = 0, but take another look at how a changes in each iteration of the loop.
        :feedback_e: Take another look at how a and b change within each iteration of the loop. You are close!

        What are the values of ``a`` and ``b`` after the ``for`` loop finishes?

        .. code-block:: java

           int a = 10, b = 3, t = 0;
           for (int i = 1; i <= 6; i++)
           {
              t = a;
              a = i + b;
              b = t - i;
           }

     .. mchoice:: mid_1_19
        :answer_a: hi there
        :answer_b: HI THERE
        :answer_c: Hi There
        :answer_d: null
        :answer_e: hI tHERE
        :correct: c
        :feedback_a: Strings are immutable and so any change to a string returns a new string.
        :feedback_b: Strings are immutable and so any change to a string returns a new string.
        :feedback_c: Correct!
        :feedback_d: Strings are immutable and so any changes to a string returns a new string.
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

     .. mchoice:: mid_1_20
        :answer_a: a = 6.7
        :answer_b: b = 87.7
        :answer_c: 12 = c * b
        :answer_d: c = a - b
        :correct: d
        :feedback_a: Check the data type of a.
        :feedback_b: Check the data type of b.
        :feedback_c: Assignment statements must have a variable on the left.
        :feedback_d: Correct!

        Given following code, which of the following statements is a valid assignment statement using these variables?

        .. code-block:: java

           int a = 5;
           int b = 3;
           int c = 4;
