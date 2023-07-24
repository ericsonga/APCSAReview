
Code Practice for Recursion
---------------------------------------------

.. tabbed:: recursionCode1

        .. tab:: Question

           .. activecode::  recursionx1q
              :language: java
              :autograde: unittest

              Replace the "ADD CODE HERE" below with the code to complete the findSum method. The method should take the sum of every value that is less than or equal to n. For example, findSum(3) should return 6. The output of the program should be 15.
              ~~~~
              public class Recursion
              {
                  public static int findSum(int n)
                  {
                      // write code here
                  }

                  public static void main(String[] args)
                  {
                      System.out.println(findSum(5));
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
                      String expect = "15\n";
                      boolean passed = getResults(expect, output, "Expected output from main");
                      assertTrue(passed);
                  }
              }

        .. tab:: Answer

           In order to find the sum of all the numbers that are less than or equal to n, we can use recursion. When findSum(5) is called, since 5 is not equal to 0, the program will go to the else statement. The method will then return 5 + findsum(4). findSum(4) will return 4 + findSum(3), findSum(3) will return 3 + findSum(2), findSum(2) will return findSum(1), findSum(1) will return 1 + findSum(0). findSum(0) will return 0. Therefore, findSum(5) will be 5+4+3+2+1+0, which is euqal to 15.

           .. activecode::  recursionx1a
              :language: java
              :optional:

              public class Recursion
              {
                  public static int findSum(int n)
                  {
                      if (n == 0) return 0;
                      else return n + findSum(n - 1);
                  }

                  public static void main(String[] args)
                  {
                      System.out.println(findSum(5));
                  }
              }

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_recursionx1a



If you would like to try writing recursive methods check out the recursion problems at CodingBat at http://codingbat.com/java/Recursion-1.
