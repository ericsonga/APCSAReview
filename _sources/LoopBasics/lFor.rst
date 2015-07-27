.. qnum::
   :prefix: 6-2-
   :start: 1

For Loops
-----------

..	index::
	single: for loop
	pair: loop; for

A **for** loop is usually used when you know how many times you want the loop to execute. A for loop has 3 parts: initialization, condition, and change.  The parts are separated by semicolons (``;``).  Each of the three parts is optional, but the semicolons are not optional.  

.. code-block:: java

  for (initialization; condition; change)
  
The code in the initialization area is executed before the first execution of the loop, the condition is checked each time through the loop and the loop continues as long as the condition is true, at the end of each execution of the body of the loop the changes are done.   

.. activecode:: lcfc1
   :language: java
   
   public class SongTest
   {

      public static void printPopSong()
      {
         String line1 = " bottles of pop on the wall";
         String line2 = " bottles of pop";  
         String line3 = "Take one down and pass it around";  
  
         // while more 1's in the message
         for (int i = 5; i > 0; i--)
         {
            System.out.println(i + line1);
            System.out.println(i + line2); 
            System.out.println(line3); 
            System.out.println((i - 1) + line1);
            System.out.println();
         }
      }
      
      public static void main(String[] args)
      {
         SongTest.printPopSong();
      }
   }
  
The method **printPopSong** prints the words to a song.  It initializes the value of the variable i equal to 5 and then checks if i is greater than 0.  Since 5 is greater than 0, the body of the loop executes.  Before the condition is checked again, i is decreased by 1.  When the value in i is equal to 0 the loop stops executing.  

The number times a loop executes can be calculated by (largestValue - smallestValue + 1).  So in this case the smallest value is 1 and the largest is 5 so this loop executes (5 - 1 + 1) 5 times.  


**Check your understanding**

.. mchoicemf:: qlb_5
   :answer_a: 3 4 5 6 7 8
   :answer_b: 0 1 2 3 4 5 6 7 8 
   :answer_c: 8 8 8 8 8 
   :answer_d: 3 4 5 6 7 
   :correct: d
   :feedback_a: This loop starts with i equal to 3 but ends when i is equal to 8.  
   :feedback_b: What is i set to in the initialization area?
   :feedback_c: This would be true if the for loop was missing the change part <code>(int i = 3; i < 8; )</code> but it does increment i in the change part <code>(int i = 3; i < 8; i++)</code>.
   :feedback_d: The value of i is set to 3 before the loop executes and the loop stops when i is equal to 8.  So the last time through the loop i is equal to 7.  

   What does the following code print?
   
   .. code-block:: java 

     for (int i = 3; i < 8; i++) 
     {  
        System.out.print(i + " ");
     }
     
.. mchoicemf:: qlb_6
   :answer_a: 3 4 5 6 7 8
   :answer_b: 0 1 2 3 4 5 6 7 8 9 
   :answer_c: 1 2 3 4 5 6 7 8 9 10
   :answer_d: 1 3 5 7 9
   :correct: c
   :feedback_a: What is i set to in the initialization area? 
   :feedback_b: What is i set to in the initialization area? 
   :feedback_c: The value of i starts at 1 and this loop will execute until i equals 11.  The last time through the loop the value of i is 10.  
   :feedback_d: This loop changes i by 1 each time in the change area.  

   What does the following code print?
   
   .. code-block:: java 

     for (int i = 1; i <= 10; i++) 
     {  
        System.out.print(i + " ");
     }
     
.. mchoicemf:: qlb_7
   :answer_a: 10
   :answer_b: 6
   :answer_c: 7
   :answer_d: 9
   :correct: c
   :feedback_a: This would be true if i started at 0 and ended at 9.  Does it?
   :feedback_b: Since i starts at 3 and the last time through the loop it is 9 the loop executes 7 times (9 - 3 + 1 = 7)
   :feedback_c: How many numbers are between 3 and 9 (including 3 and 9)?   
   :feedback_d: This would be true if i started at 0 and the value of i the last time through the loop it was 8.   

   How many times does the following method print a ``*``?  
   
   .. code-block:: java 

     for (int i = 3; i <= 9; i++) 
     {  
        System.out.print("*"); 
     }
     
**Mixed up programs**

.. parsonsprob:: plb_2

   The following method has the correct code to print out all the even values from 0 to the value of 10, but the code is mixed up.  Drag the blocks from the left into the correct order on the right. You will be told if any of the blocks are in the wrong order or not indented correctly.
   -----
   public static void printEvens()
   {
   =====
      for (int i = 0; 
           i <= 10; 
           i+=2) 
      {
   =====
         System.out.println(i);
   =====
      } // end for
   =====
   } // end method