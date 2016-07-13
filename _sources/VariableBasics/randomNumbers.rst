.. qnum::
   :prefix: 3-7-
   :start: 1
   

Random Numbers
=================

..	index::
	single: random method
	pair: Math; random method

Games would be boring if the same thing happened each time you played the game.  Games often use random numbers
to generate different possibilities.  You need to know how to use the ``Math.random()`` method to generate a random number. There are lots of mathematical methods
that you might want to use in your programs like Math.abs (absolute value).  These methods are in the Math class and are **static** (**class**) methods so that you can call them by just using ``ClassName.methodName``.  

.. note::

   **Class** or **static** methods are in the object that defines the class (an object of a class named ``Class``) and can be accessed directly from the class.  You do not need to create an object of the class to use them. 

The random() method returns a number greater than or equal to 0.0, and less than 1.0. Try out the following code.

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
   
How could you change the code above to return a random number from 1 to 10?  Modify the code above and see if your answer is correct.  

**Check your understanding**

.. mchoice:: q2_8
   :answer_a: if (Math.random() < 0.4)
   :answer_b: if (Math.random() > 0.4)
   :answer_c: if (Math.random() == 0.4)
   :correct: a
   :feedback_a: This is about 40% of the range from 0 to not quite 1 (which is what the Math.random method returns).   
   :feedback_b: This will be about a 60% chance.  
   :feedback_c: Do not use == with double values!  Remember that Math.random can return any number between 0 and not quite 1 (about .99999999).  

   Which of the following is a correct test for a 40% possibility?
   
