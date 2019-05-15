.. qnum::
   :prefix: 2-13-
   :start: 1
   
Multiple Choice Exercises
=================================

These questions are all about Strings, but more questions on using other objects will be added in the future.

.. highlight:: java
   :linenothreshold: 3

Easy Multiple Choice Questions
------------------------------

These problems are mostly easier than what you will see on the AP CS A exam.

.. mchoice:: qse_1
   :answer_a: xyz
   :answer_b: xyxyz
   :answer_c: xy xy z
   :answer_d: xy z
   :answer_e: z
   :correct: b
   :feedback_a: s1 will equal "xy" plus another "xy" then z at the end.
   :feedback_b: s1 contains the original value, plus itself, plus "z"
   :feedback_c: No spaces are added during concatenation.
   :feedback_d: No spaces are added during concatenation, and an additional "xy" should be included at the beginning.
   :feedback_e: s1 was set to "xy" initially, so the final answer will be "xyxyz"

   Given the following code segment, what is in the string referenced by s1?

   .. code-block:: java

     String s1 = "xy";
     String s2 = s1;
     s1 = s1 + s2 + "z";

.. mchoice:: qse_2
   :answer_a: 8
   :answer_b: 10
   :answer_c: 11
   :correct: c
   :feedback_a: Be sure to count spaces and punctuation in the length (the number of characters in the string).
   :feedback_b: Did you forget to count a space or punctuation?
   :feedback_c: The length method returns the number of characters in the string, including spaces and punctuation.

   What is the value of len after the following executes?

   .. code-block:: java

     String s1 = "Hey, buddy!";
     int len = s1.length();

.. mchoice:: qse_3
   :answer_a: 3
   :answer_b: 4
   :answer_c: 5
   :answer_d: -1
   :correct: a
   :feedback_a: The method indexOf returns the first position of the passed str in the current string starting from the left (from 0).
   :feedback_b: The first character is at index 0 in a string, not 1.
   :feedback_c: Does the indexOf method find the first occurrence of the character, or the last?
   :feedback_d: Does the string contain a d?  The pos method will return the first index that the character is at in the string.

   What is the value of pos after the following code executes?

   .. code-block:: java

     String s1 = "ac ded ca";
     int pos = s1.indexOf("d");

.. mchoice:: qse_4
   :answer_a: Hey
   :answer_b: he
   :answer_c: H
   :answer_d: h
   :correct: a
   :feedback_a: Strings are immutable, meaning they don't change.  Any method that that changes a string returns a new string.  So s1 never changes unless you set it to a different string.
   :feedback_b: The substring method returns a new string starting at the first index and ending before the second index.
   :feedback_c: This would be true if we asked what the value of s2 was after the code executes.  What is the value of s1?
   :feedback_d: This would be true if we asked what the value of s3 was after the code executes.  What is the value of s1?

   What is the value of s1 after the following code executes?

   .. code-block:: java

     String s1 = "Hey";
     String s2 = s1.substring(0,1);
     String s3 = s2.toLowerCase();


Medium Multiple Choice Questions
----------------------------------

These problems are similar to those that you will see on the AP CS A exam.

.. mchoice:: qsm_1
   :answer_a: I, II, III
   :answer_b: I only
   :answer_c: II only
   :answer_d: III only
   :answer_e: II and III only
   :correct: a
   :feedback_a: The "equals" operation on strings returns true when the strings have the same characters.  The == operator returns true when they refer to the same object.  In this case all three references actually refer to the same object so both == and equals will be true.
   :feedback_b: This is true, since s1 and s3 contain the same characters since s1 and s3 actually refer to the same string object. But, it isn't the only thing that is true.
   :feedback_c: This is true since s2 == s1.  But, it isn't the only thing that is true.
   :feedback_d: This is true since s3 == s2, and s2 == s1 so it follows that s1 == s3.  But, it isn't the only thing that is true.
   :feedback_e: This is true since they all refer to the same string object.  But, they also contain the same characters so equals is also true.

   After the following code is executed, which of I, II and/or III will evaluate to true?

   .. code-block:: java

     String s1 = "xyz";
     String s2 = s1;
     String s3 = s2;

     I.   s1.equals(s3)
     II.  s1 == s2
     III. s1 == s3

.. mchoice:: qsm_2
   :answer_a: org
   :answer_b: eor
   :answer_c: eorg
   :answer_d: orgi
   :answer_e: You will get an index out of bounds exception
   :correct: a
   :feedback_a: The method substring(a,b) means start at a and stop before b. The method substring(a) means start at a and go to the end of the string. The first character in a string is at index 0.
   :feedback_b: This can't be true since the e is at index 1 and s2 = s1.substring(2) will start at index 2 and take all characters till the end of the string.
   :feedback_c: This can't be true since the e is at index 1 and s2 = s1.substring(2) will start at index 2 and take all characters till the end of the string.
   :feedback_d: This would be true if substring(a,b) included the character at index b, but it doesn't.
   :feedback_e: This would be true if the starting index was invalid or the ending index was past 2 past the last valid index.

   What is output from the following code?

   .. code-block:: java

     String s = "Georgia Tech";
     String s1 = s.substring(0,7);
     String s2 = s1.substring(2);
     String s3 = s2.substring(0,3);
     System.out.println(s3);

