.. qnum::
   :prefix: 5-16-
   :start: 1

Midterm Problems
----------------------------------------

.. mchoice:: mid_1_1
   :answer_a: I
   :answer_b: II
   :answer_c: III
   :answer_d: IV
   :answer_e: V
   :correct: a
   :feedback_a: Correct! This will loop with i changing from 1 to 5 and then for each i, j will loop from i to 0 printing the value of i and then a new line.
   :feedback_b: This will loop i from 0 to 4 and j from 0 to i, neglecting to ouput 5.
   :feedback_c: This will loop with i changing from 1 to 4 and j from i to 0.
   :feedback_d: This will loop with i changing from 1 to 5 and j from 0 to i but it will print each value on a different line.
   :feedback_e: This will loop with i changing from 0 to 4 and j from 0 to i.

   Which of the following code segments will produce the displayed output?

   .. code-block:: java

      //Loop I
      for (int i = 1; i <= 5; i++) {
         for (int j = i; j > 0; j--) {
            System.out.print(i);
         }
      System.out.println();
      }

      //Loop II
      for (int i = 0; i < 5; i++) {
         for (int j = 0; j < i; j++) {
            System.out.print(i);
         }
      System.out.println();
      }

      //Loop III
      for (int i = 1; i < 5; i++) {
         for (int j = i; j > 0; j--) {
            System.out.print(i);
         }
      System.out.println();
      }

      //Loop IV
      for (int i = 1; i < 6; i++) {
         for (int j = 0; j < i; j++) {
            System.out.println(i);
         }
      }

      //Loop V
      for (int i = 0; i < 5; i++) {
         for (int j = 0; j < i; j++) {
            System.out.print(i+1);
         }
      System.out.println();
      }

      /*
      Output:
      1
      22
      333
      4444
      55555
      */

.. mchoice:: mid_1_2
   :answer_a: A
   :answer_b: B
   :answer_c: C
   :answer_d: D
   :answer_e: E
   :correct: c
   :feedback_a: Step through this code at https://www.shorturl.at/kmFKU
   :feedback_b: Step through this code at https://www.shorturl.at/kmFKU
   :feedback_c: Correct!
   :feedback_d: Step through this code at https://www.shorturl.at/kmFKU
   :feedback_e: Step through this code at https://www.shorturl.at/kmFKU
   
   Consider the following method.  What is the output from ``conditionTest(3,-2);``?

   .. code-block:: java

      public static void conditionTest(int num1, int num2)
      {
         if ((num1 > 0) && (num2 > 0)) {
            if (num1 > num2)
               System.out.println("A");
            else
               System.out.println("B");
         }
         else if ((num2 < 0) || (num1 < 0)) {
            System.out.println("C");
         }
         else if (num2 < 0) {
            System.out.println("D");
         }
         else {
            System.out.println("E");
         }
      }

.. mchoice:: mid_1_3
   :answer_a: I only
   :answer_b: II only
   :answer_c: II and III only
   :answer_d: I and II only
   :answer_e: I, II, and III
   :correct: d
   :feedback_a: Loop I will produce this output, but it is not the only loop that will output these values.
   :feedback_b: Loop II will produce this output, but it is not the only loop that will output these values.
   :feedback_c: Loop II is correct, but loop III will produce the reverse output, 43210.
   :feedback_d: Correct! Both of these loops will produce the correct output.
   :feedback_e: While loop I and II will produce the correct output, loop III will actually produce the reverse of the correct output.

   Which of these loops will output ``01234``?

   .. code-block:: java

      int max = 5;

      //Loop I
      for (int i = 0; i < max; i++){
         System.out.print(i);
      }

      //Loop II
      int j = 0;
      while (j < max){
         System.out.print(j);
         j++;
      }
      //Loop III
      int k = 0;
      for (int i = max; i > 0; i--){
         System.out.print(i);
      }

