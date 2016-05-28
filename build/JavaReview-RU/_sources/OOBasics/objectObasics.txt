.. qnum::
   :prefix: OO-Intro-
   :start: 1

Object-Oriented Programming Concepts
=====================================

..	index::
    single: objects
    single: inheritance
    single: polymorphism
    single: Unified Modeling Language
   
Object-oriented programming has three main features: **objects**, **inheritance**, and **polymorphism**.  

**Objects** have data (fields) and behavior (methods) and do the work in an object-oriented program.  Objects are created by classes.  A class defines the data (fields) and behavior (methods) for all objects of that class.  You can create many objects from the same class.  In the video below hundreds of Ant objects are created in Greenfoot. Greenfoot is a free Java development environment that makes it easy to create 2D simulations and games.  For more information about Greenfoot see http://greenfoot.org.  

.. video:: ants
   :controls:
   :thumb: ../_static/videoStart.png

   http://ice-web.cc.gatech.edu/ce21/1/static/video/introToAnts.mov
   http://ice-web.cc.gatech.edu/ce21/1/static/video/introToAnts.webm

**Inheritance** allows for cleaner code since a class can inherit fields and behavior from another class instead of copying code from class to class.  The **parent** class is specified using the ``extends`` keyword in the class declaration.  The class that is extending the parent class is called the **child** class.   In the ants scenario the ``Ant`` class inherits from the ``Actor`` class.  The ``Ant`` class is the **child** class and the ``Actor`` class is the **parent** class.  The ``Ant`` class inherits the ``act`` method from the ``Actor`` class, but **overrides** it by creating a method with the same signature that will be executed instead of the parent's method.  This allows the ``Ant`` class to modify what an ``Ant`` object does when it acts.  

.. video:: inheritance
   :controls:
   :thumb: ../_static/videoStart.png

   http://ice-web.cc.gatech.edu/ce21/1/static/video/inheritance.mov
   http://ice-web.cc.gatech.edu/ce21/1/static/video/inheritance.webm

**Polymorphism** allows for specialized behavior based on the run-time type.  It also removes the need for conditional execution based on the type. Java uses **inheritance-based polymorphism** where a parent class has a method that the children classes override to provide specialized behavior.  In the Ant scenario the ``Balloon`` and ``Bomb`` classes inherit from the Actor class and both override the ``act`` method. The world contains a list of all Actor objects in the world and tells each to act.  What happens when an Actor object acts depends on the class that created it (the run-time type).

.. video:: polymorphism
   :controls:
   :thumb: ../_static/videoStart.png

   http://ice-web.cc.gatech.edu/ce21/1/static/video/polymorphism.mov
   http://ice-web.cc.gatech.edu/ce21/1/static/video/polymorphism.webm 

The following sections will explain the ideas of inheritance and polymorphism in more depth.

