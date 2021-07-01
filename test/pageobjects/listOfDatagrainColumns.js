
const login = require('../pageobjects/login.page')

class listOfDatagrainColumns

{

get addColumnLink()
{
    return $("//button[contains(text(),'Add Variables')]")
}

get drp_dataGroup()
{
    return $("//ng-select[@placeholder='Select data']")
}

get tpl_Netsales()
{
    return $("(//span[text()='Net Sales'])[1]")
}

get ctg_Actual()
{
    return $("//li[contains(text(),'Actual')]")
}

get ctg_Dollor()
{
    return $("(//span[text()='$'])[1]")
}


get AddColumns()
{
    return $("//button[text()='Add']")
}

get AddVariableTitle()
{
    return $("//p[contains(text(),'Add Variables')]")
}

get progressBarDatagroup()
{

    return $("(//div[@class='spinner'])[2]")

}





clickOnAddColumns()
{

    this.AddVariableTitle.scrollIntoView();
    this.addColumnLink.click();
    browser.pause(2000)
}

hitAddColumnBtn()
{

    this.AddColumns.scrollIntoView();
    this.AddColumns.click();
}

clickoOndataGroup()
{

    this.drp_dataGroup.click()
}



add_Daily_NetSales()
{
    this.clickOnAddColumns();
    this.clickoOndataGroup();
    this.tpl_Netsales.waitForClickable();
    this.tpl_Netsales.click();
    this.waitForProgressbarForDataGroup();
    this.ctg_Actual.waitForClickable();
    this.ctg_Actual.scrollIntoView();
    this.ctg_Actual.click();
    this.ctg_Dollor.scrollIntoView();
    this.ctg_Dollor.click();
    this.hitAddColumnBtn();
    browser.pause(10000)


}

waitForProgressbarForDataGroup()
{
    console.log(this.progressBarDatagroup.waitForDisplayed());
    if(this.progressBarDatagroup.waitForDisplayed()){

this.progressBarDatagroup.waitForDisplayed();
this.progressBarDatagroup.waitForDisplayed({ reverse: true });
browser.pause(2000)
    }


}



}

module.exports =new listOfDatagrainColumns()