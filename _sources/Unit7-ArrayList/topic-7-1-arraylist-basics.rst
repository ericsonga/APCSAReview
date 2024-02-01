.. include:: ../common.rst

.. qnum::
   :prefix: 7-1-
   :start: 1

|Time45|

Intro to ArrayLists
=======================

.. index::
   single: arraylist
   pair: arraylist; definition


.. figure:: Figures/lists.jpg
    :width: 300px
    :align: left
    :figclass: align-center

    Figure 1: A couple of lists

In the last unit, we learned about using arrays to hold collections of related
data. However arrays are not very flexible. Most notably, the size of an array
is established at the time of creation and cannot be changed. What if you don't
know how big the collection of data will be? What if you want to both add and
remove items from a collection? For example, if you wanted to represent a
shopping list, you might add to the list throughout the week and remove things
from the list while you are shopping. You probably would not know how many items
will be on the list at the beginning of the week.

For cases like this, Java has a class called ``ArrayList`` which is a re-sizable
list. It is called ``ArrayList`` because it stores the items that have been
added to it in an underlying array. But it also takes care of keeping track of
how many items have been added to the array and it will create a new bigger
array under the covers when needed to hold more items.

You can use ``ArrayList`` instead of arrays whenever you don't know the size of
the array you need or you know that you will add and remove items and may need
to change the array’s size dynamically during run time. An ``ArrayList`` is
**mutable**, meaning it can change during run time by adding and removing objects
from it.

.. note::

   An ``ArrayList`` is often called just a list on the CSA exam. Prior to 2020
   the AP CSA curriculum included **interfaces** which are somewhat like classes
   and the interface ``List`` was often used to declare a variable that would
   refer to an ``ArrayList``. Interfaces are no longer on the exam, but if you
   see ``List`` being used in an old exam question just assume it’s an
   ``ArrayList``.

.. mchoice:: qloopList
   :answer_a: An ArrayList will always use less memory than an array.
   :answer_b: An ArrayList can store objects, but arrays can only store primitive types.
   :answer_c: An ArrayList has faster access to the last element than an array.
   :answer_d: An ArrayList resizes itself as necessary as items are added, but an array does not.
   :correct: d
   :feedback_a: No, An ArrayList grows as needed and is typically bigger than the data put into it. If the underlying array in an ArrayList is full when adding in new data, it usually doubles in size.
   :feedback_b: No, you can have an array of objects.
   :feedback_c: No, an ArrayList is implemented using an array so it has the same access time to any index as an array does.
   :feedback_d: An ArrayList is really a dynamic array (one that can grow or shrink as needed).

   Which of the following is a reason to use an ArrayList instead of an array?



Packages and imports
------------------------

.. index::
   single: import statement

The ``ArrayList`` class is in the ``java.util`` package. A **package** is a set
or library of related classes. The classes we have used until now, such as
``String`` and ``Math``, are in the special package ``java.lang`` whose classes
are always available in any Java program. Other packages, such as ``java.util``,
provide classes that can only be used either by **importing** them or (much more
rarely) by referring to them by their full name which includes the package as a
prefix. The full name of ``ArrayList`` is thus ``java.util.ArrayList`` but
rather than type that out all the time, in any class where we want to use
``ArrayList`` we will usually import it with an ``import`` statement.

Import statements have to come before the class definition in a Java source file
and serve to tell Java which class you mean when you use a short name like
``ArrayList``. To import just one class we use a single ``import`` of the
fully-qualified name of the class like this:

.. code-block:: java

  // Import just the ArrayList class from java.util
  import java.util.ArrayList;

.. index::
   single: package
   pair: statement; import


After such an import statement, anywhere ``ArrayList`` is used as a class name
in the file it will be taken to mean ``java.util.ArrayList``.

Another option is to import all the classes in a package with a “wildcard” import:

.. code-block:: java

  // Import everything in java.util including ArrayList
  import java.util.*;

This import statement will also cause, ``ArrayList`` to refer
``java.util.ArrayList``. But many other names of classes defined in the
``java.util`` package will also be available whether you use them or not. (One
that you have probably used by now is ``Scanner`` which can be used to read
input a user types at the command line.) Using wildcard imports can cause
conflicts if you import all the classes from two different packages and they
have class names in common but usually that’s not a problem, at least with
packages that are part of Java itself.

.. note::

   Don't worry about adding import statements on the AP CSA exam.  Any that you need will be provided for you.

|Exercise| **Check your understanding**

