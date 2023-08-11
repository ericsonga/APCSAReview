.. include:: ../common.rst

.. qnum::
   :prefix: 6-3-
   :start: 1

|Time45|

Enhanced For-Loop (For-Each) for Arrays
=======================================

.. index::
   single: for-each
   pair: loop; for-each

There is a special kind of loop that can be used with arrays that is called an **enhanced for loop** or a **for each loop**. This loop is much easier to write because it does not involve an index variable or the use of the []. It just sets up a variable that is set to each value in the array successively.

To set up a for-each loop, use **for (type variable : arrayname)** where the type is the type for elements in the array, and read it as "for each variable value in arrayname". You may have used a similar loop in AP CSP Pseudocode or App Inventor with lists like below.


.. figure:: Figures/appinvForEachComparison.png
    :width: 100%
    :align: center
    :figclass: align-center

    Figure 1: Comparing App Inventor, AP CSP, and Java for each

See the examples below in Java that loop through an int and a String array. Notice the type of the loop variable is the type of the array.

.. code-block:: java

  int[] highScores = { 10, 9, 8, 8};
  String[] names = {"Jamal", "Emily", "Destiny", "Mateo"};
  // for each loop: for each value in highScores
  // for (type variable : arrayname)
  for (int value : highScores)
  {
      // Notice no index or [ ], just the variable value!
      System.out.println( value );
  }
  // for each loop with a String array to print each name
  // the type for variable name is String!
  for (String name : names)
  {
      System.out.println(name);
  }

Use the enhanced for each loop with arrays whenever you can, because it cuts down on errors. You can use it whenever you need to loop through all the elements of an array and don't need to know their index and don't need to change their values.  It starts with the first item in the array (the one at index 0) and continues through in order to the last item in the array. This type of loop can only be used with arrays and some other collections of items like ArrayLists which we will see in the next unit.

|CodingEx| **Coding Exercise**



.. activecode:: foreach1
   :language: java
   :autograde: unittest

   Try the following code. Notice the for each loop with an int array and a String array. Add another high score and another name to the arrays and run again.
   ~~~~
   public class ForEachDemo
   {
       public static void main(String[] args)
       {
           int[] highScores = {10, 9, 8, 8};
           String[] names = {"Jamal", "Emily", "Destiny", "Mateo"};
           // for each loop with an int array
           for (int value : highScores)
           {
               System.out.println(value);
           }
           // for each loop with a String array
           for (String value : names)
           {
               System.out.println(value); // this time it's a name!
           }
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
            super("ForEachDemo");
        }

        @Test
        public void test1()
        {
            String output = getMethodOutput("main");
            String expect1 = "10\n9\n8\n8";
            String expect2 = "Jamal\nEmily\nDestiny\nMateo";

            boolean passed = output.contains(expect1) && output.contains(expect2);

            passed = getResults(expect1 + " " + expect2, output, "Original main()", passed);
            assertTrue(passed);
        }

        @Test
        public void test2()
        {
            String output = getMethodOutput("main");
            String expect = "10 9 8 8 Jamal Emily Destiny Mateo".replaceAll(" ", "\n");

            boolean passed = !output.equals(expect) && output.length() > expect.length();

            passed = getResults(expect, output, "Added another high score and name", passed);
            assertTrue(passed);
        }
    }

|CodingEx| **Coding Exercise**



.. activecode:: evenLoop
   :language: java
   :autograde: unittest
   :practice: T

   Rewrite the following for loop which prints out the even numbers in the array as an enhanced for-each loop. Make sure it works!
   ~~~~
   public class EvenLoop
   {
       public static void main(String[] args)
       {
           int[] values = {6, 2, 1, 7, 12, 5};
           // Rewrite this loop as a for each loop and run
           for (int i = 0; i < values.length; i++)
           {
               if (values[i] % 2 == 0)
               {
                   System.out.println(values[i] + " is even!");
               }
           }
       }
   }

   ====
   // Test for Lesson 6.3.2 - EvenLoop

   import static org.junit.Assert.*;

   import org.junit.*;

   import java.io.*;

   public class RunestoneTests extends CodeTestHelper
   {
       public RunestoneTests()
       {
           super("EvenLoop");
       }

       @Test
       public void test1()
       {
           String output = getMethodOutput("main");
           String expect = "6 is even!\n2 is even!\n12 is even!";

           boolean passed = getResults(expect, output, "main()");
           assertTrue(passed);
       }

       @Test
       public void test2()
       {
           boolean passed = checkCodeContains("for each loop", "for(int * : values)");
           assertTrue(passed);
       }
   }

