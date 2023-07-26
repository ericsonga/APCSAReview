.. qnum::
   :prefix: 12-4-
   :start: 1

Exam 3 for the AP CSA Exam (not timed)
----------------------------------------

The following problems are similar to what you might see on the AP CSA exam.  Please answer each to the best of your ability.

.. mchoice:: qtnt3_1
   :answer_a: 4
   :answer_b: 15
   :answer_c: 9
   :answer_d: 14
   :answer_e: 5
   :correct: c
   :feedback_a: The method makes more than 4 calls. Remember that the method must make a call to check every value of n, even if n is the value in the base case.
   :feedback_b: This would be correct if t(6) was used. Try tracing the code again.
   :feedback_c: t(5) returns t(4) - t(3). t(4) returns t(3) - t(2), while t(3) returns t(2) - t(1). If you trace the code throughout the calls, t is called 9 times.
   :feedback_d: This would be correct if the method reached the base case when n equaled 1 or 0, not 1 or 2. Check the code to see when a recursive call is made.
   :feedback_e: This would be correct if t(4) was called. Try tracing the code again.

   Consider the following segment of code.  For the method call ``t(5)``, how many calls to ``t`` will be made, including the original call?

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
   :feedback_a: The color is a private instance variable in Bird. Children classes do not have direct access to private variables.  They must use the public getter and setter methods to access the private variables.
   :feedback_b: The public eat method was inherited from the Bird class and can be called from code in the Swan class.
   :feedback_c: Constructors are not inherited by sub classes. Only public accessor and mutator methods are inherited by sub classes.
   :feedback_d: II is correct, but I is incorrect. Private instance variables cannot be directly accessed by the child class.
   :feedback_e: II is correct, but I and III are incorrect. Constructors are not inherited and subclasses do not have direct access to private instance variables.

   Consider the following class declarations. Which of the following code can be executed in the ``Swan`` class?

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
          /* no constructors or other methods have been declared */
      }


      I. this.color = "blue";

      II. eat();

      III. Swan s = new Swan("blue");

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

   Consider the following code. Assume that ``list`` is an ArrayList of integers that contains ``[7, 3, 2]``. What will the contents of ``list`` be after the following code is executed?

   .. code-block:: java

      list.add(4);
      list.add(1, 8);
      list.remove(2);
      list.set(2, 1);
      list.add(3);


