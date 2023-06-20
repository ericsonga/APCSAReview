.. qnum::
   :prefix: 7-11-1-
   :start: 1

Easier Multiple Choice Questions
----------------------------------

These problems are easier than most of those that you will usually see on the AP CSA exam.

.. mchoice:: qale_1
   :practice: T
   :answer_a: nums.length
   :answer_b: nums.length - 1
   :answer_c: nums.size()
   :answer_d: nums.size() - 1
   :correct: d
   :feedback_a: You can't use length on lists and the last index is one less than the size.
   :feedback_b: You can't use length on lists, use size instead.
   :feedback_c: Since the first element in a list is at index 0 the last element is at the size minus 1.
   :feedback_d: The last element is at the size of the list minus 1.

   Which index is the last element in a list called ``nums`` at?

.. mchoice:: qale_2
   :practice: T
   :answer_a: An array has faster access to its elements than a list does.
   :answer_b: An array knows it length, but a list doesn't know its length.
   :answer_c: An ArrayList can allocate more space than it needs.
   :correct: c
   :feedback_a: Since an ArrayList is implemented by an array, it has the same access time.
   :feedback_b: Lists do know their length, but they don't make it public.
   :feedback_c: Every time an ArrayList fills up a new array is created that is twice as big.  This can lead to extra space that is wasted.

   Which of the following is a reason to use an array instead of an ArrayList?

.. mchoice:: qale_3
   :practice: T
   :answer_a: An ArrayList can grow or shrink as needed, while an array is always the same size.
   :answer_b: You can use a for-each loop on an ArrayList, but not in an array.
   :answer_c: You can store objects in an ArrayList, but not in an array.
   :correct: a
   :feedback_a: This is the main advantage to an ArrayList.
   :feedback_b: You can use a for-each loop on either an ArrayList or array.
   :feedback_c: Arrays can also store objects of the same type.

   Which of the following is a reason to use an ArrayList instead of an array?

.. mchoice:: qale_4
   :practice: T
   :answer_a: nums[0]
   :answer_b: nums[1]
   :answer_c: nums.first()
   :answer_d: nums.get(0)
   :answer_e: nums.get(1)
   :correct: d
   :feedback_a: This is how you get the first value in an array, but not in a list.
   :feedback_b: This is how you get the second value in an array.  Remember that this is a list and that the first item in an array is at index 0.
   :feedback_c: The <code>List</code>  doesn't have a <code>first</code> method.
   :feedback_d: Use the <code>get</code> method to get a value from a list and the first element in a list is at index 0.
   :feedback_e: This would return the second element in a list.  Remember that the first element in a list or array is at index 0.

   Which of the following is the correct way to get the first value in a list called ``nums``?


.. mchoice:: qale_5
   :practice: T
   :answer_a: nums[1] = 5;
   :answer_b: nums[2] = 5;
   :answer_c: nums.set(5, 1);
   :answer_d: nums.set(1, 5);
   :answer_e: nums.set(2, 5);
   :correct: d
   :feedback_a: This is how you set the second value in an array, but not in a list.
   :feedback_b: This is how you set the third value in an array, but not in a list.
   :feedback_c: This would the value at index 5 to 1.
   :feedback_d: This sets the second value in the list to 5.
   :feedback_e: This would set the third value in the list to 5.  Remember that the first value is at index 0.

   Which of the following is the correct way to set the second value in a list called ``nums`` to 5?

.. mchoice:: qale_6
   :practice: T
   :answer_a: nums.remove(3);
   :answer_b: nums.remove(0);
   :answer_c: nums.remove(1);
   :answer_d: nums.remove(2);
   :correct: c
   :feedback_a: This would remove the value at index 3 which is 1.
   :feedback_b: This would remove the value at index 0 which is 5.
   :feedback_c: This would remove the value at index 1 which is 3.
   :feedback_d: This would remove the value at index 2 which is 2.

   Which of the following is the correct way to remove the value 3 from the list ``nums = [5, 3, 2, 1]``?

