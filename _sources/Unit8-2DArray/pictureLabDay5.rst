
Picture Lab Day 5: Modifying a Picture (not complete)
=====================================================

You will write methods in the ``Picture`` class that modify digital pictures.
The ``Picture`` class inherits from the ``SimplePicture`` class and the ``SimplePicture`` class implements the ``DigitalPicture`` interface as shown in the Unified Modeling Language (UML) class diagram in the figure .

.. figure:: Figures/UML.png
    :width: 750px
    :align: center
    :figclass: align-center

    Figure 1: A UML Class diagram

A UML class diagram shows classes and the relationships between the classes. Each class is shown in a box with the class name at the top.
The middle area shows attributes (instance or class variables) and the bottom area shows methods. The open triangle points to the class that the connected class inherits from.
The straight line links show associations between classes. Association is also called a “has-a” relationship. The numbers at the end of the association links give the number of objects associated with an object at the other end.

For example, in Figure 5 it shows that one ``Pixel`` object has one ``Color`` object associated with it and that a ``Color`` object can have zero to many ``Pixel`` objects associated with it.
You may notice that the UML class diagram doesn't look exactly like Java code. UML isn't language specific.

.. mchoice:: picture-day5-0a
   :answer_a: Yes
   :answer_b: No
   :correct: b
   :feedback_a: This about where ``getPixels2D`` originally comes from. Is this linked to ``Picture.java``?
   :feedback_b: Correct, this class inherits from ``SimplePicture``
   :optional:

   Open ``Picture.java`` and look for the method ``getPixels2D``. Is it there?

.. mchoice:: picture-day5-1
   :answer_a: Yes
   :answer_b: No
   :correct: a
   :feedback_a: Yes, ``SimplePicture`` implements the interface ``DigitalPicture`` and provides the method bodies for all the methods defined in ``DigitalPicture``.
   :feedback_b: This about where ``getPixels2D`` originally comes from. How is this linked to ``SimplePicture.java``?
   :optional:

   Open ``SimplePicture.java`` and look for the method ``getPixels2D``. Is it there?

.. mchoice:: picture-day5-1a
   :answer_a: yes, because ``DigitalPicture`` is a class; an object of this type can be created.
   :answer_b: yes, because ``DigitalPicture`` is an interface; an object of this type can be created.
   :answer_c: no, because ``DigitalPicture`` is an interface; an object of this type cannot be created.
   :answer_d: no, because ``DigitalPicture`` is a class; an object of this type cannot be created.
   :correct: c
   :feedback_a: Classes can be created
   :feedback_b: Interfaces cannot be created
   :feedback_c: Correct!
   :feedback_d: Classes can be created
   :optional:

   Does the following code compile?
     DigitalPicture p = new DigitalPicture();

.. mchoice:: picture-day5-2a
   :answer_a: yes, because ``SimplePicture`` has an "is a" relationship with ``DigitalPicture``
   :answer_b: yes, because the compiler implicitly casts ``SimplePicture`` at compile time.
   :answer_c: no, because the two data types do not match.
   :answer_d: no, because the base datatype is an interface, which cannot be created.
   :correct: a
   :feedback_a: !TODO
   :feedback_b: !TODO
   :feedback_c: !TODO
   :feedback_d: !TODO
   :optional:

   Assuming that a no-argument constructor exists for SimplePicture, would the following code compile?
     DigitalPicture p = new SimplePicture();

.. mchoice:: picture-day5-3a
   :answer_a: yes, bcs
   :answer_b: yes, bcs
   :answer_c: no, bcs
   :answer_d: no, bcs
   :correct: b
   :feedback_a: !TODO
   :feedback_b: !TODO
   :feedback_c: !TODO
   :feedback_d: !TODO
   :optional:

   Assuming that a no-argument constructor exists for Picture, compile?
     DigitalPicture p = new Picture();

.. mchoice:: picture-day5-4a
   :answer_a: yes, bcs
   :answer_b: yes, bcs
   :answer_c: no, bcs
   :answer_d: no, bcs
   :correct: b
   :feedback_a: !TODO
   :feedback_b: !TODO
   :feedback_c: !TODO
   :feedback_d: !TODO
   :optional:

   Assuming that a no-argument constructor exists for Picture, does the following code compile?
    SimplePicture p = new Picture();

.. mchoice:: picture-day5-5a
   :answer_a: yes, bcs
   :answer_b: yes, bcs
   :answer_c: no, bcs
   :answer_d: no, bcs
   :correct: b
   :feedback_a: !TODO
   :feedback_b: !TODO
   :feedback_c: !TODO
   :feedback_d: !TODO
   :optional:

   Assuming that a no-argument constructor exists for SimplePicture, does the following code compile?
     Picture p = new SimplePicture();

Exercises
---------------------------------------------------

.. mchoice:: picture-day5-1b
   :answer_a: [1, 2, 3, 4, 5, 6]
   :answer_b: [2, 1, 4, 3, 6, 5]
   :answer_c: [2, 4, 6, 1, 3, 5]
   :answer_d: [1, 3, 5, 2, 4, 6]
   :correct: b
   :feedback_a: This answer has stored the columns, but they need to be stored from the lowest index to the highest.
   :feedback_b: Correct
   :feedback_c: We need to store this array in column-major order. The columns of the array are aligned vertically.
   :feedback_d: We need to store this array in column-major order. The columns of the array are aligned vertically.
   :optional:

   Given an array A = { 2  4  6 }, {1  3  5} how would A be stored in a 1D array in column-major order?
