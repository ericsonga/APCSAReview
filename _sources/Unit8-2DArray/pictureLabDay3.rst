
Picture Lab Day 3: Exploring a Picture (not complete)
=====================================----==------------

In this section we will cover the basics of image navigation. Images all start at a (0,0) point but unlike the origin in geometry, this point is in the upper right corner rather than the bottom left.
We will be using an image called lion.jpg which should appear on the page. A JPEG file is one that follows an intentional standard for storing picture data using lossy compression. Lossy compression
means that the amount of data that is stored is much smaller than the available data, but the data that is omitted to reach this smaller size, will not be missed.

To make this activity run on your browser, it has been modified slightly from the original picture lab. We have provided an active code section with the lion.jpg file and a main method with one helper function. This gives you some freedom to run tests as you see fit.
Write what you feel will help you answer the multiple choice questions. For example, if asked what color is at the center of the image, you could have a print statement access the center of the image and print out the RGB values.

.. datafile:: metalLion.jpg
   :image:
   :fromfile: ../../_static/metalLion.jpg
   :hide:

.. activecode:: challenge-8-8-picture
    :language: java
    :datafile: pictureClasses.jar, metalLion.jpg

    Write helper methods that you call in main to help you answer the multiple choice questions below. You can try running the code to see what effect your methods have had on the image or what output is printed.
    ~~~~
    import java.awt.*;
    import java.awt.font.*;
    import java.awt.geom.*;
    import java.awt.image.BufferedImage;
    import java.text.*;
    import java.util.*;
    import java.util.List;

    /**
     * A class that represents a picture.  This class inherits from
     * SimplePicture and allows the student to add functionality to
     * the Picture class.
     *
     * @author Barbara Ericson ericson@cc.gatech.edu
     */
    public class Picture extends SimplePicture
    {
      ///////////////////// constructors //////////////////////////////////

      /**
       * Constructor that takes no arguments
       */
      public Picture ()
      {
        /* not needed but use it to show students the implicit call to super()
         * child constructors always call a parent constructor
         */
        super();
      }

      /**
       * Constructor that takes a file name and creates the picture
       * @param fileName the name of the file to create the picture from
       */
      public Picture(String fileName)
      {
        // let the parent class handle this fileName
        super(fileName);
      }

      /**
       * Constructor that takes the height and width
       * @param height the height of the desired picture
       * @param width the width of the desired picture
       */
      public Picture(int height, int width)
      {
        // let the parent class handle this width and height
        super(width,height);
      }

      /**
       * Constructor that takes a picture and creates a
       * copy of that picture
       * @param copyPicture the picture to copy
       */
      public Picture(Picture copyPicture)
      {
        // let the parent class do the copy
        super(copyPicture);
      }

      /**
       * Constructor that takes a buffered image
       * @param image the buffered image to use
       */
      public Picture(BufferedImage image)
      {
        super(image);
      }
      ////////////////////// methods ///////////////////////////////////////

      /**
       * Method to return a string with information about this picture.
       * @return a string with information about the picture such as fileName,
       * height and width.
       */
      public String toString()
      {
        String output = "Picture, filename " + getFileName() +
          " height " + getHeight()
          + " width " + getWidth();
        return output;

      }

      /**
        zeroBlue() method sets the blue values at all pixels to zero
     */
      public void hint()
      {
        Pixel[][] pixels = this.getPixels2D();

        for (int i = pixels.length - 25; i < pixels.length; ++i) {
          for (int j = pixels[0].length - 25; j < pixels[0].length; ++i) {
              pixels[i][j].setBlue(0);
              pixels[i][j].setGreen(0);
          }
        }
        System.out.println("look at the bounds of these loops and the results of the code, what does this tell you about the indexing of an image?");
      }


     /* Add new methods here if needed.
     */

      /* Main method for exploring
       */
      public static void main(String[] args)
      {
        Picture lion = new Picture("metalLion.jpg");
        lion.show();
        lion.hint();
        lion.show();

      }
    }


.. mchoice:: picture-day3-0a
   :answer_a: 0
   :answer_b: 180
   :answer_c: 240
   :answer_d: 90
   :correct: a
   :feedback_a: Correct
   :feedback_b: Try running some more tests.
   :feedback_c: Try running some more tests.
   :feedback_d: Try running some more tests.
   :optional:

   What is the row index for the top left corner of the picture?

.. mchoice:: picture-day3-1a
   :answer_a: 0
   :answer_b: 180
   :answer_c: 240
   :answer_d: 90
   :correct: a
   :feedback_a: Correct
   :feedback_b: Try running some more tests.
   :feedback_c: Try running some more tests.
   :feedback_d: Try running some more tests.
   :optional:

   What is the column index for the top left corner of the picture?

.. mchoice:: picture-day3-2a
   :answer_a: 60
   :answer_b: 180
   :answer_c: 320
   :answer_d: 90
   :correct: b
   :feedback_a: Try running some more tests.
   :feedback_b: Correct
   :feedback_c: Try running some more tests.
   :feedback_d: Try running some more tests.
   :optional:

   What is the right most column index?

.. mchoice:: picture-day3-3a
   :answer_a: 180
   :answer_b: 0
   :answer_c: 90
   :answer_d: 240
   :correct: d
   :feedback_a: Try running some more tests.
   :feedback_b: Try running some more tests.
   :feedback_c: Try running some more tests.
   :feedback_d: Correct
   :optional:

   What is the bottom most row index?

.. mchoice:: picture-day3-4a
   :answer_a: The row increases starting at the left and ending at the right.
   :answer_b: The row increases starting at the right and ending at the left.
   :answer_c: The row increases starting at the top and ending at the bottom.
   :answer_d: The row increases starting at the bottom and ending at the top.
   :correct: c
   :feedback_a: Try running some more tests.
   :feedback_b: Try running some more tests.
   :feedback_c: Correct.
   :feedback_d: Try running some more tests.
   :optional:

   Does the row index increase from left to right or top to bottom?

.. mchoice:: picture-day3-5a
   :answer_a: The column increases starting at the left and ending at the right.
   :answer_b: The column increases starting at the right and ending at the left.
   :answer_c: The column increases starting at the top and ending at the bottom.
   :answer_d: The column increases starting at the bottom and ending at the top.
   :correct: a
   :feedback_a: Correct
   :feedback_b: Try running some more tests.
   :feedback_c: Try running some more tests.
   :feedback_d: Try running some more tests.
   :optional:

   Does the column index increase from left to right or top to bottom?

.. mchoice:: picture-day3-6a
   :answer_a: This is when data is lost in the resizing of an image.
   :answer_b: The intentional decreasing of resolution by merging adjacent pixels.
   :answer_c: When an image is magnified to the point where the pixels look like small squares.
   :answer_d: The modification of individual pixels similar to what was practiced in 8.2.6
   :correct: c
   :feedback_a: try again.
   :feedback_b: try again.
   :feedback_c: Correct
   :feedback_d: try again.
   :optional:

   What is pixelation?
