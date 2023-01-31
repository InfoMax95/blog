import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { PostBigCardComponent } from './shared/post-big-card/post-big-card.component';
import { VideoBigCardComponent } from './shared/video-big-card/video-big-card.component';
import { AboutComponent } from './components/about/about.component';

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
    PostBigCardComponent,
    VideoBigCardComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
