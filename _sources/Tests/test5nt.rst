.. qnum::
   :prefix: 12-6-
   :start: 1

Exam 5 for the AP CSA Exam (not timed)
----------------------------------------

The following problems are similar to what you might see on the AP CSA exam.  Please answer each to the best of your ability.

.. mchoice:: qtnt5_1
   :answer_a: I only
   :answer_b: II only
   :answer_c: III only
   :answer_d: I and II only
   :answer_e: II and III only
   :correct: e
   :feedback_a: We don't know the value of z
   :feedback_b: II is true but there is (are) other statements that evaluate to true
   :feedback_c: III is true but there is (are) other statements that evaluate to true
   :feedback_d: For I, we don't know the value of z
   :feedback_e: III executes to true if either a||b true, III is true because x-y will become 0 then 0 * a *b... = 0

   Suppose ``x, y, and z`` are variables of type ``int``. Consider the following three conditions

   I. (x == y) && (y == z)  && (x == z)
   II. (x==y) || (y==z) && (x == z)
   III. (x - y) * (x - z) * (y - z) == 0

   Which of these conditions is (are) always true if x == y is true?

.. mchoice:: qtnt5_2
   :answer_a: 1
   :answer_b: 8
   :answer_c: 8*7*6*5*4*3*2
   :answer_d: 8*6*4*2
   :answer_e: 7*5*3
   :correct: d
   :feedback_a: n != 0
   :feedback_b: There are some recursive calls since n % 2 != 1
   :feedback_c: Subtracts 2 from original number of 8, so could never call an odd number to be multiplied
   :feedback_d: Will recursively call 8 -2, then 6-2, and lastly 4-2
   :feedback_e: Subtracts 2 from original number of 8, so could never call an odd number to be multiplied

   Consider the following method. What will be returned by a call to ``multiply(8)``?

   .. code-block:: java

     public int multiply(int n)
     {
         if (n == 0)
             return 1;
         else if(n % 2 == 1)
             return n;
         else
             return n * multiply(n - 2);
     }

.. mchoice:: qtnt5_3
   :answer_a: double x = 0.6 * Math.random( ) + 0.4;
   :answer_b: double x = 0.4 * Math.random( ) + 0.6;
   :answer_c: double x = Math.random( ) - 0.4;
   :answer_d: double x = (double) (Math.random( ) * 0.4);
   :answer_e: double x = (double) (Math.random( ) + 0.6);
   :correct: b
   :feedback_a: This gives .4 <= x <1
   :feedback_b: Math.random() returns 0(inclusive) to 1(exclusive) so this makes 0 + .6 the lower bound, and .99999 the upper bound
   :feedback_c: This gives -.4 <= x < 6
   :feedback_d: This doesn't ensure lower bound and upper bound
   :feedback_e: This doesn't ensure lower bound and upper bound

   Which of the following code segments correctly stores in ``x`` a random real number such that ``0.6 <= x < 1``?

.. mchoice:: qtnt5_4
  :answer_a: -4
  :answer_b: 4
  :answer_c: 6
  :answer_d: 8
  :answer_e: -6
  :correct: c
  :feedback_a: Trace out the recursive calls. See https://tinyurl.com/AP19-Q6
  :feedback_b: Trace out the recursive calls. See https://tinyurl.com/AP19-Q6
  :feedback_c: Correct!
  :feedback_d: Trace out the recursive calls. See https://tinyurl.com/AP19-Q6
  :feedback_e: Trace out the recursive calls. See https://tinyurl.com/AP19-Q6

  Suppose methods ``f1`` and ``f2`` are defined as follows. What value is returned from the call ``f1(5)``?

  .. code-block:: java

    public int f1(int x)
    {
        if(x == 0)
            return 0;
        else
            return f2(x -2);
    }

    public int f2(int x)
    {
        if(x == 1)
            return 1;
        else
            return f1(x + 1) + x;
    }

.. mchoice:: qtnt5_5
      :answer_a: It is legal for the value of a static variable to be changed in a constructor.
      :answer_b: The constructor in a subclass must use the keyword super to initialize the private instance variables from its superclass.
      :answer_c: A constructor has no return type.
      :answer_d: A constructor must be private.
      :answer_e: If a subclass does not explicitly provide a constructor and its superclass has just one constructor with a parameter, an error will occur when an attempt is made to create an instance of a subclass object.
      :correct: d
      :feedback_a: Static variables can still have their values changed
      :feedback_b: This is true, under the hood if you don't explicitly use the 'super' keyword, the compiler will do it for you automatically
      :feedback_c: This is true.
      :feedback_d: Constructors should be public so that they can be called from outside the class to construct objects.
      :feedback_e: Because of the inheritance, the constructor from super class will be called and it is expecting a passed in parameter

      Which statement about constructors is ``false``?

