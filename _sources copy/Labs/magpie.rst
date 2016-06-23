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

You can step through execution of a simplified version of this (one that has just one class and no scanner) using the code below.

.. activecode:: lcmp1
   :language: java
   
   public class Magpie2
   {
      public String getGreeting()
      {
        return "Hello, let's talk.";
      }
      
      public String getResponse(String statement)
      {
        String response = "";
        if (statement.indexOf("no") >= 0) {
          response = "Why so negative?";
        } else if (statement.indexOf("mother") >= 0
                    || statement.indexOf("father") >= 0
                    || statement.indexOf("sister") >= 0
                    || statement.indexOf("brother") >= 0) {
          response = "Tell me more about your family.";
        } else {
          response = getRandomResponse();
        }
        return response;
      }
      
      private String getRandomResponse()
      {
        final int NUMBER_OF_RESPONSES = 4;
        double r = Math.random();
        int whichResponse = (int)(r * NUMBER_OF_RESPONSES);
        String response = "";
        
        if (whichResponse == 0) {
          response = "Interesting, tell me more.";
        } else if (whichResponse == 1) {
          response = "Hmmm.";
        } else if (whichResponse == 2) {
          response = "Do you really think so?";
        } else if (whichResponse == 3) {
          response = "You don't say.";
        }
        return response;
	  }
      
      public static void main(String[] args)
      {
        Magpie2 maggie = new Magpie2();
        
        System.out.println(maggie.getGreeting());
        System.out.println(maggie.getResponse("My mother and I talked last night."));
        System.out.println(maggie.getResponse("I said no!"));
        System.out.println(maggie.getResponse("The weather is nice."));
        System.out.println(maggie.getResponse("Do you know my brother?"));
      }
   }

As you can see the ``getResponse`` method of Magpie2 looks for certain keywords like ``"mother"`` and ``"brother"``.  Why do you think the response to "Do you know my brother?" isn't "Tell me more about your family."?  See if you can modify the code above to respond correctly.

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


