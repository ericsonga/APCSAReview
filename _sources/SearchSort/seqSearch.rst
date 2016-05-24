.. qnum::
   :prefix: 12-2-
   :start: 1

Sequential Search
==========================

..	index::
	single: sequential search
	single: linear search
	pair: search; sequential
	pair: search; linear

Sequential search is the only method that can be used to find a value on unsorted or unordered data. It usually starts at the first element and walks through the array or list until it finds the value it is looking for and returns the index it found it at, or it loops until the end of the array or list and then it returns a -1 to show that it didn't find the value in the array or list.

The code for ``sequentialSearch`` below is from the AP CS A course description. 

.. activecode:: seqSearch
  :language: java
  
  public class ArraySearcher
  {
  
     /** Finds the index of a value in an array of integers.
       * @param elements an array containing the items to be searched. 
       * @param target the item to be found in elements. 
       * @return an index of target in elements if found; -1 otherwise. 
       */
     public static int sequentialSearch(int[] elements, int target) 
     { 
       for (int j = 0; j < elements.length; j++) 
       { 
         if (elements[j] == target) 
         { 
           return j; 
         } 
       } 
       return -1; 
     }
  
     public static void main(String[] args)
     {
       int[] numArray = {3, -2, 9, 38, -23};
       System.out.println("Tests of sequentialSearch");
       System.out.println(sequentialSearch(numArray,3));
       System.out.println(sequentialSearch(numArray,9));
       System.out.println(sequentialSearch(numArray,-23));
       System.out.println(sequentialSearch(numArray,99));
     }
  
  }
   
To see this executing using the Java Visualizer click on the following link `Sequential Search <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=public+class+ArraySearcher%0A%7B%0A++%0A++/**+Finds+the+index+of+a+value+in+an+array+of+integers.%0A++++*+%40param+elements+an+array+containing+the+items+to+be+searched.+%0A++++*+%40param+target+the+item+to+be+found+in+elements.+%0A++++*+%40return+an+index+of+target+in+elements+if+found%3B+-1+otherwise.+%0A++++*/%0A++public+static+int+sequentialSearch(int%5B%5D+elements,+int+target)+%0A++%7B+%0A++++for+(int+j+%3D+0%3B+j+%3C+elements.length%3B+j%2B%2B)+%0A++++%7B+%0A++++++if+(elements%5Bj%5D+%3D%3D+target)+%0A++++++%7B+%0A++++++++return+j%3B+%0A++++++%7D+%0A++++%7D+%0A++++return+-1%3B+%0A++%7D%0A++%0A++public+static+void+main(String%5B%5D+args)%0A++%7B%0A++++int%5B%5D+numArray+%3D+%7B3,+-2,+9,+38,+-23%7D%3B%0A++++System.out.println(%22Tests+of+sequentialSearch%22)%3B%0A++++System.out.println(sequentialSearch(numArray,3))%3B%0A++++System.out.println(sequentialSearch(numArray,9))%3B%0A++++System.out.println(sequentialSearch(numArray,-23))%3B%0A++++System.out.println(sequentialSearch(numArray,99))%3B%0A++%7D%0A++%0A%7D&mode=display&curInstr=3>`_
           
.. mchoice:: qss_1
   :answer_a: The value is the first one in the array
   :answer_b: The value is in the middle of the array
   :answer_c: The value is the last one in the array 
   :answer_d: The value isn't in the array
   :correct: d
   :feedback_a: This would be true for the shortest execution. This would only take one execution of the loop.
   :feedback_b: Why would this be the longest execution?
   :feedback_c: There is one case that will take longer.
   :feedback_d: A sequential search loops through the elements of an array or list starting with the first and ending with the last and returns from the loop as soon as it finds the passed value. It has to check every value in the array when the value it is looking for is not in the array.
   
   Which will cause the *longest* execution of a sequential search looking for a value in an array of integers?
   
.. mchoice:: qss_2
   :answer_a: The value is the first one in the array
   :answer_b: The value is in the middle of the array
   :answer_c: The value is the last one in the array 
   :answer_d: The value isn't in the array
   :correct: a
   :feedback_a: This would only take one execution of the loop.
   :feedback_b: Are you thinking of binary search?
   :feedback_c: This would be true if you were starting at the last element, but the algorithm in the course description starts with the first element.
   :feedback_d: This is true for the longest execution time, but we are looking for the shortest.  
   
   Which will cause the *shortest* execution of a sequential search looking for a value in an array of integers?
  
Of course you can also look for a string in an array or list.  But, when you look for a string be sure to use ``equals`` rather than ``==``.  Remember that ``==`` is only true when the two references refer to the same object, while ``equals`` returns true if the characters in the two objects are the same.
  
.. activecode:: seqSearchStr
  :language: java
  
  public class SearchTest
  {

     public static int sequentialSearch(String[] elements, String target)
     {
        for (int j = 0; j < elements.length; j++)
        {
           if (elements[j].equals(target))
           {
              return j;
           } 
       }
       return -1;
     }
     
     public static void main(String[] args)
     {
        String[] arr1 = {"blue", "red", "purple", "green"};
        
        // test when the target is in the array
        int index = sequentialSearch(arr1,"red");
        System.out.println(index);
        
        // test when the target is not in the array
        index = sequentialSearch(arr1,"pink");
        System.out.println(index);
     }
  }
  
To see this executing using the Java Visualizer click on this `link2 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=++public+class+SearchTest%0A++%7B%0A%0A+++++public+static+int+sequentialSearch(String%5B%5D+elements,+String+target)%0A+++++%7B%0A++++++++for+(int+j+%3D+0%3B+j+%3C+elements.length%3B+j%2B%2B)%0A++++++++%7B%0A+++++++++++if+(elements%5Bj%5D.equals(target))%0A+++++++++++%7B%0A++++++++++++++return+j%3B%0A+++++++++++%7D+%0A+++++++%7D%0A+++++++return+-1%3B%0A+++++%7D%0A+++++%0A+++++public+static+void+main(String%5B%5D+args)%0A+++++%7B%0A++++++++String%5B%5D+arr1+%3D+%7B%22blue%22,+%22red%22,+%22purple%22,+%22green%22%7D%3B%0A++++++++%0A++++++++//+test+when+the+target+is+in+the+array%0A++++++++int+index+%3D+sequentialSearch(arr1,%22red%22)%3B%0A++++++++System.out.println(index)%3B%0A++++++++%0A++++++++//+test+when+the+target+is+not+in+the+array%0A++++++++index+%3D+sequentialSearch(arr1,%22pink%22)%3B%0A++++++++System.out.println(index)%3B%0A+++++%7D%0A++%7D&mode=display&curInstr=0>`_
