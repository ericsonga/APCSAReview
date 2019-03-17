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

   :click-incorrect:public static int mystery(String str):endclick:
   :click-incorrect:{:endclick:
       :click-correct:if (str.length() == 1) return 0;:endclick:
       :click-incorrect:else:endclick:
       :click-incorrect:{:endclick:
           :click-incorrect:if (str.substring(0,1).equals("y")) return 1 +:endclick:
                              :click-incorrect:mystery(str.substring(1));:endclick:
            :click-incorrect:else return mystery(str.substring(1));:endclick:
         :click-incorrect:}:endclick:
      :click-incorrect:}:endclick:
