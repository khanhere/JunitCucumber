package BDDjunitpack1;

/*import com.github.mkolisnyk.cucumber.runner.AfterSuite;
import com.github.mkolisnyk.cucumber.runner.BeforeSuite;*/
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

/*import com.github.mkolisnyk.cucumber.runner.ExtendedCucumber;
import com.github.mkolisnyk.cucumber.runner.ExtendedCucumberOptions;*/
import org.openqa.selenium.chrome.ChromeDriver;

import java.io.File;
import java.util.concurrent.TimeUnit;

import static BDDjunitpack1.pageobjects.SauceLabsLogin.driver;


/*
We will use this In case of simple junit classes without beforesuite and aftersuite annotations,
        below ExtendedCucumber is used for beforesuite and aftersuite annotations */
@RunWith(Cucumber.class)
@CucumberOptions(format ={"pretty" , "html:src/test/target", "html:target/cucumber-html-report", "json:target/cucumber-json-report.json"})
public class TestRunner {

    @BeforeClass
    public static void openbrowser()
    {
        // Write code here that turns the phrase above into concrete actions
/*
        File file = new File("driver/chromedriver.exe");
        System.setProperty("webdriver.chrome.driver", file.getAbsolutePath());
        driver = new ChromeDriver();
*/

        // driver=new HtmlUnitDriver();

        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
    }

    @AfterClass
    public static void tearDown(){
        driver.quit();

    }


}




/* Below code if we want to run via Extended cucumber for BeforeSuite and Aftersuite.
having error while run from mvn test. works ok while run from internal ide


@RunWith(ExtendedCucumber.class)
@ExtendedCucumberOptions(jsonReport = "target/cucumber.json", outputFolder = "target"
        */
/*retryCount = 3,
        detailedReport = true,
        detailedAggregatedReport = true,
        overviewReport = true,
        //coverageReport = true,
        jsonUsageReport = "target/cucumber-usage.json",
        usageReport = true,
        toPDF = true,
        excludeCoverageTags = {"@flaky" },
        includeCoverageTags = {"@passed" },*//*

        )

@CucumberOptions(plugin = { "html:target/cucumber-html-report"},
features = {"src/test/resources/BDDjunitpack1"})

public class TestRunner {

    }
*/


