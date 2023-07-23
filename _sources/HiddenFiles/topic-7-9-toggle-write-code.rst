.. qnum::
   :prefix: 5-18-
   :start: 1

Unit 7 Write Code for Toggle Code
=========================================================

This is the write code problems associated with the mixed up code problems.

.. activecode:: u7_muc_wc1
        :language: java
        :practice: T
        :autograde: unittest

        The following program should create a List called ``conversation``, add in some elements(``"hello"``, ``"goodbye"``, ``"how are you"``, and ``"see you later"``), and print out the elements with ``", "`` after each. Fill in the code so that it adds the elements to ``conversation``. The rest of the program is finished for you.
        ~~~~
        import java.util.ArrayList;
        import java.util.List;

        public class ListTest
        {

            public static void main(String[] args)
            {

                List<String> conversation;
                conversation = new ArrayList<String>();

                // YOUR CODE HERE //

                for (String element : conversation)
                {

                    System.out.print(element + ", ");
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
                super("ListTest");
            }

            @Test
            public void test1()
            {
                String output = getMethodOutput("main");
                String expect = "hello, goodbye, how are you, see you later,";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }

            // @Test
            public void test2()
            {
                String code = getCodeWithoutComments();
                System.out.println("Stuck here");

                int count = countOccurences(code, "new ArrayList");
                boolean passed = getResults("1", "" + count, "Counting number of new ArrayList");
                assertTrue(passed);
            }

            // @Test
            public void test3()
            {
                String code = getCodeWithoutComments();
                // System.out.println("Stuck here");
                int count = countOccurences(code, ".add(");
                boolean passed = getResults("4", "" + count, "Counting number of .add()");
                assertTrue(passed);
            }
        }

.. activecode:: u7_muc_wc2
        :language: java
        :practice: T
        :autograde: unittest

        Fix the two errors in the ``printBackwards`` method so that it will correctly iterate through the parameter ``myList`` backwards and print each element.
        ~~~~
        import java.util.ArrayList;

        public class ListTest
        {

            public static void printBackwards(ArrayList<String> myList)
            {

                for (int i = myList.size() - 1; i > 0; i--)
                {

                    System.out.print(myList[i] + ", ");
                }
            }

            public static void main(String[] args)
            {

                ArrayList<String> conversation;
                conversation = new ArrayList<String>();

                conversation.add("hello");
                conversation.add("goodbye");
                conversation.add("how are you");
                conversation.add("see you later");

                printBackwards(conversation);
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
                String expect = "see you later, how are you, goodbye, hello,";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }
        }

.. activecode:: u7_muc_wc3
        :language: java
        :practice: T
        :autograde: unittest

        Write code to define the ``removeZeros`` method. This function should take in an ArrayList of integers ``listOfNums`` and delete all of the zeros. For example, ``{3, 0, 5, 0}`` would change into ``{3, 5}``.
        ~~~~
        import java.util.ArrayList;

        public class ListTest
        {

            public static void removeZeros(ArrayList<Integer> listOfNums)
            {
                // YOUR CODE HERE

                // HINT: When you delete an element, the indexes of the following elements
                // shift!
                // That means you CANNOT use an enhanced for loop
                // And it also means you need to carefully handle when you increment your
                // index variable

            }

            public static void main(String[] args)
            {

                ArrayList<Integer> list;
                list = new ArrayList<Integer>();

                list.add(1);
                list.add(0);
                list.add(0);
                list.add(3);
                list.add(2);
                list.add(0);
                list.add(9);

                System.out.println("Before: " + list);
                removeZeros(list);
                System.out.println("After: " + list);
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
                String expect = "Before: [1, 0, 0, 3, 2, 0, 9]\nAfter: [1, 3, 2, 9]";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }
        }

.. activecode:: u7_muc_wc4
        :language: java
        :practice: T
        :autograde: unittest

        Write code for the ``findSmallest`` function. This code segment should take in an ArrayList ``nums`` and return the smallest element present. For example, ``findSmallest`` called on ``{5, 3, 1, 6}`` should return ``1``.
        ~~~~
        import java.util.ArrayList;

        public class ListTest
        {

            public static int findSmallest(ArrayList<Integer> nums)
            {
                int min = nums.get(0);

                // YOUR CODE HERE //

                return min;
            }

            public static void main(String[] args)
            {

                ArrayList<Integer> list;
                list = new ArrayList<Integer>();

                list.add(12);
                list.add(45);
                list.add(23);
                list.add(34);
                list.add(2);
                list.add(7);
                list.add(9);

                System.out.println(findSmallest(list));
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
                String expect = "2";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }
        }

.. activecode:: u7_muc_wc5
        :language: java
        :practice: T
        :autograde: unittest

        Write code to flesh out the ``removeOdd`` method. This function should take in a parameter ``nums`` and delete every odd number from it. For example, ``{5, 3, 2, 1, 4}`` should become ``{2, 4}``.
        ~~~~
        import java.util.ArrayList;

        public class ListTest
        {

            public static void removeOdd(ArrayList<Integer> nums)
            {

                // YOUR CODE HERE //
                // Just like in problem three, be wary about the changing indexes

            }

            public static void main(String[] args)
            {

                ArrayList<Integer> list;
                list = new ArrayList<Integer>();

                list.add(12);
                list.add(7);
                list.add(16);
                list.add(39);
                list.add(28);
                list.add(40);
                list.add(9);

                System.out.println("Before: " + list);
                removeOdd(list);
                System.out.println("After: " + list);
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
                String expect = "[12, 16, 28, 40]";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }
        }

.. activecode:: u7_muc_wc6
        :language: java
        :practice: T
        :autograde: unittest

        Fill out the ``average`` method. It should take in an ArrayList ``nums`` and calculate the arithmetic mean (the sum divided by the length). For example, ``average`` called on ``{5, 9, 6}`` should return ``6.66666666667`` as that is ``(5 + 9 + 6) / 3``.
        ~~~~
        import java.util.ArrayList;

        public class ListTest
        {

            public static double average(ArrayList<Integer> nums)
            {
                // YOUR CODE HERE //
            }

            public static void main(String[] args)
            {

                ArrayList<Integer> list;
                list = new ArrayList<Integer>();

                list.add(12);
                list.add(20);
                list.add(4);
                list.add(31);
                list.add(2);

                System.out.println(average(list));
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
                String expect = "13.8";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }
        }

.. activecode:: u7_muc_wc7
        :language: java
        :practice: T
        :autograde: unittest

        Create the ``moveLargest`` function. This should find the largest value in an ArrayList of Integers (the parameter) and move it to the back of the list.
        ~~~~
        import java.util.ArrayList;

        public class ListTest
        {

            public static void moveLargest(ArrayList<Integer> nums)
            {

                // YOUR CODE HERE //

            } // end moveLargest method

            public static void main(String[] args)
            {

                ArrayList<Integer> list;
                list = new ArrayList<Integer>();

                list.add(1);
                list.add(3);
                list.add(12);
                list.add(0);
                list.add(9);

                System.out.println("Before: " + list);
                moveLargest(list);
                System.out.println("After: " + list);
            } // end main method
        } // end class

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
                String expect = "Before: [1, 3, 12, 0, 9]\nAfter: [1, 3, 0, 9, 12]";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }
        }

