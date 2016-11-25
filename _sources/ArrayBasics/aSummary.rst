.. qnum::
   :prefix: 7-22-
   :start: 1
   
Arrays - Summary
-------------------------

In this chapter you learned about **Arrays**.  **Arrays** are used to hold many individual variables of the same type.

..	index::
    single: declaration
    single: creation
    single: initialization
    single: length
    single: using elements
    single: looping
    single: starting point




Concept Summary
=================


- **Declaration** - To declare an array specify the type of elements that will be stored in the array, then (``[]``) to show that it is an array of that type, then at least one space, and then a name for the array. Examples:  ``int[] highScores = null;``  ``String[] names = null;``
- **Creation** - To create an array type the name and an equals sign then use the *new* keyword, followed by a space, then the type, and then in square brackets the size of the array (the number of elements it can hold). Example:   ``names = new String[5];``
- **Initialization** - You can also initialize (set) the values in the array when you create it. In this case you don’t need to specify the size of the array, it will be determined from the number of values that you specify. Example:   ``int[] highScores = {99,98,98,88,68};``
- **Length** - The length of an array is determined by the amount of elements it holds. The length of the array can be used through the ``length`` attribute that all declared arrays have, ``array.length``. Example: given ``int[] scores = {1,2,2,1,3,1};``, ``scores.length`` equals 6.
- **Using Elements** - A specific element can be referenced by using the name of the array and the element's index in square brackets. Example: ``scores[3]`` will yield the 4th element (since index starts at 0, not 1). To reference the last element in an array, use ``array[length - 1]``
- **Looping** - One way to print an array or to access more than one of it's elements is to loop through it. Use a *for each* loop to print all of the array with minimal coding, but use a *for* loop or a *while* loop when manipulating the array, or only wanting to access a certain part of it.
- **Starting Point** - The first element in an array has the index 0. The second has the index 1, an so on. 


Keywords
=========================

- **element** - the thing that is being stored at a certain index. Example: in the String array ``{"Billy", "Joe", "Mandy"}``, "Joe" is an element.
- **index** - the numerical place inside of an array where an element is stored. Example: in the String array ``{"Billy", "Joe", "Mandy"}``, "Joe"s index is 1. 

Practice
===========

.. dragndrop:: ch7_arrays1
    :feedback: Review the summaries above.
    :match_1: the index of the last element|||length - 1
    :match_2: the amount of elements|||length
    :match_3: the index of the first element|||0
    :match_4: the index of the second element|||1
    
    Drag the term from the left and drop it on its corresponding answer on the right.  Click the "Check Me" button to see if you are correct.
    
.. dragndrop:: ch7_arrays2
    :feedback: Review the summaries above.
    :match_1: declare an integer array named nums|||int[] nums = null;
    :match_2: create a String array named list1 that can holds 3 elements|||list1 = new String[3];
    :match_3: initialize an array of integers named nums containing the first 3 natural numbers|||int[] nums = {1,2,3};
    :match_4: initialize a String array named list1 that contains the first 3 letters of the alphabet as separate elements|||String[] list1 = {"a", "b", "c"};
    
    Drag the instruction from the left and drop it on the correct code on the right.  Click the "Check Me" button to see if you are correct.
