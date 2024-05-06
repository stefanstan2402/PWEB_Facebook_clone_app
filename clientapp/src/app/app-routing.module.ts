import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { AppMainComponent } from './app.main.component';
import { LoginComponent } from './securitate/login/login.component';

//#if ZONA_ROSIE
//#endif ZONA_ROSIE
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { AuthGuard } from './securitate/auth-guard';
import { UnsavedChangesGuard } from './shared/unsaved-changes.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListaUsersComponent } from './users/lista-users/lista-users.component';
import { ModificareUsersComponent } from './users/modificare-users/modificare-users.component';
import { RegisterComponent } from './securitate/register/register.component';
import { ListaPostariComponent } from './posts/lista-postari/lista-postari.component';
import { ModificaPostariComponent } from './posts/modifica-postari/modifica-postari.component';
import { ListaCommentsComponent } from './comments/lista-comments/lista-comments.component';
import { ModificareCommentsComponent } from './comments/modificare-comments/modificare-comments.component';
import { ListaEventsComponent } from './events/lista-events/lista-events.component';
import { ModificaEventsComponent } from './events/modifica-events/modifica-events.component';
import { ListaFeedbackComponent } from './feedback/lista-feedback/lista-feedback.component';
import { FeedbackComponent } from './feedback/feedback/feedback.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // Componenta principala
  {
    path: '',
    component: AppMainComponent,
    canActivate: [AuthGuard], canDeactivate: [UnsavedChangesGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'users', component: ListaUsersComponent, canActivate: [AuthGuard] },
      { path: 'users/:id', component: ModificareUsersComponent, canActivate: [AuthGuard] },
      { path: 'posts', component: ListaPostariComponent, canActivate: [AuthGuard] },
      { path: 'posts/:id', component: ModificaPostariComponent, canActivate: [AuthGuard] },
      { path: 'posts/:id/details', component: ModificaPostariComponent, canActivate: [AuthGuard] },
      { path: 'events', component: ListaEventsComponent, canActivate: [AuthGuard] },
      { path: 'events/:id', component: ModificaEventsComponent, canActivate: [AuthGuard] },
      { path: 'feedback', component: ListaFeedbackComponent, canActivate: [AuthGuard] },
      { path: 'feedback/:id', component: FeedbackComponent, canActivate: [AuthGuard] }
    ]
  },

  { path: 'notfound', component: NotFoundComponent },


  { path: '**', redirectTo: '/notfound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
