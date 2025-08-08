import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToggleThemeService {
  constructor() {}

  private isDark = false;

  toggleTheme(): void {
    this.isDark = !this.isDark;
    const themeClass = this.isDark ? 'dark-theme' : '';
    document.body.className = themeClass;
    localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
  }

  initTheme(): void {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDark = true;
      document.body.className = 'dark-theme';
    }
  }
}
