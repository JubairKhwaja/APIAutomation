Feature: Sample Api tests to demonstrate Foreign Exchange Rates

Scenario: Validate Success response for Rates API for Latest Foreign Exchange rates
   
    Given Rates API for Latest Foreign Exchange rates
    When  I perform GET request for "https://api.ratesapi.io/api/latest" endpoint
    Then  validate the response got from the application
  
Scenario: Validate different responses for Rates API for Latest Foreign Exchange rates
   
    Given Rates API for Latest Foreign Exchange rates
    When  I perform GET request for "https://api.ratesapi.io/api/latest" endpoint
    Then  validate the different response got from application
    
Scenario: Validate invalid responses for Rates API for Latest Foreign Exchange rates
   
    Given Rates API for Latest Foreign Exchange rates
    When  I perform GET request for invalid "https://api.ratesapi.io/api/" endpoint
    Then  validate the response got from the application
  
 Scenario: Validate Success response Rates API for Specific date Foreign Exchange rates 
   
    Given Rates API for Specific date Foreign Exchange rates  
    When  User can take any Specific date to check Foreign Exchange rates 
    Then  validate the response got from the application   
 
 Scenario: Validate different responses for Rates API for Specific date Foreign Exchange rates 
   
    Given Rates API for Specific date Foreign Exchange rates 
    When  User can take any Specific date to check Foreign Exchange rates 
    Then  validate the different response got from application   
 
 Scenario: Validate  response Rates API for Future date Foreign Exchange rates 
   
    Given Rates API for Future date Foreign Exchange rates  
    When  User can take any future date to check Foreign Exchange rates 
    Then  validate the response matches the current date   
   