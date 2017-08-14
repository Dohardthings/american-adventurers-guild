export default class Page {

  get name() {return `basePage`;}
  waitAndClick(element) {
    browser.waitUntil(() => {
      return browser.isVisible(element);
    }, `Unable to locate ${element}. Current url is ${browser.getUrl()}`, 500);
    browser.click(element);
  }
  open(path) {
    browser.url(`localhost:4200/${path}`);
  }

}
