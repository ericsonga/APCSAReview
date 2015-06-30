.. qnum::
   :prefix: 10-5-
   :start: 1

Access to Inherited Private Fields
==================================

..	index::
    pair: inheritance; access to private fields

Inheritance means that an object of the child class automatically includes the object fields and methods defined in the parent class.  But, if the inherited fields are private, which they should be, the child class can not directly access the inherited fields using dot notation.  The child class can use public **accessors** (also called **getters**) which are methods that get field values and public **modifiers** (also called **mutators** and **setters**) which set field values.  

For example, if a parent has a private field, ``name``, then the parent typically provides a public ``getName`` method and a public ``setName`` method as shown below.  In the ``setName`` method below, the code checks if the passed string contains just alphabetic characters and spaces before it sets it.  The ``Employee`` class inherits the ``name`` field but must use the public method ``getName`` and ``setName`` to access it.

.. code-block:: java 

  public class Person 
  {
  	private String name; 
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
  	public int getId() 
  	{
  		return id;
  	}
  }
  
**Check your understanding**
  
.. mchoicemf:: qoo_7
   :answer_a: currItem.setX(3);
   :answer_b: currItem.setY(2);
   :answer_c: currItem.x = 3;
   :answer_d: currItem.y = 2;
   :correct: c
   :feedback_a: The object currItem is actually an EnhancedItem object and it will inherit the setX method from Item.
   :feedback_b: The object currItem is actually an EnhancedItem object and this class does have a setY method.  
   :feedback_c: Even though an EnhancedItem object will have a x field the subclass does not have direct access to a private field.  Use the public setX method instead.
   :feedback_d: All code in the same class has direct access to all object fields.  
    
   Given the following class definitions and a declaration (Item currItem = new EnhancedItem()) in the EnhancedItem class main method which of the following would not compile if they were also in the main method?
   
   .. code-block:: java 
   
      public class Item
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
       }
       
