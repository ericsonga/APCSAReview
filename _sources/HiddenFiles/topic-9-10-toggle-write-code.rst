.. qnum::
   :prefix: 9-10-
   :start: 1

Unit 9 Write Code for Toggle Code
=========================================================

This is the write code problems associated with the mixed up code problems.

.. activecode:: u9_muc_wc2
        :language: java
        :practice: T
        :autograde: unittest

        Fix the class header so that the ``Dog`` class inherits from the ``Animal`` class.
        ~~~~
        class Animal
        {
            /* implementation not shown */
        }

        public class Dog  // TODO: fix this line
        {
            /* implementation not shown */
        }

        ====
        import static org.junit.Assert.*;

        import org.junit.*;

        import java.io.*;

        public class RunestoneTests extends CodeTestHelper
        {
            public RunestoneTests()
            {
                super("Dog");
            }

            @Test
            public void inherits() throws IOException
            {
                boolean res = checkCodeContains("class Dog extends Animal");
                assertTrue(res);
            }
        }

.. activecode:: u9_muc_wc3
        :language: java
        :practice: T
        :autograde: unittest

        Overload the ``talk`` method in the ``Person`` class so it can take in a String ``name`` and print ``"Hello {name}!"`` (e.g., calling ``p.talk("Sarah")`` on a ``Person`` ``p`` would print ``"Hello Sarah!"``).
        ~~~~
        class GenericPerson
        {
            public void talk()
            {
                System.out.println("Hello!");
            }
        }

        public class Person extends GenericPerson
        {

            // TODO: overload talk()

            // ignore the rest of this class

            public static void main(String[] args)
            {
                GenericPerson gp = new GenericPerson();
                gp.talk();
                Person p = new Person();
                p.talk("jim");
            }
        }

        ====
        import static org.junit.Assert.*;

        import org.junit.*;

        import java.io.*;

        public class RunestoneTests extends CodeTestHelper
        {
            public RunestoneTests()
            {
                super("Person");
            }

            @Test
            public void testMain() throws IOException
            {
                String expected = "Hello!\nHello jim!";
                String output = getMethodOutput("main");
                boolean passed = getResults(expected, output, "Checking main output");
                assertTrue(passed);
            }
        }

.. activecode:: u9_muc_wc5
        :language: java
        :practice: T
        :autograde: unittest

        There is a ``Car`` class whose with a private int instance variable ``numWheels`` set to ``4`` and a private int instance variable ``numSeats`` whose value is set in the constructor. The ``Sedan`` class inherits from ``Car``. Fill in the ``Sedan`` constructor so that ``numSeats`` is already initialized as ``5``.
        ~~~~
        class Car
        {
            // this class is complete

            private int numWheels;
            private int numSeats;

            public Car(int numSeats)
            {
                this.numWheels = 4;
                this.numSeats = numSeats;
            }

            public int getNumSeats()
            {
                return this.numSeats;
            }
        }

        public class Sedan extends Car
        {

            public Sedan()
            {
                // TODO: Fill in this method
            }

            // ignore the rest of this class
            public static void main(String[] args)
            {
                Car c = new Car(4);
                System.out.println("c has " + c.getNumSeats() + " seats");
                Sedan s = new Sedan();
                System.out.println("s has " + s.getNumSeats() + " seats");
            }
        }

        ====
        import static org.junit.Assert.*;

        import org.junit.*;

        import java.io.*;

        public class RunestoneTests extends CodeTestHelper
        {
            public RunestoneTests()
            {
                super("Sedan");
            }

            @Test
            public void testMain() throws IOException
            {
                String expected = "c has 4 seats\ns has 5 seats";
                String output = getMethodOutput("main");
                boolean passed = getResults(expected, output, "Checking main output");
                assertTrue(passed);
            }
        }

