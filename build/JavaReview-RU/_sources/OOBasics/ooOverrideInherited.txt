.. qnum::
   :prefix: 10-3-
   :start: 1

Overriding an Inherited Method
==============================

..	index::
    single: override
  
If a parent class isn't specified using the **extends** keyword, the class will inherit from the ``Object`` class.  What does a class inherit from the ``Object`` class?  One of the important things that gets inherited is the ``equals(Object obj)`` method.  This method is used to test if the current object and the passed object called ``obj`` are equal.  The ``equals`` method that is inherited from the ``Object`` class only returns true if the two objects (actually two object references) are really the same object (refer to the same object).  The ``String`` class **overrides** the inherited equals method to return true when the two objects have the same characters in the same order.   

**Overriding** an inherited method means providing a method in a child class with the same method signature (method name and parameter type list) and return type as a method in the parent class.  The method in the child class will be called instead of the method in the parent class.  This is different from **overloading** a method which is creating several methods of the same name as long as the parameter types, order, or number are different. 
  
**Check your understanding**

.. mchoice:: qoo_5
   :answer_a: public void getFood()
   :answer_b: public String getFood(int quantity)
   :answer_c: public String getFood()
   :correct: c
   :feedback_a: The return type must match the parent method return type.
   :feedback_b: The parameter lists must match (must have the same types in the same order).  
   :feedback_c: The return type and parameter lists must match.   
    
    Which of the following declarations in ``Student`` would correctly *override* the ``getFood`` method in ``Person``?
    
    .. code-block:: java 
   
      public class Person 
      {
         private String name = null;
         
         public Person(String theName)
         {
            name = theName;
         }
         
         public String getFood() 
         {
            return "Hamburger";
         }
      }
        
      public class Student extends Person
      {
         private int id;
         private static int nextId = 0;
         
         public Student(String theName)
         {
           super(theName);
           id = nextId;
           nextId++;
         }
         
         public int getId() {return id;}
         
         public int setId (int theId) 
         {
            this.id = theId;
         }
      }
      
.. mchoice:: qoo_6
   :answer_a: public void getFood()
   :answer_b: public String getFood(int quantity)
   :answer_c: public String getFood()
   :correct: b
   :feedback_a: You can not just change the return type to overload a method.  
   :feedback_b: For overloading you must change the parameter list (number, type, or order of parameters).  
   :feedback_c: How is this different from the current declaration for <code>getFood</code>?
    
    Which of the following declarations in ``Person`` would correctly *overload* the ``getFood`` method in ``Person``?
    
    .. code-block:: java 
   
      public class Person 
      {
         private String name = null;
         
         public Person(String theName)
         {
            name = theName;
         }
         
         public String getFood() 
         {
            return "Hamburger";
         }
      }
        
      public class Student extends Person
      {
         private int id;
         private static int nextId = 0;
         
         public Student(String theName)
         {
           super(theName);
           id = nextId;
           nextId++;
         }
         
         public int getId() {return id;}
         public int setId (int theId) 
         {
            this.id = theId;
         }
      }  
      
