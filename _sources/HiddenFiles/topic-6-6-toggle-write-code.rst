.. qnum::
   :prefix: 6-6-
   :start: 1

Unit 6 Write Code for Toggle Code
=========================================================

This is the write code problems associated with the mixed up code problems.

.. activecode:: u6_muc_wc1
        :language: java
        :practice: T
        :autograde: unittest

        Write a loop that traverses the array arr from 0 to less than the length of the array. In the loop, double each element in the array arr and print out each new value on the same line separated by ", ". The finished code should print "2, 4, 6, 8, 10, ".
        ~~~~
        public class Test1
        {
            public static void main(String[] args)
            {
                int[] arr = {1, 2, 3, 4, 5};

                // Add your code here

            }
        }

        ====
        // arrayex1muc
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
                String expect = "2, 4, 6, 8, 10, ";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }

            @Test
            public void test2()
            {
                String code = getCodeWithoutComments();
                int count = countOccurences(code, "for");
                boolean passed = count >= 1;
                getResults("1 loop", count + " loop(s)", "Counting number of for loops", passed);
                assertTrue(passed);
            }
        }

.. activecode:: u6_muc_wc2
        :language: java
        :practice: T
        :autograde: unittest

        Write a for loop that fills an array with elements that count up from 0 to 50 by 5 (0 5 10 15 20 … 50) and prints out each element on a separate line.
        ~~~~
        public class Test1
        {
            public static void main(String[] args)
            {
                int[] arr = new int[11];

                // Add your code here

            }
        }

        ====
        // arrayex2muc
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
                String expect = "0\n5\n10\n15\n20\n25\n30\n35\n40\n45\n50";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }

            @Test
            public void test2()
            {
                String code = getCodeWithoutComments();
                int count = countOccurences(code, "for");
                boolean passed = count >= 1;
                getResults("1 loop", count + " loop(s)", "Counting number of for loops", passed);
                assertTrue(passed);
            }
        }

.. activecode:: u6_muc_wc3
        :language: java
        :practice: T
        :autograde: unittest

        Write an enhanced for each loop to traverse the array and print out an element if it is even.
        ~~~~
        public class Test1
        {
            public static void main(String[] args)
            {
                int[] arr = {14, -5, 2, 17, 29, -8, 36};

                // Add your code here
            }
        }

        ====
        // arrayex3muc
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
                String expect = "14\n2\n-8\n36";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }

            @Test
            public void test2()
            {
                boolean passed =
                        checkCodeContains(
                                true, "enhanced for loop\nfor (int * : arr)", "for (int * : arr)", true);

                assertTrue(passed);
            }
        }

.. activecode:: u6_muc_wc4
        :language: java
        :practice: T
        :autograde: unittest

        Finish the method to return the smallest integer in an array arr given as the parameter.
        ~~~~
        import java.util.Arrays;

        public class Test1
        {
            public static int findSmallest(int[] arr)
            {
                int smallest = arr[0];

                // Add your code here

                return smallest;
            } // end findSmallest method

            // Do not change the code below
            public static void main(String[] args)
            {
                int[] arr1 = {-1, 2, 0, 6, -4, 5, 3};
                double out1 = findSmallest(arr1);

                System.out.println("arr1 --> " + Arrays.toString(arr1));
                System.out.println("findSmallest(arr1) --> " + out1);

                int[] arr2 = {7, -3, -5, 1};
                double out2 = findSmallest(arr2);

                System.out.println("arr2 --> " + Arrays.toString(arr2));
                System.out.println("findSmallest(arr2) --> " + out2);
            }
        }

        ====
        // arrayex4muc
        import static org.junit.Assert.*;

        import org.junit.*;

        import java.io.*;
        import java.util.Arrays;

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
                        "arr1 --> [-1, 2, 0, 6, -4, 5, 3]\n"
                            + "findSmallest(arr1) --> -4.0\n"
                            + "arr2 --> [7, -3, -5, 1]\n"
                            + "findSmallest(arr2) --> -5.0";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }

            @Test
            public void test2()
            {
                int[] inArr = {2, 4, 8, 10, 6, 0, 4, 12};
                int expect = 0;
                int output = Test1.findSmallest(inArr);

                String input = Arrays.toString(inArr);
                // String output = Arrays.toString(outArr);
                // String expect = Arrays.toString(expArr);

                boolean passed =
                        getResults("" + expect, "" + output, "Running findSmallest() with " + input);
                assertTrue(passed);
            }
        }

