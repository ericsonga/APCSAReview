.. qnum::
   :prefix: 7-13-
   :start: 1
   
Code Practice with Loops
------------------------------------

.. tabbed:: ch7Ex1

        .. tab:: Question

           
           Rewrite the following code so that it uses a ``for`` loop instead of a ``while`` loop to print out all the integers from 5 to 1 (inclusive).  
           
           .. activecode::  ch7Ex1q
              :language: java
   
              public class Test
              {
                  public static void main(String[] args)
                  {
                      int x = 5;
                      while (x > 0)
                      {
                          System.out.println(x);
                          x = x - 1;
                      }
                  }
              }


        .. tab:: Answer
        
           In a ``for`` loop you declare and initialize the variable(s), specify the condition, and specify how the loop variable(s) change in the header of the ``for`` loop as shown below.
        
           .. activecode::  ch7Ex1a
              :language: java
   
              public class Test
              {
                  public static void main(String[] args)
                  {
                      for (int x = 5; x > 0; x = x - 1)
                          System.out.println(x);
                  }
              }

              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch7Ex1d
                
.. tabbed:: ch7Ex2

        .. tab:: Question

           
           Rewrite the following code to use a ``while`` loop instead of a ``for`` loop to print out the numbers from 1 to 10 (inclusive).
           
           .. activecode::  ch7Ex2q
              :language: java
   
              public class Test
              {
                  public static void main(String[] args)
                  {
                      for (int x = 1; x <= 10; x++)
                          System.out.println(x);
                  }
              }


        .. tab:: Answer
        
           You need to specify the declarations and initializations of the loop variables(s) before the Boolean condition.  You need to do the change(s) at the end of the body of the loop.  
           
           .. activecode::  ch7Ex2a
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      int x = 1;
                      while (x <= 10)
                      {
                          System.out.println(x);
                          x++;
                      }
                  }  
              }
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch7Ex2d
                
.. tabbed:: ch7Ex3

        .. tab:: Question

           
           Rewrite the following code so that it uses a ``for`` loop instead of a ``while`` loop to print out all the integers from 5 to 15 (inclusive).    
           
           .. activecode::  ch7Ex3q
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      int x = 5;
                      while (x <= 15)
                      {
                          System.out.println(x);
                          x = x + 1;
                      }
                  }
              }


        .. tab:: Answer
        
           In a ``for`` loop you declare and initialize the variable(s), specify the condition, and specify how the loop variable(s) change in the header of the ``for`` loop as shown below.
           
           .. activecode::  ch7Ex3a
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      for (int x = 5; x <= 15; x++)
                      {
                          System.out.println(x);
                      }
                  }
              }
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch7Ex3d
                
.. tabbed:: ch7Ex4

        .. tab:: Question

           
           Rewrite the following code to use a ``while`` loop instead of a ``for`` loop to print out the numbers from 10 to 100 by 10's (inclusive).
           
           .. activecode::  ch7Ex4q
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      for (int x = 10; x <= 100; x=x+10)
                          System.out.println(x);
                  }
              }


        .. tab:: Answer
        
           You need to specify the declarations and initializations of the loop variables(s) before the Boolean condition.  You need to do the change(s) at the end of the body of the loop.  		
           
           .. activecode::  ch7Ex4a
              :language: java
   
               public class Test1
               {
                  public static void main(String[] args)
                  {
                      int x = 10;
                      while (x <= 100)
                      {
                          System.out.println(x);
                          x = x + 10;
                      }
                  }
              }
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch7Ex4d
                
                
.. tabbed:: ch7Ex5

        .. tab:: Question

           
           The following code should print the values from 1 to 10 (inclusive) but has errors.  Fix the errors so that the code works as intended. If the code is in an infinite loop you can refresh the page to stop the loop. 
           
           .. activecode::  ch7Ex5q
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      int x = 1;
                      while (x < 10)
                      {
                          System.out.println(x);
                      } 
                  }    
              }


        .. tab:: Answer
        
           On line 6 it should be ``while (x <= 10)``.  Add line 9 at the end of the loop body to increment ``x`` so that the loop ends (isn't an infinite loop).    
        
           .. activecode::  ch7Ex5a
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      int x = 1;
                      while (x <= 10)
                      {
                          System.out.println(x);
                          x++;
                      } 
                  }    
              }
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch7Ex5d
                
.. tabbed:: ch7Ex6

        .. tab:: Question

           
           The following code should print the values from 10 to 5, but it has errors.  Fix the errors so that the code works as intended.
           
           .. activecode::  ch7Ex6q
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      for (int x = 10; x >= 5; x--)
                      {
                         System.out.println(x);
                         x--;
                      }
                      
                  }
              }


        .. tab:: Answer
        
           Remove the ``x--;`` at the end of the body of the loop.  The change area in the for loop decrements ``x`` by 1, so this line isn't needed. 
        
           .. activecode::  ch7Ex6a
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      for (int x = 10; x >= 5; x--)
                      {
                         System.out.println(x);
                      }
                      
                  }
              }
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch7Ex6d
                
.. tabbed:: ch7Ex7

        .. tab:: Question
  
           Finish the code below to print a countdown from 100 to 0 by 10's.
           
           .. activecode::  ch7Ex7q
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      
                      
                  }
              }


        .. tab:: Answer
        
           Use a ``for`` loop as shown below. Start ``x`` at 100, loop while it is greater or equal to 0, and subtract 10 each time after the body of the loop executes.
           
           .. activecode::  ch7Ex7a
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      for (int x = 100; x >= 0; x = x - 10)
                          System.out.println(x);
                  }
              }
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch7Ex7d
                
