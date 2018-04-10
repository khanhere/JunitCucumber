package BDDjunitpack1.steps;



import BDDjunitpack1.pageobjects.SauceLabsLogin;
import BDDjunitpack1.pageobjects.Waitss;
import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.*;

import static BDDjunitpack1.pageobjects.SauceLabsLogin.SauceLabsLoginPageTitle;
import static BDDjunitpack1.pageobjects.SauceLabsLogin.driver;

public class StepDefs {

    @Given("^User is one the SauceLabs Login Page on URL \"([^\"]*)\"$")
    public void user_is_one_the_SauceLabs_Login_Page_on_URL(String URL) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        driver.get(URL);
    }

    @Then("^User must be able to see \"([^\"]*)\" Text$")
    public void user_must_be_able_to_see_Text(String expectedtext) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        Waitss.loginpage_wait(driver);
        Assert.assertTrue("Text is not found",driver.getPageSource().contains(expectedtext));
    }

    @When("^User provide Username with \"([^\"]*)\"$")
    public void user_provide_Username_with(String user1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        SauceLabsLogin.username_field(driver).sendKeys(user1);
    }

    @When("^User provice Password with \"([^\"]*)\"$")
    public void user_provice_Password_with(String pass1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        SauceLabsLogin.password_field(driver).sendKeys(pass1);
    }

    @When("^User click on Login Button$")
    public void user_click_on_Login_Button() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        SauceLabsLogin.login_button(driver).click();
    }

    @Then("^I should see the \"([^\"]*)\" error message$")
    public void i_should_see_the_error_message(String errmsg) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
Assert.assertTrue("Invalid/Null Error message is displayed upon invalid credentials",
        driver.getPageSource().contains(errmsg));
    }

    @Then("^I should be on SauceLabs Login Page with Title \"([^\"]*)\"$")
    public void i_should_be_on_SauceLabs_Login_Page_with_Title(String titlee) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        Assert.assertTrue("Page navigated upon invalid credentials, implement correctly",driver.getTitle().equals(titlee));
    }

    @When("^I provide Username with \"([^\"]*)\"$")
    public void i_provide_Username_with(String username) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        SauceLabsLogin.username_field(driver).sendKeys(username);
    }

    @When("^I provide Password with \"([^\"]*)\"$")
    public void i_provide_Password_with(String password) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        SauceLabsLogin.password_field(driver).sendKeys(password);
    }

    @When("^I click on Login Button$")
    public void i_click_on_Login_Button() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        SauceLabsLogin.login_button(driver).click();
    }

    @Then("^I should view the \"([^\"]*)\" message$")
    public void i_should_view_the_message(String errormessage) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        Assert.assertTrue("",driver.getPageSource().contains(errormessage));
    }
}
