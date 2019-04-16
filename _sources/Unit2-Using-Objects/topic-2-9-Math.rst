.. qnum::
   :prefix: 2-9-
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
  

   


You can use ``Math.random`` and a cast to integer to return a random number between some starting and ending value.  The code below will return a random number from 0 to 9. Remember that a casting a double value to integer ``(int)`` will throw away any values after the decimal point.

|CodingEx| **Coding Exercise**

Run the code below several times to see how the value changes each time. How could you change the code above to return a random number from 1 to 10?  Modify the code and see if your answer is correct. Try removing the parentheses from around (Math.random() * 10) and run the code several times. What happens? The parentheses are necessary because (int) will cast the closest expression, and (int)Math.random() will always be 0 since anything after the decimal point is dropped.
   
.. activecode:: randomRange
   :language: java
   
   public class Test4
   {
      public static void main(String[] args)
      {
        System.out.println((int) (Math.random() * 10));
      }
   }
   
  
.. note::

    Math.random() returns a random number between 0.0-0.99. 
    **(int)(Math.random()*range + min)** moves the random number into a range starting from a minimum number.
    
Here are some examples that move a random number into a specific range.


.. code-block:: java 

    // Math.random() returns a random number between 0.0-0.99.
    // Math.random()*10 moves it into the range 0-9.
    int rnd = (int)(Math.random()*10);
    // rnd2 is in the range 5-9. The parentheses are necessary!
    int rnd2 = (int)(Math.random()*10 + 5);
    // rnd3 is in the range -10 up to 10. The range is doubled and the minimum is -10.
    int rnd3 = (int)(Math.random()*20 - 10);


|Exercise| **Check your understanding**

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

- double random() :  Returns a double value greater than or equal to 0.0 and less than 1.0 (not including 1.0!).



These are all listed in the Java Quick Reference guide that you can use during the exam: https://secure-media.collegeboard.org/digitalServices/pdf/ap/explore-ap/AP_Computer-Science-A-Quick-Reference.pdf.  

|Groupwork| Programming Challenge
--------------------------------------

.. image:: Figures/lock.jpg
    :width: 100
    :align: left
    :alt: lock
    
You may have a combination lock on your locker at school where you have to spin the dial to 3 separate numbers from 0 up to 40. What if you forgot your combination? Would you be able to guess it? Write code that will generate 3 random numbers from 0 up to 40 (but not including 40) using **Math.random()**. Run it a couple times to see it generate different numbers. How many times would you need to run it to guess your combination correctly? Let's have the code compute that using the **Math.pow(number,exponent)** method. Here is an example using Math.pow().

.. code-block:: java 
  
  // this would return the number of combinations to choose 2 numbers between 0-9. 
  double combinations = Math.pow(10,2);
 
 
.. activecode:: mathChallenge
   :language: java
   
   public class MathChallenge
   {
      public static void main(String[] args)
      {
        // 1. Use Math.random() to generate 3 numbers from 0-40 (not including 40) and print them out.
        
        
        // 2. Calculate the number of combinations to choose 3 numbers between 0-40 (not including 40) using Math.pow() and print it out.
        
        
      }
   }
   
   
Summary
-------------------

- Static Math methods can be called using **Math**.method(); for each method.

- The following static Math methods are part of the Java Quick Reference:

  - **int abs(int)** : Returns the absolute value of an int value (which means no negatives).
  - **double abs(double)** : Returns the absolute value of a double value.
  - **double pow(double, double)** : Returns the value of the first parameter raised to the power of the second parameter. 
  - **double sqrt(double)** :  Returns the positive square root of a double value.
  - **double random()** :  Returns a double value greater than or equal to 0.0 and less than 1.0 (not including 1.0)!
  
- The values returned from Math.random can be manipulated to produce a random int or double in a defined range. For example, to get a number in the range of 5 to 9, use:

  - int rnd = (int)(Math.random()*10 + 5);