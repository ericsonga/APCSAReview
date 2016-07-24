.. qnum::
   :prefix:  7-13-
   :start: 1

Free Response - Sound A
=======================

..	index::
	single: sounda
    single: free response

The following is a free response question from 2011.  It was question 1 on the exam.  You can see all the free response questions from past exams at https://apstudent.collegeboard.org/apcourse/ap-computer-science-a/exam-practice.

**Question 1.**  Digital sounds can be represented as an array of integer values. For this question, you will write two unrelated methods of the *Sound* class.

A partial declaration of the ``Sound`` class is shown below.

.. code-block:: java

   public class Sound
   {
    /** the array of values in this sound; guaranteed not to be null */
    private int[] samples;

    /** Changes those values in this sound that have an amplitude greater than limit */
     *  Values greater than limit are changed to limit.
     *  @param limit the amplitude limit
     *         Precondition: limit >= 0
     *  @return the number of values in this sound that this method changed
     */
    public int limitAmplitude(int limit)
    { /* to be implemented in part (a) */ }

    /** Removes all silence from the beginning of this sound.
     *  Silence is represented by a value of 0.
     *  Precondition: samples contains at least one nonzero value
     *  Postcondition: the length of samples reflects the removal of starting silence
     */
    public void trimSilenceFromBeginning()
    { /* to be implemented in part (b) */ }

    // There may be instance variables, constructors, and methods that are not shown.
   }


**Part a.** The volume of a sound depends on the amplitude of each value in the sound. The amplitude of a value is its absolute value. For example, the amplitude of -2300 is 2300 and the amplitude of 4000 is 4000.

Write the method ``limitAmplitude`` that will change any value that has an amplitude greater than the
given limit. Values that are greater than ``limit`` are replaced with ``limit``, and values that are less than
``-limit`` are replaced with ``–limit``. The method returns the total number of values that were changed in
the array. For example, assume that the array samples has been initialized with the following values.

.. figure:: Figures/soundTable.png
  :width: 592px
  :align: center
  :figclass: align-center

When the statement

.. code-block:: java

  int numChanges = limitAmplitude(2000);

is executed, the value of ``numChanges`` will be 5, and the array ``samples`` will contain the following values.

.. figure:: Figures/soundTable2.png
  :width: 593px
  :align: center
  :figclass: align-center


How to Solve This
--------------------
1. You will need to loop through each value in the array. What type of loop will you use?
2. Remember that you will need to both change the values that exceed the given limit AND return how many values are changed.

The Algorithm
-------------------
.. parsonsprob:: SoundA

 The method limitAmplitude below contains the correct code for one solution to this problem, but it is mixed up and contains extra blocks that are not needed.  Drag the needed code from the left to the right and put them in order with the correct indention so that the code would work correctly.
 -----
 public int limitAmplitude(int limit) {
  int numChanged = 0;
  for (int i = 0; i < this.samples.length; i++) {
 =====
      if(this.samples[i] < -limit) {
 =====
       this.samples[i] = -limit;
        numChanged++;
 =====
      } // end first if
 =====
     if(this.samples[i] > limit) {
 =====
       this.samples[i] = limit;
        numChanged++;
 =====
     } // end second if
 =====
   } // end for
 =====
   return numChanged;
 =====
 } // end method

Try and Solve Part A
--------------------
Complete method ``limitAmplitude`` below.

.. activecode:: FRQSoundA
   :language: java

   public class Sound
   {
    // the array of values in this sound; guaranteed not to be null
    static private int[] samples = { -1, 23, 4, -345, 346, 2, 5, 9, 3, 6};

    /** Changes those values in this sound that have an amplitude greater than limit
     *  Values greater than limit are changed to limit.
     *  @param limit the amplitude limit
     *         Precondition: limit >= 0
     *  @return the number of values in this sound that this method changed
     */
    public static int limitAmplitude(int limit){
      // Complete this method
      // In the case of this exercise, please reference the samples variable without using "this"
    }

    /** Removes all silence from the beginning of this sound.
     *  Silence is represented by a value of 0.
     *  Precondition: samples contains at least one nonzero value
     *  Postcondition: the length of samples reflects the removal of starting silence
     */
    public void trimSilenceFromBeginning()
    { /* to be implemented in part (b) */ }

    public static void main(String[] args){
      boolean test1 = false;
      boolean test2 = false;

      int limit = 25;

      if(limitAmplitude(limit) == 2)
        test1 = true;
      else
        System.out.println("Oops! Looks like your code doesn't properly return how many values in the array were changed.\n");

      if(samples[3] == (-limit) && samples[4] == limit)
        test2 = true;
      else
        System.out.println("Oops! Looks like your code doesn't properly change the values in the array that exceed the limit.\n");

      if(test1 && test2)
        System.out.println("Looks like your code works well!");
      else
        System.out.println("Make some changes, please");
    }
   }
