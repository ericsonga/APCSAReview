.. qnum::
   :prefix:  8-14-
   :start: 1

Free Response - CookieOrder
===========================

..	index::
	single: cookieorder
    single: free response

The following is a free response question from 2010.  It was question 1 on the exam.  You can see all the free response questions from past exams at https://apstudent.collegeboard.org/apcourse/ap-computer-science-a/exam-practice.

**Question 1.**  An organization raises money by selling boxes of cookies. A cookie order specifies the variety of cookie and the number of boxes ordered. The declaration of the `CookieOrder` class is shown below.

.. code-block:: java

   public class CookieOrder
   {
    /** Constructs a new CookieOrder object */
    public CookieOrder(String variety, int numBoxes)
    { /* implementation not shown */ }

    /** @return the variety of cookie being ordered
    */
    public String getVariety()
    { /* implementation not shown */ }

    /** @return the number of boxes being ordered
    */
    public int getNumBoxes()
    { /* implementation not shown */ }

    // There may be instance variables, constructors, and methods that are not shown.
   }

The `MasterOrder` class maintains a list of the cookies to be purchased. The declaration of the `MasterOrder` class is shown below.

.. code-block:: java

   public class MasterOrder
   {
    /** The list of all cookie orders */
    private List<CookieOrder> orders;

    /** Constructs a new MasterOrder object */
    public MasterOrder()
    { orders = new ArrayList<CookieOrder>(); }

    /** Adds theOrder to the master order.
    *   @param theOrder the cookie order to add to the master order
    */
    public void addOrder(CookieOrder theOrder)
    { orders.add(theOrder); }

    /** @return the sum of the number of boxes of all of the cookie orders
    */
    public int getTotalBoxes()
    { /* to be implemented in part (a) */ }

    // There may be instance variables, constructors, and methods that are not shown.
   }

Solve Part A
------------

(a) The `getTotalBoxes` method computes and returns the sum of the number of boxes of all cookie orders. If there are no cookie orders in the master order, the method returns 0.

Complete the method `getTotalBoxes` below.

.. activecode:: FRQCookieOrderA
   :language: java

   /** @return the sum of the number of boxes of all of the cookie orders
   */
   public int getTotalBoxes()

Solve Part B
------------

(b) The `removeVariety` method updates the master order by removing all of the cookie orders in which the variety of cookie matches the parameter `cookieVar`. The master order may contain zero or more cookie orders with the same variety as `cookieVar`. The method returns the total number of boxes removed from the master order.

For example, consider the following code segment.

.. code-block:: java

   MasterOrder goodies = new MasterOrder();
   goodies.addOrder(new CookieOrder("Chocolate Chip", 1));
   goodies.addOrder(new CookieOrder("Shortbread", 5));
   goodies.addOrder(new CookieOrder("Macaroon", 2));
   goodies.addOrder(new CookieOrder("Chocolate Chip", 3));

After the code segment has executed, the contents of the master order are as shown in the following table.

.. figure:: Figures/cookieOrderTable.png
    :width: 562px
    :align: center
    :figclass: align-center

The method call `goodies.removeVariety("Chocolate Chip")` returns 4 because there were two Chocolate Chip cookie orders totaling 4 boxes. The master order is modified as shown below.

.. figure:: Figures/cookieOrderTable2.png
    :width: 285px
    :align: center
    :figclass: align-center

The method call `goodies.removeVariety("Brownie")` returns 0 and does not change the master order.

Complete the method `removeVariety` below.

.. activecode:: FRQCookieOrderB
   :language: java

   /** Removes all cookie orders from the master order that have the same variety
   *   of cookie as cookieVar and returns the total number of boxes that were removed
   *   @param cookieVar the variety of cookies to remove from the master order
   *   @return the total number of boxes of cookieVar in the cookie orders removed
   */
   public int removeVariety(String cookieVar)
