.. qnum::
   :prefix: 3-1-
   :start: 1
   
   
.. |CodingEx| image:: ../../_static/codingExercise.png
    :width: 30px
    :align: middle
    :alt: coding exercise
    
    
.. |Exercise| image:: ../../_static/exercise.png
    :width: 35
    :align: middle
    :alt: exercise
    
    
.. |Groupwork| image:: ../../_static/groupwork.png
    :width: 35
    :align: middle
    :alt: groupwork
    
..	index::
	single: Boolean
	pair: Variable; boolean
	pair: boolean; variable


Boolean Expressions
===================

**Boolean** variables or expressions can only have **true** or **false** values.  Primitive values like ints and reference values like Strings can be compared using the operators == and != (not equal) to return boolean values. 

.. note::

    One = sign changes the value of a variable. Two == equal signs are used to compare two things -- not change their values!

|CodingEx| **Coding Exercise**

What will the code below print out? Try to guess before you run it! Note that 1 equal sign (=) is used to assign a value to a variable, and 2 equal signs (==) are used to test if a variable has a certain value.

.. activecode:: bool1
   :language: java
   
   public class BoolTest1
   {
      public static void main(String[] args)
      {
        int age = 15;
        int year = 14;
        // Will this print true or false?
        System.out.println( age == year );
        year = 15;
        // Will this print true or false?
        System.out.println( age == year );
        // Will this print true or false?
        System.out.println( age != year );
      }
   }

|CodingEx| **Coding Exercise**

We can also use == to test if two reference values refer to the same object. What will the code below print out? Try to guess before you run it! Here we are testing if the String refer to the same object in memory.

.. activecode:: boolRef
   :language: java
   
   public class BoolTestRef
   {
      public static void main(String[] args)
      {
        String name1 = "pat";
        String name2 = name1;
        // Will these print true or false?
        System.out.println(name1 == "pat");
        System.out.println(name1 == "chris");
        System.out.println(name1 == "Pat");
        System.out.println(name1 == name2);
      }
   }
   
**Relational Operators** can compare numeric values or arithmetic expressions in Java. 

- < Less Than
- > Greater Than
- <= Less than or equal to
- >= Greater than or equal to
- == Equals
- != Does not equal

If you have trouble telling < and > apart, think of a number line and think of < and > as arrows; < (less than) points towards 0 and smaller numbers on the number line and > (greater than) points towards the larger numbers on the number line. With <= and >=, remember to write the two symbols in the order that you would say them "less than" followed by "or equal to". 

|CodingEx| **Coding Exercise**

Try to guess what the code below will print out before you run it.

.. activecode:: bool2
   :language: java
   
   public class BoolTest2
   {
      public static void main(String[] args)
      {
        int age = 15;
        int year = 14;
        // Will these print true or false?
        System.out.println( age < year );
        System.out.println( age > year );
        System.out.println( age <= year+1 );
        System.out.println( age-1 >= year );
      }
   }



|Exercise| **Check your understanding**

.. dragndrop:: BooleanExps
    :feedback: Review the relational operators above.
    :match_1: x > 0|||x is positive
    :match_2: x == y|||x equals y
    :match_3: x < 0|||x is negative
    :match_4: x != y|||x does not equal y
    :match_5: x < y |||x is less than y
    :match_6: x > y |||x is greater than y
    :match_7: x >= y |||x is greater than or equal to y
    
    Drag the boolean expression from the left and drop it on what it is testing on the right.  Click the "Check Me" button to see if you are correct.
 

Here are some boolean expressions that are very useful in coding:

.. code-block:: java 

  // Test if a number is positive
  (number > 0)
  //Test if a number is negative
  (number < 0)
  //Test if a number is even by seeing if the remainder is 0 when divided by 2 
  (number % 2 == 0)
  //Test if a number is odd by seeing if there is a remainder when divided by 2
  (number % 2 > 0)
  //Test if a number is a multiple of x (or divisible by x with no remainder)
  (number % x == 0)
  
  
Try the expressions containing the % operator below to see how they can be used to check for even or odd numbers. All even numbers are divisible (with no remainder) by 2.

.. activecode:: boolMod
   :language: java
   
   public class BoolMod
   {
      public static void main(String[] args)
      {
        int age1 = 15;
        int age2 = 16;
        int divisor = 2;
        System.out.println("Remainder of " + age1 + "/" + divisor + " is " + (age1 % divisor) );
        System.out.println("Remainder of " + age2 + "/" + divisor + " is " + (age2 % divisor) );
        System.out.println("Is " + age1 + " even? " + (age1 % 2 == 0) );
        System.out.println("Is " + age2 + " even? " + (age2 % 2 == 0) );
      }
   }  
   
|Groupwork| Programming Challenge
--------------------------------------

A prime number is only divisible by 1 and itself. For example, 3 is a prime number because its only divisible by 1 and 3 and no other numbers, but 4 is not a prime number because it's divisible by 2 as well as 1 and 4. Prime numbers are very useful in encryption algorithms because they can be used as keys for encoding and decoding. If you have the key, you can use it to divide a large number that represents something encrypted to decode it, but if you don't have the key, it's very hard to guess the factors of a large number. 

The following program checks if 5 is a prime number by seeing if it is divisible by the numbers 1 - 5. Run the code, and then answer the following questions. Think, pair, and share your answers to these questions.

1. Is 5 a prime number? 
2. What boolean tests determine that a number is prime?
3. Change the number to 6 and add more boolean expressions to determine if 6 is prime. Is 6 prime?
4. Change the number to 7 and add more boolean expressions to determine if 7 is prime. Is 7 prime?
5. Are all odd numbers prime? Can you find one that is not?

.. activecode:: primeNumbers
   :language: java
   
   public class PrimeNumbers
   {
      public static void main(String[] args)
      {
        int number = 5;
        System.out.println(number % 1 == 0);
        System.out.println(number % 2 == 0);
        System.out.println(number % 3 == 0);
        System.out.println(number % 4 == 0);
        System.out.println(number % 5 == 0);
      }
   }  
 
    
Summary
-------------------  


- Primitive values and reference values can be compared using relational operators (i.e., == and !=) in Java.
- Arithmetic expression values can be compared using relational operators (i.e., <, >, <=, >=) in Java.
- An expression involving relational operators evaluates to a Boolean value of true or false.


