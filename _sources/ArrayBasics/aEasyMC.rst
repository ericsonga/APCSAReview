.. qnum::
   :prefix: 7-9-
   :start: 1
   
Easy Multiple Choice Questions
----------------------------------

These problems are easier than most of those that you will usually see on the AP CS A exam.

.. mchoice:: qaeasy_1
   :answer_a: <code>nums.length</code>
   :answer_b: <code>nums.length - 1</code>
   :correct: b
   :feedback_a: Since the first element in an array is at index 0 the last element is the length minus 1.
   :feedback_b: Since the first element in an array is at index 0 the last element is the length minus 1.

   Which index is the last element in an array called ``nums`` at?
   
.. mchoice:: qaeasy_2new
   :answer_a: <code>int[] scores = null;</code>
   :answer_b: <code>int[] scoreArray = {50,90,85};</code>
   :answer_c: <code>String[] nameArray = new String[10];</code>
   :answer_d: <code>String[] nameArray = {5, 3, 2};</code>
   :answer_e: <code>int[] scores = new int[5];</code>
   :correct: d
   :feedback_a: You can initialize an array reference to null to show that it doesn't refer to any array yet.
   :feedback_b: You can provide the values for an array when you declare it.
   :feedback_c: You can declare and array and create the array using the <code>new</code> operator in the same statement.
   :feedback_d: You can not put integers into an array of String objects.
   :feedback_e: You can declare and array and create it in the same statement.  Use the <code>new</code> operator to create the array and specify the size in square brackets.  

   Which of the following declarations will cause a compile time error?
   
.. mchoice:: qaeasy_3
   :answer_a: 1
   :answer_b: 2
   :answer_c: 3
   :answer_d: 6
   :answer_e: 4
   :correct: b
   :feedback_a: This would be returned from <code>arr[2]</code>.
   :feedback_b: This returns the value in <code>arr</code> at index 3.  Remember that the first item in an array is at index 0. 
   :feedback_c: This would be returned from <code>arr[1]</code>.
   :feedback_d: This would be returned from <code>arr[0]</code>.
   :feedback_e: This would be returned from <code>arr.length</code>

   What is returned from ``arr[3]`` if ``arr={6, 3, 1, 2}``?  
   
.. mchoice:: qaeasy_4
   :answer_a: 17.5
   :answer_b: 30.0
   :answer_c: 130
   :answer_d: 32
   :answer_e: 32.5
   :correct: e
   :feedback_a: This would be true if the loop stopped at <code>arr.length - 1</code>.  
   :feedback_b: This would be true if the loop started at 1 instead of 0.  
   :feedback_c: This would be true if it returned <code>output</code> rather than <code>output / arr.length</code> 
   :feedback_d: This would be true if <code>output</code> was declared to be an int rather than a double. 
   :feedback_e: This sums all the values in the array and then returns the sum divided by the number of items in the array.  This is the average.  

   What is returned from ``mystery`` when it is passed ``{10, 30, 30, 60}``?
   
   .. code-block:: java
   
      public static double mystery(int[] arr)
      {
      	 double output = 0;
         for (int i = 0; i < arr.length; i++)
         {
            output = output + arr[i];
         }
         return output / arr.length;
      }
      
You can step through the code above using the Java Visualizer by clicking on the following link `Prob-7-9-4 <http://www.pythontutor.com/java.html#code=public+class+ClassNameHere+%7B%0A+++%0A+++public+static+double+mystery(int%5B%5D+arr)%0A+++%7B%0A++++++double+output+%3D+0%3B%0A++++++for+(int+i+%3D+0%3B+i+%3C+arr.length%3B+i%2B%2B)%0A++++++%7B%0A+++++++++output+%3D+output+%2B+arr%5Bi%5D%3B%0A++++++%7D%0A++++++return+output+/+arr.length%3B%0A+++%7D%0A+++%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A++++++int%5B%5D+test+%3D+%7B10,+30,+30,+60%7D%3B%0A++++++System.out.println(mystery(test))%3B%0A++++++%0A+++%7D%0A%7D&mode=display&curInstr=0>`_.

