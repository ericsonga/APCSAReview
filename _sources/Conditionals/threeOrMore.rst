.. qnum::
   :prefix: 5-2-
   :start: 1
   
.. highlight:: java
   :linenothreshold: 4

	
Three or More Options
===========================

You can even pick between 3 or more possibilites. Just add **else if** for each possibility after the first **if** and before the last possibility, the **else**.  

.. activecode:: lccb3
   :language: java
   
   public class Test3
   {
      public static void main(String[] args)
      {
        int x = 2;
        if (x < 0) System.out.println("x is negative");
        else if (x == 0) System.out.println("x is 0");
        else System.out.println("x is positive");
      }
   }
  
**Check your understanding**

.. mchoice:: qcb2_1
   :answer_a: x is negative
   :answer_b: x is zero
   :answer_c: x is positive
   :correct: a
   :feedback_a: When x is equal to -5 the condition of x < 0 is true. 
   :feedback_b: This will only print if x has been set to 0.  Has it?
   :feedback_c: This will only print if x is greater than zero.  Is it?

   What does the following code print when x has been set to -5?
   
   .. code-block:: java 

     if (x < 0) System.out.println("x is negative");
     else if (x == 0) System.out.println("x is zero"); 
     else System.out.println("x is positive"); 
     
.. mchoice:: qcb2_2
   :answer_a: x is negative
   :answer_b: x is zero
   :answer_c: x is positive
   :correct: c
   :feedback_a: This will only print if x has been set to a number less than zero. Has it? 
   :feedback_b: This will only print if x has been set to 0.  Has it?
   :feedback_c: The first condition is false and x is not equal to zero so the else will execute.  

   What does the following code print when x has been set to 2000?
   
   .. code-block:: java 

     if (x < 0) System.out.println("x is negative");
     else if (x == 0) System.out.println("x is zero"); 
     else System.out.println("x is positive"); 
     

     

  

     


     

 
