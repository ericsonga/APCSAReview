.. qnum::
   :prefix: 2-6-
   :start: 1
   
.. |runbutton| image:: Figures/run-button.png
    :height: 20px
    :align: top
    :alt: run button

Running a Java Program
==============================

..  index::
	pair: Java; run program
	pair: Java; main method
   
When you click the |runbutton| button Java starts execution in the ``main`` method as shown in the code below (``public static void main(String[] args)``).  The body of the main method is all the code between the first ``{`` and the last ``}``.  Every class in Java *can* have a main method.  

If you are executing a Java program using the command line tools you will type ``java ClassName`` and execution will start in the specified class's ``main`` method. 

.. note::

   A ``main`` method should create the objects that will do the work in an object-oriented program and then ask the objects to do the work. 
   
The following is the ``main`` method for the Person class.  It shows two variables (``p1`` and ``p2``) of type Person being created and each of the variables refers to a new Person object. Each new Person object's name and phone number are set to the passed values (``new Person("Deja", "555 132-3253")``).  Then each object's ``toString`` method is called to output information about the object.  The ``toString`` method is called when you try to print the value of an object using ``System.out.println(object);``. 

.. code-block:: java

     //////////// main for testing //////////////
     public static void main(String[] args)
     {
       Person p1 = new Person("Deja", "555 132-3253");
       System.out.println(p1);
       Person p2 = new Person("Avery", "555 132-6632"); 
       System.out.println(p2);
     }

.. note::

   Some books show having a main method in another class which is often called a runner class, but this is not required. 
    
I like to have a ``main`` method in each of my classes that tests the methods in that class.  The ``main`` method in the ``Person`` class creates two ``Person`` objects and prints their values out using the ``toString`` method.  The ``toString`` method is what is called on an object when you execute ``System.out.println(object)``. 


..  index::
	single: static
	single: void
	pair: keyword; static
	pair: keyword; void
	
.. note::

   The ``main`` method must be declared as ``public static void main(String[] args)``.  The only part of this that you can change is the ``args``.  You can use a different name instead if you wish.  The ``public`` keyword is necessary since this method needs to be executed from outside the current class.  The ``static`` keyword means that you can execute this method on the class (not on an object), which is important since no objects of this class have been created yet when the main method starts.  The ``void`` keyword says that this method doesn't return anything.  The ``(String[] args)`` says that this method can take some information when you execute it which will be passed to the method as an array of strings called args.  An array is like a list and you will learn more about arrays in a later chapter.  
   
Try changing the code in the main method below (``public static void main(String[] args)`` that creates as new Person object ``new Person("Deja", "555 132-3253")`` to create an object to represent you and one of your friends (but don't use your actual phone numbers).  Click the |runbutton| button to test your code.

.. activecode:: personMain2
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
   
