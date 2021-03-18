import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { HomeComponent } from './home/home.component';
import { IubCookieSolutionService } from './iub-cookie-solution.service';

@NgModule({
  declarations: [
    AppComponent,
    YoutubePlayerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxYoutubePlayerModule.forRoot(),
  ],
  providers: [IubCookieSolutionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
