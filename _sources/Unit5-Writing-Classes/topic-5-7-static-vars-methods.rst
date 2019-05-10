.. qnum::
   :prefix: 5-7-
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
    
    
Static Variables and Methods
============================

In Unit 2, we explored the Math class and its many static methods like Math.random(). **Static** variables and methods belong to a class and are called with the Class Name rather than using object variables. There is only one copy of a static variable or method for the whole class. For example, the main method is static because there should only be 1 main method. Static methods can be public or private.

Here is how you use the keyword static with variables and methods:

.. code-block:: java
     
     // static variable
     public static type variableName;
     
     // static method
     public static returnType methodName(parameters) {
     
     }
     
     // To call a static method or variable, use the Class Name
     System.out.println(ClassName.staticVariable);
     ClassName.staticMethod();


Summary
-------

- Static methods and variables include the keyword static  before their name in the header or declaration. They can be public or private.

- Static variables belong to the class, with all objects of a class sharing a single static variable.

- Static methods are associated with the class, not objects of the class.

- Static variables are used with the class name and the dot operator, since they are associated with a class, not objects of a class.

- Static methods cannot access or change the values of instance variables, but they can access or change the values of static variables.

- Static methods cannot call non-static methods.

