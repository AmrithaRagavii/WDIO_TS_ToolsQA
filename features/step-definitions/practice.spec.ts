import { Given, Then, When } from "@wdio/cucumber-framework";
import newPage from "../pageobjects/reloadPage";
import registration from "../pageobjects/registration";
import signUp from "../pageobjects/signUp";
import reloadPage from "../pageobjects/reloadPage";
import signUpDetails from "../testData/signUpDetails.json";
import faker from "faker";
import elementPage from "../pageobjects/elementPage";




Given(/^This is the practice form page of ToolsQA$/, async () => {
    await browser.url("https://demoqa.com/automation-practice-form")
});

When(/^I enter the data in all the required fields$/, async () => {
    await signUp.setFirstAndLastName(signUpDetails.name.firstName,signUpDetails.name.lastName);
    await signUp.selectDateOfBirth();
    await signUp.setMobileNumber(signUpDetails.mobileNumber)
    await signUp.selectGender();
    await signUp.emailAddress(faker.internet.email());
    
});

Then(/^I should see the Button as \"([^\"]*)\"$/, async (submit) => {
    await expect(registration.submitButton).toHaveText(submit);
});

When(/^I Click submit button$/, async () => {
    await signUp.submitButton()
});

Then(/^I should see the popup page and see the heading as \"([^\"]*)\"$/, async (thanksforsubmittingtheform) => {
    await expect(registration.ThanksPopUpHeader).toHaveText(thanksforsubmittingtheform);
});

When(/^I will click on close Button$/, async () => {
    await registration.closeButton()
});

Then(/^the page reloads and the header will be \"([^\"]*)\"$/, async (practiceform) => {
    await expect(reloadPage).toHaveText(practiceform)
});

// When(/^I click Elements$/, async ()=> {
//    await elementPage.ElementButton()
    
//   });

//   Then(/^I should see the RadioButton$/, async ()=> {
//     await expect(elementPage).toHaveText(RadioButton)
    
// });

//   When(/^I click RadioButton$/, async ()=> {
//    await elementPage.RadioButton()

    
//   });
//   Then(/^I should see the text as \"([^\"]*)\"$/, async (doulikethesite, )=> {
//     await expect(elementPage).toHaveText(doulikethesite)
// });

//   When(/^I click yes$/, async ()=> {
//          await elementPage.clickingYes
    
//    });
// Then(/^I should see the text as \"([^\"]*)\"$/, async (youhaveselectedyes)=> {
//     await expect(elementPage).toHaveText(youhaveselectedyes)
//    });

  