.. activecode:: u6_muc_wc5
        :language: java
        :practice: T
        :autograde: unittest

        Finish the method to return the average of the elements in an array arr given as the parameter. The method should return the average.
        ~~~~
        import java.util.Arrays;

        public class Test1
        {
            public static double findAverage(int[] arr)
            {

                double sum = 0;

                // Add code below

            } // end findAverage method

            // Do not change the code below
            public static void main(String[] args)
            {
                int[] arr1 = {1, 2, 6, 4, 5, 3};
                double out1 = findAverage(arr1);

                System.out.println("arr1 --> " + Arrays.toString(arr1));
                System.out.println("findAverage(arr1) --> " + out1);

                int[] arr2 = {7, 3, 5, 1};
                double out2 = findAverage(arr2);

                System.out.println("arr2 --> " + Arrays.toString(arr2));
                System.out.println("findAverage(arr2) --> " + out2);
            }
        }

        ====
        // arrayex5muc
        import static org.junit.Assert.*;

        import org.junit.*;

        import java.io.*;
        import java.util.Arrays;

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
                        "arr1 --> [1, 2, 6, 4, 5, 3]\n"
                            + "findAverage(arr1) --> 3.5\n"
                            + "arr2 --> [7, 3, 5, 1]\n"
                            + "findAverage(arr2) --> 4.0";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }

            @Test
            public void test2()
            {
                int[] inArr = {2, 4, 8, 10, 6, 4, 12, 0};
                double expect = 5.75;
                double output = Test1.findAverage(inArr);

                String input = Arrays.toString(inArr);
                // String output = Arrays.toString(outArr);
                // String expect = Arrays.toString(expArr);

                boolean passed =
                        getResults("" + expect, "" + output, "Running findAverage() with " + input);
                assertTrue(passed);
            }
        }

.. activecode:: u6_muc_wc6
        :language: java
        :practice: T
        :autograde: unittest

        Finish the method to return the largest integer in an array arr given as the parameter.
        ~~~~
        import java.util.Arrays;

        public class Test1
        {

            public static int findLargest(int[] arr)
            {
                // Add your code here

            } // end findLargest method

            // Don't change the code below
            public static void main(String[] args)
            {
                int[] arr1 = {1, 2, 6, 4, 5, 3};
                int out1 = findLargest(arr1);

                System.out.println("arr1 --> " + Arrays.toString(arr1));
                System.out.println("findLargest(arr1) --> " + out1);

                int[] arr2 = {7, 3, 5, 1};
                int out2 = findLargest(arr2);

                System.out.println("arr2 --> " + Arrays.toString(arr2));
                System.out.println("findLargest(arr2) --> " + out2);
            }
        }

        ====
        // arrayex6muc
        import static org.junit.Assert.*;

        import org.junit.*;

        import java.io.*;
        import java.util.Arrays;

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
                        "arr1 --> [1, 2, 6, 4, 5, 3]\n"
                            + "findLargest(arr1) --> 6\n"
                            + "arr2 --> [7, 3, 5, 1]\n"
                            + "findLargest(arr2) --> 7";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }

            @Test
            public void test2()
            {
                int[] inArr = {2, 4, 8, 10, 6, 4, 12, 0};
                int expect = 12;
                int output = Test1.findLargest(inArr);

                String input = Arrays.toString(inArr);
                // String output = Arrays.toString(outArr);
                // String expect = Arrays.toString(expArr);

                boolean passed =
                        getResults("" + expect, "" + output, "Running findLargest() with " + input);
                assertTrue(passed);
            }
        }

