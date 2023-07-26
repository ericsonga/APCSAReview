.. qnum::
   :prefix:  16-10-
   :start: 1

ArrayTester - Part A
===============================

.. index::
    single: ArrayTester
    single: free response

The following is a free response question from 2018.  It was question 4 on the exam.  You can see all the free response questions from past exams at https://apstudents.collegeboard.org/courses/ap-computer-science-a/free-response-questions-by-year.

**Question 4.** This question involves reasoning about arrays of integers. You will write two static methods, both of which are in a class named ``ArrayTester``.

.. code-block:: java

   public class ArrayTester
   {
       /**
        * Returns an array containing the elements of column c of arr2D in the same
        * order as they appear in arr2D. Precondition: c is a valid column index in
        * arr2D. Postcondition: arr2D is unchanged.
        */
       public static int[] getColumn(int[][] arr2D, int c)
       {
           /* to be implemented in part (a) */
       }

       /**
        * Returns true if and only if every value in arr1 appears in arr2.
        * Precondition: arr1 and arr2 have the same length. Postcondition: arr1 and
        * arr2 are unchanged.
        */
       public static boolean hasAllValues(int[] arr1, int[] arr2)
       {
           /* implementation not shown */
       }

       /** Returns true if arr contains any duplicate values; false otherwise. */
       public static boolean containsDuplicates(int[] arr)
       {
           /* implementation not shown) */
       }

       /**
        * Returns true if square is a Latin square as described in part (b); false
        * otherwise. Precondition: square has an equal number of rows and columns.
        * Precondition: square has at least one row.
        */
       public static boolean isLatin(int[][] square)
       {
           /* to be implemented in part (b) */
       }
   }

**Part a.**   Write a static method ``getColumn``, which returns a one-dimensional array containing the elements of a
single column in a two-dimensional array. The elements in the returned array should be in the same order as
they appear in the given column. The notation ``arr2D [r][c]`` represents the array at row ``r`` and
column ``c``.

The following code segment initializes an array and calls the ``getColumn`` method.

``int [] [] arr2D = { { 0, 1, 2 }, { 3, 4, 5 }, { 6, 7, 8 }, { 9, 5, 3 } };``
``int[] result = ArrayTester.getColumn (arr2D, 1);``

When the code segment has completed execution, the variable result ``result`` will have the following contents.
``result: {1, 4, 7, 5}``

Try and Solve It
----------------


.. activecode:: isLatin
   :language: java
   :autograde: unittest

   Complete the method ``getColumn`` below.
   ~~~~
   public class ArrayTester
   {

       /**
        * Returns an array containing the elements of column c of arr2D in the same
        * order as they appear in arr2D. Precondition: c is a valid column index in
        * arr2D. Postcondition: arr2D is unchanged.
        */
       public static int[] getColumn(int[][] arr2D, int c)
       {
           /** Complete this method * */
       }

       // Main method to test getColumn method
       public static void main(String[] args)
       {
           int[][] arr2D = { {0, 1, 2}, {3, 4, 5}, {6, 7, 8}, {9, 5, 3}};
           int[] result = ArrayTester.getColumn(arr2D, 1);
           System.out.println(
                   "It should print the values from the second column: 1 4 7 5.");
           for (int i = 0; i < result.length; i++)
           {
               System.out.print(result[i] + " ");
           }
       } // end of main
   } // end of class

   ====
   import static org.junit.Assert.*;

   import org.junit.*;

   import java.io.*;
   import java.util.Arrays;

   // import java.util.ArrayList;

   public class RunestoneTests extends CodeTestHelper
   {
       public RunestoneTests()
       {
           super("ArrayTester");
           // CodeTestHelper.sort = true;
       }

       @Test
       public void testMain1()
       {
           boolean passed = false;

           String expect = "It should print the values from the second column: 1 4 7 5.\n1 4 7 5";

           String output = getMethodOutput("main");

           passed = getResults(expect, output, "Checking for expected output from main");
           assertTrue(passed);
       }

       @Test
       public void testMain2()
       {
           boolean passed = false;

           int[][] arr2D = { {0, 1, 2}, {3, 4, 5}, {6, 7, 8}, {9, 5, 3}};

           String arrayStr = "[[0, 1, 2],\n [3, 4, 5],\n [6, 7, 8],\n [9, 5, 3]]";

           int[] result = ArrayTester.getColumn(arr2D, 0);

           String expect = "[0, 3, 6, 9]";
           String output = Arrays.toString(result);

           passed =
                   getResults(
                           expect,
                           output,
                           "Checking for expected output for getColumn(arr2D, 0)\n" + arrayStr);
           assertTrue(passed);
       }

       @Test
       public void testMain3()
       {
           boolean passed = false;

           int[][] arr2D = { {0, 1, 2, 3, 4, 5}, {6, 7, 8, 9, 5, 3}};

           String arrayStr = "[[0, 1, 2, 3, 4, 5],\n [6, 7, 8, 9, 5, 3]]";

           int[] result = ArrayTester.getColumn(arr2D, 2);

           String expect = "[2, 8]";
           String output = Arrays.toString(result);

           passed =
                   getResults(
                           expect,
                           output,
                           "Checking for expected output for getColumn(arr2D, 0)\n" + arrayStr);
           assertTrue(passed);
       }
   }

