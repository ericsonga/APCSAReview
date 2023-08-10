.. include:: ../common.rst

|Time90|

.. |Explorer Repl| raw:: html

   <a href= "https://firewalledreplit.com/@BerylHoffman/PictureExplorer" style="text-decoration:underline" target="_blank" >Picture Explorer Repl</a>

Picture Lab A7: Mirroring Part of a Picture
=====================================================

Sometimes you only want to mirror part of a picture. For example, Figure 1 shows a temple in Greece
that is missing a part of the roof called the pediment. You can use the |Explorer Repl| to find the area that
you want to mirror in temple.jpg to produce the picture on the right. If you do this you will find that you can mirror
the rows from 27 to 96 (inclusive) and the columns from 13 to 275 (inclusive). You can change the
starting and ending points for the row and column values to mirror just part of the picture.

.. figure:: Figures/picturelabmirror5.png
    :width: 500px
    :align: center
    :figclass: align-center

    Figure 1: Greek temple before (left) and after (right) mirroring the pediment

To work with just part of a picture, change the starting and ending values for the nested for loops
as shown in the following ``mirrorTemple`` method. This method also calculates the distance the
current column is from the ``mirrorPoint`` and then adds that distance to the ``mirrorPoint``
to get the column to copy to.

.. code-block:: java

 public void mirrorTemple()
 {
      int mirrorPoint = 276;
      Pixel leftPixel = null;
      Pixel rightPixel = null;
      int count = 0;
      Pixel[][] pixels = this.getPixels2D();

      // loop through the rows
      for (int row = 27; row < 97; row++)
      {
           // loop from 13 to just before the mirror point
           for (int col = 13; col < mirrorPoint; col++)
           {
                leftPixel = pixels[row][col];
                rightPixel = pixels[row][mirrorPoint - col + mirrorPoint];
                rightPixel.setColor(leftPixel.getColor());
           }
      }
  }

You can test this with the ``mirrorTemple`` method below.

.. activecode:: picture-lab-A7-mirrorTemple
    :language: java
    :autograde: unittest
    :datafile: pictureClasses.jar, temple.jpg

    Picture Lab A7: Run to see mirrorTemple() working.
    ~~~~
    import java.awt.*;
    import java.awt.font.*;
    import java.awt.geom.*;
    import java.awt.image.BufferedImage;
    import java.text.*;
    import java.util.*;

    /**
     * A class that represents a picture. This class inherits from SimplePicture and
     * allows the student to add functionality to the Picture class.
     *
     * @author Barbara Ericson ericson@cc.gatech.edu
     */
    public class Picture extends SimplePicture
    {
        ///////////////////// constructors //////////////////////////////////

        /** Constructor that takes no arguments */
        public Picture()
        {
            /* not needed but use it to show students the implicit call to super()
             * child constructors always call a parent constructor
             */
            super();
        }

        /**
         * Constructor that takes a file name and creates the picture
         *
         * @param fileName the name of the file to create the picture from
         */
        public Picture(String fileName)
        {
            // let the parent class handle this fileName
            super(fileName);
        }

        /**
         * Constructor that takes the height and width
         *
         * @param height the height of the desired picture
         * @param width the width of the desired picture
         */
        public Picture(int height, int width)
        {
            // let the parent class handle this width and height
            super(width, height);
        }

        /**
         * Constructor that takes a picture and creates a copy of that picture
         *
         * @param copyPicture the picture to copy
         */
        public Picture(Picture copyPicture)
        {
            // let the parent class do the copy
            super(copyPicture);
        }

        /**
         * Constructor that takes a buffered image
         *
         * @param image the buffered image to use
         */
        public Picture(BufferedImage image)
        {
            super(image);
        }

        ////////////////////// methods ///////////////////////////////////////

        /**
         * Method to return a string with information about this picture.
         *
         * @return a string with information about the picture such as fileName, height
         *     and width.
         */
        public String toString()
        {
            String output =
                    "Picture, filename "
                            + getFileName()
                            + " height "
                            + getHeight()
                            + " width "
                            + getWidth();
            return output;
        }

        /** Method mirrorTemple() fixes the temple.jpg picture */
        public void mirrorTemple()
        {
            int mirrorPoint = 276;
            Pixel leftPixel = null;
            Pixel rightPixel = null;
            Pixel[][] pixels = this.getPixels2D();

            // loop through the rows
            for (int row = 27; row < 97; row++)
            {
                // loop from 13 to just before the mirror point
                for (int col = 13; col < mirrorPoint; col++)
                {
                    leftPixel = pixels[row][col];
                    rightPixel = pixels[row][mirrorPoint - col + mirrorPoint];
                    rightPixel.setColor(leftPixel.getColor());
                }
            }
        }

        /* Main method for testing
         */
        public static void main(String[] args)
        {
            Picture pict = new Picture("temple.jpg");
            pict.show();
            pict.mirrorTemple();
            pict.show();
        }
    }

    ====
    import static org.junit.Assert.*;

    import org.junit.*;

    import java.io.*;

    public class RunestoneTests extends CodeTestHelper
    {
        @Test
        public void test1()
        {
            String target = "public void mirrorTemple()";
            boolean passed = checkCodeContains("mirrorTemple() method", target);
            assertTrue(passed);
        }
    }