.. mchoice:: qtnt5_6
      :answer_a: 10
      :answer_b: 12
      :answer_c: 16
      :answer_d: 26
      :answer_e: 32
      :correct: c
      :feedback_a: Trace out the recursive calls, see https://tinyurl.com/AP19-Q10
      :feedback_b: Trace out the recursive calls, see https://tinyurl.com/AP19-Q10
      :feedback_c: Trace out the recursive calls, see https://tinyurl.com/AP19-Q10
      :feedback_d: Trace out the recursive calls, see https://tinyurl.com/AP19-Q10
      :feedback_e: Trace out the recursive calls, see https://tinyurl.com/AP19-Q10

      Consider the following method. What will the output of ``mystery(6)`` return?

      .. code-block:: java

        public int mystery(int n)
        {
            if(n == 1 || n ==2)
                return 2;
            else
                return mystery(n -1) + mystery(n - 2);
        }

.. mchoice:: qtnt5_7
      :answer_a: I only
      :answer_b: II only
      :answer_c: III only
      :answer_d: II and III only
      :answer_e: I, II, and III
      :correct: d
      :feedback_a: This is true because !false && !false becomes true && true
      :feedback_b: If either a or b (or both a AND b) is true whole expression becomes false
      :feedback_c: If either a or b (or both a AND b) is true whole expression becomes false
      :feedback_d: If either a or b (or both a AND b) is true whole expression becomes false
      :feedback_e: If either a or b (or both a AND b) is true whole expression becomes false


      Suppose ``a and b`` are ``boolean`` variables. The expression below

      ``!a && !b``

      ...will evaluate to ``false`` whenever

      I. a and b are both false
      II. a is false and b is true
      III. a is true and b is false

.. mchoice:: qtnt5_8
      :answer_a: 1 6
      :answer_b: 7 12
      :answer_c: -3 12
      :answer_d: 4 12
      :answer_e: -3 6
      :correct: d
      :feedback_a: condition (y % x ==1) never true. Trace it out https://tinyurl.com/AP19-Q12
      :feedback_b: condition (y % x ==1) never true. Trace it out https://tinyurl.com/AP19-Q12
      :feedback_c: condition (y % x ==1) never true. Trace it out https://tinyurl.com/AP19-Q12
      :feedback_d: condition (y % x ==1) never true
      :feedback_e: condition (y % x ==1) never true. Trace it out https://tinyurl.com/AP19-Q12

      Consider the following code segment. What will be the output after execution of this code segment?

      .. code-block:: java

        int x = 10, y = 0;
        while(x > 5)
        {
            y = 3;
            while(y < x)
            {
                y *= 2;
                if( y % x == 1)
                    y += x;
            }
            x -= 3
        }
        System.out.println(x + " " + y);

.. mchoice:: qtnt5_9
      :answer_a: -5
      :answer_b: 0
      :answer_c: 13
      :answer_d: -1
      :answer_e: 12
      :correct: e
      :feedback_a: the %, *, and / all have the same precedence
      :feedback_b: the %, *, and / all have the same precedence
      :feedback_c: the %, *, and / all have the same precedence
      :feedback_d: the %, *, and / all have the same precedence
      :feedback_e: the %, *, and / all have the same precedence

      What value is stored in ``result`` if:

      .. code-block:: Java

        int result = 13 - 3 * 6 / 4 % 3

.. mchoice:: qtnt5_10
      :answer_a: 0
      :answer_b: 1
      :answer_c: k -1
      :answer_d: k -2
      :answer_e: k
      :correct: c
      :feedback_a: k > 2 so will print out "SMALL"
      :feedback_b: k can be greater than 3
      :feedback_c: max of k-1 iterations (end - start + 1 is k - 2 + 1)
      :feedback_d: it is <= k so inclusive of k
      :feedback_e: max of k -1 iterations

      Consider the following code segment. Assume ``k`` is some positive integer greater than 2. How many times will "SMALL" be printed?

      .. code-block:: Java

        for(int i = 2; i <= k; i++)
        {
            if(arr[i] < someValue)
               System.out.print("SMALL");
        }

