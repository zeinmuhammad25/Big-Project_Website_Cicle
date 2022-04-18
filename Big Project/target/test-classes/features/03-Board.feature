@all
Feature: Board
  This feature will check the overall appearance of the scenario of Feature Board

  Scenario: User add normal list
    Given User login with google
    When User input "zeinazhar12@gmail.com" as email
    And User click button selanjutnya
    When User input "T25121998" as password
    And User click button selanjutnya
    And User click ticket card at teams
    And User click card board
    And User click logo add list
    When User input "First List" as list name
    And User click button create
    Then User will see new list has been inputed

  Scenario: User add normal card
    Given User login with google
    When User input "zeinazhar12@gmail.com" as email
    And User click button selanjutnya
    When User input "T25121998" as password
    And User click button selanjutnya
    And User click ticket card at teams
    And User click card board
    And User click logo add card
    When User input "First Card" as card name
    And User click add new cart
    Then User will see new card been inputed

  Scenario: User check at icon MuiSvgIcon to verify button
    Given User login with google
    When User input "zeinazhar12@gmail.com" as email
    And User click button selanjutnya
    When User input "T25121998" as password
    And User click button selanjutnya
    And User click ticket card at teams
    And User click card board
    And User click icon MuiSvgIcon
    Then User will see display row explore

  Scenario: User check at icon home to verify button
    Given User login with google
    When User input "zeinazhar12@gmail.com" as email
    And User click button selanjutnya
    When User input "T25121998" as password
    And User click button selanjutnya
    And User click ticket card at teams
    And User click card board
    And User click icon home
    Then User will see display home

  Scenario: User add normal input notes and attachments
    Given User login with google
    When User input "zeinazhar12@gmail.com" as email
    And User click button selanjutnya
    When User input "T25121998" as password
    And User click button selanjutnya
    And User click ticket card at teams
    And User click card board
    And User click card feature attach from second list
    And User click icon notes
    When User input "perubahan awal" as notes
    And User click button save
    When User attach file "C:\\Users\\TELKOM\\Pictures\\Capture1.PNG" as file attachment
    Then User will see update data from notes
    Then User will see update data from file attachments

  Scenario: User delete notes and attachment at card feature attach
    Given User login with google
    When User input "zeinazhar12@gmail.com" as email
    And User click button selanjutnya
    When User input "T25121998" as password
    And User click button selanjutnya
    And User click ticket card at teams
    And User click card board
    And User click card feature attach from second list
    And User click icon notes
    When User input " " as notes
    And User click button save
    And User delete attachment
    Then Verify delete

  Scenario: User add member at modify card
    Given User login with google
    When User input "zeinazhar12@gmail.com" as email
    And User click button selanjutnya
    When User input "T25121998" as password
    And User click button selanjutnya
    And User click ticket card at teams
    And User click card board
    And User click card feature attach from second list
    And User click button members
    And User will choose member to collaborate
    And User can also add and remove in the add member icon
    Then User will choose deleted member from collaborate

  Scenario: User add normal due date
    Given User login with google
    When User input "zeinazhar12@gmail.com" as email
    And User click button selanjutnya
    When User input "T25121998" as password
    And User click button selanjutnya
    And User click ticket card at teams
    And User click card board
    And User click card feature attach from second list
    And User click button due date
    When User setup the date "12122022" as date
    And User click button save
    Then User will see display due date

  Scenario: User add remove due date at card have been finish
    Given User login with google
    When User input "zeinazhar12@gmail.com" as email
    And User click button selanjutnya
    When User input "T25121998" as password
    And User click button selanjutnya
    And User click ticket card at teams
    And User click card board
    And User click card feature attach added due date
    And User clicks the due date timer
    And User click remove due date

  Scenario: User will move the card by using the move feature icon by list
    Given User login with google
    When User input "zeinazhar12@gmail.com" as email
    And User click button selanjutnya
    When User input "T25121998" as password
    And User click button selanjutnya
    And User click ticket card at teams
    And User click card board
    And User click card feature attach from second list
    And User click icon move
    And User click list
    And User set position "Threed List" list which is aimed

  Scenario: User will move the card by using the move feature icon by list  for two times
    Given User login with google
    When User input "zeinazhar12@gmail.com" as email
    And User click button selanjutnya
    When User input "T25121998" as password
    And User click button selanjutnya
    And User click ticket card at teams
    And User click card board
    And User click card feature attach from second list
    And User click icon move
    And User set position which is aimed
    And User click button move

  Scenario: User will move the card by using the move feature icon by position
    Given User login with google
    When User input "zeinazhar12@gmail.com" as email
    And User click button selanjutnya
    When User input "T25121998" as password
    And User click button selanjutnya
    And User click ticket card at teams
    And User click card board
    And User click card feature attach from second list
    And User click icon move
    And User set position which is aimed
    And User click button move

  Scenario: User add add card to private card
    Given User login with google
    When User input "zeinazhar12@gmail.com" as email
    And User click button selanjutnya
    When User input "T25121998" as password
    And User click button selanjutnya
    And User click ticket card at teams
    And User click card board
    And User click card feature attach from second list
    And User click button private card
    Then User will see the card will be private

  Scenario: User add card to public card
    Given User login with google
    When User input "zeinazhar12@gmail.com" as email
    And User click button selanjutnya
    When User input "T25121998" as password
    And User click button selanjutnya
    And User click ticket card at teams
    And User click card board
    And User click card feature attach from second list
    And User click button public card











