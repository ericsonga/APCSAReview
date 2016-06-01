.. qnum::
   :prefix: 6-1-
   :start: 1

Loops in Java
=============

.. qnum::
   :prefix: trl-
   :start: 1
   
.. highlight:: java
   :linenothreshold: 4
   
..	index::
	single: loop
	single: looping
	single: for loop
	single: while loop
	single: for-each loop
	pair: loop; for
	pair: loop; while
	pair: loop; for-each

When you play a song, you can set it to **loop**, which means that when it reaches the end it starts over at the beginning.  A **loop** in programming is a way to repeat one or more statements. If you didn't have loops to allow you to repeat code, your programs would get very long very quickly! 

The keywords ``while`` or ``for`` both indicate the start of a loop (the header).  The **body of the loop** is either a single statement following the header or a block of statements that starts with an opening parenthesis ``{`` and ends with a closing parenthesis ``}``.  

There are many different types of loops in Java, but the AP CS A exam only covers three:

    -  ``while``: repeat the body of the loop while a Boolean expression is true

    -  ``for``: contains a header with 3 possible parts: declaration/initialization, condition, and change.  Before the loop starts it does the declaration/initialization. Then it repeats the body of the loop while the condition is true.   The code in the change part is executed each time at the end of the body of the loop.    
    
    -  for-each: loop through a collection (list or array) and each time through the loop set a variable to the next item from the collection.  We will discuss this in the section about arrays.   



