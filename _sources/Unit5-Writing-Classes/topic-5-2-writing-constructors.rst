.. qnum::
   :prefix: 5-2-
   :start: 1
   
.. |CodingEx| image:: ../../_static/codingExercise.png
    :width: 30px
    :align: middle
    :alt: coding exercise
    
    
.. |Exercise| image:: ../../_static/exercise.png
    :width: 35
    :align: middle
    :alt: exercise
    
    
.. |Groupwork| image:: ../../_static/groupwork.png
    :width: 35
    :align: middle
    :alt: groupwork

Writing Constructors
====================

Constructors
------------

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
        
        :click-correct:public Name(String theFirst, String theLast) {:endclick:
            :click-correct:first = theFirst;:endclick:
            :click-correct:last = theLast;:endclick:
         :click-correct:}:endclick:
         
         :click-incorrect:public void setFirst(String theFirst) {:endclick:
            :click-incorrect:first = theFirst;:endclick:
         :click-incorrect:}:endclick:
         
         :click-incorrect:public void setLast(String theLast) {:endclick:
            :click-incorrect:first = theLast;:endclick:
         :click-incorrect:}:endclick:
         
    :click-incorrect:}:endclick:  
    
.. mchoice:: qsse_5
   :answer_a: Determines the amount of space needed for an object and creates the object
   :answer_b: Names the new object
   :answer_c: Return to free storage all the memory used by this instance of the class.
   :answer_d: Initialize the fields in the object
   :correct: d
   :feedback_a: The object is already created before the constructor is called so there would be no need for this in the constructor.
   :feedback_b: Constructors do not name the object.  
   :feedback_c: Constructors do not free any memory. In Java the freeing of memory is done when the object is no longer referenced.
   :feedback_d: A constructor merely initializes the fields to their default values or in the case of a parameterized constructor, to the values passed in to the constructor.
   
   What best describes the purpose of a class's constructor?
   
   
   
Summary
-----------


-**Constructors** are used to set the initial state of an object, which should include initial values for all instance variables.

-A constructor without parameters is called a **default constructor** and intializes the instance variables to default values.

-When no constructor is written, Java provides a no-argument constructor, and the instance variables are set to their default values (0 for int and double, "" for String).

-Constructor parameters are local variables to the constructor and provide data to initialize instance variables.

-When a mutable object is a constructor parameter, the instance variable should be initialized with a copy of the referenced object. In this way, the instance variable is not an alias of the original object, and methods are prevented from modifying the state of the original object.


   
   