import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService } from '../../../../core/services/projects/projects.service';
import { Project } from '../../../../shared/models/project.model';
import { BehaviorSubject, Subscriber, Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects$ = new BehaviorSubject<void>(undefined); // trigger refresh
  projectsList: Project[] = [];
  project?: Project;
  error?: string;

  private _projectSub?: Subscription;
  private _projectsSub?: Subscription;

  constructor(private router: Router, private _products: ProjectsService) {}

  //load list of projects
  ngOnInit() {
    console.log('-- Featured  Item --');
    this.getFeaturedProject();

    console.log('-- All Items --');
    this.getProjects();
  }

  /**
   * Fetches data from the projects local JSON API.
   * @returns An observable of type projects[] | API Server error.
   */
  getProjects() {
    this._projectsSub = this._products.getProjects().subscribe({
      next: (projects: Project[]) => {
        this.projectsList = projects;
        console.log(this.projectsList);
      },
      error: (err: any) => {
        this.error = 'Failed to load projects';
      },
    });
  }

  /**
   * Fetches single record of project with id.
   * @param id The unique identifier for the project.
   * @returns An observable type project object  | API Server error.
   */
  getProject(_id?: number) {
    this._projectSub = this._products.getSelectedProject(_id).subscribe({
      next: (project: Project) => {
        this.project = project;
        console.log(this.project);
      },
      error: (err: any) => {
        this.error = 'Failed to load project';
      },
    });
  }

  /**
   * Fetches data from the projects local JSON API.
   * @returns An observable of type project object | API Server error.
   */
  getFeaturedProject() {
    this._projectSub = this._products.getFeaturedProject().subscribe({
      next: (project: Project) => {
        this.project = project;
        console.log(this.project);
      },
      error: (err: any) => {
        this.error = 'Failed to load project';
      },
    });
  }

  openHyperLink(hyterLink: string) {
    window.open(hyterLink, '_blank');
  }

  redirectToContactUs() {
    this.router.navigate(['/contact']);
  }

  ngOnDestroy() {
    this._projectSub?.unsubscribe();
    this._projectsSub?.unsubscribe();
  }
}
