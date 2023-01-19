import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'homepage' },
  {path: 'homepage', component: HomeComponent },
  // {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], children: [
  //   {path: '', redirectTo: 'pagina1', pathMatch: 'full'},
  //   {path: 'pagina1', component: Pagina1Component},
  // ]
  // },
  // {path: 'login', component: LoginComponent},
  // {path: 'register', component: RegisterComponent},
  // {
  //   path: '404',
  //   component: NotFoundComponent
  // },
  // questo va sempre inserito come ultima path altrimenti rischiamo che prenda sempre questo
  {
    path: '**', // questo indica qualsiasi indirizzo diverso dai nostri
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
