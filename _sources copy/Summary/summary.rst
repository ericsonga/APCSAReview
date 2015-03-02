..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, Dario Mitchell, Barbara Ericson,  and Mark Guzdial.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

..  shortname:: GeomShapes
..  description:: Shows how to create simple geometric shapes with a Turtle.  

.. qnum::
   :prefix: trl-
   :start: 1

.. _summary_of_turtle_methods:

Summary of Turtle Methods
-------------------------

==========  ==========  =========================
Method      Parameters  Description
==========  ==========  =========================
Turtle      None          Creates and returns a new turtle object
forward     amount        Moves the turtle forward by the specified amount
backward    amount        Moves the turle backward by the specified amount
right       angle         Turns the turtle clockwise
left        angle         Turns the turtle counter clockwise
penup       None          Picks up the turtle's pen
pendown     None          Puts down the turtle's pen
up          None          Picks up the turtle's pen
down        None          Puts down the turtle's pen
color       color name    Changes the color of the turtle's pen
fillcolor   color name    Changes the color of the turtle will use to fill a polygon
heading     None          Returns the current heading
position    None          Returns the current position
goto        x,y           Move the turtle to position x,y
begin_fill  None          Remember the starting point for a filled polygon
end_fill    None          Close the polygon and fill with the current fill color
dot         None          Leave a dot at the current position
stamp       None          Leaves an impression of a turtle shape at the current location
shape       shapename     Should be 'arrow', 'classic', 'turtle', or 'circle'
==========  ==========  =========================


.. note::

   This workspace is provided for your convenience.  You can use this activecode window to try out anything you like. 

   .. activecode:: scratch_03




Glossary
--------

.. glossary::


    attribute
        Some state or value that belongs to a particular object.  For example,
        tess has a color.

    canvas
        A surface within a window where drawing takes place.

    for loop
        A statement in Python that allows you to repeat the statements in the body of the loop.

    instance
        An object that belongs to a class. The turtles `tess` and `sarah` are different
        instances of the class `Turtle`

    invoke
        An object has methods.  We use the verb invoke to mean *activate the
        method*.  Invoking a method is done by putting parentheses after the
        method name, with some possible arguments.  So  ``wn.exitonclick()`` is
        an invocation of the ``exitonclick`` method.

    iteration
		A basic building block for algorithms (programs).  It allows steps to be repeated.  Sometimes called *looping*.
		
	list
		A collection of items in an order.  

    loop body
        Any number of statements nested inside a loop. The nesting is indicated
        by the fact that the statements are indented to the right of the for loop
        statement.

    loop variable
        A variable used as part of a for loop. It is assigned a different value
        each time through the loop, and is used to stop the loop.

    method
        A procedure or function that is attached to an object.  Invoking or running the
        method causes the object to respond in some way, e.g. ``forward`` is
        the method when we say ``tess.forward(100)``.

    module
        A file containing Python definitions and statements intended for use in
        other Python programs. The contents of a module are made available to
        the other program by using ``from module import *`` statement.
        
    programming
    	Telling the computer what you want it to do using a programming language.  
    	
    programming language
    	A language that can be used to tell a computer what to do. Some popular programming languages are Python, Java, and C++.   

    object
        A "thing" to which a variable can refer.  This could be a screen window,
        or one of the turtles you have created.
        
    pixel
        Short for picture (pix) element (el).  It is a tiny display area on your computer screen.

    range
        A built-in function in Python for generating lists of integers.  It
        is especially useful when we need to write a for loop that executes a
        fixed number of times.

    sequential
		The default behavior of a program.  Step by step processing of algorithm.

    state
		The collection of attribute values that a specific data object maintains.

    turtle
		Something that has a position and direction and can draw lines when it moves.  Search the internet and find out who first used turtles to teach programming. 


Exercises
---------

