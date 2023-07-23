.. qnum::
   :prefix: 6-4-3-
   :start: 1

Free Response - Self Divisor B
-------------------------------

.. index::
    single: self divisor
    single: free response

The following is part b of a free response question from 2007.  It was question 1 on the exam.  You can see all the free response questions from past exams at https://apstudents.collegeboard.org/courses/ap-computer-science-a/free-response-questions-by-year.

**Question 1.**  A positive integer is called a "self-divisor" if every decimal digit of the number is a divisor of the number, that is, the number is evenly divisible by each and every one of its digits. For example, the number 128 is a self-divisor because it is evenly divisible by 1, 2, and 8. However, 26 is not a self-divisor because it is not evenly divisible by the digit 6. Note that 0 is not considered to be a divisor of any number, so any number containing a 0 digit is NOT a self-divisor. There are infinitely many self-divisors.

**Part b.**  Write method firstNumSelfDivisors, which takes two positive integers as parameters, representing a start value and a number of values. Method firstNumSelfDivisors returns an array of size num that contains the first num self-divisors that are greater than or equal to start.
For example, the call firstNumSelfDivisors(10, 3) should return an array containing the values 11, 12, and 15, because the first three self-divisors that are greater than or equal to 10 are 11, 12, and 15.  Be sure to use the method isSelfDivisor in your answer which we wrote in a Unit 4.10.

.. code-block:: java

   public class SelfDivisor
   {

       /**
        * @param number the number to be tested Precondition: number > 0
        * @return true if every decimal digit of number is a divisor of number; false
        *     otherwise
        */
       public static boolean isSelfDivisor(int number)
       {
           int currNumber = number;
           int digit = 0;
           while (currNumber > 0)
           {
               digit = currNumber % 10;
               if (digit == 0) 
               {
                   return false;
               }
               if (number % digit != 0) 
               {
                   return false;
               }
               currNumber = currNumber / 10;
           }
           return true;
       }

       /**
        * @param start starting point for values to be checked Precondition: start > 0
        * @param num the size of the array to be returned Precondition: num > 0
        * @return an array containing the first num integers >= start that are
        *     self-divisors
        */
       public static int[] firstNumSelfDivisors(int start, int num)
       {
           /* to be implemented in part (b) */
       }

       public static void main(String[] args)
       {
           System.out.println("Self divisors for firstNumSelfDivisors(10, 3):");
           for (int n : firstNumSelfDivisors(10, 3)) 
           {
               System.out.print(n + " ");
           }
           System.out.println();

           System.out.println("Self divisors for firstNumSelfDivisors(22, 5)");
           for (int n : firstNumSelfDivisors(22, 5)) 
           {
               System.out.print(n + " ");
           }
           System.out.println();
       }
   }

How to solve this problem
===========================

Click to reveal the algorithm and problems to help you write your solution.

.. reveal:: selfDivBalg_r1
   :showtitle: Reveal Algorithm
   :hidetitle: Hide Algorithm
   :optional:

   The first thing to do is try to solve the example by hand.  The question tells us to return an array of size num so we need to create an array of that size.  We need
   to loop as long as we haven't found 3 self divisors and try the current value.  If the current value is a self-divisor then we add it to the array.  When we have found 3 self divisors then return the array. We will need to keep track of the number of self divisors that we have found.  We would try 10 (false), 11 (true so add to the array), 12 (true so add to the array), 13 (false), 14 (false), 15 (true so add to the array and return the array since we found 3).

.. reveal:: frsdb_r1
   :showtitle: Reveal Problems
   :hidetitle: Hide Problems
   :optional:

   .. mchoice:: frsdb_1
        :answer_a: for
        :answer_b: for each
        :answer_c: while
        :correct: c
        :feedback_a: Use a for loop when you know how many times a loop needs to execute.  Do you know that here?
        :feedback_b: Use a for each loop when you want to loop through all values in a collection.  Do we have a collection here?
        :feedback_c: Use a while loop when you don't know how many times a loop needs to execute.

        Which loop should you use to solve this problem?

   .. mchoice:: frsdb_2
        :answer_a: int[] retArray = new int[3];
        :answer_b: retArray = new int[num];
        :answer_c: int retArray = new int[num];
        :answer_d: int[] retArray = new int[num];
        :answer_e: int[] retArray;
        :correct: d
        :feedback_a: Don't just use the size for the array from the example.  The question says to return an array of size num and num could be anything.
        :feedback_b: Don't forget to declare your variables.
        :feedback_c: Don't forget that it is an array.
        :feedback_d: This declares an array of ints called retArray and creates it with a size of num.
        :feedback_e: This declares the array, but doesn't create it.

        Which of the following correctly declares and creates the array to return?

Try to write the code for firstNumSelfDivisors.  Run the main to check your answer. It should print 11, 12, and 15, and then 22, 24, 33, 36, and 44.

.. activecode:: lcfrsdb
   :language: java
   :autograde: unittest

   FRQ SelfDivisor B: write the method firstNumSelfDivisors below.
   ~~~~
   public class SelfDivisor
   {

       /**
        * @param number the number to be tested Precondition: number > 0
        * @return true if every decimal digit of number is a divisor of number; false
        *     otherwise
        */
       public static boolean isSelfDivisor(int number)
       {
           int currNumber = number;
           int digit = 0;
           while (currNumber > 0)
           {
               digit = currNumber % 10;
               if (digit == 0) 
               {
                   return false;
               }               
               if (number % digit != 0) 
               {
                   return false;
               }
               currNumber = currNumber / 10;
           }
           return true;
       }

       /**
        * @param start starting point for values to be checked Precondition: start > 0
        * @param num the size of the array to be returned Precondition: num > 0
        * @return an array containing the first num integers >= start that are
        *     self-divisors
        */
       public static int[] firstNumSelfDivisors(int start, int num)
       {
           /* to be implemented in part (b) */
       }

       public static void main(String[] args)
       {
           System.out.println("Self divisors for firstNumSelfDivisors(10, 3):");
           for (int n : firstNumSelfDivisors(10, 3)) 
           {
               System.out.print(n + " ");
           }
           System.out.println();

           System.out.println("Self divisors for firstNumSelfDivisors(22, 5):");
           for (int n : firstNumSelfDivisors(22, 5)) 
           {
               System.out.print(n + " ");
           }
           System.out.println();
       }
   }

    ====
    import static org.junit.Assert.*;

    import org.junit.*;

    import java.io.*;
    import java.util.Arrays;

    public class RunestoneTests extends CodeTestHelper
    {
        @Test
        public void testMain()
        {
            String output = getMethodOutput("main");
            String expect =
                    "Self divisors for firstNumSelfDivisors(10, 3):\n"
                        + "11 12 15\n"
                        + "Self divisors for firstNumSelfDivisors(22, 5):\n"
                        + "22 24 33 36 44";
            boolean passed = getResults(expect, output, "Checking output from main");
            assertTrue(passed);
        }

        @Test
        public void test2()
        {
            String msg = "Checking firstNumSelfDivisors(5, 10)";
            String output = Arrays.toString(SelfDivisor.firstNumSelfDivisors(5, 10));
            String expect = "[5, 6, 7, 8, 9, 11, 12, 15, 22, 24]";

            boolean passed = getResults(expect, output, msg);
            assertTrue(passed);
        }
    }

Video - One way to code the solution
=====================================

There are many possible solutions to this problem.  The video below (at https://www.youtube.com/watch?v=2VBz-pX1Xos ) shows one solution.

.. youtube:: 2VBz-pX1Xos
    :width: 800
    :align: center



