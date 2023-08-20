.. qnum::
   :prefix: 10-7-3-
   :start: 1

Medium Multiple Choice Questions
----------------------------------

These problems are similar to those you will see on the AP CSA exam.

.. mchoice:: qrm_1
   :practice: T
   :answer_a: 1441
   :answer_b: 43211234
   :answer_c: 3443
   :answer_d: 12344321
   :answer_e: Many digits are printed due to infinite recursion.
   :correct: b
   :feedback_a: The first call to <code>mystery</code> with the integer 1234 will print 1234 % 10. The '%' means remainder. The remainder of 1234 divided by 10 is 4 so the first thing printed must be 4.
   :feedback_b: This has a recursive call which means that the method calls itself when (x / 10) is greater than or equal to zero. Each time the method is called it prints the remainder of the passed value divided by 10 and then calls the method again with the result of the integer division of the passed number by 10 (which throws away the decimal part). After the recursion stops by <code>(x / 10) == 0</code> the method will print the remainder of the passed value divided by 10 again.
   :feedback_c: The first call to <code>mystery</code> with the integer 1234 will print 1234 % 10. The '%' means remainder. The remainder of 1234 divided by 10 is 4 so the first thing printed must be 4.
   :feedback_d: The first call to <code>mystery</code> with the integer 1234 will print 1234 % 10. The '%' means remainder. The remainder of 1234 divided by 10 is 4 so the first thing printed must be 4.
   :feedback_e: When the recursive call to <code>mystery(1)</code> occurs (the 4th call to mystery), the division of x /10 equals .01--this becomes 0 because this is integer division and the remainder is thrown away. Therefore the current call will be completed and all of the previous calls to <code>mystery</code> will be completed.

   Given the following method declaration, which of the following is printed as the result of the call ``mystery(1234)``?

   .. code-block:: java
      :linenos:

      //precondition:  x >=0
      public static void mystery (int x)
      {
          System.out.print(x % 10);

          if ((x / 10) != 0)
          {
              mystery(x / 10);
          }
          System.out.print(x % 10);
      }

You can step through the code using the Java Visualizer by clicking on the following link: `Q-11-7-1 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=public+class+ClassNameHere+%7B%0A+++%0A+++public+static+void+mystery+(int+x)%0A+++%7B%0A+++++++++System.out.print(x+%25+10)%3B%0A%0A+++++++++if+((x+/+10)+!%3D+0)%0A+++++++++%7B%0A++++++++++++mystery(x+/+10)%3B%0A+++++++++%7D%0A+++++++++System.out.print(x+%25+10)%3B%0A+++%7D%0A+++%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A++++++mystery(1234)%3B%0A++++++%0A+++%7D%0A%7D&mode=display&curInstr=0>`_.

.. mchoice:: qrm_2
   :practice: T
   :answer_a: 243
   :answer_b: 0
   :answer_c: 3
   :answer_d: 81
   :answer_e: 27
   :correct: a
   :feedback_a: For the call <code>mystery(5)</code>, <code>n != 0</code> so the <code>else</code> statement is executed. This results in the next recursive call of <code>mystery(4)</code>. This will continue until the call <code>mystery(0)</code> is executed. At this point, the value 1 will be returned. Then each call of <code>mystery</code> can return with the 3 * the result of the recursive call. So this method will compute 3 to the given power.
   :feedback_b: This can never be 0 because the stopping condition returns 1 when you call <code>mystery(0)</code>
   :feedback_c: This would only be true if you called <code>mystery(1)</code>
   :feedback_d: This would be true if you called <code>mystery(4)</code>
   :feedback_e: This would be true if you called <code>mystery(3)</code>

   Given the following method declaration, what value is returned as the result of the call ``mystery(5)``?

   .. code-block:: java
      :linenos:

      public static int mystery(int n)
      {
          if (n == 0)
          {
              return 1;
          }
          else
          {
              return 3 * mystery (n - 1);
          }
      }

