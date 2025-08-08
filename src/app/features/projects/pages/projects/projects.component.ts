import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  constructor(private router: Router) {}

  redirectToContactUs() {
    this.router.navigate(['/contact']);
  }

  redirectToProjects() {
    this.router.navigate(['/projects']);
  }

  redirectToGitHubRepo() {
    window.open('https://github.com/mystackbox/prj-portfolio', '_blank');
  }

  redirectToDemo() {
    window.open('https://mystackbox.github.io/prj-portfolio/home', '_blank');
  }
}
