.. qnum::
   :prefix: 7-6-
   :start: 1


Things to Watch For When Looping Through an Array
==================================================

When processing all array elements be careful to start at the first index which is ``0`` and end at the last index which is ``arrayName.length - 1``.  Be careful not to go past the bounds of the array which means don't use a negative number as an index or a number that is equal to or greater than the length of the array.  

Also, be careful not to jump out of loop too early when you are looking for a value in an array.  The method below uses **return** statements to stop the execution of the method and return a value to the method that called this method.  If a return statement returns a value, the type of that value must match the return type in the method header. Methods with a return type of **void** can't return any values, but can have one or more return statements. 

.. code-block:: java 

   public static int findString(String[] wordArr, String target)
   {
      for (int index = 0; index < wordArr.length; index++)
      {
         if (word.equals(target)
         {
            return index;
         }
         else return -1;     
      }
   }
   
What is wrong with the code above?  The first time through the loop it will start with the element at index 0 and check if the item at the array index equals the passed target string.  If they have the same characters in the same order it will return 0, otherwise it will return -1.  But, it has only processed one element of the array.  How would you fix the code to work correctly (process all array elements before returning)?  Try http://codingbat.com/prob/p194525 to see if you can do this correctly.
   
