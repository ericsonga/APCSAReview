.. qnum::
   :prefix: 8-10-
   :start: 1

Peer Instruction: 2D Arrays Multiple Choice Questions
-----------------------------------------------------

.. mchoice:: bs-2d-arrays-7-6
   :author: Beth Simon
   :practice: T
   :answer_a: Removes all red from the picture
   :answer_b: Changes half of the red pixels to not be red
   :answer_c: Reduces the red component of half of the pixels
   :answer_d: Reduces the red component of each pixel to half of its original value
   :answer_e: Sets the red component of each pixel to 0.5
   :correct: d
   :feedback_a: Incorrect. While this code does modify the red value of each pixel, it does not completely remove it
   :feedback_b: Incorrect. Based on the while loop, this code modifies every pixel, not just half
   :feedback_c: Incorrect. Based on the while loop, this code modifies every pixel, not just half
   :feedback_d: Correct. This code takes the original red value of a pixel, halves it, and then sets the red value of this pixel to our new value
   :feedback_e: Incorrect. The value of each color must be an int, which 0.5 is not

    What does this code do?

    .. code-block:: java

        Pixel[] pixelArray = this.getPixels();
        int value = 0;
        Pixel p = null;
        int index = 0;
        while (index < pixelArray.length)
        {
            value = pixelArray[index].getRed();
            value = (int) (value * 0.5);
            pixelArray[index].setRed(value);
        }

.. mchoice:: bs-2d-arrays-8-6
   :author: Beth Simon
   :practice: T
   :answer_a: Location A
   :answer_b: Location B
   :answer_c: Location C
   :answer_d: Location D
   :correct: d
   :feedback_a: Incorrect. This statement will only print once, and most of the code has yet to be called
   :feedback_b: Incorrect. This would result in the print statement being run in a loop, instead of the contents inside the curly braces
   :feedback_c: Incorrect. This way, the statement will print new information each time the code is run
   :feedback_d: Correct. Location D allows you to assess and print the all varibales used in this code block. This gives you the most data, and makes it the optiomal location.

    For debugging, where is the best place to put a print statement?

    .. code-block:: java

        Pixel[] pixelArray = this.getPixels();
        int value = 0;
        Pixel p  = null;
        int index = 0;
        //Location A
        while (index < pixelArray.length) //Location B
        {
            //Location C
            value = pixelArray[index].getRed();
            value = (int) (value * 0.5);
            pixelArray[index].setRed(value);
            index = index + 1;
            //Location D
        }

.. mchoice:: bs-2d-arrays-8-7
   :author: Beth Simon
   :practice: T
   :answer_a: It has a compiler error
   :answer_b: It sets the red value to be the same as blue
   :answer_c: It sets the blue value to be the same as red
   :answer_d: It really does swap
   :correct: b
   :feedback_a: Incorrect. This code can successfully compile.
   :feedback_b: Correct. The variable value is set to pix.getBlue() when both .setRed() and .setBlue() are called.
   :feedback_c: Incorrect. The variable value is set to pix.getBlue() when pix.setRed(value) is called.
   :feedback_d: Incorrect. Look closer at the variable value. Do you see where it is reassigned?

    This code should swap the red and blue components at each pixel, what does it actually do?

    .. code-block:: java

        Pixel[] pixelArray = this.getPixels();
        int value = 0;
        int index = 0;
        while (index < pixelArray.length)
        {
            Pixel pix = pixelArray[index];
            value = pix.getRed();
            value = pix.getBlue();
            pix.setRed(value);
            pixelArray[index].setBlue(value);
            index++;
        }

