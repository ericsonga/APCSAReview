.. qnum::
   :prefix: 1-8-
   :start: 1   

Unit 1 Mixed Up/Write Code Practice
====================================

These are the equivalent Write-Code problems.


.. activecode:: u1_muc_wc1
        :language: java
        :practice: T
        :autograde: unittest
   
        Write code that prints Maria's first name on one line and her last name on the next line. 
        ~~~~
        public class Test1 
        {
            public static void main(String[] args) 
            {
              String firstName = "Maria";
              String lastName = "Hernandez";

              // Add your code here
              
              
            }
         }
         ====
         import static org.junit.Assert.*;
          import org.junit.*;
          import java.io.*;

          public class RunestoneTests extends CodeTestHelper
          {
              public RunestoneTests() {
                  super("Test1");
              }

              @Test
              public void test1()
              {
                  String output = getMethodOutput("main");
                  String expect = "Maria\nHernandez";

                  boolean passed = getResults(expect, output, "Running main");
                  assertTrue(passed);
              }
          }

   
.. activecode:: u1_muc_wc2
        :language: java
        :practice: T
        :autograde: unittest
   
        Write code that prints the poem ``Roses are red`` ``Violets are blue`` ``Sugar is sweet`` ``And so are you`` with 1 sentence on each line.
        ~~~~
        public class Test1 
        {
            public static void main(String[] args) 
            {
              // Add your code here
              
              
            }
         }
         ====
         import static org.junit.Assert.*;
          import org.junit.*;
          import java.io.*;

          public class RunestoneTests extends CodeTestHelper
          {
              public RunestoneTests() {
                  super("Test1");
              }

              @Test
              public void test1()
              {
                  String output = getMethodOutput("main");
                  String expect = "Roses are red\nViolets are blue\nSugar is sweet\nAnd so are you";

                  boolean passed = getResults(expect, output, "Running main");
                  assertTrue(passed);
              }
          }
          
