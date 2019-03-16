
.. highlight:: java
   :linenothreshold: 4

   
..	index::
	single: String
	single: object reference
	single: reference
	pair: String; definition

Strings
========

**Strings** in Java are objects of the ``String`` class that hold sequences of characters (a, b, c, $, etc). Remember that a class (or classification) in Java defines the data that all objects of the class have (the fields) and the behaviors, the things that objects know how to do (the methods). 


You can declare a variable to be of type ``String``. 

.. note::

   Class names in Java, like ``String``, begin with a capital letter.  All primitive types: ``int``, ``double``, and ``boolean``, begin with a lowercase letter.  This is one easy way to tell the difference between primitive types and class types. 
   
Run the following code.  What does it print?

.. activecode:: lcsb1
   :language: java
   
   public class Test1
   {
      public static void main(String[] args)
      {
        String greeting = null;
        System.out.println(greeting);
      }
   }

The code above declares an object variable named ``greeting`` and sets the value of greeting to the Java keyword ``null`` to show that it doesn't refer to any object yet.  So ``System.out.println(greeting);`` will print ``null``.  Object variables **refer** to objects in memory.  A reference is a way to find the actual object, like adding a contact to your phone lets you reach someone without knowing exactly where they are.  The value of greeting is null since the string object has not been created yet. 

.. figure:: Figures/greeting.png
    :width: 50px
    :align: center
    :figclass: align-center

    Figure 1: Initial value for an object reference
    
..	index::
	pair: String; creation

In Java there are two ways to create an object of the ``String`` class.  You can use the ``new`` keyword followed by a space and then the class name and then in parentheses you can include values used to initialize the fields of the object.  This is the standard way to create a new object of a class in Java.

.. code-block:: java

  greeting = new String("Hello");
  
..	index::
    single: String literal
	pair: String; literal
	
  
