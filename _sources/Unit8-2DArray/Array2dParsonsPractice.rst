.. qnum::
   :prefix: 8-4-
   :start: 1

Mixed Up Code Practice
------------------------------

Try to solve each of the following. Click the *Check Me* button to check each solution.  You will be told if your solution is too short, has a block in the wrong order, or you are using the wrong block.  Some of the problems have an extra block or two that aren't needed in the correct solution.  Try to solve these on your phone or other mobile device!


.. parsonsprob:: ch9ex1muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following program segment should create a 10 by 10 two-dimensional int array. It should fill this array with numbers 0 to 99 from left to right, top row to bottom row and print the output (in row-column order).  But, the blocks have been mixed up and contain an extra block that is not needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the Check button to check your solution.
   -----
   int[][] table = new int[10][10];
   =====
   for (int row = 0; row < table.length; row++)
   { 
        for (int col = 0; col < table[row].length; col++)
        { 
    =====
           table[row][col] = col + 10 * row;
   =====
           table[row][col] = row + 10 * col; #paired
   =====
           System.out.print(table[row][col] + "\t");
   =====
       } //end inner for loop
   } //end outer for loop


.. parsonsprob:: ch9ex2muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following program segment should create a 8 by 8 two-dimensional int array. It should fill this array with a checkered pattern of 0s and 1s -- starting with a 1 in the top left corner and print the output (in row-column order).  But, the blocks have been mixed up and include one extra block that is not needed in a correct solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the Check button to check your solution.
   -----
   int[][] checkerboard = new int[8][8];
   =====
   for (int row = 0; row < checkerboard.length; row++)
   { 
        for (int col = 0; col < checkerboard[row].length; col++)
        { 
    =====
           if ( (row + col) % 2 == 0)
           { 
    =====
           if ( (row + col) % 2 == 1) 
           { #paired
   =====
               checkerboard[row][col] = 1;
   =====
           } //end if
   =====
           System.out.print(checkerboard[row][col] + " ");
   =====
       } //end inner for loop
   } //end outer for loop


.. parsonsprob:: ch9ex3muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following program segment is a method that should accept a two-dimensional int array and return the sum of all of its values.  But, the blocks have been mixed up and include three extra blocks that are not needed in a correct solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the Check button to check your solution.
   -----
   public static int sumVals(int[][] nums)
   { 
    =====
      int sum = 0;
   =====
      int sum; #distractor
   =====
      for (int row = 0; row < nums.length; row++)
      { 
    =====
      for (int row = 0; row < nums.length(); row++) 
      { #paired
   =====
            for (int col = 0; col < nums[row].length; col++)
            { 
    =====
                sum += nums[row][col];
   =====
                sum = nums[row][col]; #paired
   =====
            } //end inner for loop
   =====
      } //end outer for loop
      return sum;
   =====
   } //end method


.. parsonsprob:: ch9ex4muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following program segment is a method that should accept a two-dimensional String array "image" and flip the "image" 180 degrees vertically. For example:   1 2 3 4  ->    4 3 2 1.
   But, the blocks have been mixed up and include one extra block that is not needed in a correct solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the Check button to check your solution.
   -----
   public static void flipImage(String[][] image)
   { 
    =====
       for (int row = 0; row < image.length; row++)
       { 
    =====
           for (int col = 0; col < image[0].length / 2; col++)
           { 
    =====
               String temp = image[row][col];
               image[row][col] = image[row][image[row].length - 1 - col];
               image[row][image[row].length - 1 - col] = temp;
   =====
               image[row][col] = image[row][image[row].length - 1 - col]; #paired
               image[row][image[row].length - 1 - col] = image[row][col];
   =====
           } //end inner for loop
       } //end outer for loop
   } //end method


.. parsonsprob:: ch9ex5muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following program segment is a method that should accept a two-dimensional array of ints and edit it such that all even numbers are replaced by zero.  But, the blocks have been mixed up and include two extra blocks that are not needed in a correct solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the Check button to check your solution.
   -----
   public static void makeEvenNumsZero(int[][] nums)
   { 
    =====
       for (int row = 0; row < nums.length; row++)
       { 
    =====
           for (int col = 0; col < nums[row].length; col++)
           { 
    =====
           for (int col = 0; col < nums[row].length(); col++) 
           {  #distractor 
   =====
               if (nums[row][col] % 2 == 0)
               {
                   nums[row][col] = 0; 
               } //end if
   =====
               if (nums[row][col] % 2 == 1) #distractor 
               {  
                   nums[row][col] = 0;
               } //end if
   =====
           } //end inner for loop
   =====
       } //end outer for loop
   } //end method


.. parsonsprob:: ch9ex6muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following program segment is a method that should accept a two-dimensional array of ints and a desired int and return the number of occurrences of the desired int in the two-dimensional array.  But, the blocks have been mixed up and include two extra blocks that are not needed in a correct solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the Check button to check your solution.
   -----
   public static int numOccurrences(int[][] nums,
                                    int desired)
   { 
    =====
       int occurrences = 0;
   =====
       int occurrences; #distractor
   =====
       for (int i = 0; i < nums.length; i++)
       { 
            for (int j = 0; j < nums[i].length; j++)
            {
    =====
               if (nums[i][j] == desired)
               { 
                   occurrences++;
               }
   =====
               if (nums[i][j] != desired) #distractor 
               {  
                   occurrences++;
               }
   =====
            } //end inner for loop
       } //end outer for loop
   =====
       return occurrences;
   } //end method


.. parsonsprob:: ch9ex7muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following program segment is a method that should accept a two-dimensional int array and return a single dimensional (normal) int array containing the average of each of the columns.  But, the blocks have been mixed up and include three extra blocks that are not needed in a correct solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the Check button to check your solution.
   -----
   public static int[] averageCols(int[][] nums)
   { 
    =====
       int[] averages = new int[nums.length]; #distractor
   =====
       int[] averages = new int[nums[0].length];
   =====
       for (int col = 0; col < nums[0].length; col++)
       { 
    =====
           int colSum = 0;
   =====
           for (int row = 0; row < nums.length; row++)
           { 
               colSum += nums[row][col];
           } //end inner for loop
   =====
           for (int row = 0; row < nums.length; row++) 
           {  #distractor 
               colSum += nums[col][row];
           } //end inner for loop
   =====
           averages[col] = colSum / nums.length;
   =====
           averages[col] = colSum / nums.length(); #distractor
   =====
       } //end outer for loop
       return averages;
   } //end method


.. parsonsprob:: ch9ex8muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following program segment is a method that should accept a two-dimensional int array and return a new two-dimensional int array containing only the odd index rows.  But, the blocks have been mixed up and include three extra blocks that are not needed in a correct solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the Check button to check your solution.
   -----
   public static int[][] oddRows(int[][] nums)
   { 
    =====
   public static int[] oddRows(int[][] nums) 
   {  #distractor 
   =====
       int[][] odds = new int[nums.length / 2][nums[0].length];
   =====
       int[][] odds = new int[nums.length][nums[0].length]; #distractor
   =====
       int index = 0;
       for (int i = 0; i < nums.length; i++)
       { 
    =====
           if (i % 2 == 1)
           { 
    =====
               for (int j = 0; j < nums[i].length; j++)
               { 
                    odds[index][j] = nums[i][j];
               }
   =====
               for (int j = 0; j < nums[i].length; j++) #distractor 
               {  
                    odds[index][j] = nums[j][i];
               }
   =====
               index++;
   =====
           } //end if
   ===== 
       } //end outer for loop
       return odds;
   } //end method


.. parsonsprob:: ch9ex9muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following program segment is a method that should accept a two-dimensional String array, in which each row contains the characters of a word.  The method should return a single-dimensional (normal) String array containing the words in each row of the two-dimensional array.

   Take for example, the input 2d array: { {"b", "a", "t", "h"},
                                          {"t", "e", "n", "s"},
                                          {"j", "a", "c", "k"},
                                          {"l", "a", "z", "y"}}

   Resulting array: {"bath", "tens", "jack", "lazy"}

   But, the blocks have been mixed up.  Drag the needed code from the left to the right and put them in order with the correct indention so that the code would work correctly.  Click the Check button to check your solution.
   -----
   public static String[] breakIntoLetters(String[][] words)
   { 
    =====
      String[] result = new String[words.length];
   =====
      for (int i = 0; i < words.length; i++)
      { 
    =====
          String word = "";
   =====
          for (int j = 0; j < words[i].length; j++)
          { 
               word += words[i][j];
          }
   =====
          result[i] = word;
   =====
      } //end for loop
      return result;
   =====
   } //end method


.. parsonsprob:: ch9ex10muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following program segment is a method that should accept a two-dimensional int array, and return a single-dimensional (normal) int array containing the max of each row.  But, the blocks have been mixed up and include one extra block that is not needed in a correct solution.  Drag the needed code from the left to the right and put them in order with the correct indention so that the code would work correctly.  Click the Check button to check your solution.
   -----
   public static int[] maxEachRow(int[][] nums)
   { 
    =====
      int[] max = new int[nums.length];
    =====
      for (int i = 0; i < nums.length; i++)
      { 
    =====
          int maxVal = nums[i][0];
          for (int j = 1; j < nums[i].length; j++)
          { 
    =====
              if (maxVal < nums[i][j])
              { 
                  maxVal = nums[i][j];
              }
   =====
              if (maxVal > nums[i][j]) #distractor 
              {  
                  maxVal = nums[i][j];
              }
   =====
          } //end inner for loop
          max[i] = maxVal;
   =====
      } //end outer for loop
      return max;
   } //end method

