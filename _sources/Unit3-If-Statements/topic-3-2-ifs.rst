.. qnum::
   :prefix: 3-2-
   :start: 1
   
   
.. |CodingEx| image:: ../../_static/codingExercise.png
    :width: 30px
    :align: middle
    :alt: coding exercise
    
    
.. |Exercise| image:: ../../_static/exercise.png
    :width: 35
    :align: middle
    :alt: exercise
    
    
.. |Groupwork| image:: ../../_static/groupwork.png
    :width: 35
    :align: middle
    :alt: groupwork
    

if Statements and Control Flow
===============================

..	index::
	single: conditional
	single: if
	pair: conditional; if

The Java statements in a main method normally run or execute one at a time in the order they are found from top to bottom.  **Conditionals** or **if statements** in programming languages allow us to change the flow of control so that some code is only run when something is true.  In an if statement, if the condition is true then the next statement or a block of statements will execute.  If the condition is false then the next statement or block of statements is skipped.

.. figure:: Figures/Condition.png
    :width: 200px
    :align: center
    :figclass: align-center

    Figure 1: The order that statements execute in a conditional
    


A conditional uses the keyword ``if`` followed by Boolean expression inside of  an open parenthesis ``(`` and a close parenthesis ``)`` and then followed by a single statement or block of statements.  The single statement or block of statements are only executed if the condition is true.  A block of statements is enclosed by an open curly brace ``{`` and a close curly brace ``}``.  It never hurts to put in the curly brackets even if you have just one statement under the if statement, so get used to putting them in all the time.

.. code-block:: java

    // A single if statement
    if (boolean expression)
        do this statement;
    // A block if statement    
    if (boolean expression)
    {
       Do Statement1;
       Do Statement2;
       ...
       Do StatementN;
    }


Imagine that your cell phone wanted to remind you to take an umbrella if it was currently raining in your area when it detected that you were leaving the house.  This type of thing is going to become more common in the future and it is an area of research called Human Computer Interaction (HCI) or Ubiquitous Computing (computers are everywhere).  

.. activecode:: lccb1
   :language: java
   
   public class Test1
   {
      public static void main(String[] args)
      {
        boolean isRaining = true;
        if (isRaining) 
           System.out.println("Take an umbrella!"); 
        System.out.println("Drive carefully");
      }
   }
  
The variable ``isRaining`` is a boolean variable that is either true or false. If it is true then the message ``Take an umbrella!`` will be printed and then execution will continue with the next statement which will print ``Drive carefully``. Run the code above to see this.


|Exercise| **Check your understanding**

.. fillintheblank:: 5_1_1_falseOutput

   Try changing the code above to ``boolean isRaining = false;``.  What will it print?

   -    :^Drive carefully$: Correct.  If the boolean is false, it will skip executing the print statement after the if.
        :.*: Try it and see
        
        
  

.. note::

   An if will only execute one single statement following it unless there is a block of statements enclosed in a pair of open and closed curly braces ``{`` and ``}``.  Java doesn't care if you indent the code -- it goes by the { }.
   
|CodingEx| **Coding Exercise**

The code below doesn't work as expected.  Fix it to only print "Wear a coat" and "Wear gloves" when isCold is true.
   
.. activecode:: lccb2-indent
   :language: java
   
   public class Test
   {
      public static void main(String[] args)
      {
        boolean isCold = false;
        if (isCold) 
            System.out.println("Wear a coat");
            System.out.println("Wear gloves");
        System.out.println("Bye");
      }
   }

Most if statements have a boolean condition that uses relational operators like ==, !=, <, >, <=, >=, as we saw in the last lesson. 


|CodingEx| **Coding Exercise**

Run the following active code a couple times until you see all the possible outputs. It prints out whether a random number is positive or equal to 0. Add another if statement that tests if it is a negative number.

.. activecode:: if-relational
   :language: java
   
   public class Test
   {
      public static void main(String[] args)
      {
        // Get a random number from -10 up to 10.
        int number = (int) (Math.random()*20 - 10);
        System.out.println("The number is " + number);
        
        // is it positive?
        if (number > 0)
           System.out.println(number + " is positive!");
          
        // is it 0?
        if (number == 0)
           System.out.println(number + " is zero!");
          
      }
   }


.. note::

    A common mistake in if statements is using = instead of == in the condition by mistake. You should always **use ==**, not =, in the condition of an if statement to test a variable. One equal sign (=) assigns a value to a variable, and two equal signs (==) test if a variable has a certain value.
    
|Exercise| **Check your understanding**

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


.. More practice with if == and < > Active code.
    Note always use == not = in an if statement! Test not assign.


|Groupwork| Programming Challenge
--------------------------------------

.. image:: Figures/Magic_eight_ball.png
    :width: 100
    :align: left
    :alt: Magic 8 Ball
    
Have you ever seen a Magic 8 ball? You ask it a yes-no question and then shake it to get a random response like "Signs point to yes!", "Very doubtful", etc. 

We encourage you to work in pairs for this challenge. Come up with 8 responses to yes-no questions. Write a program below that chooses a random number from 1 to 8 and then uses if statements to test the number and print out the associated random response from 1-8.

.. activecode:: if-challenge
   :language: java
   
   public class Magic8Ball
   {
      public static void main(String[] args)
      {
        // Get a random number from 1 to 8
        
        // Use if statements to print out 1 of 8 responses
        
          
      }
   }
   
    
    
    
Summary
-------------------  

- if statements test a boolean expression and if it is true, go on to execute the following statement or block of statements surrounded by curly brackets { } like below.

.. code-block:: java

    // A single if statement
    if (boolean expression)
        do this statement;
    // A block if statement    
    if (boolean expression)
    {
       Do Statement1;
       Do Statement2;
       ...
       Do StatementN;
    }

- Java boolean expressions can compare primitive values and reference values with the relational operators == and != and arithmetic expression values with the relational operators (i.e., <, >, <=, >=).

- Conditional (if) statements affect the flow of control by executing different statements based on the value of a Boolean expression.


