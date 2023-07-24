.. qnum::
   :prefix: 7-11-3-
   :start: 1

Hard Multiple Choice Questions
----------------------------------

These problems are about the same or harder than those you will see on the AP CSA exam.

.. mchoice:: qalh_1
   :practice: T
   :answer_a: [5, 3, 1, 6]
   :answer_b: [4, 3, 1, 6]
   :answer_c: [4, 3, 6]
   :answer_d: [5, 3, 6]
   :answer_e: [4, 5, 3, 6]
   :correct: b
   :feedback_a: The remove(1) removes the item at index 1 which will be 5 after the 4 is added at index 0.
   :feedback_b: The add(6) adds the 6 at the end of the list. The add(0,4) will add 4 at index 0. The remove(1) removes the 5 at index 1.
   :feedback_c: The remove(1) doesn't remove the 1, it removes the value at index 1.
   :feedback_d: The 5 will be removed with the remove(1).
   :feedback_e: This would be true if remove(1) removed the item with that value, but it removes the item at that index.

   What is in the list ``nums`` if it initially contained {5, 3, 1} and the following code is executed?

   .. code-block:: java

      nums.add(6);
      nums.add(0,4);
      nums.remove(1);

You can step through the code above by clicking on the following `Example-8-13-1 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=import+java.util.*%3B%0Apublic+class+Test+%7B%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A++++++List%3CInteger%3E+nums+%3D+new+ArrayList%3CInteger%3E()%3B%0A++++++nums.add(5)%3B%0A++++++System.out.println(nums)%3B%0A++++++nums.add(3)%3B%0A++++++System.out.println(nums)%3B%0A++++++nums.add(1)%3B%0A++++++System.out.println(nums)%3B%0A++++++nums.add(6)%3B%0A++++++System.out.println(nums)%3B%0A++++++nums.add(0,4)%3B%0A++++++System.out.println(nums)%3B%0A++++++nums.remove(1)%3B%0A++++++System.out.println(nums)%3B%0A+++%7D%0A%7D&mode=display&curInstr=0>`_.

.. mchoice:: qalh_2
   :practice: T
   :answer_a: [0, 0, 4, 2, 5, 0, 3, 0]
   :answer_b: [3, 5, 2, 4, 0, 0, 0, 0]
   :answer_c: [0, 0, 0, 0, 4, 2, 5, 3]
   :answer_d: [4, 2, 5, 3]
   :answer_e: [0, 4, 2, 5, 3]
   :correct: e
   :feedback_a: This shows the original values but this code does remove some zeros so this can't be right.
   :feedback_b: This shows all zeros at the end, but this code removes 0's so this can't be right.
   :feedback_c: This shows all zeros at the beginning, but this code removes zeros so this can't be right.
   :feedback_d: This shows all zeros removed. This would be correct if k was only incremented if a value wasn't removed.
   :feedback_e: This code will loop through the array list and if the current value at the current index (k) is 0, it will remove it. When you remove a value from an array list, it moves all values to the right of that down one. So the first 0 will be deleted but the second one will not since k is incremented even if you remove something. You should only increment k if you didn't remove something and then you would remove all 0's from the list.

   Assume that nums has been created as an ArrayList object and initially contains the following Integer values: [0, 0, 4, 2, 5, 0, 3, 0]. What will nums contain as a result of executing the following method numQuest?

   .. code-block:: java

     private List<Integer> nums;

     //precondition: nums.size() > 0
     //nums contains Integer objects
     public void numQuest() {
        int k = 0;
        Integer zero = new Integer(0);
        while (k < nums.size()) 
        {
           if (nums.get(k).equals(zero))
              nums.remove(k);
           k++;
        }
     }

You can step through the code above by clicking on the following `Example-8-13-2 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=import+java.util.*%3B%0Apublic+class+ListWorker+%7B%0A+++%0A+++private+List%3CInteger%3E+nums%3B%0A+++%0A+++public+ListWorker(List%3CInteger%3E+theNums)%0A+++%7B%0A++++++nums+%3D+theNums%3B%0A+++%7D%0A%0A+++//+precondition%3A+nums.size()+%3E+0%3B%0A+++//+nums+contains+Integer+objects%0A+++public+void+numQuest()%0A+++%7B%0A+++++++int+k+%3D+0%3B%0A+++++++Integer+zero+%3D+new+Integer(0)%3B%0A+++++++while+(k+%3C+nums.size())%0A+++++++%7B%0A+++++++++System.out.println(%22List%3A+%22+%2B+nums+%2B+%22+and+k+is+%22+%2B+k)%3B%0A+++++++++if+(nums.get(k).equals(zero))%0A+++++++++++nums.remove(k)%3B%0A+++++++++k%2B%2B%3B%0A+++++++%7D%0A+++%7D%0A+++%0A+++public+static+void+main(String%5B%5D+args)%0A+++%7B%0A++++++List%3CInteger%3E+myList+%3D+new+ArrayList%3CInteger%3E()%3B%0A++++++myList.add(0)%3B%0A++++++myList.add(0)%3B%0A++++++myList.add(4)%3B%0A++++++myList.add(2)%3B%0A++++++myList.add(5)%3B%0A++++++myList.add(0)%3B%0A++++++myList.add(3)%3B%0A++++++ListWorker+lWorker+%3D+new+ListWorker(myList)%3B%0A++++++lWorker.numQuest()%3B%0A++++++System.out.println(myList)%3B+%0A++++++%0A+++%7D%0A+++%0A%7D&mode=display&curInstr=0>`_.



.. |FRQs| raw:: html

   <a href="https://docs.google.com/spreadsheets/d/1Q0pbL9qawN8XlUctkDIiqsP6XdwR-IcWZ_cwauHy0-U/edit#gid=1826848698" target="_blank" style="text-decoration:underline">FRQs</a>

For more practice with free response questions with Lists, look up the following FRQs in this |FRQs| spreadsheet:

- question 1 from 2012 FRQs
- question 3 from 2011 FRQs
- question 1 from 2008 FRQs
- and question 3 from 2007 FRQs