#.

    .. tabbed:: q5

        .. tab:: Question

           Use ``for`` loops to make a turtle draw these regular polygons
           (regular means all sides the same lengths, all angles the same):
        
           * An equilateral triangle
           * A square
           * A hexagon (six sides)
           * An octagon (eight sides)
        
           .. actex:: ex_3_5

        .. tab:: Answer
            
            .. sourcecode:: python
                
                # draw an equilateral triangle
                from turtle import *

                wn = Screen()
                norvig = Turtle()

                for i in range(3):
                    norvig.forward(100)

                    # the angle of each vertice of a regular polygon 
                    # is 360 divided by the number of sides
                    norvig.left(360/3)

                wn.exitonclick()

            .. sourcecode:: python

                # draw a square    
                from turtle import *

                wn = Screen()
                kurzweil = Turtle()

                for i in range(4):
                    kurzweil.forward(100)
                    kurzweil.left(360/4)

                wn.exitonclick()

            .. sourcecode:: python

                # draw a hexagon    
                from turtle import *

                wn = Screen()
                dijkstra = Turtle()

                for i in range(6):
                    dijkstra.forward(100)
                    dijkstra.left(360/6)

                wn.exitonclick()

            .. sourcecode:: python

                # draw an octogon    
                from turtle import *

                wn = Screen()
                knuth = Turtle()

                for i in range(8):
                    knuth.forward(75)
                    knuth.left(360/8)

                wn.exitonclick()
                
        .. tab:: Discussion 

            .. disqus::
                :shortname: interactivepython
                :identifier: f36e8bc742b89424e82f111ba2d1dd33f


#. On a piece of scratch paper, trace the following program and show the drawing.  When you are done, press ``run``
   and check your answer.

   .. actex:: ex_3_8

       from turtle import *
       wn = Screen()
       tess = Turtle()
       tess.right(90)
       tess.left(3600)
       tess.right(-90)
       tess.left(3600)
       tess.left(3645)
       tess.forward(-100)


#.

    .. tabbed:: q9

        .. tab:: Question

           Write a program to draw a shape like this:
        
           .. image:: Figures/star.png
        
           .. actex:: ex_3_9

        .. tab:: Answer

            .. activecode:: q9_answer
                
                from turtle import *

                turing = Turtle()

                for i in range(5):
                    turing.forward(110)
                    turing.left(216)

        .. tab:: Discussion 

            .. disqus::
                :shortname: interactivepython
                :identifier: c611217310057488aab6a34d4b591e753


#. Write a program to draw a face of a clock that looks something like this:

   .. image:: Figures/tess_clock1.png

   .. actex:: ex_3_10

#.

    .. tabbed:: q11

        .. tab:: Question

           Write a program to draw some kind of picture.  Be creative and experiment
           with the turtle methods provided in summary_of_turtle_methods_.
        
           .. actex:: ex_3_11

        .. tab:: Answer
            
            .. activecode:: q11_answer

                from turtle import *

                tanenbaum = Turtle()

                tanenbaum.hideturtle()
                tanenbaum.speed(20)

                for i in range(350):
                    tanenbaum.forward(i)
                    tanenbaum.right(98)

        .. tab:: Discussion 

            .. disqus::
                :shortname: interactivepython
                :identifier: e928a562a4f5c41f9892c9bfc4a1d5883


#.

    .. tabbed:: q13

        .. tab:: Question
            
            A sprite is a simple spider shaped thing with n legs coming out from a center 
            point. The angle between each leg is 360/n degrees.

            Write a program to draw a sprite where the number of legs is provided by the user.
                   
            .. actex:: ex_3_13

        .. tab:: Answer
            
            .. activecode:: q13_answer
                
                from turtle import *

                wn = Screen()

                babbage = Turtle()
                babbage.shape("triangle")

                n = int(input("How many legs should this sprite have? "))
                angle = 360/n

                for i in range(n):
                    # draw the leg
                    babbage.right(angle)
                    babbage.forward(65)
                    babbage.stamp()
                    
                    # go back to the middle and turn back around
                    babbage.right(180)
                    babbage.forward(65)
                    babbage.right(180)

                babbage.shape("circle")

                wn.exitonclick()
    
        

        .. tab:: Discussion 

            .. disqus::
                :shortname: interactivepython
                :identifier: b65d7e616d2b548f592205dba699cc132


