.. qnum::
   :prefix: 2-3-
   :start: 1
   
.. |runbutton| image:: Figures/run-button.png
    :height: 20px
    :align: top
    :alt: run button
    
.. |audiotour| image:: Figures/start-audio-tour.png
    :height: 20px
    :align: top
    :alt: audio tour button
    
.. |checkme| image:: Figures/checkMe.png
    :height: 20px
    :align: top
    :alt: check me button
    
First Example Classes
======================

..	index::
	single: class
	pair: class; field
	pair: class; constructor
	pair: class; method
	pair: class; main method
	
To define a class in Java use the **keywords** ``public class`` followed by a *ClassName*.  Then the body of the class is enclosed in a starting ``{`` and ending ``}`` as shown below.

.. code-block:: java 

   public class ClassName
   {
   }
   
.. note::

   In Java every open curly brace ``{`` must have a matched close curly brace ``}``.  These are used to start and end class definitions and method definitions.   
   
The following is an example class in Java.  A class in Java can have **fields** (data or properties), **constructors** (ways to initialize the fields), **methods** (behaviors), and a **main method** for testing the class. It does 
not have to have *any* of these items.  The following would compile, but what do you think would happen if you tried to have a computer execute it?
   
.. code-block:: java 

   public class FirstClass
   {
   }

The class ``FirstClass`` doesn't have anything inside of it, so the computer wouldn't know what to do if we asked it to execute the class.    

When you ask the Java run-time to *run* a class (java ClassName) it will start execution in the ``main`` method.  Click on the |runbutton| button below to have the computer execute the ``main`` method (starts with ``public static void main(String[] args)``) in the following class.  You can also click on the |audiotour| button to listen to a line by line description of the code.  

.. activecode:: lcfc1
   :language: java
   :tour_1: "Line-by-line Tour"; 1: scline1; 2: scline2; 3: scline3; 4: scline4; 5: scline5; 6: scline6; 7: scline7;

   public class SecondClass
   {
      public static void main(String[] args)
      {
         System.out.println("Hi there!");
      }
   }
   
..	index::
	single: String
	single: String literal
   
.. note::

   ``System.out.println`` is just the way that you ask Java to print out the value of something.  In the case above we are just printing the characters between the first ``"`` and the second ``"``.  The ``"Hi there!"`` is called a **string literal**.  A **string literal** is zero to many characters enclosed in starting and ending double quotes in Java.
   
Try to change the code above to print your name.  Be sure to keep the starting ``"`` and ending ``"``.  Click on the |runbutton| button to run the modified code.

**Mixed up programs**

.. parsonsprob:: thirdClass
   :noindent:

   The following has all the correct code to print out "Hi my friend!" when the code is run, but the code is mixed up.  Drag the blocks from left to right and put them in the correct order.  Click on the "Check Me" button to check your solution.
   -----
   public class ThirdClass
   {
   =====
      public static void main(String[] args)
      {
      =====
         System.out.println("Hi my friend!");
         =====
      }
      =====
   }


