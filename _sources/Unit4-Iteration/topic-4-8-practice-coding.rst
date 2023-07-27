.. qnum::
   :prefix: 4-9-
   :start: 1

Coding Practice with Loops
------------------------------------

.. tabbed:: ch6ex1

        .. tab:: Question

           .. activecode::  ch6ex1q
              :language: java
              :autograde: unittest
              :practice: T

              Rewrite the following code so that it uses a ``for`` loop instead of a ``while`` loop to print out all the integers from 5 to 1 (inclusive).
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      int x = 5;
                      while (x > 0)
                      {
                          System.out.println(x);
                          x = x - 1;
                      }
                  }
              }

              ====
              import static org.junit.Assert.*;

              import org.junit.*;

              import java.io.*;

              public class RunestoneTests extends CodeTestHelper
              {
                  @Test
                  public void testMain() throws IOException
                  {
                      String output = getMethodOutput("main");
                      String expect = "5\n4\n3\n2\n1\n";

                      boolean passed = getResults(expect, output, "Expected output from main");
                      assertTrue(passed);
                  }

                  @Test
                  public void testForLoop() throws IOException
                  {
                      String target = "for(int * = 5;";
                      boolean passed = checkCodeContains("for loop", target);
                      assertTrue(passed);
                  }
              }

        .. tab:: Answer

           .. activecode::  ch6ex1a
              :language: java
              :optional:

              Answer: In a ``for`` loop you declare and initialize the variable(s), specify the condition, and specify how the loop variable(s) change in the header of the ``for`` loop as shown below.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      for (int x = 5; x > 0; x = x - 1) System.out.println(x);
                  }
              }

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch6ex1d

.. tabbed:: ch6ex2

        .. tab:: Question

           .. activecode::  ch6ex2q
              :language: java
              :autograde: unittest
              :practice: T

              Rewrite the following code to use a ``while`` loop instead of a ``for`` loop to print out the numbers from 1 to 10 (inclusive).
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      for (int x = 1; x <= 10; x++) System.out.println(x);
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
                      String expect = "1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n";

                      boolean passed = getResults(expect, output, "Expected output from main");
                      assertTrue(passed);
                  }

                  @Test
                  public void testForLoop() throws IOException
                  {
                      String target = "while (";
                      boolean passed = checkCodeContains("while loop", target);
                      assertTrue(passed);
                  }
              }

        .. tab:: Answer

           Answer: You need to specify the declarations and initializations of the loop variables(s) before the Boolean condition.  You need to do the change(s) at the end of the body of the loop.

           .. activecode::  ch6ex2a
              :language: java
              :optional:

              public class Test1
              {
                  public static void main(String[] args)
                  {
                      int x = 1;
                      while (x <= 10)
                      {
                          System.out.println(x);
                          x++;
                      }
                  }
              }

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch6ex2d

.. tabbed:: ch6ex3

        .. tab:: Question

           .. activecode::  ch6ex3q
              :language: java
              :autograde: unittest
              :practice: T

              Rewrite the following code so that it uses a ``for`` loop instead of a ``while`` loop to print out all the integers from 5 to 15 (inclusive).
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      int x = 5;
                      while (x <= 15)
                      {
                          System.out.println(x);
                          x = x + 1;
                      }
                  }
              }

              ====
              import static org.junit.Assert.*;

              import org.junit.*;

              import java.io.*;

              public class RunestoneTests extends CodeTestHelper
              {
                  @Test
                  public void testMain() throws IOException
                  {
                      String output = getMethodOutput("main");
                      String expect = "5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n";

                      boolean passed = getResults(expect, output, "Expected output from main");
                      assertTrue(passed);
                  }

                  @Test
                  public void testForLoop() throws IOException
                  {
                      String target = "for (int * = 5;";
                      boolean passed = checkCodeContains("for loop", target);
                      assertTrue(passed);
                  }
              }

        .. tab:: Answer

           Answer: In a ``for`` loop you declare and initialize the variable(s), specify the condition, and specify how the loop variable(s) change in the header of the ``for`` loop as shown below.

           .. activecode::  ch6ex3a
              :language: java
              :optional:

              public class Test1
              {
                  public static void main(String[] args)
                  {
                      for (int x = 5; x <= 15; x++)
                      {
                          System.out.println(x);
                      }
                  }
              }

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch6ex3d

