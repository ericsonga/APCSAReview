.. qnum::
   :prefix: 5-4-
   :start: 1

.. |CodingEx| image:: ../../_static/codingExercise.png
    :width: 30px
    :align: middle
    :alt: coding exercise
    
    
.. |Exercise| image:: ../../_static/exercise.png
    :width: 35
    :align: middle
    :alt: exercise
    
    
.. |Groupwork| image:: ../../_static/groupwork.png
    :width: 35
    :align: middle
    :alt: groupwork
    
    
Accessor Methods
=================

Since the instance variables in a class are usually marked as private to the class, programmers provide public methods that allow safe access to the instance variable values in a class. **Accessor methods**, also called **get methods** or **getters**, allow a way to get the value of each instance variable from outside of the class.

|CodingEx| **Coding Exercise**

Try the following code. Note that this active code window has 2 classes! The main method is in a separate **Tester** or **Driver** class. It does not have access to the private instance variables in the other Student class. Change the main method so that it uses the public accessor methods (get methods) to access the values instead.

.. activecode:: StudentObjExample
  :language: java

  public class TesterClass 
  {
     // main method for testing
     public static void main(String[] args)
     {
        Student s1 = new Student("Skyler", "skyler@sky.com", 123456);
        System.out.println("Name:" +  s1.getName() );
        System.out.println("Email:" +  s1.email );
        System.out.println("ID: " + s1.getId() );
     }   
   }
  /** Class Student keeps track of name, email, and id of a Student. */
  class Student 
  {
     private String name;
     private String email;
     private int id;
     
     public Student(String initName, String initEmail, int initId)
     {
        name = initName;
        email = initEmail;
        id = initId;
     }
     
     // accessor methods - getters 
     /** getName()  @return name */
     public String getName() 
     { 
        return name;
     }
     /** getEmail()  @return email */
     public String getEmail() 
     { 
        return email;
     }
     /** getName()  @return id */
     public int getId() 
     { 
        return id;
     }
  }

Note that when you use multiple classes in an IDE, you usually put them in separate files, and you give the files the same name as the public class in them. You can put 2 classes in 1 file, as demonstrated above, but only 1 of them can be public and have a main method in it.

Programmers write get methods for each instance variable that look like the following:

.. code-block:: java
     
     // Getter template
     public returnType getVarName()
     {
        return VarName;
     }
     
     /** getName() example
      *  @return name */
     public String getName()
     {
        return name;
     }

 

.. note::

    Some common errors with methods that return values are:
    
    - Forgetting a return type like int before the method name.
    - Forgetting to use the return keyword to return a value at the end of the method.
    - Forgetting to do something with the value returned from a method (like saving it into a variable or printing it out).
    
debugging ex?    

There is a subtle difference in methods that return primitive types versus reference/object types. If the method is returning a primitive type like int, it returns a copy of the value. This is called **return by value**. This means the original value is not changed and it is a safe way to access the instance variables. 

However, object variables really hold a reference to the object in memory. This is not the actual value, but it's address in memory. So, if the method is returning an object like String, Java returns a copy of the object reference, not the value itself. Java was especially designed this way because objects tend to be large and we want to avoid copying large objects, so we just pass around references to the objects (their addresses in memory). So, when we call getName(), we actually get back a reference to the String for the name in memory. 
  
toString()
----------

