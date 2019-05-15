import javax.swing.*;
import java.awt.event.*;
import java.util.*;
import java.awt.*;

public class Main {
  public static void main(String[] args) {  
    World world = new World(400,400);
    Turtle yertle = new Turtle(world);
    // Add your own code in here and save in your repl account 
    yertle.forward();
    
    world.setVisible(true);
  }
}