.. activecode:: u6_muc_wc7
        :language: java
        :practice: T
        :autograde: unittest

        Finish the method that given an array as a parameter, returns the elements "right shifted" by one – so ``{6, 2, 5, 3}`` returns ``{3, 6, 2, 5}``.
        ~~~~
        import java.util.Arrays;

        public class Test1
        {

            public static int[] shiftRight(int[] arr)
            {

                int[] result = new int[arr.length];

                // Add your code here

                return result;
            } // end shiftRight method

            // Don't change any code beyond this point
            public static void main(String[] args)
            {
                int[] arr1 = {1, 2, 3, 4, 5, 6};
                int[] arr1o = shiftRight(arr1);

                System.out.println("arr1 --> " + Arrays.toString(arr1));
                System.out.println("shiftRight(arr1) --> " + Arrays.toString(arr1o));

                int[] arr2 = {1, 3, 5};
                int[] arr2o = shiftRight(arr2);

                System.out.println("arr2 --> " + Arrays.toString(arr2));
                System.out.println("shiftRight(arr2) --> " + Arrays.toString(arr2o));
            }
        }

        ====
        // arrayex7muc
        import static org.junit.Assert.*;

        import org.junit.*;

        import java.io.*;
        import java.util.Arrays;

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
                        "arr1 --> [1, 2, 3, 4, 5, 6]\n"
                            + "shiftRight(arr1) --> [6, 1, 2, 3, 4, 5]\n"
                            + "arr2 --> [1, 3, 5]\n"
                            + "shiftRight(arr2) --> [5, 1, 3]";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }

            @Test
            public void test2()
            {
                int[] inArr = {10, 8, 6, 4, 2, 0};
                int[] expArr = {0, 10, 8, 6, 4, 2};
                int[] outArr = Test1.shiftRight(inArr);

                String input = Arrays.toString(inArr);
                String output = Arrays.toString(outArr);
                String expect = Arrays.toString(expArr);

                boolean passed = getResults(expect, output, "Running shiftRight() with " + input);
                assertTrue(passed);
            }
        }

.. activecode:: u6_muc_wc8
        :language: java
        :practice: T
        :autograde: unittest

        Finish the method to return a new array of length 2 containing the middle two elements of a given array of integers of even length (the parameter) – so ``{1,2,3,4}`` should return ``{2,3}``.
        ~~~~
        import java.util.Arrays;

        public class Test1
        {
            public static int[] makeMiddle(int[] arr)
            {
                int[] result = new int[2];

                // Finish this code (no loop necessary)
                int middleIndex =
                result[0] =
                result[1] =

                return result;

            } // end makeMiddle method



            // Don't change the code below
            public static void main(String[] args) {
                int[] arr1 = { 1, 2, 3, 4, 5, 6 };
                int[] arr1o = makeMiddle(arr1);

                System.out.println("arr1 --> " + Arrays.toString(arr1));
                System.out.println("makeMiddle(arr1) --> " + Arrays.toString(arr1o));

                int[] arr2 = { 1, 3, 5 };
                int[] arr2o = makeMiddle(arr2);

                System.out.println("arr2 --> " + Arrays.toString(arr2));
                System.out.println("makeMiddle(arr2) --> " + Arrays.toString(arr2o));
            }
        }

        ====
        // arrayex8muc
        import static org.junit.Assert.*;

        import org.junit.*;

        import java.io.*;
        import java.util.Arrays;

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
                        "arr1 --> [1, 2, 3, 4, 5, 6]\n"
                            + "makeMiddle(arr1) --> [3, 4]\n"
                            + "arr2 --> [1, 3, 5]\n"
                            + "makeMiddle(arr2) --> [1, 3]";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }

            @Test
            public void test2()
            {
                int[] inArr = {10, 8, 6, 4, 2, 0};
                int[] expArr = {6, 4};
                int[] outArr = Test1.makeMiddle(inArr);

                String input = Arrays.toString(inArr);
                String output = Arrays.toString(outArr);
                String expect = Arrays.toString(expArr);

                boolean passed = getResults(expect, output, "Running makeMiddle() with " + input);
                assertTrue(passed);
            }
        }

