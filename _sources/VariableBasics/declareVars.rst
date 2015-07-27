.. qnum::
   :prefix: 3-2-
   :start: 1
   
Declaring Variables in Java
---------------------------

..	index::
	single: bit
	single: binary digit
	single: declare
	pair: variable; declare

Computers store all values using **bits** (binary digits).  A **bit** can represent two values and we usually say that the value of a bit is either 0 or 1.  

To create a variable, you must tell Java its type and name.  Creating a variable is also called **declaring a variable**.  When you create a **primitive variable** Java will set aside enough bits in memory for that primitive type and associate that memory location with the name that you used.  You have to tell Java the type of the variable because Java needs to know how many bits to use and how to represent the value.  The 3 different primitive types
are all represented using **binary numbers** (numbers that use base 2 with digits 0 and 1), but are represented in different ways.  For practice converting between decimal and binary see http://forums.cisco.com/CertCom/game/binary_game_page.htm.  

When you declare a variable, a memory location (sequential number of bits) is set aside for a variable of that type and the name is associated with that location.  An integer gets 32 bits of space, a double gets 64 bits of space and a boolean could be represented by just one bit, but the amount of space isn't specified by the Java standard. 

.. figure:: Figures/typesAndSpace.png
    :width: 500px
    :figclass: align-center
    
    Figure 2: Examples of variables with names and values.  Notice that the different types get a different amount of space.

To **declare** (create) a variable, you will specify the type, leave at least one space, then the name for the variable and end the line with a semicolon (``;``). Java uses the keyword **int** for integer, **double** for a floating point number (a double precision number), and **boolean** for a Boolean value (true or false).  If you try to run this code you will get an error when you try to print the value of these variables.  They haven't been initialized to any value yet.  
 
 
.. activecode:: lcdv1
   :language: java
   
   public class Test1
   {
      public static void main(String[] args)
      {
        int score; 
        System.out.println(score);
        double price;
        System.out.println(price);
        boolean won;
        System.out.println(won);
      }
   }

Think of the semicolon in Java like a period (``.``) in English.  It is how you show the end of a sentence.  You use a semicolon (``;``) to show the end of a Java statement.  You will not be penalized on the exam if you forget the semicolon.  

You can also optionally specify an initial value for the variable by adding an equals sign ``=`` followed by the value. 

.. activecode:: lcdv2
   :language: java
   
   public class Test2
   {
      public static void main(String[] args)
      {
        int score = 4; 
        System.out.println(score);
        double price = 23.25;
        System.out.println(price);
        boolean won = false;
        System.out.println(won);
      }
   }

The equal sign here ``=`` doesn't mean the same as it does in a mathematical equation where it implies that the two sides are equal.  Here it means set the value in the space (box) associated with the name on the left to the value on the right. The first line above sets the value in the box called score to 4. See Figure 2 for what value each variable holds after this code executes.

Note that the variable has to be on the left side of the ``=`` and the value on the right.  Switching the two is called **assignment dyslexia**.   Can you fix the code below so that it compiles and prints the value of score?


.. activecode:: lcdv3
   :language: java
   
   public class Test3
   {
      public static void main(String[] args)
      {
        4 = int score; 
        System.out.println(score);
      }
   }
   
