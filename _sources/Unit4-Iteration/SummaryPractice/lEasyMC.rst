.. qnum::
   :prefix: 4-6-2-
   :start: 1
   
Easy Multiple Choice Questions
----------------------------------

These problems are easier than most of those that you will usually see on the AP CS A exam.

.. mchoice:: qle_1
   :answer_a: 5 6 7 8 9
   :answer_b: 4 5 6 7 8 9 10 11 12 
   :answer_c: 3 5 7 9 11
   :answer_d: 3 4 5 6 7 8 9 10 11 12
   :correct: d
   :feedback_a: What is i set to in the initialization area? 
   :feedback_b: What is i set to in the initialization area? 
   :feedback_c: This loop changes i by 1 each time in the change area.  
   :feedback_d: The value of i starts at 3 and this loop will execute until i equals 12.  The last time through the loop the value of i is 12 at the begininng and then it will be incremented to 13 which stops the loop since 13 is not less than or equal to 12.  

   What does the following code print?
   
   .. code-block:: java 

     for (int i = 3; i <= 12; i++) 
     {  
        System.out.print(i + " ");
     }

.. mchoice:: qle_2
   :answer_a: 9
   :answer_b: 7
   :answer_c: 6
   :answer_d: 10
   :correct: c
   :feedback_a: This would be true if i started at 0.
   :feedback_b: Note that it stops when i is 9.    
   :feedback_c: Since i starts at 3 and the last time through the loop it is 8 the loop executes 8 - 3 + 1 times = 6 times.
   :feedback_d: This would be true if i started at 0 and ended when i was 10.  Does it?

   How many times does the following method print a ``*``?  
   
   .. code-block:: java 

     for (int i = 3; i < 9; i++) 
     {  
        System.out.print("*"); 
     }

.. mchoice:: qle_3
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
     
.. mchoice:: qle_4
   :answer_a: 7
   :answer_b: 8
   :answer_c: 12
   :answer_d: 13
   :correct: b
   :feedback_a: This would be true if it stopped when i was 12, but it loops when i is 12.
   :feedback_b: Note that it stops when i is 13 so 13 - 5 is 8.   
   :feedback_c: This would be true if i started at 1.  
   :feedback_d: This would be true if i started at 0.  

   How many times does the following method print a ``*``?  
   
   .. code-block:: java 

     for (int i = 5; i <= 12; i++) 
     {  
        System.out.print("*"); 
     }
     
.. mchoice:: qle_5
   :answer_a: 4
   :answer_b: 5
   :answer_c: 6
   :correct: a
   :feedback_a: The loop starts with i = 1 and loops as long as it is less than 5 so i is 1, 2, 3, 4.  
   :feedback_b: This would be true if the condition was i <= 5.  
   :feedback_c: This would be true if i started at 0 and ended when it reached 6 (i <= 5). 

   How many times does the following method print a ``*``?  
   
   .. code-block:: java 

     for (int i = 1; i < 5; i++) 
     {  
        System.out.print("*"); 
     }
     
.. mchoice:: qle_6
   :answer_a: 7
   :answer_b: 8
   :answer_c: 9
   :correct: c
   :feedback_a: This would be true if i started at 1 and ended when it reached 8.  
   :feedback_b: This would be true if the loop ended when i reached 8. 
   :feedback_c: This loop starts with i = 0 and continues till it reaches 9 so (9 - 0 = 9).  

   How many times does the following method print a ``*``?  
   
   .. code-block:: java 

     for (int i = 0; i <= 8; i++) 
     {  
        System.out.print("*"); 
     }
     
.. mchoice:: qle_7
   :answer_a: 4
   :answer_b: 5
   :answer_c: 6
   :correct: b
   :feedback_a: This would be true if x started at 1 instead of 0.   
   :feedback_b: The loop starts with x = 0 and ends when it reaches 5 so 5 - 0 = 5.  
   :feedback_c: This would be true if the condition was x <= 5 instead of x = 5.

   How many times does the following method print a ``*``?  
   
   .. code-block:: java 

     for (int x = 0; x < 5; x++) 
     {  
        System.out.print("*"); 
     }
     
.. mchoice:: qle_8
   :answer_a: 6
   :answer_b: 7
   :answer_c: 8
   :correct: a
   :feedback_a: This loop starts with x = 2 and continues while it is less than 8 so 8 - 2 = 6.  
   :feedback_b: This would be true if the loop ended when x was 9 instead of 8 (x <= 8).  
   :feedback_c: This would be true if the loop started with x = 0.

   How many times does the following method print a ``*``?  
   
   .. code-block:: java 

     for (int x = 2; x < 8; x++) 
     {  
        System.out.print("*"); 
     }

.. mchoice:: qle_9
   :answer_a: 1 2 3 4 
   :answer_b: 1 2 3 4 5
   :answer_c: 0 1 2 3 4
   :answer_d: 0 1 2 3 4 5
   :correct: d
   :feedback_a: This would be true if x started at 1 and ended when x was 5. 
   :feedback_b: This would be true if x started at 1.
   :feedback_c: This would be true if the loop ended when x was 5.
   :feedback_d: This loop starts with x = 0 and ends when it reaches 6.  

   What does the following code print?
   
   .. code-block:: java 

     int x = 0;
     while (x <= 5) 
     { 
        System.out.print(x + " ");
        x++;
     }
     
.. mchoice:: qle_10
   :answer_a: 3 4 5 6 7 8 
   :answer_b: 3 4 5 6 7 8 9
   :answer_c: 0 1 2 3 4 5 6 7 8
   :answer_d: 0 1 2 3 4 5 6 7 8 9
   :answer_e: It is an infinite loop 
   :correct: e
   :feedback_a: Notice that x isn't changed in the loop.
   :feedback_b: Notice that x isn't changed in the loop.
   :feedback_c: Notice that x isn't changed in the loop.
   :feedback_d: Notice that x isn't changed in the loop.
   :feedback_e: Since x is never changed in the loop this is an infinite loop.  

   What does the following code print?
   
   .. code-block:: java 

     int x = 3;
     while (x < 9) 
     { 
        System.out.print(x + " ");
     }
