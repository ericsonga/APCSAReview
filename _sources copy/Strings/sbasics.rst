String Basics
==============

.. highlight:: java
   :linenothreshold: 4
   
.. qnum::
   :prefix: trl-
   :start: 1

**Strings** in Java are objects of the ``String`` class that hold sequences of characters (a, b, c, $, etc). Remember that a class (or classification) in Java defines the data that all objects of the class have (the fields) and the behaviors, the things that objects know how to do (the methods). 

You can declare a variable to be of type ``String``. Notice that class names in Java, like ``String``, begin with a capital letter.  All primitive types: ``int``, ``double``, and ``boolean``, begin with a lowercase letter.  This is one easy way to tell the difference between primitive types and class types. Try the following in DrJava's interactions pane.

:: 

  String greeting; 
  System.out.println(greeting);

The code above declares an object variable named greeting and sets the value of greeting to the Java keyword ``null`` to show that it doesn't refer to any object yet.  So ``System.out.println(greeting);`` will print ``null``.  Object variables **refer** to objects in memory.  A reference is a way to find the actual object, like adding a contact to your phone lets you reach someone without knowing exactly where they are.  The value of greeting is null since the string object has not been created yet. 


.. figure:: Figures/greeting.png
    :width: 50px
    :align: center
    :figclass: align-center

    Figure 1: Initial value for an object reference

In Java there are two ways to create an object of the ``String`` class.  You can use the new operator followed by a space and then the class name and then in parentheses you can include values used to initialize the fields of the object.  This is the standard way to create a new object of a class in Java.

:: 

  greeting = new String("Hello");
  
In Java you can also use just a **string literal**, which is a set of characters enclosed in double quotes, to create a ``String`` object. 

:: 

  greeting = "Hello";

In both cases an object of the ``String`` class will be created in memory and the value of the variable greeting will be set to an object reference, a way to find that object. Now that greeting refers to an actual object we can ask the object what class created it. Try entering the following in DrJava's interactions pane.  What does it print? 

:: 

  Class currClass = greeting.getClass();
  System.out.println(currClass);
  Class parentClass = currClass.getSuperclass();
  System.out.println(parentClass);
  

The code above will first print ``class java.lang.String`` since ``greeting`` was created by the ``String`` class.  The full name for the ``String`` class is ``java.lang.String``.  The ``java.lang`` part is the **package** name.  Every class in the Java language is in a package and the standard classes like ``String`` are in the ``java.lang`` package.  Every object in Java contains a reference to the class that created it.  Also, every class contains a reference to its **parent** class.  Yes, a class can have a parent class, just as you have parents.  But, in Java a class can only have one parent.  A class can ``inherit`` object fields and methods from a parent class, just like you inherit musical ability from a parent.  The fourth line will print ``class java.lang.Object`` because the parent class (superclass) of the String class is the Object class.  All classes in Java inherit from the Object class at some point in their ancestry.  

.. figure:: Figures/stringObject.png
    :width: 500px
    :align: center
    :figclass: align-center

    Figure 2: Object variable of type String with a reference to a String object which has a reference to the String class which has a reference to the Object class.
    
String Methods
==============

For the AP CS A exam there are only a few things that you have to know about strings.  All of the following are included in the quick reference that you get during the exam so you don't have to memorize these.  I recommend printing a copy of the quick reference and using it when you practice for the exam.  You can get it at https://secure-media.collegeboard.org/digitalServices/pdf/ap/explore-ap/AP_Computer-Science-A-Quick-Reference.pdf.  

    -  the ``int length()`` method returns the number of characters in the string, including spaces
    
    -  the ``String substring(int from, int to)`` method returns a string with the characters in the current string starting with the character at the ``from`` index and ending at the character before the ``to`` index (if the ``to`` index is specified, and if not specified it will contain the rest of the string).  
    
    -  the ``int indexOf(String str)`` method returns the index of the beginning of ``str`` in the current string or -1 if it isn't found.  
    
    -  the ``int compareTo(String other)`` returns a negative value if the current string is less than the ``other`` string, 0 if they have the same characters in the same order, and a positive value if the current string is greater than the ``other`` string.     
    
    -  the ``boolean equals(String other)`` returns true when the characters in the current string are the same as the ones in the ``other`` string.  This method is inherited from the Object class, but is **overriden** which means that the String class has its own version of that method.  
    
There are lots of other methods in the String class.  See the Java documentation for the String class at http://docs.oracle.com/javase/6/docs/api/java/lang/String.html.  You don't have to know all of these for the exam, but you can use them if you want to on the exam. 

Strings are **immutable** which means that they can't change. Anything that you do to modify a string (like creating a substring or appending strings) returns a new string.

**Check your understanding**

.. mchoicemf:: qsb_1
   :answer_a: Hi
   :answer_b: hi
   :answer_c: H
   :answer_d: h
   :correct: a
   :feedback_a: Strings are immutable, meaning they don't change.  Any method that that changes a string returns a new string.  So s1 never changes.  
   :feedback_b: Can strings change?
   :feedback_c: Can strings change?
   :feedback_d: Can strings change?

   What is the value of s1 after the following code executes?
   
   :: 

     String s1 = "Hi"; 
     String s2 = s1.substring(0,1);
     String s3 = s2.toLowerCase();
    
