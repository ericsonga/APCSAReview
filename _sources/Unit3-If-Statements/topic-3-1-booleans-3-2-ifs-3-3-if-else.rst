.. qnum::
   :prefix: 3-2-
   :start: 1
   
.. highlight:: java
   :linenothreshold: 4

Boolean Expressions
===================

**Boolean** variables or expressions can only have **true** or **false** values.  Primitive values like ints and reference values like Strings can be compared using the operators == and != (not equal). Try the code below.

.. note::

One = sign changes the value of a variable. Two == equal signs are used to compare two things -- not change their values!

.. activecode:: bool1
   :language: java
   
   public class BoolTest1
   {
      public static void main(String[] args)
      {
        int age = 15;
        int year = 14;
        // Will this print true or false?
        System.out.println( age == year );
        String name1 = "pat";
        String name2 = name1;
        // Will these print true or false?
        System.out.println(name1 == name2);
        System.out.println(name1 == "Pat");
      }
   }

**Relational Operators** can compare numeric values. 

- < Less Than
- > Greater Than
- <= Less than or equal to
- >= Greater than or equal to
- == Equals
- != Does not equal

If you have trouble telling < and > apart, think of a number line and think of < and > as arrows; < (less than) points towards 0 and smaller numbers on the number line and > (greater than) points towards the larger numbers on the number line. With <= and >=, remember to write the two symbols in the order that you would say them "less than" followed by "or equal to". 

Try to guess what the code below will print out before you run it.

.. activecode:: bool2
   :language: java
   
   public class BoolTest2
   {
      public static void main(String[] args)
      {
        int age = 15;
        int year = 14;
        // Will these print true or false?
        System.out.println( age < year );
        System.out.println( age > year );
        System.out.println( age <= year+1 );
        System.out.println( age-1 >= year );
      }
   }



.. note::

**Essential Knowledge:**

1. Primitive values and reference values can be compared using relational operators (i.e., == and !=).

2. Arithmetic expression values can be compared using relational operators (i.e., <, >, <=, >=).

3. An expression involving relational operators evaluates to a Boolean value.



 

if Statements and Control Flow
===============================

..	index::
	single: conditional
	single: if
	single: Boolean
	pair: Variable; boolean
	pair: boolean; variable
	pair: conditional; if

Java statements normally execute one at a time from top to bottom.  If you want a statement to only execute when something is true use a **conditional** or **if statement**.   If the condition is true then the next statement or a block of statements will execute.  If the condition is false then the next statement or block of statements is skipped.

.. figure:: Figures/Condition.png
    :width: 200px
    :align: center
    :figclass: align-center

    Figure 1: The order that statements execute in a conditional
    


A conditional uses the keyword ``if`` followed by Boolean expression inside of  an open parenthesis ``(`` and a close parenthesis ``)`` and then followed by a single statement or block of statements.  The single statement or block of statements are only executed if the condition is true.  A block of statements is enclosed by an open curly brace ``{`` and a close curly brace ``}``.  It never hurts to put in the curly brackets even if you have just one statement under the if statement, so get used to putting them in all the time.

.. note::
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


.. fillintheblank:: 5_1_1_falseOutput

   Try changing the code above to ``boolean isRaining = false;``.  What will it print?

   -    :^Drive carefully$: Correct.  If the boolean is false, it will skip executing the print statement after the if.
        :.*: Try it and see
        
        
  

.. note::

   An if will only execute one single statement following it unless there is a block of statements enclosed in a pair of open and closed curly braces ``{`` and ``}``.  Java doesn't care if you indent the code to show what you intend!
   
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



	
  

if-else Statements : Two-way Selection
======================================

What if you want to pick between two possibilities?  If you are trying to decide between a couple of things to do, you might do one thing if a coin flip is heads and another if it is tails.  In this case use the **if** keyword followed by a statement or block of statements and then the **else** keyword also followed by a statement or block of statements.  

.. figure:: Figures/Condition-two.png
    :width: 350px
    :align: center
    :figclass: align-center

    Figure 2: The order that statements execute in a conditional with 2 options: if and else

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
        System.out.println("after conditional");
      }
   } 
   

If ``isHeads`` is true it will print ``Let's go to the game`` and then ``after conditional``.  Run the code above to see this.

.. fillintheblank:: 5_1_2_falseElse

   Try changing the code above to ``boolean isHeads = false;``.  What line will be printed before the ``after conditional``?

   -    :^Let's watch a movie$: Correct.  If the boolean value is false, the statement following the else will execute
        :.*: Try it and see
        
        

.. mchoice:: qcb1_1
   :answer_a: A
   :answer_b: B
   :answer_c: C
   :answer_d: D
   :answer_e: E
   :correct: d
   :feedback_a: Notice that each of the first 4 statements start with an if so you need to check each one.  What will actually be printed?  Try it in one of the active code windows above.  
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
     
