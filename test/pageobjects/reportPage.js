
class reportPage

{

get createNewReportLink()
{
    return $("button[class='btn btn--secondary btn--icon-txt btn--icon-left main add _ml-14']")
}




clickOncreateNewReport()

{

    this.createNewReportLink.click();
    


}

}

module.exports =new reportPage()