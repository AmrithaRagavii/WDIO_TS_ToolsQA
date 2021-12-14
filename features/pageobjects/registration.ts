class Registeration{
    get PracticeFormText() {return $ ("pattern-backgound playgound-header");}
    get ClickOnSubmitButton() { return $("//button[@id='submit']"); }
    get ThanksPopUpHeader() { return $ ('#example-modal-sizes-title-lg')}
    get ClickOnCloseButton() { return $('#closeLargeModal')}
    
    async submitButton() {
        await this.ClickOnSubmitButton.click();
    }
    async closeButton(){
        await this.ClickOnCloseButton.click();
    }
}
export default new Registeration()