.. mchoice:: bs-2d-arrays-8-9
   :author: Beth Simon
   :practice: T
   :answer_a:
    value = pix.getRed();
    pix.setBlue(pix.getRed());
    pix.setRed(value);
   :answer_b:
    value = pix.getRed();
    pix.setBlue(value);
    pix.setRed(pix.getBlue());
   :answer_c:
    value = pix.getRed();
    pix.setRed(pix.getBlue());
    pix.setBlue(value);
   :answer_d:
    value = pix.getRed();
    pix.setRed(value);
    pix.setBlue(pix.getRed());
   :correct: c
   :feedback_a: Incorrect. The value of the blue component is successfully changed, however the value of component is not.
   :feedback_b: Incorrect. The value of the blue component is successfully changed, however the value of component is not.
   :feedback_c: Correct. In this case, "value" is the temporary variable we use to remember the original value of pix.getRed(), even after the red component is changed.
   :feedback_d: Incorrect. If value is set to pix.getRed(), the call to pix.setRed(value) will leave the red component unchanged.

    Which code chunk should be inserted into the marked location to swap the red and blue components at each pixel?

    .. code-block:: java

        Pixel[] pixelArray = this.getPixels();
        int value = 0;
        int index = 0;
        while (index < pixelArray.length)
        {
            Pixel pix = pixelArray[index];
            **CODE GOES HERE**
            index++;
        }

.. mchoice:: bs-2d-arrays-9-7
   :author: Beth Simon
   :practice: T
   :answer_a: It tries to access pixelArray[-1]
   :answer_b: It tries to access pixelArray[0]
   :answer_c: It tries to access pixelArray[pixelArray.length]
   :answer_d: It tries to access pixelArray[pixelArray.length + 1]
   :answer_e: None of the above
   :correct: c
   :feedback_a: Incorrect. Even though this would throw an error, pixelArray[-1] is never called.
   :feedback_b: Incorrect. This code does try to access pixelArray[0], but due to zero-based indexing, this is not an error.
   :feedback_c: Correct. In the final iteration of the for loop, the value of "index" is pixelArray.length - 1. So, when "q" is assigned to pixelArray[index + 1], the code tries to access pixelArray[pixelArray.length], which does not exist.
   :feedback_d: Incorrect. Due to the parameters in the for loop, the largest value index can take on is pixelArray.length - 1, and thus pixelArray[index+1] is never called.
   :feedback_e: Incorrect. Consider the range of values index can have, and then examine the line where q is assigned.

    Why does this code have an error?

    .. code-block:: java

        Pixel[] pixelArray = this.getPixels();
        Pixel p, q;
        for(int index = 0; index < pixelArray.length; index++)
        {
            p = pixelArray[index];
            q = pixelArray[index+1];
            p.setRed(q.getRed());
            p.setBlue(q.getRed());
            p.setGreen(q.getGreen());
        }

.. mchoice:: bs-2d-arrays-10-7
   :author: Beth Simon
   :practice: T
   :answer_a: It doesn’t, this loops across rows, going down
   :answer_b: It doesn’t this loops down columns, going right
   :answer_c: It tries to index a pixel off the end of a row (foo value too big)
   :answer_d: It tries to index a pixel off the end of a column (bar value too big)
   :correct: b
   :feedback_a: Incorrect. For each instance of the first for loop, every pixel of a given column is set to black.
   :feedback_b: Correct. For each instance of the first for loop, every pixel of a given column is set to black, moving downwards.
   :feedback_c: Incorrect. The largest value of foo called is getHeight() - 1, which is an accessible value.
   :feedback_d: Incorrect. The largest value of bar called is getWidth() - 1, which is an accessible value.

    Why does this code have an error?

    .. code-block:: java

        //A method in Picture.java
        Pixel p;
        for (int bar = 0; bar < getWidth(); bar++)
        {
            for (int foo = 0; foo < getHeight(); foo++)
            {
                p = getPixel(foo, bar);
                p.setColor(Color.BLACK);
            }
        }