.. activecode:: u7_muc_wc8
        :language: java
        :practice: T
        :autograde: unittest

        Write code to finish the ``removeShort`` method. It should take an ArrayList ``words`` and remove all elements that are three characters long or shorter. For example, ``{"Dog", "Monkey", "Lion", "Cat"}`` would become ``{"Monkey", "Lion"}``.
        ~~~~
        import java.util.ArrayList;

        public class ListTest
        {

            public static void removeShort(ArrayList<String> words)
            {

                // YOUR CODE HERE //
                // Just like in problem three, consider iterating backwards or using a
                // while loop

            } // end removeShort method

            public static void main(String[] args)
            {

                ArrayList<String> list;
                list = new ArrayList<String>();

                list.add("catch");
                list.add("dog");
                list.add("tree");
                list.add("me");

                System.out.println("Before: " + list);
                removeShort(list);
                System.out.println("After: " + list);
            } // end main method
        } // end class

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
                String expect = "Before: [catch, dog, tree, me]\nAfter: [catch, tree]";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }
        }

.. activecode:: u7_muc_wc9
        :language: java
        :practice: T
        :autograde: unittest

        Write the function ``doubleList``. This should take in an ArrayList ``words`` and insert a copy of each element such that ``{"cat", "ribbon", "house"}`` would become ``{"cat", "cat", "ribbon", "ribbon", "house", "house"}``.
        ~~~~
        import java.util.ArrayList;

        public class ListTest
        {

            public static void doubleList(ArrayList<String> words)
            {

                // YOUR CODE HERE
                // Remember - when you insert elements, you'll change the indexes!

            } // end doubleList method

            public static void main(String[] args)
            {

                ArrayList<String> list;
                list = new ArrayList<String>();

                list.add("catch");
                list.add("dog");
                list.add("tree");
                list.add("me");

                System.out.println("Before: " + list);
                doubleList(list);
                System.out.println("After: " + list);
            } // end main method
        } // end class

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
                String expect =
                        "Before: [catch, dog, tree, me]\n"
                            + "After: [catch, catch, dog, dog, tree, tree, me, me]";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }
        }

.. activecode:: u7_muc_wc10
        :language: java
        :practice: T
        :autograde: unittest

        Write the function ``removeElement``. This should take in an ArrayList ``nums`` and an integer ``toRemove`` and remove every instance of that integer from ``nums``. E.g., if nums was ``{3, 6, 5, 3, 4}``, it should become ``{6, 5, 4}`` after calling ``removeElement(nums, 3)``.
        ~~~~
        import java.util.ArrayList;

        public class ListTest
        {

            public static void removeElement(ArrayList<Integer> nums, int toRemove)
            {

                // YOUR CODE HERE

            } // end average method

            public static void main(String[] args)
            {

                ArrayList<Integer> list;
                list = new ArrayList<Integer>();

                list.add(1);
                list.add(3);
                list.add(2);
                list.add(9);

                System.out.println("Before: " + list);
                removeElement(list, 3);
                System.out.println("After: " + list);
            } // end main method
        } // end class

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
                String expect = "Before: [1, 3, 2, 9]\nAfter: [1, 2, 9]";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }
        }

