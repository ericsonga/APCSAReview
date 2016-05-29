.. qnum::
   :prefix: 3-4-
   :start: 1

Operators
=========


..	index::
	single: operators
	pair: math; operators
	pair: operators; addition
	pair: operators; subtraction
	pair: operators; multiplication
    pair: operators; division
    pair: operators; equality
    pair: operators; inequality

Java uses the standard mathematical operators for addition (``+``), subtraction (``-``), multiplication (``*``), and division (``/``).  Java uses (``==``) to test if the value on the left is equal to the value on the right and (``!=``) to test if two items are not equal.  But, the percent sign operator (``%``) is the **modulus** or remainder operator.

.. activecode:: lcop1
   :language: java
   
   public class Test1
   {
      public static void main(String[] args)
      {
        System.out.println(11 % 10);
        System.out.println(3 % 4);
        System.out.println(8 % 2);
        System.out.println(9 % 2);
      }
   }
  
..	index::
	single: modulus
	single: remainder
	pair: operators; modulus

The **modulus** operator (``%``) returns the remainder after you divide the first number by the second number.  The **modulus** operator has been used quite a bit on the AP CS A exam, so you should be familiar with it.
    
    -  Use it to check for odd or even numbers (``num % 2 == 1 is odd and num % 2 == 0 is even``).  Actually, you can use it to check if any number is evenly divisible by another (``num1 % num2 == 0``)

    -  Use it to get the last digit from an integer number (``num % 10 = last digit on right``).  This approach could be used on the free response question Self Divisor (Question 1 from 2007).  See http://coweb.cc.gatech.edu/ice-gt/1277 for starter code and testing code.
    
    -  Use it to get the number of minutes left when you convert to hours (``num % 60``).  Also whenever you have limited storage and you need to wrap around to the front if the value goes over the limit. See question 3 at http://coweb.cc.gatech.edu/ice-gt/1278.  

In addition, the **Math** class provides us with multiple methods that can be useful within our own Java classes. The random() method returns a number greater than or equal to 0.0, and less than 1.0. Try out the following code.

.. activecode:: lcop3
   :language: java
   
   public class Test3
   {
      public static void main(String[] args)
      {
        System.out.println(Math.random());
        System.out.println(Math.random());
      }
   }
   
.. mchoice:: q3_4_1
   :answer_a: 15
   :answer_b: 16
   :answer_c: 8
   :correct: c
   :feedback_a: This would be the result of 158 divided by 10.  Modulus gives you the remainder.
   :feedback_b: Modulus gives you the remainder after the division.
   :feedback_c: When you divide 158 by 10 you get a remainder of 8.  

   What is the result of 158 % 10?
   
.. mchoice:: q3_4_2
   :answer_a: 3
   :answer_b: 2
   :answer_c: 8
   :correct: a
   :feedback_a: 8 goes into 3 no times so the remainder is 3.  The remainder of a smaller number divided by a larger number is always the smaller number!
   :feedback_b: This would be the remainder if the question was 8 % 3 but here we are asking for the reminder after we divide 3 by 8.
   :feedback_c: What is the remainder after you divide 3 by 8?  

   What is the result of 3 % 8?
   
You are also expected to know the double plus operator (``++``) and the double minus operator (``--``).  The ``++`` operator is used to add one to the current value: ``x++`` is the same as ``x = x + 1``.  The ``--`` operator is used to subtract one from the current value: ``y--`` is the same as ``y = y - 1``.  
You should know that ``x += y`` is the same as ``x = x + y``, ``x -= y`` is the same as ``x = x - y``, ``x *= y`` is the same as ``x = x * y``, and ``x /= y`` is the same as ``x = x / y``.  

.. activecode:: lcpp
   :language: java
   
   public class Test2
   {
      public static void main(String[] args)
      {
        int num = 0;
        System.out.println(num);
        num++;
        System.out.println(num);
      }
   }

.. mchoice:: q3_4_3
   :answer_a: x = -1, y = 1, z = 4
   :answer_b: x = -1, y = 2, z = 3
   :answer_c: x = -1, y = 2, z = 2
   :answer_d: x = -1, y = 2, z = 2
   :answer_e: x = -1, y = 2, z = 4
   :correct: e
   :feedback_a: This code subtracts one from x, adds one to y, and then sets z to to the value in z plus the current value of y.
   :feedback_b: This code subtracts one from x, adds one to y, and then sets z to to the value in z plus the current value of y.
   :feedback_c: This code subtracts one from x, adds one to y, and then sets z to to the value in z plus the current value of y.
   :feedback_d: This code subtracts one from x, adds one to y, and then sets z to to the value in z plus the current value of y.
   :feedback_e: This code subtracts one from x, adds one to y, and then sets z to to the value in z plus the current value of y.

   What are the values of x, y, and z after the following code executes?
   
   .. code-block:: java 

     int x = 0;
     int y = 1;
     int z = 2;
     x--; // x followed bythe double minus sign
     y++;
     z+=y;
     