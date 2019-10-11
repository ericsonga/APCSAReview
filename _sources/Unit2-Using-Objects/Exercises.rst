.. qnum::
   :prefix: 2-13-
   :start: 1

Multiple Choice Exercises
=================================

These questions are mostly about Strings, but more questions on using other objects will be added in the future.

.. highlight:: java
   :linenothreshold: 3

Easier Multiple Choice Questions
---------------------------------

These problems are mostly easier than what you will see on the AP CS A exam.



.. mchoice:: qse_2
   :practice: T
   :answer_a: 8
   :answer_b: 10
   :answer_c: 11
   :correct: c
   :feedback_a: Be sure to count spaces and punctuation in the length (the number of characters in the string).
   :feedback_b: Did you forget to count a space or punctuation?
   :feedback_c: The length method returns the number of characters in the string, including spaces and punctuation.

   What is the value of len after the following executes?

   .. code-block:: java

     String s1 = "Hey, buddy!";
     int len = s1.length();

.. mchoice:: qse_3
   :practice: T
   :answer_a: 3
   :answer_b: 4
   :answer_c: 5
   :answer_d: -1
   :correct: a
   :feedback_a: The method indexOf returns the first position of the passed str in the current string starting from the left (from 0).
   :feedback_b: The first character is at index 0 in a string, not 1.
   :feedback_c: Does the indexOf method find the first occurrence of the character, or the last?
   :feedback_d: Does the string contain a d?  The pos method will return the first index that the character is at in the string.

   What is the value of pos after the following code executes?

   .. code-block:: java

     String s1 = "ac ded ca";
     int pos = s1.indexOf("d");

.. mchoice:: qse_4
   :practice: T
   :answer_a: Hey
   :answer_b: he
   :answer_c: H
   :answer_d: h
   :correct: a
   :feedback_a: Strings are immutable, meaning they don't change.  Any method that that changes a string returns a new string.  So s1 never changes unless you set it to a different string.
   :feedback_b: The substring method returns a new string starting at the first index and ending before the second index.
   :feedback_c: This would be true if we asked what the value of s2 was after the code executes.  What is the value of s1?
   :feedback_d: This would be true if we asked what the value of s3 was after the code executes.  What is the value of s1?

   What is the value of s1 after the following code executes?

   .. code-block:: java

     String s1 = "Hey";
     String s2 = s1.substring(0,1);
     String s3 = s2.toLowerCase();

.. mchoice:: qse_5
   :practice: T
   :answer_a: new Person john = Person("John", 16);
   :answer_b: Person john("John", 16);
   :answer_c: Person john = ("John", 16);
   :answer_d: Person john = new Person("John", 16);
   :correct: d
   :feedback_a: The new keyword should come before the class to be instantiated
   :feedback_b: The new keyword is needed to create an object in Java
   :feedback_c: The new keyword is needed to create an object in Java
   :feedback_d:

   Which of the following code segments will correctly create an instance of a Person object?

   .. code-block:: java

     public class Person
     {
          private String name;
          private int age;

          public Person(String a, int b)
          {
             name = a;
             age = b;
          }
     }

.. mchoice:: qse_6
   :practice: T
   :answer_a: 100.00
   :answer_b: 110.00
   :answer_c: 90.00
   :answer_d: 10.00
   :correct: b
   :feedback_a: Remember that we have added and withdrawn money
   :feedback_b: We set total to 100, then subtract 30, then add 40
   :feedback_c: We added more money than we took out
   :feedback_d: We set the value of total to be 100 first

   Assume that BankAccount and MainClass are properly defined in seperate files.
   What is the output of the code ran in main()?

   .. code-block:: java

    public class BankAccount
    {
        private int accountID;
        private double total;

        public BankAccount(int id, double initialDeposit)
        {
            accountID = id;
            total = initialDeposit;
        }

        public void addMoney(double money)
        {
            total = total + money;
        }

        public void withdrawMoney(double money)
        {
            total = total - money;
        }

        public void printCurrentTotal()
        {
            System.out.print(total);
        }
    }

    public class MainClass
    {
        public static void main(String[] args)
        {
            BankAccount newAccount = new BankAccount(12345, 100.00);
            newAccount.withdrawMoney(30.00);
            newAccount.addMoney(40.00);
            newAccount.printCurrentTotal();
        }
    }

