.. qnum::
   :prefix:  16-11-
   :start: 1

NumberGroup - Part A
===============================

..	index::
	single: NumberGroup
    single: free response

The following is a free response question from 2015.  It was question 4 on the exam.  You can see all the free response questions from past exams at https://apstudent.collegeboard.org/apcourse/ap-computer-science-a/exam-practice.

**Question 4.** This question involves the design of an interface, writing a class that implements the interface, and writing
a method that uses the interface.

**Part a.**  A number group represents a group of integers defined in some way. It could be empty, or it could contain one or more integers.
Write an interface called ``NumberGroup`` that represents a group of integers. 
Write an interface named NumberGroup that represents a group of integers. The interface should have
a single  ``contains`` method that determines if a given integer is in the group. For example, if ``group1`` is of type ``NumberGroup``, and it only contains the two members -5 and 3, then ``group1.contains(-5)`` would return ``true`` , and ``group1.contains(2)`` would return ``false`` .

Write the complete ``NumberGroup`` interface. It must have exactly one method.

Try and Solve It
----------------

Write the interface ``NumberGroup`` below.

.. activecode:: NumberGroupA
   :language: java

   public interface NumberGroup{
      //Finish the interface here!
   }