.. qnum::
   :prefix: 5-12-
   :start: 1
   
Conditional - Summary
-------------------------

In this chapter you learned about **conditionals**.  **Conditionals** are used to execute code when a Boolean expression is true or false.  A Boolean expression is one that is either true or false like ``x > 0``.  

..	index::
    single: loop
    single: body of a loop
    single: while loop
    single: for loop
    single: for each loop
    single: trace code
    single: out of bounds error



Concept Summary
=================


- **Body of a Loop** - The statement or statements that can be repeated in the loop (a loop may not execute at all if the condition is false to start with). In Java the body of the loop is either the first statement following a ``while`` or ``for`` loop is the body of the loop or a block of statements enclosed in ``{`` and ``}``.  
- **For Loop** - A loop that has a header with 3 optional parts: initialization, condition, and change.  It does the initialization one time before the body of the loop executes, repeats while the condition is true, and executes the changes after the body of the loop executes.   
- **For Each Loop** - Used to loop through a collection (list or array) and each time through the loop set a variable to the next item from the collection
- **Infinite Loop* - A loop that never ends. 
- **Loop** - A way to repeat one or more statements in a program.
- **Out of Bounds error** - A run-time error that occurs when you try to access past the end of a string in a loop.  
- **Trace Code** - Write down the values of the variables and how they change as the code executes. 
- **While Loop** - A loop that repeats while a Boolean expression is true.

Java Keyword Summary
=========================

- **while** - used to start a while loop
- **for** - used to start a for loop or a for each loop
- **System.out.println(variable)** - used to print the value of the variable.  This is useful in tracing the execution of code and when debugging.

Practice
===========

.. dragndrop:: ch5_cond1
    :feedback: Review the summaries above.
    :match_1: joints two conditions and it will only be true if both of the conditions are true|||logical and
    :match_2: used to execute code only when a Boolean condition is true|||conditional
    :match_3: an expression that is either true or false|||Boolean expression
    :match_4: a conditional with two or more conditions joined together with logical ands or ors|||complex conditional
    
    Drag the definition from the left and drop it on the correct concept on the right.  Click the "Check Me" button to see if you are correct
    
.. dragndrop:: ch5_cond2
    :feedback: Review the summaries above.
    :match_1: used to execute code when one of two conditions is true|||logical or
    :match_2: one or more statements enclosed in a open curly brace and a close curly brace|||blocks of statements
    :match_3: used to start a conditional and execute code if a condition is true|||if
    :match_4: used to distribute a negation on a complex conditional|||DeMorgan's Laws
    
    Drag the definition from the left and drop it on the correct method on the right.  Click the "Check Me" button to see if you are correct.