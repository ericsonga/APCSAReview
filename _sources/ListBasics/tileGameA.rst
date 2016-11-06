.. qnum::
   :prefix:  8-18-
   :start: 1

Free Response - Tile Game A
===========================

..	index::
	single: tilegamea
    single: free response

The following is a free response question from 2009.  It was question 1 on the exam.  You can see all the free response questions from past exams at https://apstudent.collegeboard.org/apcourse/ap-computer-science-a/exam-practice.

**Question 1.**  A game uses square tiles that have numbers on their sides. Each tile is labeled with a number on each of its four sides and may be rotated clockwise, as illustrated below.

.. figure:: Figures/tileGameDiagram.png
    :width: 665px
    :align: center
    :figclass: align-center

The tiles are represented by the ``NumberTile`` class, as given below.

.. code-block:: java

   public class NumberTile
   {
    /** Rotates the tile 90 degrees clockwise
     */
    public void rotate()
    { /* implementation not shown */ }

    /** @return value at left edge of tile
     */
    public int getLeft()
    { /* implementation not shown */ }

    /** @return value at right edge of file
     */
    public int getRight()
    { /* implementation not shown */ }

    // There may be instance variables, constructors, and methods that are not shown.
   }

Tiles are placed on a game board so that the adjoining sides of adjacent tiles have the same number. The
following figure illustrates an arrangement of tiles and shows a new tile that is to be placed on the game board.

.. figure:: Figures/tileGameDiagram2.png
    :width: 607px
    :align: center
    :figclass: align-center

In its original orientation, the new tile can be inserted between the tiles at positions 2 and 3 or between the tiles
at positions 3 and 4. If the new tile is rotated once, it can be inserted before the tile at position 0 (the first tile) or
after the tile at position 4 (the last tile). Assume that the new tile, in its original orientation, is inserted between
the tiles at positions 2 and 3. As a result of the insertion, the tiles at positions 3 and 4 are moved one location to
the right, and the new tile is inserted at position 3, as shown below.

.. figure:: Figures/tileGameDiagram3.png
    :width: 546px
    :align: center
    :figclass: align-center

A partial definition of the ``TileGame`` class is given below.

.. code-block:: java

   public class TileGame
   {
    /** represents the game; guaranteed never to be null */
    private ArrayList<NumberTile> board;

    public TileGame()
    { board = new ArrayList<NumberTile>(); }

    /** Determines where to insert title, in its current orientation, into game board
     *  @param tile the tile to be placed on the game board
     *  @return the position of tile where tile is to be inserted:
     *          0 if the board is empty;
     *         -1 if tile does not fit in front, at end,
     *            or between any existing tiles;
     *         otherwise, 0 <= position returned <= board.size()
     */
    private int getIndexForFit(NumberTile tile)
    { /* to be implemented in part (a) */ }

    /** Places tile on the game board if it fits
     *  (checking all possible tile orientations if necessary).
     *  If there are no tiles on the game board, the tile is placed at position 0.
     *  The tile should be placed at most 1 time.
     *  Precondition: board is not null
     *  @param tile the tile to be placed on the game board
     *  @return true if tile is placed successfully; false otherwise
     *  Postcondition: the orientations of the other tiles
     *                 on the board are not changed
     *  Postcondition: the order of the other tiles on the board relative to each
     *                 other is not changed
     */
    public boolean insertTile(NumberTile tile)
    { /* to be implemented in part (b) */ }

    // There may be instance variables, constructors, and methods that are not shown.
   }

**Part a.**
Write the ``TileGame`` method ``getIndexForFit`` that determines where a given tile, in its current
orientation, fits on the game board. A tile can be inserted at either end of a game board or between two
existing tiles if the side(s) of the new tile match the adjacent side(s) of the tile(s) currently on the game
board. If there are no tiles on the game board, the position for the insert is 0. The method returns the position
that the new tile will occupy on the game board after it has been inserted. If there are multiple possible
positions for the tile, the method will return any one of them. If the given tile does not fit anywhere on the
game board, the method returns -1.

For example, the following diagram shows a game board and two potential tiles to be placed. The call
``getIndexForFit(tile1)`` can return either 3 or 4 because ``tile1`` can be inserted between the
tiles at positions 2 and 3, or between the tiles at positions 3 and 4. The call ``getIndexForFit(tile2)``
returns -1 because ``tile2``, in its current orientation, does not fit anywhere on the game board.

