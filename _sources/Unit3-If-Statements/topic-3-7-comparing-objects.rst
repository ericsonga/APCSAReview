.. qnum::
   :prefix: 3-7-
   :start: 1 
   
.. |CodingEx| image:: ../../_static/codingExercise.png
    :width: 30px
    :align: middle
    :alt: coding exercise
    
    
.. |Exercise| image:: ../../_static/exercise.png
    :width: 35
    :align: middle
    :alt: exercise
    
    
.. |Groupwork| image:: ../../_static/groupwork.png
    :width: 35
    :align: middle
    :alt: groupwork
    
Comparing Objects
=================

Comparing objects is a little different than comparing primitive typed values like numbers. Objects can be very complex and have many attribute values or instance variables inside them. For example, the turtle objects have many instance variables like name, width, height, xPos, yPos, etc. When comparing two turtle objects, we need a specially written **equals** method to compare all of these values. In this lesson, we will take a look at String objects and how they are compared.


String Equality
---------------

..	index::
	pair: String; equality
	pair: String; equals

With String objects, you must use the ``equals`` method to test if two strings have the same characters in the same order instead of ``==`` which is used for primitive types.  

When the operator ``==`` is used with object variables it returns true when the two variables *refer to the same object*. These variables are called **aliases** for the same object and **object references**. With strings this happens when one string variable is set to another or when strings are set to the same string literal.  Only use ``==`` to test if two strings refer to the same object.  Most of the time you will want to use ``equals`` and not ``==`` with strings. 




|CodingEx| **Coding Exercise**

The one common place to use == or != with objects is to see if they exist by comparing them to **null**. Sometimes short-circuit evaluation to avoid an error if the object doesn't exist. Try the following code to see the NullPointer error. Since s is null, indexOf throws an error. Comment out the first if statement and run the program again. The second if statement avoids the error with shortcircuit evaluation. Because s != null is false, the rest of the boolean expression is not evaluated. Now, change s to set it to "apple" instead of null in the first line and run the code again to see that the if statements can print out that "apple contains an a".

.. activecode:: nullTest
   :language: java
   
   public class NullTest
   {
      public static void main(String[] args)
      {
        String s = null;
        if (s.indexOf("a") >= 0)
            System.out.println(s + " contains an a");
        if (s != null && s.indexOf("a") >= 0)
            System.out.println(s + " contains an a");   
      }
   }
     




If you run the following, what will be printed?

.. activecode:: lcse1
   :language: java
   
   public class Test1
   {
      public static void main(String[] args)
      {
        String s1 = "Hello";
        String s2 = "Bye";
        String s3 = s2;
        System.out.println(s3);
        System.out.println(s2 == s3);
        System.out.println(s2.equals(s3));
      }
   }
  
  
It will print ``Bye`` since s3 has been assigned to a copy of the value in s2 which is an object reference to the String object that has the characters "Bye" in it.  
In addition, ``s2 == s3`` will be true since the two variables refer to the same object.  Also, ``s2.equals(s3)`` will also be true, again since the two variables refer to the same object, of course the characters will be the same.  

.. figure:: Figures/stringRefExamplev2.png
    :width: 250px
    :align: center
    :figclass: align-center

    Figure 1: Several String variables with references to objects of the String class. 
    


    
Using new with Strings
----------------------

If you use the ``new`` keyword to create a string it will create a new string object. So, even if we create two string objects with the same characters using the new operator they will not refer to the same object. What will the following print?

.. activecode:: lcse2
   :language: java
   
   public class Test2
   {
      public static void main(String[] args)
      {
        String s1 = new String("Hello");
        String s2 = new String("Hello");
        System.out.println(s1 == s2);
        System.out.println(s1.equals(s2));
      }
   }
  
Since we used the ``new`` keyword two different String objects will be created that each have the characters ``Hello`` in them.  So ``s1 == s2`` will be false since they don't refer to the same object, but ``s1.equals(s2)`` is true since the two different object contain the same characters in the same order.  

.. figure:: Figures/twoStringRefsv2.png
    :width: 175px
    :align: center
    :figclass: align-center

    Figure 2: Two string variables and two string objects that contain the same characters in the same order.
    
