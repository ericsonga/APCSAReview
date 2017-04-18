.. qnum::
   :prefix: 2-4-
   :start: 1
   
.. |runbutton| image:: Figures/run-button.png
    :height: 20px
    :align: top
    :alt: run button
    
Compiler Errors
----------------

Remember that the Java source file has to be translated into a class file before it can be run.  The compiler tries to make sense of your code, but if your code is incorrect, which means it has **syntax errors**, you will see error messages displayed below the code.  A **syntax error** is an error in the specification of the program.  An example of a syntax error is if the code has a open curly brace ``{``, but no close curly brace ``}``.  

The error messages will tell the line number that the compiler found the error and the type of error.  The error messages are not always easy to understand and sometimes the actual error is before the line that the complier says is the problem.  This section has code that causes complier errors to show you the types of error messages you might see and help you learn how to fix the errors. 


Compile Time Error 1
====================

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

Compile Time Error 2
====================

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
   
Compile Time Error 3
====================

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

The class ``SecondClass`` isn't very object-oriented.  The only thing in it is the ``main`` method which is a **class method** (one that works on the class), not an **object method** (one that works on the current object). 

In the next section you will see an example of an object-oriented class. 