How many times was ``leftPixel = pixels[row][col];`` executed? The formula for the
number of times a nested loop executes is the number of times the outer loop executes multiplied by the
number of times the inner loop executes. The outer loop is the one looping through the rows, because it
is outside the other loop. The inner loop is the one looping through the columns, because it is inside the
row loop.

How many times does the outer loop execute? The outer loop starts with row equal to 27 and ends
when it reaches 97, so the last time through the loop row is 96. To calculate the number of times a
loop executes, subtract the starting value from the ending value and add one. The outer loop executes 96
– 27 + 1 times, which equals 70 times. The inner loop starts with col equal to 13 and ends when it
reaches 276, so, the last time through the loop, col will be 275. It executes 275 – 13 + 1 times, which
equals 263 times. The total is 70 * 263, which equals 18,410.


.. mchoice:: picture-A7-1
   :answer_a: 17
   :answer_b: 17 - 7 = 10
   :answer_c: (17 - 7) * (15 - 6) = 90
   :answer_d: 17 * 15 = 255
   :correct: c
   :feedback_a: Don't forget the inner loop.
   :feedback_b: Don't forget the inner loop.
   :feedback_c: Correct
   :feedback_d: The loops do not start at 0.

   How many times would the body of this nested for loop execute?

   .. code-block:: java

      for (int row = 7; row < 17; row++)
          for (int col = 6; col < 15; col++)

.. mchoice:: picture-A7-2
   :answer_a: 11
   :answer_b: 11 - 5 = 6
   :answer_c: (11 - 5) * (18 - 3) = 90
   :answer_d: (11 - 5 + 1) * (18 - 3 + 1) = 112
   :correct: d
   :feedback_a: Don't forget the inner loop.
   :feedback_b: Don't forget the inner loop.
   :feedback_c: Notice that these loops use <=
   :feedback_d: Yes, the loops do not start at 0 and use <=.

   How many times would the body of this nested for loop execute?

   .. code-block::

      for (int row = 5; row <= 11; row++)
          for (int col = 3; col <= 18; col++)


|CodingEx| **Coding Exercises**

1. Check the calculation of the number of times the body of the nested loop executes by adding an
integer count variable to the ``mirrorTemple`` method that starts out at 0 and increments
inside the body of the loop. Print the value of count after the nested loop ends.

