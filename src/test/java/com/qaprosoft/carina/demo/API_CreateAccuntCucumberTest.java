
package com.qaprosoft.carina.demo;

import com.qaprosoft.carina.core.foundation.cucumber.CucumberBaseTest;

import cucumber.api.CucumberOptions;


@CucumberOptions(features = "src/test/resources/creatfeatures/PostTokenGenration.feature",
        glue = "com.posttoken.cucumber.steps",
        		format={"pretty",
                "html:target/CreateUserAPI-test-report",
                "pretty:target/CreateUserAPI-test-report.txt",
                "json:target/CreateUserAPI-test-report.json",
                "junit:target/CreateUserAPI-test-report.xml"}
        )

public class API_CreateAccuntCucumberTest extends CucumberBaseTest {

	}
