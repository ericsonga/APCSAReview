.. qnum::
   :prefix: 3-5-
   :start: 1

Compound Boolean Expressions
============================

..	index::
	single: and
	single: or
	single: truth table
	pair: logical; and
	pair: logical; or
	pair: conditional; complex

Ands (&&) and Ors (||)
----------------------

What if you want two things to be true before the body of the conditional is executed?  Use ``&&`` as a logical *and* to join two Boolean expressions and the body of the condition will only be executed only if both are true.  For example, what if you want to go out and your mom said you could if you clean your room and do your homework?  Run the code below and try different values for ``cleanedRoom`` and ``didHomework`` and see what they have to be for it to print ``You can go out``.

.. activecode:: lccc1
   :language: java
   
   public class Test1
   {
      public static void main(String[] args)
      {
        boolean cleanedRoom = true;
        boolean didHomework = false;
        if (cleanedRoom && didHomework) 
            System.out.println("You can go out");
        else 
            System.out.println("No, you can't go out");
      }
   }

What if it is okay if only one of two things is true? Use ``||`` as a logical *or* to join two Boolean expressions and the body of the condition will be executed if one or both are true.  For example, your Dad might say you can go out if you can walk or he doesn't need the car.  Try different values for ``walking`` and ``carIsAvailable`` and see what the values have to be to print ``You can go out``.

.. activecode:: lccc2
   :language: java
   
   public class Test2
   {
      public static void main(String[] args)
      {
        boolean walking = true;
        boolean carIsAvailable = false;
        if (walking || carIsAvailable) 
           System.out.println("You can go out");
        else System.out.println("No, you can't go out");
      }
   }

The following table (also called a **truth table**) shows the result for P && Q when P and Q are both expressions that can be true or false. As you can see below the result of P && Q is only true if both P and Q are true. 

+-------+-------+-----------+
| P     | Q     | P && Q    |
+=======+=======+===========+
| true  | true  | true      |
+-------+-------+-----------+
| false | true  | false     |
+-------+-------+-----------+
| true  | false | ?         |
+-------+-------+-----------+
| false | false | false     |
+-------+-------+-----------+

.. fillintheblank:: 5_3_1_trueAndFalse

   The truth table above is missing one result.  What is the result of P && Q when ``P=true`` and ``Q=false``?  

   -    :^false$: Correct.  Both values must be true for && to return true.
        :.*: Try it and see
 
The following table shows the result for P || Q when P and Q are both expressions that can be true or false.  As you can see below the result of P || Q is true if either P or Q is true.  It is also true when both of them are true.

+-------+-------+-----------+
| P     | Q     | P || Q    |
+=======+=======+===========+
| true  | true  | true      |
+-------+-------+-----------+
| false | true  | ?         |
+-------+-------+-----------+
| true  | false | true      |
+-------+-------+-----------+
| false | false | false     |
+-------+-------+-----------+

.. fillintheblank:: 5_3_2_falseOrTrue

   The truth table above is missing one result.  What is the result of ``P || Q`` when ``P=false`` and ``Q=true``? 

   -    :^true$: Correct.  Only one of the two has to be true with || so this will print true.
        :.*: Try it and see
 
        

**Check your understanding**

.. mchoice:: qcbc_5
   :answer_a: first case
   :answer_b: second case
   :answer_c: You will get a error because you can't divide by zero.  
   :correct: b
   :feedback_a: This will only print if x is greater than 0 and it is not.  
   :feedback_b: This will print if x is less than or equal to zero or if y divided by x is not equal to 3.  
   :feedback_c: Since the first condition if false when x is equal to zero the second condition won't execute.  Execution moves to the else.    

   What is printed when the following code executes and x has been set to zero?  
   
   .. code-block:: java

     if (x > 0 && (y / x) == 3) 
        System.out.println("first case");
     else System.out.println("second case");

.. mchoice:: qcbc_7
   :answer_a: first case
   :answer_b: second case
   :correct: a
   :feedback_a: This will print if both of the conditions are true and they are.  
   :feedback_b: This will print either of the conditions are false. 

   What is printed when the following code executes and x has been set to 3 and y has been set to 9?  
   
   .. code-block:: java 

     if (x > 0 && (y / x) == 3) 
        System.out.println("first case");
     else System.out.println("second case");
     
.. mchoice:: qcbc_8
   :answer_a: first case
   :answer_b: second case
   :correct: b
   :feedback_a: This will print if both of the conditions are true, but the second is not. 
   :feedback_b: This will print if either of the conditions are false and the second one is (6 / 3 == 2).

   What is printed when the following code executes and x has been set to 3 and y has been set to 6?  
   
   .. code-block:: java 

     if (x > 0 && (y / x) == 3) 
        System.out.println("first case");
     else System.out.println("second case");
     
.. mchoice:: qcbc_6
   :answer_a: first case
   :answer_b: second case
   :answer_c: You will get a error because you can't divide by zero.  
   :correct: c
   :feedback_a: This will print if either of the two conditions are true.  The first isn't true but the second will cause an error.
   :feedback_b: This will print if both of the conditions are false.  But, an error will occur when testing the second condition.   
   :feedback_c: The first condition will be false so the second one will be executed and lead to an error since you can't divide by zero.

   What is printed when the following code executes and x has been set to zero?  Notice that it is now a logical or rather than an and.
   
   .. code-block:: java 

     if (x > 0 || (y / x) == 3) 
        System.out.println("first case");
     else System.out.println("second case");
  
Short Circuit Evaluation
------------------------

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