
var expect = require(`chai`).expect;
var FormPage = require(`./pageobjects/form.page`);
var EventsPage = require(`./pageobjects/events.page`);

describe(`auth form`, function () {
  it(`should deny access with wrong creds`, function () {
    FormPage.open();
    FormPage.username.setValue(`foo@emir.com`);
    FormPage.password.setValue(`bar`);
    FormPage.submit();
    browser.pause(2000);
    browser.alertAccept();
    expect(browser.isVisible(`#login`)).to.be.true;
  });

  it(`should allow access with correct creds`, function () {
    FormPage.open();
    FormPage.username.setValue(`ihatemyjob4@hotmail.com`);
    FormPage.password.setValue(`daniel`);
    FormPage.submit();
    browser.waitForVisible(`#events`);
    expect(browser.isVisible(`#events`)).to.be.true;
  });
});
