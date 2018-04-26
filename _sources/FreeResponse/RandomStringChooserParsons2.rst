.. qnum::
   :prefix:  16-3-
   :start: 1

There are many ways to write the code for the RandomStringChooser class. The mixed up code practice below is one way to solve it.

Mixed Up Code Practice
--------------------------

.. parsonsprob:: ch16FrRSC2
   :adaptive:
   :noindent:

   The code below will copy the strings from the array to a list in the constructor using a general for loop.  In ``getNext`` it will return "NONE" if the length of the list is 0.  Otherwise it till calculate a random index in the list and remove and return the string at that index. The blocks have been mixed up and include extra blocks that aren't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   public class RandomStringChooser 
   {
   =====
       /* fields */
       private List<String> words;
   =====
       /* constructor */
       public RandomStringChooser(String[] wordArray) 
       { 
   =====
       /* constructor */
       public RandomStringChooser() #paired
       {
   =====
           words = new ArrayList<String>();
   =====
           wordList = new ArrayList<String>(); #paired
   =====
           for (int i = 0; i < wordArray.length; i++)
           {
   =====
               words.add(wordArray[i];
   =====
               words.add(wordArray.get(i); #paired
   =====
           } // end for loop 
       } // end RandomStringChooser Constructor
   =====

       /* getNext method */
       public String getNext() 
       { 
           int pos = 0;
   =====
           if (words.size() == 0)
           {
   =====
           if (words.size() = 0) #paired
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
           return words.get(pos); #paired
   =====
       } // end getNext()
   } // end class