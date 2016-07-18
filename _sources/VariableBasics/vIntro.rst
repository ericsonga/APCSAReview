.. qnum::
   :prefix: 3-1-
   :start: 1
   
..  shortname:: Variables
..  description:: An introduction primitive variables in Java

What is a Variable?
====================

..	index::
	single: variable
	
.. video:: v_variables
   :controls:
   :thumb: ../_static/videoStart.png

   http://ice-web.cc.gatech.edu/ce21/1/static/video/variables.mov
   http://ice-web.cc.gatech.edu/ce21/1/static/video/variables.webm

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

``String`` is one of the object types on the exam and is the name of a class in Java.  A *string* object has a sequence of characters enclosed in a pair of double quotes - like "Hello".  You will learn more about ``String`` objects in another chapter. 

**Check your understanding**
   
   
.. mchoice:: q3_1_1
   :answer_a: int
   :answer_b: double
   :answer_c: boolean
   :answer_d: String
   :correct: b
   :feedback_a: While you could use an int, this would throw away any digits after the decimal point, so it isn't the best choice.  You might want to round up a grade based on the average (89.5 or above is an A). 
   :feedback_b: An average is calculated by summing all the values and dividing by the number of values.  To keep the most amount of information this should be done with decimal numbers so use a double. 
   :feedback_c: Is an average true or false?
   :feedback_d: While you can use a string to represent a number, using a number type (int or double) is better for doing calculations.

   What type should you use to represent the average grade for a course?
   
.. mchoice:: q3_1_2
   :answer_a: int
   :answer_b: double
   :answer_c: boolean
   :answer_d: String
   :correct: a
   :feedback_a: The number of people is a whole number so using an integer make sense.  
   :feedback_b: Can you have 2.5 people in a household?
   :feedback_c: Is the number of people something that is either true or false?
   :feedback_d: While you can use a string, a number is better for doing calculations with (like finding the average number of people in a household).

   What type should you use to represent the number of people in a household?
   
.. mchoice:: q3_1_3
   :answer_a: int
   :answer_b: double
   :answer_c: boolean
   :answer_d: String
   :correct: d
   :feedback_a: People don't usually have whole numbers like 7 as their first name. 
   :feedback_b: People don't usually have decimal numbers like 3.5 as their first name.
   :feedback_c: This could only be used if the name was true or false.  People don't usually have those as first names.
   :feedback_d: Strings hold sequences of characters like you have in a person's name.

   What type should you use to hold the first name of a person?
   
.. mchoice:: q3_1_4
   :answer_a: int
   :answer_b: double
   :answer_c: boolean
   :answer_d: String
   :correct: c
   :feedback_a: While you could use an int and use 0 for false and 1 for true this would waste 31 of the 32 bits an int uses. Java has a special type for things that are either true or false.
   :feedback_b: Java has a special type for variables that are either true or false.
   :feedback_c: Java uses boolean for values that are only true or false.
   :feedback_d: While you can use a string to represent "True" or "False", using a boolean variable would be better for making decisions.  

   What type should you use to record if it is raining or not?
   
.. mchoice:: q3_1_5
   :answer_a: int
   :answer_b: double
   :answer_c: boolean
   :answer_d: String
   :correct: b
   :feedback_a: The integer type (int) can't be used to represent decimal numbers so you couldn't use it if you had any cents.
   :feedback_b: The double type can be used to represent an amount of money.
   :feedback_c: Java uses boolean for values that are only true or false.
   :feedback_d: While you can use a string to represent the amount of money you have it is easier to do calculations on the numeric types (int or double).

   What type should you use to represent the amount of money you have?