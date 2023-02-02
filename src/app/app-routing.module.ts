import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { CreatePostComponent } from './components/admin/create-post/create-post.component';
import { UpdatePostComponent } from './components/admin/update-post/update-post.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PostComponent } from './components/post/post.component';
import { VideoComponent } from './components/video/video.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'homepage' },
  {path: 'homepage', component: HomeComponent },
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard],canActivateChild: [AuthGuard], children: [
      {
        path: ':id',
        component: UpdatePostComponent
      }
    ]
  },
  {path: 'add', component: CreatePostComponent},
  {path: 'video', component: VideoComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'post', component: PostComponent},
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
