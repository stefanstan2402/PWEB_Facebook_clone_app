import { Component, OnInit, OnDestroy, ElementRef, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { AppInjectorService } from './app.injector.service';
import { BreakpointHandsetService } from './breakpoint-handset.service';
import { formatDate } from 'src/utils';
import { BusinessAPI } from 'src/api/business/lib/businessAPI';
import { NotificationService } from './notification.service';
import { ApiResponse } from 'src/api/base.models';
import { AuthService } from '../securitate/auth.service';
import * as AppConstants from "src/constants";
import { Table } from 'primeng/table';
import { LoaderService } from './loader.service';
import { FilterService, SelectItem } from 'primeng/api';
import { BusinessApiClient } from './business-api-client';

@Component({
  template: ''
})
export class BaseComponent implements OnInit, OnDestroy {

  //#region Fields

  protected router: Router;

  public businessApiUrl: string;
  public administrareApiUrl: string;
  public nomenclatoareApiUrl: string;
  public reportingApiUrl: string;
  public pregatireProfesionalaApiUrl: string;
  public rsiApiUrl: string;
  public mcApiUrl: string;

  public authService = inject(AuthService);
  protected businessApiClient = inject(BusinessApiClient);
  
  public notificationService: NotificationService;
  private loadingService: LoaderService;
  public loading: boolean = false; // folosit pentru grid
  public breakpointHandsetService: BreakpointHandsetService;
  public http: HttpClient;
  public filterService: FilterService;


  private location!: Location;
  public dataLoaded: boolean = false;

  public constanteFisier = AppConstants.VizualizareFisierApiUrl;
  public constanteRaport = AppConstants.VizualizareRaportApiUrl;
  public imageSource: string = '';
  public matchModeOptions: SelectItem[];

  //#endregion Fields

  constructor() {
    this.InjectDIs();
  }

  ngOnInit() { }

  ngOnDestroy() { }

  //#region Methods

  /**
   * Extrage dependintele
  */
  private InjectDIs() {
    const injector = AppInjectorService.getInjector();

    if (injector) {
      this.businessApiUrl = injector.get('API_URL_BUSINESS');     

      this.router = injector.get(Router);
      this.notificationService = injector.get(NotificationService);
      this.breakpointHandsetService = injector.get(BreakpointHandsetService);
      this.http = injector.get(HttpClient);
      this.loadingService = injector.get(LoaderService);
      this.location = injector.get(Location);
      this.filterService = injector.get(FilterService);
    }
  }

  public columnFormatData(value, item) {
    return formatDate(value);
  }

  //#endregion Methods

  //#region businessApiClient

  async getData<T>(actiune: (x: BusinessAPI) => Promise<ApiResponse<T>>): Promise<T | undefined> {
    try {
      this.setIsLoading = true;

      return await actiune(this.businessApiClient.api) as ApiResponse<T>;
    } catch (ex) {
      // Daca nu mai suntem autentificati, afisam o notificare si facem logout
      if (ex.statusCode === 401) {
        this.notificationService.showError("Sesiune expirată!");
        setTimeout(() => { this.authService.logout(); }, 1000);
      } else if (ex.statusCode === 403) {
        this.notificationService.showError("Acces nepermis!");
      } else {
        throw ex;
      }
    } finally {
      this.setIsLoading = false;
    }
    return new Promise(reject => { });
  }

  async getActiune(actiune: (x: BusinessAPI) => Promise<ApiResponse<any>>): Promise<any> {
    try {
      this.setIsLoading = true;

      return await actiune(this.businessApiClient.api) as ApiResponse<any>;
    }
    catch (ex) {
      // Daca nu mai suntem autentificati, afisam o notificare si facem logout
      if (ex.statusCode === 401) {
        this.notificationService.showError("Sesiune expirată!");
        setTimeout(() => { this.authService.logout(); }, 1000);
      } else if (ex.statusCode === 403) {
        this.notificationService.showError("Acces nepermis!");
      } else {
        throw ex;
      }
    } finally {
      this.setIsLoading = false;
    }
  }

  async postData(actiune: (x: BusinessAPI) => Promise<ApiResponse<any>>): Promise<any> {
    try {
      this.setIsLoading = true;

      return await actiune(this.businessApiClient.api) as ApiResponse<any>;
    } catch (ex) {
      // Daca nu mai suntem autentificati, afisam o notificare si facem logout
      if (ex.statusCode === 401) {
        this.notificationService.showError("Sesiune expirată!");
        setTimeout(() => { this.authService.logout(); }, 1000);
      } else if (ex.statusCode === 403) {
        this.notificationService.showError("Acces nepermis!");
      } else {
        throw ex;
      }
    } finally {
      this.setIsLoading = false;
    }
  }

  async ruleaza(actiune: () => Promise<void>): Promise<void> {
    try {
      this.setIsLoading = true;

      await actiune();
    } catch (ex) {
      // Daca nu mai suntem autentificati, afisam o notificare si facem logout
      if (ex.statusCode === 401) {
        this.notificationService.showError("Sesiune expirată!");
        setTimeout(() => {
          this.authService.logout();
        }, 1000);
      } else if (ex.statusCode === 403) {
        this.notificationService.showError("Acces nepermis!");
      } else {
        throw ex;
      }
    } finally {
      this.setIsLoading = false;
    }
  }

  async ruleazaAsync<T>(actiune: () => Promise<T | null>): Promise<T | null> {
    try {
      //this.setIsLoading = true;

      return await actiune();
    } catch (ex) {
      // Daca nu mai suntem autentificati, afisam o notificare si facem logout
      if (ex.statusCode === 401) {
        this.notificationService.showError("Sesiune expirată!");
        setTimeout(() => {
          this.authService.logout();
        }, 1000);
      } else if (ex.statusCode === 403) {
        this.notificationService.showError("Acces nepermis!");
      } else {
        this.notificationService.showErrorEx(ex);
      }

      return null;
    } finally {
      //this.setIsLoading = false;
    }
  }

  //#endregion
  
  //#region UI Methods

  protected setFocus(element: ElementRef) {
    setTimeout(() => {
      element.nativeElement.focus();
    }, 1);
  }

  public get isLoading(): boolean {
    return this.loadingService.getLoading();
  }

  /**
   * Metoda porneste UI-ul de incarcare
   */
  public set setIsLoading(value: boolean) {
    this.loadingService.setLoading(value);
    this.loading = value;
  }

  protected async performOperationWithLoading(actionDo: () => Promise<void>, actionOnException: () => Promise<void> = null, actionFinally: () => Promise<void> = null) {
    try {
      this.setIsLoading = true;
      if (actionDo != null) {
        await actionDo();
      }
    } catch (exc) {
      if (actionOnException != null) {
        await actionOnException();
      }

      this.notificationService.showError(exc);
    } finally {
      this.setIsLoading = false;
      if (actionFinally != null) {
        await actionFinally();
      }
    }
  }

  /** 
   * Afiseaza in interfata un mesaj de anulare a modificarilor.
   * Metoda poate fi suprascrisa pentru a extinde metoda de onAccept()
   */
  public anulare() {
    this.notificationService.confirmYesNo(
      'Sunteți sigur că doriți să anulați modificările efectuate?',
      'Confirmare anulare modificări',
      () => { /* onAccept */ this.goBack(); },
      () => { /* onReject */ return; });
  }

  public esteInModVizualizare(activatedRoute: ActivatedRoute): boolean {
    // Metodă generală pentru a verifica dacă pagina curentă este în modul de vizualizare (ultimul valoare din url este 'vizualizare')
    let modVizualizare: boolean = false;
    activatedRoute.url.subscribe(urlSegments => {
      if (urlSegments && urlSegments.length > 0) {
        const lastSegment = urlSegments[urlSegments.length - 1].path;
        if (lastSegment === 'vizualizare')
          modVizualizare = true;
      }
    });
    return modVizualizare;
  }

  //#endregion UI Methods

  //#region  Session storage methods

  protected removeSessionStorage(key: string) {
    sessionStorage.removeItem(key);
  }

  protected setSessionStorage<T>(key: string, value: T) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  protected getSessionStorage(key: string): any {
    const local = sessionStorage.getItem(key);

    if (local) {
      return JSON.parse(local);
    }

    return null;
  }

  //#endregion  Local storage methods

  //#region Navigation

  public navigateToRelative(commands: any, activatedRoute: ActivatedRoute) {
    if (Array.isArray(commands)) {
      this.router.navigate(commands, { relativeTo: activatedRoute });
    } else {
      this.router.navigate([commands], { relativeTo: activatedRoute });
    }
  }

  public navigateToRelativeMultipleParams(urls: string[], activatedRoute: ActivatedRoute) {
    this.router.navigate(urls, { relativeTo: activatedRoute });
  }

  public navigateWithMultipleParams(urls: string[]) {
    this.router.navigate(urls);
  }

  public navigateTo(url: string, data?: any) {
    this.router.navigate([url], data);
  }

  public showErrorAndGoToHomePage(error: string) {
    this.notificationService.showError(error);
    this.navigateToHomePage();
  }

  public navigateToHomePage() {
    this.router.navigate(["/dashboard"]);
  }

  public navigateToUrl(url: string, data?: any) {
    this.router.navigateByUrl(url, data);
  }

  public async goBack() {
    await this.location?.back();
  }

  public goNext() {
    this.location?.forward();
  }

  public get currentRouteURL(): string {
    return this.router.url;
  }

  public get getRouter() {
    return this.router;
  }

  //#endregion Navigation

  //#region Alte metode

  public formControlByName(frmGrup: FormGroup, frmControlName: string): FormControl {
    return frmGrup.get(frmControlName) as FormControl;
  }

  //#endregion Alte metode

  //#region Metode pentru vizualizare fisiere sau rapoarte

  /** Metoda care deschide o noua pagina pentru vizualizarea fisierului */
  public vizualizareFisier(url: string, codFisier: string) {
    window.open(`vizualizare-fisier/${codFisier}?p=${encodeURIComponent(url)}`, '_blank');
  }

  public vizualizareRaport(url: string) {
    window.open(`vizualizare-raport?p=${encodeURIComponent(url)}`, '_blank');
  }
  //#endregion Tratare fisiere

  //#region Metode pentru grid de date

  /**
   * Metoda care elimina filtrele aplicate pe gridul de date
   */
  public clear(table: Table) {
    table.clear();
  }

  /**
   * Metoda care filtreaza valorile din coloanele gridului de date
   */
  public filterTable(event, dataTable, globalFilterFields?, initialTotalRecords?) {
    let searchTerm = event.target.value;
    const normalizedSearchTerm = this.removeDiacritics(searchTerm);
    const filteredData = this.customFilter(dataTable.value, normalizedSearchTerm, globalFilterFields);
    dataTable.filteredValue = filteredData;
    dataTable.totalRecords = searchTerm.length > 0 ? filteredData?.length : (initialTotalRecords !== null ? initialTotalRecords : 0);
  }

  public removeDiacritics(str: string): string {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  /**
   * Metoda care creeaza un filtru custom pentru cautarea in gridul de date
   */
  public customFilter(data: any[], searchTerm: string, globalFilterFields: string[]): any[] {
    const normalizedSearchTerm = this.removeDiacritics(searchTerm.toLowerCase());
    return data.filter((item) => {
      for (const prop in item) {
        if (item.hasOwnProperty(prop) && globalFilterFields?.includes(prop)) {
          let normalizedValue = item[prop];
          if (typeof item[prop] === 'string') {
            normalizedValue = this.removeDiacritics(item[prop].toLowerCase());
            if (normalizedValue.includes(normalizedSearchTerm)) {
              return true;
            }
          } else {
            normalizedValue = `${item[prop]}`;
            if (normalizedValue.includes(normalizedSearchTerm)) {
              return true;
            }
          }
        }
      }
      return false;
    });
  }

  adaugareFiltrareCustom() {
    const customContains = "Conține";
    this.filterService.register(customContains, (value, filter): boolean => {
      if (filter === undefined || filter === null || filter.trim() === '') {
        return true;
      }

      if (value === undefined || value === null) {
        return false;
      }

      return this.removeDiacritics(value.toString()).toLowerCase().indexOf(this.removeDiacritics(filter.toLowerCase())) !== -1;
    });

    const customStartsWith = "Începe cu";
    this.filterService.register(customStartsWith, (value, filter): boolean => {
      if (filter === undefined || filter === null || filter.trim() === '') {
        return true;
      }

      if (value === undefined || value === null) {
        return false;
      }

      return this.removeDiacritics(value.toString()).toLowerCase().startsWith(this.removeDiacritics(filter.toLowerCase()));
    });

    const customDoesNotContain = "Nu conține";
    this.filterService.register(customDoesNotContain, (value, filter): boolean => {
      if (filter === undefined || filter === null || filter.trim() === '') {
        return true;
      }

      if (value === undefined || value === null) {
        return false;
      }

      return this.removeDiacritics(value.toString()).toLowerCase().indexOf(this.removeDiacritics(filter.toLowerCase())) === -1;
    });

    const customEndsWith = "Se termină cu";
    this.filterService.register(customEndsWith, (value, filter): boolean => {
      if (filter === undefined || filter === null || filter.trim() === '') {
        return true;
      }

      if (value === undefined || value === null) {
        return false;
      }

      return this.removeDiacritics(value.toString()).toLowerCase().endsWith(this.removeDiacritics(filter.toLowerCase()));
    });


    const customIsEqualTo = "Este egal";
    this.filterService.register(customIsEqualTo, (value, filter): boolean => {
      if (filter === undefined || filter === null || filter.trim() === '') {
        return true;
      }

      if (value === undefined || value === null) {
        return false;
      }

      return this.removeDiacritics(value.toString()).toLowerCase() === this.removeDiacritics(filter.toLowerCase());
    });


    const customIsNotEqualTo = "Nu este egal";
    this.filterService.register(customIsNotEqualTo, (value, filter): boolean => {
      if (filter === undefined || filter === null || filter.trim() === '') {
        return true;
      }

      if (value === undefined || value === null) {
        return false;
      }

      return this.removeDiacritics(value.toString()).toLowerCase() !== this.removeDiacritics(filter.toLowerCase());
    });


    this.matchModeOptions = [
      { label: 'Începe cu', value: customStartsWith },
      { label: 'Conține', value: customContains },
      { label: 'Nu conține', value: customDoesNotContain },
      { label: 'Se termină cu', value: customEndsWith },
      { label: 'Este egal', value: customIsEqualTo },
      { label: 'Nu este egal', value: customIsNotEqualTo }
    ]
  }

  //#endregion Metode pentru grid de date

  //#region Metode pentru validatori

  public hasError(formGroup: FormGroup, field: string, errorCode: string): boolean {
    return formGroup.get(field)?.touched && formGroup.get(field)?.hasError(errorCode);
  }

  public hasValue(formGroup: FormGroup, field: string): boolean {
    return formGroup.get(field)?.value != null;
  }

  //#endregion Metode pentru validatori

}