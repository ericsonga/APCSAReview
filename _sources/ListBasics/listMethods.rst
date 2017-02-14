.. qnum::
   :prefix: 8-6-
   :start: 1

Getting and Setting Values in a List
===========================================

..	index::
	pair: list; getting an item
    pair: list; setting an item

You can get the object at an index using ``obj = listName.get(index)`` and set the object at an index using ``listName.set(index,obj)``.

.. activecode:: listGetSet
   :language: java

   import java.util.*;  // import all classes in this package.
   public class Test
   {
      public static void main(String[] args)
      {
         List<String> nameList = new ArrayList<String>();
         nameList.add("Diego");
         nameList.add("Grace");
         nameList.add("Deja"); 
         System.out.println(nameList);
         System.out.println(nameList.get(0));
         System.out.println(nameList.get(1));
         System.out.println(nameList.get(2));
         nameList.set(1, "John");
         System.out.println(nameList);
         
      }
   }
   
.. note::

   Remember that you can get the value at an array index using ``value = arrayName[index]``.  This is different from how you get the value from a list using ``obj = listName.get(index)``.  You can set the value at an index in an array using ``arrayName[index] = value``, but with lists you use ``listName.set(index, object)``.  
   
Removing an Object at an Index
===============================

..	index::
	pair: list; removing an item at an index
 
You can also remove an object at an index in a list using ``remove(index)`` which returns the removed object and shifts the remaining objects past the index left one index.  

.. activecode:: listRem
   :language: java

   import java.util.*;  // import all classes in this package.
   public class Test
   {
      public static void main(String[] arts)
      {
         List list1 = new ArrayList();
         list1.add(new Integer(1));
         list1.add(new Integer(2));
         list1.add(new Integer(3));
         System.out.println(list1);
         list1.remove(1);
         System.out.println(list1);
      }
   }
   
.. note::

   The ``remove(int index)`` method will remove the object at the index and shift left any values to the right of the current index.  It doesn't remove the object that matches the integer value given. In the example above it doesn't remove the 1.  It removes the 2 at index 1.
   

**Check your understanding**

.. mchoice:: qListRem1
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
      
You can step through the code above by clicking on the following `Example-8-6-1 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=import+java.util.*%3B%0A%0Apublic+class+ClassNameHere+%7B%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A++++++%0A++++++List%3CInteger%3E+list1+%3D+new+ArrayList%3CInteger%3E()%3B%0A++++++list1.add(new+Integer(1))%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(new+Integer(2))%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(new+Integer(3))%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.set(2,+new+Integer(4))%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(2,+new+Integer(5))%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(new+Integer(6))%3B%0A++++++System.out.println(list1)%3B%0A++++++%0A+++%7D%0A%7D&mode=display&curInstr=0>`_.
      
