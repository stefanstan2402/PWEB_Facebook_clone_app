import { Injectable } from "@angular/core";
import { ConfirmEventType, ConfirmationService, MessageService } from "primeng/api";

enum ConfirmType {
    OK = 1,
    OkCancel = 2,
    Custom = 3,
    Notifications = 4
}

enum ConfrimMessageType {
    INFO = 1,
    DELETE = 2,
}

@Injectable({
    providedIn: "root"
})
export class NotificationService {

    //#region Methods

    constructor(private confirmationService: ConfirmationService, private messageService: MessageService) { }

    //#region Toast

    public showSuccess(mesaj: string, titlu?: string) {
        this.createMessage('success', titlu ?? 'Succes', mesaj, 5000);
    }

    /**
     * Metoda care afiseaza un mesaj de eroare explicit
     */
    public showError(mesaj: string, titlu?: string) {
        this.createMessage('error', titlu ?? 'Eroare', mesaj, 10000);
    }

    /**
     * Metoda care afiseaza mesajul de eroare din API
     */
    public showErrorEx(error?) {
        if (error && error.message) {
            this.createMessage('error', 'Eroare', error.message, 10000);
        } else {
            this.createMessage('error', 'Eroare', 'A intervenit o problemă la încărcarea datelor!', 10000);
        }
    }

    public showWarning(mesaj: string, titlu?: string) {
        this.createMessage('warn', titlu ?? 'Atenție', mesaj, 10000);
    }

    public showInfo(mesaj: string, titlu?: string) {
        this.createMessage('info', titlu ?? 'Info', mesaj, 5000);
    }

    private createMessage(tipMesaj: string, titlu: string, mesaj: string, time: number) {
        this.messageService.add({
            life: time,
            severity: tipMesaj,
            summary: titlu,
            detail: mesaj,
            key: 'tc',
        });
    }

    //#endregion Toast

    //#region  Confirmation

    public confirmOk(mesaj?: string, titlu?: string, onAcceptAction?) {
        this.createConfirmationMessage(
            ConfirmType.OK, ConfrimMessageType.INFO,
            mesaj, titlu,
            onAcceptAction, null, null
        );
    }

    public confrimDelete(mesaj?: string, titlu?: string, onAcceptAction?, onRejectAction?, onCancelAction?) {
        this.createConfirmationMessage(
            ConfirmType.OkCancel, ConfrimMessageType.DELETE,
            mesaj, titlu,
            onAcceptAction, onRejectAction, onCancelAction
        );
    }

    public confirmYesNo(mesaj?: string, titlu?: string, onAcceptAction?, onRejectAction?, onCancelAction?) {
        this.createConfirmationMessage(
            ConfirmType.OkCancel, ConfrimMessageType.INFO,
            mesaj, titlu,
            onAcceptAction, onRejectAction, onCancelAction
        );
    }

    public confirmYesNoAsync(mesaj?: string, titlu?: string): Promise<boolean> {
        return new Promise(resolve => {
            this.createConfirmationMessage(
                ConfirmType.OkCancel, ConfrimMessageType.INFO,
                mesaj, titlu,
                () => {
                    resolve(true);
                },
                _ => {
                    resolve(false);
                },
                _ => {
                    resolve(false);
                }
            );
        });


    }

    public showNotification(mesaj?: string, titlu?: string, onCancelAction?): Promise<boolean> {
        return new Promise(resolve => {
            this.createConfirmationMessage(
                ConfirmType.Notifications, ConfrimMessageType.INFO,
                mesaj, titlu, () => {
                    resolve(true);
                }, 
                () => {
                    onCancelAction();
                }, 
                () => {
                    resolve(true);
                }
            );
        });
    }

    private createConfirmationMessage(
        confirmType?: ConfirmType, confrimMessageType?: ConfrimMessageType,
        mesaj?: string, titlu?: string,
        onAcceptAction?, onRejectAction?, onCancelAction?) {
        let butonAcceptMesaj: string = '';
        let butonRejectMesaj: string = '';
        let butonAcceptVizibil: boolean = false;
        let butonRejectVizibil: boolean = false;
        let iconita: string = '';
        switch (confrimMessageType) {
            case ConfrimMessageType.INFO:
                iconita = 'pi pi-info-circle';
                break;
            case ConfrimMessageType.DELETE:
                iconita = 'pi pi-exclamation-triangle';
                break;

            default:
                break;
        }

        switch (confirmType) {
            case ConfirmType.OK:
                butonAcceptMesaj = 'OK';
                butonAcceptVizibil = true;
                butonRejectMesaj = '';
                butonRejectVizibil = false;
                break;
            case ConfirmType.OkCancel:
                butonAcceptMesaj = 'Confirmă';
                butonAcceptVizibil = true;
                butonRejectMesaj = 'Anulează';
                butonRejectVizibil = true;
                break;
            case ConfirmType.Notifications:
                butonAcceptMesaj = 'OK';
                butonAcceptVizibil = true;
                butonRejectMesaj = 'Marchează ca citit';
                butonRejectVizibil = true;
                break;
            default:
                break;
        }

        this.confirmationService.confirm({
            message: mesaj,
            header: titlu,
            icon: iconita,

            acceptLabel: butonAcceptMesaj,
            rejectLabel: butonRejectMesaj,
            acceptVisible: butonAcceptVizibil,
            rejectVisible: butonRejectVizibil,

            closeOnEscape: false,
            blockScroll: true,

            accept: () => onAcceptAction(),
            reject: (type: ConfirmEventType) => {
                switch (type) {
                    case ConfirmEventType.REJECT:
                        try {
                            onRejectAction();
                        }
                        catch
                        {
                            //Nu este atribuita actiunea
                        }
                        break;

                    case ConfirmEventType.CANCEL:
                        try {
                            onCancelAction();
                        }
                        catch {
                            //Nu este atribuita actiunea
                        }
                        break;

                    default:
                        break;
                }
            }
        });
    }

    public confirmRedOk(mesaj?: string, titlu?: string, onAcceptAction?) {
        this.createRedConfirmationMessage(mesaj, titlu, onAcceptAction);
    }

    private createRedConfirmationMessage(mesaj?: string, titlu?: string, onAcceptAction?) {
        let iconita: string = '';

        this.confirmationService.confirm({
            message: mesaj,
            header: titlu,
            icon: iconita,

            acceptLabel: 'OK',
            rejectLabel: '',
            acceptVisible: true,
            rejectVisible: false,

            closeOnEscape: false,
            blockScroll: true,

            accept: () => onAcceptAction(),
            reject: (type: ConfirmEventType) => { }
        });
    }

    //#endregion  Confirmation

    //#endregion Methods

}
