.. qnum::
   :prefix: 8-4-
   :start: 1

Unit 8 Write Code for Toggle Code
=========================================================

This is the write code problems associated with the mixed up code problems.

.. activecode:: u8_muc_wc1
        :language: java
        :practice: T
        :autograde: unittest

        Fix the errors (marked by comments) in the code so that it correctly creates a 10x10 array called ``table`` filled with numbers from 0 to 99 in left-right top-bottom order and prints the output (in row-column order) with the numbers separated by tabs. Most of the errors are syntactical, but one is logical.
        ~~~~
        public class Test1 
        {
            public static void main(String[] args) 
            {
                int[][] table = int[9][9]; // This line has errors
                for (int row = 0; row < table.length(); row++)  // This line has an error
                {
                    for (int col = row; col < table[row].length(); col++)  // This line has errors
                    {
                        table[row][col] = col + 10 * row;
                        System.out.print(table[row][col] + "\t");
                    }
                }
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
                        "0   1   2   3   4   5   6   7   8   9   10  11  12  13  14  15  16  17  18  19  20"
                            + "  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36   37  38 "
                            + " 39  40  41  42  43  44  45  46  47  48  49  50  51  52  53  54  55  56  57 "
                            + " 58  59  60  61  62  63  64  65  66  67  68  69  70  71  72  73  74   75  76"
                            + "  77  78  79  80  81  82  83  84  85  86  87  88  89  90  91  92  93  94  95"
                            + "  96  97  98  99";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }
        }

.. activecode:: u8_muc_wc2
        :language: java
        :practice: T
        :autograde: unittest

        This program is supposed to create an 8x8 two-dimensional ``int`` array that is filled with a checkered patterns of 0s and 1s, starting with a 1 in the top left corner. It should also print the output in row-column order, separating each element with a space. The only missing part is the ``if`` statement that decides if a specific cell should be a 0 or a 1. Fill that in to finish the problem.

        Hint: Try drawing out a smaller version (around 4x4) of a checkered two-dimensional array. Can you notice a pattern in the row numbers and column numbers of the 1s?

        ~~~~
        public class Test1 {
            public static void main(String[] args) 
            {
                int[][] checkerboard = new int[8][8];
                for (int row = 0; row < checkerboard.length; row++) 
                {
                    for (int col = 0; col < checkerboard[row].length; col++) 
                    {
                        if ()  // How can we check if a cell should be 0 or 1?
                        {
                            checkerboard[row][col] = 1;
                        } //end if
                        System.out.print(checkerboard[row][col] + " ");
                    } //end inner for loop
                } //end outer for loop
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
                        "1 0 1 0 1 0 1 0 0 1 0 1 0 1 0 1 1 0 1 0 1 0 1 0 0 1 0 1 0 1 0 1 1 0 1 0 1 0 1 0 0"
                            + " 1 0 1 0 1 0 1 1 0 1 0 1 0 1 0 0 1 0 1 0 1 0 1";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }
        }

.. activecode:: u8_muc_wc3
        :language: java
        :practice: T
        :autograde: unittest

        The ``sumVals`` function in the below program should iterate through a two-dimensional ``int`` array ``nums`` and return its sum. Fill in the headers for the for loops such that the method  iterates through the entirety of ``nums``.
        ~~~~
        import java.util.Arrays;

        public class Test1
        {
            public static int sumVals(int[][] nums) 
            {
                int sum = 0;

                for ()   // fill in this for loop header
                {
                    for ()  // fill in this for loop header
                    {
                        sum += nums[row][col];
                    }
                }

                return sum;

            } //end method

            public static void main(String[] args) 
            {
                // You don't need to make any changes to this method
                int[][] arr1 = { {-1, 2, 0}, {6, -4, 5}, {3, 4, 8} };
                int out1 = sumVals(arr1);

                System.out.println("sumVals(arr1) --> " + out1);

                int[][] arr2 = { {7, -3}, {-5, 1} };
                int out2 = sumVals(arr2);

                System.out.println("sumVals(arr2) --> " + out2);
            }
        }
        ====
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
                String expect = "sumVals(arr1) --> 23\nsumVals(arr2) --> 0";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }

            @Test
            public void test2()
            {
                int[][] inArr = { {2, 4, 8, 10}, {6, 0, 4, 12}};
                int expect = 46;
                int output = Test1.sumVals(inArr);

                String input = stringify2DArray(inArr);
                // String output = Arrays.toString(outArr);
                // String expect = Arrays.toString(expArr);

                boolean passed = getResults("" + expect, "" + output, "Running sumVals() with " + input);
                assertTrue(passed);
            }

            private String stringify2DArray(int[][] mat)
            {
                String output = "[";

                for (int i = 0; i < mat.length; i++)
                {
                    output += Arrays.toString(mat[i]);

                    if (i < mat.length - 1)
                    {
                         output += ", ";
                    }


                }

                return output + "]";
            }
        }