You can step through the code using the Java Visualizer by clicking on the following link: `Q-11-7-2 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=public+class+ClassNameHere+%7B%0A+++%0A+++public+static+int+mystery(int+n)%0A+++%7B%0A+++++++++if+(n+%3D%3D+0)%0A++++++++++++return+1%3B%0A+++++++++else%0A++++++++++++return+3+*+mystery+(n+-+1)%3B%0A+++%7D%0A+++%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A++++++System.out.println(mystery(5))%3B%0A++++++%0A+++%7D%0A%7D&mode=display&curInstr=0>`_.

.. mchoice:: qrm_3
   :practice: T
   :answer_a: 1
   :answer_b: 10
   :answer_c: 25
   :answer_d: 3125
   :answer_e: 15
   :correct: e
   :feedback_a: The value 1 will only be returned when the initial call to product is less than or equal to 1.
   :feedback_b: If you assume the purpose of the method is to compute <code>n * 2</code>, this is correct, but the product method does not do this. Be sure to trace the code to see what happens.
   :feedback_c: If you assume the purpose of the method is to compute <code>n * n</code> this is correct, but the product method does not do this. Be sure to trace the code to see what happens.
   :feedback_d: If you assume the purpose of the method is to compute <code>n ^ n</code>, this would be correct. But product does not do this. Be sure to trace the code to see what happens.
   :feedback_e: The result from <code>product(5)</code> is <code>5 * product(3)</code> which is 3 * product(1) which is <code>1</code> so the answer is <code>1 * 3 * 5 = 15</code>.

   Given the following method declaration, what value is returned as the result of the call ``product(5)``?

   .. code-block:: java
      :linenos:

      public static int product(int n)
      {
         if (n <= 1)
         {
             return 1;
         }
         else
         {
             return n * product(n - 2);
         }
      }

You can step through the code using the Java Visualizer by clicking on the following link: `Q11-7-3 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=public+class+ClassNameHere+%7B%0A+++%0A+++public+static+int+product(int+n)+%0A+++%7B%0A+++++++++if+(n+%3C%3D+1)%0A++++++++++++return+1%3B%0A+++++++++else%0A++++++++++++return+n+*+product(n+-+2)%3B%0A+++%7D%0A+++%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A++++++System.out.println(product(5))%3B%0A++++++%0A+++%7D%0A%7D&mode=display&curInstr=0>`_.

.. mchoice:: qrm_4
   :practice: T
   :answer_a: 8
   :answer_b: 3
   :answer_c: There is no result because of infinite recursion.
   :answer_d: 5
   :answer_e: 0
   :correct: d
   :feedback_a: This would be true if it was <code>f(6)</code> not <code>f(5)</code>.
   :feedback_b: This would be true if it was <code>f(4)</code> not <code>f(5)</code>.
   :feedback_c: This method will stop when <code>n</code> equals <code>0</code> or <code>1</code>.
   :feedback_d: This is the Fibonacci method which returns <code>0</code> for <code>0</code> and <code>1</code> for <code>1</code> and <code>Fibonacci(n-1) + Fibonacci(n-2)</code> for the rest of the numbers.
   :feedback_e: This would be true if it was <code>f(0)</code> not <code>f(5)</code>.

   Given the following method declaration, what value is returned as the result of the call ``f(5)``?

   .. code-block:: java
      :linenos:

      public static int f(int n)
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
             return f(n-1) + f(n-2);
         }
      }

You can step through the code using the Java Visualizer by clicking on the following link: `Q11-7-4 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=public+class+ClassNameHere+%7B%0A+++%0A+++public+static+int+f(int+n)%0A+++%7B%0A+++++++++if+(n+%3D%3D+0)%0A++++++++++++return+0%3B%0A+++++++++else+if+(n+%3D%3D+1)%0A++++++++++++return+1%3B%0A+++++++++else+return+f(n-1)+%2B+f(n-2)%3B%0A+++%7D%0A+++%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A++++++System.out.println(f(5))%3B%0A++++++%0A+++%7D%0A%7D&mode=display&curInstr=0>`_.
