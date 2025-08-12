import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService } from '../../../../core/services/projects/projects.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private router: Router, private _products: ProjectsService) {}

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
     this._products.getProjects().subscribe({
      next: (res) => 
        console.log(res)
      ,
      error: (err) => console.error('Error loading JSON:', err)
    });
  }

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
