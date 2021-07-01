const login = require('../pageobjects/login.page')
const dashboard = require('../pageobjects/executiveDashboard')
const exceptChai = require('chai').expect;

describe('Comapny selection dropdown verification',()=>
{
   it('Verify comapny selector functionality of NRP',()=>

   {
     
      login.Login("admin.insight360@analytix.com","Insight360@123");
      login.waitForProgressBar();
      dashboard.tryNewProductURI.waitForExist();
      dashboard.tryNewProductURI.waitForClickable();
      expect(browser).toHaveUrl("https://restaurantinsight.analytix.com/clients")
      dashboard.selectCompany("Seven Restaurants");
      login.waitForProgressBar();
      //expect(dashboard.selectedCompany.getText()).
      exceptChai(dashboard.selectedCompany.getText().trim()).to.equal("Seven Restaurants")

     

   })

  

})