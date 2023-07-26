.. qnum::
   :prefix:  14-3-
   :start: 1

RandomStringChooser - Part B Parsons
==================================================

**Part b.**   The following partially completed ``RandomLetterChooser`` class is a subclass of the ``RandomStringChooser`` class.  You will put blocks in order to create the constructor for the ``RandomLetterChooser`` class.

.. code-block:: java

   public class RandomLetterChooser extends RandomStringChooser
   {
       /**
        * Constructs a random letter chooser using the given string str. Precondition:
        * str contains only letters.
        */
       public RandomLetterChooser(String str)
       {
           /* to be implemented in part (b) */
       }

       /**
        * Returns an array of single-letter strings. Each of these strings consists of
        * a single letter from str. Element k of the returned array contains the
        * single letter at position k of str. For example, getSingleLetters("cat")
        * return the array {"c", "a", "t" }.
        */
       public static String[] getSingleLetters(String str)
       {
           /* implementation not shown */
       }
   }

The following code segment shows an example of using ``RandomLetterChooser``.


.. code-block:: java

   RandomLetterChooser letterChooser = new RandomLetterChooser("cat");
   for (int k = 0; k < 4; k++)
   {
       System.out.print(letterChooser.getNext());
   }

The code segment will print the three letters in ``"cat"`` in one of the possible orders.  Because there are only three letters in the original string, the code segment prints ``"NONE"`` the fourth time through the loop.  One posible output is shown below.


.. code-block:: java

   actNONE

Assume that the ``RandomStringChooser`` class that you wrote in part (a) has been implemented correctly and that
``getSingleLetters`` works as specified.  You must use ``getSingleLetters``.


.. parsonsprob:: ch17RandStr1
   :numbered: left
   :adaptive:
   :noindent:

   The code below will copy the strings from the array to a list in the constructor using a general for loop.  In ``getNext`` it will return "NONE" if the length of the list is 0.  Otherwise it till calculate a random index in the list and remove and return the string at that index. The blocks have been mixed up and include extra blocks that aren't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the Check button to check your solution.
   -----
   public RandomLetterChooser(String str)
   {
   =====
       super(getSingleLetters(str));
   =====
       super(str); #paired
   =====
   } // end constructor
