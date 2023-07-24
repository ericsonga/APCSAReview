.. qnum::
   :prefix: 5-18-
   :start: 1

Unit 5 Write Code for Toggle Code
=========================================================

This is the write code problems associated with the mixed up code problems.

.. activecode:: u5_muc_wc1
        :language: java
        :practice: T
        :autograde: unittest

        Fix the following code so that the ``Dog`` class has a constructor that takes in a String argument ``name`` and assigns that value to the instance variable ``name``.
        ~~~~
        public class Dog
        {
            private String name;

            public Dog(String name)
            {

                // Add your code here //

            }

            public String getName()
            {
                return this.name;
            }

            public static void main(String[] args)
            {
                Dog Bill = new Dog("Bill");
                Dog Dot = new Dog("Dot");
                System.out.println(Bill.getName()); // Should print Bill
                System.out.println(Dot.getName()); // Should print Dot
            }
        }

        ====
        // ch7ex1muc
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
            public void testMain() throws IOException
            {
                String output = getMethodOutput("main");
                String expect = "Bill\nDot\n";
                boolean passed = getResults(expect, output, "Expected output from main");
                assertTrue(passed);
            }

            @Test
            public void testDidntHardcode() throws IOException
            {
                String target = "System.out.println(\"Bill\");";
                String desc = "hardcoded print statements";
                boolean doesntManuallyPrint = checkCodeContains(false, desc, target, false);
                assertTrue(doesntManuallyPrint);
            }
        }

.. activecode:: u5_muc_wc2
        :language: java
        :practice: T
        :autograde: unittest

        Create a constructor for the ``Dog`` class that takes two parameters, ``name`` (a String) and ``age`` (an integer), and saves them in the correspondingly-named instance variables.
        ~~~~
        public class Dog
        {
            private String name;
            private int age;

            // Your code (a constructor) goes here //

            public int updateAge()
            {
                this.age += 1;
                return this.age;
            } // end updateAge

            public String getName()
            {
                return this.name;
            }

            public int getAge()
            {
                return this.age;
            }

            public static void main(String[] args)
            {
                Dog Spot = new Dog("Spot", 5);
                System.out.println(Spot.getName()); // Should output "Spot"
                System.out.println(Spot.getAge()); // Should output 5
                System.out.println(Spot.updateAge()); // Should output 6
                System.out.println(Spot.getAge()); // Should output 6
            }
        }

        ====
        // ch7ex2muc
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
            public void testMain() throws IOException
            {
                String output = getMethodOutput("main");
                String expect = "Spot\n5\n6\n6\n";
                boolean passed = getResults(expect, output, "Expected output from main");
                assertTrue(passed);
            }

            @Test
            public void testDidntHardcode() throws IOException
            {
                String target = "System.out.println(5);";
                String desc = "hardcoded print statements";
                boolean doesntManuallyPrint = checkCodeContains(false, desc, target, false);
                assertTrue(doesntManuallyPrint);
            }
        }