.. mchoice:: qsm_3
   :answer_a: null
   :answer_b: hi there
   :answer_c: HI THERE
   :answer_d: Hi There
   :answer_e: hI tHERE
   :correct: d
   :feedback_a: This would be true if we had s1 = s4 after s4 = null was executed. Strings are immutable and so any changes to a string returns a new string.
   :feedback_b: This would only be correct if we had s1 = s2 after s2.toLowerCaase() was executed. Strings are immutable and so any change to a string returns a new string.
   :feedback_c: This would be correct if we had s1 = s3 after s3.toUpperCase() was executed. String are immutable and so any change to a string returns a new string.
   :feedback_d: Strings are immutable meaning that any changes to a string creates and returns a new string, so the string referred to by s1 does not change.
   :feedback_e: Strings are immutable and so any changes to a string returns a new string.

   Given the following code segment, what is the value of s1 after the code executes?

   .. code-block:: java

     String s1 = "Hi There";
     String s2 = s1;
     String s3 = s2;
     String s4 = s1;
     s2 = s2.toLowerCase();
     s3 = s3.toUpperCase();
     s4 = null;

.. mchoice:: qsm_4
   :answer_a: Data Set 2 contains one string which should return true and one that should return false.
   :answer_b: All strings in Data Set 2 have the same number of characters.
   :answer_c: The strings in Data Set 2 are all lowercase
   :answer_d: Data Set 2 contains fewer values than Data Set 1.
   :answer_e: There are no advantages.
   :correct: a
   :feedback_a: All of the strings in Data Set 1 should return true, so the false condition is never tested.
   :feedback_b: Variety is always good in testing, so this is not an advantage.
   :feedback_c: It would be better to include both upper and lower case for testing, so this is not an advantage.
   :feedback_d: More test conditions is usually better, so this is not an advantage.
   :feedback_e: All the values in Data Set 1 are true, so the false condition is not tested.

   There is a method called checkString that determines whether a string is the same forwards and backwards. The following data sets can be used for testing the method. What advantage does Data Set 2 have over Data Set 1?

   .. code-block:: java

      Data Set 1    Data Set 2
      aba	        bcb
      abba	        bcd
      aBa



Hard Multiple Choice Questions
----------------------------------

These problems are harder than most of those that you will usually see on the AP CS A exam.

.. mchoice:: qsh_1
   :answer_a: II and IV
   :answer_b: II, III, and IV
   :answer_c: I, II, III, IV
   :answer_d: II only
   :answer_e: IV only
   :correct: b
   :feedback_a: III is also correct.
   :feedback_b: String overrides equals to check if the two string objects have the same characters. The == operator checks if two object references refer to the same object. So II is correct since s1 and s2 have the same characters. Number II is correct since s3 and s1 are referencing the same string, so they will be ==. And s2 and s3 both refer to string that have the same characters so equals will be true in IV. The only one that will not be true is I, since s1 and s2 are two different objects (even though they have the same characters).
   :feedback_c: I is not correct since s1 and s2 are two different objects (even though they have the same characters). If s1 and s2 were both referring to literals, then I would be correct, but the new operator forces a new object to be created.
   :feedback_d: III and IV are also correct.
   :feedback_e: II and III are also correct.

   Given the following code segment, which of the following is true?

   .. code-block:: java

     String s1 = new String("Hi There");
     String s2 = new String("Hi There");
     String s3 = s1;

     I.   (s1 == s2)
     II.  (s1.equals(s2))
     III. (s1 == s3)
     IV.  (s2.equals(s3))

.. mchoice:: qsh_2
   :answer_a: 21
   :answer_b: 1353
   :answer_c: It will give a run-time error
   :answer_d: 138
   :answer_e: It will give a compile-time error
   :correct: b
   :feedback_a: This would be correct if it was System.out.println(13 + 5 + 3), but the 13 is a string.
   :feedback_b: This is string concatenation.  When you apprend a number to a string it get turned into a string and processing is from left to right.
   :feedback_c: You can append a number to a string in Java. It turns the number into a string and then appends the second string to the first string.
   :feedback_d: This would be correct if it was System.out.println("13" + (5 + 3)), but the 5 is turned into a string and appended to the 13 and then the same is done with the 3.
   :feedback_e: You can append a number to a string in Java.  It will compile.

   What does the following code print?

   .. code-block:: java

     System.out.println("13" + 5 + 3);
