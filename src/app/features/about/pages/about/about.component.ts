import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { forwardStaggerTrigger } from '../../../../core/animations/animations';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
    animations: [
      forwardStaggerTrigger,
    ],
})
export class AboutComponent {

  constructor(private router: Router){ }

   redirectToProjects() {
    this.router.navigate(['/projects']);
  }

}
