What is Java?
===============

..	index::
	single: Java
	single: javac
	single: compile
	single: programming language
	pair: programming; language
	pair: Java; source file
	pair: Java; class file
	
Java is a **programming language**, which means that we can use Java to tell a computer what to do.  Computers don't actually speak Java so we have to 
**compile** (translate) Java source files (they end in .java) into class files (they end in .class).  The source file is something humans can read and edit, and the class file is code that a computer can understand and can run.

In this book the Java code is actually being sent to a server to compile and run (as long as you have an internet connection) and the output will be shown in the browser, so you won't actually create a source file or class file.  

If you have the Java development environment loaded on your computer you can use the Java command ``javac`` to compile your Java source code at a command line (note: this will not work in Chromebooks).  You can use ``java ClassName`` to execute the ``main`` method in a Java class.  In Java all source code must be part of a class (defined inside a class).  

.. figure:: Figures/compile.png
    :width: 300px
    :align: center
    :figclass: align-center

    Figure 1: Compiling Java source (Person.java) into a class file (Person.class) 
    
You can copy the Java source code shown in this book into a file and save it if you want to run it locally on your computer.  Be sure to name the file the same name as the class name with ".java" as the extension.  All code (programs) in Java must be part of a **class** (defined inside a class) in a source file and the name of the class must match the file name. You can also use an integrated development environment (IDE) installed on your local computer (see the last section for ideas).

.. |runbutton| image:: Figures/run-button.png
    :height: 20px
    :align: top
    :alt: run button
    
.. |audiotour| image:: Figures/start-audio-tour.png
    :height: 20px
    :align: top
    :alt: audio tour button
    
.. |checkme| image:: Figures/checkMe.png
    :height: 20px
    :align: top
    :alt: check me button
    
First Example Class
-------------------


..	index::
	single: class
	single: keyword
	pair: class; field
	pair: class; constructor
	pair: class; method
	pair: class; main method
	
To define a class in Java use the **keywords** (words that Java already understands) ``public class`` followed by a *ClassName*.  Then the body of the class is enclosed in a starting ``{`` and ending ``}`` as shown below.

.. code-block:: java 

   public class ClassName
   {
   }
   
.. note::

   In Java every open curly brace ``{`` must have a matched close curly brace ``}``.  These are used to start and end class definitions and method definitions.   
   
The following is an example class in Java.  A class in Java can have **instance variables** (attributes), **constructors** (ways to initialize the instance variables), **methods** (behaviors), and a **main method** for testing the class. It does 
not have to have *any* of these items.  The following would compile, but what do you think would happen if you tried to have a computer execute it?
   
.. code-block:: java 

   public class FirstClass
   {
   }

The class ``FirstClass`` doesn't have anything inside of it, so the computer wouldn't know what to do if we asked it to execute the class.    

When you ask the Java run-time to *run* a class (java ClassName) it will start execution in the ``main`` method.  Click on the |runbutton| button below to have the computer execute the ``main`` method (starts with ``public static void main(String[] args)``) in the following class.  You can also click on the |audiotour| button to listen to a line by line description of the code.  

.. activecode:: lcfc1
   :language: java
   :tour_1: "Line-by-line Tour"; 1: scline1; 2: scline2; 3: scline3; 4: scline4; 5: scline5; 6: scline6; 7: scline7;

   public class SecondClass
   {
      public static void main(String[] args)
      {
         System.out.println("Hi there!");
      }
   }
   
..	index::
	single: String
	single: String literal
   
.. note::

   ``System.out.println`` is just the way that you ask Java to print out the value of something.  In the case above we are just printing the characters between the first ``"`` and the second ``"``.  The ``"Hi there!"`` is called a **string literal**.  A **string literal** can have zero to many characters enclosed in starting and ending double quotes in Java.
   
Try to change the code above to print your name.  Be sure to keep the starting ``"`` and ending ``"``.  Click on the |runbutton| button to run the modified code.

**Mixed up programs**

.. parsonsprob:: thirdClass
   :adaptive:
   :noindent:

   The following has all the correct code to print out "Hi my friend!" when the code is run, but the code is mixed up.  Drag the blocks from left to right and put them in the correct order.  Click on the "Check Me" button to check your solution.
   -----
   public class ThirdClass
   {
   =====
      public static void main(String[] args)
      {
      =====
         System.out.println("Hi my friend!");
         =====
      }
      =====
   }
   
.. parsonsprob:: fourthClass
   :adaptive:
   :noindent:

   The following has all the correct code to print out "Hi there!" when the code is run, but the code is mixed up and contains some extra blocks with errors.  Drag the needed blocks from left to right and put them in the correct order.  Click on the "Check Me" button to check your solution.
   -----
   public class FourthClass
   {
   =====
   public Class FourthClass
   {                         #paired
   =====
      public static void main(String[] args)
      {
      =====
      public static void main()
      {                         #paired
      =====
         System.out.println("Hi there!");
         =====
         System.out.println("Hi there!") #paired
         =====
      }
      =====
   }
   
.. This was in compileTimeErrors.rst

Compiler Errors
---------------

Remember that the Java source file has to be translated into a class file before it can be run.  The compiler tries to make sense of your code, but if your code is incorrect, which means it has **syntax errors**, you will see error messages displayed below the code.  A **syntax error** is an error in the specification of the program.  An example of a syntax error is if the code has a open curly brace ``{``, but no close curly brace ``}``.  

The error messages will tell the line number that the compiler found the error and the type of error.  The error messages are not always easy to understand and sometimes the actual error is before the line that the complier says is the problem.  This section has code that causes complier errors to show you the types of error messages you might see and help you learn how to fix the errors. 


**Compile Time Error 1**

Click on the |runbutton| button below to try and run the following code.  Look for an error message after the code.  This is called a **compile time error** because it is an error detected by the compiler.  

What is wrong?  Can you fix it?  The error message will tell you the line number that it thinks is causing the error (``SecondClass.java:5: error: unclosed string literal``).  Check line 5 to make sure that everything looks correct.  One good thing to check is that all ``{`` have a matching ``}`` and all ``(`` have a matching ``)`` and all starting ``"`` have a ending ``"`` as well.

.. activecode:: sc2error1
   :language: java

   public class SecondClass
   {
      public static void main(String[] args)
      {
         System.out.println("Hi there!);
      }
   }
   
Notice that the compiler claims that there are 3 errors, but all the errors are caused by the same problem (the missing end ``"``).  Fix the code and run it again.

**Compile Time Error 2**


Click on the |runbutton| button below to try and run the following code.  Look for an error message after the code. What is wrong this time?  Can you fix it?  One good thing to check is that all ``{`` have a matching ``}`` and all ``(`` have a matching ``)`` and all starting ``"`` have a ending ``"`` as well.

.. activecode:: sc2error2
   :language: java

   public class SecondClass
   {
      public static void main(String[] args)
      {
         System.out.println("Hi there!";
      }
   }
   
**Compile Time Error 3**

Click on the |runbutton| button below to try and run the following code.  Look for an error message after the code. What is wrong this time?  Can you fix it?  One good thing to check is that all ``{`` have a matching ``}`` and all ``(`` have a matching ``)`` and all starting ``"`` have a ending ``"`` as well.

.. activecode:: sc2error3
   :language: java

   public class SecondClass
   {
      public static void main(String[] args)
      {
         System.out.println("Hi there!")
      }
   }


