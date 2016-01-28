.. qnum::
   :prefix: 10-9-
   :start: 1

Polymorphism
=============

..	index::
    single: polymorphism
    
**Polymorphism** is a big word that you can break down into "poly" which means many and "morphism" which means form.  So, it just means many forms.  In Java it means that the method that gets called at **run-time** (when the code is run) depends on the type of the object at **run-time**.  This is simliar to a toddler toy that has pictures of animals and when a handle is pulled an arrow spins.  When the arrow stops the toy plays the sound associated with that animal. 

.. image:: http://www.toysrus.com/graphics/product_images/pTRU1-5452971_alternate1_dt.jpg
   :alt: Picture of a See N Say toy 
   :align: center
   :width: 300
   
If you were simulating this toy in software you could create an Animal class that had an abstract makeNoise method. Each subclass of Animal would override the makeNoise method to make the correct noise for that type.  

..	index::
    single: declared type
    single: actual type
    single: run-time type
    pair: type; declared
    pair: type; actual
    pair: type; run-time

In Java an object variable has both a **declared type** and a **run-time type** or **actual type**.  The *declared type* of a variable is the type that is used in the declaration.  The *run-time type* or *actual type* is the class that actually creates the object.  The ``nameList`` variable declared below has a declared type of ``List`` and an actual or run-time type of ``ArrayList``.  

.. code-block:: java 

  List<String> nameList = new ArrayList<String>(); 

Any object variable can refer to an object of the declared type or *any descendant (subclass) of the declared type* at run-time.  At compile time the compiler uses the declared type to check that the methods you are trying to use are available to an object of that type.  The code won't compile if the methods don't exist in that class or some parent class of that class.  At run-time the actual method that is called depends on the actual type of the object.  Remember that an object keeps a reference to the class that created it (an object of the class called ``Class``).  When a method is called at run-time the first place that is checked for that method is the class that created the object.  If the method is found there it will be executed.  If not, the parent of that class will be checked and so on until the method is found.  


**Check your understanding**

.. mchoice:: qoo_10
   :answer_a: Shape Shape Shape Shape
   :answer_b: Shape Rectangle Square Circle
   :answer_c: There will be a compile time error
   :answer_d: Shape Rectangle Rectangle Circle
   :answer_e: Shape Rectangle Rectangle Oval
   :correct: d
   :feedback_a: The Rectangle subclass of Shape overrides the what method so this can't be right.
   :feedback_b: The Square subclass doesn't not override the what method so it will use the one in Rectangle.  
   :feedback_c: This code will compile.  The declared type can hold objects of that type or any subclass of the type.
   :feedback_d: The Shape object will print Shape.  The Rectangle object will print Rectangle.  The Square object will also print Rectangle since it doesn't overrride the what method.  The Circle object will print Circle.  
   :feedback_e: The Circle class does override the what method so this can't be right.  

   What is the output from running the main method in the Shape class?
   
   .. code-block:: java 
   
      public class Shape {
         public void what() { System.out.print("Shape ");}
         
         public static void main(String[] args)
         
            Shape[] shapes = {new Shape(), new Rectangle(), new Square(), 
                              new Circle()};
            for (Shape s : shapes)
            {
               System.out.print(s.what() + " ");
            }

      } 

      public class Rectangle extends Shape {
         public void what() { System.out.print("Rectangle "); }
      }

      public class Square extends Rectangle {
      }
      
      public class Oval extends Shape {
         public void what() { System.out.print("Oval "); }
      }

      public class Circle extends Oval {
         public void what() { System.out.print("Circle ");}
      }
      
**Check your understanding**

