import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { forwardStaggerTrigger } from '../../../../core/animations/animations';

@Component({
  selector: 'app-skills-set',
  standalone: false,
  templateUrl: './skills-set.component.html',
  styleUrl: './skills-set.component.scss',
      animations: [
        forwardStaggerTrigger,
      ],
})
export class SkillsSetComponent {

   myDelayVariable = 200;

   constructor(private router: Router){ }

   redirectToProjects() {
    this.router.navigate(['/projects']);
  }

}
