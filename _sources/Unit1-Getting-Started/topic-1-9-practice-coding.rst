.. qnum::
   :prefix: 1-9-
   :start: 1

Coding Practice
=======================


.. tabbed:: ch4Ex2

        .. tab:: Question

           .. activecode::  ch4Ex2q
              :language: java
              :autograde: unittest
              :practice: T

              The following code should print "Mary's favorite color is blue".  However, the code has errors.  Fix the code so that it compiles and runs correctly.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      String name = Mary";
                      String color = "blue"
                      System.out.println(Name + "'s favorite color is " + color);
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
                      String expect = "Mary's favorite color is blue";
                      boolean passed =
                              getResults(expect, output, "Expected output from main");
                      assertTrue(passed);
                  }
              }

        .. tab:: Answer

           Line 5 is missing a starting ``"``.  Line 6 is missing a ending ``;``.  Line 7 has ``Name`` when it should be ``name``.  Remember that variable names start with a lowercase letter.

           .. activecode::  ch4Ex2a
              :language: java
              :optional:

              This is the answer to the previous question.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      String name = "Mary";
                      String color = "blue";
                      System.out.println(name + "'s favorite color is " + color);
                  }
              }

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch4Ex2d

.. tabbed:: ch4Ex3

        .. tab:: Question

           .. activecode::  ch4Ex3q
              :language: java
              :autograde: unittest
              :practice: T

              The following code should print "Gabby's favorite sport is soccer".  However, the code has errors.  Fix the code so that it compiles and runs correctly.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      String name "Gabby";
                      String sport = "soccer;
                      System.out.println(Name +
                                 "'s favorite sport is " sport);
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
                      String expect = "Gabby's favorite sport is soccer";
                      boolean passed =
                              getResults(expect, output, "Expected output from main");
                      assertTrue(passed);
                  }
              }

        .. tab:: Answer

           Line 5 is missing a ``=``.  Line 6 is missing the closing ``"``.  Line 7 has ``Name`` when it should be ``name``.  Remember that a variable name starts with a lowercase letter.  Line 8 is missing an ending ``+``.

           .. activecode::  ch4Ex3a
              :language: java
              :optional:

              public class Test1
              {
                  public static void main(String[] args)
                  {
                      String name = "Gabby";
                      String sport = "soccer";
                      System.out.println(name +
                             "'s favorite sport is " + sport);
                  }
              }

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch4Ex3d

.. tabbed:: ch4Ex5

        .. tab:: Question

           .. activecode::  ch4Ex5q
              :language: java
              :autograde: unittest
              :practice: T

              The following code should print ``Your name is Carly and your favorite color is red``.  Finish the code so that it prints the output correctly using the variables provided.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      String name = "Carly";
                      String color = "red";
                      System.out.println();
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
                      String expect = "Your name is Carly and your favorite color is red";
                      boolean passed =
                              getResults(expect, output, "Expected output from main");
                      assertTrue(passed);
                  }
              }

        .. tab:: Answer

           Add the required strings using the ``+`` operator and be sure to include spaces as needed.

           .. activecode::  ch4Ex5a
              :language: java
              :optional:

              This is the answer to the previous question.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      String name = "Carly";
                      String color = "red";
                      System.out.println(
                              "Your name is "
                                      + name
                                      + " and your favorite color is "
                                      + color);
                  }
              }

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch4Ex5d

.. tabbed:: ch4Ex6

        .. tab:: Question


           Finish the code below so that it prints ``Your name is Justin and your age is 16`` using the variables provided.

           .. activecode::  ch4Ex6q
              :language: java
              :autograde: unittest
              :practice: T

              public class Test1
              {
                  public static void main(String[] args)
                  {
                      String name = "Justin";
                      int age = 16;
                      System.out.println();

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
                      String expect = "Your name is Justin and your age is 16";
                      boolean passed =
                              getResults(expect, output, "Expected output from main");
                      assertTrue(passed);
                  }
              }

        .. tab:: Answer

           Use the ``+`` operator to append the strings.  Be sure to include spaces as needed.

           .. activecode::  ch4Ex6a
              :language: java
              :optional:

              public class Test1
              {
                  public static void main(String[] args)
                  {
                      String name = "Justin";
                      int age = 16;
                      System.out.println("Your name is " + name +
                                         " and your age is " + age);

                  }
              }

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch4Ex6d

