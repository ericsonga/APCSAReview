.. qnum::
   :prefix: 5-4-
   :start: 1
   
DeMorgan's Laws
---------------

..	index::
	single: DeMorgan's Laws
	single: negation
	
DeMorgan's laws were developed by Augustus De Morgan in the 1800s.  They show how to handle the negation of a complex conditional.

    -  not (a and b) is the same as (not a) or (not b)
    
    -  not (a or b) is the same as (not a) and (not b)
    
Notice that an ``and`` is changed to an ``or`` by negation and an ``or`` to an ``and``.  

Java uses ``!`` to indicate negation.  Applying DeMorgan's Laws to ``!(x < 3 && y > 2)`` means that this complex conditional will be true when ``(x >= 3 || y <= 2) and !(x < 3 || y > 2)`` is the same as ``(x >= 3 && y <= 2)``.  

For more information about DeMorgan's laws see http://en.wikipedia.org/wiki/De_Morgan's_laws.  

.. mchoice:: qcb_8
   :answer_a: first case
   :answer_b: second case 
   :correct: b
   :feedback_a: This will print if x is greater than or equal 3 and y is less than or equal 2.  In this case x is greater than 3 but y is not less than or equal 2.  
   :feedback_b: This will print if x is less than 3 or y is greater than 2. 

   What is printed when the following code executes and x equals 4 and y equals 3?   
   
   .. code-block:: java 

     if (!(x < 3 || y > 2)) System.out.println("first case");
     else System.out.println("second case");
     
.. mchoice:: qcb_9
   :answer_a: first case
   :answer_b: second case 
   :correct: a
   :feedback_a: This will print if x is greater than or equal 3 or y is less than or equal 2.  In this case x is greater than 3 so the first condition is true.
   :feedback_b: This will print if x is less than 3 and y is greater than 2.  

   What is printed when the following code executes and x equals 4 and y equals 3?   
   
   .. code-block:: java 

     if (!(x < 3 && y > 2)) System.out.println("first case");
     else System.out.println("second case");