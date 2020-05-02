$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Feature/sprint1.feature");
formatter.feature({
  "line": 1,
  "name": "Sample Api tests to demonstrate Foreign Exchange Rates",
  "description": "",
  "id": "sample-api-tests-to-demonstrate-foreign-exchange-rates",
  "keyword": "Feature"
});
formatter.before({
  "duration": 122415200,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Validate Success response for Rates API for Latest Foreign Exchange rates",
  "description": "",
  "id": "sample-api-tests-to-demonstrate-foreign-exchange-rates;validate-success-response-for-rates-api-for-latest-foreign-exchange-rates",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Rates API for Latest Foreign Exchange rates",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I perform GET request for \"https://api.ratesapi.io/api/latest\" endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "validate the response got from the application",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesApiSteps.rates_API_for_Latest_Foreign_Exchange_rates()"
});
formatter.result({
  "duration": 263499300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://api.ratesapi.io/api/latest",
      "offset": 27
    }
  ],
  "location": "RatesApiSteps.i_perform_GET_request_for_endpoint(String)"
});
formatter.result({
  "duration": 4901025800,
  "status": "passed"
});
formatter.match({
  "location": "RatesApiSteps.validate_the_response_got_from_the_application()"
});
formatter.result({
  "duration": 1443800,
  "status": "passed"
});
formatter.after({
  "duration": 1073000,
  "status": "passed"
});
formatter.before({
  "duration": 11574200,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Validate different responses for Rates API for Latest Foreign Exchange rates",
  "description": "",
  "id": "sample-api-tests-to-demonstrate-foreign-exchange-rates;validate-different-responses-for-rates-api-for-latest-foreign-exchange-rates",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "Rates API for Latest Foreign Exchange rates",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I perform GET request for \"https://api.ratesapi.io/api/latest\" endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "validate the different response got from application",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesApiSteps.rates_API_for_Latest_Foreign_Exchange_rates()"
});
formatter.result({
  "duration": 917500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://api.ratesapi.io/api/latest",
      "offset": 27
    }
  ],
  "location": "RatesApiSteps.i_perform_GET_request_for_endpoint(String)"
});
formatter.result({
  "duration": 1185671200,
  "status": "passed"
});
formatter.match({
  "location": "RatesApiSteps.validate_the_different_response_got_from_application()"
});
formatter.result({
  "duration": 5670383900,
  "status": "passed"
});
formatter.after({
  "duration": 529900,
  "status": "passed"
});
formatter.before({
  "duration": 3819200,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Validate invalid responses for Rates API for Latest Foreign Exchange rates",
  "description": "",
  "id": "sample-api-tests-to-demonstrate-foreign-exchange-rates;validate-invalid-responses-for-rates-api-for-latest-foreign-exchange-rates",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "Rates API for Latest Foreign Exchange rates",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I perform GET request for invalid \"https://api.ratesapi.io/api/\" endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "validate the response got from the application",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesApiSteps.rates_API_for_Latest_Foreign_Exchange_rates()"
});
formatter.result({
  "duration": 1049800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://api.ratesapi.io/api/",
      "offset": 35
    }
  ],
  "location": "RatesApiSteps.i_perform_GET_request_for_invalid_endpoint(String)"
});
formatter.result({
  "duration": 1318883600,
  "status": "passed"
});
formatter.match({
  "location": "RatesApiSteps.validate_the_response_got_from_the_application()"
});
formatter.result({
  "duration": 769500,
  "status": "passed"
});
formatter.after({
  "duration": 921500,
  "status": "passed"
});
formatter.before({
  "duration": 3098600,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Validate Success response Rates API for Specific date Foreign Exchange rates",
  "description": "",
  "id": "sample-api-tests-to-demonstrate-foreign-exchange-rates;validate-success-response-rates-api-for-specific-date-foreign-exchange-rates",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "Rates API for Specific date Foreign Exchange rates",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User can take any Specific date to check Foreign Exchange rates",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "validate the response got from the application",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesApiSteps.rates_API_for_Specific_date_Foreign_Exchange_rates()"
});
formatter.result({
  "duration": 711800,
  "status": "passed"
});
formatter.match({
  "location": "RatesApiSteps.user_can_take_any_Specific_date_to_check_Foreign_Exchange_rates()"
});
formatter.result({
  "duration": 1473658300,
  "status": "passed"
});
formatter.match({
  "location": "RatesApiSteps.validate_the_response_got_from_the_application()"
});
formatter.result({
  "duration": 407100,
  "status": "passed"
});
formatter.after({
  "duration": 375800,
  "status": "passed"
});
formatter.before({
  "duration": 3547200,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Validate different responses for Rates API for Specific date Foreign Exchange rates",
  "description": "",
  "id": "sample-api-tests-to-demonstrate-foreign-exchange-rates;validate-different-responses-for-rates-api-for-specific-date-foreign-exchange-rates",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "Rates API for Specific date Foreign Exchange rates",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "User can take any Specific date to check Foreign Exchange rates",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "validate the different response got from application",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesApiSteps.rates_API_for_Specific_date_Foreign_Exchange_rates()"
});
formatter.result({
  "duration": 994300,
  "status": "passed"
});
formatter.match({
  "location": "RatesApiSteps.user_can_take_any_Specific_date_to_check_Foreign_Exchange_rates()"
});
formatter.result({
  "duration": 1124788600,
  "status": "passed"
});
formatter.match({
  "location": "RatesApiSteps.validate_the_different_response_got_from_application()"
});
formatter.result({
  "duration": 5013257100,
  "status": "passed"
});
formatter.after({
  "duration": 605900,
  "status": "passed"
});
formatter.before({
  "duration": 2726200,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Validate  response Rates API for Future date Foreign Exchange rates",
  "description": "",
  "id": "sample-api-tests-to-demonstrate-foreign-exchange-rates;validate--response-rates-api-for-future-date-foreign-exchange-rates",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 35,
  "name": "Rates API for Future date Foreign Exchange rates",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "User can take any future date to check Foreign Exchange rates",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "validate the response matches the current date",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesApiSteps.rates_API_for_Future_date_Foreign_Exchange_rates()"
});
formatter.result({
  "duration": 914400,
  "status": "passed"
});
formatter.match({
  "location": "RatesApiSteps.user_can_take_any_future_date_to_check_Foreign_Exchange_rates()"
});
formatter.result({
  "duration": 1448942600,
  "status": "passed"
});
formatter.match({
  "location": "RatesApiSteps.validate_the_response_matches_the_current_date()"
});
formatter.result({
  "duration": 1153255300,
  "error_message": "java.lang.AssertionError: The following asserts failed:\n\texpected [true] but found [false]\r\n\tat org.testng.asserts.SoftAssert.assertAll(SoftAssert.java:43)\r\n\tat com.cucumber.ratesapi.stepdefinitions.RatesApiSteps.validate_the_response_matches_the_current_date(RatesApiSteps.java:97)\r\n\tat ✽.Then validate the response matches the current date(./Feature/sprint1.feature:37)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 491400,
  "status": "passed"
});
});