.. mchoice:: qoo_11
   :answer_a: Pizza
   :answer_b: Taco
   :answer_c: You will get a compile time error
   :answer_d: You will get a run-time error
   :correct: b
   :feedback_a: This would be true if s1 was actually a Student, but it is a GradStudent.  Remember that the run-time will look for the method first in the class that created the object.
   :feedback_b: Even though the getInfo method is in Student when getFood is called the run-time will look for that method first in the class that created this object which in this case is the GradStudent class.
   :feedback_c: This code will compile.  The student class does have a getInfo method.  
   :feedback_d: There is no problem at run-time. 

   What is the output from running the main method in the GradStudent class?
   
   .. code-block:: java 
   
      public class Student {
         public String getFood() {
            return "Pizza";
         }
         public String getInfo()  { 
           return this.getFood(); 
         }
      }

      public class GradStudent extends Student {
        public String getFood() {
           return "Taco";
        }
        
        public static void main(String[] args)
        {
           Student s1 = new GradStudent();
           s1.getInfo();
        }
      }
 
.. mchoice:: qoo_12
   :answer_a: 5 6 10 11
   :answer_b: 5 6 5 6
   :answer_c: 10 11 10 11
   :answer_d: The code won't compile.  
   :correct: a
   :feedback_a: The code compiles correctly, and because RaceCar extends the Car class, all the public object methods of Car can be used by RaceCar objects.
   :feedback_b: RaceCar, while it inherits object methods from Car via inheritance, has a separate and different constructor that sets the initial fuel amount to 2 * g, thus in this case, fuel for fastCar is set to 10 initially.
   :feedback_c: The variable car is a Car object, so the constructor used is not the same as the fastCar object which is a RaceCar. The car constructor does not change the passed in parameter, so it is set to 5 initially. 
   :feedback_d: RaceCar inherits from the Car class so all the public object methods in Car can be accessed by any object of the RaceCar class.

   What is the output from running the main method in the RaceCar class?
   
   .. code-block:: java
   
      public class Car
      {
        private int fuel;

        public Car() { fuel = 0; } 
        public Car(int g) { fuel = g; }

        public void addFuel() { fuel++; }
        public void display() { System.out.print(fuel + " "); }
      }

      public class RaceCar extends Car
      {
        public RaceCar(int g) { super(2*g); }
        
        public static void main(String[] args)
        {
           Car car = new Car(5);
           Car fastCar = new RaceCar(5);
           car.display()
           car.addFuel();
           car.display();
           fastCar.display();
           fastCar.addFuel();
           fastCar.display();
        }
      } 
      
.. mchoice:: qoo_13
   :answer_a: b.getISBN();
   :answer_b: b.getDefintion();
   :answer_c: ((Dictionary) b).getDefinition();
   :correct: b
   :feedback_a: The b object is actually a Dictionary object which inherits the getISBN method from Book.
   :feedback_b: At compile time the declared type is Book and the Book class does not have or inherit a getDefintion method.
   :feedback_c: Casting to Dictionary means that the compiler will check the Dictionary class for the getDefinition method.

   Given the following class definitions and a declaration of Book b = new Dictionary which of the following will cause a compile-time error?
   
   .. code-block:: java 
   
      public class Book
      {
         public String getISBN() 
         {
            // implementation not shown
         }
   
         // constructors, fields, and other methods not shown
      }

      public class Dictionary extends Book
      {
         public String getDefinition(String word)
         {
            // implementation not shown
         }
      } 
      
.. mchoice:: qoo_14
   :answer_a: ABDC
   :answer_b: AB
   :answer_c: ABCD
   :answer_d: ABC
   :correct: a
   :feedback_a: Even though b is declared as type Base it is created as an object of the Derived class, so all methods to it will be resolved starting with the Derived class.
   :feedback_b: This would be true if the object was created of type Base using new Base. But the object is really a Derived object. So all methods are looked for starting with the Derived class.
   :feedback_c: After the call to methodOne in the super class printing "A", the code continues with the implicit this.methodTwo which resolves from the current object's class which is Derived. methodTwo in the Derived class is executed which then calls super.methodTwo which invokes printin "B" from methodTwo in the Base class. Then the "D" in the Derive methodTwo is printed. Finally the program returns to methodOne in the Derived class are prints "C".
   :feedback_d: The call to methodTwo in super.methodOne is to this.methodTwo which is the method from the Derived class. Consequently the "D" is also printed.
   
   Assume that the following declaration appears in a client program **Base b = new Derived();**.  What is the result of the call **b.methodOne()**?
   
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