.. activecode:: picture-lab-A7-mirror-temple-count
    :language: java
    :autograde: unittest
    :datafile: pictureClasses.jar, temple.jpg

    Picture Lab A7 Mirroring: Check the calculation of the number of times the body of the nested loop executes by adding an integer count variable to the mirrorTemple method that starts out at 0 and increments inside the body of the loop. Print the value of count after the nested loop ends which should be 18410.
    ~~~~
    import java.awt.*;
    import java.awt.font.*;
    import java.awt.geom.*;
    import java.awt.image.BufferedImage;
    import java.text.*;
    import java.util.*;

    /**
     * A class that represents a picture. This class inherits from SimplePicture and
     * allows the student to add functionality to the Picture class.
     *
     * @author Barbara Ericson ericson@cc.gatech.edu
     */
    public class Picture extends SimplePicture
    {
        ///////////////////// constructors //////////////////////////////////

        /** Constructor that takes no arguments */
        public Picture()
        {
            /* not needed but use it to show students the implicit call to super()
             * child constructors always call a parent constructor
             */
            super();
        }

        /**
         * Constructor that takes a file name and creates the picture
         *
         * @param fileName the name of the file to create the picture from
         */
        public Picture(String fileName)
        {
            // let the parent class handle this fileName
            super(fileName);
        }

        /**
         * Constructor that takes the height and width
         *
         * @param height the height of the desired picture
         * @param width the width of the desired picture
         */
        public Picture(int height, int width)
        {
            // let the parent class handle this width and height
            super(width, height);
        }

        /**
         * Constructor that takes a picture and creates a copy of that picture
         *
         * @param copyPicture the picture to copy
         */
        public Picture(Picture copyPicture)
        {
            // let the parent class do the copy
            super(copyPicture);
        }

        /**
         * Constructor that takes a buffered image
         *
         * @param image the buffered image to use
         */
        public Picture(BufferedImage image)
        {
            super(image);
        }

        ////////////////////// methods ///////////////////////////////////////

        /**
         * Method to return a string with information about this picture.
         *
         * @return a string with information about the picture such as fileName, height
         *     and width.
         */
        public String toString()
        {
            String output =
                    "Picture, filename "
                            + getFileName()
                            + " height "
                            + getHeight()
                            + " width "
                            + getWidth();
            return output;
        }

        /** Method mirrorTemple() fixes the temple.jpg picture */
        public void mirrorTemple()
        {
            int mirrorPoint = 276;
            Pixel leftPixel = null;
            Pixel rightPixel = null;
            int count = 0;
            Pixel[][] pixels = this.getPixels2D();

            // loop through the rows
            for (int row = 27; row < 97; row++)
            {
                // loop from 13 to just before the mirror point
                for (int col = 13; col < mirrorPoint; col++)
                {
                    leftPixel = pixels[row][col];
                    rightPixel = pixels[row][mirrorPoint - col + mirrorPoint];
                    rightPixel.setColor(leftPixel.getColor());
                }
            }
        }

        /* Main method for testing
         */
        public static void main(String[] args)
        {
            Picture pict = new Picture("temple.jpg");
            pict.show();
            pict.mirrorTemple();
            pict.show();
        }
    }

    ====
    import static org.junit.Assert.*;

    import org.junit.*;

    import java.io.*;

    public class RunestoneTests extends CodeTestHelper
    {
        @Test
        public void test1()
        {
            String target = "count = 0";
            boolean passed = checkCodeContains("mirrorTemple() has count = 0", target);
            assertTrue(passed);
        }

        @Test
        public void test2()
        {
            String target = "count++";
            boolean passed = checkCodeContains("mirrorTemple() has count++", target);
            assertTrue(passed);
        }
    }

.. image:: Figures/mirrorarms.png
    :width: 150
    :align: left

2. Write the method ``mirrorArms`` to mirror the arms on the snowperson ("snowperson.jpg") to make a snowperson with 4 arms. Fork |Explorer Repl| and change it to explore snowperson.jpg and find out the pixel coordinates to start and end the mirroring and the mirror point.

