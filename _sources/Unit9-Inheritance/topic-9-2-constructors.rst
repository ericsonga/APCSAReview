.. include:: ../common.rst

.. qnum::
   :prefix: 9-2-
   :start: 1


|Time45|

Inheritance and Constructors
============================

.. index::
    pair: constructor; super

Subclasses inherit ``public`` methods from the superclass that they extend, but
they cannot access the ``private`` instance variables of the superclass
directly. And subclasses do not inherit constructors from the superclass. But
inherited instance variables need to be properly initialized or none of the
inherited methods are likely to work properly, so how can a subclass initialize
the superclass's ``private`` variables?

If the super class provides ``public`` setter methods for those variables the
subclass could use those. But that won't always be the case. And sometimes
constructors do more complex initialization than just setting variables.

The way out is provided by the keyword ``super``. When used like the name of a
method, i.e. when followed with parentheses and arguments, ``super`` provides a
way to call the code in a superclass constructor, passing whatever arguments it
needs. But unlike when we call a constructor with ``new``, a call to ``super``
doesn't create a new object. Instead it runs the constructor’s code in the
context of the object currently being constructed. This lets the superclass
constructor initialize the instance variables declared in the superclass
including ``private`` variables the subclass can’t directly access.

It’s critical that all the instance variables in an object be properly
initialized before the object is used, including by code in the rest of the
constructor. To ensure that, if the constructor doesn’t start with a call to
``super`` Java will automatically insert a call to ``super`` with no arguments.
(That means if the superclass does not have a no-argument constructor that the
subclasses will have to explicitly call ``super`` with the appropriate arguments
for some constructor that does exist. This ensures that instances of the
subclass are properly initialized.)

For example the call to ``super(theName)`` in ``Employee`` below runs the code
in the ``Person`` constructor that takes a ``String`` argument which presumably
initializes an instance variable in the ``Person`` class to hold the name.

.. code-block:: java

    public class Employee extends Person
    {
        public Employee(String theName)
        {
            super(theName); // calls Person(String) constructor
        }
    }

|CodingEx| **Coding Exercise**

.. activecode:: InitPrivateInherited
  :language: java
  :autograde: unittest

  Try creating another Employee object in the main method that passes in your
  name and then use the get methods to print it out. Which class constructor
  sets the name? Which class constructor sets the id?

  ~~~~
  class Person
  {
      private String name;

      public Person(String theName)
      {
          this.name = theName;
      }

      public String getName()
      {
          return name;
      }

      public boolean setName(String theNewName)
      {
          if (theNewName != null)
          {
              this.name = theNewName;
              return true;
          }
          return false;
      }
  }

  public class Employee extends Person
  {
      private int id;
      public static int nextId = 1;

      public Employee(String theName)
      {
          super(theName);
          id = nextId;
          nextId++;
      }

      public int getId()
      {
          return id;
      }

      public static void main(String[] args)
      {
          Employee emp = new Employee("Dani");
          System.out.println(emp.getName());
          System.out.println(emp.getId());
      }
  }

  ====
  import static org.junit.Assert.*;

  import org.junit.*;

  import java.io.*;

  public class RunestoneTests extends CodeTestHelper
  {
      public RunestoneTests()
      {
          super("Employee");
          Employee.nextId = 1;
      }

      @Test
      public void test1()
      {
          String output = getMethodOutput("main");
          String expect = "Dani\n#";

          boolean passed = getResults(expect, output, "Running main");
          Employee.nextId = 1;
          assertTrue(passed);
      }

      @Test
      public void test2()
      {
          String code = getCode();
          String target = "Employee * = new Employee";

          int num = countOccurencesRegex(code, target);

          boolean passed = num >= 2;

          getResults("2+", "" + num, "Creating new Employee()", passed);
          Employee.nextId = 1;
          assertTrue(passed);
      }
  }

Chain of initialization
-----------------------

As you may recall from Unit 5, if you do not write a constructor your class will
automatically get a default no-argument constructor. In addition to initializing
all instance variables to the default value for their type, the default
no-argument constructor calls the superclass's no-argument constructor.