.. mchoice:: bs-2d-arrays-11-9
   :author: Beth Simon
   :practice: T
   :answer_a: y increases faster than x
   :answer_b: x increases faster than y
   :answer_c: x and y increase together, in step
   :answer_d: x increases for a while, then y increases once, then x restarts and increases again
   :answer_e: y increases for a while, then x increases once, then y restarts and increases again
   :correct: d
   :feedback_a: Incorrect. For each increase of the y value by 1, the x value can increase by more than one.
   :feedback_b: Inorrect. Although this stament alone is true, consider the pattern it follows due to the for loops.
   :feedback_c: Incorrect. Consider the nesting. For each increase of the y value by 1, the x value can increase by more than one.
   :feedback_d: Correct. The first loop increases the value of y by 1. Then the x value increases to the "mirrorPT" value. Then the x value is reset and the first loop runs again.
   :feedback_e: Incorrect. Consider the nesting. For each increase of the y value by 1, the x value is reset.

    Which of the following is the best answer?

    .. code-block:: java

        //Code to mirror around the vertical axis
        int mirrorPt = getWidth()/2;
        Pixel leftP, rightP;
        for (int y = 0; y < getHeight); y++)
        {
            for (int x = 0; x < mirrorPt; x++)
            {
                leftP = getPixel(x,y);
                rightP = getPixel(getWidth()-1-x,y);
                rightP.setColor(leftP.getColor());
            }
        }

.. mchoice:: bs-2d-arrays-11-15
   :author: Beth Simon
   :practice: T
   :answer_a: Copies top half into bottom half not mirrored
   :answer_b: Copies left half into right half not mirrored
   :answer_c: Mirrors around vertical axis, left into right
   :answer_d: Mirrors around horizontal axis, top into bottom
   :answer_e: Some other bizarre transformation
   :correct: c
   :feedback_a: Incorrect. Since the x parameter increases as countingDown increases (also used as an x paramter), there transformation involves mirroring.
   :feedback_b: Incorrect. Since the x parameter increases as countingDown increases (also used as an x paramter), there transformation involves mirroring.
   :feedback_c: Correct. There is mirroring occurring, and this happens within the second for loop. The values are changing around one given x value, so the transformation is around a vertical axis.
   :feedback_d: Incorrect. There is mirroring occurring, and this happens within the second for loop. If the values are changing around one given x value, which axis are they transforming around?
   :feedback_e: Incorrect. Examine the options again. Hint: There is mirroring occurring in the second for loop.

    What does this code do?

    .. code-block:: java

        int magic = getWidth()/2;
        Pixel foo, bar;
        for(int y = 0; y < getHeight(); y++)
        {
            int countingDown = getWidth()-1;
            for(int x = 0; x < magic; x++)
            {
                foo = getPixel(x,y);
                bar = getPixel(countingDown,y);
                bar.setColor(foo.getColor());
                countingDown--;
            }
        }

.. mchoice:: bs-2d-arrays-12-6
   :author: Beth Simon
   :practice: T
   :answer_a: 10, 4
   :answer_b: 9, 5
   :answer_c: 4, 10
   :answer_d: 5, 9
   :correct: c
   :feedback_a: Incorrect. You have the values correct, but consider which dimensions the x and y correspond to.
   :feedback_b: Incorrect. Consider how many times the first for loop runs. How many values are included in the span of 40 to <50 ?
   :feedback_c: Correct. The first for loop spans the range of 40-49 (10 values), which correspond to the height. The second for loop spans the range of 1-4 (4 values), and corresponds to the height.
   :feedback_d: Incorrect. Consider how many times the first for loop runs. How many values are included in the span of 40 to <50 ?

    This code makes a red box of size (width, height)

    .. code-block:: java

        Pixel foo;
        for(int y = 40; y < 50; y++)
        {
            for(int x = 1 ; x < 5; x++)
            {
                foo = getPixel(x,y);
                foo.setColor(Color.RED);
            }
        }

