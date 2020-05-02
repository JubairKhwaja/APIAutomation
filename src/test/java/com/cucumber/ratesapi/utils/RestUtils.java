package com.cucumber.ratesapi.utils;



import org.testng.Assert;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.http.Method;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;



public class RestUtils {
	//Global Setup Variables
    public static String path;
    public static String jsonPathTerm;
    static RequestSpecification httpRequest;
	static Response response;

    //Sets Base URI
    public static void setBaseURI (String baseURI){
    	
        RestAssured.baseURI = baseURI;
        
    }

   

    //Reset Base URI (after test)
    public static void resetBaseURI (){
        RestAssured.baseURI = null;
    }

    // Returns response
    public static Response getResponse() {
    	 httpRequest= RestAssured.given();
    	 response =  httpRequest.request(Method.GET);
    	 return  response;
    }

    public static Response getResponseforSpecificID(String date) {
   	 httpRequest= RestAssured.given();
   	 response =  httpRequest.request(Method.GET,date);
   	 return  response;
   }

	
    

}
