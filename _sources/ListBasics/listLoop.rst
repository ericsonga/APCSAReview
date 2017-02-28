.. qnum::
   :prefix: 8-7-
   :start: 1

Looping Through a List
======================

..	index::
	pair: list; for-each loop

You can use a for-each loop to loop through all of the items in a list, just like you do with an array as shown in the ``main`` method below.  

.. activecode:: listForEachLoop
   :language: java
   
   import java.util.*;  // import all classes in this package.
   public class Test
   {  
       public static void main(String[] args)
       {
           List<Integer> myList = new ArrayList<Integer>();
           myList.add(50);
           myList.add(30);
           myList.add(20);
           int total = 0;
           for (Integer value: myList)
           {
               total = total + value;
           }
           System.out.println(total);
       }
   }
   
.. note::

   The above example isn't object-oriented since all work was done in the ``main`` method.  In an object-oriented approach the list would be a field of the current object and you would use an object method rather than a class (static) method to loop through the list. 
   
You can also use a 	``while`` or ``for`` loop to process list elements.  Remember that you can use the ``get(index)`` to get the value at the index.  You can also use ``remove(index)`` to remove the value at the index.  
   
.. note::

   Be careful when you remove items from a list as you loop through it.  Remember that removing an item from a list will shift the remaining items to the left.  

.. activecode:: listForEachLoopObj
   :language: java
   
   import java.util.*;  // import all classes in this package.
   public class ListWorker
   {
      private List<String> nameList; 
      
      public ListWorker(List<String> theNames)
      {
          nameList = theNames;
      }
  
      public boolean removeName(String name)
      {
          boolean found = false;
          int index = 0;
          while (index < nameList.size())
          {
              if (name.equals(nameList.get(index)))
              { 
                  nameList.remove(index);
                  found = true;
              }
              else index++;
          }
          return found;
       }
       
       public static void main(String[] args)
       {
           List<String> myList = new ArrayList<String>();
           myList.add("Amun");
           myList.add("Ethan");
           myList.add("Donnie");
           myList.add("Ethan");
           ListWorker listWorker = new ListWorker(myList);
           System.out.println(listWorker.nameList);
           listWorker.removeName("Ethan");
           System.out.println(listWorker.nameList);
       }
   }
  
.. note::

   Notice that the method above only increments the current index if an item was removed from the list.  If you increment the index in all cases you will miss checking some of the elements since the rest of the items shift left when you remove one. 
   
Can you change the code above so that it only removes the first name it finds in the list that matches?  Can you change it to only remove the last one in the list that matches?

**Check your understanding**

.. mchoice:: qloopList_1
   :answer_a: [0, 4, 2, 5, 3]
   :answer_b: [3, 5, 2, 4, 0, 0, 0, 0]
   :answer_c: [0, 0, 0, 0, 4, 2, 5, 3]
   :answer_d: [4, 2, 5, 3]
   :correct: a
   :feedback_a: Incrementing the index each time through the loop will miss when there are two zeros in a row.
   :feedback_b: This would be true if the code moved the zeros to the end, but that is not what it does.
   :feedback_c: This would be true if the code moved the zeros to the font, but that is not what it does.
   :feedback_d: This would be correct if <code>k</code> was only incremented when an item was not removed from the list.

   Assume that ``nums`` has been created as an ``ArrayList`` object and it initially contains the following ``Integer`` values [0, 0, 4, 2, 5, 0, 3, 0]. What will ``nums`` contain as a result of executing ``numQuest``?
   
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
      
You can step through the code above by clicking on the following `Example-8-7-1 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=import+java.util.*%3B%0A%0A%0Apublic+class+ListWorker+%7B%0A%0A+++private+List%3CInteger%3E+nums%3B%0A+++%0A+++public+ListWorker(List%3CInteger%3E+theNums)%0A+++%7B%0A++++++nums+%3D+theNums%3B%0A+++%7D%0A%0A+++//+precondition%3A+nums.size()+%3E+0%3B%0A+++//+nums+contains+Integer+objects%0A+++public+void+numQuest()%0A+++%7B%0A++++++int+k+%3D+0%3B%0A++++++Integer+zero+%3D+new+Integer(0)%3B%0A++++++while+(k+%3C+nums.size())%0A++++++%7B%0A+++++++++if+(nums.get(k).equals(zero))%0A++++++++++++nums.remove(k)%3B%0A+++++++++k%2B%2B%3B%0A++++++%7D%0A+++%7D%0A+++%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A++++++List%3CInteger%3E+numList+%3D+new+ArrayList%3CInteger%3E()%3B%0A++++++numList.add(0)%3B%0A++++++numList.add(0)%3B%0A++++++numList.add(4)%3B%0A++++++numList.add(2)%3B%0A++++++numList.add(5)%3B%0A++++++numList.add(0)%3B%0A++++++numList.add(3)%3B%0A++++++numList.add(0)%3B%0A++++++System.out.println(numList)%3B%0A++++++ListWorker+listW+%3D+new+ListWorker(numList)%3B%0A++++++listW.numQuest()%3B%0A++++++System.out.println(numList)%3B%0A+++++%0A+++%7D%0A%7D&mode=display&curInstr=11>`_.
      
.. mchoice:: qloopList_2
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

   The following has the correct code for the method <code>getScore</code> plus at least one extra unneeded code statement.  This method will calculate and return the score for a word game.  The code should loop through all of the elements in <code>wordList</code> and if the length of the current word is 3 it should add one to the <code>score</code>, if the length of the word is 4 it should add 2 to the <code>score</code>, and if the length is greater than 4 it should add 3 to the <code>score</code>.  The method should return the <code>score</code>.  Drag the needed blocks from the left into the correct order on the right. Check your solution by clicking on the <i>Check Me</i> button.  You will be told if any of the blocks are in the wrong order or if you need to remove one or more blocks.  There is one extra block that is not needed in a correct solution.
   -----
   public static int getScore(List<String> wordList)
   {
   =====
     int score = 0;

     for (String word : wordList) 
     {
   =====
       if (word.length() == 3) 
   =====
       {
         score++;
       }
   =====
       else if (word.length() == 4)
       {
         score = score + 2;
       }
   =====
       else 
       {
         score = score + 3;
       }
   =====  
     } // end for
   =====
     return score;

   } // end method
   =====
   if (word.length == 3) #distractor
   
.. parsonsprob:: list_2

   The following has the correct code for a method called <code>insertInOrder</code> plus at least one extra unneeded code statement. This method should add the passed <code>name</code> in alphabetic order to a private list field called <code>nameList</code>.  Drag the needed blocks from the left into the correct order on the right. Check your solution by clicking on the <i>Check Me</i> button.  You will be told if any of the blocks are in the wrong order or if you need to remove one or more blocks.  There is one extra block that is not needed in a correct solution.
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