.. mchoice:: bs-2d-arrays-12-7
   :author: Beth Simon
   :practice: T
   :answer_a: 11, 5
   :answer_b: 10, 5
   :answer_c: 5, 11
   :answer_d: 5, 10
   :correct: c
   :feedback_a: Incorrect. You have the values correct, but consider which dimensions the x and y correspond to.
   :feedback_b: Incorrect. Consider how many times the first for loop runs. How many values are included in the span of 40 to 50 inclusive?
   :feedback_c: Correct. The first for loop spans the range of 40-50 (11 values), which correspond to the height. The second for loop spans the range of 1-5 (5 values), and corresponds to the height.
   :feedback_d: Incorrect. Consider how many times the first for loop runs. How many values are included in the span of 40 to 50 inclusive?

    This code makes a red box of size (width, height)

    .. code-block:: java

        Pixel foo;
        for(int y = 40; y <= 50; y++)
        {
            for(int x = 1 ; x <= 5; x++)
            {
                foo = getPixel(x,y);
                foo.setColor(Color.RED);
            }
        }

.. mchoice:: bs-2d-arrays-12-8
   :author: Beth Simon
   :practice: T
   :answer_a: for (int w = 0; w &lt;= x; w++)   for (int h = 0; h &lt;= y; h++)
   :answer_b: for (int w = 10; w &lt; x +10; w++)   for (int h = 20; h &lt; y + 20; h++)
   :answer_c: for (int w = 0; w &lt; x; w++)    for (int h = 0; h &lt; y; h++)
   :answer_d:  for (int w = 10; w &lt;= x+10; w++) for (int h = 20; h &lt;= y+20; h++)
   :correct: c
   :feedback_a: Incorrect. The range from 0 to x inclusive has has a total size of x+1. In addition, the call to getPixel(w,h) could be out of range. Think about our use of zero-based indexing.
   :feedback_b: Incorrect. Even though the range from 10 to x+10 does have a size of x, the call to getPixel(w,h) could fall out of range if x + 10 is greater than the width of the drawing area.
   :feedback_c: Correct. The range of 0 to <x has a total size of x. By starting the w and h variables at 0, we can ensure that we will not go out of bounds by calling getPixel(w,h) as long as x and y are valid values.
   :feedback_d: Incorrect. The range from 10 to x inclusive has has a total size of x+1. In addition, the call to getPixel(w,h) could be out of range. Think about our use of zero-based indexing.

   What are the correct loop headers to make a black box of width x and height y?

    .. code-block:: java

        public void foo(int x, int y)
        {
            Pixel foo;
            **LOOP HEADER 1**
            {
                **LOOP HEADER 2**
                {
                    foo = getPixel(w,h);
                    foo.setColor(Color.BLACK);
                }
            }
        }

.. mchoice:: bs-2d-arrays-14-5
   :practice: T
   :answer_a: 1
   :answer_b: this.getWidth() times
   :answer_c: this.getHeight() times
   :answer_d: getHeight() * getWidth() times
   :answer_e: getHeight()/2 * getWidth() times
   :correct: d
   :feedback_a: Incorrect. The value of pix is reassigned every time the innermost body of the for loops is run.
   :feedback_b: Incorrect. The value of pix is reassigned every time the innermost body of the for loops is run. Everytime the inner loop runs, it does run this.getWidth() times, however this occurs more than once.
   :feedback_c: Incorrect. The value of pix is reassigned every time the innermost body of the for loops is run. The outer loop does run this.getHeight() times, however this answer disregards the inner for loop.
   :feedback_d: Correct. The outer loop executes this.getHeight() times, and each execution of this loop results in the inner for loop running this.getWidth() times.
   :feedback_e: Incorrect. The value of pix is reassigned every time the innermost body of the for loops is run. Examine how many respective times the inner loop runs, and how this is affecting by the running of the outer for loop.

    How many times is the variable pix assigned a value?

    .. code-block:: java

        public void everyColumn(Color newColor)
        {
            Pixel pix;
            for (int aaa = 0; aaa < this.getHeight(); aaa++)
            {
                for (int bbb = 0; bbb < this.getWidth(); bbb++)
                {
                    pix = this.getPixel(bbb,aaa);
                    pix.setColor(newColor);
                }
            }
        }

