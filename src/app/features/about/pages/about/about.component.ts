import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { fadeInTrigger, fadeOutTrigger, slideInFromLeftTrigger, slideInFromRightTrigger, slideInFromTopTrigger, slideInFromBottomTrigger, basicStaggerTrigger, staggerInFromBottomTrigger, staggerInFromTopTrigger, zoomInTrigger } from '../../../../core/animations/animations';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
    animations: [
      fadeInTrigger,
      fadeOutTrigger,
  
      slideInFromLeftTrigger,
      slideInFromRightTrigger,
      slideInFromTopTrigger,
      slideInFromBottomTrigger,
  
      basicStaggerTrigger,
      staggerInFromBottomTrigger,
      staggerInFromTopTrigger,
  
      zoomInTrigger,
    ],
})
export class AboutComponent {

   myDelayVariable = 200;

  constructor(private router: Router){ }

   redirectToProjects() {
    this.router.navigate(['/projects']);
  }

}