.. activecode:: u6_muc_wc9
        :language: java
        :practice: T
        :autograde: unittest

        Finish the method that should return string array that is in reverse order – so ``{"b", "a", "z"}`` should return ``{"z", "a", "b"}``.
        ~~~~
        import java.util.Arrays;

        public class Test1
        {

            public static String[] reverse(String[] arr)
            {

                String[] result = new String[arr.length];

                // Add your code here

                return result;
            } // end reverse method

            // Don't change the code below
            public static void main(String[] args)
            {
                String[] arr1 = "abc".split("");
                String[] arr1o = reverse(arr1);

                System.out.println("arr1 --> " + Arrays.toString(arr1));
                System.out.println("reverse(arr1) --> " + Arrays.toString(arr1o));

                String[] arr2 = "abcdef".split("");
                String[] arr2o = reverse(arr2);

                System.out.println("arr2 --> " + Arrays.toString(arr2));
                System.out.println("reverse(arr2) --> " + Arrays.toString(arr2o));
            }
        }

        ====
        // arrayex9muc
        import static org.junit.Assert.*;

        import org.junit.*;

        import java.io.*;
        import java.util.Arrays;

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
                        "arr1 --> [a, b, c]\n"
                            + "reverse(arr1) --> [c, b, a]\n"
                            + "arr2 --> [a, b, c, d, e, f]\n"
                            + "reverse(arr2) --> [f, e, d, c, b, a]";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }

            @Test
            public void test2()
            {
                String[] inArr = "mnopqrs".split("");
                String[] expArr = "srqponm".split("");
                String[] outArr = Test1.reverse(inArr);

                String input = Arrays.toString(inArr);
                String output = Arrays.toString(outArr);
                String expect = Arrays.toString(expArr);

                boolean passed = getResults(expect, output, "Running reverse() with " + input);
                assertTrue(passed);
            }
        }

.. activecode:: u6_muc_wc10
        :language: java
        :practice: T
        :autograde: unittest

        Finish the method so that it copies the first half of an array given as an argument to the method into a result array which is returned.
        ~~~~
        import java.util.Arrays;

        public class Test1
        {

            public static int[] firstHalf(int[] arr)
            {

                // Add your code here

            } // end firstHalf method

            // Don't change the code below
            public static void main(String[] args)
            {
                int[] arr1 = {1, 2, 3, 4, 5, 6};
                int[] arr1o = firstHalf(arr1);

                System.out.println("arr1 --> " + Arrays.toString(arr1));
                System.out.println("firstHalf(arr1) --> " + Arrays.toString(arr1o));

                int[] arr2 = {1, 3, 5};
                int[] arr2o = firstHalf(arr2);

                System.out.println("arr2 --> " + Arrays.toString(arr2));
                System.out.println("firstHalf(arr2) --> " + Arrays.toString(arr2o));
            }
        }

        ====
        // arrayex10muc
        import static org.junit.Assert.*;

        import org.junit.*;

        import java.io.*;
        import java.util.Arrays;

        public class RunestoneTests extends CodeTestHelper
        {
            public RunestoneTests()
            {
                super("Test1");
            }

            @Test
            public void test1()
            {
                // arr1 --> [1, 2, 3, 4, 5, 6]\nfirstHalf(arr1) --> [1, 2, 3]\narr2 --> [1, 3,
                // 5]\nfirstHalf(arr2) --> [1]
                String output = getMethodOutput("main");
                String expect =
                        "arr1 --> [1, 2, 3, 4, 5, 6]\n"
                            + "firstHalf(arr1) --> [1, 2, 3]\n"
                            + "arr2 --> [1, 3, 5]\n"
                            + "firstHalf(arr2) --> [1]";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }

            @Test
            public void test2()
            {
                int[] inArr = {10, 8, 6, 4, 2, 0};
                int[] expArr = {10, 8, 6};
                int[] outArr = Test1.firstHalf(inArr);

                String input = Arrays.toString(inArr);
                String output = Arrays.toString(outArr);
                String expect = Arrays.toString(expArr);

                boolean passed = getResults(expect, output, "Running firstHalf() with " + input);
                assertTrue(passed);
            }
        }

