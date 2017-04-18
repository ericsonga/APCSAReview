.. qnum::
   :prefix: 10-5-
   :start: 1

Access to Inherited Private Fields
==================================

..	index::
    pair: inheritance; access to private fields

Inheritance means that an object of the child class automatically includes the object fields and methods defined in the parent class.  But, if the inherited fields are private, which they should be, the child class can not directly access the inherited fields using dot notation.  The child class can use public **accessors** (also called **getters**) which are methods that get field values and public **modifiers** (also called **mutators** and **setters**) which set field values.  

For example, if a parent has a private field, ``name``, then the parent typically provides a public ``getName`` method and a public ``setName`` method as shown below.  In the ``setName`` method below, the code checks if the passed string is null before it sets it and returns true if the set was successful or false otherwise.  The ``Employee`` class inherits the ``name`` field but must use the public method ``getName`` and ``setName`` to access it.


.. activecode:: StringEquals
  :language: java

  class Person 
  {
     private String name; 
     
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
  	
     public Employee()
     {
        id = nextId;
        nextId++;
     }
    
     public int getId() 
     {
        return id;
     }
     
     public static void main(String[] args)
     {
        Employee emp = new Employee();
        emp.setName("Mark");
        System.out.println(emp.getName());
        System.out.println(emp.getId());
     }
  }
  
**Check your understanding**
  
.. mchoice:: qoo_7
   :answer_a: currItem.setX(3);
   :answer_b: currItem.setY(2);
   :answer_c: currItem.x = 3;
   :answer_d: currItem.y = 2;
   :correct: c
   :feedback_a: The object currItem is an EnhancedItem object and it will inherit the public setX method from Item.
   :feedback_b: The object currItem is an EnhancedItem object and that class has a public setY method.
   :feedback_c: Even though an EnhancedItem object will have a x field the subclass does not have direct access to a private field.  Use the public setX method instead.
   :feedback_d: All code in the same class has direct access to all object fields.  
    
   Given the following class definitions which of the following would not compile if it was used in place of the missing code in the main method?
      
   .. code-block:: java 
   
      class Item
      {
         private int x;

         public void setX(int theX)
         {
            x = theX;
         }
         // ... other methods not shown
      }
      
      public class EnhancedItem extends Item
      {
         private int y;

         public void setY(int theY)
         {
            y = theY;
         }

         // ... other methods not shown
   
         public static void main(String[] args)
         {
            EnhancedItem currItem = new EnhancedItem();
            // missing code
         }
      }
       
You can step through this code in the Java Visualizer by clicking on the following link `Private Fields Example <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=class+Item%0A%7B%0A+++private+int+x%3B%0A%0A+++public+void+setX(int+theX)%0A+++%7B%0A++++++x+%3D+theX%3B%0A+++%7D%0A+++//+...+other+methods+not+shown%0A%7D%0A%0Apublic+class+EnhancedItem+extends+Item%0A%7B%0A+++private+int+y%3B%0A%0A+++public+void+setY(int+theY)%0A+++%7B%0A++++++y+%3D+theY%3B%0A+++%7D%0A%0A+++//+...+other+methods+not+shown%0A+++%0A+++public+static+void+main(String%5B%5D+args)%0A+++%7B%0A++++++EnhancedItem+currItem+%3D+new+EnhancedItem()%3B%0A++++++currItem.setX(3)%3B%0A++++++//+currItem.setY(2)%3B%0A++++++//+currItem.x+%3D+3%3B%0A++++++//+currItem.y+%3D+2%3B%0A+++%7D%0A+%7D&mode=display&curInstr=10>`_.
       
