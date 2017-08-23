import Page from './page';
import UiMap from './login.page.uimap';
// let elements;

export default class LoginPage extends Page {

  constructor() {
    super();
    // elements = new UiMap();
  }

  get name() {
    return `login page`;
  }
  get path() {return `login`;}
  get username() {return `#input-username`;}
  get password() {return `#input-password`;}
  get submit() {return `#login`;}

  login(user, pass) {
    browser.setValue(this.username, user);
    browser.setValue(this.password, pass);
    this.waitAndClick(this.submit);
  }
}
