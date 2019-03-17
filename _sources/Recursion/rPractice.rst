.. qnum::
   :prefix: 12-5-
   :start: 1

Base Case Practice
====================

A recursive method contains a call to itself.  The recursion stops when a base case test is true and a value is returned.

.. clickablearea:: rec_base1
    :question: Click on the line or lines that contain the test for the base case
    :iscode:
    :feedback: When a base case test is true a value is returned and the recursion stops.


    :click-incorrect:public static int factorial(int n):endclick:
    :click-incorrect:{:endclick:
        :click-correct:if (n == 0):endclick:
            :click-incorrect:return 1;:endclick:
        :click-incorrect:else:endclick:
            :click-incorrect:return n * factorial(n-1);:endclick:
    :click-incorrect:}:endclick:

.. clickablearea:: rec_base2
   :question: Click on the line or lines that contain the test for the base case
   :iscode:
   :feedback: When a base case test is true a value is returned and the recursion stops

   :click-incorrect:public static int mystery(int n):endclick:
   :click-incorrect:{:endclick:
       :click-correct:if (n == 0):endclick:
           :click-incorrect:return 1;:endclick:
       :click-incorrect:else:endclick:
           :click-incorrect:return 2 * mystery (n - 1);:endclick:
   :click-incorrect:}:endclick:

.. clickablearea:: rec_base3
   :question: Click on the line or lines that contain the test for the base case
   :iscode:
   :feedback: When a base case test is true a value is returned and the recursion stops

   :click-incorrect:public static int bunnyEars(int bunnies):endclick:
   :click-incorrect:{:endclick:
       :click-correct:if (bunnies == 0) return 0;:endclick:
       :click-correct:else if (bunnies == 1) return 2;:endclick:
       :click-incorrect:else return 2 + bunnyEars(bunnies - 1);:endclick:
   :click-incorrect:}:endclick:

.. clickablearea:: rec_base4
      :question: Click on the line or lines that contain the test for the base case
      :iscode:
      :feedback: When a base case test is true a value is returned and the recursion stops

      :click-incorrect:public static void mystery (int x) {:endclick:
          :click-incorrect:System.out.print(x % 10);:endclick:
          :click-correct:if ((x / 10) != 0) {:endclick:
              :click-incorrect:mystery(x / 10);:endclick:
          :click-incorrect:}:endclick:
          :click-incorrect:System.out.print(x % 10);:endclick:
      :click-incorrect:}:endclick:

.. clickablearea:: rec_base5
   :question: Click on the line or lines that contain the test for the base case
   :iscode:
   :feedback: When a base case test is true a value is returned and the recursion stops

   :click-incorrect:public static void mystery (int x) {:endclick:

   public static int mystery(String str)
   {
       if (str.length() == 1) return 0;
       else
       {
           if (str.substring(0,1).equals("y")) return 1 +
                              mystery(str.substring(1));
            else return mystery(str.substring(1));
         }
      }

Trace Practice
====================

Consider the following recursive method:

.. code-block:: java
 :linenos:

 public static int mystery(int n)
 {
    if (n == 0)
       return 1;
    else
       return 3 * mystery (n - 1);
 }

The trace of this code for mystery(4) is shown below.

.. code-block:: java

   mystery(4) returns 3 * mystery(3)
   mystery(3) returns 3 * mystery(2)
   mystery(2) returns 3 * mystery(1)
   mystery(1) returns 3 * mystery(0)
   mystery(0) returns X

.. fillintheblank:: recFBBase1

   What is the value of X in the trace above?

   -    :^1$: Correct!
        :.*: What is the value returned when mystery is called with a 0?

Once mystery(0) returns 1 the value for each call to mystery can now be calculated and returned.

.. code-block:: java

   mystery(4) returns 3 * mystery(3) = 3 * x = mystery()
   mystery(3) returns 3 * mystery(2) = 3 * 9 = 27
   mystery(2) returns 3 * mystery(1) = 3 * 3 = 9
   mystery(1) returns 3 * mystery(0) = 3 * 1 = 3
   mystery(0) returns 1

.. fillintheblank:: recFBTracex

   What is the value of x in the trace above?

   -    :^27$: Correct!
        :.*: It is the result of mystery(3)

.. fillintheblank:: recFBTracey

   What is the value of y in the trace above?

   -    :^81$: Correct!
        :.*: It is the result of 3 * mystery(3)


Try Writing a Recursive Method
=================================
If you would like to try writing recursive methods check out the recursion problems at CodingBat at http://codingbat.com/java/Recursion-1.
