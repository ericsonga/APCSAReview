.. qnum::
   :prefix: 4-3-
   :start: 1
   
String Equality
-----------------

..	index::
	pair: String; equality
	pair: String; equals

When the operator ``==`` is used with object variables it returns true when the two variables *refer to the same object*.  With strings this happens when one string variable is set to another or when strings are set to the same string literal.  

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
      }
   }
  
  
It will print ``Bye`` since s3 has been assigned to a copy of the value in s2 which is an object reference to the String object that has the characters "Bye" in it.  
In addition, ``s2 == s3`` will be true since the two variables refer to the same object.  Also, ``s2.equals(s3)`` will also be true, again since the two variables refer to the same object, of course the characters will be the same.  

.. figure:: Figures/stringRefExamplev2.png
    :width: 250px
    :align: center
    :figclass: align-center

    Figure 1: Several String variables with references to objects of the String class. 
    
.. note::

   Use ``equals`` to test if two strings have the same characters in the same order.  Only use ``==`` to test if two strings refer to the same object.  Most of the time you will want to use ``equals`` and not ``==`` with strings.
    
Using the New Keyword
=======================
    
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
======================

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
  
**Check your understanding**

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
     
     
     
