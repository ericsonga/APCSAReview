.. qnum::
   :prefix: 10-6-
   :start: 1

Inheritance and Constructors
============================

..	index::
    pair: constructor; super

How do you initialize inherited fields if you don't have direct access to them in the subclass?  In Java you can put a call to the parent constructor as the first line in a subclass constructor to initialize inherited fields. 

.. code-block:: java 

  public class Person 
  {
  	private String name; 
  	
  	public Person (String aName)
  	{
  	   this.setName(aName);
  	}
  	
  	public String getName()
  	{	
  	   return name;
  	}
  	public boolean setName(String theNewName) 
  	{
  	    // only allow a name with alphabetic characters and spaces
  		if (Pattern.matches("([a-zA-Z]+ +)*[a-zA-Z]+",theNewName)
  		{
  		   name = theNewName;
  		   return true;
  		}
  		return false;
  	}
  }
  
  public class Employee extends Person
  {
  	private int id; 
  	
  	public Employee(String theName)
  	{
  	   super(theName);
  	}
  	
  	public int getId() 
  	{
  		return id;
  	}
  }
  
The ``super(theName)`` in the ``Employee`` constructor will call the constructor that takes a ``String`` object in the ``Person`` class to set the name.

If a class has no constructor in Java, the compiler will add a no-argument constructor.  A no-argument constructor is one that doesn't have any parameters.  

.. code-block:: java

  public Person() 
  
The code above is a no-argument constructor for the ``Person`` class.  Remember that constructors don't have a return type and the constructor name must match the class name.

If a subclass has no call to 
a superclass constructor using ``super`` as the first line in a subclass constructor then the compiler will automatically add a ``super()`` call as the first line in a constructor.  So, be sure to provide no-argument constructors in parent classes or be sure to use an explicit call to ``super`` as the first line in the constructors of subclasses.

.. mchoicemf:: qoo_8
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
   
      public class Point2D {
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
           
.. mchoicemf:: qoo_9
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
   
      
      public class Point
      {
         private int myX; // coordinates
         private int myY;

         public Point( )
         {
            myX = 0;
            myY = 0;
         }

         public Point(int a, int b)
         {
            myX = a;
            myY = b;
         }

         // ... other methods not shown

      }
      
      public class NamedPoint extends Point
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

       
