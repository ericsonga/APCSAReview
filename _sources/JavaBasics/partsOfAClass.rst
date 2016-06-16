.. qnum::
   :prefix: 2-7-
   :start: 1
   
Parts of a Java Class
-----------------------

A Java class defines what objects of the class know (fields) and can do (methods).  The class also defines how to initialize the fields when the object is first created (constructors).


Fields - Instance Variables
==============================

..	index::
	pair: class; field


**Fields** hold the data for an object.  Fields record what an object needs to know to do work in the program.  Fields are also called **instance variables** or **object variables** or **properties**. 

All fields on the AP CS A exam should be declared ``private``.  Think of ``private`` as like your diary.  Only you should have direct access to it.  In this case ``private`` means that only the code in this class can directly access the field values.

.. note::
 
   Fields are declared right after the class declaration.  They start with ``private`` then the *type* of the field and then a *name* for the field.

The ``Person`` class declares two fields: name and cell.  Name is the person's name and cell is their cell phone number.  These are both things that you might need to know about
a person.  

.. code-block:: java

     /// fields ////////////////
     private String name;
     private String cell;
     
.. clickablearea:: name_fields
    :question: Click on all the field declarations in the following class
    :iscode:
    :feedback: Remember, fields are private and are declared after the class declaration.

    :click-incorrect:public class Name {:endclick:
    
        :click-correct:private String first;:endclick:
        :click-correct:private String last;:endclick:
        
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
        

Constructors
==============================

..	index::
	pair: class; constructor
	
**Constructors** don't actually construct the object.  The class makes the object and then executes a constructor to initialize the values of the fields (instance variables).  You will only work with ``public`` constructors on the exam.  

.. note::

   Constructors are specified after the fields and before any methods.  They typically start with ``public`` and then the *name* of the class.  They can take data (specified in parentheses) which is used to initialize the fields. 
   
The ``Person`` class has one constructor that takes two values: a string that is the name and a string that is the cell phone number.  To find a constructor in a class look for something with the same name as the class and no return type.  

.. code-block:: java

     /////// constructors ////////////////////
     public Person(String theName, String theCell)
     {
       this.name = theName;
       this.cell = theCell;
     }
     
.. clickablearea:: name_constructor
    :question: Click on all the parts of the contsructor
    :iscode:
    :feedback: Constructors are public and have the same name as the class.  

    :click-incorrect:public class Name {:endclick:
    
        :click-incorrect:private String first;:endclick:
        :click-incorrect:private String last;:endclick:
        
        :click-correct:public Name(String theFirst, String theLast):endclick:
            :click-correct:first = theFirst;:endclick:
            :click-correct:last = theLast;:endclick:
         :click-correct:}:endclick:
         
         :click-incorrect:public void setFirst(String theFirst):endclick:
            :click-incorrect:first = theFirst;:endclick:
         :click-incorrect:}:endclick:
         
         :click-incorrect:public void setLast(String theLast):endclick:
            :click-incorrect:first = theLast;:endclick:
         :click-incorrect:}:endclick:
         
    :click-incorrect:}:endclick:  
  

Methods
==============================

..	index::
	pair: class; method
	
**Methods** define what an object can do or the behavior of the object.  

Most methods you work with on the exam will be ``public``.  

.. note::

   Methods define what the object can do.  Methods are specified after the constructors.  They typically start with ``public`` then a type, then the name of the method.  They can take data as input which is specified in parentheses.  

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
                                
.. clickablearea:: name_methods
    :question: Click on all the parts of the methods in the following class
    :iscode:
    :feedback: Methods follow the constructor.  They include a return type in case they returns something from the method.

    :click-incorrect:public class Name {:endclick:
    
        :click-incorrect:private String first;:endclick:
        :click-incorrect:private String last;:endclick:
        
        :click-incorrect:public Name(String theFirst, String theLast):endclick:
            :click-incorrect:first = theFirst;:endclick:
            :click-incorrect:last = theLast;:endclick:
         :click-incorrect:}:endclick:
         
         :click-correct:public void setFirst(String theFirst):endclick:
            :click-correct:first = theFirst;:endclick:
         :click-correct:}:endclick:
         
         :click-correct:public void setLast(String theLast):endclick:
            :click-correct:first = theLast;:endclick:
         :click-correct:}:endclick:
         
    :click-incorrect:}:endclick: 
  

