package pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class groupChat {
    private final WebDriver driver;

    public groupChat(WebDriver driver) {
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }

    @FindBy(xpath = "//div[@class='TeamPage_rowBox__zylkg row']/div[1]")
    private WebElement rowBoxGroupChat;

    @FindBy(xpath = "//div[@class='fr-element fr-view']")
    private WebElement inputMassage;

    @FindBy(xpath = "//button[@class='rounded-circle btn btn-warning btn-sm']")
    private WebElement buttonSend;

    @FindBy(xpath = "//p[.='good morning']")
    private WebElement verifyMassage;

    public void clickRowBoxGroupChat(){
        rowBoxGroupChat.click();
    }

    public boolean verifyMassage(){
        verifyMassage.isDisplayed();
        return true;
    }

    public void clickButtonSend(){
        buttonSend.click();
    }

    public void setInputMassage(String massage){
        inputMassage.sendKeys(massage);
    }

    //2//

    @FindBy(xpath = "//div[@class='infinite-scroll-component ']/div[1]//div[@class='Message_iconOption__3qihj']")
    private WebElement iconOptionMassage;

    @FindBy(xpath = "//div[@class='OverlayButton_box__2jFLd']")
    private WebElement buttonDelete;

    public void clickIconOptionMassage(){
        iconOptionMassage.click();
    }

    public void clickButtonDelete(){
        buttonDelete.click();
    }

    //3//

    @FindBy(xpath = "//input[1]")
    private WebElement attachFileMassage;

    @FindBy(xpath = "//h1[.='Capture1.PNG']")
    private WebElement verifyFile;

    @FindBy(xpath = "//div[@class='infinite-scroll-component ']/div[1]//p[.='good morning']")
    private WebElement clickMassage;

    public void clickMassage(){
        clickMassage.click();
    }

    public void setAttachFileMassage(String file){
        attachFileMassage.sendKeys(file);
    }
    public boolean verifyFile(){
        verifyFile.isDisplayed();
        return true;
    }


}
