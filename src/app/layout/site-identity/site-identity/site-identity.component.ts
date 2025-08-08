import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-site-identity',
  standalone: false,
  templateUrl: './site-identity.component.html',
  styleUrl: './site-identity.component.scss'
})
export class SiteIdentityComponent {
  
   constructor(private router: Router) {}

   redirectToHome() {
    this.router.navigate(['/home']);
  }


}
