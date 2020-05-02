package com.cucumber.ratesapi.runner;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
		// This creates cucumber reports
		plugin ={"json:target/cucumber.json","html:target/site/cucumber-pretty"},
        //Path to your feature file
        features = {".//Feature//sprint1.feature"},
        // Specify tags to be executed
         // tags = {"@Test"},
        //Specify step definition package name (Note: make sure to have this package on current directory) 
        glue = {"com.cucumber.ratesapi.stepdefinitions"},
        monochrome=true
)
public class TestRunner {

}