Using String Literals
---------------------

What do you think the following code will print?  Run it to check.
    
.. activecode:: lcse3
   :language: java
   
   public class Test2
   {
      public static void main(String[] args)
      {
        String s1 = "Hello";
        String s2 = "Hello";
        System.out.println(s1 == s2);
        System.out.println(s1.equals(s2));
      }
   }
  
Since we used string literals this time rather than the ``new`` keyword, the Java run-time will check if that string literal already exists as an object in memory, and if so reuse it.  So ``s1`` and ``s2`` will refer to the same string object.  That means that both ``==`` and ``equals`` will be true.

.. figure:: Figures/twoStringRefsLiteral.png
    :width: 175px
    :align: center
    :figclass: align-center

    Figure 3: Two string variables that refer to the same string literal.  
  
|Exercise| **Check your understanding**

.. mchoice:: qsbeq_1
   :answer_a: s1 == s2 && s1 == s3
   :answer_b: s1 == s2 && s1.equals(s3)
   :answer_c: s1 != s2 && s1.equals(s3)
   :correct: b
   :feedback_a: Do s1 and s3 refer to the same object?
   :feedback_b: Yes s2 was set to refer to the same object as s1 and s1 and s3 have the same characters.
   :feedback_c: Did you miss that s2 was set to refer to the same object as s1?

   Which of the following is true after the code executes?
   
   .. code-block:: java

     String s1 = new String("hi");
     String s2 = "bye";
     String s3 = "hi";
     s2 = s1;
     
.. mchoice:: qsbeq_2
   :answer_a: s1 == s2 && s1 == s3
   :answer_b: s2.equals(s3) && s1.equals(s3)
   :answer_c: s1 != s2 && s1 == s3
   :correct: c
   :feedback_a: Do s1 and s2 refer to the same object?
   :feedback_b: Does s2 have the same characters as s1 or s3?
   :feedback_c: Because you used the same string literal s1 and s3 will refer to the same object.  Since s1 and s2 refer to different string literals they do not refer to the same object.

   Which of the following is true after the code executes?
   
   .. code-block:: java

     String s1 = "hi";
     String s2 = "bye";
     String s3 = "hi";
     
.. mchoice:: qsbeq_3
   :answer_a: s1 == s3 && s1.equals(s3)
   :answer_b: s2.equals(s3) && s1.equals(s3)
   :answer_c: !(s1 == s2) && !(s1 == s3)
   :correct: c
   :feedback_a: Since s3 uses the new operator it will not refer to the same object as s1.  
   :feedback_b: Do s2 and s3 have the same characters in the same order?
   :feedback_c: All of the variables refer to different objects.  But, s1.equals(s3) would be true since they have the same characters in the same order.

   Which of the following is true after the code executes?
   
   .. code-block:: java

     String s1 = "hi";
     String s2 = "bye";
     String s3 = new String("hi");
     
     
|Groupwork| Programming Challenge : Tracing Code 
------------------------------------------------

What will the following code print out? Trace through the code by drawing diagrams of what is going on in memory like the figures above, and then write a tracing table for it below that shows the values of s1, s2, s3, s4 and the output after each line of code.

.. code-block:: java

    String s1 = null;
    String s2 = new String("hi");
    String s3 = new String("hi");
    String s4 = "hi";
    if (s1 == null)
        s1 = s2;
    if (s1 == s2)    
       System.out.println("s1 and s2 refer to the same object");
    if (s2 == s3)
       System.out.println("s2 and s3 refer to the same object");
    if (s3 == s4)
       System.out.println("s3 and s4 refer to the same object");
    if (s1.equals(s2) && s2.equals(s3) && s3.equals(s4))
        System.out.println("s1, s2, s3, s4 are equal");
      
.. shortanswer:: challenge3-7-tracingStrings

   Write your tracing table here that keeps track of s1, s2, s3, s4 and the output.
   
   
Summary
-------------------

- Often classes have their own **equals** method, which can be used to determine whether two objects of the class are equivalent.

- Two object references are considered **aliases** when they both reference the same object. 

- Object reference values can be compared, using == and !=, to identify aliases.

- A reference value can be compared with null, using == or !=,  to determine if the reference actually references an object.

