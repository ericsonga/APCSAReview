.. qnum::
   :prefix: 14-5-
   :start: 1
   
Practice Exam 5 for the AP CS A Exam
-------------------------------------

The following problems are similar to what you might see on the AP CS A exam.  Please answer each to the best of your ability. 

.. mchoice:: qt5_1
   :answer_a: (a >= b) && (b >= 0)
   :answer_b: !(a > b) || !(b >= 0)
   :answer_c: (a >= b) || (b > 0)
   :answer_d: (a > b) || (b >= 0)
   :answer_e: (a > b) && (b >= 0)
   :correct: d
   :feedback_a: The "!" would negate everything inside the parentheses. There are a few mistakes here. The opposite of <= is not >= and the opposite of AND is OR.
   :feedback_b: This anwser is incorrect due to the fact that both of the expressions inside the parentheses were altered. If we wanted to distribute the negation symbol "!" then we would have to leave these arguments the same.  
   :feedback_c: This expression is incorrect because we changed <= to >= instead of >. In addition, < in the second argument should have been changed to >=. 
   :feedback_d: Using DeMorgan's Law we know that an equivalent expression to the given one is one where everything inside the paratheses is negated. This includes our AND statement (which becomes an OR) and everything inside both parentheses.
   :feedback_e: Here we forgot to negate our AND (&&) into an OR (||). 

   Which of the following options will be equivalent to the given logical statement? Recall DeMorgan's Law. 
   
   .. code-block:: java

     !((a <= b) && (b < 0))


.. mchoice:: qt5_2
   :answer_a: 9
   :answer_b: 81
   :answer_c: 3
   :answer_d: 243
   :answer_e: 27
   :correct: b
   :feedback_a: This would be true if we called mystery(2).
   :feedback_b: The argument is 4 so will have 4 recursive calls and then return 3 when we get to mystery(1). Each call will multiply our result by 3, so you can think of this as 3^n where n is this functions' argument.  
   :feedback_c: This value will only get returned when we call mystery(1), since we won't have any recursive calls.
   :feedback_d: This value will only get returned when we call mystery(5). 
   :feedback_e: This value will only get return when we called mystery(3). If you got this value you probably did an extra recursive call. 

   Consider the following recursive method. What does mystery(4) return? 
   
   .. code-block:: java

      public int mystery(int m) {

        if (m == 1) {
    	    return 3;
        } else {
    	    return 3 * mystery(m - 1);
        }
      }


.. mchoice:: qt5_3
   :answer_a: II only
   :answer_b: I only
   :answer_c: I and II only
   :answer_d: II and III only
   :answer_e: III only
   :correct: a
   :feedback_a: If an array is already sorted from smallest to largest then we do not need to move anything in the array and we would only need to go through each element at most once, resulting a very efficient performance from insertion sort. 
   :feedback_b: An array in reverse order is actually the worst case for insertion sort because we would need to move everything to make it in order from smallest to largest.  
   :feedback_c: II is correct, but number I will actually be the worst case scenario for insertion sort since we will have an array in reverse order and we would need to keep on checking parts of the array which are already sorted. 
   :feedback_d: While II is the correct anwser, a randomly order array when sorted with insertion sort will have an average runtime.
   :feedback_e: When the array is not sorted this will produce the average run time for insertion sort.

   In which of these cases will insertion sort perform best?

   .. code-block:: java
   
      I.   An array that is in reverse order (from largest to smallest). 
      II.  An array that is in sorted order already (from smallest to largest). 
      III. An array that is in random order (not already sorted).

.. mchoice:: qt5_4
   :answer_a: I only
   :answer_b: II only
   :answer_c: II and III only
   :answer_d: I and II only
   :answer_e: I, II, and III
   :correct: d
   :feedback_a: Loop III will have the reverse output from the one we desire. This is due to the fact that we are decrementing from the max value down to 0 instead of incrementing from 0 until we get to max.
   :feedback_b: Loop I will produce this output, but it is not the only loop to output this.  
   :feedback_c: Loop II is correct, but loop III will produce the reverse output, 43210.
   :feedback_d: Both of these loops will have the correct output. They iterate (and print each value) starting from 0 until the max value which we defined earlier in our code. 
   :feedback_e: While loop I and II will produce the correct output, loop III will actually produce the reverse of the correct output.

   Which of these loops will output 01234?  

   .. code-block:: java
    
      int max = 5;
      
      //Loop I
      for (int i = 0; i < max; i++) {
         System.out.print(i);
      }


      //Loop II
      int j = 0;
      while (j < max)
      {
         System.out.print(j);
         j++;
      }

      
      //Loop III
      int k = 0;
      for (int i = max; i > 0; i--) {
         System.out.print(i);
      }

