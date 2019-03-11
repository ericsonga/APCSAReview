.. .. qnum::
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

Java uses the standard mathematical operators for addition (``+``), subtraction (``-``), multiplication (``*``), and division (``/``).  Java uses (``==``) to test if the value on the left is equal to the value on the right and (``!=``) to test if two items are not equal.  

.. activecode:: lcop1
   :language: java
   
   public class Test1
   {
      public static void main(String[] args)
      {
        System.out.println(2 + 3);
        System.out.println(2 - 3);
        System.out.println(2 * 3);
        System.out.println(2 / 3);
        System.out.println(2 == 3);
        System.out.println(2 != 3);
      }
   }
   
Do all of those operators do what you expected?  What about ``2 / 3``? Isn't surprising that it prints ``0``?  See the note below.

.. note::

   When Java sees you doing integer division it assumes you want an integer result so it throws away anything after the decimal point in the answer.  

Modulus
-----------

The percent sign operator (``%``) is the **modulus** or remainder operator.  The **modulus** operator (``x % y``) returns the remainder after you divide ``x`` (first number) by ``y`` (second number) so ``5 % 2`` will return 1 since 2 goes into 5 two times with a remainder of 1.  Remember long division when you had to specify how many times one number when into another evenly and the remainder?  That remainder is what is returned by the modulus operator.

.. figure:: Figures/mod-py.png
    :width: 150px
    :align: center
    :figclass: align-center
    
    Figure 1: Long division showing the whole number result and the remainder
    
.. activecode:: lcop2
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
    
.. note::
   The result of ``x % y`` when ``x`` is smaller than ``y`` is always ``x``.  The value ``y`` can't go into ``x`` at all (goes in 0 times), since ``x`` is smaller than ``y``, so the result is just ``x``.  So if you see ``2 % 3`` the result is ``2``.  
  
..	index::
	single: modulus
	single: remainder
	pair: operators; modulus
	
**Check Your Understanding**
	
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
	

Modulus on Past Exams
------------------------

The **modulus** operator has been used quite a bit on the AP CS A exam, so you should be familiar with it.
    
    -  Use it to check for odd or even numbers (``num % 2 == 1 is odd and num % 2 == 0 is even``).  Actually, you can use it to check if any number is evenly divisible by another (``num1 % num2 == 0``)

    -  Use it to get the last digit from an integer number (``num % 10 = last digit on right``).  This approach could be used on the free response question Self Divisor (Question 1 from 2007).  See http://coweb.cc.gatech.edu/ice-gt/1277 for starter code and testing code.
    
    -  Use it to get the number of minutes left when you convert to hours (``num % 60``).  Also whenever you have limited storage and you need to wrap around to the front if the value goes over the limit. See question 3 at http://coweb.cc.gatech.edu/ice-gt/1278. 
   
   
