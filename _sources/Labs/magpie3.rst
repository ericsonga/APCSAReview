.. qnum::
   :prefix: lab-1c-
   :start: 1
   
.. highlight:: java
   :linenothreshold: 4



Activity 3: Better Keyword Detection
=======================================

This activity introduces you to some new String methods including some that are not on the exam, but are useful.  

More String Methods
---------------------

Run the StringExplorer below. It currently has code to illustrate the use of the ``indexOf``
and ``toLowerCase`` methods.  Do they do what you thought they would?  The method ``indexOf`` is on the exam and the method ``toLowerCase`` is not.  Why do you think you might want to change the string to all lowercase characters? Why doesn't the value of ``sample`` change?

.. activecode:: lc-strEx
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
   
Open the API for String in the Java documentation (http://docs.oracle.com/javase/7/docs/api/java/lang/String.html) in another tab. Scroll down to the Method Summary section and find the
``indexOf(String str)`` method. Follow the link and read the description of the ``indexOf`` method. 

.. fillintheblank:: fill-lab1b1

    .. blank:: blanklab1b1
        :correct: \\-1\\b
        :feedback2: (".*", "Check the documentation or try it out in the ActiveCode window")

        What value is returned by ``indexOf`` if the substring does not occur in the string?
        
Copy the following lines to ``StringExplorer`` in the ActiveCode above in the ``main`` method above to see for yourself that ``indexOf`` behaves as
specified:

.. code-block:: java

   int notFoundPsn = sample.indexOf("slow");
   System.out.println("sample.indexOf(\"slow\") = " + notFoundPsn);
   
Read the description of ``indexOf(String str, int fromIndex)``. Add lines to
``StringExplorer`` that illustrate how this version of ``indexOf`` differs from the one with
one parameter.

Better Keyword Detection
--------------------------
   
In activity 2, you discovered that simply searching for collections of letters in a string does
not always work as intended. For example, the word “cat” is in the string “Let’s play catch!,” but the
string has nothing to do with the animal. In this activity, you will trace a method that searches for a full
word in the string. It will check the substring before and after the string to ensure that the keyword is
actually found.

Take a look at the ``findKeyword`` method below.  It has a ``while`` loop in it which we haven't seen before.  A ``while`` loop repeats the code in the block below it while a condition is true.  A block is all the code inside of an open curly brace ``{`` and a close curly brace ``}``.  

.. code-block:: java
  
  private int findKeyword(String statement, String goal,
		  int startPos)
  {
     String phrase = statement.trim();
	 // The only change to incorporate the startPos is in
	 // the line below
	 int psn = phrase.toLowerCase().indexOf(goal.toLowerCase(), 
	                                        startPos);

	 // Refinement--make sure the goal isn't part of a word
	 while (psn >= 0)
	 {
	    // Find the string of length 1 before and after
		// the word
		String before = " ", after = " ";
		if (psn > 0)
		{
		   before = phrase.substring(psn - 1, psn).toLowerCase();
		}
		if (psn + goal.length() < phrase.length())
		{
		   after = phrase.substring(
				    psn + goal.length(),
					psn + goal.length() + 1)
					.toLowerCase();
		}

        /* determine the values of psn, before, and after at this point */
            
		// If before and after aren't letters, we've
		// found the word
		if (((before.compareTo("a") < 0) || 
		     (before.compareTo("z") > 0)) // before is not a letter
			&& ((after.compareTo("a") < 0) || 
			    (after.compareTo("z") > 0)))
		{
			return psn;
		}

		// The last position didn't work, so let's find
		// the next, if there is one.
		psn = phrase.indexOf(goal.toLowerCase(),psn + 1);

	 }

	 return -1;
  }

Modify the code below to print the values of ``psn``, ``before``, and ``after`` right after the comment on line 100 in the ``findKeyword`` method below.

Try replacing line 178 with each of the following

* ``maggie.findKeyword("She's my sister", "sister", 0);``
* ``maggie.findKeyword("Brother Tom is helpful", "brother", 0);``
* ``maggie.findKeyword("I can't catch wild cats.", "cat", 0);``
* ``maggie.findKeyword("I know nothing about snow plows.", "no", 0);``


Record each of the values in a table.  

.. activecode:: lc-magpie3
   :language: java

   /**
    * A program to carry on conversations with a human user.
    * This version: 
    * <ul><li>
    *    Uses advanced search for keywords 
    * </li></ul> 
    *    
    * @author Laurie White
    * @version April 2012
    */
   public class Magpie3
   {
	  /**
	   * Get a default greeting
	   * 
	   * @return a greeting
	   */
	  public String getGreeting()
	  {
	     return "Hello, let's talk.";
	  }

	  /**
	   * Gives a response to a user statement
	   * 
	   * @param statement
	   *            the user statement
	   * @return a response based on the rules given
	   */
	  public String getResponse(String statement)
	  {
	     String response = "";
		 if (statement.length() == 0)
		 {
		    response = "Say something, please.";
		 }
		 else if (findKeyword(statement, "no") >= 0)
		 {
			response = "Why so negative?";
		 }
		 else if (findKeyword(statement, "mother") >= 0
				|| findKeyword(statement, "father") >= 0
				|| findKeyword(statement, "sister") >= 0
				|| findKeyword(statement, "brother") >= 0)
		 {
			response = "Tell me more about your family.";
		 }
		 else
		 {
			response = getRandomResponse();
		 }
		 return response;
	  }

	  /**
	   * Search for one word in phrase. The search is not case
	   * sensitive. This method will check that the given goal
	   * is not a substring of a longer string (so, for
	   * example, "I know" does not contain "no").
	   * 
	   * @param statement
	   *            the string to search
	   * @param goal
	   *            the string to search for
	   * @param startPos
	   *            the character of the string to begin the
	   *            search at
	   * @return the index of the first occurrence of goal in
	   *         statement or -1 if it's not found
	   */
	  private int findKeyword(String statement, String goal,
			int startPos)
	  {
	     String phrase = statement.trim();
		 // The only change to incorporate the startPos is in
		 // the line below
		 int psn = phrase.toLowerCase().indexOf(
				goal.toLowerCase(), startPos);

		 // Refinement--make sure the goal isn't part of a
		 // word
		 while (psn >= 0)
		 {
			// Find the string of length 1 before and after
			// the word
			String before = " ", after = " ";
			if (psn > 0)
			{
				before = phrase.substring(psn - 1, psn)
						.toLowerCase();
			}
			if (psn + goal.length() < phrase.length())
			{
				after = phrase.substring(
						psn + goal.length(),
						psn + goal.length() + 1)
						.toLowerCase();
			}

            /* determine the values of psn, before, and after at this point */
            
			// If before and after aren't letters, we've
			// found the word
			if (((before.compareTo("a") < 0) || (before
					.compareTo("z") > 0)) // before is not a
											// letter
					&& ((after.compareTo("a") < 0) || (after
							.compareTo("z") > 0)))
			{
				return psn;
			}

			// The last position didn't work, so let's find
			// the next, if there is one.
			psn = phrase.indexOf(goal.toLowerCase(),
					psn + 1);

		 }

		return -1;
	  }

	  /**
	   * Search for one word in phrase. The search is not case
	   * sensitive. This method will check that the given goal
	   * is not a substring of a longer string (so, for
	   * example, "I know" does not contain "no"). The search
	   * begins at the beginning of the string.
	   * 
	   * @param statement
	   *            the string to search
	   * @param goal
	   *            the string to search for
	   * @return the index of the first occurrence of goal in
	   *         statement or -1 if it's not found
	   */
	  private int findKeyword(String statement, String goal)
	  {
		 return findKeyword(statement, goal, 0);
	  }

	  /**
	   * Pick a default response to use if nothing else fits.
	   * 
	   * @return a non-committal string
	   */
	  private String getRandomResponse()
	  {
		 final int NUMBER_OF_RESPONSES = 4;
		 double r = Math.random();
		 int whichResponse = (int) (r * NUMBER_OF_RESPONSES);
		 String response = "";

		 if (whichResponse == 0)
		 {
		 	response = "Interesting, tell me more.";
		 }
		 else if (whichResponse == 1)
		 {
		 	response = "Hmmm.";
		 }
		 else if (whichResponse == 2)
		 {
		 	response = "Do you really think so?";
		 }
		 else if (whichResponse == 3)
		 {
		 	response = "You don't say.";
		 }

		 return response;
	  }
	  
	  public static void main(String[] args)
	  {
		Magpie3 maggie = new Magpie3();
		
		maggie.findKeyword("yesterday is today's day before.", "day", 0);
			
	  }

   }
   
   
You can also step through the code `here <http://www.pythontutor.com/visualize.html#code=/**%0A++++*+A+program+to+carry+on+conversations+with+a+human+user.%0A++++*+This+version%3A+%0A++++*+%3Cul%3E%3Cli%3E%0A++++*++++Uses+advanced+search+for+keywords+%0A++++*+%3C/li%3E%3C/ul%3E+%0A++++*++++%0A++++*+%40author+Laurie+White%0A++++*+%40version+April+2012%0A++++*/%0A+++public+class+Magpie3%0A+++%7B%0A%09++/**%0A%09+++*+Get+a+default+greeting%0A%09+++*+%0A%09+++*+%40return+a+greeting%0A%09+++*/%0A%09++public+String+getGreeting(%29%0A%09++%7B%0A%09+++++return+%22Hello,+let's+talk.%22%3B%0A%09++%7D%0A%0A%09++/**%0A%09+++*+Gives+a+response+to+a+user+statement%0A%09+++*+%0A%09+++*+%40param+statement%0A%09+++*++++++++++++the+user+statement%0A%09+++*+%40return+a+response+based+on+the+rules+given%0A%09+++*/%0A%09++public+String+getResponse(String+statement%29%0A%09++%7B%0A%09+++++String+response+%3D+%22%22%3B%0A%09%09+if+(statement.length(%29+%3D%3D+0%29%0A%09%09+%7B%0A%09%09++++response+%3D+%22Say+something,+please.%22%3B%0A%09%09+%7D%0A%09%09+else+if+(findKeyword(statement,+%22no%22%29+%3E%3D+0%29%0A%09%09+%7B%0A%09%09%09response+%3D+%22Why+so+negative%3F%22%3B%0A%09%09+%7D%0A%09%09+else+if+(findKeyword(statement,+%22mother%22%29+%3E%3D+0%0A%09%09%09%09%7C%7C+findKeyword(statement,+%22father%22%29+%3E%3D+0%0A%09%09%09%09%7C%7C+findKeyword(statement,+%22sister%22%29+%3E%3D+0%0A%09%09%09%09%7C%7C+findKeyword(statement,+%22brother%22%29+%3E%3D+0%29%0A%09%09+%7B%0A%09%09%09response+%3D+%22Tell+me+more+about+your+family.%22%3B%0A%09%09+%7D%0A%09%09+else%0A%09%09+%7B%0A%09%09%09response+%3D+getRandomResponse(%29%3B%0A%09%09+%7D%0A%09%09+return+response%3B%0A%09++%7D%0A%0A%09++/**%0A%09+++*+Search+for+one+word+in+phrase.+The+search+is+not+case%0A%09+++*+sensitive.+This+method+will+check+that+the+given+goal%0A%09+++*+is+not+a+substring+of+a+longer+string+(so,+for%0A%09+++*+example,+%22I+know%22+does+not+contain+%22no%22%29.%0A%09+++*+%0A%09+++*+%40param+statement%0A%09+++*++++++++++++the+string+to+search%0A%09+++*+%40param+goal%0A%09+++*++++++++++++the+string+to+search+for%0A%09+++*+%40param+startPos%0A%09+++*++++++++++++the+character+of+the+string+to+begin+the%0A%09+++*++++++++++++search+at%0A%09+++*+%40return+the+index+of+the+first+occurrence+of+goal+in%0A%09+++*+++++++++statement+or+-1+if+it's+not+found%0A%09+++*/%0A%09++private+int+findKeyword(String+statement,+String+goal,%0A%09%09%09int+startPos%29%0A%09++%7B%0A%09+++++String+phrase+%3D+statement.trim(%29%3B%0A%09%09+//+The+only+change+to+incorporate+the+startPos+is+in%0A%09%09+//+the+line+below%0A%09%09+int+psn+%3D+phrase.toLowerCase(%29.indexOf(%0A%09%09%09%09goal.toLowerCase(%29,+startPos%29%3B%0A%0A%09%09+//+Refinement--make+sure+the+goal+isn't+part+of+a%0A%09%09+//+word%0A%09%09+while+(psn+%3E%3D+0%29%0A%09%09+%7B%0A%09%09%09//+Find+the+string+of+length+1+before+and+after%0A%09%09%09//+the+word%0A%09%09%09String+before+%3D+%22+%22,+after+%3D+%22+%22%3B%0A%09%09%09if+(psn+%3E+0%29%0A%09%09%09%7B%0A%09%09%09%09before+%3D+phrase.substring(psn+-+1,+psn%29%0A%09%09%09%09%09%09.toLowerCase(%29%3B%0A%09%09%09%7D%0A%09%09%09if+(psn+%2B+goal.length(%29+%3C+phrase.length(%29%29%0A%09%09%09%7B%0A%09%09%09%09after+%3D+phrase.substring(%0A%09%09%09%09%09%09psn+%2B+goal.length(%29,%0A%09%09%09%09%09%09psn+%2B+goal.length(%29+%2B+1%29%0A%09%09%09%09%09%09.toLowerCase(%29%3B%0A%09%09%09%7D%0A%0A++++++++++++/*+determine+the+values+of+psn,+before,+and+after+at+this+point+*/%0A++++++++++++%0A%09%09%09//+If+before+and+after+aren't+letters,+we've%0A%09%09%09//+found+the+word%0A%09%09%09if+(((before.compareTo(%22a%22%29+%3C+0%29+%7C%7C+(before%0A%09%09%09%09%09.compareTo(%22z%22%29+%3E+0%29%29+//+before+is+not+a%0A%09%09%09%09%09%09%09%09%09%09%09//+letter%0A%09%09%09%09%09%26%26+((after.compareTo(%22a%22%29+%3C+0%29+%7C%7C+(after%0A%09%09%09%09%09%09%09.compareTo(%22z%22%29+%3E+0%29%29%29%0A%09%09%09%7B%0A%09%09%09%09return+psn%3B%0A%09%09%09%7D%0A%0A%09%09%09//+The+last+position+didn't+work,+so+let's+find%0A%09%09%09//+the+next,+if+there+is+one.%0A%09%09%09psn+%3D+phrase.indexOf(goal.toLowerCase(%29,%0A%09%09%09%09%09psn+%2B+1%29%3B%0A%0A%09%09+%7D%0A%0A%09%09return+-1%3B%0A%09++%7D%0A%0A%09++/**%0A%09+++*+Search+for+one+word+in+phrase.+The+search+is+not+case%0A%09+++*+sensitive.+This+method+will+check+that+the+given+goal%0A%09+++*+is+not+a+substring+of+a+longer+string+(so,+for%0A%09+++*+example,+%22I+know%22+does+not+contain+%22no%22%29.+The+search%0A%09+++*+begins+at+the+beginning+of+the+string.%0A%09+++*+%0A%09+++*+%40param+statement%0A%09+++*++++++++++++the+string+to+search%0A%09+++*+%40param+goal%0A%09+++*++++++++++++the+string+to+search+for%0A%09+++*+%40return+the+index+of+the+first+occurrence+of+goal+in%0A%09+++*+++++++++statement+or+-1+if+it's+not+found%0A%09+++*/%0A%09++private+int+findKeyword(String+statement,+String+goal%29%0A%09++%7B%0A%09%09+return+findKeyword(statement,+goal,+0%29%3B%0A%09++%7D%0A%0A%09++/**%0A%09+++*+Pick+a+default+response+to+use+if+nothing+else+fits.%0A%09+++*+%0A%09+++*+%40return+a+non-committal+string%0A%09+++*/%0A%09++private+String+getRandomResponse(%29%0A%09++%7B%0A%09%09+final+int+NUMBER_OF_RESPONSES+%3D+4%3B%0A%09%09+double+r+%3D+Math.random(%29%3B%0A%09%09+int+whichResponse+%3D+(int%29+(r+*+NUMBER_OF_RESPONSES%29%3B%0A%09%09+String+response+%3D+%22%22%3B%0A%0A%09%09+if+(whichResponse+%3D%3D+0%29%0A%09%09+%7B%0A%09%09+%09response+%3D+%22Interesting,+tell+me+more.%22%3B%0A%09%09+%7D%0A%09%09+else+if+(whichResponse+%3D%3D+1%29%0A%09%09+%7B%0A%09%09+%09response+%3D+%22Hmmm.%22%3B%0A%09%09+%7D%0A%09%09+else+if+(whichResponse+%3D%3D+2%29%0A%09%09+%7B%0A%09%09+%09response+%3D+%22Do+you+really+think+so%3F%22%3B%0A%09%09+%7D%0A%09%09+else+if+(whichResponse+%3D%3D+3%29%0A%09%09+%7B%0A%09%09+%09response+%3D+%22You+don't+say.%22%3B%0A%09%09+%7D%0A%0A%09%09+return+response%3B%0A%09++%7D%0A%09++%0A%09++public+static+void+main(String%5B%5D+args%29%0A%09++%7B%0A%09%09Magpie3+maggie+%3D+new+Magpie3(%29%3B%0A%09%09%0A%09%09maggie.findKeyword(%22yesterday+is+today's+day+before.%22,+%22day%22,+0%29%3B%0A%09%09%09%0A%09++%7D%0A%0A+++%7D&mode=display&origin=opt-frontend.js&cumulative=false&heapPrimitives=false&textReferences=false&py=java&rawInputLstJSON=%5B%5D&curInstr=0>`_.

It may take a minute or two to load.  Click the forward button to execute the next statement (the one with the red arrow).

Exercise: Use the new method
-----------------------------

Repeat the changes you made to the program in Activity 2, using this new method to detect keywords.

Questions: Prepare for the next activity
-------------------------------------------

Single keywords are interesting, but better chatbots look for groups of words. Consider statements like “I
like cats,” “I like math class,” and “I like Spain.” All of these have the form “I like something.” The
response could be “What do you like about something?” The next activity will expand on these groups.
You will get to add one of your own, so it’s a good idea to start paying close attention to common
phrases in your own conversations.



