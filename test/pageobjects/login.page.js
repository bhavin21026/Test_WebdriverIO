class LoginPage
{

get userName()
{
    return $("#Email")
}
get password()
{
    return $("#Password")
}


get signInBtn()
{
    return $("//button[text()='Login']")
}

get progressBar()
{
    return $("//div[@class='spinner']")
}



Login(userName,password)
{
    this.userName.waitForExist();
    this.userName.setValue(userName)
    this.password.waitForClickable();

    this.password.setValue(password)
    this.signInBtn.waitForClickable();

    this.signInBtn.click()

}

waitForProgressBar()

{
console.log(this.progressBar.waitForDisplayed());
    if(this.progressBar.waitForDisplayed()){

this.progressBar.waitForDisplayed();
this.progressBar.waitForDisplayed({ reverse: true });
browser.pause(2000)

    }



}


}

module.exports =new LoginPage()