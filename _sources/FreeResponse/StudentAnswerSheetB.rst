.. qnum::
   :prefix:  16-6-
   :start: 1

StudentAnswerSheet - Part B
===============================

**Part b.**  Consider the following class that represents the test results of a group of students that took a
multiple-choice test.

.. code-block:: java

   public class TestResults
   {
       private List<StudentAnswerSheet> sheets;

       /**
        * Precondition: sheets.size() > 0; all answer sheets in sheets have the same
        * number of answers
        *
        * @param key the list of correct answers represented as strings of length one
        *     Precondition: key.size() is equal to the number of answers in each of
        *     the answer sheets in sheets
        * @return the name of the student with the highest score
        */
       public String highestScoringStudent(List<String> key)
       {
           /* to be implemented in part (b) */
       }

       // There may be fields, constructors, and methods that are not shown.
   }

Write the ``TestResults`` method ``highestScoringStudent``, which returns the name of the
student who received the highest score on the test represented by the parameter ``key``.  If there
is more than one student with the highest score, the name of any one of these highest-scoring
students may be returned.  You may assume that the size of each answer sheet represented in ``sheets``
is equal to the size of ``key``.

Try and Solve It
----------------

Complete method ``highestScoringStudent`` below.

The code below has a main method for testing the ``highestScoringStudent`` method.