.. mchoice:: qaeasy_5old3
   :answer_a: {-20, -10, 2, 8, 16, 60}
   :answer_b: {-20, -10, 2, 4, 8, 30}
   :answer_c: {-10, -5, 1, 8, 16, 60}
   :answer_d: {-10, -5, 1, 4, 8, 30} 
   :correct: c
   :feedback_a: This would true if it looped through the whole array.  Does it?
   :feedback_b: This would be true if it looped from the beginning to the middle.  Does it?
   :feedback_c: It loops from the middle to the end doubling each value. Since there are 6 elements it will start at index 3.  
   :feedback_d: This would be true if array elements didn't change, but they do.  

   Given the following values of ``a`` and the method ``doubleLast`` what will the values of ``a`` be after you execute: ``doubleLast()``?
   
   .. code-block:: java 
   
      private int[ ] a = {-10, -5, 1, 4, 8, 30};

      public void doubleLast()
      {
    
         for (int i = a.length / 2; i < a.length; i++)
         {
            a[i] = a[i] * 2;
         }
      }
      
You can step through the code above using the Java Visualizer by clicking on the following link `Prob-7-9-5 <http://www.pythontutor.com/java.html#code=public+class+Test+%7B%0A+++%0A+++private+int%5B+%5D+a+%3D+%7B-10,+-5,+1,+4,+8,+30%7D%3B%0A%0A+++public+void+doubleLast()%0A+++%7B%0A++++%0A+++++++for+(int+i+%3D+a.length+/+2%3B+i+%3C+a.length%3B+i%2B%2B)%0A+++++++%7B%0A+++++++++++a%5Bi%5D+%3D+a%5Bi%5D+*+2%3B%0A+++++++%7D%0A+++%7D%0A+++%0A+++%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A++++++%0A++++++Test+myTest+%3D+new+Test()%3B%0A++++++myTest.doubleLast()%3B%0A+++%7D%0A%7D&mode=display&curInstr=0>`_.


.. mchoice:: qaeasy_6
   :answer_a: {1, 3, -5, -2}
   :answer_b: {3, 9, -15, -6}
   :answer_c: {2, 6, -10, -4}
   :answer_d: The code will never stop executing due to an infinite loop
   :correct: b
   :feedback_a: This would be true if the contents of arrays could not be changed but they can. 
   :feedback_b: This code multiplies each value in a by the passed amt which is 3 in this case.
   :feedback_c: This would be correct if we called multAll(2) instead of multAll(3).
   :feedback_d: The variable i starts at 0 and increments each time through the loop and stops when it equals the number of items in a.  

   What are the values in a after multAll(3) executes?
   
   .. code-block:: java 

     private int[ ] a = {1, 3, -5, -2};
     
     public void multAll(int amt)
     {
        int i = 0;
        while (i < a.length)
        {
           a[i] = a[i] * amt;
           i++;
        } // end while
     } // end method  
     
.. mchoice:: qaeasy
   :answer_a: {1, 3, -5, -2}
   :answer_b: {3, 9, -15, -6}
   :answer_c: {2, 6, -10, -4}
   :answer_d: The code will never stop executing due to an infinite loop
   :correct: d
   :feedback_a: Does the value of i ever change inside the loop?
   :feedback_b: Does the value of i ever change inside the loop?
   :feedback_c: Does the value of i ever change inside the loop?
   :feedback_d: The value of i is initialized to 0 and then never changes inside the body of the loop, so this loop will never stop.  It is an infinite loop.   

   What are the values in a after mult(2) executes?
   
   .. code-block:: java 

     private int[ ] a = {1, 3, -5, -2};
     
     public void mult(int amt)
     {
        int i = 0;
        while (i < a.length)
        {
           a[i] = a[i] * amt;
        } // end while
     } // end method  
     

     


