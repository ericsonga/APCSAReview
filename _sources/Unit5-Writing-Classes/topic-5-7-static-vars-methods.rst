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


Summary
-------

- Static methods are associated with the class, not objects of the class.

- Static methods include the keyword static in the header before the method name.

- Static methods cannot access or change the values of instance variables.

- Static methods can access or change the values of static variables.

- Static methods do not have a this reference and are unable to use the class’s instance variables or call non-static methods.

- Static variables belong to the class, with all objects of a class sharing a single static variable.

- Static variables can be designated as either public or private and are designated with the static keyword before the variable type.

- Static variables are used with the class name and the dot operator, since they are associated with a class, not objects of a class.