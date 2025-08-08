import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

    constructor(private router: Router){

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
