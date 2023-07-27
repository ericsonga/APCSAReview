.. qnum::
   :prefix: 13-2-
   :start: 1

.. |start| image:: Figures/start.png
    :height: 24px
    :align: top
    :alt: start

.. |next| image:: Figures/next.png
    :height: 24px
    :align: top
    :alt: next

.. |prev| image:: Figures/prev.png
    :height: 24px
    :align: top
    :alt: previous

.. |pause| image:: Figures/pause.png
    :height: 24px
    :align: top
    :alt: pause

.. |finish| image:: Figures/finishExam.png
    :height: 24px
    :align: top
    :alt: finish exam

Practice Exam 2 for the AP CSA Exam
-------------------------------------

The following 20 questions are similar to what you might see on the AP CSA exam.  Please answer each to the best of your ability.

Click the |start| button when you are ready to begin the exam, but only then as you can only take the exam once.  Click on the |next| button to go to the next question.  Click on the |prev| button to go to the previous question.  Use the number buttons to jump to a particular question.  Click the |pause| button to pause the exam (you will not be able to see the questions when the exam is paused).  Click on the |finish| button after you have answered all the questions.  The number correct, number wrong, and number skipped will be displayed.

.. timed:: practiceexam2
    :timelimit: 45

    .. mchoice:: pe3_1
       :answer_a: 10
       :answer_b: 15
       :answer_c: 17
       :answer_d: 12
       :answer_e: 22
       :correct: c
       :feedback_a: This would be true if it was adding up all the values in the third column, the one at index 2.
       :feedback_b: This would be true if it was adding up all the values in the first column, the one at index 0.
       :feedback_c: This code adds up all the values in the second column, the one at index 1 since column indicies start at 0.
       :feedback_d: This would be true if it was adding up all the values in the last column, the one at index 3.
       :feedback_e: This would be true if it was adding up all the values in the first row, but the row changes each time through the for loop.

       What is the value of total after the following code executes?

       .. code-block:: java

           int[][] matrix = { {4, 5, 6, 7}, {0, 1, 2, 3}, {3, 2, 1, 0}, {8, 9, 1, 2}};

           int total = 0;
           for (int row = 0; row < matrix.length; row++)
           {
              total = total + matrix[row][1];
           }

    .. mchoice:: pe3_3
       :answer_a: [9, 3, 17, 2, 16, 4, 1]
       :answer_b: [1, 4, 16, 2, 17, 3, 9]
       :answer_c: [9, 3, 17, 16, 4, 1, 2]
       :answer_d: [16, 4, 1, 9, 3, 17, 2]
       :answer_e: [2, 16, 4, 1, 9, 3, 17]
       :correct: d
       :feedback_a: This would be true if it moved all of the values from the front to the back.  But does it?
       :feedback_b: This would be true if the code reversed the list.  But does it?   Remember that remove(0) removes the first item in the list and returns it.  The add method adds the item to the end of the list.
       :feedback_c: This would be true if only the value 2 was moved to the end of the list.  Is that what this code does?
       :feedback_d: This code moves the first item to the end of the list 4 times.  So it moves the 9, 3, 17, and 2.
       :feedback_e: This would be true if the call was mystery(3) instead of mystery(4).  Then it would move the first 3 values in the list to the end of the list.

       Assume that list has been initialized with the following Integer objects: [9, 3, 17, 2, 16, 4, 1].  Which of the following shows the values in list after a call of mystery(4)?

       .. code-block:: java

          private List list<Integer>;
          public void mystery(int n)
          {
             for (int i= 0; i < n; i++)
             {
                Object obj = list.remove(0);
                list.add((Integer)obj);
             }
          }


    .. mchoice:: pe3_4
       :answer_a: Interface
       :answer_b: Polymorphism
       :answer_c: Inheritance (is-a)
       :answer_d: Association (has-a)
       :answer_e: Overloading
       :correct: d
       :feedback_a: An interface is a special kind of abstract class. It isn't a type of relationship between classes.
       :feedback_b: Polymorphism is using the run-time type of the object to determine which method to run.  It isn't a type of relationship between classes.
       :feedback_c: Inheritance is when one class (the child class) extends the other (the parent class).  Do you see the keyword extends here?
       :feedback_d: Association is when one class keeps track of one or more objects of the other class.  In this case a DogOwner object has an array of dog objects.
       :feedback_e: Overloading is when a class has two methods with the same name but the parameter lists are different.  It is not a type of relationship between classes.

       Given the following two class declarations, what is the relationship between Dog and DogOwner?

       .. code-block:: java

          public class Dog
          {
              private String name;

              public void setName(String n)
              {
                  name = n;
              }

              public String getName()
              {
                  return name;
              }
          }

          public class DogOwner
          {
              private String name;
              private Dog[] dogs;
          }

    .. mchoice:: pe3_5
       :answer_a: return 9 * y;
       :answer_b: return 7 * y;
       :answer_c: return y;
       :answer_d: return 3 * y;
       :answer_e: return 4 * y;
       :correct: a
       :feedback_a: The first line is the same as 3y.  Then you have to substitute in the new value of y in the second line (2 * 3y + 3y) = 6y + 3y = 9y.
       :feedback_b: Remember that the second line is using the value of y calculated in the first line for both places y appears.
       :feedback_c: This would be true if the body only had the last line in it.  What do the first 2 lines do?
       :feedback_d: This would be true if the it was missing the second line.  What does that line do?
       :feedback_e: Remember that 2 * y + y is the same as 3 * y.

       Which of the following expressions can be use to replace the body of mystery so that mystery will return the same result for all values of y?

       .. code-block:: java

          public static int mystery(int y)
          {
             y = 2 * y + y;
             y = 2 * y + y;
             return y;
          }

    .. mchoice:: pe3_6
       :answer_a: test();
       :answer_b: super.super.test();
       :answer_c: super.test();
       :answer_d: this.test();
       :answer_e: There is no way to call a method in a grandparent class from a grandchild class
       :correct: e
       :feedback_a: This would run the test method in class C since the object was created by the C class.  When a method is called the runtime system will start looking for the method in the class that created the object.
       :feedback_b: You can't use super.super.  This would cause a compile-time error.
       :feedback_c: This would run the test method in class B since super is used to run a method in your parent class and B is the parent of C.
       :feedback_d: This would run the test method in class C.
       :feedback_e: You can use super to force the runtime to run a method in a parent class, but there is no way to force a call to a method in a grandparent (parent of your parent) class.

       Class C extends class B, which extends class A. Also, all of the three classes implement a public method test(). How can a method in an object of class C invoke the test() method defined in class A (without creating a new instance of class A)?

    .. mchoice:: pe3_7
       :answer_a: v.test(sporty,v);
       :answer_b: sporty.test(c,c);
       :answer_c: v.test(sporty,c);
       :answer_d: sporty.test(sporty,v);
       :answer_e: c.test(sporty,sporty);
       :correct: e
       :feedback_a: This would be true if the test method took a SportsCar object and a Vehicle object.
       :feedback_b: This would be true if the test method took two Car objects or a Car and a Vehicle object.
       :feedback_c: This would be true if the test method took a SportsCar object and a Car object.
       :feedback_d: This would be true if the test method took a SportsCar object and a Vehicle object.
       :feedback_e: The test method takes a Car object and a SportsCar object.  Only this answer correctly passes a SportsCar object as the second parameter.  You can use a SportsCar object as a Car object since it is a subclass of Car.  The test method can be called on any child of Vehicle.

       Which of the following is a correct call to the ``test`` method?

       .. code-block:: java

          public class Vehicle
          {
              public void test(Car x, SportsCar y) {}
          }

          public class Car extends Vehicle {}

          public class SportsCar extends Car {}

          public class VehicleTest
          {
              public static void main(String[] args)
              {
                  Vehicle v = new Vehicle();
                  Car c = new Car();
                  SportsCar sporty = new SportsCar();
              }
          }

    .. mchoice:: pe3_8
       :answer_a: 8
       :answer_b: 1
       :answer_c: 2
       :answer_d: 5
       :answer_e: 3
       :correct: a
       :feedback_a: The call recur(5) will return recur(4) + recur(3).  The call recur(4) returns 5.  The call recur(3) returns 3.  So recur(5) returns 5 + 3 = 8.
       :feedback_b: This method will only return 1 when n is less than or equal to 1.  In this case n is 5.
       :feedback_c: This would be true if the call was recur(2).  This would return recur(1) + recur(0).  Both recur(1) and recur(0) would return 1 so recur(2) would return 1 + 1 = 2.
       :feedback_d: This would be true if the call was recur(4). This would return recur(3) + recur(2).  The call recur(3) returns 3.  The call recur(2) returns 2.  So recur(4) returns 3 + 2 = 5.
       :feedback_e: This would be true if the call was recur(3).  This would return recur(2) + recur(1).  The call to recur(1) would return 1.  The call to recur(2) would return recur(1) + recur(0).  Both recur(1) and recur(0) would return 1 so recur(2) would return 1 + 1 = 2. Thus recur(3) would return 2 + 1 = 3.

       Given the following method declaration. What value is returned from recur(5)?

       .. code-block:: java

          public static int recur(int n)
          {
             if (n <= 1) 
                 return 1;
             else 
                 return (recur(n-1) + recur(n-2));
          }


    .. mchoice:: pe3_9
       :answer_a: 1 3 5 7 9 11 13 15 17 19
       :answer_b: 0 2 4 6 8 10 12 14 16 18
       :answer_c: 2 4 6 8 10 12 14 16 18
       :answer_d: 3 6 9 12 15 18
       :answer_e: 0 2 4 6 8 10 13 14 16 18 20
       :correct: b
       :feedback_a: This would be true if k was printed when the reminder was equal to 1 (when the value was odd).
       :feedback_b: This code will loop through all the values from 0 to 19, but only print the ones that are even (dividing by 2 has a remainder of 0).
       :feedback_c: The first time through the loop k will have the value 0 and 0 % 2 returns 0 so the 0 will print.
       :feedback_d: This would be true if the test was (k % 3 == 0) and the loop started with k = 1.
       :feedback_e: The loop will stop when k has the value of 20.  So it won't print a 20.

       What is printed when the following code is run?

       .. code-block:: java

          for (int k = 0; k < 20; k = k + 1)
          {
             if (k % 2 == 0)
                System.out.print(k + " ");
          }

    .. mchoice:: pe3_10
       :answer_a: [a, c, e, d, g]
       :answer_b: [c, e, d, b, g]
       :answer_c: [a, c, e, g]
       :answer_d: [a, b, e, d, g]
       :answer_e: [a, c, e, d, b, g]
       :correct: c
       :feedback_a: This would be true if it was list.add(2, "e") instead of list.set(2, "e").
       :feedback_b: This would be true if the first item in a list was at index 1, but it is at index 0.
       :feedback_c: This code adds "a" to the end of the list: ["a"] and then "b" to the end of the list: ["a", "b"].  Then it changes the value at index 1 to "c": ["a", "c"]. Then it adds "d" at position 2 which first moves to the right any existing values ["a", "c", "d"].   Then it sets the value at index 2 to "e": ["a", "c", "e"].  Then it adds "g" to the end: ["a", "c", "e", "g"].
       :feedback_d: For this to be true the 3rd line would have to be list.add("c").  Is it?
       :feedback_e: This would be true if all of the sets were adds.

       What is printed when the following code executes (runs)?

       .. code-block:: java

          List<String> list = new ArrayList<String>();
          list.add("a");
          list.add("b");
          list.set(1,"c");
          list.add(2, "d");
          list.set(2, "e");
          list.add("g");
          System.out.println(list);

    .. mchoice:: pe3_11
       :answer_a: pm1pm2cm2cm1
       :answer_b: pm1pm2
       :answer_c: pm1pm2cm1cm2
       :answer_d: pm1cm1
       :answer_e: pm1
       :correct: a
       :feedback_a: When p.m1() is run it will execute the m1 method in Child since p is an object of that class.  The first line calls super.m1() which will execute the m1 method in Parent. That method will print "pm1" and then call m2().  The m2 method in child will execute since p is a Child object.  The first line in that method calls super.m2() which will execute the m2 method in Parent.  This will print "pm2".  Then the parent m2 method will return, so execution will continue in the m2 method of Child and it will print "cm2".  Then the child m2 method will return which will continue execution in the m1 method of Child which will print "cm1".
       :feedback_b: This would be true if p was an object of the Parent class, but it is an object of the Child class and the runtime will start execution of a method in the Child class method if it has it.
       :feedback_c: Remember that each method call is added to the call stack and after the method returns execution continues with the next statement after the method call.
       :feedback_d: This would be true if the m1 method in Parent didn't call m2().
       :feedback_e: This would be true if the m1 method in Parent didn't call m2() and the p was actually an object of the Parent class.

       Assume that Parent p = new Child(); appears in a client program.  What is the result of the call p.m1()?

       .. code-block:: java

          public class Parent
          {
              public void m1()
              {
                  System.out.print("pm1");
                  m2();
              }

              public void m2()
              {
                  System.out.print("pm2");
              }
          }

          public class Child extends Parent
          {
              public void m1()
              {
                  super.m1();
                  System.out.print("cm1");
              }

              public void m2()
              {
                  super.m2();
                  System.out.print("cm2");
              }
          }

    .. mchoice:: pe3_12
       :answer_a: I only
       :answer_b: II only
       :answer_c: III only
       :answer_d: I and III only
       :answer_e: I, II, and III
       :correct: d
       :feedback_a: I does work, but so does another one.
       :feedback_b: The compiler will look for the method based on the declared type.  The declared type for b is Animal and Animal doesn't have a growl method.
       :feedback_c: III does work, but so does another one.
       :feedback_d: I works since the declared type is Animal and Animal has an eat method.  III works because the cast tells the compiler to treat b is a Bear and Bear has a growl method.
       :feedback_e: Does Animal have a growl method? Remember that the compiler checks for the method using the declared type.

       Assume the following classes.

       .. code-block:: java

          public class Animal 
          {
             // constructors not shown
             public void eat()
             { // code not shown
             }
          }

          public class Bear extends Animal 
          {
             // constructors not shown
             public void growl()
             { // code not shown
             }
          }

          Assume that the following declaration is in a different class.
          Animal b = new Bear();

          Which of the following will compile without error?
          I.    b.eat();
          II.   b.growl;
          III.  ((Bear) b).growl();

    .. mchoice:: pe3_13
       :answer_a: Mirrors the values from the top half to the bottom half of the 2D array
       :answer_b: Mirrors the values from the left halt to the right half of the 2D array
       :answer_c: Mirrors the values from the bottom half to the top half of the 2D array
       :answer_d: Mirrors the values from the right half to the left half of the 2D array
       :answer_e: All values remain the same.
       :correct: c
       :feedback_a: This would be true if it was p[height - row - 1][col] = p[row][col];
       :feedback_b: This would be true if it was looping through all the rows and half the columns and copying from p[row][width - col - 1] = p[row][col];
       :feedback_c: This loops through the top half rows (height / 2) and mirrors the values from the bottom half p[row][col] = p[height - row - 1][col];  So p[0][0] = p[height - 1][0] and p[0][1] = p[height - 1][1].
       :feedback_d: This would be true if it was looping through all the rows and half the columns and copying from p[row][width - col - 1] = p[row][col];
       :feedback_e: How can this be true since p[row][col] = p[height - row - 1][col]?

       Which of the following best explains what the method m does?

       .. code-block:: java

          public void m(int[][]p)
          {
             int height = p.length;
             for (int row = 0; row < height / 2; row++)
             {
                for (int col = 0; col <p[0].length; col++)
                {
                   p[row][col] = p[height - row - 1][col];
                }
             }
          }

    .. mchoice:: pe3_14
       :answer_a: 12344321
       :answer_b: 1234
       :answer_c: 4321
       :answer_d: 43211234
       :answer_e: 32144123
       :correct: a
       :feedback_a: This method prints the right most digit (x % 10 returns the right most digit) and then if x / 10 is not equal to 0 (x < 10) it returns mystery of the current number after chopping off the right most digit.  So mystery(4321) prints 1 and then calls mystery(432) which prints 2 and then calls mystery(43) which prints 3 and then calls mystery (4) which prints 4.  Since 4 / 10 is equal to 0 it won't do a recursive call. It prints 4 again and mystery(4) returns.  Execution will return to mystery(43) after the recursive call to mystery(4) and the 3 will print and then mystery (43) will return.  Execution will return to mystery(432) after the recursive call to mystery(43) and the 2 will print and then mystery (432) will return. Execution will return to mystery(4321) after the recursive call to mystery(432) and the 1 will print and then mystery (4321) will return.
       :feedback_b: This would be true if there wasn't a second System.out.print(x % 10) after if.
       :feedback_c: This would be true if the first call to System.out.print(x % 10); wasn't in the method.
       :feedback_d: This would be true if it was mystery(1234).
       :feedback_e: How does the 3 get printed first?  Remember that x % 10 returns the right most digit in x.

       What is the output from mystery(4321) when mystery is defined as follows?

       .. code-block:: java

          //precondition: x >=0
          public static void mystery (int x) 
          {
             System.out.print(x % 10);

             if ((x / 10) != 0) 
             {
                mystery(x / 10);
             }
             System.out.print(x % 10);
          }

    .. mchoice:: pe3_15
       :answer_a: public class Room extends Classroom implements Building { … }
       :answer_b: public class Classroom extends Room { … } public class Building { private Room[] rooms; …. }
       :answer_c: public class Room extends Building { private Classroom room; …. }
       :answer_d: public class Classroom extends Building, Room { … }
       :answer_e: public class Room extends Classroom, Building { … }
       :correct: b
       :feedback_a: Is a Classroom a type of Building?  Don't use extends unless an object of the child class can be substituted for a object of the parent class.
       :feedback_b: If a classroom is a room, then Classroom should extend Room (inherit from it).  If a Building has rooms it should have a field that holds them.  Since a Building can have more than one Room we can use an array to hold the rooms.
       :feedback_c: Is a Room a type of Building?  Don't use extends unless the child is the same type of thing as the parent.
       :feedback_d: You can't extend two classes in Java so this can't be right.
       :feedback_e: You can't extend two classes in Java so this can't be right.

       A classroom is a room and a building has many rooms. If the three classes Room, Classroom, and Building create objects that have the same relationship which of the following is the most appropriate set of declarations?

    .. mchoice:: pe3_16
       :answer_a: Whenever the first element in a is equal to val
       :answer_b: Whenever a contains any element which equals val.
       :answer_c: Whenever more than 1 element in a is equal to val.
       :answer_d: Whenever exactly 1 element in a is equal to val.
       :answer_e: Whenever the last element in a is equal to val.
       :correct: c
       :feedback_a: What is count for?
       :feedback_b: It only sets temp to true when count is greater than 1.
       :feedback_c: This increments count once for each value in a that is equal to val.  It returns true when count is greater than 1.
       :feedback_d: This would be true if it was temp = count == 1.
       :feedback_e: This could be one line of code return (a[a.length-1] == val).

       Given the following code which of the answers best describes the conditions needed for temp to be true when it is returned?

       .. code-block:: java

          boolean temp = false;
          int count = 0;
          for ( int testVal : a)
          {
             if ( testVal == val ) 
                 count++;
          }
          temp = count > 1;
          return temp;


    .. mchoice:: pe3_17
       :answer_a: 1 1 1 2 2 1 2 2 3 1 3 2 4 1 4 2 5 1 5 2
       :answer_b: 1 2 2 4 3 6 4 8
       :answer_c: 1 1 1 2 2 1 2 2 3 1 3 2 4 1 4 2
       :answer_d: 5 10 15 4 8 12 3 6 9 2 4 6 1 2 3
       :answer_e: 1 2 2 4 3 6 4 8 5 10
       :correct: e
       :feedback_a: This would be true if line 3 was: System.out.print(j + " " + k + " ");
       :feedback_b: This would be true if line 1 was: for (int j = 1; j < 5; j++).
       :feedback_c: This would be true if line 1 was: for (int j = 1; j < 5; j++) and if line 3 was: System.out.print(j + " " + k + " ");
       :feedback_d: This would be true if line 1 was: for (int j = 5; j >=1; j--) and line 2 was: for (int k = 1; k <= 3; k++).
       :feedback_e: This prints j * k and for each value of j from 1 to 5, k changes from 1 to 2.  So when j is 1 it will print 1 2.  When j is 2 it will print 2 4.  When j is 3 it will print 3 6.  When j is 4 it will print 4 8.  When j is 5 it will print 5 10.

       What is the output from the following code segment?

       .. code-block:: java

          for (int j = 1; j <=5; j++) 
          {
             for (int k = 1; k < 3; k++)
                System.out.print(j * k + " ");
          }


    .. mchoice:: pe3_18
       :answer_a: method1 and method3
       :answer_b: method1 only
       :answer_c: method2 only
       :answer_d: method2 and method3
       :answer_e: all of them
       :correct: a
       :feedback_a: The problem with method2 is that if num1==num2 the first if will execute, but so will the second if and result will be set to 1.
       :feedback_b: Another will work as well.
       :feedback_c: This one won't work.  The problem with method2 is that if num1==num2 the first if will execute, but so will the second if and result will be set to 1.
       :feedback_d: While method3 will work, method2 won't.  The problem with method2 is that if num1==num2 the first if will execute, but so will the second if and result will be set to 1.
       :feedback_e: Two will work, but one will not.

       Consider the following methods. Which of method1, method2, and method3 would give the same result as sample?

       .. code-block:: java

          public void sample(int num1, int num2) 
          {
             int result = 99;
             if (num1==num2)
             {
                  result = 0;
             }
             else if (num1>num2)
             {
                 result = 1;
             }
             else {
                 result = -1;
             }
             System.out.println(result);
          }

          public void method1(int num1, int num2) 
          {
             int result=99;
             if (num1 == num2)
             {
                  result = 0;
             }
             else {
                if(num1 > num2)
                {
                     result = 1;
                }
                else
                {
                    result = -1;
                }
             }
             System.out.println(result);
          }

          public void method2(int num1, int num2) 
          {
             int result = 99;
             if (num1 == num2)
             {
                  result = 0;
             }
             if (num1 >= num2)
             {
                  result = 1;
             }
             else
             {
                 result = -1;
             }
             System.out.println(result);
          }

          public void method3(int num1, int num2) 
          {
             int result = 99 ;
             if (num1 == num2)
             {
                  result = 0;
             }
             if (num1 > num2)
             {
                  result = 1;
             }
             if (num1 < num2)
             {
                  result = -1;
             }
             System.out.println(result);
          }


    .. mchoice:: pe3_19
       :answer_a: 13, 28
       :answer_b: 13, 29
       :answer_c: 14, 28
       :answer_d: 14, 29
       :answer_e: 1, 28
       :correct: a
       :feedback_a: It will print the value of t before changing it, so it will print 13 first and the loop ends when t is equal to 29 so the last time it will print 28.
       :feedback_b: It prints the value of t before changing it and the loop ends when t equals 29 so how can this be true?
       :feedback_c: It prints the value of t before changing it and t starts at 13 so it will print 13 first.
       :feedback_d: It prints the value of t before changing it, so neither of these is correct.
       :feedback_e: How could it print 1 for the value of t when t is set to 13 initially?

       What are the first and last values output by the following code segment?

       .. code-block:: java

          int t = 13;
          while (t < 29)
          {
             System.out.println(t);
             t++;
          }


    .. mchoice:: pe3_20
       :answer_a: I and III
       :answer_b: All are true
       :answer_c: I, III, and IV
       :answer_d: II and IV
       :answer_e: III and IV
       :correct: c
       :feedback_a: These are both true, but one more is also true.
       :feedback_b: Since s1 and s2 were created using the new operator they do not refer to the same object so s1 == s2 is false.
       :feedback_c: I is true since they have the same characters in the same order.  III and IV are both true since they refer to the same object.
       :feedback_d: II is not true.  Since s1 and s2 were created using the new operator they do not refer to the same object so s1 == s2 is false.
       :feedback_e: These are both true, but one more is also true.

       Given the following code.

       .. code-block:: java

          String s1 = new String("hi");
          String s2 = new String("hi");
          String s3 = s2;

          Which of the following would return true:
          I.  s1.equals(s2)
          II. s1 == s2
          III. s2.equals(s3);
          IV. s2 == s3;