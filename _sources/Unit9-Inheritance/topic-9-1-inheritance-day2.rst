.. qnum::
   :prefix: 9-1-
   :start: 5
   
   
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

is-a vs. has-a Relationships (Day 2)
---------------------------------------

..	index::
    single: has-a
    single: association
    pair: relationships; association

Another type of relationship between classes is the *has-a* relationship or *association* relationship.  Use this when the object of one class contains a reference to one or more of another class.  For example, a course can have many course periods associated with it as shown below.  The ``1`` near the ``Course`` means that ``1`` course object is associated with the number shown near the other class.  In this case it is ``*`` which means 0 to many.  So one course is associated with 0 to many course periods.

.. figure:: Figures/assoc.png
    :width: 300px
    :align: center
    :figclass: align-center

    Figure 2: A UML Class Diagram showing Association

This would typically translate into a attribute in the ``Course`` class that has an array or ArrayList of ``CoursePeriod`` objects.  The ``CoursePeriod`` class would have an instance variable that is of type ``Course`` as shown below.

.. code-block:: java

  public class Course
  {
     private ArrayList<CoursePeriod> periodList;
  }

  public class CoursePeriod
  {
     private Course myCourse;
  }

is-a Substitution Test
----------------------------------

If you aren't sure if a class should inherit from another class ask yourself if you can substitute the subclass type for the superclass type.  For example, if you have a ``Book`` class and it has a subclass of ``ComicBook`` does that make sense?  Is a comic book a kind of book?  Yes, a comic book is a kind of book so inheritance makes sense.  If it doesn't make sense use *association* or the *has-a* relationship instead.

.. note::

   Only use inheritance when the child class is really a type of the parent class, otherwise use association.

|Exercise| **Check your understanding**

.. mchoice:: qoo_1
   :answer_a: Create one class PublishedMaterial with the requested attributes plus type
   :answer_b: Create classes Book and Movie and each class has the requested attributes
   :answer_c: Create the class PublishedMaterial and have Book and Movie inherit from it all the listed attributes
   :answer_d: Create one class BookStore with the requested attributes plus type
   :answer_e: Create classes for PublishedMaterial, Books, Movies, Title, Price, ID, Authors, DatePublished
   :correct: c
   :feedback_a: This will complicate the process of retrieving objects based on their type. Also if we need to add information that is specific to Book or Movie, it would be best if these were subclasses of PublishedMaterial.
   :feedback_b: This involves writing more code than is necessary (usually people copy and paste the shared code) and makes it harder to fix errors. It would be better to put common attributes and methods in the superclass PublishedMaterial and have Book and Movie be subclasses.
   :feedback_c: We will need to get objects based on their type so we should create classes for Book and Movie. They have common attributes so we should put these in a common superclass PublishedMaterial.
   :feedback_d: The class name, BookStore, seems to imply the thing that keeps track of the store. This would be an appropriate class name for an object that handles the items in the Bookstore. However, for the published material, it would be better to use a superclass PublishedMaterial and subclasses for Books and Movies.
   :feedback_e: This is more classes than is necessary. Items such as Title, Price, ID, Authors and DatePublished are simple variables that do not need a class of their own but should be attributes in a PublishedMaterial superclass, with Movies and Books as subclasses.

    A bookstore is working on an on-line ordering system. For each type of published material (books and movies) they need to track the id, title, author(s), date published, and price. Which of the following would be the best design?

.. mchoice:: qoo_2
   :answer_a: The MovieShowing class should be a subclass of the Movie class.
   :answer_b: The Movie class should be a subclass of the MovieShowing class.
   :answer_c: A MovieShowing has a movie associated with it, so it should have a Movie attribute.
   :correct: c
   :feedback_a: Is a movie showing a type of movie?  Or, does a movie showing have a movie associated with it?
   :feedback_b: Is a movie a type of movie showing?  Or, does a movie showing have a movie associated with it?
   :feedback_c: A movie showing is not a type of movie and a movie is not a type of movie showing.  A movie showing has a movie associated with it.

    A movie theater has multiple showings of a movie each day. Each movie showing has a start time and location (theater number).  What should the relationship be between the Movie class and the MovieShowing class?

.. mchoice:: qoo_3
   :answer_a: superclass
   :answer_b: parent
   :answer_c: extends
   :answer_d: class
   :correct: c
   :feedback_a: The parent class is the superclass, but this is not the Java keyword for declaring the parent class.
   :feedback_b: The class you are inheriting from is called the parent or superclass, but this is not the Java keyword.
   :feedback_c: The extends keyword is used to specify the parent class.
   :feedback_d: The class keyword is used to declare a class, but not the parent class.

   What Java keyword is used to set up an inheritance relationship between a subclass and a superclass?


Challenge
----------

There should be an example maybe Animal and Dog?

given Person w/get set methods toString

Extend Student from Person, add at least 2 new instance variables, write their get/set methods, write a toString that uses get set methods of Person to print out 

no constructors or super yet tho...
draw a class diagram?

Summary
--------

