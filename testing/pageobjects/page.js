function Page() {
  this.title = `My Page`;
}
Page.prototype.open = function (path) {
  browser.url(`localhost:4200/` + path);
};
module.exports = new Page();