.. activecode:: picture-lab-A7-mirrorArms
    :language: java
    :autograde: unittest
    :datafile: pictureClasses.jar, snowperson.jpg

    Picture Lab A7 Mirroring: Write the method mirrorArms to mirror the arms on the snowperson ("snowperson.jpg") to make a snowperson with 4 arms.
    ~~~~
    import java.awt.*;
    import java.awt.font.*;
    import java.awt.geom.*;
    import java.awt.image.BufferedImage;
    import java.text.*;
    import java.util.*;

    /**
     * A class that represents a picture. This class inherits from SimplePicture and
     * allows the student to add functionality to the Picture class.
     *
     * @author Barbara Ericson ericson@cc.gatech.edu
     */
    public class Picture extends SimplePicture
    {
        ///////////////////// constructors //////////////////////////////////

        /** Constructor that takes no arguments */
        public Picture()
        {
            /* not needed but use it to show students the implicit call to super()
             * child constructors always call a parent constructor
             */
            super();
        }

        /**
         * Constructor that takes a file name and creates the picture
         *
         * @param fileName the name of the file to create the picture from
         */
        public Picture(String fileName)
        {
            // let the parent class handle this fileName
            super(fileName);
        }

        /**
         * Constructor that takes the height and width
         *
         * @param height the height of the desired picture
         * @param width the width of the desired picture
         */
        public Picture(int height, int width)
        {
            // let the parent class handle this width and height
            super(width, height);
        }

        /**
         * Constructor that takes a picture and creates a copy of that picture
         *
         * @param copyPicture the picture to copy
         */
        public Picture(Picture copyPicture)
        {
            // let the parent class do the copy
            super(copyPicture);
        }

        /**
         * Constructor that takes a buffered image
         *
         * @param image the buffered image to use
         */
        public Picture(BufferedImage image)
        {
            super(image);
        }

        ////////////////////// methods ///////////////////////////////////////

        /**
         * Method to return a string with information about this picture.
         *
         * @return a string with information about the picture such as fileName, height
         *     and width.
         */
        public String toString()
        {
            String output =
                    "Picture, filename "
                            + getFileName()
                            + " height "
                            + getHeight()
                            + " width "
                            + getWidth();
            return output;
        }

        /** Write the method mirrorArms() to add more arms to snowperson.jpg */

        /* Main method for testing
         */
        public static void main(String[] args)
        {
            Picture pict = new Picture("snowperson.jpg");
            pict.show();
            pict.mirrorArms();
            pict.show();
        }
    }

    ====
    import static org.junit.Assert.*;

    import org.junit.*;

    import java.io.*;

    public class RunestoneTests extends CodeTestHelper
    {
        @Test
        public void test1()
        {
            String target = "public void mirrorArms()";
            boolean passed = checkCodeContains("mirrorArms() method", target);
            assertTrue(passed);
        }

        @Test
        public void test2()
        {
            String target = "row = 155";
            boolean passed = checkCodeContains("starts looping at row = 155", target);
            assertTrue(passed);
        }

        @Test
        public void test2b()
        {
            String target = "191";
            boolean passed = checkCodeContains("mirrors at pixel 191", target);
            assertTrue(passed);
        }

        @Test
        public void test3()
        {
            String target = "for";
            String code = getCode();
            int index = code.indexOf("public void mirrorArms()");
            boolean passed = false;
            if (index > 0)
            {
                code = code.substring(index);
                int num = countOccurences(code, target);
                passed = num >= 4;
            }
            getResults(
                    "true",
                    "" + passed,
                    "Checking that mirrorArms() contains 4 (2 nested) for loops for mirroring arms",
                    passed);
            assertTrue(passed);
        }
    }

.. image:: Figures/mirrorgull.png
    :width: 150
    :align: left

3. Write the method ``mirrorGull`` to mirror the seagull ("seagull.jpg") to the right so
that there are two seagulls on the beach near each other. Fork |Explorer Repl| and change it to explore seagull.jpg and find out the pixel coordinates to start and end the mirroring and the mirror point.


