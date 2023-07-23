Free Response Question - Time
-------------------------------

.. index::
    single: time
    single: free response

The following is part a of a free response question that has been studied at colleges and universities.

You will implement two unrelated methods for a ``Time`` class that keeps track of the time using a 24 hour clock.  Consider the code for the ``Time`` class provided below.

**Part a.**  Write the method ``tick`` which increases the number of seconds by one.  If the number of seconds is 60 it adds one to the number of minutes and resets seconds to 0.  If the number of minutes is 59 it adds one to the number of hours and resets the number of minutes to 0.  If the number of hours reaches 24 it should be reset to 0.


.. code-block:: java

   /**
    * Objects of the Time class hold a time value for
    * a European‐style 24 hour clock.
    * The value consists of hours, minutes and seconds.
    * The range of the value is 00:00:00 (midnight)
    * to 23:59:59 (one second before midnight).
    */
   public class Time
   {
      // The values of the three parts of the time
      private int hours;
      private int minutes;
      private int seconds;

      /**
       * Creates a new Time object set to 00:00:00
       * Do not change this constructor.
       */
      public Time()
      {
         this.hours = 0;
         this.minutes = 0;
         this.seconds = 0;
      }
      /**
       * Constructor for objects of class Time.
       * Creates a new Time object set to h:m:s.
       * Assumes, without checking, that the parameter values are
       * within bounds.
       * For this task, you don't need to worry about invalid parameter values.
       * Do not change this constructor.
       */
      public Time(int h, int m, int s)
      {
         this.hours = h;
         this.minutes = m;
         this.seconds = s;
      }
      /**
       * Add one second to the current time.
       * When the seconds value reaches 60, it rolls over to zero.
       * When the seconds roll over to zero, the minutes advance.
       * So 00:00:59 rolls over to 00:01:00.
       * When the minutes reach 60, they roll over and the hours advance.
       * So 00:59:59 rolls over to 01:00:00.
       * When the hours reach 24, they roll over to zero.
       * So 23:59:59 rolls over to 00:00:00.
       */
      public void tick()
      {
         // Part a: complete the tick() method
      }
      /**
       * Add an offset to this Time.
       * Rolls over the hours, minutes and seconds fields when needed.
       */
      public void add(Time offset)
      {
           // Part b: complete the add method
      }
      public String toString()
      {
         return pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
      }
      /**
       * Returns a string representing the argument value, adding a leading
       * "0" if needed to make it at least two digits long.
       * Do not change this.
       */
      private String pad(int value)
      {
         String sign = "";
         if (value < 0)
         {
            sign = "‐";
            value = ‐value;
          }
          if (value < 10) {
             return sign + "0" + value;
          } else {
             return sign + value;
          }
       }
    }


**How to solve this problem**


The first thing to do is try to solve the examples by hand.  The question tells us that when the value of minutes is 0, and seconds is 59 the method tick should result in minutes = 1 and seconds = 0.  When the value of minutes is 59 and the value of seconds is also 59 and the method tick is called the number of hours should increase and the minutes reset to 0. If the number of hours reaches 24 it should be reset to 0.

Use conditionals (if statements) to check for each of these conditions and take the appropriate actions when each condition is true.

**Part a.**  Write the method ``tick`` which increases the number of seconds by one.  If the number of seconds is 60 it adds one to the number of minutes and resets seconds to 0.  If the number of minutes is 59 it adds one to the number of hours and resets the number of minutes to 0.  If the number of hours reaches 24 it should be reset to 0.   When you have finished writing the method, click "Run" to test your solution.  The main method has code that will test your solution using several different times.

