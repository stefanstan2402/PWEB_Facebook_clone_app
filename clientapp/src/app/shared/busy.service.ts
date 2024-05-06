import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppDialogService } from './dialog.service';

@Injectable({
  providedIn: 'root'
})
export class BusyService {

  constructor(
    private dialog: AppDialogService,
    private router: Router) {
  }

  private fieldIsBusy = false;

  public get isBusy(): boolean {
    return this.fieldIsBusy;
  }

  public async runAsync<T>(actiune: () => Promise<T | null>): Promise<T | null> {
    try {
      this.fieldIsBusy = true;
      return await actiune();
    }
    catch (ex: any) {
      if (ex.statusCode === 401) {
        this.dialog.showToast(undefined, "Sesiunea de lucru a expirat.");
        this.router.navigate(["/login"]);
      }
      else if (ex.statusCode === 403) {
        this.router.navigate(["/403"]);
      }
      else {
        this.dialog.showError("Eroare", ex.message || ex.error || ex);
      }

      return null;
    }
    finally {
      this.fieldIsBusy = false;
    }
  }
}
