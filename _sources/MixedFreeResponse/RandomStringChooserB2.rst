.. qnum::
   :prefix:  14-4-
   :start: 1

RandomStringChooser - Part B - 2nd time
===============================================

.. index::
   single: RandomLetterChooser
   single: free response

**Part b.**   The following partially completed ``RandomLetterChooser`` class is a subclass of the ``RandomStringChooser`` class.  You will write the constructor for the ``RandomLetterChooser`` class.

.. code-block:: java

   public class RandomLetterChooser extends RandomStringChooser
   {
       /** Constructs a random letter chooser using the given string str.
        *  Precondition: str contains only letters.
        */
       public RandomLetterChooser (String str)
       { /* to be implemented in part (b) */ }

       /** Returns an array of single-letter strings.
        *  Each of these strings consists of a single letter from str.  Element k
        *  of the returned array contains the single letter at position k of str.
        *  For example, getSingleLetters("cat") return the
        *  array {"c", "a", "t" }.
        */
       public static String[] getSingleLetters(String str)
       {    /* implementation not shown */ }


The following code segment shows an example of using ``RandomLetterChooser``.


.. code-block:: java

   RandomLetterChooser letterChooser = new RandomLetterChooser("cat");
   for (int k = 0; k < 4; k++)
   {
       System.out.print(letterChooser.getNext());
   }

The code segment will print the three letters in ``"cat"`` in one of the possible orders.  Because there are only three letters in the original string, the code segment prints ``"NONE"`` the fourth time through the loop.  One possible output is shown below.


.. code-block:: java

   actNONE

Assume that the ``RandomStringChooser`` class that you wrote in part (a) has been implemented correctly and that
``getSingleLetters`` works as specified.  You must use ``getSingleLetters`` appropriately to receive full credit.

Complete the ``RandomLetterChooser`` constructor below.  The following code block shows the construtor declaration.

.. code-block:: java

    /** Constructs a random letter chooser using the given string str.
     *  Precondition: str contains only letters.
     */
    public RandomLetterChooser(String str)

Try and Solve It - Again
-----------------------------

Complete the ``RandomLetterChooser`` constructor below.

The code below has a main method for testing.  Write the constructor for the ``RandomLetterChooser`` class and use the main method to test it.

.. activecode:: RandomStrChooserB1-2
   :language: java
   :autograde: unittest

   Complete the ``RandomLetterChooser`` constructor below (which can be 1 or 2 lines of code). Copy in your RandomStringChooser class from the previous lesson (delete the public from in front of it since there can only be 1 public class if you ha
   ~~~~

   // Add in class RandomStringChooser from the previous lesson.
   // Do not make it public

   public class RandomLetterChooser extends RandomStringChooser
   {
       /**
        * Constructs a random letter chooser using the given string str. Precondition:
        * str contains only letters.
        */
       public RandomLetterChooser(String str)
       {
           // *** write the constructor here ***!
       }

       /**
        * Returns an array of single-letter strings. Each of these strings consists of
        * a single letter from str. Element k of the returned array contains the
        * single letter at position k of str. For example, getSingleLetters("cat")
        * return the array {"c", "a", "t" }.
        */
       public static String[] getSingleLetters(String str)
       {
           String[] strArr = new String[str.length()];
           for (int i = 0; i < str.length(); i++)
           {
               strArr[i] = str.substring(i, i + 1);
           }
           return strArr;
       }

       public static void main(String[] args)
       {
           RandomLetterChooser letterChooser = new RandomLetterChooser("cat");
           System.out.println(
                   "This should print three letters at random from cat and then"
                       + " NONE");
           for (int k = 0; k < 4; k++)
           {
               System.out.print(letterChooser.getNext());
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
           super("RandomLetterChooser");
           // CodeTestHelper.sort = true;
       }

       @Test
       public void testMain1()
       {
           boolean passed = false;

           String expect = "This should print three letters at random from cat and then NONE\ntcaNONE";

           String output1 = getMethodOutput("main");

           expect = expect.substring(expect.indexOf("\n") + 1);
           output1 = output1.substring(output1.indexOf("\n") + 1);

           int num1 = countOccurences(output1, "c");
           int num2 = countOccurences(output1, "a");
           int num3 = countOccurences(output1, "t");
           int num5 = countOccurences(output1, "NONE");

           passed = num1 == 1 && num2 == 1 && num3 == 1 && num5 == 1;

           getResults(
                   expect,
                   output1,
                   "Checking that each letter is in output correct number of times",
                   passed);
           assertTrue(passed);
       }

       @Test
       public void testMain2()
       {
           boolean passed = false;

           String output1 = getMethodOutput("main");
           String output2 = getMethodOutput("main");
           String output3 = getMethodOutput("main");

           passed = !output1.equals(output2) || !output2.equals(output3) || !output1.equals(output3);

           getResults(
                   "Different results each time",
                   "Same results each time",
                   "Checking for random order",
                   passed);
           assertTrue(passed);
       }
   }

