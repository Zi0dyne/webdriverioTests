var assert = require('assert');

describe('webdriver.io page', function () {
    it.skip('should have the right title', function () {
        browser.url('/');
        var title = browser.getTitle();
        assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js');

    });

    it('should have a link to the API page', function () {
        browser.url('/');
        var hasApiLink = browser.isExisting('=API');
        assert(hasApiLink);
        //browser.isExisting('a[href="/api.html"]');
    });

    it('should take you to the API docs page', function () {
        browser.url('/');
        browser.click('=API');
        var title = browser.getTitle();
        assert.equal(title, 'WebdriverIO - API Docs');

//        browser.pause(2000);
        browser.debug();
    });

    it('should filter search results', function () {
        browser.url('/api.html');
        browser.setValue('input[name="search"]', 'debug');
        browser.saveScreenshot('api-with-result.png');
    });

    it.only('should log you in', function () {
        browser.url('/');
        var title = browser.getTitle();
        assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js');

    });

});