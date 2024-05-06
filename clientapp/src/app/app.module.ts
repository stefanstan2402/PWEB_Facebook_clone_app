import { Injector, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, DatePipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
// Componente aplicatie
import { AppComponent } from './app.component';
import { AppMainComponent } from './app.main.component';
import { AppTopBarComponent } from './app.topbar.component';
import { AppPrimeNgModule } from './shared/app.primeng.module';
import { LoginComponent } from './securitate/login/login.component';
import { environment } from 'src/environments/environment';
import { NgxExtendedPdfViewerModule, pdfDefaultOptions } from 'ngx-extended-pdf-viewer';
import { ConfirmationService, MessageService } from 'primeng/api';
import { NotificationService } from './shared/notification.service';
import { AppInjectorService } from './shared/app.injector.service';
import { getVersion, isNewerVersion } from 'src/utils';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MainMenuItemComponent } from './main-menu/menu-item.component';
import { MainMenuService } from './main-menu/main-menu.service';
import { PaginationService } from './shared/pagination.service';
import { SpinnerComponent } from './shared/loading-spinner/spinner.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { AppDialogService } from './shared/dialog.service';
import { DialogService } from 'primeng/dynamicdialog';
import { ListaUsersComponent } from './users/lista-users/lista-users.component';
import { ModificareUsersComponent } from './users/modificare-users/modificare-users.component';
import { RegisterComponent } from './securitate/register/register.component';
import { ListaPostariComponent } from './posts/lista-postari/lista-postari.component';
import { ModificaPostariComponent } from './posts/modifica-postari/modifica-postari.component';
import { ListaCommentsComponent } from './comments/lista-comments/lista-comments.component';
import { ModificareCommentsComponent } from './comments/modificare-comments/modificare-comments.component';
import { LikesComponent } from './likes/likes/likes.component';
import { ListaEventsComponent } from './events/lista-events/lista-events.component';
import { ModificaEventsComponent } from './events/modifica-events/modifica-events.component';
import { ListaFeedbackComponent } from './feedback/lista-feedback/lista-feedback.component';
import { FeedbackComponent } from './feedback/feedback/feedback.component';

// Returneza baseUrl
export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}

// Returneaza API URL, daca este configurat, baseUrl in caz contrar
export function getAPIUrlBusiness() {
  if (environment.API.Business.apiUrl) {
    if (!environment.API.Business.apiUrlRelative) {
      return environment.API.Business.apiUrl;
    } else {
      return `${window.location.protocol}//${window.location.host}/${environment.API.Business.apiUrl}`;
    }
  } else {
    return getBaseUrl();
  }
}

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppPrimeNgModule,
    NgxExtendedPdfViewerModule,
    // AppRouting sa fie intotdeauna ultimul
    AppRoutingModule
  ],
  declarations: [
    // Componente structura aplicatie
    AppComponent,
    AppMainComponent,
    MainMenuComponent,
    MainMenuItemComponent,
    AppTopBarComponent,
    // Componente business aplicatie
    LoginComponent,
    DashboardComponent,
    SpinnerComponent,
    NotFoundComponent,
    ListaUsersComponent,
    ModificareUsersComponent,
    RegisterComponent,
    ListaPostariComponent,
    ModificaPostariComponent,
    ListaCommentsComponent,
    ModificareCommentsComponent,
    LikesComponent,
    ListaEventsComponent,
    ModificaEventsComponent,
    ListaFeedbackComponent,
    FeedbackComponent,
  ],
  providers: [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] },
    { provide: 'API_URL_BUSINESS', useFactory: getAPIUrlBusiness, deps: [] },
      // { provide: DateAdapter, useClass: AppDateAdapter },
      // { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS },
      DatePipe,
      MainMenuService,
      MessageService,
      ConfirmationService,
      NotificationService,
      PaginationService,
      DialogService,
      AppDialogService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector, private httpClient: HttpClient,
    private confirmationService: ConfirmationService) {
    AppInjectorService.setInjector(injector);

    pdfDefaultOptions.assetsFolder = "assets/pdfviewer";

    let _this = this;

    const checkVersionInterval = 10 * 1000;

    let versionCheck = function () {
      _this.httpClient.get('version.json?' + Math.random()).subscribe(data => {

        const versionInfo = data as any;
        const latestVersion = getVersion(versionInfo.version);
      });
    };

    requestAnimationFrame(() => {
      setTimeout(versionCheck, checkVersionInterval);
    });
  }
}