.. activecode:: u5_muc_wc3
        :language: java
        :practice: T
        :autograde: unittest

        Fix the errors (commented as "TODO") in the code so that it defines the ``Cat`` class correctly. There should be a ``makeSound`` method that prints ``"meow"`` and returns nothing. There should also be a ``toString`` method that returns ``"Name: name, Age: age"`` (such that ``Cat("Lucky", 10)``'s ``toString`` method would return ``"Name: Lucky, Age: 10"``).
        ~~~~
        public class Cat
        {
            private String name;
            private int age;

            public Cat(String name, int age)
            {
                this.name = name;
                this.age = age;
            }

            public String makeSound() { // TODO: fix the method header
                System.out.println("meow");
            }

            public String toString()
            {
                // TODO: fill in this method
            }

            public static void main(String[] args)
            {
                Cat Luna = new Cat("Luna", 3);
                Luna.makeSound(); // Should print "meow"
                System.out.println(Luna); // Should print "Name: Luna, Age: 3"
            }
        }

        ====
        // ch7ex3muc
        import static org.junit.Assert.*;

        import org.junit.*;

        import java.io.*;

        public class RunestoneTests extends CodeTestHelper
        {
            public RunestoneTests()
            {
                super("Cat");
            }

            @Test
            public void testMain() throws IOException
            {
                String output = getMethodOutput("main");
                String expect = "meow\nName: Luna, Age: 3\n";
                boolean passed = getResults(expect, output, "Expected output from main");
                assertTrue(passed);
            }

            @Test
            public void testDidntHardcode() throws IOException
            {
                String target = "System.out.println(\"Name: Luna, Age: 3\");";
                String desc = "hardcoded print statements";
                boolean doesntManuallyPrint = checkCodeContains(false, desc, target, false);
                assertTrue(doesntManuallyPrint);
            }

            @Test
            public void testMakeSound() throws IOException
            {
                Object[] params = {"Leo", 6};
                setDefaultValues(params);

                String output = getMethodOutput("makeSound");
                String expect = "meow";

                boolean passed = getResults(expect, output, "Expected output from makeSound");
                assertTrue(passed);
            }

            @Test
            public void testToString() throws IOException
            {
                Object[] params = {"Leo", 6};
                setDefaultValues(params);

                String output = getMethodOutput("toString");
                String expect = "Name: Leo, Age: 6";

                boolean passed = getResults(expect, output, "Expected output from toString");
                assertTrue(passed);
            }
        }

.. activecode:: u5_muc_wc4
        :language: java
        :practice: T
        :autograde: unittest

        Write code that completes the ``Square`` class. It needs two variables: ``length`` and ``numberOfSquares``. ``length`` is an instance variable, while ``numberOfSquares`` is a class variable that tracks how many squares have been made. ``getArea()`` also needs to be completed, which will return the area of the square. Finally, there needs to be a completed ``toString()`` method that returns ``"Length: length"`` (such that ``Square(5)``'s toString method would return ``"Length: 5"``).
        ~~~~
        public class Square
        {

            // Your code here: define variables //
            // hint: numberOfSquares should be static & initialized //

            public Square(int length)
            {
                this.length = length;
                numberOfSquares++;
            }

            public int getArea()
            {
                // Your code here //
            }

            public String toString()
            {
                // Your code here //
            }

            public static void main(String[] args)
            {
                Square.numberOfSquares = 0; // this is only set for evaluation
                Square s1 = new Square(5);
                System.out.println(
                        "Square 1 area: "
                                + s1.getArea()); // Should print "Square 1 area: 25"
                Square s2 = new Square(6);
                System.out.println(
                        "Square 2 area: "
                                + s2.getArea()); // Should print "Square 2 area: 36"
                System.out.println(s1); // Should print "Length: 5"
                System.out.println(s2); // Should print "Length: 6"
                System.out.println(
                        "Number of squares: "
                                + Square
                                        .numberOfSquares); // Should print "Number of
                                                           // squares: 2"
            }
        }

        ====
        // ch7ex4muc
        import static org.junit.Assert.*;

        import org.junit.*;

        import java.io.*;

        public class RunestoneTests extends CodeTestHelper
        {
            public RunestoneTests()
            {
                super("Square");
            }

            @Before
            public void setUp()
            {
                Object[] params = {7};
                setDefaultValues(params);
            }

            @Test
            public void testMain() throws IOException
            {
                String output = getMethodOutput("main");
                String expect =
                        "Square 1 area: 25\n"
                            + "Square 2 area: 36\n"
                            + "Length: 5\n"
                            + "Length: 6\n"
                            + "Number of squares: 2\n";
                boolean passed = getResults(expect, output, "Expected output from main");
                assertTrue(passed);
            }

            @Test
            public void testGetArea() throws IOException
            {
                String output = "" + getMethodOutput("getArea");
                String expect = "49";

                boolean passed = getResults(expect, output, "Expected output from getArea()");
                assertTrue(passed);
            }

            @Test
            public void testToString() throws IOException
            {
                String output = getMethodOutput("toString");
                String expect = "Length: 7";

                boolean passed = getResults(expect, output, "Expected output from toString()");
                assertTrue(passed);
            }
        }

.. activecode:: u5_muc_wc5
        :language: java
        :practice: T
        :autograde: unittest

        Write code that completes the ``Rectangle`` class. It should have constructors that can take zero or two integer parameters. With zero arguments passed, the ``Rectangle`` should be initialized with a ``length`` of 10 and a ``width`` of 10. With two integers passed, the ``Rectangle`` should have a ``length`` equal to the first argument and a ``width`` equal to the second argument. There should also be a ``getArea`` method that returns the area ``length`` times ``width``.
        ~~~~
        public class Rectangle
        {

            private int length;
            private int width;

            public Rectangle()
            {
                // Add code here
            }

            // Add two-parameter constructor

            // Add getArea method

            public static void main(String[] args)
            {
                Rectangle rect1 = new Rectangle();
                Rectangle rect2 = new Rectangle(5, 8);
                System.out.println(
                        "Rect1 area: "
                                + rect1.getArea()); // Should print "Rect1 area: 100"
                System.out.println(
                        "Rect2 area: " + rect2.getArea()); // Should print "Rect2 area: 40"
            }
        }

        ====
        // ch7ex5muc
        import static org.junit.Assert.*;

        import org.junit.*;

        import java.io.*;

        public class RunestoneTests extends CodeTestHelper
        {
            public RunestoneTests()
            {
                super("Rectangle");
            }

            @Test
            public void testMain() throws IOException
            {
                String output = getMethodOutput("main");
                String expect = "Rect1 area: 100\nRect2 area: 40\n";
                boolean passed = getResults(expect, output, "Expected output from main");
                assertTrue(passed);
            }

            // TODO: Add tests for two parameters
        }

.. activecode:: u5_muc_wc6
        :language: java
        :practice: T
        :autograde: unittest

        Write code that completes the ``CelestialBody`` class. Each ``CelestialBody`` instance has an integer ``orbitLength`` (in days) and a integer ``daysSinceDiscovered`` attribute (which is initially 0). Using these, write the ``orbit(int numberOfTimes)`` method that adds ``numberOfTimes * orbitLength`` to ``daysSinceDiscovered`` (e.g., if Planet X has done two orbits with an orbit length of 12 days, it was discovered 24 days ago. If it then orbits another three times, it was discovered 60 days ago). Also, fix the two errors in the class.
        ~~~~
        public class CelestialBody
        {
            private int orbitLength;
            private int daysSinceDiscovered;
            
            // There is an error in this function or in the header
            public CelestialBody(int orbitLength) 
            {                               
                this.daysSinceDiscovered = 0;
            }
            
            // There is an error in this header
            public String orbit(int numberOfTimes) 
            { 
                // YOUR CODE HERE
            }

            public int getDaysSinceDiscovered()
            {
                return this.daysSinceDiscovered;
            }

            public static void main(String[] args)
            {
                CelestialBody moon = new CelestialBody(28);
                moon.orbit(5);
                System.out.println(
                        "If the moon has orbited five times, it was discovered "
                                + moon.getDaysSinceDiscovered()
                                + " days ago.");
            }
        }

        ====
        // ch7ex6muc
        import static org.junit.Assert.*;

        import org.junit.*;

        import java.io.*;

        public class RunestoneTests extends CodeTestHelper
        {
            public RunestoneTests()
            {
                super("CelestialBody");
            }

            @Test
            public void testMain() throws IOException
            {
                String output = getMethodOutput("main");
                String expect = "If the moon has orbited five times, it was discovered 140 days ago.\n";
                boolean passed = getResults(expect, output, "Expected output from main");
                assertTrue(passed);
            }

            @Test
            public void testCheckHardcode() throws IOException
            {
                String target =
                        "System.out.println(\"If the moon has orbited five times, it was discovered 140"
                            + " days ago.\")";
                String desc = "hardcoded print statements";
                boolean doesntManuallyPrint = checkCodeContains(false, desc, target, false);
                assertTrue(doesntManuallyPrint);
            }
        }

.. activecode:: u5_muc_wc7
        :language: java
        :practice: T
        :autograde: unittest

        Write code to create a ``Person`` class. Each ``Person`` instance should have a String ``name`` attribute and a integer ``age`` attribute. There should also be ``getName`` and ``setName`` methods. Finally, there should to be a ``toString`` method that returns “{name} is {age} years old” (e.g., ``Person("Carol", 12)``’s toString method would return ``"Carol is 12 years old"``).
        ~~~~
        public class Person
        {
            // define a String instance variable "name"

            // define a int instance variable called "age"

            // create a constructor that takes name and age (in that order) and initializes
            // the instance variables

            // create a getName method

            // create a setName method

            // create a toString method that should return "{name} is {age} years old"
            // see the main method for an example

            public static void main(String[] args)
            {
                Person p = new Person("Joe", 2);

                System.out.println(
                        "p's name: " + p.getName()); // Should print "p's name: Joe"

                p.setName("Joseph"); // Changing name to Joseph

                System.out.println(
                        "p's new name: "
                                + p.getName()); // Should print "p's new name: Joseph"

                System.out.println(p); // Should print "Joseph is 35 years old"
            }
        }

        ====
        // ch7ex7muc
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
                String output = getMethodOutput("main");
                String expect = "p's name: Joe\np's new name: Joseph\nJoseph is 2 years old\n";
                boolean passed = getResults(expect, output, "Expected output from main");
                assertTrue(passed);
            }

            @Test
            public void testCheckHardcode() throws IOException
            {
                String target = "System.out.println(\"Joseph is 35 years old\")";
                String desc = "hardcoded print statements";
                boolean doesntManuallyPrint = checkCodeContains(false, desc, target, false);
                assertTrue(doesntManuallyPrint);
            }

            @Test
            public void testGetName() throws IOException
            {
                Object[] params = {"Jimmy", 3};
                setDefaultValues(params);
                String output = getMethodOutput("getName");
                String expect = "Jimmy";
                boolean passed = getResults(expect, output, "Expected output from getName");
                assertTrue(passed);
            }

            // TODO: Add tests for the setter method
        }

