.. qnum::
   :prefix: 3-2-
   :start: 1
   
Declaring Variables in Java
---------------------------

..	index::
	single: bit
	single: binary digit
	single: declare
	pair: variable; declare
  

To create a variable, you must tell Java its type and name.  Creating a variable is also called **declaring a variable**.  When you create a **primitive variable** Java will set aside enough bits in memory for that primitive type and associate that memory location with the name that you used.  

Computers store all values using **bits** (binary digits).  A **bit** can represent two values and we usually say that the value of a bit is either 0 or 1. When you declare a variable, you have to tell Java the type of the variable because Java needs to know how many bits to use and how to represent the value.  The 3 different primitive types
are all represented using **binary numbers** (numbers that use base 2 with digits 0 and 1), but are represented in different ways.  

When you declare a variable, a memory location (sequential number of bits) is set aside for a variable of that type and the name is associated with that location.  An integer gets 32 bits of space, a double gets 64 bits of space and a boolean could be represented by just one bit, but the amount of space isn't specified by the Java standard. 

.. figure:: Figures/typesAndSpace.png
    :width: 500px
    :figclass: align-center
    
    Figure 1: Examples of variables with names and values.  Notice that the different types get a different amount of space.

To **declare** (create) a variable, you will specify the type, leave at least one space, then the name for the variable and end the line with a semicolon (``;``). Java uses the keyword **int** for integer, **double** for a floating point number (a double precision number), and **boolean** for a Boolean value (true or false).  

.. figure:: Figures/typeName.png
    :width: 100px
    :figclass: align-center
    
    Figure 2: How to Declare a Variable
    
Here is an example declaration of a variable called score.

.. code-block:: java

  int score;
  
The value of score can be set later as shown below.  Run the following code to see what is printed.
 
.. activecode:: lcdv1
   :language: java
   
   public class Test1
   {
      public static void main(String[] args)
      {
        int score; 
        score = 0;
        System.out.println(score);
        double price;
        price = 2.55;
        System.out.println(price);
        boolean won;
        won = false;
        System.out.println(won);
      }
   }
   
**Check Your Understanding**
   
.. clickablearea:: var_declare
    :question: Click on all of the variable declarations in the following code.
    :iscode:
    :feedback: Variable declarations start with a type and then a name.  
    
    :click-incorrect:public class Test2:endclick:
    :click-incorrect:{:endclick:
        :click-incorrect:public static void main(String[] args):endclick:
        :click-incorrect:{:endclick:
            :click-correct:int numLives;:endclick:
            :click-incorrect:numLives = 0;:endclick:
            :click-incorrect:System.out.println(numLives);:endclick:
            :click-correct:double health;:endclick:
            :click-incorrect:health = 8.5;:endclick:
            :click-incorrect:System.out.println(health);:endclick:
            :click-correct:boolean powerUp;:endclick:
            :click-incorrect:powerUp = true;:endclick:
            :click-incorrect:System.out.println(powerUp);:endclick:
        :click-incorrect:}:endclick:
    :click-incorrect:}:endclick:
    
.. clickablearea:: var_init
    :question: Click on all of the variable initializations (fist time the variable is set to a value) in the following code.
    :iscode:
    :feedback: Variables are initialized using name = value;  
    
    :click-incorrect:public class Test2:endclick:
    :click-incorrect:{:endclick:
        :click-incorrect:public static void main(String[] args):endclick:
        :click-incorrect:{:endclick:
            :click-incorrect:int numLives;:endclick:
            :click-correct:numLives = 0;:endclick:
            :click-incorrect:System.out.println(numLives);:endclick:
            :click-incorrect:double health;:endclick:
            :click-correct:health = 8.5;:endclick:
            :click-incorrect:System.out.println(health);:endclick:
            :click-incorrect:boolean powerUp;:endclick:
            :click-correct:powerUp = true;:endclick:
            :click-incorrect:System.out.println(powerUp);:endclick:
        :click-incorrect:}:endclick:
    :click-incorrect:}:endclick:

