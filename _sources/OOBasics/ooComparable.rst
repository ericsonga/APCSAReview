.. qnum::
   :prefix: 10-8-
   :start: 1

The Comparable Interface
==========================

..	index::
    single: comparable
    pair: interface; comparable

In Java, you can sort objects of any class that implements the ``Comparable`` interface.  The ``Comparable`` interface just specifies the ``int compareTo(T o)`` method which will return a negative number if the current object is less than the passed one, 0 if they are equal, and a positive number if the current object is greater than the passed one.  How do you compare two objects of any class?  It really depends on both the class and the context.  

.. note ::

   One common misconception is that ``compareTo`` returns -1, 0, or 1 but that is wrong.  It returns a negative number (if less than), 0, or a positive number (if greater).  Be careful in conditionals to use ``< 0`` to test for the object it is called on being less than the passed object, ``== 0`` to test for equals, and ``> 0`` to test for the object it is called on being greater than the passed object.
   
The ``String`` class implements the ``Comparable`` interface.  Let's see what is actually returned when you compare strings.

.. activecode:: ComparableEx
   :language: java

   public class ComparableExample
   {
   
       public static void main(String[] args)
       {
          System.out.println("hi".compareTo("apple"));
          System.out.println("baby".compareTo("zebra"));
          System.out.println("dog".compareTo("dogged"));
          System.out.println("Dog".compareTo("dog"));
          System.out.println("cat".compareTo("baby"));
       }
   }
   
How do you compare two people for example?  In one context you might use last name first and then first name if the last names are the same as shown below.  In other context you might use age first and then last name if the age is the same and then first name if the last names are the same.  The class that implements the interface defines how the ``compareTo`` method works when it provides the method body.  

.. activecode:: ComparablePerson
   :language: java

   public class Person implements Comparable<Person>
   {
      private String firstName;
      private String lastName;
      private int age;
      
      public Person(String first, String last, int theAge)
      {
         this.firstName = first;
         this.lastName = last;
         this.age = theAge;
      }
      
      public int compareTo(Person other)
      {
         if (this.lastName.compareTo(other.lastName) == 0)
         {
            return this.firstName.compareTo(other.firstName);
         }
         else return this.lastName.compareTo(other.lastName);
      }
   
       public static void main(String[] args)
       {
          Person p1 = new Person("Karissa","Carter",17);
          Person p2 = new Person("Jayla", "Douglas",18);
          Person p3 = new Person("Anita", "Qin", 16);
          Person p4 = new Person("Carla", "Qin", 16);
          Person p5 = new Person("Carla", "Qin", 17);
          System.out.println(p1.compareTo(p2));
          System.out.println(p2.compareTo(p3));
          System.out.println(p3.compareTo(p1));
          System.out.println(p4.compareTo(p3));
          System.out.println(p4.compareTo(p5));
       }
   }
   
Can you modify the code above to use age instead?  Use age first if the ages are different.  If the ages are the same use the last name if they are different.  If both age and last name are the same use first name.