.. qnum::
   :prefix:  16-12-
   :start: 1

NumberGroup - Part B
===============================

..	index::
	single: NumberGroup
    single: free response

**Part b.**  A range represents a number group that contains all (and only) the integers between a minimum value and
a maximum value, inclusive.
Write the ``Range`` class, which is a ``NumberGroup``. The ``Range`` class represents the group of ``int`` values that range from a given minimum value up through a given maximum value, inclusive. For example, the declaration ``NumberGroup range1 = new Range(-3, 2);`` represents the group of integer values -3, -2, -1, 0, 1, 2.

Write the complete ``Range`` class. Include all necessary instance variables and methods as well as a constructor that takes two ``int`` parameters. The first parameter represents the minimum value, and the second parameter represents the maximum value of the range. You may assume that the minimum is less than or equal to the maximum.

Try and Solve It
----------------

Write the class ``Range`` below.

The code below has a main method for testing the ``NumberGroup`` method.


.. activecode:: NumberGroupB
   :language: java
	public class Range implements NumberGroup{
   //Write the Range class here!
   }
   //Main method to test the class
   
   public static void main(String[] args)
    {
        System.out.println("This is testing the constructor");
        Range test = Range (5, 8);
        System.out.println("The program says the minimum is " + test.getMin() + ", it really should be 5.";
        System.out.println("The program says the maximum is " + test.getMax() + ", it really should be 8.";
		System.out.println("/nThis is testing the contains function.");
		System.out.println("The program says that 6 is within the range of the function, which is correct.");
     } // end of main

} // end of class