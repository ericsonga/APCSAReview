.. qnum::
   :prefix: 7-11-
   :start: 1
   
Loops - Summary
-------------------------

In this chapter you learned about **loops**.  **Loops** are used to repeat a statement or block of statements inside a pair of curly braces.

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


- **Body of a Loop** - The single statement or a block of statements that *can* be repeated (a loop may not execute at all if the condition is false to start with). In Java the body of the loop is either the first statement following a ``while`` or ``for`` loop is the body of the loop or a block of statements enclosed in ``{`` and ``}``.  
- **For Loop** - A loop that has a header with 3 optional parts: initialization, condition, and change.  It does the initialization one time before the body of the loop executes, executes the body of the loop if the condition is true, and executes the change after the body of the loop executes before checking the condition again.
- **For Each Loop** - Used to loop through all the elements of a collection (like a list or an array) and each time through the loop set a variable to the next item from the collection
- **Infinite Loop** - A loop that never ends. 
- **Loop** - A way to repeat one or more statements in a program.
- **Out of Bounds error** - A run-time error that occurs when you try to access past the end of a string or list in a loop.  
- **Trace Code** - Writing down the values of the variables and how they change each time the body of the loop executes.
- **While Loop** - A loop that repeats while a Boolean expression is true.

Java Keyword Summary
=========================

- **while** - used to start a while loop
- **for** - used to start a for loop or a for each loop
- **System.out.println(variable)** - used to print the value of the variable.  This is useful in tracing the execution of code and when debugging.

Practice
===========

.. dragndrop:: ch6_loops1
    :feedback: Review the summaries above.
    :match_1: a loop that repeats while a Boolean condition is true|||while loop
    :match_2: a loop that has three parts: initialization, condition, and change|||for loop
    :match_3: a loop that repeats one or more statements for each item in a collection like a list|||for each loop
    
    Drag the definition from the left and drop it on the correct concept on the right.  Click the "Check Me" button to see if you are correct
    
.. dragndrop:: ch6_loops2
    :feedback: Review the summaries above.
    :match_1: the statement or block of statements following a loop header that is repeated|||body of a loop
    :match_2: a loop that never ends|||infinite loop
    :match_3: an error that occurs when a loop tries to access outside the bounds of a string or list|||out of bounds error
    :match_4: writing down the values of variables for each execution of the loop body|||trace code
    
    Drag the definition from the left and drop it on the correct method on the right.  Click the "Check Me" button to see if you are correct.