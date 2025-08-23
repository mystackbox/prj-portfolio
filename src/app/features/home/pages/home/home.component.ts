import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService } from '../../../../core/services/service-projects/projects.service';
import { IProject } from '../../../../shared/models/project.model';
import { Subscription } from 'rxjs';
import { HyperLinkService } from '../../../../core/services/service-hyper-link/hyper-link.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private _projectSub?: Subscription;
  project?: IProject;
  error?: string;

  gitHubRepo: string = 'https://github.com/mystackbox';
  linkedIn: string = 'https://www.linkedin.com/in/yingisani-chiqinda-545a062bb/';

  constructor(private router: Router, private _products: ProjectsService, private _hyperLink: HyperLinkService) {}

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
      next: (project: IProject) => {
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
    this._hyperLink.openNewTab(hyterLink);
  }
}
