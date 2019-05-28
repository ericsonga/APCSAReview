.. qnum::
   :prefix: 7-1-
   :start: 1

Intro to ArrayLists
=======================

..	index::
	single: arraylist
	pair: arraylist; definition

When you go shopping, you might create a **list**. As you shop you might check things off your list (remove them from the list).  You might search your list to see if something is already on it. You might add to a list.  A **list** holds items in an order.   

.. figure:: Figures/lists.jpg
    :width: 400px
    :align: center
    :figclass: align-center

    Figure 1: A couple of lists
    

..	index::
	single: interface
	pair: interface; definition
    
Java uses the notion of a **list** too.  It defines the **interface** ``List`` which is in the java.util **package**.  An interface lets you define a type based on what you want it to do, not how it does it.  Several classes can implement the same interface and you can pick the one to use that works best in your situation.  

All classes in the Java language are organized into **packages**.  A package contains related classes.  The ``String`` and ``Object`` classes are in the ``java.lang`` package.  The full name for any class is the package name followed by a ``.`` and the class name. So the full name for the ``String`` class is ``java.lang.String``.  The full name for the ``List`` interface is ``java.util.List``. 

Limitations of Arrays
----------------------

Say you create an array of 5 elements.  What happens when you want to add a 6th one?  You will have to create another bigger array and copy over the items from the old array and then add the new value at the end. What length should the new array be?  If you just create an array for 6 elements you won't waste any space, but you will have to create a new array again if you want to add another item.  If you create a larger array than you need (usually about twice as big), you will also have to keep track of how many items are actually in the list, since the length of the array isn't the same thing as the number of items in the list. 

.. figure:: Figures/whyLists.png
    :width: 400px
    :align: center
    :figclass: align-center

    Figure 2: Original array, after creating a new array that can contain one more item, and an array that is twice as big as the original with a size to indicate how many values are valid in the array.


Luckily Java has a class that handles when you run out of room in an array and want to add more items to it or when the amount of space reserved for an array is much larger than what you actually need.  It is called **ArrayList**.   It **implements** the ``List`` interface using an array and allows the underlying array to grow or shrink as needed.  This also means that the ``ArrayList`` class contains the code for the methods defined in the ``List`` interface. 

Java actually has several classes that **implement** the ``List`` interface (provide method bodies for the abstract methods defined in the interface).  These are just some of the classes that implement the ``List`` interface: ``ArrayList``, ``LinkedList``, ``Stack``, and ``Vector``.  You only need to learn about the ``ArrayList`` class for the exam.  

The Import Statement
--------------------

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

Declaring Lists
----------------

To declare a ArrayList use ``ArrayList<Type> name``  Change the *Type* to be whatever type of objects you want to store in the ArrayList like ``String`` to hold strings as shown in the code below.  You don't have to specify a ``<Type>``, since it will default to ``Object``, but it is good practice to specify it to restrict what you allow in your ArrayList.  


In the code below we are declaring a variable called ``nameList`` that can refer to a ArrayList of strings, but currently doesn't refer to any ArrayList yet (is set to ``null``).

.. activecode:: ArrayListDeclare
   :language: java

   import java.util.*; // import everything at this level
   public class Test
   {
       public static void main(String[] args)
       {
          ArrayList<String> nameList = null;
          System.out.println(nameList);
       }
    }
    
Creating ArrayLists
----------------------

Declaring a ArrayList doesn't actually create a ArrayList. It only creates a variable that can refer to a ArrayList.  To actually create a ArrayList use ``new ArrayList<Type>()``. If you leave off the ``<Type>`` it will default to ``Object``.   

When you first create a new ArrayList it is empty, meaning that it doesn't contain any items yet.  You can get the number of items in a ArrayList using the ``size()`` method.  Notice that an empty ArrayList has a size of 0.  Also notice that you can't get the size of a ArrayList that is currently set to ``null`` on line 9.  You will get a ``NullPointerException`` instead, which means that you tried to do something on an object reference that was ``null`` meaning that it doesn't reference an object.

.. activecode:: ArrayListCreateStr
   :language: java

   import java.util.*; // import everything at this level
   public class Test
   {
       public static void main(String[] args)
       {
          ArrayList<String> nameList = new ArrayList<String>();
          System.out.println("The size of nameList is: " + nameList.size());
          ArrayList<String> list2 = null;
          System.out.println("The size of list2 is: " + list2.size());
       }
   }
   
.. note:: 

   You use the ``length`` field to get the number of items in an array.  But, with an ``ArrayList`` you use the ``size()`` method to get the number of items in the list. The number of items in an empty ArrayList is 0.  You can't get the size of a ArrayList that is set to ``null``.  You will get a ``NullPointerException`` instead.
  
You can also create ArrayLists of integer values.  However, you have to use ``Integer`` as the type.  ``Integer`` objects can hold an ``int`` value.

You can also declare a ArrayList and create it in the same statement as shown below.

.. activecode:: ArrayListCreateInt
   :language: java

   import java.util.*; // import everything at this level
   public class Test
   {
       public static void main(String[] args)
       {
          ArrayList<Integer> numList = new ArrayList<Integer>();
          System.out.println(numList.size());
       }
   }

     

VAR-2.D
Represent collections of
related object reference data
using ArrayList objects.

ESSENTIAL KNOWLEDGE
VAR-2.D.1
An ArrayList object is mutable and
contains object references.
VAR-2.D.2
The ArrayList constructor
ArrayList() constructs an empty list.
VAR-2.D.3
Java allows the generic type
ArrayList<E>, where the generic type E
specifies the type of the elements.
VAR-2.D.4
When ArrayList<E> is specified, the types
of the reference parameters and return type
when using the methods are type E.
VAR-2.D.5
ArrayList<E> is preferred over
ArrayList because it allows the compiler
to find errors that would otherwise be found at
run-time.
    
