Feature: Performing a login
 
    Backgroung:
         Given I'm on the login Page
    
    Scenario: Login with a default user
        When I log in with a default user
        Then I shall be on the My account page