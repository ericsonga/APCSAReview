.. qnum::
   :prefix: 14-2-
   :start: 1
   
Exam 2 for the AP CS A Exam (not timed)
----------------------------------------

The following problems are similar to what you might see on the AP CS A exam.  Please answer each to the best of your ability. 

.. mchoice:: qtnt2_1
   :answer_a:  Goldfish glub = new Fish(); 
   :answer_b:  Animal glub = new Goldfish(); 
   :answer_c:  Fish glub = new Animal();
   :answer_d:  Goldfish glub = new Animal(); 
   :answer_e: All of the above objects will cause errors.
   :correct: b
   :feedback_a: A Fish is *not* a Goldfish. The Fish class does not inherit from the Goldfish class.
   :feedback_b: A Goldfish IS-A type of Animal, so a Goldfish can be declared an Animal.
   :feedback_c: An Animal is *not* a Fish. The Animal class does not inherit from the Fish class.
   :feedback_d: An Animal is *not* a Goldfish. The Animal class does not inherit from the Goldfish class.
   :feedback_e: One of the objects will compile without problems. Check the IS-A relationship in each choice.

   Consider the following segment of code.  Which of the following objects will compile without error?
   
   .. code-block:: java

     public class Animal
     {
       
     }
     
     public class Fish extends Animal
     {
       
     }
     
     public class Goldfish extends Fish
     {
       
     }
     
.. mchoice:: qtnt2_2
   :answer_a: 6 2 7 5 
   :answer_b: 6 4 2 7 5
   :answer_c: 4 7 9 5
   :answer_d: 6 4 7 5
   :answer_e: 4 7 6 9 5
   :correct: d
   :feedback_a: When the add method is used with two parameters, the value is added at the specific index, not at the end of the list.
   :feedback_b: The set method replaces the value at the index. It does not move the previous value to the right.
   :feedback_c: Remember that in ArrayLists, indexing starts at 0, not 1.
   :feedback_d: The 9 at the end of the list is removed, then a 4 is added at the first index. A 5 is added to the end of the list, and the value at the second index is replaced with a 7. At the end of the code, list holds <6, 4, 7, 5>.
   :feedback_e: Remember that in ArrayLists, indexing starts at 0. The set method replaces values at the specified index.
   
   Assume that *list* has been instantiated as an ArrayList of integers containing <6, 2, 9> . What are the contents of *list* after the code is executed?
   
   .. code-block:: java

      list.remove(2);
      list.add(1, 4);
      list.add(5);
      list.set(2, 7);
      for (int x : list)
      	System.out.print(x + " ");

.. mchoice:: qtnt2_3
   :answer_a: 8
   :answer_b: 10
   :answer_c: 100
   :answer_d: 3000
   :answer_e: 12
   :correct: e
   :feedback_a: 2 ^ 8 = 256. There will not be enough passes to guarantee finding the value. Remember that binary search requires log2 (n) passes to find a value.
   :feedback_b: 2 ^ 10 = 1024. There will not be enough passes to guarantee finding value.Remember that binary search requires log2 (n) passes to find a value.
   :feedback_c: The key will be found in 100 passes, but there is a better answer. Remember that binary search requires log2 (n) passes to find a value.
   :feedback_d: With binary search, every element of the array does not have to be checked.
   :feedback_e: 2 ^ 12 = 4096. Because 4096 is larger than 3000, 12 passes will be more than enough to guarantee finding the value.

   A sorted array of integers containing 3000 elements is to be searched for ``key`` using a binary search method. Assuming ``key`` is in the array, what is the maximum number of iterations needed to find ``key``?


.. mchoice:: qtnt1_4
   :answer_a: I only
   :answer_b: II only
   :answer_c: II and III only
   :answer_d: I and II only
   :answer_e: III only
   :correct: b
   :feedback_a: I correctly creates the matrix, but the matrix remains unfilled.
   :feedback_b: II correctly creates and fills the matrix with values from 1 to 63.
   :feedback_c: II is correct, but III does not fill every space correctly.
   :feedback_d: II is correct, but I does not fill the matrix.
   :feedback_e: III does not fill every space correctly. Only spaces lying on the diagonal are filled, and the values are incorrect.

   Which of the following code segments creates a 7 x 9 matrix and fills the matrix with increasing values from left to right, starting at 1?

   .. code-block:: java
    
      I.   int [][] arr = new int [7][9]; 
      
      II.  int [][] arr = new int [7][9];
           int count = 1;
           for(int i = 0; i < arr.length; i++)
           {
            for(int j = 0; j < arr[0].length; j++)
            {
             arr[i][j] = count;
             count++;
            }
           } 
      
      III. int [][] arr = new int [7][9];
           int count = 1;
           int row = 0;
           int col = 0;
           while (row < arr.length && col < arr[0].length)
           {
              arr[row][col] = count;
              row++;
              col++;
              count++;
           } 
      
