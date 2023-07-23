.. qnum::
   :prefix: 2-11-
   :start: 1

Unit 2 Write Code for Toggle Code
=========================================================

This is the write code problems associated with the mixed up code problems.


.. activecode:: u2_muc_wc1
        :language: java
        :practice: T
        :autograde: unittest

        Write code that prints a random number from 1 to 50.
        ~~~~
        public class Test1
        {
            public static void main(String[] args)
            {
                // Add your code here

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
                 String expect = "Any number between 1 and 50";
                 int out = Integer.parseInt(output);

                 boolean passed = (out > 0) && (out <= 50);

                 passed = getResults(expect, output, "Running main", passed);
                 assertTrue(passed);
             }

             @Test
             public void test2()
             {
                 boolean passed = checkCodeContains("Math.random()");
                 assertTrue(passed);
             }

             @Test
             public void test3()
             {
                 boolean passed = checkCodeContains("50");
                 assertTrue(passed);
             }

             @Test
             public void test4()
             {
                 boolean passed = checkCodeContains("+1");
                 assertTrue(passed);
             }

             @Test
             public void test5()
             {
                 boolean passed = checkCodeContains("(int)");
                 assertTrue(passed);
             }
         }

.. activecode:: u2_muc_wc2
        :language: java
        :practice: T
        :autograde: unittest

        Write code that prints the first 2 characters of the message followed by the last 2 characters of the message using the appropriate String methods.
        ~~~~
        public class Test1
        {
            public static void main(String[] args)
            {
                String message = "I hope this works";
                // Add your code here

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
                 String expect = "I ks";

                 boolean passed = getResults(expect, output, "Running main");
                 assertTrue(passed);
             }

             @Test
             public void test2()
             {
                 boolean passed = checkCodeContains(".substring(0, 2)");
                 assertTrue(passed);
             }

             @Test
             public void test3()
             {
                 boolean passed = checkCodeContains(".length()");
                 assertTrue(passed);
             }
         }

.. activecode:: u2_muc_wc3
        :language: java
        :practice: T
        :autograde: unittest

        Write code that prints the first letters in first, middle, and last in lowercase letters using the appropriate String methods.
        ~~~~
        public class Test1
        {
            public static void main(String[] args)
            {
                String first = "Gerald";
                String middle = "Foster";
                String last = "Jones";

                // Add your code here

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
                 String expect = "gfj";

                 boolean passed = getResults(expect, output, "Running main");
                 assertTrue(passed);
             }
         }

.. activecode:: u2_muc_wc4
        :language: java
        :practice: T
        :autograde: unittest

        Write code that prints the message in all uppercase letters using the appropriate String methods.
        ~~~~
        public class Test1
        {
            public static void main(String[] args)
            {
                String message = "Don't Pokemon and drive!";

                // Add your code here

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
                 String message = "Don't Pokemon and drive!";
                 String expect = message.toUpperCase();

                 boolean passed = getResults(expect, output, "Running main");
                 assertTrue(passed);
             }
         }

.. activecode:: u2_muc_wc5
        :language: java
        :practice: T
        :autograde: unittest

        Write code that prints the first 3 letters of the message in uppercase letters using the appropriate String methods.
        ~~~~
        public class Test1
        {
            public static void main(String[] args)
            {
                String message = "Have a nice day!";

                // Add your code here

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
                 String expect = "HAV";

                 boolean passed = getResults(expect, output, "Running main");
                 assertTrue(passed);
             }
         }

.. activecode:: u2_muc_wc6
        :language: java
        :practice: T
        :autograde: unittest

        Write code that print the part of the message starting with the word "nice" using the appropriate String methods.
        ~~~~
        public class Test1
        {
            public static void main(String[] args)
            {
                String message = "Have a nice day!";

                // Add your code here

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
                 String expect = "nice day";

                 boolean passed = getResults(expect, output, "Running main");
                 assertTrue(passed);
             }
         }

