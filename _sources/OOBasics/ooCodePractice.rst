.. qnum::
   :prefix: 3-14-
   :start: 1			
   
Code Practice with Object Oriented Concepts
------------------------------

.. tabbed:: ooEx1

        .. tab:: Question

           Edit this code so the class Beagle is a subclass of the Dog class.
                
           .. activecode::  ooEx1q
              :language: java
   
              public class Dog {
    				public void speak() {
        				System.out.println("woof!");
        			}
        				
        			public static void main(String[] args)
      					{
         				Dog d = new Dog();
         				d.speak();
         				Dog b = new Beagle();
         				b.speak(); 
      				}
    		  }

    			class Beagle {
        			public void speak() {
        				System.out.println("arf arf");
        			}   
    			}


        .. tab:: Answer
        
           In order to specify the parent class, use the extends keyword 
           in the class header of the child class.
        
           .. activecode::  ooEx1a
              :language: java
   
              public class Dog {
    				public void speak() {
        				System.out.println("woof!");
        			}
        				
        			public static void main(String[] args)
      					{
         				Dog d = new Dog();
         				d.speak();
         				Dog b = new Beagle();
         				b.speak(); 
      				}
    		  }

    			class Beagle extends Dog {
        			public void speak() {
        				System.out.println("arf arf");
        			}   
    			}
    			
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ooex1d

