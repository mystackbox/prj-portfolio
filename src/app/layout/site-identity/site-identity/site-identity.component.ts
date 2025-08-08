import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToggleThemeService } from '../../../core/services/toggle-theme/toggle-theme.service';

@Component({
  selector: 'app-site-identity',
  standalone: false,
  templateUrl: './site-identity.component.html',
  styleUrl: './site-identity.component.scss',
})
export class SiteIdentityComponent {
  constructor(
    private router: Router,
    private themeService: ToggleThemeService
  ) {}

  ngOnInit(): void {
  this.themeService.initTheme();
}

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  redirectToHome() {
    this.router.navigate(['/home']);
  }
}
