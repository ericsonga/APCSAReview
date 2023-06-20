.. qnum::
   :prefix: 9-12-
   :start: 1


Easier Multiple Choice Questions
----------------------------------

These problems are easier than most of those that you will usually see on the AP CSA exam.


.. mchoice:: qooe_1
   :practice: T
   :answer_a: Initialize the fields in the object.
   :answer_b: Determines the amount of space needed for an object and creates the object.
   :answer_c: Names the new object.
   :correct: a
   :feedback_a: A constructor is often used to initialize the fields to their default values or in the case of a parameterized constructor, to the values passed in to the constructor.
   :feedback_b: The object is already created before the constructor is called.
   :feedback_c: Constructors do not name the object.

   What best describes the purpose of a class's constructor?

.. mchoice:: qooe_2
   :practice: T
   :answer_a: The methods do different things.
   :answer_b: The methods have different parameter names.
   :answer_c: The methods have different post-conditions.
   :answer_d: Two methods with the same name can never be included in the same class.
   :answer_e: The methods have different numbers of parameters
   :correct: e
   :feedback_a: Methods that do different things should be named differently.
   :feedback_b: There is no reason the parameter names ought to be different if the two methods are performing the same action.
   :feedback_c: If the methods have different post-conditions, they are performing different functions, and should be named differently.
   :feedback_d: If two methods perform the same function, they can be named the same.  However, the number of parameters, type of parameters, or order of parameter types must be different.
   :feedback_e: Overloading occurs when two methods perform the same essential operation, but take a different number and/or type of parameters.

   Under which of these conditions is it appropriate to overload a method (ie: the class will contain two methods with the same name)?

.. mchoice:: qooe_5
   :practice: T
   :answer_a: Use four unrelated classes: <code>Car</code>, <code>Doors</code>, <code>AirConditioning</code>, and <code>MilesPerGallon</code>.
   :answer_b: Use a class <code>Car</code> with three subclasses: <code>Doors</code>, <code>AirConditioning</code>, and <code>MilesPerGallon</code>.
   :answer_c: Use a class <code>Car</code>, with fields: <code>numDoors</code>, <code>hasAir</code>, and <code>milesPerGallon</code>.
   :answer_d: Use a class <code>Car</code>, with subclasses of <code>Doors</code>, <code>AirConditioning</code>, and <code>MilesPerGallon</code>.
   :answer_e: Use classes: <code>Doors</code>, <code>AirConditioning</code>, and <code>MilesPerGallon</code>, each with a subclass <code>Car</code>.
   :correct: c
   :feedback_a: Only <code>Car</code> should be a class. The number of doors, flag if it has air conditioning, and the average number of miles per gallon are attributes of a car so they belong in a <code>Car</code> class.
   :feedback_b: Doors, air conditioning, and miles per gallon are not a kind of car. Child classes need to be able to be substituted for the parent class.
   :feedback_c: The number of doors, flag if it has air conditioning, and the average number of miles per gallon are attributes of a car. Each of these is a simple value so they can just be fields of a <code>Car</code> class.
   :feedback_d: A door is not a type of car. A flag for air conditioning is not a type of door, and a miles per gallon is not a type of air conditioning flag. Child classes need to be able to be substituted for the parent class.
   :feedback_e: A class <code>Car</code> can't be a subclass of three different classes. Each class can only have one parent class. Also a car is not a type of door, air conditioning flag, or miles per gallon. Child classes need to be able to be substituted for the parent class.

    A car dealership needs a program to store information about the cars for sale. For each car, they want to keep track of the following information: number of doors (2 or 4), whether the car has air conditioning, and its average number of miles per gallon. Which of the following is the best design?

.. mchoice:: qooe_6
   :practice: T
   :answer_a: How the methods are implemented.
   :answer_b: The method names.
   :answer_c: The method return types.
   :answer_d: Constants
   :answer_e: The number and types of the method parameters.
   :correct: a
   :feedback_a: Only the programmer of the <code>Employee</code> class must know how the public methods work. The programmer that is using the <code>Employee</code> class can just use the public methods and not worry about how they are implemented.
   :feedback_b: The programmer who writes the methods will need to know what the names are. The programmer who will use the public methods will also need to know the names of the methods in order to invoke them.
   :feedback_c: In order to use the public methods of the <code>Employee</code> class, a programmer must know the method return types.
   :feedback_d: Constants are public fields and are meant to be used by people using a class.
   :feedback_e: In order to use the public methods of the <code>Employee</code> class, a programmer must know the number of parameters and the type for each parameter.

    A program is being written by a team of programmers. One programmer is implementing a class called ``Employee``; another programmer is writing code that will use the ``Employee`` class. Which of the following aspects of the public methods and fields of the ``Employee`` class does not need to be known by both programmers?

.. mchoice:: qooe_7
   :practice: T
   :answer_a: Create one class <code>PublishedMaterial</code> with the requested fields plus type.
   :answer_b: Create classes <code>Book</code>, <code>Movie</code>, and <code>AudioTape</code> with the requested fields.
   :answer_c: Create one class <code>BookStore</code> with the requested fields plus type.
   :answer_d: Create classes for each.
   :answer_e: Create the class <code>PublishedMaterial</code> with children classes of <code>Book</code>, <code>Movie</code>, and <code>AudioTape</code>.
   :correct: e
   :feedback_a: This will complicate the process of retrieving objects based on their type. Also if we need to add information that is specific to <code>Book</code> or <code>Movie</code> or <code>AudioTape</code> it would be best if these were subclasses of <code>PublishedMaterial</code>.
   :feedback_b: This involves writing more code than is necessary (usually people copy and paste the shared code) and makes it harder to fix errors. It would be better to put common fields and methods in the superclass <code>PublishedMaterial</code> and have <code>Book</code>, <code>Movie</code>, and <code>AudioTape</code> be subclasses.
   :feedback_c: The class name, <code>BookStore</code>, seems to imply the thing that keeps track of the store. This would be an appropriate class name for an object that handles the items in the <code>Bookstore</code>. However, for the published material, it would be better to use a superclass <code>PublishedMaterial</code> and subclasses for <code>Book</code>, <code>Movie</code> and <code>AudioTape</code>.
   :feedback_d: This is more classes than is necessary. Items such as <code>Title</code>, <code>Price</code>, <code>ID</code>, <code>Author</code> and <code>DatePublished</code> are simple variables that do not need a class of their own but should be fields in a <code>PublishedMaterial</code> superclass, with <code>Movie</code>, <code>AudioTape</code> and <code>Book</code> as subclasses.
   :feedback_e: We will need to get objects based on their type so we should create classes for <code>Book</code>, <code>Movie</code>, and <code>AudioTape</code>. They have common fields so we should put these in a common superclass <code>PublishedMaterial</code>.

   A bookstore is working on an on-line ordering system. For each type of published material (books, movies, audio tapes) they need to track the id, title, author(s), date published, and price. Which of the following would be the best design?
