package step_definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import pageObject.login;


import javax.xml.transform.SourceLocator;

import static org.junit.Assert.assertEquals;
public class featureLogin {
    private WebDriver webDriver;

    public featureLogin() {
        super();
        this.webDriver = Hooks.webDriver;
    }

    @Given("User login with google")
    public void ClickSignInWithGoogle() {
        login login = new login(webDriver);
        login.signInWithGoogle();
    }

    @When("User input \"(.*)\" as email")
    public  void inputEmail(String email){
        login login = new login(webDriver);
        login.setInputEmail(email);
    }

    @When("User input \"(.*)\" as password")
    public  void inputPassword(String password){
        login login = new login(webDriver);
        login.setInputPassword(password);
    }

    @And("User click button selanjutnya")
    public  void inputPassword() throws InterruptedException {
        login login = new login(webDriver);
        login.clickButtonBerikutnya();
        Thread.sleep(5000);
    }



}
