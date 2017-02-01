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
   
.. mchoice:: qaeasy_2
   :answer_a: The values don't matter this will always cause an infinite loop.
   :answer_b: Whenever <code>a</code> includes a value that is less than or equal to zero.
   :answer_c: Whenever <code>a</code> has values larger then <code>temp</code>.
   :answer_d: When all values in <code>a</code> are larger than <code>temp</code>.
   :answer_e: Whenever <code>a</code> includes a value equal to <code>temp</code>.
   :correct: b
   :feedback_a: An infinite loop will not always occur in this code segment.
   :feedback_b: When <code>a</code> contains a value that is less than or equal to zero then multiplying that value by 2 will never make the result larger than <code>temp</code> (which was set to some value > 0), so an infinite loop will occur.
   :feedback_c: Values larger then <code>temp</code> will not cause an infinite loop.
   :feedback_d: Values larger then <code>temp</code> will not cause an infinite loop.
   :feedback_e: Values equal to <code>temp</code> will not cause the infinite loop.

   Given the following code segment, which of the following will cause an infinite loop?  Assume that ``temp`` is an ``int`` variable initialized to be greater than zero and that ``a`` is an array of ints.
   
   .. code-block:: java 

      for ( int k = 0; k < a.length; k++ )
      {
         while ( a[ k ] < temp )
         {
            a[ k ] *= 2;
         }
      }
      
You can step through the code above using the Java Visualizer by clicking on the following link `Prob-7-9-2 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=public+class+ClassNameHere+%7B%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A++++++%0A++++++int%5B%5D+a+%3D+%7B1,+5,+2,+-1,+3%7D%3B%0A++++++int+temp+%3D+10%3B%0A++++++%0A++++++for+(+int+k+%3D+0%3B+k+%3C+a.length%3B+k%2B%2B+)%0A++++++%7B%0A+++++++++while+(+a%5B+k+%5D+%3C+temp+)%0A+++++++++%7B%0A++++++++++++a%5B+k+%5D+*%3D+2%3B%0A+++++++++%7D%0A++++++%7D%0A++++++%0A+++%7D%0A%7D&mode=display&curInstr=0>`_. Can you fix the code so that it won't result in an infinite loop?

.. mchoice:: qaeasy_3
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
      
You can step through the code above using the Java Visualizer by clicking on the following link `Prob-7-9-3 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=public+class+Test+%7B%0A+++%0A+++private+int%5B+%5D+a+%3D+%7B-10,+-5,+1,+4,+8,+30%7D%3B%0A%0A+++public+void+doubleLast()%0A+++%7B%0A++++%0A+++++++for+(int+i+%3D+a.length+/+2%3B+i+%3C+a.length%3B+i%2B%2B)%0A+++++++%7B%0A+++++++++++a%5Bi%5D+%3D+a%5Bi%5D+*+2%3B%0A+++++++%7D%0A+++%7D%0A+++%0A+++%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A++++++%0A++++++Test+myTest+%3D+new+Test()%3B%0A++++++myTest.doubleLast()%3B%0A+++%7D%0A%7D&mode=display&curInstr=0>`_.
