.. qnum::
   :prefix: 3-14-
   :start: 1			
   
Code Practice with 2D Arrays
------------------------------

.. tabbed:: arr2DEx1

        .. tab:: Question

           Replace the "ADD CODE HERE" below with the code to declare and create a 3 by 3 two-dimensional int array named ``table``. The finished code will print the values 0 to 8.
           
           .. activecode::  arr2DEx1q
              :language: java
   
              public class Test1
              {
              	
                  public static void main(String[] args)
                  {
                      // ADD CODE HERE //
                      
                      // Should print the values in table
                      int count = 0;
                      for (int row = 0; row < table.length; row++) {
                     	 for (int col = 0; col < table.length; col++) {
                     	 	table[row][col] = count;
                     	 	count++;
                     	 	System.out.print(table[row][col] + " ");
                      	}
                      }
                  }
              }


        .. tab:: Answer
        
           Declaring and creating a 3 by 3 two-dimensional int array only takes one line.  To declare the array specify the type of values in the array followed by ``[][]`` to indicate a 2D array and then provide a name for the array. To create the array add an ``= new``, followed by the same type as before and ``[num rows][num cols]``.
        
           .. activecode::  arr2DEx1a
              :language: java
   
              public class Test1
              {
              	
                  public static void main(String[] args)
                  {
                      int[][] table = new int[3][3];
                      
                      int count = 0;
                      for (int row = 0; row < table.length; row++) {
                     	 for (int col = 0; col < table[0].length; col++) {
                     	 	table[row][col] = count;
                     	 	count++;
                     	 	System.out.print(table[row][col] + " ");
                      	}
                      }
                  }
              }

              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_arr2Dex1d
                
.. tabbed:: arr2DEx2

        .. tab:: Question

           
          Replace the "ADD CODE HERE" below with the code to declare and initialize a two-dimensional String array called ``students`` with the names "Brice, Marvin, Anna" in the first row and "Kamal, Maria, Elissa" in the second. The finished code will print all the names in the array starting with all in the first row followed by all in the second row. 
           
           .. activecode::  arr2DEx2q
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      // ADD CODE HERE // 
                      
                      
                      // Should print the values in students in order
                      for (int row = 0; row <= students.length; row++) {
                     	 for (int col = 0; col <= students.length; col++) {
                     	 	System.out.print(students[row][col] + " ");
                     	 }
                     }
                  }
              }



        .. tab:: Answer
        
           You can declare, create, and initialize a 3 by 3 two-dimensional String array on one line as shown below.  Declare the array with ``type[][] name``.  Create and initialize an array with two rows and three columns
           using ``={{item1, item2, item3}, {item4, item5, item6}};``.  Be sure to separate the items with commas.  Also separate the rows with a comma.
           
           .. activecode::  arr2DEx2a
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      // Can declare and initialize in one line
                      String[][] students = {{"Brice", "Marvin", "Anna"}, {"Kamal", "Maria", "Elissa"}};
           
                      for (int row = 0; row < students.length; row++) {
                     	 for (int col = 0; col < students[0].length; col++) {
                     	 	System.out.print(students[row][col] + " ");
                     	 }
                     }
                  }
              }

              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_arr2Dex2d                

.. tabbed:: arr2DEx3

        .. tab:: Question

           Print the values 47, 51, and 20 by accessing them in the  the given two-dimensional array.
           
           .. activecode::  arr2DEx3q
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                     int[][] arr = {{47,3,12},{51,74,20}};
                     
                     // ADD CODE HERE //
                     
                  }
              }



        .. tab:: Answer
           
           Use ``arr[row][col]`` to get the value at a particular row and column.
           Remember that the index for the first row is 0 and the index for the first column is also 0. 
 
           .. activecode::  arr2DEx3a
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                     int[][] arr = {{47,3,12},{51,74,20}};
                     
                     // Prints 47, 51, 20 in that order
                     System.out.println(arr[0][0]);
                     System.out.println(arr[1][0]);
                     System.out.println(arr[1][2]);   
                  }
              }
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_arr2Dex3d  

