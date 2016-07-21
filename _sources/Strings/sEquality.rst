.. qnum::
   :prefix: 4-3-
   :start: 1
   
String Equality
=================

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

    Figure 3: Several String variables with references to objects of the String class. 
    
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

    Figure 4: Two string variables and two string objects that contain the same characters in the same order.
  
**Check your understanding**

.. mchoice:: qsb_6
   :answer_a: s1 == s2 and s1 == s3
   :answer_b: s1 == s2 and s1.equals(s3)
   :answer_c: s1 != s2 and s1.equals(s3)
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
     
