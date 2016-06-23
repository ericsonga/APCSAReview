.. qnum::
   :prefix: 10-1-
   :start: 1

Inheritance
============

One of the really useful features of Object-Oriented programming is **inheritance**.  You may have heard of someone coming into an inheritance, which often means they were left something from a relative that died.  Or, you might hear someone say that they have inherited musical ability from a parent.  In Java all classes can **inherit** object fields and methods from another class.  The class being inherited from is called the **parent class** or **superclass**.  The class that is inheriting is called the **child class** or **subclass**.  

When one class inherits from another, we can say that it is the *same kind of thing* as the **parent class** (the class it inherits from).  For example, a car is a kind of vehicle.  This is sometimes called the *is-a* relationship, but I prefer *is-a kind of*.  A motorcycle is another kind of vehicle.  All vehicles have a make, model, and year that they were created.  All vehicles can go forward, backward, turn left and turn right.  

.. figure:: Figures/vehicle.png
    :width: 400px
    :align: center
    :figclass: align-center

    Figure 1: A UML Class Diagram Showing Inheritance
    
A UML (Unified Modeling Language) class diagram shows classes and the relationships between the classes as seen in Figure 1.  An open triangle points to the parent class.  The parent class for ``Car`` and ``Motorcycle`` is ``Vehicle``. The ``Vehicle`` class has two child classes or subclasses: ``Car`` and ``Motorcycle``.  

Specifying the Parent Class
=============================
    
How is a parent class specified?  Use the Java keyword **extends** after the class name and then followed by the parent class name to specify the parent class as shown below. 

.. code-block:: java 

  public class Car extends Vehicle 
  public class Motorcycle extends Vehicle
  
..	index::
    single: extends
    
.. note::
  
   While a person has two parents, a Java class can only inherit from one parent class.  If you leave off the **extends** keyword when you declare a class then the class will inherit from the ``Object`` class.  The ``Person`` class declared below will inherit from the ``Object`` class.

.. code-block:: java 

  public class Person
  
Why Use Inheritance?
=====================

..	index::
    single: generalization
    single: specialization
    
Inheritance allows you to reuse data and behavior from the parent class.  It is useful for **generalization** in which case you may notice that several classes share the same data and/or behavior and you pull that out into a parent class.  Customers and Employees are both people so it makes sense use the general Person class.  It is also useful for **specialization** which is when you want most of the behavior of a parent class, but want to do at least one thing differently and/or add more data.  An example of specialization is the Employee class below.  An employee is a person but also has a unique id.  A customer is a person, but also has a credit card.

.. figure:: Figures/person.png
    :width: 300px
    :align: center
    :figclass: align-center

    Figure 2: A UML Class Diagram Showing Inheritance
    
**Test Your Understanding**
    
.. mchoice:: qoo10-1-1
   :answer_a: It doesn't have a parent class.
   :answer_b: It inherits from the Object class.
   :answer_c: It inherits from the Default class.
   :answer_d: It inherits from the Parent class.
   :correct: b
   :feedback_a: If no parent class is specified using the extends keyword, the current class will still have a parent class.
   :feedback_b: If no parent class is specified using the extends keyword, the parent class will be Object.
   :feedback_c: There isn't a class named Default.
   :feedback_d: There isn't a class named Parent.

   If you don't specify the parent class in a class declaration which of the following is true?
   
.. mchoice:: qoo10-1-2
   :answer_a: Yes
   :answer_b: No
   :correct: a
   :feedback_a: Yes, a child class inherits all the parent class object field and methods.  
   :feedback_b: Why would inheritance be useful if you didn't actually get anything from the parent class?

   If the class Vehicle has object fields of make and model and the class Car inherits from the class vehicle will a car object have a make and model?  
   
.. mchoice:: qoo10-1-3
   :answer_a: Yes
   :answer_b: No
   :correct: b
   :feedback_a: Is a parking garage a kind of vehicle?
   :feedback_b: No, a parking garage is not a kind of vehicle.  Instead it has vehicles in it which implies that the ParkingGarage class would have a field that tracks the vehicles in it.

   If I had a class ParkingGarage should it inherit from the class Vehicle?  
   
.. mchoice:: qoo10-1-4
   :answer_a: 0
   :answer_b: 1
   :answer_c: 2
   :answer_d: infinite
   :correct: b
   :feedback_a: In Java a class always has at least one parent class.  If none is specified the default is Object.
   :feedback_b: All classes in Java have one and only one parent class.  
   :feedback_c: While that is how it works with humans, is that how Java works?
   :feedback_d: This is true for interfaces, but not parent classes.  

   In Java how many parents can a class have? 
  