.. activecode:: u5_muc_wc8
        :language: java
        :practice: T
        :autograde: unittest

        Write code to create a ``Point`` class. Each ``Point`` instance should have integer ``x`` and ``y`` attributes (and the constructor should take those in that order). There should be getter methods for each: ``getX`` and ``getY``. There should be a ``getDistance`` method that takes in another ``Point`` object as an argument and calculates the euclidean distance from this object to that one (which would be sqrt((this.x - other.x) ^ 2 + (this.y - other.y) ^ 2)). Finally, there should to be a ``toString`` method that returns “(Point.x, Point.y)” (e.g., ``Point(3, 4)``’s toString method would return ``"(3, 4)"``).
        ~~~~
        public class Point
        {
            private int x;
            private int y;

            public Point(int x, int y)
            {
                // YOUR CODE HERE
            }

            public double getDistance(Point other)
            {
                // YOUR CODE HERE
                // HINT: Use Math.pow and Math.sqrt (from your reference sheet)
            }

            public int getX()
            {
                // YOUR CODE HERE
            }

            public int getY()
            {
                // YOUR CODE HERE
            }

            public String toString()
            {
                // YOUR CODE HERE
            }

            public static void main(String[] args)
            {
                Point origin = new Point(0, 0);
                Point C = new Point(3, 4);
                System.out.println("The origin is at "
                                + origin); // Should print "The origin is at (0, 0)"
                System.out.println("That is "
                                + origin.getDistance(C)
                                + " units away from "
                                + C); // Should print "That is 5.0 units away from (3, 4)"
                Point D = new Point(5, 6);
                System.out.println("And "
                                + Math.round(origin.getDistance(D) * 100) / 100.0
                                + " units away from "
                                + D); // Should print "And 7.81 units away from (5, 6)"
                System.out.println(C
                                + " and "
                                + D
                                + " are "
                                + Math.round(C.getDistance(D) * 100) / 100.0
                                + " units away from each other"); // Should print "(3, 4)
                                                                  // and (5, 6) are 2.83
                                                                  // units away from each
                                                                  // other"
            }
        }

        ====
        // ch7ex8muc
        import static org.junit.Assert.*;

        import org.junit.*;

        import java.io.*;

        public class RunestoneTests extends CodeTestHelper
        {
            public RunestoneTests()
            {
                super("Point");
            }

            @Test
            public void testMain() throws IOException
            {
                String output = getMethodOutput("main");
                String expect =
                        "The origin is at (0, 0)\n"
                            + "That is 5.0 units away from (3, 4)\n"
                            + "And 7.81 units away from (5, 6)\n"
                            + "(3, 4) and (5, 6) are 2.83 units away from each other";
                boolean passed = getResults(expect, output, "Expected output from main");
                assertTrue(passed);
            }

            @Test
            public void testCheckHardcode() throws IOException
            {
                String target = "System.out.println(\"The origin is at (0, 0)\")";
                String desc = "hardcoded print statements";
                boolean doesntManuallyPrint = checkCodeContains(false, desc, target, false);
                assertTrue(doesntManuallyPrint);
            }

            @Test
            public void testGetX() throws IOException
            {
                Object[] params = {2, 3};
                setDefaultValues(params);
                String output = "" + getMethodOutput("getX");
                String expect = "2";
                boolean passed = getResults(expect, output, "Expected output from getX");
                assertTrue(passed);
            }

            @Test
            public void testGetY() throws IOException
            {
                Object[] params = {2, 3};
                setDefaultValues(params);
                String output = getMethodOutput("getY");
                String expect = "3";
                boolean passed = getResults(expect, output, "Expected output from getY");
            }

            // TODO: Add test for getDistance
        }

