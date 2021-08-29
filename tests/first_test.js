const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
const FindElement = require('../classes/FindElement');
const constants = require('../constants');

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

describe('Element detection test', () => {
    const driver = new Builder().forBrowser('chrome').build();
    const findElement = new FindElement(driver);

    it('Should find the line \'Привет, Вася!\'', async () => {
        await driver.manage().setTimeouts( { implicit: constants.TIMEOUT, pageLoad:
            constants.TIMEOUT, script: constants.TIMEOUT } );
        await findElement.find();
    })

    after(async () => driver.quit());
});