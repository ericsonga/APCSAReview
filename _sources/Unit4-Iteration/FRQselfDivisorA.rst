.. qnum::
   :prefix: 4-11-
   :start: 1

Free Response - Self Divisor A
-------------------------------

.. index::
    single: self divisor
    single: free response

The following is part a of a free response question from 2007.  It was question 1 on the exam.  You can see all the free response questions from past exams at https://apstudents.collegeboard.org/courses/ap-computer-science-a/free-response-questions-by-year.

**Question 1.**  A positive integer is called a "self-divisor" if every decimal digit of the number is a divisor of the number, that is, the number is evenly divisible by each and every one of its digits. For example, the number 128 is a self- divisor because it is evenly divisible by 1, 2, and 8. However, 26 is not a self-divisor because it is not evenly divisible by the digit 6. Note that 0 is not considered to be a divisor of any number, so any number containing a 0 digit is NOT a self-divisor. There are infinitely many self-divisors.

**Part a.**  Finish writing method isSelfDivisor below, which takes a positive integer as its parameter. This method returns true if the number is a self-divisor; otherwise, it returns false.  The main method includes tests to check if this method is working correctly.

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
           // part A
       }

       /****************/

       public static void main(String[] args)
       {
           System.out.println("128: " + isSelfDivisor(128));
           System.out.println("26: " + isSelfDivisor(26));
           System.out.println("120: " + isSelfDivisor(120));
           System.out.println("102: " + isSelfDivisor(102));
       }
   }

How to solve this problem
===========================

The first thing to do is try to solve the examples by hand.  The question tells us that 128 should return true, 26 should return false, and any number with a 0 in it should return false.

To check if 128 is a self-divisor we divide 128 by 8, 2, and 1.  If 8, 2, and 1 each go into 128 evenly (have a 0 remainder) then the method should return true.

.. activecode:: lcfrsda2
   :language: java
   :autograde: unittest

   public class TestMod
   {
       public static void main(String[] args)
       {
           System.out.println(128 % 8);
           System.out.println(128 % 2);
           System.out.println(128 % 1);
       }
   }

   ====
   import static org.junit.Assert.*;

   import org.junit.*;

   import java.io.*;

   // import java.util.regex.*;
   /* Do NOT change Main or CodeTestHelper.java. */
   public class RunestoneTests extends CodeTestHelper
   {
       @Test
       public void testMain() throws IOException
       {
           String output = getMethodOutput("main");
           String expect = "0\n0\n0\n";
           boolean passed = getResults(expect, output, "Expected output from main");
           assertTrue(passed);
       }
   }

To check if 26 is a self-divisor we divide 26 by 6 and find that it has a remainder that is greater than 0, so it can't be a self-divisor and we return false.

.. activecode:: lcfrsda3
   :language: java
   :autograde: unittest

   public class TestSelfDivisor
   {
       public static void main(String[] args)
       {
           System.out.println(26 % 6);
       }
   }

   ====
   import static org.junit.Assert.*;

   import org.junit.*;

   import java.io.*;

   // import java.util.regex.*;
   /* Do NOT change Main or CodeTestHelper.java. */
   public class RunestoneTests extends CodeTestHelper
   {
       @Test
       public void testMain() throws IOException
       {
           String output = getMethodOutput("main");
           String expect = "2\n";
           boolean passed = getResults(expect, output, "Expected output from main");
           assertTrue(passed);
       }
   }

To return false if the number has a 0 in it we just have to check if the current digit is a zero and then return false. So, 120 and 102 should both return false.


Click to reveal hints and problems to lead you to the solution or skip ahead to write your own solution.

.. reveal:: frsda_hints_r
   :showtitle: Reveal Hints
   :hidetitle: Hide Hints
   :optional:

   **Hints:**

   So we need to loop through all the digits in the number one at a time and test if the current digit is 0 and if so return false.  Otherwise we need to test if the passed number is evenly divisible (0 remainder) by the current digit.  If it isn't we return false.  If we have looped through all the digits and not found a problem return true.

   How can we loop through all the digits in a number?  We can use x % 10 to get the rightmost digit from a number and x / 10 to remove the rightmost digit from a number.  We can also use the remainder operator (%) to test if the number is evenly divisible by the current digit.  Run the example code below to see how this works.

   .. activecode:: lcfrsda4
       :language: java
       :autograde: unittest

       public class TestDigits
       {
           public static void main(String[] args)
           {
               System.out.println(128 % 10);
               System.out.println(128 / 10);
               System.out.println(12 % 10);
               System.out.println(12 / 10);
           }
       }

       ====
       import static org.junit.Assert.*;

       import org.junit.*;

       import java.io.*;

       // import java.util.regex.*;
       /* Do NOT change Main or CodeTestHelper.java. */
       public class RunestoneTests extends CodeTestHelper
       {
           @Test
           public void testMain() throws IOException
           {
               String output = getMethodOutput("main");
               String expect = "8\n12\n2\n1\n";
               boolean passed = getResults(expect, output, "Expected output from main");
               assertTrue(passed);
           }
       }

