.. qnum::
   :prefix: 11-8-
   :start: 1

Hard Multiple Choice Questions
----------------------------------

These problems are about the same or harder than those that you will typically see on the AP CS A exam.

.. mchoice:: qrh_1
   :answer_a: The string <code>s</code> contains two or more of the same characters.
   :answer_b: The string <code>s</code> starts with two or more of the same characters.
   :answer_c: The string <code>s</code> contains two or more of the same character that are next to each other.
   :answer_d: The string <code>s</code> ends with two or more of the same characters
   :correct: c
   :feedback_a: It is not enough for <code>s</code> to contain two of the same characters, they must be adjacent to satisfy <code>s.charAt(0) == s.charAt(1)</code>.
   :feedback_b: It is not neccessary for the adjacent characters to be at the start of the string.
   :feedback_c: This method will return true when <code>s</code> has at least 2 characters in it and at least 2 characters are the same and are adjacent.
   :feedback_d: It is not neccessary for the adjacent characters to be at the end of the string.

   Given the following method declaration, this method will return true if and only if:
   
   .. code-block:: java 

      public boolean check(String s)
      {
         return s.length() >= 2 && 
                (s.charAt(0) == s.charAt(1) || 
                 check(s.substring(1)));
      }
      
.. mchoice:: qrh_2
   :answer_a: 5
   :answer_b: 4
   :answer_c: 6
   :answer_d: 7
   :answer_e: The method never returns due to infinite recursion.
   :correct: a
   :feedback_a: The first time the method is called, <code>i</code> is not equal to 0, so the method makes a recursive call to itself, with the value of 82/3 which equals 27 due to integer division.  This is still not equal to 0, so the method calls itself with the first parameter equal to 9, then 3, then 1. Finally, the method is called with the first parameter of 1/3 which equals 0 due to integer division which throws away any decimal part. Each method call adds 1 to the result, except for the final call when <code>i</code> is equal to 0.
   :feedback_b: Each time the method is called when <code>i</code> is not equal to 0, the return value is incremented. This happens 5 times, with <code>i</code> equal to 81, 27, 9, 3, and 1.
   :feedback_c: The return value is not incremented the last time the method is called, when <code>i</code> is equal to 0.
   :feedback_d: The method only executes 6 times, with the return value incremented each time <code>i</code> is not equal to zero
   :feedback_e: Infinite recursion would happen if the method never reached its base case where <code>i</code> is equal to 0. This would be true if the division could result in a constantly shrinking fraction, but integer division truncates the fractional portion of the division.

   Given the following method declaration, what will ``redo(82, 3)`` return?
   
   .. code-block:: java 

      public int redo(int i, int j)
      {
         if (i==0)
            return 0;
         else 
            return redo(i/j, j)+1;
      }