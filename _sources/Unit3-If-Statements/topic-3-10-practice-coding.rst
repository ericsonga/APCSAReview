.. qnum::
   :prefix: 3-10-
   :start: 1

Coding Practice
==============================

.. tabbed:: ch5Ex1

        .. tab:: Question

           .. activecode::  ch5Ex1q
              :language: java
              :autograde: unittest
              :practice: T

              The following code should print ``x is greater than 0``.  However, the code has errors.  Fix the code so that it compiles and runs correctly.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      int x = 3;
                      if (x > 0
                          System.out.println("x is greater than 0")
                      else
                          System.out.println(x is less than or equal 0");
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
                      String expect = "x is greater than 0\n";
                      boolean passed = getResults(expect, output, "Expected output from main");
                      assertTrue(passed);
                  }
              }

        .. tab:: Answer

           Line 6 is missing a final ``)``.  Line 7 is missing a semicolon at the end.  Line 9 is missing the starting ``"``.

           .. activecode::  ch5Ex1a
              :language: java
              :optional:

              This is the answer to the previous question.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      int x = 3;
                      if (x > 0)
                      {
                          System.out.println("x is greater than 0");
                      }
                      else
                      {
                          System.out.println("x is less than or equal 0");
                      }
                  }
              }

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch5Ex1d

.. tabbed:: ch5Ex2

        .. tab:: Question

           .. activecode::  ch5Ex2q
              :language: java
              :autograde: unittest
              :practice: T

              The following code should check your guess against the answer and print that it is too low, correct, or too high.  However, the code has errors.  Fix the code so that it compiles and runs correctly.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      int guess = 7;
                      int answer = 9;
                      if guess < answer)
                          System.out.println("Your guess is too low);
                      else if (guess = answer)
                          System.out.println("You are right!");
                      else
                          System.println("Your guess is too high");
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
                      String expect = "Your guess is too low\n";
                      boolean passed = getResults(expect, output, "Expected output from main");
                      assertTrue(passed);
                  }
              }

        .. tab:: Answer

           Line 7 is missing the starting ``(``.  Line 8 is missing the closing ``"``.  Line 9 should be ``==`` rather than ``=`` to test for equality.  Line 12 should be ``System.out.println``.

           .. activecode::  ch5Ex2a
              :language: java
              :optional:

              This is the answer to the previous question.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      int guess = 7;
                      int answer = 9;
                      if (guess < answer)
                      {
                          System.out.println("Your guess is too low");
                      }
                      else if (guess == answer)
                      {
                          System.out.println("You are right!");
                      }
                      else
                      {
                          System.out.println("Your guess is too high");
                      }
                  }
              }

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch5Ex2d

.. tabbed:: ch5Ex3

        .. tab:: Question

           .. activecode::  ch5Ex3q
              :language: java
              :autograde: unittest
              :practice: T

              The following code should print "You can go out" if you have done your homework and cleaned your room. However, the code has errors.  Fix the code so that it compiles and runs correctly.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      boolean doneHomework = True;
                      boolean cleanedRoom = true;
                      if (doneHomework && cleanedRoom)
                      {
                          System.out.println("You cannot go out");
                      }
                      else
                      {
                          System.out.println("You can go out");
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
                      String expect = "You can go out\n";
                      boolean passed = getResults(expect, output, "Expected output from main");
                      assertTrue(passed);
                  }
              }

        .. tab:: Answer

           Line 5 should be ``true`` not ``True``.  Lines 10 and 8 should be swapped.

           .. activecode::  ch5Ex3a
              :language: java
              :optional:

              This is the answer to the previous question.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      boolean doneHomework = true;
                      boolean cleanedRoom = true;
                      if (doneHomework && cleanedRoom)
                      {
                          System.out.println("You can go out");
                      }
                      else
                      {
                          System.out.println("You cannot go out");
                      }
                  }
              }

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch5Ex3d

.. tabbed:: ch5Ex4

        .. tab:: Question

           .. activecode::  ch5Ex4q
              :language: java
              :autograde: unittest
              :practice: T

              The following code should print if x is in the range of 0 to 10 (including 0 and 10). However, the code has errors.  Fix the errors so that the code runs as intended.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      int x = 3
                      if (x > 0 && x <= 10)
                          System.out.println("x is between 0 and 10 inclusive");
                      otherwise
                          System.out.println("x is either less than 0 or greater than 10");
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
                      String expect = "x is between 0 and 10 inclusive\n";
                      boolean passed = getResults(expect, output, "Expected output from main");
                      assertTrue(passed);
                  }
              }

        .. tab:: Answer

           Line 5 is missing an end  ``;``.  Line 6 should be ``x >= 0``.  Line 8 should be ``else`` instead of ``otherwise``.

           .. activecode::  ch5Ex4a
              :language: java
              :optional:

              This is the answer to the previous question.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      int x = 3;
                      if (x >= 0 && x <= 10)
                          System.out.println("x is between 0 and 10 inclusive");
                      else System.out.println("x is either less than 0 or greater than 10");
                  }
              }

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch5Ex4d


.. tabbed:: ch5Ex5

        .. tab:: Question

           .. activecode::  ch5Ex5q
              :language: java
              :autograde: unittest
              :practice: T

              The following code should print if x is less than 0, equal to 0, or greater than 0.  Finish it to work correctly.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      int x = -3;
                      if (x > 0)
                      {
                          System.out.println("x is less than 0");
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
                      String expect = "x is less than 0";
                      boolean passed = getResults(expect, output, "Expected output from main if x = -3");
                      assertTrue(passed);
                  }

                  @Test
                  public void testCountIfs()
                  {
                      String code = getCode();
                      int num = countOccurences(code, "if");
                      boolean passed = num >= 2;

                      getResults("2+", "" + num, "Number of if statements", passed);
                      assertTrue(passed);
                  }

                  @Test
                  public void testCheckCodeContains2()
                  {
                      boolean ifGreater = checkCodeContains("Test if x greater than 0", "if (x > 0)");

                      boolean ifEqual = checkCodeContains("Test if equal", "if (x == 0)");
                      boolean passed =
                              getResults(
                                      "Test if x greater than 0 or test if x is equal to 0",
                                      "Greater than: " + ifGreater + ", Equal to: " + ifEqual,
                                      "Test if x greater than 0 or if x equal to 0",
                                      ifGreater || ifEqual);
                      assertTrue(passed);
                  }
              }

        .. tab:: Answer

           One way to solve this is to add an ``else if`` and then print out if x is equal to 0 and an ``else`` to print that x is greater than 0 as shown below.

           .. activecode::  ch5Ex5a
              :language: java
              :optional:

              This is the answer to the previous question.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      int x = -3;
                      if (x < 0)
                      {
                          System.out.println("x is less than 0");
                      }
                      else if (x == 0)
                      {
                          System.out.println("x is equal to 0");
                      }
                      else
                      {
                          System.out.println("x is greater than 0");
                      }
                  }
              }

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch5Ex5d

.. tabbed:: ch5Ex6

        .. tab:: Question

           .. activecode::  ch5Ex6q
              :language: java
              :autograde: unittest
              :practice: T

              Finish the code below so that it prints ``You can go out`` if you have a ride or if you can walk and otherwise prints ``You can't go out``.  Use a logical or to create a complex conditional.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      boolean canWalk = true;
                      boolean haveRide = false;
                  }
              }

              ====
              import static org.junit.Assert.*;

              import org.junit.*;

              import java.io.*;

              public class RunestoneTests extends CodeTestHelper
              {
                  @Test
                  public void testCheckCodeContains()
                  {
                      boolean output1 =
                              checkCodeContains(
                                      "print statement You can go out", "System.out.println(\"You can go out\")");
                      assertTrue(output1);
                  }

                  @Test
                  public void testCheckCodeContains2()
                  {
                      boolean output2 =
                              checkCodeContains(
                                      "print statement You can't go out",
                                      "System.out.println(\"You can't go out\")");
                      assertTrue(output2);
                  }

                  @Test
                  public void testCheckCodeContains3()
                  {
                      boolean output3 = checkCodeContains("or", "||");
                      assertTrue(output3);
                  }

                  @Test
                  public void testChangedCode()
                  {
                      String origCode =
                              "public class Test1 { public static void main(String[] args) { boolean canWalk ="
                                  + " true; boolean haveRide = false; } }";

                      boolean changed = codeChanged(origCode);

                      assertTrue(changed);
                  }
              }

        .. tab:: Answer

           Add an ``if`` statement and use a logical or (``||``) to join the conditions and print the one message.  Also add an ``else`` statement and print the other message.

           .. activecode::  ch5Ex6a
              :language: java
              :optional:

              This is the answer to the previous question.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      boolean canWalk = true;
                      boolean haveRide = false;
                      if (canWalk || haveRide)
                      {
                          System.out.println("You can go out");
                      }
                      else
                      {
                          System.out.println("You can't go out");
                      }
                  }
              }

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch5Ex6d

