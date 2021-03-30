package com.crm.qa.managers;

import java.util.Properties;

public class FileReaderManager {

	private static FileReaderManager fileReaderManager = new FileReaderManager();
	public static Properties property;

	private FileReaderManager() {
	}

	public static FileReaderManager getInstance( ) {
		return fileReaderManager;
	}

	public String getReportConfigPath()
	{
		String reportConfigPath = property.getProperty("reportConfigPath");
		if(reportConfigPath!= null) 
			return reportConfigPath;
		else throw new RuntimeException("Report Config Path not specified in the Configuration.properties file for the Key:reportConfigPath"); 
	}
}