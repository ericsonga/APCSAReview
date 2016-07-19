.. qnum::
   :prefix: 3-3-
   :start: 1
   

Naming Variables
--------------------

..	index::
	pair: variable; names

While you can name your variable almost anything, there are some rules.  A variable name should start with an alphabetic character (like a, b, c, etc).  You can't use any of the keywords or reserved words as variable names in Java (``for``, ``if``, ``class``, ``static``, ``int``, ``double``, etc).  For a complete list of keywords and reserved words see http://docs.oracle.com/javase/tutorial/java/nutsandbolts/_keywords.html.  

The name of the variable should match both the function of the variable and the type of the variable.  A name like ``score`` helps make your code easier to read.  Do not try to be cute on the exam and name
your variables crazy things like ``thisIsAReallyLongName``.  This makes the code very hard to understand.  The free response questions are graded by readers (high school AP CS A teachers and college faculty).  You want to make the readers' job easier, not harder!  

.. note::

    Remember that a reader is reading thousands of exams, you don't want to make this person work harder than necessary, so use good variable names.

..	index::
    single: camel case
	pair: variable; naming convention
	
The convention in Java is to always start a variable name with a lower case letter and then uppercase the first letter of each additional word. Variable names can not include spaces so uppercasing the first letter of each additional word makes it easier to read the name.  Uppercasing the first letter of each additional word is called **camel case**.  Java is case sensitive so ``playerScore`` and ``playerscore`` are not the same.  
  
.. activecode:: lcnv1
   :language: java

   public class Test
   {
      public static void main(String[] args)
      {
        int PlayerScore = 0; // variables names using camel case
        int playerScore = 1;
        System.out.println(PlayerScore);
        System.out.println(playerScore);
      }
   }
   
**Check Your Understanding**
            
.. fillintheblank:: fillName1

        .. blank:: blankvar3-3-1
            :correct: ^\s*shoeSize$
            :feedback1: (".*", "In camel case just appended the words after each other but uppercase the first letter of each word after the 1st word")

            What is the camel case variable name for a variable that represents a shoe size?
            
.. fillintheblank:: fillName2

        .. blank:: blankvar3-3-2
            :correct: ^\s*topScore$
            :feedback1: (".*", "In camel case just appended the words after each other but uppercase the first letter of each word after the 1st word")

            What is the camel case variable name for a variable that represents the top score?
            
.. fillintheblank:: fillName3

        .. blank:: blankvar3-3-3
            :correct: ^\s*playerTopScore$
            :feedback1: (".*", "In camel case just appended the words after each other but uppercase the first letter of each word after the 1st word.  This would be playerTopScore")

            What is the camel case variable name for a variable that represents the player's top score?

       