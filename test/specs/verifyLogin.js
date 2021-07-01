const login = require('../pageobjects/login.page')
const dashboard = require('../pageobjects/executiveDashboard')
const exceptChai = require('chai').expect;

describe('Verify login functionality of NRP',()=>
{
   it('Verify login functionality of NRP with valid credentials',()=>

   {
     
      login.Login("admin.insight360@analytix.com","Insight360@123");
      login.waitForProgressBar();
      dashboard.tryNewProductURI.waitForExist();
      dashboard.tryNewProductURI.waitForClickable();
      expect(browser).toHaveUrl("https://restaurantinsight.analytix.com/clients")
     

   })

  

})