.. activecode:: u5_muc_wc9
        :language: java
        :practice: T
        :autograde: unittest

        Write code to create an ``Account`` class. Each ``Account`` instance should have integer ``balance`` and String ``owner`` attributes (and the constructor should take those in that order). To increase ``balance``, there should be a ``deposit`` method that takes in an integer argument and adds that to ``balance``. To decrease ``balance``, there should be a ``withdraw`` method that takes in an integer argument and subtracts that from ``balance``. However, if ``balance`` would end as a negative number, it should just be set to zero. Finally, there should be a ``toString`` method that returns ``"Account.owner: $Account.balance"`` (so for ``Account(5, "Tom")`` it should return ``"Tom: $5"``).
        ~~~~
        public class Account
        {
            private int balance;
            private String owner;

            // Create a constructor

            // create the deposit method

            // create the withdraw method

            // create the toString method

            public static void main(String[] args)
            {
                System.out.println("Creating account with $500...");
                Account tomsAccount = new Account(500, "Tom");
                System.out.println(tomsAccount); // Should output "Tom: $500"
                System.out.println("Depositing $5...");
                tomsAccount.deposit(5);
                System.out.println(tomsAccount); // Should output "Tom: $505"
                System.out.println("Withdrawing $10...");
                tomsAccount.withdraw(10);
                System.out.println(tomsAccount); // Should output "Tom: $495"
                System.out.println("Withdrawing $500...");
                tomsAccount.withdraw(500);
                System.out.println(tomsAccount); // should output "Tom: $0"
            }
        }

        ====
        // ch7ex9muc
        import static org.junit.Assert.*;

        import org.junit.*;

        import java.io.*;

        public class RunestoneTests extends CodeTestHelper
        {
            public RunestoneTests()
            {
                super("Account");
            }

            @Test
            public void testMain() throws IOException
            {
                String output = getMethodOutput("main");
                String expect =
                        "Creating account with $500...\n"
                            + "Tom: $500\n"
                            + "Depositing $5...\n"
                            + "Tom: $505\n"
                            + "Withdrawing $10...\n"
                            + "Tom: $495\n"
                            + "Withdrawing $500...\n"
                            + "Tom: $0";
                boolean passed = getResults(expect, output, "Expected output from main");
                assertTrue(passed);
            }

            @Test
            public void testCheckHardcode() throws IOException
            {
                String target = "System.out.println(\"Tom: $500\")";
                String desc = "hardcoded print statements";
                boolean doesntManuallyPrint = checkCodeContains(false, desc, target, false);
                assertTrue(doesntManuallyPrint);
            }
        }

