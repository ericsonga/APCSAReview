.. qnum::
   :prefix: 8-4-
   :start: 1
   
Declaring Lists
=================

To declare a list use ``List<Type> name``  Change the *Type* to be whatever type of objects you want to store in the list like ``String`` to hold strings as shown in the code below.  You don't have to specify a ``<Type>``, since it will default to ``Object``, but it is good practice to specify it to restrict what you allow in your list.  

You should declare the variable to be of type ``List`` rather than ``ArrayList`` so that you can change what type of class you want to use to implement the list interface in the future without having to change your declarations.  There are actually several classes in Java that implement the ``List`` interface, but you only need to know the ``ArrayList`` class for the AP CSA course.

In the code below we are declaring a variable called ``nameList`` that can refer to a list of strings, but currently doesn't refer to any list yet (is set to ``null``).

.. activecode:: listDeclare
   :language: java

   import java.util.*; // import everything at this level
   public class Test
   {
       public static void main(String[] args)
       {
          List<String> nameList = null;
          System.out.println(nameList);
       }
    }
    
Creating Lists
===============

Declaring a list doesn't actually create a list. It only creates a variable that can refer to a list.  To actually create a list use ``new ArrayList<Type>()``.  

When you first create a new list it is empty, meaning that it doesn't contain any items yet.  You can get the number of items in a list using the ``size()`` method.

.. activecode:: listCreateStr
   :language: java

   import java.util.*; // import everything at this level
   public class Test
   {
       public static void main(String[] args)
       {
          List<String> nameList = null;
          System.out.println(nameList);
          nameList = new ArrayList<String>();
          System.out.println(nameList.size());
       }
   }
   
.. note:: 

   You use the ``length`` field to get the number of items in an array.  But, with an ``ArrayList`` you use the ``size()`` method to get the number of items in the list. 
  
You can also create lists of integer values.  However, you have to use ``Integer`` as the type.  ``Integer`` objects can hold an ``int`` value.

You can also declare a list and create it in the same statement as shown below.

.. activecode:: listCreateInt
   :language: java

   import java.util.*; // import everything at this level
   public class Test
   {
       public static void main(String[] args)
       {
          List<Integer> numList = new ArrayList<Integer>();
          System.out.println(numList.size());
       }
   }

     
