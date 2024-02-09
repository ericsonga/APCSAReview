.. include:: ../common.rst

.. qnum::
   :prefix: 9-4-
   :start: 1


|Time45|

super Keyword
============================================

Sometimes you want the subclass to do more than what a superclass' method is doing.  You want to still execute the superclass method, but you also want to override the method to do something else.  But, since you have overridden the parent method how can you still call it?  You can use ``super.method()`` to force the parent's method to be called.

We've used super() before to call the superclass' constructor. There are two uses of the keyword super:

1. **super();** or **super(arguments);** calls just the super constructor if put in as the first line of a subclass constructor.
2. **super.method();** calls a superclass' method (not constructors).

The keyword super is very useful in allowing us to first execute the superclass method and then add on to it in the subclass.

|CodingEx| **Coding Exercise**

In the example below, the ``Student`` class overrides the ``getFood`` method of the ``Person`` class, and it uses ``super.getFood()`` to call the ``Person`` ``getFood`` method before adding on to it. Here, a ``Person`` is associated with the food "Hamburger" and a ``Student`` is associated with "Hamburger" and "Taco".

.. activecode:: SuperEx
   :language: java
   :autograde: unittest

   Add another subclass called Vegan that inherits from the Student class. Add a Vegan contructor that takes a name as an argument and passes it to the super constructor. Override the getFood() method in Vegan to call the superclass getFood() but add a "No " in front of it and then say "but " and add a vegan food. Change Javier to a Vegan object in main() and try it out!
   ~~~~
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
           return output + " and Pizza";
       }

       public int getId()
       {
           return this.id;
       }

       public void setId(int theId)
       {
           this.id = theId;
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
              String output = getMethodOutput("main");

              String expect = "No Hamburger and Pizza but * \n";

              boolean passed = getResults(expect, output, "Expected output from main");
              assertTrue(passed);
          }

          @Test
          public void test1()
          {
              String target = "No \" + super.getFood()";
              boolean passed =
                      checkCodeContains("\"No \" + super.getFood() called in Vegan class", target);
              assertTrue(passed);
          }
      }

How does this work?  Remember that an object always keeps a reference to the class that created it and always looks for a method during execution starting in the class that created it.  If it finds the method in the class that created it, it will execute that method.  If it doesn't find it in the class that created it, it will look at the parent of that class.  It will keep looking up the ancestor chain until it finds the method, all the way up to the Object class.  The method has to be there, or else the code would not have compiled.

When the student ``getFood()`` method is executed it will start executing the ``getFood`` method in ``Student``.  When it gets to ``super.getFood()`` it will execute the ``getFood`` method in ``Person``.  This method will return the string ``"Hamburger"``.  Then execution will continue in the ``getFood`` method of ``Student`` and  return the string ``"Hamburger and Taco"``.

|Exercise| **Check your understanding**

.. mchoice:: qoo_6s
   :practice: T
   :answer_a: AB
   :answer_b: ABDC
   :answer_c: ABCD
   :answer_d: ABC
   :answer_e: Nothing is printed.
   :correct: b
   :feedback_a: This would be true if the object was created of type Base using new Base. But the object is really a Derived object. So all methods are looked for starting with the Derived class.
   :feedback_b: Even though b is declared as type Base it is created as an object of the Derived class, so all methods to it will be resolved starting with the Derived class. So the methodOne() in Derived will be called. This method first calls super.methodOne so this will invoke the method in the superclass (which is Base). So next the methodOne in Base will execute. This prints the letter "A" and invokes this.methodTwo(). Since b is really a Derived object, we check there first to see if it has a methodTwo. It does, so execution continues in Derived's methodTwo. This method invokes super.methodTwo. So this will invoke the method in the super class (Base) named methodTwo. This method prints the letter "B" and then returns. Next the execution returns from the call to the super.methodTwo and prints the letter "D". We return to the Base class methodOne and return from that to the Derived class methodOne and print the letter "C".
   :feedback_c: After the call to methodOne in the super class printing "A", the code continues with the implicit this.methodTwo which resolves from the current object's class which is Derived. methodTwo in the Derived class is executed which then calls super.methodTwo which invokes printin "B" from methodTwo in the Base class. Then the "D" in the Derive methodTwo is printed. Finally the program returns to methodOne in the Derived class are prints "C".
   :feedback_d: The call to methodTwo in super.methodOne is to this.methodTwo which is the method from the Derived class. Consequently the "D" is also printed.
   :feedback_e: Remember that it will first look for a method in its own class.

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

