.. qnum::
   :prefix: 7-4-3-
   :start: 1

Free Response - Climbing Club B
================================

.. index::
    single: ClimbingClub
    single: free response

The following is part b of a free response question from 2012.  It was question 1 on the exam.  You can see all the free response questions from past exams at https://apstudents.collegeboard.org/courses/ap-computer-science-a/free-response-questions-by-year.

**Question 1.**  A mountain climbing club maintains a record of the climbs that its members have made. Information about a
climb includes the name of the mountain peak and the amount of time it took to reach the top. The information is
contained in the ``ClimbInfo`` class as declared below.

.. code-block:: java

   public class ClimbInfo
   {
       /**
        * Creates a ClimbInfo object with name peakName and time climbTime.
        *
        * @param peakName the name of the mountain peak
        * @param climbTime the number of minutes taken to complete the climb
        */
       public ClimbInfo(String peakName, int climbTime)
       {
           /* implementation not shown */
       }

       /**
        * @return the name of the mountain peak
        */
       public String getName()
       {
           /* implementation not shown */
       }

       /**
        * @return the number of minutes taken to complete the climb
        */
       public int getTime()
       {
           /* implementation not shown */
       }

       // There may be instance variables, constructors, and methods
       // that are not shown.
   }

The ``ClimbingClub`` class maintains a list of the climbs made by members of the club. The declaration of the
``ClimbingClub`` class is shown below. You will write two different implementations of the ``addClimb``
method. You will also answer two questions about an implementation of the ``distinctPeakNames`` method

.. code-block:: java

   public class ClimbingClub
   {
       /**
        * The list of climbs completed by members of the club. Guaranteed not to be
        * null. Contains only non-null references.
        */
       private List<ClimbInfo> climbList;

       /** Creates a new ClimbingClub object. */
       public ClimbingClub()
       {
           climbList = new ArrayList<ClimbInfo>();
       }

       /**
        * Adds a new climb with name peakName and time climbTime to the list of
        * climbs.
        *
        * @param peakName the name of the mountain peak climbed
        * @param climbTime the number of minutes taken to complete the climb
        */
       public void addClimb(String peakName, int climbTime)
       {
           /* to be implemented in part (a) */
       }

       /**
        * @return the number of distinct names in the list of climbs
        */
       public int distinctPeakNames()
       {
           /* implementation shown in part (c) */
       }

       // There may be instance variables, constructors, and methods
       // that are not shown.
   }

**Part b.**  Write an implementation of the ``ClimbingClub`` method ``addClimb`` that stores the elements of
``climbList`` in alphabetical order by name (as determined by the ``compareTo`` method of the ``String``
class). This implementation of ``addClimb`` should create a new ``ClimbInfo`` object with the given name
and time and then insert the object into the appropriate position in ``climbList``. Entries that have the
same name will be grouped together and can appear in any order within the group. For example, consider the
following code segment.

.. code-block:: java

   ClimbingClub hikerClub = new ClimbingClub();
   hikerClub.addClimb("Monadnock", 274);
   hikerClub.addClimb("Whiteface", 301);
   hikerClub.addClimb("Algonquin", 225);
   hikerClub.addClimb("Monadnock", 344);

When the code segment has completed execution, the instance variable ``climbList`` would contain the
following entries in either of the orders shown below.

.. image:: Figures/climbClubB.png
   :alt: Picture of the list after the above code executes
   :align: center
   :width: 500

Walk Through the Example
--------------------------

#. First you will create a new ``ClimbInfo`` object with a ``peakName`` of Monadnock and a ``climbTime`` of 274 and insert it in the empty ``climbList``.
#. Next you will create a new ``ClimbInfo`` object with a ``peakName`` of Whiteface and a ``climbTime`` of 301.  You will compare the ``peakName`` of Whiteface to Monadnock and since it is greater you will try to continue but you will have reached the end of the ``climbList`` so you will insert it there.
#. Next you will create a new ``ClimbInfo`` object with a ``peakName`` of Algonquin and a ``climbTime`` of 225.  You will compare Algonquin to Monadnock and since Algonquin is less than Monadnock you will insert it at position 0.
#. Next you will create a new ``ClimbInfo`` object with a ``peakName`` of Monadnock and a ``climbTime`` of 334. You will compare Monadnock to Algonquin and since it is greater you will continue.  You will next check Monadnock to Monadnock and since they are equal you can insert it there.

How To Solve This
-------------------

Click to reveal the algorithm and problems to help you write your solution.

.. reveal:: algorithm_climbB_r1
   :showtitle: Reveal Algorithm
   :hidetitle: Hide Algorithm
   :optional:

   Loop through the elements of ``climbList`` until you find the index where the new peakName is less than the peakName of the ``ClimbInfo`` object at the current index.  Insert the new ``ClimbInfo`` object there.


