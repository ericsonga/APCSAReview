.. qnum::
   :prefix: 3-10-
   :start: 1   

Unit 3 Write Code for Toggle Code
=========================================================

This is the write code problems associated with the mixed up code problems.

.. activecode:: u3_muc_wc1
        :language: java
        :practice: T
        :autograde: unittest
   
        Write code that tests guess to see if it is equal to answer or too high or too low. If it is too high as in the example below, it should print out ``Your guess is too high``.
        ~~~~
        public class Test1 
        {
            public static void main(String[] args) 
            {
                int guess = 10;
                int answer = 5;

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
                String expect = "Your guess is too high";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }

            @Test
            public void test2()
            {
                String code = getCodeWithoutComments();
                int count = countOccurences(code, "if");
                boolean passed = getResults(""+2, ""+count, "Counting number of ifs");
                assertTrue(passed);
            }

            @Test
            public void test3()
            {
                String code = getCodeWithoutComments();
                int count = countOccurences(code, "else");
                boolean passed = getResults(""+2, ""+count, "Counting number of elses");
                assertTrue(passed);
            }

            @Test
            public void test4()
            {
                String code = getCodeWithoutComments();
                int count = countOccurences(code, "else if");
                boolean passed = getResults(""+1, ""+count, "Counting number of else ifs");
                assertTrue(passed);
            }
        }

   
.. activecode:: u3_muc_wc2
        :language: java
        :practice: T
        :autograde: unittest
   
        Write code that prints ``You can go out`` if you don’t have any homework and have cleaned and otherwise prints ``You can not go out``. 
        ~~~~
        public class Test1 
        {
            public static void main(String[] args) 
            {
               boolean homeworkLeft = false;
               boolean cleaned = true;
               // Add your code here
              
              
            }
        }
        ====
        // ch4ex2muc
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
                String expect = "You can go out";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }
             @Test
            public void test2()
            {
                String code = getCodeWithoutComments();
                int count = countOccurences(code, "if");
                boolean passed = getResults(""+1, ""+count, "Counting number of ifs");
                assertTrue(passed);
            }

            @Test
            public void test3()
            {
                String code = getCodeWithoutComments();
                int count = countOccurences(code, "else");
                boolean passed = getResults(""+1, ""+count, "Counting number of elses");
                assertTrue(passed);
            }


        }
          
.. activecode:: u3_muc_wc3
        :language: java
        :practice: T
        :autograde: unittest
   
        Write code that tests if x is between 1 and 10, and prints ``1 <= x <= 10`` or ``x is not in range``.
        ~~~~
        public class Test1 
        {
            public static void main(String[] args) 
            {
               int x = 3;

               // Add your code here
              
              
            }
        }
        ====
		import static org.junit.Assert.*;
		import org.junit.*;;
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
                String expect = "1 <= x <= 10";

                boolean passed = getResults(expect, output, "Running main");
                assertTrue(passed);
            }
             @Test
            public void test2()
            {
                String code = getCodeWithoutComments();
                int count = countOccurences(code, "if");
                boolean passed = getResults(""+1, ""+count, "Counting number of ifs");
                assertTrue(passed);
            }

            @Test
            public void test3()
            {
                String code = getCodeWithoutComments();
                int count = countOccurences(code, "else");
                boolean passed = getResults(""+1, ""+count, "Counting number of elses");
                assertTrue(passed);
            }
            @Test
            public void test4()
            {
                boolean passed = checkCodeContains("x >= 1 && x <= 10");
                assertTrue(passed);
            }
	

		}
		
