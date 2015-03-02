.. qnum::
   :prefix: 7-3-
   :start: 1

Using a For Loop to Loop Trough an Array
==========================================

..	index::
    single: for loop
	pair: loop; from front to back
	
You can also use a ``for`` loop to loop through all the elements of an array.  Just start the index at 0 and loop until the index is equal to the length of the array.

.. code-block:: java

   public void multAll(int amt)
   {
      for (int i = 0; 
           i < amt.length; 
           i++)
      {
         a[i] = a[i] * amt;
      } // end for loop
   } // end method
   
      
**Mixed up programs**

.. parsonsprob:: pab_1r

   The following method has the correct code to subtract amt from all the values in the array <b>a</b> (a field of the current object), but the code is mixed up.  Drag the blocks from the left into the correct order on the right. You will be told if any of the blocks are in the wrong order or not indented correctly.
   -----
   public void subAll(int amt)
   {
   =====
      for (int i = 0; 
           i < amt.length; 
           i++)
      {
   =====
         a[i] = a[i] - amt;
   =====
      } // end for loop
   =====
   } // end method
    
