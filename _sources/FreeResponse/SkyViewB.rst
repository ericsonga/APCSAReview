.. qnum::
   :prefix:  16-8-
   :start: 1

SkyView - Part B
===============================

**Part b.**  Write the ``SkyView`` method ``getAverage``, which returns the average of the elements of the section of
``view`` with row indexes from ``startRow`` through ``endRow``, inclusive, and column indexes from
``startCol`` through ``endCol``, inclusive.

For example, if ``nightSky`` is a ``SkyView`` object where ``view`` contains the values shown below, the
call ``nightSky.getAverage(1, 2, 0, 1)`` should return ``0.8``. (The average is (1.1 + 1.4
+ 0.2 + 0.5) / 4, which equals 0.8). The section being averaged is indicated by the dark outline
in the table below.


.. figure:: Figures/SkyViewBEx.png
    :align: center
    :figclass: align-center

    Figure 1: Example values with the region for the getAverage outlined

.. figure:: Figures/SkyViewClassInfo.png
    :align: center
    :figclass: align-center

    Figure 1: The class information

Try and Solve It
----------------


.. activecode:: SkyViewB
   :language: java
   :autograde: unittest

   Finish writing the ``getAverage`` method in the class below.
   ~~~~
   public class SkyView
   {
       private double[][] view;

       /**
        * Constructs a SkyView object from a 1-dimensional array of scan data.
        *
        * @param numRows the number of rows represented in the view Precondition:
        *     numRows > 0
        * @param numCols the number of columns represented in the view Precondition:
        *     numCols > 0
        * @param scanned the scan data received from the telescope, stored in
        *     telescope order Precondition: scanned.length == numRows * numCols
        *     Postcondition: view has been created as a rectangular 2-dimensional
        *     array with numRows rows and numCols columns and the values in scanned
        *     have been copied to view and are ordered as in the original rectangular
        *     area of sky.
        */
       public SkyView(int numRows, int numCols, double[] scanned)
       {
           view = new double[numRows][numCols];
           int scannedIndex = 0;
           for (int r = 0; r < numRows; r++)
           {
               // if even row number go left to right */
               if (r % 2 == 0)
               {
                   for (int c = 0; c < numCols; c++)
                   {
                       view[r][c] = scanned[scannedIndex];
                       scannedIndex++;
                   }
               }
               else
               {
                   for (int c = numCols - 1; c >= 0; c--)
                   {
                       view[r][c] = scanned[scannedIndex];
                       scannedIndex++;
                   }
               }
           }
       }

       /**
        * Returns the average of the values in a rectangular section of view.
        *
        * @param startRow the first row index of the section
        * @param endRow the last row index of the section
        * @param startCol the first column index of the section
        * @param endCol the last column index of the section Precondition: 0 <=
        *     startRow <= endRow < view.length Precondition: 0 <= startCol <= endCol <
        *     view[0].length
        * @return the average of the values in the specified section of view
        */
       public double getAverage(int startRow, int endRow, int startCol, int endCol)
       {
           // *** Finish writing this method! ***
       }

       /** This is a main method for testing getAverage */
       public static void main(String[] args)
       {
           double[] startArray =
           {
               0.3, 0.7, 0.8, 0.4, 1.4, 1.1, 0.2, 0.5, 0.1, 1.6, 0.6, 0.9
           };
           SkyView sView = new SkyView(4, 3, startArray);
           System.out.println(
                   "getAverage(1,2,0,1) should return 0.8 and returns "
                           + sView.getAverage(1, 2, 0, 1));
       } // end of main
   } // end of class

   ====
   import static org.junit.Assert.*;

   import org.junit.*;

   import java.io.*;

   // import java.util.Arrays;
   // import java.util.ArrayList;

   public class RunestoneTests extends CodeTestHelper
   {
       public RunestoneTests()
       {
           super("SkyView");
           // CodeTestHelper.sort = true;
       }

       @Test
       public void testMain1()
       {
           boolean passed = false;

           double[] val2 = {0.3, 0.7, 0.4, 0.8, 1.4, 1.1};

           String view = "0.3, 0.7,\n0.8, 0.4,\n1.4,1.1,";

           SkyView sView = new SkyView(3, 2, val2);
           String expect = "getAverage(1,2,0,1)  --> 0.925";

           String output = "getAverage(1,2,0,1)  --> " + sView.getAverage(1, 2, 0, 1);

           passed = getResults(expect, output, "Checking for expected output from:\n" + view);
           assertTrue(passed);
       }

       @Test
       public void testMain2()
       {
           boolean passed = false;

           double[] val2 = {0.3, 0.7, 0.4, 0.8, 1.4, 1.1};
           String view = "0.3, 0.7, 0.4,\n1.1, 1.4,  0.8,";
           SkyView sView = new SkyView(2, 3, val2);
           String expect = "getAverage(1,2,0,1) --> 0.875";

           String output = "getAverage(1,2,0,1)  --> " + sView.getAverage(0, 1, 0, 1);

           passed = getResults(expect, output, "Checking for expected output from:\n" + view);
           assertTrue(passed);
       }
   }

