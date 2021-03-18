import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { Subject } from 'rxjs';
import { IubCookieSolutionService } from '../iub-cookie-solution.service';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent implements OnInit {
  player: YT.Player;
  id: string = "BHACKCNDMW8";
  preference: any;
  public destroyed = new Subject<any>();

  constructor(
    private iubendaCookieSolution: IubCookieSolutionService, 
    private router: Router
  ) {
    iubendaCookieSolution.onCsPreferenceExpressed$.subscribe((e: CustomEvent) => {
      this.preference = e.detail;
    });

    router.events.subscribe((evt: RouterEvent) => {
      if (evt instanceof NavigationEnd) {
        this.preference = this.iubendaCookieSolution.getPreference();
      }
    });
  }

  ngOnInit(): void {}

  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }
}
