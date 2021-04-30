.. qnum::
   :prefix:  14-1-
   :start: 1

RandomStringChooser - Part A Parsons
==================================================

**Question 1.** This question involves the implementation and extension of a ``RandomStringChooser`` class.

**Part a.**   A ``RandomStringChooser`` object is constructed from an array of non-null ``String`` values.  When the object is first constructed,
all of the strings are considered available.  The ``RandomStringChooser`` class has a ``getNext`` method, which has the following behavior.  A call to ``getNext`` returns a randomly chosen string from the available strings
in the object.  Once a particular string has been returned from a call to ``getNext``, it is no longer available to be returned from subsequent calls to ``getNext``.  If no strings are available to be returned, ``getNext`` returns ``"NONE``.

The following code segment shows an example of the behavior of ``RandomStringChooser``.


.. code-block:: java

   String[] wordArray = {"wheels", "on", "the", "bus"};
   RandomStringChooser sChooser = new RandomStringChooser(wordArray);
   for (int k = 0; k < 6; k++)
   {
      System.out.println(sChooser.getNext() + " ");
   }

One possible output is shown below.  Because ``sChooser`` has only four strings, the string ``"NONE`` is printed twice.

.. code-block:: java

   bus the wheels on NONE NONE

There are many ways to write the code for the ``RandomStringChooser`` class. The mixed up code practice below is one way to solve it.

Mixed Up Code Practice
--------------------------

.. parsonsprob:: ch17RandStrA1
   :language: java
   :numbered: left
   :adaptive:
   :noindent:

   The mixed up code below includes the correct code for the class, a field, a constructor, and the `getNext` method.  In the constructor it will create an `ArrayList` and fill it by looping through the array and adding each string to the list.  In the `getNext` method, if the list length is greater than zero, it will pick a position at random in the list and remove the item from that position and return it.  Otherwise, if the list is empty, it returns "NONE".  The blocks have been mixed up and include extra blocks that aren't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the Check button to check your solution.
   -----
   public class RandomStringChooser
   {
   =====
       /* fields */
       private List&lt;String&gt; words;
   =====
       /* fields */
       public List&lt;String&gt; words; #paired
   =====
       /* constructor */
       public RandomStringChooser(String[] wordArray)
       {
   =====
           words = new ArrayList&lt;String&gt;();
   =====
           for (String singleWord : wordArray)
           {
               words.add(singleWord);
           } // end for each word in wordArray

       } // end RandomStringChooser Constructor
   =====

       /* getNext method */
       public String getNext()
       {
           int pos = 0;
   =====
           if (words.size() > 0)
           {
   =====
               pos = (int) (Math.random() * words.size());
   =====
               pos = Math.random() * words.size(); #paired
   =====
               return words.remove(pos);
   =====
               return words.get(pos); #paired
   =====
           } // end if words.size() > 0
   =====
           return "NONE";
       } // end getNext()
   } // end class

The mixed up code below uses a different algorithm to solve the same problem.

More Mixed Up Code Practice
------------------------------
.. parsonsprob:: ch17RandStrA2
   :language: java
   :numbered: left
   :adaptive:
   :noindent:

   The mixed up code below includes the correct code for the class, an instance variable, a constructor, and the `getNext` method.  In the constructor it will create an `ArrayList` and fill it by looping through the array and adding each string to the list.  In `getNext` it will return "NONE" if the length of the list is 0.  Otherwise, it will calculate a random index in the list, remove the string at that index, and return it. The blocks have been mixed up and include extra blocks that aren't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the Check button to check your solution.
   -----
   public class RandomStringChooser
   {

       /* fields */
       private List<String> words;//&lt;String&gt;

       /* constructor */
       public RandomStringChooser(String[] wordArray)
       {
   =====
           words = new ArrayList&lt;String&gt;();
   =====
           wordList = new ArrayList&lt;String&gt;(); #paired
   =====
           for (int i = 0; i < wordArray.length; i++)
           {
               words.add(wordArray[i]);
           } // end for loop
   =====
       } // end RandomStringChooser Constructor
   =====

       /* getNext method */
       public String getNext()
       {
           int pos = 0;

           if (words.size() == 0)
           {
   =====
               return "NONE";
   =====
           } // end if words.size() equals 0
   =====
           pos = (int) (Math.random() * words.size());
   =====
           pos = Math.random() * words.size(); #paired
   =====
           return words.remove(pos);
   =====
       } // end getNext()
   } // end class
