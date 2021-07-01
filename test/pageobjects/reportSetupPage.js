const exceptChai = require('chai').expect;

class reportSetupPage

{

    get reportName()
    {
        return $(".model-label")
    }

    get reportNameType()
    {
        return  $(".editable-item")
    }

    get reportFormat()
    {
        return  $("(//input[@Role='combobox'])[1]")
    }

    get reportCategory()
    {
        return  $("(//input[@Role='combobox'])[2]")
    }
    get btnDaily()
    {
        return  $("//button[contains(@class, 'btn btn--group w-tab') and (text()=' Daily ')]")
    }
    get btnDay()
    {
        return  $("//button[contains(@class, 'btn btn--group w-tab') and (text()=' Day ')]")
    }

    get btnDbtn_CreateReportay()
    {
        return  $("//button[text()=' Create report ']")
    }

    get txt_daysLimit()
    {
        return  $("//input[@max='35']")
    }

    get columnList()
    {
        return  $("//*[@class='lastoption ng-star-inserted']//span[@class='icon-svg-wrap']//*[local-name()='svg']")
    }

    get txt_OkBtn()
    {
        return  $("//button[@type='button'and text()='OK']")
    }


    

    clickOnColumnListButton()
    
    {
        
    this.columnList.waitForClickable();
    this.columnList.click();
    
    
    }

    validateAddedColumns()
    
    {
        
    this.clickOnColumnListButton();
    let addedcolumns= $$("//div[@class='drag-item ng-star-inserted']//div[@class='model-label']")
    const desiredLocator= addedcolumns.map(item=> item.getText().trim());
    console.log(desiredLocator.length) 
    const variablename= desiredLocator[0];
    exceptChai(variablename).to.be.equal("Total Net Sales $")
    //console.log(expect(desiredLocator[0].getText()).toHaveTextContaining("Net sales"));
    this.txt_OkBtn.click();


}
    
    
    
    selectReportFormat(formatname)
    
    {
        
    this.reportFormat.click();
    this.reportFormat.setValue(formatname);
    this.reportFormat.keys("Enter");


    
    
    }

    selectReportCategory(categoryname)
    
    {
        
    this.reportCategory.click();
    this.reportCategory.setValue(categoryname);
    this.reportCategory.keys("Enter");


    
    }
   
    
    clickOnReportName()
    
    {
        
    this.reportName.click();
    
    }

    createReport()
    
    {
        this.btnDbtn_CreateReportay.scrollIntoView();
        this.btnDbtn_CreateReportay.click();
        



    }

    grainByDay_PresentByDay(limit)
    
    {
       // this.btnDaily.scrollIntoView();
        this.btnDaily.click();
        console.log("*****************Daily button clicked*************************");
        //browser.pause(5000)
        this.btnDay.scrollIntoView();
        this.btnDay.click();
        console.log("*****************Day button clicked*************************");

        this.txt_daysLimit.waitForDisplayed();
        this.txt_daysLimit.setValue(limit);



    }
}

module.exports =new reportSetupPage()