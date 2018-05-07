$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BDDjunitpack1/testfeature1.feature");
formatter.feature({
  "line": 1,
  "name": "SauceLabs Login page",
  "description": "As a user I  want to test whether SauceLabs login page works fine while I provide valid credentials\r\nAppropriate error messages should be displayed while I provide invalid credentials\r\nSo that business people can see exceptions and success scenarios",
  "id": "saucelabs-login-page",
  "keyword": "Feature"
});
formatter.background({
  "line": 6,
  "name": "User navigates to SauceLabs Login page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User is one the SauceLabs Login Page on URL \"https://saucelabs.com/beta/login\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User must be able to see \"New\" Text",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://saucelabs.com/beta/login",
      "offset": 45
    }
  ],
  "location": "StepDefs.user_is_one_the_SauceLabs_Login_Page_on_URL(String)"
});
formatter.result({
  "duration": 13909759213,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New",
      "offset": 26
    }
  ],
  "location": "StepDefs.user_must_be_able_to_see_Text(String)"
});
formatter.result({
  "duration": 195540617,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Appropriate error message is displayed while user provide invalid email id and password",
  "description": "",
  "id": "saucelabs-login-page;appropriate-error-message-is-displayed-while-user-provide-invalid-email-id-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "User provide Username with \"test1@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User provice Password with \"test1password\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the \"Invalid username or password\" error message",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I should be on SauceLabs Login Page with Title \"Sauce Labs | Login\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "test1@gmail.com",
      "offset": 28
    }
  ],
  "location": "StepDefs.user_provide_Username_with(String)"
});
formatter.result({
  "duration": 227363541,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test1password",
      "offset": 28
    }
  ],
  "location": "StepDefs.user_provice_Password_with(String)"
});
formatter.result({
  "duration": 184420953,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.user_click_on_Login_Button()"
});
formatter.result({
  "duration": 3072695757,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid username or password",
      "offset": 18
    }
  ],
  "location": "StepDefs.i_should_see_the_error_message(String)"
});
formatter.result({
  "duration": 69886477,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs | Login",
      "offset": 48
    }
  ],
  "location": "StepDefs.i_should_be_on_SauceLabs_Login_Page_with_Title(String)"
});
formatter.result({
  "duration": 20134790,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Multiple failed attempts using DDT given in below Examples",
  "description": "",
  "id": "saucelabs-login-page;multiple-failed-attempts-using-ddt-given-in-below-examples",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I provide Username with \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I provide Password with \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should view the \"\u003cerrorSuccess\u003e\" message",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "saucelabs-login-page;multiple-failed-attempts-using-ddt-given-in-below-examples;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "errorSuccess"
      ],
      "line": 24,
      "id": "saucelabs-login-page;multiple-failed-attempts-using-ddt-given-in-below-examples;;1"
    },
    {
      "cells": [
        "test2@gmail.com",
        "testajsdhb",
        "Invalid username or password"
      ],
      "line": 25,
      "id": "saucelabs-login-page;multiple-failed-attempts-using-ddt-given-in-below-examples;;2"
    },
    {
      "cells": [
        "test3@gmail.com",
        "est2kjnkdf",
        "Invalid username or password"
      ],
      "line": 26,
      "id": "saucelabs-login-page;multiple-failed-attempts-using-ddt-given-in-below-examples;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 6,
  "name": "User navigates to SauceLabs Login page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User is one the SauceLabs Login Page on URL \"https://saucelabs.com/beta/login\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User must be able to see \"New\" Text",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://saucelabs.com/beta/login",
      "offset": 45
    }
  ],
  "location": "StepDefs.user_is_one_the_SauceLabs_Login_Page_on_URL(String)"
});
formatter.result({
  "duration": 1997377739,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New",
      "offset": 26
    }
  ],
  "location": "StepDefs.user_must_be_able_to_see_Text(String)"
});
formatter.result({
  "duration": 210065969,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Multiple failed attempts using DDT given in below Examples",
  "description": "",
  "id": "saucelabs-login-page;multiple-failed-attempts-using-ddt-given-in-below-examples;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I provide Username with \"test2@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I provide Password with \"testajsdhb\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should view the \"Invalid username or password\" message",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "test2@gmail.com",
      "offset": 25
    }
  ],
  "location": "StepDefs.i_provide_Username_with(String)"
});
formatter.result({
  "duration": 184687798,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testajsdhb",
      "offset": 25
    }
  ],
  "location": "StepDefs.i_provide_Password_with(String)"
});
formatter.result({
  "duration": 292768398,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.i_click_on_Login_Button()"
});
formatter.result({
  "duration": 2830914057,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid username or password",
      "offset": 19
    }
  ],
  "location": "StepDefs.i_should_view_the_message(String)"
});
formatter.result({
  "duration": 67359436,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "User navigates to SauceLabs Login page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User is one the SauceLabs Login Page on URL \"https://saucelabs.com/beta/login\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User must be able to see \"New\" Text",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://saucelabs.com/beta/login",
      "offset": 45
    }
  ],
  "location": "StepDefs.user_is_one_the_SauceLabs_Login_Page_on_URL(String)"
});
formatter.result({
  "duration": 2751043716,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New",
      "offset": 26
    }
  ],
  "location": "StepDefs.user_must_be_able_to_see_Text(String)"
});
formatter.result({
  "duration": 98174852,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Multiple failed attempts using DDT given in below Examples",
  "description": "",
  "id": "saucelabs-login-page;multiple-failed-attempts-using-ddt-given-in-below-examples;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I provide Username with \"test3@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I provide Password with \"est2kjnkdf\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should view the \"Invalid username or password\" message",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "test3@gmail.com",
      "offset": 25
    }
  ],
  "location": "StepDefs.i_provide_Username_with(String)"
});
formatter.result({
  "duration": 246970915,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "est2kjnkdf",
      "offset": 25
    }
  ],
  "location": "StepDefs.i_provide_Password_with(String)"
});
formatter.result({
  "duration": 153313035,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.i_click_on_Login_Button()"
});
formatter.result({
  "duration": 4179065816,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid username or password",
      "offset": 19
    }
  ],
  "location": "StepDefs.i_should_view_the_message(String)"
});
formatter.result({
  "duration": 94666530,
  "status": "passed"
});
});