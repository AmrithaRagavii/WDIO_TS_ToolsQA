Feature: Automate ToolsQA practice form

    Scenario: As a student, I have to register the Student Registration Form

        Given This is the practice form page of ToolsQA
        When I enter the data in all the required fields
        When I Click Submit button
        Then I should see the popup page and see the heading as "Thanks for subbmitting the form"
        When I will click on close Button

    Scenario: Handling Alerts& Windows
        When I click Alerts, Frame & Windows
        Then I should see the header as "Browser Windows"
        When I click New Tab button
        Then It should navigate and validate the switched window with header "This is a sample page"
