.. qnum::
   :prefix: 14-3-
   :start: 1
   
Exam 3 for the AP CS A Exam (not timed)
----------------------------------------

The following problems are similar to what you might see on the AP CS A exam.  Please answer each to the best of your ability. 

.. mchoice:: qtnt3_1
   :answer_a: 13 
   :answer_b: 15
   :answer_c: 25
   :answer_d: 14
   :answer_e: 41
   :correct: c
   :feedback_a: The method makes more than 13 calls. Remember that the method must make a call to check every value of n, even if n is the value in the base case.
   :feedback_b: This would be correct if t(6) was used. Remember to include the original call in your tracing.
   :feedback_c: t(7) returns t(6) and t(5). t(6) returns t(5) - t(4), while t(5) returns t(4) - t(3). t(4) returns t(3) - t(2). t(3) returns t(2) - t(1). If you trace the code throughout the calls, t is used 25 times.
   :feedback_d: This would be correct if t(6) was used, without the original call. Remember to include the original call in your tracing. Try to draw the code tracing on paper.
   :feedback_e: This would be correct if the method reached the base case when n equaled 1 or 0, not 1 or 2. Check the code to see when a recursive call is made. 
   
   Consider the following segment of code.  For the method call ``t(7)``, how many calls to ``t`` will be made, including the original call?
   
   .. code-block:: java

     public int t(int n)
     {
          if (n == 1 || n == 2)
    			return 2 * n;
    		else
    			return t(n - 1) - t(n - 2);
     }
        
.. mchoice:: qtnt3_2
   :answer_a: I only 
   :answer_b: II only
   :answer_c: III only
   :answer_d: I and II only
   :answer_e: I, II, and III
   :correct: b
   :feedback_a: This is a private instance variable. Private variables from parent classes are not inherited by sub classes.
   :feedback_b: The eat method can be accessed by every class that extends the Bird class. When a sub class extends a parent class, the parent class methods can be used by the sub class.
   :feedback_c: Constructors are not inherited by sub classes. Only accessor and mutator methods are inherited by sub classes.
   :feedback_d: II is correct, but I is incorrect. Private instance variables are not passed down from parent classes to child classes and cannot be directly accessed by the child class.
   :feedback_e: II is correct, but I and III are incorrect. Constructors and instance variables are NOT passed from the super class to the sub class.
   
   Consider the following code. Which of the following can be used by the ``Swan`` class?
   
   .. code-block:: java

      public class Bird
      {
           private String color;
         
           public Bird(String theColor)
           {
           	   /* implementation not shown */
           }
           
           public void makeNoise()
           {
           	   /* implementation not shown */
           }
           
           public void eat()
           {
           	   /* implementation not shown */
           }
           
           public string showFeathers()
           {
           	   return color;
           }
      }
      
      public class Swan extends Bird
      {
      }
      
      
      I. private String color
      
      II. public void eat()
      
      III. public Bird(String theColor)

.. mchoice:: qtnt3_3
   :answer_a: [7, 1, 4, 8, 3]
   :answer_b: [7, 8, 1, 2, 4, 3]
   :answer_c: [7, 3, 1, 4, 3]
   :answer_d: [8, 1, 2, 4, 3]
   :answer_e: [7, 8, 1, 4, 3]
   :correct: e
   :feedback_a: Remember that in ArrayLists, indexing starts at 0, not at 1. If the add method has two parameters, then the value is added at a specific index, not at the end of the list.
   :feedback_b: The set method replaces a value at the specific index. The original value is erased.
   :feedback_c: Remember that there are two add methods for ArrayLists. If the add method has two parameters, then a value is added at a specific index, not at the end of the list.
   :feedback_d: Remember that in ArrayLists, indexing starts at 0, not at 1.
   :feedback_e: 4 is added to the end of the ArrayList, then 8 is added at index one between 7 and 3. The 3 in index two is removed, then the 2 in the second index is replaced with 1. Finally, 3 is added to the end of the ArrayList, which contains [7, 8, 1, 4, 3].
   
   Consider the following code. Assume that ``list`` an ArrayList of integers that contains ``[7, 3, 2]``. What will the contents of ``list`` be after the following code is executed?
   
   .. code-block:: java
    
      list.add(4);
      list.add(1, 8);
      list.remove(2);
      list.set(2, 1);
      list.add(3);
      

