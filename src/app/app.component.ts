import { Component, OnInit } from '@angular/core';
import { IubCookieSolutionService } from './iub-cookie-solution.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  _iub: any;
  
  constructor(private iubendaCookieSolution: IubCookieSolutionService) {}

  ngOnInit() {
    window["_iub"] = this.iubendaCookieSolution._iub;
    let script = document.createElement("script");
    script.src =
      "http://localhost:3012//cookie_solution/iubenda_cs/core.js";
    document.head.appendChild(script);
  }
}
