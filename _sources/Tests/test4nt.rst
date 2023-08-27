.. qnum::
   :prefix: 14-5-
   :start: 1

Exam 4 for the AP CSA Exam (not timed)
----------------------------------------

The following problems are similar to what you might see on the AP CSA exam.  Please answer each to the best of your ability.

.. mchoice:: qtnt4_1
   :answer_a: arr[i][j]
   :answer_b: arr[0][0]
   :answer_c: 0
   :answer_d: -1
   :answer_e: 1
   :correct: b
   :feedback_a: Notice where min is set in the code. At the time that min is set, i and j have not been delcared and cannot be used. This choice will create a compile-time error.
   :feedback_b: Using the first value in the array guarantees that the correct minimum value will be found and returned, regardless of the range of numbers in the array.
   :feedback_c: Setting min equal to 0 might find the minimum value in some cases. However, if every number in the array is positive, then min will remain 0 and it will not find the minimum value in the array.
   :feedback_d: If min is set to -1, the method would only work correctly if there was a value in the array that was equal to or smaller than -1. If all of the values in the array are greater than -1, then the correct minimum value will not be found.
   :feedback_e: This value would only work correctly if there was a value in the array that was less than 1. If the array is filled with positive numbers, 1 will remain the minimum and the correct minimum may not be found.

   Consider the method ``minVal``, shown below. ``minVal`` compares every value in the given array to ``min`` to find the smallest value, which is then returned. At the beginning of the code, ``min`` is set to 1. Which of the following is the best value to set ``min`` so that the method will compile and work as intended?

   .. code-block:: java

     public int minVal (int[][] arr)
     {
         int min = 1;

         for (int i = 0; i < arr.length; i++)
         {
             for (int j = 0; j < arr[0].length; j++)
             {
                 if (arr[i][j] < min)
                     min = arr[i][j];
             }
         }

         return min;
     }



.. mchoice:: qtnt4_2
   :answer_a: 5
   :answer_b: 6
   :answer_c: 8
   :answer_d: 13
   :answer_e: 15
   :correct: a
   :feedback_a: fibonacci(5) returns fibonacci(4) + fibonacci(3). fibonacci(4) returns fibonacci(3) and fibonacci(2). fibonacci(3) returns fibonacci(2) + fibonacci(1). fibonacci(2) returns fibonacci(1) + fibonacci(0). fibonacci(1) returns 1, and fibonacci(0) returns 0. When the code is traced, 5 is returned.
   :feedback_b: Check your tracing to make sure that fibonacci(0) returned 0 and fibonacci(1) returned 1.
   :feedback_c: This is the answer returned for fibonacci(6). Check your tracing and try again.
   :feedback_d: This is the answer returned for fibonacci(7). Check your tracing and try again.
   :feedback_e: Notice what is returned in the if statement. fibonacci(0) returns 0, not 1.

   The ``fibonacci`` method is shown below. What is returned as a result of ``fibonacci(5)``?

   .. code-block:: java

      public int fibonacci (int num)
      {
          if (num <= 1)
              return num;

          else
              return fibonacci(num - 1) + fibonacci(num - 2);
      }

.. mchoice:: qtnt4_3
   :answer_a: (x >= 7) && (x > 2)
   :answer_b: (x < 7) && (x <= 2)
   :answer_c: (x >= 7) && (x < 2)
   :answer_d: (x >= 7) || (x <= 2)
   :answer_e: (x < 7) || (x < 2)
   :correct: d
   :feedback_a: Use A and B to represent the expressions -- A becomes !(x >= 7), B becomes (x > 2). ! (A && B) does NOT equal !A && B.
   :feedback_b: Use A and B to represent the expressions -- A becomes !(x >= 7), B becomes (x > 2). ! (A && B) does NOT equal A && !B. !(x >= 7) is the same as (x < 7).
   :feedback_c: Use A and B to represent the expressions -- A becomes !(x >= 7), B becomes (x > 2). ! (A && B) does NOT equal !A && !B. Also, the negation of (x > 2) is (x <= 2), not (x < 2).
   :feedback_d: Use A and B to represent the expressions -- A becomes !(x >= 7), B becomes (x > 2). ! (A && B) is equal to !A || !B, according to DeMorgan's law. The negation of !(x >= 7) is (x >= 7), and the negation of (x > 2) is (x <= 2).
   :feedback_e: Use A and B to represent the expressions -- A becomes !(x >= 7), B becomes (x > 2). ! (A && B) does NOT equal A || !B. The negation of (x > 2) is (x <= 2), not (x < 2), and !(x >= 7) is the same as (x < 7).

   Which of the following is equivalent to ``! (!(x >= 7) && (x > 2))``?

