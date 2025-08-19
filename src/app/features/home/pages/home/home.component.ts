import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService } from '../../../../core/services/projects/projects.service';
import { Project } from '../../../../shared/models/project.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private _projectSub?: Subscription;
  project?: Project;
  error?: string;

  gitHubRepo: string = 'https://github.com/mystackbox';
  linkedIn: string = 'https://www.linkedin.com/in/yingisani-chiqinda-545a062bb/';

  constructor(private router: Router, private _products: ProjectsService) {}

  //load list of projects
  ngOnInit() {
    this.getFeaturedProject();
  }

  /**
   * Fetches data from the projects local JSON API.
   * @returns An observable of type project object | API Server error.
   */
  getFeaturedProject() {
    this._projectSub = this._products.getFeaturedProject().subscribe({
      next: (project: Project) => {
        this.project = project;
      },
      error: (err: any) => {
        this.error = 'Failed to load project';
      },
    });
  }

  redirectToContactUs() {
    this.router.navigate(['/contact']);
  }

  redirectToProjects() {
    this.router.navigate(['/projects']);
  }

   openHyperLink(hyterLink: string) {
    window.open(hyterLink, '_blank');
  }
}