.. activecode:: u9_muc_wc6
        :language: java
        :practice: T
        :autograde: unittest

        There is a ``Person`` class with private String instance variables ``firstName`` and ``lastName`` and a constructor that takes them in that order. There is also a ``Customer`` class that should inherit from ``Person``, adding an ``id`` String instance variable. The only missing component is a ``Customer`` constructor that should take ``firstName``, ``lastName``, and ``id`` in that order.
        ~~~~
        class Person
        {
            // this class is complete

            private String firstName;
            private String lastName;

            public Person(String firstName, String lastName)
            {
                this.firstName = firstName;
                this.lastName = lastName;
            }

            public String getFirstName()
            {
                return this.firstName;
            }

            public String getLastName()
            {
                return this.lastName;
            }
        }

        public class Customer extends Person
        {
            private String id;

            // TODO: Create a constructor that takes
            // firstName, lastName, and id in that order

            // YOUR CODE HERE

            // Ignore the rest of the class

            public String getId()
            {
                return this.id;
            }

            public static void main(String[] args)
            {
                Customer c = new Customer("Jane", "Doe", "abc");
                System.out.println(
                        c.getFirstName() + "\t" + c.getLastName() + "\t" + c.getId());
            }
        }

        ====
        import static org.junit.Assert.*;

        import org.junit.*;

        import java.io.*;

        public class RunestoneTests extends CodeTestHelper
        {
            public RunestoneTests()
            {
                super("Customer");
            }

            @Test
            public void checkConstructorHeader() throws IOException
            {
                String[] arr = new String[] {"String firstName", "String lastName", "String id"};
                String expected = "pass";
                String output = checkConstructor(arr);
                boolean res = getResults(expected, output, "Checking constructor types");
                assertTrue(res);
            }

            @Test
            public void testMain() throws IOException
            {
                String expected = "Jane\tDoe\tabc\n";
                String output = getMethodOutput("main");
                boolean res = getResults(expected, output, "Checking main output");
                assertTrue(res);
            }
        }

.. activecode:: u9_muc_wc7
        :language: java
        :practice: T
        :autograde: unittest

        There is a ``House`` class with private int instance variables ``numWindows`` and ``numDoors`` and a constructor that takes those in that order. Create a ``MobileHouse`` class that inherits from ``House`` while adding a ``numWheels`` instance variable (and thus has a constructor that takes ``numWindows``, ``numDoors``, and ``numWheels`` in that order) and a ``getNumWheels()`` method. your solution.
        ~~~~
        public class House
        {
            private int numWindows;
            private int numDoors;

            public House(int numWindows, int numDoors)
            {
                this.numWindows = numWindows;
                this.numDoors = numDoors;
            }

            // ignore the rest of this class
            public static void main(String[] args)
            {
                MobileHouse m = new MobileHouse(3, 4, 5);
                System.out.println("Windows: " + m.getNumWindows());
                System.out.println("Doors: " + m.getNumDoors());
                System.out.println("Wheels: " + m.getNumWheels());
            }

            public int getNumWindows()
            {
                return numWindows;
            }

            public int getNumDoors()
            {
                return numDoors;
            }
        }

                // TODO: Create MobileHouse class
                    // It should NOT be public
                    // 1: Create class header
                    // 2: Create numWheels variable
                    // 3: Create constructor
                    // 4: Create getNumWheels() method

        ====
        import static org.junit.Assert.*;

        import org.junit.*;

        import java.io.*;

        public class RunestoneTests extends CodeTestHelper
        {
            public RunestoneTests()
            {
                super("House");
            }

            @Test
            public void checkConstructorHeader() throws IOException
            {
                Object[] arr = new Integer[] {1, 2, 3};
                String expected = "fail";
                String output = checkConstructor(arr);
                boolean res = getResults(expected, output, "Checking no new constructor for House");
                assertTrue(res);
            }

            @Test
            public void testMain() throws IOException
            {
                String expected = "Windows: 3\nDoors: 4\nWheels: 5";
                String output = getMethodOutput("main");
                boolean res = getResults(expected, output, "Testing main method");
                assertTrue(res);
            }
        }

.. activecode:: u9_muc_wc8
        :language: java
        :practice: T
        :autograde: unittest

        There is a ``Entity`` class with private int instance variable ``healthPoints`` and a constructor that takes that as an argument. Finish the ``Hero`` class so that it initializes with a ``healthPoints`` of ``100`` and so that its ``fight()`` method prints ``"Attacked the enemy!"``.
        ~~~~
        class Entity
        {
            // this class is complete

            private int healthPoints;

            public Entity(int HP)
            {
                this.healthPoints = HP;
            }

            public void fight()
            {
                System.out.println("Attacked the hero!");
            }

            public int getHP()
            {
                return this.healthPoints;
            }
        }

        public class Hero extends Entity
        {

            // TODO: Create a constructor

            // TODO: Override the fight() method

            // ignore the main method
            public static void main(String[] args)
            {
                Entity e = new Entity(105);
                System.out.println("e HP: " + e.getHP());
                e.fight();

                Hero h = new Hero();
                System.out.println("Hero HP: " + h.getHP());
                h.fight();
            }
        } // end Hero

        ====
        import static org.junit.Assert.*;

        import org.junit.*;

        import java.io.*;

        public class RunestoneTests extends CodeTestHelper
        {
            public RunestoneTests()
            {
                super("Hero");
            }

            @Test
            public void testMain() throws IOException
            {
                // as opposed to testFight, this method checks that
                // Entity's fight() method has not been changed
                String expected = "e HP: 105\nAttacked the hero!\nHero HP: 100\nAttacked the enemy!";
                String output = getMethodOutput("main");
                boolean res = getResults(expected, output, "Testing main method");
                assertTrue(res);
            }

            @Test
            public void testFight() throws IOException
            {
                // this is useful in case the student hardcoded
                // a print statement to get past testMain()
                String expected = "Attacked the enemy!";
                String output = getMethodOutput("fight");
                boolean res = getResults(expected, output, "Testing hero's fight() method");
                assertTrue(res);
            }
        }

