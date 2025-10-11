import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';


describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], //ignore the components that are included but not part of this module
       providers: [provideAnimations()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
