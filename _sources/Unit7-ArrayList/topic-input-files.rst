.. qnum::
   :prefix: 7-9-
   :start: 1

.. |CodingEx| image:: ../../_static/codingExercise.png
    :width: 30px
    :align: middle
    :alt: coding exercise


.. |Exercise| image:: ../../_static/exercise.png
    :width: 35
    :align: middle
    :alt: exercise


.. |Groupwork| image:: ../../_static/groupwork.png
    :width: 35
    :align: middle
    :alt: groupwork

.. raw:: html

   <div class="unit-time">
     <svg xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi
          bi-clock"
          viewBox="0 0 16 16">
       <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
       <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
     </svg> Time estimate: 45 min.
   </div>

Input Files (Optional)
=======================================

.. index::
   single: file
   single: input

Files are used to store data in software that we use every day. For example, when you play a game on your computer, your game progress is saved in a file. The next time you play that game, your game progress is loaded in from that file, so you can continue where you left off. In this lesson, you will learn how to read in data from a file in Java.

A **file** is storage for data that *persists* when the program is not running. The data in a file can be retrieved during program execution. For example in Unit 6, you created a ``SpellChecker`` class that reads in a dictionary file into an array of words, and a ``spellcheck`` method that uses this array to verify if a word is spelled correctly. Input files like the dictionary enable us to handle large amounts of data efficiently. Instead of manually entering data into our program every time it runs, we can store the data in a file and read it as needed. Another benefit of using files is the ability to separate the data from the code, allowing for more modular and flexible software design. 

Java ``File``, ``Scanner``, and ``IOException`` Classes
--------------------------------------------------------

One way to connect a file to a Java program is to use the ``File`` class from the ``java.io`` package. This was used in Java before version 7 and is used by the College Board. A newer library ``nio`` will be presented in the next sections.  

A file can be opened by creating a ``File`` object, using the name of the file or the complete path to the file, as the argument of the constructor, ``File(String str)``.

.. code-block:: java

   import java.io.*;
   ...
   File myFile = new File("data.txt");

After opening a file, the  ``Scanner`` class can be used to read in the data from the file line by line. The ``Scanner`` class is part of the ``java.util`` package and has a constructor that takes a ``File`` object as an argument to create an input stream from the file.

But what if you misspell the file name or the file does not exist? The ``Scanner`` constructor will throw a ``FileNotFoundException`` if it cannot find the file. This is a type of ``IOException``, which is a general error that is also thrown when the input does not match expectations.  We've seen other exceptions before, like ``ArrayIndexOutOfBoundsException`` and ``NullPointerException``. Exceptions are a way for Java to handle runtime errors that occur during program execution. When an exception is thrown, the program stops executing and the exception is *thrown* back to the calling method. If the exception is not handled, the program will terminate. Java uses ``try/catch`` blocks to handle exceptions, but you can use the ``throws`` keyword in the method header to indicate that the method may throw an exception instead of handling it there. The **throws IOException** statement is added to the end of the method header. Here is an example that sets up an input file in the main method and throws an exception. 

.. code-block:: java

   import java.io.*;
   import java.util.*;
   
   public class FileIO 
   {
                                             // Notice throws IOException here
      public static void main(String[] args) throws IOException
      {
         File myFile = new File("data.txt");
         Scanner scan = new Scanner(myFile);
         ...

         scan.close();
      }
   }

Try the following exercise to practice reading in a file. Notice the compiler error "unreported exception FileNotFoundException; must be caught or declared to be thrown". Add **throws exception** to the end of the method header to fix the error.


|CodingEx| **Coding Exercise**

.. activecode:: throws-exception-exercise
   :language: java
   :datafile: dictionary.txt

   Run the code below to see the error message. Add **throws exception** to the end of the method header to fix the error. :autograde: unittest to be added.
   ~~~~
   import java.io.*;
   import java.util.*;
   
   public class FileIO 
   {
       public static void main(String[] args) 
       {
           File myFile = new File("dictionary.txt");
           Scanner scan = new Scanner(myFile);
           System.out.println("The first line of the file is " + scan.nextLine() );
           scan.close();
      }
   }

Reading in Data with Scanner
-----------------------------

Once the file is opened, the data can be read using ``Scanner`` methods. For example, the method, ``nextLine`` will read the next line of input and returns it as a ``String``. Here are the methods used in the Scanner file to read all types of input: 

- ``Scanner(File f)`` the Scanner constructor that accepts a File for reading.
- ``boolean hasNext()`` returns true if there is a next item to read in the file or input source; false otherwise.
- ``String nextLine()`` returns the next line of text up until the end of the line as a String read from the file or input source; returns null if there is no next line.
- ``String next()`` returns the next String up until a white space read from the file or input source. 
- ``int nextInt()`` returns the next int read from the file or input source. If the next int does not exist, it will result in an ``InputMismatchException``. Note that this method does not read the end of the line, so the next call to ``nextLine()`` will return the rest of the line which will be empty.
- ``double nextDouble()`` returns the next double read from the file or input source.
- ``boolean nextBoolean()`` returns the next Boolean read from the file or input source.
- ``void close()`` closes the input stream.

