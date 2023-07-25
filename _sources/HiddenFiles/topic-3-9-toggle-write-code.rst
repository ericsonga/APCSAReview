.. qnum::
   :prefix: 3-10-
   :start: 1

Unit 3 Write Code for Toggle Code
=========================================================

This is the write code problems associated with the mixed up code problems.

.. activecode:: u3_muc_wc1
        :language: java
        :practice: T
        :autograde: unittest

        Write code that tests guess to see if it is equal to answer or too high or too low. If it is too high as in the example below, it should print out ``Your guess is too high``.
        ~~~~
        public class Test1
        {
            public static void main(String[] args)
            {
                int guess = 10;
                int answer = 5;

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
                String expect = "Your guess is too high";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }

            @Test
            public void test2()
            {
                String code = getCodeWithoutComments();
                int count = countOccurences(code, "if");
                boolean passed = getResults("" + 2, "" + count, "Counting number of ifs");
                assertTrue(passed);
            }

            @Test
            public void test3()
            {
                String code = getCodeWithoutComments();
                int count = countOccurences(code, "else");
                boolean passed = getResults("" + 2, "" + count, "Counting number of elses");
                assertTrue(passed);
            }

            @Test
            public void test4()
            {
                String code = getCodeWithoutComments();
                int count = countOccurences(code, "else if");
                boolean passed = getResults("" + 1, "" + count, "Counting number of else ifs");
                assertTrue(passed);
            }
        }

.. activecode:: u3_muc_wc2
        :language: java
        :practice: T
        :autograde: unittest

        Write code that prints ``You can go out`` if you don’t have any homework and have cleaned and otherwise prints ``You can not go out``.
        ~~~~
        public class Test1
        {
            public static void main(String[] args)
            {
                boolean homeworkLeft = false;
                boolean cleaned = true;
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
                String expect = "You can go out";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }

            @Test
            public void test2()
            {
                String code = getCodeWithoutComments();
                int count = countOccurences(code, "if");
                boolean passed = getResults("" + 1, "" + count, "Counting number of ifs");
                assertTrue(passed);
            }

            @Test
            public void test3()
            {
                String code = getCodeWithoutComments();
                int count = countOccurences(code, "else");
                boolean passed = getResults("" + 1, "" + count, "Counting number of elses");
                assertTrue(passed);
            }
        }

.. activecode:: u3_muc_wc3
        :language: java
        :practice: T
        :autograde: unittest

        Write code that tests if x is between 1 and 10, and prints ``1 <= x <= 10`` or ``x is not in range``.
        ~~~~
        public class Test1
        {
            public static void main(String[] args)
            {
                int x = 3;

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
                String expect = "1 <= x <= 10";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }

            @Test
            public void test2()
            {
                String code = getCodeWithoutComments();
                int count = countOccurences(code, "if");
                boolean passed = getResults("" + 1, "" + count, "Counting number of ifs");
                assertTrue(passed);
            }

            @Test
            public void test3()
            {
                String code = getCodeWithoutComments();
                int count = countOccurences(code, "else");
                boolean passed = getResults("" + 1, "" + count, "Counting number of elses");
                assertTrue(passed);
            }

            @Test
            public void test4()
            {
                boolean passed = checkCodeContains("x >= 1 && x <= 10");
                assertTrue(passed);
            }
        }

.. activecode:: u3_muc_wc4
        :language: java
        :practice: T
        :autograde: unittest

        Write code that prints out if the string ``message`` has the word ``ringing`` in it or not. It should print out ``Answer the phone!`` if ``ringing`` is in ``message``, and ``I don't hear anything.`` if not.
        ~~~~
        public class Test1
        {
            public static void main(String[] args)
            {
                String message = "Is that the phone ringing?";
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
                String expect = "Answer the phone!";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }

            @Test
            public void test2()
            {
                String code = getCodeWithoutComments();
                int count = countOccurences(code, "if");
                boolean passed = getResults("" + 1, "" + count, "Counting number of ifs");
                assertTrue(passed);
            }

            @Test
            public void test3()
            {
                boolean passed = checkCodeContains(".indexOf(\"ringing\"");
                assertTrue(passed);
            }
        }

.. activecode:: u3_muc_wc5
        :language: java
        :practice: T
        :autograde: unittest

        Write code that prints if your favorite food is junk food (pizza or wings) or not. Your code should check to see if the variable ``favFood`` value is ``pizza`` or ``wings``. If it is, it should print out ``Your fav is junk food``. If not, it should print ``Your fav is not junk``.
        ~~~~
        public class Test1
        {
            public static void main(String[] args)
            {
                String favFood = "kale";
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
                String expect = "Your fav is not junk";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }

            @Test
            public void test2()
            {
                String code = getCodeWithoutComments();
                int count = countOccurences(code, ".equals(");
                boolean passed = count >= 2;
                passed = getResults("" + 2, "" + count, "Counting number of calls to .equals()", passed);
                assertTrue(passed);
            }

            @Test
            public void test3()
            {
                boolean passed = checkCodeContains("||");
                assertTrue(passed);
            }
        }