.. tabbed:: ch5Ex7

        .. tab:: Question

           .. activecode::  ch5Ex7q
              :language: java
              :autograde: unittest
              :practice: T

              Finish the code below to print you can go out if you don't have homework and you have done the dishes.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      boolean haveHomework = false;
                      boolean didDishes = true;
                  }
              }

              ====
              import static org.junit.Assert.*;

              import org.junit.*;

              import java.io.*;

              public class RunestoneTests extends CodeTestHelper
              {
                  @Test
                  public void testCheckCodeContains()
                  {
                      boolean output1 =
                              checkCodeContains(
                                      "print statement You can go out", "System.out.println(\"You can go out\")");
                      assertTrue(output1);
                  }

                  @Test
                  public void testCheckCodeContains2()
                  {
                      boolean output2 = checkCodeContains("and", "&&");
                      assertTrue(output2);
                  }

                  @Test
                  public void testCheckCodeContains3()
                  {
                      boolean output2 = checkCodeContains("not", "!");
                      assertTrue(output2);
                  }

                  @Test
                  public void testChangedCode()
                  {
                      String origCode =
                              "public class Test1 { public static void main(String[] args) { boolean haveHomework"
                                  + " = false; boolean didDishes = true; } }";
                      boolean changed = codeChanged(origCode);
                      assertTrue(changed);
                  }
              }

        .. tab:: Answer

           Add a conditional with a negation ``!`` for haveHomework and a logical and to create a complex conditional.

           .. activecode::  ch5Ex7a
              :language: java
              :optional:

              This is the answer to the previous question.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      boolean haveHomework = false;
                      boolean didDishes = true;
                      if (!haveHomework && didDishes)
                      {
                          System.out.println("You can go out");
                      }
                      else
                      {
                          System.out.println("You can't go out");
                      }
                  }
              }

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch5Ex7d

.. tabbed:: ch5Ex8

        .. tab:: Question

           .. activecode::  ch5Ex8q
              :language: java
              :autograde: unittest
              :practice: T

              Finish the following code so that it prints ``You have a fever`` if your temperature is above 100 and otherwise prints ``You don't have a fever``.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      double temp = 103.5;
                  }
              }

              ====
              import static org.junit.Assert.*;

              import org.junit.*;

              import java.io.*;

              public class RunestoneTests extends CodeTestHelper
              {
                  @Test
                  public void testCheckCodeContains()
                  {
                      boolean output1 =
                              checkCodeContains(
                                      "print statement You have a fever",
                                      "System.out.println(\"You have a fever\")");
                      assertTrue(output1);
                  }

                  @Test
                  public void testCheckCodeContains2()
                  {
                      boolean output2 =
                              checkCodeContains(
                                      "print statement You don't have a fever",
                                      "System.out.println(\"You don't have a fever\")");
                      assertTrue(output2);
                  }

                  @Test
                  public void testCheckCodeContains3()
                  {
                      boolean output4 =
                              checkCodeContains("if statement for temp greater than 100", "if (temp > 100)");
                      assertTrue(output4);
                  }

                  @Test
                  public void testChangedCode()
                  {
                      String origCode =
                              "public class Test1 { public static void main(String[] args) { double temp = 103.5;"
                                  + " } }";
                      boolean changed = codeChanged(origCode);
                      assertTrue(changed);
                  }
              }

        .. tab:: Answer

           Add a conditional and print the first message if the temp is above 100 and otherwise print the other message.

           .. activecode::  ch5Ex8a
              :language: java
              :optional:

              This is the answer to the previous question.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      double temp = 103.5;
                      if (temp > 100)
                      {
                          System.out.println("You have a fever");
                      }
                      else
                      {
                          System.out.println("You don't have a fever");
                      }
                  }
              }

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch5Ex8d

.. tabbed:: ch5Ex9

        .. tab:: Question

           .. activecode::  ch5Ex9q
              :language: java
              :autograde: unittest
              :practice: T

              Finish the code to print ``It is freezing`` if the temperature is below 30, ``It is cold`` if it is below 50, ``It is nice out`` if it is below 90, or ``It is hot`` using nested if else statements.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      int temp = 100;
                  }
              }

              ====
              import static org.junit.Assert.*;

              import org.junit.*;

              import java.io.*;

              public class RunestoneTests extends CodeTestHelper
              {
                  @Test
                  public void testCountIfs()
                  {
                      String code = getCode();
                      int num = countOccurences(code, "if");
                      boolean passed = num >= 3;

                      getResults("3+", "" + num, "Number of if statements", passed);
                      assertTrue(passed);
                  }

                  @Test
                  public void testCountElses()
                  {
                      String code = getCode();
                      int num = countOccurences(code, "else");
                      boolean passed = num >= 3;

                      getResults("3+", "" + num, "Number of else statements", passed);
                      assertTrue(passed);
                  }

                  @Test
                  public void testCountPrints()
                  {
                      String code = getCode();
                      int num = countOccurences(code, "System.out.print");
                      boolean passed = num >= 4;

                      getResults("4+", "" + num, "Number of print statements", passed);
                      assertTrue(passed);
                  }

                  @Test
                  public void testMain() throws IOException
                  {
                      String expect = "It is hot";
                      String output = getMethodOutput("main");
                      boolean passed = getResults(expect, output, "Prints It is hot if temp = 100");
                      assertTrue(passed);
                  }

                  @Test
                  public void testChangedCode()
                  {
                      String origCode =
                              "public class Test1 { public static void main(String[] args) {  int temp = 100; }"
                                  + " }";
                      boolean changed = codeChanged(origCode);
                      assertTrue(changed);
                  }
              }

        .. tab:: Answer

           Add a conditional with two ``else if`` statements and a final ``else``.

           .. activecode::  ch5Ex9a
              :language: java
              :optional:

              This is the answer to the previous question.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      int temp = 100;
                      if (temp < 30)
                      {
                          System.out.println("It is freezing");
                      }
                      else if (temp < 50)
                      {
                          System.out.println("It is cold");
                      }
                      else if (temp < 90)
                      {
                          System.out.println("It is nice out");
                      }
                      else
                      {
                          System.out.println("It is hot");
                      }
                  }
              }

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch5Ex9d

