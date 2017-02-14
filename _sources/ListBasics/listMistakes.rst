.. qnum::
   :prefix: 8-9-
   :start: 1

Common Mistakes
===============
  -  forgetting that set replaces the item at the index
  -  forgetting that remove at an index moves all items that were to the right of that index left one index
  -  forgetting that add at an index moves everything that was at the index and greater to the right one index
  -  incrementing an index when looping through a list even though you removed an item from the list
  -  using ``nameList[0]`` instead of ``nameList.get(0)``.  
  -  using ``nameList.length`` instead of ``nameList.size()`` to get the number of elements in a list