.. mchoice:: qtnt1_4
   :answer_a: arr [i][j] = ans [i];
   :answer_b: ans [i] += arr [i][j];
   :answer_c: ans [i][j] += arr [i][j];
   :answer_d: ans [i] = arr [i][j];
   :answer_e: arr [i][j] += ans [i];
   :correct: b
   :feedback_a: In Java, assignments work from right to left. This answer assigns the value of element [i] in the 1-D array to the value of the 2-D array. Instead, we want to add the values of the row i in the 2-D array and assign this sum to element i in the 1-D array.
   :feedback_b: In order to return the right array, the value at the index [i] of ans must contain the sums of every element in row i of the 2-D array. The second for-loop adds the value of every element in row i of the 2-D array and assigns these values to element i of the returned array.
   :feedback_c: Notice that ans is a 1-D array, not a 2-D array. There cannot be two indexes for an element of ans, because ans is only a 1-D array.
   :feedback_d: This line reassigns the value of arr[i][j] to ans[i], but it does not add the values. This line only records the value in the last column of each row.
   :feedback_e: Remember that assignment works from right to left in Java. This line adds the value of element i 1-D array to the value of element [i][j] in the 2-D array. In this method, the values of the 2-D matrix should not be altered.

   The method ``rowSums`` returns an array of integers. Each element of the array holds the sum of the corresponding row of a 2-D matrix. Which line correctly fills in ``\* to be determined *\`` in ``rowSums``?

   .. code-block:: java
    
      public int[] rowSums(int [][] arr)
      {
      		int [] ans = new int[arr.length];
      		for (int i = 0; i < arr.length; i++)
      		{
      				for (int j = 0; j < arr[0].length; j++)
      				{
      						/* to be determined */
      				}
      		}
      		
      		return ans;
      } 
      
.. mchoice:: qtnt3_5
   :answer_a: 1
   :answer_b: 2
   :answer_c: 3
   :answer_d: 4
   :answer_e: 5
   :correct: c
   :feedback_a: 30 would not have been located in 1 iteration of the while loop. After one iteration, low would equal 0, mid would equal 3, and high would equal 7. Because list[3] is equal to 11, not 30, nothing is returned, and the while-loop continues. 
   :feedback_b: 30 would not have been located in 2 iterations of the while loop. After two iterations, mid would equal 5. Because list[5] is equal to 24, not 30, low would increase, and the while-loop would run again. Try one more iteration of the while loop.
   :feedback_c: 30 would be found in 3 iterations. After the third iteration of the while loop, mid would equal 6. mid[6] equals 30, so 6 is returned and the while-loop is exited.
   :feedback_d: 4 iterations is too many iterations. Only 3 iterations are needed to find 30 in the array. After 4 iterations for an array with 7 elements, either the key is not present in the array or the key is at the first or last index of the array.
   :feedback_e: Only 3 iterations of the while loop are needed to find 30 in the array. After 5 iterations for an array with seven elements, the key must not be present in the array.

   Consider the following method ``binSearch``, which uses binary search to locate an element ``key`` in an array of integers ``arr``. If ``list`` is an array of integers containing ``{4, 7, 9, 11, 20, 24, 30, 41}``, how many iterations of the while loop occur in ``binSearch(30, list)``? 

   .. code-block:: java
   
      public static int binSearch(int key, int [] arr)
      {
      		int low = 0;
      		int high = arr.length - 1;
      		while (low <= high)
      		{
      				int mid = (low + high) / 2;
      				if (arr[mid] == key)
      						return mid;
      				else if (arr[mid] < key)
      						low = mid + 1;
      				else
      						high = mid - 1;
      		}
      		
      		return -1;
      }

