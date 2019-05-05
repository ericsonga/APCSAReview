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

Summary
-------
- An accessor method allows other objects to obtain the value of instance variables or static variables.

- A non-void method returns a single value. Its header includes the return type in place of the keyword void.

- In non-void methods, a return expression compatible with the return type is evaluated, and a copy of that value is returned. This is referred to as “return by value.”

- When the return expression is a reference to an object, a copy of that reference is returned, not a copy of the object.

- The return keyword is used to return the flow of control to the point immediately following where the method or constructor was called.

- The toString method is an overridden method that is included in classes to provide a description of a specific object. It generally includes what values are stored in the instance data of the object.

- If System.out.print or System.out. println is passed an object, that object’s toString method is called, and the returned string is printed.