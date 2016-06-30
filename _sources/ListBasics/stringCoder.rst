.. qnum::
   :prefix:  8-18-
   :start: 1

Free Response - String Coder
============================

..	index::
	single: stringcoder
    single: free response

The following is a free response question from 2008.  It was question 2 on the exam.  You can see all the free response questions from past exams at https://apstudent.collegeboard.org/apcourse/ap-computer-science-a/exam-practice.

**Question 2.**  Consider a method of encoding and decoding words that is based on a *master string*. This master string
will contain all the letters of the alphabet, some possibly more than once. An example of a master string is
"sixtyzipperswerequicklypickedfromthewovenjutebag". This string and its indexes are
shown below.

.. figure:: Figures/stringCoder.png
    :width: 709px
    :align: center
    :figclass: align-center

An encoded string is defined by a list of *string parts*. A string part is defined by its starting index in the
master string and its length. For example, the string "overeager" is encoded as the list of string parts
[ (37, 3), (14, 2), (46, 2), (9, 2) ] denoting the substrings "ove", "re", "ag", and "er".

String parts will be represented by the *StringPart* class shown below.

.. code-block:: java

   public class StringPart
   {
    /** @param start the starting position of the substring in a master string
     *  @param length the length of the substring in a master string
     */
    public StringPart(int start, int length)
    { /* implementation not shown */ }

    /** @return the starting position of the substring in a master string
     */
    public int getStart()
    { /* implementation not shown */ }

    /** @return the length of the substring in a master string
     */
    public int getLength()
    { /* implementation not shown */ }

    // There may be instance variables, constructors, and methods that are not shown.
   }

The class *StringCoder* provides methods to encode and decode words using a given master string. When
encoding, there may be multiple matching string parts of the master string. The helper method *findPart* is
provided to choose a string part within the master string that matches the beginning of a given string.

.. code-block:: java

   public class StringCoder
   {
    private String masterString;

    /** @param master the master string for the StringCoder
     *  Precondition: the master string contains all the letters of the alphabet
     */
    public StringCoder(String master)
    { masterString = master; }

    /** @param parts an ArrayList of string parts that are valid in the master string
     *  Precondition: parts.size() > 0
     *  @return the string obtained by concatenating the parts of the master string
     */
    public String decodeString(ArrayList<StringPart> parts)
    { /* to be implemented in part (a) */ }

    /** @param str the string to encode using the master string
     *  Precondition: all of the characters in str appear in the master string;
     *  str.length() > 0
     *  @return a string part in the master string that matches the beginning of str.
     *  The returned string part has length at least 1.
     */
    private StringPart findPart(String str)
    { /* implementation not shown */ }

    /** @param word the string to be encoded
     *  Precondition: all of the characters in word appear in the master string;
     *  word.length() > 0
     *  @return an ArrayList of string parts of the master string that can be combined
     *  to create word
     */
    public ArrayList<StringPart> encodeString(String word)
    { /* to be implemented in part (b) */ }

      // There may be instance variables, constructors, and methods that are not shown.
    }

Solve Part A
------------

(a) Write the *StringCoder* method *decodeString*. This method retrieves the substrings in the master
    string represented by each of the *StringPart* objects in *parts*, concatenates them in the order in
    which they appear in *parts*, and returns the result.

.. activecode:: FRQStringCoderA
   :language: java

   /** @param parts an ArrayList of string parts that are valid in the master string
    *  Precondition: parts.size() > 0
    *  @return the string obtained by concatenating the parts of the master string
    */
   public String decodeString(ArrayList<StringPart> parts)


Solve Part B
------------

(b) Write the *StringCoder* method *encodeString*. A string is encoded by determining the substrings
    in the master string that can be combined to generate the given string. The encoding starts with a string part
    that matches the beginning of the word, followed by a string part that matches the beginning of the rest of
    the word, and so on. The string parts are returned in an array list in the order in which they appear in *word*.

The helper method *findPart* must be used to choose matching string parts in the master string.

Complete method *encodeString* below.

.. activecode:: FRQStringCoderB
   :language: java

   /** @param word the string to be encoded
    * Precondition: all of the characters in word appear in the master string;
    * word.length() > 0
    * @return an ArrayList of string parts of the master string that can be combined
    * to create word
    */
   public ArrayList<StringPart> encodeString(String word)