This means you can only write a class with a default no-argument constructor if
its superclass has a no-argument constructor. If you are extending a class
without a no-argument constructor but you want your class to have a no-argument
constructor you will need to explicitly write one and use ``super`` to call an
existing constructor on the superclass with appropriate arguments.

However it is created, explicitly or implicitly, the chain of ``super`` calls
from each subclass to its superclass ends in the no-argument constructor of
``java.lang.Object``. This is a special class defined in Java which is the superclass
of any class that doesn’t explicitly ``extend`` some other class and the only
class with no superclass and thus no ``super`` constructor that needs to be
called.

Once the chain reaches the top, at ``Object`` it starts unwinding, with first
the ``Object`` constructor code running, then the constructor from its subclass,
and so on until finally the constructor of the actual class being constructed
runs. At that point any inherited instance variables will have been initialized
so the constructor can safely call inherited methods that depend on those
variables.

|Exercise| **Check your understanding**

.. You can step through this code in the Java Visualizer by clicking on the following link `Constructor Test1 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=class+Point2D+%7B%0A+++%0A+++public+int+x%3B%0A+++public+int+y%3B%0A%0A+++public+Point2D()+%7B%7D%0A%0A+++public+Point2D(int+x,int+y)+%7B%0A++++++this.x+%3D+x%3B%0A++++++this.y+%3D+y%3B%0A+++%7D%0A+++%0A+++%0A++++++++%0A++++++++%0A+++++%0A%7D%0A%0Apublic+class+Point3D+extends+Point2D%0A%7B%0A+++public+int+z%3B%0A+++%0A+++//+I.%0A+++public+Point3D()+%7B%7D%3B%0A+++%0A+++//+II.%0A+++//public+Point3D(int+x,+int+y,+int+z)%0A+++//%7B%0A+++//++++super(x,y)%3B%0A+++//++++this.z+%3D+z%3B%0A+++//%7D%0A+++%0A+++//+III.%0A+++//public+Point3D(int+x,+int+y)%0A+++//%7B%0A+++//++++this.x+%3D+x%3B%0A+++//++++this.y+%3D+y%3B%0A+++//++++this.z+%3D+0%3B%0A+++//%7D%0A+++%0A+++public+static+void+main(String%5B%5D+args)%0A+++%7B%0A++++++Point3D+p3+%3D+new+Point3D()%3B%0A++++++//Point3D+p3+%3D+new+Point3D(3,+5,+8)%3B%0A++++++//Point3D+p3+%3D+new+Point3D(2,+4)%3B%0A+++%7D%0A+++%0A%7D&mode=display&curInstr=0>`_.



.. mchoice:: qoo_9
   :practice: T
   :answer_a: I only
   :answer_b: I and III
   :answer_c: II only
   :answer_d: III only
   :correct: b
   :feedback_a: I is okay but III is also okay.
   :feedback_b: The MPoint variables are private and they can not be directly accessed in NamedPoint. You can use super as the first line in a constructor to initialize them. If you don't use super as the first line in a constructor one will be put there by the compiler that will call the parent's no argument constructor.
   :feedback_c: II is invalid. Children do not have direct access to private fields. You can use super in a constructor to initialize these by calling the parent's constructor with the same parameter list.
   :feedback_d: I is also okay

   Given the class definitions of ``MPoint`` and ``NamedPoint`` below, which of
   the constructors that follow (labeled I, II, and III) would be valid in the
   ``NamedPoint`` class?

   .. code-block:: java


      class MPoint
      {
         private int myX; // coordinates
         private int myY;

         public MPoint( )
         {
            myX = 0;
            myY = 0;
         }

         public MPoint(int a, int b)
         {
            myX = a;
            myY = b;
         }

         // ... other methods not shown

      }

      public class NamedPoint extends MPoint
      {
         private String myName;
         // constructors go here
         // ... other methods not shown
      }

      //  Proposed constructors for this class:
      I.   public NamedPoint()
           {
              myName = "";
           }
      II.  public NamedPoint(int d1, int d2, String name)
           {
              myX = d1;
              myY = d2;
              myName = name;
           }
      III. public NamedPoint(int d1, int d2, String name)
           {
              super(d1, d2);
              myName = name;
           }

