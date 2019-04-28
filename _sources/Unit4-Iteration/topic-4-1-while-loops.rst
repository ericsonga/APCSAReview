.. qnum::
   :prefix: 4-1-
   :start: 1 
   
.. |CodingEx| image:: ../../_static/codingExercise.png
    :width: 30px
    :align: middle
    :alt: coding exercise
    
    
.. |Exercise| image:: ../../_static/exercise.png
    :width: 35
    :align: middle
    :alt: exercise
    
    
.. |Groupwork| image:: ../../_static/groupwork.png
    :width: 35
    :align: middle
    :alt: groupwork




While Loops
============

..	index::
	single: loop
	single: looping
    single: iteration
	single: while
	pair: loop; while
	

When you play a song, you can set it to loop, which means that when it reaches the end it starts over at the beginning.  A **loop** in programming, also called **iteration** or **repetition**,  is a way to repeat one or more statements. If you didn't have loops to allow you to repeat code, your programs would get very long very quickly! Using a sequence of code, selection (ifs), and repetition (loops), the **control structures** in programming, you can construct an algorithm to solve almost any programming problem! 

A ``while`` loop executes the body of the loop as long as (or while) a Boolean condition is true.  When the condition is false, we exit the loop and continue with the statements that are after the body of the ``while`` loop.  If the condition is false the first time you check it, the body of the loop will not execute.  

Notice the while statement looks a lot like an if statement, but it runs more than once. The curly brackets { } are optional when there is just 1 statement following the condition, but it is a good idea to put them in anyway because loops often have more than 1 statement in the body.

.. code-block:: java

    // if statements just run once if the condition is true
    if (condition)
    {
        statements;
    }
    // while statements are repeated while the condition is true
    while (condition)
    {
      statements;
    }
    

Java doesn't require your code to be correctly indented (code moved to the right a few spaces) to make it clear what statements are part of the body of the loop, but it is good practice.  On the free response part of the exam, the reader will use the indention when determining the meaning of your code, even if you forget the open or close curly brace. 

Here's what the flow of control looks like in a while loop:

.. figure:: Figures/WhileLoopFlow.png
    :width: 300px
    :align: center
    :figclass: align-center

    Figure 1: Flow in a while loop
    
 

.. note:: 

    The loop condition usually involves a **loop control variable** that controls when to stop the loop. To make sure you set up your loops correctly, remember these 3 steps to writing a loop:

    1. Initialize the loop variable
    2. Test the loop variable
    3. Change the loop variable


|CodingEx| **Coding Exercise**

Here is a while loop that counts from 1 to 5 that demonstrates the 3 steps of writing a loop. Can you change it to count from 2 to 10? Can you make it count by 2s? Can you make it count backwards?

.. activecode:: whileloop
   :language: java
   
   public class LoopTest1
   {
      public static void main(String[] args)
      {
        // 1. initialize the loop variable
        int count = 1;
        
        // 2. test the loop variable
        while (count <= 5)
        {
           System.out.println(count);
           // 3. change the loop variable
           count++;
        }
 
      }
   }

|Exercise| **Check your understanding**

.. mchoice:: qlb_2_1
   :answer_a: 5 4 3 2 1
   :answer_b: -5 -4 -3 -2 -1
   :answer_c: -4 -3 -2 -1 0
   :correct: c
   :feedback_a: x is initialized (set) to -5 to start. 
   :feedback_b: x is incremented (x++) before the print statement executes.
   :feedback_c: x is set to -5 to start but then incremented by 1 so it first prints -4.

   What does the following code print? To trace through the code, keep track of the variable x and its value, the iteration of the loop, and the output every time through the loop.  
   
   .. code-block:: java 

     int x = -5;
     while (x < 0) 
     { 
        x++; 
        System.out.print(x + " ");
     }

..	index::
	single: infinite loop
	pair: loop; infinite

One thing to be careful about with while loops is making sure that you don't end up with an **infinite loop**.  An infinite loop is one that never stops (the condition is always true). 

.. code-block:: java 
  
   // an infinite loop
   while (true)
   {
      System.out.println("This is a loop that never ends");
   }
   
The infinite loop above is pretty obvious.  But, most infinite loops are accidental.  They usually occur because you forget to change the thing you are checking in the condition (step 3 of a loop).

Another common error with loops is an **off-by-one error** where the loop runs one too many or one too few times. This is usually a problem with step 2 the test condition and using the incorrect relational operator < or <=.

.. |Magpie chatbot lab on repl.it| raw:: html

   <a href="https://repl.it/@BerylHoffman/Magpie-ChatBot-Lab-v2" target="_blank">Magpie chatbot lab on repl.it</a>
   
You can use a ``while`` loop to repeat the body of the loop a certain number of times as shown above.  However, a ``while`` loop is typically used when you don't know how many times the loop will execute. It is often used for a **input-controlled loop** where the user's input indicates when to stop. For example, in the |Magpie chatbot lab on repl.it|, the while loop stops when you enter in "bye". The stopping value is often called the **sentinel value** for the loop.

.. raw:: html

    <iframe height="700px" width="100%" style="max-width:90%; margin-left:5%" src="https://repl.it/@BerylHoffman/Magpie-ChatBot-Lab-v2?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe><p>


|CodingEx| **Coding Exercise**