.. activecode:: StudentAnswerKeyB
   :language: java
   :autograde: unittest

   Complete method ``highestScoringStudent`` below.
   ~~~~
   import java.util.ArrayList;
   import java.util.Arrays;
   import java.util.List;

   class StudentAnswerSheet
   {
       private List<String> answers; // the list of the student's answers
       private String name;

       public StudentAnswerSheet(String nm, List<String> ans)
       {
           name = nm;
           answers = new ArrayList<String>();
           for (String a : ans) answers.add(a);
       }

       /**
        * @param key the list of correct answers, represented as strings of length one
        *     Precondition: key.size() is equal to the number of answers in this
        *     answer sheet
        * @return this student's test score
        */
       public double getScore(ArrayList<String> key)
       {
           double score = 0;
           for (int i = 0; i < key.size(); i++)
           {
               if (key.get(i).equals(answers.get(i)))
               {
                    score = score + 1.0;
               }
               else if (!answers.get(i).equals("?"))
               {
                    score = score - 0.25;
               }
           }
           return score;
       }

       /**
        * @return the name of the student
        */
       public String getName()
       {
           return name;
       }
   }

   public class TestResults
   {
       private ArrayList<StudentAnswerSheet> sheets;

       public TestResults(ArrayList<StudentAnswerSheet> shs)
       {
           sheets = new ArrayList<StudentAnswerSheet>();
           for (StudentAnswerSheet s : shs) sheets.add(s);
       }

       /**
        * Precondition: sheets.size() > 0; all answer sheets in sheets have the same
        * number of answers
        *
        * @param key the list of correct answers represented as strings of length one
        *     Precondition: key.size() is equal to the number of answers in each of
        *     the answer sheets in sheets
        * @return the name of the student with the highest score
        */
       public String highestScoringStudent(ArrayList<String> key)
       {
           // *** Write this method! ***
       }

       public static void main(String[] args)
       {
           ArrayList<String> key =
                   new ArrayList<String>(
                           Arrays.asList(
                                   new String[]
                                   {
                                       "A", "C", "D", "E", "B", "C", "E", "B", "B",
                                       "C"
                                   }));

           ArrayList<String> answers1 =
                   new ArrayList<String>(
                           Arrays.asList(
                                   new String[]
                                   {
                                       "A", "B", "D", "E", "A", "C", "?", "B", "D",
                                       "C"
                                   }));
           StudentAnswerSheet s1 = new StudentAnswerSheet("S1", answers1);
           System.out.println(
                   "Your score for s1 is: "
                           + s1.getScore(key)
                           + " and should be 5.25");

           ArrayList<String> answers2 =
                   new ArrayList<String>(
                           Arrays.asList(
                                   new String[]
                                   {
                                       "A", "?", "D", "E", "A", "C", "?", "B", "D",
                                       "C"
                                   }));
           StudentAnswerSheet s2 = new StudentAnswerSheet("S2", answers2);
           System.out.println(
                   "Your score for s2 is: "
                           + s2.getScore(key)
                           + " and should be 5.5");

           ArrayList<String> answers3 =
                   new ArrayList<String>(
                           Arrays.asList(
                                   new String[]
                                   {
                                       "A", "?", "D", "E", "A", "C", "E", "B", "D",
                                       "C"
                                   }));
           StudentAnswerSheet s3 = new StudentAnswerSheet("S3", answers3);
           System.out.println(
                   "Your score for s3 is: "
                           + s3.getScore(key)
                           + " and should be 6.5");

           ArrayList<String> answers4 =
                   new ArrayList<String>(
                           Arrays.asList(
                                   new String[]
                                   {
                                       "A", "C", "D", "E", "A", "C", "E", "B", "D",
                                       "C"
                                   }));
           StudentAnswerSheet s4 = new StudentAnswerSheet("S4", answers4);
           System.out.println(
                   "Your score for s4 is: "
                           + s4.getScore(key)
                           + " and should be 7.5");

           ArrayList<StudentAnswerSheet> sheets = new ArrayList<StudentAnswerSheet>();
           sheets.add(s1);
           sheets.add(s2);
           sheets.add(s3);
           sheets.add(s4);

           TestResults results = new TestResults(sheets);
           System.out.println(
                   "Your best is: "
                           + results.highestScoringStudent(key)
                           + " and should be S4");
       }
   }

   ====
   import static org.junit.Assert.*;

   import org.junit.*;

   import java.io.*;
   import java.util.ArrayList;
   import java.util.Arrays;

   public class RunestoneTests extends CodeTestHelper
   {
       public RunestoneTests()
       {
           super("TestResults");
           // CodeTestHelper.sort = true;
       }

       @Test
       public void testMain1()
       {
           boolean passed = false;

           String expect =
                   "Your score for s1 is: 5.25 and should be 5.25\n"
                       + "Your score for s2 is: 5.5 and should be 5.5\n"
                       + "Your score for s3 is: 6.5 and should be 6.5\n"
                       + "Your score for s4 is: 7.5 and should be 7.5\n"
                       + "Your best is: S4 and should be S4";

           String output = getMethodOutput("main");

           passed = getResults(expect, output, "Checking for expected output");
           assertTrue(passed);
       }

       @Test
       public void testMain2()
       {
           boolean passed = false;

           String keyList = "A A A B B B C C C D D D E E E";
           String ansList1 = "A B ? B C ? C D ? D E ? E A ?";
           String ansList2 = "A B D B C D C D B D E C E A B";
           String ansList3 = "A A A B B B C C C D D D E E E";
           String ansList4 = "B B B B B B C C C C C C E E E";

           ArrayList<String> key = new ArrayList<String>(Arrays.asList(keyList.split(" ")));

           ArrayList<String> answers1 = new ArrayList<String>(Arrays.asList(ansList1.split(" ")));
           ArrayList<String> answers2 = new ArrayList<String>(Arrays.asList(ansList2.split(" ")));
           ArrayList<String> answers3 = new ArrayList<String>(Arrays.asList(ansList3.split(" ")));
           ArrayList<String> answers4 = new ArrayList<String>(Arrays.asList(ansList4.split(" ")));

           StudentAnswerSheet s1 = new StudentAnswerSheet("S1", answers1);
           StudentAnswerSheet s2 = new StudentAnswerSheet("S2", answers2);
           StudentAnswerSheet s3 = new StudentAnswerSheet("S2", answers3);
           StudentAnswerSheet s4 = new StudentAnswerSheet("S2", answers4);

           ArrayList<StudentAnswerSheet> sheets = new ArrayList<StudentAnswerSheet>();
           sheets.add(s1);
           sheets.add(s2);
           sheets.add(s3);
           sheets.add(s4);

           TestResults results = new TestResults(sheets);

           // change this next line
           String output = "Your best is: " + results.highestScoringStudent(key);

           String expect = "Your best is: S2";

           passed = getResults(expect, output, "Checking for expected output");
           assertTrue(passed);
       }
   }

