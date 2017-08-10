var expect = require(`chai`).expect;

describe(`Are elements visible`, function () {
  describe(`Visibility`, function () {
    it(`should show that all elements are visible with true`, function () {
      browser.url(`http://localhost:4200/`);
      expect(browser.isVisible(`#ember490 > button`)).to.be.true;
      expect(browser.isVisible(`#ember508 > button`)).to.be.true;
    });
  });

  describe(`Login`, function () {
    it(`should log in successfully if credentials are valid`, function () {
      browser.url(`http://localhost:4200/`);
      browser.click(`#ember525 > button`);
      expect(browser.getUrl(`http://localhost:4200/login`));

      // Fill in Input for Name
      browser.element(`#input-username`).setValue(`ihatemyjob4@hotmail.com`);
      // Fill in Input for Subject
      browser.element(`#input-password`).setValue(`daniel`);
      // Click on Submit button
      expect(browser.isVisible(`#login`)).to.be.true;
      browser.click(`#login`);

      // Check Resulting Url is course-directory
      browser.waitForVisible(`#events`);
      expect(browser.isVisible(`#events`)).to.be.true;
    });
  });

  // describe(`Visibility`, function () {
  //   it(`should show that all elements are visible with true`, function () {
  //     browser.url(`http://localhost:4200/`);
  //     expect(browser.isVisible(`//*[@id="ember858"]`)).to.be.true;
  //     expect(browser.isVisible(`//*[@id="ember886"]`)).to.be.true;
  //   });
  // });
});
