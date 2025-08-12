import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService } from '../../../../core/services/projects/projects.service';
import { Project } from '../../../../shared/models/project.model';
import { BehaviorSubject, switchMap } from 'rxjs';

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

  constructor(private router: Router, private _products: ProjectsService) {}

  //load list of projects
  ngOnInit() {
     console.log('-- Featured  Item --');
    this.getFeaturedProject();
    
     console.log('-- All Items --');
    this.getProjects();
  }

  getProjects() {
   
    this._products.getProjects().subscribe({
      next: (projects: Project[]) => {
        this.projectsList = projects;
         console.log(this.projectsList);
      },
      error: (err: any) => {
        this.error = 'Failed to load projects';
      },
    });
  }

  getProject(_id?: number) {
    this._products.getSelectedProject(_id).subscribe({
      next: (project: Project) => {
        this.project = project;
        console.log(this.project);
      },
      error: (err: any) => {
        this.error = 'Failed to load project';
      },
    });
  }

  getFeaturedProject() {
   
    this._products.getFeaturedProject().subscribe({
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
}
