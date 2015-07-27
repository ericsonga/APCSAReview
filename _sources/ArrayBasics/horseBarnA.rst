.. qnum::
   :prefix: 7-13-
   :start: 1

Free Response - Horse Barn A
-------------------------------

..	index::
	single: horse barn
    single: free response
    
The following is part a of a free response question from 2012.  It was question 3 on the exam.  You can see all the free response questions from past exams at https://apstudent.collegeboard.org/apcourse/ap-computer-science-a/exam-practice.  

**Question 3.**  Consider a software system that models a horse barn. Classes that represent horses implement the following interface.

.. code-block:: java 

   public interface Horse
   {
      /** @return the horse's name */
      String getName();

      /** @return the horse's weight */
      int getWeight();
   }

A horse barn consists of N numbered spaces. Each space can hold at most one horse. The spaces are indexed starting from 0; the index of the last space is N - 1. No two horses in the barn have the same name. The declaration of the HorseBarn class is shown below.

**Part a.**  Write the HorseBarn method findHorseSpace. This method returns the index of the space in which the horse with the specified name is located. If there is no horse with the specified name in the barn, the method returns -1.

.. figure:: Figures/horseBarnA.png
    :width: 700px
    :align: center
    :figclass: align-center

    Figure 1: Example calls and results

.. code-block:: java 

   public class HorseBarn
   {
      /** The spaces in the barn. Each array element holds a reference to the horse
      * that is currently occupying the space. A null value indicates an empty space.
      */
      private Horse[] spaces;

      /** Returns the index of the space that contains the horse with the specified 
       *  name.
       * Precondition: No two horses in the barn have the same name.
       * @param name the name of the horse to find
       * @return the index of the space containing the horse with the specified 
       *      name;
       *      -1 if no horse with the specified name is in the barn.
       */
      public int findHorseSpace(String name)
      { /* to be implemented in part (a) */ }
   }
    
How to solve this problem
===========================

In order to find the index of the horse with the same name we are looking for, we will need to loop through the array ``spaces``. As we loop, we will comapre the name we are looking for with the ``Horse`` object's name at the current index.

.. mchoicemf:: frhba_1
   :answer_a: spaces[index].name;
   :answer_b: spaces[index].getName();
   :answer_c: spaces.get(index).getName();
   :correct: b
   :feedback_a: Getter methods are needed to access private class variables.
   :feedback_b: This is the syntax for getting the value of an element in an array.  
   :feedback_c: This is the syntax for getting the value of an element in an arrayList.   

   Which of the following correctly retrieves the name of a "Horse" object from the "spaces" array?

Once we have the name of the current ``Horse`` object, we need to compare this name to the name we are looking for.

.. mchoicemf:: frhba_2
   :answer_a: str.compareTo(anotherString);
   :answer_b: str == anotherString;
   :answer_c: str.equals(anotherString);
   :correct: c
   :feedback_a: This String method is used for comparing two strings alphabetically. It returns 0 if they are equal so you would need to check the return value.
   :feedback_b: This would only return true if the two variables refer to the same object.  
   :feedback_c: This String method will compare the characters in both strings and return true if they are the same.

   What is the best way to compare two strings for equality?  
   
Try to write the code for the method ``findHorseSpace``. When you are ready click "Run" to test your solution.   
   
.. activecode:: lcfrhba1
   :language: java
   :datafile: HorseBarn.java
   
   public class HorseBarn 
   { 
      private Horse[] spaces; 
  
      /** Constructor that takes the number of stalls
       * @param numStalls - the number of stalls in the barn
       */
      public HorseBarn(int numStalls)
      {
        spaces = new Horse[numStalls];
      }
  
      /** Returns the index of the space that contains the horse with the specified name. 
       * * Precondition: No two horses in the barn have the same name. 
       * @param name the name of the horse to find 
       * @return the index of the space containing the horse with the specified name; 
       * -1 if no horse with the specified name is in the barn. 
       */ 
      public int findHorseSpace(String name) 
      { 
    
      } 
  
      public String toString()
      {
        String result = "";
        Horse h = null;
        for (int i = 0; i < spaces.length; i++) {
          h = spaces[i];
          result = result + "space " + i + " has ";
          if (h == null) result = result + " null \n";
          else result = result + h.toString() + "\n";
        }
        return result;
      }
  
      public static void main (String[] args)
      {
        HorseBarn barn = new HorseBarn(7);
        barn.spaces[0] = new Horsey("Trigger", 1340);
        barn.spaces[2] = new Horsey("Silver",1210);
        barn.spaces[3] = new Horsey("Lady", 1575);
        barn.spaces[5] = new Horsey("Patches", 1350);
        barn.spaces[6] = new Horsey("Duke", 1410);
        
        // show what is in the barn
        System.out.println(barn);
        
        // test
        System.out.println("Index of Trigger should be 0 and is " + 
                           barn.findHorseSpace("Trigger"));
        System.out.println("Index of Silver should be 2 and is " + 
                           barn.findHorseSpace("Silver"));
        System.out.println("Index of Coco should be -1 and is " + 
                           barn.findHorseSpace("Coco"));
      }
   }

    
Video - One way to code the solution
=====================================

.. video:: v_interfaces
   :controls:
   :thumb: ../_static/codeVideo.png
   
   http://ice-web.cc.gatech.edu/ce21/1/static/video/2012Q3A.mov
   http://ice-web.cc.gatech.edu/ce21/1/static/video/2012Q3A.webm
