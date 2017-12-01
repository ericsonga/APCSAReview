.. qnum::
   :prefix:  12-8-
   :start: 1
   
Hard Multiple Choice Questions
----------------------------------

These problems are harder than those you will see on the AP CS A exam.

.. mchoice:: qssm_1
   :answer_a: A B B C D 
   :answer_b: E D C B B A
   :answer_c: A B B C D E
   :answer_d: E D C B A B
   :answer_e: E D C B B
   :correct: c
   :feedback_a: This would be true if the for loop inside the main method did not interate through every value in the array.
   :feedback_b: This would be true if the conditional statement inside the for loop stated "if (key.compareTo(letters[i]) < 0)", because that would put the array in a reverse alphabetical order.
   :feedback_c: This is correct and it is an insertion sort that sorts the array in alphabetical order by using the compareTo() method.
   :feedback_d: This would be true if array was not modified at all in the main method.
   :feedback_e: This would be true if the conditional statement inside the for loop stated "if (key.compareTo(letters[i]) < 0)" and if the loop did not iterate through every item of the letters array, because that would put the array in a reverse alphabetical order. 

   What is printed when the following main method is executed?

   .. code-block:: java 
   
	public class AlphaSort {
		public static void main(String[] args) {
			int i, j;
			String key;
			String[] letters = {
				"E",
				"D",
				"C",
				"B",
				"A",
				"B"
			};
			for (j = 1; j < letters.length; j++) {
				key = letters[j];
				i = j - 1;
				while (i >= 0) {
				if (key.compareTo(letters[i]) > 0) {
				break;
				}
				letters[i + 1] = letters[i];
				i--;
				}
				letters[i + 1] = key;
			}
			for (int t = 0; t < letters.length; t++) {
				System.out.print((letters[t]) + "");
			}
		}
	}

You can step through the code above by clicking on the following `Ex-12-8-2 <https://cscircles.cemc.uwaterloo.ca/java_visualize/#code=%09public+class+AlphaSort+%7B%0A%09%09public+static+void+main(String%5B%5D+args)+%7B%0A%09%09%09int+i,+j%3B%0A%09%09%09String+key%3B%0A%09%09%09String%5B%5D+letters+%3D+%7B%0A%09%09%09%09%22E%22,%0A%09%09%09%09%22D%22,%0A%09%09%09%09%22C%22,%0A%09%09%09%09%22B%22,%0A%09%09%09%09%22A%22,%0A%09%09%09%09%22B%22%0A%09%09%09%7D%3B%0A%09%09%09for+(j+%3D+1%3B+j+%3C+letters.length%3B+j%2B%2B)+%7B%0A%09%09%09%09key+%3D+letters%5Bj%5D%3B%0A%09%09%09%09i+%3D+j+-+1%3B%0A%09%09%09%09while+(i+%3E%3D+0)+%7B%0A%09%09%09%09if+(key.compareTo(letters%5Bi%5D)+%3E+0)+%7B%0A%09%09%09%09break%3B%0A%09%09%09%09%7D%0A%09%09%09%09letters%5Bi+%2B+1%5D+%3D+letters%5Bi%5D%3B%0A%09%09%09%09i--%3B%0A%09%09%09%09%7D%0A%09%09%09%09letters%5Bi+%2B+1%5D+%3D+key%3B%0A%09%09%09%7D%0A%09%09%09for+(int+t+%3D+0%3B+t+%3C+letters.length%3B+t%2B%2B)+%7B%0A%09%09%09%09System.out.print((letters%5Bt%5D)+%2B+%22%22)%3B%0A%09%09%09%7D%0A%09%09%7D%0A%09%7D%0A&mode=display&curInstr=126>`_.
