@all
Feature: Login
  This feature will check the overall appearance of the scenario of home page

  Scenario: User Login
    Given User login with google
    When User input "zeinazhar12@gmail.com" as email
    And User click button selanjutnya
    When User input "T25121998" as password
    And User click button selanjutnya


