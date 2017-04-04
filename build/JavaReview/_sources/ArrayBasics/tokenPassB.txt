.. qnum::
  :prefix: 7-16-
  :start: 1

================================
Free Response - Token Pass B
================================

..    index::
      single: tokenpass
    single: free response

The following is part a of a free response question from 2013. It was question 2 on the exam. You can see all the free response questions from past exams at https://apstudent.collegeboard.org/apcourse/ap-computer-science-a/exam-practice.

**Question 2.** In this question you will write a constructor and a method for the TokenPass class using Arrays to simulate a game called Token pass. Token Pass has the following rules.

 Each player begins with a random number of tokens (at least 1, but no more than 10) that are placed on a linear game board. There is one position on the game board for each player. After the game board has been filled, a player is randomly chosen to begin the game. Each position on the board is numbered, starting with 0. The following rules apply for a player’s turn.    
  - The tokens are collected and removed from the game board at that player's position.    
  - The collected tokens are distributed one at a time, to each player, beginning with the next player in order of increasing position.     
  - If there are still tokens to distribute after the player at the highest position gets a token, the next token will be distributed to the player at position 0.    
  - The distribution of tokens continues until there are no more tokens to distribute. 

For example, this represents a game with 4 players. The player at position 2 was chosen to go first.

.. figure:: Figures/tokenPassA.png
    :width: 698px
    :align: center
    :figclass: align-center

The tokens at position 2 are collected and distributed as follows.    

|    1st token - to position 3 (The highest position is reached, so the next token goes to position 0.)    
|    2nd token - to position 0    
|    3rd token - to position 1    
|    4th token - to position 2    
|    5th token - to position 3 (The highest position is reached, so the next token goes to position 0.)    
|    6th token - to position 0  
|
|  After player 2’s turn, the values in the array will be as follows. 

.. figure:: Figures/tokenPassB.png
    :width: 698px
    :align: center
    :figclass: align-center

Incomplete implementations of the TokenPass class is shown below.

.. code-block:: java

  public class TokenPass 
  {   
  private int[] board;   
  private int currentPlayer;   

  /** Creates the board array to be of size playerCount and fills it with     
   *  random integer values from 1 to 10, inclusive. Initializes currentPlayer to a      
   *  random integer value in the range between 0 and playerCount-1, inclusive.    
   *  @param playerCount the number of players       
   */   
   public TokenPass(int playerCount)   
   {  /* to be implemented in part (a) */  }  
 
    /** Distributes the tokens from the current player's position one at a time to each player in     
     *  the game. Distribution begins with the next position and continues until all the tokens     
     *  have been distributed. If there are still tokens to distribute when the player at the     
     *  highest position is reached, the next token will be distributed to the player at position 0.    
     *  Precondition: the current player has at least one token.    
     *  Postcondition: the current player has not changed.    
     */   
     public void distributeCurrentPlayerTokens()   
     {  /* to be implemented in part (b) */  }  
  
     // There may be instance variables, constructors, and methods that are not shown. 
   } 

**Part b.**   Write the distributeCurrentPlayerTokens method. The tokens are collected and removed from the game board at the current player's position. These tokens are distributed, one at a time, to each player, beginning with the next higher position, until there are no more tokens to distribute.   

Complete the distributeCurrentPlayerTokens method below.

.. activecode:: FRQTokenPassB
   :language: java

    public class TokenPass 
    { 
       private int[] board; 
       private int currentPlayer; 
  
      /** Creates the board array to be of size playerCount and fills it with 
       * * random integer values from 1 to 10, inclusive. Initializes currentPlayer to a 
       * random integer value in the range between 0 and playerCount-1, inclusive. 
       * @param playerCount the number of players 
       */ 
       public TokenPass(int playerCount) 
       { 
          board = new int[playerCount];
          for (int i = 0; i < playerCount; i++)
          {
             board[i] = (int) (Math.random() * 10) + 1;
          }
          currentPlayer = (int) (Math.random() * playerCount);
       }   
  
      /** constructor that takes the number of players, an array of the number of 
       * tokens per player, and the index of the current player
       */
       public TokenPass(int playerCount, int[] tokens, int curr) 
       {  
          board = new int[playerCount];
          for (int i = 0; i < playerCount; i++)
          {
             board[i] = tokens[i];
          }
          currentPlayer = curr;
       }
  
      /** Distributes the tokens from the current player's position one at a time to each player in 
       * the game. Distribution begins with the next position and continues until all the tokens 
       * have been distributed. If there are still tokens to distribute when the player at the 
       * highest position is reached, the next token will be distributed to the player at position 0. 
       * Precondition: the current player has at least one token. 
       * Postcondition: the current player has not changed. 
       */ 
       public void distributeCurrentPlayerTokens() 
       { 
          //TO BE COMPLETED IN THIS PART
       }
  
       public void printInfo ()
       {
          System.out.println("the number of players is " + board.length);
          for (int i = 0; i < board.length; i++)
          {
             System.out.println("for index " + i + " the number of tokens is " + board[i]);                   
          }
          System.out.println("current player index is " + currentPlayer);
       }
  
       public static void main(String[] args)
       {
           System.out.println("Testing part b");
           game = new TokenPass(4);
           int[] tokenArray = {3, 2, 6, 10};
           game = new TokenPass(4,tokenArray,2);
           game.printInfo();
           game.distributeCurrentPlayerTokens();
           game.printInfo();  
       }  
    }
One way to solve Part b
-----------------------

initialize a variable for tokens to the amount of tokens the current player has. Initialize a variable for the player that the current player will give his tokens to. Until tokens becomes zero, increment the given player's token by one and move the given player up when in a loop. Don't forget to subtract the tokens at the end of the loop and test if the given player is out of bounds at the beginning of the loop.

.. parsonsprob:: tokenpassb

   The following method has the correct code to return the largest value in an integer array called <b>vals</b> (a field of the current object), but the code is mixed up.  Drag the blocks from the left into the correct order on the right. You will be told if any of the blocks are in the wrong order or not indented correctly.</p>
   -----
   public void distributeCurrentPlayerTokens()
   {
   =====
       int tokens = board[currentPlayer];
       int givenPlayer = currentPlayer + 1;
   =====
       while(tokens > 0)
       {
   =====
          if(givenPlayer == playerCount)
   =====
          givenPlayer = 0;
   =====
         board[givenPlayer]++;
         givenPlayer++;
         tokens--;
   =====
       } // end of while
   =====
   } //  end of method
