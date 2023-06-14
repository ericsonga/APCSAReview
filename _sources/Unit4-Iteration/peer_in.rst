Peer Instruction: Unit 4 Multiple Choice Questions
--------------------------------------------------------

.. mchoice:: bs-forloops-05-09
    :author: Beth Simon
    :practice: T
    :answer_a: Decreases the blue component of a picture
    :answer_b: Sets the green component of each pixel to be the same as the blue component
    :answer_c: Sets the blue component of each pixel to be the same as the green component
    :answer_d: Loops over all pixels in pixelArray. Each pO calls getGreen and stores that into value. Then sets value into blue.
    :answer_e: None of the above.
    :correct: d
    :feedback_a: Incorrect! The blue component of the picture is not necessarily decreased in the for each loop. The for each loop loops through the Pixel objects in pixelArray, calls getGreen, stores getGreen into value, and then sets value into blue.
    :feedback_b: Incorrect! The green component is not altered. The for each loop loops through the Pixel objects in pixelArray, calls getGreen, stores getGreen into value, and then sets value into blue.
    :feedback_c: Incorrect! Although it is possible that the code is performing this action, it is more accurate that the for each loop loops through the Pixel objects in pixelArray, calls getGreen, stores getGreen into value, and then sets value into blue.
    :feedback_d: Correct! The for each loop loops through the Pixel objects in pixelArray, calls getGreen, stores getGreen into value, and then sets value into blue.
    :feedback_e: Incorrect! One of the above answers is correct. The for each loop loops through the Pixel objects in pixelArray, calls getGreen, stores getGreen into value, and then sets value into blue.

    Which statement best describes what this code does?

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

.. mchoice:: bs-nestedloops-10-04
    :author: Beth Simon
    :practice: T
    :answer_a: A
    :answer_b: B
    :answer_c: C
    :answer_d: D
    :correct: c
    :feedback_a: Incorrect! In pixels, the grid system is used. The width represents the x-axis and the height represents the y-axis.The outer loop iterates through the index values of the width, while the inner loop iterates through the index values of the height. The first pass of the outer loop (width) triggers all of the passes of the inner loop (height). For this reason, all of the heights (inner loop) for a given width (outer loop) are changed before moving to the next iteration of the outer loop. This motion goes from top to bottom moving rightward. In pixels, the grid system is used.
    :feedback_b: Incorrect! In pixels, the grid system is used. The width represents the x-axis and the height represents the y-axis. Remember that (0,0) for pixels starts at the top left. The outer loop iterates through the index values of the width, while the inner loop iterates through the index values of the height. The first pass of the outer loop (width) triggers all of the passes of the inner loop (height). For this reason, all of the heights (inner loop) for a given width (outer loop) are changed before moving to the next iteration of the outer loop. This motion goes from top to bottom moving rightward.
    :feedback_c: Correct! In pixels, the grid system is used. The width represents the x-axis and the height represents the y-axis. The outer loop iterates through the index values of the width, while the inner loop iterates through the index values of the height. The first pass of the outer loop (width) triggers all of the passes of the inner loop (height). For this reason, all of the heights (inner loop) for a given width (outer loop) are changed before moving to the next iteration of the outer loop. This motion goes from top to bottom moving rightward.
    :feedback_d: Incorrect! In pixels, the grid system is used. The width represents the x-axis and the height represents the y-axis. Remember that (0,0) for pixels starts at the top left. The outer loop iterates through the index values of the width, while the inner loop iterates through the index values of the height. The first pass of the outer loop (width) triggers all of the passes of the inner loop (height). For this reason, all of the heights (inner loop) for a given width (outer loop) are changed before moving to the next iteration of the outer loop. This motion goes from top to bottom moving rightward.

    What picture most accurately describes what this code does?

    .. code-block:: java

        Pixel p;
        for (int foo = 0; foo < getWidth();  bar++)
        {
            for (int bar = 0; bar < getHeight(); foo++)
            {
                p = getPixel(foo, bar);
                p.setColor(Color.BLACK);
            }
        }

    .. image:: https://i.postimg.cc/50RwmVh5/lecture10-Q04.png
      :width: 400