.. tabbed:: arr2DEx4

        .. tab:: Question

           Print the values 8, 3, 87, and 34 by accessing them from the given two-dimensional array.
           
           .. activecode::  arr2DEx4q
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
               		int[][] arr = {{10,39,8},3,{35,87},22,{34}};
               		
               		// ADD CODE HERE //
                     
                  }
              }



        .. tab:: Answer
           
           Use ``arr[row][col]`` to get the value at a particular row and column.
           Remember that the index for the first row is 0 and the index for the first column is also 0.
 
           .. activecode::  arr2DEx4a
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
               		int[][] arr = {{10,39,8},{3},{35,87},{22},{34}};
               		
               		// Prints 8, 3, 87, and 34 in order
               		System.out.println(arr[0][2]);  
               		System.out.println(arr[1][0]);  
               		System.out.println(arr[2][1]);  
               		System.out.println(arr[4][0]);  
                     
                  }
              }
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_arr2Dex4d  

.. tabbed:: arr2DEx5

        .. tab:: Question

           Print the number of rows in the given two-dimensional array, or the length of the outer array. Then print the number of columns, or the length of each inner array. 
           
           **Ex.** The array {{"hello","there","world"},{"how","are","you"}} should print:
           
           Rows: 2
           
           Columns: 3
           
           .. activecode::  arr2DEx5q
              :language: java
   
              public class Test1 {
                  public static void main(String[] args)
                  {
                  	String[][] arr = {{"hello","there","world"},{"how","are","you"}};
                  	
                  	System.out.println("Rows:");
                  	// ADD CODE TO PRINT NUMBER OF ROWS HERE // 
                  	
                  	System.out.println("Columns:");
                  	// ADD CODE TO PRINT NUMBER OF COLUMNS HERE // 
                  	
                  }
              }

        .. tab:: Answer
           
          To get the number of rows, or the length of the outer array, use ``arrayName.length`` . 
          To get the number of columns, or the length of an inner array, use ``arrayName[0].length``. 
 
          .. activecode::  arr2DEx5a
              :language: java
   
              public class Test1 {
                  public static void main(String[] args)
                  {
                  	String[][] arr = {{"hello","there","world"},{"how","are","you"}};
                  	
                  	System.out.println("Rows:" + arr.length);
                  	System.out.println();
                  	System.out.println("Columns:" + arr[0].length);
                  }
              }
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_arr2Dex5d  

.. tabbed:: arr2DEx6

        .. tab:: Question

           Loop through the given two-dimensional array, printing out the values in the first row followed by those in the second row and so on.
           
           .. activecode::  arr2DEx6q
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                  	String[][] arr = {{"Hey ", "there! "},{"I ", "hope "}, {"you ", "are "}, {"doing ", well"}};
                  	
                  	// ADD CODE HERE // 
                  	
                  }
              }

        .. tab:: Answer
           
           Create a loop that iterates through all of the outer arrays, or the rows using ``arrayName.length``.
           Then iterate through the inner arrays, or columns, using ``arrayName[0].length``.
 
           .. activecode::  arr2DEx6a
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                  	String[][] arr = {{"Hey ", "there! "},{"I ", "hope "}, {"you ", "are "}, {"doing ", "well"}};
                  	
                  	for (int row = 0; row < arr.length; row++) {
                  		for (int col = 0; col < arr[0].length; col++) {
                  			System.out.println(arr[row][col]);
                  		}
                  	}
                  }
              }
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_arr2Dex6d

.. tabbed:: arr2DEx7

        .. tab:: Question

           Declare and create a two-dimensional array of strings named ``colors``.  Put the colors ("red", "yellow", "blue") in the first row, and the colors ("orange", "green", "purple") in the second row. Then print every value in the array.
           
           .. activecode::  arr2DEx7q
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                  	// ADD CODE HERE //
                  }
              }

        .. tab:: Answer
           
           Declare and initialize the array in one statement as shown below.  Loop through the rows and columns and print each value.
 
           .. activecode::  arr2DEx7a
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {         
                    String[][] colors = {{"red","yellow","blue"},{"orange","green","purple"}};
                    
                    for (int row = 0; row < colors.length; row++) {
                    	for (int col = 0; col < colors[0].length; col++) {
                    		System.out.println(colors[row][col]);
                    	}
                    }
                  }
              }
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_arr2Dex7d