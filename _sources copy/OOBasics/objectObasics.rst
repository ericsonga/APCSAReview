.. qnum::
   :prefix: 10-1-
   :start: 1

Object-Oriented Programming Concepts
=====================================

..	index::
    single: objects
    single: inheritance
    single: polymorphism
    single: Unified Modeling Language
   
Object-oriented programming has three main features: **objects**, **inheritance**, and **polymorphism**.  **Objects** have data (fields) and behavior (methods) and do the work in an object-oriented program.  Objects are created by classes.  A class is the definition of the data (fields) and behavior (methods) for all objects of a type.   **Inheritance** allows for cleaner code since a class can inherit fields and behavior from another class instead of copying code to many classes.  **Polymorphism** allows for specific behavior based on the run-time type.  It also removes the need for conditional execution based on the type.  This section will explain the ideas of inheritance and polymorphism in more depth.

Inheritance
============

One of the really useful features of Object-Oriented programming is **inheritance**.  You may have heard of someone coming into an inheritance, which often means they were left something from a relative that died.  Or, you might hear someone say that they have inherited musical ability from a parent.  In Java all classes can **inherit** object fields and methods from another class.  The class being inherited from is called the **parent class** or **superclass**.  The class that is inheriting is called the **child class** or **subclass**.  

When one class inherits from another, we can say that it is the *same kind of thing* as the **parent class** (the class it inherits from).  For example, a car is a kind of vehicle.  This is sometimes called the *is-a* relationship, but I prefer *is-a kind of*.  A motorcycle is another kind of vehicle.  All vehicles have a make, model, and year that they were created.  All vehicles can go forward, backward, turn left and turn right.  

.. figure:: Figures/vehicle.png
    :width: 300px
    :align: center
    :figclass: align-center

    Figure 1: A UML Class Diagram Showing Inheritance
    
A UML (Unified Modeling Language) class diagram shows classes and the relationships between the classes as seen in Figure 1.  An open triangle points to the parent class.  The parent class for ``Car`` and ``Motorcycle`` is ``Vehicle``. The ``Vehicle`` class has two child classes or subclasses: ``Car`` and ``Motorcycle``.  
    
How is a parent class specified?  Use the Java keyword **extends** after the class name and then followed by the parent class name to specify the parent class as shown below. 

.. code-block:: java 

  public class Car extends Vehicle 
  
..	index::
    single: extends
  
  
Note that while a person has two parents, a Java class can only inherit from one parent class.  If you leave off the **extends** keyword when you declare a class then the class will inherit from the ``Object`` class.  The ``Person`` class declared below will inherit from the ``Object`` class.

.. code-block:: java 

  public class Person
  
Why Use Inheritance?
=====================

..	index::
    single: generalization
    single: specialization
    
Inheritance allows you to reuse data and behavior from the parent class.  It is useful for **generalization** in which case you may notice that several classes share the same data and/or behavior and you pull that out into a parent class.  Customers and Employees are both people so it makes sense use the general Person class.  It is also useful for **specialization** which is when you want most of the behavior of a parent class, but want to do at least one thing differently and/or add more data.  An example of specialization is the Employee class above.  An employee is a person but also has a unique id.  
  

