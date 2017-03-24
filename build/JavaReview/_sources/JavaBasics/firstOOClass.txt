.. qnum::
   :prefix: 2-5-
   :start: 1
   
.. |runbutton| image:: Figures/run-button.png
    :height: 20px
    :align: top
    :alt: run button

An Object Oriented Class Example
----------------------------------
   
Let's create a class where each object of the class represents a person.  Every person has a name and a cell phone number which we will store in String variables.  A string is a sequence of characters like in "Hello".  We can store the name and cell phone number in **fields** in a Person object.  We provide **methods** to get and set the data.  We provide a **constructor** to initialize the data when the object is first created.

Go ahead and click the |runbutton| button to see what gets printed.  

.. activecode:: lcfc2
   :language: java
   :tour_1: "Introductory Tour"; 1-2: person_line1-2; 4-5: person_line4-5; 8-12: person_line8-12; 15-18: person_line15-18; 19-22: person_line19-22; 24-27: person_line24-27; 29-32: person_line29-32; 34-35: person_line34-35; 39-45: person_line39-45; 47: person_line47;

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
   
.. note::

   A class declaration typically starts with ``public`` then ``class`` then the name of the class.  The body of the class is defined inside a ``{`` and a ``}``.  
   
**Check Your Understanding**

A person's name can actually be broken into parts.  We can create a name class to handle this.

.. clickablearea:: name_class
    :question: Click on the class declaration (not the body of the class) in the following class definition.  Then click the "Check Me" button to see if you are correct or not.
    :iscode:
    :feedback: The class declaration starts the class.  It contains the keyword class in it.

    :click-correct:public class Name {:endclick:
    
        :click-incorrect:private String first;:endclick:
        :click-incorrect:private String last;:endclick:
        
        :click-incorrect:public Name(String theFirst, String theLast):endclick:
            :click-incorrect:first = theFirst;:endclick:
            :click-incorrect:last = theLast;:endclick:
         :click-incorrect:}:endclick:
         
         :click-incorrect:public void setFirst(String theFirst):endclick:
            :click-incorrect:first = theFirst;:endclick:
         :click-incorrect:}:endclick:
         
         :click-incorrect:public void setLast(String theLast):endclick:
            :click-incorrect:first = theLast;:endclick:
         :click-incorrect:}:endclick:
         
    :click-incorrect:}:endclick: 

   
.. clickablearea:: phone_class
    :question: Click on the class declaration (not the body of the class) in the following class definition.  Then click the "Check Me" button to see if you are correct or not.
    :iscode:
    :feedback: The class declaration starts the class.  It contains the keyword class in it.

    :click-correct:public class PhoneNumber {:endclick:
    
        :click-incorrect:private String country;:endclick:
        :click-incorrect:private String areaCode:endclick:
        :click-incorrect:private String number:endclick:
        
        :click-incorrect:public PhoneNumber(String theCountry, theArea, theNumber):endclick:
            :click-incorrect:country = theCountry;:endclick:
            :click-incorrect:areaCode = theArea;:endclick:
            :click-incorrect:number = theNumber;:endclick:
         :click-incorrect:}:endclick:
         
         :click-incorrect:public String getNumber() {:endclick:
            :click-incorrect:return number;:endclick:
         
         
         :click-incorrect:public void setNumber(String theNumber):endclick:
            :click-incorrect:number = theNumber;
         :click-incorrect:}:endclick:
         
    :click-incorrect:}:endclick: 
