import * as modele from "src/api/business/lib/models";
import { Injectable, inject } from "@angular/core";
import { Subject, Subscription, interval } from "rxjs";
import { NotificationServiceIntervalMinutes } from "src/constants";
import { BusinessApiClient } from "./business-api-client";

@Injectable({
  providedIn: "root"
})
export class AppMessagingService {

  public businessApiClient = inject(BusinessApiClient);
  public subscribeToNotifications: boolean = false;
  private loadStarted: boolean = false;

  notificationSubscription: Subscription;

  
  constructor() {

  }

  public async LoadUserNotifications() {

  }

 



 
}
