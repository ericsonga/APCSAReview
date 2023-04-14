

Parsons Problems for Experiments
-------------------------------------

Try to solve each of the following. Click the *Check Me* button to check each solution.  You will be told if your solution is too short, has a block in the wrong order, or you are using the wrong block.  Some of the problems have an extra block or two that aren't needed in the correct solution.  Try to solve these on your phone or other mobile device!

.. parsonsprob:: ex-array-nd-has22
   :numbered: left
   :adaptive:

   Create the function ``has22(int[] arr)`` that takes an array of ints, ``arr`` and returns true if the array contains a 2 next to a 2 somewhere.
   For example, has22([1, 2, 2]) returns ``true`` and ``has22([1, 2, 1, 2])`` returns ``false``.
   -----
   public boolean hasTwoAdjacent(int[] nums) {
   =====
       for (int i = 0; i < nums.length - 1; i++) {
   =====
           if (nums[i] == 2 && nums[i+1] == 2) {
   =====
               return true;
   =====
           }
   =====
       }
   =====
       return false;
   =====
   }

.. parsonsprob:: ex-array-wd-has22
   :numbered: left
   :adaptive:

   Create the function ``has22(int[] arr)`` that takes an array of ints, ``arr`` and returns true if the array contains a 2 next to a 2 somewhere.
   For example, has22([1, 2, 2]) returns ``true`` and ``has22([1, 2, 1, 2])`` returns ``false``.
   -----
   public boolean hasTwoAdjacent(int[] nums) {
   =====
       for (int i = 0; i < nums.length - 1; i++) {
   =====
       for (int i = 0; i < nums.length; i++) { #paired: need to stop one less than the length since looking at current and next
   =====
           if (nums[i] == 2 && nums[i+1] == 2) {
   =====
           if (nums[i] == nums[i+1]) { #paired: need to check if equal to 2 as well
   =====
               return true;
   =====
           }
   =====
       }
   =====
       return false;
   =====
   }

.. parsonsprob:: ex-array-nd-has3OddOrEven
   :numbered: left
   :adaptive:

   Create the function ``has3OddOrEven(int[] arr)`` that takes an array of ints, ``arr`` and returns true if the array contains either 3 even or 3 odd values all next to each other.
   For example ``modThree([2, 1, 3, 5])`` returns ``true`` and ``modThree([2, 1, 2, 5])`` returns ``false``.
   -----
   public boolean has3OddOrEven(int[] nums) {
   =====
       int count = 0;
   =====
       for (int i = 0; i < nums.length - 2; i++) {
   =====
           if (nums[i] % 2 == nums[i+1] % 2 && nums[i+1] % 2 == nums[i+2] % 2) {
   =====
               return true;
   =====
           }
   =====
       }
   =====
       return false;
   =====
   }

