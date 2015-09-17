.. qnum::
   :prefix: 8-1-
   :start: 1

Lists
=====

..	index::
	single: list
	pair: list; defintion

When you go shopping, you might create a **list**. As you shop you might check things off your list (remove them from the list).  You might search your list to see if something is already on it. You might add to a list.  A **list** holds items in an order.   

.. figure:: Figures/lists.jpg
    :width: 400px
    :align: center
    :figclass: align-center

    Figure 1: A couple of lists
    
Lists in Java
=============

..	index::
	single: interface
	pair: interface; defintion
    
Java uses the notion of a **list** too.  It defines the **interface** ``List`` which is in the java.util **package**.  An interface lets you define a type based on what you want it to do, not how it does it.  Several classes can implement the same interface and you can pick the one to use that works best in your situation.  See http://docs.oracle.com/javase/7/docs/api/java/util/List.html for the Java documentation for the ``List`` interface (a portion of this is shown below).  All classes in the Java language are organized into **packages**.  A package contains related classes.  The ``String`` and ``Object`` classes are in the java.lang package.  The full name for any class is the package name followed by a ``.`` and the class name. So the full name for the ``String`` class is ``java.lang.String``.  The full name for the ``List`` interface is ``java.util.List``. 

.. figure:: Figures/listInterface.png
    :width: 700px
    :align: center
    :figclass: align-center

    Figure 2: The List interface in Java

The Import Statement
====================

..	index::
	single: import statement
	
If you want to use the short name of ``List`` instead of the full name of ``java.util.List`` in your code, you will need an **import** statement. An import statement just tells Java which class you mean when you use a short name.  It tells Java where to find the definition of that class.  You don't need an import statement for any class in the package java.lang, like ``String`` or ``Object``. You can import just the classes you need from a package as shown below.  Import statements have to be the first code in a Java source file.  

.. code-block:: java 

  import java.util.List; // import just the List interface
  
..	index::
	single: package
	pair: statement; import
  
Or you can import everything at that level in a **package**. A package is a collection of related classes in Java.

.. code-block:: java 

  import java.util.*; // import everything at this level
  
Don't worry about adding import statements on the AP CS A exam.  Any that you need will be provided for you.
  
.. mchoice:: qlib_1
   :answer_a: You can only have one import statement in a source file.
   :answer_b: You must specify the class to import.
   :answer_c: Import statements must be before other code in a Java source file.  
   :answer_d: You must import java.lang.String to use the short name of String.
   :correct: c
   :feedback_a: You can have an many import statements as you need.
   :feedback_b: You can use * to import all classes at the specified level.
   :feedback_c: Import statements have to be the first Java statements in a source file.  
   :feedback_d: You do not have to import any classes that are in the java.lang package.
   
   Which of the following is true about import statements?


    
