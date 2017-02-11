.. qnum::
   :prefix: 8-12-
   :start: 1
   
Medium Multiple Choice Questions
----------------------------------

These problems are like those you will see on the AP CS A exam.

.. mchoice:: qalm_1
   :answer_a: [1, 2, 3, 4, 5]
   :answer_b: [1, 2, 4, 5, 6]
   :answer_c: [1, 2, 5, 4, 6]
   :answer_d: [1, 5, 2, 4, 6]
   :correct: c
   :feedback_a: The set replaces the 3 at index 2 with the 4 so this can't be right.
   :feedback_b: The add with an index of 2 and a value of 5 adds the 5 at index 2 not 3.  Remember that the first index is 0. 
   :feedback_c: The add method that takes just an object as a parameter adds that object to the end of the list.  The set replaces the value at that index with the new value.  The add with parameters of an index and an object puts the passed object at that index and moves any existing values by one index to the right (increments the index).  
   :feedback_d: The add with an index of 2 and a value of 5 adds the 5 at index 2 not 1.  Remember that the first index is 0.   

   What is printed as a result of executing the following code segment?
   
   .. code-block:: java
   
      List<Integer> list1 = new ArrayList<Integer>();
      list1.add(new Integer(1));
      list1.add(new Integer(2));
      list1.add(new Integer(3));
      list1.set(2, new Integer(4));
      list1.add(2, new Integer(5));
      list1.add(new Integer(6));
      System.out.println(list1);
      
You can step through the code above by clicking on this link `Example-8-12-1 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=import+java.util.*%3B%0Apublic+class+Test+%7B%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A++++++List%3CInteger%3E+list1+%3D+new+ArrayList%3CInteger%3E()%3B%0A++++++list1.add(new+Integer(1))%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(new+Integer(2))%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(new+Integer(3))%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.set(2,+new+Integer(4))%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(2,+new+Integer(5))%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(new+Integer(6))%3B%0A++++++System.out.println(list1)%3B%0A+++%7D%0A%7D&mode=display&curInstr=0>`_.

   
.. mchoice:: qalm_2
   :answer_a: [0, 4, 2, 5, 3]   
   :answer_b: [3, 5, 2, 4, 0, 0, 0]   
   :answer_c: [0, 0, 0, 4, 2, 5, 3]  
   :answer_d: [4, 2, 5, 3]     
   :answer_e: [0, 0, 4, 2, 5, 0, 3]     
   :correct: d
   :feedback_a: This code will loop through the array list and if the current value at the current index (k) is 0 it will remove it.  When you remove a value from an array list it moves all values to the right of that one to the the left. It only increments the index when it doesn't find a zero so it work work correctly.
   :feedback_b: This shows all zeros at the end and this code removes 0's so this can't be right.     
   :feedback_c: This shows all zeros at the beginning and this code removes zeros so this can't be right.  
   :feedback_d: This shows all zeros removed.  Since k is only incremented if a value wasn't removed this will work correctly. 
   :feedback_e: This shows the original values, but this code does remove some zeros so this can't be right.

   Given the following code and assume that ``nums`` initially contains [0, 0, 4, 2, 5, 0, 3], what will ``nums`` contain as a result of executing numQuest?
   
   .. code-block:: java 

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
         else
            k++;
        }
      }
      
You can step through the code above by clicking on this link `Example-8-12-2 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=import+java.util.*%3B%0Apublic+class+ListWorker+%7B%0A+++%0A+++private+List%3CInteger%3E+nums%3B%0A+++%0A+++public+ListWorker(List%3CInteger%3E+theNums)%0A+++%7B%0A++++++nums+%3D+theNums%3B%0A+++%7D%0A%0A+++//+precondition%3A+nums.size()+%3E+0%3B%0A+++//+nums+contains+Integer+objects%0A+++public+void+numQuest()%0A+++%7B%0A+++++++int+k+%3D+0%3B%0A+++++++Integer+zero+%3D+new+Integer(0)%3B%0A+++++++while+(k+%3C+nums.size())%0A+++++++%7B%0A+++++++++System.out.println(%22List%3A+%22+%2B+nums+%2B+%22+and+k+is+%22+%2B+k)%3B%0A+++++++++if+(nums.get(k).equals(zero))%0A+++++++++++nums.remove(k)%3B%0A+++++++++else%0A+++++++++++k%2B%2B%3B%0A+++++++%7D%0A+++%7D%0A+++%0A+++public+static+void+main(String%5B%5D+args)%0A+++%7B%0A++++++List%3CInteger%3E+myList+%3D+new+ArrayList%3CInteger%3E()%3B%0A++++++myList.add(0)%3B%0A++++++myList.add(0)%3B%0A++++++myList.add(4)%3B%0A++++++myList.add(2)%3B%0A++++++myList.add(5)%3B%0A++++++myList.add(0)%3B%0A++++++myList.add(3)%3B%0A++++++ListWorker+lWorker+%3D+new+ListWorker(myList)%3B%0A++++++lWorker.numQuest()%3B%0A++++++System.out.println(myList)%3B+%0A++++++%0A+++%7D%0A+++%0A%7D&mode=display&curInstr=0>`_.

