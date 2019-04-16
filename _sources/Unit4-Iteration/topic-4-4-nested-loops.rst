.. qnum::
   :prefix: 6-4-
   :start: 1

.. turtle snowflake patterns

Nested For Loops
------------------------

..	index::
	single: nested for loop
	pair: loop; nested

A **nested loop** has one loop inside of another.  These are typically used for working with two dimensions such as printing stars in rows and columns as shown below.  

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
   
 
