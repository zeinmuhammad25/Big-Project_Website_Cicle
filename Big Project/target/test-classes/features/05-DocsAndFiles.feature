@all
Feature: Docs & Files
  This feature will check the overall appearance of the scenario of Feature Docs & Files

  Scenario: User add a document at docs & files
    Given User login with google
    When User input "zeinazhar12@gmail.com" as email
    And User click button selanjutnya
    When User input "T25121998" as password
    And User click button selanjutnya
    And User click ticket card at teams
    And User click rowbox Docs & Files
    And User click button add docs & files
    And User click button add a new doc
    When User input "This is the massage who will be input to all off the costumer" as description
    And User click button publish

  Scenario: User archive document at docs & files page
    Given User at home page
    And User wants to go to the docs and files page
    When Which is where the user will archive a document
    Then User will see a document has been archived

  Scenario: User add new folder at docs & files
    Given User at home page
    And User wants to go to the docs and files page
    When Which is where the user will add a new folder on the docs and files page
    And the folder name is "the new folder"
    Then User will see folder by the name The New Folder

  Scenario: User archive folder at docs & files page
    Given User at home page
    And User wants to go to the docs and files page
    When Which is where the user will archive the folder as name the new folder
    Then User will see folder by the name The New Folder

  Scenario: User upload files at docs & files
    Given User at home page
    And User wants to go to the docs and files page
    When Which is where the user will add a new files to docs and files
    And The files location at "C:\\Users\\TELKOM\\Pictures\\Capture1.PNG"
    Then The new file by name Capture.PNG available at docs and files

  Scenario: User archive files at docs & files page
    Given User at home page
    And User wants to go to the docs and files page
    When Which is where the user will archive the file Capture1.PNG
    Then The new file by name Capture.PNG available at docs and files

  Scenario: User verify button icon docs & files
    Given User at home page
    And User wants to go to the docs and files page
    When User enters one of the docs & files
    Then User will return to the start page of docs



