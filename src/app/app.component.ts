import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import {WINDOW} from './window.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OzAutogate';
  public showNavBrand: boolean = true;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window) {
  }

  setShowNavBrand() {
    let show: boolean = this.showNavBrand;
    let scrollOffset: number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    if (scrollOffset > 100) {
      show = false;
    } else if (!show && scrollOffset < 10) {
      show = true;
    }

    if (show && this.window.innerWidth < 1300) {
      // Window too small.
      show = false;
    }

    this.showNavBrand = show;
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.setShowNavBrand();
  }

  @HostListener("window:resize", [])
  onResize() {
    this.setShowNavBrand();
  }
}
