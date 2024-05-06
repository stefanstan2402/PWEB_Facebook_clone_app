import { Inject, Injectable } from '@angular/core';
import { BusinessAPI } from 'src/api/business/lib/businessAPI';
import { AuthService } from 'src/app/securitate/auth.service';
import { TokenCredentials } from '@azure/ms-rest-js';

@Injectable({
  providedIn: 'root'
})
export class BusinessApiClient {

  private businessApi: BusinessAPI;

  constructor(@Inject('API_URL_BUSINESS') private baseUrl: string,
              @Inject(AuthService) private authService) {
   
    this.InitAPI(authService.getAuthToken());    
    this.authService.authToken.subscribe(t => this.InitAPI(t));
  }

  private InitAPI(authToken: string) {
    const credentials = new TokenCredentials( authToken );
    const options = { baseUri: this.baseUrl, noRetryPolicy: true };
    this.businessApi = new BusinessAPI(credentials, options);
  }

  public get api(): BusinessAPI | null {
    return this.businessApi;
  }

  
}