.. mchoice:: qtnt4_4
   :answer_a: I only
   :answer_b: II only
   :answer_c: III only
   :answer_d: I and II only
   :answer_e: I and III only
   :correct: d
   :feedback_a: This loop is correct, but the loop in II is also correct. This method may be completed using a for loop or a while loop.
   :feedback_b: This loop is correct, but the loop in I is also correct. This method may be completed using a for loop or a while loop.
   :feedback_c: This method cannot be completed using a for-each loop. The for-each loop only loops through elements of a collection like a list or array.
   :feedback_d: Both of these loops multiply num by itself exactly ten times.
   :feedback_e: This method cannot be completed using a for-each loop. The format of a for-each loop requires a list or array to be completed.

   You want to write a method that multiplies an integer ``num`` by itself exactly 10 times. Which of the following loops could you use?

   .. code-block:: java

      // I.
      int total = 1;
      for (int i = 0; i < 10; i++)
      {
          total = total * num;
      }

      // II.
      int count = 0;
      int total = 1;

      while (count < 10)
      {
          count++;
          total = total * num;
      }

      // III.
      int total = 1;
      for (int i : 10)
      {
          total = total * num;
      }

.. mchoice:: qtnt4_5
   :answer_a: I only
   :answer_b: II only
   :answer_c: III only
   :answer_d: I and II only
   :answer_e: II and III only
   :correct: e
   :feedback_a: Color is a private instance variable located in the Animal class. Private instance variables cannot be directly accessed using dot notation in external classes.
   :feedback_b: getWeight and makeNoise are methods in the Animal class, so they can both be used by anything declared to be of the type Animal.
   :feedback_c: getWeight and makeNoise are  methods in the Animal class, so they can both be used by anything declared to be of the type Animal.
   :feedback_d: Color is a private instance variable located in the Animal class. Private instance variables cannot be directly accessed using dot notation in external classes.
   :feedback_e: getWeight and makeNoise are both defined in the Animal class, so they can both be used by anything declare to be of the type Animal.

   Consider the ``Animal`` and ``Cat`` classes, shown below. In another class, the line ``Animal fluffy = new Cat ("orange", "Fluffy", 11)`` appears. Which of the following declarations will compile without error?

   .. code-block:: java

      public class Animal
      {
          private String color;
          private String name;

          public Animal (String theColor, String theName)
          {
              name = theName;
              color = theColor;
          }

          public  String makeNoise() { return ""; }

          public  int getWeight() { return 0; }
      }

      public class Cat extends Animal
      {
          private int weight;

          public Cat (String theColor, String theName, int theWeight)
          {
              super (theColor, theName);
              weight = theWeight;
          }

          public String makeNoise()
          {
              return "Meow!";
          }

          public int getWeight()
          {
              return weight;
          }
      }

      I. fluffy.color;

      II. fluffy.getWeight();

      III. fluffy.makeNoise();

.. mchoice:: qtnt4_6
   :answer_a: 720
   :answer_b: 120
   :answer_c: 24
   :answer_d: 15
   :answer_e: This method results in an infinite loop.
   :correct: b
   :feedback_a: This is the value returned for mysteryNum(6). Try tracing the recursive calls again.
   :feedback_b: This method calculates n! (n factorial) by subtracting 1 from n until n equals 1. Then, it works through the calls, multiplying each value of n by the previous values. 5 * 4 * 3 * 2 * 1 equals 120.
   :feedback_c: This is the value returned for mysteryNum(4). Trace the calls again.
   :feedback_d: Notice the recursive call. This would be correct if the code added n to the value returned by the recursive call. Instead, the returned value is multiplied by n.
   :feedback_e: Notice the precondition for the method. Because every value will be greater than 1, the method will always reach its base case.

   The ``mysteryNum`` method is shown below. What is returned as a result of ``mysteryNum(5)``?

   .. code-block:: java

      /** Precondition: all values of n are greater than 1 **/
      public int mysteryNum (int n)
      {
          if (n == 1)
              return 1;

          else
              return n * mysteryNum(n - 1);
      }

