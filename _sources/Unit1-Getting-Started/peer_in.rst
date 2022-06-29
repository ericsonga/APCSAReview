Peer Instruction: Unit 1 Multiple Choice Questions
--------------------------------------------------------

.. mchoice:: bs-printstatements-02-17
    :author: Beth Simon
    :practice: T
    :answer_a: 3, 5
    :answer_b: True, 5
    :answer_c: 3, false
    :answer_d: True, false
    :answer_e: None of the above
    :correct: b
    :feedback_a: Incorrect! The first print statement outputs whether the x value equals 3 or not. Remember, == checks for equality and = sets a variable to a value.
    :feedback_b: Correct! The first print statment outputs whether the x value equals to 3 and the second statement prints out z, the sum of x and y. 
    :feedback_c: Incorrect! The first print statement outputs whether the x value equals 3 or not. Remember, == checks for equality and = sets a value to a variable. The second print statement outputs z, which is the sum of x and y.
    :feedback_d: Incorrect! Although it is true that the first print statement outputs whether the x value equals 3 or not, the second statement prints out z, the sum of x and y. 
    :feedback_e: Incorrect! One of the answers above is true! Remember that == checks for equality and = sets a value to a variable.

    What is the output of this code?

    .. code-block:: java

        int x = 3;
        int y = 2;
        System.out.println(x == 3);
        int z = x + y;
        System.out.println(z);