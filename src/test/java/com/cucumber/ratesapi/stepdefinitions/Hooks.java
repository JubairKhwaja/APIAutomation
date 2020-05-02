package com.cucumber.ratesapi.stepdefinitions;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;

import com.cucumber.ratesapi.utils.RestUtils;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {

	public static Logger logger;
	@Before
	public void setUp() {
		logger=Logger.getLogger("restApi");
		PropertyConfigurator.configure("log4j.properties");	
		logger.info("Before setUp got intialized");
	}
	@After
	public void tearDown() {
		RestUtils.resetBaseURI();
		logger.info("After setUp completion of scenario");
	}
}
