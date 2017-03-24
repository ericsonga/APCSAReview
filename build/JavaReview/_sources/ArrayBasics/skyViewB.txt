.. qnum::
  :prefix: 9-15-
  :start: 1

================================
Free Response - SkyView B
================================

..    index::
      single: skyview
    single: free response

The following is part a of a free response question from 2013. It was question 4 on the exam. You can see all the free response questions from past exams at https://apstudent.collegeboard.org/apcourse/ap-computer-science-a/exam-practice.

**Question 2.** In this question you will write a method for the SkyView class using 2d arrays to scan a rectangular area and collect the data of a night's sky into a 1d array. The scanning pattern is back and forth (alternating between left and right) called telescope order. An example is shown below.

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


**Part b.**    Write the SkyView method getAverage, which returns the average of the elements of the section of view with row indexes from startRow through endRow, inclusive, and column indexes from startCol through endCol, inclusive.   

For example, if nightSky is a SkyView object where view contains the values shown below, the call nightSky.getAverage(1, 2, 0, 1) should return 0.8. (The average is (1.1 + 1.4 + 0.2 + 0.5) / 4, which equals 0.8). The section being averaged is indicated by the dark outline shown below.

.. figure:: Figures/skyViewC.png
    :width: 260px
    :align: center
    :figclass: align-center  

Complete the getAverage method below.

.. activecode:: FRQSkyViewB
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
          //TO BE COMPLETED IN THIS PART 
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
 
 
One way to solve Part b
-----------------------

Create two variables for creating the average. One double for the total number of elements and one double for the sum which is initialized as zero. Create a for loop to loop from the starting row to the ending row. Create a second loop inside to loop from the starting column to the ending column. Add every value of the 2d array view to the sum variable. Return the sum divided by the total number of elements.

.. parsonsprob:: skyviewb

   The following method has the correct code to solve this problem, but also includes some extra code not needed in a correct solution. Drag the needed blocks from the left into the correct order on the right with the correct indention. You will be told if any of the blocks are in the wrong order or not indented correctly.
   -----
   public double getAverage(int startRow, int endRow, 
                            int startCol, int endCol)
   {
   =====
       double numRowItems = (endRow - startRow + 1);
       double numColItems = (endCol - startCol +1);
       numItems = numRowItems * numColItems;
       double sum = 0;
   =====
       for(int r = startRow; r <= endRow; r++)
       {
   =====
           for(int c = startCol; c <= endCol; c++)
           {
   =====
               sum += view[r][c];
   =====
           } // end of inside for loop
   =====
       } // end of outside for loop
   =====
       return sum / numItems;
   =====
   } // end of method
   