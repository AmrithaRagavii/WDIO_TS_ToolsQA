import report from "@wdio/allure-reporter";

class Handling {
    get clickOnFrame() { return $("//div[@class='header-text' and text()='Alerts, Frame & Windows']") }
    async alertFrameWindow() {
        await this.clickOnFrame.click();
        report.addStep(`performed click on : ${await this.clickOnFrame.selector}`)
    }

    get clickingOnBrowserWindows() { return $("//span[text()='Browser Windows']") }
    async browserWindow() {
        await this.clickingOnBrowserWindows.click();
        report.addStep(`performed click on : ${await this.clickingOnBrowserWindows.selector}`)
    }

    get browserWindowsHeader() { return $(".main-header"); }
    get clickingOnNewTabButton() { return $("#tabButton"); }
    async newTabButton() {
        await this.clickingOnNewTabButton.click();
        report.addStep(`performed click on : ${await this.clickingOnNewTabButton.selector}`)
    }
    get newWindowHeader() { return $("#sampleHeading"); }
}
export default new Handling()