.. mchoice:: qalm_3
   :answer_a: Both methods produce the same result, and process1 is faster than process2.    
   :answer_b: The two methods produce different results and take the same amount of time.  
   :answer_c: The two methods produce different results, and process1 is faster than process2. 
   :answer_d: The two methods produce different results, and process2 is faster than process1.    
   :answer_e: Both methods produce the same result and take the same amount of time.   
   :correct: e
   :feedback_a: In this case they do the same thing.  The only difference would be if there were values in the list in process2. 
   :feedback_b: These produce the same result on an empty list when you add to the end. 
   :feedback_c: These produce the same result on an empty list when you add to the end.   
   :feedback_d: These produce the same result on an empty list when you add to the end.  
   :feedback_e: The method process1 adds to the end of the list each time through the loop.  The method process2 also adds to the end of the list each time through the loop.  The only difference would be if there were values in the list in process2.  Any existing values would be moved to the right.  But, there are no existing values in the list at that index or beyond.  

   Which of the following best describes the behavior of process1 and process2 (shown below)?
   
   .. code-block:: java 
   
      public static List<Integer> process1(int n)
      {
         List<Integer> someList = new ArrayList<Integer>();
         for (int k = 0; k < n; k++)
            someList.add(k);
         return someList;
      }
      
      public static List<Integer> process2(int n)
      {
         List<Integer> someList = new ArrayList<Integer>();
         for (int k = 0; k < n; k++)
            someList.add(k, k);
         return someList;
      }
      
You can step through the code above by clicking on the link `Example-8-12-3 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=import+java.util.*%3B%0Apublic+class+Test+%7B%0A+++%0A++++++public+static+List%3CInteger%3E+process1(int+n)%0A++++++%7B%0A+++++++++List%3CInteger%3E+someList+%3D+new+ArrayList%3CInteger%3E()%3B%0A+++++++++for+(int+k+%3D+0%3B+k+%3C+n%3B+k%2B%2B)%0A+++++++++%7B%0A++++++++++++someList.add(k)%3B%0A++++++++++++System.out.println(someList)%3B%0A+++++++++%7D%0A+++++++++return+someList%3B%0A++++++%7D%0A++++++%0A++++++public+static+List%3CInteger%3E+process2(int+n)%0A++++++%7B%0A+++++++++List%3CInteger%3E+someList+%3D+new+ArrayList%3CInteger%3E()%3B%0A+++++++++for+(int+k+%3D+0%3B+k+%3C+n%3B+k%2B%2B)%0A+++++++++%7B%0A++++++++++++someList.add(k,+k)%3B%0A++++++++++++System.out.println(someList)%3B%0A+++++++++%7D%0A+++++++++return+someList%3B%0A++++++%7D%0A+++%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A++++++List%3CInteger%3E+myList+%3D+process1(5)%3B%0A++++++List%3CInteger%3E+myList2+%3D+process2(5)%3B%0A+++++%0A+++%7D%0A%7D&mode=display&curInstr=0>`_.
      
