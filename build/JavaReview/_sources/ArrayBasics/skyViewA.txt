.. qnum::
  :prefix: 9-15-
  :start: 1

================================
Free Response - SkyView A
================================

..    index::
      single: skyview
    single: free response

The following is part a of a free response question from 2013. It was question 4 on the exam. You can see all the free response questions from past exams at https://apstudent.collegeboard.org/apcourse/ap-computer-science-a/exam-practice.

**Question 2.** In this question you will write a constructor and a method for the SkyView class using 2d arrays to scan a rectangular area and collect the data of a night's sky into a 1d array. The scanning pattern is back and forth (alternating between left and right) called telescope order. An example is shown below.

.. figure:: Figures/telescopeA.png
    :width: 260px
    :align: center
    :figclass: align-center

The data is recorded in telescope order into a 1d array of double values. The 1d array can be reconstructed into a 2d array (or the original view of the sky).

Incomplete implementations of the SkyView class is shown below.

.. code-block:: java

  public class SkyView 
  {   
  /** A rectangular array that holds the data representing a rectangular area of the sky. */   
  private double[][] view;  
  /** Constructs a SkyView object from a 1-dimensional array of scan data.    
    *  @param numRows the number of rows represented in the view    
    *         Precondition: numRows > 0      
    *  @param numCols the number of columns represented in the view    
    *         Precondition: numCols > 0    *  @param scanned the scan data received from the telescope, stored in telescope order    
    *         Precondition: scanned.length == numRows * numCols    
    *  Postcondition: view has been created as a rectangular 2-dimensional array    
    *             with numRows rows and numCols columns and the values in    
    *             scanned have been copied to view and are ordered as    
    *              in the original rectangular area of sky.    
    */   
    public SkyView(int numRows, int numCols, double[] scanned)   
    {  /* to be implemented in part (a) */  }  

    /** Returns the average of the values in a rectangular section of view.    
     *  @param startRow the first row index of the section    
     *  @param endRow the last row index of the section    
     *  @param startCol the first column index of the section    
     *  @param endCol the last column index of the section    
     *  Precondition: 0 <= startRow <= endRow < view.length    
     *  Precondition: 0 <= startCol <= endCol < view[0].length    
     *  @return the average of the values in the specified section of view    
     */   
     public double getAverage(int startRow, int endRow,                            
                                            int startCol, int endCol)   
    {  /* to be implemented in part (b) */  }    

    // There may be instance variables, constructors, and methods that are not shown. 
 } 

**Part a.**  Write the constructor for the SkyView class. The constructor initializes the view instance variable to a 2-dimensional array with numRows rows and numCols columns. The information from scanned, which is stored in the telescope order, is copied into view to reconstruct the sky view as originally seen by the telescope. The information in scanned must be rearranged as it is stored into view so that the sky view is oriented properly.   

For example, suppose scanned contains values, as shown in the following array. 

.. figure:: Figures/skyViewA.png
    :width: 732px
    :align: center
    :figclass: align-center  

Use the scanned array above to create a SkyView object, new SkyView(4, 3, values), which would have view initialized with the following values.

.. figure:: Figures/skyViewB.png
    :width: 260px
    :align: center
    :figclass: align-center

Complete the SkyView constructor below.

.. activecode:: FRQSkyViewA
   :language: java
 
    public class SkyView 
    { 
      /** A rectangular array that holds the data representing a rectangular area of the sky. */ 
       private double[][] view; 
  
      /** Constructs a SkyView object from a 1-dimensional array of scan data. 
       * 
       * @param numRows the number of rows represented in the view 
       * Precondition: numRows > 0 
       * @param numCols the number of columns represented in the view 
       * Precondition: numCols > 0 * @param scanned the scan data received from the telescope, stored in telescope order 
       * Precondition: scanned.length == numRows * numCols 
       * Postcondition: view has been created as a rectangular 2-dimensional array 
       * with numRows rows and numCols columns and the values in 
       * scanned have been copied to view and are ordered as 
       * in the original rectangular area of sky. 
       */ 
       public SkyView(int numRows, int numCols, double[] scanned) 
       {  
          //TO BE COMPLETED IN THIS PART
       }       
  
      /** Returns the average of the values in a rectangular section of view. 
       * 
       * @param startRow the first row index of the section 
       * @param endRow the last row index of the section 
       * @param startCol the first column index of the section 
       * @param endCol the last column index of the section 
       * Precondition: 0 <= startRow <= endRow < view.length 
       * Precondition: 0 <= startCol <= endCol < view[0].length 
       * @return the average of the values in the specified section of view */ 
       public double getAverage(int startRow, int endRow, int startCol, int endCol) 
       {
          double total = 0;
          for (int r = startRow; r <= endRow; r++) 
          {
             for (int c = startCol; c <= endCol; c++) 
             {
                total = total + view[r][c];
             }
          }
          return total / ((endRow - startRow + 1) * (endCol - startCol + 1));
       }
  
       public String toString() 
       {
          String s = "";
          for (int r = 0; r < view.length; r++) 
          {
             for (int c = 0; c < view[0].length; c++) 
             {
                s = s + view[r][c] + " ";
             }
          }
          return s;
      }
  
      public static void main(String[] args)
      {
         double[] startArray = { 0.3, 0.7, 0.8, 0.4, 1.4, 1.1, 0.2, 0.5, 0.1, 1.6, 0.6, 0.9};
         SkyView sView = new SkyView(4,3,startArray);
         System.out.println(sView + " should match 0.3 0.7 0.8 1.1 1.4 0.4 0.2 0.5 0.1 0.9 0.6 1.6");
         System.out.println("get average of 1,2,0,1 should return 0.8 and returns " + sView.getAverage(1,2,0,1));  
      }   
    } 
    
One way to solve Part a
-----------------------
First create a 2d array with numRows rows and numCols columns. Initialize an int col value to simulate the column when looping through the 2d array. Initialize an i value to simulate a for loop because we will use a while loop instead. 

Create a for loop to loop through the rows of the view 2d array. Inside the for loop create a while loop that continues while the col variable is less than the numCols variable. 

Inside the while loop, set row 'row of the for loop' and column 'col' of view to the index 'i' of the scanned array, increment the col value by one and the i value by one. We do this to create the first row of the 2d array from the scanned array. Outside of the while loop, increment the row value by one to go to the next row in the 2d array. 

Create a while loop that continues while the col value is greater than or equal to zero. Inside the while loop, set row 'row of the for loop' and column 'col' of view to the index 'i' of the scanned array, decrease the col value by one and increment the i value by one. We do this to create the next row of the 2d array but to create it backwards to make sure it is telescope view.

Close all of the brackets. The for loop continues to create the entire 2d array.

.. parsonsprob:: skyviewa

   The following method has the correct code to solve this problem, but also includes some extra code not needed in a correct solution. Drag the needed blocks from the left into the correct order on the right with the correct indention. You will be told if any of the blocks are in the wrong order or not indented correctly.
   -----
   public SkyView(int numRows, int numCols, double[] scanned)
   {
   =====
       view = new double[numRows][numCols];
       int col = 0;
       int i = 0;
   =====
       for(int row = 0; row < numRows; row++)
       {
   =====
           while(col < numCols)
           {
   =====
               view[row][col] = scanned[i];
               col++;
               i++;
   =====
           } // end of while loop (col < numCols)
   =====
           row++;
   =====
           while(col >= 0)
           {
   =====
               view[row][col] = scanned[i];
               col--;
               i++;
   =====
           } // end of while loop (col >= 0)
   =====
       } // end of for loop
   =====
   } //end of constructor
   

