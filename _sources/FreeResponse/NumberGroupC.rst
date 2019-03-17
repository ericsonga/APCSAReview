.. qnum::
   :prefix:  16-13-
   :start: 1

NumberGroup - Part C
===============================

..	index::
	single: NumberGroup
    single: free response

**Part c.**  The ``MultipleGroups`` class (not shown) represents a collection of ``NumberGroup`` objects and is
a ``NumberGroup``. The ``MultipleGroups`` class stores the number groups in the instance variable
``groupList`` (shown below), which is initialized in the constructor.

``private List<NumberGroup> groupList;``

Write the ``MultipleGroups`` method ``contains``. The method takes an integer and returns ``true``
if and only if the integer is contained in one or more of the number groups in ``groupList``.

For example, suppose ``multiple1`` has been declared as an instance of ``MultipleGroups`` and
consists of the three ranges created by the calls ``new Range(5, 8)``, ``new Range(10, 12)``,
and ``new Range(1, 6)``. The following table shows the results of several calls to ``contains``.

.. figure:: Figures/NumberGroup.png
    :align: center
    :figclass: align-center

Try and Solve It
----------------

.. code-block:: java

   /** Returns true if at least one of the number groups in this multiple group contains num;
    *  false otherwise
    */

Write the method ``contains`` below.


.. activecode:: NumberGroupC
   :language: java
   
	public boolean contains(int num){
	
	}