.. mchoice:: qalm_4
   :answer_a: [1, 2, 5, 4, 6, 3]
   :answer_b: [6, 5, 4, 3, 2, 1]
   :answer_c: [1, 2, 3, 4, 5, 6]
   :answer_d: [1, 4, 2, 6, 3]
   :answer_e: [1, 2, 4, 6, 3]
   :correct: d
   :feedback_a: The set replaces the 3 with the 4 so this can't be right.
   :feedback_b: The add with an index of 2 and a value of 5 adds the 5 at index 2 not 3.  Remember that the first index is 0. 
   :feedback_c: The add method that takes just a value as a parameter adds that value to the end of the list.  The set replaces the value at that index with the new value.  The add with parameters of an index and a value puts the passed value at that index and moves any existing values by one index to the right (increments the index).  
   :feedback_d: The add with an index of 2 and a value of 5 adds the 5 at index 2 not 1.  Remember that the first index is 0.   
   :feedback_e: When you declare and create a collection class you can specify the type of the items in it.  

   What is printed as a result of executing the following code segment?
   
   .. code-block:: java
   
     List<Integer> aList = new ArrayList<Integer>();
     aList.add(new Integer(1)); 
     aList.add(new Integer(2)); 
     aList.add(1, new Integer(5)); 
     aList.set(1, new Integer(4));
     aList.add(new Integer(6)); 
     aList.add(new Integer(3));
     System.out.println(aList); 
     
You can step through the code above by clicking on the link `Example-8-12-4 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=import+java.util.*%3B%0Apublic+class+Test+%7B%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A+++++List%3CInteger%3E+aList+%3D+new+ArrayList%3CInteger%3E()%3B%0A+++++aList.add(new+Integer(1))%3B+%0A+++++System.out.println(aList)%3B%0A+++++aList.add(new+Integer(2))%3B+%0A+++++System.out.println(aList)%3B%0A+++++aList.add(1,+new+Integer(5))%3B+%0A+++++System.out.println(aList)%3B%0A+++++aList.set(1,+new+Integer(4))%3B%0A+++++System.out.println(aList)%3B%0A+++++aList.add(new+Integer(6))%3B+%0A+++++System.out.println(aList)%3B%0A+++++aList.add(new+Integer(3))%3B%0A+++++System.out.println(aList)%3B%0A+++%7D%0A%7D&mode=display&curInstr=0>`_.
     
.. mchoice:: qalm_5
   :answer_a: [1, 2, 3, 4, 5]
   :answer_b: [1, 4, 5]
   :answer_c: [1, 4, 3, 5]
   :answer_d: [2, 4, 5]
   :answer_e: [2, 4, 3, 5]
   :correct: b
   :feedback_a: This would be true if the code just added each integer at the end of the list.  But, that is not what it does.
   :feedback_b: The list is [1], then [1, 2], then [1], then [1, 3], then [1, 4], then [1, 4, 5].
   :feedback_c: This would be true if the <code>set</code> was an add.  
   :feedback_d: This would be true it it was <code>remove(0)</code>.  Remember that it removes the object at the given index.  
   :feedback_e: This would be true if the <code>set</code> was an add and if it was <code>remove(0)</code>.

   What is printed as a result of executing the following code segment?
   
   .. code-block:: java
   
     List<Integer> aList = new ArrayList<Integer>();
     aList.add(new Integer(1)); 
     aList.add(new Integer(2)); 
     aList.remove(1);
     aList.add(1, new Integer(3)); 
     aList.set(1, new Integer(4));
     aList.add(new Integer(5)); 
     System.out.println(list); 
     
You can step through the code above by clicking on the link `Example-8-12-5 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=import+java.util.*%3B%0Apublic+class+Test+%7B%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A+++++List%3CInteger%3E+aList+%3D+new+ArrayList%3CInteger%3E()%3B%0A+++++aList.add(new+Integer(1))%3B+%0A+++++System.out.println(aList)%3B+%0A+++++aList.add(new+Integer(2))%3B+%0A+++++System.out.println(aList)%3B+%0A+++++aList.remove(1)%3B%0A+++++System.out.println(aList)%3B+%0A+++++aList.add(1,+new+Integer(3))%3B+%0A+++++System.out.println(aList)%3B+%0A+++++aList.set(1,+new+Integer(4))%3B%0A+++++System.out.println(aList)%3B+%0A+++++aList.add(new+Integer(5))%3B+%0A+++++System.out.println(aList)%3B+%0A+++%7D%0A%7D&mode=display&curInstr=0>`_.


