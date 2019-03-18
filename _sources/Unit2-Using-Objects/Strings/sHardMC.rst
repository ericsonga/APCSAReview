.. qnum::
   :prefix: 4-9-
   :start: 1

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
