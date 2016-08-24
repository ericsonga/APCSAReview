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

.. parsonsprob:: BatteryChargerA

    The method getChargingCost below contains the correct code for one solution to this problem, but it is mixed up and contains extra blocks that are not needed.  Drag the needed code from the left to the right and put them in order with the correct indention so that the code would work correctly.
    -----
    public void trimSilenceFromBeginning() {
        int i = 0;
    =====
        while (this.samples[i] == 0) {
            i++;
    =====
        } // end while
    =====
        int samplesLen = this.samples.length;
        int[] newSamples = new int[samplesLen - i];
    =====

        for (int j = 0; j < newSamples.length; j++) {
    =====
            newSamples[j] = this.samples[j+i];
    =====
        } // end for
    =====
        this.samples = newSamples;
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
    {
        // Complete this method
    }

    /** Determines start time to charge the battery at the lowest cost for the given charge time.
     *  @param chargeTime the number of hours the battery needs to be charged
     *         Precondition: chargeTime > 0
     *  @return an optimal start time, with 0 <= returned value <= 23
     */
    public int getChargeStartTime(int chargeTime)
    { /* to be implemented in part (b) */ }

    public static void main(String[] args){
        // Tests
    }
   }
