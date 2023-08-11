.. include:: ../common.rst

|Time45|

Picture Lab A4: 2D Arrays in Java
=======================================================

In this activity you will work with integer data stored in a two-dimensional array. Some programming
languages use a one-dimensional (1D) array to represent a two-dimensional (2D) array with the data in
either row-major or column-major order. **Row-major order** in a 1D array means that all the data for the
first row is stored before the data for the next row in the 1D array. **Column-major order** in a 1D array
means that all the data for the first column is stored before the data for the next column in the 1D array.
The order matters, because you need to calculate the position in the 1D array based on the order, the
number of rows and columns, and the current column and row numbers (indices). The rows and
columns are numbered (indexed) and often that numbering starts at 0 as it does in Java. The top left row
has an index of 0 and the top left column has an index of 0. The row number (index) increases from top
to bottom and the column number (index) increases from left to right.

.. figure:: Figures/rowMajor.png
    :width: 250px
    :align: center
    :figclass: align-center

    Figure 1: A 2D array stored in row-major order or column-major order as a 1D array.


.. mchoice:: picture-lab-A4-0a
   :answer_a: [1, 2, 3, 4, 5, 6]
   :answer_b: [2, 1, 4, 3, 6, 5]
   :answer_c: [2, 4, 6, 1, 3, 5]
   :answer_d: [1, 3, 5, 2, 4, 6]
   :correct: c
   :feedback_a: Remember, row-major order means the rows are stored starting from first to last.
   :feedback_b: For row-major order, we need to store the rows which go horizontally across the array.
   :feedback_c: Correct!
   :feedback_d: Remember, row-major order means the rows are stored starting from first to last.
   :optional:

   Given an array A = { 2  4  6 }, {1  3  5} how would A be stored in a 1D array in row-major order?


.. mchoice:: picture-lab-A4-1a
   :answer_a: [1, 2, 3, 4, 5, 6]
   :answer_b: [2, 1, 4, 3, 6, 5]
   :answer_c: [2, 4, 6, 1, 3, 5]
   :answer_d: [1, 3, 5, 2, 4, 6]
   :correct: b
   :feedback_a: This answer has stored the columns, but they need to be stored from the lowest index to the highest.
   :feedback_b: Correct
   :feedback_c: We need to store this array in column-major order. The columns of the array are aligned vertically.
   :feedback_d: We need to store this array in column-major order. The columns of the array are aligned vertically.
   :optional:

   Given an array A = { 2  4  6 }, {1  3  5} how would A be stored in a 1D array in column-major order?

Java actually uses arrays of arrays to represent 2D arrays. This means that each element in the outer array is a reference to another array. The data can be in either row-major or column-major order.
The AP Computer Science A course specification tells you to assume that all 2D arrays are row-major, which means that the outer array in Java represents the rows and the inner arrays represent the columns.

.. figure:: Figures/ArrayRowsAndCols.png
    :width: 300px
    :align: center
    :figclass: align-center

    Figure 2: Java arrays of arrays

To loop through the values in a 2D array you must have two indexes. One index is used to change the
row index and one is used to change the column index. You can use nested loops, which is one for
loop inside of another, to loop through all the values in a 2D array. Let's try some nested loops with 2D arrays.

.. mchoice:: picture-lab-A4-2a

   Here is a mysteryMethod in the ``IntArrayWorker`` class that uses a private instance variable which is a 2D array
   named ``matrix``. What does this method do?

   .. code-block:: Java

       public int mysteryMethod() {
         int total = 0;
         for (int row = 0; row < matrix.length; row++) {
            for (int col = 0; col < matrix[0].length; col++) {
                total = total + matrix[row][col];
            }
         }
         return total;
       }

   - It sums up all the values in the matrix[0] column

     - matrix[0].length is different from just the matrix column 0, what does matrix[0].length return? How does this affect the inner loop

   - This method sums up all the column and row indexes to find the matrix's 'weight'

     - This is not what the method does and matrix 'weight' does not exist.

   - This method finds the number of elements in a given 2D array.

     - The number of elements would be found through multiplying the rows by the columns.

   - This method finds the total of all the values in a 2D array of numbers.

     + correct!


Here is the code for the ``getTotal`` method in the ``IntArrayWorker`` class that totals all the values in a 2D array of integers in
a private instance variable (field in the class) named ``matrix``. Notice the nested ``for`` loop and how it
uses ``matrix.length`` to get the number of rows and ``matrix[0].length`` to get the number of
columns. Since ``matrix[0]`` returns the inner array in a 2D array, you can use
``matrix[0].length`` to get the number of columns.

.. code-block:: java

 public int getTotal()
 {
      int total = 0;
      for (int row = 0; row < matrix.length; row++)
      {
           for (int col = 0; col < matrix[0].length; col++)
           {
               total = total + matrix[row][col];
           }
      }
      return total;
 }

