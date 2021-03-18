import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { fromEventPattern } from 'rxjs';
import {  Observable, Subject } from 'rxjs';
import { takeUntil } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class IubCookieSolutionService {
  _iub: any;
  renderer: Renderer2;
  preference: any;
  private _destroy$ = new Subject();
  public onCsPreferenceExpressed$: Observable<Event>;

  constructor(private rendererFactory2: RendererFactory2) {
    this.preference = window['_iub'] && window['_iub']['cs'] && window['_iub']['cs']['consent'];
    this.renderer = this.rendererFactory2.createRenderer(null, null);
    this.createOnCsPreferenceExpressedObservable(this.renderer);
    this._iub = {
      csConfiguration: {
        lang: "en",
        cookiePolicyId: 8207462,
        logLevel: "debug",
        enableCMP: true,
        consentOnScroll: false,
        banner: {
          position: "float-center",
        },
        callback: {
          onPreferenceExpressed: (result) => window.dispatchEvent(new CustomEvent("csPreferenceExpressed", { detail: result })),
        },
      }
    };
  }

  private createOnCsPreferenceExpressedObservable(renderer: Renderer2) {
    let removeCsPreferenceExpressedListener: () => void;
    const createCsPreferenceExpressedListener = (
      handler: (e: Event) => boolean | void
    ) => {
      removeCsPreferenceExpressedListener = renderer.listen('window', 'csPreferenceExpressed', handler);
    }

    this.onCsPreferenceExpressed$ = fromEventPattern<Event>(createCsPreferenceExpressedListener, () => {
      removeCsPreferenceExpressedListener()
    }).pipe(takeUntil(this._destroy$));
  }

  public getPreference() {
    this.preference = window['_iub'] && window['_iub']['cs'] && window['_iub']['cs']['consent'];
    return this.preference;
  }
  // @HostListener('window:csPreferenceExpressed', ['$event'])
  // csPreferenceExpressedListener(event) {
  //   console.log("[ANGULAR|DEBUG] ", event)
  //   this.preference = event.detail;
  // }
}
