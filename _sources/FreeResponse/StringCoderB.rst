.. qnum::
   :prefix:  16-4-
   :start: 1

StringCoder - Part B
===============================

.. index::
    single: StringCoder
    single: free response


**Part b.**  Write the StringCoder method ``encodeString``. A string is encoded by determining the substrings
in the master string that can be combined to generate the given string. The encoding starts with a string part
that matches the beginning of the word, followed by a string part that matches the beginning of the rest of
the word, and so on. The string parts are returned in an array list in the order in which they appear in word.
The helper method ``findPart`` must be used to choose matching string parts in the master string.

Try and Solve It
----------------

Complete method ``encodeString`` below.

The code below has a main method for testing your method.

.. activecode:: StringCoderB
   :language: java
   :autograde: unittest

   Complete method ``encodeString`` below.
   ~~~~
   import java.util.*;

   class StringPart
   {
       private int start;
       private int len;

       public StringPart(int theStart, int theLen)
       {
           // initialise instance variables
           start = theStart;
           len = theLen;
       }

       public StringPart()
       {
           start = 0;
           len = 0;
       }

       public int getStart()
       {
           return start;
       }

       public int getLength()
       {
           return len;
       }

       public String toString()
       {
           return "(" + getStart() + ", " + getLength() + ")";
       }
   }

   public class StringCoder
   {

       private String masterString;

       /** Constructor for objects of class StringCoder */
       public StringCoder()
       {
           masterString = "sixtyzipperswerequicklypickedfromthewovenjutebag";
       }

       public StringCoder(String master)
       {
           masterString = master;
       }

       /**
        * @param parts an ArrayList of string parts that are valid in the master
        *     string Precondition: parts.size() > 0
        * @return the string obtained by concatenating the parts of the master string
        */
       public String decodeString(ArrayList<StringPart> parts)
       {
           String s = "";
           for (StringPart part : parts)
               s =
                       s
                               + masterString.substring(
                                       part.getStart(),
                                       part.getStart() + part.getLength());
           return s;
       }

       private StringPart findPart(String str)
       {
           int start = 0;
           int length = 0;
           for (int len = 1; len <= str.length(); len++)
           {
               int found = masterString.indexOf(str.substring(0, len));
               if (found != -1)
               {
                   start = found;
                   length = len;
               }
           }
           return new StringPart(start, length);
       }

       /**
        * @param word the string to be encoded Precondition: all of the characters in
        *     word appear in the master string; word.length() > 0
        * @return an ArrayList of string parts of the master string that can be
        *     combined to create word
        */
       public ArrayList<StringPart> encodeString(String word)
       {
           // *** Write this method for part b! ***

       }

       public static void main(String[] args)
       {
           ArrayList<StringPart> overeager = new ArrayList<StringPart>();
           overeager.add(new StringPart(37, 3));
           overeager.add(new StringPart(14, 2));
           overeager.add(new StringPart(46, 2));
           overeager.add(new StringPart(9, 2));
           System.out.println("overeager should be encoded as " + overeager);
           StringCoder key = new StringCoder();
           System.out.println(
                   "Testing part b overeager is encoded as "
                           + key.encodeString("overeager"));
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
           super("StringCoder");
           // CodeTestHelper.sort = true;
       }

       @Test
       public void testMain1()
       {
           boolean passed = false;

           String expect =
                   "overeager should be encoded as [(37, 3), (14, 2), (46, 2), (9, 2)]\n"
                       + "Testing part b overeager is encoded as [(37, 3), (14, 2), (46, 2), (9, 2)]";

           String output = getMethodOutput("main");

           passed = getResults(expect, output, "Checking for expected output");
           assertTrue(passed);
       }

       @Test
       public void testMain2()
       {
           boolean passed = false;

           String expect =
                   "csawesome is encoded as [(19, 1), (0, 1), (46, 1), (12, 2), (0, 1), (31, 2), (9,"
                       + " 1)]";

           StringCoder key = new StringCoder();
           String actual = "csawesome is encoded as " + key.encodeString("csawesome");

           passed = getResults(expect, actual, "Checking for expected results for \"csawesome\"");

           assertTrue(passed);
       }
   }

