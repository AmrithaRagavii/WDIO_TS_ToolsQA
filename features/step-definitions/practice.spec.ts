import { Given, Then, When } from "@wdio/cucumber-framework";
import newPage from "../pageobjects/reloadPage";
import registration from "../pageobjects/registration";
import signUp from "../pageobjects/signUp";
import reloadPage from "../pageobjects/reloadPage";
import signUpDetails from "../testData/signUpDetails.json";
import faker from "faker";


Given(/^This is the practice form page of ToolsQA$/, async () => {
    await browser.url("https://demoqa.com/automation-practice-form")
});

When(/^I enter the data in all the required fields$/, async () => {
    await signUp.setFirstAndLastName(signUpDetails.name.firstName, signUpDetails.name.lastName);
    await signUp.emailAddress(faker.internet.email());
    await signUp.selectGender();
    await signUp.setMobileNumber(signUpDetails.mobileNumber)
    await signUp.setDataOfBirth();
});

Then(/^I should see the Button as \"([^\"]*)\"$/, async (Submit) => {
    await expect(registration.clickOnSubmitButton).toHaveTextContaining(Submit);
});

When(/^I Click Submit button$/, async () => {
    await signUp.submitButton();
});
// Then(/^I should see the popup message details of form heading as \"([^\"]*)\"$/, async (label)=>{
//     await expect(registration.ThanksPopUpHeader).toHaveTextContaining(label);
//   });
Then(/^I should see the popup page and see the heading as \"([^\"]*)\"$/, async (thanksforsubmittingtheform) => {
    await expect(registration.ThanksPopUPHeaderText).toHaveTextContaining(thanksforsubmittingtheform)
});

// Then(/^I should see the popup page and see the heading as \"([^\"]*)\"$/, async (Thanksforsubmitting) => {
//     await expect(registration.ThanksPopUpHeader).toHaveTextContaining(Thanksforsubmitting);
// });

When(/^I will click on close Button$/, async () => {
    await registration.closeButton();
});

Then(/^the page reloads and the header will be \"([^\"]*)\"$/, async (practiceform) => {
    await expect(reloadPage).toHaveText(practiceform)
});  