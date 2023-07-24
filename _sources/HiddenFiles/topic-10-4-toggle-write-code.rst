.. qnum::
   :prefix: 10-4-
   :start: 1

Unit 10 Write Code for Toggle Code
=========================================================

This is the write code problems associated with the mixed up code problems. Remember to use recursion!

.. activecode:: u10_muc_wc1
        :language: java
        :practice: T
        :autograde: unittest

        Finish the ``reverse`` method. This should take in a parameter ``myText`` and return a reversed version of it. For example, ``reverse("Cat")`` would return ``"taC"``. Fill in the missing code (labeled with YOUR CODE HERE comments) to complete the problem.
        ~~~~
        public class Test1
        {
            public static String reverse(String myText)
            {
                if (myText.length() == 0) // this is the base case
                {
                    // YOUR CODE HERE - what should we return in the base case?
                }

                else // this is the recursive case
                {
                    reverse() + myText.charAt(0); // YOUR CODE HERE -- Fill in the call to reverse()
                    // HINT: You'll need to use a substring
                }
            }

            public static void main(String[] args)
            {
                String str1 = "test";

                System.out.println("str1 --> " + str1);
                System.out.println("reverse(str1) --> " + reverse(str1));

                String str2 = "computer science is awesome";

                System.out.println("str2 --> " + str2);
                System.out.println("reverse(str1) --> " + reverse(str2));
            }
        }
        ====
        import static org.junit.Assert.*;

        import org.junit.*;

        import java.io.*;

        public class RunestoneTests extends CodeTestHelper
        {
            public RunestoneTests()
            {
                super("Test1");
            }

            @Test
            public void test1()
            {
                String output = getMethodOutput("main");
                String expect =
                        "str1 --> test\n"
                            + "reverse(str1) --> tset\n"
                            + "str2 --> computer science is awesome\n"
                            + "reverse(str1) --> emosewa si ecneics retupmoc";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }

            @Test
            public void test2()
            {
                String str = "this is a test";
                String expected = "tset a si siht";
                String actual = Test1.reverse(str);

                boolean passed = getResults("" + expected, "" + actual, "Testing reverse(" + str + ")");
                assertTrue(passed);
            }

            @Test
            public void test3()
            {
                String code = getCodeWithoutComments();
                int count = countOccurences(code, "while") + countOccurences(code, "for");
                boolean passed = count == 0;
                getResults(
                        "0 loops",
                        count + " loop(s)",
                        "Making sure method is recursive, not iterative",
                        passed);
                assertTrue(passed);
            }
        }

.. activecode:: u10_muc_wc2
        :language: java
        :practice: T
        :autograde: unittest

        Fill in the ``multiply`` method. It should take in two non-negative integers and return their product, using the fact that multiplication is repeated addition (e.g., 3x4 = 3 + 3 + 3 + 3). Thus, ``multiply(3, 4)`` would return ``12``. Do NOT use multiplication; only use addition.
        ~~~~
        public class ListTest 
        {
            public static int multiply(int a, int b) 
            {

                if ()  // YOUR CODE HERE - What's the base case condition?
                {

                    // YOUR CODE HERE - And what should we return in the base case?

                }
                else 
                {  
                    // This is the recursive case
                    return multiply(a, b - 1) + a;
                }
            }

            public static void main(String[] args) 
            {
                System.out.println("Before: multiply(3, 4)");
                System.out.println("After: " + multiply(3, 4));
            }
        }
        ====
        import static org.junit.Assert.*;

        import org.junit.*;

        import java.io.*;

        public class RunestoneTests extends CodeTestHelper
        {
            public RunestoneTests()
            {
                super("ListTest");
            }

            @Test
            public void test1()
            {
                String output = getMethodOutput("main");
                String expect = "Before: multiply(3, 4)\nAfter: 12";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }
        }

.. activecode:: u10_muc_wc3
        :language: java
        :practice: T
        :autograde: unittest

        Write the ``sumElements`` function. It should add up all of the elements in the passed-in array from ``index`` onward - so calling ``sumElements(nums, 1)`` with ``nums`` as {1,2,3,12} would return ``17`` (as that is 2 + 3 + 12). Be sure to use recursion when creating the method.
        ~~~~
        public class ListTest
        {

            public static int sumElements(int[] arr, int index)
            {

                if (index >= arr.length) // This is the base case
                {
                    return 0;
                } else 
                {   
                    // This is the recursive case
                    // YOUR CODE HERE
                }
            }

            public static void main(String[] args)
            {
                int[] list = {1, 2, 3, 12};
                System.out.println("Answer: " + sumElements(list, 0));
            }
        }

        ====
        import static org.junit.Assert.*;

        import org.junit.*;

        import java.io.*;

        public class RunestoneTests extends CodeTestHelper
        {
            public RunestoneTests()
            {
                super("ListTest");
            }

            @Test
            public void test1()
            {
                String output = getMethodOutput("main");
                String expect = "Answer: 18";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }
        }

