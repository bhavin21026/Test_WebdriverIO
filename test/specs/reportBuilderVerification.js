const login = require('../pageobjects/login.page')
const dashboard = require('../pageobjects/executiveDashboard')
const setup = require('../pageobjects/setupPage')
const reportPage = require('../pageobjects/reportPage')
const reportSetupPage = require('../pageobjects/reportSetupPage')
const datagroup = require('../pageobjects/listOfDatagrainColumns')

const exceptChai = require('chai').expect;

describe('Report builder test cases',function()
{
   it('Verify create new report link os working or not',function()

   {
      //this.retries(0)

      login.Login("admin.insight360@analytix.com","Insight360@123");
      login.waitForProgressBar();
      dashboard.tryNewProductURI.waitForExist();
      dashboard.tryNewProductURI.waitForClickable();
      //expect(browser).toHaveUrl("https://restaurantinsight.analytix.com/clients")
      dashboard.selectCompany("Seven Restaurants");
      login.waitForProgressBar();
      dashboard.refreshButton.waitForClickable();
      setup.navigateToReportSetupPage();
      reportPage.clickOncreateNewReport();
      exceptChai(reportSetupPage.reportName.getText()).to.be.equals("Report Name")
      browser.pause(5000)

      
      reportSetupPage.reportName.moveTo();
      reportSetupPage.reportName.click();

      reportSetupPage.reportNameType.keys('Netsales')
      reportSetupPage.selectReportFormat("variable in column");
      reportSetupPage.selectReportCategory("Operations");
      reportSetupPage.grainByDay_PresentByDay("35");
      browser.pause(2000)

      datagroup.add_Daily_NetSales();
      reportSetupPage.validateAddedColumns();
      reportSetupPage.createReport();
      browser.pause(2000)

      






     

   })



  

})