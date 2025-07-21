import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  // constructor(
  //   private router: Router,
  //   private activatedRoute: ActivatedRoute,
  //   private titleService: Title
  // ) {
  //   this.setPageTitleFromRoute();
  // }

  // setPageTitleFromRoute() {
  //   this.router.events
  //     .pipe(
  //       filter(event => event instanceof NavigationEnd),
  //       map(() => this.activatedRoute),
  //       map(route => {
  //         while (route.firstChild) route = route.firstChild;
  //         return route;
  //       }),
  //       mergeMap(route => route.data)
  //     )
  //     .subscribe(data => {
  //       const pageTitle = data['title'];
  //       if (pageTitle) {
  //         this.titleService.setTitle(pageTitle);
  //       }
  //     });
  // }
  
}