.. reveal:: fr_climbB_r1
   :showtitle: Reveal Problems
   :hidetitle: Hide Problems
   :optional:

   .. mchoice:: fr_climbB_1
        :answer_a: while
        :answer_b: for
        :answer_c: for-each
        :correct: a
        :feedback_a: Correct! While loops are perfect when you don't always need to loop through the whole list.
        :feedback_b: Try again. For loops are typically used when it is necessary to access every element in a list.
        :feedback_c: Try again. For each loops automatically loop through every element in a list, but this problem doesn't require that.

        What type of loop should you use to find the first place that the new peakName is less than the current element's peakName?

   .. mchoice:: fr_climbB_2
        :answer_a: add()
        :answer_b: add(ClimbInfo elmt)
        :answer_c: add(int i, ClimbInfo elmt)
        :correct: c
        :feedback_a: There are two versions of the add method for ArrayLists. Both require at least one argument.
        :feedback_b: This will add the element to the end of the list rather than at a specific index.
        :feedback_c: Correct! This will add elmt at the ith index in your list.

        What ArrayList method allows you to add a new element at a specific index in a list?

   .. mchoice:: fr_climbB_3
        :answer_a: true
        :answer_b: false
        :correct: b
        :feedback_a: s1 starts with "B", so it is less than s1, which starts with "K". This means compareTo would return a negative number, not a positive number.
        :feedback_b: Correct! "Bee" is less than "Kiwi", so value would be false after running this code.

        What will be stored in value after running this code:

        .. code-block:: java

            String s1 = "Bee";
            String s2 = "Kiwi";
            boolean value = false;
            if (s1.compareTo(s2) > 0){
                boolean value = true;
            }

Try and Solve It
-------------------

Complete the method ``addClimb`` in the ``ClimbingClub`` class in the code below.  It should create a new ``ClimbInfo`` object and insert it in alphabetical order by ``peakName`` in the ``climbList``.  The code includes a ``main`` method that will test the ``addClimb`` method.



.. activecode:: ClimbClubB
   :language: java
   :autograde: unittest

   FRQ Climb Club B: complete the method addClimb below.
   ~~~~
   import java.util.ArrayList;
   import java.util.List;

   class ClimbInfo
   {
       private String name;
       private int time;

       /**
        * Creates a ClimbInfo object with name peakName and time climbTime.
        *
        * @param peakName the name of the mountain peak
        * @param climbTime the number of minutes taken to complete the climb
        */
       public ClimbInfo(String peakName, int climbTime)
       {
           name = peakName;
           time = climbTime;
       }

       /**
        * @return the name of the mountain peak
        */
       public String getName()
       {
           return name;
       }

       /**
        * @return the number of minutes taken to complete the climb
        */
       public int getTime()
       {
           return time;
       }

       public String toString()
       {
           return "Peak name: " + name + " time: " + time;
       }
   }

   public class ClimbingClub
   {
       /**
        * The list of climbs completed by members of the club. Guaranteed not to be
        * null. Contains only non-null references.
        */
       private List<ClimbInfo> climbList;

       /** Creates a new ClimbingClub object. */
       public ClimbingClub()
       {
           climbList = new ArrayList<ClimbInfo>();
       }

       /**
        * Adds a new climb with name peakName and time climbTime to the list of climbs
        * in order by name
        *
        * @param peakName the name of the mountain peak climbed
        * @param climbTime the number of minutes taken to complete the climb
        */
       public void addClimb(String peakName, int climbTime) {}

       public String toString()
       {
           String output = "";
           for (ClimbInfo info : climbList)
           {
               output = output + info.toString() + "\n";
           }
           return output;
       }

       public static void main(String[] args)
       {
           ClimbingClub hikerClub = new ClimbingClub();
           hikerClub.addClimb("Monadnock", 274);
           hikerClub.addClimb("Whiteface", 301);
           hikerClub.addClimb("Algonquin", 225);
           hikerClub.addClimb("Monadnock", 344);
           System.out.print(hikerClub);
           System.out.println(
                   "The order printed above should be Algonquin, Monadnock,"
                       + " Monadnock, Whiteface");
       }
   }

   ====
   import static org.junit.Assert.*;

   import org.junit.*;

   import java.io.*;

   public class RunestoneTests extends CodeTestHelper
   {

       public RunestoneTests()
       {
           super("ClimbingClub");
       }

       @Test
       public void testMain() throws IOException
       {
           String output = getMethodOutput("main");

           String expect1 =
                   "The order printed above should be Algonquin, Monadnock, Monadnock, Whiteface";

           boolean passed = output.contains(expect1);

           getResults(expect1, output, "Expected output from main", passed);

           assertTrue(passed);
       }

       @Test
       public void test1()
       {
           ClimbingClub hikerClub = new ClimbingClub();
           hikerClub.addClimb("Mount B", 200);
           hikerClub.addClimb("Mount C", 300);
           hikerClub.addClimb("Mount A", 225);

           String output = hikerClub.toString();

           String expect1 =
                   "Peak name: Mount A time: 225\n"
                       + "Peak name: Mount B time: 200\n"
                       + "Peak name: Mount C time: 300";

           boolean passed = (getResults(expect1, output, "addClimb on new input with sorting works"));
           assertTrue(passed);
       }
   }

Video - One way to code the solution
-------------------------------------

There are many possible solutions to this problem.  The video below shows one solution.

.. the video is 2012Q1B.mov

The following video is also on YouTube at https://youtu.be/Fye33yPQk-g.  It walks through coding a solution.

.. youtube:: Fye33yPQk-g
    :width: 800
    :align: center
