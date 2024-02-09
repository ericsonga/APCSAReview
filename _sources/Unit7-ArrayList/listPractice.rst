.. qnum::
   :prefix: 7-10-
   :start: 1

Code Practice with ArrayLists
--------------------------------

.. tabbed:: ch8Ex1


        .. tab:: Question

           .. activecode::  ch8Ex1q
              :language: java
              :autograde: unittest
              :practice: T

              Fix the following code so that it compiles. The code should instantiate an ArrayList of Strings ``names`` and fill it with the Strings from the array ``friends``. It should then print out ``names``.
              ~~~~
              import java.util.*;

              public class Test1
              {
                  public static void main(String[] args)
                  {
                      ArrayList<String> names = new ArrayList<String>();
                      String[] friends = {"Sam", "Jessica", "Mark", "Alexis"};
                      for (int i = 0; i <= friends.length; i++)
                      {
                          names.add(friends[i]);
                      }
                      System.out.println(names);
                  }
              }

              ====
              import static org.junit.Assert.*;

              import org.junit.*;

              import java.io.*;

              public class RunestoneTests extends CodeTestHelper
              {
                  @Test
                  public void testMain() throws IOException
                  {
                      String output = getMethodOutput("main");
                      String expect = "Sam\nJessica\nMark\nAlexis";
                      boolean passed = getResults(expect, output, "Expected output from main");
                      assertTrue(passed);
                  }
              }

        .. tab:: Answer

           In line 10, change the terminating condition to ``i < friends.length`` so that you don't go out of bounds of the array.

           .. activecode::  ch8Ex1a
              :language: java
              :optional:

              This is the answer to the previous question.
              ~~~~
              import java.util.*;

              public class Test1
              {
                  public static void main(String[] args)
                  {
                      ArrayList<String> names = new ArrayList<String>();
                      String[] friends = {"Sam", "Jessica", "Mark", "Alexis"};
                      for (int i = 0; i < friends.length; i++)
                      {
                          names.add(friends[i]);
                      }
                      System.out.println(names);
                  }
              }

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch8Ex1d

.. tabbed:: ch8Ex2


        .. tab:: Question

           .. activecode::  ch8Ex2q
              :language: java
              :autograde: unittest
              :practice: T

              Fix the following class so that it will compile and the method ``reverse`` will return an ArrayList containing Integers in the reversed order of the ArrayList parameter ``list``. Hint: for this solution, only one line needs to be added to the for-loop inside of the ``reverse`` method.
              ~~~~
              import java.util.*;

              public class Test1
              {
                  public static ArrayList<Integer> reverse(ArrayList<Integer> list)
                  {
                      ArrayList<int> reversed = new ArrayList<int>();
                      for (Integer element : list) {}

                      return reversed;
                  }

                  public static void main(String[] args)
                  {
                      // instantiate ArrayList and fill with Integers
                      ArrayList<Integer> values = new ArrayList<Integer>();
                      int[] nums = {1, 5, 7, 9, -2, 3, 2};
                      for (int i = 0; i < nums.length; i++)
                      {
                          values.add(nums[i]);
                      }
                      ArrayList<Integer> result = reverse(values);
                      System.out.println("Expected Result:\t [2, 3, -2, 9, 7, 5, 1]");
                      System.out.println("Your Result:\t\t " + result);
                  }
              }

              ====
              import static org.junit.Assert.*;

              import org.junit.*;

              import java.io.*;

              public class RunestoneTests extends CodeTestHelper
              {

                  @Test
                  public void testMain() throws IOException
                  {
                      String output = getMethodOutput("main");
                      String expect =
                              "Expected Result: [2, 3, -2, 9, 7, 5, 1]\n"
                                      + "Your Result:     [2, 3, -2, 9, 7, 5, 1]\n";

                      boolean passed = getResults(expect, output, "Expected output from main");
                      assertTrue(passed);
                  }

                  @Test
                  public void testAdd()
                  {
                      String target = "reversed.add(0,element);";
                      boolean passed =
                              checkCodeContains(
                                      "add method called to add element to the beginning of ArrayList reversed",
                                      target);
                      assertTrue(passed);
                  }
              }

        .. tab:: Answer

           Change line 8 ``int`` to ``Integer`` because ArrayLists only store objects and int is a primitive.  Add in line 11 ``reversed.add(0, element);`` so that each element of the ArrayList ``list``, the parameter, is added in front of the previously added element (thereby reversing the order).

           Note that there are other equally correct ways to reverse the order of the ArrayList without creating a new Array or by traversing through it backwards.

           .. activecode::  ch8Ex2a
              :language: java
              :optional:

              This is the answer to the previous question.
              ~~~~
              import java.util.*;

              public class Test1
              {
                  public static ArrayList<Integer> reverse(ArrayList<Integer> list)
                  {
                      ArrayList<Integer> reversed = new ArrayList<Integer>();
                      for (Integer element : list)
                      {
                          reversed.add(0, element);
                      }
                      return reversed;
                  }

                  public static void main(String[] args)
                  {
                      // instantiate ArrayList and fill with Integers
                      ArrayList<Integer> values = new ArrayList<Integer>();
                      int[] nums = {1, 5, 7, 9, -2, 3, 2};
                      for (int i = 0; i < nums.length; i++)
                      {
                          values.add(nums[i]);
                      }
                      ArrayList<Integer> result = reverse(values);
                      System.out.println("Expected Result:\t [2, 3, -2, 9, 7, 5, 1]");
                      System.out.println("Your Result:\t\t " + result);
                  }
              }

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch8Ex2d