Because Java two-dimensional arrays are actually arrays of arrays, you can also get the total using nested
for-each loops as shown in getTotalNested below. The outer loop will loop through the outer
array (each of the rows) and the inner loop will loop through the inner array (columns in that row).
You can use a nested for-each loop whenever you want to loop through all items in a 2D array and
you don't need to know the row index or column index.

.. code-block:: java

 public int getTotalNested()
 {
      int total = 0;
      for (int[] rowArray : matrix)
      {
          for (int item : rowArray)
          {
               total = total + item;
          }
     }
     return total;
 }


.. mchoice:: picture-lab-A4-3a

   Which of these methods correctly sum up the values in a 2D array? Assume the 2D array is called ``matrix``.

   - .. code-block:: Java

       public int getSum() {
         int total = 0;
         int i = 0;
         int j = 0;
         while (matrix.length != 0) {
            while (matrix[0].length != 0) {
                total += matrix[i][j];
                i++;
                j++;
            }
         }
       }

     - This method will continue forever and give an index out of bounds error.

   - .. code-block:: Java

       public int getSum() {
         int total = 0;
         for (int[] rowArray : matrix) {
            for (int item : rowArray) {
                total = total + item;
            }
         }
         return total;
       }

     + Correct! This uses nested for each loops to iterate through the array.

   - .. code-block:: Java

       public int getSum() {
         int total = 0;
         for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[0].length; j++) {
                total = total + matrix[i][j];
            }
         }
         return total;
       }

     + Correct! This uses nested for loops to traverse through the matrix.

   - .. code-block:: Java

       public int getSum() {
          int total = 0;
          int mystery = 0;
          int row = 0;
          while (row < matrix.length) {
              for (int col = 0; j < matrix[0].length; i++) {
                  if (row % 2 == 0) {
                      total = total +  matrix[row][col];
                  }
                  else {
                      mystery = mystery + matrix[row][col];
                  }
              }
              row++;
          }
          return (total - mystery);
       }

     - This does not return the correct amount.

|CodingEx| **Coding Exercises**

1. Write a ``getCount`` method in the ``IntArrayWorker`` class that returns the count of the
number of times a passed integer value is found in the matrix. There is already a method to test
this in IntArrayWorkerTester.

.. activecode:: picture-lab-A4-getCount
    :language: java
    :autograde: unittest

    Write a ``getCount`` method in the ``IntArrayWorker`` class that returns the count of the number of times a passed integer value is found in the matrix.
    ~~~~
    public class IntArrayWorker
    {
        /** two dimensional matrix */
        private int[][] matrix = null;

        /**
         * set the matrix to the passed one
         *
         * @param theMatrix the one to use
         */
        public void setMatrix(int[][] theMatrix)
        {
            matrix = theMatrix;
        }

        /** print the values in the array in rows and columns */
        public void print()
        {
            for (int row = 0; row < matrix.length; row++)
            {
                for (int col = 0; col < matrix[0].length; col++)
                {
                    System.out.print(matrix[row][col] + " ");
                }
                System.out.println();
            }
            System.out.println();
        }

        /** Method to test getCount */
        public static void testGetCount()
        {
            IntArrayWorker worker = new IntArrayWorker();
            worker.setMatrix(new int[][] { {1, 2, 1}, {2, 1, 0}});
            int count = worker.getCount(1);
            System.out.println("Count should be 3 and count is " + count);
        }

        /**
         * getCount counts number of times value is found in the matrix.
         *
         * @return the number of times value is found in the array
         */
        public int getCount(int value)
        {
            // TO DO
        }

        public static void main(String[] args)
        {
            testGetCount();
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
            super("IntArrayWorker");
        }

        @Test
        public void testMain() throws IOException
        {
            String output = getMethodOutput("main");
            String expect = "Count should be 3 and count is 3\n";
            boolean passed = getResults(expect, output, "Expected output from main");
            assertTrue(passed);
        }

        @Test
        public void test2()
        {
            IntArrayWorker worker = new IntArrayWorker();
            worker.setMatrix(new int[][] { {1, 4, 8}, {8, 8, 8}});
            int count = worker.getCount(8);
            int expectedCount = 4;

            boolean passed =
                    getResults(
                            expectedCount + "",
                            count + "",
                            "Testing getCount for matrix { {1,4,8},{8,8,8} }");
            assertTrue(passed);
        }
    }

2. Write a ``getLargest`` method in the ``IntArrayWorker`` class that returns the largest value
in the matrix. There is already a method to test this in IntArrayWorkerTester.



