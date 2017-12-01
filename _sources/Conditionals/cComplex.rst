.. qnum::
   :prefix: 5-3-
   :start: 1

Complex Conditionals
--------------------

..	index::
	single: and
	single: or
	single: truth table
	pair: logical; and
	pair: logical; or
	pair: conditional; complex

What if you want two things to be true before the body of the conditional is executed?  Use ``&&`` as a logical *and* to join two Boolean expressions and the body of the condition will only be executed only if both are true.  For example, what if you want to go out and your mom said you could if you clean your room and do your homework?  Run the code below and try different values for ``cleanedRoom`` and ``didHomework`` and see what they have to be for it to print ``You can go out``.

.. activecode:: lccc1
   :language: java
   
   public class Test1
   {
      public static void main(String[] args)
      {
        boolean cleanedRoom = true;
        boolean didHomework = false;
        if (cleanedRoom && didHomework) System.out.println("You can go out");
        else System.out.println("No, you can't go out");
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
        if (walking || carIsAvailable) System.out.println("You can go out");
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

.. mchoice:: qcb_5
   :answer_a: first case
   :answer_b: second case
   :answer_c: You will get a error because you can't divide by zero.  
   :correct: b
   :feedback_a: This will only print if x is greater than 0 and it is not.  
   :feedback_b: This will print if x is less than or equal to zero or if y divided by x is not equal to 3.  
   :feedback_c: Since the first condition if false when x is equal to zero the second condition won't execute.  Execution moves to the else.    

   What is printed when the following code executes and x has been set to zero?  
   
   .. code-block:: java

     if (x > 0 && (y / x) == 3) System.out.println("first case");
     else System.out.println("second case");

.. mchoice:: qcb_7
   :answer_a: first case
   :answer_b: second case
   :correct: a
   :feedback_a: This will print if both of the conditions are true and they are.  
   :feedback_b: This will print either of the conditions are false. 

   What is printed when the following code executes and x has been set to 3 and y has been set to 9?  
   
   .. code-block:: java 

     if (x > 0 && (y / x) == 3) System.out.println("first case");
     else System.out.println("second case");
     
.. mchoice:: qcb_8
   :answer_a: first case
   :answer_b: second case
   :correct: b
   :feedback_a: This will print if both of the conditions are true, but the second is not. 
   :feedback_b: This will print if either of the conditions are false and the second one is (6 / 3 == 2).

   What is printed when the following code executes and x has been set to 3 and y has been set to 6?  
   
   .. code-block:: java 

     if (x > 0 && (y / x) == 3) System.out.println("first case");
     else System.out.println("second case");
     
.. mchoice:: qcb_6
   :answer_a: first case
   :answer_b: second case
   :answer_c: You will get a error because you can't divide by zero.  
   :correct: c
   :feedback_a: This will print if either of the two conditions are true.  The first isn't true but the second will cause an error.
   :feedback_b: This will print if both of the conditions are false.  But, an error will occur when testing the second condition.   
   :feedback_c: The first condition will be false so the second one will be executed and lead to an error since you can't divide by zero.

   What is printed when the following code executes and x has been set to zero?  Notice that it is now a logical or rather than an and.
   
   .. code-block:: java 

     if (x > 0 || (y / x) == 3) System.out.println("first case");
     else System.out.println("second case");
  