.. tabbed:: ch6ex4

        .. tab:: Question

           .. activecode::  ch6ex4q
              :language: java
              :autograde: unittest
              :practice: T

              Rewrite the following code to use a ``while`` loop instead of a ``for`` loop to print out the numbers from 10 to 100 by 10's (inclusive).
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      for (int x = 10; x <= 100; x = x + 10) System.out.println(x);
                  }
              }

              ====
              import static org.junit.Assert.*;

              import org.junit.*;

              import java.io.*;

              public class RunestoneTests extends CodeTestHelper
              {
                  @Test
                  public void testMain() throws IOException
                  {
                      String output = getMethodOutput("main");
                      String expect = "10\n20\n30\n40\n50\n60\n70\n80\n90\n100\n";

                      boolean passed = getResults(expect, output, "Expected output from main");
                      assertTrue(passed);
                  }

                  @Test
                  public void testForLoop() throws IOException
                  {
                      String target = "while (";
                      boolean passed = checkCodeContains("while loop", target);
                      assertTrue(passed);
                  }
              }

        .. tab:: Answer

           Answer: You need to specify the declarations and initializations of the loop variables(s) before the Boolean condition.  You need to do the change(s) at the end of the body of the loop.

           .. activecode::  ch6ex4a
              :language: java
              :optional:

              public class Test1
              {
                  public static void main(String[] args)
                  {
                      int x = 10;
                      while (x <= 100)
                      {
                          System.out.println(x);
                          x = x + 10;
                      }
                  }
              }

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch6ex4d


.. tabbed:: ch6ex5

        .. tab:: Question

           .. activecode::  ch6ex5q
              :language: java
              :autograde: unittest
              :practice: T

              The following code should print the values from 1 to 10 (inclusive) but has errors.  Fix the errors so that the code works as intended. If the code is in an infinite loop you can refresh the page in the browser to stop the loop and then click on Load History and move the bar above it to see your last changes.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      int x = 1;
                      while (x < 10)
                      {
                          System.out.println(x);
                      }
                  }
              }

              ====
              import static org.junit.Assert.*;

              import org.junit.*;

              import java.io.*;

              public class RunestoneTests extends CodeTestHelper
              {
                  @Test
                  public void testMain() throws IOException
                  {
                      String output = getMethodOutput("main");
                      String expect = "1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n";

                      boolean passed = getResults(expect, output, "Expected output from main");
                      assertTrue(passed);
                  }

                  @Test
                  public void testWhileLoop() throws IOException
                  {
                      String target1 = "x=x+1;";
                      String target2 = "x++;";
                      String code = removeSpaces(getCode());
                      boolean passed = code.contains(target1) || code.contains(target2);
                      getResults("true", "" + passed, "changing the loop variable x");
                      assertTrue(passed);
                  }
              }

        .. tab:: Answer

           Answer: On line 6 it should be ``while (x <= 10)``.  Add line 9 at the end of the loop body to increment ``x`` so that the loop ends (isn't an infinite loop).

           .. activecode::  ch6ex5a
              :language: java
              :optional:

              public class Test1
              {
                  public static void main(String[] args)
                  {
                      int x = 1;
                      while (x <= 10)
                      {
                          System.out.println(x);
                          x++;
                      }
                  }
              }

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch6ex5d

.. tabbed:: ch6ex6

        .. tab:: Question

           .. activecode::  ch6ex6q
              :language: java
              :autograde: unittest
              :practice: T

              The following code should print the values from 10 to 5, but it has errors.  Fix the errors so that the code works as intended.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      for (int x = 10; x >= 5; x--)
                      {
                          System.out.println(x);
                          x--;
                      }
                  }
              }

              ====
              import static org.junit.Assert.*;

              import org.junit.*;

              import java.io.*;

              public class RunestoneTests extends CodeTestHelper
              {
                  @Test
                  public void testMain() throws IOException
                  {
                      String output = getMethodOutput("main");
                      String expect = "10\n9\n8\n7\n6\n5\n";

                      boolean passed = getResults(expect, output, "Expected output from main");
                      assertTrue(passed);
                  }
              }

        .. tab:: Answer

           Answer: Remove the ``x--;`` at the end of the body of the loop.  The change area in the for loop decrements ``x`` by 1, so this line isn't needed.

           .. activecode::  ch6ex6a
              :language: java
              :optional:

              public class Test1
              {
                  public static void main(String[] args)
                  {
                      for (int x = 10; x >= 5; x--)
                      {
                          System.out.println(x);
                      }
                  }
              }

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch6ex6d