.. mchoice:: qtnt3_4
   :answer_a: arr[i][j] = ans[i];
   :answer_b: ans[i] += arr[i][j];
   :answer_c: ans[i ][j] += arr[i][j];
   :answer_d: ans[i] = arr[i][j];
   :answer_e: arr[i][j] += ans[i];
   :correct: b
   :feedback_a: In Java, assignments work from right to left. This answer assigns the value of ans[i] in the 1-D array to the value of the 2-D array. Instead, we want to add the values of the row i in the 2-D array and assign this sum to ans[i] in the 1-D array.
   :feedback_b: In order to return the right array, the value at ans[i] must contain the sums of every element in row i of the 2-D array. The second for-loop adds the value of every element in row i of the 2-D array and assigns these values to ans[i].
   :feedback_c: Notice that ans is a 1-D array, not a 2-D array. There cannot be two indexes for an element of ans, because ans is only a 1-D array.
   :feedback_d: This line reassigns the value of arr[i][j] to ans[i], but it does not sum all the values in the row. This line would return an array with the value in the last column of each row.
   :feedback_e: Remember that assignment works from right to left in Java. This line adds the value of ans[i] in the 1-D array to the value of arr[i][j] in the 2-D array. The 2-D array should not be modified by this method.

   The method ``rowSums`` returns an array of integers. Each element of the array holds the sum of the corresponding row of a 2-D matrix. Which line correctly fills in ``\* to be determined *\`` in ``rowSums``?

   .. code-block:: java

      public int[] rowSums(int[][] arr)
      {
          int[] ans = new int[arr.length];

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
   :feedback_a: 30 would not have been located in 1 iteration of the while loop. After one iteration, low would equal 0, mid would equal 3, and high would equal 7. Because list[3] is equal to 11, not 30, nothing is returned, low becomes 4, and the while-loop continues.
   :feedback_b: 30 would not have been located in 2 iterations of the while loop. After two iterations, mid would equal 5. Because list[5] is equal to 24, not 30, low would increase, and the while-loop would run again. Try one more iteration of the while loop.
   :feedback_c: 30 would be found in 3 iterations. After the third iteration of the while loop, mid would equal 6. list[6] equals 30, so 6 is returned and the while-loop is exited.
   :feedback_d: 4 iterations is too many iterations. Only 3 iterations are needed to find 30 in the array. After 4 iterations for an array with 7 elements, either the key is not present in the array or the key is at the first or last index of the array.
   :feedback_e: Only 3 iterations of the while loop are needed to find 30 in the array. After 5 iterations for an array with seven elements, it must be that the key was not found.

   Consider the following method ``binSearch``, which uses binary search to locate an element ``key`` in an array of integers ``arr``. If ``list`` is an array of integers containing ``{4, 7, 9, 11, 20, 24, 30, 41}``, how many iterations of the while loop occur in ``binSearch(30, list)``?

   .. code-block:: java

      public static int binSearch(int key, int[] arr)
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
   :feedback_b: The compiler works through all of the recursive calls before it returns any strings. The exclamation point is returned first, followed by the letters of the original string in reverse order.
   :feedback_c: This string would be correct if the substring was returned before the recursive call. Because the recursive call occurs before the substring is returned, the compiler reaches the end of the string before it returns the letters, so the letters are reversed.
   :feedback_d: The exclamation point is printed before the letters of the word. The method makes recursive calls until the length of the string equals 0 and the base case has been reached. Then, an exclamation point is returned to the recursive calls, and the letters are returned after the exclamation point in reverse order.
   :feedback_e: This method makes multiple calls, removing the first letter from the string until the length of the string in the call equals 0. Then, it returns an exclamation point, followed by the letters of the string in reverse order.

   The ``wordScramble`` method is shown below. What is returned as a result of ``wordScramble("hello")``?

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
   :feedback_e: Each of these loops will print out multiples of 10 from 0 to 100, starting at 0 and ending at 10.

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
   :feedback_a: name and age are private instance variables in the Person class. Children classes do not have direct access to private variables in the parent class.
   :feedback_b: This answer correctly calls on the constructor in the Person class using super. Then, it correctly instantiates the instance variable grade, located in the Student class.
   :feedback_c: name and age are private instance variables in the Person class. Children classes do not have direct access to private variables in the parent class. Although the Person constructor has correctly been implemented using the super keyword, name and age cannot be accessed by the Student class.
   :feedback_d: II is correct, but name and age instance variables found in the Person class. Instance variables are not inherited and cannot be modified by sub classes.
   :feedback_e: name and age are private instance variables in the Person class. Although the constructor from the Person class may be implemented using super, the instance variables in the parent class are not directly accessible by the child class.

   The ``Person`` and ``Student`` classes are found below. Which of the following correctly replaces ``/* to be completed */`` in the ``Student`` class?

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
   :answer_e: [12, 8, 30, 7, 62, 45, 10, 3]
   :correct: c
   :feedback_a: This is the fully sorted array after eight passes. Reread the question and try again.
   :feedback_b: This is the result after three passes of insertion sort. Remember that in selection sort, only two values swap positions after every pass.
   :feedback_c: Since 62 is the largest value in the array, it swaps position with the value in index 0 of the array, 12. 45 is the next largest value, and it swaps with 8. 30 is the next largest value, and it swaps with 7. So, after three passes the list contains [62, 45, 30, 7, 12, 8, 10, 3].
   :feedback_d: This is the result after 4 passes of selection sort. Check your steps and try again.
   :feedback_e: This is the result after one merge of merge sort. Remember that in selection sort, only two values change postions at every pass.

   A list of integers containing ``[12, 8, 7, 30, 62, 45, 10, 3]`` is sorted from largest to smallest using a selection sort method. After three passes, what does the list look like?

.. mchoice:: qtnt3_10
   :answer_a: "My name is Piglet!"
   :answer_b: "Piglet"
   :answer_c: "My name is Animal!"
   :answer_d: "Animal"
   :answer_e: "Oink"
   :correct: a
   :feedback_a: At run-time, piglet is a Pig object. The compiler uses the overwritten getName method located in the Pig class, which prints out "My name is " before calling on the getName method in the Animal class.
   :feedback_b: This would be correct if the getName method had not been overwritten in the Pig class. Because piglet is a Pig object at run-time, the compiler uses the getName method from the Pig class.
   :feedback_c: Check the constructor method in the Pig class. The Pig class constructor uses the Animal class constructor that has one String parameter, not the default Animal constructor.
   :feedback_d: The constructor in the Pig class uses the Animal class constructor that takes in a string parameter, not the default constructor. The getName method has been overwritten in the Pig class, so "My name is " is printed before the name of the object.
   :feedback_e: Check the problem and note which method has been used. This is what is returned by the makeNoise method.

   Consider the classes ``Animal`` and ``Pig`` shown below. What is printed as a result of executing the code below?

   .. code-block:: java

      public class Animal
      {
          private String name;

          public Animal(String theName)
          {
              name = theName;
          }

          public Animal()
          {
              name = "Animal";
          }

          public String makeNoise()
          {
              return "";
          }
          ;

          public String getName()
          {
              return name;
          }
      }

      public class Pig extends Animal
      {
          public Pig(String theName)
          {
              super(theName);
          }

          public String makeNoise()
          {
              return "Oink!";
          }

          public String getName()
          {
              return "My name is " + super.getName() + "!";
          }

          public static void main(String[] args)
          {
              Animal piglet = new Pig("Piglet");
              System.out.print(piglet.getName());
          }
      }

.. mchoice:: qtnt3_11
   :answer_a: arr[i] / 2 = 2
   :answer_b: arr[i] % 2 == 1
   :answer_c: arr[i] / 2 == 1
   :answer_d: arr[i] % 2 == 0
   :answer_e: arr[i] / 2 == 0
   :correct: d
   :feedback_a: To check if a number is even, the modulo operator (%) should be used.
   :feedback_b: This method checks to see if a number is odd, not even. Because this method changes even numbers, not odd numbers, we do not need to find odd numbers.
   :feedback_c: To check if a number is even, the modulo operator (%) should be used.
   :feedback_d: If the value at arr[i] divided by two leaves a remainder of 0, then the number is even and should be reassigned.
   :feedback_e: To check if a number is even, the modulo operator (%) should be used.

   Consider the following method oddArray, which changes every even number value in the array to 0. By the end of the method, only odd numbers will be present in the array. Which line correctly completes  ``/* to be determined */`` to make the code work as intended?

   .. code-block:: java

      public void oddArray (int[] arr)
      {
          for (int i = 0; i < arr.length; i++)
          {
              //if the number at arr[i] is even, it becomes 0
              if( /* to be determined */ )
                  arr[i] = 0;
          }
      }

.. mchoice:: qtnt3_12
   :answer_a: 4
   :answer_b: 5
   :answer_c: 0
   :answer_d: 13
   :answer_e: 14
   :correct: e
   :feedback_a: Trace the recursive call and the return statements.
   :feedback_b: Examine the recursive call and the return statements. This method adds the values of the digits in a number; it does not find the number of digits.
   :feedback_c: Examine the return statements. Although the last digit of the number is 0, 0 is returned to the previous calls, where it is added to the other digits.
   :feedback_d: Try tracing the recursive calls again.
   :feedback_e: The method divides the number by 10 until it reaches the first dight. Then, it adds the values of all of the digits together.

   The method ``numFun`` is below. What is returned as a result of ``numFun(21560)``?

   .. code-block:: java

      public static int numFun(int num)
      {
         if (num / 10 == 0)
             return num;

         else
             return (num % 10) + numFun(num / 10);
      }

.. mchoice:: qtnt3_13
   :answer_a: I only
   :answer_b: II only
   :answer_c: III only
   :answer_d: I and II only
   :answer_e: II and III only
   :correct: a
   :feedback_a: This answer checks every index in the list, correctly selects the values in the list and compares them to zero. If a value is not equal to zero, the method returns false, and the array is NOT empty. Otherwise, the method returns true.
   :feedback_b: The variable list is a List, not an array. List values are not directly accessible, so list.get(i) should be used instead of list[i].
   :feedback_c: This method returns true if the list has at least one value in it that is not zero.
   :feedback_d: I is correct, but II is incorrect. Because list is not an array, the get method must be used to find the value at a certain index.
   :feedback_e: You can not use list[i] to get a value from a list so II is incorrect.  III would return true if at least one value in the list is not zero.

   Consider the method ``emptyList``, shown below. The method returns true if a ``List`` of integers is filled with zeros and false otherwise. Which of the following should replace ``/* to be completed */`` so that the method will work as intended?

   .. code-block:: java

      public boolean emptyList (List <Integer> list)
      {
           /* to be completed */
      }

      // I.
      for (int i = 0; i < list.size(); i++)
      {
          if (list.get(i) != 0)
              return false;
      }
      return true;

      // II.
      for (int i = 0; i < list.size(); i++)
      {
          if (list[i] != 0)
              return false;
      }
      return true;

      // III.
      for (int i = 0; i < list.size(); i++)
      {
          if (list.get(i) != 0)
              return true;
      }
      return false;

.. mchoice:: qtnt3_14
   :answer_a: (int) (Math.random() * 25) * 1
   :answer_b: (int) (Math.random() + 1) * 25
   :answer_c: (int) (Math.random() + 25) * 1
   :answer_d: (int) (Math.random()) * 25 + 1
   :answer_e: (int) (Math.random() * 25) + 1
   :correct: e
   :feedback_a: This returns a value between 0 and 24, not 1 and 25. This would be correct if the last part of the expression had + 1 instead of * 1.
   :feedback_b: This always returns 25. Math.random() + 1 becomes 1 when it is cast to an integer, and 1 * 25 equals 25.
   :feedback_c: This always returns 25. Math.random() produces a number between 0 and 1, so when it is added to 25 and cast as an integer, the number always becomes 25.
   :feedback_d: This always returns 1. Math.random() produces a value between 0 and 1, so casting Math.random() to an int results in 0. 0 * 25 remains 0, and 0 + 1 equals 1.
   :feedback_e: Math.random() * 25 finds a random double value between 0 and 24.9999. This is cast to an integer, and 1 is added so the range becomes 1 to 25.

   You need to find a random integer in the range 1 to 25, inclusive. Which of the following always returns a value that satisfies this condition?


.. mchoice:: qtnt3_15
   :answer_a: 5
   :answer_b: 7
   :answer_c: 10
   :answer_d: 12
   :answer_e: 128
   :correct: b
   :feedback_a: This is not enough passes to guarantee that a name is not present. 2 ^ 5, is 32, which is not enough elements. Remember that binary search takes log2 (number of elements) passes at most to find an item.
   :feedback_b: 2 ^ 7 is 128, which is greater than 120. 120 passes will guarantee that the name is not present in the list. Binary search takes log2 (number of elements) at most to find an item.
   :feedback_c: Yes, you would know by 10 passes, but there is a better answer. Remember that binary search takes log2 (number of elements) passes at most to find an item.
   :feedback_d: Yes, you would know by 12 passes, but not all 12 passes are required. Remember that binary search takes log2 (number of elements) passes at most to find an item.
   :feedback_e: This would be true if the list was searched using sequential search. Binary search only requires log2 (number of elements) at most to find an item.


   A list of 120 names has been sorted in alphabetical order. Using a binary search method, what is the minimum number of passes needed to confirm that a name is not in the list?


.. mchoice:: qtnt3_16
   :answer_a: When the length of str is less than 15
   :answer_b: When the length of str is greater than or equal to 15
   :answer_c: When the length of str is equal to 0
   :answer_d: For all string inputs
   :answer_e: For no string inputs
   :correct: e
   :feedback_a: If the string length is less than 15, "s" will be printed, but the recursive call will still be made.
   :feedback_b: This would be correct if the recursive call was located in an else statement. If the string length is 15 or greater, "s" will not be printed, but the recursive call will still occur.
   :feedback_c: If the string has length 0, the if statement will occur and "s" will be printed, but the recursive call will still occur.
   :feedback_d: Check the recursive call. The method is always called recursively, regardless of the string length.
   :feedback_e: There is no base case present in this method that stops the recursive calls. This method will continue until the compiler runs out of memory. You could fix this code by placing the recursive call in an else statement or creating a base case to end the call.


   The method ``recur`` is shown below. In which case will ``recur`` terminate without error?

   .. code-block:: java

      public void recur (String str)
      {
           if (str.length() < 15)
               System.out.print("s");

           recur(str + "!");
      }

.. mchoice:: qtnt3_17
   :answer_a: I only
   :answer_b: II only
   :answer_c: III only
   :correct: a
   :feedback_a: A SeedlessGrape IS-A fruit, so the inheritance relationship is correct. The constructor for the SeedlessGrape class has two string parameters.
   :feedback_b: The Grape class constructor has two parameters. Although a Grape IS-A fruit, the Grape constructor must have two string parameters to compile without error.
   :feedback_c: A Grape is NOT a SeedlessGrape. The inheritance relationship is incorrect, and III does not compile. Object a is a Fruit at compile-time and a SeedlessGrape at run-time. A SeedlessGrape IS-A Fruit, so the code compiles.

    Consider the ``Fruit``, ``Grape``, and ``SeedlessGrape`` classes shown below. Which of the following object declarations will compile without error?

   .. code-block:: java

      public class Fruit
      {
          private String name;
          private boolean seeds;

          public Fruit(String theName)
          {
              name = theName;
              seeds = true;
          }

          public void setSeeds()
          {
              seeds = !seeds;
          }

      }

      public class Grape extends Fruit
      {
          private String color;

          public Grape(String theName, String theColor)
          {
              super(theName);
              color = theColor;
          }
      }

      public class SeedlessGrape extends Grape
      {
          public SeedlessGrape(String theName, String theColor)
          {
              super(theName, theColor);
              setSeeds();
          }
      }

      I. Fruit a = new SeedlessGrape("grape", "red");
      II. Grape b = new Grape("grape");
      III. SeedlessGrape c = new Grape("grape", "green");

.. mchoice:: qtnt3_18
   :answer_a: System.out.print(arr[x] + " ");
   :answer_b: System.out.print(x + " ");
   :answer_c: System.out.print(x.toString() + " ");
   :answer_d: System.out.print(row[x] + " ");
   :answer_e: System.out.print(row.get(x) + " ");
   :correct: b
   :feedback_a: x refers to a String object, not an index in the array. x can be printed directly, because the second for-loop individually selects Strings in each row of the array.
   :feedback_b: This method uses two for-each loops. The variable x refers to a single String located in the array, so only x needs to be printed. This method will loop through the entire 2-D array, printing out all the names in the matrix.
   :feedback_c: This will compile without error, but the toString is unnecessary. x is already a String and can be printed directly.
   :feedback_d: x refers to a String object, not an index in the array row. x can be printed directly.
   :feedback_e: x is a String, not an index.

   The method ``printNames`` is located below. It prints out all the names in a 2-D matrix. Which of the following correctly replaces ``/* to be determined */`` to make the method work as intended?

   .. code-block:: java

      public void printNames (String[][] arr)
      {
           for (String[] row : arr)
           {
               for (String x : row)
               {
                   /* to be determined */
               }

               System.out.println();
           }
      }

.. mchoice:: qtnt3_19
   :answer_a: (x < 10) && (x > 5)
   :answer_b: (x > 10) && (x <=5)
   :answer_c: (x <= 10) && (x > 5)
   :answer_d: (x <= 10) || (x > 5)
   :answer_e: (x > 10) || (x <= 5)
   :correct: d
   :feedback_a: Use A and B to represent the expressions -- A becomes (x > 10), B becomes (x <= 5). ! (A && B) is NOT equivalent to (!A && !B). Also, (x < 10) is not correct negation for (x > 10); the correct negation is (x <= 10).
   :feedback_b: Use A and B to represent the expressions -- A becomes (x > 10), B becomes (x <= 5). ! (A && B) is NOT equivalent to (A && B).
   :feedback_c: Use A and B to represent the expressions -- A becomes (x > 10), B becomes (x <= 5). ! (A && B) is NOT equivalent to (!A && !B). The AND should be changed to an OR.
   :feedback_d: Use A and B to represent the expressions -- A becomes (x > 10), B becomes (x <= 5). ! (A && B) is equivalent to (!A || !B), according to DeMorgan's principle. The negation of (x > 10) is (x <= 10), and the negation of (x <= 5) is (x > 5).
   :feedback_e: Use A and B to represent the expressions -- A becomes (x > 10), B becomes (x <= 5). ! (A && B) is NOT equivalent to (A || B). Both A and B should also be negated.

   Which of the following is equivalent to ``! ( (x > 10) && (x <= 5) )``?

.. mchoice:: qtnt3_20
   :answer_a: 12
   :answer_b: 243
   :answer_c: 81
   :answer_d: 15
   :answer_e: 27
   :correct: c
   :feedback_a: This would be correct if the recursive method called 3 + mystery (num - 1). Check the recursive call and try again.
   :feedback_b: This method calculates 3 ^ num. 3 ^ 4 is not equal to 243, so check your tracing and try again.
   :feedback_c: This method calculates 3 ^ num. It goes through the recursive calls until num reaches 1, then 3 is multiplied by itself (num) times. The method has been called four times, and 3 ^ 4 is 81.
   :feedback_d: This would be correct if the recursive method called 3 + mystery (num - 1), and num was equal to 5. Check the base case and the parameter and try again.
   :feedback_e: This method calculates 3 ^ num. 3 ^ 4 is not equal to 27, so check your tracing and try again.


   Consider the method ``mystery``. What is returned as a result of ``mystery(4)``?

   .. code-block:: java

     public int mystery (int num)
     {
         if (num == 1)
             return 3;
         else
             return 3 * mystery (num - 1);
     }


