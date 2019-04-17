import javax.swing.*;
import java.awt.event.*;
import java.util.*;

public class Main {
  public static void main(String[] args) {  
    World world = new World();
    Turtle t = new Turtle(world);
    t.forward(100);
    t.turnRight();
    t.forward(100);
    t.turnRight();
    t.forward(100);
    world.show(true); 
  }
}