var Page = require(`./page`);
var EventsPage = Object.create(Page, {


  open: { value() {
    Page.open.call(this, `events`);
  } },

});
