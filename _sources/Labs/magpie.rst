.. qnum::
   :prefix: lab-1-
   :start: 1
   
.. highlight:: java
   :linenothreshold: 4

Lab Requirement
======================

As of 2014-2015 the Advanced Placement Computer Science A course must include at least 20 hours of hands-on labs.  Three labs were created as exemplars and can be used to satisfy this requirement, but teachers can do other labs instead of these three. The three labs are Magpie, Picture, and Elevens.  See https://apstudent.collegeboard.org/apcourse/ap-computer-science-a/course-details/lab-requirements for the student guides for each of these labs.  Your teacher will provide the lab code to you. The particular code in each of these labs will not be on the exam, but the concepts covered by the labs will be on the exam.

Magpie Lab
===============

The Magpie lab allows the student to work with the ``String`` class and conditionals with a **chatbot**.  A **chatbot** is a computer program that tries to hold a conversation with a user.  This chapter will walk you through the activities in the Magpie chatbot lab.  

The first activity in Magpie is to explore some existing chatbots.  

Activity 1: Exploring Chatbots
===============================

Go to https://sites.google.com/site/webtoolsbox/bots to try out some chatbots.  
   
Record the chatbot response to each of the following.

* Where do you come from?
* asdfghjkl;
* My mother and I talked last night.
* The weather is nice.
* I said no!

Ask the chatbot other questions. 

* Record the most interesting response.
* Record the most peculiar response.  

Work with another student or group to have two chatbots converse with each other.  Type the responses from one chatbot into the input area for the other and vice-versa.  

Keywords
==========

Some chatbots look for particular keywords and respond based on those keywords.  What are some of the keywords that your chatbot seems to be responding to?  Why do you think it responds to those keywords?  

Activity 2: Running the Magpie Code
====================================

Go to MagpieActivityStarterCode/activity2/ and open and compile MagpieRunner2.java and Magpie2.java.  Then run the main method in MagpieRunner2.  

Type in the following input and record its responses.  

* My mother and I talked last night.
* I said no!
* The weather is nice.
* Do you know my brother?

