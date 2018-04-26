.. qnum::
   :prefix: 5-5-
   :start: 1
   
DeMorgan's Laws
---------------

..	index::
	single: DeMorgan's Laws
	single: negation
	
DeMorgan's laws were developed by Augustus De Morgan in the 1800s.  They show how to handle the negation of a complex conditional, which is a conditional statement with more than one condition joined by an and (&&) or or (||), such as ``(x < 3) && (y > 2)``.

    -  not (a and b) is the same as (not a) or (not b).  In Java this is written as !(a && b) == !a || !b 
    
    -  not (a or b) is the same as (not a) and (not b).  In Java this is written as !(a || b) == !a && !b 

Applying DeMorgan's Laws to ``!(x < 3 && y > 2)`` yields ``!(x < 3) || !(y > 2)`` which means that this complex conditional will be true when ``(x >= 3 || y <= 2)``.

.. note ::

   Notice that the negation is distributed to all parts of a complex conditional.  It negates each part of the conditional and changes and (&&) to or (||) and or (||) to and (&&).

The negation modifies each conditional as shown below.

	- < becomes >=
	- > becomes <=
	- == becomes !=
	- <= becomes >
	- >= becomes < 
	- != becomes ==

See the example below.  For what values of x and y will it print true?  Try out different values of x and y to check your answer.

.. activecode:: lcdmtest
   :language: java
   
   public class Test1
   {
      public static void main(String[] args)
      {
        int x = 2;
        int y = 3;
        System.out.println(!(x < 3 && y > 2));
      }
   }

For more information about DeMorgan's laws see http://en.wikipedia.org/wiki/De_Morgan's_laws.  

.. mchoice:: qcbdm1_8
   :answer_a: first case
   :answer_b: second case 
   :correct: b
   :feedback_a: This will be printed if x is greater or equal to 3 and y is less than or equal to 2.  The first part is true but the second is false.  Since the statements are joined by an and the complex conditional is false.
   :feedback_b: This will be printed if x is less than 3 or y is greater than 2.  In this case the first will be false, but the second true so since the statements are joined with an or the complex conditional is true.

   What is printed when the following code executes and x equals 4 and y equals 3?   
   
   .. code-block:: java 

     if (!(x < 3 || y > 2)) System.out.println("first case");
     else System.out.println("second case");
     
.. mchoice:: qcbdm2_9
   :answer_a: first case
   :answer_b: second case 
   :correct: a
   :feedback_a: This will be printed if x is greater than or equal to 3 or y is less than or equal to 2.  In this case x is greater than 3 so the first condition is true.
   :feedback_b: This will be printed if x is less than 3 and y is greater than 2.  

   What is printed when the following code executes and x equals 4 and y equals 3?   
   
   .. code-block:: java 

     if (!(x < 3 && y > 2)) System.out.println("first case");
     else System.out.println("second case");
     
.. mchoice:: qcbdm3_1
   :answer_a: (x < 2) || (y > 4)
   :answer_b: (x < 2) && (y > 4)
   :answer_c: (x <= 2) || (y >= 4)
   :answer_d: (x <= 2) && (y >= 4)
   :correct: c
   :feedback_a: The negation of x > 2 is x <= 2
   :feedback_b: Don't forget that the and is changed to an or
   :feedback_c: The x > 2 becomes x <= 2, the y < 4 becomes y >= 4 and the and changes to or
   :feedback_d: Don't forget that the and is changed to an or

   Which of the following is the same as the code below? 
   
   .. code-block:: java 

     !(x > 2 && y < 4)
     
.. mchoice:: qcbdm4_2
   :answer_a: (x != 2) || (y < 4)
   :answer_b: (x != 2) && (y < 4)
   :answer_c: (x != 2) && (y <= 4)
   :answer_d: (x != 2) || (y <= 4)
   :correct: d
   :feedback_a: The negation of y > 4 is y <= 4
   :feedback_b: Don't forget that the and is changed to an or
   :feedback_c: Don't forget that the and is changed to an or
   :feedback_d: The and is changed to an or, the (x == 2) becomes (x != 2) and (y > 4) becomes (y <= 4)

   Which of the following is the same as the code below? 
   
   .. code-block:: java 

     !(x == 2 && y > 4)
     
.. mchoice:: qcbdm5_3
   :answer_a: (x == 5) || (y == 7)
   :answer_b: (x == 5) && (y == 7)
   :answer_c: (x != 5) || (y != 7) 
   :answer_d: (x < 5) || (x > 5) || (y > 7) || (y < 7)
   :correct: a
   :feedback_a: The negation of && is || and the negation of != is ==
   :feedback_b: The negation of && is ||
   :feedback_c: The negation of x != 5 is x == 5.  The negation of y !=  7 is y == 7.
   :feedback_d: The negation of == is != which is the same as < or >.  The negation of != is ==.

   Which of the following is the same as the code below? 
   
   .. code-block:: java 

     !(x!=5 && y!=7)
     
.. mchoice:: qcbdm6_4
   :answer_a: (x > 5) && (y < 7)
   :answer_b: (x > 5) || (y < 7)
   :answer_c: (x > 5) && (y <= 7)
   :answer_d: (x > 5) || (y <= 7)
   :correct: d
   :feedback_a: The negation of && is || and the negation of y > 7 is y <= 7.
   :feedback_b: The negation of y > 7 is y <= 7.
   :feedback_c: The negation of && is ||.
   :feedback_d: The negation of (x <= 5) is (x > 5).  The negation of && is ||.  The negation of (y > 7) is (y <= 7).


   Which of the following is the same as the code below? 
   
   .. code-block:: java 

     !(x<= 5 && y > 7)