.. mchoice:: qtnt5_11
    :answer_a: It prints string str
    :answer_b: It prints string str in reverse order
    :answer_c: It prints only the first two characters of string str
    :answer_d: It prints only the first two characters of string str
    :answer_e: It prints only the last character of string str
    :correct: a
    :feedback_a: Prints out the leftmost character at the start of the recursive call. Then always trims off the left most character, but substring(x) with single parameter x gives the remaining string from index x until the end. See https://tinyurl.com/AP19-Q17
    :feedback_b: substring(0,1) prints leftmost char not the rightmost char
    :feedback_c: there is a recursive call of a substring at each iteration
    :feedback_d: goes until s.length > 0
    :feedback_e: goes until s.length > 0 and there are recursive calculates

    Which best describes what the ``printSomething`` method below does?

    .. code-block:: Java

      public void printSomething(String str)
      {
          if(str.length() > 0)
          {
              System.out.print(str.substring(0,1));
              printSomething(str.substring(1));
          }

      }

.. mchoice:: qtnt5_12
    :answer_a: 9
    :answer_b: 15
    :answer_c: 19
    :answer_d: 21
    :answer_e: 31
    :correct: d
    :feedback_a: Second for loop goes until colum <= row index
    :feedback_b: Second for loop goes until colum <= row index
    :feedback_c: Second for loop goes until colum <= row index
    :feedback_d: adds the lower half of the matrix
    :feedback_e: Second for loop goes until colum <= row index

    A square matrix is declared as

    ``int[][] mat = new int [SIZE][SIZE]``

    where ``SIZE`` is an appropriate integer constant. Consider the code below.

    If mat is initialized to be:

    .. code-block:: java

        2 6 3
        4 5 1
        7 1 2

    What value will be returned by a call to ``sum(mat)``?

    .. code-block:: Java

      public static int sum(int[][] mat)
      {
          int total = 0;
          for(int r = 0; r < mat.length; r++)
          {
              for(int c = 0; c <= r; c++)
              {
                  total += mat[r][c];
              }
          }
          return total;
      }

.. mchoice:: qtnt5_13
    :answer_a: Find the smallest element in arr and swap it into arr[0]
    :answer_b: Compare arr[0] with arr[1] and, if necessary, shift and replace elements such that arr[0] is less than arr[1]
    :answer_c: Compare arr[0] with the middle element of arr, arr[mid] , and if arr[0] is less than arr[mid] , swap these elements
    :answer_d: Compare the first and last elements, and if the first is less than the last, swap   these elements.
    :answer_e: Break the array into roughly two equal halves.
    :correct: e
    :feedback_a: This is for selection sort
    :feedback_b: This is for bubble sort
    :feedback_c: Merge sort deals with cutting sets into halves and repeating this process
    :feedback_d: Merge sort deals with cutting sets into halves and repeating this process
    :feedback_e: Firs step is to cut sets in halves until you get to a single element in a 'set'

    The elements of an array are to be sorted in increasing order. Which represent the first step of a merge sort algorithm?

.. mchoice:: qtnt5_14
    :answer_a: return 4 * n;
    :answer_b: return 8 * n;
    :answer_c: return 64 * n;
    :answer_d: return (int) Math.pow(n,4);
    :answer_e: return (int) Math.pow(n,8);
    :correct: e
    :feedback_a: 3 iterations of the loop and each loop does  n^2
    :feedback_b: 3 iterations of the loop and each loop does  n^2
    :feedback_c: 3 iterations of the loop and each loop does  n^2
    :feedback_d: 3 iterations of the loop and each loop does  n^2
    :feedback_e: Method basically does (n^2)^3 which is the same as n ^ 8

    Which of the following could replace the body of ``compute`` so it does the same thing.

    .. code-block:: Java

        public static int compute(int n)
        {
            for(int i = 1; i < 4; i++)
            {
                n *= n;
            }
            return n;
        }

.. mchoice:: qtnt5_15
    :answer_a: 36
    :answer_b: 30
    :answer_c: 35
    :answer_d: 15
    :answer_e: 18
    :correct: d
    :feedback_a: Outer loop does gets incremented by 2, NOT by 1. Also, j starts at 1, NOT 0
    :feedback_b: Inner loop starts at 1 and is ends at 5 inclusive so exectues 5 times
    :feedback_c: Outer loop does gets incremented by 2, NOT by 1
    :feedback_d: Outerloop executes 3 times and inner loop executes 5 times.
    :feedback_e: See http://tinyurl.com/AP19-Q23

    How many times will the ``asterik("*")`` be printed?

    .. code-block:: Java

        for(int k = 4; k < 10; k +=2)
        {
            for(int j = 1; j <= 5; j++)
            {
                System.out.print("*");
            }
        }

