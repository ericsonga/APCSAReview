.. qnum::
   :prefix: 8-5-
   :start: 1
     
Adding Values to a List
=========================

..	index::
	pair: list; adding an item

You can add values to a list.  If you use ``add(obj)`` it will add the passed object to the end of the list.  Run the code below to see how the list changes as each object is added.

.. activecode:: listAdd1
   :language: java

   import java.util.*;  // import all classes in this package.
   public class Test
   {
      public static void main(String[] args)
      {
         List<String> nameList = new ArrayList<String>();
         nameList.add("Diego");
         System.out.println(nameList);
         nameList.add("Grace");
         System.out.println(nameList);
         nameList.add("Diego"); 
         System.out.println(nameList);
         System.out.println(nameList.size());
      }
   }
   
.. note::

   Notice that we added the same string to the list more than once.  Lists can hold duplicate objects. 
 
There are actually two different ``add`` methods in the ``List`` interface.  The ``add(obj)`` method adds the passed object to the end of the list.
The ``add(index,obj)`` method adds the passed object at the passed index, but first moves over any existing values to higher indicies to make room for the new object.  

.. activecode:: lcalaint
   :language: java

   import java.util.*;  // import all classes in this package.
   public class Test
   {
      public static void main(String[] arts)
      {
         List<Integer> list1 = new ArrayList<Integer>();
         list1.add(new Integer(1));
         System.out.println(list1);
         list1.add(new Integer(2));
         System.out.println(list1);
         list1.add(1, new Integer(3));
         System.out.println(list1);
         list1.add(1, new Integer(4));
         System.out.println(list1);
         System.out.println(list1.size());
      }
   }
   
..	index::
	pair: list; autoboxing
	pair: list; unboxing
   
.. note::

   Lists can only hold objects, not primitive values.  This means that ``int`` values must be wrapped into ``Integer`` objects to be stored in a list.  You can do this using ``new Integer(value)`` as shown above.  You can also just put an ``int`` value in a list and it will be changed into an ``Integer`` object automatically.  This is called **autoboxing**. When you pull an ``int`` value out of a list of ``Integers`` that is called **unboxing**.  
   
The code below has the same result as the code above.  The compiler will automatically wrap the ``int`` values in ``Integer`` objects.
   
.. activecode:: listAddInt2
   :language: java

   import java.util.*;  // import all classes in this package.
   public class Test
   {
      public static void main(String[] arts)
      {
         List<Integer> list1 = new ArrayList<Integer>();
         list1.add(1);
         System.out.println(list1);
         list1.add(2);
         System.out.println(list1);
         list1.add(1, 3);
         System.out.println(list1);
         list1.add(1, 4);
         System.out.println(list1);
         System.out.println(list1.size());
      }
   }
    
   
**Check your understanding**

.. mchoice:: qalAdd1
   :answer_a: [1, 2, 3, 4, 5]
   :answer_b: [1, 4, 2, 3, 5]
   :answer_c: [1, 2, 4, 3, 5]
   :answer_d: [1, 2, 4, 5]
   :correct: c
   :feedback_a: This would be true if all the <code>add</code> method calls were <code>add(value)</code>, but at least one is not.
   :feedback_b: This would be true if it was <code>add(1, new Integer(4))</code>
   :feedback_c: The <code>add(2, new Integer(4))</code> will put the 4 at index 2, but first move the 3 to index 3.
   :feedback_d: This would be true if the <code>add(2, new Integer(4))</code> replaced what was at index 2, but it actually moves the value currently at index 2 to index 3.

   What will print when the following code executes?
   
   .. code-block:: java 
   
      List<Integer> list1 = new ArrayList<Integer>();
      list1.add(new Integer(1));
      list1.add(new Integer(2));
      list1.add(new Integer(3));
      list1.add(2, new Integer(4));
      list1.add(new Integer(5));
      System.out.println(list1);
      