You can step through execution of a simplified version of this (one that has just one class and no scanner) using the Java Visualizer at `link <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=public+class+Magpie2%0A%7B%0A%09/**%0A%09+*+Get+a+default+greeting+%09%0A%09+*+%40return+a+greeting%0A%09+*/%0A%09public+String+getGreeting()%0A%09%7B%0A%09%09return+%22Hello,+let's+talk.%22%3B%0A%09%7D%0A%09%0A%09/**%0A%09+*+Gives+a+response+to+a+user+statement%0A%09+*+%0A%09+*+%40param+statement%0A%09+*++++++++++++the+user+statement%0A%09+*+%40return+a+response+based+on+the+rules+given%0A%09+*/%0A%09public+String+getResponse(String+statement)%0A%09%7B%0A%09%09String+response+%3D+%22%22%3B%0A%09%09if+(statement.indexOf(%22no%22)+%3E%3D+0)%0A%09%09%7B%0A%09%09%09response+%3D+%22Why+so+negative%3F%22%3B%0A%09%09%7D%0A%09%09else+if+(statement.indexOf(%22mother%22)+%3E%3D+0%0A%09%09%09%09%7C%7C+statement.indexOf(%22father%22)+%3E%3D+0%0A%09%09%09%09%7C%7C+statement.indexOf(%22sister%22)+%3E%3D+0%0A%09%09%09%09%7C%7C+statement.indexOf(%22brother%22)+%3E%3D+0)%0A%09%09%7B%0A%09%09%09response+%3D+%22Tell+me+more+about+your+family.%22%3B%0A%09%09%7D%0A%09%09else%0A%09%09%7B%0A%09%09%09response+%3D+getRandomResponse()%3B%0A%09%09%7D%0A%09%09return+response%3B%0A%09%7D%0A%0A%09/**%0A%09+*+Pick+a+default+response+to+use+if+nothing+else+fits.%0A%09+*+%40return+a+non-committal+string%0A%09+*/%0A%09private+String+getRandomResponse()%0A%09%7B%0A%09%09final+int+NUMBER_OF_RESPONSES+%3D+4%3B%0A%09%09double+r+%3D+Math.random()%3B%0A%09%09int+whichResponse+%3D+(int)(r+*+NUMBER_OF_RESPONSES)%3B%0A%09%09String+response+%3D+%22%22%3B%0A%09%09%0A%09%09if+(whichResponse+%3D%3D+0)%0A%09%09%7B%0A%09%09%09response+%3D+%22Interesting,+tell+me+more.%22%3B%0A%09%09%7D%0A%09%09else+if+(whichResponse+%3D%3D+1)%0A%09%09%7B%0A%09%09%09response+%3D+%22Hmmm.%22%3B%0A%09%09%7D%0A%09%09else+if+(whichResponse+%3D%3D+2)%0A%09%09%7B%0A%09%09%09response+%3D+%22Do+you+really+think+so%3F%22%3B%0A%09%09%7D%0A%09%09else+if+(whichResponse+%3D%3D+3)%0A%09%09%7B%0A%09%09%09response+%3D+%22You+don't+say.%22%3B%0A%09%09%7D%0A%0A%09%09return+response%3B%0A%09%7D%0A+++%0A+++public+static+void+main(String%5B%5D+args)%0A%09%7B%0A%09%09Magpie2+maggie+%3D+new+Magpie2()%3B%0A%09%09%0A%09%09System.out.println+(maggie.getGreeting())%3B%0A++++++System.out.println(maggie.getResponse(%22My+mother+and+I+talked+last+night.%22))%3B%0A++++++System.out.println(maggie.getResponse(%22I+said+no!%22))%3B%0A++++++System.out.println(maggie.getResponse(%22The+weather+is+nice.%22))%3B%0A++++++System.out.println(maggie.getResponse(%22Do+you+know+my+brother%3F%22))%3B+%0A+++%7D%0A%09%0A%7D%0A&mode=display&curInstr=0.>`_  You can click on the Last button to just execute the code and see the output.  You can click on the First button to go back to the start and then click on the Forward button to step through the execution.  

