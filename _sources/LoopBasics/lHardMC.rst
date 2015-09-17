.. qnum::
   :prefix: 6-8-
   :start: 1
   
Hard Multiple Choice Questions
----------------------------------

These problems are harder than most of those that you will usually see on the AP CS A exam. 

.. mchoice:: qlh_1
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

   Assume that nums has been created as an ArrayList object and initially contains the following Integer values: [o, 0, 4, 2, 5, 0, 3, 0]. What will nums contain as a result of executing the following method numQuest?
   
   .. code-block:: java

     private List<Integer> nums;

     //precondition: nums.size() > 0
     //nums contains Integer objects
     public void numQuest() {
        int k = 0;
        Integer zero = new Integer(0);
        while (k < nums.size()) {
           if (nums.get(k).equals(zero))
              nums.remove(k);
           k++;
        }
     }

.. mchoice:: qlh_2
   :answer_a: O(log n)
   :answer_b: O(n log n)
   :answer_c: O(n)
   :answer_d: O(n*n)
   :answer_e: O(n!)
   :correct: b
   :feedback_a: This would be correct if there was just the inner loop.
   :feedback_b: The outer loop is n but the inner loop is log n since k is multiplied by 2 each time through the loop.
   :feedback_c: This would be correct if there was just the outer loop.
   :feedback_d: This would be correct if the inner lop was incremented by 1 instead of multiplied by 2.
   :feedback_e: To get n! as big-oh we would need n nested loops.

   Which best characterizes the running time of the following code segment?
   
   .. code-block:: java

     for (int j = 1; j <= n; j++) {
        for (int k = 1; k <= n; k = k * 2)
           System.out.println(j + " " + k);
     }