After opening a file and connecting it to a ``Scanner`` object, a loop is usually used to read in each line of the file. A ``while`` loop can use the method ``hasNextLine`` as the loop condition to detect if the file still contains elements to
read. A loop with this condition will terminate when there are no more lines to read in the file. After the loop is finished reading the data, the ``close`` method from Scanner should be called to close the file.

.. code-block:: java

   while (scan.hasNextLine())
   {
      String line = scan.nextLine();
      ...
   }
   scan.close();

We can save a file into an array. In the ``SpellChecker`` class, we read the data file of words into a dictionary array with the following code. However, we had to know the number lines or words in the file to declare an array of the right size. 

.. code-block:: java

   String[] dictionary = new String[10000];
   int i = 0;
   while(scan.hasNextLine())
   {
        String line = scan.nextLine();
        dictionary[i] = line;
        i++;
    }

The following exercise reads in a data file about Pokemon and prints out the first 10 lines in the file. This file has the extension *csv* which stands for **Comma Separated Values**. All spreadsheets can be saved as CSV text files, and spreadsheet software can easily open CSV files as spreadsheets.

.. datafile:: pokemon.csv
   :fromfile: ../../_static/pokemon.csv

|CodingEx| **Coding Exercise**

.. activecode:: read-pokemon-file
   :language: java
   :datafile: pokemon.csv

   Complete the code in the main method below to read in the first 10 lines of the pokemon file using the Scanner class, save each line into the pokemonLines array, and print it out. :autograde: unittest to be added.
   ~~~~
   import java.io.*;
   import java.util.*;
   
   public class ReadData 
   {
       public static void main(String[] args) throws IOException
       {
           File myFile = new File("pokemon.csv");
           Scanner scan = new Scanner(myFile);
           String[] pokemonLines = new String[10];


           int i = 0;
           // 1. Add in the loop condition that checks if scan has another line of input
           //    and that i is less than 10.
           while (         )
           {
               // 2. Read in the next line of the file
   
               // 3. Assign the line to the ith element of the pokemonLines array
               
               // 4. Print out the line
      
               i++; // line count
            }
            scan.close();           
      }
   }

Reading in Files with ``java.nio.file``
----------------------------------------  

The ``java.nio.file`` package, added in Java version 7, provides a better and easier way to read in files. The ``Files`` class in this package has a method called ``readAllLines`` that reads all of the lines in a file and returns them as a ``List`` of ``String`` objects. The ``readAllLines`` method throws an ``IOException`` if the file cannot be read. Here's how you can use it with an ``ArrayList`` which is a type of ``List``.

.. code-block:: java

   import java.io.*;
   ...

   // This connects and reads in the file in 1 line of code!
   // It needs to be in a method that throws or handles IOException
   ArrayList<String> lines = Files.readAllLines(Paths.get("data.txt"));

The advantage of storing the file in a dynamic data structure like an ``ArrayList``, instead of an array with a set size, is that you do not need to know how many lines are in the file.  The ``ArrayList`` can grow in size as needed.

|CodingEx| **Coding Exercise**

.. activecode:: read-pokemon-file-nio
   :language: java
   :datafile: pokemon.csv

   Complete the code in the main method below to reads all lines of the file using ``Files.readAllLines`` into an ArrayList ``lines``. Add a loop that prints out the first 10 pokemon. :autograde: unittest to be added.
   ~~~~
   import java.io.*;
   import java.util.*;
   import java.nio.file.*;
   
   public class ReadData 
   {
       public static void main(String[] args) throws IOException
       {
           ArrayList<String> lines = Files.readAllLines(Paths.get("pokemon.csv"));
           // Add a loop that prints out the first 10 elements of the ArrayList lines
         

      }
   }
   

Object-Oriented Design with CSV Files
---------------------------------------------
    
If you take a look at the Pokemon CSV file, you'll notice that each line contains multiple data attributes separated by commas. These attributes include the Pokemon's name, type, speed, etc. Typically, the first line of a CSV file serves as the header, indicating the names of these attributes. To better organize and work with this data, we can create a ``Pokemon`` class that corresponds to these attributes using object-oriented design. A CSV data file can be saved into an ``ArrayList`` of ``Pokemon`` objects by splitting each line (except the header) into the attributes for one ``Pokemon`` object.