.. tabbed:: ch6ex7n

        .. tab:: Question

           .. activecode::  ch6ex7nq
              :language: java
              :autograde: unittest
              :practice: T

              The following code should print the values from 10 to 1, but it has errors.  Fix the errors so that the code works as intended.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      int x = 10;
                      while (x >= 0)
                      {
                          x--;
                          System.out.println(x);
                      }
                  }
              }

              ====
              import static org.junit.Assert.*;

              import org.junit.*;

              import java.io.*;

              public class RunestoneTests extends CodeTestHelper
              {
                  @Test
                  public void testMain() throws IOException
                  {
                      String output = getMethodOutput("main");
                      String expect = "10\n9\n8\n7\n6\n5\n4\n3\n2\n1\n";

                      boolean passed = getResults(expect, output, "Expected output from main");
                      assertTrue(passed);
                  }
              }

        .. tab:: Answer

           Answer: Move the ``x--;`` to the end of the loop body (after the ``System.out.println``.  Change the ``while`` to ``x > 0``.

           .. activecode::  ch6ex7na
              :language: java
              :optional:

              public class Test1
              {
                  public static void main(String[] args)
                  {
                      int x = 10;
                      while (x > 0)
                      {
                          System.out.println(x);
                          x--;
                      }
                  }
              }

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch6ex7nd

.. tabbed:: ch6ex8n

        .. tab:: Question

           .. activecode::  ch6ex8nq
              :language: java
              :autograde: unittest
              :practice: T

              Finish the code below to print a countdown from 100 to 0 by 10's using a for or while loop.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args) {}
              }

              ====
              import static org.junit.Assert.*;

              import org.junit.*;

              import java.io.*;

              public class RunestoneTests extends CodeTestHelper
              {
                  @Test
                  public void testMain() throws IOException
                  {
                      String output = getMethodOutput("main");
                      String expect = "100\n90\n80\n70\n60\n50\n40\n30\n20\n10\n0\n";

                      boolean passed = getResults(expect, output, "Expected output from main");
                      assertTrue(passed);
                  }

                  @Test
                  public void testForLoop() throws IOException
                  {
                      String code = getCode();
                      boolean passed = code.contains("for") || code.contains("while");
                      getResults("Expected loop", "" + passed, "Checking for loop", passed);
                      assertTrue(passed);
                  }
              }

        .. tab:: Answer

           Answer: You can use a ``for`` loop as shown below. Start ``x`` at 100, loop while it is greater or equal to 0, and subtract 10 each time after the body of the loop executes.

           .. activecode::  ch6ex8na
              :language: java
              :optional:

              public class Test1
              {
                  public static void main(String[] args)
                  {
                      for (int x = 100; x >= 0; x = x - 10) System.out.println(x);
                  }
              }

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch6ex8nd



