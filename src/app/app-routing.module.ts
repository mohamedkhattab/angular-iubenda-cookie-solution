import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomeComponent },
  {path: "youtube-page", component: YoutubePlayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
