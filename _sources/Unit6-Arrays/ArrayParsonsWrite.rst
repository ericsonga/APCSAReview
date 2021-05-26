

Alternative Write Code Problems for Parsons Problems
=======================================================

.. activecode:: u6ex1muc_wc
   :language: java
   :autograde: unittest
   :practice: T

   Finish the code below to loop from 0 to less than the length of the array and double each element in the array ``arr`` and also print out each new value on the same line separated by ", " -- the finished code should print "2, 4, 6, 8, 10, ".
   ~~~~
   public class Test1
   {
       public static void main(String[] args)
       {
           int[] arr = {1, 2, 3, 4, 5};

           // loop from 0 to less than the length of the array

               // double the value of each item

               // print the value of each item on one line with ", " after each
       }
   }

   ====
   import static org.junit.Assert.*;
   import org.junit.*;;
   import java.io.*;

   public class RunestoneTests extends CodeTestHelper
   {
         @Test
         public void testOuptut() throws IOException
         {
             String output = getMethodOutput("main");
             String expect = "2, 4, 6, 8, 10, ";
             boolean passed = getResults(expect, output, "Expected output from main");
             assertTrue(passed);
         }

         @Test
         public void testCodeContainsType()
         {
           boolean passed = checkCodeContains("correct array data type", "int[] arr");
           assertTrue(passed);
         }

         @Test
         public void testCodeContainsForLoop()
         {
           boolean passed = checkCodeContains("for loop", "for")
           assertTrue(passed);
         }

   }