Medium Multiple Choice Questions
----------------------------------

These problems are similar to those that you will see on the AP CS A exam.

.. mchoice:: qve_new6
   :practice: T
   :answer_a: a random number from 0 to 4
   :answer_b: a random number from 1 to 5
   :answer_c: a random number from 5 to 9
   :answer_d: a random number from 5 to 10
   :correct: c
   :feedback_a: This would be true if it was (int) (Math.random * 5)
   :feedback_b: This would be true if it was ((int) (Math.random * 5)) + 1
   :feedback_c: Math.random returns a value from 0 to not quite 1.  When you multiply it by 5 you get a value from 0 to not quite 5.  When you cast to int you get a value from 0 to 4.  Adding 5 gives a value from 5 to 9.
   :feedback_d: This would be true if Math.random returned a value between 0 and 1, but it won't ever return 1.  The cast to int results in a number from 0 to 4.  Adding 5 gives a value from 5 to 9.  

   Given the following code segment, what is the value of ``num`` when it finishes executing? Math.random() returns a random decimal number between 0 and up to 1, for example 0.4.
   
    .. code-block:: java 

      double value = Math.random();
      int num = (int) (value * 5) + 5;
      

      
.. mchoice:: qve_new8
   :practice: T
   :answer_a: a random number from 0 to 10
   :answer_b: a random number from 0 to 9
   :answer_c: a random number from -5 to 4
   :answer_d: a random number from -5 to 5
   :correct: d
   :feedback_a: This would be true if it was (int) (value * 11)
   :feedback_b: This would be true if it was (int) (value * 10)
   :feedback_c: This would be true if it was (int) (value * 10) - 5
   :feedback_d: Math.random returns a random value from 0 to not quite 1.  After it is multipied by 11 and cast to integer it will be a value from 0 to 10.  Subtracting 5 means it will range from -5 to 5.  

   Given the following code segment, what is the value of ``num`` when it finishes executing? Math.random() returns a random decimal number between 0 and up to 1, for example 0.4.
   
    .. code-block:: java 

      double value = Math.random();
      int num = (int) (value * 11) - 5;
      
      
.. mchoice:: qsm_1
   :practice: T
   :answer_a: I, II, III
   :answer_b: I only
   :answer_c: II only
   :answer_d: III only
   :answer_e: II and III only
   :correct: a
   :feedback_a: The "equals" operation on strings returns true when the strings have the same characters.  The == operator returns true when they refer to the same object.  In this case all three references actually refer to the same object so both == and equals will be true.
   :feedback_b: This is true, since s1 and s3 contain the same characters since s1 and s3 actually refer to the same string object. But, it isn't the only thing that is true.
   :feedback_c: This is true since s2 == s1.  But, it isn't the only thing that is true.
   :feedback_d: This is true since s3 == s2, and s2 == s1 so it follows that s1 == s3.  But, it isn't the only thing that is true.
   :feedback_e: This is true since they all refer to the same string object.  But, they also contain the same characters so equals is also true.

   After the following code is executed, which of I, II and/or III will evaluate to true?

   .. code-block:: java

     String s1 = "xyz";
     String s2 = s1;
     String s3 = s2;

     I.   s1.equals(s3)
     II.  s1 == s2
     III. s1 == s3

