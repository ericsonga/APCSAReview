.. qnum::
   :prefix: 12-1-
   :start: 1

Searching and Sorting
======================

..	index::
	single: sequential search
	single: binary search
	single: recursion
	pair: search; sequential
	pair: search; binary

Computers store vast amounts of data. One of the strengths of computers is their ability to find things quickly.  This ability is called **searching**.  For the AP CS A exam you will need to know both **sequential search** and **binary search**. 

.. the video is Searching.mov

The following video is also on YouTube at https://youtu.be/DHLCXXX1OtE.  It introduces the concept of searching including sequential search and binary search.

.. youtube:: DHLCXXX1OtE
    :width: 800
    :align: center


* Sequential search typically starts at the first element in an array or list and looks through all the items one by one until it either finds the desired value and then it returns the index it found the value at or if it searches the entire array or list without finding the value it returns -1. 
* Binary search **can only be used on data that has been sorted or stored in order**.  It checks the middle of the data to see if that middle value is less than, equal, or greater than the desired value and then based on the results of that it narrows the search. It cuts the search space in half each time.



If binary search requires the values in an array or list to be sorted, how can you do that?  There are many sorting algorithms.  The three that you need to know for the AP CS A exam are:

..	index::
	single: selection sort
	single: insertion sort
	single: merge sort
	pair: sort; selection
	pair: sort; insertion
	pair: sort; merge

* Selection Sort - Select the smallest item from the current location on to the end of the array and swap it with the value at the current position.  Do this from index 0 to the array length - 2.  You don't have to process the last element in the array, it will already be sorted when you compare the prior element to the last element.
* Insertion Sort - Insert the next unsorted element in the already sorted part of the array by moving larger values to the right.  Start at index 1 and loop through the entire array.
* Merge sort - Break the elements into two parts and recursively sort each part.  An array of one item is sorted (base case).  Then merge the two sorted arrays into one.

The next lessons will explain these sorting algorithms.

.. There are many videos on YouTube that show these sorts.  Here is a folk dance for selection sort.
.. .. youtube:: Ns4TPTC8whw
    :align: center
    
.. Here is folk dance for insertion sort.

.. .. youtube:: ROalU379l3U
    :align: center
    
.. Here is folk dance for merge sort.

.. .. youtube:: XaqR3G_NVoo
    :align: center
    
.. Here is another video that talks about bubble sort, insertion sort, and quick sort.  Of these only insertion sort is on the exam.

.. .. youtube:: WaNLJf8xzC4
    :align: center