.. tabbed:: ch6ex10n

        .. tab:: Question

           .. activecode::  ch6ex10nq
              :language: java
              :autograde: unittest
              :practice: T

              Finish the code to print the value of ``x`` and ``" is even"`` if ``x`` is even and ``" is odd"`` if it is odd for all values from 10 to 1.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args) {}
              }

              ====
              import static org.junit.Assert.*;

              import org.junit.*;

              import java.io.*;

              public class RunestoneTests extends CodeTestHelper
              {
                  @Test
                  public void testMain() throws IOException
                  {
                      String output = getMethodOutput("main");
                      String expect =
                              "10 is even\n"
                                  + "9 is odd\n"
                                  + "8 is even\n"
                                  + "7 is odd\n"
                                  + "6 is even\n"
                                  + "5 is odd\n"
                                  + "4 is even\n"
                                  + "3 is odd\n"
                                  + "2 is even\n"
                                  + "1 is odd\n";

                      boolean passed = getResults(expect, output, "Expected output from main");
                      assertTrue(passed);
                  }

                  @Test
                  public void testIfLoop()
                  {
                      String code = getCode();
                      boolean passed = code.contains("if") && (code.contains("for") || code.contains("while"));
                      getResults(
                              "Expected loop and if", "" + passed, "Checking for loop and if statement", passed);
                      assertTrue(passed);
                  }
              }

        .. tab:: Answer

           Answer: Use a ``for`` loop to loop from 10 to 1.  Use a conditional to test if x is even (x % 2 == 0).

           .. activecode::  ch6ex10na
              :language: java
              :optional:

              public class Test1
              {
                  public static void main(String[] args)
                  {
                      for (int x = 10; x >= 1; x--)
                      {
                          if (x % 2 == 0) 
                          {
                              System.out.println(x + " is even");
                          }
                          else 
                          { 
                              System.out.println(x + " is odd");
                          }
                      }
                  }
              }

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch6ex10nd

.. tabbed:: ch6ex11n

        .. tab:: Question

           .. activecode::  ch6ex11nq
              :language: java
              :autograde: unittest
              :practice: T

              Finish the code below to print the values for ``10 * x`` where ``x`` changes from 0 to 10 using a loop.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args) {}
              }

              ====
              import static org.junit.Assert.*;

              import org.junit.*;

              import java.io.*;

              public class RunestoneTests extends CodeTestHelper
              {
                  @Test
                  public void testMain() throws IOException
                  {
                      String output = getMethodOutput("main");
                      String expect = "0\n10\n20\n30\n40\n50\n60\n70\n80\n90\n100\n";

                      boolean passed = getResults(expect, output, "Expected output from main");
                      assertTrue(passed);
                  }

                  @Test
                  public void testForLoop()
                  {
                      // String target = "for (";
                      // boolean passed = checkCodeContains("for loop", target);
                      String code = getCode();
                      boolean passed = code.contains("for") || code.contains("while");
                      getResults("Expected loop", "" + passed, "Checking for loop", passed);
                      assertTrue(passed);
                  }
              }

        .. tab:: Answer

           .. activecode::  ch6ex11na
              :language: java
              :optional:

              Answer: Use a ``for`` loop with ``x`` changing from 0 to 10 and print the value of ``x`` and ``10 * x``.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      for (int x = 0; x <= 10; x++)
                      {
                          System.out.println(x * 10);
                      }
                  }
              }

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch6ex11nd

.. tabbed:: ch6ex9n

        .. tab:: Question

           .. activecode::  ch6ex9nq
              :language: java
              :autograde: unittest
              :practice: T

              Finish the following code so that it prints a string message minus the last character each time through the loop until there are no more characters in message.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      String message = "help";
                  }
              }

              ====
              import static org.junit.Assert.*;

              import org.junit.*;

              import java.io.*;

              public class RunestoneTests extends CodeTestHelper
              {
                  @Test
                  public void testMain() throws IOException
                  {
                      String output = getMethodOutput("main");
                      String expect = "help\nhel\nhe\nh\n";
                      boolean passed = getResults(expect, output, "Expected output from main");
                      assertTrue(passed);
                  }

                  @Test
                  public void testForLoop()
                  {
                      String code = getCode();
                      boolean passed = code.contains("for") || code.contains("while");
                      getResults("Expected loop", "" + passed, "Checking for loop", passed);
                      assertTrue(passed);
                  }
              }

        .. tab:: Answer

           Answer: Add a ``while`` loop and loop while there is still at least one character in the string. At the end of the body of the loop reset the message to all characters except the last one.

           .. activecode::  ch6ex9na
              :language: java
              :optional:

              public class Test1
              {
                  public static void main(String[] args)
                  {
                      String message = "help";
                      while (message.length() > 0)
                      {
                          System.out.println(message);
                          message = message.substring(0, message.length() - 1);
                      }
                  }
              }

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch6ex9nd