.. mchoice:: qsm_2
   :practice: T
   :answer_a: org
   :answer_b: eor
   :answer_c: eorg
   :answer_d: orgi
   :answer_e: You will get an index out of bounds exception
   :correct: a
   :feedback_a: The method substring(a,b) means start at a and stop before b. The method substring(a) means start at a and go to the end of the string. The first character in a string is at index 0.
   :feedback_b: This can't be true since the e is at index 1 and s2 = s1.substring(2) will start at index 2 and take all characters till the end of the string.
   :feedback_c: This can't be true since the e is at index 1 and s2 = s1.substring(2) will start at index 2 and take all characters till the end of the string.
   :feedback_d: This would be true if substring(a,b) included the character at index b, but it doesn't.
   :feedback_e: This would be true if the starting index was invalid or the ending index was past 2 past the last valid index.

   What is output from the following code?

   .. code-block:: java

     String s = "Georgia Tech";
     String s1 = s.substring(0,7);
     String s2 = s1.substring(2);
     String s3 = s2.substring(0,3);
     System.out.println(s3);

.. mchoice:: qsm_3
   :practice: T
   :answer_a: null
   :answer_b: hi there
   :answer_c: HI THERE
   :answer_d: Hi There
   :answer_e: hI tHERE
   :correct: d
   :feedback_a: This would be true if we had s1 = s4 after s4 = null was executed. Strings are immutable and so any changes to a string returns a new string.
   :feedback_b: This would only be correct if we had s1 = s2 after s2.toLowerCaase() was executed. Strings are immutable and so any change to a string returns a new string.
   :feedback_c: This would be correct if we had s1 = s3 after s3.toUpperCase() was executed. String are immutable and so any change to a string returns a new string.
   :feedback_d: Strings are immutable meaning that any changes to a string creates and returns a new string, so the string referred to by s1 does not change.
   :feedback_e: Strings are immutable and so any changes to a string returns a new string.

   Given the following code segment, what is the value of s1 after the code executes?

   .. code-block:: java

     String s1 = "Hi There";
     String s2 = s1;
     String s3 = s2;
     String s4 = s1;
     s2 = s2.toLowerCase();
     s3 = s3.toUpperCase();
     s4 = null;

.. mchoice:: qsm_4
   :practice: T
   :answer_a: Data Set 2 contains one string which should return true and one that should return false.
   :answer_b: All strings in Data Set 2 have the same number of characters.
   :answer_c: The strings in Data Set 2 are all lowercase
   :answer_d: Data Set 2 contains fewer values than Data Set 1.
   :answer_e: There are no advantages.
   :correct: a
   :feedback_a: All of the strings in Data Set 1 should return true, so the false condition is never tested.
   :feedback_b: Variety is always good in testing, so this is not an advantage.
   :feedback_c: It would be better to include both upper and lower case for testing, so this is not an advantage.
   :feedback_d: More test conditions is usually better, so this is not an advantage.
   :feedback_e: All the values in Data Set 1 are true, so the false condition is not tested.

   There is a method called checkString that determines whether a string is the same forwards and backwards. The following data sets can be used for testing the method. What advantage does Data Set 2 have over Data Set 1?

   .. code-block:: java

      Data Set 1    Data Set 2
      aba	        bcb
      abba	        bcd
      aBa

.. mchoice:: qsm_5
   :practice: T
   :answer_a: Use one class, Car, which has three fields; int numDoors, double mpg, and boolean hasAir.
   :answer_b: Use four unrelated classes: Car, Doors, MilesPerGallon, and AirConditioning
   :answer_c: Use a class, Car, which has three subclasses: Doors, MilesPerGallon, and AirConditioning
   :answer_d: Use a class Car, which has a subclass Doors, with a subclass AC, with a subclass MPG.
   :answer_e: Use three classes: Doors, AirConditioning, and MilesPerGallon, each with a subclass Car.
   :correct: a:
   :feedback_a: Having one class with all the attributes needed is the most efficient design in this case
   :feedback_b: The point of storing the car information is so we can easily access the attributes related to a car
   :feedback_c: In this case, the information is only refer to a couple of basic attributes so it is better to store that data as fields within a single class
   :feedback_d: It doesn't really make sense for AC to be a subclass of MPG, and that being a subset of Doors
   :feedback_e: A car doesn't really make sense to be a subclass of AC, and so on. It would also be better to confine a couple of pieces of data into a single class

   A car dealership needs a program to store information about the cars for sale.
   For each car, they want to keep track of the following information: the number of doors (2 or 4),
   its average number of miles per gallon, and whether the car has air conditioning.
   Which of the following is the best design?