.. mchoice:: qlib_1
   :answer_a: You can only have one import statement in a source file.
   :answer_b: You must specify the class to import.
   :answer_c: Import statements must be before other code in a Java source file.
   :answer_d: You must import java.lang.String to use the short name of String.
   :correct: c
   :feedback_a: You can have an many import statements as you need.
   :feedback_b: You can use * to import all classes at the specified level.
   :feedback_c: Import statements have to be the first Java statements in a source file.
   :feedback_d: You do not have to import any classes that are in the java.lang package.

   Which of the following is true about import statements?

Declaring and Creating ArrayLists
----------------------------------

To declare a ArrayList use ``ArrayList<Type> name`` where *Type*, called a
**type parameter** is the type of objects you want to store in the ArrayList.
For example a variable naming an ``ArrayList`` meant to hold ``String``\ s is
declared as ``ArrayList<String>`` as shown in the code below. You can declare a
variable to just be of type ``ArrayList``, with no type parameter, and it’ll be
approximately the same as if you had declared ``ArrayList<Object>``, but it is
good practice to specify the type of objects you intend to store in an
``ArrayList`` as it allows the compiler to find errors that would otherwise be
missed until run time.

.. code-block:: java

    // ArrayList<Type> name = new ArrayList<Type>();
    // An ArrayList of Strings:
    ArrayList<String> shoppingList = new ArrayList<String>();

.. note::

    ``ArrayList``\ s can only hold reference types like ``String``. Since they
    can’t hold primitive types like ``int`` and ``double``, if we want a
    collection of numbers we need to use the wrapper classes ``Integer`` or
    ``Double``. However, because of autoboxing, if you declare an
    ``ArrayList<Integer>`` or ``ArrayList<Double>`` you can mostly treat the
    elements of the ``ArrayList`` as if they were in fact ``int``\ s or
    ``double``\ s.

|CodingEx| **Coding Exercise**


.. activecode:: ArrayListDeclare
   :language: java
   :autograde: unittest

   In the code below we are declaring a variable called ``nameList`` that can
   refer to a ``ArrayList`` of strings, but currently doesn't refer to any
   ``ArrayList`` yet as it’s set to ``null``.

   ~~~~
   import java.util.*; // import for ArrayList

   public class ArrayListDeclare
   {
       public static void main(String[] args)
       {
           ArrayList<String> nameList = null;
           System.out.println(nameList);
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
            super("ArrayListDeclare");
        }

        @Test
        public void test1()
        {
            String output = getMethodOutput("main");
            String expect = "null";

            boolean passed = getResults(expect, output, "main()", true);
            assertTrue(passed);
        }
    }

As with other reference types, declaring a ``ArrayList`` variable doesn't
actually create a ``ArrayList`` object. It only creates a variable that can
refer to a ``ArrayList`` or ``null``. To actually create a ``ArrayList`` we must
invoke a constructor such as ``new ArrayList<String>()``.

You can get the number of items in a ``ArrayList`` using the ``size()`` method.
Notice that a newly constructed ``ArrayList`` is empty and thus has a size of 0.
Also remember that you can’t call methods on ``null`` so trying to call ``size``
on the value of ``list2`` at line 10 below causes a ``NullPointerException``.

.. activecode:: ArrayListCreateStr
   :language: java
   :autograde: unittest
   :practice: T

   The following code demonstrates a NullPointerException. Change the list2 declaration so that it creates a new ArrayList to remove the NullPointerException.
   ~~~~
   import java.util.*; // import needed for ArrayList

   public class ArrayListCreateStr
   {
       public static void main(String[] args)
       {
           ArrayList<String> nameList = new ArrayList<String>();
           System.out.println("The size of nameList is: " + nameList.size());
           ArrayList<String> list2 = null;
           System.out.println("The size of list2 is: " + list2.size());
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
           super("ArrayListCreateStr");
       }

       @Test
       public void test1()
       {
           String output = getMethodOutput("main");
           String expect = "The size of nameList is: 0\nThe size of list2 is: 0";

           boolean passed = getResults(expect, output, "main()", true);
           assertTrue(passed);
       }
   }

You can also create ArrayLists of integer and double values. However, you have
to use ``Integer`` or ``Double`` as the type parameter because ``ArrayList``\ s
can only hold objects, not primitive values. All primitive types must be
**wrapped** in objects before they are added to an ArrayList. For example,
``int`` values can be wrapped in ``Integer`` objects, ``double`` values can be
wrapped in ``Double`` objects. However this normally happens automatically
thanks to autoboxing.