.. activecode:: u9_muc_wc9
        :language: java
        :practice: T
        :autograde: unittest

        There is a ``Furniture`` class with a String instance variable ``material`` and an int instance variable ``cost``. The ``Furniture`` class also includes an ``equals()`` method that should return ``true`` if two ``Furniture`` objects have the same ``material`` and ``cost``. Fill in this ``equals()`` method.
        ~~~~
        public class Furniture
        {
            private String material;
            private int cost;

            public Furniture(String material, int cost)
            {
                this.material = material;
                this.cost = cost;
            }

            public String getMaterial()
            {
                return this.material;
            }

            public int getCost()
            {
                return this.cost;
            }

            public boolean equals(Furniture other)
            {
                // TODO: Fill this in
            }

            // ignore the main method
            public static void main(String[] args)
            {
                Furniture f = new Furniture("wood", 50);
                Furniture f2 = new Furniture("ivory", 100);
                Furniture f3 = new Furniture("wood", 50);
                System.out.println("f equals f2? " + f.equals(f2));
                System.out.println("f equals f3? " + f.equals(f3));
            }
        }

        ====
        import static org.junit.Assert.*;

        import org.junit.*;

        import java.io.*;

        public class RunestoneTests extends CodeTestHelper
        {
            public RunestoneTests()
            {
                super("Furniture");
            }

            @Test
            public void testMain() throws IOException
            {
                String expected = "f equals f2? false\nf equals f3? true";
                String output = getMethodOutput("main");
                boolean res = getResults(expected, output, "Testing main method");
                assertTrue(res);
            }
        }

.. activecode:: u9_muc_wc10
        :language: java
        :practice: T
        :autograde: unittest

        There is a ``Car`` class with a method called ``drive()`` that prints ``"vroom"``. There is a subclass of ``Car`` called ``Racecar``. The ``Racecar`` class should override ``drive()`` with a new ``drive()`` function that prints ``"vroom"`` twice by calling ``Car``'s ``drive()`` function twice.
        ~~~~
        class Car
        {
            public void drive()
            {
                System.out.println("vroom");
            }
        }

        public class Racecar extends Car
        {
            public void drive()
            {
                // YOUR CODE HERE
            }

            // ignore the main method
            public static void main(String[] args)
            {
                Racecar r = new Racecar();
                r.drive();
            }
        }

        ====
        import static org.junit.Assert.*;

        import org.junit.*;

        import java.io.*;

        public class RunestoneTests extends CodeTestHelper
        {
            public RunestoneTests()
            {
                super("Racecar");
            }

            @Test
            public void testHardcode() throws IOException
            {
                String target = "super.drive";
                boolean res = checkCodeContains(target);
                assertTrue(res);
            }

            @Test
            public void testMain() throws IOException
            {
                String expected = "vroom\nvroom";
                String output = getMethodOutput("main");
                boolean passed = getResults(expected, output, "Checking main output");
                assertTrue(passed);
            }
        }

