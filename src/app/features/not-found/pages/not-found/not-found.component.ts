import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { slideInFromTopTrigger } from '../../../../core/animations/animations';

@Component({
  selector: 'app-not-found',
  standalone: false,
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
  animations: [slideInFromTopTrigger],
})
export class NotFoundComponent {
  constructor(private router: Router) {}

  redirectToProjects() {
    this.router.navigate(['/contact']);
  }
}