You can step through this code using the Java Visualizer by clicking the following link `Named Point <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=class+MPoint%0A%7B%0A+++private+int+myX%3B+//+coordinates%0A+++private+int+myY%3B%0A%0A+++public+MPoint(+)%0A+++%7B%0A++++++myX+%3D+0%3B%0A++++++myY+%3D+0%3B%0A+++%7D%0A%0A+++public+MPoint(int+a,+int+b)%0A+++%7B%0A++++++myX+%3D+a%3B%0A++++++myY+%3D+b%3B%0A+++%7D%0A%0A+++//+...+other+methods+not+shown%0A%0A%7D%0A++++++%0Apublic+class+NamedPoint+extends+MPoint%0A%7B%0A+++private+String+myName%3B%0A+++%0A+++//+constructors+go+here%0A+++//+I.%0A+++public+NamedPoint()%0A+++%7B%0A++++++myName+%3D+%22%22%3B%0A+++%7D%0A+++%0A+++//+II.%0A+++//+public+NamedPoint(int+d1,+int+d2,+String+name)%0A+++//+%7B%0A+++//++++myX+%3D+d1%3B%0A+++//++++myY+%3D+d2%3B%0A+++//++++myName+%3D+name%3B%0A+++//+%7D%0A+++%0A+++//+III.%0A+++//+public+NamedPoint(int+d1,+int+d2,+String+name)%0A+++//+%7B%0A+++//++++super(d1,+d2)%3B%0A+++//++++myName+%3D+name%3B%0A+++//+%7D%0A+++%0A+++public+static+void+main(String%5B%5D+args)%0A+++%7B%0A++++++NamedPoint+nPt+%3D+new+NamedPoint()%3B%0A++++++//+NamedPoint+nPt+%3D+new+NamedPoint(3,+2,+%22home%22)%3B%0A++++++//+NamedPoint+nPt+%3D+new+NamedPoint(5,+4,+%22work%22)%3B%0A+++%7D%0A%0A%7D&mode=display&curInstr=0>`_.


|Groupwork| Programming Challenge : Square is-a Rectangle
----------------------------------------------------------

In this challenge, you are giving a class called ``Rectangle`` that has two
instance variables, ``length`` and ``width``, a constructor that initializes
them, and a method called ``draw`` that uses nested loops to draw a ``length`` x
``width`` rectangle of stars. Try it out below.

You will write a new class called ``Square`` that inherits from ``Rectangle``.
Is a square a rectangle? Yes! A square is a rectangle where the length and width
are equal. ``Square`` will inherit ``length``, ``width``, and the ``draw``
method. You will write ``Square`` constructors that will call the ``Rectangle``
constructors.

1. Make the class ``Square`` below inherit from ``Rectangle``
2. Add a ``Square`` constructor with 1 argument for a side that calls ``Rectangle``\ ‘s constructor with 2 arguments using ``super``.
3. Uncomment the objects in the ``main`` method to test drawing the squares.
4. Add an ``area`` method to ``Rectangle`` that computes the area of the rectangle. Does it work for ``Square``\ s too? Test it.
5. Add another subclass called ``LongRectangle`` which inherits from ``Rectangle`` but has the additional condition that the length is always 2 x the width. Write constructors for it and test it out. Do not make it public (because only 1 class per file can be public).

