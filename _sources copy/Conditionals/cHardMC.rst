.. qnum::
   :prefix: 5-9-
   :start: 1
   
Hard Multiple Choice Questions
----------------------------------

These problems are harder than most of those that you will usually see on the AP CS A exam.

.. mchoice:: qch_1
   :answer_a: s starts with two or more of the same characters
   :answer_b: s contains two or more of the same characters
   :answer_c: s contains two or more of the same character in a row
   :answer_d: s ends with two or more of the same characters
   :answer_e: s.charAt(0) == s.charAt(1)
   :correct: c
   :feedback_a: It is not neccessary for the adjoining characters to be at the start of the string.
   :feedback_b: The character must be adjoining in order to satisfy the s.charAt(0) == s.charAt(1) portion of the return statement.  
   :feedback_c: This will return true when s has at least 2 characters in it and at least 2 characters are the same in a row. 
   :feedback_d: It is not neccessary for the adjoining characters to be at the end of the string.
   :feedback_e: This returns true whenever there are at least 2 of the same character in a row in the string. It does this because of the recursive call. So, the first two characters don't have to be the ones that are the same.

   The following method will return true if and only if:

   .. code-block:: java

     public boolean check(String s) {
        return s.length() >= 2 && (s.charAt(0) == 
           s.charAt(1) || check(s.substring(1)));
     }
    
.. mchoice:: qch_2
   :answer_a: s == (m - 5) && (2 * s + 3) == (m + 3)
   :answer_b: (s == m - 5) && (s - 3 == 2 * (m - 3))
   :answer_c: (s == (m + 5)) && ((s + 3) == (2 * m + 3))
   :answer_d: s == m + 5 && s + 3 == 2 * m + 6
   :answer_e: None of the above is correct.
   :correct: d
   :feedback_a: This can't be right because Susan is 5 years older than Matt, so the first part is wrong. It has Susan equal to Matt's age minus 5, which would have Matt older than Susan.
   :feedback_b: This would be true if Susan was 5 years younger than Matt and three years ago she was twice his age. But, how could she be younger than him now and twice his age three years ago?
   :feedback_c: This is almost right. It has Susan as 5 years older than Matt now. But the second part is wrong. Multiplication will be done before addition so (2 * m + 3) won't be correct, for in 3 years Susan will be twice as old as Matt. It should be (2 * (m + 3)) or (2 * m + 6)
   :feedback_d: Susan is 5 years older than Matt so s == m + 5 should be true and in 3 years she will be twice as old, so s + 3 = 2 * (m + 3) = 2 * m + 6
   :feedback_e: s == m + 5 && s + 3 == 2 * m + 6 is correct

   Susan is 5 years older than Matt. Three years from now Susan's age will be twice Matt's age. What should be in place of the following condition to solve this problem?
   
   .. code-block:: java

     for (int s = 1; s <=100; s++) {
        for (int m = 1; m <= 100; m++) {
           if (condition)
              System.out.println("Susan is " + s + " and Matt is " + m);
        }
     }

.. mchoice:: qch_3
   :answer_a: (x > 15 && x < 18) && (x > 10)
   :answer_b: (y < 20) || (x > 15 && x < 18)
   :answer_c: ((x > 10) || (x > 15 && x < 18)) || (y < 20)
   :answer_d: (x < 10 && y > 20) && (x < 15 || x > 18) 
   :correct: c
   :feedback_a: This can't be right as it's only checking the x variable, however the original statement can solely depend on the y variable in some cases.
   :feedback_b: There's a third condition on x that can affect the output of the statement which is not considered in this solution.
   :feedback_c: The commutative property allows the terms to be switched around, while maintaining the value. In this case, the || symbol is used with the commutative property and the statement included the && must stay together to follow the laws of logic.
   :feedback_d: This is the negation of the original statement, thus returning incorrect values.

   Assuming that x and y have been declared as valid integer values, which of the following is equivalent to this statement?
   
   .. code-block:: java

     (x > 15 && x < 18) || (x > 10 || y < 20)