.. mchoice:: qt5_5
   :answer_a: First: 15 Last: 29
   :answer_b: First: 15 Last: 30
   :answer_c: First: 16 Last: 29
   :answer_d: First: 16 Last: 30
   :answer_e: First: 16 Last: 28
   :correct: d
   :feedback_a: We add 1 to value before actually printing it, so the first value printed will be 16. The last time through the loop the value will be 29 (less than 30) but then the code will add one so it will print 30.
   :feedback_b: We add 1 to value before actually printing it, so the first value printed will be 16.
   :feedback_c: The last time through the loop the value will be 29 (less than 30) but then the code will add one so it will print 30.
   :feedback_d: The code adds one to value before the value is printed so 16 will be the first value printed.   The last time through the loop the value will be 29 (less than 30) but then the code will add one so it will print 30.
   :feedback_e: The last time through the loop the value will be 29 (less than 30) but then the code will add one so it will print 30.

   Consider the following block of code. What are the first and last numbers printed after running the code?  

   .. code-block:: java
   
      int value = 15;
      while (value < 30) {
          value++;
          System.out.println(value);
      }

.. mchoice:: qt5_6
   :answer_a: 25
   :answer_b: 15
   :answer_c: 125
   :answer_d: 64
   :answer_e: 625
   :correct: c
   :feedback_a: This would be correct if we only had one inner for loop, but there are two.
   :feedback_b: Each call to the the innermost loop will add 5 to s. Since it is called more than 3 times, s will not be 15. 
   :feedback_c: The number of times a loop executes is (largest value in loop - smallest value in loop + 1) each loop executes (5 - 1 + 1 = 5) times.  When you have nested loops you multiply the number of times each loop executes.  So the result is 5 for the outer loop * 5 for the middle loop * 5 for the innermost loop.
   :feedback_d: This would be correct if we called solution(4) or the conditions to stop each loop were just less than, and not less than or equal to. 
   :feedback_e: If you got this value you probably made one extra call to the each of the loops, notice that the loops start at 1 and not 0. 

   Consider the following block of code. What value is returned from solution(5)?

   .. code-block:: java
   
      public int solution(int limit) {
        int s = 0;

        for (int outside = 1; outside <= limit; outside++){
            for (int middle = 1; middle <= limit; middle++) {
                for (int inside = 1; inside <= limit; inside++) {
                    s++;
                }
            }
        }
        return s;
      }

.. mchoice:: qt5_7
   :answer_a: I and II are exactly equivalent for all input values n. 
   :answer_b: I and II are only equivalent when n is an even number. 
   :answer_c: I and II are only equivalent when n = 0 
   :answer_d: I and II are equivalent for all values except when n = 0
   :answer_e: I and II are never going to have the exact same outputs. 
   :correct: e
   :feedback_a: I and II will never be equivalent because because count is incremented after it is printed in Code block I and before it is printed in Code block II.
   :feedback_b: I and II are not equivalent when n is even.
   :feedback_c: When n = 0  Code block I will print out 0 while Code block 2 will print out 1. 
   :feedback_d: The code blocks never output the same value.
   :feedback_e: I and II will never be equivalent because count is incremented after it is printed in Code block I and before it is printed in Code block II.

   Given that both count and n are integer values, which statement is true about both code statements? 

   .. code-block:: java
   
      // Code block I
      for (count = 0; count <= n; count++) {
          System.out.println(count);
      }

      //Code block II
      count = 0;
      while (count <= n) {
          count = count + 1;
          System.out.println(count);
      }

