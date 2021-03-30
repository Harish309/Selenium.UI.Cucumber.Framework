$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Hooks.feature");
formatter.feature({
  "line": 2,
  "name": "Hooks in Cucumber",
  "description": "Description: Hooks Concept in Cucumber",
  "id": "hooks-in-cucumber",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@HooksConcept"
    }
  ]
});
formatter.before({
  "duration": 422600,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Add new Customer",
  "description": "",
  "id": "hooks-in-cucumber;add-new-customer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User is on Add Customer Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User fills the Customer Details",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "New Customer is Added",
  "keyword": "Then "
});
formatter.match({
  "location": "HooksTest.user_is_on_Add_Customer_Page()"
});
formatter.result({
  "duration": 206311300,
  "status": "passed"
});
formatter.match({
  "location": "HooksTest.user_fills_the_Customer_Details()"
});
formatter.result({
  "duration": 102300,
  "status": "passed"
});
formatter.match({
  "location": "HooksTest.new_Customer_is_Added()"
});
formatter.result({
  "duration": 110601,
  "status": "passed"
});
formatter.after({
  "duration": 108900,
  "status": "passed"
});
formatter.before({
  "duration": 821801,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Edit Customer",
  "description": "",
  "id": "hooks-in-cucumber;edit-customer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "User is on Edit Customer Page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User Edits Customer Details",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Customer details are Updated",
  "keyword": "Then "
});
formatter.match({
  "location": "HooksTest.user_is_on_Edit_Customer_Page()"
});
formatter.result({
  "duration": 85200,
  "status": "passed"
});
formatter.match({
  "location": "HooksTest.user_Edits_Customer_Details()"
});
formatter.result({
  "duration": 114499,
  "status": "passed"
});
formatter.match({
  "location": "HooksTest.customer_details_are_Added()"
});
formatter.result({
  "duration": 120900,
  "status": "passed"
});
formatter.after({
  "duration": 71899,
  "status": "passed"
});
formatter.before({
  "duration": 538300,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Delete Customer",
  "description": "",
  "id": "hooks-in-cucumber;delete-customer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "User is on Delete Customer Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User deletes Customer",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Customer is Deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "HooksTest.user_is_on_Delete_Customer_Page()"
});
formatter.result({
  "duration": 82800,
  "status": "passed"
});
formatter.match({
  "location": "HooksTest.user_deletes_Customer()"
});
formatter.result({
  "duration": 110600,
  "status": "passed"
});
formatter.match({
  "location": "HooksTest.customer_is_Deleted()"
});
formatter.result({
  "duration": 74000,
  "status": "passed"
});
formatter.after({
  "duration": 96600,
  "status": "passed"
});
formatter.uri("LoginPage.feature");
formatter.feature({
  "line": 2,
  "name": "CRM Application Login Test",
  "description": "Description: To Test the Login Functionality of CRM Application",
  "id": "crm-application-login-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@CRMLoginTest"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 5,
      "value": "#Normal Login - Taking UserName and Password from Property File"
    },
    {
      "line": 6,
      "value": "#@SmokeTest"
    },
    {
      "line": 7,
      "value": "#Scenario: Free CRM Login Test"
    },
    {
      "line": 8,
      "value": "#Given User is already on Login Page"
    },
    {
      "line": 9,
      "value": "#When Title of Login Page is Free CRM"
    },
    {
      "line": 10,
      "value": "#Then User enters username and password and click on login button"
    },
    {
      "line": 11,
      "value": "#Then User is on Home Page"
    },
    {
      "line": 12,
      "value": "#Logging in Using Scenario Outline - Achieving Data Driven Approach"
    }
  ],
  "line": 14,
  "name": "Free CRM Login Test",
  "description": "",
  "id": "crm-application-login-test;free-crm-login-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@SanityTest"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Title of Login Page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User enters \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\" and click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User is on Home Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "crm-application-login-test;free-crm-login-test;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 21,
      "id": "crm-application-login-test;free-crm-login-test;;1"
    },
    {
      "cells": [
        "groupautomation",
        "Test@12345"
      ],
      "line": 22,
      "id": "crm-application-login-test;free-crm-login-test;;2"
    },
    {
      "cells": [
        "groupautomation",
        "Test@12345"
      ],
      "line": 23,
      "id": "crm-application-login-test;free-crm-login-test;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 837601,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Free CRM Login Test",
  "description": "",
  "id": "crm-application-login-test;free-crm-login-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@SanityTest"
    },
    {
      "line": 1,
      "name": "@CRMLoginTest"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Title of Login Page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User enters \"groupautomation\" and \"Test@12345\" and click on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User is on Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 15902474300,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 62717201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "groupautomation",
      "offset": 13
    },
    {
      "val": "Test@12345",
      "offset": 35
    }
  ],
  "location": "LoginPageTest.user_enters_and_and_click_on_login_button(String,String)"
});
formatter.result({
  "duration": 8524455799,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.user_is_on_home_page()"
});
formatter.result({
  "duration": 21521500,
  "status": "passed"
});
formatter.after({
  "duration": 160700,
  "status": "passed"
});
formatter.before({
  "duration": 935400,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Free CRM Login Test",
  "description": "",
  "id": "crm-application-login-test;free-crm-login-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@SanityTest"
    },
    {
      "line": 1,
      "name": "@CRMLoginTest"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Title of Login Page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User enters \"groupautomation\" and \"Test@12345\" and click on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User is on Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 11808793501,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 13218400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "groupautomation",
      "offset": 13
    },
    {
      "val": "Test@12345",
      "offset": 35
    }
  ],
  "location": "LoginPageTest.user_enters_and_and_click_on_login_button(String,String)"
});
formatter.result({
  "duration": 6327588000,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.user_is_on_home_page()"
});
formatter.result({
  "duration": 6021000,
  "status": "passed"
});
formatter.after({
  "duration": 36800,
  "status": "passed"
});
formatter.uri("Tags.feature");
formatter.feature({
  "line": 2,
  "name": "Tags in Cucumber",
  "description": "Description: To Test Tags Concept",
  "id": "tags-in-cucumber",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Tags"
    }
  ]
});
formatter.before({
  "duration": 3130199,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Verify Login",
  "description": "",
  "id": "tags-in-cucumber;verify-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@SmokeTest"
    },
    {
      "line": 5,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "This is a Valid Login Test",
  "keyword": "Given "
});
formatter.match({
  "location": "TagsTest.this_is_a_Valid_Login_Test()"
});
formatter.result({
  "duration": 1262000,
  "status": "passed"
});
formatter.after({
  "duration": 103900,
  "status": "passed"
});
formatter.before({
  "duration": 1445400,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Verify Logout",
  "description": "",
  "id": "tags-in-cucumber;verify-logout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@SanityTest"
    },
    {
      "line": 9,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "This is a Valid Logout Test",
  "keyword": "Given "
});
formatter.match({
  "location": "TagsTest.this_is_a_Valid_Logout_Test()"
});
formatter.result({
  "duration": 520900,
  "status": "passed"
});
formatter.after({
  "duration": 42600,
  "status": "passed"
});
formatter.before({
  "duration": 421900,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify Search",
  "description": "",
  "id": "tags-in-cucumber;verify-search",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "This is a Search Test",
  "keyword": "Given "
});
formatter.match({
  "location": "TagsTest.this_is_a_Search_Test()"
});
formatter.result({
  "duration": 396500,
  "status": "passed"
});
formatter.after({
  "duration": 39500,
  "status": "passed"
});
formatter.before({
  "duration": 372800,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify Advanced Search",
  "description": "",
  "id": "tags-in-cucumber;verify-advanced-search",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@End2EndTest"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "This is Advanced Search Test",
  "keyword": "Given "
});
formatter.match({
  "location": "TagsTest.this_is_Advanced_Search_Test()"
});
formatter.result({
  "duration": 353399,
  "status": "passed"
});
formatter.after({
  "duration": 30800,
  "status": "passed"
});
});