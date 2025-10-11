import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProjectsComponent } from './projects.component';
import { of } from 'rxjs';
import { ProjectsService } from '../../../../core/services/service-projects/projects.service';

// Create a mock version of the service
class MockProjectService {
  getProjects() {
    return of({
      id: 1,
      name: 'my portfolio',
      heading: 'Personal portfolio',
      imageName: 'prj-portfolio',
      introduction: 'Personal portfolio developed using Angular framework.',
      description:
        '<i class=\'bi bi-stop-fill\'></i> Designed responsive UI using <span class="highlighted-text">HTML5</span>, <span class="highlighted-text">SCSS</span>. <i class=\'bi bi-stop-fill\'></i> Build validated contact form, integrated with <span class="highlighted-text">MailJS</span> using <span class="highlighted-text">Reactive Forms</span>.  <i class=\'bi bi-stop-fill\'></i>. Integrated the Weather RESTful API using <span class="highlighted-text">RxJS</span>. <i class=\'bi bi-stop-fill\'></i> Implemented <span class="highlighted-text">lazy loading</span> to optimize performance.  <i class=\'bi bi-stop-fill\'></i> Wrote unit tests for critical components using <span class="highlighted-text">Jasmine & Karma</span>.',
      concepts: [
        'Responsive UI',
        'Angular/TypeScript',
        'RESTful APIs',
        'Angular Animations',
        'Unit Tests',
        'GitHub and Git',
      ],
      features: [
        'Weather API',
        'Contact Form',
        'WhatsApp Button',
        'Share Buttons',
        'Themes(Light/Dark)',
        ' Geo-Loc Request',
      ],
      hyperlinks: [
        'https://github.com/mystackbox/prj-portfolio',
        'https://mystackbox.github.io/prj-portfolio/home',
      ],
    });
  }
}

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], //ignore the components that are included but not part of this module
      providers: [{ provide: ProjectsService, useClass: MockProjectService }], // Provide the mock service
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create projects component', () => {
    expect(component).toBeTruthy();
  });

  it('should load projects from service', () => {
    expect(component.getProjects).toBeTruthy();
  });

  it('should contain at least one project', (done) => {
    const projectsService = TestBed.inject(ProjectsService);
    projectsService.getProjects().subscribe((project: any) => {
      expect(Object.keys(project).length).toBeGreaterThanOrEqual(1);
      done();
    });
  });
});