As you can see the ``getResponse`` method of Magpie2.java looks for certain keywords like ``"mother"`` and ``"brother"``.  Why do you think the response to "Do you know my brother?" isn't "Tell me more about your family."?  Step through the execution using the Forward button at `link <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=public+class+Magpie2%0A%7B%0A%09/**%0A%09+*+Get+a+default+greeting+%09%0A%09+*+%40return+a+greeting%0A%09+*/%0A%09public+String+getGreeting()%0A%09%7B%0A%09%09return+%22Hello,+let's+talk.%22%3B%0A%09%7D%0A%09%0A%09/**%0A%09+*+Gives+a+response+to+a+user+statement%0A%09+*+%0A%09+*+%40param+statement%0A%09+*++++++++++++the+user+statement%0A%09+*+%40return+a+response+based+on+the+rules+given%0A%09+*/%0A%09public+String+getResponse(String+statement)%0A%09%7B%0A%09%09String+response+%3D+%22%22%3B%0A%09%09if+(statement.indexOf(%22no%22)+%3E%3D+0)%0A%09%09%7B%0A%09%09%09response+%3D+%22Why+so+negative%3F%22%3B%0A%09%09%7D%0A%09%09else+if+(statement.indexOf(%22mother%22)+%3E%3D+0%0A%09%09%09%09%7C%7C+statement.indexOf(%22father%22)+%3E%3D+0%0A%09%09%09%09%7C%7C+statement.indexOf(%22sister%22)+%3E%3D+0%0A%09%09%09%09%7C%7C+statement.indexOf(%22brother%22)+%3E%3D+0)%0A%09%09%7B%0A%09%09%09response+%3D+%22Tell+me+more+about+your+family.%22%3B%0A%09%09%7D%0A%09%09else%0A%09%09%7B%0A%09%09%09response+%3D+getRandomResponse()%3B%0A%09%09%7D%0A%09%09return+response%3B%0A%09%7D%0A%0A%09/**%0A%09+*+Pick+a+default+response+to+use+if+nothing+else+fits.%0A%09+*+%40return+a+non-committal+string%0A%09+*/%0A%09private+String+getRandomResponse()%0A%09%7B%0A%09%09final+int+NUMBER_OF_RESPONSES+%3D+4%3B%0A%09%09double+r+%3D+Math.random()%3B%0A%09%09int+whichResponse+%3D+(int)(r+*+NUMBER_OF_RESPONSES)%3B%0A%09%09String+response+%3D+%22%22%3B%0A%09%09%0A%09%09if+(whichResponse+%3D%3D+0)%0A%09%09%7B%0A%09%09%09response+%3D+%22Interesting,+tell+me+more.%22%3B%0A%09%09%7D%0A%09%09else+if+(whichResponse+%3D%3D+1)%0A%09%09%7B%0A%09%09%09response+%3D+%22Hmmm.%22%3B%0A%09%09%7D%0A%09%09else+if+(whichResponse+%3D%3D+2)%0A%09%09%7B%0A%09%09%09response+%3D+%22Do+you+really+think+so%3F%22%3B%0A%09%09%7D%0A%09%09else+if+(whichResponse+%3D%3D+3)%0A%09%09%7B%0A%09%09%09response+%3D+%22You+don't+say.%22%3B%0A%09%09%7D%0A%0A%09%09return+response%3B%0A%09%7D%0A+++%0A+++public+static+void+main(String%5B%5D+args)%0A%09%7B%0A%09%09Magpie2+maggie+%3D+new+Magpie2()%3B%0A%09%09%0A%09%09System.out.println+(maggie.getGreeting())%3B%0A++++++System.out.println(maggie.getResponse(%22My+mother+and+I+talked+last+night.%22))%3B%0A++++++System.out.println(maggie.getResponse(%22I+said+no!%22))%3B%0A++++++System.out.println(maggie.getResponse(%22The+weather+is+nice.%22))%3B%0A++++++System.out.println(maggie.getResponse(%22Do+you+know+my+brother%3F%22))%3B+%0A+++%7D%0A%09%0A%7D%0A&mode=display&curInstr=0.>`_ in the Java Visualizer to figure out why.  Then try to modify the code to respond correctly.

The response to "The weather is nice." is one of the random responses. Modify the code to add other random responses.

Activity 2: Code
====================================

Here is the code for MagpieRunner2.java.  It uses the ``Scanner`` class to read input from the user.  The ``Scanner`` class is not on the AP CS A exam.

.. code-block:: java
  
  import java.util.Scanner;

  /**
   * A simple class to run the Magpie class.
   * @author Laurie White
   * @version April 2012
   */
  public class MagpieRunner2
  {

     /**
	  * Create a Magpie, give it user input, and print its replies.
  	  */
	 public static void main(String[] args)
	 {
	    Magpie2 maggie = new Magpie2();
		
		System.out.println (maggie.getGreeting());
		Scanner in = new Scanner (System.in);
		String statement = in.nextLine();
		
		while (!statement.equals("Bye"))
		{
			System.out.println (maggie.getResponse(statement));
			statement = in.nextLine();
		}
	 }
  }

Here is the code for Magpie2.java.  

.. code-block:: java

  public class Magpie2
  {
	/**
     * Get a default greeting 	
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
		if (statement.indexOf("no") >= 0)
		{
			response = "Why so negative?";
		}
		else if (statement.indexOf("mother") >= 0
				|| statement.indexOf("father") >= 0
				|| statement.indexOf("sister") >= 0
				|| statement.indexOf("brother") >= 0)
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
	 * Pick a default response to use if nothing else fits.
	 * @return a non-committal string
	 */
	private String getRandomResponse()
	{
		final int NUMBER_OF_RESPONSES = 4;
		double r = Math.random();
		int whichResponse = (int)(r * NUMBER_OF_RESPONSES);
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
   }


