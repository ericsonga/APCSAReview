.. qnum::
   :prefix: 13-7-
   :start: 1

Searching and Sorting Summary
-------------------------------

In this chapter you learned about **searching** and **sorting**.  Searching means looking for a value in a sequence (array or list).  Sorting means changing the order of a sequence (array or list) of items to be in order.

..	index::
    single: recursion

Concept Summary
=================

- **binary search** - Searching a sorted sequence by looking in the middle of the remaining search space till either you find the item you are looking for or run out of places to look and thus realize it isn't there.
- **insertion sort** - A sort that inserts the next item in the correct place in a partially sorted sequence.  It moves all larger (or smaller) values to make room for the new value.
- **sequential search** - A search that looks at each item in a sequence to find a value or determine if the item isn't in the sequence.  It returns the index for the found value or -1 which means the value wasn't in the sequence.
- **sequential sort** - A sort that loops from the current index to the end of the sequence and swaps the value at the current index with the smallest (or largest) value in the rest of the unsorted sequence.
- **merge sort** - A sort that uses recursion to split the items to be sorted into two parts until there is only one item in each part and then merges the two sorted sequences into one sorted sequence.

Practice
===========

.. dragndrop:: ch13ss_match_1
    :feedback: Review the summaries above.
    :match_1: A search that requires the sequence to be sorted|||binary search
    :match_2: A search that searches each item in a sequence for a value|||sequential search
    :match_3: A sort that inserts the next value to be sorted into the sorted sequence by moving all larger values right|||insertion sort
    :match_4: A sort that uses recursion|||merge sort
    :match_5: A sort that loops through a sequence looking for the smallest (or largest) in the remaining sequence|||sequential sort

    Drag the item from the left and drop it on its corresponding answer on the right.  Click the "Check Me" button to see if you are correct.