.. tabbed:: ch4Ex7

        .. tab:: Question

           .. activecode::  ch4Ex7q
              :language: java
              :autograde: unittest
              :practice: T

              Write the code to print ``Julian's favorite color is green.  His favorite food is pizza.`` using the variables provided.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      String name = "Julian";
                      String color = "green";
                      String food = "pizza";
                      System.out.println();
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
                      String expect =
                              "Julian's favorite color is green. His favorite food is"
                                  + " pizza.";
                      boolean passed =
                              getResults(expect, output, "Expected output from main");
                      assertTrue(passed);
                  }
              }

        .. tab:: Answer

           Add the strings together using ``+``.  Don't forget to include spaces and periods at the end of the sentences.

           .. activecode::  ch4Ex7a
              :language: java
              :optional:

              This is the answer to the previous question.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      String name = "Julian";
                      String color = "green";
                      String food = "pizza";
                      System.out.println(
                              name
                                      + "'s favorite color is "
                                      + color
                                      + ".  His favorite food is "
                                      + food
                                      + ".");
                  }
              }

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch4Ex7d

.. tabbed:: ch4Ex8

        .. tab:: Question

           .. activecode::  ch4Ex8q
              :language: java
              :autograde: unittest
              :practice: T

              Finish the code below to print your favorite animal and food.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      String animal =
                      String food =
                      System.out.println();

                  }
              }
              ====
              import static org.junit.Assert.*;

              import org.junit.*;

              import java.io.*;

              public class RunestoneTests extends CodeTestHelper
              {
                  @Test
                  public void testPrintStringsA() throws IOException
                  {
                      String target1 = "+animal";
                      // boolean passed1 = checkCodeContains("print animal string",
                      // target1);
                      String code =
                              getCodeWithoutComments()
                                      .replaceAll(" ", "")
                                      .replaceAll("\n", "");
                      boolean passed1 = code.contains(target1);

                      getResults("" + true, "" + passed1, "Code prints animal variable");

                      assertTrue(passed1);
                  }

                  @Test
                  public void testPrintStringsB() throws IOException
                  {
                      String target1 = "+food";
                      // boolean passed1 = checkCodeContains("print food string", target1);
                      String code =
                              getCodeWithoutComments()
                                      .replaceAll(" ", "")
                                      .replaceAll("\n", "");
                      boolean passed1 = code.contains(target1);

                      getResults("" + true, "" + passed1, "Code prints food variable");
                      assertTrue(passed1);
                  }
              }

        .. tab:: Answer

           Use ``+`` to add strings together.  Add spaces as needed and periods.

           .. activecode::  ch4Ex8a
              :language: java
              :optional:

              This is the answer to the previous question.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      String animal = "horse";
                      String food = "chicken";
                      System.out.println(
                              "My favorite animal is a "
                                      + animal
                                      + ".  "
                                      + "My favorite food is "
                                      + food
                                      + ".");
                  }
              }

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch4Ex8d

.. tabbed:: ch4Ex9

        .. tab:: Question

           Finish the code below to print your favorite movie and book.

           .. activecode::  ch4Ex9q
              :language: java
              :autograde: unittest
              :practice: T

              public class Test1
              {
                  public static void main(String[] args)
                  {
                      String movie = "";
                      String book = "";
                      System.out.println();

                  }
              }
              ====
              import static org.junit.Assert.*;

              import org.junit.*;

              import java.io.*;

              public class RunestoneTests extends CodeTestHelper
              {
                  @Test
                  public void testPrintStringsA() throws IOException
                  {
                      String target1 = "+movie";
                      // boolean passed1 = checkCodeContains("print movie string", target1);
                      String code =
                              getCodeWithoutComments()
                                      .replaceAll(" ", "")
                                      .replaceAll("\n", "");
                      boolean passed1 = code.contains(target1);

                      getResults("" + true, "" + passed1, "Code prints movie variable");
                      assertTrue(passed1);
                  }

                  @Test
                  public void testPrintStringsB() throws IOException
                  {
                      String target1 = "+book";
                      // boolean passed1 = checkCodeContains("print book string", target1);
                      String code =
                              getCodeWithoutComments()
                                      .replaceAll(" ", "")
                                      .replaceAll("\n", "");
                      boolean passed1 = code.contains(target1);

                      getResults("" + true, "" + passed1, "Code prints book variable");
                      assertTrue(passed1);
                  }
              }

        .. tab:: Answer

           Add the strings together using ``+``.  Don't forget to include spaces and periods at the end of the sentences.

           .. activecode::  ch4Ex9a
              :language: java
              :optional:

              public class Test1
              {
                  public static void main(String[] args)
                  {
                      String movie = "The Princess Bride";
                      String book = "Harry Potter";
                      System.out.println("My favorite movie is " + movie + ".  " +
                                         "My favorite book is " + book + ".");

                  }
              }

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch4Ex9d

