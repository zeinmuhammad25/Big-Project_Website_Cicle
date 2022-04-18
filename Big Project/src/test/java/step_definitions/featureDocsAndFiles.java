package step_definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import pageObject.board;
import pageObject.docsAndFiles;
import pageObject.groupChat;
import pageObject.login;


public class featureDocsAndFiles {
    private WebDriver webDriver;

    public featureDocsAndFiles() {
        super();
        this.webDriver = Hooks.webDriver;
    }
    @Given("User at home page")
    public void homePage() throws InterruptedException {
        login login = new login(webDriver);
        board board = new board(webDriver);
        docsAndFiles docsAndFiles = new docsAndFiles(webDriver);
        login.signInWithGoogle();
        Thread.sleep(3000);
        login.setInputEmail("zeinazhar12@gmail.com");
        login.clickButtonBerikutnya();
        Thread.sleep(3000);
        login.setInputPassword("T25121998");
        login.clickButtonBerikutnya();
        Thread.sleep(6000);
    }

    @When("Which is where the user will add a new folder on the docs and files page")
    public  void userAddFolder() throws InterruptedException {
        docsAndFiles docsAndFiles = new docsAndFiles(webDriver);
        docsAndFiles.clickButtonAddDocsAndFiles();
        docsAndFiles.clickButtonCreateNewFolder();
    }


    @When("User wants to go to the docs and files page")
    public  void userAtDocsAndFilePage() throws InterruptedException {
        board board = new board(webDriver);
        docsAndFiles docsAndFiles = new docsAndFiles(webDriver);
        board.clickCardInTeams();
        Thread.sleep(3000);
        docsAndFiles.clickRowBoxDocsAndFiles();
        Thread.sleep(2000);
    }

    @And("the folder name is \"(.*)\"")
    public  void setNameFolder(String name) throws InterruptedException {
        docsAndFiles docsAndFiles = new docsAndFiles(webDriver);
        docsAndFiles.setInputFolderName(name);
        docsAndFiles.clickButtonSaveFolder();
        Thread.sleep(3000);
    }

    @Then("Which is where the user will archive the folder as name the new folder")
    public  void archiveFolder() throws InterruptedException {
        docsAndFiles docsAndFiles = new docsAndFiles(webDriver);
        docsAndFiles.clickNewFolder();
        Thread.sleep(2000);
        docsAndFiles.clickButtonBucketPage();
        docsAndFiles.clickButtonArchiveBucket();
        docsAndFiles.clickButtonListDocsAndFiles();
        Thread.sleep(3000);

    }

    @Then("User will see folder by the name The New Folder")
    public  void verifyNewFolder() {
        docsAndFiles docsAndFiles = new docsAndFiles(webDriver);
        Assert.assertTrue(docsAndFiles.verifyNewFolder());
    }

    @And("User click rowbox Docs & Files")
    public  void clickRowBox() throws InterruptedException {
        docsAndFiles docsAndFiles = new docsAndFiles(webDriver);
        docsAndFiles.clickRowBoxDocsAndFiles();
        Thread.sleep(2000);
    }

    @And("User click button add docs & files")
    public  void clickButtonAddDocsAndFiles() {
        docsAndFiles docsAndFiles = new docsAndFiles(webDriver);
        docsAndFiles.clickButtonAddDocsAndFiles();
    }

    @And("User click button add a new doc")
    public  void clickButtonAddNewDoc() {
        docsAndFiles docsAndFiles = new docsAndFiles(webDriver);
        docsAndFiles.clickButtonAddNewDoc();
    }

    @When("User input \"(.*)\" as description")
    public  void setInputDescription(String description) {
        docsAndFiles docsAndFiles = new docsAndFiles(webDriver);
        docsAndFiles.setInputDescription(description);
    }

    @And("User click button publish")
    public  void clickButtonPublish() {
        docsAndFiles docsAndFiles = new docsAndFiles(webDriver);
        docsAndFiles.clickButtonPublish();
    }

    @When("Which is where the user will add a new files to docs and files")
    public  void newAdd() throws InterruptedException {
        docsAndFiles docsAndFiles = new docsAndFiles(webDriver);
        docsAndFiles.clickButtonAddDocsAndFiles();
    }

    @And("The files location at \"(.*)\"")
    public  void uploadFiles(String files) throws InterruptedException {
        docsAndFiles docsAndFiles = new docsAndFiles(webDriver);
        docsAndFiles.uploadFiles(files);
        Thread.sleep(3000);
    }

    @Then("The new file by name Capture.PNG available at docs and files")
    public  void verifyFile() {
        docsAndFiles docsAndFiles = new docsAndFiles(webDriver);
        docsAndFiles.verifyFile();
    }

    @When("Which is where the user will archive the file Capture1.PNG")
    public  void archiveFile() throws InterruptedException {
        docsAndFiles docsAndFiles = new docsAndFiles(webDriver);
        docsAndFiles.clickButtonFile();
        Thread.sleep(3000);
        docsAndFiles.clickButtonMenuSection();
        docsAndFiles.clickButtonarchiveFile();
        docsAndFiles.clickButtonListDocsAndFiles();
        Thread.sleep(3000);
    }

    @When("Which is where the user will archive a document")
    public  void archiveDoc() throws InterruptedException {
        docsAndFiles docsAndFiles = new docsAndFiles(webDriver);
        docsAndFiles.clickButtonDocument();
        Thread.sleep(3000);
        docsAndFiles.clickButtonMenuSectionDocument();
        Thread.sleep(1000);
        docsAndFiles.clickButtonArchiveDoc();
    }

    @Then("User will see a document has been archived")
    public  void verifyDoc() {
        docsAndFiles docsAndFiles = new docsAndFiles(webDriver);
        Assert.assertTrue(docsAndFiles.verifyDoc());
    }

    @When("User enters one of the docs & files")
    public  void verifyButtonIocnDocsAndFiles() throws InterruptedException {
        docsAndFiles docsAndFiles = new docsAndFiles(webDriver);
        docsAndFiles.clickButtonOnceOfFile();
        Thread.sleep(1000);
        docsAndFiles.clickButtonListDocsAndFiles();
    }

    @Then("User will return to the start page of docs")
    public  void verifyOnceOfFiles() {
        docsAndFiles docsAndFiles = new docsAndFiles(webDriver);
        Assert.assertTrue(docsAndFiles.verifyOnceOfFile());
    }






}