.. mchoice:: qsm_6
   :practice: T
   :answer_a: Hello Bob
   :answer_b: Hello Hello Bob
   :answer_c: Hello Bob Hello Bob
   :answer_d: Hello Bob Hello
   :correct: b
   :feedback_a: When making an instance of a class, the constructor always runs first
   :feedback_b: When making an instance of a class, the constructor always runs first
   :feedback_c: When making an instance of a class, the constructor always runs first
   :feedback_d: When making an instance of a class, the constructor always runs first

   Assume that SomeClass and MainClass are properly defined in seperate files. What is the output of the code ran in main()?

   .. code-block:: java

      public class SomeClass
      {
          public SomeClass()
          {
              System.out.println("Hello ");
          }

          void printSomething(String name)
          {
              System.out.print("Hello " + name + " ");
          }
      }

      public class MainClass
      {
          public static void main(String[] args)
          {
              SomeClass someClass = new SomeClass();
              someClass.printSomething("Bob");
          }
      }

.. mchoice:: qsm_7
   :practice: T
   :answer_a: Woo Hoo Hoo Woo
   :answer_b: Hoo Woo Hoo
   :answer_c: Woo Hoo Woo Hoo
   :answer_d: Woo Woo Hoo Hoo
   :correct: c
   :feedback_a: 'Woo Hoo' is what gets passed to someOtherFunc()
   :feedback_b: First prints 'Woo ' then 'Hoo ' then the appended "Woo Hoo"
   :feedback_c: First prints 'Woo ' then 'Hoo ' then the appended "Woo Hoo"
   :feedback_d: 'Woo ' gets printed first, then the 'Hoo ' from the second return

   What is the output of the following code?

   .. code-block:: java

     public class test
     {
        String someFunc(String str)
        {
            return someOtherFunc(str + " Hoo");
        }

        String someOtherFunc(String str)
        {
            return "Hoo " + str;
        }

        public static void main(String[] args)
        {
            Test x = new Test();
            System.out.print("Woo " + x.someFunc("Woo"));
        }
     }

Hard Multiple Choice Questions
----------------------------------

These problems are harder than most of those that you will usually see on the AP CS A exam.

.. mchoice:: qsh_1
   :practice: T
   :answer_a: II and IV
   :answer_b: II, III, and IV
   :answer_c: I, II, III, IV
   :answer_d: II only
   :answer_e: IV only
   :correct: b
   :feedback_a: III is also correct.
   :feedback_b: String overrides equals to check if the two string objects have the same characters. The == operator checks if two object references refer to the same object. So II is correct since s1 and s2 have the same characters. Number II is correct since s3 and s1 are referencing the same string, so they will be ==. And s2 and s3 both refer to string that have the same characters so equals will be true in IV. The only one that will not be true is I, since s1 and s2 are two different objects (even though they have the same characters).
   :feedback_c: I is not correct since s1 and s2 are two different objects (even though they have the same characters). If s1 and s2 were both referring to literals, then I would be correct, but the new operator forces a new object to be created.
   :feedback_d: III and IV are also correct.
   :feedback_e: II and III are also correct.

   Given the following code segment, which of the following is true?

   .. code-block:: java

     String s1 = new String("Hi There");
     String s2 = new String("Hi There");
     String s3 = s1;

     I.   (s1 == s2)
     II.  (s1.equals(s2))
     III. (s1 == s3)
     IV.  (s2.equals(s3))

