.. qnum::
   :prefix:  7-4-5-
   :start: 1

Free Response - CookieOrder A
=============================

.. index::
    single: cookieorder
    single: free response

The following is a free response question from 2010.  It was question 1 on the exam.  You can see all the free response questions from past exams at https://apstudents.collegeboard.org/courses/ap-computer-science-a/free-response-questions-by-year.

**Question 1.**  An organization raises money by selling boxes of cookies. A cookie order specifies the variety of cookie and the number of boxes ordered. The declaration of the ``CookieOrder`` class is shown below.

.. code-block:: java

   public class CookieOrder
   {
       /** Constructs a new CookieOrder object */
       public CookieOrder(String variety, int numBoxes)
       {
           /* implementation not shown */
       }

       /**
        * @return the variety of cookie being ordered
        */
       public String getVariety()
       {
           /* implementation not shown */
       }

       /**
        * @return the number of boxes being ordered
        */
       public int getNumBoxes()
       {
           /* implementation not shown */
       }

       // There may be instance variables, constructors, and methods that are not
       // shown.
   }

The ``MasterOrder`` class maintains a list of the cookies to be purchased. The declaration of the ``MasterOrder`` class is shown below.

.. code-block:: java

   public class MasterOrder
   {
       /** The list of all cookie orders */
       private List<CookieOrder> orders;

       /** Constructs a new MasterOrder object */
       public MasterOrder()
       {
           orders = new ArrayList<CookieOrder>();
       }

       /**
        * Adds theOrder to the master order.
        *
        * @param theOrder the cookie order to add to the master order
        */
       public void addOrder(CookieOrder theOrder)
       {
           orders.add(theOrder);
       }

       /**
        * @return the sum of the number of boxes of all of the cookie orders
        */
       public int getTotalBoxes()
       {
           /* to be implemented in part (a) */
       }

       // There may be instance variables, constructors, and methods that are not
       // shown.
   }

**Part a.**
The ``getTotalBoxes`` method computes and returns the sum of the number of boxes of all cookie orders. If there are no cookie orders in the master order, the method returns 0.

How to Solve This
--------------------

Click to reveal multiple choice questions that may help you write your solution.

.. reveal:: fr_cookieA_r1
   :showtitle: Reveal Problems
   :hidetitle: Hide Problems
   :optional:

   .. mchoice:: fr_cookieA_1
        :answer_a: while
        :answer_b: for
        :answer_c: for-each
        :correct: c
        :feedback_a: While loops are better for problems where you are looping until a condition is true or false.
        :feedback_b: This will work, but it is more concise to use a for-each loop.
        :feedback_c: Correct! This is the most concise way to access every CookieOrder.

        What type of loop is best for this problem?

   .. mchoice:: fr_cookieA_2
        :answer_a: The total number of cookie orders
        :answer_b: The total number of cookie boxes
        :answer_c: The total number of cookies
        :correct: b
        :feedback_a: The number of cookie orders is the length of the orders List. We are going one step farther in counting boxes. Try again!
        :feedback_b: Correct!
        :feedback_c: We don't know how many cookies are in each box. Try again!

        What will you return at the end of this method?

   .. mchoice:: fr_cookieA_3
        :answer_a: It does not count the total number of boxes because the sum variable's scope is only inside the loop.
        :answer_b: It counts orders, not boxes
        :answer_c: Nothing.
        :correct: a
        :feedback_a: Correct! int sum must be initialized before the loop.
        :feedback_b: co.getNumBoxes returns the number of boxes for a CookieOrder.
        :feedback_c: Take a closer look inside the loop.

        What is wrong with this code?

        .. code-block:: java

            public int getTotalBoxes() 
            {
                for (CookieOrder co : this.orders)
                {
                  int sum = sum + co.getNumBoxes();
                }
                return sum;
            }

Mixed Up Code
----------------

Click to reveal the  Mixed Up Code for the solution to this problem.

