Feature: Automate ToolsQA practice form

    Scenario Outline: As a student, I have to register the Student Registration Form

        Given This is the practice form page of ToolsQA
        When I enter the data in all the required fields
        Then I should see the Button as "Submit"
        When I Click Submit button
        Then I should see the popup page and see the heading as "Thanks for submitting the form"
        # Then I should see the popup message details of form heading as "Label"
        When I will click on close Button
        Then the page reloads and the header will be "Practice Form"