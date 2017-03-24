.. qnum::
   :prefix:  10-18-
   :start: 1

Free Response - Game State
==========================

..	index::
	single: gamestate
    single: free response

The following is a free response question from 2007.  It was question 4 on the exam.  You can see all the free response questions from past exams at https://apstudent.collegeboard.org/apcourse/ap-computer-science-a/exam-practice.

**Question 4.**  In this question, you will complete methods in classes that can be used to represent a multi-player game. You will be able to implement these methods without knowing the specific game or the players' strategies.

The *GameState* interface describes the current state of the game. Different implementations of the interface can be used to play different games. For example, the state of a checkers game would include the positions of all the pieces on the board and which player should make the next move.

The *GameState* interface specifies these methods. The *Player* class will be described in part (a).

.. code-block:: java

   public interface GameState
   {
    /** @return true if the game is in an ending state;
     *          false otherwise
     */
    boolean isGameOver();

    /** Precondition: isGameOver() returns true
     *  @return the player who is to make the next move
     */
    Player getCurrentPlayer();

    /** @return a list of valid moves for the current player;
     *          the size of the returned list is 0 if there are no valid moves.
     */
    ArrayList<String> getCurrentMoves();

    /** Updates game state to reflect the effect of the specified move,
     *  @param move a description of the move to be made
     */
    void makeMove(String move);

    /** @return a string representing the current GameState
     */
    String toString();

   }

The *makeMove* method makes the move specified, updating the state of the game being played. Its parameter
is a *String* that describes the move. The format of the string depends on the game. In tic-tac-toe, for example,
the move might be something like "X-1-1", indicating an X is put in the position (1, 1).

Solve Part A
------------

(a) The *Player* class provides a method for selecting the next move. By extending this class, different playing strategies can be modeled.

.. code-block:: java

   public class Player
   {
    private String name;  // name of this player

    public Player(String aName)
    { name = aName; }

    public String getName()
    { return name; }

    /** This implementation chooses the first valid move.
     *  Override this method in subclasses to define players with other strategies.
     *  @param state the current state of the game; its current player is this player.
     *  @return a string representing the move chosen;
     *          "no move" if no valid moves for the current player.
     */
    public String getNextMove(GameState state)
    { /* implementation not shown */ }
   }

The method *getNextMove* returns the next move to be made as a string, using the same format as that
used by *makeMove* in *GameState*. Depending on how the *getNextMove* method is implemented, a player
can exhibit different game-playing strategies.

Write the complete class declaration for a *RandomPlayer* class that is a subclass of *Player*.
The class should have a constructor whose *String* parameter is the player's name. It should override the
 *getNextMove* method to randomly select one of the valid moves in the given game state. If there are no valid
 moves available for the player, the string "no move" should be returned.

.. activecode:: FRQGameStateA
   :language: java

   // Declare class
   class
   {
    // Declare constructor
    ()
    {}

    // Override getNextMove method
    ()
    {}
   }

Solve Part B
------------

(b) The *GameDriver* class is used to manage the state of the game during game play. The *GameDriver* class can be written without knowing details about the game being played.

.. code-block:: java

   public class GameDriver
   {
    private GameState state; // The current state of the game

    public GameDriver(GameState initial)
    { state = initial; }

    /** Plays an entire game, as described in the problem description
     */
    public void play()
    { /* to be implemented in part (b) */ }

    // There may be fields, constructors, and methods that are not shown.
   }

Write the *GameDriver* method *play*. This method should first print the initial state of the game. It should then repeatedly determine the current player and that player's next move, print both
 the player's name and chosen move, and make the move. When the game is over, it should stop making moves and print either the name of the winner and the word "wins" or the message "Game ends in a draw"
 if there is no winner. You may assume that the *GameState* *makeMove* method has been implemented so that it will properly handle any move description returned by the *Player* *getNextMove* method,
 including the string "no move".

 Complete the method *play* below.

.. activecode:: FRQGameStateB
   :language: java

   /** Plays an entire game, as described in the problem description
    */
   public void play()