Foreach Loop Limitations
--------------------------

.. |visualizer| raw:: html

   <a href="http://www.pythontutor.com/visualize.html#code=%20%20%20public%20class%20IncrementLoop%0A%20%20%20%7B%20%20%20%20%20%20%0A%20%20%20%20%20%20public%20static%20void%20main%28String%5B%5D%20args%29%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20int%5B%20%5D%20values%20%3D%20%7B6,%202,%201,%207,%2012,%205%7D%3B%0A%20%20%20%20%20%20%20%20//%20Can%20this%20loop%20increment%20the%20values%3F%0A%20%20%20%20%20%20%20%20for%20%28int%20val%20%3A%20values%29%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20val%2B%2B%3B%0A%20%20%20%20%20%20%20%20%20%20System.out.println%28%22New%20val%3A%20%22%20%2B%20val%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20//%20Print%20out%20array%20to%20see%20if%20they%20really%20changed%0A%20%20%20%20%20%20%20%20for%20%28int%20v%20%3A%20values%29%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20System.out.print%28v%20%2B%20%22%20%22%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%7D%0A%20%20%20&cumulative=false&curInstr=0&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=java&rawInputLstJSON=%5B%5D&textReferences=false&curInstr=0" target="_blank"  style="text-decoration:underline">Java visualizer</a>

What if we had a loop that incremented all the elements in the array. Would that work with an enhanced for-each loop? Unfortunately not! Because only the variable in the loop changes, not the real array values. We would need an indexed loop to modify array elements. Try it in the Active Code below or in the |visualizer| by clicking the CodeLens button and step through the code to see why it doesn't work.

|CodingEx| **Coding Exercise**


.. activecode:: incrementLoop
   :language: java
   :autograde: unittest
   :practice: T

   The for-each loop below cannot change the values in the array because only the loop variable value will change. Run it with the CodeLens button to see why this is. Then, change the loop to an indexed for loop to make it change the array values.
   ~~~~
   public class IncrementLoop
   {
       public static void main(String[] args)
       {
           int[] values = {6, 2, 1, 7, 12, 5};
           // Can this loop increment the values?
           for (int val : values)
           {
               val++;
               System.out.println("New val: " + val);
           }
           // Print out array to see if they really changed
           System.out.println("Array after the loop: ");
           for (int v : values)
           {
               System.out.print(v + " ");
           }
       }
   }

   ====
   // Test for Lesson 6.3.3 - IncrementLoop

   import static org.junit.Assert.*;

   import org.junit.*;

   import java.io.*;

   public class RunestoneTests extends CodeTestHelper
   {
       public RunestoneTests()
       {
           super("IncrementLoop");
       }

       @Test
       public void test1()
       {
           String output = getMethodOutput("main");
           String expect =
                   "New val: 7\n"
                       + "New val: 3\n"
                       + "New val: 2\n"
                       + "New val: 8\n"
                       + "New val: 13\n"
                       + "New val: 6\n"
                       + "Array after the loop:\n"
                       + "7 3 2 8 13 6";

           boolean passed = getResults(expect, output, "main()");
           assertTrue(passed);
       }

       @Test
       public void test2()
       {
           String target = "for (int * = #; * ? *.length; *~)";
           boolean passed = checkCodeContains("for loop", target);
           assertTrue(passed);
       }
   }

.. note::

   Enhanced for each loops cannot be used in all situations. Only use for-each loops when you want to loop through **all** the values in an array without changing their values.

   - Do not use for each loops if you need the index.
   - Do not use for each loops if  you need to change the values in the array.
   - Do not use for each loops if you want to loop through only part of an array or in a different order.




|Exercise| **Check Your Understanding**

