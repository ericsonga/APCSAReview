Peer Instruction: Unit 4 Multiple Choice Questions
--------------------------------------------------------

.. mchoice:: bs-forloops-05-09
    :author: Beth Simon
    :practice: T
    :answer_a: Decreases the blue component of a picture
    :answer_b: Sets the green component of each pixel to be the same as the blue component
    :answer_c: Sets the blue component of each pixel to be the same as the green component
    :answer_d: Loops over all pixels in pixelArray. For each pO calls getGreen and stores that into value.  Then sets value into blue.
    :answer_e: None of the above.
    :correct: d
    :feedback_a: Incorrect! The blue component of the picture is not necessarily decreased in the for each loop. The for each loop loops through the Pixel objects in pixelArray, calls getGreen, stores getGreen into value, and then sets value into blue.
    :feedback_b: Incorrect! The green component is not altered. The for each loop loops through the Pixel objects in pixelArray, calls getGreen, stores getGreen into value, and then sets value into blue.
    :feedback_c: Incorrect! Although it is possible that the code is performing this action, it is more accurate that the for each loop loops through the Pixel objects in pixelArray, calls getGreen, stores getGreen into value, and then sets value into blue.
    :feedback_d: Correct! The for each loop loops through the Pixel objects in pixelArray, calls getGreen, stores getGreen into value, and then sets value into blue.
    :feedback_e: Incorrect! One of the above answers is correct. The for each loop loops through the Pixel objects in pixelArray, calls getGreen, stores getGreen into value, and then sets value into blue.

    What does this code do?

    .. code-block:: java

        Pixel[] pixelArray = this.getPixels();
        int value = 0;
        for (Pixel pO: pixelArray)
        {
            value = pO.getGreen();
            pO.setBlue(value);
        }

.. mchoice:: bs-whileloops-06-07
    :author: Beth Simon
    :practice: T
    :answer_a: A: Many, B: Many, C: 1, D: 1
    :answer_b: A: Many, B: Many, C: Many, D: 1
    :answer_c: A: 1, B: 1, C: Many, D: Many
    :answer_d: A: 1, B: 1, C: 1, D: Many
    :correct: c
    :feedback_a: Incorrect! Section A and Section B are executed only once since they are not contained in any loops. Section C and D are executed many times since they are within the while loop.
    :feedback_b: Incorrect! Section A and Section B are executed only once since they are not contained in any loops. Section C and D are executed many times since they are within the while loop.
    :feedback_c: Correct! Section A and Section B are executed only once since they are not contained in any loops. Section C and D are executed many times since they are within the while loop.
    :feedback_d: Incorrect! Section A and Section B are executed only once since they are not contained in any loops. Section C and D are executed many times since they are within the while loop.

    How many times is each set of code executed?

    .. image:: https://i.postimg.cc/rpzrHmMJ/lecture06-Q06.jpg
      :width: 400

.. mchoice:: bs-forloops-09-04
    :author: Beth Simon
    :practice: T
    :answer_a: A: 1, B: 1, C: 1, D: Many
    :answer_b: A: 1, B: Many, C: 1, D: Many
    :answer_c: A: 1, B: Many, C: Many, D: Many
    :answer_d: A: Many, B: Many, C: Many, D: Many
    :correct: c
    :feedback_a: Incorrect! The first statement in a for loop (A), where the index variable is initialized, executes only once. The condition (B), updation (C), and body (D) of the for loop execute many times.
    :feedback_b: Incorrect! The first statement in a for loop (A), where the index variable is initialized, executes only once. The condition (B), updation (C), and body (D) of the for loop execute many times.
    :feedback_c: Correct! The first statement in a for loop (A), where the index variable is initialized, executes only once. The condition (B), updation (C), and body (D) of the for loop execute many times.
    :feedback_d: Incorrect! The first statement in a for loop (A), where the index variable is initialized, executes only once. The condition (B), updation (C), and body (D) of the for loop execute many times.

    How many times is each set of code executed?

    .. image:: https://i.postimg.cc/HLSgbHZy/lecture09-Q04.png
      :width: 400

.. mchoice:: bs-forloops-09-05
    :author: Beth Simon
    :practice: T
    :answer_a: A
    :answer_b: B
    :answer_c: C
    :answer_d: None of the above.
    :correct: c
    :feedback_a: Incorrect! Each time the for loop executes, p is assigned the pixel value at the index and q is assigned the pixel value at the next index. p is set the red value of q for its red value and blue value. Then p is set the green value of q for its green value. Each time the code runs, p is changed and q stays the same.
    :feedback_b: Incorrect! Each time the for loop executes, p is assigned the pixel value at the index and q is assigned the pixel value at the next index. p is set the red value of q for its red value and blue value. Then p is set the green value of q for its green value. Each time the code runs, p is changed and q stays the same.
    :feedback_c: Correct! Each time the for loop executes, p is assigned the pixel value at the index and q is assigned the pixel value at the next index. p is set the red value of q for its red value and blue value. Then p is set the green value of q for its green value. Each time the code runs, p is changed and q stays the same.
    :feedback_d: Incorrect! One of the choices above accurately represents what this code does. Each time the for loop executes, p is assigned the pixel value at the index and q is assigned the pixel value at the next index. p is set the red value of q for its red value and blue value. Then p is set the green value of q for its green value. Each time the code runs, p is changed and q stays the same.

    What picture most accurately describes what this code does ?

    .. code-block:: java

        Pixel[] pixelArray = this.getPixels();
        int value = 0;
        Pixel p  = null;
        for(int index = 0; index < pixelArray.length-1; index++)
        {
            p = pixelArray[index];
            q = pixelArray[index+1];
            p.setRed(q.getRed());
            p.setBlue(q.getRed());
            p.setGreen(q.getGreen());
        }  

    .. image:: https://i.postimg.cc/SRhMBw8D/lecture09-Q05.png
      :width: 400



