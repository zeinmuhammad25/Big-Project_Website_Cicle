package pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class board {
    private static WebDriver driver;

    public board(WebDriver driver) {
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }

    // Locator add card and method

    @FindBy(xpath = "//div[@class='DashboardPage_DashboardPage__mainCol__35fq5 col-md-10']" +
            "/div[1]//img[@src='https://stagingapi.cicle.app/public/images/create-team-button.png']")
    private WebElement addDashboardBigProject;

    @FindBy(xpath = "//div[@class='DashboardPage_DashboardPage__mainCol__35fq5 col-md-10']/" +
            "div[3]//img[@src='https://stagingapi.cicle.app/public/images/create-team-button.png']")
    private WebElement addDashboardTeams;

    @FindBy(xpath = "//div[5]//img[@src='https://stagingapi.cicle.app/public/images/create-team-button.png']")
    private WebElement addDashboardProjects;

    @FindBy(xpath = "//div[@class='DashboardPage_DashboardPage__mainCol__35fq5 col-md-10']" +
            "/div[1]//div[@class='Button_container__1WNuB']")
    private WebElement buttonCreateCardBigProject;

    @FindBy(xpath = "//div[@class='DashboardPage_DashboardPage__mainCol__35fq5 col-md-10']" +
            "/div[3]//div[@class='Button_container__1WNuB']")
    private WebElement buttonCreateCardTeams;

    @FindBy(xpath = "//div[5]//div[@class='Button_container__1WNuB']")
    private WebElement buttonCreateCardProjects;

    @FindBy(xpath = "//div[@class='DashboardPage_DashboardPage__mainCol__35fq5 col-md-10']" +
            "/div[1]//input[@name='name']")
    private WebElement inputCardNameBigProject;

    @FindBy(xpath = "//div[@class='DashboardPage_DashboardPage__mainCol__35fq5 col-md-10']" +
            "/div[1]//textarea[@name='desc']")
    private WebElement inputCardDescriptionBigProject;

    public void setCardNameBigProject(String cardNameBigProject){
        inputCardNameBigProject.sendKeys(cardNameBigProject);
    }

    public void setCardDescriptionBigProject(String cardDescriptionBigProject){
        inputCardDescriptionBigProject.sendKeys(cardDescriptionBigProject);
    }


    public void buttonCreateCardBigProject(){
        buttonCreateCardBigProject.click();
    }

    public void buttonCreateCardTeams(){
        buttonCreateCardProjects.click();
    }

    public void buttonCreateCardProjects(){
        buttonCreateCardProjects.click();
    }



    public void addDashboardBigProject(){
        addDashboardBigProject.click();
    }

    public void addDashboardTeams(){
        addDashboardTeams.click();
    }

    public void addDashboardProjects(){
        addDashboardProjects.click();
    }

    // Locator card and method

    @FindBy(xpath = "//div[2]/a[1]/div")
    private WebElement cardBigProject;

    @FindBy(xpath = "//div[4]/a[1]/div")
    private WebElement cardTeams;

    @FindBy(xpath = "//div[6]/a[1]/div")
    private WebElement cardProject;

    @FindBy(xpath = "//div[@class='container']/div/div[2]/div[2]//div/div/h1[.='Project']")
    private WebElement newCardNameInputed;

    @FindBy(xpath = "//div[@class='container']/div/div[2]/div[2]//div/div/p[.='Ini project tentang kita']")
    private WebElement newCardDescriptionInputed;

    public String getTextNewCardNameInputed(){
        return newCardNameInputed.getText();
    }

    public String getTextNewCardDescriptionInputed(){
        return newCardDescriptionInputed.getText();
    }

    public boolean cardBigProject(){
        cardBigProject.isDisplayed();
        return true;
    }

    public boolean cardTeams(){
        cardTeams.isDisplayed();
        return true;
    }

    public boolean cardProject(){
        cardProject.isDisplayed();
        return true;
    }

    /////(Board)/////

    //1// add list

    @FindBy(xpath = "//a[@href='/teams/624ffa5430d9d12372ea20dd']/div[@class='Card_Card__2LWWW']")
    private WebElement cardInTeams;

    @FindBy(xpath = "//div[@class='TeamPage_rowBox__zylkg row']/div[4]")
    private WebElement cardBoard;

    @FindBy(xpath = "//button[@class='btn btn-outline-dark btn-block btn-sm']")
    private WebElement buttonAddList;

    @FindBy(xpath = "//input[@name='name']")
    private WebElement inputListName;

    @FindBy(xpath = "//button[.='Create']")
    private WebElement buttonCreate;

    @FindBy(xpath = "//h1[.='First List']")
    private WebElement verifyNewList;

    public boolean verifyCardBoard(){
        cardBoard.isDisplayed();
        return true;
    }

    public boolean verifyCardInTeams(){
        cardInTeams.isDisplayed();
        return true;
    }

    public void clickCardInTeams(){
        cardInTeams.click();
    }

    public void clickCardBoard(){
        cardBoard.click();
    }

    public void clickButtonAddList(){
        buttonAddList.click();
    }

    public void setInputListName(String listName){
        inputListName.sendKeys(listName);
    }

    public void clickButtonCreate(){
        buttonCreate.click();
    }

    public boolean verifyNewList(){
        verifyNewList.isDisplayed();
        return true;
    }

    //2//add card

    @FindBy(xpath = "//div[@class='ListContainer_ListContainer__outerList__1PG0-']/" +
            "div[1]//div[@class='ListContainer_ListContainer__buttonBottom__2kZAI']")
    private WebElement buttonAddCard;

    @FindBy(xpath = "//input[@class='form-control']")
    private WebElement inputCardName;

    @FindBy(xpath = "//button[@class='btn btn-success btn-sm']")
    private WebElement buttonSaveAddCard;

    @FindBy(xpath = "//h1[contains(.,'First Card')]")
    private WebElement verifyNewCard;

    public void clickButtonAddCard(){
        buttonAddCard.click();
    }

    public void clickButtonSaveAddCard(){
        buttonSaveAddCard.click();
    }

    public void setCardName(String cardName){
        inputCardName.sendKeys(cardName);
    }

    public boolean verifyNewCard(){
        verifyNewCard.isDisplayed();
        return true;
    }

    //3//MuiSvgIcon

    @FindBy(xpath = "//a[@href='/teams/624ffa5430d9d12372ea20dd']")
    private WebElement buttonMuiSvgIcon;

    @FindBy(xpath = "//a[.='Home']")
    private WebElement buttonHome;

    public void clickButtonMuiSvgIcon(){
        buttonMuiSvgIcon.click();
    }

    public void clickButtonHome(){
        buttonHome.click();
    }

    //4//

    @FindBy(xpath = "//div[@class='ListContainer_ListContainer__outerList__1PG0-']//div[@class='infinite-scroll-component ']" +
            "/div[@id='listcard_content-0']/div[3]")
    private WebElement cardFeatureAttach;

    @FindBy(xpath = "//div[@class='CardDetailContainer_box__3ALFs']//input[1]")
    private WebElement AttachFile;

    @FindBy(xpath = "//div[@class='ListContainer_ListContainer__outerList__1PG0-']//div[@class='OverlayButton_container__3kxDV']" +
            "//div[@class='OverlayButton_container__3kxDV']/div[contains(.,'fitur attachApr 101')]")
    private WebElement cardWithDueDate;

    @FindBy(xpath = "//div[@class='ManageMoveCard_listSection__listName__TN7R2']")
    private WebElement clickList;

    public void clickList(){
        clickList.click();
    }

    public void clickCardWithDueDate(){
        cardWithDueDate.click();
    }

    public void clickCardFeatureAttach(){
        cardFeatureAttach.click();
    }

    public void attachFile(String file){
        AttachFile.sendKeys(file);
    }

    @FindBy(xpath = "//div[@class='ManageDesc_editIcon__1I0bY']")
    private WebElement buttonLogoNotes;

    @FindBy(xpath = "//div[@class='fr-element fr-view']")
    private WebElement inputNotes;

    @FindBy(xpath = "//button[@class='btn btn-success btn-sm']")
    private WebElement buttonSaveNotes;

    public void clickButtonIconNotes(){
        buttonLogoNotes.click();
    }

    public void setInputNotes(String notes){
        inputNotes.sendKeys(notes);
    }

    public void clickButtonSaveNotes(){
        buttonSaveNotes.click();
    }

    @FindBy(xpath = "//div[@class='ManageDesc_sectionDesc__3SwZN']/div[@class='fr-view']")
    private WebElement verifyNotes;

    @FindBy(xpath = "//h1[.='Capture1.PNG']")
    private WebElement verifyAttachment;

    public boolean verifyNotes(){
        verifyNotes.isDisplayed();
        return true;
    }

    public boolean verifyAttachment(){
        verifyAttachment.isDisplayed();
        return true;
    }

    //5//

    @FindBy(xpath = "//div[@class='ManageAttachments_actionSection__640JX']/div[.='Delete']")
    private WebElement buttonDeleteAttachment;

    @FindBy(xpath = "//button[@class='btn btn-danger btn-block btn-sm']")
    private WebElement buttonVerifyDelete;

    public void clickButtonDeleteAttachment(){
        buttonDeleteAttachment.click();
    }

    public void clickButtonVerifyDelete(){
        buttonVerifyDelete.click();
    }

    //6//

    @FindBy(xpath = "//button[contains(.,'Members')]")
    private WebElement buttonMembers;

    @FindBy(xpath = "//div[@class='Members_plusButton__26WlU']")
    private WebElement buttonIconMembers;

    @FindBy(xpath = "//div[@class='ManageMembersContainer_ManageMembersContainer__body__1skzm']" +
            "/div[.='zein muhammad']")
    private WebElement buttonAddNewMembers;

    @FindBy(xpath = "//div[@class='BoxPopOver_BoxPopOver__1vCj0 BoxPopOver_BoxPopOver__left__9KRmE']" +
            "/div[@class='ManageMembersContainer_ManageMembersContainer__body__1skzm']/div[.='zein muhammad']")
    private WebElement buttonRemoveMembers;

    public void clickButtonMembers(){
        buttonMembers.click();
    }

    public void clickButtonIconMembers(){
        buttonIconMembers.click();
    }

    public void clickButtonAddNewMembers(){
        buttonAddNewMembers.click();
    }

    public void clickButtonRemoveMembers(){
        buttonRemoveMembers.click();
    }

    //7// due date add

    @FindBy(xpath = "//div[@class='CardDetailContainer_CardDetailContainer__sideColumn__3hzRV col-lg-2 col-md-3']" +
            "/div[@class='CardDetailContainer_CardDetailContainer__smallSectionContainer__3qfM5']/div[contains(.,'Due Date')]")
    private WebElement buttonDueDate;

    @FindBy(xpath = "//input[@id='date-picker-dialog']")
    private WebElement inputDateDueDate;

    @FindBy(xpath = "//div[.='Save']")
    private WebElement buttonSaveDueDate;

    @FindBy(xpath = "//div[@class='DateBox_DateBox__3UL8M']")
    private WebElement verifyDueDate;

    public boolean verifyDueDate(){
        verifyDueDate.isDisplayed();
        return true;
    }


    public void clickButtonDueDate(){
        buttonDueDate.click();
    }

    public void clickButtonSaveDueDate(){
        buttonSaveDueDate.click();
    }

    public void setInputDateDueDate(String date){
        inputDateDueDate.sendKeys(date);
    }

    //8// due date remove


    @FindBy(xpath = "//button[@class='btn btn-danger btn-sm']")
    private WebElement buttonRemove;

    public void clickVerifyDueDate(){
        verifyDueDate.click();
    }

    public void clickButtonRemove(){
        buttonRemove.click();
    }

//    //8// move list
//
//    @FindBy(xpath = "//button[contains(.,'Move')]")
//    private WebElement iconMove;
//
//    @FindBy(xpath = "//button[@class='btn btn-success btn-sm']")
//    private WebElement buttonMove;
//
//    @FindBy(xpath = "//div[@class='ManageMoveCard_listSection__2sf4E']")
//    private WebElement selectList;
//
//    public void selectList(String list){
//        Select selectDropdownProduct = new Select(selectList);
//        selectDropdownProduct.selectByVisibleText(list);
//    }
//
//    public void clickIconMove(){
//        iconMove.click();
//    }
//
//    public void clickButtonMove(){
//        buttonMove.click();
//    }

    //..// private card



    @FindBy(xpath = "//button[contains(.,'Private Card')]")
    private WebElement buttonPrivateCard;

    @FindBy(xpath = "//div[@class='modal-title h4']")
    private WebElement verifyPrivateCard;

    @FindBy(xpath = "//button[contains(.,'Public Card')]")
    private WebElement buttonPublicCard;


    public void clickButtonPrivateCard(){
        buttonPrivateCard.click();
    }

    public void clickButtonPublicCard(){
        buttonPublicCard.click();
    }

    public boolean verifyPrivateCard(){
        verifyPrivateCard.isDisplayed();
        return true;
    }





















































}
