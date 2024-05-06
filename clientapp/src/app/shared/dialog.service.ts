import { Injectable, TemplateRef, Type } from '@angular/core';
import { take } from 'rxjs/operators'
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppDialogService {

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private dialogService: DialogService) {
  }

  public showToast(title: string | undefined, text: string | undefined) {
    this.messageService.add({ severity: 'success', summary: title, detail: text, key: 'tc',  life: 5000});
  }

  public async showInformation(title: string | undefined, text: string | undefined) {
    this.messageService.add({ severity: 'info', summary: title, detail: text, key: 'tc',  life: 5000 });
  }

  public async showWarning(title: string | undefined, text: string | undefined) {
    this.messageService.add({ severity: 'warn', summary: title, detail: text, key: 'tc',  life: 10000});
  }

  public async showError(title: string | undefined, text: string | undefined) {
    this.messageService.add({ severity: 'error', summary: title, detail: text, key: 'tc',  life: 10000 });
  }

  public async askQuestion(header: string, message: string): Promise<boolean> {
    const icon = "pi pi-exclamation-triangle"

    return new Promise(resolve => {
      this.confirmationService.confirm({
        message,
        header,
        icon,
        accept: () => {
          resolve(true);
        },
        reject: _ => {
          resolve(false);
        }
      })
    });
  }

  /**
   * Afiseaza o componenta intr-un dialog modal
   *
   * Se pot pasa informatii catre componenta prezentata in dialog prin initData
   * 
   * const raspuns = await this.dialog.showDialog(ListaUtilizatoriComponent, { idUtilizator: 10 });
   * 
   * In componenta din dialog trebuie puse in constructor:
   * private dialogRef: DynamicDialogRef,
   * private dialogConfig: DynamicDialogConfig
   *
   * dialogConfig.data - contine datele pasate catre dialog si se poate citi pe onInit
   *
   * closeDialog() { this.dialogRef.close({a: 10, b: 'ceva'})};
   * 
   * @param content Componenta afisata
   * @param init Functia care initializeaza componenta
   * @param result Functia care extrage rezultatul dialogului
   * @param config Optiuni pentru afisare dialog
   */
  public async showDialog<T, R>(
    content: Type<any>,
    initData: T,
    config?: DynamicDialogConfig): Promise<R> {

    if (!config) {
      config = {
        width: '70%',
        contentStyle: { overflow: 'auto' },
        autoZIndex:false,
        baseZIndex: 10000,
        maximizable: true
      }
    }

    config.data = initData;

    const modalRef: DynamicDialogRef = this.dialogService.open(content, config);

    return await lastValueFrom (modalRef.onClose.pipe(take(1)));
  }
  
}
