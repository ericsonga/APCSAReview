.. qnum::
   :prefix: 4-7-
   :start: 1

Mixed Up Code Practice
------------------------------

Try to solve each of the following. Click the *Check Me* button to check each solution.  You will be told if your solution is too short, has a block in the wrong order, or you are using the wrong block.  Some of the problems have an extra block or two that aren't needed in the correct solution.  Try to solve these on your phone or other mobile device!

.. parsonsprob:: ch6ex1muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following program segment should print out all the values from 20 to 30 (20, 21, 22, ... 30). But, the blocks have been mixed up.  Drag the blocks from the left and put them in the correct order on the right.  Click the Check button to check your solution.
   -----
   int x = 20;
   =====
   while (x <= 30) 
   {
   =====
       System.out.println(x);
   =====
       x++;
   =====
   }


.. parsonsprob:: ch6ex2muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following program segment should print a countdown from 15 to 0 (15, 14, 13, ... 0).  But the blocks have been mixed up and include one extra block that is not needed in a correct solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the Check button to check your solution.
   -----
   public class Test1
   {
   =====
       public static void main(String[] args)
       {
   =====
           for (int i = 15; i >=0; i--)
   =====
           for (int i = 15; i > 0; i--) #paired
   =====
           {
               System.out.println(i);
           }
   =====
       }
   =====
   }


.. parsonsprob:: ch6ex3muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The main method in the following class should print up from 0 to 50 by 5 (0, 5, 10, 15 ... 50). But, the blocks have been mixed up and include an extra block that isn't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the Check button to check your solution.
   -----
   public class Test1
   {
   =====
       public static void main(String[] args)
       {
   =====
           int x = 0;
   =====
           while (x <= 50) 
   =====
           while (x < 50)  #paired
   =====
           {
               System.out.println(x);
   =====
               x = x + 5;
   =====
           }
   =====
       }
   }


.. parsonsprob:: ch6ex4muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The main method in the following class should print out the values from 0 to 100 by 20's (0, 20, 40, .. 100). But, the blocks have been mixed up and include an extra block that isn't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the Check button to check your solution.
   -----
   public class Test1
   {
   =====
       public static void main(String[] args)
       {
   =====
          for (int i = 0; i <= 100; i+=20)
   =====
          for (int i = 100; i >= 0; i-=20) #paired
   =====
          {
              System.out.println(i);
          }
   =====
       }
   =====
   }


.. parsonsprob:: ch6ex5muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The main method in the following class should print out the values from 100 to 0 by 10's (100, 90, 80, ... 0). But, the blocks have been mixed up and include an extra block that is not needed in a correct solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the Check button to check your solution.
   -----
   public class Test1
   {
   =====
       public static void main(String[] args)
       {
   =====
           for (int i = 100; i >= 0; i -= 10)
   =====
           for (int i = 0; i <= 100; i += 10) #paired
   =====
           {
               System.out.println(i);
           }
   =====
       }
   =====
   }

.. parsonsprob:: ch6ex7muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The main method in the following class should print 3 rows with 6 \*'s in each row.  But, the blocks have been mixed up and include two extra blocks that aren't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the Check button to check your solution.
   -----
   public class Test1
   {
   =====
       public static void main(String[] args)
       {
   =====
           for (int x = 3; x > 0; x--) 
           {
   =====
           for (int x = 0; x <= 3; x++) 
           { #paired
   =====
               for (int y = 6; y > 0; y--) 
               {
   =====
               for (int y = 0; y <= 6; y++) 
               { #paired
   =====
                    System.out.print("*");
   =====
               }
   =====
               System.out.println();
   =====
           }
       }
   }


.. parsonsprob:: ch6ex8muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The main method in the following class should print 1 (followed by a newline), then 22 (followed by a newline), and then 333 (followed by a newline).  But, the blocks have been mixed up and include an extra block that isn't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the Check button to check your solution.
   -----
   public class Test1
   {
   =====
       public static void main(String[] args)
       {
   =====
           for (int x = 1; x <= 3; x++) 
           {
   =====
           for (int x = 0; x < 3; x++) 
           { #paired
   =====
               for (int y = 0; y < x; y++) 
               {
   =====
                   System.out.print(x);
   =====
               }
               System.out.println();
           }
   =====
       }
   }

.. parsonsprob:: ch6ex9muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The main method in the following class should print 11111, 22222, 33333, 44444, and 55555. But, the blocks have been mixed up and contain two extra blocks that are not needed in a correct solution.  Drag the blocks from the left and put them in the correct order on the right.  Click the Check button to check your solution.
   -----
   public class Test1
   {
   =====
       public static void main(String[] args)
       {
   =====
           for (int x = 1; x <= 5; x++) 
           {
   =====
           for (int x = 1; x < 5; x++) 
           { #paired
   =====
               for (int y = 0; y < 5; y++) 
               {
   =====
                   System.out.print(x);
   =====
                   System.out.print(y); #paired
   =====
               } //end inner loop
               System.out.println();
   =====
           } //end outer loop
   =====
       }
   }



.. parsonsprob:: ch6ex10muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The main method in the following class should print 11111, 2222, 333, 44, 5.  But, the blocks have been mixed up and include one extra block that isn't needed in a correct solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the Check button to check your solution.
   -----
   public class Test1
   {
   =====
       public static void main(String[] args)
       {
   =====
           for (int x = 0; x < 5; x++) 
           {
   =====
               for (int y = 5; y > x; y--) 
               {
   =====
                   System.out.print(x+1);
   =====
                   System.out.print(x); #paired
   =====
               } //end inner loop
               System.out.println();
   =====
           } //end outer loop
   =====
       }
   }

.. parsonsprob:: ch6ex11muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The ``get_mid(str)`` function in the ``StringWorker`` class should return the
   middle character if the string has an odd number of characters and the middle
   two characters if the string has an even number of characters.  For example,
   ``get_mid("way")`` should return ``"a"`` and ``get_mid("away")`` should
   return ``"wa"``.
   -----
   public class StringWorker
   {
   =====
       public static String get_mid(String str)
       {
   =====
           int str_len = str.length();
           int mid = str_len / 2;
   =====
           /* if odd number of chars */
           if (str_len % 2 == 1)
           {
   =====
               return str.substring(mid, mid+1);
   =====
           }
   =====
           else
           {
   =====
               return str.substring(mid-1, mid+1);
   =====
           }
   =====
       }
   =====
   }


.. parsonsprob:: ch6ex12muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The ``ev_div(s, n)`` function in the ``NumWorker`` class should return the
   number of digits in ``s`` (a string representation of a number) that are
   evenly divisible by ``n``.  For example, ``even_div('6892',3)`` should return
   2 since both 6 and 9 are evenly divisible by 3.
   -----
   public class NumWorker
   {
   =====
       public static int ev_div(String s, int n)
       {
   =====
           int c_num = 0;
           String c_digit = "";
           int count = 0;
   =====
           for (int i = 0; i < s.length(); i++)
           {
   =====
               c_digit = s.substring(i, i+1);
   =====
               c_num = Integer.parseInt(c_digit);
   =====
               /* if is evely divisible by n */
               if (c_num % n == 0)
               {
   =====
                   count += 1;
   =====
               }
   =====
           }
   =====
           return count;
   =====
       }
   =====
   }
