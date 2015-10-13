.. qnum::
   :prefix: lab-1b-
   :start: 1
   
.. highlight:: java
   :linenothreshold: 4



Activity 3: Better Keyword Detection
=======================================

This activity introduces you to some new String methods including some that are not on the exam, but are useful.  

Run the StringExplorer below. It currently has code to illustrate the use of the ``indexOf``
and ``toLowerCase`` methods.  Do they do what you thought they would?  The method ``indexOf`` is on the exam and the method ``toLowerCase`` is not.  Why do you think you might want to change the string to all lowercase characters?

.. activecode:: lcmp1
   :language: java
   
   /**
    * A program to allow students to try out different 
    * String methods. 
    * @author Laurie White
    * @version April 2012
    */
   public class StringExplorer
   {

      public static void main(String[] args)
	  {
	     String sample = "The quick brown fox jumped over the lazy dog.";
		
		 //  Demonstrate the indexOf method.
		 int position = sample.indexOf("quick");
		 System.out.println ("sample.indexOf(\"quick\") = " + position);
		
		 //  Demonstrate the toLowerCase method.
		 String lowerCase = sample.toLowerCase();
		 System.out.println ("sample.toLowerCase() = " + lowerCase);
		 System.out.println ("After toLowerCase(), sample = " + sample);
		
		 //  Try other methods here:

	 }

   }
   
Open the API for String in the Java documentation (http://docs.oracle.com/javase/7/docs/api/java/lang/String.html). Scroll down to the Method Summary section and find the
``indexOf(String str)`` method. Follow the link and read the description of the ``indexOf``
method. 

.. fillintheblank:: fill-lab1b1

    .. blank:: blanklab1b1
        :correct: \\-1\\b
        :feedback2: (".*", "Check the documentation or try it out in the ActiveCode window")

        What value is returned by ``indexOf`` if the substring does not occur in the string?
   
In activity 2, you discovered that simply searching for collections of letters in a string does
not always work as intended. For example, the word “cat” is in the string “Let’s play catch!,” but the
string has nothing to do with the animal. In this activity, you will trace a method that searches for a full
word in the string. It will check the substring before and after the string to ensure that the keyword is
actually found.



