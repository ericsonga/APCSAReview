.. qnum::
   :prefix: 8-3-
   :start: 1
     
The ArrayList Class
===================

..	index::
    single: ArrayList
    single: implements
	pair: list; ArrayList

Luckily Java has a class that handles when you run out of room in an array and want to add more items to it or when the amount of space reserved for an array is much larger than what you actually need.  It is called **ArrayList**.   It **implements** the ``List`` interface using an array and allows the underlying array to grow or shrink as needed.  This also means that the ``ArrayList`` class contains the code for the methods defined in the ``List`` interface. 

Java actually has several classes that **implement** the ``List`` interface (provide method bodies for the abstract methods defined in the interface).  These are just some of the classes that implement the ``List`` interface: ``ArrayList``, ``LinkedList``, ``Stack``, and ``Vector``.  You only need to learn about the ``ArrayList`` class for the exam.  

The Import Statement
====================

..	index::
	single: import statement
	
The ``List`` interface and ``ArrayList`` class are both in the ``java.util`` **package**.  A **package** is a set of related classes.  If you want to use any class other than those in ``java.lang`` (like ``System`` or ``Math``) you will need to either use the full name (packageName.ClassName) like (``java.util.List`` and ``java.util.ArrayList``) or use one or more import statements. 

Import statements have to be the first code in a Java source file.  An import statement tells Java which class you mean when you use a short name (like ``List``).  It tells Java where to find the definition of that class. 

You can import just the classes you need from a package as shown below.  Just provide an ``import`` statement for each class that you want to use.    

.. code-block:: java 

  import java.util.List; // import just the List interface
  import java.util.ArrayList; // import just the ArrayList class
  
..	index::
	single: package
	pair: statement; import
  
Another option is to import everything at the same level in a package using ``import packageName.*``.
  

.. code-block:: java 

  import java.util.*; // import everything including List and ArrayList
  
.. note::

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