.. mchoice:: qtnt5_16
    :answer_a: run eat
    :answer_b: run eat sleep
    :answer_c: run eat sleep bark
    :answer_d: run eat bark sleep
    :answer_e: Nothing is printed due to infinite recursion
    :correct: d
    :feedback_a: Because the fido is an "Underdog", we will call the eat() from class Underdog, http://tinyurl.com/AP19-Q25
    :feedback_b: Because the fido is an "Underdog", we will call the eat() from class Underdog, http://tinyurl.com/AP19-Q25
    :feedback_c: Because the fido is an "Underdog", we will call the eat() from class Underdog, http://tinyurl.com/AP19-Q25
    :feedback_d: Because the fido is an "Underdog", we will call the eat() from class Underdog, http://tinyurl.com/AP19-Q25
    :feedback_e: Because the fido is an "Underdog", we will call the eat() from class Underdog, http://tinyurl.com/AP19-Q25

    Consider the following code. What is printed?

    .. code-block:: java

        class Dog
        {

            public void act()
            {
                System.out.print("run ");
                eat();
            }

            public void eat()
            {
                System.out.print("eat ");
            }
        }

        public class UnderDog extends Dog
        {

            public void act()
            {
                super.act();
                System.out.print("sleep ");
            }

            public void eat()
            {
                super.eat();
                System.out.print("bark ");
            }

            public static void main(String[] args)
            {
                Dog fido = new UnderDog();
                fido.act();
            }
        }

.. mchoice:: qtnt5_17
    :answer_a: -1
    :answer_b: 1
    :answer_c: 0
    :answer_d: -2
    :answer_e: 2
    :correct: a
    :feedback_a: x becomes 0 and y becomes 1 so 0 - 1 = -1
    :feedback_b: make sure to do x-y and not y-x
    :feedback_c: http://tinyurl.com/AP19-Q26
    :feedback_d: http://tinyurl.com/AP19-Q26
    :feedback_e: http://tinyurl.com/AP19-Q26

    What is the output of the ``System.out.println`` statement?

    .. code-block:: Java

        int x = 3, y = -2;
        while(x > y)
        {
            x--;
            y++;
        }
        System.out.println(x - y);

.. mchoice:: qtnt5_18
  :answer_a: 4
  :answer_b: 5
  :answer_c: 6
  :answer_d: 7
  :answer_e: 8
  :correct: b
  :feedback_a: i%2 -1 ==0 means "is this number odd". See http://tinyurl.com/AP19-Q27
  :feedback_b: i%2 -1 ==0 means "is this number odd". See http://tinyurl.com/AP19-Q27
  :feedback_c: i%2 -1 ==0 means "is this number odd". See http://tinyurl.com/AP19-Q27
  :feedback_d: i%2 -1 ==0 means "is this number odd". See http://tinyurl.com/AP19-Q27
  :feedback_e: i%2 -1 ==0 means "is this number odd". See http://tinyurl.com/AP19-Q27

  What will be the value of ``sum`` after the execution of code above?

  .. code-block:: Java

      int sum = 0;
      for(int i = 0; i < 3; i++)
      {
          if((i % 2) - 1 ==0)
              sum += 3;
          else
              sum++;
      }

.. mchoice:: qtnt5_19
    :answer_a: mput
    :answer_b: mpu
    :answer_c: mp
    :answer_d: omp
    :answer_e: Om
    :correct: c
    :feedback_a: The .substring() function is inclusive left, exclusive right. Also if passed a single parameter it will take that as the starting index for the substring up to the rest of the string.
    :feedback_b: The .substring() function is inclusive left, exclusive right. Also if passed a single parameter it will take that as the starting index for the substring up to the rest of the string.
    :feedback_c: The .substring() function is inclusive left, exclusive right. Also if passed a single parameter it will take that as the starting index for the substring up to the rest of the string.
    :feedback_d: The .substring() function is inclusive left, exclusive right. Also if passed a single parameter it will take that as the starting index for the substring up to the rest of the string.
    :feedback_e: The .substring() function is inclusive left, exclusive right. Also if passed a single parameter it will take that as the starting index for the substring up to the rest of the string.

    What is printed out by the following code?

    .. code-block:: Java

        String s = "Computer Science is fun!";
        String s1 = s.substring(0,8);
        String s2 = s1.substring(1);
        String s3 = s2.substring(1,3);

        System.out.println(s3);
