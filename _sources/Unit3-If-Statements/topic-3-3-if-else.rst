.. qnum::
   :prefix: 3-3-
   :start: 1
   
.. highlight:: java
   :linenothreshold: 4
   
Two-way Selection: if-else Statements
======================================

What if you want to pick between two possibilities?  If you are trying to decide between a couple of things to do, you might do one thing if a coin flip is heads and another if it is tails.  In this case use the **if** keyword followed by a statement or block of statements and then the **else** keyword also followed by a statement or block of statements.  

.. figure:: Figures/Condition-two.png
    :width: 350px
    :align: center
    :figclass: align-center

    Figure 2: The order that statements execute in a conditional with 2 options: if and else

.. note::

   The else will only execute if the condition is false.   


.. activecode:: lccb2
   :language: java
   
   public class Test2
   {
      public static void main(String[] args)
      {
        boolean isHeads = true;
        if (isHeads) System.out.println("Let's go to the game");
        else System.out.println("Let's watch a movie");
        System.out.println("after conditional");
      }
   } 
   

If ``isHeads`` is true it will print ``Let's go to the game`` and then ``after conditional``.  Run the code above to see this.

.. fillintheblank:: 5_1_2_falseElse

   Try changing the code above to ``boolean isHeads = false;``.  What line will be printed before the ``after conditional``?

   -    :^Let's watch a movie$: Correct.  If the boolean value is false, the statement following the else will execute
        :.*: Try it and see
        
        

.. mchoice:: qcb1_1
   :answer_a: A
   :answer_b: B
   :answer_c: C
   :answer_d: D
   :answer_e: E
   :correct: d
   :feedback_a: Notice that each of the first 4 statements start with an if so you need to check each one.  What will actually be printed?  Try it in one of the active code windows above.  
   :feedback_b: Each of the first 4 if statements will execute.
   :feedback_c: Check this in DrJava.
   :feedback_d: Each of the if statements will be executed. So grade will be set to A, then B then C and finally D.  
   :feedback_e: This will only be true when score is less than 60. 	

    What is the value of grade when the following code executes and score is 93?  
   
   .. code-block:: java 

     if (score >= 90) grade = "A";
     if (score >= 80) grade = "B";
     if (score >= 70) grade = "C";
     if (score >= 60) grade = "D";
     else grade = "E";
     