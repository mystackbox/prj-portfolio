import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { ToggleThemeService } from '../../../core/services/toggle-theme/toggle-theme.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-site-identity',
  standalone: false,
  templateUrl: './site-identity.component.html',
  styleUrl: './site-identity.component.scss',
})
export class SiteIdentityComponent {

  constructor(
    private router: Router,
    private themeService: ToggleThemeService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}


//load theme on init
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.themeService.initTheme();
    }
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  redirectToHome() {
    this.router.navigate(['/home']);
  }
  
}
