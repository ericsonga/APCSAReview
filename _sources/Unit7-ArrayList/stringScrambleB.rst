.. qnum::
   :prefix: 7-4-1-
   :start: 1

Free Response - String Scramble B
-----------------------------------

.. index::
    single: string scramble
    single: free response

The following is part b of a free response question from 2014.  It was question 1 on the exam.  You can see all the free response questions from past exams at https://apstudents.collegeboard.org/courses/ap-computer-science-a/free-response-questions-by-year.

**Question 1.**  This question involves reasoning about strings made up of uppercase letters. You will implement two related methods that appear in the same class (not shown). The first method takes a single string parameter and returns a scrambled version of that string. The second method takes a list of strings and modifies the list by scrambling each entry in the list. Any entry that cannot be scrambled is removed from the list.

**Part b.** Write the method ``scrambleOrRemove``, which replaces each word in the parameter ``wordList`` with its scrambled version and removes any words that are unchanged after scrambling.  The relative order of the words in ``wordList`` remains the same as before the call to ``scrambleOrRemove``.

The following example shows how the contents of ``wordList`` would be modified as a result of calling ``scrambleOrRemove``.

.. figure:: Figures/stringScrambleB.png
    :width: 500px
    :align: center
    :figclass: align-center

    Figure 1: Example call and result

Assume that the method ``scrambleWord`` works as intended and is in the same class.  It will return the scrambled word or the same word.  You will write the ``scrambleOrRemove`` method to replace each original word with the scrambled word or remove the word if it was not scrambled.

.. code-block:: java

   import java.util.List;

   public class ScrambledStrings
   {

       /**
        * Modifies wordList by replacing each word with its scrambled version,
        * removing any words that are unchanged as a result of scrambling.
        *
        * @param wordList the list of words Precondition: wordList contains only
        *     non-null objects Postcondition: - all words unchanged by scrambling have
        *     been removed from wordList - each of the remaining words has been
        *     replaced by its scrambled version - the relative ordering of the entries
        *     in wordList is the same as it was before the method was called
        */
       public static void scrambleOrRemove(List<String> wordList)
       {
           /* to be implemented in part b */
       }
   }

How to solve this problem
===========================
.. shortanswer:: 2014string_algorithm_partB

   Explain in plain English what your code will have to do to answer this question.  Use the variable names given above.

This section contains a plain English explanation of one way to solve this problem as well as problems that test your understanding of how to write the code to do those things.  Click on the buttons to reveal the questions.

.. reveal:: 2014strng_algorithm_B
    :showtitle: Reveal Algorithm Structure Hint
    :hidetitle: Hide Algorithm Structure Hint

    In the example the first word (at index 0) ``TAN`` is scrambled and replaced. The second word ``ABRACADABRA`` (at index 1) is scrambled and replaced. The third word ``WHOA`` (at index 2) is removed. The fourth word ``APPLE`` (at index 3) is scrambled and replaced. The fifth word ``EGGS`` (at index 4) is removed since the scrambled word is the same as the original. What method of List allows you to replace an element in a list? What method of list allows you to remove an element from a list? How can you loop through a list and not always increment the current index?

.. reveal:: strng_mcalg_hint_0
    :showtitle: Reveal Data Type Problem
    :hidetitle: Hide Data Type Problem

    .. mchoice:: strng_mcalg_answr_0
       :answer_a: String
       :answer_b: ArrayList
       :answer_c: Array
       :answer_d: void
       :correct: d
       :feedback_a: Reread the method header, the datatype returned is to the left of the method name.
       :feedback_b: Reread the method header, the datatype returned is to the left of the method name.
       :feedback_c: Reread the method header, the datatype returned is to the left of the method name.
       :feedback_d: Correct!

       What is returned by this method?

.. reveal:: strng_mcalg_hint_0_5
    :showtitle: Reveal Parameter Problem
    :hidetitle: Hide Parameter problem

    .. mchoice:: strng_mcalg_answr_0_5
       :answer_a: void
       :answer_b: String
       :answer_c: List
       :answer_d: int
       :correct: b
       :feedback_a: you cannot have an ArrayList of type void
       :feedback_b: Correct!
       :feedback_c: This is not an ArrayList of more Lists
       :feedback_d: This list does not contain integers.

       This method accepts an ``ArrayList``, what is the datatype of the objects contained in this ``ArrayList``?

.. reveal:: strng_mcalg_hint_1
    :showtitle: Reveal While Loop Problem
    :hidetitle: Hide While Loop problem

    .. mchoice:: strng_mcalg_answr_1
       :answer_a: (index != wordList.current())
       :answer_b: (int index = wordList.size() - 1; index >= 0; index--)
       :answer_c: (index < wordList.size())
       :answer_d: (wordList(index) != wordList.size())
       :correct: c
       :feedback_a: the .current() method does not exist
       :feedback_b: this form of range control does not work with while loops
       :feedback_c: Correct!
       :feedback_d: this does not accurately update the list as you iterate through wordList

       There are many ways to use loops to solve this problem. If we were to use a while loop, what conditional could we write to make sure the loop does not go out of bounds? (Assume an integer index has already been initialized).

