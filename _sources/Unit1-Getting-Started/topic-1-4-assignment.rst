Expressions and Assignment Statements
=====================================
   
Assignment Statements
---------------------

Remember that a variable holds a value and that value can change or vary.  **Assignment statements** set variables to new values. These values can be complex **expressions** that contain math operators and other variables like in the example below. 

.. code-block:: java 

    // Assignment statement: 
    // variable = expression;
    score = (10 * points) + 5;

If you use a variable to keep score you would probably increment it (add one to the current value).  You can do this by setting the variable to the current value of the variable plus one (score = score + 1) as shown below. 

.. activecode:: lccv1
   :language: java
   
   public class Test1
   {
      public static void main(String[] args)
      {
        int score = 0;
        System.out.println(score);
        score = score + 1;
        System.out.println(score);
      }
   }
   
You can set one variable's value to a *copy* of the value of another variable.  This won't change the value of the variable that you are copying from.  Step through the code below by clicking the "Forward" button to see how the values of the variables change.


.. raw:: html

   <div>
   <iframe width="800" height="500" frameborder="0" src="http://pythontutor.com/iframe-embed.html#code=public+class+Test2%0A%7B%0A+++public+static+void+main(String%5B%5D+args%29%0A+++%7B%0A+++++int+x+%3D+3%3B%0A+++++int+y+%3D+2%3B%0A+++++System.out.println(x%29%3B%0A+++++System.out.println(y%29%3B%0A+++++x+%3D+y%3B%0A+++++System.out.println(x%29%3B%0A+++++System.out.println(y%29%3B%0A+++++y+%3D+5%3B%0A+++++System.out.println(x%29%3B%0A+++++System.out.println(y%29%3B%0A+++%7D%0A%7D&origin=opt-frontend.js&cumulative=false&heapPrimitives=false&textReferences=false&py=java&rawInputLstJSON=%5B%5D&curInstr=0&codeDivWidth=350&codeDivHeight=400"> </iframe>
   </div>
   
**Check your understanding**

.. mchoice:: q2_1
   :answer_a: x = 0, y = 1, z = 2
   :answer_b: x = 1, y = 2, z = 3
   :answer_c: x = 2, y = 2, z = 3
   :answer_d: x = 0, y = 0, z = 3
   :correct: b
   :feedback_a: These are the initial values in the variable, but the values are changed.
   :feedback_b: x changes to y's initial value, y's value is doubled, and z is set to 3
   :feedback_c: Remember that the equal sign doesn't mean that the two sides are equal.  It sets the value for the variable on the left to the value from evaluating the right side.
   :feedback_d: Remember that the equal sign doesn't mean that the two sides are equal.  It sets the value for the variable on the left to the value from evaluating the right side.

   What are the values of x, y, and z after the following code executes?  You can step through this code by clicking on the following `link <http://www.pythontutor.com/java.html#code=public+class+Test2%0A%7B%0A+++public+static+void+main(String%5B%5D+args%29%0A+++%7B%0A+++++int+x+%3D+0%3B%0A+++++int+y+%3D+1%3B%0A+++++int+z+%3D+2%3B%0A+++++x+%3D+y%3B%0A+++++y+%3D+y+*+2%3B%0A+++++z+%3D+3%3B%0A+++++System.out.println(x%29%3B%0A+++++System.out.println(y%29%3B%0A+++++System.out.println(z%29%3B%0A+++%7D%0A%7D&mode=display&origin=opt-frontend.js&cumulative=false&heapPrimitives=false&textReferences=false&py=java&rawInputLstJSON=%5B%5D&curInstr=0/>`_

   .. code-block:: java 

       int x = 0;
       int y = 1;
       int z = 2;
       x = y;
       y = y * 2;
       z = 3;

      
**Mixed up programs**

.. parsonsprob:: 2_swap
   :adaptive:
   :noindent:

   The following has the correct code to 'swap' the values in x and y (so that x ends up with y's initial value and y ends up with x's initial value), but the code is mixed up and contains <b>one extra block</b> which is not needed in a correct solution.  Drag the needed blocks from the left into the correct order on the right. Check your solution by clicking on the <i>Check Me</i> button.  You will be told if any of the blocks are in the wrong order or if you need to remove one or more blocks.  After three incorrect attempts you will be able to use the <i>Help Me</i> button to make the problem easier.  
   -----
   int x = 3;
   int y = 5;
   int temp = 0;
   =====
   temp = x;
   =====
   x = y;
   =====
   y = temp;
   =====
   y = x; #distractor
   
Input with Variables
--------------------

Variables are a powerful abstraction in programming because the same algorithm can be used with different input values saved in variables.  The code below will say hello to anyone who types in their name for different name values. 

.. raw:: html

    <iframe height="500px" width="100%" style="max-width:100%; margin-left:5%"  src="https://repl.it/@BerylHoffman/JavaIOExample?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
    
Although you will not be tested in the AP CS A exam on using the Java System.in and Scanner classes, learning how to do input in Java is still very useful. More information on using the Scanner class can be found here https://www.w3schools.com/java/java_user_input.asp 



Operators
---------


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
	
    

The **modulus** operator has been used quite a bit on the AP CS A exam, so you should be familiar with it.
    
    -  Use it to check for odd or even numbers (``num % 2 == 1 is odd and num % 2 == 0 is even``).  Actually, you can use it to check if any number is evenly divisible by another (``num1 % num2 == 0``)

    -  Use it to get the last digit from an integer number (``num % 10 = last digit on right``).  This approach could be used on the free response question Self Divisor (Question 1 from 2007).  See http://coweb.cc.gatech.edu/ice-gt/1277 for starter code and testing code.
    
    -  Use it to get the number of minutes left when you convert to hours (``num % 60``).  Also whenever you have limited storage and you need to wrap around to the front if the value goes over the limit. See question 3 at http://coweb.cc.gatech.edu/ice-gt/1278. 
   
   