.. activecode:: time_part_a
   :language: java
   :autograde: unittest

   /**
    * Objects of the Time class hold a time value for a European-style 24 hour clock.
    * The value consists of hours, minutes and seconds. The range of the value is
    * 00:00:00 (midnight) to 23:59:59 (one second before midnight).
    */
   public class Time
   {
       // The values of the three parts of the time
       private int hours;
       private int minutes;
       private int seconds;

       /**
        * Creates a new Time object set to 00:00:00. Do not change this constructor.
        */
       public Time()
       {
           this.hours = 0;
           this.minutes = 0;
           this.seconds = 0;
       }

       /**
        * Constructor for objects of class Time. Creates a new Time object set to
        * h:m:s. Assumes, without checking, that the parameter values are within
        * bounds. For this task, you don't need to worry about invalid parameter
        * values. Do not change this constructor.
        */
       public Time(int h, int m, int s)
       {
           this.hours = h;
           this.minutes = m;
           this.seconds = s;
       }

       /**
        * Add one second to the current time. When the seconds value reaches 60, it
        * rolls over to zero. When the seconds roll over to zero, the minutes advance.
        * So 00:00:59 rolls over to 00:01:00. When the minutes reach 60, they roll
        * over and the hours advance. So 00:59:59 rolls over to 01:00:00. When the
        * hours reach 24, they roll over to zero. So 23:59:59 rolls over to 00:00:00.
        */
       public void tick()
       {
           // Part a: complete the tick() method
       }

       public String toString()
       {
           return pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
       }

       /**
        * Returns a string representing the argument value, adding a leading "0" if
        * needed to make it at least two digits long. Do not change this.
        */
       private String pad(int value)
       {
           String sign = "";
           if (value < 0)
           {
               sign = "-";
               value = -1 * value;
           }
           if (value < 10)
           {
               return sign + "0" + value;
           }
           else
           {
               return sign + value;
           }
       }

       public static void main(String[] args)
       {
           Time time = new Time(0, 0, 0);
           time.tick();
           System.out.println(
                   "For (0,0,0) and tick() you got "
                           + time
                           + " which should be 00:00:01");

           time = new Time(0, 0, 58);
           time.tick();
           System.out.println(
                   "For (0,0,58) and tick() you got "
                           + time
                           + " which should be 00:00:59");

           time = new Time(0, 0, 59);
           time.tick();
           System.out.println(
                   "For (0,0,59) and tick() you got "
                           + time
                           + " which should be 00:01:00");

           time = new Time(0, 58, 59);
           time.tick();
           System.out.println(
                   "For (0,58,59) and tick() you got "
                           + time
                           + " which should be 00:59:00");

           time = new Time(0, 59, 59);
           time.tick();
           System.out.println(
                   "For (0,59,59) and tick() you got "
                           + time
                           + " which should be 01:00:00");

           time = new Time(23, 59, 59);
           time.tick();
           System.out.println(
                   "For (23,59,59) and tick() you got "
                           + time
                           + " which should be 00:00:00");
       }
   }

    ====
    // Test Code for Lesson 5.14 - FRQ - Time - Part A

    import static org.junit.Assert.*;

    import org.junit.Test;

    import java.io.*;

    public class RunestoneTests extends CodeTestHelper
    {
        private Time[] time =
        {
            new Time(0, 0, 0),
            new Time(0, 0, 58),
            new Time(0, 0, 59),
            new Time(0, 58, 59),
            new Time(0, 59, 59),
            new Time(23, 59, 59)
        };
        private String[] expected =
        {
            "00:00:01", "00:00:59", "00:01:00", "00:59:00", "01:00:00", "00:00:00"
        };

        @Test
        public void test0() throws IOException
        {
            Time time = new Time(0, 0, 0);
            String label = time.toString() + ".tick()";
            time.tick();
            String actual = time.toString();
            String expected = "00:00:01";

            boolean passed = getResults(expected, actual, label);
            assertTrue(passed);
        }

        @Test
        public void test1() throws IOException
        {
            int i = 1;
            String label = time[i].toString() + ".tick()";
            time[i].tick();
            String actual = time[i].toString();
            boolean passed = getResults(expected[i], actual, label);
            assertTrue(passed);
        }

        @Test
        public void test2() throws IOException
        {
            int i = 2;
            String label = time[i].toString() + ".tick()";
            time[i].tick();
            String actual = time[i].toString();
            boolean passed = getResults(expected[i], actual, label);
            assertTrue(passed);
        }

        @Test
        public void test3() throws IOException
        {
            int i = 3;
            String label = time[i].toString() + ".tick()";
            time[i].tick();
            String actual = time[i].toString();
            boolean passed = getResults(expected[i], actual, label);
            assertTrue(passed);
        }

        @Test
        public void test4() throws IOException
        {
            int i = 4;
            String label = time[i].toString() + ".tick()";
            time[i].tick();
            String actual = time[i].toString();
            boolean passed = getResults(expected[i], actual, label);
            assertTrue(passed);
        }

        @Test
        public void test5() throws IOException
        {
            int i = 5;
            String label = time[i].toString() + ".tick()";
            time[i].tick();
            String actual = time[i].toString();
            boolean passed = getResults(expected[i], actual, label);
            assertTrue(passed);
        }
    }

**Part b.**  Write the method ``add(Time offset)`` which adds the seconds together and makes sure the result is 59 or less (incrementing the minutes as needed), adds the minutes together and makes sure the result is 59 or less (increments the hours as needed), and adds the hours together (resetting the hours to 0 if it reaches 24).  When you have finished writing the method, click "Run" to test your solution.  The main method has code that will test your solution using several different times.

