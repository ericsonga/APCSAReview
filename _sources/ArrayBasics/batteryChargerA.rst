.. qnum::
   :prefix:  7-15-
   :start: 1

Free Response - Battery Charger A
=================================

..	index::
	single: batterychargera
    single: free response

The following is a free response question from 2009.  It was question 3 on the exam.  You can see all the free response questions from past exams at https://apstudent.collegeboard.org/apcourse/ap-computer-science-a/exam-practice.

**Question 3.**  An electric car that runs on batteries must be periodically recharged for a certain number of hours. The battery technology in the car requires that the charge time not be interrupted.

The cost for charging is based on the hour(s) during which the charging occurs. A rate table lists the 24 one-hour
periods, numbered from 0 to 23, and the corresponding hourly cost for each period. The same rate table is used
for each day. Each hourly cost is a positive integer. A sample rate table is given below.

.. figure:: Figures/bcTable.png
   :width: 404px
   :align: center
   :figclass: align-center

The class ``BatteryCharger`` below uses a rate table to determine the most economic time to charge the battery. You will write two of the methods for the ``BatteryCharger`` class.

.. code-block:: java

   public class BatteryCharger
   {
    /** rateTable has 24 entries representing the charging costs for hours 0 through 23. */
    private int[] rateTable;

    /** Determines the total cost to charge the battery starting at the beginning of startHour.
     *  @param startHour the hour at which the charging period begins
     *         Precondition: 0 <= startHour <= 23
     *  @param chargeTime the number ofhours the battery needs to be charged
     *         Precondition: chargeTime > 0
     *  @return the total cost to charge the battery
     */
    private int getChargingCost(int startHour, int chargeTime)
    { /* to be implemented in part (a) */ }

    /** Determines start time to charge the battery at the lowest cost for the given charge time.
     *  @param chargeTime the number of hours the battery needs to be charged
     *         Precondition: chargeTime > 0
     *  @return an optimal start time, with 0 <= returned value <= 23
     */
    public int getChargeStartTime(int chargeTime)
    { /* to be implemented in part (b) */ }

    // There may be instance variables, constructors, and methods that are not shown.
   }

**Part a.**
Write the ``BatteryCharger`` method ``getChargingCost`` that returns the total cost to charge a battery given the hour at which the charging process will start and the number of hours the battery needs to be charged.

For example, using the rate table given at the beginning of the question, the following table shows the resulting costs of several possible charges.

.. figure:: Figures/bcTable2.png
   :width: 437px
   :align: center
   :figclass: align-center

Note that a charging method consists of consecutive hours that may extend over more than one day.

How to Solve
------------
1. You will need to use a type of loop in order to add the charge for each hour. Which type would be the most efficient in this case?

The Algorithm
-------------
.. parsonsprob:: BatteryChargerA

    The method getChargingCost below contains the correct code for one solution to this problem, but it is mixed up and contains extra blocks that are not needed.  Drag the needed code from the left to the right and put them in order with the correct indention so that the code would work correctly.
    -----
    private int getChargingCost(int startHour,
                               int chargeTime)
    {
    =====
      int cost = 0;
    =====
      boolean test = hour < startHour + chargeTime;
      for(int hour = startHour; test; hour++)
    =====
        int addVal = hour % rateTable.length;
        cost += rateTable[addVal];
    =====
      return cost;
    =====
    } // end method

Solve Part A
------------

Write the ``BatteryCharger`` method ``getChargingCost`` that returns the total cost to charge a battery given the hour at which the charging process will start and the number of hours the battery needs to be charged.

For example, using the rate table given at the beginning of the question, the following table shows the resulting costs of several possible charges.

.. figure:: Figures/bcTable2.png
   :width: 437px
   :align: center
   :figclass: align-center

Note that a charging method consists of consecutive hours that may extend over more than one day.

Complete method ``getChargingCost`` below.

.. activecode:: FRQBatteryChargerA
   :language: java

   public class BatteryCharger
   {
    private int[] rateTable = {50,60,160,60,80,100,100,120,150,150,150,200,40,240,220,220,200,200,180,180,140,100,80,60};

    public BatteryCharger()
    {}

    public int getChargingCost(int startHour, int chargeTime)
    {
      // Complete this method
    }

    public int getChargeStartTime(int chargeTime)
    { return 0; }

    public static void main(String[] args){
        BatteryCharger b = new BatteryCharger();

        if(b.getChargingCost(0, 4) == 330 && b.getChargingCost(13, 4) == 880 && b.getChargingCost(22, 4) == 250){
            System.out.println("Looks like your code works well!");
        }else{
            System.out.println("Oops");

            if(b.getChargingCost(13, 4) == 360)
                System.out.println("Looks like you're not properly using the modulus operator");
            
            System.out.println("Make a few changes to your code, please.");
        }
    }
   }