.. mchoice:: bs-2d-arrays-14-8
   :practice: T
   :answer_a: getHeight()-1 * getWidth()-1
   :answer_b: getHeight()-1 * (getWidth()-1)/2
   :answer_c: getHeight() * getWidth()
   :answer_d: getHeight() * getWidth()/2
   :answer_e: None of the above
   :correct: d
   :feedback_a: Incorrect. Due to zero-based indexing, the statement "aaa < this.getHeight()" will execute this.getHeight() times. Ex. For an image of width 4, aaa will take on the values 0 1 2 and 3, for a total of 4 values.
   :feedback_b: Incorrect. Due to zero-based indexing, the statement "aaa < this.getHeight()" will execute this.getHeight() times. Ex. For an image of width 4, aaa will take on the values 0 1 2 and 3, for a total of 4 values.
   :feedback_c: Incorrect. Examine how the first loop is incremented with "aaa++", but the second loop is incremented with "bbb = bbb + 2";
   :feedback_d: Correct. Due to zero-based indexing, the statement "aaa < this.getHeight()" will execute this.getHeight() times. The number of potential iterations is cut in half due to the second for loop using "bbb = bbb + 2" to increment.
   :feedback_e: Incorrect. Examine both the less than conditions and the way the for loops are incremented.

    How many iterations of the loop body are executed?

    .. code-block:: java

        public void everyOtherColumn(Color newColor)
        {
            Pixel pix;
            for (int aaa = 0; aaa < this.getHeight(); aaa++)
            {
                for (int bbb = 0; bbb < this.getWidth(); bbb = bbb + 2)
                {
                    pix = this.getPixel(bbb,aaa);
                    pix.setColor(newColor);
                }
            }
        }

.. mchoice:: bs-2d-arrays-14-9
   :practice: T
   :answer_a: if(bbb &lt; this.getWidth()/2)
   :answer_b: if(bbb &lt; this.getHeight()/2)
   :answer_c: if((bbb %2) == 0)
   :answer_d: if((this.getPixel(bbb,aaa)%2) == 0)
   :correct: c
   :feedback_a: Incorrect. Even though this would result in the inner body running in one half of cases, changing the for loop would result in the body running for every-other value of bbb, while this change results in a solid half of the pixels changing with no alternating pattern.
   :feedback_b: Incorrect. Even though this would result in the inner body running in one half of cases, changing the for loop would result in the body running for every-other value of bbb, while this change results in a solid half of the pixels changing with no alternating pattern.
   :feedback_c: Correct. Using a modulus in the if statement causes the inner body to run at every-other value of bbb, which is the same as incrementing bbb by 2 each time and using no if statement.
   :feedback_d: Incorrect. The suggested change to the for loop runs based on the value of bbb, not the content of the pixel, as is suggested by answer d.

    Adding which if statement at the marked line would result in the inner body of the for loop running the same way it would if the inner for loop was "for (int bbb = 0; bbb < this.getWidth(); bbb = bbb + 2)"?

    .. code-block:: java

        public void everyOtherColumn(Color newColor)
        {
            Pixel pix;
            for (int aaa = 0; aaa < this.getHeight(); aaa++)
            {
                //inner for loop
                for (int bbb = 0; bbb < this.getWidth(); bbb++)
                {
                    **Add If Statement Here**
                    {
                        pix = this.getPixel(bbb,aaa);
                        pix.setColor(newColor);
                    }
                }
            }
        }