.. reveal:: strng_mcalg_hint_2
    :showtitle: Reveal For Loop Problem
    :hidetitle: Hide For Loop Problem

    .. mchoice:: strng_mcalg_answr_2
       :answer_a: (int i = wordList.size() - 1; i != wordList.size(); i--)
       :answer_b: (int i = wordList.size() - 1; i >= 0; i--)
       :answer_c: (int i = wordList.size(); i >= 0; i--)
       :answer_d: (int i = wordList.size() - 1; i > 0; i--)
       :correct: b
       :feedback_a: this will lead to an infinite loop
       :feedback_b: Correct!
       :feedback_c: This loop starts out of bounds since there isn't an element at wordList.size().
       :feedback_d: This loop doesn't iterate all the way through the wordList. It misses the 0th element.

       You can also use a for loop to solve this problem instead of a while loop. what conditional could we write to make sure the loop does not go out of bounds?

.. reveal:: strng_mcalg_hint_3
    :showtitle: Reveal Accessor Problem
    :hidetitle: Hide Accessor Problem

    .. mchoice:: strng_mcalg_answr_3
       :answer_a: wordList.get(index)
       :answer_b: wordList[index]
       :answer_c: wordList(index)
       :answer_d: wordList.at(index)
       :correct: a
       :feedback_a: Correct!
       :feedback_b: This accessor method doesn't work for arrayLists.
       :feedback_c: This accessor method doesn't work for arrayLists.
       :feedback_d: This accessor method doesn't work for arrayLists.

       How would you access each element in wordList assuming you already have an integer index properly initialized.

.. reveal:: strng_mcalg_hint_4
    :showtitle: Reveal Checking Equality Problem
    :hidetitle: Hide Checking Equality Problem

    .. mchoice:: strng_mcalg_answr_4
       :answer_a: !(word != other)
       :answer_b: word.size() == other.size()
       :answer_c: word == other
       :answer_d: word.equals(other)
       :correct: d
       :feedback_a: This checks to make sure that word does not equal a different space in memory that other.
       :feedback_b: This only checks the size of the strings, it does not check for equality
       :feedback_c: This checks the actual addresses in memory of the strings, not their contents.
       :feedback_d: Correct!

       How would you check that a string ``word`` is equal to a different string called ``other``?


The Algorithm
===========================

Loop through the list and scramble the current word.  If the scrambled word and original are equal then remove the word from the list and otherwise replace it.  We will have to be careful since the size of the list can change in the loop.  If we remove an element all the other elements will shift left.
We will only want to increment the index if the word was replaced and not removed. There are many ways to solve this problem but we have outlined 2 in the following optional questions. If you feel that you are ready to solve the problem, please skip ahead to the active code block.

.. reveal:: strng_scarmble_parsons_pseudo
    :showtitle: Reveal Solution 1 Pseudo Code Problem
    :hidetitle: Hide Solution 1 Pseudo Code Problem

    .. code-block:: java

      public static void scrambleOrRemove(List<String> wordList)
          initialize index counter
          while (index less than wordlist size)
            initialize a string and set it equal to word in wordList at index

            initialize another string and set it equal to the scrambled version
            of the word in wordlist at index

            if (the normal string equals the scrambled string)
                remove the word in wordList at the current index
            else
                reassign the current word in wordList to be the scrambled version
                iterate the index

.. reveal:: strng_scarmble_parsons
    :showtitle: Reveal Solution 1 Problem
    :hidetitle: Hide Solution 1 Problem

    .. parsonsprob:: StringScrambleB1
      :numbered: left
      :adaptive:

      The method test below contains the correct code for one solution to this problem, but it is mixed up.  Drag the needed code from the left to the right and put them in order with the correct indention so that the code would work correctly.
      -----
      public static void test(List<String> wordList)
      {
      =====
        int i = 0;
        while (i < wordList.size())
        {
      =====
           String current = wordList.get(i);
           String scrambled = scrambleWord(current);
      =====
           if (scrambled.equals(current))
      =====
              wordList.remove(i);
      =====
           else
           {
      =====
              wordList.set(i,scrambled);
      =====
              i++;
      =====
           } // end else
      =====
        } // end while
      =====
      } // end method

Another way to solve this problem is to start at the end of the list and loop towards the front of the list. That way you don't have to worry about the index being off if you remove an item from the list.

.. reveal:: strng_scarmble_parsons_pseudo_2
    :showtitle: Reveal Solution 2 Pseudo Code Problem
    :hidetitle: Hide Solution 2 Pseudo Code Problem

    .. code-block:: java

      public static void scrambleOrRemove(List<String> wordList)
            for( int i = wordList size - 1; i >= 0; i--)
                initialize a string and set it equal to word in wordList at index

                initialize another string and set it equal to the scrambled version
                of the word in wordlist at index

                if (the normal string equals the scrambled string)
                    remove the word in wordList at the current index
                else
                    reassign the current word in wordList to be the scrambled version
                    iterate the index

