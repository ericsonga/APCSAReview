..	index::
	pair: class; constructor
    
Creating and Storing Objects: Constructors
------------------------------------------

A Java class defines what objects of the class know (fields) and can do (methods).  The class also defines how to initialize the fields when the object is first created using a special method called the **constructor**.


Constructors always have the same name as the class and are used with the keyword new. An object is created using the keyword new followed by a call to a constructor. For example, here's how we used the Turtle constructor to create a new Turtle.


.. code-block:: java 

    // To create a new object, write:
    // ClassName variableName = new ConstructorName(arguments);  
    Turtle yourTurtleName = new Turtle(world);


There can be more than one constructor defined in a class. If the constructor takes no arguments (nothing inside the parentheses following the name of the constructor), it is called the **Default Constructor** and it will usually set the fields of the object to default values. 

For example, there is a class called GregorianCalendar in Java that can be used for dates and times. You can use this class by adding the line "import java.util.GregorianCalendar;" which will bring in this class library. Then, you can create an object variable called today that uses the default constructor to initialize it to the current date and time. Run the code below to see what it does. Note that the code below is sent to New Zealand to run, so it will return the current date and time in New Zealand!

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

Exercise: Add another GregorianCalendar object to the program above for your birthdate and have it print it out! 