.. reveal:: frsda_reveal_alg
   :showtitle: Reveal Algorithm
   :hidetitle: Hide Algorithm
   :optional:

   **Algorithm**:

   We need to loop through all the digits in a number.  For example, with 128 the first time through the loop we want to test the 8, then the second time through the loop test the 2, and the last time test the 1.  We can use x % 10 to get the rightmost digit and x / 10 to remove the rightmost digit.  We are going to need a local variable that holds the current number since each time through the loop we need to remove the rightmost digit.  We will initialize the current number to the passed number and then get the rightmost digit each time through the loop.  We will test the digit to see if it is zero and if so return false.  We will also test to see if the number is not evenly divisible by the digit and return false in this case.  We will then remove the rightmost digit from the local variable and test if we should continue the loop.

.. reveal:: frsda_r1
   :showtitle: Reveal Problems
   :hidetitle: Hide Problems
   :optional:

   .. mchoice:: frsda_1
        :answer_a: for
        :answer_b: for each
        :answer_c: while
        :correct: c
        :feedback_a: Use a for loop when you know how many times a loop needs to execute.  Do you know that here?
        :feedback_b: Use a for each loop when you want to loop through all values in a collection.  Do we have a collection here?
        :feedback_c: Use a while loop when you don't know how many times a loop needs to execute.

        Which loop should you use to loop through all the digits of the number?

   .. mchoice:: frsda_2
        :answer_a: Loop while the current number is greater than 10.
        :answer_b: Loop while the current number is greater than 9.
        :answer_c: Loop while the current number is greater than 0.
        :correct: c
        :feedback_a: What happens if the number is 10 in this case?
        :feedback_b: Does this actually test the first digit in a number?
        :feedback_c: We will know that we are out of digits when x / 10 is 0. This wouldn't work if the number passed to the method was 0 originally, but were told in the precondition that number is greater than 0 to start.

        What should you use as the test in the while loop?

Try to write the code for the method isSelfDivisor.  When you are ready click "Run" to test your solution. Remember that it should return true for 128, false for 26, false for 120, and false for 102.

.. activecode:: lcfrsda5
   :language: java
   :autograde: unittest

   FRQ SelfDivisor: Write the method isSelfDivisor.
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
           // part A
       }

       /****************/

       public static void main(String[] args)
       {
           System.out.println("128: " + isSelfDivisor(128));
           System.out.println("26: " + isSelfDivisor(26));
           System.out.println("120: " + isSelfDivisor(120));
           System.out.println("102: " + isSelfDivisor(102));
       }
   }

    ====
    import static org.junit.Assert.*;

    import org.junit.*;

    import java.io.*;

    // import java.util.regex.*;
    /* Do NOT change Main or CodeTestHelper.java. */
    public class RunestoneTests extends CodeTestHelper
    {
        @Test
        public void testMain() throws IOException
        {
            String output = getMethodOutput("main");
            String expect = "128: true\n26: false\n120: false\n102: false\n";
            boolean passed = getResults(expect, output, "Expected output from main");
            assertTrue(passed);
        }

        @Test
        public void testIfLoop()
        {
            String code = getCode();
            boolean passed = code.contains("if") && (code.contains("for") || code.contains("while"));
            getResults(
                    "Expected loop, if, %", "" + passed, "Checking for loop and if statement", passed);
            assertTrue(passed);
        }

        @Test
        public void testModDiv()
        {
            String code = getCode();
            boolean passed = code.contains("%") && code.contains("/");
            getResults("Expected % and /", "" + passed, "Checking for use of % and /", passed);
            assertTrue(passed);
        }

        @Test
        public void testFunction1()
        {
            Object[] args = {128};
            String output = getMethodOutput("isSelfDivisor", args);
            String expect = "true";
            boolean passed = getResults(expect, output, "isSelfDivisor(128)");
            assertTrue(passed);
        }

        @Test
        public void testFunction2()
        {
            Object[] args = {26};
            String output = getMethodOutput("isSelfDivisor", args);
            String expect = "false";
            boolean passed = getResults(expect, output, "isSelfDivisor(26)");
            assertTrue(passed);
        }

        @Test
        public void testFunction3()
        {
            Object[] args = {120};
            String output = getMethodOutput("isSelfDivisor", args);
            String expect = "false";
            boolean passed = getResults(expect, output, "isSelfDivisor(120)");
            assertTrue(passed);
        }

        @Test
        public void testFunction4()
        {
            Object[] args = {102};
            String output = getMethodOutput("isSelfDivisor", args);
            String expect = "false";

            boolean passed = getResults(expect, output, "isSelfDivisor(102)");
            assertTrue(passed);
        }

        @Test
        public void testFunction5()
        {
            Object[] args = {124};
            String output = getMethodOutput("isSelfDivisor", args);
            String expect = "true";

            boolean passed = getResults(expect, output, "isSelfDivisor(124)");
            assertTrue(passed);
        }
    }

Video - One way to code the solution
=====================================

There are many possible solutions to this problem. Click to reveal a possible solution's video for this problem.

.. reveal:: video_self_divisor_reveal
   :showtitle: Reveal Video
   :hidetitle: Hide Video

   The following video is also on YouTube at https://youtu.be/oK1hDTmR3AE.  It walks through creating a solution.

   .. youtube:: oK1hDTmR3AE
        :width: 800
        :align: center
        :optional:
