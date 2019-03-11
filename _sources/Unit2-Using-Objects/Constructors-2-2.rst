..	index::
	pair: class; constructor
    
Creating and Storing Objects: Constructors
------------------------------------------

A Java class defines what objects of the class know (fields) and what they can do (methods).  The class also defines how to initialize the fields when the object is first created using a special method called the **constructor**.


Constructors always have the same name as the class and are used with the keyword new. An object variable is created using the keyword new followed by a call to a constructor. For example, here's how we used the World constructor to create a new graphical world, and the Turtle constructor to create a new Turtle.


.. code-block:: java 

    // To create a new object, write:
    // ClassName variableName = new ConstructorName(arguments);
    World world = new World();
    Turtle t = new Turtle(world);


There can be more than one constructor defined in a class. If the constructor takes no arguments (nothing inside the parentheses following the name of the constructor), it is called the **Default Constructor** and it will usually set the fields of the object to default values. For example, the World class has 2 constructors. The default World() constructor creates a graphical screen of 640x480 pixels. The World(int w, int h) constructor takes two integer arguments, and initializes the World's width and height to them, for example World(300,400) creates a 300x400 pixel world.

.. code-block:: java
    
    World world1 = new World(); // creates a 640x480 world
    World wordl2 = new World(300,400); // creates a 300x400 world
    
The Turtle class also has multiple constructors, although it always requires a world as an argument to know where to draw the turtle. The default location for the turtle is right in the middle of the world. There is another Turtle constructor that places the turtle at a certain (x,y) location in the world, for example at the coordinate (50, 100) below. The coordinate (0,0) is at the top left of the world. Notice that the order of the arguments matter. This constructor always takes (x,y,world) as arguments in that order. Try  mixing up the order of the arguments and you will see it causes an error because the arguments will not be the data types that it expects. This is one reason why programming languages have data types -- for better error-checking.

.. code-block:: java
    
    Turtle t1 = new Turtle(world1);
    Turtle t2 = new Turtle(50, 100, world1);
    
Try changing the code below to create a World of 300x400. What arguments do you need to give the Turtle constructor to place the turtle in the top right corner? Experiment and find out.


.. datafile:: TurtleClassesFileConstructor
   :fromfile: TurtleClassesFile
   :hide:


.. activecode:: TurtleConstructorTest
    :language: java
    :datafile: TurtleClassesFileConstructor

    import java.util.*;

    public class TurtleConstructorTest
    {
      public static void main(String[] args)
      {
          World world = new World(300,300);
          Turtle t1 = new Turtle(world);
          world.show(true); 
      }
    }
    
    
Here is another example. There is a class called GregorianCalendar in Java that can be used for dates and times. You can use this class by adding the line "import java.util.GregorianCalendar;" which will bring in this class library. Then, you can create an object variable called today that uses the default constructor to initialize it to the current date and time. Run the code below to see what it does. Note that the code below is sent to New Zealand to run, so it will return the current date and time in New Zealand!

.. activecode:: GregorianCalendar1
    :language: java

    import java.util.GregorianCalendar; 

    public class Test1
    {
        public static void main(String[] args)
        {
            GregorianCalendar today = new GregorianCalendar(); 
            System.out.println("New Zealand current date and time: "
                         + today.getTime());
        }
     } 
     
The GregorianCalendar class also has a constructor that takes a particular year, month (starting January at 0), and day as arguments to set up a specific date. Here's the same program again but with a second variable that initializes the variable to the date 1/1/2020.

.. activecode:: GregorianCalendar2
    :language: java

    import java.util.GregorianCalendar; 

    public class Test2
    {
        public static void main(String[] args)
        {
            GregorianCalendar today = new GregorianCalendar(); 
            GregorianCalendar myDate = new GregorianCalendar(2020, 0, 1); 
            System.out.println("New Zealand current date and time: "
                         + today.getTime());
            System.out.println("New Year's day: "
                         + myDate.getTime());
        }
     } 

Exercise: Try adding another GregorianCalendar object to the program above for your birthdate and have it print it out! 
