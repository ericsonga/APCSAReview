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

    What is the type of the indicated variable?

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

    What pixels does this code modify?

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

