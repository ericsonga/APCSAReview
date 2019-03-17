
.. qnum::
   :prefix: 4-5-
   :start: 1

Common Mistakes
===============

  -  Using ``==`` to test if two strings are equal.  This is actually a test to see if they refer to the same object.  Usually you only want to know if they have the same characters in the same order.  In that case you should use ``equals`` or ``compareTo`` instead.

  -  Treating upper and lower case characters the same in Java.  If ``s1 = "Hi"`` and ``s2 = "hi"`` then ``s1.equals(s2)`` is false.

  -  Thinking that substrings include the character at the last index when they don't.

  -  Thinking that strings can change when they can't.  They are immutable.

  -  Trying to invoke a method like ``indexOf`` on a string reference that is null.  You will get a null pointer exception.
