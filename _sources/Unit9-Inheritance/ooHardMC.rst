.. qnum::
   :prefix: 9-12-
   :start: 14

Hard Multiple Choice Questions
----------------------------------

These problems are harder than those that you will typically see on the AP CSA exam.

.. mchoice:: qooh_1
   :practice: T
   :answer_a: ABDC
   :answer_b: AB
   :answer_c: ABCD
   :answer_d: ABC
   :correct: a
   :feedback_a: Even though b is declared as type <code>Base</code> it is created as an object of the <code>Derived</code> class, so all methods to it will be resolved starting with the <code>Derived</code> class. So the <code>methodOne()</code> in <code>Derived</code> will be called. This method first calls <code>super.methodOne</code> so this will invoke the method in the superclass (which is <code>Base</code>). So next the <code>methodOne</code> in <code>Base</code> will execute. This prints the letter "A" and invokes <code>this.methodTwo()</code>. Since <code>b</code> is really a <code>Derived</code> object, we check there first to see if it has a <code>methodTwo</code>. It does, so execution continues in the <code>Derived</code> class <code>methodTwo</code>. This method invokes <code>super.methodTwo</code>. So this will invoke the method in the super class (<code>Base</code>) named <code>methodTwo</code>. This method prints the letter "B" and then returns. Next the execution returns from the call to the <code>super.methodTwo</code> and prints the letter "D". We return to the <code>Base</code> class <code>methodOne</code> and return from that to the <code>Derived</code> class <code>methodOne</code> and print the letter "C".
   :feedback_b: This would be true if the object was created of type <code>Base</code>. But the object is really a <code>Derived</code>  object. So all methods are looked for starting with the <code>Derived</code>  class.
   :feedback_c: After the call to <code>methodOne</code> in the super class printing "A", the code continues with the implicit <code>this.methodTwo</code> which resolves from the current object's class which is <code>Derived</code>. Next, <code>methodTwo</code> in the <code>Derived</code> class is executed which then calls <code>super.methodTwo</code> which invokes <code>println</code> "B" from <code>methodTwo</code> in the <code>Base</code> class. Then the "D" in the <code>Derived</code> <code>methodTwo</code> is printed. Finally the program returns to <code>methodOne</code> in the <code>Derived</code> class are prints "C".
   :feedback_d: The call to <code>methodTwo</code> in <code>super.methodOne</code> is to <code>this.methodTwo</code> which is the method from the <code>Derived</code> class. Consequently the "D" is also printed.

   Assume that ``Base b = new Derived();`` appears in a client program.  What is the result of the call ``b.methodOne();``?

   .. code-block:: java

      public class Base
      {
          public void methodOne()
          {
              System.out.print("A");
              methodTwo();
          }

          public void methodTwo()
          {
              System.out.print("B");
          }
      }

      public class Derived extends Base
      {
          public void methodOne()
          {
              super.methodOne();
              System.out.print("C");
          }

          public void methodTwo()
          {
              super.methodTwo();
              System.out.print("D");
          }
      }

.. mchoice:: qooh_2
   :practice: T
   :answer_a: II only
   :answer_b: III only
   :answer_c: I, II, and III
   :answer_d: I and II only
   :answer_e: I only
   :correct: c
   :feedback_a: <code>Point2D</code> does have a constructor that takes an <code>x</code> and <code>y</code> value so this is okay. Also the call to super is the first line of code in the child constructor as required. However, both I and III are okay as well.
   :feedback_b: The <code>x</code> and <code>y</code> values in <code>Point2D</code> are public and so can be directly accessed by all classes including subclasses. Also there is a no-arg constructor in <code>Point2D</code> so the super no-arg constructor will be called before the first line of code in this constructor.
   :feedback_c: I is true because <code>Point2D</code> does have a no-arg constructor. II is true because <code>Point2D</code> does have a constructor that takes <code>x</code> and <code>y</code>. III is true because <code>Point2D</code> does have a no-arg constructor which will be called before the first line of code is executed in this constructor. The fields <code>x</code> and <code>y</code> are public in <code>Point2D</code> and thus can be directly accessed by all classes.
   :feedback_d: This would be true if <code>x</code> and <code>y</code> were private in <code>Point2D</code>, but they are public.
   :feedback_e: <code>Point2D</code> does have a no-arg constructor and since the constructor in <code>Point3D</code> doesn't have an explicit call to super as the first line of code in the constructor one will be added for the no-arg constructor. However, both II and III are okay as well.

   If you have the following classes.  Which of the following constructors would be valid for ``Point3D``?

   .. code-block:: java

      public class Point2D 
      {
         public int x;
         public int y;

         public Point2D() {}

         public Point2D(int x,int y) 
         {
            this.x = x;
            this.y = y;
         }
        // other methods
      }

      public class Point3D extends Point2D
      {
         public int z;

         // other code
      }

      I.  public Point3D() 
          {
          
          }
      II. public Point3D(int x, int y, int z)
          {
             super(x,y);
             this.z = z;
          }
      III. public Point3D(int x, int y)
           {
              this.x = x;
              this.y = y;
              this.z = 0;
           }