.. tabbed:: ch8Ex3

        .. tab:: Question

           .. activecode::  ch8Ex3q
              :language: java
              :autograde: unittest
              :practice: T

              Fix the following method ``printEvenIndex`` so that it will print out the Integers at even indices of the passed-in ArrayList ``list``.
              ~~~~
              import java.util.*;

              public class Test1
              {
                  public static void printEvenIndex(ArrayList<Integer> list)
                  {
                      for (int i)
                      {
                          if (i % 2 == 1)
                          {
                              System.out.print(list.get(i) + ", ");
                          }
                      }
                  }

                  public static void main(String[] args)
                  {
                      //instantiate ArrayList and fill with Integers
                      ArrayList<Integer> values = new ArrayList<Integer>();
                      int[] nums = {1, 5, 7, 9, -2, 3, 2};
                      for (int i = 0; i < nums.length; i ++)
                      {
                          values.add(nums[i]);
                      }
                      System.out.println("Expected Result:\t 1, 7, -2, 2,");
                      System.out.print("Your Result:\t\t ");
                      printEvenIndex(values);
                  }
              }
              ====
              import static org.junit.Assert.*;

              import org.junit.*;

              import java.io.*;

              public class RunestoneTests extends CodeTestHelper
              {
                  @Test
                  public void testMain() throws IOException
                  {
                      String output = getMethodOutput("main");
                      String expect = "Expected Result:\t1, 7, -2, 2,\n" + "Your Result:\t\t1, 7, -2, 2,\n";
                      boolean passed = getResults(expect, output, "Expected output from main");
                      assertTrue(passed);
                  }

                  @Test
                  public void testFor()
                  {
                      String target = "for (int i = 0; i < list.size(); i++)";
                      boolean passed = checkCodeContains("FOR loop: traversing ArrayList list", target);
                      assertTrue(passed);
                  }

                  @Test
                  public void testEvenIndx()
                  {
                      String target = "if (i % 2 == 0)";
                      boolean passed =
                              checkCodeContains("checking EVEN index i: traversing ArrayList list", target);
                      assertTrue(passed);
                  }
              }

        .. tab:: Answer

           In line 8, the for loop should be written as ``for (int i = 0; i < list.size(); i++)`` so that the method will traverse through all elements of the ArrayList ``list``.  In the line 10 conditional, it should be checking when the index, ``i`` is even - in other words, checking if it is divisible by 2 with no remainder: ``i % 2 == 0``.

           .. activecode::  ch8Ex3a
              :language: java
              :optional:

              This is the answer to the previous question.
              ~~~~
              import java.util.*;

              public class Test1
              {
                  public static void printEvenIndex(ArrayList<Integer> list)
                  {
                      for (int i = 0; i < list.size(); i++)
                      {
                          if (i % 2 == 0)
                          {
                              System.out.print(list.get(i) + ", ");
                          }
                      }
                  }

                  public static void main(String[] args)
                  {
                      // instantiate ArrayList and fill with Integers
                      ArrayList<Integer> values = new ArrayList<Integer>();
                      int[] nums = {1, 5, 7, 9, -2, 3, 2};
                      for (int i = 0; i < nums.length; i++)
                      {
                          values.add(nums[i]);
                      }
                      System.out.println("Expected Result:\t 1, 7, -2, 2,");
                      System.out.print("Your Result:\t\t ");
                      printEvenIndex(values);
                  }
              }

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch8Ex3d