.. tabbed:: ch3Ex1

        .. tab:: Question

           .. activecode::  ch3Ex1q
              :language: java
              :autograde: unittest
              :practice: T

              The following code should calculate the cost of a trip that is 300 miles if gas is $2.50 a gallon and your car gets 30 miles per gallon.  However, the code has syntax errors, like missing semicolons, wrong case on names, or unmatched ``"`` or ``(``.  Fix the code so that it compiles and runs correctly.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      int tripMiles = 300
                      Double price = 2.50;
                      int milesPerGallon = 30;
                      double numberOfGallons = tripmiles / milesPerGallon;
                      double totalCost = numberOfGallons * price;
                      System.out.println(totalCost);
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
                      String expect = "25.0";
                      boolean passed =
                              getResults(expect, output, "Expected output from main");
                      assertTrue(passed);
                  }
              }

        .. tab:: Answer

           Line 5 is missing a semicolon.  Line 6 has ``Double`` instead of ``double``.  Remember that the primitive types all start with a lowercase letter.  Line 8 has ``tripmiles`` instead of ``tripMiles``.  Remember that you should uppercase the first letter of each new word to make the variable name easier to read (use camel case).

           .. activecode::  ch3Ex1a
              :language: java
              :optional:

              This is the answer for the previous question.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      int tripMiles = 300;
                      double price = 2.50;
                      int milesPerGallon = 30;
                      double numberOfGallons = tripMiles / milesPerGallon;
                      double totalCost = numberOfGallons * price;
                      System.out.println(totalCost);
                  }
              }

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch3ex1d

.. tabbed:: ch3Ex2

        .. tab:: Question

           .. activecode::  ch3Ex2q
              :language: java
              :autograde: unittest
              :practice: T

              The following code should calculate the body mass index (BMI) for someone who is 5 feet tall and weighs 110 pounds.  However, the code has syntax errors, like missing semicolons, wrong case on names, or unmatched ``"`` or ``(``. Fix the code so that it compiles and runs correctly.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      double Height = 60;    // in inches (60 inches is 5 feet)
                      double weight  110;    // in pounds
                      double heightSquared = height  height;
                      double bodyMassIndex = weight / heightSquared
                      double bodyMassIndexMetric = bodyMassIndex * 703;
                      System.out.println(bodyMassIndexMetric);
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
                      String expect = "21.480555555555554\n";
                      boolean passed =
                              getResults(expect, output, "Expected output from main");
                      assertTrue(passed);
                  }
              }

        .. tab:: Answer

           Line 5 has ``Height`` instead of ``height``.  Remember that variable names should start with a lowercase letter.  Line 6 is missing an equal sign.  Line 7 is missing a ``*`` to square the height.  Line 8 is missing a semicolon at the end of the statement.

           .. activecode::  ch3Ex2a
              :language: java
              :optional:

              This is the answer for the previous question.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      double height = 60; // in inches (60 inches is 5 feet)
                      double weight = 110; // in pounds
                      double heightSquared = height * height;
                      double bodyMassIndex = weight / heightSquared;
                      double bodyMassIndexMetric = bodyMassIndex * 703;
                      System.out.println(bodyMassIndexMetric);
                  }
              }

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch3ex2d

.. tabbed:: ch3Ex3

        .. tab:: Question

           .. activecode::  ch3Ex3q
              :language: java
              :autograde: unittest
              :practice: T

              The following code should calculate the number of miles that you can drive when you have $8.00 and the price of gas is 2.35 and the car gets 40 miles per gallon.  However, the code has errors.  Fix the code so that it compiles and runs correctly.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      gallonPrice = 2.35;
                      40 = double milesPerGallon;
                      double totalFunds = 8.0;
                      double numGallons = totalFunds gallonPrice;
                      double numMiles = numGallons * milesPerGallon;
                      System.out.println(numMiles;
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
                      String expect = "136.17021276595744\n";
                      boolean passed =
                              getResults(expect, output, "Expected output from main");
                      assertTrue(passed);
                  }
              }

        .. tab:: Answer

           Line 5 is missing the type ``double``.  Line 6 is backwards.  It should be ``double milesPerGallon = 40;``.  Line 8 is missing a ``/``.  Line 10 is missing a ``)``.

           .. activecode::  ch3Ex3a
              :language: java
              :optional:

              This is the answer to the previous question.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      double gallonPrice = 2.35;
                      double milesPerGallon = 40;
                      double totalFunds = 8.0;
                      double numGallons = totalFunds / gallonPrice;
                      double distance = numGallons * milesPerGallon;
                      System.out.println(distance);
                  }
              }

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch3ex3d

