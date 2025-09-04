import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService } from '../../../../core/services/service-projects/projects.service';
import { IProject } from '../../../../shared/models/project.model';
import { Subscription } from 'rxjs';
import { HyperLinkService } from '../../../../core/services/service-hyper-link/hyper-link.service';
import { fadeInTrigger } from '../../../../core/animations/fade-animations';
import { slideInFromLeftTrigger, slideInFromRightTrigger, slideInFromTopTrigger, staggerInFromBottomTrigger } from '../../../../core/animations/slide-animations';


@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    fadeInTrigger,
    slideInFromLeftTrigger,
    slideInFromRightTrigger,
    slideInFromTopTrigger,
    staggerInFromBottomTrigger
  ],
})
export class HomeComponent {
  private _projectSub?: Subscription;
  project?: IProject;
  error?: string;
  isCollapsed: boolean = false;
  moreLessText: string = 'more...';

  gitHubRepo: string = 'https://github.com/mystackbox';
  linkedIn: string =
    'https://www.linkedin.com/in/yingisani-chiqinda-545a062bb/';
  whatsapp: string =
    'https://wa.me/27796910468?text=Good day, I would like to hear more about your Angular Front-End Development. Please let me know if you are available for further discussion. Thank you.';

  constructor(
    private router: Router,
    private _products: ProjectsService,
    private _hyperLink: HyperLinkService,
  ) {}



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

  readMore() {
    this.isCollapsed = !this.isCollapsed;
    if (this.isCollapsed === true) {
      this.moreLessText = 'less...';
    } else {
      this.moreLessText = 'more... ';
    }
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


