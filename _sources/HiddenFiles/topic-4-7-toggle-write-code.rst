.. qnum::
   :prefix: 4-7-
   :start: 1

Unit 4 Write Code for Toggle Code
=========================================================

This is the write code problems associated with the mixed up code problems.

.. activecode:: u4_muc_wc1
        :language: java
        :practice: T
        :autograde: unittest

        Finish the code to print out all the values from 20 to 30 (20, 21, 22, … 30).
        ~~~~
        public class Test1
        {
            public static void main(String[] args)
            {
                // Add your code here

            }
        }

        ====
        // ch6ex1muc
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
                String expect = "20\n21\n22\n23\n24\n25\n26\n27\n28\n29\n30";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }

            @Test
            public void test2()
            {
                String code = getCodeWithoutComments();
                int count = countOccurences(code, "while") + countOccurences(code, "for");
                boolean passed = count > 0;
                getResults("1 loop", count + " loop(s)", "Counting number of loops", passed);
                assertTrue(passed);
            }
        }

.. activecode:: u4_muc_wc2
        :language: java
        :practice: T
        :autograde: unittest

        Finish the code to print a countdown from 15 to 0 (15, 14, 13, … 0).
        ~~~~
        public class Test1
        {
            public static void main(String[] args)
            {
                // Add your code here

            }
        }

        ====
        // ch6ex2muc
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
                String expect = "15\n14\n13\n12\n11\n10\n9\n8\n7\n6\n5\n4\n3\n2\n1\n0";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }

            @Test
            public void test2()
            {
                String code = getCodeWithoutComments();
                int count = countOccurences(code, "while") + countOccurences(code, "for");
                boolean passed = count > 0;
                getResults("1 loop", count + " loop(s)", "Counting number of loops", passed);
                assertTrue(passed);
            }
        }

.. activecode:: u4_muc_wc3
        :language: java
        :practice: T
        :autograde: unittest

        Finish the code to print up from 0 to 50 by 5 (0, 5, 10, 15 … 50).
        ~~~~
        public class Test1
        {
            public static void main(String[] args)
            {
                // Add your code here

            }
        }

        ====
        // ch6ex3muc
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
                int count = countOccurences(code, "while") + countOccurences(code, "for");
                boolean passed = count > 0;
                getResults("1 loop", count + " loop(s)", "Counting number of loops", passed);
                assertTrue(passed);
            }
        }

.. activecode:: u4_muc_wc4
        :language: java
        :practice: T
        :autograde: unittest

        Finish the code to print out the values from 0 to 100 by 20’s (0, 20, 40, .. 100).
        ~~~~
        public class Test1
        {
            public static void main(String[] args)
            {
                // Add your code here

            }
        }

        ====
        // ch6ex4muc
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
                String expect = "0\n20\n40\n60\n80\n100";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }

            @Test
            public void test2()
            {
                String code = getCodeWithoutComments();
                int count = countOccurences(code, "while") + countOccurences(code, "for");
                boolean passed = count > 0;
                getResults("1 loop", count + " loop(s)", "Counting number of loops", passed);
                assertTrue(passed);
            }
        }

.. activecode:: u4_muc_wc5
        :language: java
        :practice: T
        :autograde: unittest

        Finish the code to print out the values from 100 to 0 by 10’s (100, 90, 80, … 0).
        ~~~~
        public class Test1
        {
            public static void main(String[] args)
            {
                // Add your code here

            }
        }

        ====
        // ch6ex5muc
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
                String expect = "100\n90\n80\n70\n60\n50\n40\n30\n20\n10\n0";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }

            @Test
            public void test2()
            {
                String code = getCodeWithoutComments();
                int count = countOccurences(code, "while") + countOccurences(code, "for");
                boolean passed = count > 0;
                getResults("1 loop", count + " loop(s)", "Counting number of loops", passed);
                assertTrue(passed);
            }
        }

.. activecode:: u4_muc_wc7
        :language: java
        :practice: T
        :autograde: unittest

        Finish the code to print 3 rows with 6 ``*`` in each row. Be sure to use two loops.
        ~~~~
        public class Test1
        {
            public static void main(String[] args)
            {
                // Add your code here

            }
        }

        ====
        // ch6ex7muc
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
                String expect = "******\n******\n******";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }

            @Test
            public void test2()
            {
                String code = getCodeWithoutComments();
                int count = countOccurences(code, "while") + countOccurences(code, "for");
                boolean passed = count == 2;
                getResults("2 loops", count + " loop(s)", "Counting number of loops", passed);
                assertTrue(passed);
            }
        }

.. activecode:: u4_muc_wc8
        :language: java
        :practice: T
        :autograde: unittest

        Finish the code to print 1 (followed by a newline), then 22 (followed by a newline), and then 333 (followed by a newline). Be sure to use two loops.
        ~~~~
        public class Test1
        {
            public static void main(String[] args)
            {
                // Add your code here

            }
        }

        ====
        // ch6ex8muc
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
                String expect = "1\n22\n333";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }

            @Test
            public void test2()
            {
                String code = getCodeWithoutComments();
                int count = countOccurences(code, "while") + countOccurences(code, "for");
                boolean passed = count == 2;
                getResults("2 loops", count + " loop(s)", "Counting number of loops", passed);
                assertTrue(passed);
            }
        }

.. activecode:: u4_muc_wc9
        :language: java
        :practice: T
        :autograde: unittest

        Finish the code to print 11111, 22222, 33333, 44444, and 55555. Be sure to use two loops.
        ~~~~
        public class Test1
        {
            public static void main(String[] args)
            {
                // Add your code here

            }
        }

        ====
        // ch6ex9muc
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
                String expect = "11111\n22222\n33333\n44444\n55555";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }

            @Test
            public void test2()
            {
                String code = getCodeWithoutComments();
                int count = countOccurences(code, "while") + countOccurences(code, "for");
                boolean passed = count >= 2;
                getResults("2 loops", count + " loop(s)", "Counting number of loops", passed);
                assertTrue(passed);
            }
        }

.. activecode:: u4_muc_wc10
        :language: java
        :practice: T
        :autograde: unittest

        Finish the code to print 11111, 2222, 333, 44, 5. Be sure to use two loops.
        ~~~~
        public class Test1
        {
            public static void main(String[] args)
            {
                // Add your code here

            }
        }

        ====
        // ch6ex10muc
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
                String expect = "11111\n2222\n333\n44\n5";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }

            @Test
            public void test2()
            {
                String code = getCodeWithoutComments();
                int count = countOccurences(code, "while") + countOccurences(code, "for");
                boolean passed = count >= 2;
                getResults("2 loops", count + " loop(s)", "Counting number of loops", passed);
                assertTrue(passed);
            }
        }

