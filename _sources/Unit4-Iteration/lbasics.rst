.. qnum::
   :prefix: 6-1-
   :start: 1

Loops in Java
=============

.. qnum::
   :prefix: trl-
   :start: 1
   
.. highlight:: java
   :linenothreshold: 4
   
..	index::
	single: loop
	single: looping
	single: for loop
	single: while loop
	single: for-each loop
	pair: loop; for
	pair: loop; while
	pair: loop; for-each

When you play a song, you can set it to **loop**, which means that when it reaches the end it starts over at the beginning.  A **loop** in programming is a way to repeat one or more statements. If you didn't have loops to allow you to repeat code, your programs would get very long very quickly! 

The keywords ``while`` or ``for`` both indicate the start of a loop (the header or declaration).  The **body of the loop** will be repeated while the loop condition is true.  

.. note:: 

   The **body of the loop** is either a single statement following the ``while`` or ``for`` or a block of statements after an opening curly brace ``{`` and before a closing curly brace ``}``.  

There are many different types of loops in Java, but the AP CS A exam only covers three:

    -  ``while``: repeats the body of the loop while a Boolean expression is true

    -  ``for``: contains a header with 3 possible parts: declaration/initialization, condition, and change.  Before the loop starts it does the declaration/initialization. Then it repeats the body of the loop while the condition is true.   The code in the change part is executed each time at the end of the body of the loop.    
    
    -  for-each: loop through a collection (list or array) and each time through the loop set a variable to the next item from the collection.  We will discuss this in the section about arrays.   
    
    
Here is an example ``while`` loop that just prints the numbers until 0 is reached. Can you modify it to print 0 too?
    
.. activecode:: while_loop_ex1
   :language: java
   
   public class Test
   {
      public static void main(String[] args)
      {
          int x = 3;
          while (x > 0)
          {
             System.out.println(x);
             x = x - 1;
          }
      }
   }
   
Here is an example ``for`` loop that just prints the numbers until 0 is reached. Can you modify it to print 0 too?
   
.. activecode:: for_loop_ex1
   :language: java
   
   public class Test
   {
      public static void main(String[] args)
      {
          for (int x = 3; x > 0; x--)
          {
             System.out.println(x);
          }
      }
   }
   
Which of the two loops above takes less code?  While you can write any loop with either a ``while`` or ``for``, programmers tend to use the ``while`` when they don't know how many times the loop will execute and the ``for`` when they know the number of times to execute the loop.  The problem with using a ``while`` loop to execute a loop a certain number of times is that you have to remember to update the variable in the loop.  The ``for`` loop allows you to specify all of the important things about a loop in one place (what value do variables start at, what is the condition to test, and how the loop variables change).  

**Check your understanding**

.. clickablearea:: click_while1
    :question: Click on all the statements that are part of the body of the while loop.  If you make a mistake you can click on the statement again to unhighlight it.
    :iscode:
    :feedback: Remember, the body of a loop is all the statements between the { and } after the while keyword or single statement following the while if there are no {}.
    
    :click-incorrect:int x = 5;:endclick:
    :click-incorrect:while (x > 0):endclick:
    :click-incorrect:{:endclick:
        :click-correct:System.out.println(x);:endclick:
        :click-correct:x = x - 1;:endclick:
    :click-incorrect:}:endclick:
        
.. clickablearea:: click_for1
    :question: Click on all the statements that are part of the body of the for loop.  If you make a mistake you can click on the statement again to unhighlight it.
    :iscode:
    :feedback: Remember, the body of a loop is all the statements between the { and } after the for declaration or a single statement following the for declaration if there are no {}.
    
    :click-incorrect:for (int x = 5; x > 0; x--):endclick:
        :click-correct:System.out.println(x);:endclick:
        
.. clickablearea:: click_for2
    :question: Click on all the statements that are part of the body of the for loop.  If you make a mistake you can click on the statement again to unhighlight it.
    :iscode:
    :feedback: Remember, the body of a loop is all the statements between the { and } after the for declaration or single statement following the for declaration if there are no {}.  Java doesn't require the body to be indented, but you should indent it to make it easier to see that the statements are part of the loop.
    
    :click-incorrect:String message1 = "I ";:endclick:
    :click-incorrect:String message2a = "love ";:endclick:
    :click-incorrect:String message3 = "you";:endclick:
    :click-incorrect:String message2b = "miss ";:endclick:
    :click-incorrect:for (int x = 1; x < 4; x++):endclick:
    :click-incorrect:{:endclick:
        :click-correct:System.out.println(message1 + message2a + message3);:endclick:
        :click-correct:System.out.println(message1 + message2b + message3);:endclick:
    :click-incorrect:}:endclick:
    
