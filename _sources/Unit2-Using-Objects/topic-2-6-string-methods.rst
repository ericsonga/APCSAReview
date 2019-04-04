
String Methods 
=================

..	index::
	pair: String; length
	pair: String; substring
	pair: String; indexOf
	pair: String; compareTo
	pair: String; equals

A string holds characters in a sequence.  Each character is at a position or **index** which starts with 0 as shown below.  An **index** is a number associated with a position in a string.  The length of a string is the number of characters in it including any spaces or special characters.  The string below has a length of 14.

.. figure:: Figures/stringIndicies.png
    :width: 500px
    :align: center
    :alt: a string with the position (index) shown above each character
    :figclass: align-center

    Figure 1: A string with the position (index) shown above each character

.. note::

   The first character in a string is at index 0 and the last characters is at the length - 1.

For the AP CS A exam there are only a few things that you have to know about strings.  All of the following are included in the quick reference that you get during the exam so you don't have to memorize these.  I recommend printing a copy of the quick reference and using it when you practice for the exam.  You can get it at https://secure-media.collegeboard.org/digitalServices/pdf/ap/explore-ap/AP_Computer-Science-A-Quick-Reference.pdf.

    -  the ``int length()`` method returns the number of characters in the string, including spaces and special characters like punctuation.

    -  the ``String substring(int from, int to)`` method returns a string with the characters in the current string starting with the character at the ``from`` index and ending at the character *before* the ``to`` index (if the ``to`` index is specified, and if not specified it will contain the rest of the string).

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
        String message1 = "This is a test";
        String message2 = "Hello Class";

        System.out.println(message1.length());
        System.out.println(message2.length());

        System.out.println(message1.substring(0,3));
        System.out.println(message1.substring(5));

        System.out.println(message1.indexOf("is"));
        System.out.println(message1.indexOf("Hello"));
        System.out.println(message2.indexOf("Hello"));
      }
   }

.. note::

   Did you notice that ``message1.substring(0,3)`` includes all the characters from position 0 to 2 and doesn't include the character at position 3?

**Check your understanding**

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

.. mchoice:: qsb_3b
   :answer_a: 2
   :answer_b: 3
   :answer_c: 4
   :answer_d: -1
   :correct: c
   :feedback_a: Length returns the number of characters in the string, not the number of characters in the name of the string.
   :feedback_b: The position of the last character is 3, but the length is 4.
   :feedback_c: Length returns the number of characters in the string.
   :feedback_d: Length is never negative.

   What is the value of len after the following code executes?

   .. code-block:: java

     String s1 = "baby";
     int len = s1.length();

.. mchoice:: qsb_3c
   :answer_a: baby
   :answer_b: b
   :answer_c: ba
   :answer_d: bab
   :correct: d
   :feedback_a: This would be true if substring returned all the characters from the first index to the last inclusive, but it does not include the character at the last index.
   :feedback_b: This would be true if it was s1.substring(0,1)
   :feedback_c: This would be true if it was s1.substring(0,2)
   :feedback_d: Substring returns all the characters from the starting index to the last index - 1.

   What is the value of str2 after the following code executes?

   .. code-block:: java

     String s1 = "baby";
     String s2 = s1.substring(0,3);

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

.. mchoice:: qsb_4b
   :answer_a: by
   :answer_b: aby
   :answer_c: a
   :answer_d: b
   :answer_e: ba
   :correct: a
   :feedback_a: The method substring(index) will return all characters starting the index to the end of the string.
   :feedback_b: This would be true if it was substring(1);
   :feedback_c: This would be true if it was substring(1,2);
   :feedback_d: This would be true if it was substring(2,3);
   :feedback_e: This would be ture if it was substring(0,2);

   What is the value of str2 after the following code executes?

   .. code-block:: java

     String s1 = "baby";
     String s2 = s1.substring(2);


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

.. note::

   Strings are **immutable** which means that they can't change. Anything that you do to modify a string (like creating a substring or appending strings) returns a new string.

**Check your understanding**

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

.. mchoice:: qsb_6-old1
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

.. mchoice:: qsb_7-old24
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

.. mchoice:: qsb_8-new
   :answer_a: positive (> 0)
   :answer_b: 0
   :answer_c: negative (< 0)
   :correct: a
   :feedback_a: H is after B in the alphabet so s1 is greater than s2.
   :feedback_b: The method compareTo will only return 0 if the strings have the same characters in the same order.
   :feedback_c: This would be true if it was s2.compareTo(s1)

   What is the value of s3 after the following code executes?

   .. code-block:: java

     String s1 = "Hi";
     String s2 = "Bye";
     int answer = s1.compareTo(s2);
     

   


Common Mistakes
---------------

  -  Using ``==`` to test if two strings are equal.  This is actually a test to see if they refer to the same object.  Usually you only want to know if they have the same characters in the same order.  In that case you should use ``equals`` or ``compareTo`` instead.    
  
  -  Treating upper and lower case characters the same in Java.  If ``s1 = "Hi"`` and ``s2 = "hi"`` then ``s1.equals(s2)`` is false.  
  
  -  Thinking that substrings include the character at the last index when they don't. 
  
  -  Thinking that strings can change when they can't.  They are immutable.  
  
  -  Trying to invoke a method like ``indexOf`` on a string reference that is null.  You will get a null pointer exception.