.. reveal:: strng_scarmble_parsons_2
    :showtitle: Reveal Solution 2 Problem
    :hidetitle: Hide Solution Problem

    .. parsonsprob:: StringScrambleB2
      :numbered: left
      :adaptive:

      The method test below contains the correct code for another solution to this problem, but it is mixed up.  Drag the needed code from the left to the right and put them in order with the correct indention so that the code would work correctly.
      -----

      public static void test(List<String> wordList)
      {
      =====
         for (int i = wordList.size() - 1; i >= 0; i--)
         {
      =====
            String word = wordList.get(i);
      =====
            String scrambled = scrambleWord(word);
      =====
            if (!scrambled.equals(word))
      =====
              wordList.set(i, scrambled);
      =====
            else
      =====
              wordList.remove(i);
      =====
         } // end for
      =====
      } // end method


Try and Solve It
===================



.. activecode:: frqScrambleOrRemove
   :language: java
   :autograde: unittest

   Write the method ``scrambleOrRemove`` below. The main has code to test the result.
   ~~~~
   import java.util.ArrayList;
   import java.util.List;

   public class ScrambledStrings
   {

       /**
        * Scrambles a given word.
        *
        * @param word the word to be scrambled
        * @return the scrambled word (possibly equal to word) Precondition: word is
        *     either an empty string or contains only uppercase letters.
        *     Postcondition: the string returned was created from word as follows: -
        *     the word was scrambled, beginning at the first letter and continuing
        *     from left to right - two consecutive letters consisting of "A" followed
        *     by a letter that was not "A" were swapped - letters were swapped at most
        *     once
        */
       public static String scrambleWord(String word)
       {
           String scrambled = "";
           int i = 0;

           while (i < word.length())
           {
               String letter1 = word.substring(i, i + 1);
               String letter2 = "";
               if (i < word.length() - 1) 
               {
                   letter2 = word.substring(i + 1, i + 2);
               }
               if (letter1.equals("A")
                       && !letter2.equals("A")
                       && !letter2.equals(""))
               {
                   scrambled += letter2 + letter1;
                   i += 2;
               }
               else
               {
                   scrambled += letter1;
                   i += 1;
               }
           }
           return scrambled;
       }

       /********************** Part (b) *********************/

       /**
        * Modifies wordList by replacing each word with its scrambled version,
        * removing any words that are unchanged as a result of scrambling.
        *
        * @param wordList the list of words Precondition: wordList contains only
        *     non-null objects Postcondition: - all words unchanged by scrambling have
        *     been removed from wordList - each of the remaining words has been
        *     replaced by its scrambled version - the relative ordering of the entries
        *     in wordList is the same as it was before the method was called
        */
       public static void scrambleOrRemove(List<String> wordList) {}

       /********************** Test *********************/

       public static void main(String[] args)
       {

           System.out.println("\nTesting Part (b):\n");

           String[] words2 = {"TAN", "ABRACADABRA", "WHOA", "APPLE", "EGGS"};
           ArrayList<String> wordList = new ArrayList<String>();
           for (String word : words2) wordList.add(word);
           System.out.print(wordList);
           scrambleOrRemove(wordList);
           System.out.println(" ==> " + wordList);
       }
   }

   ====
   import static org.junit.Assert.*;

   import org.junit.*;

   import java.io.*;
   import java.util.ArrayList;
   import java.util.Arrays;

   @SuppressWarnings("unchecked")
   public class RunestoneTests extends CodeTestHelper
   {
       public RunestoneTests()
       {
           super("ScrambledStrings");
       }

       @Test
       public void testMain() throws IOException
       {
           String output = getMethodOutput("main");
           String expect = "[TNA, BARCADABARA, PAPLE]";
           boolean passed = output.contains(expect);
           passed = getResults(expect, output, "expected output from main", passed);
           assertTrue(passed);
       }

       @Test
       public void test1()
       {
           ArrayList<String> wordList =
                   new ArrayList(Arrays.asList("TAN", "ABRACADABRA", "WHOA", "APPLE", "EGGS"));

           ArrayList<String> wordListExpect =
                   new ArrayList<String>(Arrays.asList("TNA", "BARCADABARA", "PAPLE"));

           ScrambledStrings.scrambleOrRemove(wordList);

           boolean result = wordList.equals(wordListExpect);

           boolean passed =
                   getResults(
                           "true",
                           "" + result,
                           "scrambleOrRemove works for ArrayList #1: TAN, ABRACADABRA, WHOA, APPLE,"
                               + " EGGS");

           assertTrue(passed);
       }

       @Test
       public void test2()
       {
           ArrayList<String> wordList = new ArrayList(Arrays.asList("TESTING", "ONE", "TWO", "THREE"));

           ArrayList<String> wordListExpect = new ArrayList<String>(Arrays.asList());

           ScrambledStrings.scrambleOrRemove(wordList);

           boolean result = wordList.equals(wordListExpect);

           boolean passed =
                   getResults(
                           "true",
                           "" + result,
                           "scrambleOrRemove works for ArrayList #2: TESTING, ONE, TWO, THREE");

           assertTrue(passed);
       }
   }