.. mchoice:: qt5_8
   :answer_a: I only
   :answer_b: II only
   :answer_c: III only 
   :answer_d: I and II
   :answer_e: II and III
   :correct: c
   :feedback_a: A subclass needs to specify its own constructors.  
   :feedback_b: A subclass has the ability to add new methods and variables that are unique to it (meaning its parent class dosen't contain them)
   :feedback_c: Subclasses can overide public methods from their parent classes to specialize behavior.
   :feedback_d: Neither of these statements are true.
   :feedback_e: Statement III is correct, but not statement II. 

   Consider the following class declarations. Which statements are true? 

   .. code-block:: java
     
      public class Animal {
       /* Some code */
      }

      public class Cat extends Animal {
         /* Some code */
      }

     I. Cat inherits the constructors of Animal
     II. Cat cannot add new methods and private instance variables that Animal does not have. 
     III. Cat can override existing public methods of Animal

.. mchoice:: qt5_9
   :answer_a: k
   :answer_b: k + 1
   :answer_c: k - 1
   :answer_d: 1
   :answer_e: 0
   :correct: b
   :feedback_a: This would be the case if i had the initial value 1 and arr[i] < someValue would be true for all i values.  
   :feedback_b: If arr[i] < someValue for all i from 0 to k, HELLO will be printed on each iteration of the foor loop. This would be k + 1 times. 
   :feedback_c: This would be the case if i had the initial value 2 and arr[i] < someValue would be true for all i values. 
   :feedback_d: This would be the case if k would be equal to 0 or more and only one element in the array would fulfill the condition that arr[i] < someValue.
   :feedback_e: This would be the case if k would be equal to 0 and no element in the array would fulfill the condition that arr[i] < someValue

   Consider the following code. What is the maximum amount of times that HELLO could possibly be printed?

   .. code-block:: java
     
      for (int i = 0; i <= k; i++) {
         if (arr[i] < someValue) {
           System.out.print("HELLO")
         }
      }

.. mchoice:: qt5_10
   :answer_a: It will never produce a runtime error. 
   :answer_b: It will always produce a runtime error. 
   :answer_c: Only when the length of the input string is greater than or equal to 16.
   :answer_d: Only when an empty string is input. 
   :answer_e: Whenever the input string length is less than 16. 
   :correct: b
   :feedback_a: Since there is no terminating condition surrounding our recursive method call (because the call lies outside of our if statement), we will keep doing recursive calls until we eventually get a runtime error. 
   :feedback_b: Since there is no statement that can terminate the recursive call to stringRecursion (the length of the string s will increase until it is greater than 16, but the recursive call will keep happening because the recursive call is outside the if statement) the computer will keep doing recurisve calls until it runs out of memory and a runtime error will happen. 
   :feedback_c: This would be correct, but we have to keep in mind that the infinite recursion will occur even if the length of the string is less than 16. The only different would be that something would be getting printed out to the console in the case that the lenght of s is less than 16.
   :feedback_d: The length of the string will not matter in this case because the recursive call to stringRecursion will always happen, since the recursive call lies outside the terminating if statement. The string length will only determine if the string s is printed out to the console or not. 
   :feedback_e: We will get runtime errors regardless of the length of the string s. This is due to the fact that the recursive call lies outside our terminating if condition. If the length of the string s is less than 16 then we will get something printed out to the console until the length of s becomes greater than 16, and then we will continue in a infinite recursion.

   When will the method stringRecursion produce a runtime error? 

   .. code-block:: java
     
      public void stringRecursion(String s) {

        if (s.length() < 16) {
          System.out.println(s);
        }
        stringRecursion(s + "*");
      }

.. mchoice:: qt5_11
   :answer_a: I only
   :answer_b: II only
   :answer_c: II and III only
   :answer_d: III only
   :answer_e: I, II and III
   :correct: c
   :feedback_a: This method call works because class C inherits all the methods of class B. This will not produce an error. 
   :feedback_b: This method will produce an error because class B (the superclass) does not inherit the methods of class C due to the fact that class C is its subclass. 
   :feedback_c: Method II will produce an error because class B (the superclass) does not inherit the methods of class C due to the fact that class C is its subclass. Method III will produce an error because of the parameter it takes in. objectB is not a class C type object which is what the method definition for method III required. 
   :feedback_d: This method produces an errror but method II will also produce an error.
   :feedback_e: Methods II and III will both produce errors but method I works because class C inherits all the methods of class B. This will not produce an error.

   Consider the following interface and class definitions. Which of I, II and III would cause an error when used in place of the missing code in the main method?
    

   Which of the following method calls would produce an error when used to replace "//Missing code" in the main method?
   .. code-block:: java

      public interface A {
        void method1();
      }

      public class B implements A {

          public void method1(){
            /* implementation */

            //Instance variables and other methods not shown
          }
      }

      public class C extends B {
        public void method2(C o) {
        /* implementation */ 
        }

        //Instance variables and other methods not shown

        public static void main(String[] args)
        {
          C objectC = new C();
          B objectB = new B();
          //Missing code
        }
      }

      /* Options

      I objectC.method1();
      II objectB.method2(objectC);
      III objectC.method2(objectB);

      */

.. mchoice:: qt5_12
   :answer_a: I only
   :answer_b: II only
   :answer_c: III only
   :answer_d: II and III
   :answer_e: I and II 
   :correct: c
   :feedback_a: Because List is an abstract class you can not create a new object of the type List. 
   :feedback_b: The type parameter in a generic ArrayList must be a class type, not a primitive. int is a primitive.
   :feedback_c: Since an ArrayList is a List, we can make a List object be an ArrayList object. In this case we would end up with an ArrayList of String elements. 
   :feedback_d: III is correct but II will cause an error since we cannot use a primitive (int) as the type parameter in a generic ArrayList.
   :feedback_e: Both of these solutions will cause an error. 

   Which of these declarations will not cause an error? 

   .. code-block:: java
     
      I ArrayList<String> stringList = new List<String>();
      II List<int> intList = new ArrayList<int>();
      III List<String> stringList = new ArrayList<String>();

.. mchoice:: qt5_13
   :answer_a: In a program that uses A, more than one instance of A can be created. 
   :answer_b: A program that uses A must have another class that is a subclass of A. 
   :answer_c: A needs to have a constructor with two parameters in order to initialize v1 and v2.
   :answer_d: Any program that uses class A will have an error since abstract classes cannot contain public instance variables.
   :answer_e: One or more methods in A must be declared abstract.
   :correct: b
   :feedback_a: Instances of abstract classes cannot be created. 
   :feedback_b: A program that uses an abstract class must have at least one subclass that is npt abstract, due to the fact that instances of abstract classes cannot be created. 
   :feedback_c: v1 and v2 could be initiliazed in a default constructor that takes in no parameters.
   :feedback_d: An abstract class can contain any number of public, private, and protected instance variables. 
   :feedback_e: The purpose behind abstract classes is having a class that cannot be instantiated. An abstract class does not need to have any abstract method as this is unrelated to their purpose.

   What is true about A? 

   .. code-block:: java
     
      public abstract class A {
        public int v1;
        public int v2;

        //methods of the class
      }

.. mchoice:: qt5_14
   :answer_a: Matrix 1
   :answer_b: Matrix 2 
   :answer_c: Matrix 3
   :answer_d: Matrix 4
   :answer_e: An ArrayIndexOutOfBoundsException will be thrown.
   :correct: c
   :feedback_a: Since our inside for loop will only go from t = 0 until t < i (and i begins at 0) we can see that we will not be printing out every single element of our 4x4 matrix.
   :feedback_b: This anwser is not correct because our inside for loop will only go from t = 0 until t < i and, as such, the entire first row of our matrix will be ignored since this is when both t and i = 0 and t is not less than i. This is the condition needed to go inside our inner for loop. 
   :feedback_c: When i = 0, the inner for loop does not get executed and the entire first row our matrix is ignored. When i = 1 t goes from 0 to 0 and the element matrix[1][0] will be printed out. Similarly, when i = 2 we will print out elements matrix[2][0] and matrix[2][1]. Finally, when i = 3, we will print out matrix[3][0], matrix[3][1] and matrix[3][2].
   :feedback_d: This would be the correct anwser is we kept incrementing i by one (the outer for loop) but the inner for variable t would always be 0. We would get the first element of each row. 
   :feedback_e: We will not get an index out of bounds exception since we made sure to increment i only until the max length of the array and the other variable we use to index, t, will only increase while it is still less than i.

   Suppose that the following method takes in a two dimensional array called matrix. After the method call printMatrix(mat) what will the output be? Possible options are listed below the method definition.

   .. code-block:: java
      
      /* matrix will originally look like this: 
      7654
      3210
      4567
      0123
      */
      public static void printMatrix(int[][] matrix) {

        for (int i = 0; i < mat.length; i++) {

          for (t = 0; t < i; t++) {
            System.out.println(mat[i][t]);
          }
          System.out.println();
        }
      }

      /* Possible Matrices that will be printed out.

      Matrix 1:

      7654
      3210
      4567
      0123

      Matrix 2:
      
      7
      32
      456
      0123

      Matrix 3:

      3
      45
      012

      Matrix 4:

      7
      3
      4
      0
      */


.. mchoice:: qt5_15
   :answer_a: [0, 1, 2, 3, 5, 7]
   :answer_b: [0, 1, 4, 3, 5, 7]
   :answer_c: [0, 8, 3, 4, 5, 7]
   :answer_d: [0, 8, 4, 3, 5, 7]
   :answer_e: [5, 7, 0, 8, 4, 3]
   :correct: d
   :feedback_a: This is what the ArrayList will look like after the first two operations in the code.
   :feedback_b: This is what the ArrayList will look like before we set the element at index 1 to be 8.
   :feedback_c: This is what would have happened if we thought randomNum was actually 3 and we added the number 4 at the incorrect index.
   :feedback_d: After we add 5 and 7 to the end of the array we remove the element at index 2 (which was 2). Then we use the index we had previously obtained (also 2) to add a new element 4. This pushes the element already at that index (and the ones after it) one space to the right. Fianlly, we set the element at index 1 to be 8. This erases the previous term there and simply puts a new one.
   :feedback_e: This is what we would have happened if we thought the add method would add elements to the beggining of the ArrayList and not the end.

   
   If randomList is an ArrayList of integers is initally equal to {0, 1, 2, 3}, what will randomList look like after the following code is executed?

   .. code-block:: java

     randomList.add(5);
     randomList.add(7);
     int randomNum = randomList.get(2);
     randomList.remove(2);
     randomList.add(randomNum, 4);
     randomList.set(1, 8);


.. mchoice:: qt5_16
   :answer_a: edcba
   :answer_b: edcb
   :answer_c: Nothing is printed because an IndexOutOfBoundsException is thrown.
   :answer_d: feeddccbba
   :answer_e: fededcdcbcba
   :correct: a
   :feedback_a: The substring method takes in two arguments, a beggining index (which is inclusive) and an ending index (which is exclusive). The first substring is called is from index 1 (counter + 1) index 2 (counter + 2). However the second index is not included so its just index 1 which is e. We then simply keep getting every indidual element from the string one by one until the end of the string. 
   :feedback_b: This substring is mostly correct but it ends early and is missing the a character at the end.  
   :feedback_c: This will not happen because, even though we try to do a substring at index counter + 2, because the index counter + 2 will never be included and the final element included in the substring will be "a" which is the last element in the string.  
   :feedback_d: The first substring element will be called at index 1 (which is when counter = 0  and we begin the substring at counter + 1) and so f will not be printed out. Also because our substring will have a length of 1, we can see that no character will be repeated in the substring. 
   :feedback_e: This is what we would have happened if the substring had started at index counter (and not counter + 1).

   
   Consider the following code segment. What will be printed as a result of executing the code below? 

   .. code-block:: java
     
      String str = "fedcba";
      int counter = 0;
      while(counter < str.length() - 1) {
        System.out.print(str.substring(counter + 1, counter + 2));
        counter++;
      }

.. mchoice:: qt5_17
   :answer_a: C c1 = new C();
   :answer_b: B b1 = new B();
   :answer_c: B c2 = new C();
   :answer_d: B b3 = new B(10);
   :answer_e: C c3 = new C(24);
   :correct: e
   :feedback_a: Here we are simply creating a new instance of class C by calling the appropiate constructor. Nothing is wrong here.  
   :feedback_b: Here we are simply creating a new instance of class B by calling the appropiate constructor. Nothing is wrong here.
   :feedback_c: Since class C is a subclass of class B this is a valid way of creating a new B object. 
   :feedback_d: This statement is creating a new object using the second constructor of the B class. This is also a valid way to create a B object. 
   :feedback_e: Even though class C has a super class with a constructor that takes in a single int argument, class C does not have this type of constructor and as such cannot create a new object when taking it a single paramete (class C objects may only be initiliazed with no arguments)

   
   Consider the following class declarations. Which of the following statements will not compile? 

   .. code-block:: java

      public class B {

       public int myValue;

       public B() {
         myValue = 0;
       }

       public B(int x) {
         myValue = x;
       }

      }

      public class C extends B { 

        public C() {
          super(0);
        }
      }

.. mchoice:: qt5_18
   :answer_a: C c1 = new C();
   :answer_b: B b1 = new B();
   :answer_c: B c2 = new Sub();
   :answer_d: B b3 = new B(10);
   :answer_e: C c3 = new C(24);
   :correct: e
   :feedback_a: Here we are simply creating a new instance of class C by calling the appropiate constructor. Nothing is wrong here.  
   :feedback_b: Here we are simply creating a new instance of class B by calling the appropiate constructor. Nothing is wrong here.
   :feedback_c: Since class C is a subclass of class B this is a totally valid way of creating a new B object. 
   :feedback_d: This statement is creating a new object using the second constructor of the B class. This is also a valid way to create a B object. 
   :feedback_e: Even though class C has a super class with a constructor that takes in a single int argument, class C does not have this type of constructor and as such cannot create a new object when taking it a single parameter (class C objects may only be initiliazed with no arguments)

   
   Consider the following method. This method is an example of..? 

   .. code-block:: java
     
      /* PRECONDITION: every element in the array contains integers */ 

      public static int someMethod(int[] a, int n, int value) {

        if (n == 0) {
          return -1;
        } else {

            if (a[n - 1] == value) {
              return n - 1;
            } else {
              return someMethod(a, n - 1, value);
            }
        }
      }

.. mchoice:: qt5_19
   :answer_a: I only
   :answer_b: II only
   :answer_c: III only
   :answer_d: I and III
   :answer_e: II and III
   :correct: e
   :feedback_a: Merge sort utilizes a temporary array when merging arrays, which means it actually uses more storage space than insertion sort. 
   :feedback_b: Insertion sort is more efficient for a small array because merge sort has extra overhead from the recursive function calls that cause it to take longer. 
   :feedback_c: Merge sort uses the "divide and conquer" approach to sort an array. This will end up being more efficient than insertion sort in the case where we have long unordered lists or arrays. 
   :feedback_d: Statement III is true but statement I is false since mergesort utilizes a temporary array and will actually require more storage space than insertion sort. 
   :feedback_e: Merge sort uses the "divide and conquer" approach to sort an array. This will end up being more efficient than insertion sort in the case where we have long unordered lists or arrays. However if we have a very small almost sorted array, then insertion sort will outperform merge sort. 

   
   Which of the following are true about using insertion sort versus using merge sort?

   .. code-block:: java
     
      I. Insertion sort requires more storage space than mergesort.  
      II. Insertion is only more efficient than mergesort in the case that we have a very small and nearly sorted array. 
      III. Insertion sort is almost always less efficient than mergesort.

.. mchoice:: qt5_20
   :answer_a: I
   :answer_b: II
   :answer_c: III
   :answer_d: IV
   :answer_e: V
   :correct: e
   :feedback_a: The method alter shifts all the columns starting at column c + 1 and shifting back to entry to the left of c + 1. This matrix is what would result if c was three and we were shifitng the number there to the two spots before it. 
   :feedback_b: Although some numbers are overwriten in the matrix, the matrix will still be 3x4 matrix.  
   :feedback_c: Although some numbers are overwriten in the matrix, the matrix will still be 3x4 matrix.
   :feedback_d: This is what would happen if we were shifting rows instead of columns in the alter method. 
   :feedback_e: Method alter shifts all the columns, starting at column c + 1, one column to the left. It also overwrites column c. Here are the replacements made for the method call alter(1): matrix[0][1] = matrix[0][2], matrix[0][2] = matrix[0][3], matrix[1][1] = matrix[1][2], matrix[1][2] = matrix[1][3], matrix[2][1] = matrix[2][2], matrix[2][2] = matrix[2][3]

   
   What would the contents of matrix, a 2-D array of integers, be after a call to alter(1)? The method alter is defined below. 
 

   .. code-block:: java
     
      private int[][] matrix;

      /* matrix looks like this initially
      1 3 5 7
      2 4 6 8
      3 5 7 9
      */

      public void alter(int number) {
        for (int i = 0; i < matrix.length; i++) {
          for (int j = c + 1; j < matrix[0].length; j++) {
            matrix[i][j - 1] = matrix[i][j];
          }
        }
      }

    /*Possible ways matrix will look after the alter(1) call:

    I. 1 7 7 7
       2 8 8 8
       3 9 9 9

    II. 1 5 7
        2 6 8
        3 7 9

    III. 1 3 5 7
         3 5 7 9
    
    IV. 1 3 5 7
        3 5 7 9
        3 5 7 9

    V. 1 5 5 7
       2 6 8 8
       3 7 9 9

    */
     
