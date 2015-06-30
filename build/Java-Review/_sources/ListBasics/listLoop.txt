.. qnum::
   :prefix: 8-4-
   :start: 1

Looping Through a List
======================

..	index::
	pair: list; for-each loop

You can use a for-each loop to loop through all items of a list, just like you do with an array.  

.. code-block:: java 

  private List<String> nameList; 
  
  public boolean findName(String name)
  {
     for (String currName: nameList)
     {
        if (currName.equals(name)) return true;
     }
     return false;
  }
        
The code above loops through the nameList looking for the passed name.  If it is found it returns true, otherwise it will return false.  Note the use of the equals method to compare strings.  This is the correct way to check if two strings have the same characters in the same order.  

Be careful when you remove items from a list as you loop through it.  Remember that removing an item from a list will shift the remaining items to the left.  

.. code-block:: java 

  private List<String> nameList; 
  
  public boolean removeName(String name)
  {
     boolean found = false;
     int index = 0;
     while (index < nameList.size())
     {
        if (name.equals(nameList.get(index))
        { 
           remove(index);
           found = true;
        }
        else index++;
     }
     return found;
  }
  
Notice that the method above only increments the current index if an item was removed from the list.  If you increment the index in all cases you will miss checking some of the elements since the items shift left.  

.. mchoicemf:: qlib_5
   :answer_a: [0, 4, 2, 5, 3]
   :answer_b: [3, 5, 2, 4, 0, 0, 0, 0]
   :answer_c: [0, 0, 0, 0, 4, 2, 5, 3]
   :answer_d: [4, 2, 5, 3]
   :correct: a
   :feedback_a: Incrementing the index each time through the loop will miss when there are two zeros in a row.
   :feedback_b: This would be true if the code moved the zeros to the end, but that is not what it does.
   :feedback_c: This would be true if the code moved the zeros to the font, but that is not what it does.
   :feedback_d: This would be correct if k was only incremented when an item was not removed from the list.

   Assume that nums has been created as an ArrayList object and it initially contains the following Integer values. [0, 0, 4, 2, 5, 0, 3, 0] What will nums contain as a result of executing numQuest?
   
   .. code-block:: java 
   
      List<Integer> list1 = new ArrayList<Integer>();
      private List<Integer> nums;

      // precondition: nums.size() > 0;
      // nums contains Integer objects
      public void numQuest()
      {
         int k = 0;
         Integer zero = new Integer(0);
         while (k < nums.size())
         {
            if (nums.get(k).equals(zero))
               nums.remove(k);
            k++;
         }
      }
      
.. mchoicemf:: qlib_6
   :answer_a: A list will always use less memory than an array.
   :answer_b: A list can store objects, but arrays can only store primitive types.
   :answer_c: A list has faster access to the last element than an array.
   :answer_d: A list resizes itself as necessary as items are added, but an array does not.
   :correct: d
   :feedback_a: No, an ArrayList grows as needed so it will typically be bigger than the data you put it in. If you try to add more data and the array is full, it usually doubles in size.
   :feedback_b: No, you can have an array of objects.
   :feedback_c: No, an ArrayList is implemented using an array so it has the same access time to any index as an array does.
   :feedback_d: An ArrayList is really a dynamic array (one that can grow or shrink as needed).

   Which of the following is a reason to use a list (assume an object of the class ArrayList) instead of an array?
   
**Mixed up programs**

.. parsonsprob:: list_1

   The following has the correct code for the method getScore plus at least one extra unneeded code statement.  This method will calculate and return the score for a word game.  The code should loop through all of the elements in wordList and if the length of the current word is 3 it should add one to the score, if the length of the word is 4 it should add 2 to the score, and if the length is greater than 4 it should add 3 to the score.  The method should return the score.  Drag the needed blocks from the left into the correct order on the right. Check your solution by clicking on the <i>Check Me</i> button.  You will be told if any of the blocks are in the wrong order or if you need to remove one or more blocks.
   -----
   public static int getScore(List<String> wordList)
   {
   =====
     int score = 0;
   =====
     for (String word : wordList) 
     {
   =====
       if (word.length() == 3) 
   =====
       {
         score++;
       } // end if == 3
   =====
       else if (word.length() == 4)
       {
         score = score + 2;
       } // end if == 4
   =====
       else if (word.length() > 4)
       {
         score = score + 3;
       } // end if > 4
   =====  
     } // end for
   =====
     return score;
   =====
   } // end method
   =====
   if (word.length == 3) #distractor
   
.. parsonsprob:: list_2

   The following has the correct code for a method called insertInOrder plus at least one extra unneeded code statement. This method should add the passed name in alphabetic order to a private list field called nameList.  Drag the needed blocks from the left into the correct order on the right. Check your solution by clicking on the <i>Check Me</i> button.  You will be told if any of the blocks are in the wrong order or if you need to remove one or more blocks.
   -----
   public void insertInOrder(String name)
   {
   =====
     int index = 0;
   =====
     while (index < nameList.size() && 
            nameList.get(index).compareTo(name) < 0)
     {
   =====
       index++;
   =====
     } // end while
   =====
     nameList.add(index,name);
   =====
   } // end method
   =====
   nameList.add(name); #distractor