.. activecode:: u9_muc_wc11
        :language: java
        :practice: T
        :autograde: unittest

        There is a ``Computer`` class with private String instance variables ``name`` and ``company``. You should override the Object ``equals`` method to evaluate whether both ``Computers`` have the same ``name`` and ``company``, in which case they are "equal". There is also a ``Laptop`` class that inherits from ``Computer`` while adding a String ``keyboardType`` instance variable. The ``Laptop`` class should override the ``equals`` method from ``Computer``, instead evaluating whether the ``name``, ``company``, and ``keyboardType`` are the same (remember that ``name`` and ``company`` are not readable to ``Laptop`` so some polymorphism might be needed). Fill in the code so that both ``equals()`` methods work.
        ~~~~
        class Computer
        {
            private String name;
            private String company;

            public Computer(String name, String company)
            {
                this.name = name;
                this.company = company;
            }

            public boolean equals(Computer other)
            {
                // YOUR CODE HERE
            }
        }

        public class Laptop extends Computer
        {

            private String keyboardType;

            public Laptop(String name, String company, String keyboardType)
            {
                super(name, company);
                this.keyboardType = keyboardType;
            }

            public boolean equals(Laptop other)
            {
                // YOUR CODE HERE
            }

            // Ignore the rest of this class

            public static void main(String[] args)
            {
                Computer c = new Computer("HB", "XPX");
                Computer c2 = new Computer("Pear", "Lapbook Pro");
                Laptop l = new Laptop("HB", "XPX", "Mechanical");
                Laptop l2 = new Laptop("HB", "XPX", "Membrane");
                System.out.println(c.equals(c2)); // false
                System.out.println(c.equals(l)); // true
                System.out.println(c.equals(l2)); // true
                System.out.println(c2.equals(l)); // false
                System.out.println(l.equals(l2)); // false
            }
        }

        ====
        import static org.junit.Assert.*;

        import org.junit.*;

        import java.io.*;

        public class RunestoneTests extends CodeTestHelper
        {
            public RunestoneTests()
            {
                super("Laptop");
            }

            @Test
            public void testMain() throws IOException
            {
                String expected = "false\ntrue\ntrue\nfalse\nfalse";
                String output = getMethodOutput("main");
                boolean passed = getResults(expected, output, "Checking main output");
                assertTrue(passed);
            }
        }

.. activecode:: u9_muc_wc12
        :language: java
        :practice: T
        :autograde: unittest

        There is a ``Food`` class with a private ``numCalories`` integer instance variable. ``Food`` has a ``chomp()`` method that returns nothing and prints ``"{numCalories} calories consumed"`` (e.g., ``"5 calories consumed"``). There should also be a ``Fruit`` subclass that inherits from ``Food`` and adds the private ``color`` String instance variable. The ``Fruit`` class should override the ``Food`` ``chomp()`` method to return nothing, print ``"{numCalories} calories consumed"``, and print ``"the fruit is {color}"`` (on a new line). Finally, there should be an ``Apple`` subclass that inherits from ``Fruit``, sets ``color`` to ``"red"``, and adds a ``variety`` String private instance variable. The ``Apple`` class should have an overriden ``chomp()`` method that returns nothing, prints ``"{numCalories} calories consumed"``, prints ``"the fruit is {color}"``, and prints ``"ate {variety} apple"`` (all separated by new lines). Remember that the ``numCalories`` and ``color`` variables are private, so the ``Apple`` class does NOT have access to their values.
        ~~~~
        class Food
        {

            private int numCalories;

            public Food(int numCalories)
            {
                this.numCalories = numCalories;
            }

            public void chomp()
            {
                System.out.println(numCalories + " calories consumed");
            }
        }

        class Fruit extends Food
        {
            private String color;

            public Fruit(int numCalories, String color)
            {
                super(numCalories);
                this.color = color;
            }

            public void chomp()
            {
                // YOUR CODE HERE //
                System.out.println("the fruit is " + color);
            }
        }

        public class Apple extends Fruit
        {
            private String variety;

            public Apple(int numCalories, String color, String variety)
            {
                super(numCalories, color);
                this.variety = variety;
            }

            public void chomp()
            {
                // YOUR CODE HERE
                System.out.println("ate " + variety + " apple");
            }

            // ignore the main method
            public static void main(String[] args)
            {
                Apple a = new Apple(5, "red", "delicious");
                a.chomp();
            }
        }

        ====
        import static org.junit.Assert.*;

        import org.junit.*;

        import java.io.*;

        public class RunestoneTests extends CodeTestHelper
        {
            public RunestoneTests()
            {
                super("Apple");
            }

            @Test
            public void testMain() throws IOException
            {
                String expected = "5 calories consumed\nthe fruit is red\nate delicious apple";
                String output = getMethodOutput("main");
                boolean passed = getResults(expected, output, "Checking main output");
                assertTrue(passed);
            }

            @Test
            public void testCustomInstance() throws IOException
            {
                setDefaultValues(new Object[] {6, "green", "Granny Smith"});
                String expected = "6 calories consumed\nthe fruit is green\nate Granny Smith apple";
                String output = getMethodOutput("chomp");
                boolean passed = getResults(expected, output, "Checking chomp() output");
                assertTrue(passed);
            }
        }

