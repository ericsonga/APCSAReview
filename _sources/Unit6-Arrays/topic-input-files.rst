.. qnum::
   :prefix: 6-3-
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

Files are used to store data in software that we use every day. When you play a game on your computer, your game progress is saved in a *file*. The next time you play that game, your game progress is loaded in from that file. When you write a paper, your words are saved in a file that can then be uploaded or emailed to your teacher. 

A **file** is storage for data that *persists* when the program is not running. The data in a file can be retrieved during program execution. For example in this unit, you created a ``SpellChecker`` class that reads in a dictionary file into an array of words, and a ``spellcheck`` method that uses this array to verify if a word is spelled correctly. Input files like the dictionary enable us to handle large amounts of data efficiently. Instead of manually entering data into our program every time it runs, we can store the data in a file and read it as needed. Another benefit of using files is the ability to separate data from the code, allowing for more modular and flexible software design. 

Java ``File``, ``Scanner``, and ``IOException`` Classes
----------------------------------------------------

In this lesson, you will learn how to read text files in Java. A file can be connected to a Java program using the ``File`` class from the ``java.io`` package. A file can be opened by creating a ``File`` object, using the name of the file or the complete path to the file, as the argument of the constructor, ``File(String str)``.

.. code-block:: java

   import java.io.*;
   ...
   File myFile = new File("data.txt");

After opening a file, the  ``Scanner`` class can be used to read in the data from the file line by line. The ``Scanner`` class is part of the ``java.util`` package and has a constructor that takes a ``File`` object as an argument to create an input stream from the file.

But what if you misspell the file name or the file does not exist? The ``Scanner`` constructor will throw a ``FileNotFoundException`` if it cannot find the file. This is a type of ``IOException``, which is a general error that is also thrown when the input does not match expectations.  We've seen other exceptions before, like ``ArrayIndexOutOfBoundsException`` and ``NullPointerException``. Exceptions are a way for Java to handle errors that occur during program execution. When an exception is thrown, the program stops executing and the exception is *thrown* back to the calling method. If the exception is not handled, the program will terminate. Java uses ``try/catch`` blocks to handle exceptions, but a shortcut is to use the ``throws`` keyword in the method header to indicate that the method may throw an exception. You can just add **throws IOException** to the end of the method header. Here is an example that sets up an input file in the main method and throws an exception. 

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

Reading in Data
------------------

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

The following example reads in a data file about Pokemon and prints out the first 10 lines in the file. This file has the extension *csv* which stands for **Comma Separated Values**. All spreadsheets can be saved as csv text files, and spreadsheet software can easily open csv files as spreadsheets.

.. datafile:: pokemon.csv
   :fromfile: ../../_static/pokemon.csv

|CodingEx| **Coding Exercise**

.. activecode:: read-pokemon-file
   :language: java
   :datafile: pokemon.csv

   Complete the code in the main method below to read in each line of the file and print it out. :autograde: unittest to be added.
   ~~~~
   import java.io.*;
   import java.util.*;
   
   public class ReadData 
   {
       public static void main(String[] args) throws IOException
       {
           File myFile = new File("pokemon.csv");
           Scanner scan = new Scanner(myFile);
           // 1. Add in the loop condition that checks if scan has another line of input
           while (         )
           {
               // 2. Read in the next line of the file
   
               // 3. Print out the line
      
            }
            scan.close();           
      }
   }

Saving Data into an Array of Objects
--------------------------------------

In the ``SpellChecker`` class, we read the data file of words into a dictionary array with the following code:

.. code-block:: java

   String[] dictionary = new String[10000];
   int i = 0;
   while(scan.hasNextLine())
   {
        String line = scan.nextLine();
        dictionary[i] = line;
        i++;
    }
    
However, the Pokemon csv file contains more than just one piece of data per line. Each line contains lots of data like its name, type, speed, etc. separated by commas. With csv files, it's better to split each line along the commas and save all of this data into the attributes of an object. 

In Java, the String class provides a useful method called ``split(String delimeter)`` that allows us to split a string into an array of substrings based on a specified **delimiter** which is a character like a comma that that separates the units of data. This method returns a String array where each element represents a field of data from the line.  Here is an example of how to use the split method to split a line of data from the Pokemon file into identifiable chunks of data:

.. code-block:: java

   scan.nextLine(); // skip the first line of headings
   int i = 0;
   while(scan.hasNextLine())
   {
        // Read a line of data from the file
        String line = scan.nextLine();
        // Split the line into an array of Strings
        String[] data = line.split(",");
        // Identify the data 
        // data: Number,Name,Type1,Type2,HP,Attack,Defense,Speed,PNG,Description 
        String name = data[1];
        String type1 = data[2];
        // Numerical data can be saved as numbers to do math     
        int speed = Integer.parseInt(data[7]);
        String imageFile = data[8];

        // The next step is to save this data into an object 
    }