.. mchoice:: qtnt2_5
   :answer_a: hciwdnas
   :answer_b: sandwich
   :answer_c: andwichandwichndwichdwichwichichchh
   :answer_d: hchichwichdwichndwichandwich
   :answer_e: Nothing is printed because an infinite loop occurs
   :correct: a
   :feedback_a: The recursive call occurs until the length of s equals 0, then the letters of the word are printed in reverse order.
   :feedback_b: This would occur if the print statement was before the recursive call. Because the compiler works through the recursive call before moving to the other statements, the letters are printed in reverse order.
   :feedback_c: This would occur if the print statement came before the recursive call and included s.substring(1), not s.substring(0, 1)
   :feedback_d: This would occur if the print statement included s.substring(1). Each call of the printString method prints only one letter at a time.
   :feedback_e: This method ends when s.length() equals zero.

   Consider the following method. What is printed as a result of printString("sandwich")?  

   .. code-block:: java
   
      public void printString(String s)
      {
       if (s.length() > 0)
       {
        printString(s.substring(1));
        System.out.print(s.substring(0 , 1));
        }
      }

.. mchoice:: qtnt2_6
   :answer_a: I only
   :answer_b: I and II only
   :answer_c: III only
   :answer_d: II and III only
   :answer_e: I, II, III, IV
   :correct: d
   :feedback_a: Remember that sub classes do not inherit constructors from the parent class.
   :feedback_b: II is correct, but constructors are not passed down from the super class to the sub class.
   :feedback_c: III is correct, but remember that all mutator and accessor methods are inherited by the sub class.
   :feedback_d: Sub classes inherit mutator and accessor methods from the parent class, but they do not inherit constructors or instance variables.
   :feedback_e: Constructors and private instance variables are not passed down from the parent class to the child class.

   The Dog class is shown below. The GoldenRetriever class inherits from the Dog class. Which methods and variables are passed to the GoldenRetriever class?

   .. code-block:: java
   
      public class Dog
      {
       private int numLegs = 4;
       private String name = "Spot";
       
       public Dog(String theName)
       {
        /* implementation not shown */
       }
       
       public String bark()
       {
        return "Woof!";
       }
  
       public String getName()
       {
        return name;
       }
  
       public int getNumLegs()
       {
        return numLegs;
       }
      }
    
      I. public Dog(String theName)
      
      II. bark()
      
      III. getName()
      
      IV. private String name;
      
      


.. mchoice:: qtnt2_7
   :answer_a: I only 
   :answer_b: II only
   :answer_c: III only
   :answer_d: I and II only
   :answer_e: I, II, and III
   :correct: c
   :feedback_a: In I, the value increments by 1, not by 2. Every value between 0 and 8 is printed.
   :feedback_b: In II, the value increments before it is printed. The code never prints out 0.
   :feedback_c: In III, the value starts at 0 and increments by 2, correctly printing out every value.
   :feedback_d: In I, the value increments by 1 and prints out too many values. In II, the first value is not printed.
   :feedback_e: III is correct, but I prints out every value between 0 and 8 and II does not print the first value.

   Which of these loops will output ``02468``?

   .. code-block:: java
   
      I. for (int i = 0; i <= 8; i++)
         {
          System.out.print(i);
         }

      II. int i = 0;
          while (i < 8)
          {
            i +=2;
            System.out.print(i);
          }
          
      III. for (int i = 0; i <= 8; i +=2)
           {
             System.out.print(i);
           }

.. mchoice:: qtnt2_8
   :answer_a: y is less than x but greater than 1
   :answer_b: y is less than or equal to 0
   :answer_c: y is greater than x
   :answer_d: all of the above
   :answer_e: none of the above
   :correct: c
   :feedback_a: Eventually, the recursive calls will reach the base case, where y is greater than or equal to x.
   :feedback_b: If y is less than or equal to 0, multiplying by 10 will not make the value greater than x.
   :feedback_c: If y is greater than x, the method has reached its base call and will end.
   :feedback_d: Not all of the statements are correct
   :feedback_e: One of the statements is correct.

   Consider the following method. Assuming x is an integer greater than 1, in which case does mystery(int x, int y) result in an infinite loop?

   .. code-block:: java
     
      public int mystery(int x, int y)
      {
        if (x <= y)
          return x;
          
        else 
          return mystery(x, y * 10);
      }

