Peer Instruction: Unit 6 Multiple Choice Questions (with pictures)
------------------------------------------------------------------

.. mchoice:: bs-array-06-09
    :author: Beth Simon
    :practice: T
    :answer_a: 1 - Pixel, 2 - Pixel[ ]
    :answer_b: 1 - Pixel[ ], 2 - Pixel
    :answer_c: 1 - Pixel[ ], 2 - Color
    :answer_d: 1 - Pixel, 2 - Color
    :correct: b
    :feedback_a: Incorrect! The larger highlighted section (1) represents the array Pixel[ ], which is composed of the smaller highlighted section (2), Pixel objects.
    :feedback_b: Correct! The larger highlighted section (1) represents the array Pixel[ ], which is composed of the smaller highlighted section (2), Pixel objects.
    :feedback_c: Incorrect! The larger highlighted section (1) represents the array Pixel[ ], which is composed of the smaller highlighted section (2), Pixel objects, not Color objects.
    :feedback_d: Incorrect! The larger highlighted section (1) represents the array Pixel[ ] which is composed of the smaller highlighted section (2), Pixel objects. Pixel[ ] cannot be composed of Color objects and a Pixel object is not an array so it cannot contain other objects.

    What is the type of each indicated variable?

    .. image:: https://i.postimg.cc/VNFVKKsM/lecture06-Q09.png
      :width: 400

.. mchoice:: bs-array-07-07
    :author: Beth Simon
    :practice: T
    :answer_a: A
    :answer_b: B
    :answer_c: C
    :answer_d: D
    :answer_e: None of the above
    :correct: d
    :feedback_a: Incorrect! The while loop continues to iterate as long as the index value is less than the length of the Pixel array divided by 4. For this reason, 1/4 of the pixels are modified as a result of this code. The first 1/4 of the pixels will be changed.
    :feedback_b: Incorrect! The while loop continues to iterate as long as the index value is less than the length of the Pixel array divided by 4. For this reason, 1/4 of the pixels are modified as a result of this code. The first 1/4 of the pixels will be changed.
    :feedback_c: Incorrect! The while loop continues to iterate as long as the index value is less than the length of the Pixel array divided by 4. For this reason, 1/4 of the pixels are modified as a result of this code. The first 1/4 of the pixels will be changed.
    :feedback_d: Correct! The while loop continues to iterate as long as the index value is less than the length of the Pixel array divided by 4. For this reason, 1/4 of the pixels are modified as a result of this code. The first 1/4 of the pixels will be changed.
    :feedback_e: Incorrect! One of the answers above correctly represents what pixels this code modifies. The while loop continues to iterate as long as the index value is less than the length of the Pixel array divided by 4. For this reason, 1/4 of the pixels are modified as a result of this code. The first 1/4 of the pixels will be changed.

    What pixels does this code modify (assuming Pixel objects in pixelArray follow this pattern: [(0,0), (0,1), (0,2)...])?

    .. code-block:: java

        Pixel[] pixelArray = this.getPixels();
        int value = 0;
        int index = 0;
        while (index < pixelArray.length/4)
        {
          value = pixelArray[index].getRed();
          value = (int) (value * 0.5);
          pixelArray[index].setRed(value);
        }

    .. image:: https://i.postimg.cc/KcDCVXTH/lecture07-Q07.png
      :width: 200

.. mchoice:: bs-array-09-05
    :author: Beth Simon
    :practice: T
    :answer_a: A
    :answer_b: B
    :answer_c: C
    :answer_d: None of the above.
    :correct: c
    :feedback_a: Incorrect! Each time the for loop executes, p is assigned the pixel value at the current index and q is assigned the pixel value at the next index. p's red value is replaced with q's red value and q's blue value. Then p's green value is replaced with q's green value. Each time the code runs, p is changed and q stays the same.
    :feedback_b: Incorrect! Each time the for loop executes, p is assigned the pixel value at the current index and q is assigned the pixel value at the next index. p's red value is replaced with q's red value and q's blue value. Then p's green value is replaced with q's green value. Each time the code runs, p is changed and q stays the same.
    :feedback_c: Correct! Each time the for loop executes, p is assigned the pixel value at the current index and q is assigned the pixel value at the next index. p's red value is replaced with q's red value and q's blue value. Then p's green value is replaced with q's green value. Each time the code runs, p is changed and q stays the same.
    :feedback_d: Incorrect! One of the choices above accurately represents what this code does. Each time the for loop executes, p is assigned the pixel value at the current index and q is assigned the pixel value at the next index. p's red value is replaced with q's red value and q's blue value. Then p's green value is replaced with q's green value. Each time the code runs, p is changed and q stays the same.

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