In Java you can also use just a **string literal**, which is a set of characters enclosed in double quotes (``"``), to create a ``String`` object. 

.. code-block:: java 

  greeting = "Hello";

In both cases an object of the ``String`` class will be created in memory and the value of the variable greeting will be set to an object reference, a way to find that object. Now that greeting refers to an actual object we can ask the object what class created it. Try the following.  What does it print? 

.. activecode:: lcsb2
   :language: java
   
   public class Test2
   {
      public static void main(String[] args)
      {
        String greeting = "Hello";
        Class currClass = greeting.getClass();
        System.out.println(currClass);
        Class parentClass = currClass.getSuperclass();
        System.out.println(parentClass);
      }
   }
   
..	index::
	single: parent class
	single: superclass
	single: inheritance
	single: package
	single: java.lang
	pair: package; java.lang

The code above will first print ``class java.lang.String`` since ``greeting`` was created by the ``String`` class.  The full name for the ``String`` class is ``java.lang.String``.  The ``java.lang`` part is the **package** name.  Every class in the Java language is in a package and the standard classes like ``String`` are in the ``java.lang`` package.  Every object in Java contains a reference to the class that created it.  Also, every class contains a reference to its **parent** class.  Yes, a class can have a parent class, just as you have parents.  But, in Java a class can only have one parent.  A class can ``inherit`` object fields and methods from a parent class, just like you might inherit musical ability from a parent.  The fourth line will print ``class java.lang.Object`` because the parent class (**superclass**) of the String class is the Object class.  All classes in Java inherit from the Object class at some point in their ancestry.  

.. figure:: Figures/stringObject.png
    :width: 500px
    :align: center
    :figclass: align-center

    Figure 2: Object variable of type String with a reference to a String object which has a reference to the String class which has a reference to the Object class.
    

    
   
String Equality
-----------------

..	index::
	pair: String; equality
	pair: String; equals

When the operator ``==`` is used with object variables it returns true when the two variables *refer to the same object*.  With strings this happens when one string variable is set to another or when strings are set to the same string literal.  

If you run the following, what will be printed?

.. activecode:: lcse1
   :language: java
   
   public class Test1
   {
      public static void main(String[] args)
      {
        String s1 = "Hello";
        String s2 = "Bye";
        String s3 = s2;
        System.out.println(s3);
      }
   }
  
  
It will print ``Bye`` since s3 has been assigned to a copy of the value in s2 which is an object reference to the String object that has the characters "Bye" in it.  
In addition, ``s2 == s3`` will be true since the two variables refer to the same object.  Also, ``s2.equals(s3)`` will also be true, again since the two variables refer to the same object, of course the characters will be the same.  

.. figure:: Figures/stringRefExamplev2.png
    :width: 250px
    :align: center
    :figclass: align-center

    Figure 1: Several String variables with references to objects of the String class. 
    
.. note::

   Use ``equals`` to test if two strings have the same characters in the same order.  Only use ``==`` to test if two strings refer to the same object.  Most of the time you will want to use ``equals`` and not ``==`` with strings.
    
Using the New Keyword
---------------------
    
If you use the ``new`` keyword to create a string it will create a new string object. So, even if we create two string objects with the same characters using the new operator they will not refer to the same object. What will the following print?

.. activecode:: lcse2
   :language: java
   
   public class Test2
   {
      public static void main(String[] args)
      {
        String s1 = new String("Hello");
        String s2 = new String("Hello");
        System.out.println(s1 == s2);
        System.out.println(s1.equals(s2));
      }
   }
  
Since we used the ``new`` keyword two different String objects will be created that each have the characters ``Hello`` in them.  So ``s1 == s2`` will be false since they don't refer to the same object, but ``s1.equals(s2)`` is true since the two different object contain the same characters in the same order.  

.. figure:: Figures/twoStringRefsv2.png
    :width: 175px
    :align: center
    :figclass: align-center

    Figure 2: Two string variables and two string objects that contain the same characters in the same order.
    
Using String Literals
---------------------

What do you think the following code will print?  Run it to check.
    
.. activecode:: lcse3
   :language: java
   
   public class Test2
   {
      public static void main(String[] args)
      {
        String s1 = "Hello";
        String s2 = "Hello";
        System.out.println(s1 == s2);
        System.out.println(s1.equals(s2));
      }
   }
  
Since we used string literals this time rather than the ``new`` keyword, the Java run-time will check if that string literal already exists as an object in memory, and if so reuse it.  So ``s1`` and ``s2`` will refer to the same string object.  That means that both ``==`` and ``equals`` will be true.

.. figure:: Figures/twoStringRefsLiteral.png
    :width: 175px
    :align: center
    :figclass: align-center

    Figure 3: Two string variables that refer to the same string literal.  
  
**Check your understanding**

.. mchoice:: qsbeq_1
   :answer_a: s1 == s2 && s1 == s3
   :answer_b: s1 == s2 && s1.equals(s3)
   :answer_c: s1 != s2 && s1.equals(s3)
   :correct: b
   :feedback_a: Do s1 and s3 refer to the same object?
   :feedback_b: Yes s2 was set to refer to the same object as s1 and s1 and s3 have the same characters.
   :feedback_c: Did you miss that s2 was set to refer to the same object as s1?

   Which of the following is true after the code executes?
   
   .. code-block:: java

     String s1 = new String("hi");
     String s2 = "bye";
     String s3 = "hi";
     s2 = s1;
     
.. mchoice:: qsbeq_2
   :answer_a: s1 == s2 && s1 == s3
   :answer_b: s2.equals(s3) && s1.equals(s3)
   :answer_c: s1 != s2 && s1 == s3
   :correct: c
   :feedback_a: Do s1 and s2 refer to the same object?
   :feedback_b: Does s2 have the same characters as s1 or s3?
   :feedback_c: Because you used the same string literal s1 and s3 will refer to the same object.  Since s1 and s2 refer to different string literals they do not refer to the same object.

   Which of the following is true after the code executes?
   
   .. code-block:: java

     String s1 = "hi";
     String s2 = "bye";
     String s3 = "hi";
     
.. mchoice:: qsbeq_3
   :answer_a: s1 == s3 && s1.equals(s3)
   :answer_b: s2.equals(s3) && s1.equals(s3)
   :answer_c: !(s1 == s2) && !(s1 == s3)
   :correct: c
   :feedback_a: Since s3 uses the new operator it will not refer to the same object as s1.  
   :feedback_b: Do s2 and s3 have the same characters in the same order?
   :feedback_c: All of the variables refer to different objects.  But, s1.equals(s3) would be true since they have the same characters in the same order.

   Which of the following is true after the code executes?
   
   .. code-block:: java

     String s1 = "hi";
     String s2 = "bye";
     String s3 = new String("hi");
     
     


String Operators - Concatenation
--------------------------------

..	index::
	pair: String; append
	
Strings can be **appended** to each other which creates a new string using the ``+`` operator . This is also called **concatenation**. 

.. activecode:: lcso1
   :language: java
   
   public class Test1
   {
      public static void main(String[] args)
      {
        String start = "Happy Birthday"; 
        String name = "Jose";
        String result = start + " " + name;
        System.out.println(result);
      }
   }
  
.. note::
   Note that spaces are not added between strings automatically.  If you want a space between two strings then add one. 

..	index::
	single: toString
	pair: Object; toString

You can even add other items to a string using the ``+`` operator.  The other item will be converted to a string using the ``toString`` operator if it is an object and then appended to the current string.  All objects inherit a ``toString`` method that returns a string representation of the object.  
   
What do you think the following will print?   

.. activecode:: lcso2
   :language: java
   
   public class Test2
   {
      public static void main(String[] args)
      {
        String message = "12" + 4 + 3; 
        System.out.println(message);
      }
   }
   
.. note::
   If you are appending a number to a string it will be converted to a string first before being appended.  
  
Since the same operators are processed from left to right this will print ``1243``.  First 4 will be turned into a string and appended to 12 and then 3 will be turned into a string and appended to 124.  If you want the addition to take place before the numbers are turned into a string what should you do?  Try to modify the code above so that it adds 4 + 3 before appending the value to the string.



  
