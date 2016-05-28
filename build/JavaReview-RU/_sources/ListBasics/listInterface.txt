.. qnum::
   :prefix: 8-2-
   :start: 1
      
The List Interface
===================

You have probably seen a device with a **USB interface**.  It is used by a wide variety of devices like memory sticks, external drives, cameras, etc.  The USB interface allows you to connect a device to a computer.  The computer can work with the device through the USB interface.  You can unplug one USB device and plug in another instead.   

.. figure:: Figures/usb.jpg
    :width: 350px
    :align: center
    :figclass: align-center

    Figure 3: An external drive with a USB interface
    
..	index::
	single: interface
	single: abstract method
	pair: method; abstract

A Java **interface** is a special type of class.  The only type of methods it can contain are **public abstract methods**.  An **abstract** method is one that only has a method header and no body (no code). You define interfaces to define what a class needs to be able to do to **implement** an interface. So, to **implement** the ``List`` interface a class needs to allow you to add to the list, remove an item from the list, get an item at an index and more.  The idea is to separate what you want an object of a class to be able to *do*, from *who (which Class)* actually does it. That way you can create a variety of classes that implement the same interface and use whatever one works for your situation.  You can plug in different implementing classes just as you can plug in different USB devices.

List Methods on the Exam
=========================

..	index::
	pair: list; size
	pair: list; add
	pair: list; get
	pair: list; set
	pair: list; remove

The following are the ``List`` methods that you need to know for the AP CS A exam.  These are included on the quick reference that you will receive during the exam.  You can get it at https://secure-media.collegeboard.org/digitalServices/pdf/ap/explore-ap/AP_Computer-Science-A-Quick-Reference.pdf. 

    -  ``int size()`` returns the number of elements in the list
    
    -  ``boolean add(E obj)`` appends obj to the end of the list and returns true
    
    -  ``void add(int index, E obj)``  moves any current objects at index or beyond to the right (to a higher index) and inserts obj at the index

    -   ``E get(int index)`` returns the item in the list at the index
    
    -   ``E set(int index, E obj)`` replaces the item at index with obj
    
    -   ``E remove(int index)`` removes the item at the index and shifts remaining items to the left (to a lower index)

Why don't you just use an array instead of a list?  Well to do that you would have to know how many items you want in your list.  Say you create an array of 5 elements.  What happens when you want to add a 6th one?  You will have to create another bigger array and copy over the items from the old array and then add the new value at the end. What length should the new array be?  If you just create an array for 6 elements you won't waste any space, but you will have to create a new array again if you want to add another item.  If you create a larger array than you need (usually about twice as big), you will also have to keep track of how many items are actually in the list, since the length of the array isn't the same thing as the number of items in the list. 

.. figure:: Figures/whyLists.png
    :width: 400px
    :align: center
    :figclass: align-center

    Figure 4: Original array, after creating a new array that can contain one more item, and an array that is twice as big as the original with a size to indicate how many values are valid in the array.