.. mchoice:: bs-array-09-06
    :author: Beth Simon
    :practice: T
    :answer_a: A
    :answer_b: B
    :answer_c: C
    :answer_d: None of the above.
    :correct: b
    :feedback_a: Incorrect! Each time the for loop executes, p is assigned the pixel value at the next index and q is assigned the pixel value at the current index. p's red value is replaced with q's red value and q's blue value. Then p's green value is replaced with q's green value. Each time the code runs, p is changed and q stays the same.
    :feedback_b: Correct! Each time the for loop executes, p is assigned the pixel value at the next index and q is assigned the pixel value at the current index. p's red value is replaced with q's red value and q's blue value. Then p's green value is replaced with q's green value. Each time the code runs, p is changed and q stays the same.
    :feedback_c: Incorrect! Each time the for loop executes, p is assigned the pixel value at the next index and q is assigned the pixel value at the current index. p's red value is replaced with q's red value and q's blue value. Then p's green value is replaced with q's green value. Each time the code runs, p is changed and q stays the same.
    :feedback_d: Incorrect! One of the choices above accurately represents what this code does. Each time the for loop executes, p is assigned the pixel value at the next index and q is assigned the pixel value at the current index. p's red value is replaced with q's red value and q's blue value. Then p's green value is replaced with q's green value. Each time the code runs, p is changed and q stays the same.

    What picture most accurately describes what this code does ?

    .. code-block:: java

        Pixel[] pixelArray = this.getPixels();
        int value = 0;
        Pixel p  = null;
        for(int index = 0; index < pixelArray.length-1; index++)
        {
          p = pixelArray[index+1];
          q = pixelArray[index];
          p.setRed(q.getRed());
          p.setBlue(q.getRed());
          p.setGreen(q.getGreen());
        }

    .. image:: https://i.postimg.cc/SRhMBw8D/lecture09-Q05.png
      :width: 400

.. mchoice:: bs-soundarray-20-05
    :author: Beth Simon
    :practice: T
    :answer_a: A
    :answer_b: B
    :answer_c: C
    :answer_d: D
    :correct: b
    :feedback_a: Incorrect! Since the sample rate is 3 Hz, there are 3 samples per second. Though there are 3 samples in this example, they do not convey a broad range of sample points.
    :feedback_b: Correct! Since the sample rate is 3 Hz, there are 3 samples per second. There are 3 samples in this example and they convey a broad range of sample points.
    :feedback_c: Incorrect! Since the sample rate is 3 Hz, there should be 3 samples per second, not 6.
    :feedback_d: Incorrect! Since the sample rate is 3 Hz, there should be 3 samples per second, not 6.

    How would we fill in this SampleSound[]?

    .. image:: https://i.postimg.cc/gcVpRjS3/lecture20-Q05.png
      :width: 500

.. mchoice:: bs-soundarray-20-09
    :author: Beth Simon
    :practice: T
    :answer_a: A
    :answer_b: B
    :answer_c: C
    :correct: b
    :feedback_a: Incorrect! This code adjusts the entire array rather than the second half.
    :feedback_b: Correct! This code adjusts the second half of the array.
    :feedback_c: Incorrect! This code adjusts the entire array rather than the second half.

    Which code which makes the following changes?

    .. code-block:: java

        String fileName = FileChooser.pickAFile();
        Sound noise = new Sound(fileName);
        SoundSample[] noiseArray = noise.getSamples();
        <<<  PICK SOME CODE  >>>


    .. image:: https://i.postimg.cc/qM1r7YqK/lecture20-Q09.png
      :width: 400

.. mchoice:: bs-soundarray-20-14
    :author: Beth Simon
    :practice: T
    :answer_a: Makes a lower pitched sound during first half of play
    :answer_b: Makes a quieter sound during first half of play
    :answer_c: Makes a lower pitched sound during second half of play
    :answer_d: Makes a quieter sound during second half of play
    :answer_e: For each SoundSample element if the array it gets the Value and stores that in an int and then sets the Value with something that is half that
    :correct: c
    :feedback_a: Incorrect! This code adjusts the second half of the sound array, not the first half.
    :feedback_b: Incorrect! This code adjusts the second half of the sound array, not the first half.
    :feedback_c: Correct! This code adjusts the second half of the array, specifically halving the pitch.
    :feedback_d: Incorrect! Although this code adjusts the second half of the array, it does not impact the loudness/quietness of the sound. Rather, it impacts the pitch.
    :feedback_e: Incorrect! This code only adjusts the second half of the array, not the whole array.

    What does this code do?

    .. code-block:: java

        String fileName = FileChooser.pickAFile();
        Sound noise = new Sound(fileName);
        SoundSample[] noiseArray = noise.getSamples();
        for (int i = noiseArray.length/2; i < noiseArray.length)
        {
          SoundSample sample = noiseArray[i];
          int foo = sample.getValue();
          sample.setValue(foo/2);
        }
