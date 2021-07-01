const dashboard = require('../pageobjects/executiveDashboard')
const login = require('../pageobjects/login.page')



class setupPage

{

get reportBuilderLink()
{
    return $("//div[normalize-space()='Report Builder']")
}

get reportCategoryLink()
{
    return $("//a[normalize-space()='Reports Categories']")
}

get reportSetupLink()
{
    return $("//a[normalize-space()='Reports Setup']")
}



selectCompany(companyName)

{

    this.tryNewProductURI.click();
    this.companySelector.waitForClickable();
    this.companySelector.setValue(companyName);
    browser.pause(3000);
    let items = $$("ul[class='results__options scroll-custom'] div li");
    const desiredLocator= items.filter(item=> item.getText().trim().toUpperCase === companyName.toUpperCase);
    desiredLocator[0].click();


}

navigateToReportSetupPage()

{
    dashboard.openLeftMenuBar();
    dashboard.clickOnSetupLink();
    this.reportBuilderLink.click();
    this.reportSetupLink.waitForClickable();
    this.reportSetupLink.click();
    login.waitForProgressBar();




}





}

module.exports =new setupPage()