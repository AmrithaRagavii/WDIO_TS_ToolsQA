import signUpDetails from "../testData/signUpDetails.json";
import report from "@wdio/allure-reporter";

class SignUp {

    get firstNameElement() { return $("#firstName") }
    get lastNameElement() { return $("#lastName") }
    async setFirstAndLastName(firstname: string, lastname: string) {
        await this.firstNameElement.setValue(firstname)
        report.addStep(`first name value set to : ${firstname}`)
        await this.lastNameElement.setValue(lastname)
        report.addStep(`last name value set to : ${lastname}`)
    }
    get email() { return $("#userEmail") }
    async emailAddress(emailid) {
        await this.email.setValue(emailid)
        report.addStep(`email value set to : ${emailid}`)
    }

    get gender() { return $("//label[@for='gender-radio-2']") }
    async selectGender() {
        await this.gender.click()
        report.addStep(`performed click on : ${await this.gender.selector}`)
    }
    get mobileNumberElement() { return $('#userNumber') }
    async setMobileNumber(mobileNumber: number) {
        await this.mobileNumberElement.setValue(mobileNumber)
        report.addStep(`email value set to : ${mobileNumber}`)
    }
    get dateOfBirthElement() {
        return $("#dateOfBirthInput")
    }
    get monthElement() {
        return $(".react-datepicker__month-select")
    }
    get yearElement() {
        return $(".react-datepicker__year-select")
    }
    get calander() {
        return $(".react-datepicker__month");
    }
    get weekDay() {
        return $("//div[@class='react-datepicker__day react-datepicker__day--011']");
    }
    async setDataOfBirth() {
        await this.dateOfBirthElement.clearValue();
        await this.monthElement.waitForDisplayed()
        await browser.pause(3000);
        await this.monthElement.click()
        await this.monthElement.selectByVisibleText(signUpDetails.DOB.month)
        await browser.pause(3000);
        report.addStep(`month value set to : ${await this.monthElement.click}`)
        await this.yearElement.click()
        await this.yearElement.selectByVisibleText(signUpDetails.DOB.year)
        await this.yearElement.click()
        await browser.pause(3000);
        report.addStep(`year value set to : ${await this.yearElement.click}`)
        await this.calander.moveTo()
        await this.weekDay.isSelected()
        await this.weekDay.click()
        await browser.pause(3000);
        report.addStep(`date value set to : ${await this.weekDay.click}`)
    }

    get state() { return $("#state") }
    get city() { return $("#city") }
    get currentAddressElement() { return $("#currentAddress") }
    async addressinfo() {
        await this.currentAddressElement.setValue(signUpDetails.address.currentAddress)
        await this.state.click()
        await this.state.selectByVisibleText(signUpDetails.address.state)
        report.addStep(`performed click on : ${this.state}`)
        await this.city.click()
        await this.city.selectByVisibleText(signUpDetails.address.city)
        report.addStep(`performed click on : ${this.city}`)
    }

    get clickingOnSubmitButton() { return $("//div[@class='mt-4 justify-content-end row']/div[@class='text-right col-md-2 col-sm-12']/button[@id='submit']") }
    async submitButton() {
        await this.clickingOnSubmitButton.scrollIntoView();
        await this.clickingOnSubmitButton.click();
        report.addStep(`performed click on : ${await this.clickingOnSubmitButton.selector}`)
    }

    get headerElement() { return $("#example-modal-sizes-title-lg") }

    get clickOnCloseButton() { return $('//button[@id="closeLargeModal"]') }
    async closeButton() {
        await this.clickOnCloseButton.waitForDisplayed();
        report.addStep(`performed click on : ${await this.clickOnCloseButton.selector}`)
    }
}
export default new SignUp()