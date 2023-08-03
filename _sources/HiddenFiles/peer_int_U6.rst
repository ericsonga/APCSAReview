Peer Instruction: Arrays Multiple Choice Questions
--------------------------------------------------

.. mchoice:: bs-arrays-21-8
   :author: Beth Simon
   :practice: T
   :answer_a: Erases half of the sound
   :answer_b: Changes the result sound based on the this sound
   :answer_c: Replaces the parameter sound with the calling object sound
   :answer_d: Puts the last half of the calling object sound into the parameter sound
   :answer_e: Replaces the last half of the parameter sound with the last half of the calling object sound
   :correct: e
   :feedback_a: Incorrect. This code modifies one half of the sound, but does not erase it.
   :feedback_b: Incorrect. The result sound is modified in a way involving the this sound, however this is not based on the contents of the this sound.
   :feedback_c: Incorrect. The parameter sound itself is not modified, even though a copy of it (result) is.
   :feedback_d: Incorrect. The parameter sound itself is not modified, even though a copy of it (result) is.
   :feedback_e: Correct. Based on the for loop, the second half of the parameter sound is replaced by the second half of the this sound.

    What does this code do?

    .. code-block:: java

        public void lab7Quiz3(Sound mySound)
        {
            Sound[] source = this.getSamples();
            Sound[] result = mySound.getSamples();
            for (int i = source.length/2; i < source.length; i++)
            {
                int value = source[i].getValue();
                result[i].setValue(value);
            }
        }

.. mchoice:: bs-arrays-21-9
   :author: Beth Simon
   :practice: T
   :answer_a: 0,9
   :answer_b: 60,0
   :answer_c: 90,5
   :answer_d: 100,4
   :answer_e: None of the above
   :correct: d
   :feedback_a: Incorrect. Examine what the variables a and b hold. a holds a value found in the array, and b holds an index.
   :feedback_b: Incorrect. Examine what the variables a and b hold. a holds a value found in the array, and b holds an index.
   :feedback_c: Incorrect. Examine what the variables a and b hold. a holds a value found in the array, and b holds an index.
   :feedback_d: Correct. The a value holds the greatest value found in the array. The b value holds the index of the greatest value.
   :feedback_e: Incorrect. Examine what the variables a and b hold. a holds a value found in the array, and b holds an index.

    What is printed by this code when it is called on the object {60, 80, 60, 65, 100, 90, 0, 0, 0, 0}?

    .. code-block:: java

        public void guess()
        {
            SoundSample[] noiseArray = this.getSamples();
            int a, b = 0;
            for (int i=0;i<noiseArray.length; i++)
            {
                SoundSample sample = noiseArray[i];
                int foo = sample.getValue();
                if (foo > a)
                {
                    a = foo;
                    b = i;
                }
            }
            System.out.println(a + ","+b);
        }

.. mchoice:: bs-arrays-21-10
   :author: Beth Simon
   :practice: T
   :answer_a: 0,9
   :answer_b: 0,6
   :answer_c: 90,5
   :answer_d: 32767,0
   :answer_e: None of the above
   :correct: b
   :feedback_a: Incorrect. Examine when the value of b is changed. When is the condition "foo < a" satisfied?
   :feedback_b: Correct. a holds the smallest value found in the array, and b holds an index. b is only changed when "foo < a" is satified, which last occurs at index 6.
   :feedback_c: Incorrect. Examine when a and b are changed. At one point these values are correct, but finish running the for loop.
   :feedback_d: Incorrect. Examine what the variables a and b hold. a holds a value found in the array, and b holds an index.
   :feedback_e: Incorrect. Examine what the variables a and b hold. a holds a value found in the array, and b holds an index.

    What is printed by this code when it is called on the object {60, 80, 60, 65, 100, 90, 0, 0, 0, 0}?

    .. code-block:: java

        public void guess()
        {
            SoundSample[] noiseArray = this.getSamples();
            int a = 32767;
            Int b = 0;
            for (int i=0;i<noiseArray.length; i++)
            {
                SoundSample sample = noiseArray[i];
                int foo = sample.getValue();
                if (foo < a)
                {
                    a = foo;
                    b = i;
                }
            }
        }

