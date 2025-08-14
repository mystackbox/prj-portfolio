import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-page-introduction',
  standalone: false,
  templateUrl: './page-introduction.component.html',
  styleUrl: './page-introduction.component.scss'
})
export class PageIntroductionComponent {
pageTitle: any;
pageHeading: any;
pageDesc: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {
    this.setPageTitleFromRoute();
  }

  setPageTitleFromRoute() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map(route => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        mergeMap(route => route.data)
      )
      .subscribe(data => {
        this.pageTitle = data['title'];
        this.pageHeading = data['metaTags'][0].content;
         this.pageDesc = data['metaTags'][1].content;

        if (this.pageTitle) {
          let _title = `Portfolio - ${this.pageTitle}`;
          this.titleService.setTitle(_title);
        }
      });
  }

   redirectToContactUs() {
    this.router.navigate(['/contact']);
  }

   redirectToProjects() {
    this.router.navigate(['/projects']);
  }

}

