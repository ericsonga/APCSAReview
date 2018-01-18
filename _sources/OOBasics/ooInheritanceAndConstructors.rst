.. qnum::
   :prefix: 10-9-
   :start: 1

Inheritance and Constructors
============================

..	index::
    pair: constructor; super

How do you initialize inherited private fields if you don't have direct access to them in the subclass?  In Java you can put a call to the parent constructor using the keyword ``super`` as the first line in a subclass constructor to initialize inherited fields.  See the constructor in Employee below for an example.

.. activecode:: InitInherited
  :language: java

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
    
     private static int nextId = 1;
     private int id; 
  	
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
        Employee emp = new Employee("Mark");
        System.out.println(emp.getName());
        System.out.println(emp.getId());
     }
  }

  
The ``super(theName)`` in the ``Employee`` constructor will call the constructor that takes a ``String`` object in the ``Person`` class to set the name.

If a class has no constructor in Java, the compiler will add a no-argument constructor.  A no-argument constructor is one that doesn't have any parameters.  

.. code-block:: java

  public Person() 
  
The code above is a no-argument constructor for the ``Person`` class.  Remember that constructors don't have a return type and the constructor name must match the class name.

If a subclass has no call to 
a superclass constructor using ``super`` as the first line in a subclass constructor then the compiler will automatically add a ``super()`` call as the first line in a constructor.  So, be sure to provide no-argument constructors in parent classes or be sure to use an explicit call to ``super`` as the first line in the constructors of subclasses.

.. mchoice:: qoo_8
   :answer_a: II only
   :answer_b: III only 
   :answer_c: I and II only
   :answer_d: I, II, and III
   :correct: d
   :feedback_a: I is true because Point2D does have a no-arg constructor. II is true because Point2D does have a constructor that takes x and y. III is true because Point2D does have a no-arg constructor which will be called before the first line of code is executed in this constructor. The fields x and y are public in Point2D and thus can be directly accessed by all classes.
   :feedback_b: Point2D does have a constructor that takes an x and y value so this is okay. Also the call to super is the first line of code in the child constructor as required. However, both I and III are okay as well. 
   :feedback_c: The x and y values in Point2D are public and so can be directly accessed by all classes including subclasses. Also there is a no-arg constructor in Point2D so the super no-arg constructor will be called before the first line of code in this constructor.
   :feedback_d: I is true because Point2D does have a no-arg constructor. II is true because Point2D does have a constructor that takes x and y. III is true because Point2D does have a no-arg constructor which will be called before the first line of code is executed in this constructor. The fields x and y are public in Point2D and thus can be directly accessed by all classes.
    
   Given the class definitions of Point2D and Point3D below, which of the constructors that follow (labeled I, II, and III) would be valid in the Point3D class?

   .. code-block:: java 
   
      class Point2D {
         public int x;
         public int y;

         public Point2D() {}

         public Point2D(int x,int y) {
           this.x = x;
           this.y = y;
         }
         // other methods
      }

      public class Point3D extends Point2D
      {
         public int z;
   
         // other code
      }
      
      // possible constructors for Point3D
      I.  public Point3D() {}
      II. public Point3D(int x, int y, int z) 
          {
             super(x,y);
             this.z = z;
          }
      III. public Point3D(int x, int y)
           {
              this.x = x;
              this.y = y;
              this.z = 0;
           }
           
You can step through this code in the Java Visualizer by clicking on the following link `Constructor Test1 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=class+Point2D+%7B%0A+++%0A+++public+int+x%3B%0A+++public+int+y%3B%0A%0A+++public+Point2D()+%7B%7D%0A%0A+++public+Point2D(int+x,int+y)+%7B%0A++++++this.x+%3D+x%3B%0A++++++this.y+%3D+y%3B%0A+++%7D%0A+++%0A+++%0A++++++++%0A++++++++%0A+++++%0A%7D%0A%0Apublic+class+Point3D+extends+Point2D%0A%7B%0A+++public+int+z%3B%0A+++%0A+++//+I.%0A+++public+Point3D()+%7B%7D%3B%0A+++%0A+++//+II.%0A+++//public+Point3D(int+x,+int+y,+int+z)%0A+++//%7B%0A+++//++++super(x,y)%3B%0A+++//++++this.z+%3D+z%3B%0A+++//%7D%0A+++%0A+++//+III.%0A+++//public+Point3D(int+x,+int+y)%0A+++//%7B%0A+++//++++this.x+%3D+x%3B%0A+++//++++this.y+%3D+y%3B%0A+++//++++this.z+%3D+0%3B%0A+++//%7D%0A+++%0A+++public+static+void+main(String%5B%5D+args)%0A+++%7B%0A++++++Point3D+p3+%3D+new+Point3D()%3B%0A++++++//Point3D+p3+%3D+new+Point3D(3,+5,+8)%3B%0A++++++//Point3D+p3+%3D+new+Point3D(2,+4)%3B%0A+++%7D%0A+++%0A%7D&mode=display&curInstr=0>`_.
           
.. mchoice:: qoo_9
   :answer_a: I only
   :answer_b: I and III
   :answer_c: II only 
   :answer_d: III only
   :correct: b
   :feedback_a: I is okay but III is also okay.
   :feedback_b: NamedPoint will inherit from Point all fields but the fields are private and they can not be directly accessed in NamedPoint. You can use super as the first line in a constructor to initialize inherited fields. You can also set your own fields in a constructor. If you don't use super as the first line in a constructor one will be put there by the compiler that will call the parent's no argument constructor.
   :feedback_c: II is invalid. Children inherit all of the fields from a parent but do not have direct access to private fields. You can use super in a constructor to initialize inherited fields by calling the parent's constructor with the same parameter list.
   :feedback_d: I is also okay
    
   Given the class definitions of Point and NamedPoint below, which of the constructors that follow (labeled I, II, and III) would be valid in the NamedPoint class?

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
       
