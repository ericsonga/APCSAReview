.. qnum::
   :prefix: lab-1b-
   :start: 1
   
.. highlight:: java
   :linenothreshold: 4


Activity 2: Running Simplified Magpie Code
===========================================

The activity asks you to enter the following as input using the ``Scanner`` class and record the responses.  But, instead you can run this simplified version below and just call the ``getResponse`` method which each string as input as shown in the ``main`` method below.  You can print the result.  

* My mother and I talked last night.
* I said no!
* The weather is nice.
* Do you know my brother?

You can also step through this simplified code `here <http://www.pythontutor.com/visualize.html#code=public+class+Magpie2%0A%7B%0A+++public+String+getGreeting(%29%0A+++%7B%0A+++++return+%22Hello,+let's+talk.%22%3B%0A+++%7D%0A%0A+++public+String+getResponse(String+statement%29%0A+++%7B%0A+++++String+response+%3D+%22%22%3B%0A+++++if+(statement.indexOf(%22no%22%29+%3E%3D+0%29+%7B%0A+++++++response+%3D+%22Why+so+negative%3F%22%3B%0A+++++%7D+else+if+(statement.indexOf(%22mother%22%29+%3E%3D+0%0A+++++++++++++++++%7C%7C+statement.indexOf(%22father%22%29+%3E%3D+0%0A+++++++++++++++++%7C%7C+statement.indexOf(%22sister%22%29+%3E%3D+0%0A+++++++++++++++++%7C%7C+statement.indexOf(%22brother%22%29+%3E%3D+0%29+%7B%0A+++++++response+%3D+%22Tell+me+more+about+your+family.%22%3B%0A+++++%7D+else+%7B%0A+++++++response+%3D+getRandomResponse(%29%3B%0A+++++%7D%0A+++++return+response%3B%0A+++%7D%0A%0A+++private+String+getRandomResponse(%29%0A+++%7B%0A+++++final+int+NUMBER_OF_RESPONSES+%3D+4%3B%0A+++++double+r+%3D+Math.random(%29%3B%0A+++++int+whichResponse+%3D+(int%29(r+*+NUMBER_OF_RESPONSES%29%3B%0A+++++String+response+%3D+%22%22%3B%0A%0A+++++if+(whichResponse+%3D%3D+0%29+%7B%0A+++++++response+%3D+%22Interesting,+tell+me+more.%22%3B%0A+++++%7D+else+if+(whichResponse+%3D%3D+1%29+%7B%0A+++++++response+%3D+%22Hmmm.%22%3B%0A+++++%7D+else+if+(whichResponse+%3D%3D+2%29+%7B%0A+++++++response+%3D+%22Do+you+really+think+so%3F%22%3B%0A+++++%7D+else+if+(whichResponse+%3D%3D+3%29+%7B%0A+++++++response+%3D+%22You+don't+say.%22%3B%0A+++++%7D%0A+++++return+response%3B%0A+++++++%7D%0A%0A+++public+static+void+main(String%5B%5D+args%29%0A+++%7B%0A+++++Magpie2+maggie+%3D+new+Magpie2(%29%3B%0A%0A+++++System.out.println(maggie.getGreeting(%29%29%3B%0A+++++System.out.println(maggie.getResponse(%22My+mother+and+I+talked+last+night.%22%29%29%3B%0A+++++System.out.println(maggie.getResponse(%22I+said+no!%22%29%29%3B%0A+++++System.out.println(maggie.getResponse(%22The+weather+is+nice.%22%29%29%3B%0A+++++System.out.println(maggie.getResponse(%22Do+you+know+my+brother%3F%22%29%29%3B%0A+++%7D%0A%7D&mode=display&origin=opt-frontend.js&cumulative=false&heapPrimitives=false&textReferences=false&py=java&rawInputLstJSON=%5B%5D&curInstr=9>`_.  Use the forward button to execute the next statement.  

.. activecode:: lc-magpie2
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

The response to "The weather is nice." is one of the random responses. Modify the code above to add other random responses.

Look at the code. See how the ``if`` statement assigns a value to the response and returns that response.
The method ``getRandomResponse`` generates a random number and uses that to assign the response.  

Exercises
============

Alter the code above to do the following.

* Have it respond “Tell me more about your pets” when the statement contains the word “dog” or “cat.” For example, a possible statement and response would be:

  * Statement: I like my cat Mittens.
  * Response: Tell me more about your pets.

* Have it respond favorably when it sees the name of your teacher. Be sure to use appropriate pronouns! For example, a possible statement and response would be:

  * Statement: Mr. Finkelstein is telling us about robotics.
  * Response: He sounds like a good teacher.

* Have the code check that the statement has at least one character. You can do this by using the ``trim`` method to remove spaces from the beginning and end, and then checking the length of the trimmed string. If there are no characters, the response should tell the user to enter something. For example, a possible statement and response would be:

  * Statement:
  * Response: Say something, please.
  
* Add two more noncommittal responses to the possible random responses.

* Pick three more keywords, such as “no” and “brother” and edit the ``getResponse`` method to respond to each of these.

* What happens when more than one keyword appears in a string? Consider the string “My mother has a dog but no cat.” Explain how to prioritize responses in the reply method.

.. shortanswer:: short-lab1b1
   :optional

   What happens when a keyword is included in another word? Consider statements like “I know all the state capitals” and “I like vegetables smothered in cheese.” Explain the problem with the responses to these statements.

Activity 2: Actual Code - (Optional)
====================================

Here is the actual code for MagpieRunner2.java.  It uses the ``Scanner`` class to read input from the user.  The ``Scanner`` class is not on the AP CS A exam.

If you want to run the actual code go to MagpieActivityStarterCode/activity2/ on your computer and open and compile MagpieRunner2.java and Magpie2.java in an Integrated Development Environment (IDE) like DrJava or JGrasp.  Then run the main method in MagpieRunner2.  

You can do all of Activity 2 with the actual code instead if you prefer.

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


