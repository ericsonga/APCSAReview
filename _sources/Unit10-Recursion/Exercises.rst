.. qnum::
   :prefix: 12-11-
   :start: 1

Recursion Summary
-------------------------

In this chapter you learned about **recursion**.  A recursive method calls itself (contains a call to the method from inside of the method).  A recursive method should have at least one way to stop the recursion.  This is called a base case.

..	index::
    single: recursion

Concept Summary
=================

- **base case** - A way to stop the recursive calls. This is a return without a recursive call.
- **call stack** - A class defines what all objects of that class know (fields) and can do (methods).  You can also have data and behavior in the object that represents the class (class fields and methods).  All objects of a class have access to class fields and class methods, but these can also be accessed using ``className.field`` or ``className.method()``.
- **recursive method** - A method that contains at least one call to itself inside the method.

Practice
===========

.. dragndrop:: ch12rec_match_1
    :feedback: Review the summaries above.
    :match_1: A method that calls itself|||recursive method
    :match_2: The stack of calls to methods|||call stack
    :match_3: The case when the method doesn't call itself|||base case

    Drag the item from the left and drop it on its corresponding answer on the right.  Click the "Check Me" button to see if you are correct.