You can actually put in any kind of objects in an ``ArrayList``, including
instances of classes that you write, such as the ``Student``, ``Person``, or
``Pet`` classes from Unit 5.

.. activecode:: ArrayListCreateInt
   :language: java
   :autograde: unittest

   Here's an example of a Integer ArrayList.
   ~~~~
   import java.util.*;

   public class ArrayListCreateInt
   {
       public static void main(String[] args)
       {
           ArrayList<Integer> numList = new ArrayList<Integer>();
           System.out.println(numList.size());
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
           super("ArrayListCreateInt");
       }

       @Test
       public void test1()
       {
           String output = getMethodOutput("main");
           String expect = "0";

           boolean passed = getResults(expect, output, "main()", true);
           assertTrue(passed);
       }
   }

|Exercise| **Check your understanding**

.. mchoice:: qArrayListInteger
   :answer_a: ArrayList[int] numbers = new ArrayList();
   :answer_b: ArrayList&lt;String&gt; numbers = new ArrayList();
   :answer_c: ArrayList&lt;int&gt; numbers = new ArrayList&lt;int&gt;();
   :answer_d: ArrayList&lt;Integer&gt; numbers = new ArrayList&lt;Integer&gt;();
   :correct: d
   :feedback_a: The square brackets [] are only used with arrays, not ArrayLists.
   :feedback_b: String is not the correct type since this is for an array of integers, and the type should be next to ArrayList on both sides.
   :feedback_c: ArrayLists cannot hold primitive types like int. You must use the wrapper class Integer.
   :feedback_d: The wrapper class Integer is used to hold integers in an ArrayList.

   Which of the following is the correct way to create an ArrayList of integers?



Although it is not on the AP exam, you can convert an array to a ``List`` using
the static method ``asList`` from the ``Arrays`` helper class:
``Arrays.asList(arrayname)``. Note that ``ArrayList`` has a ``toString`` method
that is automatically called to print the list in a nice format.

.. activecode:: ArrayListFromArray
   :language: java
   :autograde: unittest

   Example code creating an ArrayList from an array.
   ~~~~
   import java.util.*;

   public class ArrayListFromArray
   {
       public static void main(String[] args)
       {
           String[] names = {"Dakota", "Madison", "Brooklyn"};
           ArrayList<String> namesList = new ArrayList<String>(Arrays.asList(names));
           System.out.println(namesList);
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
           super("ArrayListFromArray");
       }

       @Test
       public void test1()
       {
           String output = getMethodOutput("main");
           String expect = "[Dakota, Madison, Brooklyn]";

           boolean passed = getResults(expect, output, "main()", true);
           assertTrue(passed);
       }
   }

|CodingEx| **Coding Exercise**

You can add values to an ``ArrayList`` using its **add** method, described in
detail in the next lesson. Try the code below. Note that the type of the
``ArrayList``, ``String`` or ``Integer``, also determines the type of parameters
and return types for all of its methods, so add and print work for any type of
``ArrayList``. And when the ``ArrayList`` is a list of ``Integer``\ s,
autoboxing takes care of wrapping the ``int`` arguments like ``2`` and ``4``
into instances of ``Integer`` for us.

.. activecode:: listAdd
   :language: java
   :autograde: unittest

   Can you add another item to the shopping list?
   ~~~~
   import java.util.*;

   public class Shopping
   {
       public static void main(String[] args)
       {
           ArrayList<String> shoppingList = new ArrayList<String>();
           System.out.println("Size: " + shoppingList.size());
           shoppingList.add("carrots");
           System.out.println(shoppingList);
           shoppingList.add("bread");
           System.out.println(shoppingList);
           shoppingList.add("chocolate");
           System.out.println(shoppingList);
           System.out.println("Size: " + shoppingList.size());
           ArrayList<Integer> quantities = new ArrayList<Integer>();
           quantities.add(2);
           quantities.add(4);
           System.out.println(quantities);
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
           super("Shopping");
       }

       @Test
       public void test1()
       {
           String output = getMethodOutput("main");
           String expect =
                   "Size: 0\n"
                       + "[carrots]\n"
                       + "[carrots, bread]\n"
                       + "[carrots, bread, chocolate]\n"
                       + "Size: 3\n"
                       + "[2, 4]";

           boolean passed = !output.equals(expect);

           passed = getResults(expect, output, "Changed code", passed);
           assertTrue(passed);
       }
   }

|Groupwork| Programming Challenge : FRQ Digits
---------------------------------------------------


