

Parsons Problems for Experiments
-------------------------------------

Try to solve each of the following. Click the *Check Me* button to check each solution.  You will be told if your solution is too short, has a block in the wrong order, or you are using the wrong block.  Some of the problems have an extra block or two that aren't needed in the correct solution.  Try to solve these on your phone or other mobile device!

.. parsonsprob:: ex-array-nd-has22
   :numbered: left
   :adaptive:

   Create the function ``boolean has22(int[] arr)`` that takes an array of ints, ``arr``,
   and returns ``true`` if there are at least two items in the array ``arr`` that are adjacent
   and both equal to ``2``.
   For example, ``has22({1, 2, 2})`` returns ``true`` and ``has22({1, 2, 1, 2})`` returns ``false``.
   -----
   public boolean has22(int[] arr) {
   =====
       for (int i = 0; i < arr.length - 1; i++) {
   =====
           if (arr[i] == 2 && arr[i+1] == 2) {
   =====
               return true;
   =====
           }
   =====
       }
   =====
       return false;
   =====
   }

.. parsonsprob:: ex-array-wd-has22
   :numbered: left
   :adaptive:

   Create the function ``has22(int[] arr)`` that takes an array of ints, ``arr`` and
   returns ``true`` if there are at least two items in the array ``arr`` that are adjacent
   and both equal to ``2``.
   For example, ``has22({1, 2, 2})`` returns ``true`` and ``has22({1, 2, 1, 2})`` returns ``false``.
   -----
   public boolean has22(int[] arr) {
   =====
       for (int i = 0; i < arr.length - 1; i++) {
   =====
       for (int i = 0; i < arr.length; i++) { #paired: need to stop one less than the length since looking at current and next
   =====
           if (arr[i] == 2 && arr[i+1] == 2) {
   =====
           if (arr[i] == arr[i+1]) { #paired: need to check if equal to 2 as well
   =====
               return true;
   =====
           }
   =====
       }
   =====
       return false;
   =====
   }

.. activecode:: has22_written
    :language: java
    :autograde: unittest

    Write the function ``has22(int[] arr)`` that takes an array of ints, ``arr`` and
    returns ``true`` if there are at least two items in the array ``arr`` that are
    adjacent and both equal to ``2``.
    For example, ``has22({1, 2, 2})`` returns ``true`` and ``has22({1, 2, 1, 2})`` returns ``false``.
    ~~~~
    public class StudentCode
    {

        public static boolean has22(int[] arr)
        {

            // write  code here

        }

        public static void main(String[] args)
        {

            int[] arr = {1, 2, 2};
            System.out.println(has22(arr));
            int[] arr2 = {1, 2, 1, 2};
            System.out.println(has22(arr2));
        }
    }

    ====
    import static org.junit.Assert.*;

    import org.junit.After;
    import org.junit.Before;
    import org.junit.Test;

    import java.io.*;
    import java.nio.file.Files;
    import java.nio.file.Paths;

    public class has22Tester extends CodeTestHelper
    {
        @Test
        public void testMain() throws IOException
        {
            String output = getMethodOutput("main");
            String expect = "true";
            assertEquals("Output doesn't match", cleanString(expect), cleanString      (output));
        }

        @Test
        public void testHas22() throws IOException {
            StudentCode s = new StudentCode();
            assertEquals("Testing {1, 2, 2}", true, s.has22({1, 2, 2}));
            assertEquals("Testing {1, 2, 1, 2}", false, s.has22({1, 2, 1, 2}));
            assertEquals("Testing {1, 2, 3}", false, s.has22({1, 2, 3}));
            assertEquals("Testing {2, 1, 2}", false, s.has22({2, 1, 2}));
        }
    }

.. parsonsprob:: ex-array-wd-has3OddOrEven
   :numbered: left
   :adaptive:

   Create the function ``has3OddOrEven(int[] arr)`` that takes an array of ints, ``arr``
   and returns ``true`` if the array contains either 3 odd or even values that are adjacent.
   For example ``has3OddOrEven({2, 1, 3, 5})`` returns ``true`` and ``has3OddOrEven({2, 1, 2, 5})`` returns ``false``.
   -----
   public boolean has3OddOrEven(int[] arr) {
   =====
       int count = 0;
   =====
       for (int i = 0; i < arr.length - 1; i++) {
   =====
       for (int i = 0; i < arr.length - 2; i++) { #paired: need to stop two less than the length since looking at current and next two
   =====
           if (arr[i] % 2 == arr[i+1] % 2 && arr[i+1] % 2 == arr[i+2] % 2) {
   =====
               return true;
   =====
           }
   =====
       }
   =====
       return false;
   =====
   }

.. parsonsprob:: ex-array-nd-has3OddOrEven
   :numbered: left
   :adaptive:

   Create the function ``has3OddOrEven(int[] arr)`` that takes an array of ints, ``arr``
   and returns ``true`` if the array contains either 3 odd or even values that are adjacent.
   For example ``has3OddOrEven({2, 1, 3, 5})`` returns ``true`` and ``has3OddOrEven({2, 1, 2, 5})`` returns ``false``.
   -----
   public boolean has3OddOrEven(int[] arr) {
   =====
       int count = 0;
   =====
       for (int i = 0; i < arr.length - 2; i++) {
   =====
           if (arr[i] % 2 == arr[i+1] % 2 && arr[i+1] % 2 == arr[i+2] % 2) {
   =====
               return true;
   =====
           }
   =====
       }
   =====
       return false;
   =====
   }

.. activecode:: has3OddOrEven_written
    :language: java
    :autograde: unittest

    Write the function ``has3OddOrEven(int[] arr)`` that takes an array of ints, ``arr``
    and returns ``true`` if the array contains either 3 even or 3 odd values all next to each other.
    For example ``has3OddOrEven({2, 1, 3, 5})`` returns ``true`` and ``has3OddOrEven({2, 1, 2, 5})`` returns ``false``.
    ~~~~
    public class StudentCode
    {

        public static boolean has3OddOrEven(int[] arr)
        {

            // write code here
        }

        public static void main(String[] args)
        {

            int[] arr = {2, 1, 3, 5};
            System.out.println(has3OddOrEven(arr));
            int[] arr2 = {2, 1, 2, 5};
            System.out.println(has3OddOrEven(arr2));
        }
    }

    ====
    import static org.junit.Assert.*;

    import org.junit.After;
    import org.junit.Before;
    import org.junit.Test;

    import java.io.*;
    import java.nio.file.Files;
    import java.nio.file.Paths;

     public class has3OddOrEvenTester extends CodeTestHelper
    {
        @Test
        public void testMain() throws IOException
        {
            String output = getMethodOutput("main");
            String expect = "true";
            assertEquals("Output doesn't match", cleanString(expect), cleanString      (output));
        }

        @Test
        public void testHas3OddOrEven() throws IOException {
            StudentCode s = new StudentCode();
            assertEquals("Testing [2, 1, 3, 5]", true, s.has3OddOrEven([2, 1, 3, 5]));
            assertEquals("Testing [2, 1, 2, 5]", false, s.has3OddOrEven([2, 1, 2, 5]));
            assertEquals("Testing [2, 1, 2]", false, s.has3OddOrEven([2, 1, 2]));
            assertEquals("Testing [3, 1, 3]", true, s.has3OddOrEven([3, 1, 3]));
        }
    }


.. parsonsprob:: ex-array-nd-isascending
   :numbered: left
   :adaptive:

   Create the function ``isAscending(int[] arr)`` that takes an array of ints, ``arr`` and
   returns ``true`` if the all of the elements in the array are in ascending order.
   For example, ``isAscending({1, 2, 3})`` returns ``true`` and ``isAscending({1, 2, 3, 2})``
   returns ``false``.
   -----
   public boolean isAscending(int[] arr) {
   =====
       for (int i = 0; i < arr.length - 1; i++) {
   =====
           if (arr[i] > arr[i+1]) {
   =====
               return false;
   =====
           }
   =====
       }
   =====
       return true;
   =====
   }

.. parsonsprob:: ex-array-wd-isascending
   :numbered: left
   :adaptive:

   Create the function ``isAscending(int[] arr)`` that takes an array of ints, ``arr`` and
   returns ``true`` if the all of the elements in the array are in ascending order.
   For example, ``isAscending({1, 2, 3})`` returns ``true`` and ``isAscending({1, 2, 3, 2})``
   returns ``false``.
   -----
   public boolean isAscending(int[] arr) {
   =====
       for (int i = 0; i < arr.length-1; i++) {
   =====
       for (int i = 0; i < arr.length; i++) { #paired: need to stop one less than the length since looking at current and next
   =====
           if (arr[i] > arr[i+1]) {
   =====
               return false;
   =====
               return true; #paired: need to return false since a greater than relationship would indicate descending
   =====
           }
   =====
       }
   =====
       return true;
   =====
   }

.. activecode:: isAscending_written
    :language: java
    :autograde: unittest

    Write the function ``isAscending(int[] arr)`` that takes an array of ints, ``arr`` and
    returns ``true`` if the all of the elements in the array are in ascending order.
    For example, ``isAscending({1, 2, 3})`` returns ``true`` and ``isAscending({1, 2, 3, 2})``
    returns ``false``.
    ~~~~
    public class StudentCode
    {

        public static boolean isAscending(int[] arr)
        {

            // write code here

        }

        public static void main(String[] args)
        {

            int[] arr = {1, 2, 3};
            System.out.println(isAscending(arr));
            int[] arr2 = {1, 2, 3, 2};
            System.out.println(isAscending(arr2));
        }
    }

    ====
    import static org.junit.Assert.*;

    import org.junit.After;
    import org.junit.Before;
    import org.junit.Test;

    import java.io.*;
    import java.nio.file.Files;
    import java.nio.file.Paths;

    public class isAscendingTester extends CodeTestHelper
    {
        @Test
        public void testMain() throws IOException
        {
            String output = getMethodOutput("main");
            String expect = "true";
            assertEquals("Output doesn't match", cleanString(expect), cleanString      (output));
        }

        @Test
        public void testIsAscending() throws IOException {
            StudentCode s = new StudentCode();
            assertEquals("Testing {1, 2, 3}", true, s.isAscending({1, 2, 3}));
            assertEquals("Testing {1, 2, 3, 2}", false, s.isAscending({1, 2, 3, 2}));
            assertEquals("Testing {3, 2, 1}", false, s.isAscending({3, 2, 1}));
            assertEquals("Testing {1, 5, 10}", true, s.isAscending({1, 5, 10}));
        }
    }

.. parsonsprob:: ex-array-nd-isdescending
   :numbered: left
   :adaptive:

   Create the function ``isDescending(int[] arr)`` that takes an array of ints, ``arr`` and
   returns true if the all of the elements in the array are in descending order.
   For example, ``isDescending({3, 2, 1})`` returns ``true`` and ``isDescending({3, 2, 1, 2})``
   returns ``false``.
   -----
   public boolean isDescending(int[] arr) {
   =====
       for (int i = 0; i < arr.length - 1; i++) {
   =====
           if (arr[i] < arr[i+1]) {
   =====
               return false;
   =====
           }
   =====
       }
   =====
       return true;
   =====
   }

.. parsonsprob:: ex-array-wd-isdescending
   :numbered: left
   :adaptive:

   Create the function ``isDescending(int[] arr)`` that takes an array of ints, ``arr`` and
   returns true if the all of the elements in the array are in descending order.
   For example, ``isDescending({3, 2, 1})`` returns ``true`` and ``isDescending({3, 2, 1, 2})``
   returns ``false``.
   -----
   public boolean isDescending(int[] arr) {
   =====
       for (int i = 0; i < arr.length-1; i++) {
   =====
       for (int i = 0; i < arr.length; i++) { #paired: need to stop one less than the length since looking at current and next
   =====
           if (arr[i] < arr[i+1]) {
   =====
               return false;
   =====
               return true; #paired: need to return false since a less than relationship would indicate ascending
   =====
           }
   =====
       }
   =====
       return true;
   =====
   }

.. activecode:: isDescending_written
    :language: java
    :autograde: unittest

    Write the function ``isDescending(int[] arr)`` that takes an array of ints, ``arr``
    and returns true if the all of the elements in the array are in descending order.
    For example, ``isDescending({3, 2, 1})`` returns ``true`` and ``isDescending({3, 2, 1, 2})``
    returns ``false``.
    ~~~~
    public class StudentCode
    {

        public static boolean isDescending(int[] arr)
        {

            // write code here

        }

        public static void main(String[] args)
        {

            int[] arr = {3, 2, 1};
            System.out.println(isDescending(arr));
            int[] arr2 = {3, 2, 1, 2};
            System.out.println(isDescending(arr2));
        }
    }

    ====
    import static org.junit.Assert.*;

    import org.junit.After;
    import org.junit.Before;
    import org.junit.Test;

    import java.io.*;
    import java.nio.file.Files;
    import java.nio.file.Paths;

    public class isDescendingTester extends CodeTestHelper
    {
        @Test
        public void testMain() throws IOException
        {
            String output = getMethodOutput("main");
            String expect = "true";
            assertEquals("Output doesn't match", cleanString(expect), cleanString      (output));
        }

        @Test
        public void testIsDescending() throws IOException {
            StudentCode s = new StudentCode();
            assertEquals("Testing {3, 2, 1}", true, s.isDescending({3, 2, 1}));
            assertEquals("Testing {3, 2, 1, 2}", false, s.isDescending({3, 2, 1, 2}));
            assertEquals("Testing {1, 2, 3}", false, s.isDescending({1, 2, 3}));
            assertEquals("Testing {10, 5, 1}", true, s.isDescending({10, 5, 1}));
        }
    }

.. parsonsprob:: ex-array-nd-islevel
   :numbered: left
   :adaptive:

   Create the function ``isLevel(int[] arr, int x)`` that takes an array of ints, ``arr`` and returns ``false`` if the
   difference between any two adjacent values is greater than the passed value, ``x``.
   For example, ``isLevel({3, 4, 6}, 2)`` returns ``true`` and ``isLevel({3, 5, 8, 6}, 2)`` returns ``false``.
   -----
   public boolean isLevel(int[] arr, int x) {
   =====
       for (int i = 0; i < arr.length-1; i++) {
   =====
           if(arr[i+1]-arr[i] > x) {
   =====
               return false;
   =====
           }
   =====
       }
   =====
       return true;
   =====
   }

.. parsonsprob:: ex-array-wd-islevel
   :numbered: left
   :adaptive:

   Create the function ``isLevel(int[] arr, int x)`` that takes an array of ints, ``arr`` and returns ``false`` if the
   difference between any two adjacent values is greater than the passed value, ``x``.
   For example, ``isLevel({3, 4, 6}, 2)`` returns ``true`` and ``isLevel({3, 5, 8, 6}, 2)`` returns ``false``.
   -----
   public boolean isLevel(int[] arr, int x) {
   =====
       for (int i = 0; i < arr.length-1; i++) {
   =====
       for (int i = 0; i < arr.length; i++) { #paired: need to stop one less than length since we are comparing current element to next
   =====
           if(arr[i+1]-arr[i] > x) {
   =====
           if(arr[i+1]-arr[i] >= x) { #paired: need to check greater than only
   =====
               return false;
   =====
           }
   =====
       }
   =====
       return true;
   =====
   }

.. activecode:: isLevel_written
    :language: java
    :autograde: unittest

    Write the function ``isLevel(int[] arr, int x)`` that takes an array of ints, ``arr``
    and returns ``false`` if the difference between any two adjacent values is greater
    than a passed value, ``x``. For example, ``isLevel({3, 4, 6}, 2)`` returns ``true``
    and ``isLevel({3, 5, 8, 6}, 2)`` returns ``false``.
    ~~~~
    public class StudentCode
    {

        public static boolean isLevel(int[] arr, int x)
        {

            // write code here

        }

        public static void main(String[] args)
        {

            int[] arr = {3, 4, 6};
            System.out.println(isLevel(arr, 2));
            int[] arr = {3, 5, 8, 6};
            System.out.println(isLevel(arr, 2));
        }
    }

    ====
    import static org.junit.Assert.*;

    import org.junit.After;
    import org.junit.Before;
    import org.junit.Test;

    import java.io.*;
    import java.nio.file.Files;
    import java.nio.file.Paths;

    public class isLevelTester extends CodeTestHelper
    {
        @Test
        public void testMain() throws IOException
        {
            String output = getMethodOutput("main");
            String expect = "true";
            assertEquals("Output doesn't match", cleanString(expect), cleanString      (output));
        }

        @Test
        public void isLevel() throws IOException {
            StudentCode s = new StudentCode();
            assertEquals("Testing [3, 4, 3] and 2", true, s.isLevel([3, 4, 3], 2));
            assertEquals("Testing [3, 5, 7, 2] and 2", false, s.isLevel([3, 5, 7, 2], 2));
            assertEquals("Testing [3, 5, 7] and 3", true, s.isLevel([3, 5, 7], 3));
            assertEquals("Testing [3, 3, 3] and 1", true, s.isLevel([3, 3, 3], 1));
        }
    }
