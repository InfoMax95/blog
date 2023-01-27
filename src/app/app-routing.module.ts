import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { VideoComponent } from './components/video/video.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'homepage' },
  {path: 'homepage', component: HomeComponent },
  // {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], children: [
  //   {path: '', redirectTo: 'pagina1', pathMatch: 'full'},
  //   {path: 'pagina1', component: Pagina1Component},
  // ]
  // },
  {path: 'video', component: VideoComponent},
  {path: 'contact', component: ContactComponent},
  {
    path: '404',
    component: NotFoundComponent
  },
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
