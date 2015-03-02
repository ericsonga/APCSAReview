.. qnum::
   :prefix: 4-8-
   :start: 1
   
Medium Multiple Choice Questions
----------------------------------

These problems are similar to those that you will see on the AP CS A exam.

.. mchoicemf:: qsm_1
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

.. mchoicemf:: qsm_2
   :answer_a: org
   :answer_b: eor
   :answer_c: erog
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

.. mchoicemf:: qsm_3
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


