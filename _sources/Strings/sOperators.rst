.. qnum::
   :prefix: 4-4-
   :start: 1

String Operators - Concatenation
==================================

..	index::
	pair: String; append

Strings can be **appended** to each other which creates a new string using the ``+`` operator . This is also called **concatenation**.

.. activecode:: lcso1
   :language: java

   public class Test1
   {
      public static void main(String[] args)
      {
        String start = "Happy Birthday";
        String name = "Jose";
        String result = start + " " + name;
        System.out.println(result);
      }
   }

.. note::
   Note that spaces are not added between strings automatically.  If you want a space between two strings then add one.

..	index::
	single: toString
	pair: Object; toString

You can even add other items to a string using the ``+`` operator.  The other item will be converted to a string using the ``toString`` operator if it is an object and then appended to the current string.  All objects inherit a ``toString`` method that returns a string representation of the object.

What do you think the following will print?

.. activecode:: lcso2
   :language: java

   public class Test2
   {
      public static void main(String[] args)
      {
        String message = "12" + 4 + 3;
        System.out.println(message);
      }
   }

.. note::
   If you are appending a number to a string it will be converted to a string first before being appended.

Since the same operators are processed from left to right this will print ``1243``.  First 4 will be turned into a string and appended to 12 and then 3 will be turned into a string and appended to 124.  If you want the addition to take place before the numbers are turned into a string what should you do?  Try to modify the code above so that it adds 4 + 3 before appending the value to the string.
