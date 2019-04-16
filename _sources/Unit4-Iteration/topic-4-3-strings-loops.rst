.. qnum::
   :prefix: 4-3-
   :start: 1
        






Loops and Strings
=================

..	index::
	single: string processing
	pair: string; loop
	
A ``while`` loop is typically used when you don't know how many times the loop will execute.  You might use it while processing a string.  Google has been scanning old books and then using software to read the scanned text.  But, the software can get things mixed up like using 1 for l.  The following code loops through a string replacing all 1's with l's.  

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
  
The while loop starts on line 9 in the code above.  Statements 10 through 13 are the body of the loop (from the opening parenthesis on line 10 to the closing one on line 13).  



 

  
**Mixed up programs**

.. parsonsprob:: removeA
   :adaptive:
   :noindent:

   The following method has the correct code to return a string with all a's removed, but the code is mixed up.  Drag the blocks from the left area into the correct order in the right area.  Click on the "Check Me" button to check your solution.
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
      } 
   =====
      return s;
   =====
   } // end method

