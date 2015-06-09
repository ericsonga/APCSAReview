.. qnum::
   :prefix: 6-10-
   :start: 1

Free Response - String Scramble A
-----------------------------------

..	index::
	single: string scramble
    single: free response
    
The following is part a of a free response question from 2014.  It was question 1 on the exam.  You can see all the free response questions from past exams at https://apstudent.collegeboard.org/apcourse/ap-computer-science-a/exam-practice.  

**Question 1.**  This question involves reasoning about strings made up of uppercase letters. You will implement two related methods that appear in the same class (not shown). The first method takes a single string parameter and returns a scrambled version of that string. The second method takes a list of strings and modifies the list by scrambling each entry in the list. Any entry that cannot be scrambled is removed from the list.

**Part a.**  Write the method *scrambleWord*, which takes a given word and returns a string that contains a scrambled version of the word according to the following rules.

* The scrambling process begins at the first letter of the word and continues from left to right.
* If two consecutive letters consist of an "A" followed by a letter that is not an "A", then the two letters are swapped in the resulting string.
* Once the letters in two adjacent positions have been swapped, neither of those two positions can be involved in a future swap.

.. livecode:: lcfrssa1
   :language: java
   
   import java.util.List;
   import java.util.ArrayList;

   public class ScrambledStrings
   {
      /********************** Part (a) *********************/
  
      /** Scrambles a given word.
       *  @param word the word to be scrambled
       *  @return the scrambled word (possibly equal to word)
       *  Precondition: word is either an empty string or contains only uppercase letters.
       *  Postcondition: the string returned was created from word as follows:
       *   - the word was scrambled, beginning at the first letter and continuing from left to right
       *   - two consecutive letters consisting of "A" followed by a letter that was not "A" were swapped
       *   - letters were swapped at most once
       */
      public static String scrambleWord(String word)
      {
         /* to be implemented in part a */
      }
      
      /********************** Test *********************/
      public static void main(String[] args)
      {
         System.out.println("\nTesting Part (a):\n");
    
         String[] words = {"TAN", "ABRACADABRA", "WHOA", "AARDVARK", "EGGS", "A", ""};
         for (String word : words)
            System.out.println(word + " becomes " + scrambleWord(word));
      }  
   }
    
How to solve this problem
===========================

The first thing to do is try to solve the examples by hand. 

For the word "TAN" we would 
* check the "T" and "A" and do nothing since it isn't an A followed by a character that isn't an "A".  
* check the "A" and "N" and swap those two characters 
The result is "TNA"

For the word "ABRACADABRA" we would 

* check "A" and "B" and swap the "A" and the "B" and increment the index to be sure to not swap a character that has already been swapped
* check "R" and "A" and do nothing
* check "A" and "C" and swap them and increment the index
* check "A" and "D" and swap them and increment the index
* check "A" and "B" and swap them and increment the index
* check "R" and "A" and do nothing. 
 
The result is "BARCADABARA"

For the word "WHOA" we would

* check "W" and "H" and do nothing
* check "H" and "O" and do nothing
* check "O" and "A" and do nothing

The result is "WHOA"

For the word "AARDVARK" we would 

* check "A" and "A" and do nothing
* check "A" and "R" and swap them and increment the index
* check "D" and "V" and do nothing
* check "V" and "A" and do nothing
* check "A" and "R" and swap them and increment the index

The result is "ARADVRAK"

Figuring out the algorithm
===========================

It can help to write out what you need to do to get each of the characters to compare.  The following shows what to do to solve the example with "ABRACADABRA". 
   
.. livecode:: lcfrssa3
   :language: java
   
   public class Test
   {
      public static void main(String[] args)
      {
         System.out.println("ABRACADABRA".substring(0,1)); // get the A
         System.out.println("ABRACADABRA".substring(1,2)); // get the B
         // compare the A and B and swap them which results in BARACADABRA
         System.out.println("ABRACADABRA".substring(2,3)); // get the R
         System.out.println("ABRACADABRA".substring(3,4)); // get the A 
         // compare the R and A and do nothing
         System.out.println("ABRACADABRA".substring(3,4)); // get the A
         System.out.println("ABRACADABRA".substring(4,5)); // get the C
         // compare the A and C and swap them which results in BARCAADABRA
         System.out.println("ABRACADABRA".substring(5,6)); // get the A
         System.out.println("ABRACADABRA".substring(6,7)); // get the D 
         // compare the A and D and swap them which results in BARCADAABRA
         System.out.println("ABRACADABRA".substring(7,8)); // get the A
         System.out.println("ABRACADABRA".substring(8,9)); // get the B
         // compare the A and B and swap them which results in BARCADABARA
         System.out.println("ABRACADABRA".substring(9,10)); // get the R
         System.out.println("ABRACADABRA".substring(10,11)); // get the A 
         // compare R and A and do nothing
      }
   }
   
The following shows what to do to solve the example with "WHOA".  
   
.. livecode:: lcfrssa4
   :language: java
   
   public class Test
   {
      public static void main(String[] args)
      {
         System.out.println("WHOA".substring(0,1)); // get the W
         System.out.println("WHOA".substring(1,2)); // get the H - compare the W and H and do nothing
         System.out.println("WHOA".substring(1,2)); // get the H 
         System.out.println("WHOA".substring(2,3)); // get the O - compare the H and O and do nothing
         System.out.println("WHOA".substring(2,3)); // get the O 
         System.out.println("WHOA".substring(3,4)); // get the A - compare the O and A and do nothing
      }
   }

The code will need to loop through the characters in the string and compare two characters at a time.  There are two ways to compare two adjacent characters without going beyond the bounds of the loop.  One way is to start the index at 0 and loop while the index is less than one less than the length of the string and then get the characters at the index and at the index plus one. Another way is to start the index at 1 and loop while the index is less than the length of the string and then get the characters at one less than the index and at the index.  If the first character is an "A" and the second is not an "A" then swap them and increment the index to make sure that you don't check characters that have already been swapped.  Each time through the loop also increment the index.  Write the method scrambleWord below. 

.. livecode:: lcfrssa5
   :language: java
   
   import java.util.List;
   import java.util.ArrayList;

   public class ScrambledStrings
   {
      /********************** Part (a) *********************/
  
      /** Scrambles a given word.
       *  @param word the word to be scrambled
       *  @return the scrambled word (possibly equal to word)
       *  Precondition: word is either an empty string or contains only uppercase letters.
       *  Postcondition: the string returned was created from word as follows:
       *   - the word was scrambled, beginning at the first letter and continuing from left to right
       *   - two consecutive letters consisting of "A" followed by a letter that was not "A" were swapped
       *   - letters were swapped at most once
       */
      public static String scrambleWord(String word)
      {
         /* to be implemented in part a */
      }
      
      /********************** Test *********************/
      public static void main(String[] args)
      {
         System.out.println("\nTesting Part (a):\n");
    
         String[] words = {"TAN", "ABRACADABRA", "WHOA", "AARDVARK", "EGGS", "A", ""};
         for (String word : words)
            System.out.println(word + " becomes " + scrambleWord(word));
      }  
   }
    
Video - One way to code the solution
=====================================

There are many possible solutions to this problem.  The video below shows one solution.

   

     
  
  