.. reveal:: cookieOrderA_parsons
    :showtitle: Reveal Mixed Up Code
    :hidetitle: Hide Mixed Up Code

    .. parsonsprob:: cookieOrderA
      :numbered: left
      :adaptive:

      The method ``getTotalBoxes`` below contains the correct code for one solution to this problem, but it is mixed up.  Drag the needed code from the left to the right and put them in order with the correct indention so that the code would work correctly.
      -----
      public int getTotalBoxes() 
      {
      =====
         int sum = 0;
      =====
         for (CookieOrder co : this.orders) 
         {
      =====
            sum += co.getNumBoxes();
      =====
         } // end for
      =====
         return sum;
      =====
      } // end method


Solve Part A
------------


.. activecode:: FRQCookieOrderA
   :language: java
   :autograde: unittest

   FRQ Cookie Order Part A: Complete the method ``getTotalBoxes`` below.
   ~~~~
   import java.util.ArrayList;
   import java.util.List;

   class CookieOrder
   {
       private int numBoxes;
       private String variety;

       /** Constructs a new CookieOrder object */
       public CookieOrder(String variety, int numBoxes)
       {
           this.variety = variety;
           this.numBoxes = numBoxes;
       }

       /**
        * @return the variety of cookie being ordered
        */
       public String getVariety()
       {
           return this.variety;
       }

       /**
        * @return the number of boxes being ordered
        */
       public int getNumBoxes()
       {
           return this.numBoxes;
       }

       // There may be instance variables, constructors, and methods that are not
       // shown.
   }

   public class MasterOrder
   {
       /** The list of all cookie orders */
       private List<CookieOrder> orders;

       /** Constructs a new MasterOrder object */
       public MasterOrder()
       {
           orders = new ArrayList<CookieOrder>();
       }

       /**
        * Adds theOrder to the master order.
        *
        * @param theOrder the cookie order to add to the master order
        */
       public void addOrder(CookieOrder theOrder)
       {
           orders.add(theOrder);
       }

       /**
        * @return the sum of the number of boxes of all of the cookie orders
        */
       public int getTotalBoxes()
       {
           // Complete this method
       }

       public static void main(String[] args)
       {
           boolean test1 = false;
           boolean test2 = false;

           MasterOrder order = new MasterOrder();

           if (order.getTotalBoxes() == 0) 
           {
               test1 = true;
           }
           else
           {
               System.out.println(
                       "Oops! Looks like your code doesn't properly check to see if"
                           + " the master order is empty.\n");
           }
           order.addOrder(new CookieOrder("Raisin", 3));
           order.addOrder(new CookieOrder("Oatmeal", 8));

           if (order.getTotalBoxes() == 11) 
           {
               test2 = true;
           }
           else
           {
               System.out.println(
                       "Oops! Looks like your code doesn't properly count the number"
                           + " of boxes in the master order.\n");
            }
           if (test1 && test2) 
           {
               System.out.println("Looks like your code works well!");
           }
           else 
           {
               System.out.println("Make some changes to your code, please.");
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
           super("MasterOrder");
       }

       @Test
       public void test0()
       {
           String output = getMethodOutput("main");
           String expected = "Looks like your code works well!";

           boolean passed = getResults(expected, output, "main()");
           assertTrue(passed);
       }

       @Test
       public void test1()
       {
           MasterOrder order = new MasterOrder();
           int total = order.getTotalBoxes();

           boolean passed = getResults("0", "" + total, "Empty order");
           assertTrue(passed);
       }

       @Test
       public void test2()
       {
           MasterOrder order = new MasterOrder();
           order.addOrder(new CookieOrder("Raisin", 4));
           order.addOrder(new CookieOrder("Oatmeal", 5));

           int total = order.getTotalBoxes();

           boolean passed =
                   getResults("9", "" + total, "Test order of 4 boxes of Raisin and 5 Oatmeal");
           assertTrue(passed);
       }
   }