You can step through the code above by clicking on the following `Example-8-5-1 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=import+java.util.*%3B%0A%0Apublic+class+ClassNameHere+%7B%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A++++++%0A++++++List%3CInteger%3E+list1+%3D+new+ArrayList%3CInteger%3E()%3B%0A++++++list1.add(new+Integer(1))%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(new+Integer(2))%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(new+Integer(3))%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(2,+new+Integer(4))%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(new+Integer(5))%3B%0A++++++System.out.println(list1)%3B%0A++++++%0A+++%7D%0A%7D&mode=display&curInstr=0>`_.
      
.. mchoice:: qalAdd2
   :answer_a: ["Anaya", "Sarah", "Layla", "Sharrie"]
   :answer_b: ["Anaya", "Layla", "Sharrie", "Sarah"]
   :answer_c: ["Sarah", "Anaya", "Layla", "Sharrie"]
   :answer_d: ["Anaya", "Layla", "Sarah", "Sharrie"]
   :correct: a 
   :feedback_a: The <code>add(1, "Sarah")</code> will move any current items to the right and then put "Sarah" at index 1.
   :feedback_b: This would be true if the last one was <code>add("Sarah")</code>
   :feedback_c: This would be true if the last one was <code>add(0, "Sarah")</code>
   :feedback_d: This would be true if the last one was <code>add(2, "Sarah")</code>
   
   What will print when the following code executes?
   
   .. code-block:: java 
   
      List<String> list1 = new ArrayList<String>();
      list1.add("Anaya");
      list1.add("Layla");
      list1.add("Sharrie");
      list1.add(1, "Sarah");
      System.out.println(list1);
      
You can step through the code above by clicking on the following `Example-8-5-2 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=import+java.util.*%3B%0A%0Apublic+class+ClassNameHere+%7B%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A++++++%0A++++++List%3CString%3E+list1+%3D+new+ArrayList%3CString%3E()%3B%0A++++++list1.add(%22Anaya%22)%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(%22Layla%22)%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(%22Sharrie%22)%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(1,+%22Sarah%22)%3B%0A++++++System.out.println(list1)%3B%0A++++++%0A+++%7D%0A%7D&mode=display&curInstr=0>`_.


.. mchoice:: qalAdd3
   :answer_a: [5, 4, 3, 2]
   :answer_b: [5, 4, 1, 3]
   :answer_c: [2, 5, 4, 3]
   :answer_d: [5, 2, 4, 3]
   :correct: d
   :feedback_a: Remember that <code>add(obj)</code> adds the object to the end of the list.
   :feedback_b: This would be true if it was <code>add(obj, index)</code>, but it is <code>add(index, obj)</code>
   :feedback_c: This would be true if the first index was 1, but it is 0.
   :feedback_d: This adds the 2 to index 1, but first moves all other values past that index to the right.

   What will print when the following code executes?
   
   .. code-block:: java 
   
      List<Integer> list1 = new ArrayList<Integer>();
      list1.add(5);
      list1.add(4);
      list1.add(3);
      list1.add(1, 2);
      System.out.println(list1);
      
You can step through the code above by clicking on the following `Example-8-5-3 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=import+java.util.*%3B%0A%0Apublic+class+ClassNameHere+%7B%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A++++++%0A++++++List%3CInteger%3E+list1+%3D+new+ArrayList%3CInteger%3E()%3B%0A++++++list1.add(5)%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(4)%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(3)%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(1,+2)%3B%0A++++++System.out.println(list1)%3B%0A++++++%0A+++%7D%0A%7D&mode=display&curInstr=0>`_.
      
.. mchoice:: qalAdd4
   :answer_a: [1, 3, 2]
   :answer_b: [1, 3, 2, 1]
   :answer_c: [1, 1, 2, 3]
   :answer_d: [1, 2, 3]
   :correct: b
   :feedback_a: You can add duplicate objects to a list so this list will have two 1's.  
   :feedback_b: The add method adds each object to the end of the list and lists can hold duplicate objects.
   :feedback_c: This would be true if the list was sorted as you add to it, but this is not true.
   :feedback_d: This would be true if the list was sorted and you couldn't add duplicate objects, but lists are not sorted and you can add duplicate objects.  

   What will print when the following code executes?
   
   .. code-block:: java 
   
      List<Integer> list1 = new ArrayList<Integer>();
      list1.add(1);
      list1.add(3);
      list1.add(2);
      list1.add(1);
      System.out.println(list1);
