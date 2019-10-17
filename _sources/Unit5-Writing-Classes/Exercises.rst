Exercises
=========

Coming soon

.. .. mchoice:: qsh_3
   :practice: T
   :answer_a: Lasagna Meow Screeech
   :answer_b: Meow Screeech Lasagna
   :answer_c: Screeech Meow Lasagna
   :answer_d: Lasagna Screeech Meow
   :correct: b
   :feedback_a: The baseclass constructor runs first so Animal doesn't have one so then it goes to Cat's constructor and then Garfield's constructor
   :feedback_b: The baseclass constructor runs first so Animal doesn't have one so then it goes to Cat's constructor and then Garfield's constructor
   :feedback_c: The baseclass constructor runs first so Animal doesn't have one so then it goes to Cat's constructor and then Garfield's constructor
   :feedback_d: The baseclass constructor runs first so Animal doesn't have one so then it goes to Cat's constructor and then Garfield's constructor

   What is the output of the following code?

   .. code-block:: java

    class Animal
    {
        void someSound()
        {
            System.out.print("Screeech ");
        }
    }

    class Cat extends Animal
    {
        public Cat()
        {
            System.out.print("Meow ");
            super.someSound();
        }
    }

    class Garfield extends Cat
    {
        public Cat()
        {
            System.out.print("Lasagna ");
        }
    }
    public class MainClass
    {
        public static void main(String[] args)
        {
            Garfield garfield = new Garfield();
        }
    }

