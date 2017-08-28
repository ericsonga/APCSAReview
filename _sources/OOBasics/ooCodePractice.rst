.. qnum::
   :prefix: 3-14-
   :start: 1			
   
Code Practice with Object Oriented Concepts
---------------------------------------------

.. tabbed:: ooEx1

        .. tab:: Question

           Write a method that overloads the talk method by taking in a name and printing "Hello" with that name.
                
           .. activecode::  ooEx1q
              :language: java
   
              public class Test1
              {
                  public static void talk() 
                  {
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
                  public static void talk() 
                  {
                  	System.out.println("hello there!");
                  }
                  
                  public static void talk(String name) 
                  {
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
                
           .. activecode:: ooEx2q
              :language: java
   

        .. tab:: Answer
        
           We declare an interface similarly to how we declare a class, first put its access modifier (public, private, etc) then what it is, which in this case would be interface.
           Since it is an interface, it is important to remember that the methods cannot have a body. They will be public and abstract methods even if you don't use those keywords when you declare the methods.
        
           .. activecode::  ooEx2a
              :language: java
   
              public interface Test 
              {
              	public void talk();
              	public void walk();
              }
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ooex2d 
                
.. tabbed:: ooEx3

        .. tab:: Question

           Edit this code so the class Beagle is a subclass of the Dog class.  When you run the code it should print "woof!" and then "arf arf"
                
           .. activecode:: ooEx3q
              :language: java
   
              public class Dog 
              {
                  public void speak() 
                  {
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
             
              class Beagle 
              {
                  public void speak() 
                  {
                      System.out.println("arf arf");
                  }   
              }


        .. tab:: Answer
        
           In order to specify the parent class, use the extends keyword in the class header of the child class.
        
           .. activecode:: ooEx3a
              :language: java
   
              public class Dog 
              {
                  public void speak() 
                  {
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
             
              class Beagle extends Dog
              {
                  public void speak() 
                  {
                      System.out.println("arf arf");
                  }   
              }
    			
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ooex3d

.. tabbed:: ooEx4

        .. tab:: Question

           Add an equals method to this class that returns true if the current Dog and passed Dog have the same name.  The code should print false twice then true twice.
                        
           .. activecode::  ooEx4q
              :language: java
   
              public class Dog 
              {
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
           the method header has to have the same return type and parameters as the equals method for the Object class.  The code should print false twice then true twice.
        
           .. activecode::  ooEx4a
              :language: java
              
              public class Dog 
              {
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
                :identifier: javareview_ooex4d
				
              
.. tabbed:: ooEx5

        .. tab:: Question

           Override the taste method from the Candy class in the Chocolate class to return "tastes chocolately".  It should print "tastes sweet!" and then "tastes chocolately".

           .. activecode::  ooEx5q
              :language: java
   
              public class Candy 
              {
                  public String taste() 
                  {
                      return "tastes sweet!"
                  }
                  
                  public static void main(String[] args) 
                  {
                      Candy c1 = new Candy();
                      System.out.println(c1.taste());
                      Candy c2 = new Chocolate();
                      System.out.println(c2.taste();
                  }
              } 
              
              class Chocolate extends Candy 
              {
                  // ADD CODE HERE              
              }

        .. tab:: Answer
        
           To override a method in a child class, you must have the same return types and parameters as the parent class's method
        
           .. activecode::  ooEx5a
              :language: java
              
              public class Candy 
              {
                  public String taste() 
                  {
                      return "tastes sweet!";
                  }
                  
                  public static void main(String[] args) 
                  {
                      Candy c1 = new Candy();
                      System.out.println(c1.taste());
                      Candy c2 = new Chocolate();
                      System.out.println(c2.taste());
                  }
              } 
              
              class Chocolate extends Candy 
              {
                  public String taste() 
                  {
                      return ("tastes chocolately");
                  }
              }

              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ooex5d

             
.. tabbed:: ooEx6

        .. tab:: Question

           Overload the greet method to just print "Hello" if not given any parameters.  It should print "Hello" and then "Hello Sansa".
           
           .. activecode::  ooEx6q
              :language: java
   
              public class Student 
              {
                  public static void greet(String name) 
                  {
                      System.out.println("Hello " + name);
                  }
                  
                  public static void main(String[] args)
                  {
                     greet();
                     greet("Sansa");
                  }
              }
              
        .. tab:: Answer
        
           To overload a method, you use the same name as the method but change the parameters or return type.
        
           .. activecode::  ooEx6a
              :language: java
   
              public class Student 
              {
              
                  public static void greet() 
                  {
                      System.out.println("Hello");
                  }
                  
                  public static void greet(String name) 
                  {
                      System.out.println("Hello " + name);
                  }
                  
                  public static void main(String[] args)
                  {
                     greet();
                     greet("Sansa");
                  }
              }
 
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ooex6d

.. tabbed:: ooEx7

        .. tab:: Question

           Add a call to Pet's brag method before printing anything in Dog's brag method (hint: use super to call an overridden method).  It should print "I have the best pet!" and then "I have the best dog".
           
           .. activecode::  ooEx7q
              :language: java
   
              public class Pet 
              {
                  
                  public void brag() 
                  {
                      System.out.println("I have the best pet!");
                  }
                  
                  public static void main(String[] args) 
                  {
                      Dog d1 = new Dog();
                      d1.brag();
                  }
              }
              
              class Dog extends Pet
              {
                  public void brag() 
                  {
                      // ADD CODE HERE
                      
                      System.out.println("I have the best dog!");
                  }
              }
              
        .. tab:: Answer
        
           In order to use a method that has been overwritten in a subclass, you can use super.methodName().
           
           .. activecode::  ooEx7a
              :language: java
   
              public class Pet 
              {
              
                  public void brag() 
                  {
                      System.out.println("I have the best pet!");
                  }
                  
                  public static void main(String[] args) 
                  {
                      Dog d1 = new Dog();
                      d1.brag();
                  }
              }
              
              class Dog extends Pet
              {
                  public void brag() 
                  {
                      super.brag();
                      System.out.println("I have the best dog!");
                  }
              }
				
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ooex7d	
   

.. tabbed:: ooEx8

        .. tab:: Question

          Finish the Teacher constructor.  Use super to use the Person construtor to set the fields inherited from Person.  It should print "Destini 20" followed by "Erica 55 Masters in Teaching".

           .. activecode::  ooEx8q
              :language: java
   
              public class Person 
              {
                  private String name;
                  private int age;
                  
                  public Person(String name, int age) 
                  {
                      this.name = name;
                      this.age = age;
                  }
                  
                  public String getName() { return this.name; }
                  
                  public int getAge() { return this.age; }
                  
                  public String toString()
                  {
                      return getName() + " " + getAge();
                  }
                  
                  public static void main(String[] args)
                  {
                     Person p = new Person("Destini", 20);
                     System.out.println(p);
                     Teacher p2 = new Teacher("Erica", 55, "Masters in Teaching");
                     System.out.println(p2);
                  }
              }
                  
              class Teacher extends Person
              {
                  String degree;
                  
                  public String getDegree() { return this.degree; }
                  
                  public String toString()
                  {
                      return getName() + " " + getAge() + " " + getDegree();                  
                  }
                  
                  public Teacher(String name, int age, String theDegree) 
                  {
                      // ADD CODE HERE
                  }
              }

        .. tab:: Answer
        
           Use super(parm1,parm2) to call the parent's constructor.  This is especially useful to initialize inherited fields.
           
           .. activecode::  ooEx8a
              :language: java
              
              public class Person 
              {
                  private String name;
                  private int age;
                  
                  public Person(String name, int age) 
                  {
                      this.name = name;
                      this.age = age;
                  }
                  
                  public String getName() { return this.name; }
                  
                  public int getAge() { return this.age; }
                  
                  public String toString()
                  {
                      return getName() + " " + getAge();
                  }
                  
                  public static void main(String[] args)
                  {
                     Person p = new Person("Destini", 20);
                     System.out.println(p);
                     Teacher p2 = new Teacher("Erica", 55, "Masters in Teaching");
                     System.out.println(p2);
                  }
              }
                  
              class Teacher extends Person
              {
                  String degree;
                  
                  public String getDegree() { return this.degree; }
                  
                  public String toString()
                  {
                      return getName() + " " + getAge() + " " + getDegree();                  
                  }
                  
                  public Teacher(String name, int age, String theDegree) 
                  {
                      super(name,age);
                      this.degree = theDegree;
                  }
              }
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ooex8d	             

.. tabbed:: ooEx9

        .. tab:: Question

          Add public getter and setter methods to the Store class so its variables can be accessed by other classes.  It should print the store's name and address and then change both and print the new values.

           .. activecode::  ooEx9q
              :language: java
   
              public class Store 
              {
                  private String name;
                  private String address;
                  
                  public Store(String theName, String theAddress)
                  {
                      this.name = theName;
                      this.address = theAddress;
                  }
                  
                  // ADD CODE HERE
                                    
                  public String toString() { return this.name + "\n" + this.address; }
                  
                  public static void main(String[] args)
                  {
                      Store myStore = new Store("Barb's Store", "333 Main St.");
                      System.out.println(myStore); 
                      myStore.setName("Barbara's Store");
                      myStore.setAddress("555 Pine St.");
                      System.out.println(myStore); 
                      
                  }
              }
              
              

        .. tab:: Answer
        
           A getter method is one that returns the value of a private variable and a setter method allows one to change the value of a private variable without having direct access to it.
           
           .. activecode::  ooEx9a
              :language: java
   
              public class Store 
              {
                  private String name;
                  private String address;
                  
                  public Store(String theName, String theAddress)
                  {
                      this.name = theName;
                      this.address = theAddress;
                  }
                  
                  public String getName() { return this.name; }
                  public String getAddress() { return this.address; }
                  public void setName(String theName) { this.name = theName; }
                  public void setAddress(String theAddress) { this.address = theAddress; }
                  
                  public String toString() { return this.name + "\n" + this.address; }
                  
                  public static void main(String[] args)
                  {
                      Store myStore = new Store("Barb's Store", "333 Main St.");
                      System.out.println(myStore); 
                      myStore.setName("Barbara's Store");
                      myStore.setAddress("555 Pine St.");
                      System.out.println(myStore); 
                      
                  }
              }
				
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ooex9d	
                
.. tabbed:: ooEx10

        .. tab:: Question

          Correctly finish the Dog subclass for the following abstract Animal class.  Override the abstract methods.  It should print "woof" and then "num num".
          
           .. activecode::  ooEx10q
              :language: java
   
              abstract class Animal 
              {
                  public String name;
                  public int numLegs;
                  public abstract void speak();
                  public abstract void eat();
                  
                  public static void main(String[] args)
                  {
                     Dog myDog = new Dog();
                     myDog.speak();
                     myDog.eat();
                  }
              }
              
              public class Dog extends Animal 
              {
                  // ADD CODE HERE
                 
                  public static void main(String[] args)
                  {
                      Dog myDog = new Dog();
                      myDog.speak();
                      myDog.eat();
                  }
              }

        .. tab:: Answer
        
           For something to be a proper subclass of an abstract class, the subclass must include non-abstract versions of the methods from the abstract class.
           
           .. activecode::  ooEx10a
              :language: java
   
              abstract class Animal 
              {
                  public String name;
                  public int numLegs;
                  public abstract void speak();
                  public abstract void eat();
              }
              
              public class Dog extends Animal 
              {
                  public void speak() 
                  {
                      System.out.println("woof");
                  }
                  
                  public void eat() 
                  {
                      System.out.println("nom nom");
                  }
                  
                  public static void main(String[] args)
                  {
                     Dog myDog = new Dog();
                     myDog.speak();
                     myDog.eat();
                  }
              }
				
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ooex10d						

.. tabbed:: ooEx11

        .. tab:: Question

          Override the compareTo method so that it returns a postive number if the current Person is older than the passed other and a negative number if they are younger. If their age is the same then return the compareTo result on the names.
          
           .. activecode::  ooEx11q
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
                      Person p1 = new Person("Carlos",17);
                      Person p2 = new Person("Lia",18);
                      Person p3 = new Person("Asraf", 17);
                      Person p4 = new Person("Lia", 17);
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
           
           .. activecode::  ooEx11a
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
                      if (this.age != other.age) 
                      { 
                      	return this.age - other.age;
                      }
                      
                      else 
                      {
                          return this.name.compareTo(other.name); 
                      }
                  }
                  
                  public static void main(String[] args)
                  {
                      Person p1 = new Person("Carlos",17);
                      Person p2 = new Person("Lia",18);
                      Person p3 = new Person("Asraf", 17);
                      Person p4 = new Person("Lia", 17);
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
                :identifier: javareview_ooex11d
                
.. tabbed:: ooEx12

        .. tab:: Question
       
       	   Override the Person class's speak function inside the Student class. Make the function print "I'm a student". 
       	   
           .. activecode::  ooEx12q
              :language: java
              
              public class Person
              {
                  public void speak() 
                  {
                      System.out.println("I'm a person");
                  }
                  
                  public static void main(String[] args) 
                  {
                      Person p1 = new Student();
                      p1.speak();
                  }
              }
              
              class Student extends Person 
              {
                  // ADD CODE HERE
              }

        .. tab:: Answer
        
           In the Student class we add a public void method called speak() and print "I'm a student" inside. It is important to remember that in order to override a function you must have the same method header and parameters!
           
           .. activecode::  ooEx12a
              :language: java
              
              public class Person
              {
                  public void speak() 
                  {
                      System.out.println("I'm a person");
                  }
                  
                  public static void main(String[] args) 
                  {
                      Person p1 = new Student();
                      p1.speak();
                  }
              }
              
              class Student extends Person 
              {
                  public void speak() 
                  {
                      System.out.println("I'm a student");
                  }
              }
                 
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ooex12d
                
