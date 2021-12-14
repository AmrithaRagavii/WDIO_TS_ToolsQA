Feature: Automate ToolsQA practice form

    Scenario Outline: As a student, I have to register the Student Registration Form

        Given This is the practice form page of ToolsQA
        When I enter the data in all the required fields
        Then I should see the Button as "Submit"
        When I Click submit button
        Then I should see the popup page and see the heading as "Thanks for submitting the form"
        When I will click on close Button
        Then the page reloads and the header will be "Practice Form"
        # When I click Elements 
        # Then I should see the RadioButton
        # When I click RadioButton 
        # Then I should see the text as "Do u like the site"
        # When I click yes
        # Then I should see the text as "You have selected yes"
        # When I click interactions 
        # Then I should see the Droppable
        # When I click Droppable
        # Then I should see the Drag me text
        # When I can Drag the Drag me
        # Then I should see the dropped
