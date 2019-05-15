.. qnum::
   :prefix: 5-9-
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
    
    
this Keyword
=================

The keyword **this** can be used in a class to refer to the current calling object.  For example, in the following Class Person, when we create an object p1 and call the constructor or p1.setEmail(), the word "this" refers to p1. And when we make the same method calls with object p2, "this" refers to p2.

.. |Java visualizer| raw:: html

   <a href="http://www.pythontutor.com/visualize.html#code=%20public%20class%20Person%20%0A%20%20%7B%0A%20%20%20%20%20//%20instance%20variables%20%0A%20%20%20%20%20private%20String%20name%3B%0A%20%20%20%20%20private%20String%20email%3B%0A%20%20%20%20%20private%20String%20phoneNumber%3B%0A%20%20%20%20%20%0A%20%20%20%20%20//%20constructor%0A%20%20%20%20%20public%20Person%28String%20theName%29%0A%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20this.name%20%3D%20theName%3B%0A%20%20%20%20%20%7D%0A%20%20%20%20%20%0A%20%20%20%20%20//%20accessor%20methods%20-%20getters%20%0A%20%20%20%20%20public%20String%20getName%28%29%20%7B%20return%20this.name%3B%7D%0A%20%20%20%20%20public%20String%20getEmail%28%29%20%7B%20return%20this.email%3B%7D%0A%20%20%20%20%20public%20String%20getPhoneNumber%28%29%20%7B%20return%20this.phoneNumber%3B%7D%0A%20%20%20%20%20%0A%20%20%20%20%20//%20accessor%20methods%20-%20setters%0A%20%20%20%20%20public%20void%20setName%28String%20theName%29%20%7B%20this.name%20%3D%20theName%3B%7D%0A%20%20%20%20%20public%20void%20setEmail%28String%20theEmail%29%20%7Bthis.email%20%3D%20theEmail%3B%7D%0A%20%20%20%20%20public%20void%20setPhoneNumber%28String%20thePhoneNumber%29%20%7B%20this.phoneNumber%20%3D%20thePhoneNumber%3B%7D%0A%20%20%20%20%20public%20String%20toString%28%29%0A%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20return%20this.name%20%2B%20%22%20%22%20%2B%20this.email%20%2B%20%22%20%22%20%2B%20this.phoneNumber%3B%0A%20%20%20%20%20%7D%0A%20%20%20%20%20%0A%20%20%20%20%20//%20main%20method%20for%20testing%0A%20%20%20%20%20public%20static%20void%20main%28String%5B%5D%20args%29%0A%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20Person%20p1%20%3D%20new%20Person%28%22Sana%22%29%3B%0A%20%20%20%20%20%20%20%20System.out.println%28p1%29%3B%0A%20%20%20%20%20%20%20%20Person%20p2%20%3D%20new%20Person%28%22Jean%22%29%3B%0A%20%20%20%20%20%20%20%20p2.setEmail%28%22jean%40gmail.com%22%29%3B%0A%20%20%20%20%20%20%20%20p2.setPhoneNumber%28%22404%20899-9955%22%29%3B%0A%20%20%20%20%20%20%20%20System.out.println%28p2%29%3B%0A%20%20%20%20%20%7D%0A%20%20%7D%0A%20%20&cumulative=false&curInstr=25&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=java&rawInputLstJSON=%5B%5D&textReferences=false&curInstr=0" target="_blank">Java visualizer</a>
   
   
Run the code below and also check it out in the |Java visualizer| which shows how this refers to different objects when the code is run.

 
.. activecode:: PersonClassThis
  :language: java

  public class Person 
  {
     // instance variables 
      private String name;
      private String email;
      private String phoneNumber;
     
     // constructor
     public Person(String theName)
     {
        this.name = theName;
     }
     
     // accessor methods - getters 
     public String getName() { return this.name;}
     public String getEmail() { return this.email;}
     public String getPhoneNumber() { return this.phoneNumber;}
     
     // accessor methods - setters
     public void setName(String theName) { this.name = theName;}
     public void setEmail(String theEmail) {this.email = theEmail;}
     public void setPhoneNumber(String thePhoneNumber) { this.phoneNumber = thePhoneNumber;}
     public String toString()
     {
        return this.name + " " + this.email + " " + this.phoneNumber;
     }
     
     // main method for testing
     public static void main(String[] args)
     {
        Person p1 = new Person("Sana");
        System.out.println(p1);
        Person p2 = new Person("Jean");
        p2.setEmail("jean@gmail.com");
        p2.setPhoneNumber("404 899-9955");
        System.out.println(p2);
     }
  }


Note that in the code above, this.name, this.email, and this.phoneNumber are equivalent to writing just name, email, and phoneNumber, but it is a way to indicate that we are refering to the instance variables of this object. The keyword this is sometimes used by programmers to distinguish between variables. Programmers can give the parameter variables the same names as the instance variables and this can distinguish them and avoid a naming conflict. For example, both the instance variable and the parameter variable are called name in the code below.

.. code-block:: java
 
     // instance variables 
     private String name;
     
     // constructor
     public Person(String name)
     {
        // Set this object's instance variable name to the parameter variable name
        this.name = name; 
     }


Summary
--------

- Within a non-static method or a constructor, the keyword this is a reference to the current object, the object whose method or constructor is being called.

- The keyword this can be used to pass the current object as an actual parameter in a method call.

- Static methods do not have a this reference.