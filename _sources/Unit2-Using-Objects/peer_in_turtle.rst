Peer Instruction: Unit 2 Turtle Multiple Choice Questions
----------------------------------------------------------

.. mchoice:: bs-objectsandclasses-02-19
    :author: Beth Simon
    :practice: T
    :answer_a: Type, method/message name, parameter list
    :answer_b: Class, method/message name, parameter list
    :answer_c: Object, method/message name, parameter list
    :correct: c
    :feedback_a: Incorrect! Turtle is a "type" (similar to int or double types) but turtle1 is an object. An object is an instance of a class. In this case, turtle1 is an instance of the Turtle class.
    :feedback_b: Incorrect! Turtle is the specific class "type" that turtle1 is. turtle1 itself is an object. An object is an instance of a class. In this case, turtle1 is an instance of the Turtle class.
    :feedback_c: Correct! turtle1 is a Turtle object. An object is an instance of a class. In this case, turtle1 is an instance of the Turtle class.

    What are the components of the second line of code?

    .. code-block:: java

        Turtle turtle1 = new Turtle();
        turtle1.turn(-45);

.. mchoice:: bs-methods-03-07
    :author: Beth Simon
    :practice: T
    :answer_a: Nothing is incorrect
    :answer_b: Return type is wrong
    :answer_c: Parameter is used incorrectly
    :answer_d: turnLeft should be turnRight
    :answer_e: Use of turtle1 is incorrect
    :correct: b, c, e
    :feedback_a: Incorrect! There are multiple places where the code is incorrect.
    :feedback_b: Correct! This is a method of the Turtle class. It should have a return type of void. It doesn’t produce a number – it causes an action to happen.
    :feedback_c: Correct! The bethsSquare parameter "size" is not used in the method. Perhaps it could replace the "100" in the method calls (ex. turtle1.forward(size)).
    :feedback_d: Incorrect! Although it is true that you could use turnRight instead of turnLeft, this is not necessarily an incorrect aspect of the code because turnLeft still produces the expected response.
    :feedback_e: Correct! Because this is a method of the turtle class, it is callable by any turtle object. Whichever turtle calls it is the turtle that should be controlled (turned, moved forward). The object ``this`` can be used instead of ``turtle1`` to refer to the object performing the method.

    Why is this code incorrect? Assume this method is a method of the Turtle class (There are multiple correct answers)

    .. code-block:: java

        public bethsSquare(int size) {
            turtle1.turnLeft();
            turtle1.forward(100);
            turtle1.turnLeft();
            turtle1.forward(100);
            turtle1.turnLeft();
            turtle1.forward(100);
            turtle1.turnLeft();
            turtle1.forward(100);
        }

.. mchoice:: bs-methods-03-10
   :author: Beth Simon
   :practice: T

   What’s the right way to call the bethsSquare method to draw a square (void method that takes one parameter)?

   -
       ::

         World w = new World();
         Turtle t = new Turtle(10,10, w);
         t = bethsSquare(50);

       -   Incorrect! bethsSquare is a void method, and it doesn't return anything, so t should not equal bethsSquare(50).

   -
       ::

         World w = new World();
         Turtle t = new Turtle(10,10, w);
         t.bethsSquare();

       -   Incorrect! bethsSquare has a parameter which is not accounted for.

   -
       ::

         World w = new World();
         Turtle t = new Turtle(10,10, w);
         t.bethssquare();

       - Incorrect! bethsSquare has a parameter which is not accounted for, and the method call is spelled with a lowercase 's' instead of an uppercase 's.'

   -
       ::

         World w = new World();
         Turtle t = new Turtle(10,10, w);
         t = bethssquare(50);

       - Incorrect! bethsSquare is a void method, and it doesn't return anything, so t should not equal bethsSquare(50). Additionally, the method call is spelled with a lowercase 's' instead of an uppercase 's.'

   -   None of the above

       + Correct! The correct "call" to the method to draw a square would be t.bethSquare(50), accounting for the fact that that the method is void, the correct spelling of the method, and the parameter.

.. mchoice:: bs-methods-03-17
    :author: Beth Simon
    :practice: T
    :answer_a: main, main, Picture, String
    :answer_b: void, void, Picture, String
    :answer_c: Turtle, Turtle, Picture, String
    :answer_d: void, void, String, Picture
    :answer_e: None of the above
    :correct: e
    :feedback_a: Incorrect! In the Turtle class, turnLeft returns void. getName returns a String. The pickAFile method returns the name of the file, a String. new Picture() calls the constructor to make a new Picture object, so it returns an object of type Picture.
    :feedback_b: Inorrect! In the Turtle class, getName returns a String. The pickAFile method returns the name of the file, a String. new Picture() calls the constructor to make a new Picture object, so it returns an object of type Picture.
    :feedback_c: Incorrect! In the Turtle class, turnLeft returns void. getName returns a String. The pickAFile method returns the name of the file, a String. new Picture() calls the constructor to make a new Picture object, so it returns an object of type Picture.
    :feedback_d: getName returns a String rather than void.
    :feedback_e: Correct! In the Turtle class, turnLeft returns void. getName returns a String. The pickAFile method returns the name of the file, a String. new Picture() calls the constructor to make a new Picture object, so it returns an object of type Picture.


    What types are returned by these method calls?

    .. code-block:: java

         // 1)
         turtle1.turnLeft();
         // 2)
         turtle1.getName();
         // 3)
         FileChooser.pickAFile();
         // 4)
         new Picture();