.. tabbed:: ch3Ex4

        .. tab:: Question

           .. activecode::  ch3Ex4q
              :language: java
              :autograde: unittest
              :practice: T

              The following code should calculate the cost of an item that is on clearance (70% off) when you also have a coupon for an additional 20% off the clearance price.  However, the code has errors.  Fix the code so that it compiles and runs correctly.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      int originalPrice = 68.00;
                      int clearancePrice = originalPrice * 0.3;
                      int finalPrice = clearancePrice * 0.8;
                      System.out.println(finalPrice);
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
                      String expect = "16.32\n";
                      boolean passed =
                              getResults(expect, output, "Expected output from main");
                      assertTrue(passed);
                  }
              }

        .. tab:: Answer

           Lines 5, 6, and 7 should all be ``double`` versus ``int`` so that the decimal portion of the calculation isn't thrown away.

           .. activecode::  ch3Ex4a
              :language: java
              :optional:

              This is the answer to the previous question.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      double originalPrice = 68.00;
                      double clearancePrice = originalPrice * 0.3;
                      double finalPrice = clearancePrice * 0.8;
                      System.out.println(finalPrice);
                  }
              }

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch3ex4d


.. tabbed:: ch3Ex5

        .. tab:: Question

           .. activecode::  ch3Ex5q
              :language: java
              :autograde: unittest
              :practice: T

              The following code should calculate the number of whole days in 320893 seconds. However, the code has errors.  Fix the code so that it compiles and runs correctly.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      int numSecs = 320893;
                      int numHours = numSecs   3600;
                      int numDays = numHours   24;
                      System.out.println numDays);

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
                      String expect = "3\n";
                      boolean passed =
                              getResults(expect, output, "Expected output from main");
                      assertTrue(passed);
                  }
              }

        .. tab:: Answer

           Lines 6 and 7 are both missing a ``/``.  Line 8 is missing a ``(``.  Line 9 is missing a ``}`` to close the ``main`` method.

           .. activecode::  ch3Ex5a
              :language: java
              :optional:

              This is the answer to the previous question.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      int numSecs = 320893;
                      int numHours = numSecs / 3600;
                      int numDays = numHours / 24;
                      System.out.println(numDays);
                  }
              }

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch3ex5d

.. tabbed:: ch3Ex6

        .. tab:: Question

           .. activecode::  ch3Ex6q
              :language: java
              :autograde: unittest
              :practice: T

              Complete the code below to calculate and print how many months it will take to save $200 if you earn $20 a week.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                    double goal =
                    double weeklyRate =
                    double numWeeks =
                    double numMonths =
                    System.out.println(numMonths);
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
                      String expect = "2.5\n";
                      boolean passed =
                              getResults(expect, output, "Expected output from main");
                      assertTrue(passed);
                  }

                  @Test
                  public void testFormulaNumMonths() throws IOException
                  {
                      String target = "double numMonths = numWeeks / 4;";
                      boolean passed = checkCodeContains("formula for numMonths", target);
                      assertTrue(passed);
                  }
              }

        .. tab:: Answer

           Calculate how many weeks it would take to make $200.  Next divide the number of weeks by 4 (roughly the number of weeks in a month).

           .. activecode::  ch3Ex6a
              :language: java
              :optional:

              This is the answer to the previous question.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      double weeklyRate = 20;
                      double goal = 200;
                      double numWeeks = goal / weeklyRate;
                      double numMonths = numWeeks / 4;
                      System.out.println(numMonths);
                  }
              }

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch3ex6d

