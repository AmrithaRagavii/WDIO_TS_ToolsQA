import signUpDetails from "../testData/signUpDetails.json";

class SignUp {

    get nameText() { return $("#userName-label"); }
    get firstName() { return $("#firstName") }
    get lastName() { return $("#lastName") }
    get mobileText() { return $('#userNumber') }
    
    get ClickingOnSubmitButton() { return $(".btn.btn-primary") }




    async setFirstAndLastName(firstname: string, lastname: string) {
        await this.firstName.setValue(firstname)
        await this.lastName.setValue(lastname)
    }
    get email(){ return $("#userEmail")}
    async emailAddress(emailid){
        await this.email.setValue(emailid)

    }
    get gender() { return $("#gender-radio-2") }
    async selectGender() {
        await this.gender.click()
        await this.gender.selectByVisibleText(signUpDetails.Gender)
    }

    async setMobileNumber(mobileNumber: number) {
        await this.mobileText.setValue(mobileNumber)
    }

    get dateOfBirthText() { return $('#dateOfBirthInput'); }
    get dayElement() { return $(".react-datepicker__day.react-datepicker__day--014")}
    get monthElement() { return $(".react-datepicker__month-select") }
    get yearElement() { return $(".react-datepicker__year-select") }
    async selectDateOfBirth() {
        await this.dateOfBirthText.click();
        //await this.dateOfBirthText.selectByVisibleText(signUpDetails.DOB.day)
        await this.monthElement.click();
        await this.dayElement.click()
        await this.monthElement.selectByVisibleText(signUpDetails.DOB.month)
        await this.yearElement.click()
        await this.yearElement.selectByVisibleText(signUpDetails.DOB.year)
        await this.dayElement.waitForClickable()
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

    async submitButton() {
        await this.ClickingOnSubmitButton.click();
    }




}
export default new SignUp()