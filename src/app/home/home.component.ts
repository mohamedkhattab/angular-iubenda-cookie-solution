import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { IubCookieSolutionService } from '../iub-cookie-solution.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  preference: any;

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

  ngOnInit(): void {
  }

}
