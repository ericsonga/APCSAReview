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


.. mchoice:: bs-binary-05-05
    :author: Beth Simon
    :practice: T
    :answer_a: Deep Red
    :answer_b: White
    :answer_c: Black
    :answer_d: 1
    :answer_e: 255
    :correct: e
    :feedback_a: Incorrect! 11111111 means 255 in binary, not deep red. Red is (255, 0, 0) in RGB so 11111111 00000000 00000000 represents red in binary.
    :feedback_b: Incorrect! 11111111 means 255 in binary, not white. White is typically interpreted as 1 in bits. Since white is (255, 255, 255) in RGB, it would be 11111111 11111111 11111111 in binary.
    :feedback_c: Incorrect! 11111111 means 255 in binary, not black. Black is typically interpreted as 0 in bits. Since black is (0, 0, 0) in RGB, it would be 00000000 00000000 00000000 in binary.
    :feedback_d: Incorrect! 11111111 means 255 in binary. 1 in binary is 1.
    :feedback_e: Correct! 11111111 means 255 in binary.

    What does this data stored in a computer represent (in binary)?

    .. code-block:: java

        11111111

.. mchoice:: bs-chromakey-17-11
    :author: Beth Simon
    :practice: T
    :answer_a: Red - foo, Green - foo
    :answer_b: Red - bar, Green - bar
    :answer_c: Red - foo, Green - bar
    :answer_d: Red - bar, Green - foo
    :answer_e: None of the above
    :correct: c
    :feedback_a: Incorrect! In this situation, the red box is replaced by foo, which places the space image in the background. The green box is replaced by bar, which places the image of the girl in the center, at the forefront of the image.
    :feedback_b: Incorrect! In this situation, the red box is replaced by foo, which places the space image in the background. The green box is replaced by bar, which places the image of the girl in the center, at the forefront of the image.
    :feedback_c: Correct! In this situation, the red box is replaced by foo, which places the space image in the background. The green box is replaced by bar, which places the image of the girl in the center, at the forefront of the image.
    :feedback_d: Incorrect! In this situation, the red box is replaced by foo, which places the space image in the background. The green box is replaced by bar, which places the image of the girl in the center, at the forefront of the image.
    :feedback_e: Incorrect! One of the answers above is correct. In this situation, the red box is replaced by foo, which places the space image in the background. The green box is replaced by bar, which places the image of the girl in the center, at the forefront of the image.

    Chromakey is a technique in which a block of one color can be replaced by another. What goes in the result of the red box? What goes in the result of the green box?

    .. image:: https://i.postimg.cc/GprMxkrk/lecture17-Q11.png
      :width: 400

.. mchoice:: bs-chromakey-17-12
    :author: Beth Simon
    :practice: T
    :answer_a: Depends on the coordinates of x and y (not the color)
    :answer_b: Depends on the colors at coordinate x, y in foo
    :answer_c: Depends on the colors at coordinate x, y in bar
    :answer_d: Depends on the colors at coordinates x, y in foo compared to those in bar
    :correct: c
    :feedback_a: Incorrect! The colors in bar determine what part of the image you are in because bar contains the red block that is being replaced by another color.
    :feedback_b: Incorrect! The colors in bar determine what part of the image you are in because bar contains the red block that is being replaced by another color.
    :feedback_c: Correct! The colors in bar determine what part of the image you are in because bar contains the red block that is being replaced by another color.
    :feedback_d: Incorrect! The colors in bar determine what part of the image you are in because bar contains the red block that is being replaced by another color.

    Chromakey is a technique in which a block of one color can be replaced by another. How will you know if you are in the red part of the image?

    .. image:: https://i.postimg.cc/Kcw4kfrs/lecture17-Q12.png
      :width: 400

.. mchoice:: bs-soundwaves-18-15
    :author: Beth Simon
    :practice: T
    :answer_a: Have shorter frequency and stronger compressions/rarefactions
    :answer_b: Have smaller amplitude and stronger compressions/rarefactions
    :answer_c: Have higher frequency and stronger compressions/rarefactions
    :answer_d: Have larger amplitude and stronger compressions/rarefactions
    :answer_e: None of the above
    :correct: d
    :feedback_a: Incorrect! Frequency is not impacted by feeble or loud sound. A louder sound equates to a larger amplitude and stronger compressions/rarefactions.
    :feedback_b: Incorrect! A feeble sounds has a smaller ampltitude. A louder sound equates to a larger amplitude and stronger compressions/rarefactions.
    :feedback_c: Incorrect! Frequency is not impacted by feeble or loud sound. A louder sound equates to a larger amplitude and stronger compressions/rarefactions.
    :feedback_d: Correct! A louder sound equates to a larger amplitude and stronger compressions/rarefactions.
    :feedback_e: Incorrect! One of the answers above are correct.

    Soundwaves have varying frequencies, amplitudes, pitches, and compressions/rarefactions. If the following sound were modified to be louder it would

    .. image:: https://i.postimg.cc/SRDYcw6M/lecture18-Q15.png
      :width: 400

.. mchoice:: bs-soundwaves-18-16
    :author: Beth Simon
    :practice: T
    :answer_a: A
    :answer_b: B
    :answer_c: C
    :answer_d: D
    :correct: a
    :feedback_a: Correct! A higher pitch causes the frequency to increase.
    :feedback_b: Incorrect! A higher pitch causes the frequency to increase. It does not cause the amplitude to change.
    :feedback_c: Incorrect! A higher pitch causes the frequency to increase. It does not remain the same.
    :feedback_d: Incorrect! A higher pitch causes the frequency to increase. It does not alter the shape of the sound wave.

    Soundwaves have varying frequencies, amplitudes, pitches, and compressions/rarefactions. If the following sound was modified to have a higher pitch it would look like which of the following options:

    .. image:: https://i.postimg.cc/SRDYcw6M/lecture18-Q15.png
      :width: 400

    .. image:: https://i.postimg.cc/FHZ3jCvm/lecture18-Q16.png
      :width: 400