.. activecode:: u10_muc_wc4
        :language: java
        :practice: T
        :autograde: unittest

        Finish the ``removeStar`` method. It should remove any occurrence of an asterisk (“*”) from a passed-in string. For example, calling ``removeStar`` on ``"ab*c**d"`` would return ``"abcd"``.
        ~~~~
        public class ListTest
        {

            public static String removeStar(String myText)
            {

                if (myText.length() == 0)
                {
                    return "";
                }

                if (myText.charAt(0) == '*')
                {
                    // YOUR CODE HERE
                    // HINT: Use substring() and removeStar()
                }
                else
                {
                    // YOUR CODE HERE
                    // HINT: Use substring(), removeStar(), and concatenation
                }
            }

            public static void main(String[] args)
            {
                String myText = "ab*c**d";
                System.out.println("Before: " + myText);

                System.out.println("After: " + removeStar(myText));
            }
        }

        ====
        import static org.junit.Assert.*;

        import org.junit.*;

        import java.io.*;

        public class RunestoneTests extends CodeTestHelper
        {
            public RunestoneTests()
            {
                super("ListTest");
            }

            @Test
            public void test1()
            {
                String output = getMethodOutput("main");
                String expect = "Before: ab*c**d\nAfter: abcd";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }
        }

.. activecode:: u10_muc_wc5
        :language: java
        :practice: T
        :autograde: unittest

        Write the ``exponent`` program. This should take in two ``int`` parameters - ``base`` and ``power`` - and return ``base`` ^ ``power`` (``base`` multiplied by itself ``power`` times). For example, ``exponent(3, 5)`` would return ``243`` because that is 3x3x3x3x3.
        ~~~~
        public class ListTest
        {

            public static int exponent(int base, int power)
            {

                // YOUR CODE HERE
                // Think of what the base and recursive cases should be
                // If you get stuck, problem two (writing the multiply method) should be a
                // good guide
                // Unlike that problem, it's totally fine to do multiplication here

            }

            public static void main(String[] args)
            {

                System.out.println("Before: exponent(2,4)");
                System.out.println("After: " + exponent(2, 4));
            }
        }

        ====
        import static org.junit.Assert.*;

        import org.junit.*;

        import java.io.*;

        // import java.util.ArrayList;

        public class RunestoneTests extends CodeTestHelper
        {
            public RunestoneTests()
            {
                super("ListTest");
            }

            @Test
            public void test1()
            {
                String output = getMethodOutput("main");
                String expect = "Before: exponent(2,4)\nAfter: 16";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }
        }

.. activecode:: u10_muc_wc6
        :language: java
        :practice: T
        :autograde: unittest

        Write the ``numFiveOccurrence`` method. It should return the number of times that ``5`` is present in the passed ``int`` array ``arr``. Just as in problem three (``sumElements``), there will also be an ``index`` parameter to make recursion possible. The initial call to ``numFiveOccurrence`` will be with index 0, and, from then on, ``numFiveOccurrence(arr, index)`` should return the number of 5s in ``arr`` from index onward.
        ~~~~

        public class ListTest
        {
            public static int numFiveOccurrence(int[] arr, int index)
            {

                // YOUR CODE HERE
                // Hint: Remember that you will have to handle two different possibilities
                // in the recursive case based on arr[index]
                // If you get stuck, look at sumElements and removeStar

            }

            public static void main(String[] args)
            {

                int[] list = {1, 5, 7, 14, 5};

                System.out.println("Before: {1, 5, 7, 14, 5}");
                System.out.println("After: " + numFiveOccurrence(list, 0));
            }
        }

        ====
        import static org.junit.Assert.*;

        import org.junit.*;

        import java.io.*;

        public class RunestoneTests extends CodeTestHelper
        {
            public RunestoneTests()
            {
                super("ListTest");
            }

            @Test
            public void test1()
            {
                String output = getMethodOutput("main");
                String expect = "Before: {1, 5, 7, 14, 5}\nAfter: 2";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }
        }