.. activecode:: u5_muc_wc10
        :language: java
        :practice: T
        :autograde: unittest

        Write code that completes the ``Character`` class. Each ``Character`` instance has an integer ``healthPoints`` (abbreviated HP) attribute and a String ``name`` attribute. They also have the associated ``getHP``, ``setHP``, and ``getName`` methods. Using these, write code that finishes the ``fight(Character other)`` method that lets a character fight another. If the character's ``healthPoints`` are the same or more than ``other``'s, ``other``'s HP should be set to zero, the current character's HP should be set to the difference, and the program should print “{the character's name} wins”. That entire section is already completed. On the other hand, if ``other``'s HP is greater, the current character's HP should be set to zero, ``other``'s HP should be set to the difference, and the program should print “{other’s name} wins”.
        ~~~~
        public class Character
        {
            private int healthPoints; // current HP of the character
            private String name;

            public Character(int healthPoints, String name)
            {
                this.healthPoints = healthPoints;
                this.name = name;
            }

            public int getHP()
            {
                return this.healthPoints;
            }

            public void setHP(int newHP)
            {
                this.healthPoints = newHP;
            }

            public String getName()
            {
                return this.name;
            }

            public void fight(Character other)
            {

                if (this.getHP() >= other.getHP())
                {

                    // This part of the function is finished for you
                    // update the healthPoints (HP) of this object to be the difference
                    // between its HP and other's HP
                    this.setHP(this.getHP() - other.getHP()); 
                    

                    other.setHP(0); // update other's HP to be 0

                    System.out.println(this.getName() + " wins"); // print outcome
                }
                else
                {

                    // YOUR CODE HERE //

                    // TODO: update the healthPoints (HP) of other to be the difference
                    // between its HP and this object's HP

                    // TODO: update this object's HP to be 0

                    // TODO: print "{other's name} wins"
                }
            }

            public static void main(String[] args)
            {
                Character hero = new Character(10, "oiraM");
                Character villain1 = new Character(3, "abmooG");
                Character villain2 = new Character(7, "igiulaW");
                System.out.println("---Fight between oiraM and abmooG---");
                hero.fight(villain1); // Prints "oiraM wins"
                System.out.println(
                        "Remaining HPs -- oiraM: "
                                + hero.getHP()
                                + " and abmooG: "
                                + villain1
                                        .getHP()); // Prints "Remaining HPs -- oiraM: 7 and
                                                   // abmooG: 0"

                System.out.println("---Fight between oiraM and igiulaW---");
                hero.fight(villain2); // Should print "oiraM wins"
                System.out.println(
                        "Remaining HPs -- oiraM: "
                                + hero.getHP()
                                + " and igiulaW: "
                                + villain2
                                        .getHP()); // Should print "Remaining HPs -- oiraM:
                                                   // 0 and igiulaW: 0"
                System.out.println("oiraM used health potion to regain 5 HP");
                hero.setHP(5);

                Character villain3 = new Character(13, "reswoB");
                System.out.println("---Fight between oiraM and reswoB---");
                hero.fight(villain3); // Should print "reswoB wins"
                System.out.println(
                        "Remaining HPs -- oiraM: "
                                + hero.getHP()
                                + " and reswoB: "
                                + villain3
                                        .getHP()); // Should print "Remaining HPs -- oiraM:
                                                   // 0 and reswoB: 8"
            }
        }

        ====
        // ch7ex10muc
        import static org.junit.Assert.*;

        import org.junit.*;

        import java.io.*;

        public class RunestoneTests extends CodeTestHelper
        {
            public RunestoneTests()
            {
                super("Character");
            }

            @Test
            public void testMain() throws IOException
            {
                String output = getMethodOutput("main");
                String expect =
                        "---Fight between oiraM and abmooG---\n"
                            + "oiraM wins\n"
                            + "Remaining HPs -- oiraM: 7 and abmooG: 0\n"
                            + "---Fight between oiraM and igiulaW---\n"
                            + "oiraM wins\n"
                            + "Remaining HPs -- oiraM: 0 and igiulaW: 0\n"
                            + "oiraM used health potion to regain 5 HP\n"
                            + "---Fight between oiraM and reswoB---\n"
                            + "reswoB wins\n"
                            + "Remaining HPs -- oiraM: 0 and reswoB: 8\n";
                boolean passed = getResults(expect, output, "Expected output from main");
                assertTrue(passed);
            }

            @Test
            public void testCheckHardcode() throws IOException
            {
                String target = "System.out.println(\"oiraM wins\")";
                String desc = "hardcoded print statements";
                boolean doesntManuallyPrint = checkCodeContains(false, desc, target, false);
                assertTrue(doesntManuallyPrint);
            }
        }

