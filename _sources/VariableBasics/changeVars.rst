.. qnum::
   :prefix: 3-3-
   :start: 1
   
Changing Variables in Java
---------------------------

Remember that a variable holds a value and that value can change or vary.  If you use a variable to keep score you would probably increment it (add one to the current value).  You can do this by setting the variable to the current value of the variable plus one (score = score + 1) as shown below.

.. activecode:: lccv1
   :language: java
   
   public class Test1
   {
      public static void main(String[] args)
      {
        int score = 0;
        System.out.println(score);
        score = score + 1;
        System.out.println(score);
      }
   }
   
You can set one variable's value to a *copy* of the value of another variable.  This won't change the value of the variable that you are copying from.  You can step through this code (and some additional code) `here <http://www.pythontutor.com/java.html#code=public+class+Test2%0A%7B%0A+++public+static+void+main(String%5B%5D+args%29%0A+++%7B%0A+++++int+x+%3D+3%3B%0A+++++int+y+%3D+2%3B%0A+++++System.out.println(x%29%3B%0A+++++System.out.println(y%29%3B%0A+++++x+%3D+y%3B%0A+++++System.out.println(x%29%3B%0A+++++System.out.println(y%29%3B%0A+++++y+%3D+5%3B%0A+++++System.out.println(x%29%3B%0A+++++System.out.println(y%29%3B%0A+++%7D%0A%7D&mode=display&origin=opt-frontend.js&cumulative=false&heapPrimitives=false&textReferences=false&py=java&rawInputLstJSON=%5B%5D&curInstr=0>`_.

.. activecode:: lccv2
   :language: java
   
   public class Test2
   {
      public static void main(String[] args)
      {
        int x = 3;
        int y = 2;
        System.out.println(x);
        System.out.println(y);
        x = y;
        System.out.println(x);
        System.out.println(y);
      }
   }
   
**Check your understanding**
   
.. mchoice:: q2_1
   :answer_a: x = 0, y = 1, z = 2
   :answer_b: x = 1, y = 2, z = 3
   :answer_c: x = 2, y = 2, z = 3
   :answer_d: x = 0, y = 0, z = 3
   :correct: b
   :feedback_a: These are the initial values in the variable, but the values are changed.
   :feedback_b: x changes to y's initial value, y's value is doubled, and z is set to 3
   :feedback_c: Remember that the equal sign doesn't mean that the two sides are equal.  It sets the value for the variable on the left to the value from evaluating the right side.
   :feedback_d: Remember that the equal sign doesn't mean that the two sides are equal.  It sets the value for the variable on the left to the value from evaluating the right side.

   What are the values of x, y, and z after the following code executes?  You can step through this code `here <http://www.pythontutor.com/java.html#code=public+class+Test2%0A%7B%0A+++public+static+void+main(String%5B%5D+args%29%0A+++%7B%0A+++++int+x+%3D+0%3B%0A+++++int+y+%3D+1%3B%0A+++++int+z+%3D+2%3B%0A+++++x+%3D+y%3B%0A+++++y+%3D+y+*+2%3B%0A+++++z+%3D+3%3B%0A+++++System.out.println(x%29%3B%0A+++++System.out.println(y%29%3B%0A+++++System.out.println(z%29%3B%0A+++%7D%0A%7D&mode=display&origin=opt-frontend.js&cumulative=false&heapPrimitives=false&textReferences=false&py=java&rawInputLstJSON=%5B%5D&curInstr=11>`_.
   
   .. code-block:: java 

     int x = 0;
     int y = 1;
     int z = 2;
     x = y;
     y = y * 2;
     z = 3;
   
   
**Mixed up programs**

.. parsonsprob:: 2_swap

   The following has the correct code to 'swap' the values in x and y (so that x ends up with y's initial value and y ends up with x's initial value), but the code is mixed up and contains one or more extra statements.  Drag the needed blocks from the left into the correct order on the right. Check your solution by clicking on the <i>Check Me</i> button.  You will be told if any of the blocks are in the wrong order or if you need to remove one or more blocks.
   -----
   int x = 3;
   int y = 5;
   int temp = 0;
   =====
   temp = x;
   =====
   x = y;
   =====
   y = temp;
   =====
   y = x; #distractor