package BDDjunitpack1.pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Waitss {

    public static void loginpage_wait(RemoteWebDriver driver) {

        WebDriverWait wait = new WebDriverWait(driver, 15);
        // wait.ignoring(NoSuchElementException.class);
        wait.until(ExpectedConditions.visibilityOfElementLocated((By.name("username"))));

    }

}
