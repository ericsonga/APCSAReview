Peer Instruction: Unit 3 Multiple Choice Questions
--------------------------------------------------------

.. mchoice:: bs-ifstatements-15-07
    :author: Beth Simon
    :practice: T
    :answer_a: A
    :answer_b: B
    :answer_c: C
    :answer_d: D
    :answer_e: E
    :correct: c
    :feedback_a: Incorrect! The code compares the top pixel (topP) and the pixel below it (botP). If they are similar, then the top pixel becomes white; else, it becomes black. Since each vertical column is composed of the same color, the pixels on top and below will always be the same color, turning all pixels white. The lines between the different colors are still composed of the same color vertically, so they wouldn't turn black.
    :feedback_b: Incorrect! The code compares the top pixel (topP) and the pixel below it (botP). If they are similar, then the top pixel becomes white; else, it becomes black. Since each vertical column is composed of the same color, the pixels on top and below will always be the same color, turning all pixels white.
    :feedback_c: Correct! The code compares the top pixel (topP) and the pixel below it (botP). If they are similar, then the top pixel becomes white; else, it becomes black. Since each vertical column is composed of the same color, the pixels on top and below will always be the same color, turning all pixels white.
    :feedback_d: Incorrect! The code compares the top pixel (topP) and the pixel below it (botP). If they are similar, then the top pixel becomes white; else, it becomes black. Since each vertical column is composed of the same color, the pixels on top and below will always be the same color, turning all pixels white.
    :feedback_e: Incorrect! One of the answers above represents the code accurately. The code compares the top pixel (topP) and the pixel below it (botP). If they are similar, then the top pixel becomes white; else, it becomes black. Since each vertical column is composed of the same color, the pixels on top and below will always be the same color, turning all pixels white.

    What’s the result of running this pixel-adjusting code on this green, red, and purple input?

    .. code-block:: java

        //Inside loop over all pixels
        topP = this.getPixel(x,y);
        botP = this.getPixel(x,y+1);

        topAvg = topP.getAverage();
        botAvg = botP.getAverage();

        if (Math.abs(topAv – botAv) < 10)
        {
            topP.setColor(Color.WHITE);
        }
        else
        {
            topP.setColor(Color.BLACK);
        }

    .. image:: https://i.postimg.cc/85NS2JGG/lecture15-Q07.png
      :width: 100

    .. image:: https://i.postimg.cc/xTrWhN34/lecture15-Q07-2.png
      :width: 400