.. mchoice:: bs-2d-arrays-15-6
   :practice: T
   :answer_a: Comparing 2 pixels side by side and, if they are similar make the pixel white, otherwise black
   :answer_b: Comparing 2 pixels one on top of the other and, if they are similar make the pixel white, otherwise black
   :answer_c: Comparing 2 pixels side by side and, if they are different make the pixel white, otherwise black
   :answer_d: Comparing 2 pixels one on top of the other and, if they are different make the pixel white, otherwise black
   :correct: b
   :feedback_a: Incorrect. The pixels that this code compares are not side by side, as the y value is changed, not the x value.
   :feedback_b: Correct. We look at the pixel directly below the pixel of interest. If they are similar, the if statement turns the pixel white. Else, it becomes black.
   :feedback_c: Incorrect. The pixels that this code compares are not side by side, as the y value is changed, not the x value.
   :feedback_d: Incorrect. Even though we are comparing two pixels, one on top of the other, the if statement does not turn similar pixels black.

    What is this code doing?

    .. code-block:: java

        //Inside loop over all pixels
        topP = this.getPixel(x,y);
        botP = this.getPixel(x,y+1);

        topAvg = topP.getAverage();
        botAvg = botP.getAverage();

        if (Math.abs(topAv – botAv) < 10)
            topP.setColor(Color.WHITE);
        else
            topP.setColor(Color.BLACK);

.. mchoice:: bs-2d-arrays-15-10
   :practice: T
   :answer_a: Section A AND Section B may BOTH be executed
   :answer_b: If Section B is executed then Section A is not executed
   :answer_c: Neither Section is ever executed
   :answer_d: It is possible neither section will be executed (but sometimes one might be).
   :correct: b
   :feedback_a: Incorrect. Only one section can be executed, as once one if/else statement is satisfied, all others will be ignored for that execution.
   :feedback_b: Correct. If the if statement is satisfied, section A will be executed and section B will be ignored. If the if statement is not satisfied, section A will be ignored, and the else statement will cause section B to automatically execute.
   :feedback_c: Incorrect. If an if statement is followed by an else statement, it is guaranteed that one section will always be executed.
   :feedback_d: Incorrect. If an if statement is followed by an else statement, it is guaranteed that one section will always be executed.

    Which is most true about ONE execution of this code (for a specific diffValue)?

    .. code-block:: java

        int diffValue = Math.abs(topAv – botAv);

        if (diffValue < 10)
            topP.setColor(Color.WHITE); //Section A
        else
            topP.setColor(Color.BLACK); //Section B

.. mchoice:: bs-2d-arrays-15-11
   :practice: T
   :answer_a: Section A can be executed AND Section B may BOTH be executed but then C can’t be executed
   :answer_b: If Section A is executed then neither Section B nor C can be
   :answer_c: All sections can be executed for a single diffValue
   :answer_d: It’s possible no section is executed for a given diffValue
   :correct: b
   :feedback_a: Incorrect. Only one section can be executed, as once one if/else statement is satisfied, all others will be ignored for that execution.
   :feedback_b: Correct. If the first if statement is satisfied, section A will be executed and section B and C will be ignored. If the first if statement is not satisfied, section A will be ignored, and the process will be repeated for the second if statement. If neither are satisfied, section C will execute.
   :feedback_c: Incorrect. Only one section can be executed, as once one if/else statement is satisfied, all others will be ignored for that execution.
   :feedback_d: Incorrect. If an if statement is followed by an else statement, it is guaranteed that one section will always be executed.

    Which is most true about ONE execution of this code (for a specific diffValue)?

    .. code-block:: java

        int diffValue = Math.abs(topAv – botAv);

        if (diffValue < 10)
            topP.setColor(Color.WHITE); //Section A
        else if (diffValue < 50)
            topP.setColor(Color.GREY); //Section B
        else
            topP.setColor(Color.BLACK); //Section C

