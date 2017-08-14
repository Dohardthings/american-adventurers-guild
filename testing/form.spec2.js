const expect = require(`chai`).expect;
import LoginPage from './classes/login.page';
import EventsPage from './classes/events.page';
let Page;

describe(`auth form`, function () {
  it(`should deny access with wrong creds`, function () {
    Page = new LoginPage();
    Page.open(Page.path);
    Page.login(`foo@emir.com`, `bar`);
    browser.pause(2000);
    browser.alertAccept();
    expect(browser.isVisible(Page.submit)).to.be.true;
  });

  it(`should allow access with correct creds`, function () {
    Page = new LoginPage();
    Page.open(Page.path);
    Page.login(`ihatemyjob4@hotmail.com`, `daniel`);
    Page = new EventsPage();
    browser.waitForVisible(Page.title);
    expect(browser.isVisible(Page.title)).to.be.true;
  });
});
