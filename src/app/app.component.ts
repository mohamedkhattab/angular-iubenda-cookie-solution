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
      "http://cdn.iubenda.com/cookie_solution/iubenda_cs/core-d053bf0c05bb347ae5bf169b877657a0.js";
    document.head.appendChild(script);
  }
}
