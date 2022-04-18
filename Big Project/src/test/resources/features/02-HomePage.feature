@HomePage
Feature: Home Page
  This feature will check the overall appearance of the scenario of Feature Home Page

  Scenario: Add blank card at big project qa 12
    Given User login with google
    When User input "zeinazhar12@gmail.com" as email
    And User click button selanjutnya
    When User input "T25121998" as password
    And User click button selanjutnya
    And User add card at big project
    And User click button create big project
    Then User can see new card in big project

  Scenario: Add blank card at big project qa 12 with two times
    Given User login with google
    When User input "zeinazhar12@gmail.com" as email
    And User click button selanjutnya
    When User input "T25121998" as password
    And User click button selanjutnya
    And User add card at big project
    And User click button create big project
    When User can see new card in big project
    And User add card at big project
    And User click button create big project
    Then User can see new card in big project in two times

  Scenario: Add card with input name and description at big project qa 12 and verify card inputed
    Given User login with google
    When User input "zeinazhar12@gmail.com" as email
    And User click button selanjutnya
    When User input "T25121998" as password
    And User click button selanjutnya
    And User add card at big project
    When User input "Project" as name project and "Ini project tentang kita" as description
    And User click button create big project
    Then The user can confirm the input that has been filled in previously with the parameters

  Scenario: Add card at teams
    Given User login with google
    When User input "zeinazhar12@gmail.com" as email
    And User click button selanjutnya
    When User input "T25121998" as password
    And User click button selanjutnya
    And User add card at teams
    And User click button create teams
    Then User can see new card in teams

  Scenario: Add card at projects
    Given User login with google
    When User input "zeinazhar12@gmail.com" as email
    And User click button selanjutnya
    When User input "T25121998" as password
    And User click button selanjutnya
    And User add card at projects
    And User click button create projects
    Then User can see new card in projects






