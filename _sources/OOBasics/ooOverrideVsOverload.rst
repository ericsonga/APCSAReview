.. qnum::
   :prefix: 10-3-
   :start: 1
   
Overriding vs Overloading
---------------------------

**Overriding** an inherited method means providing a method in a child class with the same method signature (method name and parameter type list) and return type as a method in the parent class.  The method in the child class will be called *instead of* the method in the parent class.  In the following example the ``MeanGreeter`` inherits the greet method from ``Greeter``, but then overrides it.

.. activecode:: GreeterEx
   :language: java

   public class Greeter
   {
      public String greet()
      {
         return "Hi";
      }
      
      public static void main(String[] args)
      {
         Greeter g1 = new Greeter();
         System.out.println(g1.greet());
         Greeter g2 = new MeanGreeter();
         System.out.println(g2.greet());
      }
   }
   
   class MeanGreeter extends Greeter
   {
      public String greet()
      {
         return "Go Away";
      }
   }
   

**Overloading** a method is when several methods have the same name but the parameter types, order, or number are different. In the example below the ``greet(String who)`` method overloads the ``greet()`` method of ``Greeter``.  Notice that ``MeanGreeter`` inherits this method and it isn't overriden.
   
.. activecode:: GreeterOverride
   :language: java

   public class Greeter
   {
      public String greet()
      {
         return "Hi";
      }
      
      public String greet(String who)
      {
         return "Hello " + who;
      }
      
      public static void main(String[] args)
      {
         Greeter g1 = new Greeter();
         System.out.println(g1.greet("Sam"));
         Greeter g2 = new MeanGreeter();
         System.out.println(g2.greet("Nimish"));
      }
   }
   
   class MeanGreeter extends Greeter
   {
      public String greet()
      {
         return "Go Away";
      }
   }
  
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
         
         public void setId (int theId) 
         {
            this.id = theId;
         }
      }
      
You can step through an example of this in the Java Visualizer by clicking on the following link `Override Example <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=public+class+Person+%0A%7B%0A+++private+String+name+%3D+null%3B%0A+++++++++%0A+++public+Person(String+theName)%0A+++%7B%0A++++++name+%3D+theName%3B%0A+++%7D%0A+++++++++%0A+++public+String+getFood()+%0A+++%7B%0A++++++return+%22Hamburger%22%3B%0A+++%7D%0A+++%0A+++public+static+void+main(String%5B%5D+args)%0A+++%7B%0A++++++%0A++++++Person+p+%3D+new+Student(%22Jamal%22)%3B%0A++++++System.out.println(p.getFood())%3B%0A+++%7D%0A%7D%0A++++++++%0Aclass+Student+extends+Person%0A%7B%0A+++private+int+id%3B%0A+++private+static+int+nextId+%3D+0%3B%0A+++++++++%0A+++public+Student(String+theName)%0A+++%7B%0A++++++super(theName)%3B%0A++++++id+%3D+nextId%3B%0A++++++nextId%2B%2B%3B%0A+++%7D%0A+++++++++%0A+++public+int+getId()+%7Breturn+id%3B%7D%0A+++++++++%0A+++public+void+setId+(int+theId)+%0A+++%7B%0A++++++this.id+%3D+theId%3B%0A+++%7D%0A+++%0A+++public+String+getFood()+%0A+++%7B%0A++++++return+%22Pizza%22%3B%0A+++%7D%0A%7D&mode=display&curInstr=19>`_.
      
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
         public void setId (int theId) 
         {
            this.id = theId;
         }
      }  
      
You can step through an example of this using the Java Visualizer by clicking on the following link `Overload Example <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=public+class+Person+%0A%7B%0A+++private+String+name+%3D+null%3B%0A+++++++++%0A+++public+Person(String+theName)%0A+++%7B%0A++++++name+%3D+theName%3B%0A+++%7D%0A+++++++++%0A+++public+String+getFood()+%0A+++%7B%0A++++++return+%22Hamburger%22%3B%0A+++%7D%0A+++%0A+++public+String+getFood(boolean+veggieOnly)%0A+++%7B%0A++++++if+(veggieOnly)%0A++++++%7B%0A+++++++++return+%22Grilled+Cheese%22%3B%0A++++++%7D%0A++++++return+getFood()%3B%0A++++++%0A+++%7D%0A+++%0A+++public+static+void+main(String%5B%5D+args)%0A+++%7B%0A++++++%0A++++++Person+p+%3D+new+Person(%22Jamal%22)%3B%0A++++++System.out.println(p.getFood(true))%3B%0A+++%7D%0A%7D%0A++++++++%0Aclass+Student+extends+Person%0A%7B%0A+++private+int+id%3B%0A+++private+static+int+nextId+%3D+0%3B%0A+++++++++%0A+++public+Student(String+theName)%0A+++%7B%0A++++++super(theName)%3B%0A++++++id+%3D+nextId%3B%0A++++++nextId%2B%2B%3B%0A+++%7D%0A+++++++++%0A+++public+int+getId()+%7Breturn+id%3B%7D%0A+++++++++%0A+++public+void+setId+(int+theId)+%0A+++%7B%0A++++++this.id+%3D+theId%3B%0A+++%7D%0A+++%0A+++public+String+getFood()+%0A+++%7B%0A++++++return+%22Pizza%22%3B%0A+++%7D%0A%7D&mode=display&curInstr=9>`_.

What happens if you change the main method in the Java Visualizer to create a new ``Student`` object instead of a ``Person`` object?  Does it still print the same thing?
      