.. mchoice:: qsh_2
   :practice: T
   :answer_a: 21
   :answer_b: 1353
   :answer_c: It will give a run-time error
   :answer_d: 138
   :answer_e: It will give a compile-time error
   :correct: b
   :feedback_a: This would be correct if it was System.out.println(13 + 5 + 3), but the 13 is a string.
   :feedback_b: This is string concatenation.  When you apprend a number to a string it get turned into a string and processing is from left to right.
   :feedback_c: You can append a number to a string in Java. It turns the number into a string and then appends the second string to the first string.
   :feedback_d: This would be correct if it was System.out.println("13" + (5 + 3)), but the 5 is turned into a string and appended to the 13 and then the same is done with the 3.
   :feedback_e: You can append a number to a string in Java.  It will compile.

   What does the following code print?

   .. code-block:: java

     System.out.println("13" + 5 + 3);

.. mchoice:: qsh_3
   :practice: T
   :answer_a: Lasagna Meow Screeech
   :answer_b: Meow Screeech Lasagna
   :answer_c: Screeech Meow Lasagna
   :answer_d: Lasagna Screeech Meow
   :correct: b
   :feedback_a: The baseclass constructor runs first so Animal doesn't have one so then it goes to Cat's constructor and then Garfield's constructor
   :feedback_b: The baseclass constructor runs first so Animal doesn't have one so then it goes to Cat's constructor and then Garfield's constructor
   :feedback_c: The baseclass constructor runs first so Animal doesn't have one so then it goes to Cat's constructor and then Garfield's constructor
   :feedback_d: The baseclass constructor runs first so Animal doesn't have one so then it goes to Cat's constructor and then Garfield's constructor

   What is the output of the following code?

   .. code-block:: java

    class Animal
    {
        void someSound()
        {
            System.out.print("Screeech ");
        }
    }

    class Cat extends Animal
    {
        public Cat()
        {
            System.out.print("Meow ");
            super.someSound();
        }
    }

    class Garfield extends Cat
    {
        public Cat()
        {
            System.out.print("Lasagna ");
        }
    }
    public class MainClass
    {
        public static void main(String[] args)
        {
            Garfield garfield = new Garfield();
        }
    }

.. mchoice:: qsh_4
   :practice: T
   :answer_a: garbage value
   :answer_b: 0
   :answer_c: compile error
   :answer_d: runtime error
   :correct: c
   :feedback_a: someVar has not been initialized to anything at all yet
   :feedback_b: someVar has not been initialized to anything at all yet
   :feedback_c: x is just a reference, and since it hasn't been instantiated yet, there is no value for someVar to print out to the console
   :feedback_d: x is just a reference to a data type that is SomeClass, it hasn't allocated any memory for it yet so you can't even compile the code yet since there is an error with the data associated with someVar

   Assume that SomeClass and MainClass are properly defined in seperate files. What is the output of main()?

   .. code-block:: java

    public class SomeClass
    {
        int someVar;
    }

    public class MainClass
    {
        public static void main(String[] args)
        {
            SomeClass x;
            System.out.println(x.someVar);
        }
    }

.. mchoice:: qsh_5
   :practice: T
   :answer_a: garbage value
   :answer_b: 0
   :answer_c: compile error
   :answer_d: runtime error
   :correct: b
   :feedback_a: Fields of classes and objects that do not have an explicit initializer and elements of arrays are automatically initialized with the default value for their type which is 0 for all numerical types
   :feedback_b: Ints get initialized to 0 by default if not explicitly initialized
   :feedback_c: someVar holds the default value of 0
   :feedback_d: someVar has a value assigned by default

   Assume that SomeClass and MainClass are properly defined in seperate files. What is the output of main()?

   .. code-block:: java

     public class SomeClass
    {
        int someVar;
    }

    public class MainClass
    {
        public static void main(String[] args)
        {
            SomeClass x = new SomeClass();
            System.out.println(x.someVar);
        }
    }