.. activecode:: u10_muc_wc7
        :language: java
        :practice: T
        :autograde: unittest

        Write the ``repeatThis`` method. It should take in two parameters - a String ``s`` and an int ``i`` - and return a new String composed of ``s`` ``i`` times. For example, ``repeatThis("Cat", 2)`` would return ``"CatCat"``.
        ~~~~
        public class ListTest
        {

            public static String repeatThis(String s, int i)
            {

                // YOUR CODE HERE

            }

            public static void main(String[] args)
            {

                System.out.println("Before: (hi, 3)");
                System.out.println("After: " + repeatThis("hi", 3));
            }
        }

        ====
        import static org.junit.Assert.*;

        import org.junit.*;

        import java.io.*;

        public class RunestoneTests extends CodeTestHelper
        {
            public RunestoneTests()
            {
                super("ListTest");
            }

            @Test
            public void test1()
            {
                String output = getMethodOutput("main");
                String expect = "Before: (hi, 3)\nAfter: hihihi";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }
        }

.. activecode:: u10_muc_wc8
        :language: java
        :practice: T
        :autograde: unittest

        Write the ``findNumX`` function. This should take in a String ``s`` and return the number of occurrences of the character ``'x'`` (NOT including ``'X'``). For example, ``findNumX("axbcx")`` would return ``2``.
        ~~~~
        public class Test1
        {

            public static int findNumX(String s)
            {

                // YOUR CODE HERE

            }

            public static void main(String[] args)
            {

                System.out.println("Before: xHihxixx");
                System.out.println("After: " + findNumX("xHihxixx"));
            }
        }

        ====
        import static org.junit.Assert.*;

        import org.junit.*;

        import java.io.*;

        public class RunestoneTests extends CodeTestHelper
        {
            public RunestoneTests()
            {
                super("Test1");
            }

            @Test
            public void test1()
            {
                String output = getMethodOutput("main");
                String expect = "Before: xHihxixx\nAfter: 4";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }

            @Test
            public void test2()
            {
                String str = "axbcx";
                int expected = 2;
                int actual = Test1.findNumX(str);

                boolean passed = (expected == actual);
                getResults("" + expected, "" + actual, "Testing findNumX(" + str + ")");
                assertTrue(passed);
            }
        }

.. activecode:: u10_muc_wc9
        :language: java
        :practice: T
        :autograde: unittest

        Write the ``countTo`` method. This should take in an integer ``x`` and return a String with the positive numbers from 1 to ``x`` (inclusive) with "..." after each. For example, ``countTo(5)`` would return "1...2...3...4...5...".
        ~~~~
        public class Test1
        {
            public static String countTo(int x)
            {

                // YOUR CODE HERE

            }

            public static void main(String[] args)
            {
                int num1 = 10;
                System.out.println("countTo(" + num1 + ") --> " + countTo(num1));

                int num2 = 5;
                System.out.println("countTo(" + num2 + ") --> " + countTo(num2));

                int num3 = 0;
                System.out.println("countTo(" + num3 + ") --> " + countTo(num3));
            }
        }

        ====
        import static org.junit.Assert.*;

        import org.junit.*;

        import java.io.*;

        public class RunestoneTests extends CodeTestHelper
        {
            public RunestoneTests()
            {
                super("Test1");
            }

            @Test
            public void test1()
            {
                String output = getMethodOutput("main");
                String expect =
                        "countTo(10) --> 1...2...3...4...5...6...7...8...9...10...\n"
                            + "countTo(5) --> 1...2...3...4...5...\n"
                            + "countTo(0) -->";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }

            @Test
            public void test2()
            {
                int str = 6;
                String expected = "1...2...3...4...5...6...";
                String actual = Test1.countTo(str);

                boolean passed = getResults("" + expected, "" + actual, "Testing countTo(" + str + ")");
                assertTrue(passed);
            }

            @Test
            public void test3()
            {
                String code = getCodeWithoutComments();
                int count = countOccurences(code, "while") + countOccurences(code, "for");
                boolean passed = count == 0;
                getResults(
                        "0 loops",
                        count + " loop(s)",
                        "Making sure method is recursive, not iterative",
                        passed);
                assertTrue(passed);
            }
        }

