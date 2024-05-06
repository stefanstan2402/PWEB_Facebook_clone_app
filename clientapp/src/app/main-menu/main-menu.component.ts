import { Component, OnInit } from '@angular/core';
import { MainMenuService } from './main-menu.service';
import { MainMenuItem } from './main-menu-item';

@Component({
    selector: 'app-main-menu',
    templateUrl: './main-menu.component.html'
})
export class MainMenuComponent implements OnInit {
    
    public menu: MainMenuItem[] = [];

    constructor(public mainMenuService: MainMenuService) {
        this.menu = mainMenuService.GetMenus();
    }

    ngOnInit() { }
    
}