.. mchoice:: bs-arrays-22-6
   :author: Beth Simon
   :practice: T
   :answer_a: Sets the end of the array to 0s
   :answer_b: Finds the first value
   :answer_c: Finds the minimum (and its location)
   :answer_d: Finds the maximum (and its location)
   :answer_e: Finds the last value
   :correct: d
   :feedback_a: Incorrect. The values of the original array are not reassigned in this code block.
   :feedback_b: Incorrect. This code loops through the entire array, and the values can be changed to correspond to any value, not just the first one.
   :feedback_c: Incorrect. a is only changed when "foo > a" is satified, which means that the current value is greater than the previous value.
   :feedback_d: Correct. The value of a is the maximum value in the array. The value of b is the index where the maximum value is located.
   :feedback_e: Incorrect. This code loops through the entire array, and the values can be changed to correspond to any value, not just the last one.

    What does this code do for the object {60, 80, 60, 65, 90, 0, 0, 0, 0}?

    .. code-block:: java

        int a,b = 0;

        for (int i=0;i<noiseArray.length; i++)
        {
            SoundSample sample = noiseArray[i];
            int foo = sample.getValue();
            if (foo > a)
            {
                a = foo;
                b = i;
            }
        }

.. mchoice:: bs-arrays-22-8
   :author: Beth Simon
   :practice: T
   :answer_a: [160, 160, 160, 160]
   :answer_b: [40, 40, 40, 40]
   :answer_c: [53, 53, 53, 53]
   :answer_d: [80, 100, 70, 70]
   :answer_e: None of the above
   :correct: b
   :feedback_a: Incorrect. The value of yyy is the sum of all values divided by the size of the array (remember integer math). Is the original array ever changed using this value?
   :feedback_b: Incorrect. The value of yyy is the sum of all values divided by the size of the array (remember integer math). Is the original array ever changed using this value?
   :feedback_c: Incorrect. The value of yyy is the sum of all values divided by the size of the array (remember integer math). Is the original array ever changed using this value?
   :feedback_d: Incorrect. The value of yyy is the sum of all values divided by the size of the array (remember integer math). Is the original array ever changed using this value?
   :feedback_e: Correct. Even though the value of sample is continuously reassigned to the value 40, the values in the original array itself are never actually modified. Thus, the end array is exactly the same as the original.

    How does the sound sample change if funky() is called on [40, 60, 30, 30]?

    .. code-block:: java

        public void funky()
        {
            SoundSample[] noiseArray = this.getSamples();
            int zzz = 0;
            for (int i=0;i<noiseArray.length; i++)
            {
                SoundSample sample = noiseArray[i];
                int foo = sample.getValue();
                zzz += foo;
            }
            int yyy = zzz / noiseArray.length;
            for (int i = 0; i < noiseArray.length; i++)
            {
                SoundSample sample = noiseArray[i];
                sample.setValue(yyy);
            }
        }

.. mchoice:: bs-arrays-22-11
   :author: Beth Simon
   :practice: T
   :answer_a: if (foo[i].getValue() >= 0)
   :answer_b: if (i >= 0)
   :answer_c: if (foo[i].getValue() < 0)
   :answer_d: if (i < 0)
   :answer_e: None of the above
   :correct: a
   :feedback_a: Correct. The term "foo[i].getValue()" retrieves the value at index i. This code successfully sets all value sero and greater to the maximum, and all others to the minimum.
   :feedback_b: Incorrect. i is the index of a space in the array, but not a value found in the array itself. We need to know the value at i for this code to run properly.
   :feedback_c: Incorrect. This would set every negative value to the positive maximum and vis versa, which is the opposite of our goal.
   :feedback_d: Incorrect. i is the index of a space in the array, but not a value found in the array itself. We need to know the value at i for this code to run properly.
   :feedback_e: Incorrect. One of the options above can successfully complete this code.

    What if all positive values (including zero) were (set to) the maximum value (32,767) and all negative values were set to the minimum value (-32,768)? Which line would complete the code block to accomplish this?

    .. code-block:: java

        SoundSample[] foo = this.getSamples();
        for (int i = 0; i < foo.length; i++)
        {
            <<Pick a Line to Insert here>>
                foo[i].setValue(32767);
            else
                foo[i].setValue(-32768);
        }