.. tabbed:: ch8Ex4

        .. tab:: Question

           .. activecode::  ch8Ex4q
              :language: java
              :autograde: unittest
              :practice: T

              Fix the following method ``printEvenElements`` so that it will print out all of the even Integers that are in the passed-in ArrayList ``list``.
              ~~~~
              import java.util.*;

              public class Test1
              {
                  public static void printEvenElements(ArrayList<Integer> list)
                  {
                      for (int i = 0; i < list.length; i++)
                      {
                          if (list.get(i) % 2 == 0)
                          {
                              System.out.print(list.get(i) + ", ");
                          }
                      }
                  }

                  public static void main(String[] args)
                  {
                      // instantiate ArrayList and fill with Integers
                      ArrayList<Integer> values = new ArrayList<Integer>();
                      int[] nums = {1, 44, 7, 9, -16, 3, 2};
                      for (int i = 0; i < nums.length; i++)
                      {
                          values.add(nums[i]);
                      }
                      System.out.println("Expected Result:\t 44, -16, 2,");
                      System.out.print("Your Result:\t\t ");
                      printEvenElements(values);
                  }
              }

              ====
              import static org.junit.Assert.*;

              import org.junit.*;

              import java.io.*;

              public class RunestoneTests extends CodeTestHelper
              {
                  @Test
                  public void testMain() throws IOException
                  {
                      String output = getMethodOutput("main");
                      String expect = "Expected Result:\t44, -16, 2,\n" + "Your Result:\t\t44, -16, 2,\n";

                      boolean passed = getResults(expect, output, "Expected output from main");
                      assertTrue(passed);
                  }

                  @Test
                  public void testSizeMethod()
                  {
                      String target = "i < list.size()";
                      boolean passed = checkCodeContains("SIZE method used in traversing ArrayList list", target);
                      assertTrue(passed);
                  }

              }

        .. tab:: Answer

           In line 7, ArrayLists do not have a length property; instead, call the ``size()`` method to find out how long an ArrayList is.

           .. activecode::  ch8Ex4a
              :language: java
              :optional:

              This is the answer to the previous question.
              ~~~~
              import java.util.*;

              public class Test1
              {
                  public static void printEvenElements(ArrayList<Integer> list)
                  {
                      for (int i = 0; i < list.size(); i++)
                      {
                          if (list.get(i) % 2 == 0)
                          {
                              System.out.print(list.get(i) + ", ");
                          }
                      }
                  }

                  public static void main(String[] args)
                  {
                      // instantiate ArrayList and fill with Integers
                      ArrayList<Integer> values = new ArrayList<Integer>();
                      int[] nums = {1, 44, 7, 9, -16, 3, 2};
                      for (int i = 0; i < nums.length; i++)
                      {
                          values.add(nums[i]);
                      }
                      System.out.println("Expected Result:\t 44, -16, 2,");
                      System.out.print("Your Result:\t\t ");
                      printEvenElements(values);
                  }
              }

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch8Ex4d


