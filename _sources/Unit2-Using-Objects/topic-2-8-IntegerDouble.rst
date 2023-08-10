.. include:: ../common.rst

.. qnum::
   :prefix: 2-8-
   :start: 1

|Time45|

Wrapper Classes - Integer and Double
====================================

.. index::
   pair: integer; minimum
   pair: integer; maximum

For every primitive type in Java, there is a built-in object type called a wrapper class. The wrapper class for int is called Integer, and for double it is called Double.   Sometimes you may need to create a wrapped object for a primitive type so that you can give it to a method that is expecting an object. To wrap a value, call the constructor for the wrapper class in earlier versions of Java. In Java 9 on, this is **deprecated** which means it's not the best way to do this anymore, and you should instead just set it equal to a value. The AP CSA Exam covers Java 7 which does allow using the constructor.

.. code-block:: java

   // in older versions of Java (and on the AP exam)
   Integer i = new Integer(2); // create an object with 2 in it
   Double d = new Double(3.5); // create an object with 3.5 in it

   // in newer versions of Java (9+)
   Integer i = 2;
   Double d = 3.5;


These wrapper classes (defined in the java.lang package) are also useful because they have some special values (like the minimum and maximum values for the type) and methods that you can use. Try the following code to see the minimum and maximum values possible for the type int.


.. activecode:: lcmm1
   :language: java
   :autograde: unittest

   What's the minimum and maximum numbers for an int? What happens if you go beyond these limits with - 1 or + 1?
   ~~~~
   public class Test1
   {
       public static void main(String[] args)
       {
           System.out.println(Integer.MIN_VALUE);
           System.out.println(Integer.MAX_VALUE);
           System.out.println(Integer.MIN_VALUE - 1);
           System.out.println(Integer.MAX_VALUE + 1);
       }
   }

   ====
   import static org.junit.Assert.*;

   import org.junit.*;

   import java.io.*;

   public class RunestoneTests extends CodeTestHelper
   {
       @Test
       public void testMain() throws IOException
       {
           String output = getMethodOutput("main");
           String expect = "-2147483648\n2147483647\n2147483647\n-2147483648";
           boolean passed = getResults(expect, output, "Expected output from main", true);
           assertTrue(passed);
       }
   }

The int type in Java can be used to represent any whole number from -2147483648 to 2147483647.  Why those numbers?  Integers in Java are represented in 2's complement binary and each integer gets 32 bits of space.  In 32 bits of space with one bit used to represent the sign you can represent that many values.  Why is there one more negative number than positive number?  It is because 0 is considered a positive number.

.. index::
   single: overflow

What do the last two lines print out?  Did this surprise you?  Java will actually return the maximum integer value if you try to subtract one from the minimum value. This is called **underflow**. And, Java will return the minimum integer value if you try to add one to the maximum.  This is called **overflow**.  It is similar to how odometers work -- in a really old car that reaches the maximum miles possible on the odometer, the odometer rolls over back to 0, the minimum value. In Java, any int value that surpasses 32 bits gets rolled over, so that  the Integer.MAX_VALUE 2147483647 incremented (+1) returns -2147483648 which is the Integer.MIN_VALUE.

When would you ever use Integer.MIN_VALUE or Integer.MAX_VALUE?  They are handy if you want to initialize a variable to the smallest possible value and then search a sequence of values for a larger value.

**Autoboxing** is the automatic conversion that the Java compiler makes between primitive types and their corresponding object wrapper classes. This includes converting an int to an Integer and a double to a Double. The Java compiler applies autoboxing when a primitive value is passed as a parameter to a method that expects an object of the corresponding wrapper class or assigned to a variable of the corresponding wrapper class. Here's an example of autoboxing.

.. code-block:: java

   Integer i = 2;
   Double d = 3.5;


**Unboxing** is the automatic conversion that the Java compiler makes  from the wrapper class to the primitive type. This includes converting an Integer to an int and a Double to a double. The Java compiler applies unboxing when a wrapper class object is passed as a parameter to a method that expects a value of the corresponding primitive type or assigned to a variable of the corresponding primitive type. Here's an example of unboxing:

.. code-block:: java

   Integer i = 2;  // autoboxing - wrap 2
   int number = i; // unboxing - back to primitive type


|Exercise| **Check your understanding**