.. tabbed:: ch6ex12n

        .. tab:: Question

           .. activecode::  ch6ex12nq
              :language: java
              :autograde: unittest
              :practice: T

              Finish the code to loop printing the message each time through the loop and remove an ``x`` from the message until all the ``x``'s are gone.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      String message = "Ix lovex youxxx";
                      System.out.println(message);
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
                      String expect =
                              "Ix lovex youxxx\n"
                                  + "I lovex youxxx\n"
                                  + "I love youxxx\n"
                                  + "I love youxx\n"
                                  + "I love youx\n"
                                  + "I love you\n";

                      boolean passed = getResults(expect, output, "Expected output from main");
                      assertTrue(passed);
                  }

                  @Test
                  public void testForLoop()
                  {
                      String code = getCode();
                      boolean passed = code.contains("for") || code.contains("while");
                      getResults("Expected loop", "" + passed, "Checking for loop", passed);
                      assertTrue(passed);
                  }
              }

        .. tab:: Answer

           Answer: Use a ``while`` loop.  Loop while ``x`` has been found in the message (using ``indexOf``).  Remove the ``x`` (using substring). Use indexOf again to get the position of the next ``x`` or -1 if there are none left in the message.

           .. activecode::  ch6ex12na
              :language: java
              :optional:

              public class Test1
              {
                  public static void main(String[] args)
                  {
                      String message = "Ix lovex youxxx";
                      System.out.println(message);
                      int pos = message.indexOf("x");
                      while (pos >= 0)
                      {
                          message = message.substring(0, pos) + message.substring(pos + 1);
                          pos = message.indexOf("x");
                          System.out.println(message);
                      }
                  }
              }

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch6ex12nd


.. tabbed:: ch6ex16n

        .. tab:: Question

           .. activecode::  ch6ex16nq
              :language: java
              :autograde: unittest
              :practice: T

              Write a loop below to print the number of ``x``'s in the string message.  Use the ``indexOf`` and ``substring`` methods.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      String message = "xyxxzax";
                  }
              }

              ====
              import static org.junit.Assert.*;

              import org.junit.*;

              import java.io.*;

              public class RunestoneTests extends CodeTestHelper
              {
                  @Test
                  public void testMain() throws IOException
                  {
                      String output = getMethodOutput("main");
                      String expect = "4";

                      boolean passed = output.contains(expect);
                      getResults(expect, output, "Expected output from main", passed);
                      assertTrue(passed);
                  }

                  @Test
                  public void testForLoop()
                  {
                      String code = getCode();
                      boolean passed = code.contains("for") || code.contains("while");
                      getResults("Expected loop", "" + passed, "Checking for loop", passed);
                      assertTrue(passed);
                  }
              }

        .. tab:: Answer

           Answer: Use indexOf to find the next ``x``.  Loop while pos is greater than or equal to 0.  Use substring to reset message beyond the next ``x``.

           .. activecode::  ch6ex16na
              :language: java
              :optional:

              public class Test1
              {
                  public static void main(String[] args)
                  {

                      String message = "xyxxzax";
                      int pos = message.indexOf("x");
                      int count = 0;
                      while (pos >= 0)
                      {
                          count++;
                          message = message.substring(pos + 1);
                          pos = message.indexOf("x");
                      }
                      System.out.println("There were " + count + " x's");
                  }
              }

        .. tab:: Discussion

           .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch6ex16nd



