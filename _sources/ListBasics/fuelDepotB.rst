.. qnum::
   :prefix:  8-17-
   :start: 1

Free Response - Fuel Depot
==========================

..	index::
	single: fueldepotb
    single: free response

The following is a free response question from 2011.  It was question 3 on the exam.  You can see all the free response questions from past exams at https://apstudent.collegeboard.org/apcourse/ap-computer-science-a/exam-practice.

**Question 3.**  A fuel depot has a number of fuel tanks arranged in a line and a robot that moves a filling mechanism back and forth along the line so that the tanks can be filled. A fuel tank is specified by the ``FuelTank`` interface below.

.. code-block:: java

   public interface FuelTank
   {
    /** @return an integer value that ranges from 0 (empty) to 100 (full) */
    int getFuelLevel();
   }

A fuel depot keeps track of the fuel tanks and the robot. The following figure represents the tanks and the robot in a fuel depot. The robot, indicated by the arrow, is currently at index 2 and is facing to the right.

.. figure:: Figures/fuelDepotTable.png
    :width: 544px
    :align: center
    :figclass: align-center

The state of the robot includes the index of its location and the direction in which it is facing (to the right or to the left). This information is specified in the ``FuelRobot`` interface as shown in the following declaration.

.. code-block:: java

   public interface FuelRobot
   {
    /** @return the index of the current location of the robot */
    int getCurrentIndex();

    /** Determine whether the robot is currently facing to the right
    * @return true  if the robot is facing to the right
    *               (toward tanks with larger indexes)
    *
    *         false if the robot is facing to the left
    *               (toward tanks with smaller indexes)
    */
    boolean isFacingRight();

    /** Changes the current direction of the robot */
    void changeDirection();

    /** Moves the robot in its current direction by the
    *   number of locations specified.
    *
    * @param numLocs the number of locations to move. A value of 1 moves
    *                the robot to the next location in the current direction.
    *        Precondition: numLocs > 0
    */
    void moveForward(int numLocs);
   }

A fuel depot is represented by the ``FuelDepot`` class as shown in the following class declaration.

.. code-block:: java

   public class FuelDepot
   {
     /** The robot used to move the filling mechanism */
     private FuelRobot filler;

     /** The list of fuel tanks */
     private List<FuelTank> tanks;

     /** Determines and returns the index of the next tank to be filled.
     *   @param  threshold fuel tanks with a fuel level <= threshold may be filled
     *   @return index of the location of the next tank to be filled
     *   Postcondition: the state of the robot has not changed
     */
     public int nextTankToFill(int threshold)
     { /* to be implemented in part (a) */ }

     /** Moves the robot to location locIndex.
     *   @param locIndex the index of the location of the tank to move to
     *          Precondition: 0 <= locIndex < tanks.size()
     *   Postcondition: the current location of the robot is locIndex
     */
     public void moveToLocation(int locIndex)
     { /* to be implemented in part (b) */ }

     // There may be instance variables, constructors, and methods that are not shown
   }

Write the ``FuelDepot`` method ``moveToLocation`` that will move the robot to the given tank location. Because the robot can only move forward, it may be necessary to change the direction of the robot before having it move. Do **not** move the robot past the end of the line of fuel tanks.

How to Solve
----------------
1. Remember to keep an eye on whether the Fuel Robot is facing right.

The Algorithm
-------------------
.. parsonsprob:: FuelDepotB

  The method moveToLocation below contains the correct code for one solution to this problem, but it is mixed up and contains extra blocks that are not needed.  Drag the needed code from the left to the right and put them in order with the correct indention so that the code would work correctly.
  -----
  public void moveToLocation(int locIndex) {
  =====
      FuelRobot fill = this.filler;
      if (fill.getCurrentIndex() > locIndex) {
  =====
          if (fill.isFacingRight()) {
              fill.changeDirection();
          }
          fill.moveForward(fill.getCurrentIndex() - locIndex);
  =====
      } // end if
  =====
      if (fill.getCurrentIndex() < locIndex) {
          if (!fill.isFacingRight()) {
              fill.changeDirection();
          }
          fill.moveForward(locIndex - fill.getCurrentIndex());
      }
  =====
  } // end method

Solve Part B
------------

Complete the method ``moveToLocation`` below.

.. activecode:: FRQFuelDepotB
  :language: java

  import java.util.List;
  import java.util.ArrayList;

  interface FuelTank
  {
      int getFuelLevel();
  }

  class Tank implements FuelTank {
      private int fuelLevel;

      public Tank(int level){
          this.fuelLevel = level;
      }

      public int getFuelLevel(){
          return this.fuelLevel;
      }
  }

  interface FuelRobot
  {
      int getCurrentIndex();

      boolean isFacingRight();

      void changeDirection();

      void moveForward(int numLocs);
  }

  class Robot implements FuelRobot {

      private int index;
      private boolean right;

      public Robot(){
          this.index = 0;
      }

      public boolean isFacingRight(){
          return this.right;
      }

      public void changeDirection(){
          this.right = !right;
      }

      public int getCurrentIndex(){
          return this.index;
      }

      public void moveForward(int numLocs){
          this.index += 1;
      }
  }


  public class FuelDepot
  {
      /** The robot used to move the filling mechanism */
      private FuelRobot filler;

      /** The list of fuel tanks */
      private List<FuelTank> tanks;

      public FuelDepot(){
          this.tanks = new ArrayList<FuelTank>();
          this.tanks.add(new Tank(100));
          this.tanks.add(new Tank(70));
          this.tanks.add(new Tank(20));
          this.tanks.add(new Tank(45));
          this.tanks.add(new Tank(50));
          this.tanks.add(new Tank(25));

          this.filler = new Robot();
      }

      public FuelRobot getRobot(){
          return this.filler;
      }

      public int nextTankToFill(int threshold)
      {
          int minLevel = this.tanks.get(0).getFuelLevel();
          int minTankIndex = 0;
          for (int i = 1; i < this.tanks.size(); i++) {
              if (this.tanks.get(i).getFuelLevel() < minLevel) {
                  minLevel = this.tanks.get(i).getFuelLevel();
                  minTankIndex = i;
              }
          }
          if (minLevel <= threshold) {
              return minTankIndex;
          } else {
              return this.filler.getCurrentIndex();
          }
      }

      public void moveToLocation(int locIndex){
          // Complete this method
      }

      public static void main(String[] args){
          FuelDepot d = new FuelDepot();
          boolean test1 = false;
          boolean test2 = false;

          d.moveToLocation(1);

          if(d.getRobot().getCurrentIndex() == 1)
              test1 = true;

          d.moveToLocation(2);

          if(d.getRobot().getCurrentIndex() == 2)
              test2 = true;

          if(test1 && test2)
              System.out.println("Looks like your code works well!");
          else
              System.out.println("Oops! Make a few changes to your code, please.");
      }
  }
