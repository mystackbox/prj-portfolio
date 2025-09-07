import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService } from '../../../../core/services/service-projects/projects.service';
import { IProject } from '../../../../shared/models/project.model';
import { Subscription } from 'rxjs';
import { HyperLinkService } from '../../../../core/services/service-hyper-link/hyper-link.service';
import { fadeInTrigger, forwardStaggerTrigger, reverseStaggerTrigger, slideInFromBottomTrigger, slideInFromTopTrigger, staggerInFromBottomTrigger, zoomInTrigger } from '../../../../core/animations/animations';


@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
  fadeInTrigger, forwardStaggerTrigger, reverseStaggerTrigger,staggerInFromBottomTrigger, zoomInTrigger, slideInFromTopTrigger
  ,slideInFromBottomTrigger ],
})
export class HomeComponent {
  private _projectSub?: Subscription;
  project?: IProject;
  error?: string;
  isCollapsed: boolean = false;
  moreLessText: string = 'more...';
  myDelayVariable = 200;

  gitHubRepo: string = 'https://github.com/mystackbox';
  linkedIn: string =
    'https://www.linkedin.com/in/yingisani-chiqinda-545a062bb/';
  whatsapp: string =
    'https://wa.me/27796910468?text=Good day, I would like to hear more about your Angular Front-End Development. Please let me know if you are available for further discussion. Thank you.';

  constructor(
    private router: Router,
    private _products: ProjectsService,
    private _hyperLink: HyperLinkService
  ) {}

  //load list of projects
  ngOnInit() {

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
