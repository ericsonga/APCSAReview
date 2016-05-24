.. qnum::
   :prefix: 2-2-
   :start: 1

What is a Class and an Object?
==============================

..	index::
	single: class
	pair: class; String
	pair: class; Math
	pair: class; System
	pair: class; List
	pair: class; ArrayList

In Java, a class doesn't mean the same thing as the classes you take in school. A **class** is used to define a type (classify something).  The class defines what objects of the class need to know (data or fields) and do (behaviors or methods).  There are many classes that are part of the Java langague, but you only have to know a few of these for the AP CS A exam (``String``, ``Math``, ``System``, ``List``, ``ArrayList``).  The real power of Java is the ability to create your own classes (define your own types) as shown in the video below. This video was created using the free software Greenfoot which is at http://greenfoot.org.  Greenfoot makes it easy to create 2d simulations and games in Java.

.. video:: ants
   :controls:
   :thumb: ../_static/videoStart.png

   http://ice-web.cc.gatech.edu/ce21/1/static/video/introToAnts.mov
   http://ice-web.cc.gatech.edu/ce21/1/static/video/introToAnts.webm

..	index::
	single: object
	single: Greenfoot
	single: Alice 3
	
Another free environment, Alice 3, allows you to easily create animations or 3D movies.  You can create 3D objects and program them using drag and drop programming that can help you get started in Java.  See http://www.alice.org for more information.  Also see http://ice-dl.cc.gatech.edu/?q=node/848 for an example starting project in Alice 3.
	
Classes create **objects**, and the objects do the actual work in an object-oriented program.  You can think of a class like a cookie cutter.  It is used to create the cookies (objects) and can be used to create as many cookies (objects) as you want.  A class can also be thought of as a factory that produces objects.  

.. figure:: Figures/cookieCutter.jpg
    :width: 300px
    :align: center
    :figclass: align-center

    Figure 4: Using a cookie cutter to make cookies
    
You can think of a class as the type or classification.  The following picture has lots of cats (objects of the type cat).  

.. figure:: Figures/cats2.png
    :width: 300px
    :align: center
    :figclass: align-center

    Figure 5: Pictures of cats (cat objects)

If you go to a restaurant, you will be seated by the greeter, the waiter will take your order, and the chef will cook your food.  What do we mean by a greeter, waiter, and chef?  Those are classifications or types of workers in a restaurant.  Java has this same concept.  When we create a new class we are defining a new type (a new classification) to the computer.  Each type can have abilities or behaviors (called **methods** in Java) and properties (called **fields** in Java). After you define a type, you can use it to create **objects** of that type.  All objects created from a class will have the properties and abilities/behaviors defined in that class.  

**Check your understanding**
   
.. mchoice:: q2_2_1
   :answer_a: 1
   :answer_b: 10
   :answer_c: 1000
   :answer_d: As many as you need
   :correct: d
   :feedback_a: There is one definition of a class, but the class can create as many objects as are needed.
   :feedback_b: There is no limit on the number of objects you can create from a class.
   :feedback_c: There is no limit on the number of objects you can create from a class.
   :feedback_d: You can create as many objects as you need from one class.
   
   How many objects can you create from a class in Java?
   
.. mchoice:: q2_2_2
   :answer_a: fields
   :answer_b: methods
   :answer_c: class
   :answer_d: object
   :correct: b
   :feedback_a: Fields specify the data that an object keeps track of.
   :feedback_b: Methods specify the behavior of all objects of a class.
   :feedback_c: While the class does specify the behavior of all objects created by that class, what part of a class specifies the behavior?
   :feedback_d: The object behavior is specified by the methods in the class that created the object.
   
   What specifies the behavior for objects of a class in Java?
   
.. mchoice:: q2_2_3
   :answer_a: fields
   :answer_b: methods
   :answer_c: class
   :answer_d: object
   :correct: a
   :feedback_a: Fields specify the data that an object keeps track of.
   :feedback_b: Methods specify the behavior of all objects of a class.
   :feedback_c: While the class does specify the data or state that all objects of the class keep track of, what part of the class stores the data?
   :feedback_d: The object data or state is stored in the fields of the object.  The fields are defined in the class.  
   
   What specifies the data or state for an object in Java?
   
   
 
   