.. tabbed:: ch3Ex7

        .. tab:: Question

           .. activecode::  ch3Ex7q
              :language: java
              :autograde: unittest
              :practice: T

              Write the code to calculate the number of miles you can drive if you have a 10 gallon gas tank and are down to a quarter of a tank of gas and your car gets 32 miles per gallon.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      // Your code should declare the variables 
                      //  numGallons, milesPerGallon, and miles, and
                      // calculate numGallons (the number of gallons left in the tank given the values above), 
                      // initialize milesPerGallon (the miles per gallon given above for this car), 
                      // calculate miles (the number of miles you can drive calculated from the other variables)
                      // and print out miles.

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
                      String expect = "80.0\n";
                      boolean passed =
                              getResults(expect, output, "Expected output from main (use doubles!)");
                      assertTrue(passed);
                  }

                  @Test
                  public void testFormulaMiles() throws IOException
                  {
                      String target1 = removeSpaces("numGallons * milesPerGallon");
                      String target2 = removeSpaces("milesPerGallon * numGallons");

                      String code = removeSpaces(getCode());
                      code = code.replaceAll("\\(", "").replaceAll("\\)", "");

                      boolean passed = code.contains(target1) || code.contains(target2);
                      getResults(
                              "true",
                              "" + passed,
                              "Formula for miles using the variables numGallons and milesPerGallon",
                              passed);
                      assertTrue(passed);
                  }
              }

        .. tab:: Answer

           First calculate the number of gallons you have left and then multiply that by the miles per gallon to get the number of miles you can still drive.

           .. activecode::  ch3Ex7a
              :language: java
              :optional:

              This is the answer to the previous question.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      double numGallons = 10.0 / 4;
                      double milesPerGallon = 32;
                      double miles = numGallons * milesPerGallon;
                      System.out.println(miles);
                  }
              }

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch3ex7d

.. tabbed:: ch3Ex8

        .. tab:: Question

           .. activecode::  ch3Ex8q
              :language: java
              :autograde: unittest
              :practice: T

              Write the code to calculate the number of seconds in 3 days.  Remember that there are 60 seconds in a minute and 60 minutes in an hour and 24 hours in a day.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      // Your code should declare the variables 
                      // secondsInDay and secondsInThreeDays and
                      // initialize or calculate secondsInDay 
                      // and calculate secondsInThreeDays using secondsInDay
                      // and print out secondsInThreeDays.

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
                      String expect = "259200\n";
                      boolean passed =
                              getResults(expect, output, "Expected output from main");
                      assertTrue(passed);
                  }

                  @Test
                  public void testFormulaMiles() throws IOException
                  {
                      String target1 =
                              removeSpaces("secondsInDay * 3;");
                      String target2 =
                              removeSpaces("3 * secondsInDay;");
                      String code = removeSpaces(getCode());
                      boolean passed1 = code.contains(target1);
                      boolean passed2 = code.contains(target2);

                      boolean passed = passed1 || passed2;
                      getResults(
                              "true",
                              "" + passed,
                              "formula for secondsInThreeDays using the variable secondsInDay",
                              passed);
                      assertTrue(passed);
                  }
              }

        .. tab:: Answer

           First compute the number of seconds in 1 day and then multiple that by 3 days.

           .. activecode::  ch3Ex8a
              :language: java
              :optional:

              This is the answer to the previous question.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      int secondsInMinute = 60;
                      int minutesInHour = 60;
                      int hoursInDay = 24;
                      int secondsInDay = secondsInMinute * minutesInHour * hoursInDay;
                      int secondsInThreeDays = secondsInDay * 3;
                      System.out.println(secondsInThreeDays);
                  }
              }

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch3ex8d


.. tabbed:: ch3Ex10

        .. tab:: Question

           .. activecode::  ch3Ex10q
              :language: java
              :autograde: unittest
              :practice: T

              Write the code to print the number of chicken wings you can buy if you have $4.50 and they cost $0.75 each.  Remember that you can't buy part of a wing.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      // Your code should use the variables
                      // money, pricePerWing, numWings, and
                      // initialize money and pricePerWing using the values above, 
                      // and calculate numWings using money and pricePerWing and type casting to int
                      // and print out numWings

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
                      String expect = "6\n";
                      boolean passed =
                              getResults(expect, output, "Expected output from main");
                      assertTrue(passed);
                  }

                  @Test
                  public void testFormulaWings() throws IOException
                  {
                      // codeContains will remove spaces
                      String target = "numWings = (int)(money / pricePerWing)";
                      boolean passed =
                              checkCodeContains(
                                      "formula for numWings using money and pricePerWing,"
                                          + " and type casting to int with correct parentheses",
                                      target);
                      assertTrue(passed);
                  }
              }

        .. tab:: Answer

           Divide the amount of money you have by the cost of each wing and set the result to an integer since you can't buy a part of a wing.

           .. activecode::  ch3Ex10a
              :language: java
              :optional:

              This is the answer to the previous question.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      double money = 4.5;
                      double pricePerWing = 0.75;
                      int numWings = (int) (money / pricePerWing);
                      System.out.println(numWings);
                  }
              }

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch3ex10d