.. mchoice:: mid_1_4
   :answer_a: 25
   :answer_b: 15
   :answer_c: 125
   :answer_d: 64
   :answer_e: 625
   :correct: c
   :feedback_a: Step through this code at https://www.shorturl.at/ctBT7
   :feedback_b: Step through this code at https://www.shorturl.at/ctBT7
   :feedback_c: Correct! 
   :feedback_d: Step through this code at https://www.shorturl.at/ctBT7
   :feedback_e: Step through this code at https://www.shorturl.at/ctBT7

   Consider the following block of code. What value is returned from ``solution(5)``?

   .. code-block:: java

      public int solution(int limit){
         int s = 0;
         for (int outside = 1; outside <= limit; outside++){
            for (int middle = 1; middle <= limit; middle++){
               for (int inside = 1; inside <= limit; inside++){
                  s++;
               }
            }
         }
        return s;
      }

.. mchoice:: mid_1_5
   :answer_a: (x < 10) && (x > 5)
   :answer_b: (x > 10) && (x <=5)
   :answer_c: (x <= 10) && (x > 5)
   :answer_d: (x <= 10) || (x > 5)
   :answer_e: (x > 10) || (x <= 5)
   :correct: d
   :feedback_a: Use A and B to represent the expressions -- A becomes (x > 10), B becomes (x <= 5). ! (A && B) is NOT equivalent to (!A && !B). 
   :feedback_b: Use A and B to represent the expressions -- A becomes (x > 10), B becomes (x <= 5). ! (A && B) is NOT equivalent to (A && B).
   :feedback_c: Use A and B to represent the expressions -- A becomes (x > 10), B becomes (x <= 5). ! (A && B) is NOT equivalent to (!A && !B). The AND should be changed to an OR.
   :feedback_d: Correct! 
   :feedback_e: Use A and B to represent the expressions -- A becomes (x > 10), B becomes (x <= 5). ! (A && B) is NOT equivalent to (A || B). Both A and B should also be negated.

   Which of the following is equivalent to ``! ( (x > 10) && (x <= 5) )``?

.. mchoice:: mid_1_6
   :answer_a: s="rainbow"; b=8;
   :answer_b: s="rain";  b=8;
   :answer_c: s="rainbow"; b=4;
   :answer_d: s="rain"; b=4;
   :answer_e: s="bow";  b=4;
   :correct: d
   :feedback_a: Strings are immutable so changing str doesn't affect the string that s refers to. Step through the code at https://www.shorturl.at/jkBU2
   :feedback_b: Nothing done in the method test affects the value of b. Step through the code at https://www.shorturl.at/jkBU2
   :feedback_c: Strings are immutable so changing str doesn't affect the string that s refers to. Step through the code at https://www.shorturl.at/jkBU2
   :feedback_d: Correct!
   :feedback_e: All changes to string s result in a new string object. Step through the code at https://www.shorturl.at/jkBU2


   Consider the following method.  Assume that ``String s = "rain";`` and ``int b = 4;`` have been executed.  What are the values of ``s`` and ``b`` after ``test(s,b)`` is executed?

   .. code-block:: java

      public static void test(String str, int y){
         str = str + "bow";
         y = y * 2;
      }

.. mchoice:: mid_1_7
   :answer_a: The getAge method should be declared as private.
   :answer_b: The return type of the getAge method should be void.
   :answer_c: The getAge method should have at least one parameter.
   :answer_d: The variable age is not declared inside the getAge method.
   :answer_e: The instance variable age should be returned instead of a, which is local to the constructor.
   :correct: e
   :feedback_a: The method should be public so it can be accessed outside of the class.
   :feedback_b: The method return type should stay as int.
   :feedback_c: The getAge should not take any parameters.
   :feedback_d: This is an instance variable and should be declared outside.
   :feedback_e: Correct! The accessor method getAge should return the instance variable age.

   Consider the following Cat class, with the cat’s age stored in the method’s int attribute. The getAge method is intended to allow methods in other classes to access a Cat object’s age value; however, it does not work as intended. Which of the following best explains why the getAge method does NOT work as intended?

   .. code-block:: java

      public class Cat{
         private int age;

         public Cat(int a){
            age = a;
         }

         public int getAge(){
            return a;
         }
      }

