.. qnum::
   :prefix: 3-9-
   :start: 1
   
Easy Multiple Choice Questions
----------------------------------

These problems are easier than most of those that you will usually see on the AP CS A exam. 

.. mchoice:: qve_1
   :answer_a: 2
   :answer_b: 0
   :answer_c: 3
   :answer_d: 1
   :correct: a
   :feedback_a: Whenever the first number is smaller than the second, the remainder is the first number.  Remember that % is the remainder and 3 goes into 2 0 times with a remainder of 2.  
   :feedback_b: This is the number of times that 3 goes into 2 but the % operator gives you the remainder.  
   :feedback_c: Try it in DrJava.  Remember that % gives you the remainder after you divide the first number by the second one.
   :feedback_d: This would be correct if it was 3 % 2 since 2 would go into 3 one time with a remainder of 1.

   What does the following code print?
   
   .. code-block:: java 

     System.out.println(2 % 3);
     
.. mchoice:: qve_2
   :answer_a: 3
   :answer_b: 0
   :answer_c: 4
   :answer_d: 1
   :correct: c
   :feedback_a: This is the number of times that 5 goes into 19, but % is the remainder.
   :feedback_b: This would only be true if the first number was evenly divisible by the second number.   
   :feedback_c: 5 goes into 19 3 times (15) with a remainder of 4 (19-15=4)
   :feedback_d: This would be correct if it was 19 % 2, but here we are dividing by 5.  

   What does the following code print?
   
   .. code-block:: java 

     System.out.println(19 % 5);
     
.. mchoice:: qve_3
   :answer_a: 0.3333333333333333
   :answer_b: 0
   :answer_c: It will give a run-time error
   :answer_d: 0.3
   :answer_e: It will give a compile-time error
   :correct: b
   :feedback_a: This would be correct if it was 1.0 / 3 or 1 / 3.0.
   :feedback_b: When two integers are divided the results will also be integer and the fractional part is thrown away.
   :feedback_c: You would get a run-time error if it was 1 / 0, because you can not divide by zero.
   :feedback_d: Try it in DrJava. Is this what you get?
   :feedback_e: Integer division is allowed in Java.  It gives an integer result.

   What does the following code print?
   
   .. code-block:: java 

     System.out.println(1 / 3);
     
.. mchoice:: qve_4
   :answer_a: 24
   :answer_b: 14
   :answer_c: This will give a compile time error.
   :answer_d: 16
   :correct: d
   :feedback_a: This would be true if it was System.out.println(((2 + 3) * 5) - 1), but without the parentheses the multiplication is done first.
   :feedback_b: This would be true if it was System.out.println(2 + (3 * (5 - 1))), but without the parentheses the multiplication is done first and the addition and subtraction are handled from left to right.
   :feedback_c: This will compile and run.  Try it in DrJava.  Look up operator precedence in Java.  
   :feedback_d: The multiplication is done first (3 * 5 = 15) and then the addition (2 + 15 = 17) and finally the subtraction (17 - 1 = 16).

   What does the following code print?
   
   .. code-block:: java 

    System.out.println(2 + 3 * 5 - 1);
     
.. mchoice:: qve_5
   :answer_a: 9.6982
   :answer_b: 12 
   :answer_c: 10
   :answer_d: 9
   :correct: d
   :feedback_a: This would be true if it was b = a.  What does the (int) do? 
   :feedback_b: This is the initial value of b, but then b is assigned to be the result of casting the value in a to an integer. Casting to an integer from a double will truncate (throw away) the digits after the decimal.
   :feedback_c: Java does not round when converting from a double to an integer.
   :feedback_d: When a double is converted into an integer in Java, it truncates (throws away) the digits after the decimal.

   Given the following code segment, what is the value of b when it finishes executing?
   
    .. code-block:: java 

      double a = 9.6982;
      int b = 12;
      b = (int) a;
     
.. mchoice:: qve_6
   :answer_a: 75   
   :answer_b: 67
   :answer_c: 150
   :answer_d: 43
   :answer_e: 74 
   :correct: a
   :feedback_a: To convert from binary to decimal use the powers of 2 starting with 2 raised to the 0 power which is 1.  So 1001011 is 1 + 2 + 8 + 64 = 75.  
   :feedback_b: This would be true if the binary number was 1000011.  This would be 1 + 2 + 64 = 67.
   :feedback_c: This would be true if we started at the right hand side with 2, but we start with 1 (2 raised to the 0 power is 1).
   :feedback_d: This would be true if the binary number was 101011. 
   :feedback_e: This would be true if the binary number was 1001010.

   Which of the following is the decimal value for the binary number 1001011?
   
.. mchoice:: qve_7
   :answer_a: 5   
   :answer_b: 4
   :answer_c: 6
   :correct: a
   :feedback_a: This would be enough to represent 32 distinct values, so that is more then enough to represent 25 distinct values.  
   :feedback_b: This would only be enough to represent 16 distinct values (2 to the 4th).  
   :feedback_c: This is more than you need.  2 to the 6th is 64.  

   How many bits would you need to represent 25 distinct values?
   
.. mchoice:: qve_8
   :answer_a: 34   
   :answer_b: 52
   :answer_c: 64
   :answer_d: 6
   :answer_e: B4
   :correct: a
   :feedback_a: To convert from binary to hexadecimal (base 16) convert groups of 4 bits from the right to the left to hexadecimal.  The rightmost 4 bits is 0100 which is 4 in hex.  The leftmost 4 bits would be 0011 which is 3 in hex. 
   :feedback_b: This would be correct if the question had asked for the value in decimal, but it asked for it in hexadecimal (base 16).
   :feedback_c: This would be correct if the question had asked for the value in octal, but it asked for it in hexadecimal (base 16).
   :feedback_d: This is the length of this binary number.  Can you convert it to hexadecimal (base 16)?
   :feedback_e: This would be correct if the binary number was 10110100 instead of 110100.

   What is the hexadecimal equivalent of the following binary number: 110100?
   
.. mchoice:: qve_9
   :answer_a: 11011101
   :answer_b: 1011001  
   :answer_c: 10111011
   :correct: c
   :feedback_a: This has an extra one in the front.    
   :feedback_b: The decimal value of 1011001 is (1*64)+ (0 * 32) + (1 * 16) + (1 * 8) + (0 * 4) + (0 * 2) + (1*1) = which is 89 base 10 (decimal)
   :feedback_c: Using base 2 the value of 10111011 is:  128+32+16+8+2+1 = 187 

   What is the binary equivalent of the following base 10 number: 187?
   

   

     

     

     