.. mchoice:: qtnt4_8
   :answer_a: 1
   :answer_b: 2
   :answer_c: 3
   :answer_d: 4
   :answer_e: 5
   :correct: c
   :feedback_a: This would be the correct answer if sequential search is used. Remember that the loop will continue until a value is returned or the value is not found, regardless of the position of key.
   :feedback_b: Remember that even if low and high are equal, the while loop will still continue to compare a value.
   :feedback_c: After the first instance of the while loop, high = 7 and mid = 3. Because intArr[3] is greater than 5, high becomes 2, mid becomes 1, and the loop passes again. intArr[2] is also greater than 5, so high becomes 0, mid becomes 0, and the loop passes again. intArr[0] equals 5, so the key was found in three iterations of the while-loop.
   :feedback_d: This number is too high for a binary search algorithm. There are 8 elements in the array, and binary search uses, at a maximum, log2 (number of elements) iterations. log2 (8) is less than 4.
   :feedback_e: This number is too high for a binary search algorithm. There are 8 elements in the array, and binary search uses, at a maximum, log2 (number of elements) iterations. log2 (8) is less than 5.

   Consider the ``binSearch`` method shown below, which uses a binary search algorithm to locate an integer ``key`` in an array. Assume ``intArr`` is an array of integers containing ``[5, 7, 9, 11, 21, 29, 36, 45]``. How many iterations of the while loop occur in ``binSearch(5, intArr)``?

   .. code-block:: java

      public int binSearch(int key, int[] arr)
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

.. mchoice:: qtnt4_9
   :answer_a: 5! 4! 3! 2! 1! 0!
   :answer_b: 0! 1! 2! 3! 4! 5!
   :answer_c: 0!
   :answer_d: 5!
   :answer_e: This method will result in an infinite loop.
   :correct: c
   :feedback_a: This would be correct if the recursive call contained a return to n + "! " in addition to the call to numList. Notice the recursive call in this problem. Only the value of numList(n - 1) is returned, with nothing else added.
   :feedback_b: This would be correct if the recursive call contained a call to numList AND a return of n + "! ". Notice the recursive call in this problem. Only the value of numList(n - 1) is returned, with nothing else added.
   :feedback_c: The method makes recursive calls until 0 is reached, then "0! " is returned. None of the recursive calls modify the returned response, so only "0! " is returned.
   :feedback_d: Notice the if-statement. When n + "! " is returned, n equals the base case found in the if-statement. This occurs ONLY when n == 0, not 5.
   :feedback_e: An infinite loop will not occur in this method, because of the precondition. After a certain number of calls, n will reach the base case and the method will end.

   The method ``numList`` is shown below. What is returned as a result of ``numList(5)``?

   .. code-block:: java

       /** Precondition: all values of n are greater than 1 **/
       public String numList (int n)
       {
           if (n == 0)
               return n + "! "

           else
               return numList(n - 1);
       }

.. mchoice:: qtnt4_10
   :answer_a: [7, 2, 8, 1, 3, 5]
   :answer_b: [7, 8, 1, 6, 5, 3]
   :answer_c: [7, 2, 1, 3, 2, 5, 9]
   :answer_d: [7, 2, 8, 1, 6, 5, 9]
   :answer_e: [7, 2, 8, 1, 5]
   :correct: a
   :feedback_a: 8 is added at index 2, then index 4 is set to equal 1. The value at index 3 is removed, and 9 is added to the end of the array. Finally, the value at index 5 is set to equal 5.
   :feedback_b: Remember that for ArrayLists, indexing starts at 0, not 1.
   :feedback_c: When the add method has two parameters, the first parameter specifies the index and the second is the value to add at that index which moves any existing values to the right. The two parameters are not added to the end of the array.
   :feedback_d: The set method differs from the add method in that it replaces the original value at the specified index. The set method does NOT shift the numbers to the right of the specified index.
   :feedback_e: The add method adds the specified value at the specified index and shifts every index to the right of the current index. It does NOT delete the value at the original index.

   An ArrayList of integers ``numbers`` contains the values ``[7, 2, 4, 6, 3]``. What are the contents of ``numbers`` after the following code has been executed?

   .. code-block:: java

      numbers.add(2, 8);
      numbers.set(4, 1);
      numbers.remove(3);
      numbers.add(9);
      numbers.set(5, 5);

