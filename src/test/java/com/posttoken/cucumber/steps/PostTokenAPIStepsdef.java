package com.posttoken.cucumber.steps;

import java.util.concurrent.TimeUnit;

import org.json.JSONObject;
//import org.json.JSONObject;
import org.openqa.selenium.remote.DesiredCapabilities;

import com.jayway.restassured.path.json.JsonPath;
import com.jayway.restassured.response.Response;
import com.qaprosoft.carina.core.foundation.cucumber.CucumberRunner;
import com.qaprosoft.carina.core.foundation.utils.R;
import com.qaprosoft.carina.demo.api.GetBankAccountMethod;
import com.qaprosoft.carina.demo.api.PostUserCreationMethod;
import com.qaprosoft.carina.demo.api.PostUserMethod;
import com.qaprosoft.carina.demo.api.PosttokenMethods;
import com.qaprosoft.carina.demo.api.postcreateaccntMethods;
import com.qaprosoft.carina.demo.mobile.gui.pages.common.QtracHomePageBase;
import com.qaprosoft.carina.demo.mobile.gui.pages.common.QtracLoginPageBase;
import com.qaprosoft.carina.demo.utils.M1CloudActivities;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import net.sf.json.JSONException;

public class PostTokenAPIStepsdef extends CucumberRunner {


	//Token Generation
	static PosttokenMethods postuser = null;
	  Response rs = null;


	@Given("^Post end_point given$")
	public void startMethod() throws Exception {
	postuser = new PosttokenMethods();
	}

	@When("^Enter UserID and Password$")
	public void enterdetails() throws JSONException {
	JSONObject object = new JSONObject();
	object.put("username", "admin");
	object.put("password", "admin");
	postuser.setBodyContent(object.toString());
	}

	@Then("^Post the apI$")
	public static  String postAPI() {
	//rs = postuser.callAPI();
	//System.out.println("Response:" + rs);
	String response = postuser.callAPI().asString();
	System.out.println("Response**********************:" + response);
	String id_token = new JsonPath(response).get("id_token");
	System.out.println("ID" + id_token);
	return id_token;
	}


	@When("^i enter id_token and set header$")
	public static String createUser()
	{
	String id_token=PostTokenAPIStepsdef.postAPI();
	System.out.println("Id_Token :" +id_token);
	postcreateaccntMethods createuser=new postcreateaccntMethods();
	createuser.setAuth(id_token);
	createuser.setHeaders("Authorization=" + "Bearer" + " " + id_token);
	String response1 = createuser.callAPI().asString();
	System.out.println("Create Account Response ****************** " + response1);
	
	int id = new JsonPath(response1).getInt("id");
	System.out.println("Id :" + id);
	return response1;
	}


	@Then("^Get user$")
	public void getUser()
	{
	String userId=PostTokenAPIStepsdef.createUser();
	System.out.println("Get user Response  :***************"+userId);
	GetBankAccountMethod getid = new GetBankAccountMethod(String.valueOf(userId));
	System.out.println(" User Id @@@@@@@@@@@@@" + getid);
	getid.setHeaders("Authorization=" + "Bearer" + " " + userId);
	getid.setMethodPath(getid.getMethodPath() + "/" + getid);
	getid.callAPI();
	}
}