.. tabbed:: ch6ex14n

        .. tab:: Question

           .. activecode::  ch6ex14nq
              :language: java
              :autograde: unittest
              :practice: T

              Write the code below to print a rectangle of stars (``*``) with 5 rows of stars and 3 stars per row. Hint: use nested for loops.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args) {}
              }

              ====
              import static org.junit.Assert.*;

              import org.junit.*;

              import java.io.*;

              public class RunestoneTests extends CodeTestHelper
              {
                  @Test
                  public void testMain() throws IOException
                  {
                      String output = getMethodOutput("main");
                      String expect = "***\n***\n***\n***\n***\n";

                      boolean passed = getResults(expect, output, "Expected output from main");
                      assertTrue(passed);
                  }

                  @Test
                  public void test2()
                  {
                      String code = getCode();
                      String target = "for (int * = #; * ? *; *~)";

                      int num = countOccurencesRegex(code, target);

                      boolean passed = num == 2;

                      getResults("2", "" + num, "2 For loops (nested)", passed);
                      assertTrue(passed);
                  }
              }

        .. tab:: Answer

           Answer: Use nested ``for`` loops.  Use the outer loop to control the number of rows and the inner loop to control the number of stars per row.

           .. activecode::  ch6ex14na
              :language: java
              :optional:

              public class Test1
              {
                  public static void main(String[] args)
                  {
                      for (int row = 0; row < 5; row++)
                      {
                          for (int col = 0; col < 3; col++)
                          {
                              System.out.print("*");
                          }
                          System.out.println();
                      }
                  }
              }

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch6ex14nd


.. tabbed:: ch6ex15n

        .. tab:: Question

           .. activecode::  ch6ex15nq
              :language: java
              :autograde: unittest
              :practice: T

              Write the code below to print a rectangle of stars (``*``) with 3 rows of stars and 5 stars per row.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args) {}
              }

              ====
              import static org.junit.Assert.*;

              import org.junit.*;

              import java.io.*;

              public class RunestoneTests extends CodeTestHelper
              {
                  @Test
                  public void testMain() throws IOException
                  {
                      String output = getMethodOutput("main");
                      String expect = "*****\n*****\n*****\n";

                      boolean passed = getResults(expect, output, "Expected output from main");
                      assertTrue(passed);
                  }

                  @Test
                  public void test2()
                  {
                      String code = getCode();
                      String target = "for (int * = #; * ? *; *~)";

                      int num = countOccurencesRegex(code, target);

                      boolean passed = num == 2;

                      getResults("2", "" + num, "2 For loops (nested)", passed);
                      assertTrue(passed);
                  }
              }

        .. tab:: Answer

           Answer: Use nested ``for`` loops.  Use the outer loop to control the number of rows and the inner loop to control the number of stars per row.

           .. activecode::  ch6ex15na
              :language: java
              :optional:

              public class Test1
              {
                  public static void main(String[] args)
                  {
                      for (int row = 0; row < 3; row++)
                      {
                          for (int col = 0; col < 5; col++)
                          {
                              System.out.print("*");
                          }
                          System.out.println();
                      }
                  }
              }

        .. tab:: Discussion

           .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch6ex15nd


.. tabbed:: ch6ex13n

        .. tab:: Question

           .. activecode::  ch6ex13nq
              :language: java
              :autograde: unittest
              :practice: T

              Write the code below to print 55555, 4444, 333, 22, 1 with each on a different line.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args) {}
              }

              ====
              import static org.junit.Assert.*;

              import org.junit.*;

              import java.io.*;

              public class RunestoneTests extends CodeTestHelper
              {
                  @Test
                  public void testMain() throws IOException
                  {
                      String output = getMethodOutput("main");
                      String expect = "55555\n4444\n333\n22\n1\n";
                      boolean passed = getResults(expect, output, "Expected output from main");
                      assertTrue(passed);
                  }

                  @Test
                  public void test2()
                  {
                      String code = getCode();
                      String target = "for (int * = #; * ? *; *~)";

                      int num = countOccurencesRegex(code, target);

                      boolean passed = num == 2;

                      getResults("2", "" + num, "2 For loops (nested)", passed);
                      assertTrue(passed);
                  }
              }

        .. tab:: Answer

           Answer: Use nested ``for`` loops. The outer loop controls what is printed on each row and the number of rows.  The inner loop controls the number of values printer per row.

           .. activecode::  ch6ex13na
              :language: java
              :optional:

              public class Test1
              {
                  public static void main(String[] args)
                  {
                      for (int x = 5; x >= 1; x--)
                      {
                          for (int y = x; y > 0; y--)
                          {
                              System.out.print(x);
                          }
                          System.out.println();
                      }
                  }
              }

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch6ex13nd
