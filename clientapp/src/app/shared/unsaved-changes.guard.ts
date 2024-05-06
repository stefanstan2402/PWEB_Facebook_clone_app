import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable, Subject } from 'rxjs';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UnsavedChangesGuard implements CanDeactivate<CanComponentDeactivate> {
  private confirmedSubject = new Subject<boolean>();

  canDeactivate(component: CanComponentDeactivate): Observable<boolean> | boolean | Promise<boolean>{
    if (component.canDeactivate && typeof component.canDeactivate === 'function') {
      const canDeactivate = component.canDeactivate();
      if (canDeactivate instanceof Observable) {
        return this.handleObservable(canDeactivate);
      } else if (canDeactivate instanceof Promise) {
        return this.handlePromise(canDeactivate);
      } else {
        return this.handleBoolean(canDeactivate);
      }
    } else {
      return true;
    }
  }

  private handleObservable(observable: Observable<boolean>): Observable<boolean> {
    return Observable.create(observer => {
      observable.subscribe(
        result => {
          if (result) {
            observer.next(true);
            observer.complete();
          } else {
            const confirmResult = confirm('You have unsaved changes from Observable. Are you sure you want to navigate away?');
            observer.next(confirmResult);
            observer.complete();
          }
        },
        error => {
          observer.error(error);
        }
      );
    });
  }

  private handlePromise(promise: Promise<boolean>): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      promise.then(
        result => {
          if (result) {
            resolve(true);
          } else {
            const confirmResult = confirm('You have unsaved changes from Promise. Are you sure you want to navigate away?');
            resolve(confirmResult);
          }
        },
        error => {
          reject(error);
        }
      );
    });
  }

  private handleBoolean(result: boolean): boolean {
    if (result) {
      return true;
    } else {
      return confirm('You have unsaved changes. Are you sure you want to navigate away?');
    }
  }

  confirmNavigation(confirm: boolean): void {
    this.confirmedSubject.next(confirm);
  }

  get confirmed$(): Observable<boolean> {
    return this.confirmedSubject.asObservable();
  }
}
