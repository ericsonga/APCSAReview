.. qnum::
   :prefix: 9-4-
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
    

super Keyword
============================================

Sometimes you want the child class to do more than what a parent method is doing.  You want to still execute the parent method, but then do also do something else.  But, since you have overridden the parent method how can you still call it?  You can use ``super.method()`` to force the parent's method to be called.     

.. activecode:: SuperEx
   :language: java

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
         
         public static void main(String[] args)
         {
            Person p = new Student("Javier");
            System.out.println(p.getFood());
         }
      }
        
      class Student extends Person
      {
         private int id;
         private static int nextId = 0;
         
         public Student(String theName)
         {
           super(theName);
           id = nextId;
           nextId++;
         }
         
         public String getFood()
         {
            String output = super.getFood();
            return output + " and Taco";
         }
         
         public int getId() {return this.id;}
         public void setId (int theId) 
         {
            this.id = theId;
         }
      } 
      
How does this work?  Remember that an object always keeps a reference to the class that created it and always looks for a method during execution starting in the class that created it.  If it finds the method in the class that created it, it will execute that method.  If it doesn't find it in the class that created it, it will look at the parent of that class.  It will keep looking up the ancestor chain until it finds the method.  The method has to be there, or else the code would not have compiled. 
      
When the student ``getFood()`` method is executed it will start executing the ``getFood`` method in ``Student``.  When it gets to ``super.getFood()`` it will execute the ``getFood`` method in ``Person``.  This method will return the string ``"Hamburger"``.  Then execution will continue in the ``getFood`` method of ``Student`` and it return return the string ``"Hamburger and Taco"``. 

|Exercise| **Check your understanding**

.. mchoice:: qoo_6s
   :answer_a: AB
   :answer_b: ABDC
   :answer_c: ABCD
   :answer_d: ABC
   :answer_e: Nothing is printed due to infinite recursion.
   :correct: b
   :feedback_a: This would be true if the object was created of type Base using new Base. But the object is really a Derived object. So all methods are looked for starting with the Derived class.
   :feedback_b: Even though b is declared as type Base it is created as an object of the Derived class, so all methods to it will be resolved starting with the Derived class. So the methodOne() in Derived will be called. This method first calls super.methodOne so this will invoke the method in the superclass (which is Base). So next the methodOne in Base will execute. This prints the letter "A" and invokes this.methodTwo(). Since b is really a Derived object, we check there first to see if it has a methodTwo. It does, so execution continues in Derived's methodTwo. This method invokes super.methodTwo. So this will invoke the method in the super class (Base) named methodTwo. This method prints the letter "B" and then returns. Next the execution returns from the call to the super.methodTwo and prints the letter "D". We return to the Base class methodOne and return from that to the Derived class methodOne and print the letter "C".
   :feedback_c: After the call to methodOne in the super class printing "A", the code continues with the implicit this.methodTwo which resolves from the current object's class which is Derived. methodTwo in the Derived class is executed which then calls super.methodTwo which invokes printin "B" from methodTwo in the Base class. Then the "D" in the Derive methodTwo is printed. Finally the program returns to methodOne in the Derived class are prints "C".
   :feedback_d: The call to methodTwo in super.methodOne is to this.methodTwo which is the method from the Derived class. Consequently the "D" is also printed.
   :feedback_e: This is not an example of recursion. No method is called from within itself.

   Given the following class declarations, and assuming that the following declaration appears in a client program: ``Base b = new Derived();``, what is the result of the call ``b.methodOne();``?
   
   .. code-block:: java

     public class Base
     {
        public void methodOne()
        {
          System.out.print("A");
          methodTwo();
        }

        public void methodTwo()
        {
          System.out.print("B");
        }
     }

     public class Derived extends Base
     {
        public void methodOne()
        {
           super.methodOne();
           System.out.print("C");
        }

        public void methodTwo()
        {
          super.methodTwo();
          System.out.print("D");
        }
     }
     
You can step through this example using the Java Visualizer by clicking on the following link: `Super Example <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=public+class+Base%0A%7B%0A+++public+void+methodOne()%0A+++%7B%0A+++++System.out.print(%22A%22)%3B%0A+++++methodTwo()%3B%0A+++%7D%0A%0A+++public+void+methodTwo()%0A+++%7B%0A+++++System.out.print(%22B%22)%3B%0A+++%7D%0A+++%0A+++public+static+void+main(String%5B%5D+args)%0A+++%7B%0A++++++Base+b+%3D+new+Derived()%3B%0A++++++b.methodOne()%3B%0A+++%7D%0A%7D%0A%0Aclass+Derived+extends+Base%0A%7B%0A+++public+void+methodOne()%0A+++%7B%0A++++++super.methodOne()%3B%0A++++++System.out.print(%22C%22)%3B%0A+++%7D%0A%0A+++public+void+methodTwo()%0A+++%7B%0A+++++super.methodTwo()%3B%0A+++++System.out.print(%22D%22)%3B%0A+++%7D%0A%7D&mode=display&curInstr=10>`_.