.. mchoice:: qtnt2_9
   :answer_a: A
   :answer_b: AB
   :answer_c: B
   :answer_d: BA
   :answer_e: The code results in an error.
   :correct: c
   :feedback_a: This would be the case if obj was an A object at run-time. At run-time, obj is a B object, so the overwritten method in the B class is used.
   :feedback_b: This would be the case if the display() method in B called on the super method in the A class before it printed "B".
   :feedback_c: Although obj is of type A at compile time, at run-time obj is of type B. It will use the method defined in the B class. 
   :feedback_d: The method has been overwritten in B, so the "A" will not be printed.
   :feedback_e: This code compiles and runs correctly. B IS-A A object, so the code will compile and run without issue.
   
   Consider the following classes. What is the result of executing the following code?
   ``A obj = new B();``
   
   ``obj.display();``
   
   .. code-block:: java
     
      public class A
      {
        public String display()
        {
          System.out.print("A");
        }
      }
      
      public class B extends A
      {
        public String display()
        {
          System.out.print("B");
        }
      }

.. mchoice:: qtnt2_10
   :answer_a: 1 
   :answer_b: 0
   :answer_c: 10 9 8 7 6 5 4 3 2 1 
   :answer_d: 1 2 3 4 5 6 7 8 9 10 
   :answer_e: 10
   :correct: a
   :feedback_a: After the recursive call reaches the base case (where arg = 1), the compiler prints "1 ". Because the method is void, no value is returned to the previous cases.
   :feedback_b: This would be correct if the base case specified ``arg >= 1``. Because the code ends when arg reaches 1, the code will not print out 0.
   :feedback_c: This would be correct if the method was not void and the recursive call asked for (arg + 1). The method does not return any values or strings, since there is no return statement.
   :feedback_d: This would be correct if the method was not void. Because the method does not return any values or strings, only the base case is printed.
   :feedback_e: This would be correct if the method returned an integer that was the sum of the previous calls. The method does not add any values.
   
   What is printed as a result of showMe(10)?

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

.. mchoice:: qtnt2_11
   :answer_a: 25
   :answer_b: 15
   :answer_c: 21
   :answer_d: 36
   :answer_e: 10
   :correct: b
   :feedback_a: This would be correct if y was equal to 0, not to x. The value of y changes every time that x increments.
   :feedback_b: The code loops 15 times, and sum is incremented by 1 each time.
   :feedback_c: This would be correct if the for-loops both continued when the values were less than or equal to 5, not when the values were less than 5.
   :feedback_d: This would be correct if the for-loops both began at 0 and looped until the value equaled 5.
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

.. mchoice:: qtnt2_12
   :answer_a: I only
   :answer_b: II only
   :answer_c: III only
   :answer_d: II and III
   :answer_e: I, II, and III
   :correct: d
   :feedback_a: I sums every value in the matrix. II and III sum only the values in the specified row.
   :feedback_b: II is correct, but III is also correct.
   :feedback_c: III is correct, but II is also correct.
   :feedback_d: II and III both correctly sum the values in the specified row.
   :feedback_e: II and III are correct, but I sums every value in the matrix, not just the specified row.

   You are trying to write a method ``sumRow`` that sums the values in a specified row of a 2-D matrix. Which of the following code segments will replace ``/* to be determined */``? 

   .. code-block:: java
     
      public int sumRow (int row, int [][] values)
      {
        int sum = 0;
        
      	/* to be determined */
      	
      	return sum;
      }
      
      //Segment I
      for (int [] rowValues : values)
      {
       for (int x : rowValues)
       {
        sum += x;
       }
      }
      
      //Segment II
      for (int i = 0; i < values[0].length;i++)
      {
        sum += values [row][i];
      }
      
      //Segment III
      int col = 0;
      while (col < values[0].length)
      {
        sum += values [row][col];
        col++;
      }