.. mchoice:: qtnt3_6
   :answer_a: "!hello!"
   :answer_b: "hello!"
   :answer_c: "!hello"
   :answer_d: "olleh!"
   :answer_e: "!olleh"
   :correct: e
   :feedback_a: The exclamation point is returned only once, when the method reaches its base case. Because the compiler works through the recursive calls to the end of the word before it returns any strings, the letters are printed in reverse order.
   :feedback_b: The compiler works through all of the recursive calls before it returns anything. So, the exclamation point is returned first, followed by the letters of the original string in reverse order.
   :feedback_c: This would be correct if the substring was returned before the recursive call in the last line. Because the recursive call occurs before the substring is returned, the compiler reaches the end of the string before it returns the letters, so they are reversed.
   :feedback_d: The exclamation point is printed before the letters of the word. The method makes recursive calls until the length of the string equals 0 and the base case has been reached. Then, an exclamation point is returned to the recursive calls, and the letters are returned after the exclamation point in reverse order.
   :feedback_e: This method makes multiple calls, removing the first letter from every string until the length of the string in the call equals 0. Then, it returns an exclamation point, followed by the letters of the string in reverse order.

   The ``wordScramble`` class is shown below. What is returned as a result of ``wordScramble("hello")``?
   
   .. code-block:: java  
   
   public static String wordScramble (String str)
   {
   	    if (str.length() == 0)
     			return "!";
   		else
     			return wordScramble(str.substring(1)) + str.substring(0,1);
   }
      


.. mchoice:: qtnt3_7
   :answer_a: I only 
   :answer_b: II only
   :answer_c: III only
   :answer_d: I and III only
   :answer_e: I, II, and III
   :correct: e
   :feedback_a: I is correct, but II and III are correct as well. This task can be accomplished by using a for loop or a while loop.
   :feedback_b: II is correct, but I and III are correct as well. This task can be accomplished by using a for loop or a while loop.
   :feedback_c: III is correct, but I and II are correct as well. Even though i increments by 1 after each passing of the loop in I and II, i * 10 is printed.
   :feedback_d: I and III are correct, but II is correct as well. This task can be accomplished using a for loop or a while loop.
   :feedback_e: Each of these loops will print out multiples of 10 from 0 to 100, starting and ending correctly

   Which of these loops will print multiples of 10, from 0 to 100 inclusive?

   .. code-block:: java
   
      I. for (int i = 0; i < 11; i++)
         {
            System.out.print(i * 10 + " ");
         }

      II. int i = 0;
          while (i <= 10)
          {
             System.out.print(i * 10 + " ");
             i++;
          }
          
      III. for (int i = 0; i <= 100; i += 10)
           {
              System.out.print(i + " ");
           }

.. mchoice:: qtnt3_8
   :answer_a: I only
   :answer_b: II only
   :answer_c: III only
   :answer_d: I and II only
   :answer_e: I and III only
   :correct: b
   :feedback_a: I cannot be used because it directly accesses the instance variables ''name'' and ''age'' in the Person class. Because these instance variables are private, subclasses cannot access or modify them.
   :feedback_b: II correctly calls on the constructor in the super class, Person. Then, it correctly instantiates the instance variable grade, located in the Student class.
   :feedback_c: III directly accesses instance variables in the parent class. Because these variables are private, the Student class cannot access ''name'' and ''age''.
   :feedback_d: II is correct, but I uses instance variables found in the Person class. Instance variables are not inherited and cannot be modified by sub classes.
   :feedback_e: I and III modify private instance variables in the Person class. Instance variables from the super class cannot be used by the sub class.
   
   The ''Person'' and ''Student'' classes are found below. Which of the following correctly replaces ''/* to be completed */ in the Student class?

   .. code-block:: java
     
      public class Person
      {
      		private String name;
      		private int age;
      		
      		public Person(String theName, int theAge)
      		{
      				name = theName;
      				age = theAge;
      				
      		}
      }
      
      public class Student extends Person
      {
      		private int grade;
      
      		public Student(String theName, int theAge, int theGrade)
      		{
      				/* to be completed */
      		}
      }
      
      I. name = theName;
         age = theAge;
         grade = theGrade;
         
      II. super(theName, theAge);
          grade = theGrade;
    
      III. super(theName, theAge);
           name = theName;
           age = theAge;
           grade = theGrade;