.. mchoice:: qab_6A
   :practice: T
   :answer_a: Only I.
   :answer_b: I and III only.
   :answer_c: II and III only.
   :answer_d: All of the Above.
   :correct: b
   :feedback_a: This style of loop does access every element of the array, but using a for-each loop also means the user can access elements through the variable name.
   :feedback_b: Correct! For-each loops access all elements and enable users to use a variable name to refer to array elements, but do not allow users to modify elements directly.
   :feedback_c: For-each loops, as well as allowing users to refer to array elements, run through every element. For-each loops also do not allow users to modify elements directly.
   :feedback_d: For-each loops access all of an array's elements and allow users to refer to elements through a variable, but do not allow users to modify elements directly.


   What are some of the reasons you would use an enhanced for-each loop instead of a for loop?

   .. code-block:: java

      I: If you wish to access every element of an array.
      II: If you wish to modify elements of the array.
      III: If you wish to refer to elements through a variable name instead of an array index.


.. mchoice:: qfor-each
   :practice: T

   What is the output of the following code segment?

   .. code-block:: java

      int[ ] numbers = {44, 33, 22, 11};
      for (int num : numbers)
      {
          num *= 2;
      }
      for (int num : numbers)
      {
          System.out.print(num + " ");
      }

   - 44 33 22 11

     + The array is unchanged because the foreach loop cannot modify the array elements.

   - 46 35 24 13

     - Remember that the foreach loop cannot modify the array elements, but it also uses multiplication, not addition.

   - 88 66 44 22

     - Remember that the foreach loop cannot modify the array elements. Only the variable num will be doubled, not the original array values.

   - The code will not compile.

     - This code will compile.


Foreach Loop Algorithms
--------------------------



.. |Java visualizer| raw:: html

   <a href="http://www.pythontutor.com/java.html#code=public+class+ArrayWorker%0A%7B%0A+++private+int%5B+%5D+values%3B%0A%0A+++public+ArrayWorker(int%5B%5D+theValues)%0A+++%7B%0A++++++values+%3D+theValues%3B%0A+++%7D%0A%0A+++public+double+getAverage()%0A+++%7B%0A+++++double+total+%3D+0%3B%0A+++++for+(int+val+%3A+values)%0A+++++%7B%0A+++++++total++%3D+total+%2B+val%3B%0A+++++%7D%0A+++++return+total+/+values.length%3B%0A+++%7D%0A%0A+++public+static+void+main(String%5B%5D+args)%0A+++%7B%0A+++++int%5B%5D+numArray+%3D++%7B2,+6,+7,+12,+5%7D%3B%0A+++++ArrayWorker+aWorker+%3D+new+ArrayWorker(numArray)%3B%0A+++++System.out.println(aWorker.getAverage())%3B%0A+++%7D%0A%7D%0A%0A&mode=display&curInstr=0" target="_blank"  style="text-decoration:underline">Java visualizer</a>


Here is an object-oriented example that has the array as a private instance variable in the class and provides a public method average that uses a for-each loop.  You can use the |Java Visualizer| or the Code Lens button to step through this code.


.. activecode:: lcaf2
   :language: java
   :autograde: unittest

   Try the code below.
   ~~~~
   public class ArrayWorker
   {
       private int[] values;

       public ArrayWorker(int[] theValues)
       {
           values = theValues;
       }

       public double getAverage()
       {
           double total = 0;
           for (int val : values)
           {
               total = total + val;
           }
           return total / values.length;
       }

       public static void main(String[] args)
       {
           int[] numArray = {2, 6, 7, 12, 5};
           ArrayWorker aWorker = new ArrayWorker(numArray);
           System.out.println(aWorker.getAverage());
       }
   }

   ====
   // Test for Lesson 6.3.3 - IncrementLoop

   import static org.junit.Assert.*;

   import org.junit.*;

   import java.io.*;

   public class RunestoneTests extends CodeTestHelper
   {
       public RunestoneTests()
       {
           super("ArrayWorker");
       }

       @Test
       public void test1()
       {
           String output = getMethodOutput("main");
           String expect = "6.4";

           boolean passed = getResults(expect, output, "main()", true);
           assertTrue(passed);
       }
   }

|Exercise| **Check Your Understanding**

.. parsonsprob:: pab_2
   :numbered: left
   :practice: T
   :adaptive:

   The following method has the correct code to return the largest value in an integer array called `vals` (an instance variable of the current object), but the code is mixed up.  Drag the blocks from the left into the correct order on the right and indent them correctly as well. You will be told if any of the blocks are in the wrong order or not indented correctly.
   -----
   public int getLargest()
   {
   =====
     int largest = vals[0];
   =====
     for (int item : vals)
     {
   =====
       if (item > largest)
       {
   =====
         largest = item;
   =====
       }  // end if
   =====
     } // end for
     return largest;
   =====
   } // end method


