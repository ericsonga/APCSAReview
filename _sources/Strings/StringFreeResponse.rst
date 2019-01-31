.. qnum::
   :prefix: 4-14-
   :start: 1
   
Code Practice with Strings
------------------------------------

.. tabbed:: ch4ex1

        .. tab:: Question

           
           Fill in the code so that the first half of string ''word'' is printed.  
           
           .. activecode::  ch4ex1q
              :language: java
   
              public class Test
              {
                  public static void main(String[] args)
                  {
                      String word = "practice";
                      System.out.println();
                  }
              }


        .. tab:: Answer
        
           To print part of a string, use the function substring.
        
           .. activecode::  ch4ex1a
              :language: java
   
              public class Test
              {
                  public static void main(String[] args)
                  {
                  	  String word = "practice";
                      System.out.println(word.subString(0,4));
                  }
              }

                
.. tabbed:: ch4ex14

        .. tab:: Question

           
           Fill in the code so that the second half of string variable word is printed (try using only one parameter for subString).
           
           .. activecode::  ch4ex2q
              :language: java
   
              public class Test
              {
                  public static void main(String[] args)
                  {
                  	  String word = "practice";
                      System.out.println();
                  }
              }


        .. tab:: Answer
        
             
           
           .. activecode::  ch4ex2a
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      String word = "practice";
                      System.out.println(word.subString(4));
                  }  
              }
                
.. tabbed:: ch4ex3

        .. tab:: Question

           
           Add to the existing code so the program prints the value of firstName and lastName together (Don't worry about spaces yet).    
           
           .. activecode::  ch4ex3q
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      String firstName = "Dwayne";
					  String lastName = "Johnson";
                      System.out.println();
                  }
              }


        .. tab:: Answer
        
           To combine contents of String variables, use the + operator to concatenate.
           
           .. activecode::  ch4ex3a
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                  	String firstName = "Dwayne";
                  	String lastName = "Johnson";
                    System.out.println(firstName+lastName);
                  }
              }
                
.. tabbed:: ch4ex4

        .. tab:: Question

           
           Add to the existing code so the program prints the value of firstName and lastName separated by ", ".
           
           .. activecode::  ch4ex4q
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      String firstName = "Harry";
                      String lastName = "Potter";
                      System.out.println();
                  }
              }


        .. tab:: Answer
        
           As well as being able to concatenate Strings using the + operator, you can also add String literals.  		
           
           .. activecode::  ch4ex5
              :language: java
   
               public class Test1
               {
                  public static void main(String[] args)
                  {
                      String firstName = "Harry";
                      String lastName = "Potter";
                      System.out.println(firstName + ", " + lastName);
                  }
              }

                
                

  
   


   