.. mchoice:: mid_1_8
   :answer_a: I only
   :answer_b: I and II only
   :answer_c: I and III only
   :answer_d: IV
   :correct: d
   :feedback_a: It's true that the local variables can be declared in the body of constructors and methods, but II,III are also true about local variables.
   :feedback_b: Static methods cannot call non-static methods, so III is false.
   :feedback_c: Both I and III are true but II is also true regarding local variables.
   :feedback_d: Correct! All of the above are true.

   Which of the following statements are TRUE about local variables?

   .. code-block:: java

      I.   Local variables can be declared in the body of constructors and methods.
      II.  Local variables may only be used within the constructor or method and cannot be 
           declared to be public or private.
      III. When there is a local variable with the same name as an instance variable, the 
           variable name will refer to the local variable instead of the instance variable.
      IV.  All of the above.

.. mchoice:: mid_1_9
   :answer_a: I and II
   :answer_b: V
   :answer_c: I,II and IV
   :answer_d: I and III
   :correct: c
   :feedback_a: Both I and II are true about static methods, but IV is also true.
   :feedback_b: Static methods cannot call non-static methods, so III is false.
   :feedback_c: Correct! I, II, and IV are true.
   :feedback_d: I is true, but III is not true. Static methods cannot call non-static methods.

   Which of the following statements are TRUE about Static methods?

   .. code-block:: java

      I.   Static methods and variables include the keyword static before their name in the 
           header or declaration. They can be public or private.
      II.  Static methods cannot access or change the values of instance variables, but they
           can access or change the values of static variables.
      III. Static methods can call non-static methods.
      IV.  Static methods are associated with the class, not objects of the class.
      V.   All of the above.

.. mchoice:: mid_1_10
   :answer_a: var1 = 0, var2 = 2
   :answer_b: var1 = 1, var2 = 1
   :answer_c: var1 = 3, var2 = -1
   :answer_d: var1 = 2, var2 = 0
   :answer_e: The loop won't finish executing because of a division by zero.
   :correct: d
   :feedback_a: This would be true if the body of the while loop never executed. This would have happened if the while check was if var1 != 0 instead of var2 != 0
   :feedback_b: This would be true if the body of the while loop only execued one time, but it executes twice.
   :feedback_c: This would be true if the body of the while loop executed three times, but it executes twice.
   :feedback_d: Correct!
   :feedback_e: 0/2 won't cause a division by zero. The result is just zero.

   What are the values of var1 and var2 after the following code segment is executed and the while loop finishes?

   .. code-block:: java

      int var1 = 0;
      int var2 = 2;
      while ((var2 != 0) && ((var1 / var2) >= 0)) {
         var1 = var1 + 1;
         var2 = var2 - 1;
      }

.. mchoice:: mid_1_11
   :answer_a: 5 4 3 2 1
   :answer_b: -5 -4 -3 -2 -1
   :answer_c: -4 -3 -2 -1 0
   :correct: c
   :feedback_a: x is initialized (set) to -5 to start and incremented (x++) before the print statement executes. Step through the code at https://www.shorturl.at/dgotA.
   :feedback_b: x is incremented (x++) from -5 before the print statement executes. Step through the code at https://www.shorturl.at/dgotA.
   :feedback_c: Correct!

   What does the following code print?

   .. code-block:: java

      int x = -5;
      while (x < 0){
         x++;
         System.out.print(x + " ");
      }

.. mchoice:: mid_1_12
   :answer_a: 0 3 6 9 12 15
   :answer_b: 0 1 2 3 4 5
   :answer_c: 1 4 7 10 13
   :answer_d: This code will not print anything.
   :answer_e: 0 3 6 9 12
   :correct: d
   :feedback_a: This would be true if this loop had the correct syntax on the print.
   :feedback_b: The conditional would only match multiples of three, and the program does not output anything due to incorrect syntax.
   :feedback_c: The conditional would only match multiples of three, and the program does not output anything due to incorrect syntax.
   :feedback_d: Correct! The syntax to output text is System.out.print(), so this code will cause a compiler error.
   :feedback_e: The program does not output anything due to incorrect syntax - if the syntax was correct, it would also print 15.

   What will be printed after this code is executed?

   .. code-block:: java

      for (int i = 0; i <= 15; i++) {
         if (i % 3 == 0) {
            System.print(i + " ");
         }
      }