.. activecode:: u10_muc_wc10
        :language: java
        :practice: T
        :autograde: unittest

        Write the ``displayEvenDigits`` method. It should take in an integer ``num`` and return a String version of ``num`` with the odd digits replaced by ``'_'``. For example, ``displayEvenDigits(42356)`` should return ``"42__6".`` To achieve this recursively, you should use modulo and division to get the least-significant digit and then pass a version of ``num`` without that digit (hint: use integer division).
        ~~~~
        public class Test1
        {
            public static String displayEvenDigits(int num)
            {

                // YOUR CODE HERE

            } // end method

            public static void main(String[] args)
            {
                int num1 = 12345678;
                System.out.println(
                        "displayEvenDigits(" + num1 + ") --> " + displayEvenDigits(num1));

                int num2 = 2468;
                System.out.println(
                        "displayEvenDigits(" + num2 + ") --> " + displayEvenDigits(num2));

                int num3 = 1357;
                System.out.println(
                        "displayEvenDigits(" + num3 + ") --> " + displayEvenDigits(num3));
            }
        }

        ====
        import static org.junit.Assert.*;

        import org.junit.*;

        import java.io.*;

        public class RunestoneTests extends CodeTestHelper
        {
            public RunestoneTests()
            {
                super("Test1");
            }

            @Test
            public void test1()
            {
                String output = getMethodOutput("main");
                String expect =
                        "displayEvenDigits(12345678) --> _2_4_6_8\n"
                            + "displayEvenDigits(2468) --> 2468\n"
                            + "displayEvenDigits(1357) --> ____";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }

            @Test
            public void test2()
            {
                int str = 987654321;
                String expected = "_8_6_4_2_";
                String actual = Test1.displayEvenDigits(str);

                boolean passed =
                        getResults("" + expected, "" + actual, "Testing displayEvenDigits(" + str + ")");
                assertTrue(passed);
            }

            @Test
            public void test3()
            {
                String code = getCodeWithoutComments();
                int count = countOccurences(code, "while") + countOccurences(code, "for");
                boolean passed = count == 0;
                getResults(
                        "0 loops",
                        count + " loop(s)",
                        "Making sure method is recursive, not iterative",
                        passed);
                assertTrue(passed);
            }
        }

.. activecode:: u10_p2_muc_wc2
        :language: java
        :practice: T
        :autograde: unittest

        Write the ``fibonacci`` method. This program should take in an integer ``n`` and return the ``n``th fibonacci number. The 0th fibonacci number is ``0`` and the 1st is ``1``. From then on, the ``n``th fibonacci number is the ``n-1``th fibonacci number + the ``n-2``th fibonacci number. For example, the first few fibonacci numbers are 0, 1, 1, 2, 3, 5, 8. ``fibonacci(4)`` should return ``3``, as that is the 4th fibonacci number (remember that 0 is the 0th!). ``fibonacci(6)`` should return ``8``, as that is the 6th fibonacci number.
        ~~~~
        public class ListTest
        {

            public static int fibonacci(int n)
            {

                // YOUR CODE HERE
                // HINT: Unlike most problems, there are TWO base cases

            }

            public static void main(String[] args)
            {

                System.out.println("Before: " + " fibonacci(8)");
                System.out.println("After: " + fibonacci(8));
            }
        }

        ====
        import static org.junit.Assert.*;

        import org.junit.*;

        import java.io.*;

        public class RunestoneTests extends CodeTestHelper
        {
            public RunestoneTests()
            {
                super("ListTest");
            }

            @Test
            public void test1()
            {
                String output = getMethodOutput("main");
                String expect = "Before: fibonacci(8)\nAfter: 21";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }
        }

.. activecode:: u10_p2_muc_wc3
        :language: java
        :practice: T
        :autograde: unittest

        Create the ``spaceDash`` method. It should take in a String ``str`` and return a new String that has all of the spaces in ``str`` replaced by dashes.
        ~~~~
        public class Test1
        {
            public static String spaceDash(String str)
            {

                // YOUR CODE HERE

            }

            public static void main(String[] args)
            {
                String s = "Hello World !";
                System.out.println(spaceDash(s));
            }
        }

        ====
        import static org.junit.Assert.*;

        import org.junit.*;

        import java.io.*;

        public class RunestoneTests extends CodeTestHelper
        {
            public RunestoneTests()
            {
                super("Test1");
            }

            @Test
            public void test1()
            {
                String output = getMethodOutput("main");
                String expect = "Hello-World-!";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }
        }

.. activecode:: u10_p2_muc_wc4
        :language: java
        :practice: T
        :autograde: unittest

        Write the ``numberOf2s`` method. It should take in an integer ``n`` and count the number of 2s in the digits. Try to do this without converting ``n`` to a String. Here's a hint: modulo and integer division will both be very useful.
        ~~~~
        public class Test1
        {
            public static int numberOf2s(int n)
            {

                // YOUR CODE HERE

            }

            public static void main(String[] args)
            {
                int s = 1932294812;
                System.out.println(numberOf2s(s));
            }
        }

        ====
        import static org.junit.Assert.*;

        import org.junit.*;

        import java.io.*;

        public class RunestoneTests extends CodeTestHelper
        {
            public RunestoneTests()
            {
                super("Test1");
            }

            @Test
            public void test1()
            {
                String output = getMethodOutput("main");
                String expect = "3";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }
        }

