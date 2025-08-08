import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skills-set',
  standalone: false,
  templateUrl: './skills-set.component.html',
  styleUrl: './skills-set.component.scss'
})
export class SkillsSetComponent {

   constructor(private router: Router){ }

   redirectToProjects() {
    this.router.navigate(['/projects']);
  }

}
