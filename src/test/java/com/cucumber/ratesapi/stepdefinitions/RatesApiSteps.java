package com.cucumber.ratesapi.stepdefinitions;

import java.time.LocalDate;
import java.util.logging.Logger;

import org.testng.asserts.SoftAssert;


import com.cucumber.ratesapi.utils.RestUtils;
import com.cucumber.ratesapi.utils.configReader;

import io.restassured.response.Response;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class RatesApiSteps  {
	public static Response res=null;
	int statuscode;
	configReader cf=new configReader();
   SoftAssert sa = new SoftAssert();
	/*
	 * As part of the test data we can use Excel,Json,property file and feature file
	 * So here I implemented one some test data getting from feature file and some from the Property file
	 * as the test cases are not involving the complex test data so implemented with 
	 * feature file and property file for reading the test data
	 * for the test cases passing the test data from the cucumber feature file
	 */
	@Given("^Rates API for Latest Foreign Exchange rates$")
	public void rates_API_for_Latest_Foreign_Exchange_rates() throws Throwable {
		Hooks.logger.info("Rates API for Latest Foreign Exchange rate");
	}

	@When("^I perform GET request for \"([^\"]*)\" endpoint$")
	public void i_perform_GET_request_for_endpoint(String url) throws Throwable {
		RestUtils.setBaseURI(url);
	    statuscode=RestUtils.getResponse().getStatusCode();

		}
	
	@When("^I perform GET request for invalid \"([^\"]*)\" endpoint$")
	public void i_perform_GET_request_for_invalid_endpoint(String url) throws Throwable {
		RestUtils.setBaseURI(url);
		
	    statuscode=RestUtils.getResponse().getStatusCode();
	}
	@Then("^validate the response got from the application$")
	public void validate_the_response_got_from_the_application() throws Throwable {
		if(statuscode==200) {
			Hooks.logger.info("valid  response " +statuscode);
		}
		else {
			Hooks.logger.info("Invalid response other than 200" +statuscode);
		}

	}

	@Then("^validate the different response got from application$")
	public void validate_the_different_response_got_from_application() throws Throwable {
	   String responseBody=RestUtils.getResponse().asString();
	   String contentType = RestUtils.getResponse().header("Content-Type");
	   String statusLine = RestUtils.getResponse().getStatusLine();
	   String contentEncoding =  RestUtils.getResponse().header("Content-Encoding");
	   sa.assertEquals(responseBody.contains(cf.getTestData("responseBodyForForeignExchangerate")),true);
	   sa.assertEquals(contentType, cf.getTestData("contentTypeForForeignExchangerate"));
	   sa.assertEquals(statusLine, cf.getTestData("statusLineForForeignExchangerate"));
	   sa.assertEquals(contentEncoding,cf.getTestData("contentEncodingForForeignExchangerate"));
    	 sa.assertAll();
	 }
	@Given("^Rates API for Specific date Foreign Exchange rates$")
	public void rates_API_for_Specific_date_Foreign_Exchange_rates() throws Throwable {
		Hooks.logger.info("Rates API for Specific date Foreign Exchange rates");
	}
	
	@When("^User can take any Specific date to check Foreign Exchange rates$")
	public void user_can_take_any_Specific_date_to_check_Foreign_Exchange_rates() throws Throwable {
	   RestUtils.setBaseURI(cf.getTestData("SpecificDateURL"));
	    statuscode=RestUtils.getResponse().getStatusCode();
	}
	@Given("^Rates API for Future date Foreign Exchange rates$")
	public void rates_API_for_Future_date_Foreign_Exchange_rates() throws Throwable {
	  Hooks.logger.info("Rates API for Future date Foreign Exchange rates");
	}

	@When("^User can take any future date to check Foreign Exchange rates$")
	public void user_can_take_any_future_date_to_check_Foreign_Exchange_rates() throws Throwable {
		 RestUtils.setBaseURI(cf.getTestData("FutureDateURL"));
		    statuscode=RestUtils.getResponse().getStatusCode();
	}
	@Then("^validate the response matches the current date$")
	public void validate_the_response_matches_the_current_date() throws Throwable {
		String Currentdate=java.time.LocalDate.now().toString();
		String responseBody=RestUtils.getResponse().asString();
		sa.assertEquals(responseBody.contains(Currentdate),true);
		Hooks.logger.info("Current date is not present in the response body" +responseBody);
		sa.assertAll();
	
	}


	
}
