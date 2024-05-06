import { Component, Input, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AppMainComponent } from '../app.main.component';
import { MainMenuItem } from './main-menu-item';
import { MainMenuService } from './main-menu.service';

@Component({
    selector: '[app-menu-item]',
    templateUrl: './menu-item.component.html',
    host: {
        '[class.active-menuitem]': 'active',
        '[class.layout-root-menuitem]': 'root',
    },
    animations: [
        trigger('children', [
            state('void', style({ height: '0px' })),
            state('hiddenAnimated', style({ height: '0px' })),
            state('visibleAnimated', style({ height: '*' })),
            state('visible', style({ height: '*', 'z-index': 100 })),
            state('hidden', style({ height: '0px', 'z-index': '*' })),
            transition('visibleAnimated => hiddenAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('hiddenAnimated => visibleAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('void => visibleAnimated, visibleAnimated => void',
                animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
        ])
    ]
})
export class MainMenuItemComponent implements OnInit, OnDestroy {

    //#region Fields
    @Input() menuItem: MainMenuItem;
    @Input() index: number;
    @Input() root: boolean;
    @Input() visible: boolean;
    @Input() parentKey: string;

    animating: boolean = false;
    active = false;
    menuSourceSubscription: Subscription;
    menuResetSubscription: Subscription;
    key: string;
    //#endregion Fields

    constructor(public appMain: AppMainComponent, public router: Router, private cd: ChangeDetectorRef, private menuService: MainMenuService) {
        this.menuSourceSubscription = this.menuService.menuSource$.subscribe(key => {
            // deactivate current active menu
            if (this.active && this.key !== key && key.indexOf(this.key) !== 0) {
                this.active = false;
            }
        });

        this.menuResetSubscription = this.menuService.resetSource$.subscribe(() => {
            this.active = false;
        });

        this.router.events.pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(params => {
                if (this.menuItem.route) {
                    this.updateActiveStateFromRoute();
                } else {
                    this.active = false;
                }
            });
    }

    ngOnInit() {
        if (this.menuItem.route) {
            this.updateActiveStateFromRoute();
        }

        this.key = this.parentKey ? this.parentKey + '-' + this.index : String(this.index);
    }

    updateActiveStateFromRoute() {
        this.active = this.router.isActive(this.menuItem.route[0], !this.menuItem.children);
    }

    itemClick(event: Event) {
        // avoid processing disabled items
        if (this.menuItem.disabled) {
            event.preventDefault();
            return;
        }

        // navigate with hover in horizontal mode
        if (this.root) {
            this.appMain.menuHoverActive = !this.appMain.menuHoverActive;
        }

        // notify other items
        this.menuService.onMenuStateChange(this.key);

        // toggle active state
        if (this.menuItem.children) {
            this.active = !this.active;
            this.animating = true;
        } else {
            // activate item
            this.active = true;

            // hide overlay menus
            this.appMain.overlayMenuActive = false;
            this.appMain.staticMenuMobileActive = false;
            this.appMain.menuHoverActive = !this.appMain.menuHoverActive;
        }
    }

    onMouseEnter() {
        // activate item on hover
        if (this.root && this.appMain.menuHoverActive) {
            this.menuService.onMenuStateChange(this.key);
            this.active = true;
        }
    }

    onAnimationDone() {
        this.animating = false;
    }

    ngOnDestroy() {
        if (this.menuSourceSubscription) {
            this.menuSourceSubscription.unsubscribe();
        }

        if (this.menuResetSubscription) {
            this.menuResetSubscription.unsubscribe();
        }
    }
}