.. qnum::
   :prefix:  16-1-
   :start: 1

RandomStringChooser - Part A
===============================

.. index::
    single: RandomStringChooser
    single: free response

The following is a free response question from 2016.  It was question 1 on the exam.  You can see all the free response questions from past exams at https://apstudents.collegeboard.org/courses/ap-computer-science-a/free-response-questions-by-year.

**Question 1.** This question involves the implementation and extension of a ``RandomStringChooser`` class.

**Part a.**   A ``RandomStringChooser`` object is constructed from an array of non-null ``String`` values.  When the object is first constructed,
all of the strings are considered available.  The ``RandomStringChooser`` class has a ``getNext`` method, which has the following behavior.  A call to ``getNext`` returns a randomly chosen string from the available strings
in the object.  Once a particular string has been returned from a call to ``getNext``, it is no longer available to be returned from subsequent calls to ``getNext``.  If no strings are available to be returned, ``getNext`` returns ``"NONE``.

The following code segment shows an example of the behavior of ``RandomStringChooser``.


.. code-block:: java

   String[] wordArray = {"wheels", "on", "the", "bus"};
   RandomStringChooser sChooser = new RandomStringChooser(wordArray);
   for (int k = 0; k < 6; k++)
   {
      System.out.println(sChooser.getNext() + " ");
   }

One possible output is shown below.  Because ``sChooser`` has only four strings, the string ``"NONE`` is printed twice.

.. code-block:: java

   bus the wheels on NONE NONE


Try and Solve It
----------------

Write the entire ``RandomStringChooser`` class. Your implementation must include an appropriate constructor and any necessary methods.  Any instance variables must be ``private``.  The code segment in the example above should have the indicated behavior (that is, it must compile and produce a result like the possible output shown.  Neither the constructor or any of the methods should alter the parameter passed to the constructor, but your implementation may copy the contents of the array.

The code below has comments to help you get started.  It also has a main method for testing.  Finish writing the class and use the main method to test it.

.. activecode:: RandomStrChooserA1
   :language: java
   :autograde: unittest

   import java.util.List;
   import java.util.ArrayList;

   // Declare a public RandomStringChooser class

   {

       /** Declare any fields (instance variables) **/

       /** Declare any constructors */

       /** Write the getNext method */

       /** This is a main method for testing the class */
       public static void main(String[] args)
       {
           System.out.println("It should print the words in the array in a random order and then NONE twice");
           String[] wordArray = {"wheels", "on", "the", "bus"};
           RandomStringChooser sChooser = new RandomStringChooser(wordArray);
           for (int k = 0; k < 6; k++)
           {
              System.out.println(sChooser.getNext() + " ");
           }

        } // end of main

   } // end of class
   ====
   import static org.junit.Assert.*;

   import org.junit.*;

   import java.io.*;

   public class RunestoneTests extends CodeTestHelper
   {
       public RunestoneTests()
       {
           super("RandomStringChooser");
           // CodeTestHelper.sort = true;
       }

       @Test
       public void testMain1()
       {
           boolean passed = false;

           String expect =
                   "It should print the words in the array in a random order and then NONE twice\n"
                       + "on \n"
                       + "bus \n"
                       + "wheels \n"
                       + "the \n"
                       + "NONE \n"
                       + "NONE";

           String output1 = getMethodOutput("main");

           expect = expect.substring(expect.indexOf("\n") + 1);
           output1 = output1.substring(output1.indexOf("\n") + 1);

           int num1 = countOccurences(output1, "wheels");
           int num2 = countOccurences(output1, "on");
           int num3 = countOccurences(output1, "the");
           int num4 = countOccurences(output1, "bus");
           int num5 = countOccurences(output1, "NONE");

           passed = num1 == 1 && num2 == 1 && num3 == 1 && num4 == 1 && num5 == 2;

           getResults(
                   expect,
                   output1,
                   "Checking that each word is in output correct number of times",
                   passed);
           assertTrue(passed);
       }

       @Test
       public void testMain2()
       {
           boolean passed = false;

           String expect =
                   "It should print the words in the array in a random order and then NONE twice\n"
                       + "on \n"
                       + "bus \n"
                       + "wheels \n"
                       + "the \n"
                       + "NONE \n"
                       + "NONE";

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

