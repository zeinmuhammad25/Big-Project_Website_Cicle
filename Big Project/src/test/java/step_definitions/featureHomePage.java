package step_definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import pageObject.board;

import static org.junit.Assert.assertEquals;

public class featureHomePage {
    private WebDriver webDriver;

    public featureHomePage() {
        super();
        this.webDriver = Hooks.webDriver;
    }

    //card big project

    @And("User add card at big project")
    public void addDashboardBigProject() {
        board board = new board(webDriver);
        board.addDashboardBigProject();
    }

    @And("User click button create big project")
    public void clickButtonCreateCardBigProject() {
        board board = new board(webDriver);
        board.buttonCreateCardBigProject();
    }

    @Then("User can see new card in big project")
    public void verifyElementCardBigProject() {
        board board = new board(webDriver);
        Assert.assertTrue(board.cardBigProject());
    }

    @And("User input \"(.*)\" as name project and \"(.*)\" as description")
    public void inputCardNameAndDescription(String nameProject, String description) {
        board board = new board(webDriver);
        board.setCardNameBigProject(nameProject);
        board.setCardDescriptionBigProject(description);
    }

    @Then("The user can confirm the input that has been filled in previously with the parameters")
    public void verifyNameAndDescription() {
        board board = new board(webDriver);
        String NewCardNameInputed = "Project";
        assertEquals(NewCardNameInputed, board.getTextNewCardNameInputed());
        String NewCardDescriptionInputed = "Ini project tentang kita";
        assertEquals(NewCardDescriptionInputed, board.getTextNewCardDescriptionInputed());
    }

    @Then("User can see new card in big project in two times")
    public void verifyNameNewCardTwoTimes() {
        board board = new board(webDriver);
        String NewCardNameInputed = "";
        assertEquals(NewCardNameInputed, board.getTextNewCardNameInputed());
    }


    //card teams

    @And("User add card at teams")
    public void addDashboardTeams(){
        board board = new board(webDriver);
        board.addDashboardTeams();
    }

    @And("User click button create teams")
    public void clickButtonCreateCardTeams(){
        board board = new board(webDriver);
        board.buttonCreateCardTeams();
    }

    @Then("User can see new card in teams")
    public void  verifyElementCardTeams(){
        board board = new board(webDriver);
        Assert.assertTrue(board.cardProject());
    }

    //card projects

    @And("User add card at projects")
    public void addDashboardProjects(){
        board board = new board(webDriver);
        board.addDashboardProjects();
    }

    @And("User click button create projects")
    public void clickButtonCreateCardProjects(){
        board board = new board(webDriver);
        board.buttonCreateCardProjects();
    }

    @Then("User can see new card in projects")
    public void  verifyElementCardProjects(){
        board board = new board(webDriver);
        Assert.assertTrue(board.cardProject());
    }









}
