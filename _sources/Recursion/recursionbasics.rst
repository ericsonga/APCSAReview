.. qnum::
   :prefix: 11-1-
   :start: 1
   
.. highlight:: java
   :linenothreshold: 4

Recursion
==========

.. video:: v_recursion
   :controls:
   :thumb: ../_static/videoStart.png

   http://ice-web.cc.gatech.edu/ce21/1/static/video/Recursion.mov
   
The AP CS A exam usually has about 4-6 recursion problems.  You only need to know how to trace recursive methods (figure out what they return or print).  You will *not* be asked to write a recursive method on the exam.    

What is Recursion?
==================

..	index::
    single: recursion
    pair: recursion; defintion

**Recursion** is when a method calls itself. See the example method below. 

.. code-block:: java 
  :linenos:

  public static void neverEnd() 
  {
    System.out.println("This is the method that never ends!");
    neverEnd();
  } 
  
..	index::
    single: infinite recursion
    pair: recursion; infinite
  
This method will print out "This is the method that never ends!" and then call itself, which will print out the message again, and then call itself, and so on.  This is called **infinite recursion**, which is a recursion that never ends.  Of course, this particular method is not very useful.  

.. fillintheblank:: recurb1fill

   Which line in the method neverEnd (shown above) contains the recursive call (the call to the same method)? 
   
   -    :4$: Correct.  This line contains a call to the same method, which makes it a recursive method.
        :.*: Look for a call to the same method name

        
..	index::
    single: factorial

Here is another method that calculates the **factorial** of a number.  The **factorial** of a number is defined as 1 for 0 and n * factorial (n-1) for any other number.  

.. code-block:: java 
  :linenos:

  public static int factorial(int n)
  {
    if (n == 0)
      return 1;
    else 
      return n * factorial(n-1);
  }
  
.. fillintheblank:: recurb2fill
 
   Which line in the method factorial contains the recursive call (the call to the same method)?

   -    :6$: Correct.  This line contains a call to the same method, which makes it a recursive method.
        :.*: Look for a call to the same method name

   
..	index::
    single: base case
    pair: recursion; base case
  
The factorial method has a way to stop.  The recursion stops when n is equal to 0.  

.. note ::

   The thing that stops a recursive method from calling itself is called the **base case**.  A method can have more than one **base case** (way to stop the recursion).  

**Check your understanding**
    
.. mchoice:: qrb_1
   :answer_a: Yes 
   :answer_b: No
   :correct: b
   :feedback_a: Where is the call to the same method?
   :feedback_b: There is no call to the same method, so this can not be a recursive method. 
    
	Is the following method recursive? 
    
    .. code-block:: java
      :linenos:
   
      public static int mystery() 
      { 
         int total = 0;
         for (int i=10; i>0; i--)
         {
            total = total + i;
         }
         return total;
      } 
      
.. mchoice:: qrb_2
   :answer_a: Yes 
   :answer_b: No
   :correct: a
   :feedback_a: Yes, any method that contains at least one call to the same method is recursive. 
   :feedback_b: Look again.  Check if the method contains a call to itself.  
   
   Is the following method recursive? 
    
    .. code-block:: java 
      :linenos:
   
      public static int mystery2(int x)
      { 
         if (x == 1) return 1;
         else return x + mystery2(x-1);
      }
      
.. mchoice:: qrb_3
   :answer_a: 0 
   :answer_b: 1
   :answer_c: 2
   :correct: b
   :feedback_a: Look again.  What is the value of n when this method returns a value, without doing a recursive call? 
   :feedback_b: This method stops calling itself when n equals 1 (line 3).  
   :feedback_c: Look for a return with a number after it.  When is this code executed?  
   
   What is the value of n when this method stops calling itself (when it reaches the base case)? 
    
    .. code-block:: java 
      :linenos:
   
      public static int product(int n) 
      {
         if(n == 1)          
            return 1;     
         else          
            return n * product(n - 2); 
      } 
      
.. mchoice:: qrb_4
   :answer_a: 0
   :answer_b: 1
   :answer_c: Both 0 and 1
   :correct: c
   :feedback_a: This method also stops for another value of n.  
   :feedback_b: This method also stops for another value of n. 
   :feedback_c: This method stops calling itself when n is either 0 or 1.   
   
   What is/are the values of the variable bunnies when this method stops calling itself (when it reaches the base case)? 
    
    .. code-block:: java 
      :linenos:
    
      public static int bunnyEars(int bunnies) 
      {
         if (bunnies == 0) return 0;
         else if (bunnies == 1) return 2;
         else return 2 + bunnyEars(bunnies - 1); 
      }




    
