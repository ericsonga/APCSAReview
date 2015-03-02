Loops in Java
=============

.. qnum::
   :prefix: trl-
   :start: 1
   
.. highlight:: java
   :linenothreshold: 4

When you play a song you can set it to loop, which means that when it reaches the end it starts over at the beginning.  A **loop** in programming is a way to repeat one or more statements. If you didn't have loops to allow you to repeat code your programs would get very long very quickly! 

The keywords ``while`` or ``for`` both indicate the start of a loop (the header).  The **body of the loop** is either a single statement following the header or a block of statements that starts with an opening parenthesis ``{`` and ends with a closing parenthesis ``}``.  

There are many different types of loops in Java, but the AP CS A exam only covers three:

    -  while: repeat the body of the loop while a Boolean expression is true

    -  for: contains a header with 3 possible parts: declaration/initialization, condition, and change.  Before the loop starts it does the declaration/initialization. Then it repeats the body of the loop while the condition is true.   The code in the change part is executed each time at the end of the body of the loop.    
    
    -  for-each: loop through a collection (list or array) and each time through the loop set a variable to the next item from the collection.  We will discuss this in the section about arrays.   
        
While Loops
-----------
    
A while loop is typically used when you don't know how many times the loop will execute.  You might use it while processing a string.  Google has been scanning old books and then using software to read the scanned text.  But, the software can get things mixed up like using 1 for l.  The following code loops through a string replacing all 1's with l's.  

:: 

   String message = "Have a 1ong and happy 1ife"; 
   int index = 0;
  
   // while more 1's in the message
   while (message.indexOf("1") >= 0)
   {
      index = message.indexOf("1");
      message = message.substring(0,index) + "l" + message.substring(index+1);
   }
  
The while loop starts on line 5 in the code above.  Statements 7 and 8 are in the body of the loop (between the opening parenthesis on line 6 and the closing one on line 9).  Please note that Java doesn't require your code to be correctly indented (code moved to the right a few spaces) to make it clear what
statements are part of the body of the loop, but it is good practice.  On the free response part of the exam the reader will use the indention when determining the meaning of your code, even if you forget the open or close curly brace.  

One thing to be careful about with while loops is making sure that you don't end up with an **infinite loop**.  An infinite loop is one that never stops (the condition is always true). 

:: 
  
   // an infinite loop
   while (true)
   {
      System.out.println("This is the loop that never ends");
   }
   
The infinite loop above is pretty obvious.  But, most infinite loops are accidental.  They usually occur because you forget to change the thing you are checking in the condition.  

**Check your understanding**

.. mchoicemf:: qlb_1
   :answer_a: 5 4 3 2 1
   :answer_b: -5 -4 -3 -2 -1
   :answer_c: -4 -3 -2 -1 0
   :correct: c
   :feedback_a: x is initialized (set) to -5 to start. 
   :feedback_b: x is incremented (x++) before the print statement executes.
   :feedback_c: x is set to -5 to start but then incremented by 1 so it first prints -4.

   What does the following code print?
   
   :: 

     int x = -5;
     while (x < 0) 
     { 
        x++; 
        System.out.print(x + " ");
     }
   
.. mchoicemf:: qlb_2
   :answer_a: var1 = 1, var2 = 1
   :answer_b: var1 = 2, var2 = 0
   :answer_c: var1 = 3, var2 = -1
   :answer_d: var1 = 0, var2 = 2
   :answer_e: The loop will cause a run-time error with a division by zero
   :correct: b
   :feedback_a: The loop stops one of two ways, when var2 = 0 or when var1 / var2 = 0 - neither is true in this case
   :feedback_b: The loop stopped because var2 = 0.  After the first execution of the loop var1 = 1 and var2 = 1.  After the second execution of the loop var1 = 2 and var2 = 0.  This stops the loop and doesn't execute the second part of the complex conditional.
   :feedback_c: The loop stops one of two ways, when var2 = 0 or when var1 / var2 = 0 - neither is true in this case
   :feedback_d: The loop stops one of two ways, when var2 = 0 or when var1 / var2 = 0 - neither is true in this case
   :feedback_e: Even though var1 = 2 and var2 = 0 when the conditional is executed the first condition is true so the rest of the complex conditional won't execute.  

   What are the values of var1 and var2 when the code finishes executing?
   
   :: 

     int var1 = 0;
     int var2 = 2;
   
     while ((var2 != 0) && ((var1 / var2) >= 0))
     {
        var1 = var1 + 1;
        var2 = var2 -1;
     }
  
