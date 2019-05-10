.. qnum::
   :prefix: 5-5-
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
    
    
Mutator Methods
=================

Corresponding to each get method, programmers also provide a public **set method** to change the value of a private instance variable in a class. These are called **mutator methods**. They are **void methods** meaning that they do not return a value, but they do take a **parameter**, the new value for the instance variable. Here is a the method header for a set method:

.. code-block:: java
     
     // Setter template
     public void setVariable(typeOfVar newVar)
     {
        Variable = newVar;
     }
     
     // SetName() example
     public void setName(String newName)
     {
        name = newName;
     }
     
     // To call a setName method, use:
     objectName.setName(newName);


|CodingEx| **Coding Exercise**

Try the Student class below which this time has set methods added. You will need to fix the errors. The main method is in a separate Tester class and does not have access to the private instance variables in the other Student class. Change the main method so that it uses a public mutator method (set method) to access the value instead.

.. activecode:: StudentObjExample2
  :language: java

  public class TesterClass 
  {
     // main method for testing
     public static void main(String[] args)
     {
        Student s1 = new Student("Skyler", "skyler@sky.com", 123456);
        System.out.println(s1);
        s1.setName("Skyler 2");
        // Main doesn't have access to email, use set method!
        s1.email = "skyler2@gmail.com";
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
     // mutator methods - setters
     public void setName(String newName)
     { 
       name = newName; 
     }
     public void setName(String newEmail)
     { 
       email = newEmail; 
     }
     public void setId(int newId)
     { 
       id = newId; 
     }
     // accessor methods - getters 
     public String getName() 
     { 
        return name;
     }
     public String getEmail() 
     { 
        return email;
     }
     public int getId() 
     { 
        return id;
     }
     public String toString() {
        return id + ": " + name + ", " + email;
     }
  }
  
|Exercise| **Check your understanding**

.. dragndrop:: AccessorMutator
    :feedback: Review the vocabulary.
    :match_1: gets and returns the value of an instance variable|||accessor method
    :match_2: sets the instance variable to a value in its parameter|||mutator method
    :match_3: initializes the instance variables to values|||constructor 
    :match_4: accessible from outside the class|||public
    :match_5: accessible only inside the class|||private

    
    Drag the definition from the left and drop it on the correct word on the right.  Click the "Check Me" button to see if you are correct.


Explain about parameters as local variables? And how they get filled and only exist there? Bring up data encapsulation again?


|Groupwork| Programming Challenge : Class Pet Setters
-----------------------------------------------------

.. image:: Figures/animalclinic.png
    :width: 150
    :align: left
    :alt: Animal Clinic
    
1. Copy your Awesome Animal Clinic Pet class from the last lesson into this Active Code window. 
2. Add set methods for each of the 5 instance variables. Make sure you use good commenting!
3. Test each of the set methods in the main method.


.. activecode:: challenge-5-5-Pet-Class
  :language: java

  public class TesterClass 
  {
     // main method for testing
     public static void main(String[] args)
     {
        // Create Pet objects and test all your set methods
        
     }   
   }
  
  /**
      Pet class (complete comments)
      @author
      @since
      
  */
  class Pet 
  {
     // complete class definition with set methods
     
  }
  

Summary
--------
- A void method does not return a value. Its header contains the keyword void before the method name.

- A **mutator method** is often a void method that changes the values of instance variables or static variables.