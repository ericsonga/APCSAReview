.. .. qnum::
   :prefix: 3-6-
   :start: 1

Wrapper Classes - Integer and Double
====================================

..	index::
	pair: integer; minimum
	pair: integer; maximum 

For every primitive type in Java, there is a built-in object type called a wrapper class. The wrapper class for int is called Integer, and for double it is called Double.   Sometimes you may need to create a wrapped object for a primitive type so that you can give it to a method that is expecting an object. To wrap a value, just call the constructor for the wrapper class.

.. code-block:: java 
   
   Integer i = new Integer(2); // create an object with 2 in it
   Double d = new Double(3.5); // create an object with 2.5 in it 

These wrapper classes are also useful because they have some special values (like the minimum and maximum values for the type) and methods that you can use. Try the following code to see the minimum and maximum values possible for the type int.
 

.. activecode:: lcmm1
   :language: java
   
   public class Test
   {
      public static void main(String[] args)
      {
        System.out.println(Integer.MIN_VALUE);
        System.out.println(Integer.MAX_VALUE);
        System.out.println(Integer.MIN_VALUE - 1);
        System.out.println(Integer.MAX_VALUE + 1);
      }
   }
   
The int type in Java can be used to represent any whole number from -2147483648 to 2147483647.  Why those numbers?  Integers in Java are represented in 2's complement binary and each integer gets 32 bits of space.  In 32 bits of space with one bit used to represent the sign you can represent that many values.  Why is there one more negative number than positive number?  It is because 0 is considered a positive number. 

..	index::
	single: overflow

What do the last two lines print out?  Did this surprise you?  Java will actually return the maximum integer value if you try to subtract one from the minimum value. This is called **underflow**. And, Java will return the minimum integer value if you try to add one to the maximum.  This is called **overflow**.  It is similar to how odometers work. 

When would you ever use Integer.MIN_VALUE or Integer.MAX_VALUE?  They are handy if you want to initialize a variable to the smallest possible value and then search a sequence of values for a larger value.  

.. note::

   People sometimes set the initial value to 0 when looking for the smallest item in a sequence of integers, but if all of the values in your sequence are negative then this won't work correctly (since all negative numbers are smaller than zero).    
 
**Autoboxing** is the automatic conversion that the Java compiler makes between primitive types and their corresponding object wrapper classes. This includes converting an int to an Integer and a double to a Double. The Java compiler applies autoboxing when a primitive value is passed as a parameter to a method that expects an object of the corresponding wrapper class or assigned to a variable of the corresponding wrapper class.

**Unboxing** is the automatic conversion that the Java compiler makes  from the wrapper class to the primitive type. This includes converting an Integer to an int and a Double to a double. The Java compiler applies unboxing when a wrapper class object is passed as a parameter to a method that expects a value of the corresponding primitive type or assigned to a variable of the corresponding primitive type.

Here are some more useful methods in the Integer and  Double classes:

.. activecode:: integerMethods
   :language: java
   
   public class Test
   {
      public static void main(String[] args)
      {
        Integer i = new Integer(2);
        Double d = new Double(3.5);
        System.out.println( i.intValue() ); // intValue() returns the primitive value
        System.out.println( d.doubleValue() );
        
        String ageStr = "16";
        // Integer.parseInt and Double.parseDouble are often used to convert an input string to a number so you can do math on it   
        System.out.println("Age in 10 years is " + (Integer.parseInt(ageStr) + 10) );
        System.out.println("Note that + with strings does concatenation, not addition: " + (ageStr + 10));      
      }
   }
   
Summary
-------------------


- The Integer class and Double class are **wrapper classes** that create objects from primitive types.

- The following Integer methods and constructors, including what they do and when they are used, are part of the Java Quick Reference.
  - Integer(int value) —Constructs a new Integer object that represents the specified int value.
  - Integer.MIN_VALUE—The minimum value represented by an int or Integer.
  - Integer.MAX_VALUE—The maximum value represented by an int or Integer.
  - int intValue()— Returns the value of this Integer as an int.

- The following Double methods and constructors, including what they do and when they are used,are part of the Java Quick Reference:
  - Double(double value) —Constructs a new Double object that represents the specified double value.
  - double doubleValue()— Returns the value of this Double as a double.

- **Autoboxing** is the automatic conversion that the Java compiler makes between primitive types and their corresponding object wrapper classes. This includes converting an int to an Integer and a double to a Double.

- The Java compiler applies autoboxing when a primitive value is—
  - Passed as a parameter to a method that expects an object of the corresponding wrapper class.
  - Assigned to a variable of the corresponding wrapper class.

- **Unboxing** is the automatic conversion that the Java compiler makes  from the wrapper class to the primitive type. This includes converting an Integer to an int and a Double to a double.

- The Java compiler applies unboxing when a wrapper class object is—
  - Passed as a parameter to a method that expects a value of the corresponding primitive type.
  - Assigned to a variable of the corresponding primitive type.



