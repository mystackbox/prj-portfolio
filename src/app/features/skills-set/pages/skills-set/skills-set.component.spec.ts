import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SkillsSetComponent } from './skills-set.component';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('SkillsSetComponent', () => {
  let component: SkillsSetComponent;
  let fixture: ComponentFixture<SkillsSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkillsSetComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], //ignore the components that are included but not part of this module
      providers: [provideAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillsSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
