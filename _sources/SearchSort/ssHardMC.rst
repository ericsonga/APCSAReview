.. qnum::
   :prefix:  12-8-
   :start: 1
   
Hard Multiple Choice Questions
----------------------------------

These problems are harder than those you will see on the AP CS A exam.

.. mchoice:: qssm_1
   :answer_a: A B B C D 
   :answer_b: E D C B B A
   :answer_c: A B B C D E
   :answer_d: E D C B A B
   :answer_e: E D C B B
   :correct: c
   :feedback_a: This would be true if the for loop inside the main method did not interate through every value in the array.
   :feedback_b: This would be true if the conditional statement inside the for loop stated "if (key.compareTo(letters[i]) < 0)", because that would put the array in a reverse alphabetical order.
   :feedback_c: This is an insertion sort which sorts the array in alphabetical order using the compareTo() method.
   :feedback_d: This would be true if array was not modified at all in the main method.
   :feedback_e: This would be true if the conditional statement inside the for loop stated "if (key.compareTo(letters[i]) < 0)" and if the loop did not iterate through every item of the letters array, because that would put the array in a reverse alphabetical order. 

   What is printed when the following main method is executed?

   .. code-block:: java 
   
      public class AlphaSort
      {
	
          public static void main(String[] args) 
          {
              int i, j;
              String key;
              String[] letters = {"E","D","C","B","A","B"};
              for (j = 1; j < letters.length; j++) 
              {
                  key = letters[j];
                  i = j - 1;
                  while (i >= 0) 
                  {
                      if (key.compareTo(letters[i]) > 0) 
                      {
                          break;
                      }
                      letters[i + 1] = letters[i];
                      i--;
                  }
                  letters[i + 1] = key;
              }
              for (int t = 0; t < letters.length; t++) 
              {
                  System.out.print((letters[t]) + "");
              }
          }
      }

You can step through the code above by clicking on the following link `Ex-12-8-1 <https://goo.gl/zqWPtU>`_.

.. mchoice:: qssm_2
   :answer_a: 4
   :answer_b: 2
   :answer_c: 12
   :answer_d: 1
   :correct: b
   :feedback_a: This would be true if the if statement was not trying to check if the numbers in the array were negative and odd.
   :feedback_b: This answer is correct because the for loop iterates through every element and increments the count if the current number is negative and odd.
   :feedback_c: This may be a result of misunderstanding the question, as 12 cannot be an answer because the array length itself is only 6.
   :feedback_d: This would be true if the code was looking for the numbers in the array that were positive and odd.
   
   What is printed when the following main method is executed?

   .. code-block:: java 
   
      public class NumberCount 
      {
          public static void main(String[] args) 
          { 
              int count = 0;
              int[] numbers = {-5,4,-5,3,-2,-4};
              for (int j = 0; j < numbers.length; j++) 
              {
                  if(numbers[j] < 0 && numbers[j] % 2 != 0)
                  {
                      count++;
                  }
              }
          System.out.println(count);
          }
      }

You can step through the code above by clicking on the following link `Ex-12-8-2 <https://goo.gl/MGwTeT>`_.

.. mchoice:: qssm_3
   :answer_a: -3
   :answer_b: -4
   :answer_c: 4
   :answer_d: 0
   :correct: d
   :feedback_a: This would be true if there were three strings in the array that had the same first letter as the last letter.
   :feedback_b: This would be true if there were four strings in the array that had the same first letter as the last letter.
   :feedback_c: This would be true if there had been four strings in the array that had the first letter as an A and those strings' last letter was not an A.
   :feedback_d: This is the correct answer. The for loop is iterating through every element in the guestList array and the first if statement is checking to see if the current element in the array starts with the same letter and ends with the same letter. The variable, count decreases by one if that is true. However if that is false, the program goes to the else if statment and checks to see if the first letter is an A. If that is true count increases by one.
   
   What is printed when the following main method is executed?

   .. code-block:: java 
   
	  public class GuestList 
	  {
	      public static void main(String[] args) 
	      {
	          int count = 0;
	          String[] guestList = {"Anna", "Briana", "Alex", "John"};
	          String subj1 = null;
	          String subj2 = null;
	          for (int j = 0; j < guestList.length; j++) 
	          {
	              subj1 = guestList[j].substring(0,1);
	              subj2 = guestList[j].substring(guestList[j].length()-1);
	              if(subj1.equalsIgnoreCase(subj2))
	              {
	                  count--;
	              }
	              else if(subj1.equalsIgnoreCase("a"))
	              {
	                  count++;
	              }
	          }
	          System.out.println(count);
	      }    
	  }    


