.. qnum::
   :prefix: 10-7-
   :start: 1
   
Abstract Classes
=================

..	index::
    pair: class; abstract

If you were creating software that allowed the user to draw rectangles and ovals by clicking the mouse at a location and then dragging and releasing to define the width, what classes would you need?

.. figure:: Figures/shapeSoftware.png
    :width: 300px
    :align: center
    :figclass: align-center

    Figure 2: Software that lets the user click and drag to create ovals and rectangles.
    
One way to identify the classes you need is to underline the nouns in the description. This would give you Rectangle and Oval as two possible classes.  Both of these are kinds of simple shapes that can be defined by two points. So you could create a SimpleShape class that keeps track of two points and perhaps the color to draw the shape in.    
Could you actually create a Shape object?  What would it look like?  In this case we would make the class **abstract** which means that you can not create any objects of that type.  You can use it as a parent class for subclasses.  Abstract classes often have at least one abstract method (a method that has the keyword abstract in the declaration and also no method body), but they don't have to. Abstract classes can have fields and methods with bodies.  An abstract ``SimpleShape`` class could have fields to track the points and methods that calculate the width and height of the shape.   

.. figure:: Figures/Shape.png
    :width: 400px
    :align: center
    :figclass: align-center

    Figure 3: An abstract SimpleShape class with an abstract draw method
    
