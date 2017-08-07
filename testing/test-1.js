var expect = require(`chai`).expect;
describe(`Are elements visible`, function () {
  describe(`Visibility`, function () {
    it(`should show that all elements are visible with true`, function () {
      browser.url(`http://localhost:4200/`);
      expect(browser.isVisible(`#ember490 > button`)).to.be.true;
      expect(browser.isVisible(`#ember508 > button`)).to.be.true;
    });
  });
});
