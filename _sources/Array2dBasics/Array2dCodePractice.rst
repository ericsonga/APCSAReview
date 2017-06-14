.. qnum::
   :prefix: 3-14-
   :start: 1			
   
Code Practice with 2D Arrays
------------------------------

.. tabbed:: arr2DEx1

        .. tab:: Question

           Declare and instantiate a 3 by 3 two-dimensional int array named **table**. It should print the numbers 0 through 8.
           
           .. activecode::  arr2DEx1q
              :language: java
   
              public class Test1
              {
              	
                  public static void main(String[] args)
                  {
                      // ADD CODE HERE //
                      
                      // Should print the values in table
                      int count = 0;
                      for (int i = 0; i < table.length; i++) {
                     	 for (int j = 0; j < table.length; j++) {
                     	 	table[i][j] = count;
                     	 	count++;
                     	 	System.out.print(table[i][j] + " ");
                      	}
                      }
                  }
              }


        .. tab:: Answer
        
           Instantiating a 3 by 3 two-dimensional int array only takes one line. First you declare the type of the data you're going to put in the array. Then you put brackets, one set for a one-dimensional array, two sets for a two-dimensional array. 
           You name that and then set it equal to the key word **new**, followed by the same amount of brackets as before but with the size of the array inside. See below for clarification.
        
           .. activecode::  arr2DEx1a
              :language: java
   
              public class Test1
              {
              	
                  public static void main(String[] args)
                  {
                      int[][] table = new int[3][3];
                      
                      int count = 0;
                      for (int i = 0; i < table.length; i++) {
                     	 for (int j = 0; j < table.length; j++) {
                     	 	table[i][j] = count;
                     	 	count++;
                     	 	System.out.print(table[i][j] + " ");
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

           
           Create a two-dimensional String array called **students** that holds the names "Bobby, Jordan, Anna" in an array and "blue, green, red" in a separate array. 
           
           .. activecode::  arr2DEx2q
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      // ADD CODE HERE // 
                      
                      
                      // Should print the values in students in order
                      for (int i = 0; i <= students.length; i++) {
                     	 for (int j = 0; j <= students.length; j++) {
                     	 	System.out.print(students[i][j] + " ");
                     	 }
                     }
                  }
              }



        .. tab:: Answer
        
           Instantiating a 3 by 3 two-dimensional int array only takes one line. First you declare the type of the data you're going to put in the array. Then you put brackets, one set for a one-dimensional array, two sets for a two-dimensional array. 
           You name that and then set it equal to the key word ``new``, followed by the same amount of brackets as before but with the size of the array inside.
        
           .. activecode::  arr2DEx2a
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                  	// Can be assigned all at once
                      String[][] students = {{"Bobby","Jordan","Anna"},{"blue","green","red"}};
                      
                      // OR Can be assigned one value at a time
                      students[0][0] = "Bobby";
                      students[0][1] = "Jordan";
                      students[0][2] = "Anna";
                      students[1][0] = "blue";
                      students[1][1] = "green";
                      students[1][2] = "red";
					  
                      for (int i = 0; i < students.length; i++) {
                     	 for (int j = 0; j < students[i].length; j++) {
                     	 	System.out.print(students[i][j] + " ");
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

           Print the values 47, 51, and 20 from the given two-dimensional array.
           
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
           
           Indexing in Java starts at zero, so to reach 47, the first item in the first array, we index ``arr[0][0]``. 
           To change which array in the array we want to access, we change the number in the first bracket.
           To reach 51, the first element in the second array, we index ``arr[1][0]``. To access different 
           elements within the array, we change the number in the second set of brackets. To access 
           20, the third number in the second array, we would index ``arr[1][2]``.
 
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

           Print the values 8, 3, 87, and 34 from the given two-dimensional array.
           
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
           
           Indexing in Java starts at zero, so to reach the first item in the first array, we index ``arr[0][0]``. 
           To change which array in the array we want to access, we change the number in the first bracket.
           To reach 3, the first element in the second array, we index ``arr[1][0]``. To access different 
           elements within the array, we change the number in the second set of brackets. To access 8,
           the third number in the first array, we would index ``arr[0][2]``. By the same logic, 87, the 2nd number 
           in the third array can be accessed with ``arr[2][1]``. 34, the first number in the fifth array can be reached with ``arr[4][0]``.
 
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

           Print the number of rows of the given two-dimensional array, or the length of the outer array, using the length function. Then print the number of columns, or the length of each inner array, using the length function. 
           
           **Ex.** The array {{"red","green"},{"blue"}} should print:
           
           Rows: 
           
           2
           
           Columns: 
           
           2
           
           1
           
           .. activecode::  arr2DEx5q
              :language: java
   
              public class Test1 {
                  public static void main(String[] args)
                  {
                  	String[][] arr = {{"hello","world"},{"how","are","you"},{"hey!"}};
                  	
                  	System.out.println("Rows:");
                  	// ADD CODE TO PRINT NUMBER OF ROWS HERE // 
                  	
                  	System.out.println("Columns:");
                  	// ADD CODE TO PRINT NUMBER OF COLUMNS HERE // 
                  	
                  }
              }

        .. tab:: Answer
           
          To get the number of rows, or the length of the outer array, use ``arrayName.length`` . 
          To get the number of columns, or the length of an inner array, do ``arrayName[number].length``. 
          The number you put in the brackets depends on which inner array you want to access. 
          Since we asked for the length of each inner array, use ``arrayName[number].length`` from 0 to the length of the array - 1.  
 
          .. activecode::  arr2DEx5a
              :language: java
   
              public class Test1 {
                  public static void main(String[] args)
                  {
                  	String[][] arr = {{"hello","world"},{"how","are","you"},{"hey!"}};
                  	
                  	System.out.println("Rows:");
                  	System.out.println(arr.length);
                  	
                  	System.out.println("Columns:");
                  	System.out.println(arr[0].length);
                  	System.out.println(arr[1].length);
                  	System.out.println(arr[2].length);
                  	
                  }
              }
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_arr2Dex5d  

.. tabbed:: arr2DEx6

        .. tab:: Question

           Loop through the given two-dimensional array, printing out the values in order.
           
           **HINT:** Remember the length function!
           
           .. activecode::  arr2DEx6q
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                  	String[][] arr = {{"hey ", "there!"},{"I ", "hope ", "you're "}, {"having ","a ", "great "}, {"day! "}};
                  	
                  	// ADD CODE HERE // 
                  	
                  }
              }

        .. tab:: Answer
           
           First we want to create a loop that iterates through all of the outer arrays, or the rows using ``arrayName.length``.
           
           Then to iterate through the inner arrays, or columns, we use ``arrayName[number].length`` and set number to the place in the outer array we are looking at.
           This is important because the loop will iterate up until the length of each inner array.
 
           .. activecode::  arr2DEx6a
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                  	String[][] arr = {{"hey ", "there!"},{"I ", "hope ", "you're "}, {"having ","a ", "great "}, {"day! "}};
                  	
                  	for (int i = 0; i < arr.length; i++) {
                  		for (int j = 0; j < arr[i].length; j++) {
                  			System.out.println(arr[i][j]);
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

           Instantiate a two-dimensional array named **colors** that contains the colors of the rainbow (red, orange, yellow, green, blue, purple) in an inner array,
           the primary colors (red, yellow, blue) in another inner array, and secondary colors (orange, green, purple) in another inner array. Then print every value in the array.
           
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
           
           Instantiating a 3 by 3 two-dimensional int array only takes one line. First you declare the type of the data you're going to put in the array. Then you put brackets, one set for a one-dimensional array, two sets for a two-dimensional array. 
           You name that and then set it equal to the key word ``new``, followed by the same amount of brackets as before but with the size of the array inside.
           Then to iterate through the inner arrays, or columns, we use ``arrayName[number].length`` and set number to the place in the outer array we are looking at.
           This is important because the loop will iterate up until the length of each inner array.
 
           .. activecode::  arr2DEx7a
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {         
                    String[][] colors = {{"red", "orange", "yellow", "green", "blue", "purple"},{"red","blue","yellow"},{"orange","green", "purple"}};
                    
                    for (int i = 0; i < colors.length; i++) {
                    	for (int j = 0; j < colors[i].length; j++) {
                    		System.out.println(colors[i][j]);
                    	}
                    }
                  }
              }
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_arr2Dex7d