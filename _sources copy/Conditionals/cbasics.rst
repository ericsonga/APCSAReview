Conditionals
============

.. highlight:: java
   :linenothreshold: 4
   
.. qnum::
   :prefix: trl-
   :start: 1

Java statements normally execute one at a time from top to bottom.  If you want a statement to only execute when some Boolean expression is true use a conditional.  A conditional uses the keyword **if** followed by Boolean expression inside of an open parenthesis ``(`` and a close parenthesis ``)`` and then followed by a statement or block of statements.  A block of statements is enclosed by an open curly brace ``{`` and a close curly brace ``}``.  

Imagine that your cell phone wanted to remind you to take an umbrella if it was currently raining in your area when it detected that you were leaving the house.  This type of thing is going to become more common in the future and it is an area of research called Human Computer Interaction (HCI).  

:: 

  if (isRaining) System.out.println("Take an umbrella!"); 
  System.out.println("Drive carefully."); 
  
The variable ``isRaining`` is a boolean variable that is either true or false. If it is true then the message ``Take an umbrella!`` will be printed and then execution will continue with the next statement which will print ``Drive carefully.``.  If it is false, execution continues with the next statement which will print ``Drive carefully.``.
  
What if you want to pick between two possibilities?  If you are trying to decide between a couple of things to do, you might do one thing if a coin flip is heads and another if it is tails.  In this case use the **if** keyword followed by a statement or block of statements and then the **else** keyword also followed by a statement or block of statements.  

:: 

  if (isHeads) System.out.println("Let's go to the game.");
  else System.out.println("Let's watch a movie.");  

If ``isHeads`` is true it will print ``Let's go to the game.``, otherwise it will print ``Let's watch a movie.``.

You can even pick between 3 or more possibilites. Just add **else if** for each possibility after the first **if** and before the last possibility, the **else**.  

:: 

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
   
   :: 

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
   
   :: 

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
   
   :: 

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
   
   :: 

     if (x > 2) x = x * 2;
     if (x > 4) x = 0;
  
Complex Conditionals
--------------------

What if you want two things to be true before the body of the conditional is executed?  Use ``&&`` as a logical ``and`` to join two Boolean expressions and the body of the condition will only be executed only if both are true.  For example, what if you want to go out and your mom said you could if you clean your room and do your homework?

:: 

  if (cleanedRoom && didHomework) System.out.println("You can go out");
  else System.out.println("No, you can't go out"); 

What if it is okay if only one of two things is true? Use ``||`` as a logical ``or`` to join two Boolean expressions and the body of the condition will be executed if one or both are true.  For example, your Dad might say you can go out if you can walk or he doesn't need the car. 

:: 

  if (walking || carIsAvailable) System.out.println("You can go out");
  else System.out.println("No, you can't go out"); 
  
Both ``&&`` and ``||`` use **short circuit evaluation**.  That means that the second condition isn't necessarily checked.  If the code uses ``&&`` and the first condition is false, the second condition won't be executed since the result will already be false.  If the code uses ``||`` and the first condition is true then the second condition won't be executed since only one of the conditions needs to be true.    
 
**Check your understanding**

.. mchoicemf:: qcb_5
   :answer_a: first case
   :answer_b: second case
   :answer_c: You will get a error because you can't divide by zero.  
   :correct: b
   :feedback_a: This will only print if x is greater than 0 and it is not.  
   :feedback_b: This will print if x is less than or equal to zero or if y divided by x is not equal to 3.  
   :feedback_c: Since the first condition if false when x is equal to zero the second condition won't execute.  Execution moves to the else.    

   What is the result from the following code when x has been set to zero?  
   
   :: 

     if (x > 0 && (y / x) == 3) System.out.println("first case");
     else System.out.println("second case");
     
**Check your understanding**

.. mchoicemf:: qcb_6
   :answer_a: first case
   :answer_b: second case
   :answer_c: You will get a error because you can't divide by zero.  
   :correct: c
   :feedback_a: This will print if either of the two conditions are true.  The first isn't true but the second will cause an error.
   :feedback_b: This will print if both of the conditions are false.  But, an error will occur when testing the second condition.   
   :feedback_c: The first condition will be false so the second one will be executed and lead to an error since you can't divide by zero.

   What is the result from the following code when x has been set to zero?  
   
   :: 

     if (x > 0 || (y / x) == 3) System.out.println("first case");
     else System.out.println("second case");
     

DeMorgan's Laws
---------------
DeMorgan's laws were developed by Augustus De Morgan in the 1800s.  They show how to handle the negation of a complex conditional.

    -  not (a and b) is the same as (not a) or (not b)
    
    -  not (a or b) is the same as (not a) and (not b)
    
Notice that an ``and`` is changed to an ``or`` by negation and an ``or`` to an ``and``.  

Java uses ``!`` to indicate negation.  Applying DeMorgan's Laws to ``!(x < 3 && y > 2)`` means that this complex conditional will be true when ``(x >= 3 || y <= 2) and !(x < 3 || y > 2)`` is the same as ``(x >= 3 && y <= 2)``.  

For more information about DeMorgan's laws see http://en.wikipedia.org/wiki/De_Morgan's_laws.  

.. mchoicemf:: qcb_7
   :answer_a: first case
   :answer_b: second case 
   :correct: b
   :feedback_a: This will print if x is greater than or equal 3 and y is less than or equal 2.  In this case x is greater than 3 but y is not less than or equal 2.  
   :feedback_b: This will print if x is less than 3 or y is greater than 2. 

   What is printed when the following code executes and x equals 4 and y equals 3?   
   
   :: 

     if (!(x < 3 || y > 2)) System.out.println("first case");
     else System.out.println("second case");
     
.. mchoicemf:: qcb_8
   :answer_a: first case
   :answer_b: second case 
   :correct: a
   :feedback_a: This will print if x is greater than or equal 3 or y is less than or equal 2.  In this case x is greater than 3 so the first condition is true.
   :feedback_b: This will print if x is less than 3 and y is greater than 2.  

   What is printed when the following code executes and x equals 4 and y equals 3?   
   
   :: 

     if (!(x < 3 && y > 2)) System.out.println("first case");
     else System.out.println("second case");
     
More Practice
===============
     
For more practice with conditionals, and especially complex conditionals, go to http://codingbat.com/java/Logic-1 and http://codingbat.com/java/Logic-2 

Common Mistakes
===============

  -  Using two if's one after the other instead of an if and else.    
  
  -  Trouble with complex conditionals.  

  -  Trouble with understanding or applying negation.  
  
  -  Not understanding short circuit evaluation.   
