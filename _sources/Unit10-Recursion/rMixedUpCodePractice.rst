.. qnum::
   :prefix:  10-5-
   :start: 1

More Mixed Up Code Practice
----------------------------------------

Try to solve each of the following. Click the *Check Me* button to check each solution.  You will be told if your solution is too short, has a block in the wrong order, or you are using the wrong block.  Some of the problems have an extra block that isn't needed in the correct solution.  Try to solve these on your phone or other mobile device!

.. parsonsprob:: ch12p2ex1muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following method should recursively reverse the string that is passed in the parameter and return the reversed string.  It if is passed "abcd" it should return "dcba".  It has one extra block that is not needed in a correct solution.
   -----
   public String reverse(String str)
   {
   =====
       if(str.length() <= 1)
       {
   =====
           return str;
   =====
       }
       return reverse(str.substring(1)) + str.charAt(0);
   =====
   }
   =====
       return reverse(str.substring(1)); #distractor

.. parsonsprob:: ch12p2ex2muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following method should recursively return the fibonacci sequence of the first n numbers.  The fibonacci (f) of f(0) is 0 and of f(1) is 1.  The fibonacci of any other number is f(n-1) + f(n-2).  It has one extra block that is not needed in a correct solution.
   -----
   public int fibonacci(int n)
   {
   =====
       if(n == 0)
       {
   =====
           return 0;
   =====
       }
       else if(n == 1)
       {
   =====
           return 1;
   =====
       }
       else
       {
   =====
           return fibonacci(n - 1) + fibonacci(n - 2);
   =====
       }
   }
   =====
        return fibonacci(n - 1); #distractor

.. parsonsprob:: ch12p2ex3muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following method should recursively replace all the spaces in the String str with dashes.
   -----
   public String spaceDash(String str)
   {
   =====
       if(str.length == 0)
       {
   =====
           return str;
   =====
       }
       else if(str.charAt(0) ==  ' ')
       {
   =====
           return "-" + spaceDash(str.substring(1));
   =====
       }
       else
       {
   =====
           return str.charAt(0) + spaceDash(str.substring(1));
   =====
       }
   }
   =====
        return "-" + str.substring(1); #distractor

.. parsonsprob:: ch12p2ex4muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following method should recursively count and return the number of 2's that are present in the number.
   -----
   public int numberOf2s(int n)
   {
   =====
       if(n == 0)
       {
   =====
           return 0;
   =====
       }
       else if(n % 10 == 2)
       {
   =====
           return 1 + numberOf2s(n / 10);
   =====
       }
       else
       {
   =====
           return numberOf2s(n / 10);
   =====
       }
   }
   =====
        return 1 + numberOf2s(n % 10); #distractor

.. parsonsprob:: ch12p2ex5muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following method should recursively find and return the sum of the digits of int n.
   -----
   public int sum(int n)
   {
   =====
       if(n / 10 == 0)
       {
   =====
           return n;
   =====
       }
       else
       {
   =====
           return sum(n / 10) + n % 10;
   =====
       }
   }
   =====
        return 1 + sum(n % 10); #distractor

.. parsonsprob:: ch12p2ex6muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following method should recursively find and return the number of even digits in int n.
   -----
   public int evenDigits(int n)
   {
   =====
       if(n / 10 == 0)
       {
   =====
           if(n % 2 == 0)
           {
   =====
              return 1;
   =====
           }
           else
           {
               return 0;
           }
   =====
       }
       else if((n % 10) % 2 == 0)
       {
   =====
           return evenDigits(n / 10) + 1;
   =====
       }
       else
       {
   =====
           return evenDigits(n / 10);
   =====
       }
   }

.. parsonsprob:: ch12p2ex7muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following method should recursively find and print the factorial of int n. It has 1 extra block of code.
   -----
   public int factorial(int n)
   {
   =====
       if(n == 1)
       {
   =====
           return 1;
   =====
       }
       else
       {
   =====
           return n * factorial(n - 1);
   =====
       }
   }
   =====
        return 1 + factorial(n % 10); #distractor