.. mchoice:: qtnt3_9
   :answer_a: [62, 45, 30, 12, 7, 8, 10, 3] 
   :answer_b: [30, 12, 8, 7, 62, 45, 10, 3]
   :answer_c: [62, 45, 30, 7, 12, 8, 10, 3]
   :answer_d: [62, 45, 30, 12, 7, 8, 10, 3]
   :answer_e: [8, 12, 7, 30, 45, 62, 10, 3]
   :correct: c
   :feedback_a: This is the fully sorted array after eight passes. Reread the question and try again.
   :feedback_b: This is the result after three passes of insertion sort. Remember that in selection sort, only two values swap positions after every pass.
   :feedback_c: Since 62 is the largest value in the array, it swaps position with the value in index 0 of the array, 12. 45 is the next largest value, and it swaps with 8. 30 is the next largest value, and it swaps with 7. So, after three passes the list contains [62, 45, 30, 7, 12, 8, 10, 3].
   :feedback_d: This is the result after 4 passes of selection sort. Check your steps and try again.
   :feedback_e: This is the result after one pass of merge sort. Remember that in selection sort, only two values swap postions at every pass.
   
   A list of integers containing [12, 8, 7, 30, 62, 45, 10, 3] is sorted from largest to smallest using a selection sort method. After three passes, what does the list look like?

.. mchoice:: qtnt3_10
   :answer_a: 1 
   :answer_b: 0
   :answer_c: 10 9 8 7 6 5 4 3 2 1 
   :answer_d: 1 2 3 4 5 6 7 8 9 10 
   :answer_e: 10
   :correct: a
   :feedback_a: After the recursive call reaches the base case (where arg = 1), the compiler prints "1". The recursive calls all just return and don't print anything.
   :feedback_b: This would be correct if the recursive call specified that arg >= 1 or arg > 0. Because the code ends when arg reaches a value of 1, the code will not print out 0.
   :feedback_c: This would be correct if the method printed out arg + " " before going to the recursive call. Because the print statement is located at the end of the base case and not the recursive call, not every value is printed.
   :feedback_d: This would be correct if the method printed arg + " " after the recursive call in the if statement. Because the method does not return any values or strings, and because only the base case has a print statement, only the last value of arg is printed.
   :feedback_e: This would be correct if the method returned an integer that was the sum of the previous calls. The method does not add any values.
   
   What is printed as a result of ``showMe(10)``?

   .. code-block:: java
     
      public static void showMe(int arg)
      {
         if (arg > 1)
         {
            showMe(arg - 1);
         }
        
         else
         {
            System.out.print(arg + " ");
         }
      }

.. mchoice:: qtnt3_11
   :answer_a: 25
   :answer_b: 15
   :answer_c: 21
   :answer_d: 36
   :answer_e: 10
   :correct: b
   :feedback_a: This would be correct if at the beginning of the second for loop, y was equal to 0, not to x. The starting value of y changes every time that x increases.
   :feedback_b: The code loops 15 times, and sum is incremented by 1 each time.
   :feedback_c: This would be correct if the for-loops both continued when the values were less than or equal to 5, not when the values were less than 5.
   :feedback_d: This would be correct if the for-loops both began at 0 and looped until the values were less than or equal to 5. Check the for loop structures.
   :feedback_e: This would be correct if the first for-loop began at 1, not at 0.

   Consider the following code. What is printed as a result of executing this code?
   
   .. code-block:: java

      int sum = 0;
      
      for (int x = 0; x < 5; x++)
      {
         for (int y = x; y < 5; y++)
         {
            sum++;
         }
      }
      
      System.out.println(sum);

