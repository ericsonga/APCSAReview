.. qnum::
   :prefix: jr-
   :start: 1

Preface
===============

I have published this book using a Creative Commons license to
encourage you to use it, change it, and modify it for your own purposes.
I would appreciate knowing what you think if you do use this book, and I
would love to see any modifications or additions you make.

Barbara Ericson `ericson@cc.gatech.edu <mailto://ericson@cc.gatech.edu>`_ January,
2014

    This work is licensed under a Creative Commons Attribution 3.0
    United States License. See http://creativecommons.org
    
This book is intended to help you review for the Advanced Placement Computer Science A Exam.  For more information on the exam see https://apstudent.collegeboard.org/apcourse/ap-computer-science-a/about-the-exam.  

What is Java?
===============

Java is a **programming language**, which means that we can use Java to tell a computer what to do.  Computers don't actually speak Java so we have to 
compile Java source files (they end in .java) into class files (they end in .class).  You can use the Java command ``javac`` to do the compiling.  All code (statements) in Java must be part of a **class** and the class name must match the file name. 

.. figure:: Figures/compiling.png
    :width: 300px
    :align: center
    :figclass: align-center

    Figure 1: Compiling a source file for the class BugRunner into a class file.  

DrJava (an IDE)
---------------- 

The tool that we use to compile a Java source file into a Java class file is called a **compiler**.  I recommend using an **Integrated Development Environment** (IDE). An IDE helps you write, compile, run, and debug programs.  I recommend using DrJava (from http://DrJava.org).  It is free and easy to use.  I particularly like the interactions pane (the bottom area) which lets you try out Java code without having to create a class first.

.. figure:: Figures/DrJavaBugRunner.png
    :width: 600px
    :align: center
    :figclass: align-center

    Figure 2: DrJava with the interactions pane at the bottom of the window.
    
Setting up DrJava for GridWorld
-------------------------------
    
Notice that the class being defined in the figure above is called ``BugRunner`` and the file it is in is ``BugRunner.java``.   This is the first project in GridWorld. You can get the GridWorld materials at https://apstudent.collegeboard.org/apcourse/ap-computer-science-a/about-the-exam/gridworld-case-study.  To allow DrJava to run any GridWord code you need to tell it where to find the ``gridworld.jar`` file.   To do this you add the ``gridworld.jar`` file to the **classpath**, which is a list of the places to look for classes.  GridWorld isn't part of the Java language, but is a set of additional classes developed for the Advanced Placement Computer Science A exam so we need to tell the compiler where to find these classes.

To add to the classpath in DrJava click on ``Edit`` in the top menu and then ``Preferences`` and finally on ``Resource Locations``.  Then click on the ``Add`` button below the ``Extra Classpath`` area.  Use the file browser to find the ``gridworld.jar`` file and select that file.  Then click on ``OK``.  

.. figure:: Figures/AddJarToPrefs.png
    :width: 600px
    :align: center
    :figclass: align-center

    Figure 3: Adding gridworld.jar to the classpath in DrJava
    
The Advanced Placement Computer Science A exam uses a subset of Java and GridWorld.  This book will only use that Java subset and GridWorld.

What is a Class and an Object?
==============================

In Java a class doesn't mean the same thing as the classes you take in school. In Java it is used to define a type (classify something).  There are many classes that are part of the Java langague, but you only have to know a few of these for the AP CS A exam.  The real power of Java is the ability to create your own classes (define your own types).  

Classes create objects and the objects do the actual work in an object-oriented program.  You can think of a class as like a cookie cutter.  It is used to create the cookies (objects) and can be used to create as many cookies (objects) as you want.  A class can also be thought of as a factory that produces objects.  

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

If you go to a restaurant you will be seated by the greeter, the waiter will take your order, and the chef will cook your food.  What do we mean by a greeter, waiter, and chef?  Those are classifications or types of workers in a restaurant.  Java has this same concept.  When we create a new class we are defining a new type (a new classification) to the computer.  Each type can have abilities (called **methods** in Java) and properties (called **fields** in Java). After you define a type you can use it to create **objects** of that type.  All objects created from a class will have the properties and abilities defined in that class.  

Objects and Classes in GridWorld
--------------------------------

If you set the classpath to include gridworld.jar and then open the BugRunner.java file in the GridWorldCode/project/firstProject directory and then hit the run button in DrJava you will see a GridWorld example.  Click on the step button a couple of times.  Right click on any empty grid space and use the menu displayed to add a bug, rock, or flowers to the empty space.  You can even pick the color for the new object if you pick one of the options that has ``(java.awt.Color)`` as shown in the figure below. 

.. figure:: Figures/CreateNewGridWorld.png
    :width: 300px
    :align: center
    :figclass: align-center

    Figure 6: Adding more bugs, flowers, and rocks in GridWorld
    
In the GridWorld example above, what can bugs do?  Click on the step button a few times and see what happens.  What happens if you put a rock in the space that a bug is facing and then click step?  What do bugs leave behind when they move?  

In the GridWorld example all bugs know how to move forward and turn.  When a bug moves forward it drops a flower.  Bugs have a color, direction, and location.  Do rocks also have these same fields?  What about flowers? 

**Check your understanding**

.. mchoicemf:: q1_1
   :answer_a: Yes
   :answer_b: No
   :correct: b
   :feedback_a: While a class can have both fields and methods, it is not required to have both.  
   :feedback_b: A class can have both fields and methods, but it doesn't have to have both. 

   Does a class have to have both fields and methods?
 
.. mchoicemf:: q1_2
   :answer_a: You can only create one object from a class.
   :answer_b: An object is a definition of a type.
   :answer_c: An object can only be created by a class.   
   :correct: c 
   :feedback_a: You can create many objects from the same class.  Just like having many waiters in a restaurant.  
   :feedback_b: A class defines a type, not an object.
   :feedback_c: Yes, the class creates the object.  The class contains the definition of what all objects of that class need to be able to do and know.

   Which of the following is true about objects? 

.. mchoicemf:: q1_3
   :answer_a: It is something the object knows or keeps track of.  
   :answer_b: It is something the object can do.
   :answer_c: It defines the type of the object.
   :correct: a
   :feedback_a: A field stores data for an object.  You can think of it as a property of the object. 
   :feedback_b: A method is something that an object do.  It is an ability or behavior of the object.  
   :feedback_c: The type of an object is the class that created it. 

   Which of the following is true about a field in Java?

To continue on with this review click on the double arrows to the right at the top of the page.  You can get to the table of contents by clicking on ``Review of Java for AP CS A`` at the top of the page.






