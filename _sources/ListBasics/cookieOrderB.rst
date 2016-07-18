.. qnum::
   :prefix:  8-15-
   :start: 1

Free Response - CookieOrder B
=============================

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

How to Solve This
--------------------
1. It would be best to know whether the game board is empty before you perform any operations on tiles. You may need an if statement to check that. Would you continue the method if the board is empty? What if it is not empty?
2. If the game board does have tiles. You will need to loop and check the space between each tile. What type of loop will you use?
3. When determining whether the number on the left side of one tile is equivalent to the number on the right side of an adjacent tile, you will need to keep an eye on the indices of the two tiles.
4. If you still haven't found an index where the tile will fit, you may need to determine whether the tile can fit on the end of the game board. How do you find the right side number of the last tile on the board?
5. If all else fails, how will you tell the calling method that the tile doesn't fit on the game board?

The Algorithm
-------------------
.. parsonsprob:: CookieOrderB

 The method getIndexForFit below contains the correct code for one solution to this problem, but it is mixed up and contains extra blocks that are not needed.  Drag the needed code from the left to the right and put them in order with the correct indention so that the code would work correctly.
 -----
 private int getIndexForFit(NumberTile tile) {
   boolean empty = this.board.size() == 0;
   boolean firstTile = tile.getRight() == this.board.get(0).getLeft();
 =====
   if (empty || firstTile)
     return 0;
 =====
   for (int i = 1; i < this.board.size(); i++)
   {
 =====
     if (tile.getLeft() == this.board.get(i-1).getRight() &&
       tile.getRight() == this.board.get(i).getLeft())
     return i;
 =====
   } // end for
 =====
   NumberTile lastTile = this.board.get(this.board.size() - 1);
   if (tile.getLeft() == lastTile.getRight())
       return this.board.size();
 =====
   return -1;
 =====
 } // end method

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
