import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import * as msRest from '@azure/ms-rest-js';
import jwt_decode, { JwtPayload } from "jwt-decode";
//import { MainNavService } from '../main-nav/main-nav-service';
import { HttpClient } from '@angular/common/http';
import { AppInjectorService } from '../shared/app.injector.service';
import { MainMenuService } from '../main-menu/main-menu.service';
import { LoaderService } from '../shared/loader.service';
import { NotificationService } from '../shared/notification.service';
import { BusinessAPI } from 'src/api/business/lib/businessAPI';
import { BusinessAPILoginOptionalParams, LoginDTO, UserAddDTO } from 'src/api/business/lib/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly sessionStorageAuthTokenKey = '$AuthToken$';
  private readonly sessionStorageUserId = '$AuthIdUtilizator$';
  private readonly sessionStorageUserRole = '$AuthRoleUtilizator$';
  private tokenValid = new BehaviorSubject<boolean>(false);
  private currentToken = new BehaviorSubject<string | null>(null);
  private idUtilizatorLogat = new BehaviorSubject<number | null>(null);
  private numeUtilizatorLogat = new BehaviorSubject<string | null>(null);

  private mainMenuService: MainMenuService;

  constructor(
    private router: Router,
    private http: HttpClient,
    private loadingService: LoaderService,
    private notificationService: NotificationService
  ) {

    // ATENTIE! NU mai folosim ***localStorage***
    // ATENTIE! Ne asiguram ca NU avem in localStorage item-urile!    
    localStorage.removeItem(this.sessionStorageAuthTokenKey);
    localStorage.removeItem(this.sessionStorageUserRole);

    this.checkToken();
    this.currentToken.next(this.getAuthToken());
  }

  private checkToken() {
    let tokenValid = false;
    let idUtilizator: number | null = null;
    let numeUtilizator: string | null = null;
    const token = sessionStorage.getItem(this.sessionStorageAuthTokenKey);

    // Daca avem token-ul in sessionStorage...
    if (token != null) {
      // ...verificam daca acesta NU este expirat
      if (this.isTokenExpired(token) === false) {
        tokenValid = true;
      }
    }

    // Daca avem un token invalid (lipsa sau expirat),
    // stergem din sessionStorage item-urile
    if (tokenValid === false) {
      sessionStorage.removeItem(this.sessionStorageAuthTokenKey);
      sessionStorage.removeItem(this.sessionStorageUserRole);
      this.loadingService.setLoading(false);
    } else {
      idUtilizator = Number(sessionStorage.getItem(this.sessionStorageUserId));
    }

    // Notificam existenta utilizatorlui logat si numele acestuia
    this.tokenValid.next(tokenValid);
    this.idUtilizatorLogat.next(idUtilizator);
    this.numeUtilizatorLogat.next(numeUtilizator);
  }

  public get esteUtilizatorLogat() {
    return this.tokenValid.asObservable();
  }

  public get esteUtilizatorLogatSync(): boolean {
    return this.tokenValid.getValue();
  }

  public get denumireUtilizatorLogat() {
    return this.numeUtilizatorLogat.asObservable();
  }

  public get authToken(): Observable<string | null> {
    return this.currentToken.asObservable();
  }

  public async login(utilizator: string, parola: string): Promise<void> {
    const credentials: msRest.ServiceClientCredentials = new msRest.TokenCredentials('NOT AUTHORIZED');
    const options = {
      baseUri: "http://localhost:5000/"
    };

    const apiClient: BusinessAPI = new BusinessAPI(credentials, options);

    let body: LoginDTO = {
      email: utilizator,
      password: parola
    }

    let param: BusinessAPILoginOptionalParams = {
      body: body
    }

    try {
      await apiClient.login(param).then(response => {
        sessionStorage.setItem(this.sessionStorageAuthTokenKey, response.response.token as string);
        sessionStorage.setItem(this.sessionStorageUserId, response.response?.user.id);
        sessionStorage.setItem(this.sessionStorageUserRole, response.response?.user.role);
        this.currentToken.next(this.getAuthToken());
        // route to dashboard
        window.location.href = '/dashboard';
      })
    } catch (error) {
      // convert error to json
      let errorJson = JSON.parse(error.response.body);
      this.notificationService.showError(errorJson.errorMessage.message);
      return;
    }
  }


  public async registerUser(user: UserAddDTO): Promise<void> {
    const credentials: msRest.ServiceClientCredentials = new msRest.TokenCredentials('NOT AUTHORIZED');
    const options = {
      baseUri: "http://localhost:5000/"
    };

    const apiClient: BusinessAPI = new BusinessAPI(credentials, options);

    let param = {
      body: user
    }

    try {
      await apiClient.add5(param).then(response => {
        this.router.navigate(['/login']);
      });
    } catch (error) {
      let errorJson = JSON.parse(error.response.body);
      console.log(errorJson.errorMessage);
      this.notificationService.showError(errorJson.errorMessage.message);
    }
  }

  public async logout(): Promise<void> {
    sessionStorage.removeItem(this.sessionStorageAuthTokenKey);
    sessionStorage.removeItem(this.sessionStorageUserId);
    sessionStorage.removeItem(this.sessionStorageUserRole);

    // Fortam re-crearea meniului (pentru aplicarea permisiunilor lipsa)
    const injector = AppInjectorService.getInjector();
    if (injector) {
      this.mainMenuService = injector.get(MainMenuService);
      this.mainMenuService.ResetMenus();
    }

    // Va notifica despre lipsa utilizatorului logat
    this.checkToken();
    this.currentToken.next(this.getAuthToken());

    this.router.navigate(['login']);
    sessionStorage.clear();
  }

  getTokenExpirationDate(token: string): Date | null {
    const decodedToken = jwt_decode(token) as JwtPayload;

    if (!decodedToken)
      return null;

    if (decodedToken.exp === undefined) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decodedToken.exp);
    return date;
  }

  isTokenExpired(token: string): boolean {
    if (!token) {
      return true;
    }

    const expirationDate = this.getTokenExpirationDate(token);
    if (!expirationDate) {
      return false;
    }
    return !(expirationDate.valueOf() > new Date().valueOf());
  }

  public getAuthToken(): string {
    const token = sessionStorage.getItem(this.sessionStorageAuthTokenKey);
    return token ? token : 'UNAUTHORIZED';
  }

}