.. activecode:: u8_muc_wc4
        :language: java
        :practice: T
        :autograde: unittest

        Fill in the ``flipImage`` method. This should accept a two-dimensional String array ``image`` and flip the “image” 180 degrees vertically. For example, ``{ {"green", "red", "blue"}, {"cat", "dog", "yellow"} }`` would become ``{ {"blue", "red", "green"}, {"yellow", "dog", "cat"} }``.
        ~~~~
        import java.util.Arrays;

        public class Test1
        {

            public static void flipImage(String[][] image)
            {
                for (int row = 0; row < image.length; row++)
                {
                    for (int col = 0; col < image[0].length / 2; col++)
                    {
                        // YOUR CODE HERE
                        // Hint: this inside loop only goes until image[0].length/2 and
                        // that's all you need
                        // Think about swapping two elements
                    } // end inner loop
                } // end outer loop
            } // end method

            public static void main(String[] args)
            {
                String[][] test =
                {
                    {"this", "is", "a", "test"}, {"hello", "world", "good", "luck"}
                };
                System.out.println("Before: " + Arrays.deepToString(test));
                flipImage(test);
                System.out.println("After: " + Arrays.deepToString(test));
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
                        "Before: [[this, is, a, test], [hello, world, good, luck]]\n"
                            + "After: [[test, a, is, this], [luck, good, world, hello]]";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }
        }

.. activecode:: u8_muc_wc5
        :language: java
        :practice: T
        :autograde: unittest

        Write the ``makeEvenNumbersZero`` method such that it iterates through the two-dimensional ``int`` array ``nums`` and replaces each instance of an even number with 0. For example, ``{ {3, 4, 5}, {6, 7, 8} }`` would become ``{ {3, 0, 5}, {0, 7, 0} }``.
        ~~~~
        import java.util.Arrays;

        public class Test1
        {
            public static void makeEvenNumsZero(int[][] nums)
            {

                // YOUR CODE HERE

            }

            // necessary main method
            public static void main(String[] args)
            {
                int[][] a =
                {
                    {
                        1, 2, 3, 4,
                    },
                    {4, 3, 2, 1},
                    {0, 9, 4, 5}
                };
                makeEvenNumsZero(a);
                System.out.println(Arrays.deepToString(a));
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
                super("MakeEvenNumbersZero");
            }

            @Test
            public void test1()
            {
                String output = getMethodOutput("main");
                String expect = "[[1, 0, 3, 0], [0, 3, 0, 1], [0, 9, 0, 5]]";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }
        }