.. note ::

   Think of the semicolon in Java like a period (``.``) in English.  It is how you show the end of a sentence.  You use a semicolon (``;``) to show the end of a Java statement.  You will not be penalized on the exam if you forget the semicolon.  

You can also optionally specify an initial value for the variable by adding an equals sign ``=`` followed by the value. 

.. figure:: Figures/typeNameValue.png
    :width: 150px
    :figclass: align-center
    
    Figure 2: How to Declare and Initialize the Value of a Variable
    
Here is an example that shows declaring a variable and initializing it all in a single statement.  

.. code-block:: java

  int score = 4;
  
Run the following code to see what is printed.

.. activecode:: lcdv2
   :language: java
   
   public class Test2
   {
      public static void main(String[] args)
      {
        int score = 4; 
        System.out.println(score);
        double price = 23.25;
        System.out.println(price);
        boolean won = false;
        System.out.println(won);
      }
   }
   
**Check Your Understanding**

.. clickablearea:: var_declar_and_init
    :question: Click on all of the statements that both declare and initialize a variable in one statement.
    :iscode:
    :feedback: Variables are initialized using name = value;  
    
    :click-incorrect:public class Test2:endclick:
    :click-incorrect:{:endclick:
        :click-incorrect:public static void main(String[] args):endclick:
        :click-incorrect:{:endclick:
            :click-correct:int numLives = 0;:endclick:
            :click-incorrect:System.out.println(numLives);:endclick:
            :click-correct:double health = 8.5;:endclick:
            :click-incorrect:System.out.println(health);:endclick:
            :click-correct:boolean powerUp = true;:endclick:
            :click-incorrect:System.out.println(powerUp);:endclick:
        :click-incorrect:}:endclick:
    :click-incorrect:}:endclick:

.. note ::

   The equal sign here ``=`` doesn't mean the same as it does in a mathematical equation where it implies that the two sides are equal.  Here it means set the value in the memory location (box) associated with the name on the left to a *copy* of the value on the right. The first line above sets the value in the box called score to 4. Also note that the variable has to be on the left side of the ``=`` and the value on the right.  Switching the two is called **assignment dyslexia**.  
   
This is an example of *assignment dyslexia*, when the student has put the value on the left and the declaration on the right side.  Try to fix the following code to compile and run.

.. activecode:: lcdv3
   :language: java
   
   public class Test3
   {
      public static void main(String[] args)
      {
        4 = int score; 
        System.out.println(score);
      }
   }
   
**Check Your Understanding**

.. fillintheblank:: fillDecVar1

   Fill in the following: [blank] age = [blank]; to declare age to be an integer and set its value to 5.

   -    :int: Correct.  You typically use whole numbers for ages after age 1.  
        :.*: Remember that Java uses just the first 3 letters of integer
   -    :5: Correct.  You can initialize to a value.  
        :.*: Use 5 in the second blank 
            
.. fillintheblank:: fillDecVar2

   What type should you use for a shoe size like 8.5?  

   -    :^\s*double$: Correct.  Any variable that needs to values after the decimal point should be declared as a double.
        :.*: What type allows for a decimal value  
            
.. fillintheblank:: fillDecVar3

   What type should you use for a number of tickets? 

   -    :^\s*int$: Correct. You can't buy half a ticket so this will be an integer.
        :.*: Use a type that representes whole numbers like 1, 2, 3, etc
            
   
**Mixed up Code Problems**
   
.. parsonsprob:: declareVars1
   :adaptive:
   :noindent:

   The following method has the code to declare and initialize variables for storing a number of visits, a person's temperature, and if the person has insurance or not.  It also includes extra blocks that are not needed in a correct solution.  Drag the needed blocks from the left area into the correct order (declaring numVisits, temp, and hasInsurance in that order) in the right area.  Click on the "Check Me" button to check your solution.
   -----
   int numVisits = 5;
   =====
   Int numVisits = 5; #paired
   =====
   double temp = 101.2;
   =====
   Double temp = 101.2;  #paired
   =====
   boolean hasInsurance = false;
   =====
   Boolean hasInsurance = false; #paired
   
