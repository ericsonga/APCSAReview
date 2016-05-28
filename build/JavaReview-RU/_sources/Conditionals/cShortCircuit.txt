.. qnum::
   :prefix: 5-4-
   :start: 1

Short Circuit Evaluation
=========================

..	index::
	single: short circuit evaluation
	pair: conditional; short circuit evaluation
  
Both ``&&`` and ``||`` use **short circuit evaluation**.  That means that the second condition isn't necessarily checked.  If the code uses ``&&`` and the first condition is false, the second condition won't be executed since the result will already be false.  If the code uses ``||`` and the first condition is true then the second condition won't be executed since only one of the conditions needs to be true.    
 
**Check your understanding**

.. mchoice:: qcb_7
   :answer_a: first case
   :answer_b: second case
   :answer_c: You will get a error because you can't divide by zero.  
   :correct: a
   :feedback_a: Since x is equal to zero the first expression in the complex conditional will be true and the (y / x) == 3 won't be evaluated.  It will print "first case".
   :feedback_b: This will only print when x != 0 but it does.   
   :feedback_c: You won't get an error because of short circuit evaluation.  The (y / x) == 3 won't be evaluated since the first expression is true and an or is used.  

   What is printed when the following code executes and x has been set to zero?  
   
   .. code-block:: java 

     if (x == 0 || (y / x) == 3) System.out.println("first case");
     else System.out.println("second case");