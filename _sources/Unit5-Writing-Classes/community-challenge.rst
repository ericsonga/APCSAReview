.. include:: ../common.rst

|Time90|

|Groupwork| Design a Class for your Community Project
----------------------------------------------------------

.. |worksheet| raw:: html

   <a href="https://docs.google.com/document/d/11QMyHAZYhPwNLInhURqkTffeY9re05yH97xAsiSJhLg/edit?usp=sharing" target="_blank">worksheet</a>

.. |tutorial on class diagrams| raw:: html

   <a href="https://medium.com/@smagid_allThings/uml-class-diagrams-tutorial-step-by-step-520fd83b300b" target="_blank">tutorial on class diagrams</a>

.. |Creately.com| raw:: html

   <a href="https://creately.com" target="_blank">Creately.com</a>

.. |app diagrams| raw:: html

   <a href="https://app.diagrams.net/" target="_blank">app.diagrams.net</a>

In lessons 5.1, 5.2, and 5.6, you were asked to design a class of your own choice
that is relevant to your community. If you would like to do this activity as 1 lab project rather than a piece at a time at the end of each lesson, you can create your complete class here. Or you may choose to create a different class of your own here.
You can work in pairs on this project.

1. Make your own copy of this |worksheet| from the File menu. For question 1, brainstorm and ask people in your community what would be important or useful for them to track in a community organization or activity or to help your community. For example, you could create a Java class to keep track of community events, club activities, athletic games or statistics, community leaders, performers or performances, health tracking, or another subject of your choice.

2. Come up with your class name for your community data-tracking class (it should be a category of people or things, not a specific person or thing). Come up with at least 3 instance variables that are attributes of things in that class. Think about what data type each variable should be. You can use the |worksheet| to design your class. Optionally, you may want to draw a UML class diagram for your class on paper or using |app diagrams| or |Creately.com| (see |tutorial on class diagrams|).


Code your Class
=================

1. Create your class and its instance variables below.

2. Add a constructor with 3 parameters to set all of the instance variables to the given parameters.

3. Write a print() method that uses System.out.println to print out all the instance variables.

4. Create accessor (get) methods for each of the instance variables.

5. Create mutator (set) methods for each of the instance variables.

6. Create a ``toString`` method that returns all the information in the instance variables.

7. Write an additional method for your class that takes a parameter. For example, there could be a print method with arguments that indicate how you want to print out the information, e.g. print(format) could print the data according to an argument that is "plain" or "table" where the data is printed in a table drawn with dashes and lines (|).

8. Write a main method that constructs at least 2 objects of your class using the constructor and then calls all of the methods that you created above to test them.


.. activecode:: community-challenge-complete-project
  :language: java
  :autograde: unittest

  Design your class for your community below.
  ~~~~
  public class          // Add your class name here!
  {
      // 1. write 3 instance variables for class: private type variableName;

      // 2. Add a constructor with 3 parameters to set all of the instance variables to the given parameters.

      // 3. Write a print() method that uses System.out.println to print out all the instance variables.

      // 4. Create accessor (get) methods for each of the instance variables.

      // 5. Create mutator (set) methods for each of the instance variables.

      // 6. Create a toString() method that returns all the information in the instance variables.

      // 7. Write an additional method for your class that takes a parameter.
      // For example, there could be a print method with arguments that indicate how you want to print out
      // the information, e.g. print(format) could print the data according to an argument that is "plain"
      // or "table" where the data is printed in a table drawn with dashes and lines (|).

      // 8. Write a main method that constructs at least 2 objects of your class
      // using the constructor and then calls all of the methods that you created above to test them.
      public static void main(String[] args)
      {
         // Construct 2 objects of your class using the constructor with different values


         // call all of the objects methods to test them

      }
  }
  ====
  import static org.junit.Assert.*;

  import org.junit.*;

  import java.io.*;

  public class RunestoneTests extends CodeTestHelper
  {
      @Test
      public void testPrivateVariables()
      {
          String expect = "3 Private";
          String output = testPrivateInstanceVariables();
          boolean passed = false;
          if (Integer.parseInt(expect.substring(0, 1)) <= Integer.parseInt(output.substring(0, 1)))
              passed = true;
          passed = getResults(expect, output, "Checking private instance variable(s)", passed);
          assertTrue(passed);
      }

      /* No longer required
      @Test
      public void testDefaultConstructor()
      {
          String output = checkDefaultConstructor();
          String expect = "pass";

          boolean passed = getResults(expect, output, "Checking default constructor");
          assertTrue(passed);
      } */

      @Test
      public void testConstructor3()
      {
          String output = checkConstructor(3);
          String expect = "pass";

          boolean passed = getResults(expect, output, "Checking constructor with 3 parameters");
          assertTrue(passed);
      }

      @Test
      public void testPrint()
      {
          String output = getMethodOutput("print");
          String expect = "More than 15 characters";
          String actual = " than 15 characters";

          if (output.length() < 15)
          {
              actual = "Less" + actual;
          }
          else
          {
              actual = "More" + actual;
          }
          boolean passed = getResults(expect, actual, "Checking print method");
          assertTrue(passed);
      }

      @Test
      public void testMain() throws IOException
      {
          String output = getMethodOutput("main"); // .split("\n");
          String expect = "3+ line(s) of text";
          String actual = " line(s) of text";
          int len = output.split("\n").length;

          if (output.length() > 0)
          {
              actual = len + actual;
          }
          else
          {
              actual = output.length() + actual;
          }
          boolean passed = len >= 3;

          getResults(expect, actual, "Checking output", passed);
          assertTrue(passed);
      }

      @Test
      public void test1()
      {
          String code = getCode();
          String target = "public * get*()";

          int num = countOccurencesRegex(code, target);

          boolean passed = num >= 3;

          getResults("3", "" + num, "Checking accessor (get) methods for each variable", passed);
          assertTrue(passed);
      }

      @Test
      public void test2()
      {
          String code = getCode();
          String target = "public void set*(*)";

          int num = countOccurencesRegex(code, target);

          boolean passed = num >= 3;

          getResults("3", "" + num, "Checking mutator (set) methods for each variable", passed);
          assertTrue(passed);
      }

      @Test
      public void test3()
      {
          String target = "public String toString()";
          boolean passed = checkCodeContains("toString() method", target);
          assertTrue(passed);
      }
  }

You will continue this project in Unit 6 in lessons 6.1-6.3 to create an array of objects using your class.


Optional Swing GUI
=====================

.. |Java Swing Example| raw:: html

   <a href="https://firewalledreplit.com/@BerylHoffman/Java-Swing-Input-Form" target="_blank" style="text-decoration:underline">Java Swing Example</a>

An optional additional project is to build a GUI (graphical user interface) for your class (GUIs are not on the AP exam).
Here's a |Java Swing Example| on repl and below that sets up a JFrame with JTextfields, JLabels, and a JButton.
It calls a special method called addActionListener where you can put the code to be executed
when you click on the button. This program prints out the entered data into a file, although more advanced systems would use a database.
You can fork this project in replit or copy the code to your local computer to design
an input form for your class. You can uncomment the code in the actionlistener that prints the entered data into a file.
To learn more about Java Swing, click on the different Swing components in the left navigation column of https://www.javatpoint.com/java-swing.

.. raw:: html

    <iframe height="800px" width="100%" style="max-width:90%; margin-left:5%" src="https://firewalledreplit.com/@BerylHoffman/Java-Swing-Input-Form?lite=true#Main.java" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
