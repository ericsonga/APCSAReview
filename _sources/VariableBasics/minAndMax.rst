.. qnum::
   :prefix: 3-6-
   :start: 1

Integer Min and Max
===================

..	index::
	pair: integer; minimum
	pair: integer; maximum 

The int type in Java can be used to represent any whole number from -2147483648 to 2147483647.  Why those numbers?  Integers in Java are represented in 2's complement binary and each integer gets 32 bits of space.  In 32 bits of space with one bit used to represent the sign you can represent that many values.  Why is there one more negative number than positive number?  It is becuase 0 is considered a positive number.  

Try this in Dr Java's interaction pane.

.. code-block:: java

  Integer.MIN_VALUE
  Integer.MAX_VALUE
  Integer.MIN_VALUE - 1
  Integer.MAX_VALUE + 1
  
..	index::
	single: overflow

What do the last two lines print out?  Did this surprise you?  Java will actually return the maximum integer value if you try to subtract one from the minimum value. This is called **underflow**. And, Java will return the minimum integer value if you try to add one to the maximum.  This is called **overflow**.  It is similar to how odometers work. 
When would you ever use Integer.MIN_VALUE or Integer.MAX_VALUE?  They are handy if you want to initialize a variable to the smallest possible value and then search a sequence of values for a larger value.  People sometimes set the initial value to 0 when looking for the smallest item in a sequence, but if all of the values in your sequence are negative then this won't work correctly (since all negative numbers are smaller than zero).    
 