import { TestBed } from '@angular/core/testing';

import { ProjectsService } from './projects.service';
import { provideHttpClient, withFetch } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { IProject } from '../../../shared/models/project.model';

describe('ProjectsService', () => {
  let service: ProjectsService;
  let _httpMocker: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProjectsService,
        provideHttpClient(withFetch()), //Provide the HttpClient service
        provideHttpClientTesting(), //Enable the testing mock backend
      ],
    });

    service = TestBed.inject(ProjectsService);
    _httpMocker = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Ensures no unmatched requests are pending
    _httpMocker.verify();
  });

  it('should fetch projects list', () => {
    const mockProjects: IProject[] = [
      {
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
          'https://example.com/portfolio-details',
        ],
      },
    ];

    service.getProjects().subscribe((projects) => {
      expect(projects.length).toBe(1);
      //expect(projects).toEqual(dummyProjects);
    });

    // Expect a GET request
    const req = _httpMocker.expectOne('data/projects.json');
    expect(req.request.method).toBe('GET');

    // Respond with mock data
    req.flush(mockProjects);
  });
});