.. mchoice:: qale_7
   :practice: T
   :answer_a: nums.add(2, 0);
   :answer_b: nums.add(2, 1);
   :answer_c: nums.add(0, 2);
   :answer_d: nums.add(1, 2);
   :answer_e: nums.add(2, 2);
   :correct: d
   :feedback_a: This would add 0 at index 2.  Remember that the method is <code>add(index, obj)</code>.
   :feedback_b: This would add 1 at index 2.  Remember that the method is <code>add(index, obj)</code>
   :feedback_c: This would add 2 at index 0 which would result in <code>[2, 1, 3, 4]</code>
   :feedback_d: This would add 2 at index 1 which would result in <code>[1, 2, 3, 4]</code>
   :feedback_e: This would add 2 at index 2 which would result in <code>[1, 3, 2, 4]</code>

   Which of the following is the correct way to add 2 between the 1 and 3 in the following list ``nums = [1, 3, 4]``?

.. mchoice:: qale_9
   :practice: T
   :answer_a: [2, 3]
   :answer_b: [1, 2, 3]
   :answer_c: [1, 2]
   :answer_d: [1, 3]
   :correct: d
   :feedback_a: This would be true if it was <code>remove(0)</code>
   :feedback_b: The <code>remove</code> will remove a value from the list, so this can't be correct.
   :feedback_c: This would be true if it was <code>remove(2)</code>
   :feedback_d: This removes the value at index 1 which is 2.

   What will print when the following code executes?

   .. code-block:: java

      List<Integer> list1 = new ArrayList<Integer>();
      list1.add(new Integer(1));
      list1.add(new Integer(2));
      list1.add(new Integer(3));
      list1.remove(1);
      System.out.println(list1);

You can step through the code above by clicking on the following `Ex-8-11-9 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=import+java.util.*%3B%0Apublic+class+Test+%7B%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A++++++List%3CInteger%3E+list1+%3D+new+ArrayList%3CInteger%3E()%3B%0A++++++list1.add(new+Integer(1))%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(new+Integer(2))%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(new+Integer(3))%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.remove(1)%3B%0A++++++System.out.println(list1)%3B%0A++++++%0A+++%7D%0A%7D&mode=display&curInstr=0>`_.

.. mchoice:: qale_10
   :practice: T
   :answer_a: ["Sarah", "Destini", "Layla", "Sharrie"]
   :answer_b: ["Sarah", "Destini", "Anaya", "Layla", "Sharrie"]
   :answer_c: ["Sarah", "Layla", "Sharrie"]
   :answer_d: ["Destini", "Layla", "Sharrie", "Sarah"]
   :correct: a
   :feedback_a: The list is first ["Anaya", "Layla", "Sharrie"] and then ["Destini, "Layla", "Sharrie"] and finally ["Sarah", "Destini, "Layla", "Sharrie"]
   :feedback_b: The set replaces the value at index 0.
   :feedback_c: This would be true if the second add was a set.
   :feedback_d: This would be true if the last add didn't have an index of 0.

   What will print when the following code executes?

   .. code-block:: java

      List<String> list1 = new ArrayList<String>();
      list1.add("Anaya");
      list1.add("Layla");
      list1.add("Sharrie");
      list1.set(0, "Destini");
      list1.add(0, "Sarah");
      System.out.println(list1);

You can step through the code above by clicking on the following `Ex-8-11-10 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=import+java.util.*%3B%0Apublic+class+Test+%7B%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A++++++List%3CString%3E+list1+%3D+new+ArrayList%3CString%3E()%3B%0A++++++list1.add(%22Anaya%22)%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(%22Layla%22)%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(%22Sharrie%22)%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.set(0,+%22Destini%22)%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(0,+%22Sarah%22)%3B%0A++++++System.out.println(list1)%3B%0A++++++%0A+++%7D%0A%7D&mode=display&curInstr=0>`_.
