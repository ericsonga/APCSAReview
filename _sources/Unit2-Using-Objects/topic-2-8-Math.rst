.. .. qnum::
   :prefix: 3-7-
   :start: 1
   

Using the Math Class
====================

..	index::
    single: Math methods
	single: random method
	pair: Math; random method

Games would be boring if the same thing happened each time you played the game.  Games often use random numbers
to generate different possibilities.  You need to know how to use the ``Math.random()`` method to generate a random number.

There are lots of mathematical methods
that you might want to use in your programs like ``Math.abs`` (absolute value).  These methods are in the ``Math`` class and are **static** (**class**) methods so that you can call them by just using ``ClassName.methodName``.  

.. note::

   **Class** or **static** methods are in the object that defines the class (an object of a class named ``Class``) and can be accessed directly from the class.  You do not need to create an object of the class to use them. 

The ``Math.random()`` method returns a number greater than or equal to 0.0, and less than 1.0. Try out the following code.  Run it several times to see what it prints each time.

.. activecode:: random1
   :language: java
   
   public class Test3
   {
      public static void main(String[] args)
      {
        System.out.println(Math.random());
        System.out.println(Math.random());
      }
   }
  
You can use ``Math.random`` and a cast to integer to return a random number between some starting and ending value.  The code below will return a random number from 0 to 9.

.. note::

   Remember that a casting a double value to integer ``(int)`` will throw away any values after the decimal point.
   
Run the code below several times to see how the value changes each time.
   
.. activecode:: randomRange
   :language: java
   
   public class Test4
   {
      public static void main(String[] args)
      {
        System.out.println((int) (Math.random() * 10));
      }
   }
   
How could you change the code above to return a random number from 1 to 10?  Modify the code above and see if your answer is correct.  

Here are some other examples that move a random number into a specific range.


.. code-block:: java 

    // Math.random() returns a random number between 0.0-0.99.
    // Math.random()*10 moves it into the range 0-9.
    int rnd = (int)(Math.random()*10);
    // rnd2 is in the range 5-9.
    int rnd2 = (int)(Math.random()*10 + 5);



**Check your understanding**

.. mchoice:: qrand_1
   :answer_a: Math.random() < 0.4
   :answer_b: Math.random() > 0.4
   :answer_c: Math.random() == 0.4
   :correct: a
   :feedback_a: This is true about 40% of the time since Math.random returns a value from 0 to not quite 1.
   :feedback_b: This will be true about 60% of the time. 
   :feedback_c: Do not use == with double values!  Remember that Math.random can return any number between 0 and not quite 1 (about .99999999).  

   Which of the following would be true about 40% of the time?
   
.. mchoice:: qrand_2
   :answer_a: ((int) (Math.random() * 5))
   :answer_b: ((int) (Math.random() * 6))
   :answer_c: ((int) Math.random() * 5) + 1
   :correct: c
   :feedback_a: This would be a number between 0 and 4. 
   :feedback_b: This would be a number between 0 and 5.
   :feedback_c: The first part would return a number between 0 and 4 and when you add 1 you get a number from 1 to 5 inclusive. 

   Which of the following would return a random number from 1 to 5 inclusive?
   
.. mchoice:: qrand_3
   :answer_a: ((int) (Math.random() * 10))
   :answer_b: ((int) (Math.random() * 11))
   :answer_c: ((int) Math.random() * 10) + 1
   :correct: b
   :feedback_a: This would be a number between 0 and 9.
   :feedback_b: This would be a number between 0 and 10.
   :feedback_c: The first part would return a number between 0 and 9 and when you add 1 you get a number from 1 to 10 inclusive. 

   Which of the following would return a random number from 0 to 10 inclusive?
   
.. mchoice:: qrand_4
   :answer_a: Math.random() < 0.25
   :answer_b: Math.random() > 0.25
   :answer_c: Math.random() == 0.25
   :correct: b
   :feedback_a: This is true about 25% of the time, since it will be a number from 0 to not quite 1.
   :feedback_b: This is true about 75% of the time, since it will be a number from 0 to not quite 1.
   :feedback_c: Do not use == with double values!  Remember that Math.random can return any number between 0 and not quite 1 (about .99999999).  

   Which of the following would be true about 75% of the time?
   

   
Other Math functions that you can use are:


- int abs(int) : Returns the absolute value of an int value (which just removes any negative signs).

- double abs(double) : Returns the absolute value of a double value.

- double pow(double, double) : Returns the value of the first parameter raised to the power of the second parameter.

- double sqrt(double) :  Returns the positive square root of a double value.

- double random() :  Returns a double value greater than or equal to 0.0 and less than 1.0.



These are all listed in the Java Quick Reference guide that you can use during the exam: https://secure-media.collegeboard.org/digitalServices/pdf/ap/explore-ap/AP_Computer-Science-A-Quick-Reference.pdf.  
