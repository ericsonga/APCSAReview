.. qnum::
   :prefix: 5-18-
   :start: 1

Mixed Up Code Practice
------------------------------

Try to solve each of the following. Click the *Check Me* button to check each solution.  You will be told if your solution is too short, has a block in the wrong order, or you are using the wrong block.  Some of the problems have an extra block or two that aren't needed in the correct solution.  Try to solve these on your phone or other mobile device!

.. parsonsprob:: ch7ex1muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following program segment should define a ``Dog`` class with a constructor that takes one parameter, ``name``, and sets the value of the Dog's private ``name`` attribute to that. There should also be a ``getName`` method which returns the ``name`` attribute of the ``Dog`` object. But the blocks have been mixed up and include one extra block that is not needed in a correct solution. Drag the needed code from the left to the right and put them in order so that the code would work correctly. Click the Check button to check your solution.
   -----
   public class Dog {
   =====
      private String name;
   =====
      public Dog Dog(String name) { #distractor
   =====
      public Dog(String name) {
   =====
          this.name = name;
   =====
      } // end constructor
      
      public String getName() {
   =====
          return this.name;
   =====
      } // end getName
   } //end class

.. parsonsprob:: ch7ex2muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following program segment should define a ``Dog`` class with a constructor that takes two parameters: ``name`` (a String) and ``age`` (an integer). These parameters should be saved in correspondingly-named private instance variables. There should also be an ``updateAge`` method that increases ``age`` by 1 and returns the new value of ``age``. But the blocks have been mixed up and include one extra block that is not needed in a correct solution. Drag the needed code from the left to the right and put them in order so that the code would work correctly. Click the Check button to check your solution.
   -----
   public class Dog {
   =====
      private String name;
      private int age;
   =====
      public Dog(String name, int age) { 
   =====
          name = name; #distractor
          age = age;
   =====
          this.name = name;
          this.age = age;
   =====
      } // end constructor

      public int updateAge() {
   =====
          this.age += 1;
   =====
          return this.age;
   =====
      } // end updateAge
   } //end class

.. parsonsprob:: ch7ex3muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following program segment should define a ``Cat`` class with a constructor that takes two parameters\: ``name`` (a String) and ``age`` (an integer). These parameters should be saved in correspondingly-named private attributes of ``Cat`` objects. Next, there should be a ``makeSound`` method that prints ``"meow"``. Finally, there should be a ``toString`` method that returns ``"Name: name, Age: age"`` (such that ``Cat("Lucky", 10)``'s ``toString`` method would return ``"Name: Lucky, Age: 10"``). But the blocks have been mixed up and include one extra block that is not needed in a correct solution. Drag the needed code from the left to the right and put them in order so that the code would work correctly. Click the Check button to check your solution.
   -----
   public class Cat {
   =====
      private String name;
      private int age;

      public Cat(String name, int age) { 
   =====
          this.name = name;
          this.age = age;
   =====
      } // end constructor #distractor

      public String makeSound() { 
   =====
      } // end constructor

      public void makeSound() {
   =====
           System.out.println("meow");
   =====
      } // end makeSound

      public String toString() {
   =====
          return "Name: " + this.name + ", Age: " + this.age;
   =====
      } // end toString
   } //end class

.. parsonsprob:: ch7ex4muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following program segment should define a ``Square`` class with a constructor that takes one parameter\: ``length`` (an integer). This parameter should be saved in a correspondingly-named private attribute of ``Square`` objects. The ``Square`` class should also have a variable ``numberOfSquares`` that tracks how many squares have been created. There should also be an ``getArea`` method that returns the area ``length`` times ``length``. Finally, there should be a ``toString`` method which returns ``"Length: length"`` (such that ``Square(10)``'s toString method would return ``"Length: 10"``. But the blocks have been mixed up and include one extra block that is not needed in a correct solution. Drag the needed code from the left to the right and put them in order so that the code would work correctly. Click the Check button to check your solution.
   -----
   public class Square {
   =====
      private int numberOfSquares = 0; #distractor
      private int length;
   =====
      public static int numberOfSquares = 0;
      private int length;
   =====
      public Square(int length) { 
   =====
          this.length = length;
          numberOfSquares++;
   =====
      } // end constructor

      public int getArea() {
   =====
           return this.length * this.length;
   =====
      } // end getArea
      public String toString() {
   =====
          return "Length: " + this.length;
   =====
      } // end toString
   } //end class

.. parsonsprob:: ch7ex5muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following program segment should define a ``Rectangle`` class with a constructor that can take zero, one, or two integer parameters. With zero arguments passed, the ``Rectangle`` should be initialized with a ``length`` of 10 and a ``width`` of 10. With one integer passed, the ``Rectangle`` should have a ``length`` and ``width`` equal to that argument (i.e., you assume it's a square). With two integers passed, the ``Rectangle`` should have a ``length`` equal to argument1 and a ``width`` equal to argument2. There should also be an ``getArea`` method that returns the area ``length`` times ``width``. Finally, there should be a ``toString`` method which returns ``"Length: length, Width: width"`` (such that ``Rectangle(5, 7)``'s toString method would return ``"Length: 5, Width: 7"``. But the blocks have been mixed up and include one extra block that is not needed in a correct solution. Drag the needed code from the left to the right and put them in order so that the code would work correctly. Click the Check button to check your solution.
   -----
   public class Rectangle {
   =====
      private int length;
      private int width;

      public Rectangle() { 
   =====
      public static int length; #distractor
      public static int width;

      public Rectangle() { 
   =====
          this.length = 10;
          this.width = 10;
   =====
      } // end zero-argument constructor

      public Rectangle(int length) {
   =====
          this.length = length;
          this.width = length;
   =====
      } // end one-argument constructor

      public Rectangle(int length, int width) {
   =====
          this.length = length;
          this.width = width;
   =====
      } // end two-argument constructor

      public int getArea() {
   =====
          return this.length * this.width;
   =====
      } // end getArea

      public String toString() {
   =====
          return "Length: " + this.length + ", Width: " + this.width;
   =====
      } // end toString
   } // end class

.. parsonsprob:: ch7ex6muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following program should define a ``Character`` class. Each ``Character`` instance should have a integer ``healthPoints`` attribute and a String ``name`` attribute. There should be methods for each: ``getHP`` for getting ``healthPoints``, ``setHP`` for setting ``healthPoints``, and ``getName`` for getting ``name``. Finally, there needs to be a ``fight(Character other)`` method that lets a character fight another. If the character's ``healthPoints`` are more than ``other``'s, ``other``'s HP should be set to zero, the current character's HP should be set to the difference, and the program should print ``"Outcome: {the character's name} wins with {the character's HP} HP remaining"``. If ``other``'s HP is greater, the current character's HP should be set to zero, ``other``'s HP should be set to the difference, and the program should print ``”Outcome: {other’s name} wins with {other’s HP} HP remaining”``. If they have the same HP, the program should print ``”Outcome: Tie”`` and set both HPs to 0. But the blocks have been mixed up and include one extra block that is not needed in a correct solution. Drag the needed code from the left to the right and put them in order so that the code would work correctly. Click the Check button to check your solution.

   -----
   public class Character {
   =====
      private int healthPoints;
      private String name;

      public Character(int healthPoints, String name) {
   =====
          this.healthPoints = healthPoints;
          this.name = name;
   =====
      } // end constructor

      public int getHP() {  
   =====
          return this.healthPoints;
   =====
      } // end getHP

      public void setHP(int newHP) {
   =====
          this.healthPoints = newHP;
   =====
      } // end setHP
   =====
      public getName() { #distractor
   =====
      public String getName() {
   =====
          return this.name;
   =====
      } // end getName

      public void fight(Character other) {
   =====
          if (this.getHP() > other.getHP()) {
   =====
              this.setHP(this.getHP() - other.getHP());
              other.setHP(0);
              System.out.println("Outcome: " + this.getName() + " wins with " + this.getHP() + "HP remaining");
   =====
          } // end if
   =====
          else if (this.getHP() < other.getHP()) {
   =====
              other.setHP(other.getHP() - this.getHP());
              this.setHP(0);
              System.out.println("Outcome: " + other.getName() + " wins with " + other.getHP() + " HP remaining");
   =====
          } // end else-if
   =====
          else {
   =====
              this.setHP(0);
              other.setHP(0);
              System.out.println("Outcome: Tie");
   =====
          } // end else
   =====
      } // end fight
   =====
   } // end class

.. parsonsprob:: ch7ex7muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following program should define a ``Person`` class. Each ``Person`` instance should have a String ``name`` attribute and a integer ``age`` attribute. There should be setter/getter methods for each: ``getName``, ``setName``, ``getAge``, and ``setAge``. Finally, there should to be a ``toString`` method that returns ``“{name} is {age} years old”``. But the blocks have been mixed up and include one extra block that is not needed in a correct solution. Drag the needed code from the left to the right and put them in order so that the code would work correctly. Click the Check button to check your solution.
   -----
   public class Person {
   =====
      private String name;
      private int age;

      public Person(String name, int age) {
   =====
          this.name = name;
          this.age = age;
   =====
      } // end constructor

      public String getName() {
   =====
          return this.name;
   =====
      } // end getName

      public void setName(String newName) {
   =====
          this.name = newName;
   =====
      } // end setName
  
      public int getAge() {
   =====
          return this.age;
   =====
      }
  
      public void setAge(int newAge) {
   =====
          this.age = newAge;
   =====
      } // end setAge
  
      public String toString() {
   =====
      } // end setAge #distractor

      public toString() {
   =====
          return this.name + " is " + this.age + " years old";
   =====
      } // end toString
  } // end class