.. mchoice:: qtnt2_13
   :answer_a: (int) (Math.random() + 1) * 50
   :answer_b: (int) (Math.random() * 50) + 1 
   :answer_c: (int) (Math.random() + 1 * 50)
   :answer_d: (int) Math.random() * 50
   :answer_e: (int) (Math.random() * 50)
   :correct: e
   :feedback_a: This always returns 50, as Math.random() + 1 becomes 1 when it is downcast to an int.
   :feedback_b: This calculates a random index between 1 and 50, but indexes of arrays start at 0 and end at array.length - 1.
   :feedback_c: This always returns 50, since 50 is added to Math.random() and Math.random() returns a value less than 1.
   :feedback_d: This always returns 0, since Math.random() * 50 returns a double that is less than 1. When a double that is less than 1 is downcast to an integer, it always becomes 0.
   :feedback_e: This correctly calculates a random index between 0 and 49 for ``values``.

   You have an array ``values`` filled with 50 integers. Which of the following correctly produces a random index of ``values``?

.. mchoice:: qtnt2_14
   :answer_a: The method will produce an infinite loop.
   :answer_b: 19
   :answer_c: 4
   :answer_d: 3
   :answer_e: 18
   :correct: c
   :feedback_a: The base case is reached by mystery(5364). Eventually, the recursive calls will reach mystery(4), which is less than 10 and ends the recursive calls.
   :feedback_b: This would be correct if the method found the sum of digits in the value, with an extra 1. Instead, the method finds the number of digits.											
   :feedback_c: This method finds the number of decimal places contained in a value.
   :feedback_d: This method finds the number of decimal places in the given value. Recheck your recursive call to make sure you reached the base case correctly.
   :feedback_e: This would be correct if the method added the digits in the value. Instead, the method simply finds the number of digits.

   Given the following code, what is returned by mystery(5364)?
   
   .. code-block:: java
      
      /** Precondition: num ≥ 0 */
     public static int what(int num)
     { 
      if (num < 10) 
      { 
       return 1; 
      } 
      
      else 
      { 
       return 1 + what(num / 10); 
      } 
     }



.. mchoice:: qtnt2_15
   :answer_a: [4, 6, 12, 8, 13, 29, 7]
   :answer_b: [4, 6, 7, 8, 13, 29, 12]
   :answer_c: [4, 8, 12, 6, 13, 29, 7]
   :answer_d: [4, 6, 8, 12, 13, 29, 7]
   :answer_e: [4, 6, 7, 8, 12, 13. 29]
   :correct: d
   :feedback_a: This is what would happen with two passes of selection sort. Remember that selection sort only swaps two elements at a time, while insertion sort places elements into a pre-sorted array.
   :feedback_b: This is what would happen if selection sort was used instead of insertion sort. Remember that selection sort only swaps two elements at a time, while insertion sort places elements into a pre-sorted array.
   :feedback_c: This is what the array looks like after the second element is switched. Use insertion sort one more time.
   :feedback_d: Using insertion sort, we start at the first index and sort the first two values to create a sorted array at the left side of the array. We repeat this step for the second index, creating a sorted array of three elements, and again for the third index, creating a sorted array of four elements.
   :feedback_e: This is the final sorted array. Instead of three passes, you must make at least five passes to reach this step.

   
   Consider an array of integers that contains ``[12, 8, 4, 6, 13, 29, 7]``. If the array is sorted from smallest to largest using an insertion sort method, what will be the order of the array after the third pass of the sorting method?
   

.. mchoice:: qtnt2_16
   :answer_a: Vroom vroom!
              Let's go!
   :answer_b: Vroom vroom!
   :answer_c: Let's go!
   :answer_d: Let's go!
              Vroom vroom!
   :answer_e: This would result in a compile-time error.
   :correct: a
   :feedback_a: The method drive has been overwritten in the Minivan class. Since obj is of type Minivan, the compiler will use the overwritten method. The overwritten method uses super() to call to the method of the parent class, so "Vroom vroom!" is printed. Then, the overwritten method prints out "Let's go!".
   :feedback_b: Although the overwritten method has a call to the method in the parent class, there is another line of code that must be printed. The drive method being used has been overwritten for the Minivan class.
   :feedback_c: This would be the case if the overwritten method did not have super in it. Because the method has a call to the parent class before it does anything else, "Vroom vroom!" is printed.
   :feedback_d: This would be the case if the parent method had been called after "Let's go!" had been printed.
   :feedback_e: This code correctly compiles, so there are no errors present.

   
   Consider the following code segment. If ``obj`` has been instantiated later in the class as a ``Minivan``, what is printed as a result of ``obj.drive()``?

   .. code-block:: java
     
      public class Car
      {
       public void drive()
       {
         System.out.print("Vroom vroom!");
       }
      }
      
      public class Minivan extends Car
      {
       public void drive()
       {
        super.drive();
        System.out.print(" Let's go!");
       }
      }

