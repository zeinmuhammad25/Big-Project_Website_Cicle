@all
Feature: Group Chat
  This feature will check the overall appearance of the scenario of Feature Group Chat

  Scenario: User add normal massage
    Given User login with google
    When User input "zeinazhar12@gmail.com" as email
    And User click button selanjutnya
    When User input "T25121998" as password
    And User click button selanjutnya
    And User click ticket card at teams
    And User click rowbox group chat
    When User input "good morning" as massage
    And User click icon send
    Then User will see massage already send

  Scenario: User delete massage
    Given User login with google
    When User input "zeinazhar12@gmail.com" as email
    And User click button selanjutnya
    When User input "T25121998" as password
    And User click button selanjutnya
    And User click ticket card at teams
    And User click rowbox group chat
    And User click massage
    And User click icon option in massage
    And User click button delete massage

  Scenario: User add massage at two times
    Given User login with google
    When User input "zeinazhar12@gmail.com" as email
    And User click button selanjutnya
    When User input "T25121998" as password
    And User click button selanjutnya
    And User click ticket card at teams
    And User click rowbox group chat
    When User input "api solved" as massage
    And User click icon send
    When User input "night at 10 pm" as massage
    And User click icon send

  Scenario: User add file at massage
    Given User login with google
    When User input "zeinazhar12@gmail.com" as email
    And User click button selanjutnya
    When User input "T25121998" as password
    And User click button selanjutnya
    And User click ticket card at teams
    And User click rowbox group chat
    When User input "C:\\Users\\TELKOM\\Pictures\\Capture1.PNG" as file
    Then User will see file already send
