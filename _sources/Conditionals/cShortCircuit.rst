.. qnum::
   :prefix: 5-4-
   :start: 1

Short Circuit Evaluation
=========================

..	index::
	single: short circuit evaluation
	pair: conditional; short circuit evaluation
  
Both ``&&`` and ``||`` use **short circuit evaluation**.  That means that the second condition isn't necessarily checked if the result from the first condition is enough to tell if the result is true or false.   In a complex conditional with a logical and (``&&``) both conditions must be true, so if the first is false, then the second doesn't have to be evaluated.  If the complex conditional uses a logical or (``||``) and the first condition is true, then the second condition won't be executed, since only one of the conditions needs to be true.    

.. note::

   In a complex conditional using a logical and (``&&``) the evaluation will short circuit (not execute the second condition) if the first condition is false.  In a complex conditional using a logical or (``||``) the evaluation will short circuit if the first condition is true.  
 
**Check your understanding**

.. mchoice:: qcb_7sc
   :answer_a: first case
   :answer_b: second case
   :answer_c: You will get a error because you can't divide by zero.  
   :correct: a
   :feedback_a: Since x is equal to zero the first expression in the complex conditional will be true and the (y / x) == 3 won't be evaluated, so it won't cause a divide by zero error.  It will print "first case".
   :feedback_b: Since x is equal to zero the first part of the complex conditional is true so it will print first case.
   :feedback_c: You won't get an error because of short circuit evaluation.  The (y / x) == 3 won't be evaluated since the first expression is true and an or is used.  

   What is printed when the following code executes and x has been set to zero and y is set to 3?  
   
   .. code-block:: java 

     if (x == 0 || (y / x) == 3) System.out.println("first case");
     else System.out.println("second case");
     
.. mchoice:: qcb_8sc
   :answer_a: first case
   :answer_b: second case
   :answer_c: You will get a error because you can't use a negative index with substring.   
   :correct: b
   :feedback_a: Since x is negative the complex conditional will be false and the second condition won't execute. Remember that with <code>&&</code> both parts of the condition must be true for the complex conditional to be true.  Using a negative substring index won't cause an error since that code will only be executed if x is greater than or equal to zero.
   :feedback_b: Since x is negative the second part of the complex conditional won't even execute so the else will be executed.  
   :feedback_c: This would be true if it wasn't using short circuit evaluation, but it is.  
   
   What is printed when the following code executes and x has been set to negative 1?   
   
   .. code-block:: java 

     String message = "help";
     if (x >= 0 && message.substring(x).equals("help") System.out.println("first case");
     else System.out.println("second case");
     
.. mchoice:: qcb_9sc
   :answer_a: first case
   :answer_b: second case
   :answer_c: You will get a error because you can't divide by zero.  
   :correct: c
   :feedback_a: The first part of the complex conditional is executed first and will cause a divide by zero error. Complex conditionals are executed from left to right as needed.  
   :feedback_b: Since x is equal to zero the evaluation of the first part of the complex conditional will cause a divide by zero error.
   :feedback_c: Since x is equal to zero the evaluation of the first part of the complex conditional will cause a divide by zero error.  You should switch the order of the conditionals to prevent the error because then the first condition would be false and the evaluation would short circuit and not evaluate the second condition. 

   What is printed when the following code executes and x has been set to zero and y is set to 3?  
   
   .. code-block:: java 

     if ((y / x) == 3 || x = 0) System.out.println("first case");
     else System.out.println("second case");