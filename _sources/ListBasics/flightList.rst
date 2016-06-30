.. qnum::
   :prefix:  8-17-
   :start: 1

Free Response - Flight List
===========================

..	index::
	single: flightlist
    single: free response

The following is a free response question from 2008.  It was question 1 on the exam.  You can see all the free response questions from past exams at https://apstudent.collegeboard.org/apcourse/ap-computer-science-a/exam-practice.

**Question 1.**  A travel agency maintains a list of information about airline flights. Flight information includes a departure time
and an arrival time. You may assume that the two times occur on the same day. These times are represented by
objects of the *Time* class.

.. code-block:: java

   public class Time
   {
    /** @return difference, in minutes, between this time and other;
     *          difference is negative if other is earlier than this time
     */
    public int minutesUntil(Time other)
    { /* implementation not shown */ }

    // There may be instance variables, constructors, and methods that are not shown.
   }

For example, assume that *t1* and *t2* are *Time* objects where *t1* represents 1:00P.M. and *t2* represents 2:15P.M. The call *t1.minutesUntil(t2)* will return *75* and the call *t2.minutesUntil(t1)* will return *-75*.

The declaration of the *Flight* class is shown below. It has methods to access the departure time and the arrival time of a flight. You may assume that the departure time of a flight is earlier than its arrival time.

.. code-block:: java

   public class Flight
   {
    /** @return time at which the flight departs
     */
    public Time getDepartureTime()
    { /* implementation not shown */ }

    /** @return time at which the flight arrives
     */
    public Time getArrivalTime()
    { /* implementation not shown */ }

    // There may be instance variables, constructors, and methods that are not shown.
   }

A trip consists of a sequence of flights and is represented by the *Trip* class. The *Trip* class contains an *ArrayList* of *Flight* objects that are stored in chronological order. You may assume that for each flight after the first flight in the list, the departure time of the flight is later than the arrival time of the preceding flight in the list. A partial declaration of the *Trip* class is shown below. You will write two methods for the *Trip* class.

.. code-block:: java

   public class Trip
   {
    private ArrayList<Flight> flights;
      // stores the flights (if any) in chronological order

    /** @return the number of minutes from the departure of the first flight to the arrival
     *          of the last flight if there are one or more flights in the trip;
     *          0, if there are no flights in the trip
     */
    public int getDuration()
    { /* to be implemented in part (a) */}

    /** Precondition: the departure time for each flight is later than the arrival time of its
     *                preceding flight
     *  @return the smallest number of minutes between the arrival of a flight and the departure
     *          of the flight immediately after it, if there are two or more flights in the trip;
     *          -1, if there are fewer than two flights in the trip
     */
    public int getShortestLayover()
    { /* to be implemented in part (b) */ }

    // There may be instance variables, constructors, and methods that are not shown.

   }

Solve Part A
------------

(a) Complete method *getDuration* below.

.. activecode:: FRQFlightListA
   :language: java

   /** @return the number of minutes from the departure of the first flight to the arrival
    *          of the last flight if there are one or more flights in the trip;
    *          0, if there are no flights in the trip
    */
   public int getDuration()


Solve Part B
------------

(b) Write the Trip method *getShortestLayover*. A layover is the number of minutes from
    the arrival of one flight in a trip to the departure of the flight immediately after it. If there are two or more
    flights in the trip, the method should return the shortest layover of the trip; otherwise, it should return *-1*.

For example, assume that the instance variable *flights* of a *Trip* object *vacation* contains the
following flight information.

.. figure:: Figures/flightTable.png
    :width: 301px
    :align: center
    :figclass: align-center

The *vacation.getShortestLayer()* should return 15.

Complete method *getShortestLayer* below.

.. activecode:: FRQFlightListB
   :language: java

   /** Precondition: the departure time for each flight is later than the arrival time of its
    *  preceding flight
    *  @return the smallest number of minutes between the arrival of a flight and the departure
    *  of the flight immediately after it, if there are two or more flights in the trip;
    *  -1, if there are fewer than two flights in the trip
    */
   public int getShortestLayover()
