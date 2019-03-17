.. qnum::
   :prefix: 10-17-
   :start: 1
   
List - Summary
-------------------------

..	index::
	single: List
	single: ArrayList
	single: interface
	single: index
	single: abstract method
	pair: method; abstract
	pair: list; index

In this chapter you learned about **List** and **ArrayList**.  A **list** holds objects in order, and you can add objects to a list or remove objects from a list.  You learned how to declare lists, create them, add objects, set the object at an index, and get the object at an index. The first element in a list is at index 0.

List are like arrays in that you can store many objects of the same type in a list, just as you can in an array.  Lists are different from arrays in that they can grow or shrink as needed. You can also add an element anywhere in a list and remove an element from any index. 

Lists also differ from arrays in that you can have an array of any of the primitive types: int, double, or boolean, but you can only put objects in a list.   You can use the wrapper classes ``Integer``, ``Double``, and ``Boolean`` to wrap a primitive value in an object so that you can put it in a list. Java will also do this automatically for you if you try to add a primitive value to a list or set a primitive variable to an item of a list.  This is called **autoboxing** and **unboxing**.

**ArrayList** is a Java class that implements the list **interface** using an array. An interface is a special kind of class that only has public **abstract methods**. An **abstract method** is one that only has a header and no body (no code).    Other
classes implement an interface by providing the code for the interface methods.  You can think of an interface as
specifying a contract and implementing classes agree to abide by the contract.  


Concept Summary
=================

- **Autoboxing** - Automatically wrapping a primitive type in a wrapper class object.  For instance if you try to add an ``int`` value to a list, it will automatically be converted to an ``Integer`` object.  
- **Abstract Method** - A method that only has a declaration and no method body (no code inside the method). 
- **Interface** - A special type of class that only has public and abstract methods.  It is used to specify what a subclass needs to be able to do, not how it does it.  One example is the ``List`` interface.
- **List** -  A list can hold many objects of the same type in order.  It can grow or shrink as needed.  You can add and remove items at any index.  
- **List Add** - You can add an object to the end of a list using ``listName.add(obj)``.  You can add an object at an index of a list using ``add(index,obj)``.  This will first move any objects at that index or higher to the right one position to make room for the new object.
- **List Declaration** - To declare a list use ``List<Type> name``, where ``Type`` is the class name for the type of objects in the list.  If you leave off the ``<Type>`` it will default to ``Object``.  
- **List Creation** - To create list use ``new ArrayList<Type>``, where ``Type`` is the class name for the type of objects you want to store in the list. There are other classes that implement the ``List`` interface, but you only need to know the ``ArrayList`` class for the exam.
- **List Get** - To get an object at an index from a list use ``listName.get(index)``.  
- **List Index** - You can access and set values in a list using an index.  The first element in a list called ``list1`` is at index 0 ``list1.get(0)``.  The last element in a list is at the length minus one - ``list1[list1.size() - 1]``.
- **List Remove** - To remove the object at an index use ``ListName.remove(index)``.  This will move all object past that index to the left one index.
- **List Set** - To set the value at an index in a list use ``listName.set(index,obj)``.  
- **List Size** - Use ``listName.size()`` to get the number of objects in the list.
- **Wrapper Class** - Classes used to create objects that hold primitive type values like ``Integer`` for ``int``, ``Double`` for ``double`` and ``Boolean`` for ``boolean``. 
- **Unboxing** - Automatically converting a wrapper object like an ``Integer`` into a primitive type such as an ``int``.  

Practice
===========

.. dragndrop:: ch10_17_match_1
    :feedback: Review the summaries above.
    :match_1: The index of the last element|||size() - 1
    :match_2: The number of elements in the list|||size()
    :match_3: The index of the first element|||0
    :match_4: The index of the second element|||1
    
    Drag the item from the left and drop it on its corresponding answer on the right.  Click the "Check Me" button to see if you are correct.
    
.. dragndrop:: ch10_17_match_2
    :feedback: Review the summaries above.
    :match_1: Declare an integer list named numList|||List&lt;Integer&gt; numList = null;
    :match_2: Declare and create a list of strings named list1 |||List&lt;String&gt; list1 = new ArrayList&lt;String&gt;();
    :match_3: Declare and create a list of integers named list1 |||List&lt;Integer&gt; list1 = new ArrayList&lt;Integer&gt;();
    :match_4: Get the first object in a list named list1|||list1.get(0);
    :match_5: Get the last object in a list named list1|||list1.get(list1.size() - 1);
   
    Drag the description from the left and drop it on the correct code on the right.  Click the "Check Me" button to see if you are correct.
