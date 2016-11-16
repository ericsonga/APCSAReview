.. qnum::
  :prefix: 9-12-
  :start: 1

================================
Free Response - Seating Chart A
================================

..    index::
      single: seatingchart
    single: free response
    
The following is part a of a free response question from 2014. It was question 3 on the exam. You can see all the free response questions from past exams at https://apstudent.collegeboard.org/apcourse/ap-computer-science-a/exam-practice.

**Question 3.** In this question you will write one constructor and one method for the SeatingChart class using 2d Arrays to manipulate a classroom seating chart.

Incomplete implementations of the Student class and the SeatingChart class are shown below.

.. code-block:: java

    public class Student
    {
      /** Returns the name of this Student. 
       */ public String getName()
       { /* implementation not shown */ }
       
      /** Returns the number of times this Student has missed class. 
       */ public int getAbsenceCount()
       { /* implementation not shown */ }
       
       // There may be instance variables, constructors, and methods that are not shown. 
    }

**Part a.** Write the constructor for the SeatingChart class. The constructor initializes the seats instance variable to a two-dimensional array with the given number of rows and columns. 
The students in studentList are copied into the seating chart in the order in which they appear in studentList.
The students are assigned to consecutive locations in the array seats, starting at seats[0][0] and filling the array column by column. 
Empty seats in the seating chart are represented by null.

For example, suppose a variable List<Student> roster contains references to Student objects in the following order.

.. figure:: Figures/seatingChartA.png
    :width: 1308px
    :align: center
    :figclass: align-center

A SeatingChart object created with the call new SeatingChart(roster, 3, 4) would have seats initialized with the following values.

.. figure:: Figures/seatingChartB.png
    :width: 784px
    :align: center
    :figclass: align-center
    
Complete the SeatingChart constructor below.

.. activecode:: SeatingChartStudent
   :language: java
     
     public class Student
     {
        private String name;
        private int absenceCount;
  
        public Student (String nm, int count)
        {
           name = nm;
           absenceCount = count;
        }
  
       /** Returns the name of this Student. */
        public String getName()
        { return name; }

       /** Returns the number of times this Student has missed class. */
        public int getAbsenceCount()
        { return absenceCount; }
  
        public String toString()
        { return name + " " + absenceCount; }
     }   


            
    import java.util.Arrays;
    import java.util.List;

    public class SeatingChart
    {
      /** seats[r][c] represents the Student in row r and column c in the classroom. */
       private Student[][] seats;

      /** Creates a seating chart with the given number of rows and columns from the students in
       *  studentList. Empty seats in the seating chart are represented by null.
       *  @param rows the number of rows of seats in the classroom
       *  @param cols the number of columns of seats in the classroom
       *  Precondition: rows > 0; cols > 0;
       *                rows * cols >= studentList.size()
       *  Postcondition:
       *     - Students appear in the seating chart in the same order as they appear
       *       in studentList, starting at seats[0][0].
       *     - seats is filled column by column from studentList, followed by any
       *       empty seats (represented by null).
       *     - studentList is unchanged.
       */
       public SeatingChart(List<Student> studentList, int rows, int cols)
       {
          //TO BE COMPLETED IN THIS PART   
       }

      /********************** Test *********************/

       public String toString()
       {
          String s = "";
      
          for (int r =  0; r < seats.length; r++)
          {
             for (int c =  0; c < seats[0].length; c++)
             {
                s += seats[r][c] + "   ";
             }
             s += "\n";
          }
          return s;
       }
  
       public static void main(String[] args)
       {
          Student[] students = {
          new Student("Karen", 3),
          new Student("Liz", 1),
          new Student("Paul", 4),
          new Student("Lester", 1),
          new Student("Henry", 5),
          new Student("Renee", 9),
          new Student("Glen", 2),
      	  new Student("Fran", 6),
          new Student("David", 1),
          new Student("Danny", 3)};

          List<Student> roster = Arrays.asList(students);      
          SeatingChart chart = new SeatingChart(roster, 3, 4);
          System.out.println(chart + "\n\n");
       }     
    }        

One way to solve Part a
-----------------------
Set the seats 2d Array to be the size of the rows and cols given. Create new row and col variables and set them both to 0.
Loop through the studentList and set every index to a Student from the studentList. Continue to increment the row variable until your row variable equals the row parameter.
Increment the col variable, set the row variable to 0 and continue until the studentList reaches the end.

.. parsonsprob:: seata

   The following constructor has the correct code to solve this problem. Drag the needed blocks from the left into the correct order on the right with the correct indention. You will be told if any of the blocks are in the wrong order or not indented correctly.
   -----
   public SeatingChart(List<Student> studentList, int rows, int cols)
   {
   =====
      seats = new Student[rows][cols];
      int r = 0, c = 0;
   =====
      for (Student s : studentList)
      {
   =====
         seats[r][c] = s;
   =====
         r++;
   =====
         if (r == rows)
         {
   =====
            r = 0;
            c++;
   =====
         } //end of if
   =====
      } //end of for  
   =====
   } //end of contructor   