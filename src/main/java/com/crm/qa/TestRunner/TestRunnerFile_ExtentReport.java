package com.crm.qa.TestRunner;

import java.io.File;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.Random;

import org.apache.log4j.PropertyConfigurator;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import com.crm.qa.Utilities.TestUtility;
import com.crm.qa.managers.FileReaderManager;
import com.vimalselvam.cucumber.listener.ExtentProperties;
import com.vimalselvam.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;

@CucumberOptions
			(features = {"src/main/java/com/crm/qa/Features/LoginPage.feature"}, 
			//(features = {"src/main/java/com/crm/qa/Features"}, 
			glue= {"com.crm.qa.StepDefinitions"}, 
			plugin = {"com.vimalselvam.cucumber.listener.ExtentCucumberFormatter:"},
			monochrome = true, 
			strict = true,
			dryRun=false,
			//tags={"@HooksConcept, @CRMLoginTest, @Tags"})
			//tags={"@SanityTest"})
			tags={"@CRMLoginTest"})
			//tags={"@SanityTest, @RegressionTest"})

public class TestRunnerFile_ExtentReport 
{
	static Random rand = new Random();
	static String ReportName;
	private TestNGCucumberRunner testNGCucumberRunner;

	@BeforeClass(alwaysRun = true)
	public void setUpClass() throws Exception 
	{
		ReportName = "CucumberTest"+"_"+TestUtility.getSystemDate();
		ExtentProperties extentProperties = ExtentProperties.INSTANCE;
        extentProperties.setReportPath("target/cucumber-reports/"+ReportName+".html"); //used same string name to create the file with the same name.
        PropertyConfigurator.configure(System.getProperty("user.dir") + "/src/main/resources/log4j.properties");
		testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
	}

	@Test(groups = "cucumber", description = "Runs Cucumber Feature", dataProvider = "features")
	public void feature(CucumberFeatureWrapper cucumberFeature) 
	{
		testNGCucumberRunner.runCucumber(cucumberFeature.getCucumberFeature());
	}

	@DataProvider
	public Object[][] features() 
	{
		return testNGCucumberRunner.provideFeatures();
	}
	
	@AfterClass
	public static void writeExtentReport() 
	{
		Reporter.loadXMLConfig(new File(FileReaderManager.getInstance().getReportConfigPath()));
		  Reporter.setSystemInfo("User Name", "Harry");
		     Reporter.setSystemInfo("Time Zone", TestUtility.getSystemDate());
		     Reporter.setSystemInfo("Machine", "Windows 10" + "64 Bit");
		     Reporter.setSystemInfo("Selenium", "3.7.0");
		     Reporter.setSystemInfo("Maven", "3.5.2");
		     Reporter.setSystemInfo("Java Version", "1.8.0_151");
	}

	@AfterClass(alwaysRun = true)
	public void tearDownClass() throws Exception 
	{
		testNGCucumberRunner.finish();
	}
}