.. |Java visualizer link| raw:: html

   <a href="http://www.pythontutor.com/java.html#code=public+class+ArrayWorker%0A%7B%0A+++private+int%5B+%5D+values%3B%0A%0A+++public+ArrayWorker(int%5B%5D+theValues)%0A+++%7B%0A++++++values+%3D+theValues%3B%0A+++%7D%0A%0A+++public+double+getAverage()%0A+++%7B%0A+++++double+total+%3D+0%3B%0A+++++for+(int+val+%3A+values)%0A+++++%7B%0A+++++++total++%3D+total+%2B+val%3B%0A+++++%7D%0A+++++return+total+/+values.length%3B%0A+++%7D%0A+++%0A+++public+int+getLargest()%0A+++%7B%0A++%0A+++++int+largest+%3D+values%5B0%5D%3B%0A%0A+++++for+(int+item+%3A+values)%0A+++++%7B%0A%0A+++++++if+(item+%3E+largest)%0A+++++++%7B%0A%0A+++++++++largest+%3D+item%3B%0A%0A+++++++%7D++//+end+if+%0A%0A+++++%7D+//+end+for%0A+++++return+largest%3B%0A%0A+++%7D+//+end+method%0A%0A+++public+static+void+main(String%5B%5D+args)%0A+++%7B%0A+++++int%5B%5D+numArray+%3D++%7B2,+6,+7,+12,+5%7D%3B%0A+++++ArrayWorker+aWorker+%3D+new+ArrayWorker(numArray)%3B%0A+++++System.out.println(aWorker.getLargest())%3B%0A+++%7D%0A%7D%0A%0A&mode=display&curInstr=0" target="_blank">Java visualizer link</a>

If you want to step through the correct code to see what it does in the Java Visualizer click on the following |Java visualizer link|.


.. Some examples of finding the largest value in an array start by setting the largest variable to 0.  But, what happens if the array only contains negative numbers?  What value could you set largest to and still have it work correctly even if the field ``vals`` contained only negative numbers?

|Exercise| **Check Your Understanding**

.. mchoice:: qab_3
   :practice: T
   :answer_a: Whenever the first element in <i>array</i> is equal to <i>target</i>.
   :answer_b: Whenever <i>array</i> contains any element which equals <i>target</i>.
   :answer_c: Whenever the last element in <i>array</i> is equal to <i>target</i>.
   :answer_d: Whenever only 1 element in <i>array</i> is equal to <i>target</i>.
   :correct: c
   :feedback_a: This would be true if the loop started at the end of the array and moved toward the beginning.  But, it will loop from the first element to the last.
   :feedback_b: This would be true if temp was only set to the result of checking if the current element in the array is equal to <i>target</i> when it is <i>false</i>.  But, it is reset each time through the loop.
   :feedback_c: The variable <i>temp</i> is assigned to the result of checking if the current element in the array is equal to <i>target</i>.  The last time through the loop it will check if the last element is equal to <i>val</i>.
   :feedback_d: There is no count of the number of times the array element is equal to <i>target</i>.


   Given that ``array`` is an array of integers and ``target`` is an integer value, which of the following best describes the conditions under which the following code segment will return true?

   .. code-block:: java

     boolean temp = false;
     for (int val : array)
     {
       temp = ( target == val );
     }
     return temp;



|Groupwork| Programming Challenge : SpellChecker 2
---------------------------------------------------

.. image:: Figures/spellcheck.png
    :width: 100
    :align: left
    :alt: Spell Checker

.. |last spellcheck lesson| raw:: html

   <a href="https://runestone.academy/ns/books/published/csawesome/Unit6-Arrays/topic-6-2-traversing-arrays.html#groupwork-programming-challenge-spellchecker" target="_blank">last lesson</a>

In the |last spellcheck lesson|, you created a spellcheck method using a for loop. In this lesson, you will use enhanced for each loops instead. 