.. mchoice:: bs-arrays-23-5
   :author: Beth Simon
   :practice: T
   :answer_a: [143, 165, 110, 121, 99, 0, 0, 0, 0, 0]
   :answer_b: [143, 165, 110, 121, 98, 130, 150, 100, 110, 90]
   :answer_c: [53, 65, 70, 81, 109, 0, 0, 0, 0, 0]
   :answer_d: [53, 65, 70, 81, 109, 130, 150, 100, 110, 90]
   :answer_e: Array index out of bounds error
   :correct: d
   :feedback_a: Incorrect. While the first values of the array are assigned new values, the second part is not altered.
   :feedback_b: Incorrect. Look at how the new values of the array are calculated. When i is 5, the "value" variable is 13. This 13 is added to the number at a different index of the array.
   :feedback_c: Incorrect. While the first values of the array are assigned new values, the second part is not altered.
   :feedback_d: Correct. The pattern is that, starting at zero, the value at the current index is increased by one-tenth of the value of the current index + 5, until the end of the arry is reached.
   :feedback_e: Incorrect. This block of code only calls to valid indexes within the soundSample.

    What is the resulting soundSample if the original soundSample is [40, 50, 60, 70, 100, 130, 150, 100, 110, 90] and foo is equal to 5?

    .. code-block:: java

        public Sound funky2(int foo)
        {
            Sound s = new Sound(this.getFileName());
            int value = 0;
            for (int i = foo; i < this.getLength(); i++)
            {
                value = (int) s.getSampleValueAt(i) * .1;
                this.setSampleValueAt(i-foo, value + this.getSampleValueAt(i-foo));
            }
        }

.. mchoice:: bs-arrays-23-13
   :author: Beth Simon
   :practice: T
   :answer_a: this;
   :answer_b: new Sound(this);
   :answer_c: this.getLength()/2;
   :answer_d: new Sound(this.getLength()/2);
   :answer_e: None of the above
   :correct: d
   :feedback_a: Incorrect. This will create a copy of the "this" sound, when we are trying to create a sound of half the length.
   :feedback_b: Incorrect. The value of this.getLength()/2 is an integer, but we need a valid Sound to assign highP to.
   :feedback_c: Incorrect. While the first values of the array are assigned new values, the second part is not altered.
   :feedback_d: Correct. We need to use the keyword new to create a new object, and then insert the proper size parameter into the Sound constructor.
   :feedback_e: Incorrect. There is a proper answer above.

    What code would you replace <<X>> with is order to create a new sound of correct length 1/2 ?

    .. code-block:: java

        public void raiseP()
        {
            Sound highP = <<X>>
            SoundSample[] original = this.getSamples();
            SoundSample[] higher = highP.getSamples();

            <<SOME LOOP HERE TO COPY ORIGINAL INTO HIGHER>>
        }

