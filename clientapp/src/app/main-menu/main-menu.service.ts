import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MainMenuItem } from './main-menu-item';
import { AuthService } from '../securitate/auth.service';
import { MainMenuItems } from './main-menu.items';

@Injectable()
export class MainMenuService {

    //#region Fields
    private static mainMenu: MainMenuItem[];

    private menuSource = new Subject<string>();
    private resetSource = new Subject();

    menuSource$ = this.menuSource.asObservable();
    resetSource$ = this.resetSource.asObservable();
    //#region Fields

    constructor(public authService: AuthService) {

    }

    onMenuStateChange(key: string) {
        this.menuSource.next(key);
    }

    reset() {
        this.resetSource.next(true);
    }

    // public async GetMenusAsync(): Promise<MainMenuItem[]> {
    //     return of(MainMenuItems.MainMenu).toPromise();
    // }

    public ResetMenus() {
        MainMenuService.mainMenu = null;
    }

    public GetMenus(): MainMenuItem[] {
        if (!MainMenuService.mainMenu) {
            // Extragem permisiunile utilizatorului curent (sau null, daca nu exista)

            // Clonam array-ul prin serializare / deserializare JSON
            let meniuComplet = JSON.parse(JSON.stringify(MainMenuItems.MainMenu)) as MainMenuItem[];
            MainMenuService.mainMenu = meniuComplet

            // verificam daca userul este admin
            let esteAdmin = sessionStorage.getItem('$AuthRoleUtilizator$');
            if (esteAdmin != 'Admin') {
                //remove from menu elements that have field necesitaAdmin: true
                for (let i = 0; i < MainMenuService.mainMenu.length; i++) {
                    if (MainMenuService.mainMenu[i].necesitaAdmin) {
                        MainMenuService.mainMenu.splice(i, 1);
                        i--;
                    }
                    else {
                        if (MainMenuService.mainMenu[i].children) {
                            for (let j = 0; j < MainMenuService.mainMenu[i].children.length; j++) {
                                if (MainMenuService.mainMenu[i].children[j].necesitaAdmin) {
                                    MainMenuService.mainMenu[i].children.splice(j, 1);
                                    j--;
                                }
                            }
                        }
                    }
                }
            }
        }
        return MainMenuService.mainMenu;
    }
}