1.  Write a new version of the ``spellcheck`` method to use an enhanced for-each loop instead of an indexed for-loop.  It should take a word as a parameter and return true if it is in the dictionary array. It should return false if it is not found. 
2.  Write a method ``checkText`` that takes a String array of words which represents sentence of text and then calls your ``spellcheck`` method to check if each word in that text is spelled correctly. It should count and print out the misspelled words, and return the number of misspelled words. Some helper code is provided in the main method that will split a String of words into a String array, and remove punctuation and convert to lowercase, before calling this method. 

.. activecode:: challenge-6-3-spellchecker2
   :language: java
   :datafile: dictionary.txt
   :autograde: unittest

   Write a spellcheck() method using an enhanced for-each loop that takes a word as a parameter and returns true if it is in the dictionary array. Return false if it is not found. Write a checkText() method that takes a String[] parameter which is a sentence of text and then calls your spellcheck method above to check if each word in that text is spelled correctly using an enhanced for-each loop. It should return a count of the misspelled words. 
   ~~~~
   import java.io.*;
   import java.nio.file.*;
   import java.util.*;

   public class SpellChecker
   {
       // This dictionary includes 10,000 English words read in from the dictionary
       // file
       private String[] dictionary = new String[10000];

       /* Write a spellcheck() method using an enhanced for each loop
        * that takes a word as a parameter and returns true if it is
        * in the dictionary array. Return false if it is not found.
        */

       /* Write a checkText() method that takes a String[] parameter which is a sentence
        * of text in a String array and then calls your spellcheck method above
        * to check if each word in that text is spelled correctly.
        * Use an enhanced for each loop.
        * It should count and print out the misspelled words, and return the count.
        */

       // Do not change "throws IOException" which is needed for reading in the input
       // file
       public static void main(String[] args) throws IOException
       {
           SpellChecker checker = new SpellChecker();
           /* // Uncomment to test your method
           String word = "catz";
           System.out.println(word + " is spelled correctly? " + checker.spellcheck(word));
           System.out.println(word + " is spelled correctly? " + checker.spellcheck("cat"));

           // Testing checkText method
           String text = "Catz are cool aminals!";
           // replace punctuation symbols with empty string
           text = text.replaceAll("\\p{Punct}", "");
           // convert to lowercase
           text = text.toLowerCase();
           // split the text into a String array
           String[] words = text.split(" ");
           // Call your checkText method
           int numErrors = checker.checkText(words);
           System.out.println("There were " + numErrors + " spelling errors in " + text);
           */
       }

       // The constructor reads in the dictionary from a file
       public SpellChecker() throws IOException
       {
           // Let's use java.nio method readAllLines and convert to an array!
           List<String> lines = Files.readAllLines(Paths.get("dictionary.txt"));
           dictionary = lines.toArray(dictionary);

           /* The old java.io.* Scan/File method of reading in files, replaced by java.nio above // create File object
           File dictionaryFile = new File("dictionary.txt");

           //Create Scanner object to read File
           Scanner scan = new Scanner(dictionaryFile);

           // Reading each line of the file
           // and saving it in the array
           int i = 0;
           while(scan.hasNextLine())
           {
               String line = scan.nextLine();
               dictionary[i] = line;
               i++;
           }
           scan.close();
           */
       }
   }

   ====
   // Test for challenge-6-3-spell-checker
   import static org.junit.Assert.*;

   import org.junit.*;

   import java.io.*;

   public class RunestoneTests extends CodeTestHelper
   {
       public RunestoneTests()
       {
           super("SpellChecker");
       }

       @Test
       public void testMain() throws IOException
       {
           String output = getMethodOutput("main");
           String[] lines = output.split("\\s+");
           boolean passed = lines.length >= 2;

           passed =
                   getResults(
                           "2+ lines of output",
                           lines.length + " lines of output",
                           "Expected output",
                           passed);
           assertTrue(passed);
       }

       @Test
       public void test3()
       {
           Object[] args = {"dogz"};
           String output = getMethodOutput("spellcheck", args);
           String expect = "false";

           boolean passed = getResults(expect, output, "spellcheck(\"dogz\")");
           assertTrue(passed);
       }

       @Test
       public void test4()
       {
           Object[] args = {"dog"};
           String output = getMethodOutput("spellcheck", args);
           String expect = "true";

           boolean passed =
                   getResults(
                           expect,
                           output,
                           "spellcheck(\"dog\") (If false, spellcheck may be returning false too"
                               + " soon!)");
           assertTrue(passed);
       }

       @Test
       public void testFor() throws IOException
       {
           String target = "for (int * = #; * ? #; *~)";
           boolean passed = checkCodeNotContains("for loop", target);
           assertTrue(passed);
       }

       @Test
       public void testForEach()
       {
           boolean passed = checkCodeContains("for each loop", "for(String * : dictionary)");
           assertTrue(passed);
       }

       @Test
       public void testSignature()
       {
           boolean passed =
                   checkCodeContains(
                           "Signature public int checkText(String[])",
                           "public int checkText(String[]");
           assertTrue(passed);
       }

       @Test
       public void testCheckText1()
       {
           String[] sentence = {"dogz", "are", "cool", "tuu"};
           Object[] args = {sentence};
           String output = getMethodOutput("checkText", args);
           String expect = "2";
           boolean passed =
                   getResults(
                           expect,
                           output,
                           "number of spelling errors in checkText({\"dogz\","
                               + " \"are\",\"cool\",\"tuu\"})");
           assertTrue(passed);
       }

       @Test
       public void testCheckText2()
       {
           String[] sentence = {"dogs", "are", "cool", "too"};
           Object[] args = {sentence};
           String output = getMethodOutput("checkText", args);
           String expect = "0";
           boolean passed =
                   getResults(
                           expect,
                           output,
                           "number of spelling errors in checkText({\"dogs\","
                               + " \"are\",\"cool\",\"too\"})");
           assertTrue(passed);
       }
   }

