.. qnum::
   :prefix: 3-11-
   :start: 1
   
Hard Multiple Choice Questions
----------------------------------

These problems are harder than most of those that you will usually see on the AP CS A exam.
     
.. mchoice:: qvh_1
   :answer_a: 186
   :answer_b: 123
   :answer_c: 125
   :answer_d: 168
   :answer_e: 124
   :correct: e
   :feedback_a: This would be true if it was 150 + 17 (21 in octal) + 5 (101 in binary) + 14 (E in hexadecimal) which is 186.
   :feedback_b: This would be true if it was 150 - 17 (21 in octal) + 5 (101 in binary) - 15 (F in hexadecimal) which is 123.
   :feedback_c: This would be true if it was 150 - 17 (21 in octal) + 5 (101 in binary) - 13 (D in hexadecimal) which is 123.
   :feedback_d: How did you get this?  Maybe look up how to convert from octal and hexadecimal to decimal.   	
   :feedback_e: This is 150 - 17 (21 in octal) + 5 (101 in binary) - 14 (E in hexadecimal) which is 124.  

   Which of the following would be the correct result from the following expression: 150 (in decimal) - 21 (in octal) + 101 (in binary) - E (in hexadecimal)?
   
   
The following question assumes you know about arrays and methods.  You can skip it if you haven't covered these yet and come back when you have.
   
.. mchoice:: qvh_2
   :answer_a: itemArray = {0, 1, 2, 3} and val = 3;
   :answer_b: itemArray = {0, 1, 2, 3} and val = 5;
   :answer_c: itemArray = {0, 0, 0, 0} and val = 0;
   :answer_d: itemArray = {9, 8, 7, 6} and val = 3;
   :answer_e: itemArray = {9, 8, 7, 6} and val = 5;
   :correct: b
   :feedback_a: This would be true if Java used pass by reference rather than pass by value (it creates copies of the values that are passed).   
   :feedback_b: Java passes parameters by copying the value.  With an array it creates a copy of the object reference.  So, <code>mod</code> will change the <code>itemArray</code>, but <code>val</code> won't change since <code>mod</code> only changes the copy of the primitive value.
   :feedback_c: How could this have happened?
   :feedback_d: Java passes parameters by passing the values this means that the contents of <code>itemArray</code> will be changed by the <code>mod</code> method, but <code>val</code> won't change.
   :feedback_e: Java passes parameters by passing the values this means that the contents of <code>itemArray</code> will be changed by the <code>mod</code> method.

   Given the following code are the contents of ``itemArray`` and ``val`` after a call of ``mod(itemArray,val)``?
   
   .. code-block:: java 
   
    int[] itemArray = {9, 8, 7, 6};
    int val = 5;
   
    public static void mod(int[] a, int value)
    {
       for (int i=0; i < a.length; i++)
       {
          a[i] = i;
       }
       value = a[a.length-1];
    }





