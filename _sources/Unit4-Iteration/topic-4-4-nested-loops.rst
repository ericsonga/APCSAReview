.. qnum::
   :prefix: 4-4-
   :start: 1
   
.. |CodingEx| image:: ../../_static/codingExercise.png
    :width: 30px
    :align: middle
    :alt: coding exercise
    
    
.. |Exercise| image:: ../../_static/exercise.png
    :width: 35
    :align: middle
    :alt: exercise
    
    
.. |Groupwork| image:: ../../_static/groupwork.png
    :width: 35
    :align: middle
    :alt: groupwork

.. turtle snowflake patterns

Nested For Loops
================

..	index::
	single: nested for loop
	pair: loop; nested

A **nested loop** has one loop inside of another.  These are typically used for working with two dimensions such as printing stars in rows and columns as shown below.  

|CodingEx| **Coding Exercises**

What does the following code print out? How many rows and columns are there? Can you change it to be a 5x5 square? Can you change it to be a 10x8 rectangle? 

.. activecode:: lcfcnl1
   :language: java
   
   public class NestedLoops
   {

      public static void main(String[] args)
      {
          for (int row = 0; row < 5; row++)
          {
              for (int col = 0; col < 10; col++)
              {
                  System.out.print("*");
              }
              System.out.println();
          }      
      }  
   }

|Exercise| **Check your understanding**

.. mchoice:: nested1
   :answer_a: A rectangle of 7 rows with 5 stars per row.
   :answer_b: A rectangle of 7 rows with 4 stars per row.
   :answer_c: A rectangle of 6 rows with 5 stars per row.
   :answer_d: A rectangle of 6 rows with 4 stars per row.
   :correct: c
   :feedback_a: This would be true if i was initialized to 0.  
   :feedback_b: This would be true if i was initialized to 0 and the inner loop continued while <code>y < 5</code>.
   :feedback_c: The outer loop runs from 1 up to 7 but not including 7 so there are 6 rows and the inner loop runs 1 to 5 times including 5 so there are 5 columns.  
   :feedback_d: This would be true if the inner loop continued while <code>y < 5</code>.    

   What does the following code print?
   
   .. code-block:: java 

     for (int i = 1; i < 7; i++) 
     {  
         for (int y = 1; y <= 5; y++)
         {
             System.out.print("*");
         }
         System.out.println();
     }
     
Challenge idea: turtles drawing repeating patterns like snowflakes and other designs.

     
Summary
-------

- Nested iteration statements are iteration statements that appear in the body of another iteration statement.

- When a loop is nested inside another loop, the inner loop must complete all its iterations before the outer loop can continue.

