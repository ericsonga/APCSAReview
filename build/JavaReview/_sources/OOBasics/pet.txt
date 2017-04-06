.. qnum::
   :prefix:  10-19-
   :start: 1

Free Response - Pet
===================

..	index::
	single: pet
    single: free response

The following is a free response question from 2004.  It was question 2 on the exam.  You can see all the free response questions from past exams at https://apstudent.collegeboard.org/apcourse/ap-computer-science-a/exam-practice.

**Question 2.**  Consider the hierarchy of classes shown in the following diagram.

.. figure:: Figures/petDiagram.png
    :width: 228px
    :align: center
    :figclass: align-center

Note that a *Cat* "is-a" *Pet*, a *Dog* "is-a" *Pet*, and a *LoudDog* "is-a" *Dog*.

The class *Pet* is specified as an abstract class as shown in the following declaration. Each *Pet* has a name
that is specified when it is constructed.

.. code-block:: java

   public abstract class Pet
   {
    private String myName;

    public Pet(String name)
    { myName = name; }

    public String getName()
    { return myName; }

    public abstract String speak();
   }

The subclass *Dog* has the partial class declaration shown below.

.. code-block:: java

   public class Dog extends Pet
   {
    public Dog(String name)
    { /* implementation not shown */ }

    public String speak()
    { /* implementation not shown */ }
   }

Solve Part A
------------

(a) Given the class hierarchy shown above, write a complete class declaration for the class *Cat*, including implementations of its constructor and method(s). The *Cat* method *speak* returns "meow" when it is invoked.

.. activecode:: FRQPetA
   :language: java

   // Declare class
   class
   {
    // Declare constructor
    ()
    {}

    // Override speak method
    ()
    {}
   }

Solve Part B
------------

(b) Assume that class *Dog* has been declared as shown at the beginning of the question. If the *String* `dog-sound` is returned by the *Dog* method *speak*, then the *LoudDog* method *speak* returns a *String* containing `dog-sound` repeated two times.

Given the class hierarchy shown previously, write a complete class declaration for the class *LoudDog*, including implementation of its constructor and method(s).

.. activecode:: FRQPetB
   :language: java

   // Declare class
   class
   {
    // Declare constructor
    ()
    {}

    // Override speak
    ()
    {}
   }

Solve Part C
------------

(c) Consider the following partial declaration of class *Kennel*.

.. code-block:: java

   public class Kennel
   {
    private ArrayList petList;  // all elements are references
                                // to Pet objects

    // postcondition: for each Pet in the kennel, its name followed
    //                by the result of a call to its speak method
    //                has been printed, one line per Pet
    public void allSpeak()
    { /* to be implemented in this part */ }

    // ... constructor and other methods not shown
   }

Write the *Kennel* method *allSpeak*. For each *Pet* in the kennel, *allSpeak* prints a line with the name of the *Pet* followed by the result of a call to its *speak* method.

In writing *allSpeak*, you may use any of the methods defined for any of the classes specified for this problem. Assume that these methods work as specified, regardless of what you wrote in parts (a) and (b). Solutions that reimplement functionality provided by these methods, rather than invoking these methods, will not receive full credit.

Complete method *allSpeak* below.

.. activecode:: FRQPetC
   :language: java

   // postcondition: for each Pet in the kennel, its name followed
   //                by the result of a call to its speak method
   //                has been printed, one line per Pet
   public void allSpeak()