.. activecode:: challenge-9-2-Square-Rectangle
  :language: java
  :autograde: unittest

  1. Make the class ``Square`` below inherit from ``Rectangle``. 
  2. Add a ``Square`` constructor with 1 argument for a side that calls ``Rectangle``\ ‘s constructor with 2 arguments using ``super``.
  3. Uncomment the objects in the ``main`` method to test drawing the squares.
  4. Add an ``area`` method to ``Rectangle`` that computes the area of the rectangle. Does it work for ``Square``\ s too? Test it.
  5. Add another subclass called ``LongRectangle`` which inherits from ``Rectangle`` but has the additional condition that the length is always 2 x the width. Write constructors for it and test it out. Do not make it public (because only 1 class per file can be public).
  ~~~~
  class Rectangle
  {
      private int length;
      private int width;

      public Rectangle(int l, int w)
      {
          length = l;
          width = w;
      }

      public void draw()
      {
          for (int i = 0; i < length; i++)
          {
              for (int j = 0; j < width; j++)
              {
                  System.out.print("* ");
              }
              System.out.println();
          }
          System.out.println();
      }

      // 4a. Add an area method to compute the area of the rectangle.

  }

  // 1. Make the class square inherit from Rectangle
  public class Square
  {

      // 2. Add a Square constructor with 1 argument for a side

      public static void main(String[] args)
      {
          Rectangle r = new Rectangle(3, 5);
          r.draw();
          // 3. Uncomment these to test
          // Square s1 = new Square(1);
          // s1.draw();
          // Square s = new Square(3);
          // s.draw();

          // 4b. Add some tests for your area method after you write it
      }
  }

    // 5. Define the LongRectangle class here
    //    Do not make it public because only 1 class with main can be public in 1 file.

  ====
  import static org.junit.Assert.*;

  import org.junit.*;

  import java.io.*;

  public class RunestoneTests extends CodeTestHelper
  {
      public RunestoneTests()
      {
          super("Square");
      }

      @Test
      public void test1()
      {
          String output = getMethodOutput("main").trim();
          String expect = "* * * * *\n* * * * * \n* * * * * \n\n* \n\n* * * \n* * * \n* * *";

          boolean passed = getResults(expect, output, "Running main");
          assertTrue(passed);
      }

      @Test
      public void test2()
      {
          String target = "extends Rectangle";

          boolean passed = checkCodeContains(target);
          assertTrue(passed);
      }

      @Test
      public void test4()
      {
          String output = checkConstructor(new Object[] {1});
          String expect = "pass";

          boolean passed =
                  getResults(expect, output, "Checking Square constructor with 1 argument (int)");
          assertTrue(passed);
      }

      @Test
      public void test5()
      {
          String target = "area";

          boolean passed = checkCodeContains(target);
          assertTrue(passed);
      }

      @Test
      public void test6()
      {
          String target = "LongRectangle extends Rectangle";

          boolean passed = checkCodeContains(target);
          assertTrue(passed);
      }
  }

.. |repl.it Java Swing code| raw:: html

   <a href="https://firewalledreplit.com/@BerylHoffman/Shapes" style="text-decoration:underline" target="_blank">repl.it Java Swing code</a>

.. |files here| raw:: html

   <a href="https://www.dropbox.com/s/2lmkd1m2sfh3xqc/ShapeExample.zip" target="_blank" style="text-decoration:underline">files here</a>

For a more complex example of drawing shapes, try running this |repl.it Java
Swing code| (or download the |files here| by clicking on Download on the top
right and use the files in your own Java IDE). When the yellow panel comes up,
click on either the Rectangle or the Oval button and then click and drag
somewhere on the yellow panel to draw that shape. Take a look at the
Rectangle.java and Oval.java files to see how they inherit from the Shape class
in Shape.java. Java Swing graphical programming is not covered on the AP CSA
exam, but it is a lot of fun!

Summary
---------

- Subclasses do not have access to the ``private`` instance variables in a
  superclass that they extend.

- Constructors are not inherited.

- A superclass constructor must be called from the first line of a subclass
  constructor by using the keyword ``super`` and passing appropriate parameters.
  If there is no explicit call to ``super`` an implicit call to ``super()`` will
  be added by the Java compiler.

- The actual parameters passed in the call to ``super`` provide values that the
  superclass constructor can use to initialize the object’s instance variables.

- Regardless of whether the superclass constructor is called implicitly or
  explicitly, the process of calling superclass constructors continues until the
  ``Object`` constructor is called. At this point, all of the constructors
  within the hierarchy execute beginning with the ``Object`` constructor.
