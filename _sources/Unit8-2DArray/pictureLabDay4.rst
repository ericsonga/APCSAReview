
Picture Lab Day 4: 2D Arrays in Java (not complete)
=======================================================

This lesson, which is not yet complete, should be mostly review and is just here to help you practice your skills traversing 2D arrays. In this section you will be working with integer data stored in a 2D array.

Java actually uses arrays of arrays to represent 2D arrays. This means that each element in the outer array is a reference to another array. The data can be in either row-major or column-major order.
The AP Computer Science A course specification tells you to assume that all 2D arrays are row-major, which means that the outer array in Java represents the rows and the inner arrays represent the columns.


.. mchoice:: picture-day4-2a

   Here is a method in the ``IntArrayWorker`` class, it operates in a private instance variable
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

   - This method finds the total number of cells are in a given 2D array.

     - The number of cells would be found through multiplying the rows by the columns.

   - This method finds the total of all the values in a 2D array of integers.

     + correct!

.. mchoice:: picture-day4-3a

   Which of these methods correctly sums up the values in a 2D array? Assume the 2D array is called ``matrix``.

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

.. activecode:: challenge-8-8-picture4
    :language: java
    :datafile: pictureClasses.jar

    Write a ``getLargest`` method in the ``IntArrayWorker`` class that returns the largest value in the matrix.
    There is already a method to test this in ``IntArrayWorkerTester``. For an extra challenge, try completing the ``fillPattern1`` method.
    ~~~~
    public class IntArrayWorker
    {
      /** two dimensional matrix */
      private int[][] matrix = null;

      /** set the matrix to the passed one
        * @param theMatrix the one to use
        */
      public void setMatrix(int[][] theMatrix)
      {
        matrix = theMatrix;
      }

      /**
       * print the values in the array in rows and columns
       */
      public void print()
      {
        for (int row = 0; row < matrix.length; row++)
        {
          for (int col = 0; col < matrix[0].length; col++)
          {
            System.out.print( matrix[row][col] + " " );
          }
          System.out.println();
        }
        System.out.println();
      }

      public static void testGetLargest() {
      // test when largest is last
        IntArrayWorker worker = new IntArrayWorker();
        int [][] nums2 = { {1, 2, 3}, {4, 5, 6} };
        worker.setMatrix(nums2);
        int largest = worker.getLargest();
        System.out.println("Largest should be 6 and is " + largest);
        // test when largest is first
        int[][] nums3 = { {6, 2, 3}, {4, 5, 1} };
        worker.setMatrix(nums3);
        largest = worker.getLargest();
        System.out.println("Largest should be 6 and is " + largest);
        // test when largest is in the middle
        int[][] nums4 = { {1, 2, 3}, {6, 5, 1} };
        worker.setMatrix(nums4);
        largest = worker.getLargest();
        System.out.println("Largest should be 6 and is " + largest);
        // test when duplicate largest
        int[][] nums5 = { {6, 2, 6}, {4, 5, 1} };
        worker.setMatrix(nums5);
        largest = worker.getLargest();
        System.out.println("Largest should be 6 and is " + largest);
      }

      public static void testFillPattern1()
      {
        IntArrayWorker worker = new IntArrayWorker();
        int[][] nums = new int[3][4];
        worker.setMatrix(nums);
        worker.fillPattern1();
        System.out.println("fills with 2's on diagonal, 3's to left, and 1's to right");
        worker.print();
      }

      /**
       * Method to return the largest value in
       * the array
       * @return the largest value found in the array
       */
      public int getLargest()
      {
        //TODO
      }

      /**
       * fill the array with a pattern
       * there should be 2's on the main diagonal,
       * 3's to left of the diagonal
       * 1's to the right of the diagonal
       */
      public void fillPattern1()
      {
        // TODO
      }

      public static void main(String[] args)
      {
        testFillPattern1();
        testGetLargest();
      }

    }

.. mchoice:: picture-day4-4a

   What would a functioning implementation of a frequency method, called ``findFreq``, in the ``IntArrayWorker`` class look like?
   We want this method to accept a target int, and then return how many times that int appears in the array.

   - .. code-block:: Java

       public int findFreq(int target) {
          int count = 0;
          int current = 0;
             for (int row = 0; row < matrix.length; row++) {
               for(int col = 0; col < matrix[0].length; col++) {
                   current = matrix[row][col];
                   if (current == target) {
                       count++;
                   }
                }
              }
          return count;
        }

     + Correct! This uses nested for loops and is a very typical solution.

   - .. code-block:: Java

        public int findFreq(int target) {
          int count = 0;
          for (int item : matrix) {
              if (target == item) {
                    count++;
                }
            }
          return count;
        }

     - This for each loop is not quite enough to iterate through the whole 2D array.

   - .. code-block:: Java

        public int findFreq(int target) {
          int count = 0;
          for (int[] rowArray : matrix) {
             for (int item : rowArray) {
                  if (item == target) {
                       count++;
                   }
             }
          }
          return count;
        }

     + Correct! this uses nested for each loops to accomplish the task.

   - .. code-block:: Java

        public int findFreq(int target) {
        int count = 0;
            for (int row = 0; row < matrix.length; row++) {
                if (matrix[row].find(target)) {
                    count++;
                }
            }
            return count;
        }

     - find() does not exist in the Java array class. If you're unsure of what is available you can look up the array API.

Alternative ways to store 2D arrays
---------------------------------------------------
Some programming languages use a one-dimensional (1D) array to represent a two-dimensional (2D) array with the data in either row-major or column-major order. Row-major order in a 1D array means that all the data for the first row is stored before the data for the next row in the 1D array.
Column-major order in a 1D array means that all the data for the first column is stored before the data for the next column in the 1D array. The order matters, because you need to calculate the position in the 1D array based on the order, the number of rows and columns, and the current column and row numbers (indices).
The rows and columns are numbered (indexed) and often that numbering starts at 0 as it does in Java. The top left row has an index of 0 and the top left column has an index of 0. This information is helpful when implementing so more complex data structures, but those are out of the scope of this class.
For now, being familiar with this introduction may prove useful in the future.

.. mchoice:: picture-day4-0a
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


.. mchoice:: picture-day4-1a
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