.. activecode:: picture-lab-A4-getLargest
    :language: java
    :autograde: unittest

    Write a ``getLargest`` method in the ``IntArrayWorker`` class that returns the largest value in the matrix.
    ~~~~
    public class IntArrayWorker
    {
        /** two dimensional matrix */
        private int[][] matrix = null;

        /**
         * set the matrix to the passed one
         *
         * @param theMatrix the one to use
         */
        public void setMatrix(int[][] theMatrix)
        {
            matrix = theMatrix;
        }

        /** print the values in the array in rows and columns */
        public void print()
        {
            for (int row = 0; row < matrix.length; row++)
            {
                for (int col = 0; col < matrix[0].length; col++)
                {
                    System.out.print(matrix[row][col] + " ");
                }
                System.out.println();
            }
            System.out.println();
        }

        public static void testGetLargest()
        {
            // test when largest is last
            IntArrayWorker worker = new IntArrayWorker();
            int[][] nums2 = { {1, 2, 3}, {4, 5, 6}};
            worker.setMatrix(nums2);
            int largest = worker.getLargest();
            System.out.println(
                    "When largest is last, it should be 6 and is " + largest);
            // test when largest is first
            int[][] nums3 = { {6, 2, 3}, {4, 5, 1}};
            worker.setMatrix(nums3);
            largest = worker.getLargest();
            System.out.println(
                    "When largest is first, it should be 6 and is " + largest);
            // test when largest is in the middle
            int[][] nums4 = { {1, 2, 3}, {6, 5, 1}};
            worker.setMatrix(nums4);
            largest = worker.getLargest();
            System.out.println(
                    "When largest is in the middle, it should be 6 and is " + largest);
        }

        /**
         * Method to return the largest value in the array
         *
         * @return the largest value found in the array
         */
        public int getLargest()
        {
            // TO DO
        }

        public static void main(String[] args)
        {
            testGetLargest();
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
            super("IntArrayWorker");
        }

        @Test
        public void testMain() throws IOException
        {
            String output = getMethodOutput("main");
            String expect =
                    "When largest is last, it should be 6 and is 6\n"
                        + "When largest is first, it should be 6 and is 6\n"
                        + "When largest is in the middle, it should be 6 and is 6\n";
            boolean passed = getResults(expect, output, "Expected output from main");
            assertTrue(passed);
        }

        @Test
        public void test2()
        {
            IntArrayWorker worker = new IntArrayWorker();
            worker.setMatrix(new int[][] { {1, 4, 8}, {6, 9, 7}});
            int output = worker.getLargest();
            int expect = 9;

            boolean passed =
                    getResults(
                            expect + "",
                            output + "",
                            "Testing getLargest for matrix { {1, 4,8},{6, 9, 7} }");
            assertTrue(passed);
        }
    }

3. Write a ``getColTotal`` method in the ``IntArrayWorker`` class that returns the total of all
integers in a specified column. There is already a method to test this in
IntArrayWorkerTester.

.. activecode:: picture-lab-A4-getColTotal
    :language: java
    :autograde: unittest

    Write a ``getColTotal`` method in the ``IntArrayWorker`` class that returns the total of all integers in a specified column.
    ~~~~
    public class IntArrayWorker
    {
        /** two dimensional matrix */
        private int[][] matrix = null;

        /**
         * set the matrix to the passed one
         *
         * @param theMatrix the one to use
         */
        public void setMatrix(int[][] theMatrix)
        {
            matrix = theMatrix;
        }

        /** print the values in the array in rows and columns */
        public void print()
        {
            for (int row = 0; row < matrix.length; row++)
            {
                for (int col = 0; col < matrix[0].length; col++)
                {
                    System.out.print(matrix[row][col] + " ");
                }
                System.out.println();
            }
            System.out.println();
        }

        /**
         * getColTotal adds and returns the total of all integers in a specified
         * column.
         *
         * @return the total of elements in a column
         */
        public int getColTotal(int column)
        {
            // TO DO
        }

        /** Method to test getColTotal */
        public static void testGetColTotal()
        {
            IntArrayWorker worker = new IntArrayWorker();
            int[][] nums2 = { {1, 2, 3}, {4, 5, 6}};
            worker.setMatrix(nums2);
            int total = worker.getColTotal(0);
            System.out.println("Total for column 0 should be 5 and is " + total);
            total = worker.getColTotal(1);
            System.out.println("Total for column 1 should be 7 and is " + total);
            total = worker.getColTotal(2);
            System.out.println("Total for column 2 should be 9 and is " + total);
        }

        public static void main(String[] args)
        {
            testGetColTotal();
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
            super("IntArrayWorker");
        }

        @Test
        public void testMain() throws IOException
        {
            String output = getMethodOutput("main");
            String expect =
                    "Total for column 0 should be 5 and is 5\n"
                        + "Total for column 1 should be 7 and is 7\n"
                        + "Total for column 2 should be 9 and is 9";
            boolean passed = getResults(expect, output, "Expected output from main");
            assertTrue(passed);
        }

        @Test
        public void test2()
        {
            IntArrayWorker worker = new IntArrayWorker();
            worker.setMatrix(new int[][] { {1, 1, 1}, {0, 1, 2}});
            int count = worker.getColTotal(1);
            int expectedCount = 2;

            boolean passed =
                    getResults(
                            expectedCount + "",
                            count + "",
                            "Testing getColTotal for matrix { {1,1,1},{0,1,2} }");
            assertTrue(passed);
        }
    }

