.. qnum::
   :prefix: 3-1-
   :start: 1
   
..  shortname:: Variables
..  description:: An introduction primitive variables in Java

What is a Variable?
====================

..	index::
	single: variable

A **variable** is a name associated with a memory location in the computer.  Computer memory can store a value and that value can change or vary.  When you play a game, it will often have a score.  Scores often start at 0 and increase.  A score is a variable.  

.. figure:: Figures/pongScore.png
    :width: 400px
    :align: center
    :figclass: align-center
    
    Figure 1: A pong game in `Scratch <http://scratch.mit.edu>`_ with a score shown in the upper left.

Variable Types on the Exam
------------------------------------

..	index::
	single: integer
	single: int
	single: double
	single: boolean
	single: String
	pair: variable; types
	pair: variable; primitive type
	pair: variable; object type
	pair: variable; integer
	pair: variable; floating point
	pair: variable; Boolean
	pair: variable; String

There are two types of variables in Java: **primitive variables that hold primitive types** and **object variables that hold a reference to an object of a class**.  A reference is a way to find the object (like a UPS tracking number helps you find your package).  The primitive types on the Advanced Placement Computer Science A exam are: 

    -  int - which store integers (whole numbers like 3, -76, 20393) 

    -  double - which store floating point numbers (decimal numbers like 6.3 -0.9, and 60293.93032)
    
    -  boolean - which store Boolean values (either true or false). 

``String`` is one of the object types on the exam and is the name of a class in Java.  A *string* object has a sequence of characters.  You will learn more about ``String`` objects in another chapter. 