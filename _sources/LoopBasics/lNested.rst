.. qnum::
   :prefix: 6-4-
   :start: 1

Nested For Loops
------------------------

..	index::
	single: nested for loop
	pair: loop; nested

A **nested loop** has one loop inside of another.  These are typically used for working with two dimensions such as printing stars in rows and columns as shown below.  

.. activecode:: lcfc1
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
   
.. note::

   The number of times a nested for loop body is executed is the number of times the outer loop executes times the number of times the inner loop executes.  For the example above the outer loop executes 4-0+1= 5 times and the inner 9-0+1=10 times so the total is 5 * 10 = 50.  

**Check your understanding**

.. mchoice:: qln_6_1
   :answer_a: 40
   :answer_b: 20
   :answer_c: 24
   :answer_d: 30
   :correct: b
   :feedback_a: This would be true if the outer loop executed 8 times and the inner 5 times, but what is the initial value of <code>i</code>?   
   :feedback_b: The outer loop executes 7-3+1=5 times and the inner 4-1+1=4 so this will print 5 * 4 = 20 stars.  
   :feedback_c: This would be true if the outer loop executed 6 times such as if it was <code>i <= 8</code>. 
   :feedback_d: This would be true if the inner loop executed 5 times such as if it was <code>y <= 5</code>.  
   How many times does the following code print a <code>*</code>?
   
   .. code-block:: java 

      for (int i = 3; i < 8; i++) 
      {  
          for (int y = 1; y < 5; y++)
          {
              System.out.print("*");
          }
          System.out.println();
      }
     
.. mchoice:: qln_6_2
   :answer_a: A rectangle of 8 rows with 5 stars per row.
   :answer_b: A rectangle of 8 rows with 4 stars per row.
   :answer_c: A rectangle of 6 rows with 5 stars per row.
   :answer_d: A rectangle of 6 rows with 4 stars per row.
   :correct: c
   :feedback_a: This would be true if i was initialized to 0.  
   :feedback_b: This would be true if i was initialized to 0 and the inner loop continued while <code>y < 5</code>.
   :feedback_c: The outer loop executes 8-2+1=6 times so there are 6 rows and the inner loop executes 5-1+1=5 times so there are 5 columns.  
   :feedback_d: This would be true if the inner loop continued while <code>y < 5</code>.    

   What does the following code print?
   
   .. code-block:: java 

     for (int i = 2; i < 8; i++) 
     {  
         for (int y = 1; y <= 5; y++)
         {
             System.out.print("*");
         }
         System.out.println();
     }
     
.. mchoice:: qln_6_3
   :answer_a: A rectangle of 9 rows and 5 stars per row.
   :answer_b: A rectangle of 6 rows and 6 stars per row.
   :answer_c: A rectangle of 7 rows and 5 stars per row.
   :answer_d: A rectangle of 7 rows and 6 stars per row.
   :correct: d
   :feedback_a: Did you notice what i was initialized to?  
   :feedback_b: It would print 6 rows if it was <code>i < 9</code>.  
   :feedback_c: It would print 5 stars per row if it was <code>j > 1</code>.  
   :feedback_d: The outer loop executes 9 - 3 + 1 = 7 times and the inner 6 - 1 + 1 = 6 times. 

   What does the following print?
   
   .. code-block:: java 

     for (int i = 3; i <= 9; i++) 
     {  
        for (int j = 6; j > 0; j--)
        {
            System.out.print("*");
        }
        System.out.println();
     }
     