.. activecode:: u8_muc_wc6
        :language: java
        :practice: T
        :autograde: unittest

        Fill in the ``numOccurrences`` method. It should take in a two-dimension ``int`` array ``nums`` and an ``int`` ``desired`` and return the number of times that ``desired`` appears in ``nums``. E.g., with ``{ {3, 1, 2}, {3, 4, 1} }`` as ``nums``, ``numOccurrences(nums, 1)`` should return ``2``.
        ~~~~
        public class Test1
        {

            public static int numOccurrences(int[][] nums, int desired)
            {
                int occurrences = 0;

                // YOUR CODE HERE //

                return occurrences;
            }

            public static void main(String[] args)
            {
                int[][] numbers = { {0, 1, 2}, {3, 1, 5}, {6, 1, 1}};
                int output = numOccurrences(numbers, 1);
                System.out.println(
                        "The number of times that 1 appears in the data set: " + output);
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
                String expect = "The number of times that 1 appears in the data set: 4";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }
        }

.. activecode:: u8_muc_wc7
        :language: java
        :practice: T
        :autograde: unittest

        Fill in the ``averageCols`` method. It should accept a two-dimensional int array ``nums`` and return a one-dimensional (normal) ``int`` array containing the integer average of each of the columns (NOT the rows). E.g., with ``nums`` as ``{ {3, 5, 2}, {1, 1, 6} }``, ``averageCols(nums)`` should return ``{2, 3, 4}`` as that is ``(3 + 1) / 2``, ``(5 + 1) / 2``, and ``(2 + 6) / 2``.
        ~~~~
        import java.util.Arrays;

        public class Test1
        {

            public static int[] averageCols(int[][] nums)
            {

                int[] averages = new int[nums[0].length];

                // Hint: Instead of iterating through rows then columns like we normally
                // do, try iterating by columns then rows

                return averages;
            } // end method

            public static void main(String[] args)
            {
                int[][] test = { {0, 1, 2}, {3, 4, 5}, {6, 7, 8}};
                int[] output = averageCols(test);
                System.out.println("Averages: " + Arrays.toString(output));
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
                String expect = "Averages: [3, 4, 5]";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }
        }

.. activecode:: u8_muc_wc8
        :language: java
        :practice: T
        :autograde: unittest

        Write the ``oddRows`` method. This should take in a two-dimensional ``int`` array ``nums`` and return a new two-dimensional ``int`` array containing only the odd-index rows. For example, with ``nums`` equal to ``{ {3, 2, 1}, {4, 5, 6}, {1, 5, 7} }``, ``oddRows(nums)`` would return ``{ {4, 5, 6} }`` as that was the row at index 1, which is the only odd index present.
        ~~~~
        import java.util.Arrays;

        public class Test1
        {

            public static int[][] oddRows(int[][] nums)
            {

                int[][] odds = new int[nums.length / 2][nums[0].length];

                // YOUR CODE HERE

                return odds;
            } // end method

            public static void main(String[] args)
            {
                int[][] arr1 = { {-1, 2, 0}, {6, -4, 5}, {3, 4, 8}};
                int[][] out1 = oddRows(arr1);

                // Arrays.deepToString is a method that prints 2d arrays nicely
                System.out.println("oddRows(arr1) --> " + Arrays.deepToString(out1));

                int[][] arr2 = { {7, -3}, {-5, 1}, {2, 4}, {8, 5}};
                int[][] out2 = oddRows(arr2);

                System.out.println("oddRows(arr2) --> " + Arrays.deepToString(out2));
            }
        }

        ====
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
                String expect = "oddRows(arr1) --> [[6, -4, 5]]\noddRows(arr2) --> [[-5, 1], [8, 5]]";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }

            @Test
            public void test2()
            {
                int[][] inArr = { {2, 4, 8, 10}, {6, 0, 4, 12}, {1, 3, 5, 7}, {8, 6, 4, 2}};
                String expect = "[[6, 0, 4, 12], [8, 6, 4, 2]]";
                String output = Arrays.deepToString(Test1.oddRows(inArr));

                String input = Arrays.deepToString(inArr);
                // String output = Arrays.toString(outArr);
                // String expect = Arrays.toString(expArr);

                boolean passed = getResults(expect, output, "Running oddRows() with " + input);
                assertTrue(passed);
            }
        }