.. mchoice:: bs-arrays-23-14
   :author: Beth Simon
   :practice: T
   :answer_a: higher[newPlace].setValue( original[origI].getValue()); newPlace = origI;
   :answer_b: higher[newPlace].setValue( original[origI].getValue()); newPlace++;
   :answer_c: original[origI].getValue( higher[newPlace].setValue()); newPlace = origI;
   :answer_d: original[origI].getValue( higher[newPlace].setValue()); newPlace++;
   :answer_e: None of the above
   :correct: b
   :feedback_a: Incorrect. This will cause an out-of-bounds error once origI surpasses the size of higher.
   :feedback_b: Correct. We set new values into the higher array, not the original array. We use newPlace to track the current index of our new, smaller array, which only increases by one for every time origI increases by 2.
   :feedback_c: Incorrect. This will cause an out-of-bounds error once origI surpasses the size of higher.
   :feedback_d: Incorrect. While this answer will increment our index values correctly, no new values are actually assigned to our higher array.
   :feedback_e: Incorrect. There is a proper answer above.

    What lines should be inserted into the for loop in order to fill in our new higher array, which is 1/2 the length of the "this" array?

    .. code-block:: java

        public void raiseP()
        {
            Sound higher = <<X>>
            SoundSample[] original = this.getSamples();
            SoundSample[] higher = highP.getSamples();

            int newPlace = 0;
            for (int origI = 0; origI < original.length; origI+=2){
                //insert lines here
            }
        }

.. mchoice:: bs-arrays-24-9
   :author: Beth Simon
   :practice: T
   :answer_a: [A] public void raisePitch(), [B] this.getSamples();
   :answer_b: [A] public void raisePitch(Sound noise), [B] noise.getSamples();
   :answer_c: [A] public Sound raisePitch(), [B] this.getSamples();
   :answer_d: [A] public Sound raisePitch(Sound noise), [B] noise.getSamples();
   :answer_e: None of the above
   :correct: a
   :feedback_a: Correct. If we want to modify an existing object, we do not need to return an object, so void is appropriate. This sound will also be passed in as an object, and not a parameter.
   :feedback_b: Incorrect. Since this function is a method of an object class, we do not need to pass in the sound as a parameter.
   :feedback_c: Incorrect. If we want to modify an existing object, we do not need to return an object, so we could use void instead of Sound in the method declaration.
   :feedback_d: Incorrect. Since this function is a method of an object class, we do not need to pass in the sound as a parameter.
   :feedback_e: Incorrect. One of the above options does successfully satisfy this question.

    What header/value combo should we use in ored to modify an existing sound?

    .. code-block:: java

        public Sound funky2(int foo)
        {
            Sound s = new Sound(this.getFileName());
            int value = 0;
            for (int i = foo; i < this.getLength(); i++)
            {
                value = (int) s.getSampleValueAt(i) * .1;
                this.setSampleValueAt(i-foo, value + this.getSampleValueAt(i-foo));
            }
        }

.. mchoice:: bs-arrays-24-10
   :author: Beth Simon
   :practice: T
   :answer_a: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55]
   :answer_b: [50, 15, 20, 25, 30, 35, 40, 45, 50, 55]
   :answer_c: [10, 20, 30, 40, 50, 0, 0, 0, 0, 0]
   :answer_d: [10, 20, 30, 40, 50, 35, 40, 45, 50, 55]
   :answer_e: None of the above
   :correct: b
   :feedback_a: Incorrect. This sound is modified in some way within the for loop.
   :feedback_b: Correct. Only noiseArr[0] is changed since newPlace isn't modified. The last time the loop runs the value of i is 8, so noiseArr[0] is changed to 50.
   :feedback_c: Incorrect. While the first value of the array is assigned new values, track to see if the value of newPlace is changing as the for loop progresses.
   :feedback_d: Incorrect. While the first value of the array is assigned new values, track to see if the value of newPlace is changing as the for loop progresses.
   :feedback_e: Incorrect. One of the above options does successfully satisfy this question.

    What is the result of running this code if noiseArr is [10, 15, 20, 25, 30, 35, 40, 45, 50, 55]?

    .. code-block:: java

        int newPlace = 0;
        for(int i = 0; i < noiseAr.length; i+=2)
        {
            noiseAr[newPlace] = noiseAr[i];
        }
