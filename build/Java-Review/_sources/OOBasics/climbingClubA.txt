.. qnum::
   :prefix: X-X-
   :start: 1

Free Response - Climbing Club
-------------------------------

..	index::
	single: climbing club
    single: free response
    
The following is part a of a free response question from 2012.  It was question 1 on the exam.  You can see all the free response questions from past exams at https://apstudent.collegeboard.org/apcourse/ap-computer-science-a/exam-practice.  

**Question 1.**  A mountain climbing club maintains a record of the climbs that its members have made. Information about a climb includes the name of the mountain peak and the amount of time it took to reach the top. The information is contained in the ``ClimbInfo`` class as declared below.

.. code-block:: java 

   public class ClimbInfo
   {
      /** Creates a ClimbInfo object with name peakName and time climbTime.
      * @param peakName the name of the mountain peak
      * @param climbTime the number of minutes taken to complete the climb
      */
      public ClimbInfo(String peakName, int climbTime)
      {
        /* implementation not shown */
      }

      /** @return the name of the mountain peak
      */
      public String getName()
      {
        /* implementation not shown */
      }

      /** @return the number of minutes taken to complete the climb
      */
      public int getTime()
      {
        /* implementation not shown */
      }
   }

The ``ClimbingClub`` class maintains a list of the climbs made by members of the club. The declaration of the ``ClimbingClub`` class is shown below.

**Part a.**  Write an implementation of the ``ClimbingClub`` method ``addClimb`` that stores the ``ClimbInfo`` objects in the order they were added. This implementation of ``addClimb`` should create a new ``ClimbInfo`` object with the given name and time. It appends a reference to that object to the end of ``climbList``.

.. code-block:: java

   import java.util.List;
   import java.util.ArrayList;
   
   public class ClimbingClub 
   { 
      /** The list of climbs completed by members of the club. 
       *  Guaranteed not to be null. Contains only non-null references. 
       */ 
      private List<ClimbInfo> climbList; 
  
      /** Creates a new ClimbingClub object. */ 
      public ClimbingClub() 
      { 
         climbList = new ArrayList<ClimbInfo>(); 
      } 
  
      /** Adds a new climb with name peakName and time climbTime to 
       *  the end of the list of climbs  
       * 
       * @param peakName the name of the mountain peak climbed 
       * @param climbTime the number of minutes taken to complete the climb 
       */ 
     public void addClimb(String peakName, int climbTime) 
     { 
       /* to be implemented in part a */
     } 
   }
    
How to solve this problem
===========================

The first thing to do is to create a new instance of the ``ClimbInfo`` object, which will be added to the ``climbList`` array. 

.. mchoicemf:: frcca_1
   :answer_a: ClimbInfo climb = ClimbInfo(peakName, climbTime);
   :answer_b: ClimbInfo climb = new ClimbInfo(climbTime, peakName);
   :answer_c: ClimbInfo climb = new ClimbInfo(peakName, climbTime);
   :correct: c
   :feedback_a: The keyword 'new' is missing. This is required to create a new instance of a class.
   :feedback_b: Double check the order of the parameters in the constructor.  
   :feedback_c: This will correctly create a new ClimbInfo object.   

   Which of the following correctly creates a new ``ClimbInfo`` object?

Next, we need to know how to add to the end of a list.

.. mchoicemf:: frcca_2
   :answer_a: climbList.add(infoObj);
   :answer_b: climbList[nextIndex] = infoObj;
   :answer_c: climbList.add(0, infoObj);
   :correct: b
   :feedback_a: The add method with one parameter appends the element to the end of the list.
   :feedback_b: This is the syntax for setting the value of an array at an index.
   :feedback_c: This will add infoObj at index 0, but first move to the right any existing items. 

   Which of the following correctly adds the element ``infoObj`` to the end of the 'climbList' list?  
   
Try to write the code for the method addClimb. When you are ready click "Run" to test your solution.   
   
.. activecode:: lcfrcca1
   :language: java
   :datafile:  http://ice-web.cc.gatech.edu/ce21/1/static/classes/ClimbInfo.class
   
   import java.util.List;
   import java.util.ArrayList;
   
   public class ClimbingClub 
   { 
      /** The list of climbs completed by members of the club. 
       *  Guaranteed not to be null. Contains only non-null references. 
       */ 
      private List<ClimbInfo> climbList; 
  
      /** Creates a new ClimbingClub object. */ 
      public ClimbingClub() 
      { 
         climbList = new ArrayList<ClimbInfo>(); 
      } 
  
      /** Adds a new climb with name peakName and time climbTime to 
       *  the end of the list of climbs  
       * 
       * @param peakName the name of the mountain peak climbed 
       * @param climbTime the number of minutes taken to complete the climb 
       */ 
      public void addClimb(String peakName, int climbTime) 
      { 
        /* to be implemented in part a */
      } 

      public String toString()
      {
        String output ="";
        for (ClimbInfo info : climbList)
        {
          output = output + info.toString() + "\n";
        }
        return output;
      }

      /****************/

      public static void main (String[] args)
      {
         ClimbingClub hikerClub = new ClimbingClub(); 
         hikerClub.addClimb("Monadnock", 274); 
         hikerClub.addClimb("Whiteface", 301); 
         hikerClub.addClimb("Algonquin", 225); 
         hikerClub.addClimb("Monadnock", 344);
         System.out.print(hikerClub);
         System.out.println("This should print Monadnock, " +
                            "Whiteface, Algonquin, Monadnock");
      }
   }
    
Video - One way to code the solution
=====================================

.. video:: v_interfaces
   :controls:
   :thumb: ../_static/codeVideo.png
   
   http://ice-web.cc.gatech.edu/ce21/1/static/video/2012Q1A.mov 
   http://ice-web.cc.gatech.edu/ce21/1/static/video/2012Q1A.webm
