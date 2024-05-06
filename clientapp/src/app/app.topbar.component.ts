import { Component } from '@angular/core';
import { AppMainComponent, TipNotificareEnum } from './app.main.component';
import { BaseComponent } from './shared/base.component';

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent extends BaseComponent {

  notifModalVisible: boolean = false;
  constructor(public appMain: AppMainComponent) {
    super();
  }


  public async DisplayAllNotification() {
    this.notifModalVisible = true;
  }

  public async goToRedirector(url: string, id: number) {
    this.notifModalVisible = false;
    this.router.navigate([url.replace('{0}', `${id}`)]);
  }

  public async redirectToLink(idTipNotificare: number, id: number) {

  }

  public get isSubscriptionZone() {
    return this.router.url.includes('subscription');
  }
}