.. dragndrop:: WrapperClasses
    :feedback: Review the vocabulary.
    :match_1: automatic conversion from the primitive type to the wrapper object|||autoboxing
    :match_2: automatic conversion from the wrapper object to the primitive type|||unboxing
    :match_3: Integer|||wrapper class
    :match_4: int|||primitive type
    :match_5: Integer.MAX_VALUE + 1|||overflow
    :match_6: Integer.MIN_VALUE - 1 |||underflow

    Drag the definition from the left and drop it on the correct word on the right.  Click the "Check Me" button to see if you are correct.

Here are some more useful methods in the Integer and  Double classes:

.. activecode:: integerMethods
   :language: java
   :autograde: unittest

   Run the code below to see useful methods in the Integer and Double wrapper classes.
   ~~~~
   public class Test2
   {
       public static void main(String[] args)
       {
           Integer i = 2;
           Double d = 3.5;
           System.out.println(
                   i.intValue()); // intValue() returns the primitive value
           System.out.println(d.doubleValue());

           String ageStr = "16";
           // Integer.parseInt and Double.parseDouble are often used to
           // convert an input string to a number so you can do math on it.
           // They are not on the AP exam
           System.out.println(
                   "Age "
                           + ageStr
                           + " in 10 years is "
                           + (Integer.parseInt(ageStr) + 10));
           System.out.println(
                   "Note that + with strings does concatenation, not addition: "
                           + (ageStr + 10));
       }
   }

   ====
   import static org.junit.Assert.*;

   import org.junit.*;

   import java.io.*;

   public class RunestoneTests extends CodeTestHelper
   {
       @Test
       public void testMain() throws IOException
       {
           String output = getMethodOutput("main");
           String expect =
                   "2\n"
                           + "3.5\n"
                           + "Age 16 in 10 years is 26\n"
                           + "Note that + with strings does concatenation, not addition: 1610";
           boolean passed = getResults(expect, output, "Expected output from main", true);
           assertTrue(passed);
       }
   }

|Groupwork| Programming Challenge : Debugging
----------------------------------------------

Can you find and fix all the bugs in the following code to use the correct Integer and Double methods and variables?

.. activecode:: challenge2-8-wrapperDebug
   :language: java
   :autograde: unittest

   Find and fix the bugs below to use the correct Integer and Double methods and variables.
   ~~~~
   public class Debug
   {
       public static void main(String[] args)
       {
           integer i = 2.3;
           Double d = 5;
           System.out.println( i.intValue );
           System.out.println( doubleValue() );
           // Print out the min and max values possible for integers
           System.out.println(Integer.min_value);
           System.out.println( int.MAX_VALUE() );
       }
   }
   ====
   import static org.junit.Assert.*;

   import org.junit.*;

   import java.io.*;

   public class RunestoneTests extends CodeTestHelper
   {
       @Test
       public void testMain() throws IOException
       {
           String output = getMethodOutput("main");
           String expect = "2\n5.0\n-2147483648\n2147483647";
           boolean passed = getResults(expect, output, "Expected output from main");
           assertTrue(passed);
       }

       @Test
       public void testCode() throws IOException
       {
           String target = "Integer.MAX_VALUE";
           boolean passed = checkCodeContains("MAX_VALUE", target);
           assertTrue(passed);
       }
   }

Summary
-------------------


- The Integer class and Double class are **wrapper classes** that create objects from primitive types.

- The following Integer methods and constructors, including what they do and when they are used, are part of the Java Quick Reference.

  - Integer(value): Constructs a new Integer object that represents the specified int value.
  - Integer.MIN_VALUE : The minimum value represented by an int or Integer.
  - Integer.MAX_VALUE : The maximum value represented by an int or Integer.
  - int intValue() : Returns the value of this Integer as an int.

- The following Double methods and constructors, including what they do and when they are used, are part of the Java Quick Reference Guide given during the exam:

  - Double(double value) : Constructs a new Double object that represents the specified double value.
  - double doubleValue() : Returns the value of this Double as a double.

- **Autoboxing** is the automatic conversion that the Java compiler makes between primitive types and their corresponding object wrapper classes. This includes converting an int to an Integer and a double to a Double.

- The Java compiler applies autoboxing when a primitive value is:

  - Passed as a parameter to a method that expects an object of the corresponding wrapper class.
  - Assigned to a variable of the corresponding wrapper class.

- **Unboxing** is the automatic conversion that the Java compiler makes  from the wrapper class to the primitive type. This includes converting an Integer to an int and a Double to a double.

- The Java compiler applies unboxing when a wrapper class object is:

  - Passed as a parameter to a method that expects a value of the corresponding primitive type.
  - Assigned to a variable of the corresponding primitive type.
