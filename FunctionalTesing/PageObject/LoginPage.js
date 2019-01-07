import page from './page'

class Loginpage extends page{
    get username() {return $('#Login');}
    get password() {return $('#Password');}
    get loginButton() {return $('input.btn.btn-primary');}
    get movingImage() {return $('div.tabbedCarousel-activeImage  div  img');}

    open()
    {
        super.open('/');
    }

    CheckAvailableNowSection() {return browser.checkElement('div.buy-container');}
    CheckGameOverviewSection() { return browser.checkElement('div.gameinfoOverview');}

    CheckSlidingImage() { 
        browser.waitUntil(() => {
            return $('div.tabbedCarousel-activeImage  div  img').getAttribute('src') === 'https://ubistatic19-a.akamaihd.net/marketingresource/en-us/assassins-creed/assassins-creed-odyssey/assets/images/ac_dlc-header-color_bg-first-blade_home_341021.jpg'
          }, 30000, 'expected text to be different after 5s');
       
           return browser.checkElement('div.tabbedCarousel-activeImage  div  img');
        
    }

    CheckMouseMove(){
        browser.checkElement('div.promo-row');
    }


}

export default new Loginpage();