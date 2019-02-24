.. qnum::
   :prefix: 4-11-
   :start: 1
   
Strings - Summary
-------------------------

In this chapter you learned about strings which are objects of the ``String`` class.  Strings hold characters in a sequence.  You learned the ``String`` methods that you will be expected to know on the exam.  You were also introduced to concept of inheritance since the ``String`` class inherits from the ``Object`` class.

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


Concept Summary
=================

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

Java Keyword Summary
=========================

- **new** - used to create a new object of a class.
- **null** - used to indicate that an object reference doesn't refer to any object yet.

Method Summary
========================

- ``str1.compareTo(str2)`` - returns 0 if they two strings have the same characters, a negative number if str1 is less than str2 and a positive number otherwise.
- ``str1.length()`` - returns the number of characters in a string object including any spaces or special characters.
- ``str1.equals(str2)`` - this method of the ``String`` class will return true if the characters in the two strings are the same.
- ``str1.indexOf(str2)`` - returns the position that str2 starts in str1 or -1 if str2 isn't in str1.
- ``str1.substring(start,end)`` - returns a new string with all the characters in str1 from start to end - 1.
- ``str1.toLowerCase()`` - returns a new string with the same characters as in str1, but all lowercase.
- ``str1.toUpperCase()`` - returns a new string with the same characters as in str1, but all uppercase.
- ``toString(obj)`` - this is a method that all classes inherit from the ``Object`` class.  It can be overriden to print out a string representation of an object.

Practice
===========

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