.. activecode:: time_part_b
   :language: java
   :autograde: unittest

   /**
    * Objects of the Time class hold a time value for a European-style 24 hour clock.
    * The value consists of hours, minutes and seconds. The range of the value is
    * 00:00:00 (midnight) to 23:59:59 (one * second before midnight).
    */
   public class Time
   {
       // The values of the three parts of the time
       private int hours;
       private int minutes;
       private int seconds;

       /**
        * Creates a new Time object set to 00:00:00. Do not change this constructor.
        */
       public Time()
       {
           this.hours = 0;
           this.minutes = 0;
           this.seconds = 0;
       }

       /**
        * Constructor for objects of class Time. Creates a new Time object set to
        * h:m:s. Assumes, without checking, that the parameter values are within
        * bounds. For this task, you don't need to worry about invalid parameter
        * values. Do not change this constructor.
        */
       public Time(int h, int m, int s)
       {
           this.hours = h;
           this.minutes = m;
           this.seconds = s;
       }

       /**
        * Add an offset to this Time. Rolls over the hours, minutes and seconds fields
        * when needed.
        */
       public void add(Time offset)
       {
           // Part b: complete the add method
       }

       public String toString()
       {
           return pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
       }

       /**
        * Returns a string representing the argument value, adding a leading "0" if
        * needed to make it at least two digits long. Do not change this.
        */
       private String pad(int value)
       {
           String sign = "";
           if (value < 0)
           {
               sign = "-";
               value = -1 * value;
           }
           if (value < 10)
           {
               return sign + "0" + value;
           }
           else
           {
               return sign + value;
           }
       }

       public static void main(String[] args)
       {
           Time time1 = new Time(1, 1, 1);
           Time time2 = new Time(2, 2, 2);
           time1.add(time2);
           System.out.println(
                   "The result of (1,1,1).add(2,2,2) is "
                           + time1
                           + " and should be (03:03:03)");

           time1 = new Time(0, 0, 59);
           time2 = new Time(0, 0, 1);
           time1.add(time2);
           System.out.println(
                   "The result of (0,0,59).add(0,0,1) is "
                           + time1
                           + " and should be (00:01:00)");

           time1 = new Time(0, 59, 0);
           time2 = new Time(0, 0, 1);
           time1.add(time2);
           System.out.println(
                   "The result of (0,59,0).add(0,0,1) is "
                           + time1
                           + " and should be (00:59:01)");

           time1 = new Time(0, 59, 59);
           time2 = new Time(0, 0, 1);
           time1.add(time2);
           System.out.println(
                   "The result of (0,59,59).add(0,0,1) is "
                           + time1
                           + " and should be (01:00:00)");

           time1 = new Time(23, 0, 0);
           time2 = new Time(1, 0, 0);
           time1.add(time2);
           System.out.println(
                   "The result of (23,0,0).add(1,0,0) is "
                           + time1
                           + " and should be (00:00:00)");

           time1 = new Time(23, 59, 59);
           time2 = new Time(23, 59, 59);
           time1.add(time2);
           System.out.println(
                   "The result of (23,59,59).add(23,59,59) is "
                           + time1
                           + " and should be (23:59:58)");
       }
   }

    ====
    // Test Code for Lesson 5.14 - FRQ - Time - Part B
    import static org.junit.Assert.*;

    import org.junit.Test;

    import java.io.*;

    public class RunestoneTests extends CodeTestHelper
    {
        @Test
        public void test1() throws IOException
        {
            Time time1 = new Time(1, 1, 1);
            Time time2 = new Time(2, 2, 2);
            time1.add(time2);

            String expected = "03:03:03";
            String actual = time1.toString();

            String msg = time1.toString() + ".add(" + time2.toString() + ")";

            boolean passed = getResults(expected, actual, msg);
            assertTrue(passed);
        }

        @Test
        public void test2() throws IOException
        {
            Time time1 = new Time(0, 0, 59);
            Time time2 = new Time(0, 0, 1);
            time1.add(time2);

            String expected = "00:01:00";
            String actual = time1.toString();

            boolean passed =
                    getResults(expected, actual, time1.toString() + ".add(" + time2.toString() + ")");
            assertTrue(passed);
        }

        @Test
        public void test3() throws IOException
        {
            Time time1 = new Time(0, 59, 0);
            Time time2 = new Time(0, 0, 1);
            time1.add(time2);

            String expected = "00:59:01";
            String actual = time1.toString();

            boolean passed =
                    getResults(expected, actual, time1.toString() + ".add(" + time2.toString() + ")");
            assertTrue(passed);
        }

        @Test
        public void test4() throws IOException
        {
            Time time1 = new Time(0, 59, 59);
            Time time2 = new Time(0, 0, 1);
            time1.add(time2);

            String expected = "01:00:00";
            String actual = time1.toString();

            boolean passed =
                    getResults(expected, actual, time1.toString() + ".add(" + time2.toString() + ")");
            assertTrue(passed);
        }

        @Test
        public void test5() throws IOException
        {
            Time time1 = new Time(23, 0, 0);
            Time time2 = new Time(1, 0, 0);
            time1.add(time2);

            String expected = "00:00:00";
            String actual = time1.toString();

            boolean passed =
                    getResults(expected, actual, time1.toString() + ".add(" + time2.toString() + ")");
            assertTrue(passed);
        }

        @Test
        public void test6() throws IOException
        {
            Time time1 = new Time(23, 59, 59);
            Time time2 = new Time(23, 59, 59);
            time1.add(time2);

            String expected = "23:59:58";
            String actual = time1.toString();

            boolean passed =
                    getResults(expected, actual, time1.toString() + ".add(" + time2.toString() + ")");
            assertTrue(passed);
        }
    }

