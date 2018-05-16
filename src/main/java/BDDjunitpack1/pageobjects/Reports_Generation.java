package BDDjunitpack1.pageobjects;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

public class Reports_Generation {
    public static void GenerateMasterthoughtReport(){
        try{
   String RootDir = System.getProperty("user.dir");
    File reportOutputDirectory = new File("target/Masterthought");
    List<String> list = new ArrayList<String>();
            list.add("target/cucumber-json-report.json");

    String pluginUrlPath = "";
    String buildNumber = "1";
    String buildProject = "BDD-Junit-Cucumber-JVM";
            boolean skippedFails = true;
            boolean pendingFails = true;
            boolean undefinedFails = true;
            boolean missingFails = true;
            boolean flashCharts = true;
            boolean runWithJenkins = false;
            boolean highCharts = false;
            boolean parallelTesting = true;
            boolean artifactsEnabled = false;
            String artifactConfig = "";
            Configuration config = new Configuration(reportOutputDirectory,buildProject);
         //   config.setParallelTesting(parallelTesting);
            config.setBuildNumber(buildNumber);

    ReportBuilder reportBuilder = new ReportBuilder(list,config );

            reportBuilder.generateReports();
    }catch(Exception e){
        e.printStackTrace();
    }
}}
