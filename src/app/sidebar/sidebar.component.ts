import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/home',     title: 'Home',         icon:'nc-bank',       class: '' },
    { path: '/sboms',         title: 'SBOMS',             icon:'nc-diamond',    class: '' },
    { path: '/oboms',          title: 'OBOMS',              icon:'nc-pin-3',      class: '' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