.. tabbed:: ch8Ex5

        .. tab:: Question

           .. activecode::  ch8Ex5q
              :language: java
              :autograde: unittest
              :practice: T

              Rewrite the following code so that it fills the ArrayList ``values`` with the elements of the array ``nums`` using a for-each loop instead of a ``for`` loop.
              ~~~~
              import java.util.*;

              public class Test1
              {
                  public static void main(String[] args)
                  {
                      ArrayList<Integer> values = new ArrayList<Integer>();
                      int[] nums = {1, 44, 7, 9, -16, 3};
                      for (int i = 0; i < nums.length; i++)
                      {
                          values.add(nums[i]);
                      }
                      System.out.println("Expected Result:\t [1, 44, 7, 9, -16, 3]");
                      System.out.println("Your Result:\t\t " + values);
                  }
              }

              ====
              import static org.junit.Assert.*;

              import org.junit.*;

              import java.io.*;

              public class RunestoneTests extends CodeTestHelper
              {
                  @Test
                  public void testMain() throws IOException
                  {
                      String output = getMethodOutput("main");
                      String expect =
                              "Expected Result:\t[1, 44, 7, 9, -16, 3]\n"
                                      + "Your Result:\t\t[1, 44, 7, 9, -16, 3]\n ";
                      boolean passed = getResults(expect, output, "Expected output from main");
                      assertTrue(passed);
                  }

                  @Test
                  public void testForEachLoop()
                  {
                      String target = "for (int * : nums)";
                      boolean passed = checkCodeContainsRegex("For-Each loop in traversing Array nums", target);
                      assertTrue(passed);
                  }
              }

        .. tab:: Answer

           In a for-each loop you specify the type of the values in the array, a name for the current value, and then a ``:`` and then the name of the array.  You then want to ``add`` each element to the ``values`` ArrayList.

           .. activecode::  ch8Ex5a
              :language: java
              :optional:

              This is the answer to the previous question.
              ~~~~
              import java.util.ArrayList;

              public class Test1
              {
                  public static void main(String[] args)
                  {
                      ArrayList<Integer> values = new ArrayList<Integer>();
                      int[] nums = {1, 44, 7, 9, -16, 3};
                      for (int element : nums)
                      {
                          values.add(element);
                      }
                      System.out.println("Expected Result:\t [1, 44, 7, 9, -16, 3]");
                      System.out.println("Your Result:\t\t " + values);
                  }
              }

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch8Ex5d

