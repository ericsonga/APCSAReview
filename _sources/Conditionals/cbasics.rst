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

Java statements normally execute one at a time from top to bottom.  If you want a statement to only execute when something is true use a **conditional**. Something that can only be true or false is called a **Boolean**.  A conditional uses the keyword **if** followed by Boolean expression inside of an open parenthesis ``(`` and a close parenthesis ``)`` and then followed by a single statement or block of statements.  A block of statements is enclosed by an open curly brace ``{`` and a close curly brace ``}``.  

Imagine that your cell phone wanted to remind you to take an umbrella if it was currently raining in your area when it detected that you were leaving the house.  This type of thing is going to become more common in the future and it is an area of research called Human Computer Interaction (HCI) or Ubiquitous Computing (computers are everywhere).  

.. activecode:: lccb1
   :language: java
   
   public class Test1
   {
      public static void main(String[] args)
      {
        boolean isRaining = true;
        if (isRaining) System.out.println("Take an umbrella!"); 
        System.out.println("Drive carefully");
      }
   }
  
The variable ``isRaining`` is a boolean variable that is either true or false. If it is true then the message ``Take an umbrella!`` will be printed and then execution will continue with the next statement which will print ``Drive carefully``. Run the code above to see this.


.. fillintheblank:: 5_1_1_falseOuptut

    .. blank:: 5_1_1_false
        :correct: ^Drive carefully$
        :feedback1: ('.*','Try it and see')
        
        Try changing the code above to ``boolean isRaining = false;``.  What will it print?
  
What if you want to pick between two possibilities?  If you are trying to decide between a couple of things to do, you might do one thing if a coin flip is heads and another if it is tails.  In this case use the **if** keyword followed by a statement or block of statements and then the **else** keyword also followed by a statement or block of statements.  

.. note::

   The else will only execute if the condition is false.   

.. activecode:: lccb2
   :language: java
   
   public class Test2
   {
      public static void main(String[] args)
      {
        boolean isHeads = true;
        if (isHeads) System.out.println("Let's go to the game");
        else System.out.println("Let's watch a movie");
      }
   } 

If ``isHeads`` is true it will print ``Let's go to the game``.  Run the code above to see this.

.. fillintheblank:: 5_1_2_falseElse

    .. blank:: 5_1_2_else
        :correct: ^Let's watch a movie$
        :feedback1: ('.*','Try it and see')
        
        Try changing the code above to ``boolean isHeads = true;``.  What will it print?
        
.. note::

   An if will only execute one single statement following it unless there is a block of statements enclosed in a pair of open and closed curly braces ``{`` and ``}``.  Java doesn't care if you indent the code to show what you intend!
   
.. activecode:: lccb2-indent
   :language: java
   
   public class Test
   {
      public static void main(String[] args)
      {
        boolean isCold = true;
        if (isCold) 
            System.out.println("Wear a coat");
            System.out.println("Wear gloves");
        System.out.println("Bye");
      }
   }

	
**Check your understanding**
	
.. mchoice:: qcb1_1
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
     
.. mchoice:: qcb1_2
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
	
