package com.crm.qa.BaseClass;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Collections;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.events.EventFiringWebDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.AfterTest;

import io.github.bonigarcia.wdm.WebDriverManager;
import com.crm.qa.Utilities.TestUtility;
import com.crm.qa.Utilities.WebEventListener;

import cucumber.api.java.After;

public class TestBase
{
	public static WebDriver driver; 
	public static Properties property;
	public static EventFiringWebDriver e_driver;
	public static WebEventListener eventListener;
	public static ChromeOptions chromeOptions;
	public static Logger Log;
	//Xls_Reader xls = new Xls_Reader(Constants.TEST_DATA_SHEET_PATH);

	public TestBase()
	{
		try 
		{
			property = new Properties();
			FileInputStream ip = new FileInputStream(System.getProperty("user.dir") + "/src/main/java/com/crm/qa/Configuration/Configuration.properties");
			property.load(ip);
		} 
		catch (FileNotFoundException e)
		{
			e.printStackTrace();
		} 
		catch (IOException e) 
		{
			e.printStackTrace();
		}
	}

	public static WebDriver initialization() 
	{
		String broswerName = property.getProperty("Browser");

		if(broswerName.equals("chrome"))
		{
			chromeOptions = new ChromeOptions();
			chromeOptions.setExperimentalOption("useAutomationExtension", false);
			chromeOptions.setExperimentalOption("excludeSwitches", Collections.singletonList("enable-automation"));
			//System.setProperty("webdriver.chrome.driver","./Drivers/chromedriver.exe");
			WebDriverManager.chromedriver().setup();
			driver = new ChromeDriver();
			driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		}
		else if(broswerName.equals("firefox"))
		{
			//System.setProperty("webdriver.gecko.driver","./Drivers/geckodriver.exe");
			WebDriverManager.firefoxdriver().setup();
			driver = new FirefoxDriver();
			driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		}

		e_driver = new EventFiringWebDriver(driver);
		//Now create object of EventListerHandler to register it with EventFiringWebDriver.
		eventListener = new WebEventListener();
		e_driver.register(eventListener);
		driver = e_driver;

		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(TestUtility.Page_Load_TimeOut, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(TestUtility.Implicit_Wait, TimeUnit.SECONDS);

		driver.get(property.getProperty("Url"));
		
		return driver;
	}

	public String getReportConfigPath()
	{
		String reportConfigPath = property.getProperty("reportConfigPath");
		if(reportConfigPath!= null) 
			return reportConfigPath;
		else throw new RuntimeException("Report Config Path not specified in the Configuration.properties file for the Key:reportConfigPath"); 
	}
	
}
