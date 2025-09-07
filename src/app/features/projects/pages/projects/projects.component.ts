import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService } from '../../../../core/services/service-projects/projects.service';
import { IProject } from '../../../../shared/models/project.model';
import { BehaviorSubject, Subscription } from 'rxjs';
import { HyperLinkService } from '../../../../core/services/service-hyper-link/hyper-link.service';
import {
  fadeInTrigger,
  zoomInTrigger,
  forwardStaggerTrigger,
  toggleSlideTrigger,
} from '../../../../core/animations/animations';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  animations: [
    fadeInTrigger,
    forwardStaggerTrigger,
    zoomInTrigger,
    toggleSlideTrigger,
  ],
})
export class ProjectsComponent {
  projects$ = new BehaviorSubject<void>(undefined); // trigger refresh

  projectsList: IProject[] = [];
  project?: IProject;
  error?: string;
  isCollapsed: boolean = false;
  isBtnLabel: string = 'Expand';
  projectsListLoaded: boolean = false;

  private _projectSub?: Subscription;
  private _projectsSub?: Subscription;

  constructor(
    private router: Router,
    private _products: ProjectsService,
    private _hyperLink: HyperLinkService,
    private cdr: ChangeDetectorRef
  ) {
    this.projectsList.reverse();
  }

  //load list of projects
  ngOnInit() {
    // this.cdr.detach(); //prevent flickering whenever timer ticks
    this.getProjects();
  }

    /**
   * Fetches data from the projects local JSON API.
   * @returns An observable of type project object | API Server error.
   */
  getFeaturedProject(_latestProject: IProject) {
    this.project = _latestProject;
  }

  /**
   * Fetches data from the projects local JSON API.
   * @returns An observable of type projects[] | API Server error.
   */
  getProjects() {
     
    this._projectsSub = this._products.getProjects().subscribe({
      next: (projects: IProject[]) => {
        this.projectsList = projects;
        this.getFeaturedProject(projects[projects.length - 1]);
        this.projectsListLoaded = true;
        // if(this.projectsListLoaded){
        //          this.cdr.detectChanges(); //prevent flickering whenever timer ticks
        // }

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
    console.log('Selected Id = ' + _id);
    this._projectSub = this._products.getSelectedProject(_id).subscribe({
      next: (selectedProject: IProject) => {
        this.project = selectedProject;
      },
      error: (err: any) => {
        this.error = 'Failed to load project';
      },
    });
  }

  toggleProjectDetails() {
    this.isCollapsed = !this.isCollapsed;
    console.log(this.isCollapsed);

    if (this.isCollapsed === true) {
      this.isBtnLabel = 'Collapse';
    } else {
      this.isBtnLabel = 'Expand';
    }

    console.log(this.isBtnLabel);
  }

  openHyperLink(hyterLink: string) {
    this._hyperLink.openNewTab(hyterLink);
  }

  redirectToContactUs() {
    this.router.navigate(['/contact']);
  }

  ngOnDestroy() {
    this._projectSub?.unsubscribe();
    this._projectsSub?.unsubscribe();
    this.projectsList.reverse();
  }
}
