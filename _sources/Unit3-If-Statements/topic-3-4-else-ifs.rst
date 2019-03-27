.. qnum::
   :prefix: 3-4-
   :start: 1
   
.. highlight:: java
   :linenothreshold: 4

	
Multi-Selection: else-if Statements
===================================

You can even pick between 3 or more possibilites. Just add **else if** for each possibility after the first **if** and before the last possibility, the **else**.  

.. figure:: Figures/Condition-three.png
    :width: 450px
    :align: center
    :figclass: align-center

    Figure 1: The order that statements execute in a conditional with 3 options: if, else if, and else
    
Run the code below and try changing the value of x to get each of the three possible lines in the conditional to print.

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
        System.out.println("after conditional");
      }
   }
   
.. note:: Another way to handle 3 or more conditional cases is to use the ``switch`` and ``break`` keywords, but these will not be on the exam.  For a tutorial on using switch see https://docs.oracle.com/javase/tutorial/java/nutsandbolts/switch.html.
  
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
     
.. mchoice:: qcb2_3
   :answer_a: first quartile
   :answer_b: second quartile
   :answer_c: third quartile
   :answer_d: fourth quartile
   :correct: d
   :feedback_a: This will only print if x is less than 0.25.
   :feedback_b: This will only print if x is greater than or equal to 0.25 and less than 0.5.
   :feedback_c: The first only print if x is greater than or equal to 0.5 and less than 0.75.
   :feedback_d: This will print whenever x is greater than 0.75.

   What does the following code print when x has been set to .8?
   
   .. code-block:: java 

     if (x < .25) System.out.println("first quartile");
     else if (x < .5) System.out.println("second quartile"); 
     else if (x < .75) System.out.println("third quartile");
     else System.out.println("fourth quartile");
     

     

  

     


     

 