.. mchoice:: bs-2d-arrays-15-12
   :practice: T
   :answer_a: Based on the coordinates of the Pixel
   :answer_b: Based on the color of the Pixel
   :answer_c: Based on the coordinates for some Pixels, the color for other Pixels
   :answer_d: Based on a compound condition of color and coordinates of the Pixel
   :correct: d
   :feedback_a: Incorrect. While the y value is considered, it is not the only quality considered in the if statements.
   :feedback_b: Incorrect. While the color is considered, it is not the only quality considered in the if statements.
   :feedback_c: Incorrect. All pixels are considered via the same criteria, regardles of coordinates.
   :feedback_d: Correct. Both the amount of green in a pixel and its y coordinate are considered when it is being determined if the pixel color should be changed.

    Which best describes the conditions under which we change pixel color?

    .. code-block:: java

        public void makeConvict()
        {
        for (int x = 0; x < this.getWidth(); x++)
        {
            for (int y = 0; y < this.getHeight(); y++)
            {
                Pixel currentPix = this.getPixel(x,y);

                if ( (currentPix.getGreen() > 200) && (y%2==0))
                {
                    currentPix.setColor(Color.BLACK);
                }
                else if( (currentPix.getGreen() > 200) && y%2 == 1)
                {
                currentPix.setColor(Color.WHITE);
                }
            }
        }



.. mchoice:: bs-2d-arrays-16-6
   :practice: T
   :answer_a:    Picture changed = new Picture(p);  p.mystery(changed);   changed.show();
   :answer_b:    Picture changed = new Picture();   p.mystery(changed);   changed.show();
   :answer_c:    Picture changed = new Picture(p);  changed.mystery(p);   changed.show();
   :answer_d:    Picture changed = new Picture();   changed.mystery(p);   changed.show();
   :answer_e: None of the above
   :correct: d
   :feedback_a: Incorrect. Calling the mystery function on the object "p" will not alter the "changed" object, and thus changed.show() will display a picture identical to "p".
   :feedback_b: Incorrect. Calling the mystery function on the object "p" will not alter the "changed" object, and thus changed.show() will display a default picture.
   :feedback_c: Incorrect. The "changed" object does not need to be initialized as a copy of "p", and can be initialized with the default constructor.
   :feedback_d: Correct. The "changed" object can be initialized with the default constructor, as the next line calls the mystery function with the parameter "p". This is the simplest correct way to successfully accomplish this.
   :feedback_e: Incorrect. One of the above answers is correct.

   How would you call and display a flipped picture of Picture p?


.. mchoice:: bs-2d-arrays-16-7
   :author: Beth Simon
   :practice: T
   :answer_a: width * height / 2
   :answer_b: width * height
   :answer_c: width * height * 2
   :answer_d: width * height * 1.5
   :answer_e: Depends on the color of the Pixels in the picture
   :correct: b
   :feedback_a: Incorrect. This line is executed as many times as the code innermost to both for loops is called. Consider only the for loop conditions.
   :feedback_b: Correct. The if statement is executed evey time it is called, which in this case is equal to the number of times the code within both for loops is called.
   :feedback_c: Incorrect. This line is executed as many times as the code innermost to both for loops is called. Consider only the for loop conditions.
   :feedback_d: Incorrect. This line is executed as many times as the code innermost to both for loops is called. Consider only the for loop conditions.
   :feedback_e: Incorrect. This line is executed as many times as the code innermost to both for loops is called, which is not dependent on pixel color.

    How many times is the marked line below executed?

    .. code-block:: java

        public void makeConvict()
        {
            for (int x = 0; x < this.getWidth(); x++)
            {
                for (int y = 0; y < this.getHeight(); y++)
                {
                    Pixel currentPix = this.getPixel(x,y);
                    if ( (currentPix.getGreen() > 200) && (y%2==0)) // THIS LINE
                    {
                        currentPix.setColor(Color.BLACK);
                    }
                    else if( (currentPix.getGreen() > 200) && y%2 == 1)
                    {
                        currentPix.setColor(Color.WHITE);
                    }
                }
            }
        }

.. mchoice:: bs-2d-arrays-16-8
   :author: Beth Simon
   :practice: T
   :answer_a: width * height / 2
   :answer_b: width * height
   :answer_c: width * height * 2
   :answer_d: width * height * 1.5
   :answer_e: Depends on the color of the Pixels in the picture
   :correct: e
   :feedback_a: Incorrect. This line is executed everytime the first if statement is not satified, consider what the first conditional examines.
   :feedback_b: Incorrect. This line is executed everytime the first if statement is not satified, consider what the first conditional examines.
   :feedback_c: Incorrect. This line is executed everytime the first if statement is not satified, consider what the first conditional examines.
   :feedback_d: Incorrect. This line is executed everytime the first if statement is not satified, consider what the first conditional examines.
   :feedback_e: Correct. This line is executed everytime the first if statement is not satified, which is dependent upon the amount of green in each pixel of the picture.

    How many times is the marked line below executed?

    .. code-block:: java

        public void makeConvict()
        {
            for (int x = 0; x < this.getWidth(); x++)
            {
                for (int y = 0; y < this.getHeight(); y++)
                {
                    Pixel currentPix = this.getPixel(x,y);
                    if ( (currentPix.getGreen() > 200) && (y%2==0))
                    {
                        currentPix.setColor(Color.BLACK);
                    }
                    else if( (currentPix.getGreen() > 200) && y%2 == 1) // THIS LINE
                    {
                        currentPix.setColor(Color.WHITE);
                    }
                }
            }
        }

.. mchoice:: bs-2d-arrays-16-9
   :author: Beth Simon
   :practice: T
   :answer_a: Line A is executed the same number of times as Line B
   :answer_b: Line A is executed more times than Line B
   :answer_c: Line A is executed fewer times than Line B
   :answer_d: The relationship depends on the specific Picture that this code is run on
   :correct: d
   :feedback_a: Incorrect. While this is true if the if statement in Line A is always satified, consider that this may not always be the case.
   :feedback_b: Incorrect. While this is true if the if statement in Line A is not always satified, consider that this may not always be the case.
   :feedback_c: Incorrect. Line B can only be executed after Line A, and is only executed 0 or 1 time every time Line A is called. It cannot be executed more times than Line A.
   :feedback_d: Correct. Line B will be executed the same number of times or fewer times than Line A. If the if statement in Line A is always satisfied, Line B will be executed the same number of times as line A. Else, Line B will be executed fewer times.

   Which of these statements is true?

   .. code-block:: java

        public void makeConvict()
        {
            for (int x = 0; x < this.getWidth(); x++)
            {
                for (int y = 0; y < this.getHeight(); y++)
                {
                    Pixel currentPix = this.getPixel(x,y);
                    if ( (currentPix.getGreen() > 200) && (y%2==0))
                    {
                        currentPix.setColor(Color.BLACK);
                    }
                    else if( (currentPix.getGreen() > 200) && y%2 == 1) // LINE A
                    {
                        currentPix.setColor(Color.WHITE); //LINE B
                    }
                }
            }
        }

.. mchoice:: bs-2d-arrays-20-11
   :author: Beth Simon
   :practice: T
   :answer_a: This code modifies the middle half (from the top and bottom) of the picture
   :answer_b: This code modifies the middle half (from the left and right) of the picture
   :answer_c: This code loops over the pixels in the Pixel array starting at length/4 and up to 2*length/4 and gets the red, blue and green values adds them up and divides by 3 and sets that pixel to the calculated value
   :correct: b
   :feedback_a: Incorrect. This code modifies a 1D array, and thus there is no top-to-bottom dimension.
   :feedback_b: Correct. Based on the for loop, the code modifies from the 1/4 length mark to the 3/4 length mark, moving left to right.
   :feedback_c: Incorrect. Even though this line does correctly describe how the pixel colors are modified, it does not correctly describe which pixels are modified.

    What does this code do?

    .. code-block:: java

        Pixel[] pixelArray = this.getPixels();
        int mystery;
        for(int i = pixelArray.length/4; i < 3*pixelArray.length/4; i++)
        {
            mystery = (pixelArray[i].getBlue() + pixelArray[i].getGreen() + pixelArray[i].getRed() ) / 3;
            Color thing = new Color(mystery, mystery, mystery);
            pixelArray[i].setColor(thing);
        }

