.. qnum::
   :prefix:  10-16-
   :start: 1

Free Response - 2015 Question 2
-----------------------------------

..	index::
	single: trio
    single: free response
    
The following is a free response question from 2015.  It was question 2 on the exam.  
You can see all the free response questions from past exams at https://apstudent.collegeboard.org/apcourse/ap-computer-science-a/exam-practice.  
    
**QUESTION 2**

Consider a guessing game in which a player tries to guess a hidden word. 
The hidden word contains only capital letters and has a length known to the player. 
A guess contains only capital letters and has the same length as the hidden word.
After a guess is made, the player is given a hint that is based on a comparison between the hidden word and the guess. 
Each position in the hint contains a character that corresponds to the letter in the same position in the guess. 
The following rules determine the characters that appear in the hint.

.. figure:: Figures/2015FRQ2A.png
    :width: 600px
    :align: center
    :figclass: align-center
    
    Figure 1: Example showing the rules for giving hints.
    
The ``HiddenWord`` class will be used to represent the hidden word in the game. 
The hidden word is passed to the constructor. 
The class contains a method, ``getHint``, that takes a guess and produces a hint. 
For example, suppose the variable puzzle is declared as follows. 

.. code-block:: java

   HiddenWord puzzle = new HiddenWord("HARPS");

The following table shows several guesses and the hints that would be produced.

.. figure:: Figures/2015FRQ2B.png
    :width: 600px
    :align: center
    :figclass: align-center
    
    Figure 2: Examples showing what different inputs produce.
    
Write the complete ``HiddenWord`` class, including any necessary instance variables, its constructor, and the method, ``getHint``, described above. 
You may assume that the length of the guess is the same as the length of the hidden word.

**SOLVING QUESTION 2**

To write the ``HiddenWord`` class, we start with:

.. code-block:: java
	
   public class HiddenWord
	
To make the method, we are going to use Strings, which means we need a place to store the string. 
We will make a private class ``String`` called ``word`` to store the hidden word. We are making this class private 
because we don't want it to be accessed in other places.

.. code-block:: java

   private String word;

Now we need to make a constructor. We are going to put the guesses into ``String w``. 

.. code-block:: java

   public HiddenWord(String w)
	

Then we want to set answer equal to the input string, ``String w``. 
 	
.. code-block:: java

   word = w;
	 
	 
Next we are going to implement the ``getHint`` method. This method takes a string, which we will call ``String s``, where we will put guesses, 
and returns a string. 
We want this to be public so it can be accessed. 

.. code-block:: java
   
   public String getHint(String s)
	

We are going to make another string, called ``String hint``, and just set it equal to "" so we can build it up by character.
	
.. code-block:: java

   String hint = "";

To build up ``String hint``, we'll begin by making a for loop. It should start at zero and go to the length of ``String s``, increasing by one each time.

.. code-block:: java
   
   for (int i = 0; i < s.length(); i++)
	

Now we are going to make another string, ``String letter``, and set it equal to the part of ``String s`` from index i to i plus one. We do this because

.. code-block:: java

   String letter = s.substring(i, i+1);
	

Continuing to build up ``String`` hint, we will put an if loop in the for loop. 
If the character at i in the guess is the same as the character at i in the solution, then we want to output that character.

.. code-block:: java

   if (letter.equals(word.substring(i, i+1) 
   hint += letter;

If the character at index i is in the string, then we want the output to be ``+``.

.. code-block:: java

   else if (word.indexOf(letter) >= 0)
   hint += "+";

If the character at i in the guess is not in the solution at all, then we want to output to be ``*``.

.. code-block:: java

   else
   hint += "*";
	

Finally, we want to show the hint created so we return ``String hint``. 

.. code-block:: java

   return hint;
	
   
.. mchoice:: 2015Q2
   :answer_a: Because we want it visible only to the class to which it belongs.
   :answer_b: So it can be accessed by other methods. 
   :correct: a
   :feedback_a: We make class String word private so it cannot be accessed by other methods.
   :feedback_b: Public variables are variables that are available to all classes.

   Why do we make class String word private?
   
***********************
   
.. parsonsprob:: 2015Q2

   The following has the correct code to 'swap' the values but the code is mixed up and contains one or more extra statements.  Drag the needed blocks from the left into the correct order on the right. Check your solution by clicking on the <i>Check Me</i> button.  You will be told if any of the blocks are in the wrong order or if you need to remove one or more blocks.
   -----
   public class HiddenWord
   =====
   private String word;
   =====
   public HiddenWord(String w)
   =====
   word = w;
   =====  
   public String getHint(String s)
   =====
   String hint = "";
   =====
   for (int i = 0; i < s.length(); i++)
   =====
   String letter = s.substring(i, i+1);
   =====
   if (letter.equals(word.substring(i, i+1))) 
   hint += letter;
   =====
   else if (word.indexOf(letter) >= 0)
   hint += "+";
   =====
   else
   hint += "*";
   =====
   return hint;
   =====
   word = string; #distractor
   =====
   public String getHint(int s) #distractor
   
