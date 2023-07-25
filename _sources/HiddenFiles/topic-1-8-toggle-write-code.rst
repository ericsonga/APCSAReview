.. qnum::
   :prefix: 1-8-
   :start: 1

Unit 1 Write Code for Toggle Code
=========================================================

This is the write code problems associated with the mixed up code problems.

.. activecode:: u1_muc_wc1
        :language: java
        :practice: T
        :autograde: unittest

        Write code that prints Maria's first name on one line and her last name on the next line.
        ~~~~
        public class Test1
        {
            public static void main(String[] args)
            {
                String firstName = "Maria";
                String lastName = "Hernandez";

                // Add your code here

            }
        }

        ====
        // ch4ex1muc
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
                String expect = "Maria\nHernandez";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }
        }

.. activecode:: u1_muc_wc2
        :language: java
        :practice: T
        :autograde: unittest

        Write code that prints the poem ``Roses are red`` ``Violets are blue`` ``Sugar is sweet`` ``And so are you`` with 1 sentence on each line.
        ~~~~
        public class Test1
        {
            public static void main(String[] args)
            {
                // Add your code here

            }
        }

        ====
        // ch4ex2muc
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
                String expect = "Roses are red\nViolets are blue\nSugar is sweet\nAnd so are you";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }
        }

.. activecode:: u1_muc_wc3
        :language: java
        :practice: T
        :autograde: unittest

        Write code that prints Marcus’s name on one line and his favorite color (Blue) on the next line.
        ~~~~
        public class Test1
        {
            public static void main(String[] args)
            {
                String name = "Marcus";
                String favoriteColor = "Blue";

                // Add your code here

            }
        }

        ====
        // ch4ex3muc
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
                String expect = "Marcus\nBlue";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }
        }

.. activecode:: u1_muc_wc4
        :language: java
        :practice: T
        :autograde: unittest

        Write code that figures out the cost for each shirt if you buy 2 and get the third free and they are originally $45 each. Make sure your answer is a double.
        ~~~~
        public class Test1
        {
            public static void main(String[] args)
            {
                double price = 45;
                // Add your code here

            }
        }

        ====
        // ch3ex1muc
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
                String expect = "30.0";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }
        }

.. activecode:: u1_muc_wc5
        :language: java
        :practice: T
        :autograde: unittest

        Write code that figures out the cost per person for a dinner including the tip. Assume the bill was $89.23, there are three people, and the tip should be 20%. Make sure your answer is a double.
        ~~~~
        public class Test1
        {
            public static void main(String[] args)
            {
                double bill = 89.23;
                // Add your code here

            }
        }

        ====
        // ch3ex2muc
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
                double result = Double.parseDouble(output);
                double expect = 35.692;

                boolean passed = getResults(expect, result, "Running main");
                assertTrue(passed);
            }
        }

.. activecode:: u1_muc_wc6
        :language: java
        :practice: T
        :autograde: unittest

        Write code that calculates and prints the number of seconds in 5 days.
        ~~~~
        public class Test1
        {
            public static void main(String[] args)
            {
                // Add your code here

            }
        }

        ====
        // ch3ex4muc
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
                String expect = "432000";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }
        }

.. activecode:: u1_muc_wc7
        :language: java
        :practice: T
        :autograde: unittest

        Write code that calculates and prints the number of months it would take you to save $500 if you make $50 a week. Make sure your answer is a double.
        ~~~~
        public class Test1
        {
            public static void main(String[] args)
            {
                // Add your code here

            }
        }

        ====
        // ch3ex5muc
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
                String expect = "2.5";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }
        }

.. activecode:: u1_muc_wc8
        :language: java
        :practice: T
        :autograde: unittest

        Write code that prints the name on one line followed by the age on the next line. Your output should look like ``Your name is Layla`` and ``Your age is 16``.
        ~~~~
        public class Test1
        {
            public static void main(String[] args)
            {
                String name = "Layla";
                String age = "16";

                // Add your code here

            }
        }

        ====
        // ch4ex5muc
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
                String expect = "Your name is Layla\nYour age is 16";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }
        }

.. activecode:: u1_muc_wc9
        :language: java
        :practice: T
        :autograde: unittest

        Write code that prints the name on one line and the favorite food on the next line. Your output should look like ``Your name is Julian`` ``Your favorite food is chicken wings``
        ~~~~
        public class Test1
        {
            public static void main(String[] args)
            {
                String name = "Julian";
                String food = "chicken wings";

                // Add your code here

            }
        }

        ====
        // ch4ex6muc
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
                String expect = "Your name is Julian\nYour favorite food is chicken wings";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }
        }

.. activecode:: u1_muc_wc10
        :language: java
        :practice: T
        :autograde: unittest

        Write code that calculates and prints the cost of a trip that is 200 miles when the price of gas is 2.20 and the miles per gallon is 42. Make sure your answer is a double.
        ~~~~
        public class Test1
        {
            public static void main(String[] args)
            {
                // Add your code here

            }
        }

        ====
        // ch3ex6muc
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
                String expect = "10.476190476190476";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }
        }

.. activecode:: u1_muc_wc11
        :language: java
        :practice: T
        :autograde: unittest

        Write code that calculates how many miles you can go on half a tank of gas if the miles per gallon is 26 and your tank holds 15 gallons.
        ~~~~
        public class Test1
        {
            public static void main(String[] args)
            {
                // Add your code here

            }
        }

        ====
        // ch3ex7muc
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
                String expect = "195";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }
        }

.. activecode:: u1_muc_wc12
        :language: java
        :practice: T
        :autograde: unittest

        Write code that calculates and prints how many chicken wings you can buy with $3.50 if the wings are $.60 each. Make sure your answer is an integer.
        ~~~~
        public class Test1
        {
            public static void main(String[] args)
            {
                // Add your code here

            }
        }

        ====
        // ch3ex8muc
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
                String expect = "5";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }

            @Test
            public void test2()
            {
                String output = getMethodOutput("main");
                String expect = "5";

                boolean passed = !output.contains(".");

                passed = getResults(expect, output, "Checking for integer output", passed);
                assertTrue(passed);
            }
        }

.. activecode:: u1_muc_wc13
        :language: java
        :practice: T
        :autograde: unittest

        Write code that calculates how much you will have to pay for an item that is 60 percent off the original price of $52.99.
        ~~~~
        public class Test1
        {
            public static void main(String[] args)
            {
                double price = 52.99;
                double discount = 0.6;

                // Add your code here

            }
        }

        ====
        // ch3ex9muc
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
                String expect = "21.196";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }
        }

.. activecode:: u1_muc_wc14
        :language: java
        :practice: T
        :autograde: unittest

        Write code that calculates and prints how much the per item costs is for shorts that are buy 2 and get the third free. The shorts are $39.99 each.
        ~~~~
        public class Test1
        {
            public static void main(String[] args)
            {
                double price = 39.99;

                // Add your code here

            }
        }

        ====
        // ch3ex10muc
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
                String expect = "26.66";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }

            @Test
            public void test2()
            {
                boolean passed = checkCodeContains("*2");
                assertTrue(passed);
            }

            @Test
            public void test3()
            {
                boolean passed = checkCodeContains("/3");
                assertTrue(passed);
            }
        }

