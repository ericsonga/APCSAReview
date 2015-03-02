.. qnum::
   :prefix: jr-1-3-
   :start: 1


DrJava (an IDE)
---------------- 

The tool that we use to compile a Java source file into a Java class file is called a **compiler**.  I recommend using an **Integrated Development Environment** (IDE). An IDE helps you write, compile, run, and debug programs.  I recommend using DrJava (from http://DrJava.org).  It is free and easy to use.  I particularly like the interactions pane (the bottom area) which lets you try out Java code without having to create a class first.

.. figure:: Figures/DrJavaBugRunner.png
    :width: 600px
    :align: center
    :figclass: align-center

    Figure 2: DrJava with the interactions pane at the bottom of the window.
    
Setting up DrJava for GridWorld
-------------------------------
    
Notice that the class being defined in the figure above is called ``BugRunner`` and the file it is in is ``BugRunner.java``.   This is the first project in GridWorld. GridWorld is no longer tested on the exam as of fall 2014, but you still may want to use it.  You can get the GridWorld materials at https://apstudent.collegeboard.org/apcourse/ap-computer-science-a/about-the-exam/gridworld-case-study.  To allow DrJava to run any GridWord code you need to tell it where to find the ``gridworld.jar`` file.   To do this you add the ``gridworld.jar`` file to the **classpath**, which is a list of the places to look for classes.  GridWorld isn't part of the Java language, but is a set of additional classes developed for the Advanced Placement Computer Science A exam so we need to tell the compiler where to find these classes.

To add to the classpath in DrJava click on ``Edit`` in the top menu and then ``Preferences`` and finally on ``Resource Locations``.  Then click on the ``Add`` button below the ``Extra Classpath`` area.  Use the file browser to find the ``gridworld.jar`` file and select that file.  Then click on ``OK``.  

.. figure:: Figures/AddJarToPrefs.png
    :width: 600px
    :align: center
    :figclass: align-center

    Figure 3: Adding gridworld.jar to the classpath in DrJava
    
The Advanced Placement Computer Science A exam uses a subset of Java and GridWorld.  This book will only use that Java subset and GridWorld.

