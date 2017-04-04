.. qnum::
   :prefix: 8-8-
   :start: 1
   
Comparing Arrays and Lists
==============================

This section compares arrays and lists.  It explains when to use each, how to declare each, how to create each, how to set the value at an index in each, how to get the value at an index in each, and more.

When to use a List or an Array
-----------------------------------

Use an array when you want to store several items of the same type and you know how many items will be in the array and the items in the array won't change in order or number.  Use a list when you want to store several items of the same type and you don't know how many items you will need in the list or when you want to remove items from the list or add items to the list.

Declaring an Array or List
-----------------------------------

..	index::
	pair: array; declare

Declare an array using ``type[] name``. Examples are shown below.

.. code-block:: java 

   int[ ] highScores = null;
   String[ ] names = null;
   
..	index::
	pair: list; declare
  
Declare a list using ``List<Type> name``.  If you leave off the ``<Type>`` it will assume ``Object``.   

Remember that lists can only hold objects so if you want to store numbers use ``Integer`` rather than ``int``.  ``Integer`` is a class name and an object of that class can hold an integer value. 


.. code-block:: java

    List<Integer> highScoreList = null;
    List<String> nameList = null;  
    
.. note::

   Remember that declaring an array or list doesn't actually create the array or list. It creates a reference to an array or list object.  You still need to actually create the array or list object.   

Creating an Array or List
-----------------------------------

..	index::
	pair: array; create

To create an array use ``new type[num]``. You can do this when you declare the array.

.. code-block:: java 

   int[ ] highScores = new int[5];
   String[ ] names = new String[5];
   
..	index::
	pair: list; create
   
To create a list use ``new ArrayList<Type>();``.  You can do this when you declare the list.  If you leave off the ``<Type>`` it will assume ``Object``.  

.. code-block:: java 

   List<Integer> highScoreList = new ArrayList<Integer>();
   List<String> nameList = new ArrayList<String>();
   
.. note::

   Note that you don't have to specify the size of the ``ArrayList`` like you do with an array.
   
Setting the value at an index in an Array or List
---------------------------------------------------

..	index::
	pair: array; set value at index
	
To set the value at an index in an array use ``name[index] = value;``.

.. code-block:: java 

   highScores[0] = 80;
   
..	index::
	pair: list; set value at index
   
To set the value at an index in a list use ``name.set(index,value);``.

.. code-block:: java 

   highScoreList.set(0,80);
   
Getting the value at an index in an Array or List
---------------------------------------------------

..	index::
	pair: array; get value at index

To get the value at an index in an array use ``type value = name[index];``.

.. code-block:: java 

   int score = highScores[0];
   
..	index::
	pair: list; get value at index
   
To set the value at an index in a list use ``type value = name.get(index)``.

.. code-block:: java 

   int score = highScoreList.get(0);
   
Getting the number of items in an Array or List
-------------------------------------------------

..	index::
	pair: array; get num items

To get the number of items in an array use ``name.length``.

.. code-block:: java 

   System.out.println(highScores.length);
   
..	index::
	pair: list; get num items
   
To get the number of items in a list use ``name.size()``.

.. code-block:: java 

   System.out.println(highScoreList.size());
   
.. note::

   For arrays ``length`` is used to get the number of elements and it is a field so it isn't followed by ``()``.  Lists use ``size()``, which is a method call so it requires the ``()``.  
   



   

   

   

    

