.. qnum::
   :prefix: 2-10-
   :start: 1
   
Unit 2 Summary
===============

In this unit, you learned to use objects (variables of a class type)  that have been written for you in Java. You learned to use constructors and methods with and without parameters of objects, and built-in Java classes like String, Integer, Double, and Math.




Concept Summary
---------------

- A **class** defines a new data type (classify something). It is the formal implementation, or blueprint, of the *attributes* and *behaviors* of the objects of that class.

- An **object** is a specific instance of a class with defined attributes. Objects are declared as variables of a class type.

- Every object is created using the keyword **new** followed by a call to one of the class’s **constructors** that initializes the object's attributes.

- **Methods** define the behaviors or functions for objects. 

- To use an object's method, you must use the object name and the dot (.) operator followed by the method name, for example **object.method();** 

- Some methods take parameters/arguments that are placed inside the parentheses **object.method(arguments)**, and some methods return values.

- A String object has index values from 0 to length – 1. Attempting to access indices outside this range will result in an IndexOutOfBoundsException.

- String objects are **immutable**, meaning that String methods do not change the String object. Any method that seems to change a string actually creates a new string. 

- The Integer class and Double class are **wrapper classes** that create objects from primitive types.

- Static Math methods can be called using **Math**.method(); for each method. For example, **(int)(Math.random()*range) + min** to create a random integer between min and up to range.

Java Keyword Summary
-----------------------

- **new** is used to create a new object.
- **null** is used to indicate that an object reference doesn't refer to any object yet.
- The following String methods and constructors, including what they do and when they are used, are part of the Java Quick Reference in the AP exam:

  - **String(String str)** : Constructs a new String object that represents the same sequence of characters as str.
  
  - **int length()** : returns the number of characters in a String object. 

  - **String substring(int from, int to)** : returns the substring beginning at index from  and ending at index (to – 1).

  - **String substring(int from)** : returns substring(from, length()). A string identical to the single element substring at position index can be created by calling substring(index, index + 1
  
  - **int indexOf(String str)** : returns the index of the first occurrence of str; returns -1 if not found.
  
  - **boolean equals(String other)** : returns true if this (the calling object) is equal to other; returns false otherwise.
  
  - **int compareTo(String other)** : returns a value < 0 if this is less than other; returns zero if this is equal to other; returns a value > 0 if this is greater than other.

- The following Integer methods and constructors, including what they do and when they are used, are part of the Java Quick Reference.

  - Integer(value): Constructs a new Integer object that represents the specified int value.
  - Integer.MIN_VALUE : The minimum value represented by an int or Integer.
  - Integer.MAX_VALUE : The maximum value represented by an int or Integer.
  - int intValue() : Returns the value of this Integer as an int.

- The following Double methods and constructors, including what they do and when they are used, are part of the Java Quick Reference Guide given during the exam:

  - Double(double value) : Constructs a new Double object that represents the specified double value.
  - double doubleValue() : Returns the value of this Double as a double.




- The following static Math methods are part of the Java Quick Reference:

  - **int abs(int)** : Returns the absolute value of an int value (which means no negatives).
  - **double abs(double)** : Returns the absolute value of a double value.
  - **double pow(double, double)** : Returns the value of the first parameter raised to the power of the second parameter. 
  - **double sqrt(double)** :  Returns the positive square root of a double value.
  - **double random()** :  Returns a double value greater than or equal to 0.0 and less than 1.0 (not including 1.0)!
  


- **(int)(Math.random()*range) + min** moves the random number into a range starting from a minimum number. The range is the **(max number - min number + 1)**. For example, to get a number in the range of 5 to 10, use the range 10-5+1 = 6 and the min number 5: (int)(Math.random()*6) + 5).



  
    
    
Common Mistakes with Strings
----------------------------


  -  Using ``==`` to test if two strings are equal.  This is actually a test to see if they refer to the same object.  Usually you only want to know if they have the same characters in the same order.  In that case you should use ``equals`` or ``compareTo`` instead.    
  
  -  Treating upper and lower case characters the same in Java.  If ``s1 = "Hi"`` and ``s2 = "hi"`` then ``s1.equals(s2)`` is false.  
  
  -  Thinking that substrings include the character at the last index when they don't. 
  
  -  Thinking that strings can change when they can't.  They are immutable.  
  
  -  Trying to invoke a method like ``indexOf`` on a string reference that is null.  You will get a null pointer exception.