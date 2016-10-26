.. qnum::
   :prefix: 6-4-
   :start: 1

Common Mistakes
===============

  -  Forgetting to change the thing you are testing in a ``while`` loop and ending up with an infinite loop.  
  
  -  Getting the start and end conditions wrong on the ``for`` loop. This will often result in you getting an **out of bounds error**.  An **out of bounds** error occurs when you try to access past the end of a string.  
  
  -  Jumping out of a loop too early by using one or more return statements inside of the loop.    
 
 
Here is an example of a while loop that doesn't ever change the value in the loop so it never ends.  If you run it refresh the page to stop it.  Fix it.
 
 .. activecode:: while_loop_mistake1
   :language: java
   
   public class Test
   {
      public static void main(String[] args)
      {
          int x = 3;
          while (x > 0)
          {
             System.out.println(x);
          }
      }
   }
   
Here is an example of going past the bounds of a string.  This code should double all but the first and last letter in message.  Fix the code so that it doesn't cause an out of bounds an error.

 .. activecode:: while_loop_oob
   :language: java
   
   public class Test
   {
      public static void main(String[] args)
      {
          String result = "";
          String message = "watch out";
          int pos = 0;
          while (pos < message.length())
          {
             result = result + message.substring(pos,pos+2);   
             pos = pos + 1;       
          }
          System.out.println(result);
      }
   }
   
Here is an example of jumping out of a loop too early.  The code below is intended to test if all of the letters in a string are in ascending order from left to right. But, it doesn't work correctly.  Can you fix it?

 .. activecode:: while_loop_early_leave
   :language: java
   
   public class Test
   {
   
      public static boolean isInOrder(String check)
      {
          int pos = 0;
          while (pos < check.length() - 1)
          {
             if (check.substring(pos, pos+1).compareTo(check.substring(pos+1, pos+2)) < 0)
                return true;
             pos++;
          }
          return false;
      }
      
      public static void main(String[] args)
      {
         System.out.println(isInOrder("abca"));
         System.out.println(isInOrder("abc"));
          
      }
   }
   

   

   
