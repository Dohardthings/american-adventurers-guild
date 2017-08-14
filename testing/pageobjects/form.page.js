var Page = require(`./page`);
var LoginPage = Object.create(Page, {
    /**
     * define elements
     */
  username: { get() { return browser.element(`#input-username`); } },
  password: { get() { return browser.element(`#input-password`); } },
  form: { get() { return browser.element(`#login`); } },
    /**
     * define or overwrite page methods
     */
  open: { value() {
    Page.open.call(this, `login`);
  } },
  submit: { value() {
    this.form.submitForm();
  } },
});
module.exports = LoginPage;
