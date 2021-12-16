import signUpDetails from "../testData/signUpDetails.json";

class SignUp {

    get firstNameElement() { return $("#firstName") }
    get lastNameElement() { return $("#lastName") }
    async setFirstAndLastName(firstname: string, lastname: string) {
        await this.firstNameElement.setValue(firstname)
        await this.lastNameElement.setValue(lastname)
    }
    get email() { return $("#userEmail") }
    async emailAddress(emailid) {
        await this.email.setValue(emailid)
    }

    get gender() { return $("//label[@for='gender-radio-2']") }
    async selectGender() {
        await this.gender.click()
    }
    get mobileNumberElement() { return $('#userNumber') }
    async setMobileNumber(mobileNumber: number) {
        await this.mobileNumberElement.setValue(mobileNumber)
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
        //return $("//div[@role='listbox']")
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
        await this.yearElement.click()
        await this.yearElement.selectByVisibleText(signUpDetails.DOB.year)
        await this.yearElement.click()
        await browser.pause(3000);
        await this.calander.moveTo()
        await this.weekDay.isSelected()
        await this.weekDay.click()
        await browser.pause(3000);
    }

    get state() { return $("#state") }
    get city() { return $("#city") }
    get currentAddressElement() { return $("#currentAddress") }
    async addressinfo() {
        await this.currentAddressElement.setValue(signUpDetails.address.currentAddress)
        await this.state.click()
        await this.state.selectByVisibleText(signUpDetails.address.state)
        await this.city.click()
        await this.city.selectByVisibleText(signUpDetails.address.city)
    }

    get ClickingOnSubmitButton() { return $("//div[@class='mt-4 justify-content-end row']/div[@class='text-right col-md-2 col-sm-12']/button[@id='submit']") }
    async submitButton() {
        await this.ClickingOnSubmitButton.scrollIntoView();
        await this.ClickingOnSubmitButton.click();
    }

    get headerElement(){ return $("#example-modal-sizes-title-lg")}
    
    get ClickOnCloseButton() { return $('//button[@id="closeLargeModal"]') }
    async closeButton() {
        
        await this.ClickOnCloseButton.waitForDisplayed();

    }
}
export default new SignUp()