.. mchoice:: qtnt4_12
   :answer_a: arr[col][i] += sum;
   :answer_b: arr[i][col] += sum;
   :answer_c: sum += arr[i][col];
   :answer_d: sum += arr[col][i];
   :answer_e: sum += arr[col][col];
   :correct: c
   :feedback_a: This assigns the value of sum to a space in the array. Remember that assignment occurs from right to left.
   :feedback_b: This assigns the value of sum to a space in the array. Remember that assignment occurs from right to left.
   :feedback_c: Correct! This adds the value in [i][col] to sum, and i loops through every row in the array.
   :feedback_d: This method sums the values at a specified row, not a specified column. Check the array indexing.
   :feedback_e: Because col does not change, this method simply sums the value at arr[col][col] i times.

   The method ``columnSum`` is shown below. ``columnSum`` returns the sum of all of the values in a specified column ``col`` of a 2-D array. Which of the following should replace ``/* to be completed */`` so that the method will work as intended?

   .. code-block:: java

      public int columnSum (int col, int[][] arr)
      {
          int sum = 0;

          for (int i = 0; i < arr.length; i++)
          {
              /* to be completed */
          }

          return sum;
      }

.. mchoice:: qtnt4_13
   :answer_a: [6, 8, 12, 34, 2, 4, 10, 14]
   :answer_b: [2, 4, 6, 34, 10, 14, 8, 12]
   :answer_c: [2, 4, 34, 6, 10, 13, 8, 12]
   :answer_d: [6, 8, 12, 34, 10, 14, 2, 4]
   :answer_e: [6, 8, 10, 12, 34, 14, 2, 4]
   :correct: d
   :feedback_a: These would be the contents of intArray if intArray was sorted through merge sort. Remember that insertion sort does not break an array into smaller arrays to sort, and values are inserted into a pre-sorted array.
   :feedback_b: These would be the contents of intArray after three passes of selection sort. Remember that while selection sort swaps the lowest value in the array with the specified index, insertion sort places the value at the specified index in a pre-sorted array.
   :feedback_c: These would be the contents of intArray after two passes of selection sort. Remember that while selection sort swaps the lowest value in the array with the specified index, insertion sort places the value at the specified index in a pre-sorted array.
   :feedback_d: After the first pass, the contents of intArray are in the same order, since the presorted array contains only one value. After the second pass, the contents are [8, 12, 34, 6, 10, 14, 2, 4] and the presorted array contains three elements. After the third pass, 6 is inserted in the presorted array, and the contents are now [6, 8, 12, 34, 10, 14, 2, 4].
   :feedback_e: These are the contents of intArray after four passes of insertion sort. Check your tracing and try again.

   The array ``intArray`` contains ``[8, 12, 34, 6, 10, 14, 2, 4]``. What are the contents of ``intArray`` after 3 passes of insertion sort?