|Groupwork| Design an Array of Objects for your Community
----------------------------------------------------------

In Unit 5, you came up with a class of your own choice relevant to your
community.  In lessons 6.1 and 6.2, you created an array to hold objects of your class
and traversed the array with a loop. In this challenge, we will create a new class that
holds your array of objects and add a method that print the array elements and a method that
finds a certain object in the array using enhanced for loops. We encourage you to continue working in pairs.

Here is an example of a Student class and a StudentArray class that searches for a student with a
specific name. In Java, when you are working with multiple classes on your own computer, each
class is usually in its own file that matches the class name. On Runestone, when you are working
with multiple classes, only the class that has the main method should be public, and the other classes should
start with ``class`` instead of ``public class``.

.. activecode:: student-array
  :language: java
  :autograde: unittest

  Run the StudentArray class below. Note that it uses the class Student below it and creates
  an array of Students. Using the StudentArray print() method as a guide,
  write a StudentArray method called findAndPrint() which takes a String name as an argument,
  and uses an enhanced for-loop to traverse the array to find a Student in the array with the same name.
  If the argument equals the Student object's name (using its getName() method), then print out that student's info.
  Call it from the main method to test it.
  ~~~~
  public class StudentArray
  {
      private Student[] array;
      private int size = 3;

      // Creates an array of the default size
      public StudentArray()
      {
          array = new Student[size];
      }

      // Creates aan array of the given size
      public StudentArray(int size)
      {
          array = new Student[size];
      }

      // Adds Student s to the array at index i
      public void add(int i, Student s)
      {
          array[i] = s;
      }

      // prints the array of students
      public void print()
      {
          for (Student s : array)
          {
              // this will call Student's toString() method
              System.out.println(s);
          }
      }

      /* Write a findAndPrint(name) method */

      public static void main(String[] args)
      {
          // Create an object of this class and pass in size 3
          StudentArray roster = new StudentArray(3);
          // Add new Student objects at indices 0-2
          roster.add(0, new Student("Skyler", "skyler@sky.com", 123456));
          roster.add(1, new Student("Ayanna", "ayanna@gmail.com", 789012));
          roster.add(2, new Student("Dakota", "dak@gmail.com", 112233));
          roster.print();
          System.out.println("Finding student Ayanna: ");
          // uncomment to test
          // roster.findAndPrint("Ayanna");
      }
  }

  class Student
  {
      private String name;
      private String email;
      private int id;

      public Student(String initName, String initEmail, int initId)
      {
          name = initName;
          email = initEmail;
          id = initId;
      }

      public String getName()
      {
          return name;
      }

      public String getEmail()
      {
          return email;
      }

      public int getId()
      {
          return id;
      }

      // toString() method
      public String toString()
      {
          return id + ": " + name + ", " + email;
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
            super("StudentArray");
        }

        @Test
        public void test1()
        {
            String target = "findAndPrint(String";
            boolean passed =
                    checkCodeContains("findAndPrint method header with String paramenter", target);
            assertTrue(passed);
        }

        @Test
        public void test2()
        {
            String target = "roster.findAndPrint(";
            boolean passed =
                    checkCodeContains(
                            "call to roster.findAndPrint method (uncommented in main)", target);
            assertTrue(passed);
        }

        @Test
        public void testForEach()
        {
            String target = "for(Student";
            String code = getCode().replaceAll("\\s", "");
            int index = code.indexOf("findAndPrint(String");
            boolean passed = false;
            if (index > 0)
            {
                code = code.substring(index, index + 200);
                int num = countOccurences(code, target);
                passed = num == 1;
            }
            getResults(
                    "true",
                    "" + passed,
                    "Checking that findAndPrint() contains an enhanced for loop for Student in array",
                    passed);
            assertTrue(passed);
        }

        @Test
        public void testEquals()
        {
            boolean passed = checkCodeContains("use of equals method", ".equals(");
            assertTrue(passed);
        }

        @Test
        public void testGetName()
        {
            boolean passed = checkCodeContains("use of getName() method", ".getName()");
            assertTrue(passed);
        }
    }

