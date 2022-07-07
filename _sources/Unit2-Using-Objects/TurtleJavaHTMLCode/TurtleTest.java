import java.util.*;

    public class TurtleTest
    {
      public static void main(String[] args)
      {
          World world = new World(300,300);
          Turtle timmy = new Turtle(world);
          timmy.setSpeed(25);
          
          timmy.forward(100);
          timmy.turnRight();
          timmy.forward(100);
          timmy.turnRight();
          timmy.forward(100);
          world.show(true); //delete true for no GIF
      }
    }