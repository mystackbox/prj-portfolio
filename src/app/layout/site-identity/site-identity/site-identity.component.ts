import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { ToggleThemeService } from '../../../core/services/service-toggle-theme/toggle-theme.service';
import { isPlatformBrowser } from '@angular/common';
import { BrowserCheckService } from '../../../core/services/service-browser-check/browser-check.service';

@Component({
  selector: 'app-site-identity',
  standalone: false,
  templateUrl: './site-identity.component.html',
  styleUrl: './site-identity.component.scss',
})
export class SiteIdentityComponent {

  isChecked: boolean = false;

  constructor(
    private router: Router,
    private themeService: ToggleThemeService,
     private browserCheck: BrowserCheckService
  ) {}


//load theme on init
  ngOnInit(): void {
    if (this.browserCheck.isBrowser()) {
      this.themeService.initTheme();
    }
  }

  toggleTheme(): void {

    this.isChecked = !this.isChecked;
    this.themeService.toggleTheme();
  }

  redirectToHome() {
    this.router.navigate(['/home']);
  }
  
}