The Java ``String`` class provides a useful method called ``split(String delimeter)`` that allows us to split a string into an array of substrings based on a specified **delimiter** which is a character like a comma that separates the units of data. This method returns a String array where each element represents a field of data from the line.  Here is an example of how to use the split method to split a line of data from the Pokemon file into identifiable chunks of data. The first line of headers in the file indicates that the 0th element of the data array is the Pokemon's number, element 1 is the name, etc. We only need to save the data that we want to use. In this case, we want to save the name, type1, speed, and imageFile. If we want to do math with the speed, we can convert it to an int using the ``Integer.parseInt`` method.

.. code-block:: java

   // Split the line of data into an array of Strings
   String[] data = line.split(",");
   // Identify the data 
   // data: Number,Name,Type1,Type2,HP,Attack,Defense,Speed,PNG,Description 
   String name = data[1];
   String type1 = data[2];
   // Numerical data can be saved as numbers to do math     
   int speed = Integer.parseInt(data[7]);
   String imageFile = data[8];

Try the exercise below to display Pokemon images using the ``split`` method to extract names and urls saved in the file.

|CodingEx| **Coding Exercise**

.. activecode:: pokeImages
   :language: java
   :datafile: pokemon.csv

   This program reads in some of the data from the pokemon file into an ArrayList of lines. Complete the main method to print out a random pokemon name and its image using the split method. :autograde: unittest to be added.
   ~~~~
   import java.io.*;
   import java.util.*;
   import java.nio.file.*;

   public class PokeImages 
   {
       public static void main(String[] args) throws IOException
       {
           ArrayList<String> lines = Files.readAllLines(Paths.get("pokemon.csv"));
           // 1. pick a random number from 0 to the size of the ArrayList

           // 2. get the line of data at that random index

           // 3. Use the split method to find the name and image url in that line


           // 4. Print out the name


           // 5. Call the printHTMLimage(url) method below to print out the image
       
       }
            
        // This method will just work in Active Code which interprets html
        public void printHTMLimage(String url)
        {
            System.out.print("<img src=" + url + " width=300px />");
        }
    }


Once we have extracted the individual pieces of data from each line of the CSV file, the next step is to save this data into a ``Pokemon`` object. We must first create a ``Pokemon`` class with instance variables that correspond to the data attributes, and a constructor that initializes these variables. Assuming that we have already written the ``Pokemon`` class and constructor, the following code creates a Pokemon object from the data using its constructor and saves it into an ``ArrayList`` of ``Pokemon`` objects.

.. code-block:: java

    // Create an ArrayList of Pokemon objects
    ArrayList<Pokemon> pokemonList = new ArrayList<Pokemon>();

    // ... read in the file and split the lines of data into attributes ...

    // Create a Pokemon object from the data 
    Pokemon p = new Pokemon(name, type1, speed, imageFile);
    // Add the object to the ArrayList
    pokemonList.add(p)


Let's try to put together this code in the programming challenge below.

|Groupwork| Programming Challenge: Pokemon ArrayList 
------------------------------------------------------

In this challenge, you will read in the data from the pokemon file and save it into an ``ArrayList`` of ``Pokemon`` objects. 

1. Design a class called ``Pokemon``. Choose at least 3 attributes that can be found in the pokemon file for your class. Write a constructor that takes in these attributes as parameters and saves them into instance variables. You may need to add some getters as well.

2. Read in the data from the pokemon file. You can use ``Files.readAllLines`` or the ``Scanner`` class. 

3. Inside a loop, split each line into its attributes and create ``Pokemon`` objects using its constructor. Save the objects into the  ``Pokemon ArrayList``. 

4. Do something interesting with the data using a loop, for example you could find the Pokemon with the highest speed or print out all the Pokemon of a certain type.

.. activecode:: challenge-pokemon-file
   :language: java
   :datafile: pokemon.csv
   
   Design the class Pokemon that has at least 3 attributes that can be found in the pokemon file. Then, read in the data from the pokemon file, split each line, and save the data in an ``ArrayList`` of Pokemon objects. Finally, do something interesting with the data using a loop, for example you could find the Pokemon with the highest speed or print out all the Pokemon of a certain type.
   ~~~~
   import java.io.*;
   import java.util.*;
   
   class Pokemon
   {
         // Add at least 3 attributes of a Pokemon found in the data file
         
         // Add a constructor that initializes the attributes of a Pokemon
         
         // Add any getters that you need      
   }

   public class PokemonArrayList 
   {
       private ArrayList<Pokemon> pokemonList = new ArrayList<Pokemon>();

       public static void main(String[] args) throws IOException
       {
            PokemonArrayList obj = new PokemonArrayList();
            // Call a method to read in the data

            // Call another method to do something with the data
        }
        
        // Write a method to read in the data, split it into attributes,
        // and save it into an ArrayList of Pokemon objects


        // Write a method that does something with the data
        // for example find the Pokemon with the highest speed 
        // or print out all the Pokemon of a certain type.
       
   
        
    }
