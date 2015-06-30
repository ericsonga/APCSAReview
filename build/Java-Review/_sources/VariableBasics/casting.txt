.. qnum::
   :prefix: 3-5-
   :start: 1
   
Casting Variables
=================

In DrJava try typing the following in the interactions pane and hit return or enter after each line.  DrJava will automatically print the result of an expression when you hit enter in the interactions pane. 

.. code-block:: java

  1 / 3
  1.0 / 3
  1 / 3.0
  (double) 1 / 3

Do you get the same answer for each of these?  If not, why not?  

.. fillintheblank:: 1div3
   :correct: 0$
   :feedback1: ('.*','Did you actually try this in DrJava?')
   :blankid: div13blank

   What is printed in DrJava when you type 1 / 3 and hit enter? :textfield:`div13blank::mini`
   
.. fillintheblank:: 1Ddiv3
   :correct: 0.33+
   :feedback1: ('.*','Did you actually try this in DrJava?')
   :blankid: div1D3blank

   What is printed in DrJava when you type 1.0 / 3 and hit enter? :textfield:`div1D3blank::large`
   
..	index::
	single: cast
	single: casting
	
Java assumes that if you are doing division with integers that you want an integer result and it will throw away any fractional part (part after the decimal point).  But, if you use a mixture of integers (int) and floating point (double) numbers Java will assume that you want a floating point result.  If you have integers and you want a floating point result from some mathematical operation **cast** one of the integers to a double using (double) as shown above.  By **casting** we don't mean something to do with fishing, but it is a similar idea to casting a pot in clay.  In Java when you cast you are changing the "shape" (or type) of the variable to the right of the cast to the specified type. 

.. figure:: Figures/casting.jpg
    :width: 300px
    :figclass: align-center
    
    Figure 3: Casting a pot in clay.
    
..	index::
	pair: double; number of digits


Is the result of 1.0 divided by 3 correct?  Actually, Java limits the number of digits you can save for any ``double`` number to about 14-15 digits. You should be aware that the accuracy of any calculation on a computer is limited by the fact that computers can only hold a limited number of digits.    

**Check your understanding**

.. mchoicemf:: q2_5
   :answer_a: true
   :answer_b: false
   :correct: b
   :feedback_a: Did you try this out in Dr Java?  Does it work that way?
   :feedback_b: Java throws away any values after the decimal point if you do integer division.  It does not round up automatically.  

   True or false: Java rounds up automatically when you do integer division.  
   
.. mchoicemf:: q2_6
   :answer_a: true
   :answer_b: false
   :correct: b
   :feedback_a: Try casting to int instead of double.  What does that do?  
   :feedback_b: Casting results in the type that you cast to. However, if you can't really cast the value to the specified type then you will get an error.  

   True or false: casting always results in a double type.  
   
.. mchoicemf:: q2_7
   :answer_a: (double) (total / 3);
   :answer_b: total / 3;
   :answer_c: (double) total /  3;
   :correct: c
   :feedback_a: This does integer division before casting the result to double so it loses the fractional part.  
   :feedback_b: When you divide an integer by an integer you get an integer result and lose the fractional part.
   :feedback_c: This will convert total to a double value and then divide by 3 to return a double result.

   Which of the following returns the correct average when 3 values had been added to an integer total?