.. activecode:: u10_p2_muc_wc5
        :language: java
        :practice: T
        :autograde: unittest

        Write the ``sum`` function. It should take in an integer ``n`` and recursively find and return the sum of the digits of ``n``. For example, ``sum(362)`` would return ``11``, as that is 3+6+2.
        ~~~~
        public class Test1
        {
            public static int sum(int n)
            {

                // YOUR CODE HERE

            }

            public static void main(String[] args)
            {
                int num = 123456789;
                System.out.println(sum(num));
            }
        }

        ====
        import static org.junit.Assert.*;

        import org.junit.*;

        import java.io.*;

        public class RunestoneTests extends CodeTestHelper
        {
            public RunestoneTests()
            {
                super("Test1");
            }

            @Test
            public void test1()
            {
                String output = getMethodOutput("main");
                String expect = "45";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }
        }

.. activecode:: u10_p2_muc_wc6
        :language: java
        :practice: T
        :autograde: unittest

        Write the ``evenDigits`` function. This should take in an integer ``n`` and recursively return the number of even digits in ``n``.
        ~~~~
        public class Test1
        {
            public static int evenDigits(int n)
            {

                // YOUR CODE HERE

            }

            public static void main(String[] args)
            {
                int num1 = 12345678;
                System.out.println("evenDigits(" + num1 + ") --> " + evenDigits(num1));

                int num2 = 9876543;
                System.out.println("evenDigits(" + num2 + ") --> " + evenDigits(num2));
            }
        }

        ====
        import static org.junit.Assert.*;

        import org.junit.*;

        import java.io.*;

        public class RunestoneTests extends CodeTestHelper
        {
            public RunestoneTests()
            {
                super("Test1");
            }

            @Test
            public void test1()
            {
                String output = getMethodOutput("main");
                String expect = "evenDigits(12345678) --> 4\nevenDigits(9876543) --> 3";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }

            @Test
            public void test2()
            {
                int num = 55555;
                int expected = 0;
                int actual = Test1.evenDigits(num);

                boolean passed = getResults("" + expected, "" + actual, "Testing evenDigits(" + num + ")");
                assertTrue(passed);
            }

            @Test
            public void test3()
            {
                String code = getCodeWithoutComments();
                int count = countOccurences(code, "while") + countOccurences(code, "for");
                boolean passed = count == 0;
                getResults(
                        "0 loops",
                        count + " loop(s)",
                        "Making sure method is recursive, not iterative",
                        passed);
                assertTrue(passed);
            }
        }

.. activecode:: u10_p2_muc_wc7
        :language: java
        :practice: T
        :autograde: unittest

        Write the ``factorial`` function. This should take in an integer ``n`` and return the factorial of ``n``. The factorial of N is equal to N x (N - 1) x (N - 2)... x 2 x 1. Note that N times the factorial of (N - 1) would be N factorial.
        ~~~~
        public class Test1
        {
            public static int factorial(int n)
            {

                // YOUR CODE HERE

            }

            public static void main(String[] args)
            {
                int num1 = 5;
                System.out.println("factorial(" + num1 + ") --> " + factorial(num1));

                int num2 = 12;
                System.out.println("factorial(" + num2 + ") --> " + factorial(num2));
            }
        }

        ====
        import static org.junit.Assert.*;

        import org.junit.*;

        import java.io.*;

        public class RunestoneTests extends CodeTestHelper
        {
            public RunestoneTests()
            {
                super("Test1");
            }

            @Test
            public void test1()
            {
                String output = getMethodOutput("main");
                String expect = "factorial(5) --> 120\nfactorial(12) --> 479001600";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }

            @Test
            public void test2()
            {
                int num = 10;
                int expected = 3628800;
                int actual = Test1.factorial(num);

                boolean passed = getResults("" + expected, "" + actual, "Testing factorial(" + num + ")");
                assertTrue(passed);
            }

            @Test
            public void test3()
            {
                String code = getCodeWithoutComments();
                int count = countOccurences(code, "while") + countOccurences(code, "for");
                boolean passed = count == 0;
                getResults(
                        "0 loops",
                        count + " loop(s)",
                        "Making sure method is recursive, not iterative",
                        passed);
                assertTrue(passed);
            }
        }