.. tabbed:: ch8Ex6

        .. tab:: Question


           Finish the following method ``sumNegVal`` to return the sum of all of the negative numbers in the ArrayList ``list``, the parameter.

           .. activecode::  ch8Ex6q
              :language: java
              :autograde: unittest

              import java.util.ArrayList;

              public class Test1
              {
                  public static int sumNegValues(ArrayList<Integer> list)
                  {
                      // code here
                  }

                  public static void main(String[] args)
                  {
                      // instantiate ArrayList and fill with Integers
                      ArrayList<Integer> values = new ArrayList<Integer>();
                      int[] nums = {-2, 34, -11, 9, -6, 3};
                      for (int i = 0; i < nums.length; i++)
                      {
                          values.add(nums[i]);
                      }
                      System.out.println("Expected Result:\t -19");
                      System.out.print("Your Result:\t\t ");
                      System.out.println(sumNegValues(values));
                  }
              }

              ====
              import static org.junit.Assert.*;

              import org.junit.*;

              import java.io.*;
              import java.util.ArrayList;

              public class RunestoneTests extends CodeTestHelper
              {
                  @Test
                  public void testMain() throws IOException
                  {
                      String output = getMethodOutput("main");
                      String expect = "Expected Result:\t\t -19\n" + "Your Result:\t -19\n";
                      boolean passed = getResults(expect, output, "Expected output from main");
                      assertTrue(passed);
                  }

                  @Test
                  public void testSumNegValues()
                  {
                      ArrayList<Integer> values = new ArrayList<Integer>();
                      values.add(2);
                      values.add(34);
                      values.add(-10);
                      values.add(9);
                      values.add(-5);
                      values.add(3);

                      String output = String.valueOf(Test1.sumNegValues(values));
                      String expect = "-15";

                      boolean passed = getResults(expect, output, "sumNegValues method test");
                      assertTrue(passed);
                  }
              }

        .. tab:: Answer

          Declare a variable to hold the ``sum`` and initialize it to zero.  Loop through all the values in the ArrayList.  If the current value is negative (less than 0) then add it to the ``sum``.  Return the ``sum``.

           .. activecode::  ch8Ex6a
              :language: java
              :optional:

              This is the answer to the previous question.
              ~~~~
              import java.util.ArrayList;

              public class Test1
              {
                  public static int sumNegValues(ArrayList<Integer> list)
                  {
                      int sum = 0;
                      for (Integer element : list)
                      {
                          if (element < 0)
                          {
                              sum += element;
                          }
                      }
                      return sum;
                  }

                  public static void main(String[] args)
                  {
                      // instantiate ArrayList and fill with Integers
                      ArrayList<Integer> values = new ArrayList<Integer>();
                      int[] nums = {-2, 34, -11, 9, -6, 3};
                      for (int i = 0; i < nums.length; i++)
                      {
                          values.add(nums[i]);
                      }
                      System.out.println("Expected Result:\t -19");
                      System.out.print("Your Result:\t\t ");
                      System.out.println(sumNegValues(values));
                  }
              }

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch8Ex6d

.. tabbed:: ch8Ex7

        .. tab:: Question

           .. activecode::  ch8Ex7q
              :language: java
              :autograde: unittest

              Finish the following method ''removeLongStrings'' that checks each element of the passed in ArrayList ``list`` and removes any that are strictly longer than 4 characters.
              ~~~~
              import java.util.ArrayList;

              public class Test1
              {
                  public static void removeLongStrings(ArrayList<String> list)
                  {
                      // code here
                  }

                  public static void main(String[] args)
                  {
                      // instantiate ArrayList and fill with Integers
                      ArrayList<String> values = new ArrayList<String>();
                      String[] words = {"bathtub", "fish", "computer", "cat", "foo"};
                      for (int i = 0; i < words.length; i++)
                      {
                          values.add(words[i]);
                      }
                      removeLongStrings(values);
                      System.out.println("Expected Result:\t [fish, cat, foo]");
                      System.out.println("Your Result:\t\t " + values);
                  }
              }

              ====
              import static org.junit.Assert.*;

              import org.junit.*;

              import java.io.*;
              import java.util.ArrayList;

              public class RunestoneTests extends CodeTestHelper
              {
                  @Test
                  public void testMain() throws IOException
                  {
                      String output = getMethodOutput("main");
                      String expect =
                              "Expected Result:\t [fish, cat, foo]\n" + "Your Result:\t\t [fish, cat, foo]\n";
                      boolean passed = getResults(expect, output, "Expected output from main");
                      assertTrue(passed);
                  }

                  @Test
                  public void testRemoveLongStrings()
                  {
                      ArrayList<String> mylist1 = new ArrayList<String>();
                      mylist1.add("longword");
                      mylist1.add("dog");
                      mylist1.add("longword");
                      mylist1.add("wee");

                      ArrayList<String> mylist2 = new ArrayList<>();
                      mylist2.add("dog");
                      mylist2.add("wee");

                      Test1.removeLongStrings(mylist1);

                      boolean result = mylist2.equals(mylist1);

                      boolean passed = getResults("true", "" + result, "removeLongStrings method test");
                      assertTrue(passed);
                  }
              }

        .. tab:: Answer

           Loop through all of the elements of the ArrayList ``list``. In each iteration, check if the length of each element is strictly greater ``>`` than 4; if it is, remove that element.

           .. activecode::  ch8Ex7a
              :language: java
              :optional:

              This is the answer to the previous question.
              ~~~~
              import java.util.ArrayList;

              public class Test1
              {
                  public static void removeLongStrings(ArrayList<String> list)
                  {
                      int count = 0;
                      while (count < list.size())
                      {
                          if (list.get(count).length() > 4)
                          {
                              list.remove(count);
                          }
                          else 
                          {
                              count++;
                          }
                      }
                  }

                  public static void main(String[] args)
                  {
                      // instantiate ArrayList and fill with Integers
                      ArrayList<String> values = new ArrayList<String>();
                      String[] words = {"bathtub", "fish", "computer", "cat", "foo"};
                      for (int i = 0; i < words.length; i++)
                      {
                          values.add(words[i]);
                      }
                      removeLongStrings(values);
                      System.out.println("Expected Result:\t [fish, cat, foo]");
                      System.out.println("Your Result:\t\t " + values);
                  }
              }

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch8Ex7d