.. activecode:: u8_muc_wc9
        :language: java
        :practice: T
        :autograde: unittest

        Write the ``breakIntoLetters`` method. It should accept a two-dimensional String array, in which each row contains the characters of a word. It should then return a single-dimensional (normal) String array containing the words in each row of the two-dimensional array. For example, calling ``breakIntoLetters`` on { {"b", "a", "t", "h"}, {"t", "e", "n", "s"}, {"j", "a", "c", "k"}, {"l", "a", "z", "y"} } should return {"bath", "tens", "jack", "lazy"}.
        ~~~~
        import java.util.Arrays;

        public class Test1
        {

            public static String[] breakIntoLetters(String[][] words)
            {

                // YOUR CODE HERE

            } // end method

            public static void main(String[] args)
            {
                String[][] mat1 =
                {
                    {"b", "a", "t", "h"},
                    {"t", "e", "n", "s"},
                    {"j", "a", "c", "k"},
                    {"l", "a", "z", "y"}
                };
                String[] out1 = breakIntoLetters(mat1);

                System.out.println("mat1 --> " + Arrays.deepToString(mat1));
                System.out.println("breakIntoLetters(mat1) --> " + Arrays.toString(out1));
            }
        }

        ====
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
                        "mat1 --> [[b, a, t, h], [t, e, n, s], [j, a, c, k], [l, a, z, y]]\n"
                            + "breakIntoLetters(mat1) --> [bath, tens, jack, lazy]";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }

            @Test
            public void test2()
            {
                String[][] inArr =
                {
                    "computer".split(""), "science".split(""), "rocks".split(""),
                };
                String expect = "[computer, science, rocks]";
                String output = Arrays.toString(Test1.breakIntoLetters(inArr));

                String input = Arrays.deepToString(inArr);
                // String output = Arrays.toString(outArr);
                // String expect = Arrays.toString(expArr);

                boolean passed = getResults(expect, output, "Running breakIntoLetters() with " + input);
                assertTrue(passed); /**/
            }
        }

.. activecode:: u8_muc_wc10
        :language: java
        :practice: T
        :autograde: unittest

        Write the ``maxEachRow`` method. It that should accept a two-dimensional ``int`` array ``nums``, and return a single-dimensional (normal) ``int`` array containing the max of each row. For example, the returned array for { {3}, {4, 9, 6, -1}, {45, 1} } should be {3, 9, 45}.
        ~~~~
        import java.util.Arrays;

        public class Test1
        {

            public static int[] maxEachRow(int[][] nums)
            {

                // YOUR CODE HERE

            } // end method

            public static void main(String[] args)
            {
                int[][] mat1 = { {-1, 2, 0}, {6, -4, 5}, {3, 4, 8}};
                int[] out1 = maxEachRow(mat1);

                System.out.println("mat1 --> " + Arrays.deepToString(mat1));
                System.out.println("maxEachRow(mat1) --> " + Arrays.toString(out1));

                int[][] mat2 = { {7, -3}, {-5, 1}};
                int[] out2 = maxEachRow(mat2);

                System.out.println("mat2 --> " + Arrays.deepToString(mat2));
                System.out.println("maxEachRow(mat2) --> " + Arrays.toString(out2));
            }
        }

        ====
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
                        "mat1 --> [[-1, 2, 0], [6, -4, 5], [3, 4, 8]]\n"
                            + "maxEachRow(mat1) --> [2, 6, 8]\n"
                            + "mat2 --> [[7, -3], [-5, 1]]\n"
                            + "maxEachRow(mat2) --> [7, 1]";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }

            @Test
            public void test2()
            {
                int[][] inArr = { {2, 4, 8, 10}, {6, 0, 4, 12}};
                String expect = "[10, 12]";
                String output = Arrays.toString(Test1.maxEachRow(inArr));

                String input = Arrays.deepToString(inArr);
                // String output = Arrays.toString(outArr);
                // String expect = Arrays.toString(expArr);

                boolean passed = getResults(expect, output, "Running maxEachRow() with " + input);
                assertTrue(passed);
            }
        }

