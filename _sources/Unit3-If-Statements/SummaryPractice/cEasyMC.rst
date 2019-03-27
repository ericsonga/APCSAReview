.. qnum::
   :prefix: 5-8-
   :start: 1
   
Easy Multiple Choice Questions
----------------------------------

These problems are easier than most of those that you will usually see on the AP CS A exam. 

.. mchoice:: qce_1
   :answer_a: x is negative
   :answer_b: x is zero
   :answer_c: x is positive
   :correct: c
   :feedback_a: This will only print if x has been set to a number less than zero. Has it? 
   :feedback_b: This will only print if x has been set to 0.  Has it?
   :feedback_c: The first condition is false and x is not equal to zero so the else will execute.  

   What does the following code print when x has been set to 187?
   
   .. code-block:: java 

     if (x < 0) System.out.println("x is negative");
     else if (x == 0) System.out.println("x is zero"); 
     else System.out.println("x is positive");

.. mchoice:: qce_2
   :answer_a: first case
   :answer_b: second case 
   :correct: b
   :feedback_a: This will print if x is greater than or equal 3 and y is less than or equal 2.  In this case x is greater than 3 so the first condition is true, but the second condition is false.
   :feedback_b: This will print if x is less than 3 or y is greater than 2.  

   What is printed when the following code executes and x equals 4 and y equals 3?   
   
   .. code-block:: java 

     if (!(x < 3 || y > 2)) System.out.println("first case");
     else System.out.println("second case");

.. mchoice:: qce_3
   :answer_a: A
   :answer_b: B
   :answer_c: C
   :answer_d: D
   :answer_e: E
   :correct: d
   :feedback_a: Notice that each of the first 4 statements start with an if.  What will actually be printed?  Try it.  
   :feedback_b: Each of the first 4 if statements will execute.
   :feedback_c: Check this in DrJava.
   :feedback_d: Each of the if statements will be executed. So grade will be set to B then C and finally D.  
   :feedback_e: This will only be true when score is less than 60.   

   What is the value of grade when the following code executes and score is 80?  
   
   .. code-block:: java 

     if (score >= 90) grade = "A";
     if (score >= 80) grade = "B";
     if (score >= 70) grade = "C";
     if (score >= 60) grade = "D";
     else grade = "E";

.. mchoice:: qce_4
   :answer_a: first case
   :answer_b: second case
   :answer_c: You will get a error because you can't divide by zero.  
   :correct: c
   :feedback_a: This will print if either of the two conditions are true.  The first isn't true but the second will cause an error.
   :feedback_b: This will print if both of the conditions are false.  But, an error will occur when testing the second condition.   
   :feedback_c: The first condition will be false so the second one will be executed and lead to an error since you can't divide by zero.

   What is printed when the following code executes and x has been set to zero and y is set to 3?  
   
   .. code-block:: java 

     if (x > 0 || (y / x) == 3) System.out.println("first case");
     else System.out.println("second case");
