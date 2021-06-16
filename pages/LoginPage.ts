export class LoginPage {

    getUrlPage(){
        return browser.getUrl();
    }
    
    loginPageClick(){
        return browser.elementClick("//*[@id=\"header\"]/div[2]/div/div/nav/div[1]/a");
    }

    typeEmailAdress(adress: string){
        return browser.elementSendKeys("//*[@id=\"email\"]",adress);
    }

    typeUserPassword(pw: string){
        return browser.elementSendKeys("//*[@id=\"passwd\"]",pw);
    }

    singInClick(){
        return browser.elementClick("//*[@id=\"SubmitLogin\"]");
    }

    myAccountTitle(){
        return browser.isElementDisplayed("//*[@id=\"center_column\"]/h1");
    }

}