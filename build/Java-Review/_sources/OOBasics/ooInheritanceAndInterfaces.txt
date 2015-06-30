.. qnum::
   :prefix: 10-8-
   :start: 1

Inheritance and Interfaces
==========================

.. video:: v_interfaces
   :controls:
   :thumb: ../_static/videoStart.png

   http://ice-web.cc.gatech.edu/ce21/1/static/video/Interfaces.mov
   http://ice-web.cc.gatech.edu/ce21/1/static/video/Interfaces.webm
   
..	index::
    single: interface
    pair: interface; definition

An **interface** in Java is a special type of abstract class that can only contain public abstract methods (every method is assumed to be ``public`` and ``abstract`` even if these keywords are not specified) and public class constants.  ``List`` is an interface in Java.  Interfaces are declared using the **interface** keyword.  One interface can inherit from another interface.

.. code-block:: java 

  public interface Checker
  {
  	boolean check (Object obj);
  }
  
The code above declares an interface called ``Checker`` that contains a public abstract method called ``check`` that returns true or false.  Classes that implement this interface must provide the body for the ``check`` method.  

Another example of an interface in Java is the **Iterator** interface.  It is used to loop through collection classes (classes that hold groups of objects like ``ArrayList``).

.. mchoicemf:: qooi_1
   :answer_a: I only  
   :answer_b: II only 
   :answer_c: I and II
   :answer_d: I, II, and III
   :correct: c
   :feedback_a: Interfaces can also be extended (inherited from). 
   :feedback_b: II is true, but I is also true.
   :feedback_c: Both I and II are true.
   :feedback_d: You can not create an object of an interface type.  You can only create objects from concrete (not abstract) classes.  
   
   Which of the following is true about interfaces?
   
   .. code-block:: java 

      I. Interfaces can only contain abstract methods or class constants.  
      II.  Interfaces can be extended.
      III.  Interfaces can be instantiated (you can create an object of the interface type). 


What is the purpose of an interface?
------------------------------------

..	index::
    pair: interface; purpose

The purpose of an interface is to separate *what* you want a type to be able to do (defined by the method signatures) from *how* it does that.  This makes it easy to substitute one class for another if they both implement the same interface and you have declared the variable using the interface type.  The ``List`` interface defines what a class needs to be able to do in order to be considered a ``List``.  You have to be able to add an item to it, get the item at an index, remove the item from an index, get the number of elements in the list, and so on.  There are several classes that implement the ``List`` interface.  You only have to know about ``ArrayList`` for the exam, which is a class that implements the ``List`` interface using an array.  

See http://docs.oracle.com/javase/7/docs/api/java/util/List.html for the Java documentation for the full definition of the  ``List`` interface.

The following are the ``List`` methods that you need to know for the AP CS A exam.  These are included on the quick reference that you will receive during the exam.  You can get it at https://secure-media.collegeboard.org/digitalServices/pdf/ap/explore-ap/AP_Computer-Science-A-Quick-Reference.pdf. 

    -  ``int size()`` returns the number of elements in the list
    
    -  ``boolean add(E obj)`` appends obj to the end of the list and returns true
    
    -  ``void add(int index, E obj)``  moves any current objects at index or beyond to the right (to a higher index) and inserts obj at the index

    -   ``E get(int index)`` returns the item in the list at the index
    
    -   ``E set(int index, E obj)`` replaces the item at index with obj
    
    -   ``E remove(int index)`` removes the item at the index and shifts remaining items to the left (to a lower index)
    
Interfaces make it easy to write general methods that use the methods defined in the interface.  For example, in Java, you can sort objects of any class that implements the ``Comparable`` interface.  The ``Comparable`` interface just specifies the ``int compareTo(T o)`` method which will return a negative number if the current object is less than the passed one, 0 if they are equal, and a positive number if the current object is greater than the passed one.  How do you compare two objects of any class?  It really depends on both the class and the context.  How do you compare two people for example?  In one context you might use last name and then first name.  In other context you might use age.  The class that implements the interface defines how to compare the objects when it provides the method body for the method defined in the interface.