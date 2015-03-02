.. qnum::
   :prefix: jr-2-
   :start: 1
   
..  shortname:: Variables
..  description:: An introduction to variables in Java

   
Common Mistakes with Variables
=====================================

  -  forgetting that Java is case sensitive - ``myScore`` is not the same as ``myscore``.
  
  -  forgetting to specify the type when declaring a variable (using ``name = value;`` instead of ``type name = value;``)
  
  -  using a variable name, but never declaring the variable.  
  
  -  using the wrong name for the variable.  For example calling it ``studentTotal`` when you declare it, but later calling it ``total``.

  -  using the wrong type for a variable.  Don't forget that using integer types in calculations will give an integer result.  So either cast one integer value to double or use a double variable if you want the fractional part (the part after the decimal point).
  
  -  using ``==`` to compare double values. Remember that double values are often an approximation. You might want to test if the absolute value of the difference between the two values is less than some amount instead.
  
  -  assuming that some value like 0 will be smaller than other ``int`` values.  Remember than ``int`` values can be negative as well.  If you want to set a value to the smallest possible ``int`` values use ``Integer.MIN_VALUE``