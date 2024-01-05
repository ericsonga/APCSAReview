.. include:: ../common.rst

.. qnum::
   :prefix: 9-7-
   :start: 1


.. |AP CSA Reference Sheet| raw:: html

   <a href="https://apstudents.collegeboard.org/ap/pdf/ap-computer-science-a-java-quick-reference_0.pdf" target="_blank">AP CSA Java Quick Reference Sheet</a>

|Time45|

Object Superclass
====================

The ``Object`` class is the superclass of all other classes in Java and a part
of the built-in ``java.lang`` package. If a parent class isn’t specified using
the ``extends`` keyword, the class will inherit from the ``Object`` class. What
does a class inherit from the ``Object`` class? The |AP CSA Reference Sheet|
lists the two main methods that are most frequently used:

- ``String toString()``
- ``boolean equals(Object other)``



``toString()`` method
-----------------

One commonly overridden ``Object`` method is ``toString()``, which is often used
to print out the attributes of an object. It is a good idea to write your own
``toString()`` method in every class. In a subclass, ``toString()`` can call the
superclass ``toString()`` method using ``super.toString()`` and then add on its
own attributes.

|CodingEx| **Coding Exercise**

In the following code, the ``Person`` class overrides the ``toString`` method
from ``Object`` method and the ``Student`` class then overrides it again. In
each class the new ``toString`` method adds the new attributes from that class.

.. activecode:: toStringDemo
  :language: java
  :autograde: unittest

  After trying the code below, complete the subclass called ``APStudent`` that
  extends ``Student`` with a new attribute called ``APscore`` and override the
  ``toString()`` method to call the superclass method and then add on the
  ``APscore``. Uncomment the ``APStudent`` object in the main method to test it.

  ~~~~
  public class Person
  {
      private String name;

      public Person(String name)
      {
          this.name = name;
      }

      public String toString()
      {
          return name;
      }

      public static void main(String[] args)
      {
          Person p = new Person("Sila");
          Student s = new Student("Tully", 1001);
          System.out.println(p); // call Person toString
          System.out.println(s); // call Student toString
          // Uncomment the code below to test the APStudent class
          /*
          APStudent ap = new APStudent("Ayanna", 1002, 5);
          System.out.println(ap);
          */
      }
  }

  class Student extends Person
  {
      private int id;

      public Student(String name, int id)
      {
          super(name);
          this.id = id;
      }

      public String toString()
      {
          return super.toString() + " " + id;
      }
  }

  class APStudent extends Student
  {
      private int score;

      public APStudent(String name, int id, int score)
      {
          super(name, id);
          this.score = score;
      }
      // Add a toString() method here that calls the super class toString

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
        public void test1()
        {
            String output = getMethodOutput("main");
            String expect = "Sila\nTully 1001\nAyanna 1002 5";

            boolean passed = getResults(expect, output, "Checking output from main()");
            assertTrue(passed);
        }

        @Test
        public void containsToString()
        {
            String code = getCode();
            String target = "public String toString()";

            int num = countOccurencesRegex(code, target);
            boolean passed = (num >= 3);

            getResults("3", "" + num, "3 toString methods", passed);
            assertTrue(passed);
        }
    }

``equals`` Method
-----------------

One of the important methods inherited from ``Object`` is the ``equals(Object
obj)`` method. This method is used to test if the current object and the passed
object called ``obj`` are equal. But what does that mean?

.. index::
    single: override
    single: equals

As you can see if you run the code below, the ``equals`` method inherited from
``Object`` only returns ``true`` if the two objects references refer to the same
object. In other words it is does the same test as ``==``.

|CodingEx| **Coding Exercise**

