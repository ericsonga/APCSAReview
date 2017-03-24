.. qnum::
   :prefix: 7-7-
   :start: 1

  
Common Mistakes
===============
  -  forgetting to create the array - only declaring it (``int[ ] nums;``)
  -  using 1 as the first index not 0
  -  using ``array.length`` as the last valid index in an array, not ``array.length - 1``.
  -  using ``array.length()`` instead of ``array.length`` (not penalized on the free response)
  -  using ``array.get(0)`` instead of ``array[0]`` (not penalized on the free response)
  -  going out of bounds when looping through an array  (using ``index <= array.length``).  You will get an ``ArrayIndexOutOfBoundsException``.  
  -  jumping out an loop too early by using one or more return statements before every value has been processed.  