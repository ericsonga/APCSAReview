.. qnum::
   :prefix: 7-1-
   :start: 1

Arrays in Java
=================

.. video:: v_interfaces
   :controls:
   :thumb: ../_static/videoStart.png

   http://ice-web.cc.gatech.edu/ce21/1/static/video/Arrays.mov
   http://ice-web.cc.gatech.edu/ce21/1/static/video/Arrays.webm
   
..	index::
	single: array
	single: index
	pair: array; index

An **array** is consecutive storage for multiple items of the same type.  You can store a value in an array using an **index** (location in the array).  You can get a value from an array using an index.  An array is like a row of lockers, except that you can't cram lots of stuff into it.  You can only store one value at an array index.  An array index is like a locker number.  It helps you find a particular place to store your stuff.  

.. figure:: Figures/rowLockers.jpg
    :width: 400px
    :align: center
    :figclass: align-center

    Figure 1: A row of lockers
   
Arrays are useful whenever you have several elements of data of the same type that you want to keep track of, but you don't need to name each one.  If you want to keep track of the top 5 highest scores in a game and the names of the people with those scores, you could use two arrays.  

To declare an array specify the type of elements that will be stored in the array, then (``[ ]``) to show that it is an array of that type, then at least one space, and then a name for the array.  Note that the declarations below just name the variable and say what type of array it will reference.  **The declarations do not create the array**.  Arrays are objects in Java, so any variable that declares an array holds a reference to an object.  If the array hasn't been created yet and you try to print the value of the variable, it will print **null** (meaning it doesn't reference any object yet).  Try the the following in DrJava's interaction pane.
 
.. code-block:: java 

  int[ ] highScores;
  String[ ] names;

.. fillintheblank:: nullInit
   :correct: null$
   :feedback1: ('.*','Did you actually try this in DrJava?')
   :blankid: arrayNullblank

   What is printed in DrJava when you type System.out.println(names); and hit enter after you do the above declarations? :textfield:`arrayNullblank::mini`


To create an array use the **new** keyword, followed by a space, then the type, and then in square brackets the size of the array (number of elements to store).  

.. code-block:: java 

  highScores = new int[5]; 
  names = new String[5];
  
..	index::
	pair: array; initialization
  
Array elements are initialized to 0 if they are a numeric type (int or double), ``false`` if they are of type ``boolean``, or ``null`` if they are an object type.  

To put a value in an array you give the name of the array and the index number in brackets ([0]).  The first item in an array is at index 0.  

.. code-block:: java 

  highScores[0] =  99;
  highScores[1] =  98;
  highScores[2] =  98;
  highScores[3] =  88;
  highScores[4] =  68;
  names[0] = "Jamal";
  names[1] = "Emily";
  names[2] = "Destiny"; 
  names[3] = "Mateo";
  names[4] = "Sofia"; 

You can also initialize (set) the values in the array when you create it.  In this case you don't need to specify the size of the array, it will be determined from the values you give.  

.. code-block:: java 

  int[ ] highScores = {99,98,98,88,68};
  String[ ] names = {"Jamal", "Emily", "Destiny", "Mateo", "Sofia"};
  
When you create an array of a **primitive type** (like ``int``) with initial values specified, space is allocated for the specified number of items of that type and the values in the array are set to the specified values.  When you create an array of an **object type** (like ``String``) with initial values, space is set aside for that number of object references.  The objects are created and the object references set so that the objects can be found. 

.. figure:: Figures/intAndStringArrays.png
    :width: 500
    :align: center
    :figclass: align-center

    Figure 2: A primitive array and an object array
    
..	index::
    single: dot-notation
	pair: array; length

Arrays know their length (how many elements they can store).  It is a public read-only field so you can use ``dot-notation`` to access the field (``arrayName.length``).  **Note that length is a field and not a method, so you don't add parentheses after length**.  However, if you use parentheses after length during the exam, you won't lose any points.

.. code-block:: java 

  highScores.length

**Check your understanding**

.. mchoicemf:: qab_1
   :answer_a: 0
   :answer_b: 1
   :correct: a
   :feedback_a: The index is really telling the computer how far the item is from the front of the array.  So the first element in an array is at index 0. 
   :feedback_b: While this matches with how we number some things, the first item in an array is at index 0.

   What index is the first element in an array at?
   
.. mchoicemf:: qab_2
   :answer_a: highScores.length
   :answer_b: highScores.length - 1
   :correct: b
   :feedback_a: Look at the example above when we were setting the values for the highScore array.  
   :feedback_b: Since the first element in an array is at index 0 the last element is the length minus 1.

   Which index is the last element in an array called highScores at?
   
 
  
      