.. mchoice:: qtnt3_12
   :answer_a: I only
   :answer_b: II only
   :answer_c: III only
   :answer_d: II and III
   :answer_e: I, II, and III
   :correct: d
   :feedback_a: I will find the sum of all the values in the matrix, but it does not find the sum of a specific row. 
   :feedback_b: II is correct, but III is also correct. This method can be completed by using a while loop or a for loop.
   :feedback_c: III is correct, but II is also correct. This method can be completed by using a for loop or a while loop.
   :feedback_d: II and III both correctly add the values in the specified row.
   :feedback_e: II and III are correct, but I adds every value in the matrix, not just the specified row.

   You are trying to write a method ``sumRow`` that finds the sum of the values in a specified row of a 2-D matrix. Which of the following code segments could replace ``/* to be determined */`` to make the code work correctly? 

   .. code-block:: java
     
      public int sumRow (int row, int[][] values)
      {
         int sum = 0;
        
      	 /* to be determined */
      	
      	 return sum;
      }
      
      // I
      for (int[] rowValues : values)
      {
         for (int x : rowValues)
         {
            sum += x;
         }
      }
      
      // II
      for (int i = 0; i < values[0].length;i++)
      {
         sum += values[row][i];
      }
      
      // III
      int col = 0;
      while (col < values[0].length)
      {
         sum += values[row][col];
         col++;
      }

.. mchoice:: qtnt3_13
   :answer_a: (int) (Math.random() + 1) * 50
   :answer_b: (int) (Math.random() * 50) + 1 
   :answer_c: (int) (Math.random() + 1 * 50)
   :answer_d: (int) Math.random() * 50
   :answer_e: (int) (Math.random() * 50)
   :correct: e
   :feedback_a: This always returns 50. Math.random() + 1 calculates a value between 1 and 1.9, and when this value is cast as an int it becomes 1. 1 * 50 always returns 50.
   :feedback_b: This calculates a random number between 1 and 50, but indexes of arrays start at 0 and end at array.length - 1.
   :feedback_c: This always returns 50. 1 * 50 returns 50 since multiplication takes precedence befores addition. The value of Math.random() + 50 always falls between 50.0 and 50.9, and this value becomes 50 when it is cast as an int.
   :feedback_d: This always returns 0, since Math.random() returns a value between 0 and 0.9. When the value of Math.random() is cast an int, its value becomes 0. 0 * 50 returns 0.
   :feedback_e: This correctly calculates a random index between 0 and 49 for the array.

   You have an array ``values`` filled with 50 integers. Which of the following correctly produces a random index of ``values``?

.. mchoice:: qtnt3_14
   :answer_a: The method will produce an infinite loop.
   :answer_b: 19
   :answer_c: 4
   :answer_d: 3
   :answer_e: 18
   :correct: c
   :feedback_a: Eventually, the recursive calls will reach mystery(5). 5 is less than 10, so the base case will have been reached and the method will end.
   :feedback_b: This would be correct if the method found the sum of the digits in the given value, with an extra 1. Instead, the method finds the number of digits.											
   :feedback_c: This method finds the number of digits in num.
   :feedback_d: This method finds the number of digits in num. Check your recursive call to make sure you reached the base case correctly.
   :feedback_e: This would be correct if the method added the digits in the value. Instead, the method simply finds the number of digits. Check the recursive call again.

   Given the following code, what is returned by mystery(5364)?
   
   .. code-block:: java
      
      /** Precondition: num ≥ 0 */
     public static int mystery(int num)
     { 
        if (num < 10) 
        { 
           return 1; 
        } 
      
        else 
        { 
           return 1 + mystery(num / 10); 
        } 
     }



