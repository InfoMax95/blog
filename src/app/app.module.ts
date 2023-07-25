import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VideoComponent } from './components/video/video.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PostCardComponent } from './shared/post-card/post-card.component';
import { VideoCardComponent } from './shared/video-card/video-card.component';
import { PostComponent } from './components/post/post.component';
import { VideoBigCardComponent } from './shared/video-big-card/video-big-card.component';
import { AboutComponent } from './components/about/about.component';
import { CreatePostComponent } from './components/admin/create-post/create-post.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { ViewPostComponent } from './components/admin/view-post/view-post.component';
import { UpdatePostComponent } from './components/admin/update-post/update-post.component';
import { MatTableModule } from '@angular/material/table';
import { AdminComponent } from './components/admin/admin.component';
import { AppsComponent } from './components/apps/apps.component';
import { TypeFilterComponent } from './shared/type-filter/type-filter.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingInterceptor } from './_interceptor/loading.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    VideoComponent,
    ContactComponent,
    NotFoundComponent,
    PostCardComponent,
    VideoCardComponent,
    PostComponent,
    VideoBigCardComponent,
    AboutComponent,
    CreatePostComponent,
    ViewPostComponent,
    UpdatePostComponent,
    AdminComponent,
    AppsComponent,
    TypeFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    NgxSpinnerModule.forRoot({
      type: "square-jelly-box"
    })
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