.. tabbed:: ch8Ex8

        .. tab:: Question

           .. activecode::  ch8Ex8q
              :language: java
              :autograde: unittest

              Fill in the method ``shiftLeftOne`` below to shift all of the elements of the passed-in ArrayList ``list`` left by one. The original first element should be wrapped to the back of the list after the shift. Ex: {1, 2, 3, 4} should turn turn into {2, 3, 4, 1}
              ~~~~
              import java.util.ArrayList;

              public class Test1
              {
                  public static void shiftLeftOne(ArrayList<Integer> list)
                  {
                      // code here
                  }

                  public static void main(String[] args)
                  {
                      // instantiate ArrayList and fill with Integers
                      ArrayList<Integer> values = new ArrayList<Integer>();
                      int[] nums = {1, 2, 3, 4, 5};
                      for (int i = 0; i < nums.length; i++)
                      {
                          values.add(nums[i]);
                      }
                      shiftLeftOne(values);
                      System.out.println("Expected Result:\t [2, 3, 4, 5, 1]");
                      System.out.println("Your Result:\t\t " + values);
                  }
              }

              ====
              import static org.junit.Assert.*;

              import org.junit.*;

              import java.io.*;
              import java.util.ArrayList;

              public class RunestoneTests extends CodeTestHelper
              {
                  @Test
                  public void testMain() throws IOException
                  {
                      String output = getMethodOutput("main");
                      String expect =
                              "Expected Result:\t [2, 3, 4, 5, 1]\n" + "Your Result:\t\t [2, 3, 4, 5, 1]\n ";
                      boolean passed = getResults(expect, output, "Expected output from main");
                      assertTrue(passed);
                  }

                  @Test
                  public void testShiftLeftOne()
                  {
                      ArrayList<Integer> mylist1 = new ArrayList<Integer>();
                      mylist1.add(2);
                      mylist1.add(4);
                      mylist1.add(1);

                      ArrayList<Integer> mylist2 = new ArrayList<Integer>();
                      mylist2.add(4);
                      mylist2.add(1);
                      mylist2.add(2);
                      Test1.shiftLeftOne(mylist1);

                      boolean result = mylist2.equals(mylist1);

                      boolean passed = getResults("true", "" + result, "shiftLeftOne method test");
                      assertTrue(passed);
                  }
              }

        .. tab:: Answer

           Remove the first element of ``list`` and save it to a new variable of type ``Integer``. Because of the nature of remove, everything else in the ArrayList will shift left accordingly. The only thing left to do after that is add this value to the back of the ArrayList.

           .. activecode::  ch8Ex8a
              :language: java
              :optional:

              This is the answer to the previous question.
              ~~~~
              import java.util.ArrayList;

              public class Test1
              {
                  public static void shiftLeftOne(ArrayList<Integer> list)
                  {
                      Integer firstVal = list.remove(0);
                      list.add(firstVal);
                  }

                  public static void main(String[] args)
                  {
                      // instantiate ArrayList and fill with Integers
                      ArrayList<Integer> values = new ArrayList<Integer>();
                      int[] nums = {1, 2, 3, 4, 5};
                      for (int i = 0; i < nums.length; i++)
                      {
                          values.add(nums[i]);
                      }
                      shiftLeftOne(values);
                      System.out.println("Expected Result:\t [2, 3, 4, 5, 1]");
                      System.out.println("Your Result:\t\t " + values);
                  }
              }

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch8Ex8d

