.. qnum::
   :prefix: 5-1-
   :start: 1
   
.. highlight:: java
   :linenothreshold: 4

Conditionals
============

..	index::
	single: conditional
	single: if
	single: Boolean
	pair: Variable; boolean
	pair: boolean; variable
	pair: conditional; if

Java statements normally execute one at a time from top to bottom.  If you want a statement to only execute when something is true use a **conditional**. Something that can only be true or false is called a **Boolean**.  A conditional uses the keyword **if** followed by Boolean expression inside of an open parenthesis ``(`` and a close parenthesis ``)`` and then followed by a statement or block of statements.  A block of statements is enclosed by an open curly brace ``{`` and a close curly brace ``}``.  

Imagine that your cell phone wanted to remind you to take an umbrella if it was currently raining in your area when it detected that you were leaving the house.  This type of thing is going to become more common in the future and it is an area of research called Human Computer Interaction (HCI).  

.. code-block:: java

  if (isRaining) System.out.println("Take an umbrella!"); 
  System.out.println("Drive carefully."); 
  
The variable ``isRaining`` is a boolean variable that is either true or false. If it is true then the message ``Take an umbrella!`` will be printed and then execution will continue with the next statement which will print ``Drive carefully.``.  If it is false, execution continues with the next statement which will print ``Drive carefully.``.
  
What if you want to pick between two possibilities?  If you are trying to decide between a couple of things to do, you might do one thing if a coin flip is heads and another if it is tails.  In this case use the **if** keyword followed by a statement or block of statements and then the **else** keyword also followed by a statement or block of statements.  

.. code-block:: java 

  if (isHeads) System.out.println("Let's go to the game.");
  else System.out.println("Let's watch a movie.");  

If ``isHeads`` is true it will print ``Let's go to the game.``, otherwise it will print ``Let's watch a movie.``.

..	index::
	single: else if
	pair: conditional; else if

You can even pick between 3 or more possibilites. Just add **else if** for each possibility after the first **if** and before the last possibility, the **else**.  

.. code-block:: java 

  if (x < 0) System.out.println("x is negative");
  else if (x == 0) System.out.println("x is 0");
  else System.out.println("x is positive");
  
**Check your understanding**

.. mchoicemf:: qcb_1
   :answer_a: x is negative
   :answer_b: x is zero
   :answer_c: x is positive
   :correct: a
   :feedback_a: When x is equal to -5 the condition of x < 0 is true. 
   :feedback_b: This will only print if x has been set to 0.  Has it?
   :feedback_c: This will only print if x is greater than zero.  Is it?

   What does the following code print when x has been set to -5?
   
   .. code-block:: java 

     if (x < 0) System.out.println("x is negative");
     else if (x == 0) System.out.println("x is zero"); 
     else System.out.println("x is positive"); 
     
.. mchoicemf:: qcb_2
   :answer_a: x is negative
   :answer_b: x is zero
   :answer_c: x is positive
   :correct: c
   :feedback_a: This will only print if x has been set to a number less than zero. Has it? 
   :feedback_b: This will only print if x has been set to 0.  Has it?
   :feedback_c: The first condition is false and x is not equal to zero so the else will execute.  

   What does the following code print when x has been set to 2000?
   
   .. code-block:: java 

     if (x < 0) System.out.println("x is negative");
     else if (x == 0) System.out.println("x is zero"); 
     else System.out.println("x is positive"); 
     
.. mchoicemf:: qcb_3
   :answer_a: A
   :answer_b: B
   :answer_c: C
   :answer_d: D
   :answer_e: E
   :correct: d
   :feedback_a: Notice that each of the first 4 statements start with an if.  What will actually be printed?  Try it.  
   :feedback_b: Each of the first 4 if statements will execute.
   :feedback_c: Check this in DrJava.
   :feedback_d: Each of the if statements will be executed. So grade will be set to A, then B then C and finally D.  
   :feedback_e: This will only be true when score is less than 60.   

   What is the value of grade when the following code executes and score is 93?  
   
   .. code-block:: java 

     if (score >= 90) grade = "A";
     if (score >= 80) grade = "B";
     if (score >= 70) grade = "C";
     if (score >= 60) grade = "D";
     else grade = "E";
     
.. mchoicemf:: qcb_4
   :answer_a: x = 0;
   :answer_b: if (x > 2) x *= 2;
   :answer_c: if (x > 2) x = 0;
   :answer_d: if (x > 2) x = 0; else x *= 2;
   :correct: c
   :feedback_a: If x was set to 1 then it would still equal 1.
   :feedback_b: What happens in the original when x is greater than 2?  
   :feedback_c: If x is greater than 2 it will be set to 0.  
   :feedback_d: In the original what happens if x is less than 2?  Does this give the same result?

   Which of the following is equivalent to the code segment below?  
   
   .. code-block:: java

     if (x > 2) x = x * 2;
     if (x > 4) x = 0;
  

     


     

 
