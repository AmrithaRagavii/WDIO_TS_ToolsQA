class Registeration {
    get PracticeFormText() { return $("pattern-backgound playgound-header"); }

    get clickOnSubmitButton() { return $(".btn.btn-primary") }
    async submitButton() {
        await this.clickOnSubmitButton.click();
    }

    //get ThanksPopUpHeader() { return $('//thead/tr/th[1]') }
    get ThanksPopUPHeaderText() { return $("#example-modal-sizes-title-lg") }

    get ClickOnCloseButton() { return $('#closeLargeModal') }
    async closeButton() {
        await this.ClickOnCloseButton.waitForDisplayed();
    }
}
export default new Registeration()