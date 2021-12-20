import report from "@wdio/allure-reporter"
class Homepage {
    async homePageLink() { await browser.url("https://demoqa.com/automation-practice-form") }
    async openUrl() {
        await this.homePageLink()
        report.addStep('loading URL:',this.openUrl)
        await browser.maximizeWindow()
        report.addStep('Maximizing window');
    }
}
export default new Homepage();