.. mchoice:: qtnt3_15
   :answer_a: [4, 6, 12, 8, 13, 29, 7]
   :answer_b: [4, 6, 7, 8, 13, 29, 12]
   :answer_c: [4, 8, 12, 6, 13, 29, 7]
   :answer_d: [4, 6, 8, 12, 13, 29, 7]
   :answer_e: [4, 6, 7, 8, 12, 13, 29]
   :correct: d
   :feedback_a: This is what would happen with two iterations of selection sort. Remember that selection sort only swaps two elements at a time, while insertion sort places elements in order in the sorted part of the array.
   :feedback_b: This is what would happen if selection sort was used instead of insertion sort. Remember that selection sort only swaps two elements at a time, while insertion sort places elements in order in the sorted part of the array.
   :feedback_c: This is what the array looks like after the second iteration. Do one more iteration.
   :feedback_d: Using insertion sort, we start at the first index and sort the first two values to create a sorted array at the left side of the array. We repeat this step for the second index, creating a sorted array of three elements, and again for the third index, creating a sorted array of four elements.
   :feedback_e: This is the final sorted array. Instead of three passes, it takes seven iterations to reach this state.

   
   Consider an array of integers that contains ``[12, 8, 4, 6, 13, 29, 7]``. If the array is sorted from smallest to largest using an insertion sort method, what will be the order of the array after the third iteration of the sorting method?
   

.. mchoice:: qtnt3_16
   :answer_a: Vroom vroom! Let's go!
   :answer_b: Vroom vroom!
   :answer_c: Let's go!
   :answer_d: Let's go! Vroom vroom!
   :answer_e: This would result in a compile-time error.
   :correct: a
   :feedback_a: The method drive has been overwritten in the Minivan class. Since obj is of type Minivan, the compiler will use the overwritten method. The overwritten method uses super() to call to the method of the parent class, so "Vroom vroom! " is printed. Then, the overwritten method prints out "Let's go! ".
   :feedback_b: Although the overwritten method has a call to the method in the parent class, there is another line of code that must be printed. The drive method has been overwritten for the Minivan class.
   :feedback_c: This would be the case if the overwritten method did not make a call to the class in the parent class. Because the method has a call to the parent class before it does anything else, "Vroom vroom! " is printed.
   :feedback_d: This would be the case if the parent method had been called after "Let's go! " had been printed.
   :feedback_e: This code correctly compiles, so there are no errors present. The Minivan class can make a call to a method in the Car class using super, because the Minivan class extends the Car class.

   
   Consider the following code segment. If ``obj`` has been instantiated later in the class as a ``Minivan``, what is printed as a result of ``obj.drive()``?

   .. code-block:: java
     
      public class Car
      {
         public void drive()
         {
            System.out.print("Vroom vroom! ");
         }
      }
      
      public class Minivan extends Car
      {
         public void drive()
         {
            super.drive();
            System.out.print(" Let's go! ");
         }
      }

.. mchoice:: qtnt3_17
   :answer_a: [2, 6, 2, -1, -3]
   :answer_b: [-23, -21, -13, -3, 6]
   :answer_c: [10, 18, 19, 15, 6]
   :answer_d: This method creates an IndexOutOfBounds exception.
   :answer_e: [35, 33, 25, 15, 6]
   :correct: e
   :feedback_a: This would be correct if data[k] was modified in the for-loop. In this for-loop, data[k - 1] is the element that changes.
   :feedback_b: This would be correct if data[k - 1] was subtracted from data[k]. Notice that for every instance of the for-loop, data[k] and data[k - 1] are added together and assigned to the index at data[k - 1].
   :feedback_c: This would be correct if the for-loop began at 1 and continued to data.length - 1. Notice the for-loop indexing.
   :feedback_d: The indexing of this method is correct. The for-loop begins at the last index and ends at the second index, and the method does not access any values other than the ones specified.
   :feedback_e: This method starts at the second-to-last index of the array and adds the value of the previous element to the element at index k - 1.
   
   Consider the following code. An array is created that contains ``[2, 8, 10, 9, 6]`` and is passed to ``changeArray``. What are the contents of the array after the ``changeArray`` method executes?

   .. code-block:: java

      public void changeArray(int[] data)
      {
         for (int k = data.length - 1; k > 0; k--)
            data[k - 1] = data[k] + data[k - 1];
      }