.. tabbed:: ooEx2

        .. tab:: Question

           Add an equals method to this class so the class say objects are equal if they have the same name.
                
           .. activecode::  ooEx2q
              :language: java
   
              public class Dog {
				   private String name;

				   public Dog(String name)
				   {
					  this.name = name;
				   }

				   public boolean equals(Object other)
				   {
					  // ADD CODE HERE 
				   }

				   public static void main(String[] args)
				   {
					  Dog d1 = new Dog("Rufus");
					  Dog d2 = new Dog("Sally");
					  Dog d3 = new Dog("Rufus");
					  Dog d4 = d3;
					  System.out.println(d1.equals(d2));
					  System.out.println(d2.equals(d3));
					  System.out.println(d1.equals(d3));
					  System.out.println(d3.equals(d4));

				   }
				}

        .. tab:: Answer
        
           In order to override the equals method, 
           the method header has to have the same return type and parameters as the equals method for the Object class. 
           The code should print false twice then true twice.
        
           .. activecode::  ooEx2a
              :language: java
   
              public class Dog {
				   private String name;

				   public Dog(String name)
				   {
					  this.name = name;
				   }

				   public boolean equals(Object other)
				   {
					  Dog d1 = (Dog) other;
					  return this.name.equals(d1.name);
				   }

				   public static void main(String[] args)
				   {
					  Dog d1 = new Dog("Rufus");
					  Dog d2 = new Dog("Sally");
					  Dog d3 = new Dog("Rufus");
					  Dog d4 = d3;
					  System.out.println(d1.equals(d2));
					  System.out.println(d2.equals(d3));
					  System.out.println(d1.equals(d3));
					  System.out.println(d3.equals(d4));

				   }
				}
				
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ooex2d
				
              
.. tabbed:: ooEx3

        .. tab:: Question

           Override the taste method from the Candy class in the Chocolate class to return "tastes chocolately".

           .. activecode::  ooEx3q
              :language: java
   
              public class Candy {
				public String taste() {
					return "tastes sweet!"
				}

				public static void main(String[] args) {
					Candy c1 = new Candy();
					System.out.println(c1.taste());
					Candy c2 = new Chocolate();
					System.out.println(c2.taste();
				}
			} 

			class Chocolate extends Candy {

			}

        .. tab:: Answer
        
           To override a method in a child class, you must have the same return types and parameters as the parent class's method
        
           .. activecode::  ooEx3a
              :language: java
   
              public class Candy {
					public String taste() {
						return "tastes sweet!"
					}

					public static void main(String[] args) {
						Candy c1 = new Candy();
						System.out.println(c1.taste());
						Candy c2 = new Chocolate();
						System.out.println(c2.taste();
					}
				} 

				class Chocolate extends Candy {
					public String taste() {
						return ("Tastes chocolately");
					}
				}
				
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ooex3d

             
.. tabbed:: ooEx4

        .. tab:: Question

           Overload the greet method if not given any parameters.
           
           .. activecode::  ooEx4q
              :language: java
   
              public class Student {

					public void greet(String name) {
						System.out.println("Hello" + name);
					}
				}
        .. tab:: Answer
        
           To overload a method, you use the same name as the method but change the parameters or return type.
        
           .. activecode::  ooEx4a
              :language: java
   
              public class Student {

					public void greet() {
						System.out.println("Hello!");
					}

					public void greet(String name) {
						System.out.println("Hello" + name);
					}
				}
				
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ooex4d

.. tabbed:: ooEx5

        .. tab:: Question

           Call the Pet's brag method on d1. (hint: use super to call an overridden method)
           
           .. activecode::  ooEx5q
              :language: java
   
              public class Pet {
					public Pet(String name) {
						this.name = name;
					}

					public String brag() {
						System.out.println("I have the best pet!");
					}

					public static void main(String[] args) {
						Dog d1 = new Dog();
						d1.brag();
						// add code here
					}

					private class Dog {
						public String brag() {
							System.out.println("I have the best dog!");
						}
					}
				}
        .. tab:: Answer
        
           In order to use a method that has been overwritten in a subclass, you can use super.methodName().
           
           .. activecode::  ooEx5a
              :language: java
   
              public class Pet {
					public Pet(String name) {
						this.name = name;
					}

					public String brag() {
						System.out.println("I have the best pet!");
					}

					public static void main(String[] args) {
						Dog d1 = new Dog();
						d1.brag();
						super.brag(); // prob wrong check this
					}

					private class Dog {
						public String brag() {
							System.out.println("I have the best dog!");
						}
					}
				}
				
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ooex5d	
   

.. tabbed:: ooEx6

        .. tab:: Question

          Use super in a constructor to ensure there is no repeated code in the subclasses constructor.

           .. activecode::  ooEx6q
              :language: java
   
              public class Person {
					String name;
					int age;
					public Person(String name, int age) {
						this.name = name;
						this.age = age;
					}
				}
				public class Teacher {
					String class;
					public Teacher(String name, int age, String class) {

					}
				}

        .. tab:: Answer
        
           In order to use a method that has been overwritten in a subclass, you can use super.methodName().
           
           .. activecode::  ooEx6a
              :language: java
   
              public class Person {
					String name;
					int age;
					public Person(String name, int age) {
						this.name = name;
						this.age = age;
					}
				}
				public class Teacher {
					String class;
					public Teacher(String name, int age, String class) {
						super(name,age);
						this.class = class;
					}
				}
				
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ooex6d	             

.. tabbed:: ooEx7

        .. tab:: Question

          Add getter and setter methods to the Team class so its variables can be accessed by other classes.

           .. activecode::  ooEx7q
              :language: java
   
              public class Store {
					private int customers = 12;
					private int revenue = 200;
					// add code here
				}

        .. tab:: Answer
        
           A getter method is one that returns the private variable and the setter allows one to change the private variable without having direct access to it.
           
           .. activecode::  ooEx7a
              :language: java
   
              public class Store {
					private int customers = 12;
					private int revenue = 200;
					public int getCustomers() {
						return customers;
					}

					public int getRevenue() {
						return revenue;
					}

					public void setRevenue(int num) {
						revenue = num;
					}

					public void setCustomers(int num) {
						customers = num;
					}
				}
				
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ooex7d	
                
.. tabbed:: ooEx8

        .. tab:: Question

          Correctly finish the Cat subclass for the following abstract Animal class.
          
           .. activecode::  ooEx8q
              :language: java
   
              public abstract class Animal {
					public String name;
					public int numLegs;
					public void speak();
					public void eat();
				}
				public class Dog extends Animal {

				}

        .. tab:: Answer
        
           For something to be a proper subclass of an abstract class, the subclass must include 
           all of the variables and finished versions of the methods from the abstract class.
           
           .. activecode::  ooEx8a
              :language: java
   
              public abstract class Animal {
					public String name;
					public int numLegs;
					public void speak();
					public void eat();
				}

				public class Dog extends Animal {
					public String name = "Doggo";
					public int numLegs = 4;
					public void speak() {
						System.out.println("woof");
					}
					public void eat() {
						System.out.println("nom nom");
					}
				}
				
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ooex8d						

.. tabbed:: ooEx9

        .. tab:: Question

          Correctly override the compareTo method so that a person is greater if they are older. If their age is the same then whoever's name is earlier in the alphabet is greater. 
          
           .. activecode::  ooEx9q
              :language: java
   
              public class Person implements Comparable<Person>
				{
				   private String name;
				   private int age;

				   public Person(String name, int age)
				   {
					  this.name = name;
					  this.age = age;
				   }

				   public int compareTo(Person other)
				   {
					// ADD CODE HERE
				   }

					public static void main(String[] args)
					{
					   Person p1 = new Person("Clark",17);
					   Person p2 = new Person("Lia",18);
					   Person p3 = new Person("Clark", 17);
					   Person p4 = new Person("Lia", 16);
					   Person p5 = new Person("Karla", 17);
					   System.out.println(p1.compareTo(p2));
					   System.out.println(p2.compareTo(p3));
					   System.out.println(p3.compareTo(p1));
					   System.out.println(p4.compareTo(p3));
					   System.out.println(p4.compareTo(p5));
					}
				}

        .. tab:: Answer
        
           By overriding the compareTo method you are able to compare objects based on specified factors.
           
           .. activecode::  ooEx9a
              :language: java
   
              public class Person implements Comparable<Person>
				{
				   private String name;
				   private int age;

				   public Person(String name, int age)
				   {
					  this.name = name;
					  this.age = age;
				   }

				   public int compareTo(Person other)
				   {
					 if (this.age = age) {
						return this.name.compareTo(other.name); 
					 } else return this.name.compareTo(other.name);
	 
				   }

					public static void main(String[] args)
					{
					   Person p1 = new Person("Clark",17);
					   Person p2 = new Person("Lia",18);
					   Person p3 = new Person("Clark", 17);
					   Person p4 = new Person("Lia", 16);
					   Person p5 = new Person("Karla", 17);
					   System.out.println(p1.compareTo(p2));
					   System.out.println(p2.compareTo(p3));
					   System.out.println(p3.compareTo(p1));
					   System.out.println(p4.compareTo(p3));
					   System.out.println(p4.compareTo(p5));
					}
				}

				
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ooex9d
                
.. tabbed:: ooEx10

        .. tab:: Question

           Write a method that overloads the talk method by taking in a name and printing "Hello" with that name.
                
           .. activecode::  ooEx10q
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
        
           .. activecode::  ooEx10a
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
                :identifier: javareview_ooex10d

.. tabbed:: ooEx11

        .. tab:: Question

           Create an interface named Test that has a void talk method and void walk method. Check your answer with the answer tab instead of running it!
                
           .. activecode::  ooEx11q
              :language: java
   
              


        .. tab:: Answer
        
           We declare an interface similar to how we declare a class, first putting its access modifier (public, private, etc) then what it is, which in this case would be interface.
           Since it is an interface, it is important to remember that the methods cannot have a body. 
        
           .. activecode::  ooEx11a
              :language: java
   
              public interface Test {
              	public void talk();
              	public void walk();
              }
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ooex11d 
                
.. tabbed:: ooEx12

        .. tab:: Question
       
       	   Override the Person class's speak function inside the Student class. Make the function print "I'm a student". 
       	   
           .. activecode::  ooEx12q
              :language: java
              
              public class Person
              {
              	public void speak() {
              		System.out.println("I'm a person");
              	}
              	public static void main(String[] args) {
              		Person p1 = new Student();
              		p1.speak();
              	}
              }
              class Student extends Person {
              	// ADD CODE HERE
              }

        .. tab:: Answer
        
           In the Student class we add a public void method called speak() and print "I'm a student" inside. It is important to remember that in order to override a function you must have the same method header and parameters!
           
           .. activecode::  ooEx12a
              :language: java
              
			  public class Person
			  {
              	public void speak() {
              		System.out.println("I'm a person");
              	}
              	public static void main(String[] args) {
              		Person p1 = new Student();
              		p1.speak();
              	}
              }
              class Student extends Person {
              	public void speak() {
              		System.out.println("I'm a student");
              	}
              }
   
                 
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ooex12d