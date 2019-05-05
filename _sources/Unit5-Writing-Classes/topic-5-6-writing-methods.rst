.. qnum::
   :prefix: 5-6-
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
    
    
Writing Methods
=================

Summary
-------

- Methods can only access the private data and methods of a parameter that is a reference to an object when the parameter is the same type as the method’s enclosing class.

- Non-void methods with parameters receive values through parameters, use those values, and return a computed value of the specified type.

- It is good programming practice to not modify mutable objects that are passed as parameters unless required in the specification.

- When an actual parameter is a primitive value, the formal parameter is initialized with a copy of that value. Changes to the formal parameter have no effect on the corresponding actual parameter.

- When an actual parameter is a reference to an object, the formal parameter is initialized with a copy of that reference, not a copy of the object.

- If the reference is to a mutable object, the method or constructor can use this reference to alter the state of the object.

- Passing a reference parameter results in the formal parameter and the actual parameter being aliases. They both refer to the same object.