.. tabbed:: ch8Ex9

        .. tab:: Question

           .. activecode::  ch8Ex9q
              :language: java
              :autograde: unittest

              Finish the method ``moveSmallest`` so that it finds the smallest value in the passed-in ArrayList ``list`` and moves it to the front of the list.
              ~~~~
              import java.util.List;
              import java.util.ArrayList;

              public class Test1
              {
                  public static void moveSmallest(ArrayList<Integer> list)
                  {
                      int smallestIndex = 0;
                      for ()
                      {
                          if ()
                          {
                              smallestIndex = i;
                          }
                      }
                      //move smallest to front
                  }

                  public static void main(String[] args)
                  {
                      //instantiate ArrayList and fill with Integers
                      ArrayList<Integer> values = new ArrayList<Integer>();
                      int[] nums = {3, 11, 54, 7, 1, 22};
                      for (int i = 0; i < nums.length; i ++)
                      {
                          values.add(nums[i]);
                      }
                      moveSmallest(values);
                      System.out.println("Expected Result:\t [1, 3, 11, 54, 7, 22]");
                      System.out.println("Your Result:\t\t " + values);
                  }
              }
              ====
              import static org.junit.Assert.*;

              import org.junit.*;

              import java.io.*;
              import java.util.ArrayList;

              public class RunestoneTests extends CodeTestHelper
              {
                  @Test
                  public void testMain() throws IOException
                  {
                      String output = getMethodOutput("main");
                      String expect =
                              "Expected Result:\t [1, 3, 11, 54, 7, 22]\n"
                                      + "Your Result:\t\t [1, 3, 11, 54, 7, 22]\n ";
                      boolean passed = getResults(expect, output, "Expected output from main");
                      assertTrue(passed);
                  }

                  @Test
                  public void testMoveSmallest()
                  {
                      ArrayList<Integer> mylist1 = new ArrayList<Integer>();
                      mylist1.add(11);
                      mylist1.add(54);
                      mylist1.add(7);
                      mylist1.add(3);
                      mylist1.add(22);

                      ArrayList<Integer> mylist2 = new ArrayList<Integer>();
                      mylist2.add(3);
                      mylist2.add(11);
                      mylist2.add(54);
                      mylist2.add(7);
                      mylist2.add(22);

                      Test1.moveSmallest(mylist1);

                      boolean result = mylist2.equals(mylist1);

                      boolean passed = getResults("true", "" + result, "moveSmallest method test");
                      assertTrue(passed);
                  }
              }

        .. tab:: Answer

           Fill-in the for loop so that it will traverse through the entire ArrayList. The conditional should check if the current element at index ``i`` is less than the element at ``smallestIndex``. After the for-loop has completed, the method must remove the value at ``smallestIndex`` and save it to a variable, and then add it to the front of the ArrayList

           .. activecode::  ch8Ex9a
              :language: java
              :optional:

              This is the answer to the previous question.
              ~~~~
              import java.util.ArrayList;

              public class Test1
              {
                  public static void moveSmallest(ArrayList<Integer> list)
                  {
                      int smallestIndex = 0;
                      for (int i = 0; i < list.size(); i++)
                      {
                          if (list.get(i) < list.get(smallestIndex))
                          {
                              smallestIndex = i;
                          }
                      }
                      Integer smallest = list.remove(smallestIndex);
                      list.add(0, smallest);
                  }

                  public static void main(String[] args)
                  {
                      // instantiate ArrayList and fill with Integers
                      ArrayList<Integer> values = new ArrayList<Integer>();
                      int[] nums = {3, 11, 54, 7, 1, 22};
                      for (int i = 0; i < nums.length; i++)
                      {
                          values.add(nums[i]);
                      }
                      moveSmallest(values);
                      System.out.println("Expected Result:\t [1, 3, 11, 54, 7, 22]");
                      System.out.println("Your Result:\t\t " + values);
                  }
              }

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch8Ex9d