Summary
-------------------

- A String object has index values from 0 to length – 1. Attempting to access indices outside this range will result in an IndexOutOfBoundsException.

- String objects are immutable, meaning that String methods do not change the String object.

- The following String methods and constructors, including what they do and when they are used, are part of the Java Quick Reference in the AP exam:

  - String(String str) : Constructs a new String object that represents the same sequence of characters as str.
  
  - int length() : returns the number of characters in a String object. 

  - String substring(int from, int to) : returns the substring beginning at index from  and ending at index to – 1.

  - String substring(int from) : returns substring(from, length()).
  
  - int indexOf(String str) : returns the index of the first occurrence of str; returns -1 if not found.
  
  - boolean equals(String other) : returns true if this (the calling object) is equal to other; returns false otherwise.
  
  - int compareTo(String other) : returns a value < 0 if this is less than other; returns zero if this is equal to other; returns a value > 0 if this is greater than other.

- A string identical to the single element substring at position index can be created by calling substring(index, index + 1).





Strings - Summary
------------------

In these lessons, you learned about strings which are objects of the ``String`` class.  Strings hold characters in a sequence.  You learned the ``String`` methods that you will be expected to know on the exam.  You were also introduced to concept of inheritance since the ``String`` class inherits from the ``Object`` class.

..	index::
    single: append
    single:concatenate
    single:child class
    single: immutable
    single: index
    single: length
    single: override
    single: parent class
    single: reference
    single: substring
    single: string
    single: reference
	single: object reference


**Concept Summary**:

- **append** - One string can be appended to another using the ``+`` operator.  This will create a new string with all the characters in the first string followed by all the characters in the second string.  
- **child class** - A class in Java can inherit object fields and methods from a parent class.  The ``String`` class is a child class of the ``Object`` class.
- **concatenate** - One string can be concatenated after another which is the same as appending one string after another.
- **immutable** - Means that something doesn't change.  Strings are immutable.  Any method that seems to change a string actually creates a new string. 
- **index** - A number that represents the position of a character in a string.  The first character in a string is at index 0.  
- **length** - The number of characters in a string.  
- **override** - A child class can provide the same method as one it inherits from a parent class and in that case the child method will execute instead of the parent method.  The child method overrides the parent method.
- **parent class** - A class in Java has a parent class and it inherits object fields and public methods from the parent class.  The ``Object`` class is the parent class of the ``String`` class.
- **reference** - A reference is a way to find an object in memory.  A reference is similar to a package tracking number since it helps you find the package.   
- **string** -  A string is an object of the ``String`` class which holds sequences of characters.  The ``String`` class also defines methods that you can execute on a string object like getting its length or getting a substring (copy of part of the string).  Notice that the String class starts with an uppercase letter.  All class names in Java start with an uppercase letter.
- **substring** - A new string that contains a copy of part of the original string.   

**Java Keyword Summary**:


- **new** - used to create a new object of a class.
- **null** - used to indicate that an object reference doesn't refer to any object yet.

**Method Summary**:


- ``str1.compareTo(str2)`` - returns 0 if they two strings have the sasme characters, a negative number if str1 is less than str2 and a positive number otherwise.
- ``str1.length()`` - returns the number of characters in a string object including any spaces or special characters.
- ``str1.equals(str2)`` - this method of the ``String`` class will return true if the characters in the two strings are the same.
- ``str1.indexOf(str2)`` - returns the position that str2 starts in str1 or -1 if str2 isn't in str1.
- ``str1.substring(start,end)`` - returns a new string with all the characters in str1 from start to end - 1.
- ``str1.toLowerCase()`` - returns a new string with the same characters as in str1, but all lowercase.
- ``str1.toUpperCase()`` - returns a new string with the same characters as in str1, but all uppercase.
- ``toString(obj)`` - this is a method that all classes inherit from the ``Object`` class.  It can be overriden to print out a string representation of an object.

**Practice**:

.. dragndrop:: ch4_str1
    :feedback: Review the summaries above.
    :match_1: the position of a character in a string|||index 
    :match_2: a new string with 0 to all characters copied from another string|||substring
    :match_3: doesn't change|||immutable
    :match_4: the number of characters in a string|||length
    
    Drag the definition from the left and drop it on the correct concept on the right.  Click the "Check Me" button to see if you are correct
    
.. dragndrop:: ch4_str2
    :feedback: Review the summaries above.
    :match_1: Returns true if the characters in two strings are the same|||equals
    :match_2: Returns the position of one string in another or -1|||indexOf
    :match_3: Returns a number to indicate if one string is less than, equal to, or greater than another|||compareTo
    :match_4: Returns a string representing the object that is passed to this method|||toString
    
    Drag the definition from the left and drop it on the correct method on the right.  Click the "Check Me" button to see if you are correct.

