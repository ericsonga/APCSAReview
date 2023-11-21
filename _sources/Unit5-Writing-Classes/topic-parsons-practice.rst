.. qnum::
   :prefix: 5-18-
   :start: 1

Mixed Up Code Practice
=========================================================

Try to solve each of the following. Click the *Check Me* button to check each solution.  You will be told if your solution is too short, has a block in the wrong order, or you are using the wrong block.  Some of the problems have an extra block or two that aren't needed in the correct solution.  Try to solve these on your phone or other mobile device!


.. parsonsprob:: ch7ex1muc
  :numbered: left
  :practice: T
  :adaptive:
  :noindent:

  The following program segment should define a ``Dog`` class with a constructor that takes one parameter, ``name``, and sets the value of the Dog's private ``name`` attribute to that. There should also be a ``getName`` method which returns the ``name`` attribute of the ``Dog`` object. But the blocks have been mixed up and include pairs of lines where one is unneeded. Drag the necessary code from the left to the right and put them in order so that the code would work correctly. Click the Check button to check your solution.
  -----
  public class Dog 
  {
  =====
    private String name;
  =====
    public String name; #paired: Instance variables should be encapsulated
  =====
    public Dog(String name) 
    {
  =====
    public Dog Dog(String name) 
    { #paired: Constructors never have a return type
  =====
      this.name = name;
  =====
    } // end constructor

    public String getName() 
    {
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

  The following program segment should define a ``Dog`` class with a constructor that takes two parameters: ``name`` (a String) and ``age`` (an integer). These parameters should be saved in correspondingly-named private instance variables. But the blocks have been mixed up and include pairs of lines where one is unneeded. Drag the necessary code from the left to the right and put them in order so that the code would work correctly. Click the Check button to check your solution.
  -----
  public class Dog 
  {
  =====
  public class Dog #paired: Curly braces are required when declaring a class
  =====
    private String name;
    private int age;
  =====
    public Dog(String name, int age) 
    {
  =====
    public Dog(name, age) 
    { #paired: Methods need to specify the types for arguments
  =====
      this.name = name;
      this.age = age;
  =====
      name = name;
      age = age; #paired: When the parameter name is the same as an attribute, you MUST use "this" to refer to the attribute
  =====
    } // end constructor
  } // end class


.. parsonsprob:: ch7ex3muc
  :numbered: left
  :practice: T
  :adaptive:
  :noindent:

  The following program segment should define a ``Cat`` class with a constructor that takes two parameters\: ``name`` (a String) and ``age`` (an integer). These parameters should be saved in correspondingly-named private attributes of ``Cat`` objects. Next, there should be a ``makeSound`` method that prints ``"meow"``. Finally, there should be a ``toString`` method that returns "Name\: name, Age\: age" (such that ``Cat("Lucky", 10)``'s ``toString`` method would return "Name\: Lucky, Age\: 10"). But the blocks have been mixed up and include pairs of lines where one is unneeded. Drag the necessary code from the left to the right and put them in order so that the code would work correctly. Click the Check button to check your solution.
  -----
  public class Cat 
  {
  =====
    private String name;
    private int age;

    public Cat(String name, int age) 
    {
  =====
      this.name = name;
      this.age = age;
  =====
    } // end constructor

    public void makeSound() 
    {
  =====
    } // end constructor

    public String makeSound() 
    { #paired: When a method returns nothing, its return type should be "void"
  =====
       System.out.println("meow");
  =====
    } // end makeSound

    public String toString() 
    {
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

  The following program segment should define a ``Square`` class with a constructor that takes one parameter\: ``length`` (an integer). This parameter should be saved in a correspondingly-named private attribute of ``Square`` objects. The ``Square`` class should also have a variable ``numberOfSquares`` that tracks how many squares have been created. Finally, there should be a ``toString`` method which returns ``"Length: length"`` (such that ``Square(10)``'s toString method would return ``"Length: 10"``. But the blocks have been mixed up and include pairs of lines where one is unneeded. Drag the necessary code from the left to the right and put them in order so that the code would work correctly. Click the Check button to check your solution.
  -----
  public class Square 
  {
  =====
    public static int numberOfSquares = 0;
    private int length;
  =====
    private int numberOfSquares = 0;
    private int length; #paired: When you need a variable to be accessible for every object of a class, it should be static
  =====
    public Square(int length) 
    {
  =====
      this.length = length;
      numberOfSquares++;
  =====
    } // end constructor
  =====
    public String toString() 
    {
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

  The following program segment should define a ``Rectangle`` class with a constructor that can take zero or two integer parameters. With zero arguments passed, the ``Rectangle`` should be initialized with a ``length`` of 10 and a ``width`` of 10. With two integers passed, the ``Rectangle`` should have a ``length`` equal to argument1 and a ``width`` equal to argument2. There should also be an ``getArea`` method that returns the area ``length`` times ``width``. But the blocks have been mixed up and include pairs of lines where one is unneeded. Drag the necessary code from the left to the right and put them in order so that the code would work correctly. Click the Check button to check your solution.
  -----
  public class Rectangle 
  {
  =====
    private int length;
    private int width;

    public Rectangle() 
    {
  =====
      this.length = 10;
      this.width = 10;
  =====
    } // end zero-argument constructor

    public Rectangle(int length, int width) 
    {
  =====
      this.length = length;
      this.width = width;
  =====
    } // end two-argument constructor

    public int getArea() 
    {
  =====
      return this.length * this.width;
  =====
    } // end getArea
  } // end class

.. parsonsprob:: ch7ex6muc
  :numbered: left
  :practice: T
  :adaptive:
  :noindent:

  The following program should define a ``CelestialBody`` class. The class should have two instance variables: ``orbitLength`` and ``daysSinceDiscovered``. The ``orbitLength`` variable should be initialized through the constructor, while ``daysSinceDiscovered`` should be derived from ``orbitLength`` and the ``orbit`` method. The ``orbit(int numberOfTimes)`` should add ``orbitLength * numberOfTimes`` to ``daysSinceDiscovered`` (e.g., if Planet X has done two orbits with an orbit length of 12 days, it was discovered 24 days ago. If it then orbits another three times, it was discovered 60 days ago). But the blocks have been mixed up and include pairs of lines where one is unneeded. Drag the necessary code from the left to the right and put them in order so that the code would work correctly. Click the Check button to check your solution.
  -----
  public class CelestialBody 
  {
  =====
    private int orbitLength;
    private int daysSinceDiscovered;
  =====
    public CelestialBody(int orbitLength) 
    {
  =====
      this.daysSinceDiscovered = 0;
      this.orbitLength = orbitLength;
  =====
      this.orbitLength = orbitLength; #paired: daysSinceDiscovered needs to be initialized
  =====
    } // end constructor

    public void orbit(int numberOfTimes) 
    {
  =====
    } // end constructor

    public int orbit(int numberOfTimes) 
    { #paired: A method who returns nothing should have a void return type
  =====
      this.daysSinceDiscovered += this.orbitLength * numberOfTimes;
  =====
    } // end orbit
  } // end class

.. parsonsprob:: ch7ex7muc
  :numbered: left
  :practice: T
  :adaptive:
  :noindent:

  The following program should define a ``Person`` class. Each ``Person`` instance should have a String ``name`` attribute and a integer ``age`` attribute. There should also be ``getName`` and ``setName`` functions. But the blocks have been mixed up and include pairs of lines where one is unneeded. Drag the necessary code from the left to the right and put them in order so that the code would work correctly. Click the Check button to check your solution.
  -----
  public class Person 
  {
  =====
    private String name;
    private int age;

    public Person(String name, int age) 
    {
  =====
      this.name = name;
      this.age = age;
  =====
    } // end constructor

    public String getName() 
    {
  =====
      return this.name;
  =====
    } // end getName

    public void setName(String newName) 
    {
  =====
      this.name = newName;
  =====
    } // end setName
  } // end class

.. parsonsprob:: ch7ex8muc
  :numbered: left
  :practice: T
  :adaptive:
  :noindent:

  The following program should define a ``Point`` class. Each ``Point`` instance should have integer ``x`` and ``y`` attributes (there are associated ``getX`` and ``getY`` methods whose implementations aren't shown). There should be a ``getDistance`` method that takes in another ``Point`` object as an argument and calculates the distance from this object to that one (which would be sqrt((this.x - other.x) ^ 2 + (this.y - other.y) ^ 2)). But the blocks have been mixed up and include pairs of lines where one is unneeded. Drag the necessary code from the left to the right and put them in order so that the code would work correctly. Click the Check button to check your solution.
  -----
  public class Point 
  {
  =====
    private int x;
    private int y;

    public Point(int x, int y) 
    {
  =====
      this.x = x;
      this.y = y;
  =====
    } // end constructor

    public double getDistance(Point other) 
    {
  =====
      return Math.sqrt(Math.pow(this.x - other.getX(), 2) + Math.pow(this.y - other.getY(), 2));
  =====
      return Math.sqrt((this.x - other.getX()) ** 2 + (this.y - other.getY()) ** 2); #paired: Exponents in java should use Math.pow
  =====
    } // end getDistance
  } // end class

.. parsonsprob:: ch7ex9muc
  :numbered: left
  :practice: T
  :adaptive:
  :noindent:

  The following program should define an ``Account`` class. Each ``Account`` instance should have integer ``balance`` and String ``owner`` attributes (and the constructor should take those in that order). To decrease ``balance``, there should be a ``withdraw`` method that takes in an integer argument and subtracts that from ``balance``. However, if ``balance`` would end as a negative number, it should just be set to zero. But the blocks have been mixed up and include pairs of lines where one is unneeded. Drag the necessary code from the left to the right and put them in order so that the code would work correctly. Click the Check button to check your solution.
  -----
  public class Account 
  {
  =====
    private int balance;
    private String owner;

    public Account(int balance, String owner) 
    {
  =====
      this.balance = balance;
      this.owner = owner;
  =====
    } // end constructor

    public void withdraw(int amount) 
    {
  =====
      if (amount > this.balance) 
      {
  =====
        this.balance = 0;
  =====
      } // end if

      else {
  =====
        this.balance -= amount;
  =====
      } // end else
  =====
    } // end withdraw
  } // end class

.. parsonsprob:: ch7ex10muc
  :numbered: left
  :practice: T
  :adaptive:
  :noindent:

  The following program should define a ``Character`` class. Each ``Character`` instance should have a integer ``healthPoints`` attribute and a String ``name`` attribute. There is a constructor and ``getHP``, ``setHP``, and ``getName`` methods that are not shown. Finally, there needs to be a ``fight(Character other)`` method that lets a character fight another. If the character's ``healthPoints`` are the same or more than ``other``'s, ``other``'s HP should be set to zero, the current character's HP should be set to the difference, and the program should print “{the character's name} wins”. If ``other``'s HP is greater, the current character's HP should be set to zero, ``other``'s HP should be set to the difference, and the program should print “{other’s name} wins”. But the blocks have been mixed up and include pairs of lines where one is unneeded. Drag the necessary code from the left to the right and put them in order so that the code would work correctly. Click the Check button to check your solution.

  -----
  public class Character 
  {
  =====
    // instance variables, constructor, & getter/setters not shown
  =====
    public void fight(Character other) 
    {
  =====
      if (this.getHP() >= other.getHP()) 
      {
  =====
      this.setHP(this.getHP() - other.getHP());
      other.setHP(0);
      System.out.println(this.getName() + " wins");
  =====
      } // end if
  =====
      else 
      {
  =====
        other.setHP(other.getHP() - this.getHP());
        this.setHP(0);
        System.out.println(other.getName() + " wins");
  =====
      } // end else
  =====
    } // end fight
  } // end class