.. mchoice:: qtnt2_17
   :answer_a: [2, 6, 2, -1, -3]
   :answer_b: [-23, -21, -13, -3, 6]
   :answer_c: [10, 18, 19, 15, 6]
   :answer_d: This method creates an IndexOutOfBounds exception.
   :answer_e: [35, 33, 25, 15, 6]
   :correct: e
   :feedback_a: This would be correct if data[k] was modified in the for-loop. In this for-loop, data[k - 1] is the element that changes.
   :feedback_b: This would be correct if data[k - 1] was subtracted from data[k]. Notice that for every instance of the for-loop, data[k] and data[k - 1] are added together.
   :feedback_c: This would be correct if the for-loop began at 1 and continued to data.length - 1. Notice the for-loop indexing.
   :feedback_d: The indexing of this method is correct. The for-loop begins at the last index and ends at the second index, and the method does not access any values other than the ones specified.
   :feedback_e: This method starts at the second-to-last index of the array and adds the value of the previous element to the specified index.
   
   Consider the following code. An array ``list`` is created that contains ``[2, 8, 10, 9, 6]``. What are the contents of ``list`` after the ``changeArray`` method is used?

   .. code-block:: java

      public static void changeArray(int[] data)
      {
      for (int k = data.length - 1; k > 0; k--)
         data[k - 1] = data[k] + data[k - 1];
      }

.. mchoice:: qtnt2_18
   :answer_a: (x <= 7) && (y < 12)
   :answer_b: (x <= 7) || (y < 12)
   :answer_c: (x > 7) || (y >= 12)
   :answer_d: (x > 7) && (y >= 12)
   :answer_e: (x <= 7) || (y >= 12)
   :correct: b
   :feedback_a: !(A && B) is NOT equivalent to (!A && !B). The AND needs to be changed to an OR.
   :feedback_b: Using DeMorgan's law, !(A && B) is equivalent to !A || !B. So, the negation of (x > 7) is (x <= 7), and the negation of !(y < 12) is (y < 12).
   :feedback_c: !(A && B) is NOT equivalent to (A || B). A and B need to become !A && !B. Also, (y >= 12) is equivalent to !(y < 12).
   :feedback_d: !(A && B) is NOT equivalent to (A && B). !(y < 12) and (y >=12) mean the same thing; changing this does not make the statement the opposite.
   :feedback_e: !(A && B) is NOT equivalent to (!A && B). Changing !(y < 12) to (y >= 12) does not negate the statement; these two are equivalent.
   
   Which statement is equivalent to ``!( (x > 7) && !(y < 12) )``?

.. mchoice:: qtnt2_19
   :answer_a: I only
   :answer_b: II only
   :answer_c: III and IV only
   :answer_d: I and II only
   :answer_e: II and IV only
   :correct: a
   :feedback_a: The modulus operator (%) can be used to find if numbers are even or odd. By checking if x % 2 == 0, I makes sure that x is always even. x divided by two leaves a remainder of 0.
   :feedback_b: II uses the modulus operator to count the number of odd numbers in the array. If x % 2 == 1, then the number is odd, not even.
   :feedback_c: III and IV use the division operator, not the modulus operator. This does not check if the number is even. 
   :feedback_d: I is correct, but II increments the counter for odd numbers, not even numbers.
   :feedback_e: II counts the odd numbers instead of the even numbers. If x % 2 == 1, the number is odd, not even. IV does not use the modulus operator (%), which checks if numbers are even or odd.

   
   Consider the following method, which finds the number of even numbers present in an array. Which of the following segments of code would correctly replace ``/* to be completed */``?

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
    
     //Segment I
     
      if (x % 2 == 0)
        count++;
     
     //Segment II
     
     if (x % 2 == 1)
       count++;
       
     //Segment III
     
     if (x / 2 == 0)
       count++;
       
     //Segment IV
     
     if (x / 2 == 1)
       count++;
     

.. mchoice:: qtnt2_20
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
   :feedback_e: maxVal begins at zero, so if every number in the array is less than 0, the maxVal will remain 0. A better idea would be to set maxVal to the value of the first element in the array.

   
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

     
