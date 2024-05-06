
import { MainMenuItem } from "./main-menu-item";
import { environment } from "src/environments/environment";

export class MainMenuItems {

  public static MainMenu: MainMenuItem[] = [  
    {
      displayName: 'Users',
      iconName: 'pi pi-fw pi-user',
      necesitaUtilizatorLogat: true,
      necesitaAdmin: true,
      children: [
        {
          displayName: 'All Users',
          iconName: 'pi pi-fw pi-users',
          route: '/users',
          necesitaUtilizatorLogat: true,
          necesitaAdmin: true
        }      
      ]
    },
    {
      displayName: 'Posts',
      iconName: 'pi pi-fw pi-pencil',
      route: '/dashboard',
      necesitaUtilizatorLogat: true,
      children: [
        {
          displayName: 'All Posts',
          iconName: 'pi pi-fw pi-list',
          route: '/posts',
          necesitaUtilizatorLogat: true,
          necesitaAdmin: false
        },
        {
          displayName: 'Add New',
          iconName: 'pi pi-fw pi-plus',
          route: '/posts/0',
          necesitaUtilizatorLogat: true,
          necesitaAdmin: false
        }
      ]
    },
    {
      displayName: 'Events',
      iconName: 'pi pi-fw pi-calendar',
      route: '/dashboard',
      necesitaUtilizatorLogat: true,
      necesitaAdmin: false,
      children: [
        {
          displayName: 'All Events',
          iconName: 'pi pi-fw pi-list',
          route: '/events',
          necesitaUtilizatorLogat: true,
          necesitaAdmin: false
        },
        {
          displayName: 'Add New',
          iconName: 'pi pi-fw pi-plus',
          route: '/events/0',
          necesitaUtilizatorLogat: true,
          necesitaAdmin: false
        }
      ]
    },
    {
      displayName: 'Feedbacks',
      iconName: 'pi pi-fw pi-cog',
      route: '/dashboard',
      necesitaUtilizatorLogat: true,
      necesitaAdmin: false,
      children: [
        {
          displayName: 'See Feedback',
          iconName: 'pi pi-fw pi-list',
          route: '/feedback',
          necesitaUtilizatorLogat: true, 
          necesitaAdmin: false
        },
        {
          displayName: 'Add Feedback',
          iconName: 'pi pi-fw pi-plus',
          route: '/feedback/0',
          necesitaUtilizatorLogat: true,
          necesitaAdmin: false
        }
      ]
    },
  ];

}