.. mchoice:: bs-nestedloops-10-05
    :author: Beth Simon
    :practice: T
    :answer_a: A
    :answer_b: B
    :answer_c: C
    :answer_d: D
    :correct: a
    :feedback_a: Correct! In pixels, the grid system is used. The width represents the x-axis and the height represents the y-axis. The outer loop iterates through the index values of the height, while the inner loop iterates through the index values of the width. The first pass of the outer loop (height) triggers all of the passes of the inner loop (width). For this reason, all of the widths (inner loop) for a given height (outer loop) are changed before moving to the next iteration of the outer loop. This motion goes from right to left, downward.
    :feedback_b: Incorrect! In pixels, the grid system is used. The width represents the x-axis and the height represents the y-axis. Remember that (0,0) for pixels starts at the top left. The outer loop iterates through the index values of the height, while the inner loop iterates through the index values of the width. The first pass of the outer loop (height) triggers all of the passes of the inner loop (width). For this reason, all of the widths (inner loop) for a given height (outer loop) are changed before moving to the next iteration of the outer loop. This motion goes from right to left, downward.
    :feedback_c: Incorrect! In pixels, the grid system is used. The width represents the x-axis and the height represents the y-axis.The outer loop iterates through the index values of the height, while the inner loop iterates through the index values of the width. The first pass of the outer loop (height) triggers all of the passes of the inner loop (width). For this reason, all of the widths (inner loop) for a given height (outer loop) are changed before moving to the next iteration of the outer loop. This motion goes from right to left, downward.
    :feedback_d: Incorrect! In pixels, the grid system is used. The width represents the x-axis and the height represents the y-axis. Remember that (0,0) for pixels starts at the top left. The outer loop iterates through the index values of the height, while the inner loop iterates through the index values of the width. The first pass of the outer loop (height) triggers all of the passes of the inner loop (width). For this reason, all of the widths (inner loop) for a given height (outer loop) are changed before moving to the next iteration of the outer loop. This motion goes from right to left, downward.

    What picture most accurately describes what this code does?

    .. code-block:: java

        Pixel p;
        for (int bar = 0; bar < getHeight();  bar++)
        {
            for (int foo = 0; foo < getWidth(); foo++)
            {
                p = getPixel(foo, bar);
                p.setColor(Color.BLACK);
            }
        }

    .. image:: https://i.postimg.cc/50RwmVh5/lecture10-Q04.png
      :width: 400

.. mchoice:: bs-nestedloops-11-10
    :author: Beth Simon
    :practice: T
    :answer_a: A
    :answer_b: B
    :answer_c: C
    :answer_d: D
    :correct: b
    :feedback_a: Incorrect! In the first iteration, x and y are both 0 so leftP is (0,0), and rightP is (getWidth - 1 - x), which is 99 (100 - 1 - 0). In the second iteration, x is 1 and y is still 0, so leftP is (1,0) and rightP is (getWidth - 1 - x), which is 98 (100 - 1 - 1). In the third iteration, x is 2 and y is 0 so leftP is (2,0) and rightP is (getWidth - 1 - 2), which is 97 (100 - 1 - 2).
    :feedback_b: Correct! In the first iteration, x and y are both 0 so leftP is (0,0), and rightP is (getWidth - 1 - x), which is 99 (100 - 1 - 0). In the second iteration, x is 1 and y is still 0, so leftP is (1,0) and rightP is (getWidth - 1 - x), which is 98 (100 - 1 - 1). In the third iteration, x is 2 and y is 0 so leftP is (2,0) and rightP is (getWidth - 1 - 2), which is 97 (100 - 1 - 2).
    :feedback_c: Incorrect! In the first iteration, x and y are both 0 so leftP is (0,0), and rightP is (getWidth - 1 - x), which is 99 (100 - 1 - 0). In the second iteration, x is 1 and y is still 0, so leftP is (1,0) and rightP is (getWidth - 1 - x), which is 98 (100 - 1 - 1). In the third iteration, x is 2 and y is 0 so leftP is (2,0) and rightP is (getWidth - 1 - 2), which is 97 (100 - 1 - 2).
    :feedback_d: Incorrect! In the first iteration, x and y are both 0 so leftP is (0,0), and rightP is (getWidth - 1 - x), which is 99 (100 - 1 - 0). In the second iteration, x is 1 and y is still 0, so leftP is (1,0) and rightP is (getWidth - 1 - x), which is 98 (100 - 1 - 1). In the third iteration, x is 2 and y is 0 so leftP is (2,0) and rightP is (getWidth - 1 - 2), which is 97 (100 - 1 - 2).

    What are the parameter values we use to index leftPixel and rightPixel for the first three iterations of the loop? (assume picture has a height = 50 and width = 100)

    .. code-block:: java

        int mirrorPt = getWidth()/2;
        Pixel leftP, rightP;
        for (int y = 0; y < getHeight);  y++)
        {
            for (int x = 0; x < mirrorPt; x++)
            {
                leftP = getPixel(x,y);
                rightP = getPixel(getWidth()-1-x,y);
                rightP.setColor(leftP.getColor());
            }
        }

    .. image:: https://i.postimg.cc/9Qc5jQPJ/lecture11-Q10.png
      :width: 400


