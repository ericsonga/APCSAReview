.. qnum::
   :prefix: lab-1e-
   :start: 1

.. highlight:: java
   :linenothreshold: 4


Mixed Up Code Practice
------------------------------

.. parsonsprob:: chat-labp1
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following program segment should print 4 random responses using if/else statements,  but the blocks have been mixed up.  Drag the blocks from the left and put them in the correct order on the right.  Click the Check button to check your solution.
   -----
   private String getRandomResponse()
   {
   =====
       final int NUMBER_OF_RESPONSES = 4;
       double r = Math.random();
   =====
       int whichResponse = (int)(r * NUMBER_OF_RESPONSES);
       String response = "";
   =====
       if (whichResponse == 0) 
       {
           response = "Interesting, tell me more.";
   =====
       } 
       else if (whichResponse == 1) 
       {
           response = "Hmmm.";
   =====
       } 
       else if (whichResponse == 2) 
       {
           response = "Do you really think so?";
   =====
       } 
       else if (whichResponse == 3) 
       {
           response = "You don't say.";
       }
   =====
       return response;
   =====
   }
