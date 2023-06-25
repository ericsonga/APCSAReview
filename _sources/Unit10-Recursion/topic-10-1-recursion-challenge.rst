.. qnum::
   :prefix: 10-1-
   :start: 14

.. |Groupwork| image:: ../../_static/groupwork.png
    :width: 35
    :align: middle
    :alt: groupwork

.. raw:: html

   <div class="unit-time">
     <svg xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi
          bi-clock"
          viewBox="0 0 16 16">
       <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
       <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
     </svg> Time estimate: 45 min.
   </div>

|Groupwork| Tracing Challenge : Recursion
===========================================

Working in pairs, trace through the following recursion problems.

Consider the following recursive method:

.. code-block:: java
   :linenos:

   public static int mystery(int n)
   {
       if (n == 0)
           return 1;
       else
           return 3 * mystery (n - 1);
   }

The trace of this code for mystery(4) is shown below.

.. code-block:: java

   mystery(4) returns 3 * mystery(3)
   mystery(3) returns 3 * mystery(2)
   mystery(2) returns 3 * mystery(1)
   mystery(1) returns 3 * mystery(0)
   mystery(0) returns A

.. fillintheblank:: recBase1

   What is the value of A in the trace above?

   -    :^1$: Correct!
        :.*: What is the value returned from mystery(0)?

Once mystery(0) returns 1 the value for each call to mystery can now be calculated and returned.

.. code-block:: java

   mystery(4) returns 3 * mystery(3) = 3 * X = Y
   mystery(3) returns 3 * mystery(2) = 3 * 9 = 27
   mystery(2) returns 3 * mystery(1) = 3 * 3 = 9
   mystery(1) returns 3 * mystery(0) = 3 * 1 = 3
   mystery(0) returns 1

.. fillintheblank:: recFBTracex1

   What is the value of X in the trace above?

   -    :^27$: Correct!
        :.*: What is the result of mystery(3)?

.. fillintheblank:: recFBTracey1

   What is the value of Y in the trace above?

   -    :^81$: Correct!
        :.*: What is the result of 3 * mystery(3)?

Consider the following recursive method:

.. code-block:: java
   :linenos:

   public static int strMethod(String str)
   {
      if (str.length() == 1) return 0;
      else
      {
         if (str.substring(0,1).equals("e")) return 1 +
                              strMethod(str.substring(1));
         else return strMethod(str.substring(1));
      }
   }

.. code-block:: java

   strMethod("every") returns 1 + strMethod("very")
   strMethod("very") returns strMethod("ery")
   strMethod("ery") returns 1 + strMethod("ry")
   strMethod("ry") returns strMethod("y")
   strMethod("y") returns B

.. fillintheblank:: recFBBase2

      What is the value of B in the trace above?

      -    :^0$: Correct!
           :.*: What is the value returned from strMethod("y")?

Once ``strMethod("y")`` returns, the value from each recursive call on the stack can be calculated and returned.

.. code-block:: java

   strMethod("every") returns 1 + strMethod("very") = Z
   strMethod("very") returns strMethod("ery") = Y
   strMethod("ery") returns 1 + strMethod("ry") = 1 + X
   strMethod("ry") returns strMethod("y") = 0
   strMethod("y") returns 0

.. fillintheblank:: recFBRetX2

   What is the value of X in the trace above?

   -    :^0$: Correct!
        :.*: What is the value returned from strMethod("ry")?

.. fillintheblank:: recFBRetY2

   What is the value of Y in the trace above?

   -    :^1$: Correct!
        :.*: What is the value returned from strMethod("ery")?

.. fillintheblank:: recFBRetZ2

   What is the value of Z in the trace above?

   -    :^2$: Correct!
        :.*: What is the value returned from strMethod("every")?


Summary
============

- A recursive method is a method that calls itself.

- Recursive methods contain at least one base case, which halts the recursion, and at least one recursive call.

- Each recursive call has its own set of local variables, including the formal parameters.

- Parameter values capture the progress of a recursive process, much like loop control variable values capture the progress of a loop.

- Any recursive solution can be replicated through the use of an iterative approach.

- Writing recursive program code is outside the scope of the course and AP Exam.

- Recursion can be used to traverse String, array, and ArrayList objects.