.. mchoice:: mid_1_13
   :answer_a: I only
   :answer_b: II only
   :answer_c: IV only
   :answer_d: II and III
   :answer_e: I, II, and III
   :correct: d
   :feedback_a: This implementation of ''addMinutes'' does not account for values of additionMinutes that push the minute count above 60.
   :feedback_b: Implementation II works, but implementation III also works.
   :feedback_c: Implementation IV does not work for situations where additionMinutes + minutes does not go above 60.
   :feedback_d: Correct!
   :feedback_e: Implementations II and III are correct, but implementation I is not. Implementation I does not account for values of additionMinutes that push the minute account above 60.

   Consider the following declaration for a class that will be used to represent points in time.  Which of these options correctly implement ''addMinutes()''?

   .. code-block:: java

      public class Timer{
         private int hours; // number of hours
         private int minutes; // 0 <= minutes < 60

         void addHours(int addition){
            hours = hours + addition;
         }   
         
         void addMinutes(int additionMinutes){
            // implementation not shown
         }
            
         // ... other methods not shown
      }


      //Proposed Implementations:
      I.   public void addMinutes(int additionMinutes)
            {
               minutes = minutes + additionMinutes;
            }
      II.  public void addMinutes(int additionMinutes)
            {
               if(minutes + additionMinutes >= 60)
               {
                  hours += 1;
                  minutes -= 60;
               }
               else
               {
                  minutes += minutes + additionMinutes;
               }
            }
      III. public void addMinutes(int additionMinutes)
            {
               minutes += additionMinutes;
               if(minutes >= 60)
               {
                  hours++;
                  minutes -= 60;
               }
            }
      IV.  public void addMinutes(int additionMinutes){
            {
               if(additionMinutes + minutes >= 60)
               {
                  minutes = additionMinutes + minutes - 60;
                  hours += 1;
               }
            }

.. mchoice:: mid_1_14
   :answer_a: !(a && b)
   :answer_b: !a && b
   :answer_c: !a && !b
   :answer_d: a && b
   :answer_e: a || !b
   :correct: c
   :feedback_a: This would be true in any case where a and b weren't both true
   :feedback_b: If b was false, this option would be false.
   :feedback_c: Correct!
   :feedback_d: This will only be true only when both a and b are true.
   :feedback_e: This will only be true if a is true, or b is false.
      
   Which option will evaluate to true, if and only if both a and b are false?

.. mchoice:: mid_1_15
   :answer_a: Prints the string in reverse order
   :answer_b: Deletes the second half of the string
   :answer_c: Prints string normally
   :answer_d: Compile-time error occurs
   :answer_e: Prints alternating characters from beginning and end of the string.
   :correct: a
   :feedback_a: Correct! This method prints the reversed string.
   :feedback_b: Incorrect, this method prints the parameter reversed.
   :feedback_c: Incorrect, this method prints the parameter reversed.
   :feedback_d: Incorrect, this method prints the parameter reversed.
   :feedback_e: Incorrect, this method prints the parameter reversed.
      
   What does the function ''mystery'' do?

   .. code-block:: java

      public void mystery (String tester){
         for (int i = tester.length(); i >= 0; i--){
            System.out.print(tester.charAt(i));
         }
         System.out.println("");
      }

.. mchoice:: mid_1_16
   :answer_a: "Hello World!"
   :answer_b: "Hello "
   :answer_c: "He"
   :answer_d: "HloWrd"
   :answer_e: "el ol!"
   :correct: d
   :feedback_a: Step through the code at https://www.shorturl.at/fyHMN.
   :feedback_b: Step through the code at https://www.shorturl.at/fyHMN.
   :feedback_c: Step through the code at https://www.shorturl.at/fyHMN.
   :feedback_d: Correct! The variable holds all characters that were stored at even indices for the original phrase.
   :feedback_e: Step through the code at https://www.shorturl.at/fyHMN.
      
   After the following code is executed, what does the variable mystery hold?
   
   .. code-block:: java

      public class Mysterious{
         public static void main (String[] args){
            String mystery = "";
            String starter = "Hello World!";
            for(int i = 0; i < starter.length(); i++){
               if(i % 2 == 0){
                  mystery += starter.charAt(i);
               }
            }
         }
      }

.. mchoice:: mid_1_17
   :answer_a: I only
   :answer_b: I and II
   :answer_c: II only
   :answer_d: II and III
   :answer_e: I, II, and III
   :correct: c
   :feedback_a: I contains incorrect syntax. Try again!
   :feedback_b: I contains incorrect syntax. Try again!
   :feedback_c: Correct! II is the only correct option.
   :feedback_d: III is incorrect due to a problem with the constructor argument. Try again!
   :feedback_e: Two of these options are incorrect. Take a closer look at the syntax of I and parameters of III.
   
   Which of the following code segments correctly creates an instance of a new Party object?
   
   .. code-block:: java

      public class Party{

         private int numInvited;
         private boolean partyCancelled;

         public Party(){
            numInvited = 1;
            partyCancelled = false;
         }

         public Party(int invites){
            numInvited = invites;
            partyCancelled = false;
         }
      }

      I.   Party myParty;
      II.  int classSize = 20;
           Party ourParty = new Party(classSize);
      III. int numOfFriends = 6;
           Party yourParty = new Party(numOfFriends + 3.0);

.. mchoice:: mid_1_18
   :answer_a: a = 6 and b = 7
   :answer_b: a = 6 and b = 13
   :answer_c: a = 13 and b = 0
   :answer_d: a = 6 and b = 0
   :answer_e: a = 0 and b = 13
   :correct: c
   :feedback_a: Step through the code at https://www.shorturl.at/mIY04.
   :feedback_b: Step through the code at https://www.shorturl.at/mIY04.
   :feedback_c: Correct!
   :feedback_d: Step through the code at https://www.shorturl.at/mIY04.
   :feedback_e: Step through the code at https://www.shorturl.at/mIY04.
   
   What are the values of ``a`` and ``b`` after the ``for`` loop finishes?
   
   .. code-block:: java

      int a = 10, b = 3, t = 0;
      for (int i = 1; i <= 6; i++)
      {
         t = a;
         a = i + b;
         b = t - i;
      }

.. mchoice:: mid_1_19
   :answer_a: hi there
   :answer_b: HI THERE
   :answer_c: Hi There
   :answer_d: null
   :answer_e: hI tHERE
   :correct: c
   :feedback_a: Strings are immutable and so any change to a string returns a new string. Step through the code at https://shorturl.at/klorI.
   :feedback_b: Strings are immutable and so any change to a string returns a new string. Step through the code at https://shorturl.at/klorI.
   :feedback_c: Correct!
   :feedback_d: Strings are immutable and so any changes to a string returns a new string. Step through the code at https://shorturl.at/klorI.
   :feedback_e: Strings are immutable and so any changes to a string returns a new string. Step through the code at https://shorturl.at/klorI.
   
   Consider the following code.  What string is referenced by ``s1`` after the code executes?
   
   .. code-block:: java

      String s1 = "Hi There";
      String s2 = s1;
      String s3 = s2;
      String s4 = s1;
      s2 = s2.toLowerCase();
      s3 = s3.toUpperCase();
      s4 = null;

.. mchoice:: mid_1_20
   :answer_a: a = 6.7
   :answer_b: b = 87.7
   :answer_c: 12 = c * b
   :answer_d: c = a - b
   :correct: d
   :feedback_a: Check the data type of a.
   :feedback_b: Check the data type of b.
   :feedback_c: Assignment statements must have a variable on the left.
   :feedback_d: Correct!

   Given following code, which of the following statements are valid?

   .. code-block:: java

      int a = 5; 
      int b = 3;  
      int c = 4;