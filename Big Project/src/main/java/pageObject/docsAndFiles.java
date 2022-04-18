package pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class docsAndFiles {
    private final WebDriver driver;

    public docsAndFiles(WebDriver driver) {
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }

    @FindBy(xpath = "//div[@class='TeamPage_rowBox__zylkg row']/div[6]")
    private WebElement rowBoxDocsAndFiles;

    @FindBy(xpath = "//button[@class='btn btn-primary btn-sm']")
    private WebElement buttonAddDocsAndFiles;

    @FindBy(xpath = "//p[.='Add a New Doc']")
    private WebElement buttonAddNewDoc;

    @FindBy(xpath = "//div[@class='fr-element fr-view']")
    private WebElement inputDescription;

    @FindBy(xpath = "//button[@class='btn btn-success']")
    private WebElement buttonPublish;

    @FindBy(xpath = "//input[@class='form-control']")
    private WebElement inputFolderName;

    @FindBy(xpath = "//div[.='Create a New Folder']")
    private WebElement buttonCreateNewFolder;

    @FindBy(xpath = "//button[@class='btn btn-success btn-sm']")
    private WebElement buttonSaveFolder;

    @FindBy(xpath = "//h1[contains(.,'the new folder')]")
    private WebElement verifyNewFolder;

    @FindBy(xpath = "//input[1]")
    private WebElement uploadFiles;

    @FindBy(xpath = "//h1[.='Capture1.PNG']")
    private WebElement verifyFile;

    @FindBy(xpath = "//div[@class='FilePage_menuSection__2Z5wW']")
    private WebElement buttonMenuSection;

    @FindBy(xpath = "//div[.='Archive This File']")
    private WebElement archiveFile;

    @FindBy(xpath = "//span[.='Docs & Files']")
    private WebElement buttonDocsAndFiles;

    @FindBy(xpath = "//div[@class='BucketPage_roundMenuSection__3Y777']")
    private WebElement buttonBucketPage;

    @FindBy(xpath = "//p[.='Archive This Bucket']")
    private WebElement buttonArchiveBucket;

    @FindBy(xpath = "//div[@class='infinite-scroll-component__outerdiv']")
    private WebElement buttonDocument;

    @FindBy(xpath = "//div[@class='RoundActionMenu_container__2ta8s RoundActionMenu_medium__3rLho']")
    private WebElement buttonMenuSectionDocument;

    @FindBy(xpath = "//p[.='Archive This Doc']")
    private WebElement buttonArchiveDoc;

    @FindBy(xpath = "//h1[.='This Document is archived']")
    private WebElement verifyDoc;

    @FindBy(xpath = "//p[.='Ini untuk selenium']")
    private WebElement buttonOnceOfFile;

    public boolean verifyOnceOfFile(){
        buttonOnceOfFile.isDisplayed();
        return true;
    }

    public void clickButtonOnceOfFile(){
        buttonOnceOfFile.click();
    }


    public boolean verifyDoc(){
        verifyDoc.isDisplayed();
        return true;
    }

    public void clickButtonArchiveDoc(){
        buttonArchiveDoc.click();
    }

    public void clickButtonMenuSectionDocument(){
        buttonMenuSectionDocument.click();
    }

    public void clickButtonDocument(){
        buttonDocument.click();
    }

    public void clickButtonArchiveBucket(){
        buttonArchiveBucket.click();
    }

    public void clickButtonBucketPage(){
        buttonBucketPage.click();
    }

    public void clickButtonListDocsAndFiles(){
        buttonDocsAndFiles.click();
    }

    public void clickButtonarchiveFile(){
        archiveFile.click();
    }

    public void clickButtonMenuSection(){
        buttonMenuSection.click();
    }

    public void clickButtonFile(){
        verifyFile.click();
    }

    public boolean verifyFile(){
        verifyFile.isDisplayed();
        return true;
    }

    public void uploadFiles(String files){
        uploadFiles.sendKeys(files);
    }

    public boolean verifyNewFolder(){
        verifyNewFolder.isDisplayed();
        return true;
    }

    public void clickNewFolder(){
        verifyNewFolder.click();
    }

    public void clickButtonSaveFolder(){
        buttonSaveFolder.click();
    }

    public void setInputFolderName(String description){
        inputFolderName.sendKeys(description);
    }

    public void clickButtonCreateNewFolder(){
        buttonCreateNewFolder.click();
    }

    public void clickButtonPublish(){
        buttonPublish.click();
    }

    public void setInputDescription(String description){
        inputDescription.sendKeys(description);
    }

    public void clickButtonAddDocsAndFiles(){
        buttonAddDocsAndFiles.click();
    }

    public void clickButtonAddNewDoc(){
        buttonAddNewDoc.click();
    }

    public void clickRowBoxDocsAndFiles(){
        rowBoxDocsAndFiles.click();
    }
}
