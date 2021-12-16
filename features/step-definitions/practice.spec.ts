import { Given, Then, When } from "@wdio/cucumber-framework";
import newPage from "../pageobjects/reloadPage";
import registration from "../pageobjects/registration";
import signUp from "../pageobjects/signUp";
import reloadPage from "../pageobjects/reloadPage";
import signUpDetails from "../testData/signUpDetails.json";
import faker from "faker";
import handling from "../pageobjects/handling";


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


When(/^I Click Submit button$/, async () => {
    await signUp.submitButton();

});
Then(/^I should see the popup page and see the heading as \"([^\"]*)\"$/, async (thanksforsubbmittingtheform)=> {

    await signUp.headerElement.waitForDisplayed()
    await expect(signUp.headerElement).toBeDisplayed()
})

When(/^I will click on close Button$/, async () => {
   // await signUp.closeButton();
});

When(/^I click Alerts, Frame & Windows$/, async () => {
//await handling.clickOnFrame.waitForClickable();
await browser.url("https://demoqa.com/browser-windows")
    await handling.alertFrameWindow();
    // await browser.pause(3000)
});
// When(/^I select Browser Windows$/, async () => {
//     await handling.BrowserWindow();
// });

Then(/^I should see the header as \"([^\"]*)\"$/, async (browserwindows) => {
    await expect(handling.browserWindowsHeader).toHaveTextContaining(browserwindows);
});

When(/^I click New Tab button$/, async () => {
    await handling.newTabButton()
    const switchWindow = await browser.getWindowHandles()
    await browser.switchToWindow(switchWindow[1])

});

Then(/^It should navigate and validate the switched window with header \"([^\"]*)\"$/, async (thisisasamplepage) => {
    await expect(handling.newWindowHeader).toHaveText(thisisasamplepage)
    const switchWindow = await browser.getWindowHandles()
    await browser.closeWindow()
    await browser.switchToWindow(switchWindow[0])
});

When(/^I click Alerts$/, async ()=> {
    await handling.alertButton()
  });

  Then(/^I should see the header as $/, async (alerts)=> {
      await expect(handling.getHeaderAsAlert).toHaveTextContaining(alerts);
  });