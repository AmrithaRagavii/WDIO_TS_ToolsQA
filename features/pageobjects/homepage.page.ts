class Homepage {
    async homePageLink() { await browser.url("https://demoqa.com/automation-practice-form") }
    async openUrl() {
        await this.homePageLink()
        await browser.maximizeWindow()
    }
}
export default new Homepage();