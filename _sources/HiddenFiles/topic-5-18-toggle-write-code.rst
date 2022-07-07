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

            public Dog(String name) {

                // Add your code here //

            }

            public String getName() {
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
            public RunestoneTests() {
                super("Dog");
            }
    
            @Test
            public void testMain() throws IOException {
                String output = getMethodOutput("main");
                String expect = "Bill\nDot\n";
                boolean passed = getResults(expect, output, "Expected output from main");
                assertTrue(passed);
            }
    
            @Test
            public void testDidntHardcode() throws IOException {
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
        public class Dog {
            private String name;
            private int age;
            
            // Your code (a constructor) goes here //

            public int updateAge() {
                this.age += 1;
                return this.age;
            } // end updateAge
            
            public String getName() {
                return this.name;
            }
            
            public int getAge() {
                return this.age;
            }
            
            public static void main(String[] args) {
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
            public RunestoneTests() {
                super("Dog");
            }
    
            @Test
            public void testMain() throws IOException {
                String output = getMethodOutput("main");
                String expect = "Spot\n5\n6\n6\n";
                boolean passed = getResults(expect, output, "Expected output from main");
                assertTrue(passed);
            }
    
            @Test
            public void testDidntHardcode() throws IOException {
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
        public class Cat {
            private String name;
            private int age;
        
            public Cat(String name, int age) { 
                this.name = name;
                this.age = age;
            }
            public String makeSound() {  // TODO: fix the method header
                System.out.println("meow");
            }
            public String toString() {
                // TODO: fill in this method
            }

            public static void main(String[] args) {
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
            public RunestoneTests() {
                super("Cat");
            }
    
            @Test
            public void testMain() throws IOException {
                String output = getMethodOutput("main");
                String expect = "meow\nName: Luna, Age: 3\n";
                boolean passed = getResults(expect, output, "Expected output from main");
                assertTrue(passed);
            }
    
            @Test
            public void testDidntHardcode() throws IOException {
                String target = "System.out.println(\"Name: Luna, Age: 3\");";
                String desc = "hardcoded print statements";
                boolean doesntManuallyPrint = checkCodeContains(false, desc, target, false);
                assertTrue(doesntManuallyPrint);
            }

            @Test 
            public void testMakeSound() throws IOException {
                Object[] params = {"Leo", 6};
                setDefaultValues(params);
                
                String output = getMethodOutput("makeSound");
                String expect = "meow";

                boolean passed = getResults(expect, output, "Expected output from makeSound");
                assertTrue(passed);
            }

            @Test
                public void testToString() throws IOException {
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
        public class Square {

            // Your code here — define variables //
            // hint — numberOfSquares should be static & initialized //
            
            public Square(int length) { 
                this.length = length;
                numberOfSquares++;
            } 
            
            public int getArea() {
                // Your code here //
            } 
            
            public String toString() {
                // Your code here //
            } 
            
            public static void main(String[] args) {
                Square.numberOfSquares = 0;  // this is only set for evaluation
                Square s1 = new Square(5);
                System.out.println("Square 1 area: " + s1.getArea()); // Should print "Square 1 area: 25"
                Square s2 = new Square(6);
                System.out.println("Square 2 area: " + s2.getArea()); // Should print "Square 2 area: 36"
                System.out.println(s1); // Should print "Length: 5"
                System.out.println(s2); // Should print "Length: 6"
                System.out.println("Number of squares: " + Square.numberOfSquares); // Should print "Number of squares: 2"
            }
        }
        ====
		// ch7ex4muc
        import static org.junit.Assert.*;
        import org.junit.*;
        import java.io.*;
    
        public class RunestoneTests extends CodeTestHelper
        {
            public RunestoneTests() {
                super("Square");
            }

            @Before
            public void setUp() {
                Object[] params = {7};
                setDefaultValues(params);
            }
          
            @Test
            public void testMain() throws IOException {
                String output = getMethodOutput("main");
                String expect = "Square 1 area: 25\nSquare 2 area: 36\nLength: 5\nLength: 6\nNumber of squares: 2\n";
                boolean passed = getResults(expect, output, "Expected output from main");
                assertTrue(passed);
            }
    
            
            @Test
            public void testGetArea() throws IOException {
                String output = "" + getMethodOutput("getArea");
                String expect = "49";

                boolean passed = getResults(expect, output, "Expected output from getArea()");
                assertTrue(passed);
            }

            @Test
            public void testToString() throws IOException {
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
   
        Write code that completes the ``Rectangle`` class. It should have three constructors that can take zero, one, or two integer parameters. With zero arguments passed, the ``Rectangle`` should be initialized with a ``length`` of 10 and a ``width`` of 10. With one integer passed, the ``Rectangle`` should have a ``length`` and ``width`` equal to that argument (i.e., you assume it's a square). With two integers passed, the ``Rectangle`` should have a ``length`` equal to the first argument and a ``width`` equal to the second argument. There should also be an ``getArea`` method that returns the area ``length`` times ``width``. Finally, there should be a ``toString`` method which returns ``"Length: length, Width: width"`` (such that ``Rectangle(5, 7)``'s toString method would return ``"Length: 5, Width: 7"``. 
        ~~~~
        public class Rectangle {

            private int length;
            private int width;

            public Rectangle() { 
                // Add code here
            }

            public Rectangle(int length) {
                // Add code here
            }

            // Add two-parameter constructor

            // Add getArea method

            // Add toString method

            
            public static void main(String[] args) {
                Rectangle rect1 = new Rectangle();
                Rectangle rect2 = new Rectangle(6);
                Rectangle rect3 = new Rectangle(5, 8);
                System.out.println("Rect1 area: " + rect1.getArea()); // Should print "Rect1 area: 100"
                System.out.println("Rect2 area: " + rect2.getArea()); // Should print "Rect2 area: 36"
                System.out.println("Rect3 area: " + rect3.getArea()); // Should print "Rect3 area: 40"
                System.out.println(rect1); // Should print "Length: 10, Width: 10"
                System.out.println(rect2); // Should print "Length: 6, Width: 6"
                System.out.println(rect3); // Shuld print "Length: 5, Width: 8"
            }
        }
        ====
		// ch7ex5muc
        import static org.junit.Assert.*;
        import org.junit.*;
        import java.io.*;
    
        public class RunestoneTests extends CodeTestHelper
        {
            public RunestoneTests() {
                super("Rectangle");
            }
          
            @Test
            public void testMain() throws IOException {
                String output = getMethodOutput("main");
                String expect = "Rect1 area: 100\nRect2 area: 36\nRect3 area: 40\nLength: 10, Width: 10\nLength: 6, Width: 6\nLength: 5, Width: 8";
                boolean passed = getResults(expect, output, "Expected output from main");
                assertTrue(passed);
            }
    
            
            @Test
            public void testNoParameters() throws IOException {
                String output = "" + getMethodOutput("toString");
                String expect = "Length: 10, Width: 10";

                boolean passed = getResults(expect, output, "Expected output from toString() for no parameters");
                assertTrue(passed);
            }

            // TODO: Add tests for one parameter and two parameters
    
        }

.. activecode:: u5_muc_wc6
        :language: java
        :practice: T
        :autograde: unittest
   
        Write code that completes the ``Character`` class. Each ``Character`` instance has an integer ``healthPoints`` (abbreviated HP) attribute and a String ``name`` attribute. They also have the associated ``getHP``, ``setHP``, and ``getName`` methods. Using these, write code that finishes the ``fight(Character other)`` method that lets a character fight another. If the character's ``healthPoints`` are more than ``other``'s, ``other``'s HP should be set to zero, the current character's HP should be set to the difference, and the program should print ``"Outcome: {the character's name} wins with {the character's HP} HP remaining"``. That entire section is already completed. On the other hand, if ``other``'s HP is greater, the current character's HP should be set to zero, ``other``'s HP should be set to the difference, and the program should print ``”Outcome: {other’s name} wins with {other’s HP} HP remaining”``. Finally, if they have the same HP, the program should print ``”Outcome: Tie”`` and set both HPs to 0.
        ~~~~
        public class Character {
            private int healthPoints; // current HP of the character
            private String name;

            public Character(int healthPoints, String name) {
                this.healthPoints = healthPoints;
                this.name = name;
            }

            public int getHP() {
                return this.healthPoints;
            }

            public void setHP(int newHP) {
                this.healthPoints = newHP;
            }

            public String getName() {
                return this.name;
            }

            public void fight(Character other) {
                
                if (this.getHP() > other.getHP()) {

                    // This part of the function is finished for you

                    this.setHP(this.getHP() - other.getHP()); // update the healthPoints (HP) of this object to be the difference between its HP and other's HP


                    other.setHP(0); // update other's HP to be 0


                    System.out.println("Outcome: " + this.getName() + " wins with " + this.getHP() + "HP remaining"); // print outcome
                }

                else if (this.getHP() < other.getHP()) {

                    // YOUR CODE HERE //
                    
                    // TODO: update the healthPoints (HP) of other to be the difference between its HP and this object's HP

                    // TODO: update this object's HP to be 0

                    // TODO: print "Outcome: {other's name} wins with {other's HP} HP remaining"
                }

                else { // This is the case where the characters have the same HP

                    // YOUR CODE HERE //
                    
                    // TODO: set both healths to 0
                    // TODO: print "Outcome: Tie"
                
                }
            }

            public static void main(String[] args) {
                Character hero = new Character(10, "oiraM");
                Character villain1 = new Character(3, "abmooG");
                Character villain2 = new Character(7, "igiulaW");
                System.out.println("---Fight between oiraM and abmooG---");
                hero.fight(villain1); // Prints "Outcome: oiraM wins with 7HP remaining"
                System.out.println("Remaining HPs -- oiraM: " + hero.getHP() + " and abmooG: " + villain1.getHP()); // Prints "Remaining HPs -- oiraM: 7 and abmooG: 0"

                System.out.println("---Fight between oiraM and igiulaW---");
                hero.fight(villain2); // Should print "Outcome: Tie"
                System.out.println("Remaining HPs -- oiraM: " + hero.getHP() + " and igiulaW: " + villain2.getHP()); // Should print "Remaining HPs -- oiraM: 0 and igiulaW: 0"
                System.out.println("oiraM used health pot to regain 5 HP");
                hero.setHP(5);

                Character villain3 = new Character(13, "reswoB");
                System.out.println("---Fight between oiraM and reswoB---");
                hero.fight(villain3); // Should print "Winner: reswoB, Remaining HP: 8"
                System.out.println("Remaining HPs -- oiraM: " + hero.getHP() + " and reswoB: " + villain3.getHP()); // Should print "Remaining HPs -- oiraM: 0 and reswoB: 8"
            }
            
            }
        ====
		// ch7ex6muc
        import static org.junit.Assert.*;
        import org.junit.*;

        import jdk.jfr.Timestamp;

        import java.io.*;
    
        public class RunestoneTests extends CodeTestHelper
        {
            public RunestoneTests() {
                super("Character");
            }
          
            @Test
            public void testMain() throws IOException {
                String output = getMethodOutput("main");
                String expect = "---Fight between oiraM and abmooG---\nOutcome: oiraM wins with 7HP remaining\nRemaining HPs -- oiraM: 7 and abmooG: 0\n---Fight between oiraM and igiulaW---\nOutcome: Tie\nRemaining HPs -- oiraM: 0 and igiulaW: 0\noiraM used health pot to regain 5 HP\n---Fight between oiraM and reswoB---\nOutcome: reswoB wins with 8HP remaining\nRemaining HPs -- oiraM: 0 and reswoB: 8\n";
                boolean passed = getResults(expect, output, "Expected output from main");
                assertTrue(passed);
            }

            @Test 
            public void testCheckHardcode() throws IOException {
                String target = "System.out.println(\"Winner: oiraM, Remaining HP: 7\")";
                String desc = "hardcoded print statements";
                boolean doesntManuallyPrint = checkCodeContains(false, desc, target, false);
                assertTrue(doesntManuallyPrint);
            }
        }
.. activecode:: u5_muc_wc7
        :language: java
        :practice: T
        :autograde: unittest
   
        Write code to create a ``Person`` class. Each ``Person`` instance should have a String ``name`` attribute and a integer ``age`` attribute. There should be setter/getter methods for each: ``getName``, ``setName``, ``getAge``, ``setAge``. Finally, there should to be a ``toString`` method that returns ``“{name} is {age} years old”`` (e.g., ``Person(“Carol”, 12)``’s toString method would return ``”Carol is 12 years old”``).
        ~~~~
        public class Person {
            // define a String instance variable "name"
            
            // define a int instance variable called "age"
            
            // create a constructor that takes name and age (in that order) and initializes the instance variables
        
            // create a getName method
            
            // create a setName method

            // create a getAge method

            // create a setAge method

            // create a toString method that should return "{name} is {age} years old"
            // see the main method for an example

            public static void main(String[] args) {
                Person p = new Person("Joe", 1);
                
                System.out.println("p's name: " + p.getName()); // Should print "p's name: Joe"
                System.out.println("p's age: " + p.getAge()); // Should print "p's age: 1"
                
                p.setName("Joseph"); // Changing name to Joseph

                System.out.println("p's new name: " + p.getName()); // Should print "p's new name: Joseph"

                p.setAge(35); // Changing age to 5

                System.out.println("p's new age: " + p.getAge()); // Should print "p's new age: 35"

                System.out.println(p); // Should print "Joseph is 35 years old"
            }
        }
        ====
        // ch7ex7muc
        import static org.junit.Assert.*;
        import org.junit.*;
        import jdk.jfr.Timestamp;
        import java.io.*;

        public class RunestoneTests extends CodeTestHelper
        {
            public RunestoneTests() {
                super("Person");
            }
        
            @Test
            public void testMain() throws IOException {
                String output = getMethodOutput("main");
                String expect = "p's name: Joe\np's age: 1\np's new name: Joseph\np's new age: 35\nJoseph is 35 years old\n";
                boolean passed = getResults(expect, output, "Expected output from main");
                assertTrue(passed);
            }

            @Test 
            public void testCheckHardcode() throws IOException {
                String target = "System.out.println(\"Joseph is 35 years old\")";
                String desc = "hardcoded print statements";
                boolean doesntManuallyPrint = checkCodeContains(false, desc, target, false);
                assertTrue(doesntManuallyPrint);
            }

            @Test
            public void testGetName() throws IOException {
                Object[] params = {"Jimmy", 3};
                setDefaultValues(params);
                String output = getMethodOutput("getName");
                String expect = "Jimmy";
                boolean passed = getResults(expect, output, "Expected output from getName");
                assertTrue(passed);
            }
            @Test
            public void testGetAge() throws IOException {
                Object[] params = {"Jimmy", 3};
                setDefaultValues(params);
                String output = getMethodOutput("getAge");
                String expect = "" + 3;
                boolean passed = getResults(expect, output, "Expected output from getAge");
            }

            // TODO: Add tests for the setter methods
        }