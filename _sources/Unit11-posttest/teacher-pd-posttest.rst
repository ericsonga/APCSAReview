.. qnum::
   :prefix: 1-
   :start: 1




Teacher PD Post Test for Units 1-6
------------------------------------

Please complete the following post-test for Units 1-6.


.. timed:: teacherPD-posttest
     :nofeedback:

     .. mchoice:: PDposttest1
          :random:

          Unit 1 Primitive Types Skills and Learning Objectives:

          - Skill 5.B: Explain why a code segment will not compile or work as intended.

          - MOD-1.A: Call System class methods to generate output to the console.

          Consider the following code segment.

          .. code-block:: java
               :linenos:

               System.out.print(Take all the courses in your curriculum.);
               System.out.println(Ask questions.);
               System.out.println(--Katherine Johnson);

          The code segment is intended to produce the following output but does not work as intended.

          .. code-block:: java

               Take all the courses in your curriculum. Ask questions.
               --Katherine Johnson

          Which changes should be made so that the code segment produces the intended output?

          .. code-block:: java

            I.   In line 1, print should be changed to println.
            II.  In lines 1, 2, and 3, print should be capitalized.
            III. In lines 1, 2, and 3, the text inside the parentheses should be in quotation marks.

          - I only

            - print is correct since a new line is not printed after the first line of output.

          - II only

            - Only class names like System are capitalized.

          - III only

            + Correct.

          - I and II

            - I and II are not correct.

          - I and III

            - print is correct since a new line is not printed after the first line of output.



     .. mchoice:: PDposttest2
          :random:

          Unit 1 Primitive Types (Expressions) Skills and Learning Objectives:

          - VAR-1.C: Declare variables of the correct types to represent primitive data.

          - CON-1: The way variables and operators are sequenced and combined in an expression determines the computed result.

          - Skill 2.B: Determine the result or output based on statement execution order in a code segment without method calls.

          Consider the following code segment:

          .. code-block:: java

               int x = 16;
               double y = 8.0;
               int z = 2;
               x = x / 5;
               y += x;
               y = y * z;

          What is the value in variable y when the code segment is executed?

          - 2

            - Trace through the code keeping track of the variable values.

          - 8

            - Trace through the code keeping track of the variable values.

          - 11

            - Trace through the code keeping track of the variable values.

          - 22.0

            + Correct. Integer division is used.

          - 22.4

            - Integer division is used since x is an int.



     .. mchoice:: PDposttest3
        :random:

        Unit 2 Using Objects (Constructors) Skills and Learning Objectives:

        - Skill 3.A: Write program code to create objects of a class and call their methods.

        - VAR-1.D: Define variables of the correct types to represent reference data.

        - MOD-1.D: Create objects by calling constructors with or without parameters.

        Consider the following code segment.

        .. code-block:: java

                 public class Party
                 {
                     private int numInvited;
                     private boolean partyCancelled;

                     public Party()
                     {
                         numInvited = 1;
                         partyCancelled = false;
                     }

                     public Party(int invites)
                     {
                         numInvited = invites;
                         partyCancelled = false;
                     }
                 }

        Which of the following code segments, when placed in a method in a class other than the Party class, correctly creates a new object of the Party class with 20 people invited?

        .. code-block:: java

           I.   Party myParty.numInvited = 20;
           II.  Party ourParty = new Party(20);
           III. Party otherParty = new Party();
                otherParty.numInvited = 20;


        - I only

          - Private instance variables like numInvited are not accessible outside of the class.

        - II only

          + Correct. The constructor initializes the private instance variable.

        - III only

          - Private instance variables like numInvited are not accessible outside of the class.

        - II and III

          - Private instance variables like numInvited are not accessible outside of the class.

        - I, II, and III

          - Private instance variables like numInvited are not accessible outside of the class.


     .. mchoice:: PDposttest4
        :random:

        Unit 2 Using Objects (Methods) Skills and Learning Objectives:

        - Skill 3.A: Write program code to create objects of a class and call their methods.
        - MOD-1.B: Explain the relationship between a class and an object.

        Consider the following class.

        .. code-block:: java

                 public class Liquid
                 {
                     private double freezingPoint;
                     private double currentTemp;

                     public Liquid()
                     {
                         freezingPoint = 0;
                         currentTemp = 0;
                     }

                     public void lowerTemp(double degrees)
                     {
                         currentTemp -= degrees;
                     }

                     public void raiseTemp(double degrees)
                     {
                         currentTemp += degrees;
                     }

                     void freeze()
                     {
                         currentTemp = freezingPoint;
                     }
                 }

        Assume that the following Liquid object has been declared.

        .. code-block:: java

           Liquid liquid = new Liquid();

        Which of the following statements is valid?

        - Liquid.freezingPoint;

          - Private non-static instance variables like freezingPoint are not accessible outside of the class.

        - liquid.currentTemp();

          - currentTemp is not a method.

        - liquid.lowerTemp();

          - The lowerTemp method requires an argument.

        - liquid.raiseTemp(10);

          + Correct!

        - liquid.freeze(10)

          - The freeze method does not have a parameter.


     .. mchoice:: PDposttest5
          :random:

          Unit 4 If Statements and Boolean Operators Skills and Learning Objectives:

          - CON-1.E: Evaluate Boolean expressions that use relational operators in program code.

          - CON-1.F: Evaluate compound Boolean expressions in program code.

          - Skill 2.B  Determine the result or output based on statement execution order in a code segment without method calls.

          Consider the following code segment. Assume boolean variables p and q have been initialized.

          .. code-block:: java

               if (!p || q)
               {
                 System.out.print("winner");
               }

          For what values of p and q will "winner" be printed?

          - "winner" will be printed when p is false, regardless of the value of q.

            + The boolean expression is not p or q.

          - "winner" will be printed when q is false, regardless of the value of p.

            - p has to be false or q has to be true.

          - "winner" will be printed only when p is false and q is true.

            - || means or, not and.

          - "winner" will always be printed.

            - p has to be false or q has to be true.

          - "winner" will never be printed.

            - It will be printed if p is false or q is true.


     .. mchoice:: PDposttest6
          :random:

          Unit 4 If Statements Skills and Learning Objectives:

          - CON-2.A: Represent branching logical processes by using  conditional statements.
          - CON-2.B: Represent branching logical processes by using nested conditional statements.
          - Skill 3.C  Write program code to satisfy method specifications using expressions, conditional statements, and iterative statements.

          Consider the following code segment.

          .. code-block:: java

               int a = 100;
               int b = 90;
               if (a >= 100)
               {
                  if (b > 100)
                  {
                     System.out.print("go ");
                  }
                  else if (b > 90)
                  {
                    System.out.print("it ");
                  }
                  else
                  {
                     System.out.print("up ");
                  }
               }
               System.out.print("on ");

          What is printed when the code segment above is executed?

          - go on

            - b is not greater than 100.

          - it up on

            - b is not greater than 90.

          - it on

            - b is not greater than 90.

          - up on

            + Correct.

          - on

            - The first if statement is true since a is = 100.


     .. mchoice:: PDposttest7
          :random:

          Unit 4 Loops Skills and Learning Objectives:

          - CON-2.E Represent iterative processes using a for loop.

          - Skill 3.C  Write program code to satisfy method specifications using expressions, conditional statements, and iterative statements.

          Complete the loop below by filling in the missing code. The loop should calculate the number of leap years between the variables year1 and year2, inclusive, using a helper method isLeapYear(year) which returns true if year is a leap year and false otherwise.

          .. code-block:: java

                int year1 = 2000;
                int year2 = 2020;
                int count = 0;

                /* Missing Code */
                {
                      if (isLeapYear(y))
                          count++;
                }


          - for (int year1 = 2000; int year2 = 2020; count++)

            - The for-loop should initialize, test, and increment the loop variable y.

          - for (int y = year2 - year1; y < year2; y++)

            - y should start counting from year1.

          - for (int y = year1; y <= year2; y++)

            + Correct. The for loops counts from year1 to year2.

          - for (int year1 = 2000; year1 < year2; year1++)

            - The for-loop should initialize, test, and increment the loop variable y.

          - for (int year1; year2; count++)

            - The for-loop should initialize, test, and increment the loop variable y.


     .. mchoice:: PDposttest8
          :random:

          Unit 4 Loops Skills and Learning Objectives:

          - CON-2.E Represent iterative processes using a for loop.
          - Skill 3.C  Write program code to satisfy method specifications using expressions, conditional statements, and iterative statements.
          - CON-2.F.1 There are standard algorithms that utilize String traversals.

          Consider the following method.

          .. code-block:: java

               public static String changeStr(String str)
               {
                    String result = "";
                    for (int i = 1; i < str.length() - 1; i += 2)
                    {
                         result += str.substring(i, i + 1);
                    }
                    return result;
               }

          What value is returned as a result of the method call **changeStr("ABCDE")**?

          - "ABCDE"

            - The for-loop increments the string index i by 2's, visiting every other character.

          - "BCDE"

            - The for-loop increments the string index i by 2's, visiting every other character.

          - "AC"

            - The character A is at index 0, but the loop starts at index 1.

          - "BD"

            + Correct. The for-loop increments the string index i by 2's, visiting every other character, starting at index 1 (the second character).

          - "ACE"

            - The character A is at index 0, but the loop starts at index 1.


     .. mchoice:: PDposttest9
          :random:

          Unit 5 Writing Classes Skills and Learning Objectives:

          - Skill 3B: Write program code to define a new type by creating a class.
          - MOD-2: Programmers use code to represent a physical object or nonphysical concept, real or imagined, by defining a class based on the attributes and/or behaviors of the object or concept.
          - MOD-2.A: Designate access and visibility constraints to classes, data, constructors, and methods.
          - MOD-2.B: Define instance variables for the attributes to be initialized through the constructors of a class.

          Consider the following class Cat:

          .. code-block:: java

               public class Cat
               {
                   /* missing code */
               }

          Which of the following replacements for the missing code is the most appropriate implementation of a class Cat which contains attributes for the cat’s name and age and a constructor?

          - .. code-block:: java

               public String name;
               public int age;
               public Cat(String name, int age)
               {
                 name = name;
                 age = age;
               }

            - The parameters of the constructor cannot be the same variables as the instance variables, and the instance variables should be private.

          - .. code-block:: java

               private String name;
               private int age;
               public Cat(String n, int a)
               {
                 name = n;
                 age = a;
               }

            + Correct. The constructor initializes the instance variables to the parameter variables.

          - .. code-block:: java

               public String name;
               public int age;
               public Cat(String n, int a)
               {
                 name = n;
                 age = a;
               }

            - The instance variables should be private.

          - .. code-block:: java

               private String name;
               private int age;
               public Cat(String n, int a)
               {
                 n = name;
                 a = age;
               }

            - name should be set to n, not the n to name.

          - .. code-block:: java

               public String name;
               public int age;
               public Cat(String n, int a)
               {
                 n = name;
                 a = age;
               }

            - name should be set to n, not the n to name, and the instance variables should be private.


     .. mchoice:: PDposttest10
          :random:

          Unit 5 Writing Classes Skills and Learning Objectives:

          - Skill 3B: Write program code to define a new type by creating a class.
          - MOD-2.E: Define behaviors of an object through methods with or without parameters written in a class.

          Which of the following is the most appropriate header for a method that would set the value of the private instance variable y?

          - private int setY(int value)

            - The set method should be public.

          - private void setY()

            - The set method should be public.

          - public int setY()

            - The set method needs a parameter to set y to.

          - public void setY()

            - The set method needs a parameter to set y to.

          - public void setY(int value)

            + Correct. The public set method sets the instance variable y to the parameter value.




     .. mchoice:: PDposttest11
          :random:

          Unit 5 Writing Classes Skills and Learning Objectives:

          - Skill 3B: Write program code to define a new type by creating a class.
          - Skill 4.B  Identify errors in program code.
          - MOD-2.D: Define behaviors of an object through non-void methods without parameters written in a class.

          Consider the following class definition. The class does not compile.

          .. code-block:: java

               public class Student
               {
                   private int id;

                   public void getId()
                   {
                       return id;
                   }
               }

          The accessor method getId is intended to return the id of a Student object. Which of the following best explains why the class does not compile?

          - The getId method should be declared as private.

            - It should be public.

          - The getId method should have a parameter.

            - It does not need a parameter.

          - The getId method should not return a value.

            - It needs to return id.

          - The getId method should not have a return type.

            - It needs a return type for the value it returns.

          - The getId method should have int as its return type.

            + Correct.



     .. mchoice:: PDposttest12
          :random:

          Unit 6 Arrays Skills and Learning Objectives:

          - Skill 3.D: Write program code to create, traverse, and manipulate elements in 1D array or ArrayList objects.
          - VAR-2.B Traverse the elements in a 1D array.
          - Skill 4.B  Identify errors in program code

          Consider an integer array which has been declared and initialized with one or more integer values such as:

          .. code-block:: java

               int[] array =  { 10, 20, 30 };

          Which of the following code segments doubles all the values in the array?

          .. code-block:: java

               I. int i = 0;
                  while (i < array.length)
                  {
                      array[i] *= 2;
                  }
               II. for (int i = 0; i < array.length; i++)
                   {
                       array[i] *= 2;
                   }
               III. for (int i = 1; i <= array.length; i++)
                    {
                         array[i] *= 2;
                    }

          - I only

            - This is an infinite loop. i needs to be incremented.

          - II only

            + Correct.

          - III only

            - This loop will give an index out of bounds error. Arrays are indexed starting at 0 and up until array.length.

          - I and II only

            - I is an infinite loop. i needs to be incremented.

          - I, II, and III

            - I is an infinite loop. III will have an array index out of bounds error.


     .. mchoice:: PDposttest13
          :random:

          Unit 6 Arrays Skills and Learning Objectives:

          - Skill 3.D: Write program code to create, traverse, and manipulate elements in 1D array or ArrayList objects.
          - VAR-2.B Traverse the elements in a 1D array.
          - CON-2.I.1 There are standard algorithms that utilize array traversals.

          Consider the following method. Which of the following statements best describes when it returns true?

          .. code-block:: java

               public boolean mystery(int array[], int value)
               {
                    boolean temp = false;
                    for (int i = 0; i < array.length; i++)
                    {
                       temp = (array[i] == value);
                    }
                    return temp;
               }

          - Whenever the first element in array is equal to value

            - temp will change its value as each element in the array is visited.

          - Whenever array contains any element which equals value

            - temp will change its value as each element in the array is visited, so it may change after finding an element which equals value.

          - Whenever the last element in array is equal to value

            + Correct. temp will change its value as each element in the array is visited.

          - Whenever more than 1 element in array is equal to value

            - If the 1 element is the last element, it will still return true.

          - Whenever exactly 1 element in array is equal to value

            - Many elements can be equal to value, as long as the last one is equal.



