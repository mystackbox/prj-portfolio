import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToggleThemeService {

  private isBrowser: boolean;

  //handle localStorage for SSR 
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  private isDark = false;

  /*
    setter for localStarage | key | value
    set localStorage key value when SSR is running on the browser
  */
  setItem(key: string, value: string): void {
    if (this.isBrowser) {
      //
      localStorage.setItem(key, value);
    }
  }

  /*
    getter for localStarage | key
    get localStorage value when SSR is running on the browser
   */
  getItem(key: string): string | null {
    //
    if (this.isBrowser) {
      return localStorage.getItem(key);
    }
    return 'light';
  }

  //toggle thems based on the current theme set
  toggleTheme(): void {
    this.isDark = !this.isDark;
    const themeClass = this.isDark ? 'dark-theme' : '';
    document.body.className = themeClass;

    this.setItem('theme', this.isDark ? 'dark' : 'light');
  }

  //set theme onLoad
  initTheme() {
    let savedTheme = this.getItem('theme');

    //check if dark theme is already set
    if (savedTheme === 'dark') {
      this.isDark = true;
      document.body.className = 'dark-theme';
    } else {
      savedTheme = 'light';
      this.isDark = false;
      document.body.className = 'light-theme';
    }
  }

}