.. |lesson 6.2| raw:: html

   <a href="https://runestone.academy/ns/books/published/csawesome/Unit6-Arrays/topic-6-2-traversing-arrays.html#groupwork-programming-challenge-spellchecker" target="_blank">last lesson 6.2</a>

For your community challenge, 

1. Copy your array of objects code from |lesson 6.2|.

2. Using the ``StringArray`` class above as your guide, separate it into your class and a public array class that puts the array of objects in a private instance variable. The main method should be in this class.  

3. Write a print() method that uses an enhanced for-loop to print out the array elements. 

4. Write a findAndPrint() method with an argument that looks for a certain attribute of the objects in the array using an enhanced for-loop, and prints out all the data for the object it finds.


.. activecode:: community-challenge-6-3
  :language: java
  :autograde: unittest

  Copy your class from the last |lesson 6.2| below after the ClassNameArray class. Delete the public from in front of that class.
  On Runestone, only the class that has the main method should be public.
  Complete the ClassNameArray class substituting in your Class name and using the StudentArray class above as a guide.
  You should add a print() method and a findAndPrint() method that uses enhanced for loops.
  ~~~~
  public class ClassNameArray  // Change ClassName to your class name
  {
    // Declare an array of your class type

    // Write a constructor

    // Write an add() method that adds an object to your array at a certain index

    // Write a print() method using an enhanced for loop

    // Write a findAndPrint(attribute) method using an enhanced for loop

    public static void main(String[] args)
    {
       // Declare an object of ClassNameArray with your class name
       // Call its add method to add enough new objects to fill the array
       // Call its print method
       // Call its findAndPrint method
    }
  }

  // Copy in your class but do not make it public
  class          // Add your class name here - do not make it public
  {
      // Copy your class from lesson 6.2 below.




  }
  ====
  import static org.junit.Assert.*;

  import org.junit.*;

  import java.io.*;

  public class RunestoneTests extends CodeTestHelper
  {
      @Test
      public void testLoop()
      {
          String target = "for";
          String code = getCode();
          int num = countOccurences(code, target);
          boolean passed = num >= 2;
          getResults("2", "" + num, "Checking that at least 2 enhanced for loops are used", passed);
          assertTrue(passed);
      }

      @Test
      public void testPrint()
      {
          String target = "public void print(";
          boolean passed = checkCodeContains("print() method", target);
          assertTrue(passed);
      }

      @Test
      public void test1()
      {
          String target = "findAndPrint(";
          boolean passed = checkCodeContains("findAndPrint method", target);
          assertTrue(passed);
      }
  }

Summary
-------

- An **enhanced for loop**, also called a **for each loop**, can be used to loop through an array without using an index variable.

- An enhanced for loop header includes a variable, referred to as the enhanced for loop variable, that holds each value in the array.

- For each iteration of the enhanced for loop, the enhanced for loop variable is assigned a copy of an element without using its index.

- Assigning a new value to the enhanced for loop variable does not change the value stored in the array.

- Program code written using an enhanced for loop to traverse and access elements in an array can be rewritten using an indexed for loop or a while loop.

