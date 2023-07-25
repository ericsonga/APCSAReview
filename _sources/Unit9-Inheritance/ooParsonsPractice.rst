.. qnum::
   :prefix: 9-10-
   :start: 1

Mixed Up Code Practice
------------------------------

Try to solve each of the following. Click the *Check* button to check each solution.  You will be told if your solution is too short, has a block in the wrong order, or you are using the wrong block.  Some of the problems have an extra block or two that aren't needed in the correct solution.  Try to solve these on your phone or other mobile device!

.. parsonsprob:: oopex2muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following program segment should create an empty Dog class that is a child of the Animal class. But, the blocks have been mixed up and may include extra blocks that are not needed in a correct solution. Drag the needed blocks from the left and put them in the correct order on the right.  Click the Check button to check your solution.
   -----
   public class Dog extends Animal 
   {
   =====
   public Animal class Dog  #distractor
   {
   =====
   public class Animal extends Dog  #distractor
   {
   =====
   public class Dog implements Animal  #distractor
   {
   =====
   } // end class

.. parsonsprob:: oopex3muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following program should overload a void method talk with no parameters. But, the blocks have been mixed up and may include extra blocks that are not needed in a correct solution. Drag the needed blocks from the left and put them in the correct order on the right.  Click the Check button to check your solution.
   -----
   public class GenericPerson
   {
      public void talk()
      {
         System.out.println("Hello!");
      }
   }

   public class Person extends GenericPerson 
   {
   =====
      public void talk(String name) 
      {
         System.out.println("Hello " + name + "!");
      }
   =====
      public String talk() 
      {
         return "Hello!";
      } #distractor
   =====
      public char talk() 
      {
         return 'y';
      } #distractor
   =====
   } // end class

.. parsonsprob:: oopex5muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   There is a ``Car`` class whose implementation is not shown with a private int instance variable ``numWheels`` set to ``4`` and a no-argument constructor. There should also be a ``Sedan`` class that inherits from ``Car`` while adding an integer ``numSeats`` instance variable set to ``5``. The ``Minivan`` class should also inherit from ``Car`` while having its own ``numSeats`` instance variable that is set to 7. But, the blocks have been mixed up and may include extra blocks that are not needed in a correct solution. Drag the needed blocks from the left and put them in the correct order on the right.  Click the Check button to check your solution.
   -----
   public class Sedan extends Car 
   {
      private int numSeats = 5;
   =====
      public Sedan() 
      {
         super();
      }
   =====
   } // end Sedan

   public class Minivan extends Car 
   {
      private int numSeats = 7;
   =====
      public Minivan() 
      {
         super();
      }
   } // end Minivan

.. parsonsprob:: oopex6muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following program should create a class ``Person`` that has ``firstName`` and ``lastName`` as String instance variables & also has a constructor that takes those in that order. Next, the program should create a ``Customer`` class that inherits from ``Person`` (initializing the instance variables too) and also has a String instance variable called ``id``. All three of these should be addressed in the ``Customer`` constructor. But, the blocks have been mixed up and may include extra blocks that are not needed in a correct solution. Drag the needed blocks from the left and put them in the correct order on the right.  Click the Check button to check your solution.
   -----
   public class Person 
   {
   =====
      private String firstName;
      private String lastName;
   =====
      public Person(String firstName, String lastName) 
      {
         this.firstName = firstName;
         this.lastName = lastName;
      }

   } // end Person class
   =====
   public class Customer extends Person 
   {
      private String id;
   =====
      public Customer(String firstName, String lastName, String id) 
      {
   =====
         super(firstName, lastName);
         this.id = id;
   =====
         this.firstName = firstName;
         this.lastName = lastName;
         this.id = id; #paired
   =====
      } // end Customer constructor
   } // end Customer class

.. parsonsprob:: oopex7muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   There should be a ``House`` class with private int instance variables ``numWindows`` and ``numDoors`` and a constructor that takes those in that order. There should also be a ``MobileHouse`` class that inherits from ``House`` while adding a ``numWheels`` instance variable (and thus has a constructor that takes ``numWindows``, ``numDoors``, and ``numWheels`` in that order). But, the blocks have been mixed up and may include extra blocks that are not needed in a correct solution. Drag the needed blocks from the left and put them in the correct order on the right.  Click the Check button to check your solution.
   -----
   public class House 
   {
   =====
      private int numWindows;
      private int numDoors;
   =====
      public House(int numWindows, int numDoors) 
      {
   =====
         this.numWindows = numWindows;
         this.numDoors = numDoors;
   =====
      }
   } // end house

   public class MobileHouse extends House 
   {
   =====
      private int numWheels;
   =====
      public MobileHouse(int numWindows, int numDoors, int numWheels) 
      {
   =====
         super(numWindows, numDoors);
         this.numWheels = numWheels;
   =====
      }
   } // end MobileHouse

.. parsonsprob:: oopex8muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following program should create a class ``Entity`` that has ``healthPoints`` as an integer instance variable, a constructor that takes that as an argument, and a ``fight()`` method that prints ``"Attacked the hero!"`` and returns nothing. Next, the program should create a ``Hero`` class that inherits from ``Entity`` and has a zero-argument constructor that initializes ``healthPoints`` to 100. Finally, the ``Hero`` class should override the ``fight()`` method, instead printing ``"Attacked the enemy!"``. But, the blocks have been mixed up and may include extra blocks that are not needed in a correct solution. Drag the needed blocks from the left and put them in the correct order on the right.  Click the Check button to check your solution.
   -----
   public class Entity 
   {
      private int healthPoints;

      public Entity(int HP) 
      {
         this.healthPoints = HP;
      }
   =====
      public void fight() 
      {
         System.out.println("Attacked the hero!");
      }
   =====
   } // end Entity

   public class Hero extends Entity 
   {
   =====
      public Hero() 
      {
         super(100);
      }
   =====
      public void fight() 
      {
         System.out.println("Attacked the enemy!");
      }
   =====
      public void fight() 
      {
         super.fight("Attacked the enemy!");
      } #paired
   =====
   } // end Hero

.. parsonsprob:: oopex9muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following program should create a ``Furniture`` class. The class should have a String instance variable ``material`` and a integer instance variable ``cost``. The ``Furniture`` class should also include an ``equals()`` method that returns ``true`` if two ``Furniture`` objects have the same ``material`` and ``cost``. But, the blocks have been mixed up and may include extra blocks that are not needed in a correct solution. Drag the needed blocks from the left and put them in the correct order on the right.  Click the Check button to check your solution.
   -----
   public class Furniture 
   {
   =====
      private String material;
      private int cost;
   =====
      public boolean equals(Furniture other) 
      {
   =====
         return material.equals(other.material) && cost == other.cost;
   =====
      } // end equals
   } // end class

.. parsonsprob:: oopex10muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   There is a ``Car`` class whose implementation is not shown. The ``Car`` class has a method called ``drive()`` that prints ``"vroom"``. The following program should create a subclass of ``Car`` called ``Racecar``. The ``Racecar`` class should override ``drive()`` with a new ``drive()`` function that prints ``"vroom"`` twice by calling ``Car``'s ``drive()`` function twice. But, the blocks have been mixed up and may include extra blocks that are not needed in a correct solution. Drag the needed blocks from the left and put them in the correct order on the right.  Click the Check button to check your solution.
   -----
   public class Racecar extends Car 
   {

   // other methods and instance variables not shown
   =====
   public class Racecar 
   { #paired

   // other methods and instance variables not shown
   =====
      public void drive() 
      {
   =====
         super.drive();
         super.drive();
   =====
         this.drive();
         this.drive(); #paired
   =====
      } // end drive
   } // end class

.. parsonsprob:: oopex11muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   There is a ``Computer`` class with private String instance variables ``name`` and ``company``. You should override the Object ``equals`` method to evaluate whether both ``Computers`` have the same ``name`` and ``company``, in which case they are "equal". There is also a ``Laptop`` class that inherits from ``Computer`` while adding a String ``keyboardType`` instance variable. The ``Laptop`` class should override the ``equals`` method from ``Computer``, instead evaluating whether the ``name``, ``company``, and ``keyboardType`` are the same (remember that ``name`` and ``company`` are not readable to ``Laptop`` so some polymorphism might be needed). But, the blocks have been mixed up and may include extra blocks that are not needed in a correct solution. Drag the needed blocks from the left and put them in the correct order on the right.  Click the Check button to check your solution.
   -----
   public class Computer 
   {
      // methods and variables not shown
   =====
      public boolean equals(Computer other) 
      {
         return name.equals(other.name) && company.equals(other.company);
      } // end equals
   =====
   } // end Computer

   public class Laptop extends Computer 
   {
      // methods and variables not shown
   =====
      public boolean equals(Laptop other) 
      {
   =====
         return super.equals(other) && keyboardType.equals(other.keyboardType);
   =====
         return name.equals(other.name) && company.equals(other.company) && keyboardType.equals(other.keyboardType); #paired
   =====
      } // end equals
   } // end Laptop

.. parsonsprob:: oopex12muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   There is a ``Food`` class (whose implementation is not shown) with a private ``numCalories`` integer instance variable. ``Food`` has a ``chomp()`` method that returns nothing and prints ``"{numCalories} calories consumed"`` (e.g., ``"5 calories consumed"``). There should also be a ``Fruit`` subclass that inherits from ``Food`` and adds the private ``color`` String instance variable. The ``Fruit`` class should override the ``Food`` ``chomp()`` method to return nothing, print ``"{numCalories} calories consumed"``, and print ``"fruit is {color}"`` (on a new line). Finally, there should be an ``Apple`` subclass that inherits from ``Fruit``, sets ``color`` to ``"red"``, and adds a ``variety`` String private instance variable. The ``Apple`` class should have an overriden ``chomp()`` method that returns nothing, prints ``"{numCalories} calories consumed"``, prints ``"fruit is {color}"``, and prints ``"ate {variety} apple"`` (all separated by new lines). Remember that the ``numCalories`` and ``color`` variables are private, so the ``Apple`` class does NOT have access to their values. But, the blocks have been mixed up and may include extra blocks that are not needed in a correct solution. Drag the needed blocks from the left and put them in the correct order on the right.  Click the Check button to check your solution.
   -----
   public class Fruit extends Food 
   {
      // instance variables and methods not shown
   =====
      public void chomp() 
      {
   =====
         super.chomp();
   =====
         System.out.println("fruit is " + color);
   =====
      }
   } // end Fruit
   =====
   public class Apple extends Fruit 
   {
      // instance variables and methods not shown
   =====
      public void chomp() 
      {
   =====
         super.chomp();
   =====
         System.out.println("ate " + variety + " apple");
      }
   } // end Apple
