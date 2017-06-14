.. qnum::
   :prefix: 3-14-
   :start: 1			
   
Code Practice with Object Oriented Concepts
------------------------------

.. tabbed:: ooEx1

        .. tab:: Question

           Write a method that overloads the talk method by taking in a name and printing "Hello" with that name.
                
           .. activecode::  ooEx1q
              :language: java
   
              public class Test1
              {
                  public static void talk() {
                  	System.out.println("hello there!");
                  }
                  
                  public static // FINISH THE METHOD HERE // 
                  
                  public static void main(String[] args) 
                  {
                  	talk("Matthew");
                  }
              }


        .. tab:: Answer
        
           Overloading is when several methods have the same name but different parameter types, order, or number. 
           In this case, the original method had no parameters and we overloaded it by creating a talk method with a String parameter.
        
           .. activecode::  ooEx1a
              :language: java
   
              public class Test1
              {
                  public static void talk() {
                  	System.out.println("hello there!");
                  }
                  
                  public static void talk(String name) {
                  	System.out.println("Hello " + name);
                  }
                  
                  public static void main(String[] args)  
                  {
                  	talk("Matthew");
                  }
              }
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ooex1d

.. tabbed:: ooEx2

        .. tab:: Question

           Create an interface named Test that has a void talk method and void walk method. Check your answer with the answer tab instead of running it!
                
           .. activecode::  ooEx2q
              :language: java
   
              


        .. tab:: Answer
        
           We declare an interface similar to how we declare a class, first putting its access modifier (public, private, etc) then what it is, which in this case would be interface.
           Since it is an interface, it is important to remember that the methods cannot have a body. 
        
           .. activecode::  ooEx2a
              :language: java
   
              public interface Test {
              	public void talk();
              	public void walk();
              }
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ooex2d 
                
