import { Given, When, Then } from "@cucumber/cucumber";
import {LoginPage} from "../../pages/LoginPage"

let loginPage: LoginPage = new LoginPage();

Given("I'm on the login Page", function(){
    browser.url("http://automationpractice.com/index.php");
    loginPage.loginPageClick();
});

When("I log in with a default user", function(){
    loginPage.typeEmailAdress("webdriverio@mail.com");
    loginPage.typeUserPassword("123456");
    loginPage.singInClick();
});

Then("I shall be on the My account page", function(){
    expect(loginPage.myAccountTitle()).toBe(true);
});