
..	index::
	single: method
    single: parameter
    single: argument
    
.. |runbutton| image:: Figures/run-button.png
    :height: 30px
    :align: top
    :alt: run button


Calling Methods with and without Parameters in the Turtle World
---------------------------------------------------------------

**Methods** define the behaviors or functions for objects. For example, in the Turtle class, methods like *forward(100)* and *turnRight()* made the turtle objects move that way. Each method call is followed by parentheses. The parentheses () after method names are there in case you need to give the method **actual parameters** or **arguments** (some data) to do its job, for example the argument 100 in forward(100) makes the turtle go forward 100 pixels. 


.. Although some people use the words parameters and arguments interchangibly, there is a subtle difference. When you define a method, the variables you define for it are called *parameters* or *formal parameters*. When you call the method to do its job, you give or pass in *arguments* or *actual parameters* to it that are then saved in the parameter variables. So, in the definition of the forward method, it has a parameter variable called pixels, but in the call to forward(100), the argument is the value 100 which will get saved in the parameter variable pixels... code-block:: java 
    // Method call
    yertle.forward(100); // argument is 100
    ...
    // Method definition
    public void forward(int pixels) // parameter pixels
    ...



	


Here is the Turtle class diagram again that shows some of the fields and methods inherited from the SimpleTurtle class in the class Turtle. 

.. figure:: Figures/turtleUMLClassDiagram.png
    :width: 400px
    :align: center
    :alt: Turtle class diagram
    :figclass: align-center

    Figure 2: Turtle Class Diagram
    
.. _Color:      https://docs.oracle.com/javase/7/docs/api/java/awt/Color.html

Try some of the methods above in the turtle code below.


**Exercises:** Can you make yertle draw a square? How about a triangle? You'll need 60 degree angles for a equilateral triangle. Use the turn method with the parameter for angles. To change the pen color, try something like: yertle.setColor(Color.red); This uses the Color_ class in Java. 


.. activecode:: TurtleTestMethods1
    :language: java
    :datafile: DigitalPicture, Pixel, SimplePicture, Turtle, SimpleTurtle, World, PictureClass, Pen, Giffer, PathSegment

    import java.util.*;

    public class TurtleTestMethods1
    {
      public static void main(String[] args)
      {
          World world = new World(300,300);
          Turtle yertle = new Turtle(world);
          
          yertle.forward(100);
          yertle.turnLeft();
          yertle.forward(75);
          
          world.show(true); 
      }
    }


     
Try drawing a letter A using the mixed up code below.

.. figure:: Figures/turtleA.png
    :width: 200px
    :align: center
    :alt: turtle drawing A
    :figclass: align-center
    
    Figure 3: Turtle drawing A
    
.. parsonsprob:: DrawABH
   :adaptive:
   :noindent:
   
   The following code uses a turtle to draw a capital A, but the lines are mixed up.  Drag the code blocks to the right and put them in the correct order to draw the A in the order shown by the numbers in the picture above.  Click on the "Check Me" button to check your solution. It may help to act out the code pretending you are the turtle. Remember that the angles you turn depend on which direction you are facing, and the turtle begins facing up. You can also try this code in the Java program above to see what the turtle will do.
   -----
   public class TurtleDrawA
   {
   =====
      public static void main(String[] args)
      {
      =====
         World world = new World(300,300);
         =====
         Turtle yertle = new Turtle(world);
         =====
         yertle.turn(15);
         yertle.forward(100);
         =====
         yertle.turnRight();
         yertle.turn(55);
         yertle.forward(100);
         =====
         yertle.penUp();
         yertle.backward(50);
         yertle.penDown();
         =====
         yertle.turnRight();
         yertle.turn(20);
         yertle.forward(30);
         =====
         world.show(true);
         =====
      }
      =====
   }
   

Group Work: In groups or pairs, use the area below to have a turtle draw the letters J A V A with different colors. Make the J as a block letter without curves. If you don't have a lot of time, just do 1 letter. Be patient with yourself because this may take a lot of trial and error to get the correct angle values.

.. activecode:: Turtle_Initials
    :language: java
    :datafile: DigitalPicture, Pixel, SimplePicture, Turtle, SimpleTurtle, World, PictureClass, Pen, Giffer, PathSegment


    import java.util.*;

    public class TurtleInitials
    {
      public static void main(String[] args)
      {
          World world = new World(300,300);
          
          
          
          world.show(true); 
      }
    }




Calling Methods that Return Values
----------------------------------

Some methods return a value back. 
For example, the java.lang.Math.random() method returns a pseudorandom  decimal number greater than or equal to 0.0 and less than 1.0. We often move it into a range we want by multiplying it. For example, Math.random()*10 saved into an int variable (which will cut off the decimal part) will return a value between 0 and 9. 

When you call a method that returns a value, you should do something with that value like saving it into a variable or printing it out.

.. code-block:: java 

    // Math.random() returns a random number between 0.0-0.99.
    // Math.random()*10 moves it into the range 0-9.
    int rnd = (int)(Math.random()*10);
    // rnd2 is in the range 5-9.
    int rnd2 = (int)(Math.random()*10 + 5);


Try running the program below a couple
times to see that it makes the turtle move a random number of steps. Can you change the program so that it takes a random number from 100 to 500?


.. activecode:: TurtleTestMethods2
    :language: java
    :datafile: DigitalPicture, Pixel, SimplePicture, Turtle, SimpleTurtle, World, PictureClass, Pen, Giffer, PathSegment

    import java.util.*;
    import java.lang.Math; 
    
    public class TurtleTestMethods2
    {
      public static void main(String[] args)
      {
          World world = new World(300,300);
          Turtle yertle = new Turtle(world);
         
          // returns a random number between 10 and up to 110
          int rnd = (int)(Math.random()*100 + 10);
          System.out.println(rnd);
          yertle.forward(rnd);
          
          world.show(true); 
      }
    }