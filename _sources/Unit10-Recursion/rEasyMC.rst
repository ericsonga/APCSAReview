.. qnum::
   :prefix:  10-7-2-
   :start: 1

Easier Multiple Choice Questions
----------------------------------

These problems are easier than most of those that you will usually see on the AP CSA exam.


.. mchoice:: qre_1
   :practice: T
   :answer_a: 1
   :answer_b: 3
   :answer_c: 5
   :answer_d: 9
   :correct: d
   :feedback_a: This is the method declaration.  Look for a call to the same method in the body of the method.
   :feedback_b: This is a conditional, not a method call.
   :feedback_c: This is a return statement, not a method call.
   :feedback_d: This line contains a call to the same method which makes this method recursive.

   Which line has the recursive call?

   .. code-block:: java
      :linenos:

      public static int factorial(int n)
      {
          if (n == 0)
          {
              return 1;
          }
          else
          {
              return n * factorial(n-1);
          }
      }

.. mchoice:: qre_2
   :practice: T
   :answer_a: 1
   :answer_b: 3
   :answer_c: 5
   :answer_d: 7
   :answer_e: 9
   :correct: e
   :feedback_a: This is the method declaration.  Look for a call to the same method in the body of the method.
   :feedback_b: This is a conditional, not a method call.
   :feedback_c: This is a return statement, not a method call.
   :feedback_d: This is an else which is part of a conditional, not a method call.
   :feedback_e: This line contains a call to the same method which makes this method recursive.

   Which line has the recursive call?

   .. code-block:: java
      :linenos:

      public String starString(int n)
      {
          if (n == 0)
          {
              return "*";
          }
          else
          {
              return starString(n - 1) + starString(n - 1);
          }
      }

.. mchoice:: qre_3
   :practice: T
   :answer_a: 0
   :answer_b: 1
   :answer_c: 2
   :answer_d: 3
   :correct: c
   :feedback_a: Look at line 13 more closely.
   :feedback_b: Many recursive methods only have one recursive call.  But, this one has two.
   :feedback_c: Line 13 has two calls to <code>fibonacci</code>.
   :feedback_d: There are not 3 calls to <code>fibonacci</code>.

   How many recursive calls does the following method contain?

   .. code-block:: java
      :linenos:

      public static int fibonacci(int n)
      {
          if (n == 0)
          {
              return 0;
          }
          else if (n == 1)
          {
              return 1;
          }
          else
          {
              return fibonacci(n-1) + fibonacci(n-2);
          }
      }

.. mchoice:: qre_4
   :practice: T
   :answer_a: 0
   :answer_b: 1
   :answer_c: 2
   :answer_d: 3
   :correct: b
   :feedback_a: Look for a call to the same method in the body of the method.
   :feedback_b: Line 9 has one call to <code>multiplyEvens</code>.
   :feedback_c: Where do you see 2 calls to <code>multiplyEvens</code>?
   :feedback_d: Where do you see 3 calls to <code>multiplyEvens</code>?

   How many recursive calls does the following method contain?

   .. code-block:: java
      :linenos:

      public static int multiplyEvens(int n)
      {
          if (n == 1)
          {
              return 2;
          }
          else
          {
              return 2 * n * multiplyEvens(n - 1);
          }
      }
