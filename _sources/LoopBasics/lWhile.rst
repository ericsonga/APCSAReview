.. qnum::
   :prefix: 6-3-
   :start: 1
        
While Loops
-----------

..	index::
	single: while
	pair: loop; while
    
A **while** loop is typically used when you don't know how many times the loop will execute.  You might use it while processing a string.  Google has been scanning old books and then using software to read the scanned text.  But, the software can get things mixed up like using 1 for l.  The following code loops through a string replacing all 1's with l's.  

.. activecode:: lclw1
   :language: java
   
   public class Test
   {
      public static void main(String[] args)
      {
        String message = "Have a 1ong and happy 1ife"; 
        int index = 0;
        
        // while more 1's in the message
        while (message.indexOf("1") >= 0)
        {
          index = message.indexOf("1");
          message = message.substring(0,index) + "l" + message.substring(index+1);
        }
        
        System.out.println(message);
      }
   }
  
The while loop starts on line 9 in the code above.  Statements 11 and 12 are in the body of the loop (between the opening parenthesis on line 6 and the closing one on line 9).  Please note that Java doesn't require your code to be correctly indented (code moved to the right a few spaces) to make it clear what
statements are part of the body of the loop, but it is good practice.  On the free response part of the exam, the reader will use the indention when determining the meaning of your code, even if you forget the open or close curly brace.  

..	index::
	single: infinite loop
	pair: loop; infinite

One thing to be careful about with while loops is making sure that you don't end up with an **infinite loop**.  An infinite loop is one that never stops (the condition is always true). 

.. code-block:: java 
  
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
   
   .. code-block:: java 

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
   
   .. code-block:: java 

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
   
   .. code-block:: java 

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
   
   .. code-block:: java 

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

