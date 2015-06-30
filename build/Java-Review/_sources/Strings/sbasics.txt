.. qnum::
   :prefix: 4-1-
   :start: 1

What is a String?
======================

.. highlight:: java
   :linenothreshold: 4
   
.. qnum::
   :prefix: trl-
   :start: 1
   
..	index::
	single: String
	pair: String; definition

**Strings** in Java are objects of the ``String`` class that hold sequences of characters (a, b, c, $, etc). Remember that a class (or classification) in Java defines the data that all objects of the class have (the fields) and the behaviors, the things that objects know how to do (the methods). 

Declaring and Creating Strings
==============================

You can declare a variable to be of type ``String``. Notice that class names in Java, like ``String``, begin with a capital letter.  All primitive types: ``int``, ``double``, and ``boolean``, begin with a lowercase letter.  This is one easy way to tell the difference between primitive types and class types. Try the following in DrJava's interactions pane.

.. code-block:: java 

  String greeting; 
  System.out.println(greeting);

The code above declares an object variable named greeting and sets the value of greeting to the Java keyword ``null`` to show that it doesn't refer to any object yet.  So ``System.out.println(greeting);`` will print ``null``.  Object variables **refer** to objects in memory.  A reference is a way to find the actual object, like adding a contact to your phone lets you reach someone without knowing exactly where they are.  The value of greeting is null since the string object has not been created yet. 

.. figure:: Figures/greeting.png
    :width: 50px
    :align: center
    :figclass: align-center

    Figure 1: Initial value for an object reference
    
..	index::
	pair: String; creation

In Java there are two ways to create an object of the ``String`` class.  You can use the new operator followed by a space and then the class name and then in parentheses you can include values used to initialize the fields of the object.  This is the standard way to create a new object of a class in Java.

.. code-block:: java

  greeting = new String("Hello");
  
..	index::
    single: String literal
	pair: String; literal
	
  
In Java you can also use just a **string literal**, which is a set of characters enclosed in double quotes, to create a ``String`` object. 

.. code-block:: java 

  greeting = "Hello";

In both cases an object of the ``String`` class will be created in memory and the value of the variable greeting will be set to an object reference, a way to find that object. Now that greeting refers to an actual object we can ask the object what class created it. Try entering the following in DrJava's interactions pane.  What does it print? 

.. code-block:: java
  :linenos: 

  String greeting = "Hello";
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
    

    



  
