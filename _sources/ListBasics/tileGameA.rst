.. qnum::
   :prefix:  8-16-
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

The tiles are represented by the *NumberTile* class, as given below.

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

A partial definition of the *TileGame* class is given below.

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
     *         -1 if tile does not fit in front, at end, or between any existing files;
     *         otherwise, 0 <= position returned <= board.size()
     */
    private int getIndexForFit(NumberTile tile)
    { /* to be implemented in part (a) */ }

    /** Places tile on the game board if it fits (checking all possible tile orientations if necessary).
     *  If there are no tiles on the game board, the tile is placed at position 0.
     *  The tile should be placed at most 1 time.
     *  Precondition: board is not null
     *  @param tile the tile to be placed on the game board
     *  @return true if tile is placed successfully; false otherwise
     *  Postcondition: the orientations of the other tiles on the board are not changed
     *  Postcondition: the order of the other tiles on the board relative to each other is not changed
     */
    public boolean insertTile(NumberTile tile)
    { /* to be implemented in part (b) */ }

    // There may be instance variables, constructors, and methods that are not shown.
   }

How to Solve This
--------------------

The Algorithm
-------------------

Try and Solve Part A
--------------------

(a) Write the *TileGame* method *getIndexForFit* that determines where a given tile, in its current
    orientation, fits on the game board. A tile can be inserted at either end of a game board or between two
    existing tiles if the side(s) of the new tile match the adjacent side(s) of the tile(s) currently on the game
    board. If there are no tiles on the game board, the position for the insert is 0. The method returns the position
    that the new tile will occupy on the game board after it has been inserted. If there are multiple possible
    positions for the tile, the method will return any one of them. If the given tile does not fit anywhere on the
    game board, the method returns -1.

For example, the following diagram shows a game board and two potential tiles to be placed. The call
*getIndexForFit(tile1)* can return either 3 or 4 because *tile1* can be inserted between the
tiles at positions 2 and 3, or between the tiles at positions 3 and 4. The call *getIndexForFit(tile2)*
returns -1 because *tile2*, in its current orientation, does not fit anywhere on the game board.

.. figure:: Figures/tileGameDiagram4.png
   :width: 651px
   :align: center
   :figclass: align-center

Complete method `getIndexForFit` below.

.. activecode:: FRQTileGameA
   :language: java

   /** Determines where to insert tile, in its current orientation, into game board
   *   @param  tile the tile to be placed on the game board
   *   @return the position of tile where tile is to be inserted:
   *            0 if the board is empty;
   *           -1 if tile does not fit in front, at end, or between any existing tiles;
   *           otherwise, 0 <= position returned <= board.size()
   */
   private int getIndexForFit(NumberTile tile)