.. activecode:: u3_muc_wc6
        :language: java
        :practice: T
        :autograde: unittest

        Write code that prints your fine if you are speeding. If you are going over 65 but less than 75, the fine is ``50``. If you are going at least 75 and less than 85, the fine is ``100``. Over that the fine is ``200``. It should not print anything if you are not speeding.
        ~~~~
        public class Test1
        {
            public static void main(String[] args)
            {
                int speed = 90;
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
                String expect = "200";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }

            @Test
            public void test2()
            {
                boolean passed = checkCodeContains("speed > 65 && speed < 75");
                assertTrue(passed);
            }

            @Test
            public void test3()
            {
                boolean passed = checkCodeContains("speed >= 75 && speed < 85");
                assertTrue(passed);
            }
        }

.. activecode:: u3_muc_wc7
        :language: java
        :practice: T
        :autograde: unittest

        Write code that prints the alarm time. If it is a weekday you should get up at ``7:00am`` and if not get up at ``10:00am``.
        ~~~~
        public class Test1
        {
            public static void main(String[] args)
            {
                boolean weekend = false;
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
                String expect = "7:00am";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }

            @Test
            public void test2()
            {
                boolean passed = checkCodeContains("!weekend");
                assertTrue(passed);
            }

            @Test
            public void test3()
            {
                String code = getCodeWithoutComments();
                int count = countOccurences(code, "if");
                boolean passed = getResults("" + 1, "" + count, "Counting number of ifs");
                assertTrue(passed);
            }

            @Test
            public void test4()
            {
                String code = getCodeWithoutComments();
                int count = countOccurences(code, "else");
                boolean passed = getResults("" + 1, "" + count, "Counting number of elses");
                assertTrue(passed);
            }
        }

.. activecode:: u3_muc_wc8
        :language: java
        :practice: T
        :autograde: unittest

        Write code that prints if you ``Can text now`` or ``Can't text now``. You can text if you are not driving and not eating.
        ~~~~
        public class Test1
        {
            public static void main(String[] args)
            {
                boolean driving = true;
                boolean eating = false;
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
                String expect = "Can't text now";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }

            @Test
            public void test2()
            {
                boolean passed = checkCodeContains("!driving && !eating");
                assertTrue(passed);
            }

            @Test
            public void test3()
            {
                String code = getCodeWithoutComments();
                int count = countOccurences(code, "if");
                boolean passed = getResults("" + 1, "" + count, "Counting number of ifs");
                assertTrue(passed);
            }

            @Test
            public void test4()
            {
                String code = getCodeWithoutComments();
                int count = countOccurences(code, "else");
                boolean passed = getResults("" + 1, "" + count, "Counting number of elses");
                assertTrue(passed);
            }
        }

.. activecode:: u3_muc_wc9
        :language: java
        :practice: T
        :autograde: unittest

        Write code that prints whether your name ``Starts with a vowel`` (a, e, i, o, u) or ``Starts wwith a consonant``.
        ~~~~
        public class Test1
        {
            public static void main(String[] args)
            {
                String name = "Julian";
                String firstLetter = name.substring(0, 1);
                String lowerFirst = firstLetter.toLowerCase();

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
                String expect = "Starts with a consonant";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }

            @Test
            public void test2()
            {
                String code = getCodeWithoutComments();
                int count = countOccurences(code, "substring(0,1)");
                boolean passed = count >= 1;

                getResults("1 or more", "" + count, "Counting number of substring(0, 1)", passed);
                assertTrue(passed);
            }

            @Test
            public void test3()
            {
                String code = getCodeWithoutComments();
                int count = countOccurences(code, ".equals(");
                boolean passed = count == 5;

                getResults("1 or more", "" + count, "Counting number of .equals()", passed);
                assertTrue(passed);
            }
        }

.. activecode:: u3_muc_wc10
        :language: java
        :practice: T
        :autograde: unittest

        Write code that prints the letter grade with your score. For a score greater than 90, it should print ``A``. For a score between 80 and 90, it should print ``B``. For a score between 70 and 80, it should print ``C``. For a score between 60 and 70, it should print ``D``. For all other scores, it should print ``E``.
        ~~~~
        public class Test1
        {
            public static void main(String[] args)
            {
                int score = 73;
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
                String expect = "C";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }

            @Test
            public void test2()
            {
                String code = getCodeWithoutComments();
                int count = countOccurences(code, "if");
                boolean passed = getResults("" + 4, "" + count, "Counting number of ifs");
                assertTrue(passed);
            }

            @Test
            public void test3()
            {
                String code = getCodeWithoutComments();
                int count = countOccurences(code, "else");
                boolean passed = getResults("" + 4, "" + count, "Counting number of elses");
                assertTrue(passed);
            }

            @Test
            public void test4()
            {
                String code = getCodeWithoutComments();
                int count = countOccurences(code, "else if");
                boolean passed = getResults("" + 3, "" + count, "Counting number of else ifs");
                assertTrue(passed);
            }
        }

