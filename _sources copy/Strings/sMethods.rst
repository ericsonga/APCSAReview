.. qnum::
   :prefix: 4-2-
   :start: 1

String Methods on the Exam
==============================

..	index::
	pair: String; length
	pair: String; substring
	pair: String; indexOf
	pair: String; compareTo
	pair: String; equals

For the AP CS A exam there are only a few things that you have to know about strings.  All of the following are included in the quick reference that you get during the exam so you don't have to memorize these.  I recommend printing a copy of the quick reference and using it when you practice for the exam.  You can get it at https://secure-media.collegeboard.org/digitalServices/pdf/ap/explore-ap/AP_Computer-Science-A-Quick-Reference.pdf.  

    -  the ``int length()`` method returns the number of characters in the string, including spaces
    
    -  the ``String substring(int from, int to)`` method returns a string with the characters in the current string starting with the character at the ``from`` index and ending at the character before the ``to`` index (if the ``to`` index is specified, and if not specified it will contain the rest of the string).  
    
    -  the ``int indexOf(String str)`` method returns the index of the beginning of ``str`` in the current string or -1 if it isn't found.  
    
    -  the ``int compareTo(String other)`` returns a negative value if the current string is less than the ``other`` string, 0 if they have the same characters in the same order, and a positive value if the current string is greater than the ``other`` string.     
    
    -  the ``boolean equals(String other)`` returns true when the characters in the current string are the same as the ones in the ``other`` string.  This method is inherited from the Object class, but is **overriden** which means that the String class has its own version of that method.  
    
Run the code below to see the output from ``length``, ``substring``, and ``indexOf``.

.. activecode:: lcsm1
   :language: java
   
   public class Test1
   {
      public static void main(String[] args)
      {
        String message1 = "Happy Birthday";
        String message2 = "Hello Class";
        
        System.out.println(message1.length());
        System.out.println(message2.length());
        
        System.out.println(message1.substring(0,5));
        System.out.println(message1.substring(6));
        
        System.out.println(message1.indexOf("day"));
        System.out.println(message1.indexOf("Hello"));
        System.out.println(message2.indexOf("Hello"));
      }
   }
   
Run the example below to see the output from ``compareTo`` and ``equals``.

.. activecode:: lcsm2
   :language: java
   
   public class Test2
   {
      public static void main(String[] args)
      {
        String message = "Hello!";
        
        System.out.println(message.compareTo("Hello there"));
        System.out.println(message.compareTo("Hello!"));
        System.out.println(message.compareTo("And"));
        System.out.println(message.compareTo("Zoo"));
        
        System.out.println(message.equals("Hello!"));
        System.out.println(message.equals("hello!"));
      }
   }

There are lots of other methods in the String class.  See the Java documentation for the String class at http://docs.oracle.com/javase/6/docs/api/java/lang/String.html.  You don't have to know all of these for the exam, but you can use them if you want to on the exam. 

Strings are **immutable** which means that they can't change. Anything that you do to modify a string (like creating a substring or appending strings) returns a new string.

**Check your understanding**

.. mchoice:: qsb_1
   :answer_a: Hi
   :answer_b: hi
   :answer_c: H
   :answer_d: h
   :correct: a
   :feedback_a: Strings are immutable, meaning they don't change.  Any method that changes a string returns a new string.  So s1 never changes.  
   :feedback_b: This would be true if the question was what is the value of s2 and it was substring(0,2) not (0,1)
   :feedback_c: This would be true if the question was what is the value of s2, not s1.  
   :feedback_d: This would be true if the question was what is the value of s3, not s1. 

   What is the value of s1 after the following code executes?
   
   .. code-block:: java 

     String s1 = "Hi"; 
     String s2 = s1.substring(0,1);
     String s3 = s2.toLowerCase();
    
.. mchoice:: qsb_2
   :answer_a: Hi
   :answer_b: hi
   :answer_c: H
   :answer_d: h
   :correct: d
   :feedback_a: Is this the value of s3?  What does toLowerCase do?
   :feedback_b: How does substring work?  Does it include the character at the end index?
   :feedback_c: What does toLowerCase do?
   :feedback_d: s2 is set to just "H" and s3 is set to changing all characters in s2 to lower case.

   What is the value of s3 after the following code executes?
   
   .. code-block:: java

     String s1 = "Hi"; 
     String s2 = s1.substring(0,1);
     String s3 = s2.toLowerCase();
     
.. mchoice:: qsb_3
   :answer_a: 2
   :answer_b: 1
   :answer_c: 4
   :answer_d: -1
   :correct: b
   :feedback_a: The first character is at index 0 in a string.  
   :feedback_b: The method indexOf returns the first position of the passed str in the current string starting from the left (from 0).  
   :feedback_c: Does indexOf start from the left or right? 
   :feedback_d: Does the string contain a b?  

   What is the value of pos after the following code executes?
   
   .. code-block:: java 

     String s1 = "abccba";
     int pos = s1.indexOf("b");
     
.. mchoice:: qsb_4
   :answer_a: 7
   :answer_b: 8
   :answer_c: 9
   :correct: c
   :feedback_a: Count spaces and punctuation in the length. 
   :feedback_b: Did you forget to count a space or punctuation?  
   :feedback_c: The length method returns the number of characters including spaces and punctuation.   

   What is the value of len after the following executes?
   
   .. code-block:: java 

     String s1 = "Miss you!";
     int len = s1.length();
     
.. mchoice:: qsb_5
   :answer_a: hi th
   :answer_b: hi the
   :answer_c: hi ther
   :answer_d: hi there
   :correct: a
   :feedback_a: The substring method returns the string starting at the first index and not including the last index.  The method indexOf returns the index of the first place the string occurs.  
   :feedback_b: This would be correct if substring returned all characters between the first index and last index, but does it?
   :feedback_c: This would be correct if indexOf returned the last position the string str was found in the current string, does it?
   :feedback_d: This would be correct if indexOf returned the last position the string str was found in the current string and if substring included all characters between the start and end index.  Check both of these.

   What is the value of s2 after the following code executes?
   
   .. code-block:: java 

     String s1 = new String("hi there");
     int pos = s1.indexOf("e");
     String s2 = s1.substring(0,pos);