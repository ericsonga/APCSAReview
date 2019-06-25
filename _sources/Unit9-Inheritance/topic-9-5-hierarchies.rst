.. qnum::
   :prefix: 9-5-
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
    
Inheritance Hierarchies
===========================

|Exercise| **Check your understanding**

.. mchoice:: qoo_4
   :answer_a: V
   :answer_b: IV
   :answer_c: I and II
   :answer_d: I and III
   :answer_e: I only
   :correct: b
   :feedback_a: In fact, all of the reasons listed are valid. Subclasses can reuse object methods written for superclasses without code replication, subclasses can be stored in the same array when the array is declared to be of the parent type, and objects of subclasses can passed as arguments of the superclass type. All of which make writing code more streamlined.
   :feedback_b: All of these are valid reasons to use an inheritance hierarchy.
   :feedback_c: III is also valid. In some cases you might want to store objects of subclasses together in a single array declared to be of the parent type, and inheritance allows for this.
   :feedback_d: II is also valid. In some cases a single method is applicable for a number of subclasses, and inheritance allows you to pass objects of the subclasses to the same method if it takes an argument of the parent type, instead of writing individual methods for each subclass.
   :feedback_e: I and III are also valid, in some cases a single method is applicable for a number of subclasses, and inheritance allows you to pass all the subclasses to the same method instead of writing individual methods for each subclass and you might want to store subclasses together in a single array, and inheritance allows for this.
    
    Which of the following reasons for using an inheritance hierarchy are valid?
    I.   Object methods from a superclass can be used in a subclass without rewriting or copying code.
    II.  Objects from subclasses can be passed as arguments to a method that takes an argument of the parent type.
    III. Objects from subclasses can be stored in the same array of the parent type.
    IV.  All of the above
    V.   None of the above