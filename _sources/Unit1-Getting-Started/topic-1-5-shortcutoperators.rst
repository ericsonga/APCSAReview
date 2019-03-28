..	index::
	single: operators
	pair: math; operators
	pair: operators; addition
	pair: operators; subtraction
	pair: operators; multiplication
    pair: operators; division
    pair: operators; equality
    pair: operators; inequality


Compound Assignment Operators 
=============================
   
Compound assignment operators are shortcuts that do a math operation and assignment in one step. For example, ``x += 1`` adds 1 to x and assigns the sum to x. It is the same as ``x = x + 1``. This pattern is possible with any operator put in front of the = sign. You should know that ``x += y`` is the same as ``x = x + y``, ``x -= y`` is the same as ``x = x - y``, ``x *= y`` is the same as ``x = x * y``, and ``x /= y`` is the same as ``x = x / y``.   

The most common shortcut ``++``, the plus-plus or increment operator, is used to add one to the current value; ``x++`` is the same as ``x += 1`` and the same as ``x = x + 1``. It is a shortcut that is used a lot in loops. You may have also seen it in the language C++ which is an inside joke that C has been incremented or improved to create C++.
The ``--`` operator is used to subtract one from the current value: ``y--`` is the same as ``y = y - 1``. These are the only two double operators; this shortcut pattern does not exist with other operators.

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
   
.. note::

   On the exam you can use ``x++`` or ``++x`` to both add one to the value of ``x``.  These two shortcuts only have different results if you assign the value of ``x`` to another variable as in ``int y = ++x;`` or ``int y = x++;``.  In ``int y = ++x;`` the value of x would be incremented before y's value is set to a copy of x's value.  In ``int y = x++;`` the value of y would be set to a copy of x's value before x is incremented.  The exam will never use a shortcut in an assignment statement, so you don't need to worry about the difference between ``++x`` or ``x++``.  

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
     
.. mchoice:: q3_4_4
   :answer_a: x = 6, y = 2.5, z = 2
   :answer_b: x = 4, y = 2.5, z = 2
   :answer_c: x = 6, y = 2, z = 3
   :answer_d: x = 4, y = 2.5, z = 3
   :answer_e: x = 4, y = 2, z = 3
   :correct: e
   :feedback_a: This code sets x to z * 2 (4), y to y divided by 2 (5 / 2 = 2) and z = to z + 1 (2 + 1 = 3).
   :feedback_b: This code sets x to z * 2 (4), y to y divided by 2 (5 / 2 = 2) and z = to z + 1 (2 + 1 = 3).
   :feedback_c: This code sets x to z * 2 (4), y to y divided by 2 (5 / 2 = 2) and z = to z + 1 (2 + 1 = 3).
   :feedback_d: This code sets x to z * 2 (4), y to y divided by 2 (5 / 2 = 2) and z = to z + 1 (2 + 1 = 3).
   :feedback_e: This code sets x to z * 2 (4), y to y divided by 2 (5 / 2 = 2) and z = to z + 1 (2 + 1 = 3).

   What are the values of x, y, and z after the following code executes?
   
   .. code-block:: java 

     int x = 3;
     int y = 5;
     int z = 2;
     x = z * 2;
     y = y / 2;
     z++;
     

Essential Knowledge
-------------------

- Compound assignment operators (+=, -=, \*=, /=, %=) can be used in place of the assignment operator.
- The increment operator (++) and decrement operator (--) are used to add 1 or subtract 1 from the stored value of a variable. The new value is assigned to the variable.
- The use of increment and decrement operators in prefix form (i.e., ++x) and inside other expressions (i.e., arr[x++]) is outside the scope of this course and the AP Exam. 


