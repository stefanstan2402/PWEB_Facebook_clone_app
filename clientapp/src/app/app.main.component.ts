import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { BaseComponent } from './shared/base.component';
import { environment } from 'src/environments/environment';
import { AppMessagingService } from './shared/messaging.service';
import { Subscription, interval } from 'rxjs';
import { AuthService } from './securitate/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-main',
    templateUrl: './app.main.component.html',
    providers: [AppMessagingService]
})
export class AppMainComponent extends BaseComponent {

    //#region Fields
    public utilizatorLogat: string;
    public esteUtilizatorLogat: boolean = false;

    rotateMenuButton: boolean;
    topbarMenuActive: boolean;
    overlayMenuActive: boolean;
    staticMenuDesktopInactive: boolean;
    staticMenuMobileActive: boolean;
    menuClick: boolean;
    topbarItemClick: boolean;
    activeTopbarItem: any;
    menuHoverActive: boolean;
    inlineMenuActive: boolean;
    inlineMenuClick: boolean;
    public unreadNotification: number = 0;
    public notificationBadgeDisabled: boolean = true;
    getNotificationStarted: boolean = false;
    notificationSubscription: Subscription;
    esteUtilizatorLogatSubscription: Subscription;
    public tipRedirectorEnum: typeof TipRedirectorEnum = TipRedirectorEnum;
    public redirectorActive: boolean = false;
    public redirectorUrl: string = null;
    public redirectorText: string = '';
    //#endregion Fields

    constructor(
        private messagingService: AppMessagingService,
        private primengConfig: PrimeNGConfig,
        private activatedRoute: ActivatedRoute,
        // private router : Router,
        authService: AuthService) {
        super();

        this.esteUtilizatorLogatSubscription = authService.esteUtilizatorLogat.subscribe(ul => {
            if (ul) {
            }
            else {
                this.notificationSubscription?.unsubscribe();
            }
        });
    }

    override async ngOnInit() {
        if (this.router.url == '/')
            this.router.navigate(['/dashboard']);
    }

    override ngOnDestroy() {
        this.esteUtilizatorLogatSubscription?.unsubscribe();
        this.notificationSubscription?.unsubscribe();
    }

    get MesajUtilizatorLogat(): string {
        return ``
    }

    get MesajUtilizatorLogatDetaliat(): string {
        return ``;
    }
s
    public checkIfHomePage() {
        if (this.router.url == '/') {
            return true;
        } else {
            return false;
        }
    }

    //#region Menu and topbar methods

    onLayoutClick() {
        if (!this.topbarItemClick) {
            this.activeTopbarItem = null;
            this.topbarMenuActive = false;
        }

        if (!this.menuClick || this.inlineMenuClick) {
            if (this.overlayMenuActive || this.staticMenuMobileActive) {
                this.hideOverlayMenu();
            }

            this.menuHoverActive = false;
        }

        if (this.inlineMenuActive && !this.inlineMenuClick) {
            this.inlineMenuActive = false;
        }

        this.inlineMenuClick = false;
        this.topbarItemClick = false;
        this.menuClick = false;
    }

    onMenuButtonClick(event) {
        this.menuClick = true;
        this.rotateMenuButton = !this.rotateMenuButton;
        this.topbarMenuActive = false;
        this.overlayMenuActive = !this.overlayMenuActive;

        event.preventDefault();
    }

    onMenuClick($event) {
        this.menuClick = true;

        if (this.inlineMenuActive && !this.inlineMenuClick) {
            this.inlineMenuActive = false;
        }
    }

    onInlineMenuClick(event) {
        this.inlineMenuActive = !this.inlineMenuActive;
        this.inlineMenuClick = true;
    }

    onTopbarMenuButtonClick(event) {
        this.topbarItemClick = true;
        this.topbarMenuActive = !this.topbarMenuActive;

        this.hideOverlayMenu();

        event.preventDefault();
    }

    onTopbarItemClick(event, item) {
        this.topbarItemClick = true;

        if (this.activeTopbarItem === item) {
            this.activeTopbarItem = null;
        } else {
            this.activeTopbarItem = item;
        }

        event.preventDefault();
    }

    onTopbarSubItemClick(event) {
        event.preventDefault();
    }

    hideOverlayMenu() {
        this.rotateMenuButton = false;
        this.overlayMenuActive = false;
        this.staticMenuMobileActive = false;
    }

    public async despre() {
        let titlu: string = '';
        let mesaj: string = '';
        let versiune: string = '0.0.0.0';

        versiune = '1.0.0.0';
        mesaj = mesaj + `<p">Versiune aplicație client: <b>${versiune}</b></p>`;

        this.notificationService.confirmOk(mesaj, titlu, () => { /* onAccept */ return; });
    }

    //#endregion Menu and topbar methods
    //#region Redirector

    public async EnableToolBarRedirector(tipRedirectorEnum: TipRedirectorEnum) {
        this.redirectorActive = true;
        switch (tipRedirectorEnum) {
            case TipRedirectorEnum.RedirectToInterviuTelefonic:
                this.redirectorText = "Interviu Telefonic";
                break;
            case TipRedirectorEnum.RedirectToInterviuRecrutare:
                this.redirectorText = "Interviu Recrutare";
                break;
            case TipRedirectorEnum.RedirectToInformatiiSuplimentare:
                this.redirectorText = "Informații suplimentare";
                break;
            case TipRedirectorEnum.RedirectToIdentificareCandidati:
                this.redirectorText = "Identificare candidați";
                break;
            case TipRedirectorEnum.RedirectToSelectieDosare:
                this.redirectorText = "Selecție Dosare";
                break;
            case TipRedirectorEnum.RedirectToPregatireProfesionalaCandidatiActivitate:
                this.redirectorText = "Vizualizare cursanți";
                break;
            default:
                break;
        }
        this.redirectorUrl = this.router.url;
    }

    public async DisableRedirector() {
        this.redirectorActive = false;
        var redirect = this.redirectorUrl;
        this.redirectorUrl = null;
    }

    public async goToRedirectorParent() {
        this.redirectorActive = false;
        this.redirectorText = '';
        this.navigateToRelative(this.redirectorUrl, this.activatedRoute);
        this.redirectorUrl = null;
    }

    //#endregion Redirector

}

export enum TipNotificareEnum {
    NotificareEliberarePostRezervist = 1,
    NotificareAvizareSimulare = 2,
    NotificareAprobareSimulare = 3,
    ModificarePosturiRazboi = 4,
    CerereClarificareSimulare = 5,
    RaspunsClarificareSimulare = 6
}


export enum TipRedirectorEnum {
    RedirectToInterviuTelefonic = 1,
    RedirectToInterviuRecrutare = 2,
    RedirectToInformatiiSuplimentare = 3,
    RedirectToIdentificareCandidati = 4,
    RedirectToSelectieDosare = 5,
    RedirectToPregatireProfesionalaCandidatiActivitate = 6
}