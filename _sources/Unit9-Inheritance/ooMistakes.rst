.. qnum::
   :prefix: 10-14-
   :start: 1

Common Mistakes
===============
  -  Using inheritance (is a kind of) when you should use association (has a).  A school has classes, it is not a type of class.  A high school is a kind of school.
  -  Using a type field instead of subclasses.  If you ever find yourself creating conditionals based on the type of object use subclasses instead.
  -  Copying code instead of creating a subclass or pulling out a common superclass.  If you ever find yourself copying object fields or methods try creating a subclass instead or pull out a common superclass.  
    