.. activecode:: picture-lab-A7-mirrorGull
    :language: java
    :autograde: unittest
    :datafile: pictureClasses.jar, seagull.jpg

    Picture Lab A7 Mirroring: Write the method mirrorGull to mirror the seagull ("seagull.jpg") to the right so that there are two seagulls on the beach near each other.
    ~~~~
    import java.awt.*;
    import java.awt.font.*;
    import java.awt.geom.*;
    import java.awt.image.BufferedImage;
    import java.text.*;
    import java.util.*;

    /**
     * A class that represents a picture. This class inherits from SimplePicture and
     * allows the student to add functionality to the Picture class.
     *
     * @author Barbara Ericson ericson@cc.gatech.edu
     */
    public class Picture extends SimplePicture
    {
        ///////////////////// constructors //////////////////////////////////

        /** Constructor that takes no arguments */
        public Picture()
        {
            /* not needed but use it to show students the implicit call to super()
             * child constructors always call a parent constructor
             */
            super();
        }

        /**
         * Constructor that takes a file name and creates the picture
         *
         * @param fileName the name of the file to create the picture from
         */
        public Picture(String fileName)
        {
            // let the parent class handle this fileName
            super(fileName);
        }

        /**
         * Constructor that takes the height and width
         *
         * @param height the height of the desired picture
         * @param width the width of the desired picture
         */
        public Picture(int height, int width)
        {
            // let the parent class handle this width and height
            super(width, height);
        }

        /**
         * Constructor that takes a picture and creates a copy of that picture
         *
         * @param copyPicture the picture to copy
         */
        public Picture(Picture copyPicture)
        {
            // let the parent class do the copy
            super(copyPicture);
        }

        /**
         * Constructor that takes a buffered image
         *
         * @param image the buffered image to use
         */
        public Picture(BufferedImage image)
        {
            super(image);
        }

        ////////////////////// methods ///////////////////////////////////////

        /**
         * Method to return a string with information about this picture.
         *
         * @return a string with information about the picture such as fileName, height
         *     and width.
         */
        public String toString()
        {
            String output =
                    "Picture, filename "
                            + getFileName()
                            + " height "
                            + getHeight()
                            + " width "
                            + getWidth();
            return output;
        }

        /**
         * Write the method mirrorGull to mirror the seagull to the right so that there
         * are two seagulls on the beach near each other.
         */

        /* Main method for testing
         */
        public static void main(String[] args)
        {
            Picture pict = new Picture("seagull.jpg");
            pict.show();
            pict.mirrorGull();
            pict.show();
        }
    }

    ====
    import static org.junit.Assert.*;

    import org.junit.*;

    import java.io.*;

    public class RunestoneTests extends CodeTestHelper
    {
        @Test
        public void test1()
        {
            String target = "public void mirrorGull()";
            boolean passed = checkCodeContains("mirrorGull() method", target);
            assertTrue(passed);
        }

        @Test
        public void test2()
        {
            String target = "row = 225";
            boolean passed = checkCodeContains("starts looping at row = 225", target);
            assertTrue(passed);
        }

        @Test
        public void test2b()
        {
            String target = "350";
            boolean passed = checkCodeContains("mirrors at pixel 350", target);
            assertTrue(passed);
        }

        @Test
        public void test3()
        {
            String target = "for";
            String code = getCode();
            int index = code.indexOf("public void mirrorGull()");
            boolean passed = false;
            if (index > 0)
            {
                code = code.substring(index);
                int num = countOccurences(code, target);
                passed = num >= 2;
            }
            getResults("true", "" + passed, "Checking that mirrorGull() contains 2 for loops", passed);
            assertTrue(passed);
        }
    }

Images to use:

.. datafile:: temple.jpg
   :image:
   :fromfile: Figures/temple.jpg

.. datafile:: snowperson.jpg
   :image:
   :fromfile: Figures/snowperson.jpg


.. datafile:: seagull.jpg
   :image:
   :fromfile: Figures/seagull.jpg