.. mchoice:: qtnt3_18
   :answer_a: (x <= 7) && (y < 12)
   :answer_b: (x <= 7) || (y < 12)
   :answer_c: (x > 7) || (y >= 12)
   :answer_d: (x > 7) && (y >= 12)
   :answer_e: (x <= 7) || (y >= 12)
   :correct: b
   :feedback_a: The AND needs to be changed to an OR.
   :feedback_b: Using DeMorgan's law, !(A && B) is equivalent to !A || !B. The negation of (x > 7) is (x <= 7), and the negation of !(y < 12) is (y < 12).
   :feedback_c: !(A && B) is NOT equivalent to (A || B). It should be (!A || !B). Also, (y >= 12) is equivalent to !(y < 12).
   :feedback_d: !(A && B) is NOT equivalent to (A && B). !(y < 12) and (y >=12) mean the same thing; changing this does not make the statement the opposite.
   :feedback_e: !(A && B) is NOT equivalent to (!A && B). Changing !(y < 12) to (y >= 12) does not negate the statement; these two are equivalent.
   
   Which statement is equivalent to ``!( (x > 7) && !(y < 12) )``? 

.. mchoice:: qtnt3_19
   :answer_a: I only
   :answer_b: II only
   :answer_c: III and IV only
   :answer_d: I and II only
   :answer_e: II and IV only
   :correct: a
   :feedback_a: The modulus operator (%) can be used to find if numbers are even or odd. I checks that x is even correctly using x % 2 == 0.
   :feedback_b: II uses the modulus operator to count the number of odd numbers in the array. If x % 2 == 1, then the number is odd, not even.
   :feedback_c: III and IV use the division operator, not the modulus operator. This does not check if the number is even. 
   :feedback_d: I is correct, but II increments the counter for odd numbers, not even numbers.
   :feedback_e: II counts the odd numbers instead of the even numbers. If x % 2 == 1, the number is odd, not even. IV does not use the modulus operator (%), which checks if numbers are even or odd.

   
   Consider the following method ``evens``, which finds the number of even numbers present in an array. Which of the following segments of code would correctly replace ``/* to be completed */``?

   .. code-block:: java
     
     public int evens(int [] arr)
     {
        int count = 0;
      
        for (int x : arr)
        {
           /* to be completed */
        }
      
        return count;
     }
    
     // I
     if (x % 2 == 0)
        count++;
     
     // II
     if (x % 2 == 1)
        count++;
       
     // III
     if (x / 2 == 0)
        count++;
       
     // IV
     if (x / 2 == 1)
        count++;
     

.. mchoice:: qtnt3_20
   :answer_a: This method will work correctly for all arrays.
   :answer_b: The first value in the array is less than 0.
   :answer_c: The first value in the array is equal to 0.
   :answer_d: Every value in the array is greater than 0.
   :answer_e: Every value in the array is less than 0.
   :correct: e
   :feedback_a: This method will not work correctly for all arrays. Look at the starting value for maxVal, and how maxVal is compared to all the values of the array. What happens if every value in the array is less than maxVal?
   :feedback_b: Although this might present a problem if EVERY value in the array is less than 0, the compiler will move on to the next index without issue if the first value in the array is less than 0.  
   :feedback_c: This will not present a problem, as the if-statement has not been met and the for-loop will simply continue to the second element.
   :feedback_d: If every value in the array is greater than 0, the method will work properly. 
   :feedback_e: maxVal is set to zero, so if every number in the array is less than 0, the maxVal will remain 0. A better idea would be to set maxVal to the value of the first element in the array.

   
   Consider the method ``findMax``, which uses sequential search to find the index of the largest value of an array. In which case would ``findMax`` not work properly?
 

   .. code-block:: java
     
     public int findMax(int[] arr)
     {
        int maxVal = 0;
        int index = 0;
       
        for (int i = 0; i < arr.length; i++)
        {
           if (arr[i] > maxVal)
           {
              index = i;
              maxVal = arr[i];
           }
        }
        return index;
     }

     