.. mchoicemf:: qlb_3
   :answer_a: {1, 3, -5, -2}
   :answer_b: {3, 9, -15, -6}
   :answer_c: {2, 6, -10, -4}
   :answer_d: The code will never stop executing due to an infinite loop
   :correct: b
   :feedback_a: This would be true if the contents of arrays could not be changed but they can. 
   :feedback_b: This code multiplies each value in a by the passed amt which is 3 in this case.
   :feedback_c: This would be correct if we called multAll(2) instead of multAll(3).
   :feedback_d: The variable i starts at 0 and increments each time through the loop and stops when it equals the number of items in a.  

   What are the values in a after multAll(3) executes?
   
   :: 

     private int[ ] a = {1, 3, -5, -2};
     
     public void multAll(int amt)
     {
        int i = 0;
        while (i < a.length)
        {
           a[i] = a[i] * amt;
           i++;
        } // end while
     } // end method  
     
.. mchoicemf:: qlb_4
   :answer_a: {1, 3, -5, -2}
   :answer_b: {3, 9, -15, -6}
   :answer_c: {2, 6, -10, -4}
   :answer_d: The code will never stop executing due to an infinite loop
   :correct: d
   :feedback_a: Does the value of i ever change inside the loop?
   :feedback_b: Does the value of i ever change inside the loop?
   :feedback_c: Does the value of i ever change inside the loop?
   :feedback_d: The value of i is initialized to 0 and then never changes inside the body of the loop, so this loop will never stop.  It is an infinite loop.   

   What are the values in a after mult(2) executes?
   
   :: 

     private int[ ] a = {1, 3, -5, -2};
     
     public void mult(int amt)
     {
        int i = 0;
        while (i < a.length)
        {
           a[i] = a[i] * amt;
        } // end while
     } // end method  
     
**Mixed up programs**

.. parsonsprob:: plb_1

   The following method has the correct code to return a string with all a's removed, but the code is mixed up.  Drag the blocks from the left into the correct order on the right. You will be told if any of the blocks are in the wrong order or not indented correctly.  The code
   will need to be correctly indented for your solution to be correct.  To indent just drag the block to the right.  
   -----
   public static String remA(String s)
   {
   =====
      int index = 0;
   =====
      // while still an a in str
      while (s.indexOf("a") >= 0)
      {
         index = s.indexOf("a");
         s = s.substring(0,index) + 
            s.substring(index+1);
      } // end while
   =====
      return s;
   =====
   } // end method

For Loops
-----------

A for loop is usually used when you know how many times you want the loop to execute. A for loop has 3 parts: initialization, condition, and change.  The parts are separated by semicolons (``;``).  Each of the three parts is optional, but the semicolons are not optional.  
:: 

  for (initialization; condition; change)
  
The code in the initialization area is executed before the first execution of the loop, the condition is checked each time through the loop and the loop continues as long as the condition is true, at the end of each execution of the body of the loop the changes are done.   

:: 

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
  
The method **printPopSong** prints the words to a song.  It initializes the value of the variable i to 5 and then checks if i is greater than 0.  Since 5 is greater than 0 the body of the loop executes.  Before the condition is checked again i is decreased by 1.  When the value in i is equal to 0 the loop stops executing.  

The number times a loop executes can be calculated by (largestValue - smallestValue + 1).  So in this case the smallest value is 1 and the largest is 5 so this loop executes (5 - 1 + 1) 5 times.  


**Check your understanding**

.. mchoicemf:: qlb_5
   :answer_a: 3 4 5 6 7 8
   :answer_b: 0 1 2 3 4 5 6 7 8
   :answer_c: 1 2 3 4 5 6 7 8 9 10
   :answer_d: 3 4 5 6 7 
   :correct: d
   :feedback_a: This loop starts with i equal to 3 but ends when i is equal to 8.  
   :feedback_b: What is i set to in the initialization area? 
   :feedback_c: What is i set to in the initialization area and when does the loop stop?
   :feedback_d: The value of i is set to 3 before the loop executes and the loop stops when i is equal to 8.  So the last time through the loop i is equal to 7.  

   What does the following code print?
   
   :: 

     for (int i = 3; i < 8; i++) 
     {  
        System.out.print(i + " ");
     }
     
.. mchoicemf:: qlb_6
   :answer_a: 3 4 5 6 7 8
   :answer_b: 0 1 2 3 4 5 6 7 8
   :answer_c: 1 2 3 4 5 6 7 8 9 10
   :answer_d: 1 3 5 7 9
   :correct: c
   :feedback_a: What is i set to in the initialization area? 
   :feedback_b: What is i set to in the initialization area? 
   :feedback_c: The value of i starts at 1 and this loop will execute unti i equals 11.  The last time through the loop the value of i is 10.  
   :feedback_d: This loop changes i by 1 each time at the end of the body of the loop.  

   What does the following code print?
   
   :: 

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
   
   :: 

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

Common Mistakes
===============

  -  Forgetting to change the thing you are testing in a while loop and ending up with an infinite loop.  
  
  -  Getting the start and end conditions wrong on the for loop. 
  
  -  Jumping out of a loop by using one or more return statements inside of the loop.    
 