.. |FRQ 2017| raw:: html

   <a href="https://apcentral.collegeboard.org/pdf/ap-computer-science-a-frq-2017.pdf?course=ap-computer-science-a" target="_blank">2017 Free Response Question</a>

This programming challenge is based on the |FRQ 2017| part 1a on the 2017 AP CSA
exam. In this question, you are asked to write a constructor for a class called
``Digits``. This constructor takes an integer number as its argument and divides
it up into its digits and puts the digits into an ``ArrayList``. For example,
``new Digits(154)`` creates an ArrayList with the digits [1, 5, 4].

First, let’s discuss how to break up a number into its digits. Try the code
below. What happens if you divide an integer by 10? Remember that in integer
division the result truncates (cuts off) everything to the right of the decimal
point. Which digit can you get by using ``% 10`` which returns the remainder
after dividing by 10? Try a different number and guess what it will print and
then run to check.

.. activecode:: divideby10
   :language: java
   :autograde: unittest

   Set number to a different number and guess what number / and % will return. Which operator gives you a digit in number?
   ~~~~
   public class DivideBy10
   {
       public static void main(String[] args)
       {
           int number = 154;
           System.out.println(number / 10);
           System.out.println(number % 10);
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
           super("DivideBy10");
       }

       @Test
       public void test1()
       {
           String origCode =
                   "public class DivideBy10{public static void main(String[] args){int number ="
                       + " 154;System.out.println(number / 10);System.out.println(number % 10);}}";

           boolean changed = codeChanged(origCode);

           assertTrue(changed);
       }
   }

We can use a while loop to print out each digit in reverse order starting from
the right (4, 5, 1 for the number 154) while dividing it by 10. You can try it
in the active code above. Here is the pseudocode:

- while number is greater than 0

  - print out the last digit using %
  - change the number to cut off the last digit using /

Now, let’s write a constructor for the ``Digits`` class that uses this loop and
adds each found digit to the ``ArrayList`` instead of printing it out. You can
use a special method called ``Collections.reverse(digitsList);`` to reverse the
order of the digits in the ``ArrayList`` after the loop to get them in the right
order. In the next lesson, we will also learn how to use a different ``add``
method that adds in elements at any index instead of the end.

.. activecode:: challenge-7-1-digits
   :language: java
   :autograde: unittest

   Complete the challenge below to put the digits of a number in an ArrayList.
   ~~~~
   import java.util.*;

   public class Digits
   {
       /** A list of digits */
       private ArrayList<Integer> digitList;

       /** Constructs a list of digits from the given number */
       public Digits(int number)
       {
           // initialize digitList to an empty ArrayList of Integers

           // Use a while loop to add each digit in number to digitList

           // Use Collections.reverse(digitList); to reverse the digits

       }

       /** returns the string representation of the digits list */
       public String toString()
       {
           return digitList.toString();
       }

       public static void main(String[] args)
       {
           Digits d1 = new Digits(154);
           System.out.println(d1);
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
           super("Digits");
       }

       @Test
       public void test1()
       {
           String output = getMethodOutput("main");
           String expect = "[1, 5, 4]";

           boolean passed = getResults(expect, output, "Digits(154)");
           assertTrue(passed);
       }

       @Test
       public void test2()
       {
           Digits test = new Digits(123456);
           String output = test.toString();
           String expect = "[1, 2, 3, 4, 5, 6]";

           boolean passed = getResults(expect, output, "Digits(123456)");
           assertTrue(passed);
       }
   }

Summary
-----------

- ``ArrayList``\ s are re-sizable lists that allow adding and removing items to
  change their size during run time.

- The ``ArrayList`` class is in the ``java.util`` package. You must import
  ``java.util.ArrayList`` or ``java.util.*`` to use it.

- An ``ArrayList`` object contains object references and is mutable, meaning it
  can change (by adding and removing items from it).

- The ``ArrayList`` constructor ``ArrayList()`` constructs an empty list of size 0.

- Java allows the generic type ``ArrayList<E>``, where the generic type ``E``
  specifies the type of the elements, like ``String`` or ``Integer``. Without
  it, the type will be ``Object``.

- ``ArrayList<E>`` is preferred over ``ArrayList`` because it allows the
  compiler to find errors that would otherwise be found at run time.

- When ``ArrayList<E>`` is specified, the types of the reference parameters and
  return type when using its methods are type ``E``.

- ``ArrayList``\ s cannot hold primitive types like ``int`` or ``double``, so
  you must use the wrapper classes ``Integer`` or ``Double`` to put numerical
  values into an ``ArrayList``. However autoboxing usually takes care of that
  for you.
