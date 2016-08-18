import {Page, NavController} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/settings/settings.html',
})
export class SettingsPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }
}
