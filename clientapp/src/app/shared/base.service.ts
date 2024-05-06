import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

import { BusinessAPI } from 'src/api/business/lib/businessAPI';
import { AuthService } from '../securitate/auth.service';
import { ApiResponse } from 'src/api/base.models';

import { AppInjectorService } from './app.injector.service';
import { NotificationService } from './notification.service';

import { BusinessApiClient } from './business-api-client';
import { BehaviorSubject } from 'rxjs';

export class BaseService {

    //#region Fields

    public authService: AuthService;
    public notificationService: NotificationService;

    protected router: Router;
    public http: HttpClient;
    
    public reportingApiUrl: string;
    public rsiApiUrl: string;

    protected businessApiClient = inject(BusinessApiClient);

    public operationInProgress = new BehaviorSubject<boolean>(false);

    //#endregion Fields

    constructor() {
        this.InjectDIs();
    }

    /**
       * Extrage dependintele
      */
    private InjectDIs() {
        const injector = AppInjectorService.getInjector();
        if (injector) {
            this.reportingApiUrl = injector.get('API_URL_REPORTING');
            this.router = injector.get(Router);
            this.authService = injector.get(AuthService);
            this.notificationService = injector.get(NotificationService);
            this.http = injector.get(HttpClient);
        }
    }

    //#region businessApiClient

    async getData<T>(actiune: (x: BusinessAPI) => Promise<ApiResponse<T>>): Promise<T | undefined> {
        try {
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
        }
        return new Promise(reject => { });
    }

    async getActiune(actiune: (x: BusinessAPI) => Promise<ApiResponse<any>>): Promise<any> {
        try {
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
        }
    }

    async postData(actiune: (x: BusinessAPI) => Promise<ApiResponse<any>>): Promise<any> {
        try {
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
        }
    }

    async ruleaza(actiune: () => Promise<void>): Promise<void> {
        try {
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
        }
    }

    async ruleazaAsync<T>(actiune: () => Promise<T | null>): Promise<T | null> {
        try {
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
                this.notificationService.showError(ex);
            }

            return null;
        }
    }

    //#endregion businessApiClient


    //#endregion RecrutareSelectieIncadrareApiClient

}