.. tabbed:: ch5Ex10

        .. tab:: Question

           .. activecode::  ch5Ex10q
              :language: java
              :autograde: unittest
              :practice: T


              Finish the code below to print your grade based on your score.  The score is an A if you scored 92 or higher, a B if you scored 82 to 91, a C if you scored 72 to 81, a D if you scored a 62 to 71, or an E.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      int score = 67;
                  }
              }

              ====
              import static org.junit.Assert.*;

              import org.junit.*;

              import java.io.*;

              public class RunestoneTests extends CodeTestHelper
              {
                  @Test
                  public void testChangedCode()
                  {
                      String origCode =
                              "public class Test1 { public static void main(String[] args) {        int score ="
                                  + " 67; } }";

                      boolean changed = codeChanged(origCode);

                      assertTrue(changed);
                  }

                  @Test
                  public void testCheckCodeContains()
                  {

                      boolean outputA = checkCodeContains("print statement - A", "System.out.println(\"A\")");
                      assertTrue(outputA);
                  }

                  @Test
                  public void testCheckCodeContains2()
                  {
                      boolean outputB = checkCodeContains("print statement - B", "System.out.println(\"B\")");
                      assertTrue(outputB);
                  }

                  @Test
                  public void testCheckCodeContains3()
                  {
                      boolean outputC = checkCodeContains("print statement - C", "System.out.println(\"C\")");
                      assertTrue(outputC);
                  }

                  @Test
                  public void testCheckCodeContains4()
                  {
                      boolean outputD = checkCodeContains("print statement - D", "System.out.println(\"D\")");
                      assertTrue(outputD);
                  }

                  @Test
                  public void testCheckCodeContains5()
                  {
                      boolean outputE = checkCodeContains("print statement - E", "System.out.println(\"E\")");
                      assertTrue(outputE);
                  }

                  @Test
                  public void testCheckCodeContains6()
                  {
                      boolean output = checkCodeContains("if you scored 92 or higher", "if (score >= 92)");
                      assertTrue(output);
                  }

                  @Test
                  public void testCheckCodeContains7()
                  {
                      boolean output =
                              checkCodeContains("else if you scored 82 or higher", "else if (score >= 82)");
                      assertTrue(output);
                  }

                  @Test
                  public void testCheckCodeContains8()
                  {
                      boolean output =
                              checkCodeContains("else if you scored 72 or higher", "else if (score >= 72)");
                      assertTrue(output);
                  }

                  @Test
                  public void testCheckCodeContains9()
                  {
                      boolean output =
                              checkCodeContains("else if you scored 62 or higher", "else if (score >= 62)");
                      assertTrue(output);
                  }
              }

        .. tab:: Answer

           Add a conditional with three ``else if`` statements and a final ``else``.

           .. activecode::  ch5Ex10a
              :language: java
              :optional:

              This is the answer to the previous question.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      int score = 67;
                      if (score >= 92)
                      {
                          System.out.println("A");
                      }
                      else if (score >= 82)
                      {
                          System.out.println("B");
                      }
                      else if (score >= 72)
                      {
                          System.out.println("C");
                      }
                      else if (score >= 62)
                      {
                          System.out.println("D");
                      }
                      else
                      {
                          System.out.println("E");
                      }
                  }
              }

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch5Ex10d






For more practice with conditionals, and especially complex conditionals, go to http://codingbat.com/java/Logic-1 and http://codingbat.com/java/Logic-2

In particular we recommend solving the following problems

* http://codingbat.com/prob/p118290
* http://codingbat.com/prob/p183071
* http://codingbat.com/prob/p110973
* http://codingbat.com/prob/p103360
* http://codingbat.com/prob/p169213
* http://codingbat.com/prob/p178728
* http://codingbat.com/prob/p115233
