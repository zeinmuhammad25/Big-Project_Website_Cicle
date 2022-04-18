package step_definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import pageObject.groupChat;
import pageObject.login;

public class featureGroupChat {
    private WebDriver webDriver;

    public featureGroupChat() {
        super();
        this.webDriver = Hooks.webDriver;
    }

    @And("User click rowbox group chat")
    public  void inputPassword() throws InterruptedException {
        groupChat groupChat = new groupChat(webDriver);
        groupChat.clickRowBoxGroupChat();
        Thread.sleep(3000);
    }

    @When("User input \"(.*)\" as massage")
    public  void setInputMassage(String massage) throws InterruptedException {
        groupChat groupChat = new groupChat(webDriver);
        Thread.sleep(2000);
        groupChat.setInputMassage(massage);

    }

    @And("User click icon send")
    public  void clickButtonSend() throws InterruptedException {
        groupChat groupChat = new groupChat(webDriver);
        groupChat.clickButtonSend();
        Thread.sleep(5000);
    }

    @Then("User will see massage already send")
    public  void verifyMassage() {
        groupChat groupChat = new groupChat(webDriver);
        Assert.assertTrue(groupChat.verifyMassage());
    }

    @And("User click icon option in massage")
    public  void clickIconOptionMassage() {
        groupChat groupChat = new groupChat(webDriver);
        groupChat.clickIconOptionMassage();
    }

    @And("User click massage")
    public  void clickMassage() throws InterruptedException {
        groupChat groupChat = new groupChat(webDriver);
        Thread.sleep(3000);
        groupChat.clickMassage();
        Thread.sleep(2000);
    }

    @And("User click button delete massage")
    public  void clickButtonDelete() {
        groupChat groupChat = new groupChat(webDriver);
        groupChat.clickButtonDelete();
    }

    @And("User input \"(.*)\" as file")
    public  void setAttachFileMassage(String file) throws InterruptedException {
        groupChat groupChat = new groupChat(webDriver);
        groupChat.setAttachFileMassage(file);
        Thread.sleep(5000);
    }

    @Then("User will see file already send")
    public  void setAttachFileMassage() {
        groupChat groupChat = new groupChat(webDriver);
        groupChat.verifyFile();
    }
}
