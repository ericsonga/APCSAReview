.. qnum::
   :prefix: jr-1-5-
   :start: 1

First Example Classes
==============================
The following is an example class in Java.  A class in Java can have fields (data or properties), constructors (ways to initialize the fields), methods (behaviors), and a main method for testing the class. It does 
not have to have any of these items.  

Let's take a closer look at what is required for a class.  
All classes on the Advanced Placement Computer Science A exam will be public.  

::

   public class Person
   {
     /// fields ////////////////
     private String name;
     private int year;
  
     /////// constructors ////////////////////
     public Person(String theName, int theYear)
     {
       this.name = theName;
       this.year = theYear;
     }
  
     //////////// methods ///////////////////////
     public String getName() { return this.name; }
     public void setName(String theName) { this.name = theName; }
  
     public int getYear() { return this.year; }
     public void setYear(int theYear) { this.year = theYear; }
  
     public String toString() { return "name: " + this.name + ", year: " + this.year; }
  
  
     //////////// main for testing //////////////
     public static void main(String[] args)
     {
       Person p1 = new Person("Deja", 11);
       System.out.println(p1);
       Person p2 = new Person("Avery", 12); 
       System.out.println(p2);
     }
  
   }
   
When you execute a Java program you give it the name of the class that has the main method to execute and execution will start there.  Main methods typically create objects
that do the work in an object-oriented program and then have the objects do the work. 