Note that the first line in the code above ``scan.nextLine()`` is used to read and ignore the first line of the file because it contains the headings, Number,Name,Type1,Type2,etc. Then, in the loop, we can read in each line of data and split it into an array of Strings. The first element of the array is the Pokemon's number, the second element is the name, the third element is the type1, etc. We only need to save the data that we want to use. In this case, we want to save the name, type1, speed, and imageFile. If we want to do math with the speed, we can convert it to an int using the ``Integer.parseInt`` method.

Try the exercise below to display Pokemon images using the urls saved in the file.

|CodingEx| **Coding Exercise**

.. activecode:: pokeImages
   :language: java
   :datafile: pokemon.csv

   This program reads in some of the data from the pokemon file into a namesArray and a imageURLarray. Complete the readData method to save the data into the arrays. Complete display method to print out a random pokemon name and its image. :autograde: unittest to be added.
   ~~~~
   import java.io.*;
   import java.util.*;
   
   public class PokeImages 
   {
       private String namesArray[] = new String[151];
       private String imageURLarray[] = new String[151];

       public static void main(String[] args) throws IOException
       {
            PokeImages obj = new PokeImages();
            obj.readData();
            obj.display();
        }

        /* Complete the readData method to save the data from the file into the namesArray and imageURLarray */        
        public void readData() throws IOException
        {
            File myFile = new File("pokemon.csv");
            Scanner scan = new Scanner(myFile);
            scan.nextLine(); // skip the first line of headings
            int i = 0;
            while(scan.hasNextLine())
            {
                // Read a line of data from the file
                String line = scan.nextLine();
                // Split the line into an array of Strings
                String[] data = line.split(",");
                // Identify the data 
                // data: Number,Name,Type1,Type2,HP,Attack,Defense,Speed,PNG,Description 
                String name = data[1];
                String imageFile = data[8];
               
                // Save the data into the arrays
               


                i++;
            }          
            scan.close();           
        }
   
        /**
         * Complete the display method to display a random pokemon name and image
         */
        public void display()
        {
            // 1. Pick a random number between 0 and the size of the arrays
           

            // 2. Print out the name at that index in the namesArray

            // 3. Print out the image at that index in the imageURLarray 
            //    using the method printHTMLimage(String url) below
            
        
        }
        // This method will just work in Active Code which interprets html
        public void printHTMLimage(String url)
        {
            System.out.print("<img src=" + url + " width=300px />");
       }
    }

The final step is to save all of this data into an object. The following code creates a Pokemon object from the data and saves it into an array of Pokemon objects.

.. code-block:: java

        // Create a Pokemon object from the data 
        Pokemon p = new Pokemon(name, type1, speed, imageFile);
        // Save the object into an array
        pokemonArray[i] = p;
        i++;

Let's try to put together this code in the programming challenge below.

|Groupwork| Programming Challenge : Pokemon Array 
------------------------------------------------------

In this challenge, you will first design a class called ``Pokemon`` that has at least 3 attributes that can be found in the pokemon file. Then, read in the data from the pokemon file and save it into an array of Pokemon objects. Finally, do something interesting with the data using a loop, for example you could find the Pokemon with the highest speed or print out all the Pokemon of a certain type.

.. activecode:: challenge-pokemon-file
   :language: java
   :datafile: pokemon.csv
   
   Design the class Pokemon that has at least 3 attributes that can be found in the pokemon file. Then, read in the data from the pokemon file and save it into an array of Pokemon objects. Finally, do something interesting with the data using a loop, for example you could find the Pokemon with the highest speed or print out all the Pokemon of a certain type.
   ~~~~
   import java.io.*;
   import java.util.*;
   
   class Pokemon
   {
         // Add at least 3 attributes of a Pokemon found in the data file
         
         // Add a constructor that initializes the attributes of a Pokemon
         
         // Add any getters that you need      
   }

   public class PokemonArray 
   {
       private Pokemon pokemonArray[] = new Pokemon[151];

       public static void main(String[] args) throws IOException
       {
            PokemonArray obj = new PokemonArray();
            // Call a method to read in the data
            // Call another method to do something with the data
        }
        
        // Write a method to read in the data
        // and save it into an array of Pokemon objects


        // Write a method that does something with the data
        // for example find the Pokemon with the highest speed 
        // or print out all the Pokemon of a certain type.
       
   
        
    }
