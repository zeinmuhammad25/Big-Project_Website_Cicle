package step_definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import pageObject.board;
import pageObject.login;

public class featureBoard {
    private WebDriver webDriver;

    public featureBoard() {
        super();
        this.webDriver = Hooks.webDriver;
    }


    @And("User click ticket card at teams")
    public void clickCardInTeams() throws InterruptedException {
        board board = new board(webDriver);
        board.clickCardInTeams();
        Thread.sleep(3000);
    }

    @And("User click card board")
    public void clickCardBoard() throws InterruptedException {
        board board = new board(webDriver);
        board.clickCardBoard();
        Thread.sleep(3000);

    }

    @And("User click logo add list")
    public void clickButtonAddList() {
        board board = new board(webDriver);
        board.clickButtonAddList();
    }

    @When("User input \"(.*)\" as list name")
    public  void inputListName(String listName){
        board board = new board(webDriver);
        board.setInputListName(listName);
    }

    @And("User click button create")
    public void clickButtonCreate() throws InterruptedException {
        board board = new board(webDriver);
        board.clickButtonCreate();
        Thread.sleep(2000);
    }

    @Then("User will see new list has been inputed")
    public void verifyNewList() {
        board board = new board(webDriver);
        Assert.assertTrue(board.verifyNewList());
    }

    //2//

    @And("User click logo add card")
    public void clickButtonAddCard() throws InterruptedException {
        board board = new board(webDriver);
        board.clickButtonAddCard();
        Thread.sleep(2000);
    }

    @When("User input \"(.*)\" as card name")
    public  void inputCardName(String cardName){
        board board = new board(webDriver);
        board.setCardName(cardName);
    }

    @And("User click add new cart")
    public void clickButtonSaveAddCard() throws InterruptedException {
        board board = new board(webDriver);
        board.clickButtonSaveAddCard();
        Thread.sleep(2000);
    }

    @Then("User will see new card been inputed")
    public void verifyNewCard() {
        board board = new board(webDriver);
        Assert.assertTrue(board.verifyNewCard());
    }

    //3//

    @And("User click icon MuiSvgIcon")
    public void clickButtonMuiSvgIcon() throws InterruptedException {
        board board = new board(webDriver);
        board.clickButtonMuiSvgIcon();
        Thread.sleep(2000);
    }

    @Then("User will see display row explore")
    public void verifyCardBoard() {
        board board = new board(webDriver);
        Assert.assertTrue(board.verifyCardBoard());
    }

    @And("User click icon home")
    public void clickButtonHome() throws InterruptedException {
        board board = new board(webDriver);
        board.clickButtonHome();
        Thread.sleep(2000);
    }

    @Then("User will see display home")
    public void verifyCardInTeams() {
        board board = new board(webDriver);
        Assert.assertTrue(board.verifyCardInTeams());
    }

    //4//

    @And("User click card feature attach from second list")
    public void clickCardFeatureAttach() throws InterruptedException {
        board board = new board(webDriver);
        board.clickCardFeatureAttach();
        Thread.sleep(3000);
    }

    @When("User attach file \"(.*)\" as file attachment")
    public  void attachFile(String file) throws InterruptedException {
        board board = new board(webDriver);
        board.attachFile(file);
        Thread.sleep(3000);
    }

    @And("User click icon notes")
    public void clickButtonIconNotes() throws InterruptedException {
        board board = new board(webDriver);
        board.clickButtonIconNotes();
    }

    @When("User input \"(.*)\" as notes")
    public  void setInputNotes(String addNotes){
        board board = new board(webDriver);
        board.setInputNotes(addNotes);
    }

    @And("User click button save")
    public void clickButtonSaveNotes() throws InterruptedException {
        board board = new board(webDriver);
        board.clickButtonSaveNotes();
        Thread.sleep(3000);
    }

    @Then("User will see update data from notes")
    public void verifyNotes() {
        board board = new board(webDriver);
        Assert.assertTrue(board.verifyNotes());
    }

    @Then("User will see update data from file attachments")
    public void verifyAttachment() {
        board board = new board(webDriver);
        Assert.assertTrue(board.verifyAttachment());
    }

    //5//

    @And("User delete attachment")
    public void clickButtonDeleteAttachment() throws InterruptedException {
        board board = new board(webDriver);
        board.clickButtonDeleteAttachment();
    }

    @Then("Verify delete")
    public void clickButtonVerifyDelete() throws InterruptedException {
        board board = new board(webDriver);
        board.clickButtonVerifyDelete();
    }

    //6//

    @And("User click button members")
    public void clickButtonMembers() throws InterruptedException {
        board board = new board(webDriver);
        board.clickButtonMembers();
    }

    @And("User will choose member to collaborate")
    public void clickButtonAddNewMembers() throws InterruptedException {
        board board = new board(webDriver);
        board.clickButtonAddNewMembers();
        Thread.sleep(3000);
    }

    @And("User can also add and remove in the add member icon")
    public void clickButtonIconMembers() throws InterruptedException {
        board board = new board(webDriver);
        board.clickButtonIconMembers();
    }

    @Then("User will choose deleted member from collaborate")
    public void clickButtonRemoveMembers() {
        board board = new board(webDriver);
        board.clickButtonRemoveMembers();
    }

    //7//

    @And("User click button due date")
    public void clickButtonDueDate() {
        board board = new board(webDriver);
        board.clickButtonDueDate();
    }

    @When("User setup the date \"(.*)\" as date")
    public  void setInputDateDueDate(String addNotes){
        board board = new board(webDriver);
        board.setInputDateDueDate(addNotes);
    }

//    @And("User click button save at due date")
//    public void clickButtonSaveDueDate() {
//        board board = new board(webDriver);
//        board.clickButtonSaveDueDate();
//    }

    @Then("User will see display due date")
    public void verifyDueDate() {
        board board = new board(webDriver);
        Assert.assertTrue(board.verifyDueDate());
    }

    //8// remove due date

    @And("User click card feature attach added due date")
    public void clickCardWithDueDate() throws InterruptedException {
        board board = new board(webDriver);
        board.clickCardWithDueDate();
        Thread.sleep(3000);
    }

    @And("User clicks the due date timer")
    public void clickVerifyDueDate() {
        board board = new board(webDriver);
        board.clickVerifyDueDate();
    }

    @And("User click remove due date")
    public void clickButtonRemove() {
        board board = new board(webDriver);
        board.clickButtonRemove();
    }

//    //9// feature move
//
//    @And("User click icon move")
//    public void clickIconMove() {
//        board board = new board(webDriver);
//        board.clickIconMove();
//    }
//
//    @And("User click list")
//    public void clickList() {
//        board board = new board(webDriver);
//        board.clickList();
//    }
//
//    @And("User set position \"(.*)\" list which is aimed")
//    public void selectList(String list) {
//        board board = new board(webDriver);
//        board.selectList(list);
//    }

    //...// private card

    @And("User click button private card")
    public void clickButtonPrivateCard() {
        board board = new board(webDriver);
        board.clickButtonPrivateCard();
    }

    @Then("User will see the card will be private")
    public void verifyPrivateCard() {
        board board = new board(webDriver);
        board.verifyPrivateCard();
    }

    @And("User click button public card")
    public void clickButtonPublicCard() {
        board board = new board(webDriver);
        board.clickButtonPublicCard();
    }














}

