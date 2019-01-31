.. qnum::
   :prefix:  16-10-
   :start: 1

ArrayTester - Part B
===============================

..	index::
	single: ArrayTester
    single: free response

**Part b.**   Write the static method ``isLatin``, which returns ``true`` if a given two-dimensional square array is a ``Latin square``, and otherwise, returns false.

A two-dimensional square array of integers is a Latin square if the following conditions are true.
1) The first row has no duplicate values.
2) All values in the first row of the square appear in each row of the square.
3) All values in the first row of the square appear in each column of the square.

.. figure:: Figures/LatinSquareEx.png
    :align: center
    :figclass: align-center

The ``ArrayTester`` class provides two helper methods: ``containsDuplicates`` and ``hasAllValues``. The method ``containsDuplicates`` returns ``true`` if the given one-dimensional array ``arr`` contains any duplicate values and ``false`` otherwise. The method ``hasAllValues`` returns ``true`` if and only if every value in ``arr1`` appears in ``arr2``. You do not need to write the code for these methods.

.. figure:: Figures/LatinSquareEx2.png
    :align: center
    :figclass: align-center

Complete method ``isLatin`` below. Assume that ``getColumn`` works as specified, regardless of what
you wrote in part (a). You must use ``getColumn``, ``hasAllValues``, and ``containsDuplicates``
appropriately to receive full credit.

Try and Solve It
----------------

Complete the method ``isLatin`` below.

.. activecode:: isLatinTwo
   :language: java

   public static boolean isLatin(int[] [] square)
   
   {
   
   } 
   
   // Main method to test getColumn method
   public static void main(String[] args)
    {
    	int [] [] arr2D = { { 1, 2, 3 }, { 2, 3, 1 }, { 3, 1, 2 }};
    	bool test = isLatin(arr2D);
        System.out.println("If isLatin is implemented correctly, then test should be false.");
        if (!test)
        {
           System.out.print("Uh oh! isLatin(test) was false, but it should be true.");
        }

     } // end of main