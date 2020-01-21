$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/Qtrac.feature");
formatter.feature({
  "line": 2,
  "name": "Qtrac login functionality",
  "description": "",
  "id": "qtrac-login-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@MobileApp"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "Verification of login functionality",
  "description": "",
  "id": "qtrac-login-functionality;verification-of-login-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@demo"
    },
    {
      "line": 5,
      "name": "@Dev"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Open the browser and launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Enter Username and Password",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "click on login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on speedometer dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click on Pagebucket dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "QtracStepdef.LoginPage()"
});
formatter.result({
  "duration": 1473668000,
  "error_message": "org.openqa.selenium.WebDriverException: org.openqa.selenium.SessionNotCreatedException: com.ssts.pcloudy.exceptions.DeviceNotBookedException : Requested Device Full \u0027Samsung_GalaxyJ4Plus_Android_8.1.0\u0027name not found/already booked. (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 405 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027T440P\u0027, ip: \u0027192.168.216.41\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: driver.version: AndroidDriver\r\n\tat com.qaprosoft.carina.core.foundation.webdriver.listener.EventFiringAppiumCommandExecutor.execute(EventFiringAppiumCommandExecutor.java:169)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat io.appium.java_client.AppiumDriver.startSession(AppiumDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.\u003cinit\u003e(DefaultGenericMobileDriver.java:37)\r\n\tat io.appium.java_client.AppiumDriver.\u003cinit\u003e(AppiumDriver.java:86)\r\n\tat io.appium.java_client.android.AndroidDriver.\u003cinit\u003e(AndroidDriver.java:84)\r\n\tat com.qaprosoft.carina.core.foundation.webdriver.core.factory.impl.MobileFactory.create(MobileFactory.java:167)\r\n\tat com.qaprosoft.carina.core.foundation.webdriver.core.factory.DriverFactory.create(DriverFactory.java:71)\r\n\tat com.qaprosoft.carina.core.foundation.webdriver.IDriverPool.createDriver(IDriverPool.java:353)\r\n\tat com.qaprosoft.carina.core.foundation.webdriver.IDriverPool.getDriver(IDriverPool.java:143)\r\n\tat com.qaprosoft.carina.demo.cucumber.steps.QtracStepdef.LoginPage(QtracStepdef.java:28)\r\n\tat ✽.Given Open the browser and launch the application(src/test/resources/features/Qtrac.feature:7)\r\nCaused by: org.openqa.selenium.SessionNotCreatedException: com.ssts.pcloudy.exceptions.DeviceNotBookedException : Requested Device Full \u0027Samsung_GalaxyJ4Plus_Android_8.1.0\u0027name not found/already booked. (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 405 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027T440P\u0027, ip: \u0027192.168.216.41\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: driver.version: AndroidDriver\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$errorHandler$0(JsonWireProtocolResponse.java:54)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(Unknown Source)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.findFirst(Unknown Source)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat com.qaprosoft.carina.core.foundation.webdriver.listener.EventFiringAppiumCommandExecutor.execute(EventFiringAppiumCommandExecutor.java:150)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat io.appium.java_client.AppiumDriver.startSession(AppiumDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.\u003cinit\u003e(DefaultGenericMobileDriver.java:37)\r\n\tat io.appium.java_client.AppiumDriver.\u003cinit\u003e(AppiumDriver.java:86)\r\n\tat io.appium.java_client.android.AndroidDriver.\u003cinit\u003e(AndroidDriver.java:84)\r\n\tat com.qaprosoft.carina.core.foundation.webdriver.core.factory.impl.MobileFactory.create(MobileFactory.java:167)\r\n\tat com.qaprosoft.carina.core.foundation.webdriver.core.factory.DriverFactory.create(DriverFactory.java:71)\r\n\tat com.qaprosoft.carina.core.foundation.webdriver.IDriverPool.createDriver(IDriverPool.java:353)\r\n\tat com.qaprosoft.carina.core.foundation.webdriver.IDriverPool.getDriver(IDriverPool.java:143)\r\n\tat com.qaprosoft.carina.demo.cucumber.steps.QtracStepdef.LoginPage(QtracStepdef.java:28)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat com.qaprosoft.carina.core.foundation.cucumber.CucumberRunner.feature(CucumberRunner.java:56)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "QtracStepdef.enterdetails()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "QtracStepdef.ClickOnLoginBtn()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "QtracStepdef.clickonspeedometerdashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "QtracStepdef.clickonPagebucketdashboard()"
});
formatter.result({
  "status": "skipped"
});
});