.. tabbed:: ch8Ex10

        .. tab:: Question

           .. activecode::  ch8Ex10q
              :language: java
              :autograde: unittest

              Finish the method ``findLongest`` to find and return the longest String in the ArrayList of Strings ``list``.
              ~~~~
              import java.util.ArrayList;

              public class Test1
              {
                  public static String findLongest(ArrayList<String> list)
                  {
                      // code here
                  }

                  public static void main(String[] args)
                  {
                      // instantiate ArrayList and fill with Integers
                      ArrayList<String> values = new ArrayList<String>();
                      String[] words = {"singapore", "cattle", "metropolitan", "turnstile"};
                      for (int i = 0; i < words.length; i++)
                      {
                          values.add(words[i]);
                      }
                      System.out.println("Expected Result:\t metropolitan");
                      System.out.print("Your Result:\t\t ");
                      System.out.println(findLongest(values));
                  }
              }

              ====
              import static org.junit.Assert.*;

              import org.junit.*;

              import java.io.*;
              import java.util.ArrayList;

              public class RunestoneTests extends CodeTestHelper
              {
                  @Test
                  public void testMain() throws IOException
                  {
                      String output = getMethodOutput("main");
                      String expect = "Expected Result:\t metropolitan\n" + "Your Result:\t\t metropolitan\n";
                      boolean passed = getResults(expect, output, "Expected output from main");
                      assertTrue(passed);
                  }

                  @Test
                  public void testFindLongest()
                  {
                      ArrayList<String> mylist = new ArrayList<String>();
                      mylist.add("longword");
                      mylist.add("longerword");
                      mylist.add("short");

                      String output = Test1.findLongest(mylist);
                      String expect = "longerword";

                      boolean passed = getResults(output, expect, "findLongest method test");
                      assertTrue(passed);
                  }
              }

        .. tab:: Answer

           Declare a variable to hold the ``longest`` String. Initialize it to the empty string ``""``.  Loop through all the values in the ArrayList and compare its length to the length of ``longest``. Return ``longest``.

           .. activecode::  ch8Ex10a
              :language: java
              :optional:

              This is the answer to the previous question.
              ~~~~
              import java.util.ArrayList;

              public class Test1
              {
                  public static String findLongest(ArrayList<String> list)
                  {
                      String longest = "";
                      for (String element : list)
                      {
                          if (element.length() > longest.length())
                          {
                              longest = element;
                          }
                      }
                      return longest;
                  }

                  public static void main(String[] args)
                  {
                      // instantiate ArrayList and fill with Integers
                      ArrayList<String> values = new ArrayList<String>();
                      String[] words = {"singapore", "cattle", "metropolitan", "turnstile"};
                      for (int i = 0; i < words.length; i++)
                      {
                          values.add(words[i]);
                      }
                      System.out.println("Expected Result:\t metropolitan");
                      System.out.print("Your Result:\t\t ");
                      System.out.println(findLongest(values));
                  }
              }

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch8Ex10d