.. mchoice:: qListRem2
   :answer_a: ["Sarah", "Destini", "Layla", "Sharrie"]
   :answer_b: ["Sarah", "Destini", "Anaya", "Layla", "Sharrie"]
   :answer_c: ["Anaya", "Sarah", "Sharrie"]
   :answer_d: ["Anaya", "Sarah", "Destini", "Sharrie"]
   :correct: d
   :feedback_a: Remember that the first index is 0 not 1.
   :feedback_b: Set changes the value and the first index is 0 not 1.
   :feedback_c: Add at index 1 adds the new value at that index but moves right any existing values.
   :feedback_d: The list is first ["Anaya", "Layla", "Sharrie"] and then changes to ["Anaya", Destini", "Sharrie"] and then to ["Anaya", "Sarah", "Destini", "Sharrie"]
   
   What will print when the following code executes?
   
   .. code-block:: java 
   
      List<String> list1 = new ArrayList<String>();
      list1.add("Anaya");
      list1.add("Layla");
      list1.add("Sharrie");
      list1.set(1, "Destini");
      list1.add(1, "Sarah");
      System.out.println(list1);
      
You can step through the code above by clicking on the following `Example-8-6-2 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=import+java.util.*%3B%0A%0Apublic+class+ClassNameHere+%7B%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A++++++%0A++++++List%3CString%3E+list1+%3D+new+ArrayList%3CString%3E()%3B%0A++++++list1.add(%22Anaya%22)%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(%22Layla%22)%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(%22Sharrie%22)%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.set(1,+%22Destini%22)%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(1,+%22Sarah%22)%3B%0A++++++System.out.println(list1)%3B%0A++++++%0A+++%7D%0A%7D&mode=display&curInstr=0>`_.
      
.. mchoice:: qListRem3
   :answer_a: [1, 2, 3, 4, 5]
   :answer_b: [1, 2, 4, 5, 6]
   :answer_c: [1, 2, 5, 4, 6]
   :answer_d: [1, 5, 2, 4, 6]
   :correct: d
   :feedback_a: The set will replace the 3 at index 2 so this isn't correct.
   :feedback_b: The add with an index of 1 and a value of 5 adds the 5 at index 1 not 3. Remember that the first index is 0.
   :feedback_c: The set will change the item at index 2 to 4.  The add of 5 at index 1 will move everything else to the right and insert 5.  The last add will be at the end of the list.
   :feedback_d: Add without an index adds at the end, set will replace the item at that index, add with an index will move all current values at that index or beyond to the right.
  
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
      
You can step through the code above by clicking on the following `Example-8-6-3 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=import+java.util.*%3B%0A%0Apublic+class+ClassNameHere+%7B%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A++++++%0A++++++List%3CInteger%3E+list1+%3D+new+ArrayList%3CInteger%3E()%3B%0A++++++list1.add(new+Integer(1))%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(new+Integer(2))%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(new+Integer(3))%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.set(2,+new+Integer(4))%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(1,+new+Integer(5))%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(new+Integer(6))%3B%0A++++++System.out.println(list1)%3B%0A++++++%0A+++%7D%0A%7D&mode=display&curInstr=0>`_.
      
.. mchoice:: qListRem4
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
      
You can step through the code above by clicking on the following `Example-8-6-4 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=import+java.util.*%3B%0A%0Apublic+class+ClassNameHere+%7B%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A++++++List%3CInteger%3E+list1+%3D+new+ArrayList%3CInteger%3E()%3B%0A++++++list1.add(new+Integer(1))%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(new+Integer(2))%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(new+Integer(3))%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.remove(1)%3B%0A++++++System.out.println(list1)%3B%0A+++%7D%0A%7D&mode=display&curInstr=0>`_.
      
.. mchoice:: qListRem5
   :answer_a: [2, 3]
   :answer_b: [1, 2, 3]
   :answer_c: [1, 2]
   :answer_d: [1, 3]
   :correct: c
   :feedback_a: This would be true if it was remove(0) 
   :feedback_b: The remove will remove a value from the list, so this can't be correct.
   :feedback_c: The 3 (at index 2) is removed
   :feedback_d: This would be true if it was remove(1)

   What will print when the following code executes?
   
   .. code-block:: java 
   
      List<Integer> list1 = new ArrayList<Integer>();
      list1.add(new Integer(1));
      list1.add(new Integer(2));
      list1.add(new Integer(3));
      list1.remove(2);
      System.out.println(list1);
      
You can step through the code above by clicking on the following `Example-8-6-5 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=import+java.util.*%3B%0A%0Apublic+class+ClassNameHere+%7B%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A++++++List%3CInteger%3E+list1+%3D+new+ArrayList%3CInteger%3E()%3B%0A++++++list1.add(new+Integer(1))%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(new+Integer(2))%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(new+Integer(3))%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.remove(2)%3B%0A++++++System.out.println(list1)%3B%0A+++%7D%0A%7D&mode=display&curInstr=0>`_.
      

      