.. tabbed:: ch7Ex8

        .. tab:: Question
  
           Finish the following code so that it prints a string minus the last character each time through the loop until there are no more characters in the string.
           
           .. activecode::  ch7Ex8q
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                  }
              }


        .. tab:: Answer
        
           Add a ``while`` loop and loop while there is still at least one character in the string. At the end of the body of the loop reset the message to all characters except the last one.   
          
           .. activecode::  ch7Ex8a
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      String message = "help";
                      while (message.length() > 0)
                      {
                          System.out.println(message);
                          message = message.substring(0,message.length() - 1);
                      }
                  }
              }

              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch7Ex8d
                
.. tabbed:: ch7Ex9

        .. tab:: Question
  
           Finish the code to print the value of ``x`` and ``" is even"`` if ``x`` is even and ``" is odd"`` if it is odd for all values from 10 to 1.   
           
           .. activecode::  ch7Ex9q
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      
                  }
              }


        .. tab:: Answer
        
           Use a ``for`` loop to loop from 10 to 1.  Use a conditional to test if x is even (x % 2 == 0).  
           
           .. activecode::  ch7Ex9a
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      for (int x = 10; x >= 1; x--)
                      {
                          if (x % 2 == 0)
                              System.out.println(x + " is even");
                          else
                              System.out.println(x + " is odd");
                      }
                  }
              }
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch7Ex9d
                
.. tabbed:: ch7Ex10

        .. tab:: Question
  
           Finish the code below to print the values for ``10 * x`` where ``x`` changes from 0 to 10.  
           
           .. activecode::  ch7Ex10q
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      
                  }
              }


        .. tab:: Answer
        
           Use a ``for`` loop with ``x`` changing from 0 to 10 and print the value of ``x`` and ``10 * x``.  Use parentheses around ``x * 10`` to make sure it is evaluated before it is turned into a string.
           
           .. activecode::  ch7Ex10a
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      for (int x = 0; x <= 10; x++)
                         System.out.println(x + " times 10 is " + (x * 10));                      
                  }
              }
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch7Ex10d
                
.. tabbed:: ch7Ex11

        .. tab:: Question
  
           Finish the code to loop printing the message each time through the loop and remove an ``x`` from the message until all the ``x``'s are gone.   
           
           .. activecode::  ch7Ex11q
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      String message = "Ix lovex youxxx";
                      
                  }
              }


        .. tab:: Answer
        
           Use a ``while`` loop.  Loop while ``x`` has been found in the message (using ``indexOf``).  Remove the ``x`` (using substring). Use indexOf again to get the position of the next ``x`` or -1 if there are none left in the message. 
           
           .. activecode::  ch7Ex11a
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      String message = "Ix lovex youxxx";
                      int pos = message.indexOf("x");
                      while (pos >= 0)
                      {
                         System.out.println(message);
                         message = message.substring(0,pos) + message.substring(pos+1);
                         pos = message.indexOf("x");
                      }
                  }
              }
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch7Ex11d
                
.. tabbed:: ch7Ex12

        .. tab:: Question
  
           Write the code below to print 55555, 4444, 333, 22, with each on a different line.  
           
           .. activecode::  ch7Ex12q
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                  }
              }


        .. tab:: Answer
        
           Use nested ``for`` loops. The outer loop controls what is printed on each row and the number of rows.  The inner loop controls the number of values printer per row. 
           
           .. activecode::  ch7Ex12a
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      for (int x = 5; x >= 1; x--)
                      {
                         for (int y = x; y > 0; y--)
                         {
                             System.out.print(x);
                         }
                         System.out.println();
                      }
                  }
              }
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch7Ex12d
                
.. tabbed:: ch7Ex13

        .. tab:: Question
  
           Write the code below to print a rectangle of stars (``*``) with 5 rows of stars and 3 stars per row. 
           
           .. activecode::  ch7Ex13q
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                  }
              }


        .. tab:: Answer
        
           Use nested ``for`` loops.  Use the outer loop to control the number of rows and the inner loop to control the number of stars per row. 
           
           .. activecode::  ch7Ex13a
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      for (int row = 0; row < 5; row++)
                      {
                         for (int col = 0; col < 3; col++)
                         {
                             System.out.print("*");
                         }
                         System.out.println();
                      }
                  }
              }
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch7Ex13d
                
                
.. tabbed:: ch7Ex14

        .. tab:: Question
  
           Write the code below to print a rectangle of stars (``*``) with 3 rows of stars and 5 stars per row. 
           
           .. activecode::  ch7Ex14q
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                  }
              }


        .. tab:: Answer
        
           Use nested ``for`` loops.  Use the outer loop to control the number of rows and the inner loop to control the number of stars per row. 
           
           .. activecode::  ch7Ex14a
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      for (int row = 0; row < 3; row++)
                      {
                         for (int col = 0; col < 5; col++)
                         {
                             System.out.print("*");
                         }
                         System.out.println();
                      }
                  }
              }
              
        .. tab:: Discussion 
        
           .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch7Ex14d
                
.. tabbed:: ch7Ex15

        .. tab:: Question
  
           Write the code below to print the number of ``x``'s in the string message.
           
           .. activecode::  ch7Ex15q
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      String message = "xyxxzax";
                  }
              }


        .. tab:: Answer
        
           Use indexOf to find the next ``x``.  Loop while pos is greater than or equal to 0.  Use substring to reset message beyond the next ``x``.   
           
           .. activecode::  ch7Ex15a
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      
                      String message = "xyxxzax";
                      int pos = message.indexOf("x");
                      int count = 0;
                      while (pos >= 0)
                      {
                          count++;
                          message = message.substring(pos+1);
                          pos = message.indexOf("x");
                      }
                      System.out.println("There were " + count + " x's");
                  }
              }
              
        .. tab:: Discussion 
        
           .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch7Ex15d

                
                

  
   


   
