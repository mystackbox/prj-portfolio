import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageIntroductionComponent } from './page-introduction.component';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideAnimations } from '@angular/platform-browser/animations';

//Create a stub/mock class or object for ActivatedRoute
const activatedRouteStub = {
  // Common properties to mock: paramMap, queryParamMap, or snapshot
  paramMap: of({ get: (key: string) => '123' }), // Mock paramMap as an Observable
  snapshot: {
    paramMap: {
      get: (key: string) => '123',
    },
  },

};

describe('PageIntroductionComponent', () => {
  let component: PageIntroductionComponent;
  let fixture: ComponentFixture<PageIntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageIntroductionComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub }, //Provide the mock object for ActivatedRoute
        provideHttpClient(withFetch()), //Provide the HttpClient service
        provideHttpClientTesting(), //Enable the testing mock backend
        provideAnimations(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PageIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create call-to-action component', () => {
    expect(component).toBeTruthy();
  });
});