.. figure:: Figures/tileGameDiagram4.png
  :width: 651px
  :align: center
  :figclass: align-center

How to Solve This
--------------------
1. It would be best to know whether the game board is empty before you perform any operations on tiles. You may need an if statement to check that. Would you continue the method if the board is empty? What if it is not empty?
2. If the game board does have tiles. You will need to loop and check the space between each tile. What type of loop will you use?
3. When determining whether the number on the left side of one tile is equivalent to the number on the right side of an adjacent tile, you will need to keep an eye on the indices of the two tiles.
4. If you still haven't found an index where the tile will fit, you may need to determine whether the tile can fit on the end of the game board. How do you find the right side number of the last tile on the board?
5. If all else fails, how will you tell the calling method that the tile doesn't fit on the game board?

The Algorithm
-------------------
.. parsonsprob:: TileGameA

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

Try and Solve Part A
--------------------

Complete method ``getIndexForFit`` below.

.. activecode:: FRQTileGameA
   :language: java

   import java.util.ArrayList;

   class NumberTile
   {

    int left;
    int right;

    public NumberTile(int left, int right){
      this.left = left;
      this.right = right;
    }

    /** Rotates the tile 90 degrees clockwise
     */
    public void rotate()
    { /* implementation not shown */ }

    /** @return value at left edge of tile
     */
    public int getLeft()
    { return left; }

    /** @return value at right edge of file
     */
    public int getRight()
    { return right; }

    // There may be instance variables, constructors, and methods that are not shown.
   }

   public class TileGame
   {
    /** represents the game; guaranteed never to be null */
    private ArrayList<NumberTile> board;

    public TileGame()
    { board = new ArrayList<NumberTile>();
      board.add(new NumberTile(1, 3));
      board.add(new NumberTile(3, 8));
      board.add(new NumberTile(8, 4));
      board.add(new NumberTile(4, 1));
    }

    /** Determines where to insert tile, in its current orientation, into game board
     *  @param tile the tile to be placed on the game board
     *  @return the position of tile where tile is to be inserted:
     *          0 if the board is empty;
     *         -1 if tile does not fit in front, at end,
     *            or between any existing tiles;
     *         otherwise, 0 <= position returned <= board.size()
     */
    private int getIndexForFit(NumberTile tile)
    {
      // Complete this method
    }

    /** Places tile on the game board if it fits
     *  (checking all possible tile orientations if necessary).
     *  If there are no tiles on the game board, the tile is placed at position 0.
     *  The tile should be placed at most 1 time.
     *  Precondition: board is not null
     *  @param tile the tile to be placed on the game board
     *  @return true if tile is placed successfully; false otherwise
     *  Postcondition: the orientations of the other tiles
     *                 on the board are not changed
     *  Postcondition: the order of the other tiles on the board relative to each
     *                 other is not changed
     */
    public boolean insertTile(NumberTile tile)
    { return true; }

    // There may be instance variables, constructors, and methods that are not shown.
    public static void main(String[] args)
    {
      boolean test1 = false;
      boolean test2 = false;
      boolean test3 = false;
      boolean test4 = false;

      TileGame board = new TileGame();

      if(board.getIndexForFit(new NumberTile(8, 8)) == 2)
        test1 = true;
      else
        System.out.println("Oops! Looks like your code doesn't check to see whether the tile can fit on the board properly.\n");

      if(board.getIndexForFit(new NumberTile(1, 1)) == 0)
        test2 = true;
      else
        System.out.println("Oops! Looks like your code doesn't check to see if the tile can fit at the beginning of the board.\n");

      if(board.getIndexForFit(new NumberTile(1, 8)) == 4)
        test3 = true;
      else
        System.out.println("Oops! Looks like your code doesn't check to see if the tile can fit at the end of the board.\n");

      if(board.getIndexForFit(new NumberTile(0, 11)) == -1)
        test4 = true;
      else
        System.out.println("Oops! Looks like your code doesn't properly check for tiles that don't fit on the board.\n");

      if(test1 && test2 && test3 && test4)
        System.out.println("Looks like your code works well!");
      else
        System.out.println("Make a few changes, please.");
    }
   }