.. mchoice:: qtnt4_14
   :answer_a: II only
   :answer_b: IV only
   :answer_c: I and II only
   :answer_d: I and IV only
   :answer_e: II and III only
   :correct: e
   :feedback_a: getColor and numOfWheels are both public methods of the Vehicle class and so the code will compile.
   :feedback_b: color is a private instance variable located in the Vehicle class. Private instance variables can not be directly accessed using dot notation in external classes.
   :feedback_c: wheels is a private instance variable located in the Vehicle class. Private instance variables can not be directly accessed using dot notation in external classes.
   :feedback_d: wheels and color are both private instance variables in the Vehicle class. Private instance variables can not be directly accessed using dot notation in external classes.
   :feedback_e: getColor and numOfWheels are both public methods in the Vehicle class and can be invoked in any class on a variable of type Vehicle.

   The ``Vehicle``, ``Bike``, and ``Car`` classes are shown. The objects ``a`` and ``b`` have been declared in a different class. Which of the following lines will compile without error?

   .. code-block:: java

       public class Vehicle
       {
           private int wheels;
           private String color;

           public Vehicle (String theColor, int theWheels)
           {
               wheels = theWheels;
               color = theColor;
           }

           public int numOfWheels()
           {
               return wheels;
           }

           public String getColor()
           {
               return color;
           }
       }

       public class Bike extends Vehicle
       {
           public Bike (String theColor, int theWheels)
           {
               super (theColor, theWheels);
           }

           /* no other constructors or methods implemented */
       }

       public class Car extends Vehicle
       {
           public Car (String theColor, int theWheels()
           {
               super (theColor, theWheels);
           }

           /* no other constructors or methods implemented */
       }


       Vehicle a = new Bike ("green", 2);
       Vehicle b = new Car ("red", 4);

       I. b.wheels;
       II. a.getColor();
       III. b.numOfWheels();
       IV. a.color;




.. mchoice:: qtnt4_15
   :answer_a: penguin
   :answer_b: niugnep
   :answer_c: pp
   :answer_d: nninuinguinnguinenguin
   :answer_e: enguinp
   :correct: b
   :feedback_a: This would be correct if s.substring(0, 1) was returned BEFORE the recursive call. Because the recursive call is placed before s.substring(1), the compiler loops through the entire word and returns the last character of the word before any other character.
   :feedback_b: This code removes the first character from the string s until the length of s equals 1. Then, the letters are returned in reverse order.
   :feedback_c: Notice the substrings in this method. s.substring(1), not s.substring(0, 1) is used in the recursive call. s.substring(1) starts at the first index, taking off the first letter of a string and returning the rest of the characters.
   :feedback_d: Notice the substrings in this method. s.substring(0, 1), not s.substring(1) is returned. s.substring(0, 1) only returns one character, so only one character at a time is returned to the method.
   :feedback_e: This would be correct if the last line returned s.substring(1) and wordMixer(s.substring(0, 1)). Because the first substring is used to make a call to the string with only the first character removed, the code will loop through all of the letters before it returns a character.


   The ``wordMixer`` class is shown below. What is returned as a result of ``wordMixer("penguin")``?

   .. code-block:: java

      public String wordMixer (String s)
      {
          if (s.length() == 1)
              return s;

          else
              return wordMixer(s.substring(1)) + s.substring(0, 1);
      }

.. mchoice:: qtnt4_16
   :answer_a: x % y == 0
   :answer_b: x % y == 1
   :answer_c: x % y == 2
   :answer_d: x / y == 1
   :answer_e: x / y == 0
   :correct: a
   :feedback_a: The remainder operator (%) returns the remainder left by integer division. If x % y == 0, x is evenly divisible by y, leaving no remainder.
   :feedback_b: The remainder operator (%) returns the remainder left by integer division. If x % y == 1, x is not evenly divisible by y, as there is a remainder of 1 left over.
   :feedback_c: The remainder operator (%) returns the remainder left by integer division. If x % y == 2, x is not evenly divisible by y, because there is a remainder of 2 left after the division.
   :feedback_d: The remainder operator (%) is used to check if numbers are divisible by each other. The division operator (/) should be replaced with a %.
   :feedback_e: The division operator does not check if one number is divisible by another. In integer division, remainders are calculated by the remainder operator (%).


   The method ``divisible`` is shown below. In order for ``divisible`` to compile and run as intended, the method must return true if x is evenly divisible by y with no remainder, returning false otherwise. Which of the following could replace ``/* to be completed */`` to make the code work as intended?

   .. code-block:: java


     /* Precondition: x and y are both integers greater than 0 */
      public boolean divisible (int x, int y)
      {
          if ( /* to be completed */)
              return true;

          return false;
      }

.. mchoice:: qtnt4_17
   :answer_a: 8
   :answer_b: 11
   :answer_c: 20
   :answer_d: 100
   :answer_e: 2000
   :correct: b
   :feedback_a: 2 ^ 9 is 512, which is not enough elements to cover every element in the database. Remember that binary search requires log2 (number of elements) iterations to perform.
   :feedback_b: 2 ^ 11 is 2048. 11 iterations is more than enough to find the value or guarantee that it is not in the database. Binary search takes log2 (number of elements) iterations to perform.
   :feedback_c: The value will be found in 20 iterations, but a smaller number of iterations could be used.
   :feedback_d: The value will be found in 20 iterations, but a smaller number of iterations could be used. Remember that binary search requires log2 (number of elements) iterations to perform correctly.
   :feedback_e: This would be true if we used a sequential search algorithm. However, binary search only needs log2 (number of elements) iterations.

   A database containing 2,000 sorted integers must be searched using a binary search algorithm. What is the maximum number of iterations of the binary search method that   must occur in order to find a specified value or guarantee that it is not in the database?

.. mchoice:: qtnt4_18
   :answer_a: Having a constructor in the Student class that has a different parameter list than the constructor in the Person class.
   :answer_b: Having a sayName() method in Person and in Student.
   :answer_c: Having sayName() and sayName(String nickname) in the Student class.
   :answer_d: Having the changeGrade() method in the Student class.
   :answer_e: None of the above
   :correct: c
   :feedback_a: This is not an example of method overloading. In this constructor method, the parent constructor is called, but the method is not overloaded. Method overloading occurs when a class has two or more methods with the same name and a different parameter list (like a different number of parameters).
   :feedback_b: This is an example of method overridding, not method overloading. Method overridding occurs when a method is redefined in a subclass, and the method has the same parameter list. Method overloading occurs when there are two or more methods with the same name and different parameter lists in the same class.
   :feedback_c: In the Student class, there are two different sayName methods. The second sayName method has the same name and same return type, but the parameter lists differ. This is an example of method overloading.
   :feedback_d: This is just an example of adding new methods to the child class, that were not inherited from the parent class.
   :feedback_e: Method overloading occurs when a class has two or more methods with the same name and different parameters. There is a method in the Student class with the same name and two different parameter lists.

   The ``Person`` and ``Student`` classes are located below. Which of the following methods contains an example of method overloading?

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

          public String sayName()
          {
              return name;
          }

          public int getAge()
          {
              return age;
          }
      }

      public class Student extends Person
      {
          private int grade;

          public Student(String theName, int theAge, int theGrade)
          {
              super(theName, theAge);
              grade = theGrade;
          }

          public String sayName()
          {
              return "My name is " + super.sayName();
          }

          public String sayName(String nickname)
          {
              return "My name is " + name + " but I like to be called " + nickname;
          }

          public int getGrade()
          {
              return grade;
          }

          public void changeGrade()
          {
              grade++;
          }
      }

