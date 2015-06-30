.. qnum::
   :prefix: 6-6-
   :start: 1
   
Easy Multiple Choice Questions
----------------------------------

These problems are easier than most of those that you will usually see on the AP CS A exam.

.. mchoicemf:: qle_1
   :answer_a: 5 6 7 8 9
   :answer_b: 4 5 6 7 8 9 10 11 12 
   :answer_c: 3 5 7 9 11
   :answer_d: 3 4 5 6 7 8 9 10 11 12
   :correct: d
   :feedback_a: What is i set to in the initialization area? 
   :feedback_b: What is i set to in the initialization area? 
   :feedback_c: This loop changes i by 1 each time in the change area.  
   :feedback_d: The value of i starts at 3 and this loop will execute until i equals 12.  The last time through the loop the value of i is 12.  

   What does the following code print?
   
   .. code-block:: java 

     for (int i = 3; i <= 12; i++) 
     {  
        System.out.print(i + " ");
     }

.. mchoicemf:: qle_2
   :answer_a: 9
   :answer_b: 7
   :answer_c: 6
   :answer_d: 10
   :correct: b
   :feedback_a: This would be true if i started at 0 and the value of i the last time through the loop it was 8.   
   :feedback_b: How many numbers are between 3 and 9 (including 3 and 9)?   
   :feedback_c: Since i starts at 3 and the last time through the loop it is 9 the loop executes 7 times (9 - 3 + 1 = 7)
   :feedback_d: This would be true if i started at 0 and ended at 9.  Does it?

   How many times does the following method print a ``*``?  
   
   .. code-block:: java 

     for (int i = 3; i <= 9; i++) 
     {  
        System.out.print("*"); 
     }

.. mchoicemf:: qle_3
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