.. |numbers on repl.it| raw:: html

   <a href="https://repl.it/@BerylHoffman/Average" target="_blank">numbers on repl.it</a>

Here's another example with |numbers on repl.it|. This code calculates the average of positive numbers, but it is missing the condition for the loop on line 14.  Let's use -1 as the **sentinel value**. Add the condition to  the while loop to run while the user does not input -1. What would happen if you forgot step 3 (change the loop variable - get a new input)? Try commenting out line 19 with // to see what happens (note there is a stop button at the top!).

.. raw:: html

    <iframe height="700px" width="100%" style="max-width:90%; margin-left:5%" src="https://repl.it/@BerylHoffman/Average?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>


|Groupwork| Programming Challenge : Guessing Game
-------------------------------------------------

We encourage you to work in pairs on this guessing game. In the guessing game, the computer picks a random number from 0-100 and you have to guess it. After each guess, the computer will give you clues like "Too high" or "Too low". Here's the pseudocode for the guessing game. What's the loop variable? Can you identify the 3 steps of writing this loop with respect to the loop variable?

1. Choose a random number from 0-100
2. Get the first guess
3. Loop while the guess does not equal the random number,

   - If the guess is less than the random number, print out "Too low!"
   - If the guess is greater than the random number, print out "Too high!"
   - Get a new guess (save it into the same variable)
   
4. Print out something like "You got it!"

As an extension to this project, you can add a counter variable to count how many guesses the user took and print it out when they guess correctly.

When you finish and run your program, what is a good guessing strategy for guessing a number between 0 and 100? What was your first guess? One great strategy is to always split the guessing space into two and eliminating half, so guessing 50 for the first guess. This is called a **divide and conquer** or **binary search** algorithm. If your guess is between 0-100, you should be able to guess the number within 7 guesses. Another extension is to test whether the user got it in 7 guesses or less and provide feedback on how well they did.

.. |Scanner class| raw:: html

   <a href="https://www.w3schools.com/java/java_user_input.asp" target="_blank">Scanner class</a>
   
.. |repl.it| raw:: html

   <a href="https://repl.it/@BerylHoffman/Guessing-Game" target="_blank">repl.it</a>
   
For this project, you will need to use the |Scanner class| for input and |repl.it| or another IDE of your choice.

.. raw:: html

    <iframe height="600px" width="100%" style="max-width:90%; margin-left:5%" src="https://repl.it/@BerylHoffman/Guessing-Game?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

Summary
-------------------


- Iteration statements (loops) change the flow of control by repeating a set of statements zero or more times until a condition is met.

- Loops often have a **loop control variable** that is used in the boolean condition of the loop. Remember the 3 steps of writing a loop:

  - Initialize the loop variable
  - Test the loop variable
  - Change the loop variable
  
- In loops, the Boolean expression is evaluated before each iteration of the loop body, including the first. When the expression evaluates to true, the loop body is executed. This continues until the expression evaluates to false which signals to exit the loop. If the Boolean expression evaluates to false initially, the loop body is not executed at all.

- A loop is an **infinite loop** when the Boolean expression always evaluates to true so that the loop never ends.

- **Off by one** errors occur when the iteration statement loops one time too many or one time too few.

- **Input-controlled loops** often use a **sentinel value** inputted by the user like "bye" or -1 as the condition for the loop to stop. Input-controlled loops are not on the AP CS A exam, but are very useful to accept data from the user. 

- There are standard algorithms to compute a sum or average.

.. Here is an example ``while`` loop that just prints the numbers until 0 is reached. Can you modify it to print 0 too?
    
.. .. activecode:: while_loop_ex1
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
   
.. Here is an example ``for`` loop that just prints the numbers until 0 is reached. Can you modify it to print 0 too?
   
.. .. activecode:: for_loop_ex1
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
   
.. Which of the two loops above takes less code?  While you can write any loop with either a ``while`` or ``for``, programmers tend to use the ``while`` when they don't know how many times the loop will execute and the ``for`` when they know the number of times to execute the loop.  The problem with using a ``while`` loop to execute a loop a certain number of times is that you have to remember to update the variable in the loop.  The ``for`` loop allows you to specify all of the important things about a loop in one place (what value do variables start at, what is the condition to test, and how the loop variables change).  

.. **Check your understanding**

.. .. clickablearea:: click_while1
    :question: Click on all the statements that are part of the body of the while loop.  If you make a mistake you can click on the statement again to unhighlight it.
    :iscode:
    :feedback: Remember, the body of a loop is all the statements between the { and } after the while keyword or single statement following the while if there are no {}.
    
    :click-incorrect:int x = 5;:endclick:
    :click-incorrect:while (x > 0):endclick:
    :click-incorrect:{:endclick:
        :click-correct:System.out.println(x);:endclick:
        :click-correct:x = x - 1;:endclick:
    :click-incorrect:}:endclick:
        
.. .. clickablearea:: click_for1
    :question: Click on all the statements that are part of the body of the for loop.  If you make a mistake you can click on the statement again to unhighlight it.
    :iscode:
    :feedback: Remember, the body of a loop is all the statements between the { and } after the for declaration or a single statement following the for declaration if there are no {}.
    
    :click-incorrect:for (int x = 5; x > 0; x--):endclick:
        :click-correct:System.out.println(x);:endclick:
        
.. .. clickablearea:: click_for2
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
    