The ``toString`` method is commonly overridden. A subclass can override
``toString`` but in its new ``toString`` method, it can call
``super.toString()`` to get a string to which it can add its own instance
variables.

.. code-block:: java

   // overridden toString() in subclass
   public String toString()
   {
     return super.toString() + "\n" + subclassInstanceVariables;
   }

|Groupwork| Programming Challenge : Customer Info
-------------------------------------------------

The ``Customer`` class below keeps track of the names and addresses of customers. It has a ``toString`` method that prints out the name and address of the object.

1. Create a subclass ``OnlineCustomer`` that inherits from the ``Customer`` class and adds a new instance variable for the email address of a online customer.

2. Write an OnlineCustomer constructor that take 3 arguments, name, address, email, and passes the name and address to the super (Customer) constructor.

3. Override the ``toString`` method in the ``OnlineCustomer`` class to call the super class's ``toString`` method and then add on the email address. See the example above for help.

4. Test the class by uncommenting the ``OnlineCustomer`` objects in the main method.

.. activecode:: challenge-9-4-Customer-super
   :language: java
   :autograde: unittest

   Complete the OnlineCustomer class below to inherit from Customer and add an email address, a constructor, and override the toString() method.
   ~~~~
   public class Customer
   {
       private String name;
       private String address;

       public Customer(String n, String a)
       {
           name = n;
           address = a;
       }

       public String toString()
       {
           return "Name: " + name + "\nAddress: " + address;
       }

       public static void main(String[] args)
       {
           Customer c = new Customer("Fran Santiago", "123 Main St., Anytown, USA");
           System.out.println(c);

           // Uncomment these to test OnlineCustomer
           // OnlineCustomer c2 = new OnlineCustomer("Jasper Smith", 
           //       "456 High St., Anytown, USA", "jsmith456@gmail.com");
           // System.out.println(c2);
       }
   }

   // Complete the OnlineCustomer class to inherit from Customer
   // It should have an email attribute,
   // a constructor with 3 arguments (name, address, email) that uses the super
   // constructor,
   // and an overridden toString() method that calls the super toString() method
   //  and then prints "\nEmail:" and the email variable.
   
   class OnlineCustomer 
   {
   
   }

   ====
    import static org.junit.Assert.*;

    import org.junit.*;

    import java.io.*;

    public class RunestoneTests extends CodeTestHelper
    {

        @Test
        public void testMain() throws IOException
        {
            String output = getMethodOutput("main");
            String expect =
                    "Name: Fran Santiago\n"
                            + "Address: 123 Main St., Anytown, USA\n"
                            + "Name: Jasper Smith\n"
                            + "Address: 456 High St., Anytown, USA\n"
                            + "Email: jsmith456@gmail.com";
            boolean passed = getResults(expect, output, "Expected output from main");
            assertTrue(passed);
        }

        @Test
        public void containsExtends()
        {
            String target = "OnlineCustomer extends Customer";
            boolean passed = checkCodeContains(target);
            assertTrue(passed);
        }

        @Test
        public void test1()
        {
            String code = getCode();
            String target = "public String toString()";

            int num = countOccurencesRegex(code, target);
            boolean passed = (num == 2);

            getResults("2", "" + num, "2 toString methods", passed);
            assertTrue(passed);
        }

        @Test
        public void containsSuper()
        {
            String target = "super(";
            boolean passed = checkCodeContains(target);
            assertTrue(passed);
        }
    }

Summary
--------

- The keyword super can be used to call a superclass’s constructors and methods.

- The superclass method can be called in a subclass by using the keyword super with the method name and passing appropriate parameters.
