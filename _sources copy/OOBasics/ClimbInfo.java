/** 
 * @author Barb Ericson
 * ericson@cc.gatech.edu
 */
public class ClimbInfo 
{ 
  private String name;
  private int time;
  
  /** Creates a ClimbInfo object with name peakName and time climbTime. 
    * 
    * @param peakName the name of the mountain peak 
    * @param climbTime the number of minutes taken to complete the climb */ 
  public ClimbInfo(String peakName, int climbTime) 
  { 
    name = peakName;
    time = climbTime;
  }
  
  /** @return the name of the mountain peak */ 
  public String getName() 
  {
    return name;
  }
  
  /** @return the number of minutes taken to complete the climb */ 
  public int getTime() 
  {
    return time;
  }
  
  public String toString()
  {
    return "Peak name: " + name + " time: " + time;
  }
  
  public static void main(String[] args)
  {
    ClimbInfo info = new ClimbInfo("Whiteface", 301);
    System.out.println(info);
    info = new ClimbInfo("Algonquin", 225);
    System.out.println(info);
  }

}