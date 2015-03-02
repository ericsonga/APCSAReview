.. qnum::
   :prefix: 12-1-
   :start: 1

Searching
===========

Computers store vast amounts of data. One of the strengths of computers is the ability to find things quickly.  This ability is called **searching**.  For the AP CS A exam you will need to know both **linear search** and **binary search**.  

* Linear search typically starts at the first element in a list and looks through the entire collection (often an array or list) until it either finds the desired value or has searched the entire collection without finding it.  
* Binary search can only be used on data that has been sorted or stored in order.  It checks the middle of the data to see if that middle value is less than, equal, or greater than the desired value and then based on the results of that it narrows the search. 

Linear Search
---------------

Linear search is the only method that can be used to find a value on unsorted or unordered data.    
           
.. mchoicemf:: qrm_1
   :answer_a: 1441
   :answer_b: 43211234
   :answer_c: 3443
   :answer_d: 12344321
   :answer_e: Many digits are printed due to infinite recursion.
   :correct: b
   :feedback_a: The first call to <code>mystery</code> with the integer 1234 will print 1234 % 10. The '%' means modulus or remainder. The remainder of 1234 divided by 10 is 4 so the first thing printed must be 4.
   :feedback_b: This has a recursive call which means that the method calls itself when (x / 10) is greater than or equal to zero. Each time the method is called it prints the remainder of the passed value divided by 10 and then calls the method again with the result of the integer division of the passed number by 10 (which throws away the decimal part). After the recursion stops by <code>(x / 10) == 0</code> the method will print the remainder of the passed value divided by 10 again.
   :feedback_c: The first call to <code>mystery</code> with the integer 1234 will print 1234 % 10. The '%' means modulus or remainder. The remainder of 1234 divided by 10 is 4 so the first thing printed must be 4.
   :feedback_d: The first call to <code>mystery</code> with the integer 1234 will print 1234 % 10. The '%' means modulus or remainder. The remainder of 1234 divided by 10 is 4 so the first thing printed must be 4.
   :feedback_e: When the recursive call to <code>mystery(1)</code> occurs (the 4th call to mystery), the division of x /10 equals .01--this becomes 0 because this is integer division and the remainder is thrown away. Therefore the current call will be completed and all of the previous calls to <code>mystery</code> will be completed.

   Given the following method declaration, which of the following is printed as the result of the call ``mystery(1234)``?
   
   .. code-block:: java 

      //precondition:  x >=0
      public void mystery (int x)
      {
         System.out.print(x % 10);

         if ((x / 10) != 0)
         {
            mystery(x / 10);
         }
         System.out.print(x % 10);
      }

.. mchoicemf:: qrm_2
   :answer_a: 243
   :answer_b: 0
   :answer_c: 3
   :answer_d: 81
   :answer_e: 27
   :correct: a
   :feedback_a: For the call <code>mystery(5)</code>, <code>n != 0</code> so the <code>else</code> statement is executed. This results in the next recursive call of <code>mystery(4)</code>. This will continue until the call <code>mystery(0)</code> is executed. At this point, the value 1 will be returned. Then each call of <code>mystery</code> can return with the 3 * the result of the recursive call. So this method will compute 3 to the given power.
   :feedback_b: This can never be 0 because the stopping condition returns 1 when you call <code>mystery(0)</code>
   :feedback_c: This would only be true if you called <code>mystery(1)</code>
   :feedback_d: This would be true if you called <code>mystery(4)</code>
   :feedback_e: This would be true if you called <code>mystery(3)</code>

   Given the following method declaration, what value is returned as the result of the call ``mystery(5)``?
   
   .. code-block:: java 

      public static int mystery(int n)
      {
         if (n == 0)
            return 1;
         else
            return 3 * mystery (n - 1);
      }