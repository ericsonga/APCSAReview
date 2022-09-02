.. qnum::
   :prefix: 10-10-
   :start: 1

Mixed Up Code Practice
------------------------------

Try to solve each of the following. Click the *Check Me* button to check each solution.  You will be told if your solution is too short, has a block in the wrong order, or you are using the wrong block.  Some of the problems have an extra block or two that aren't needed in the correct solution.  Try to solve these on your phone or other mobile device!

.. parsonsprob:: ch12ex1muc
   :numbered: left
   :practice: T
   :noindent:
   :adaptive:

   The following method should reverse the order of the characters in the given string -- so "abcd" should become "dcba".  But, the blocks have been mixed up.  Drag the blocks from the left and put them in the correct order on the right.  Click the Check button to check your solution.
   -----
   public static String reverse(String myText)
   {
       if (myText.length() == 0)
       {
   =====
           return "";
   =====
       } //end if
   =====
       else
       {
   =====
           return reverse(myText.substring(1)) + myText.charAt(0);
   =====
       } //end else
   } //end method


.. parsonsprob:: ch12ex2muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following method should multiply the two passed-in positive integers (using the fact that multiplication is repeated addition) -- so multiply(3, 4) should become 12 (3+3+3+3).  But the blocks have been mixed up and include one extra block that is not needed in a correct solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the Check button to check your solution.
   -----
   public static int multiply(int a, int b)
   {
   =====
       if (b == 0)
       {
   =====
         return 0;
   =====
         return 1; #distractor
   =====
       } //end if
   =====
       else
       {
   =====
         return multiply(a, b - 1) + a;
   =====
       } //end else
   } //end method


.. parsonsprob:: ch12ex3muc
   :numbered: left
   :practice: T
   :noindent:
   :adaptive:

   The following method should add up all of the elements in the passed-in array -- so {1,2,3,12} should return 18 (Note when the method is called, the index will always start off as 0).  But the blocks have been mixed up and include two extra blocks that are not needed in a correct solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the Check button to check your solution.
   -----
   public static int sumElements(int[] arr, int index)
   {
   =====
       if (index >= arr.length)
       {
           return 0;
       } //end if
   =====
       if (index >= arr.length) #distractor
       {
           return 1;
       } //end if
   =====
       else
       {
   =====
           return sumElements(arr, index + 1) + arr[index];
   =====
           return sumElements(arr, index) + arr[index]; #distractor
   =====
       } //end else
   } //end method


.. parsonsprob:: ch12ex4muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following method should remove any occurrence of an asterisk "*" from a passed-in string -- so "ab*c**d" should become "abcd".  But the blocks have been mixed up.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the Check button to check your solution.
   -----
   public static String removeStar(String myText)
   {
   =====
       if (myText.length() == 0)
       {
          return "";
       } //end if
   =====
       if (myText.charAt(0) == '*')
       {
          return removeStar(myText.substring(1));
       } //end if
   =====
       return myText.charAt(0) + removeStar(myText.substring(1));
   =====
   } //end method


.. parsonsprob:: ch12ex5muc
   :numbered: left
   :practice: T
   :noindent:
   :adaptive:

   The following method should return the base multiplied power times. In other words, the base ^ power -- so exponent(2, 4) should return 16.  But the blocks have been mixed up and include one extra block that is not needed in a correct solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the Check button to check your solution.
   -----
   public static int exponent(int base, int power)
   {
   =====
       if (power == 0)
       {
   =====
           return 1;
   =====
           return 0; #distractor
   =====
       } //end if
       else
       {
   =====
           return base * exponent(base, power - 1);
   =====
       } //end else
   } //end method


.. parsonsprob:: ch12ex6muc
   :numbered: left
   :practice: T
   :noindent:
   :adaptive:

   The following method should return the number of times "5" is an element in the passed-in array -- so {1, 5, 7, 14, 5} will return 2 (Note that when the method is called the index will always start off as 0).  But the blocks have been mixed up and include two extra blocks that are not needed in a correct solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the Check button to check your solution.
   -----
   public static int numFiveOccurrence(int[] arr, int index)
   {
   =====
       if (index >= arr.length)
       {
   =====
       if (index <= arr.length) #distractor
       {
   =====
           return 0;
   =====
       } //end if
       else
       {
   =====
           if (arr[index] == 5)
           {
               return numFiveOccurrence(arr, index + 1) + 1;
           }
   =====
           return numFiveOccurrence(arr, index + 1);
   =====
           return numFiveOccurrence(arr, index); #distractor
   =====
       } //end else
   } //end method


.. parsonsprob:: ch12ex7muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following method should repeat the passed-in string a set number of times -- so repeatThis("hi", 3) should return "hihihi".  But the blocks have been mixed up and include two extra blocks that are not needed in a correct solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the Check button to check your solution.
   -----
   public static String repeatThis(String s, int i)
   {
   =====
       if (i == 0)
       {
   =====
       if (i >= 0) #distractor
       {
   =====
          return "";
   =====
       } //end if
       else
       {
   =====
          return s + repeatThis(s, i-1);
   =====
          return repeatThis(s, i-1); #distractor
   =====
       } //end else
   } //end method


.. parsonsprob:: ch12ex8muc
   :numbered: left
   :practice: T
   :noindent:
   :adaptive:

   The following method should return number of times the character " x " is in a String -- so findNumX("xHihxixx") should return 4.  But the blocks have been mixed up and include one extra block that is not needed in a correct solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the Check button to check your solution.
   -----
   public static int findNumX(String s)
   {
   =====
       if (s.length() == 0)
       {
           return 0;
       } //end if
   =====
       else
       {
   =====
           if (s.charAt(0) == 'x')
           {
               return 1 + findNumX(s.substring(1));
           } //end if
   =====
           if (s.charAt(0) = 'x') #distractor
           {
               return 1 + findNumX(s.substring(0));
           } //end if
   =====
           return findNumX(s.substring(1));
   =====
       } //end else
   } //end method


.. parsonsprob:: ch12ex9muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following method should return a string counting from 1 to the specified number -- so countTo(4) should return "1...2...3...4...".  But the blocks have been mixed up and include two extra blocks that are not needed in a correct solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the Check button to check your solution.
   -----
   public static String countTo(int x)
   {
   =====
       if (x == 0)
       {
   =====
       if (x == 1) #distractor
       {
   =====
           return "";
   =====
       } //end if
       else
       {
   =====
           return countTo(x - 1) + x + "...";
   =====
           return countTo(x - 1) + (x - 1) + "..."; #distractor
   =====
       } //end else
   } //end method


.. parsonsprob:: ch12ex10muc
   :numbered: left
   :practice: T
   :noindent:
   :adaptive:

   The following method should take an passed-in number and return a string such that only the even numbers are still present. All of the odd digits should be replaced with a "_" -- so 4321 should become ``4_2_``.  But the blocks have been mixed up and include two extra blocks that are not needed in a correct solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the Check button to check your solution.
   -----
   public static String displayEvenDigits(int num)
   {
   =====
       if (num == 0)
       {
           return "";
       } //end if
   =====
       else
       {
   =====
           if ((num % 10) % 2 == 0)
           {
   =====
           if ((num % 10) % 2 == 1) #distractor
           {
   =====
               return "" + displayEvenDigits(num / 10) + (num % 10);
           } //end if
   =====
           return displayEvenDigits(num / 10) + "_";
   =====
           return "_" + displayEvenDigits(num / 10); #distractor
   =====
       } //end else
   } //end method