.. mchoicemf:: qsb_2
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
   
   :: 

     String s1 = "Hi"; 
     String s2 = s1.substring(0,1);
     String s3 = s2.toLowerCase();
     
.. mchoicemf:: qsb_3
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
   
   :: 

     String s1 = "abccba";
     int pos = s1.indexOf("b");
     
.. mchoicemf:: qsb_4
   :answer_a: 7
   :answer_b: 8
   :answer_c: 9
   :correct: c
   :feedback_a: Count spaces and punctuation in the length. 
   :feedback_b: Did you forget to count a space or punctuation?  
   :feedback_c: The length method returns the number of characters including spaces and punctuation.   

   What is the value of len after the following executes?
   
   :: 

     String s1 = "Miss you!";
     int len = s1.length();
    
  
String Equality
=================

When the operator ``==`` is used with object variables it returns true when the two variables refer to the same object.  With strings this happens when one string variable is set to another or when strings are set to the same string literal.  

If you type the following code into DrJava's interactions pane what will print?

:: 

  String s1 = "Hello";
  String s2 = "Bye";
  String s3 = s2;
  System.out.println(s3);
  
  
It will print ``Bye`` since s3 has been assigned to the value in s2 which is an object reference to the String object that has the characters "Bye" in it.  
In addition, ``s2 == s3`` will be true since the two variables refer to the same object.  Also, ``s2.equals(s3)`` will also be true, again since the two variables refer to the same object, of course the characters will be the same.  

.. figure:: Figures/stringRefExamplev2.png
    :width: 250px
    :align: center
    :figclass: align-center

    Figure 3: Several String variables with references to objects of the String class. 
    
If you use the ``new`` keyword to create a string it will create a new string object. So, even if we create two string objects with the same characters using the new operator they will not refer to the same object. What will the following print if you type it in DrJava's interactions pane?

:: 

  String s1 = new String("Hello");
  String s2 = new String("Hello");
  System.out.println(s1 == s2);
  System.out.println(s1.equals(s2));
  
Since we used the ``new`` keyword two different String objects will be created that each have the characters ``Hello`` in them.  So ``s1 == s2`` will be false since they don't refer to the same object, but ``s1.equals(s2)`` is true since the two different object contain the same characters in the same order.  

.. figure:: Figures/twoStringRefsv2.png
    :width: 175px
    :align: center
    :figclass: align-center

    Figure 4: Two string variables and two string objects that contain the same characters in the same order.
  
**Check your understanding**

.. mchoicemf:: qsb_5
   :answer_a: s1 == s2 and s1 == s3
   :answer_b: s1 == s2 and s1.equals(s3)
   :answer_c: s1 != s2 and s1.equals(s3)
   :correct: b
   :feedback_a: Do s1 and s3 refer to the same object?
   :feedback_b: Yes s2 was set to refer to the same object as s1 and s1 and s3 have the same characters.
   :feedback_c: Did you miss that s2 was set to refer to the same object as s1?

   Which of the following is true after the code executes?
   
   :: 

     String s1 = new String("hi");
     String s2 = "bye";
     String s3 = "hi";
     s2 = s1;
     
.. mchoicemf:: qsb_6
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
   
   :: 

     String s1 = new String("hi there");
     int pos = s1.indexOf("e");
     String s2 = s1.substring(0,pos);

String Operators
=================
Strings can be **appended** to each other which creates a new string using the ``+`` operator . This is also called **concatenation**. 

:: 

  String start = "Happy Birthday"; 
  String name = "Jose";
  String final = start + " " + name;
  
Note that spaces are not added between strings automatically.  If you want a space between two strings then add one. 

You can even add other items to a string using the ``+`` operator.  The other item will be converted to a string using the ``toString`` operator if it is an object and then appended to the current string.  All objects inherit a ``toString`` method that returns a string representation of the object.  If you are appending number to a string it will be converted to a string first before being appended.  What do you think the following will print?   

:: 

  String message = "12" + 4 + 3; 
  System.out.println(message);
  
Since the same operators are processed from left to right this will print ``1243``.  First 4 will be turned into a string and appended to 12 and then 3 will be turned into a string and appended to 124.  If you want the addition to take place before the numbers are turned into a string what should you do?

More Practice 
===============

For more practice with Strings see http://codingbat.com/java/String-1.  

Common Mistakes
===============

  -  Using ``==`` to test if two strings are equal.  This is actually a test to see if they refer to the same object.  Usually you only want to know if they have the same characters in the same order.  In that case you should use ``equals`` or ``compareTo`` instead.    
  
  -  Treating upper and lower case characters the same in Java.  If ``s1 = "Hi"`` and ``s2 = "hi"`` then ``s1.equals(s2)`` is false.  
  
  -  Thinking that substrings include the character at the last index when they don't. 
  
  -  Thinking that strings can change when they can't.  They are immutable.  
  
  -  Trying to invoke a method like ``indexOf`` on a string reference that is null.  You will get a null pointer exception.
  
