package pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class login {
    private final WebDriver driver;

    public login(WebDriver driver) {
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }

    @FindBy(xpath = "//div[.='Login with Google Account']")
    private WebElement signInWithGoogle;

    @FindBy(xpath = "//input[@type='email']")
    private WebElement inputEmail;

    @FindBy(xpath = "//span[.='Berikutnya']")
    private WebElement clickButtonBerikutnya;

    @FindBy(xpath = "//input[@type='password']")
    private WebElement inputPassword;

    public void signInWithGoogle(){
        signInWithGoogle.click();
    }

    public void setInputEmail(String email){
        inputEmail.sendKeys(email);
    }

    public void setInputPassword(String password){
        inputPassword.sendKeys(password);
    }

    public void clickButtonBerikutnya(){
        clickButtonBerikutnya.click();
    }


}
