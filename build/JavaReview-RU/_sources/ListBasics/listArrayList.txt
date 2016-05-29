mchoice
     
The ArrayList Class
===================

..	index::
    single: ArrayList
    single: implements
	pair: list; ArrayList

Luckily Java has a class that handles this type of thing.  It is called **ArrayList**.  It **implements** the ``List`` interface using an array.  This means that it contains or inherits the code for the methods defined in the ``List`` interface.  I will describe what inheritance means in more detail later.  Java actually has several classes that **implement** the ``List`` interface (provide method bodies for the abstract methods defined in the interface).  See the Java documentation above for all the classes that implement the ``List`` interface (``ArrayList``, ``LinkedList``, ``Stack``, ``Vector``, etc).    

To be able to plug in different implementing classes, you should declare the variable type to be ``List`` and the only place you should use the class ``ArrayList`` is when you actually create the list as shown below.  This minimizes the number of places you have to change your code if you change your mind and use a different implementing class in the future.  
 
.. activecode:: lcalastr
   :language: java

   import java.util.*;  // import all classes in this package.
   public class Test
   {
      public static void main(String[] arts)
      {
         List nameList = new ArrayList();
         nameList.add("Diego");
         nameList.add("Grace");
         nameList.add("Deja"); 
         System.out.println(nameList);
      }
   }

This code creates an object variable called nameList that will refer to a List of objects and sets its reference to an object of the ArrayList class.  

You can also create lists of integer values.

.. activecode:: lcalaint
   :language: java

   import java.util.*;  // import all classes in this package.
   public class Test
   {
      public static void main(String[] arts)
      {
         List list1 = new ArrayList();
         list1.add(new Integer(1));
         list1.add(new Integer(2));
         list1.set(1, new Integer(3));
         list1.add(1, new Integer(4));
         list1.add(new Integer(5));
         System.out.println(list1);
      }
   }


**Check your understanding**

.. mchoice:: qlib_2
   :answer_a: [1, 2, 3, 4, 5]
   :answer_b: [1, 2, 4, 5, 6]
   :answer_c: [1, 2, 5, 4, 6]
   :answer_d: [1, 5, 2, 4, 6]
   :correct: c
   :feedback_a: The set will replace the item at index 2 so this can not be right.
   :feedback_b: The add with an index of 2 and a value of 5 adds the 5 at index 2 not 3. Remember that the first index is 0.
   :feedback_c: The set will change the item at index 2 to 4.  The add of 5 at index 2 will move everything else to the right and insert 5.  The last add will be at the end of the list.
   :feedback_d: The add with an index of 2 and a value of 5 adds the 5 at index 2 not 1. Remember that the first index is 0.

   What will print when the following code executes?
   
   .. code-block:: java 
   
      List<Integer> list1 = new ArrayList<Integer>();
      list1.add(new Integer(1));
      list1.add(new Integer(2));
      list1.add(new Integer(3));
      list1.set(2, new Integer(4));
      list1.add(2, new Integer(5));
      list1.add(new Integer(6));
      System.out.println(list1);
   
.. mchoice:: qlib_3
   :answer_a: [2, 3]
   :answer_b: [1, 2, 3]
   :answer_c: [1, 2]
   :answer_d: [1, 3]
   :correct: d
   :feedback_a: The remove will remove the item at the given index.  
   :feedback_b: The item at index 1 will be removed and all the other values shifted left.
   :feedback_c: The 3 is at index 2.  The item at index 1 will be removed. 
   :feedback_d: The item at index 1 is removed and the 3 is moved left.  

   What will print when the following code executes?
   
   .. code-block:: java 
   
      List<Integer> list1 = new ArrayList<Integer>();
      list1.add(new Integer(1));
      list1.add(new Integer(2));
      list1.add(new Integer(3));
      list1.remove(1);
      System.out.println(list1);
      
.. mchoice:: qlib_4
   :answer_a: [1, 2, 3, 4, 5]
   :answer_b: [1, 2, 4, 5, 6]
   :answer_c: [1, 2, 5, 4, 6]
   :answer_d: [1, 5, 2, 4, 6]
   :correct: d
   :feedback_a: The set will replace the 3 at index 2 so this isn't correct.
   :feedback_b: The add with an index of 1 and a value of 5 adds the 5 at index 1 not 3. Remember that the first index is 0.
   :feedback_c: The set will change the item at index 2 to 4.  The add of 5 at index 1 will move everything else to the right and insert 5.  The last add will be at the end of the list.
   :feedback_d: Add without a index adds at the end, set will replace the item at that index, add with an index will move all current values at that index or beyond to the right.
  
   What will print when the following code executes?
   
   .. code-block:: java
   
      List<Integer> numList = new ArrayList<Integer>();
      numList.add(new Integer(1));
      numList.add(new Integer(2));
      numList.add(new Integer(3));
      numList.set(2,new Integer(4));
      numList.add(1, new Integer(5));
      numList.add(new Integer(6));
      System.out.println(numList);
      
