import { Component, OnInit, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BusinessApiClient } from '../shared/business-api-client';
import { MainMenuItem } from '../main-menu/main-menu-item';
import { MainMenuService } from '../main-menu/main-menu.service';
import { TreeNode } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    private apiClient = inject(BusinessApiClient);
    public menu: MainMenuItem[] = [];
    public treeMenu: any[] = [];

    constructor(public mainMenuService: MainMenuService, public router: Router) {
        let rootMenu = mainMenuService.GetMenus();

        this.menu = rootMenu

        let i = 0;
        this.menu.forEach(element => {
            this.treeMenu.push(this.currentMenuItems(element));
        });
    }

    public currentMenuItems(item: MainMenuItem): TreeNode[] {
        if (!item.children)
            return [];

        let r = item.children.map(c => {
            let treeNode: TreeNode =
            {
                key: c.itemId,
                label: c.displayName,
                icon: c.iconName,
                children: this.currentMenuItems(c),
                selectable: c.children?.length === 0,
                data: c
            };

            return treeNode;
        }
        );

        return r;
    }

    async ngOnInit() {
    }

    nodeSelect(event: any) {
        console.log(event);
        if (event.node.data.route) {
            this.router.navigate([event.node.data.route]);
        }
        else {
            window.open(event.node.data.externalUrl, "_blank");
        }
    }
}