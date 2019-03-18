.. qnum::
   :prefix: 4-7-
   :start: 1

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