.. mchoice:: qtnt4_19
   :answer_a: I only
   :answer_b: II only
   :answer_c: III only
   :answer_d: I and II only
   :answer_e: I and III only
   :correct: d
   :feedback_a: This is correct, but there is another answer that is also correct.
   :feedback_b: This is correct, but there is another answer that is also correct.
   :feedback_c: The for-each loop would not compile.  The variable num is not an array or list.
   :feedback_d: Both I and II print out the value of num and then decrement it by 1.
   :feedback_e: The for-each loop would not compile.  The variable num is not an array or list.

   You are trying to write the ``countDown`` method. The ``countDown`` method takes a parameter ``num`` and decrements it by 1, printing every time until ``num`` equals 0. Which of the following loops will make the ``countDown`` method compile and work as intended?

   .. code-block:: java

     // I.
     for (int i = num; i > 0; i--)
     {
         System.out.print (i + " ");
     }

     // II.
     while (num > 0)
     {
         System.out.print (num + " ");
         num --;
     }

     /// III.
     for (int i : num)
     {
         System.out.print(i + " ");
         i --;
     }

.. mchoice:: qtnt4_20
   :answer_a: 12
   :answer_b: 27
   :answer_c: 81
   :answer_d: 243
   :answer_e: This method will result in an infinite loop.
   :correct: c
   :feedback_a: This would be correct if the else statement returned 3 + the recursive call. The value returned by the recursive call is multiplied by 3.
   :feedback_b: This method calculates 3 ^ num. 3 ^ 4 is not equal to 27. Check your tracing and try again.
   :feedback_c: This method calculates 3 ^ num. It goes through the recursive calls until num reaches 1, then 3 is multiplied by itself (num) times. The method has been called four times, and 3 ^ 4 is 81.
   :feedback_d: This method calculates 3 ^ num. 3 ^ 4 is not equal to 243. Check your tracing and try again.
   :feedback_e: This method will end properly. If num is less than or equal to 1, a value of 3 will be returned.


   Consider the method ``threes``. What is returned as a result of ``threes(4)``?

   .. code-block:: java

     public int threes (int n)
     {
         if (n <= 1)
             return 3;

         else
             return 3 * threes(n - 1);
     }
