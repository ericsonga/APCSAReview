.. include:: ../common.rst

.. qnum::
   :prefix: 4-7-
   :start: 1

Group Work - Remainder Operator (%)
========================================

It is best to use a POGIL approach with the following. In POGIL students work
in groups on activities and each member has an assigned role.  For more information see `https://cspogil.org/Home <https://cspogil.org/Home>`_.
This page is based on a POGIL activity from Helen Hu at that site.

.. index::
  single: modulus
  single: modulo operator
  single: remainder
  single: remainder operator

.. activecode:: mod-model-1
   :language: java

   Run the following code to see what it prints.
   ~~~~
   public class ModModl1
   {
       public static void main(String[] args)
       {
           System.out.println(9 % 4);
           System.out.println(10 % 4);
           System.out.println(11 % 4);
           System.out.println(12 % 4);
           System.out.println(13 % 4);
           System.out.println(14 % 4);
           System.out.println(15 % 4);
           System.out.println(16 % 4);
       }
   }

Look at the expressions in the code above and the output.  Then answer the following questions.

.. fillintheblank:: mod-which-returns-zero

    Review the code above.  What is the first number (n) above such that ``n % 4`` returns zero?

    - :12: Four goes into twelve 3 times with 0 remainder
      :.*: What is the first number above that is evenly divisible by 4 (num % 4 returns 0)?

.. fillintheblank:: mod-next-returns-zero

    Review the code above.  What is the next number (n) (greater than 16) such that ``n % 4`` returns zero?

    - :20: Four goes into twenty 5 times with a remainder of 0.
      :.*: Which next number larger than 16 is evenly divisible by 4 (num % 4 returns 0)?

Going Beyond Remainder 4
-------------------------

.. fillintheblank:: mod-return-zero-mod-five

    What is the first number from to 1 to 10 that is evenly divisible by five (``n % 5`` returns 0)?

    - :5: Five goes into five one time with a remainder of zero.
      :.*: What is the first number from to 1 to 10 that is evenly divisible by five?

.. fillintheblank:: mod-return-zero-mod-five-last

    What is the last number from to 1 to 10 that is evenly divisible by five (``n % 5`` returns 0)?

    - :10: Five goes into ten two times with a remainer of 0.
      :.*: What is the last number from to 1 to 10 that is evenly divisible by five?

Look Deeper
-----------------------

.. shortanswer:: mod-returns-one-sa

   Look at the code above for the numbers such that ``n % 4`` returns 1.  How do these numbers differ from the ones that return zero?

More Practice
-----------------------

.. fillintheblank:: mod-18-mod-4

    What is the number returned from ``18 % 4``?

    - :2: Four goes into 18 four times (16) with a remainder of 2.
      :.*: What is the remainder when you divide 18 by 4?

.. fillintheblank:: mod-19-mod-4

    What is the number returned from ``19 % 4``?

    - :3: Four goes into 19 four times (16) with a remainder of 3.
      :.*: What is the remainder when you divide 19 by 4?

.. fillintheblank:: mod-19-mod-5

    What is the number returned from ``19 % 5``?

    - :4: Five goes into 19 three times (15) with a remainder of 4.
      :.*: What is the remainder when you divide 19 by 5?

.. fillintheblank:: mod-19-mod-6

    What is the number returned from ``19 % 6``?

    - :1: Six goes into 19 three times (18) with a remainder of 1.
      :.*: What is the remainder when you divide 19 by 6?

Long Division with a Remainder
--------------------------------

Consider how you did long division in elementary school where you determined
what number goes evenly into another number and the remainder.

.. image:: https://i.postimg.cc/VL6rBj0g/mod-ex.png

.. fillintheblank:: mod-79-mod-5

    What number is the remainder when you divide 79 by 5?

    - :4: Five goes into 79 - 15 times (15 * 5 is 75) with a reminder of 4.
      :.*: What is the remainder when you divide 79 evenly by 5?

Dividing Evenly
------------------

Imagine if you were given candies to evenly divide amoung members of a group of four people.
Follow kindergarten rules where every group member gets the same number of candies and
the extras go back to the teacher.


.. fillintheblank:: mod-11-mod-4

    How many candies go back to the teacher when you are given 11 candies?

    - :3: Four goes into 11 two times (4 * 2 = 8) with a remainder of 3.
      :.*: What is the remainder when you divide 11 by 8?

.. fillintheblank:: mod-2-mod-4

    How many candies go back to the teacher when you are given 2 candies?

    - :2: Four goes into two zero times with a remainder of 2.
      :.*: What is the remainder when you divide 2 by 4?

Describe the Remainder (%) Operator
---------------------------------

.. shortanswer:: mod-describe-mod-sa

   Describe what % does in your own words.  Use complete sentences.