You can step through the code above by clicking on the following link `Ex-12-8-3 <https://goo.gl/MGXSF2>`_.

.. mchoice:: qssm_4
   :answer_a: 8,7,7,3,4,1
   :answer_b: 4,7,7,3,8,1
   :answer_c: 4,8,7,1,3,7
   :answer_d: 1,8,7,7,4,3
   :correct: b
   :feedback_a: This would be true if the array was not modified at all.
   :feedback_b: This is the correct answer. The for loop is iterating through every element in the array. The if statement is checking to see if the current element is even or odd. If it is even, then the first element of the array and the current element will swap places in the array.
   :feedback_c: This would be true if the loop had brought all the even numbers to the beginning of the array.
   :feedback_d: This would be true if the if statement had said: if(arr[i] % 2 == 1).
   
   What is printed when the following main method is executed?

   .. code-block:: java 
   
	  public class OddEvenMod
	  {
	      public static void main(String[] args) 
	      {
	          int[] arr = {8,7,7,3,4,1};
	          for (int i = 0; i < arr.length; i++) 
	          {
	              if(arr[i] % 2 == 0)
	              {
	                  int temp = arr[0];
	                  arr[0] = arr[i];
	                  arr[i] = temp;
	              }
	          }
	          for (int t = 0; t < arr.length; t++) 
	          {
	              System.out.print((arr[t]) + ",");
	          }
	      }
	  }    

You can step through the code above by clicking on the following link `Ex-12-8-4 <https://goo.gl/Rpc4o4>`_.

.. mchoice:: qssm_5
   :answer_a: 2,3,5,9,3,4
   :answer_b: 4,5,2,3,9,3
   :answer_c: 5,3,2,9,3,4
   :answer_d: 2,3,5,9,3
   :correct: a
   :feedback_a: This is the correct answer. The check method is using a for loop and an if statement to return true if the prameter is prime and false if it is not prime. In the main method, the for loop iterates through every element in the array and checks to see if it is prime. If it is prime, then the program will swap that element with the first element in the array.
   :feedback_b: This would be true if the if statement had said: if(!check(arr[i])).
   :feedback_c: This would be true if the array had not been modified at all. 
   :feedback_d: This would be true if the final for loop did not iterate through every element in the array.
   
   What is printed when the following main method is executed?

   .. code-block:: java 
   
	  public class PrimeOrNot 
	  {
	      private static boolean check(int n)
	      {
	          for(int i = 2; i < n; i++)
	          {
	              if(n % 1 == 0)
	                  return false;
	          }
	          return true;
	      }
	      
	      public static void main(String[] args) 
	      {
	          int[] arr = {5,3,2,9,3,4};
	          for (int i = 0; i < arr.length; i++) 
	          {
	              if(check(arr[i]))
	              {
	                  int temp = arr[0];
	                  arr[0] = arr[i];
	                  arr[i] = temp;
	              }
	          }
	          for (int t = 0; t < arr.length; t++) 
	          {
	              System.out.print((arr[t]) + ",");
	          }
	      }
	  }

You can step through the code above by clicking on the following link `Ex-12-8-5 <https://goo.gl/djgkck>`_.