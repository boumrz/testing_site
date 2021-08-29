const { By, Key } = require('selenium-webdriver');
const assert = require('assert');
const constants = require('../constants');

class FindElement {
    constructor(driver) {
        this.driver = driver;
    }

    async find() {
        await this.driver.get('https://lm.skillbox.ru/qa_tester/module01/');
        await this.driver.findElement(By.name('name')).sendKeys(constants.inputValue, Key.RETURN);
        await this.driver.findElement(By.className('start-screen__res container')).getText().then(
            textValue => {
                assert.equal(constants.expectedTextValue, textValue);
            }).catch((e) => {
                console.log(`Должно выводится значение: '${e.actual}', но выводится это: '${e.expected}'`);
            });
    }
}

module.exports = FindElement;