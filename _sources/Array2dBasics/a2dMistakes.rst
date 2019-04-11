.. qnum::
   :prefix: 9-5-
   :start: 1


Common Mistakes
===============
  -  forgetting to create the array - only declaring it (``int[][] nums;``).
  -  using 1 as the first index not 0 for rows and/or columns.
  -  using ``array.length`` as the last valid row index, not ``array.length - 1``.
  -  using ``array[0].length`` as the last valid column index, not ``array[0].length - 1``.
  -  using ``array.length()`` instead of ``array.length`` (not penalized on the free response)
  -  going out of bounds when looping through an array  (using ``index <= array.length``).  You will get an ``ArrayIndexOutOfBoundsException``.
  -  jumping out an loop by using one or more return statements before every value has been processed.
  -  using the wrong starting and ending indices on loops.
  -  using ``array.length`` for both the number of rows and columns.  Use ``array[0].length`` for the number of columns.
