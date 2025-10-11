import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      // providers:[
      //   provideHttpClient(),
      //   provideHttpClientTesting(),
      // ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create home component', () => {
    expect(component).toBeTruthy();
  });

  it('should display develper name', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('name')?.textContent).toContain(
      'Yingi'
    );
    expect(component).toBeTruthy();
  });
});
