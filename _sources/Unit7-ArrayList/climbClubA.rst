.. qnum::
   :prefix: 7-4-2-
   :start: 1

Free Response - Climbing Club A
================================

.. index::
    single: ClimbingClub
    single: free response

The following is part a of a free response question from 2012.  It was question 1 on the exam.  You can see all the free response questions from past exams at https://apstudents.collegeboard.org/courses/ap-computer-science-a/free-response-questions-by-year.

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

**Part a.**  Write an implementation of the ``ClimbingClub`` method ``addClimb`` that stores the ``ClimbInfo``
objects in the order they were added. This implementation of ``addClimb`` should create a new
``ClimbInfo`` object with the given name and time. It appends a reference to that object to the end of
climbList. For example, consider the following code segment.

.. code-block:: java

   ClimbingClub hikerClub = new ClimbingClub();
   hikerClub.addClimb("Monadnock", 274);
   hikerClub.addClimb("Whiteface", 301);
   hikerClub.addClimb("Algonquin", 225);
   hikerClub.addClimb("Monadnock", 344);

When the code segment has completed executing, the instance variable ``climbList`` would contain the
following entries.

.. image:: Figures/climbClubA.png
   :alt: Picture of the list after the above code executes
   :align: center
   :width: 500

How To Solve This
-------------------

Click to reveal the algorithm and practice problems to help you write your solution.

.. reveal:: algorithm_climbA_r1
   :showtitle: Reveal Algorithm
   :hidetitle: Hide Algorithm
   :optional:

   In the ``addClimb`` method you need to create a new ``ClimbInfo`` object and initialize the ``peakName`` and ``climbTime``.  How do you create a new object of a class and initialize the fields?

   Once you have created the ``ClimbInfo`` object you want to add it in the order they were created.  To do this you can add it to the end of the ``climbList``.  How do you add an object to the end of a list?

.. reveal:: fr_climbA_r1
   :showtitle: Reveal Problems
   :hidetitle: Hide Problems
   :optional:

   .. mchoice:: fr_climbA_1
        :answer_a: ClimbInfo newClimb = new ClimbInfo("Everest", 600);
        :answer_b: new ClimbInfo("Everest", 600);
        :answer_c: ClimbInfo newClimb = new ClimbInfo();
        :correct: a
        :feedback_a: Correct!
        :feedback_b: This answer is missing the instantiation of the variable newClimb. Try again!
        :feedback_c: The constructor of a ClimbInfo object requires two arguments. Try again!

        How would you create a new object newClimb of the ClimbInfo class, with a peakName of Everest and climbTime of 600?

   .. mchoice:: fr_climbA_2
        :answer_a: list.add(0, 7);
        :answer_b: list.add(7);
        :answer_c: add(7);
        :correct: b
        :feedback_a: This would add 7 to the beginning of the list. Try again!
        :feedback_b: Correct!
        :feedback_c: You must reference the ArrayList list using a dot operator to use the add() method. Try again!

        How do you append a new item, 7, to the end of a non-empty ArrayList<Integer> list?

Try and Solve It
-------------------



.. activecode:: ClimbClubA
   :language: java
   :autograde: unittest

   Complete the method ``addClimb`` in the ``ClimbingClub`` class in the code below.  The code includes a ``main`` method that will test the ``addClimb`` method.
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
        * The list of climbs completed by members of the club. * Guaranteed not to be
        * null. Contains only non-null references.
        */
       private List<ClimbInfo> climbList;

       /** Creates a new ClimbingClub object. */
       public ClimbingClub()
       {
           climbList = new ArrayList<ClimbInfo>();
       }

       /**
        * Adds a new climb with name peakName and time climbTime to the end of the
        * list of climbs
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
           // test a
           ClimbingClub hikerClub = new ClimbingClub();
           hikerClub.addClimb("Monadnock", 274);
           hikerClub.addClimb("Whiteface", 301);
           hikerClub.addClimb("Algonquin", 225);
           hikerClub.addClimb("Monadnock", 344);
           System.out.print(hikerClub);
           System.out.println(
                   "The order printed above should be Monadnock, Whiteface,"
                       + " Algonquin, Monadnock");
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

           String expect =
                   "Peak name: Monadnock time: 274\n"
                       + "Peak name: Whiteface time: 301\n"
                       + "Peak name: Algonquin time: 225\n"
                       + "Peak name: Monadnock time: 344\n";

           expect =
                   expect
                           + "The order printed above should be Monadnock, Whiteface, Algonquin,"
                           + " Monadnock\n";

           boolean passed = getResults(expect, output, "Expected output from main");
           assertTrue(passed);
       }

       @Test
       public void test1()
       {
           ClimbingClub hikerClub = new ClimbingClub();
           hikerClub.addClimb("Monadnock", 274);
           hikerClub.addClimb("Whiteface", 301);
           hikerClub.addClimb("Algonquin", 225);
           hikerClub.addClimb("Monadnock", 344);

           String output = hikerClub.toString();

           String expect =
                   "Peak name: Monadnock time: 274\n"
                       + "Peak name: Whiteface time: 301\n"
                       + "Peak name: Algonquin time: 225\n"
                       + "Peak name: Monadnock time: 344\n";

           boolean result = (output.compareTo(expect) == 0);

           boolean passed =
                   getResults(
                           "true",
                           "" + result,
                           "addClimb method works with arguments Monadnock: 274, Whiteface:301,"
                               + " Algonquin: 225, Monadnock: 344");

           assertTrue(passed);
       }
   }

Video - One way to code the solution
-------------------------------------

There are many possible solutions to this problem.  The video below shows one solution.

.. the video is 2012Q1A.mov

The following video is also on YouTube at https://youtu.be/dAbU9_Qn92I.  It walks through coding a solution.

.. youtube:: dAbU9_Qn92I
    :width: 800
    :align: center


