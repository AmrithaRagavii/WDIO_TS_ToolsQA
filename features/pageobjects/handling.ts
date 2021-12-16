class Handling{
    get clickOnFrame(){ return $("//div[@class='header-text' and text()='Alerts, Frame & Windows']")}
    async alertFrameWindow() {
        await this.clickOnFrame.click();
    }
    get clickingOnBrowserWindows(){ return $("//span[text()='Browser Windows']")}
    async BrowserWindow() {
        await this.clickingOnBrowserWindows.click();
    }

    get browserWindowsHeader() { return $(".main-header"); }
    get clickingOnNewTabButton() { return $("#tabButton"); }
    async newTabButton() {
        await this.clickingOnNewTabButton.click();
    }
    get newWindowHeader() { return $("#sampleHeading"); }
    get clickOnAlertButton() { return $("//li[@class='btn btn-light active']/span[text()='Alerts']"); }
    async alertButton() {
        await this.clickOnAlertButton.scrollIntoView();
        await this.clickOnAlertButton.click();
    }
    get getHeaderAsAlert() { return $(".main-header"); }

}
export default new Handling()