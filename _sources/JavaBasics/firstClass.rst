.. qnum::
   :prefix: 2-2-
   :start: 1

First Example Classes
==============================

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
   
The following is an example class in Java.  A class in Java can have fields (data or properties), constructors (ways to initialize the fields), methods (behaviors), and a main method for testing the class. It does 
not have to have *any* of these items.  The following would compile, but what do you think would happen if you tried to have a computer execute it?
   
.. code-block:: java 

   public class FirstClass
   {
   }
   

The class ``FirstClass`` doesn't have anything inside of it, so the computer wouldn't know what to do if we asked it to execute the class.    

When you ask the Java run-time to *run* a class (java ClassName) it will start execution in the ``main`` method.  Click on the *Run* button to have the computer execute the ``main`` method in the following class.

.. activecode:: lcfc1
   :language: java

   public class SecondClass
   {
      public static void main(String[] args)
      {
         System.out.println("Hi there!");
      }
   }
   
The class ``SecondClass`` isn't very object-oriented.  The only thing in it is the ``main`` method which is a **class method** (one that works on the class), not an **object method** (one that works on the current object).  Let's create a class where each object of the class represents a person.  Every person has a name and probably has a cell phone number.  We can store this data in **fields** in a Person object.  We provide **methods** to get and set the data.  We provide a **constructor** to initialize the data when the object is first created.

Go ahead and click the *Run* button to see what gets printed.

.. activecode:: lcfc2
   :language: java

   public class Person
   {
     /// fields ////////////////
     private String name;
     private String cell;
  
     /////// constructors ////////////////////
     public Person(String theName, String theCell)
     {
       this.name = theName;
       this.cell = theCell;
     }
  
     //////////// methods ///////////////////////
     public String getName() 
     { 	
     	return this.name; 
     }
     public void setName(String theName) 
     { 
     	this.name = theName; 
     }
  
     public String getCell() 
     {  
     	return this.cell; 
     }
     
     public void setCell(String theCell) 
     { 
     	this.cell = theCell; 
     }
  
     public String toString() { return "name: " + this.name + 
                                ", cell: " + this.cell; }
  
  
     //////////// main for testing //////////////
     public static void main(String[] args)
     {
       Person p1 = new Person("Deja", "555 132-3253");
       System.out.println(p1);
       Person p2 = new Person("Avery", "555 132-6632"); 
       System.out.println(p2);
     }
  
   }
   
Running a Java Program
==============================

..  index::
	pair: Java; run program
	pair: Java; main method
   
When you execute a Java program, you give it the name of the class that has the ``main`` method to execute and execution will start there.  A ``main`` method should create objects
that do the work in an object-oriented program and then have the objects do the work. The following is the ``main`` method for the Person class.

.. code-block:: java

     //////////// main for testing //////////////
     public static void main(String[] args)
     {
       Person p1 = new Person("Deja", "555 132-3253");
       System.out.println(p1);
       Person p2 = new Person("Avery", "555 132-6632"); 
       System.out.println(p2);
     }

Some books show having a main method in another class which is often called a runner class, but this is not required.  
I like to have a ``main`` method in each of my classes that tests the methods in that class.  The ``main`` method in the ``Person`` class creates two ``Person`` objects and prints their values out using the ``toString`` method.  The ``toString`` method is what is called on an object when you execute ``System.out.println(object)``. 

Try changing the code in the ``main`` method so that you create a Person object with your data (your name and cell phone number).  Click the *Run* button to test the program.

Fields - Instance Variables
==============================

..	index::
	pair: class; field


**Fields** hold the data for an object.  Fields record what an object needs to know to do work in the program.  Fields are also called **instance variables** or **object variables** or **properties**. 

All fields on the AP CS A exam should be declared ``private``.  Think of ``private`` as like your diary.  Only you should have direct access to it.  In this case ``private`` means that only the code in this class can directly access the field values.

The ``Person`` class declares two fields: name and cell.  Name is the person's name and cell is their cell phone number.  These are both things that you might need to know about
a person.  

.. code-block:: java

     /// fields ////////////////
     private String name;
     private String cell;

Constructors
==============================

..	index::
	pair: class; constructor
	
**Constructors** don't actually construct the object.  The class makes the object and then executes a constructor to initialize the values of the fields (instance variables).  You will only work with ``public`` constructors on the exam.  

The ``Person`` class has one constructor that takes two values: a string that is the name and a string that is the cell phone number.  To find a constructor in a class look for something with the same name as the class and no return type.  

.. code-block:: java

     /////// constructors ////////////////////
     public Person(String theName, String theCell)
     {
       this.name = theName;
       this.cell = theCell;
     }
  

Methods
==============================

..	index::
	pair: class; method
	
**Methods** define what an object can do or the behavior of the object.  

Most methods you work with on the exam will be ``public``.  

The ``Person`` class has methods for getting the name and cell phone and for setting the cell phone.  Methods that get information from an object are called **getters** or **accessors**.  Methods that set field values are called **setters** or **mutators**.  

.. code-block:: java

     //////////// methods ///////////////////////
     public String getName() 
     { 	
     	return this.name; 
     }
     public void setName(String theName) 
     { 
     	this.name = theName; 
     }
  
     public String getCell() 
     {  
     	return this.cell; 
     }
     
     public void setCell(String theCell) 
     { 
     	this.cell = theCell; 
     }
  
     public String toString() { return "name: " + this.name + ", 
                                cell: " + this.cell; }
  

