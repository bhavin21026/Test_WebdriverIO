
class executiveDashboard

{

get tryNewProductURI()
{
    return $("div[class='companydropdown-wraper'] span:nth-child(1)")
}

get companySelector()
{
    return $("//input[@type='search' and @placeholder='Search by name...']")
}

get selectedCompany()
{
    return $("div[class='companydropdown-wraper'] span:nth-child(1)")
}

get leftMenuBar()
{
    return $("//div[@class='sidepanel-wraper scroll-custom']")
}

get SetupLink()
{
    return $("//span[normalize-space()='Setup']")
}


get refreshButton()
{
    return $("button[name='btnRefreshCalander'] span")
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

openLeftMenuBar()
{

    this.leftMenuBar.moveTo()
    browser.pause(2000)
}

hitRefresh()
{

    this.refreshButton.click()
}

clickOnSetupLink()
{
    this.SetupLink.scrollIntoView();
    this.SetupLink.waitForClickable();
    this.SetupLink.click();
}


}

module.exports =new executiveDashboard()