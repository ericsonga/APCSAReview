.. qnum::
   :prefix: 5-8-
   :start: 1

Medium Multiple Choice Questions
----------------------------------

These problems are similar to those you will see on the AP CS A exam.

.. mchoice:: qcm_1
   :answer_a: (!c) && (!d)
   :answer_b: (c || d)
   :answer_c: (c && d)
   :answer_d: !(c && d)
   :answer_e: (!c) || (!d)
   :correct: a
   :feedback_a: NOTing (negating) an OR expression is the same as the AND of the individual values NOTed (negated). See DeMorgans laws.
   :feedback_b: NOTing an OR expression does not result in the same values ORed.  
   :feedback_c: You do negate the OR to AND, but you also need to negate the values of c and d. 
   :feedback_d: This would be equivalent to (!c || !d)
   :feedback_e: This would be equivalent to !(c && d)

   Which of the following expressions is equivalent to !(c || d) ?  
   
.. mchoice:: qcm_2
   :answer_a: x = 0;
   :answer_b: if (x > 2) x *= 2;
   :answer_c: if (x > 2) x = 0;
   :answer_d: if (x > 2) x = 0; else x *= 2;
   :correct: c
   :feedback_a: If x was set to 1 then it would still equal 1.
   :feedback_b: What happens in the original when x is greater than 2?  
   :feedback_c: If x is greater than 2 it will be set to 0.  
   :feedback_d: In the original what happens if x is less than 2?  Does this give the same result?

   Which of the following is equivalent to the code segment below?  
   
   .. code-block:: java

     if (x > 2) x = x * 2;
     if (x > 4) x = 0;

.. mchoice:: qcm_3
   :answer_a: x = 0;
   :answer_b: if (x > 0) x = 0;
   :answer_c: if (x < 0) x = 0;
   :answer_d: if (x > 0) x = -x; else x = 0;
   :answer_e: if (x < 0) x = 0; else x = -1;
   :correct: a
   :feedback_a: No matter what x is set to originally, the code will reset it to 0.
   :feedback_b: Even if x is < 0, the above code will set it to 0.
   :feedback_c: Even if x is > than 0 originally, it will be set to 0 after the code executes.
   :feedback_d: The first if statement will always cause the second to be executed unless x already equals 0, such that x will never equal -x.
   :feedback_e: The first if statement will always cause the second to be executed unless x already equals 0, such that x will never equal -x.

   Which of the following is equivalent to the code segment below?  
   
   .. code-block:: java

     if (x > 0) x = -x;
     if (x < 0) x = 0;

.. mchoice:: qcm_4
   :answer_a: I and III only
   :answer_b: II only
   :answer_c: III only
   :answer_d: I and II only
   :answer_e: I, II, and III
   :correct: a
   :feedback_a: Choice I uses multiple if's with logical ands in the conditions to check that the numbers are in range. Choice II won't work since if you had a score of 94, it would first assign the grade to an "A" but then it would execute the next if and change the grade to a "B" and so on until the grade was set to a "C". Choice III uses ifs with else if to make sure that only one conditional is executed.
   :feedback_b: Choice II won't work since if you had a score of 94 it would first assign the grade to an "A" but then it would execute the next if and change the grade to a "B" and so on until the grade was set to a "C". This could have been fixed by using else if instead of just if. 
   :feedback_c: III is one of the correct answers. However, choice I is also correct. Choice I uses multiple if's with logical ands in the conditions to check that the numbers are in range. Choice II uses ifs with else if to make sure that the only one conditional is executed.  
   :feedback_d: Choice II won't work since if you had a score of 94 it would first assign the grade to an "A" but then it would execute the next if and change the grade to a "B" and so on until the grade was set to a "C". This could have been fixed by using else if instead of just if.
   :feedback_e: Choice II won't work since if you had a score of 94 it would first assign the grade to an "A" but then it would execute the next if and change the grade to a "B" and so on until the grade was set to a "C". This could have been fixed by using else if instead of just if.

   At a certain high school students receive letter grades based on the following scale: 93 or above is an A, 84 to 92 is a B, 75 to 83 is a C, and below 75 is an F. Which of the following code segments will assign the correct string to grade for a given integer score?
   
   .. code-block:: java

     I.   if (score >= 93)
           grade = "A";
          if (score >= 84 && score <=92)
           grade = "B";
          if (score >=75 && score <= 83)
           grade = "C";
          if (score < 75)
           grade = "F";

     II.  if (score >= 93)
           grade = "A";
          if (score >= 84)
           grade = "B";
          if (score >=75)
           grade = "C";
          if (score < 75)
           grade = "F";

     III. if (score >= 93)
           grade = "A";
          else if (score >= 84)
           grade = "B";
          else if (score >=75)
           grade = "C";
          else
           grade = "F";