.. activecode:: ObjEquals
   :language: java
   :autograde: unittest

   Try to guess what this code will print out before running it.
   ~~~~
   public class Person
   {
       private String name;

       public Person(String theName)
       {
           this.name = theName;
       }

       public static void main(String[] args)
       {
           Person p1 = new Person("Kairen");
           Person p2 = new Person("Jewel");
           Person p3 = new Person("Kairen");
           Person p4 = p3;
           System.out.println(p1.equals(p2));
           System.out.println(p2.equals(p3));
           System.out.println(p1.equals(p3));
           System.out.println(p3.equals(p4));
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
       public void test1()
       {
           String output = getMethodOutput("main");
           String expect = "false\nfalse\nfalse\ntrue";

           boolean passed = getResults(expect, output, "Checking output from main()", true);
           assertTrue(passed);
       }
   }

.. figure:: Figures/equalsEx.png
    :width: 300px
    :align: center
    :figclass: align-center

    Figure 1: A picture from the Java Visualizer showing that only p3 and p4 refer to the same object.

Overriding the ``equals`` Method
--------------------------------

The ``equals`` method defined in ``Object`` and thus inherited by all classes
only considers two object references equivalent if they refer to exactly the
same object. But we saw in Unit 2 that the ``String`` class provides an
``equals`` method that considers two ``String`` objects equivalent if they have
the same characters in the same order, even if they are actually different
objects. How does that work?

It is because the ``String`` class has **overridden** the ``equals`` method it
inherited from ``Object`` to provide a definition of equality that makes more
sense.

As we saw in section 9.3 a class can override inherited methods by providing a
method with the same method signature (method name, parameter types, and return
type). ``String`` has done that with ``equals`` so when we compare ``String``
objects with ``equals`` that new method will be called instead of the inherited
one.

|CodingEx| **Coding Exercise**


.. activecode:: StringTest1
   :language: java
   :autograde: unittest

   Try to guess what this code will print out before running it.
   ~~~~
   public class StringTest
   {
       public static void main(String[] args)
       {
           String s1 = "hi";
           String s2 = "Hi";
           String s3 = new String("hi");
           System.out.println(s1.equals(s2));
           System.out.println(s2.equals(s3));
           System.out.println(s1.equals(s3));
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
           super("StringTest");
       }

       @Test
       public void test1()
       {
           String output = getMethodOutput("main");
           String expect = "false\nfalse\ntrue";

           boolean passed = getResults(expect, output, "Checking output from main()", true);
           assertTrue(passed);
       }
   }

However, overriding ``equals`` is a bit more involved than overriding
``toString``. While the ``toString`` method is only required to produce a
reasonable human-readable ``String`` representation of an object, ``equals`` has
to meet a more complex set of requirements in order to be useful.

You will not be expected to write your own ``equals`` method on the AP exam but
it’s worth looking at what those requirements are and how to satisify them.
There are five requirements described in the Javadocs for ``equals`` in
``Object`` that a properly implemented ``equals`` must satisfy:

#. Equality is **reflexive**, meaning an object will be ``equals`` to itself:
   ``o.equals(o)`` is ``true``.

#. Equality is **symmetric**: ``o1.equals(o2)`` returns the same value as
   ``o2.equals(o1)``.

#. Equality is **transitive**: if ``o1.equals(o2)`` and ``o2.equals(o3)`` then
   ``o1.equals(o3)``.

#. Equality is **consistent**: ``o1.equals(o2)`` always returns the same value
   assuming the objects are not modified.

#. No object is equal to ``null``: ``o.equals(null)`` is always ``false``.

The other way to look at these requirements is as guarantees that are made to
you as a user of ``equals``. If you look at it that way, these requirements are
quite nice. Imagine how much harder it would be to use the ``String`` equals
method if you couldn't rely on the fact that ``s1.equals(s2)`` is necessarily
the same as ``s2.equals(s1)``!

So even though the Java compiler can't force you to implement ``equals``
correctly, if you ever do want to override it, it’s important that you do. Let’s
look at what’s involved.

We'll write a class ``Word`` which represents a word in a particular language.
We want two ``Word`` objects to be considered ``equals`` if and only if they are
spelled the same `and` come from the same language. The latter requirement is
because sometimes different languages have words that are spelled the same but
with different meanings such as “pie” which in English is a tasty baked treat
and in Spanish is what we call a “foot” in English.

|CodingEx| **Coding Exercise**


.. activecode:: OverrideEquals
   :language: java
   :autograde: unittest

   Try to guess what this code will print out before running it. Click on the
   CodeLens button to step forward through the code and watch the memory.

   ~~~~
   public class Word
   {
       private String spelling;
       private String language;

       public Word(String spell, String lang)
       {
           this.spelling = spell;
           this.language = lang;
       }

       /**
        * Compares this word to the specified object. The result is true if and only
        * if the argument is not null and is a Word object with the same spelling and
        * language as this object.
        */
       public boolean equals(Object other)
       {
           if (this == other)
           {
               // This is not strictly necessary assuming the rest
               // of the method is implemented correctly but it is
               // a commonly used optimization because the == check
               // is very fast. Thus this is a quick way to guarantee
               // that our equals method is reflexive.
               return true;
           }

           if (!(other instanceof Word))
           {
               // It can't be the same Word if it's not a Word at all.
               // This also ensures that o.equals(null) is false because
               // null is not an instanceof any class.
               return false;
           }

           // Now we now we can safely cast other to a Word and
           // check if our two attributes are the same, using
           // equals to compare them because they are Strings.
           Word otherWord = (Word) other;
           return spelling.equals(otherWord.spelling)
                   && language.equals(otherWord.language);
       }

       public static void main(String[] args)
       {
           Word p1 = new Word("pie", "english");
           Word p2 = new Word("pie", "spanish");
           Word p3 = new Word("pie", "english");
           Word p4 = p3;
           System.out.println(p1.equals(p2));
           System.out.println(p2.equals(p3));
           System.out.println(p1.equals(p3));
           System.out.println(p3.equals(p4));
           System.out.println(p1.equals("pie"));
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
           super("Word");
       }

       @Test
       public void test1()
       {
           String output = getMethodOutput("main");
           String expect = "false\nfalse\ntrue\ntrue\nfalse";

           boolean passed = getResults(expect, output, "Checking output from main()", true);
           assertTrue(passed);
       }
   }

The basic recipe for writing your own equals method, is:

#. Use the ``public boolean equals(Object other)`` method signature. Make sure
   the parameter type is ``Object``, not the class you are defining.

#. Check of ``this == other`` to quickly return ``true`` when comparing an
   object to itself.

#. Use ``instanceof`` to check if `other` is an instance of this class and
   return ``false`` if not.

#. Cast ``other`` to the current class.

#. Finally compare this object’s attributes to the other object's with ``==``
   for primitive types like ``int`` and ``double`` and ``equals`` for reference
   types. If you need to compare multiple attributes ``&&`` together the
   comparisons of the individual attributes since two objects should only be
   equal if `all` the attributes match.

Note that the requirements on ``equals`` make it almost impossible to correctly
override it in a subclass of a class that has already overridden the ``Object``
version. To see why, imagine if we made a subclass of ``Word``,
``ClassifiedWord`` and added another attribute, ``partOfSpeech``.

If we override ``equals`` in the ``ClassifiedWord`` to only consider two
``ClassifiedWord`` objects ``equals`` if their spelling, language, `and` part of
speech match, that will break the symmetry since
``regularWord.equals(classifiedWord)`` will invoke the ``equals`` from ``Word``
which will only compare the spelling and language of the word but
``classifiedWord.equals(regularWord)`` will return ``false`` assuming the
``equals`` in ``ClassifiedWord`` checks that ``other`` is an ``instanceof
ClassifiedWord``. In general you should only provide an overridden ``equals``
method in one class in a class hierarchy.


|Groupwork| Programming Challenge : Savings Account
---------------------------------------------------

The following code contains the beginning of a class for representing a bank
account containing the account holder's name and the money balance in the
account.

Work in pairs to write the following code and test each part before moving on to
the next step:

#. Implement a ``toString`` method in ``Account`` that returns a ``String``
   representing the instance variables in ``Account`` in the form name, comma,
   space, balance.

#. Write a subclass called ``SavingsAccount`` that extends ``Account`` and adds
   an interest rate variable.

#. Write a constructor with 3 arguments (name, balance, interest rate) for the
   ``SavingsAccount`` class that uses the super constructor.

#. Write a ``toString`` method for ``SavingsAccount`` that returns a string
   consisting of the result of the superclass’s ``toString`` plus a comma, a
   space, and the interest rate.


.. activecode:: challenge-9-7-savingsaccount
   :language: java
   :autograde: unittest

   Complete the subclass ``SavingsAccount`` below which inherits from
   ``Account`` and adds an interest rate variable. Write a constructor with 3
   arguments, a ``toString``, and an ``equals`` method for it. Uncomment the
   code in ``main`` to test your new class and methods.

   ~~~~
   public class Account
   {
       private String name;
       private double balance;

       public Account(String name, double balance)
       {
           this.name = name;
           this.balance = balance;
       }

       // Implement toString here

       public static void main(String[] args)
       {
           Account acct1 = new Account("Armani Smith", 1500);
           System.out.println(acct1);
           // Uncomment this code to test SavingsAccount
           /*
           SavingsAccount acct2 = new SavingsAccount("Dakota Jones",1500,4.5);
           System.out.println(acct2);
           */
       }
   }

   /*
    * Write the SavingsAccount class which inherits from Account. Add an
    * interest rate instance variable and write a constructor and a toString
    * method.
    */
   class SavingsAccount 
   {
   
   }

   ====
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
       public void test1()
       {
           String output = getMethodOutput("main");
           String expect = "Armani Smith, 1500.0\nDakota Jones, 1500.0, 4.5";

           boolean passed = getResults(expect, output, "Checking output from main()");
           assertTrue(passed);
       }

       @Test
       public void test3()
       {
           String target = "public String toString()";

           String code = getCode();
           int index = code.indexOf("class SavingsAccount");
           code = code.substring(index);
           boolean passed = code.contains(target);

           getResults(
                   "true",
                   "" + passed,
                   "Checking that code contains toString() in SavingsAccount",
                   passed);
           assertTrue(passed);
       }

       @Test
       public void test30()
       {
           String target = "super.toString()";

           String code = getCode();
           int index = code.indexOf("class SavingsAccount");
           code = code.substring(index);

           boolean passed = code.contains(target);

           getResults(
                   "true",
                   "" + passed,
                   "Checking that code contains call to super.toString() in SavingsAccount",
                   passed);
           assertTrue(passed);
       }

       @Test
       public void containsExtends()
       {
           String target = "SavingsAccount extends Account";
           boolean passed = checkCodeContains(target);
           assertTrue(passed);
       }
   }

Summary
---------

- The ``Object`` class is the superclass of all other classes in Java and a part of the built-in ``java.lang`` package.

- The following ``Object`` class methods are part of the Java Quick Reference:

  - ``String toString()``
  - ``boolean equals(Object other)``

- Subclasses of Object often override the ``toString`` and ``equals`` methods
  with class-specific implementations.

- When overriding ``equals``, it’s important to satisfy all the requirements of
  a correct implementation.