.. |Java visualizer| raw:: html

   <a href="http://www.pythontutor.com/visualize.html#code=public%20class%20TesterClass%20%0A%20%20%7B%0A%20%20%20%20%20//%20main%20method%20for%20testing%0A%20%20%20%20%20public%20static%20void%20main%28String%5B%5D%20args%29%0A%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20Student%20s1%20%3D%20new%20Student%28%22Skyler%22,%20%22skyler%40sky.com%22,%20123456%29%3B%0A%20%20%20%20%20%20%20%20System.out.println%28s1%29%3B%0A%20%20%20%20%20%7D%0A%20%20%20%7D%0A%20%20%0A%20%20class%20Student%20%0A%20%20%7B%0A%20%20%20%20%20private%20String%20name%3B%0A%20%20%20%20%20private%20String%20email%3B%0A%20%20%20%20%20private%20int%20id%3B%0A%20%20%20%20%20%0A%20%20%20%20%20public%20Student%28String%20initName,%20String%20initEmail,%20int%20initId%29%0A%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20name%20%3D%20initName%3B%0A%20%20%20%20%20%20%20%20email%20%3D%20initEmail%3B%0A%20%20%20%20%20%20%20%20id%20%3D%20initId%3B%0A%20%20%20%20%20%7D%0A%20%20%20%20%20%0A%20%20%20%20%20//%20toString%28%29%20method%0A%20%20%20%20%20public%20String%20toString%28%29%20%0A%20%20%20%20%20%7B%20%0A%20%20%20%20%20%20%20return%20id%20%2B%20%22%3A%20%22%20%2B%20name%20%2B%20%22,%20%22%20%2B%20email%3B%0A%20%20%20%20%20%7D%0A%20%20%7D&cumulative=false&curInstr=14&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=java&rawInputLstJSON=%5B%5D&textReferences=false&curInstr=0" target="_blank">Java visualizer</a>

Another common method that returns a value is the toString() method which returns a String description of the instance variables of the object. 

This method is called automatically to try to convert an object to a String when it is needed, for example in a print statement. 

Here is the Student class again, but this time with a toString() method. Note that when we call System.out.println(s1); it will automatically call the toString() method to cast the object into a String. The toString() method will return a String that is then printed out. Watch how the control moves to the toString() method and then comes back to main in the |Java visualizer|.

.. activecode:: StudentToString
  :language: java

  public class TesterClass 
  {
     // main method for testing
     public static void main(String[] args)
     {
        Student s1 = new Student("Skyler", "skyler@sky.com", 123456);
        System.out.println(s1);
     }
   }
  
  class Student 
  {
     private String name;
     private String email;
     private int id;
     
     public Student(String initName, String initEmail, int initId)
     {
        name = initName;
        email = initEmail;
        id = initId;
     }
     
     // toString() method
     public String toString() 
     { 
       return id + ": " + name + ", " + email;
     }
  }
  
  
|Groupwork| Programming Challenge : Class Pet
--------------------------------------------------

.. image:: Figures/animalclinic.png
    :width: 150
    :align: left
    :alt: Animal Clinic
    
You've been hired to create a software system for the Awesome Animal Clinic! They would like to keep track of their animal patients. Here are some attributes of the pets that they would like to track:

- Name
- Age
- Weight
- Type (dog, cat, lizard, etc.)
- Breed

1. Create a class that keeps track of the attributes above for pet records at the animal clinic. Decide what instance variables are needed and their data types. Make sure you use int, double, and String data types. Make the instance variables private.

2. Create 2 constructors, one with no parameters and one with many parameters to initialize all the instance variables. 

3. Create Accessor (get) methods for each of the instance variables.

4. Create a toString() method that returns all the information in a pet record.

5. In the main method below, create 3 pet objects and call their constructors, accessor methods, and toString methods to test all of your methods. 

6. Make sure you use good commenting!


.. activecode:: challenge-5-4-Pet-Class
  :language: java

  public class TesterClass 
  {
     // main method for testing
     public static void main(String[] args)
     {
        // Create Pet objects and test all your methods
        
     }   
   }
  
  /**
      Pet class (complete comments)
      @author
      @since
      
  */
  class Pet 
  {
     // complete class definition
     
  }
  


Summary
-------
- An accessor method allows other objects to obtain the value of instance variables or static variables.

- A non-void method returns a single value. Its header includes the return type in place of the keyword void.

- Accessor methods that return primitive types use "return by value" where a copy of the value is returned. 

- When the return expression is a reference to an object, a copy of that reference is returned, not a copy of the object.

- The return keyword is used to return the flow of control to the point immediately following where the method or constructor was called.

- The toString method is an overridden method that is included in classes to provide a description of a specific object. It generally includes what values are stored in the instance data of the object.

- If System.out.print or System.out.println is passed an object, that object’s toString method is called, and the returned string is printed.