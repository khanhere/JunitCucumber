package BDDjunitpack1.pageobjects;

import com.sun.webkit.WebPage;
import org.openqa.selenium.By;
//import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;

public class SauceLabsLogin {
   public static RemoteWebDriver driver=null;
    private static WebElement element = null;


    public static void SauceLabsLoginPageTitle(RemoteWebDriver driver)
    {

        if(!driver.getTitle().equals("Sauce Labs | Login"))
            throw new WrongPageException("Sorry ! Wrong page is loaded");

/* Below for simple if else if WrongPageException class is not defined separately
        if(driver.getTitle().equals("Sauce Labs | Login")){
System.out.println("Boom ! You are on Login Page of Sauce Labs");
        }
else {
            System.out.println("Sorry ! Wrong page is loaded");
        }
*/
    }




    public static WebElement username_field(RemoteWebDriver driver){
element=driver.findElement(By.name("username"));
return element;
    }

    public static WebElement password_field(RemoteWebDriver driver){
        element=driver.findElement(By.name("password"));
        return element;
    }

    public static WebElement login_button(RemoteWebDriver driver){
        element=driver.findElement(By.id("submit"));
        return element;
    }
}

