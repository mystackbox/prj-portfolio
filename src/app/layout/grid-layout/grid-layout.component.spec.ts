import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GridLayoutComponent } from './grid-layout.component';

describe('Grid Layout Component', () => {
  let component: GridLayoutComponent;
  let fixture: ComponentFixture<GridLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(
      {
      declarations: [GridLayoutComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA] //ignore the components that are included but not part of this module
    }
  )
    .compileComponents();

    fixture = TestBed.createComponent(GridLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create grid-layout component', () => {
    expect(component).toBeTruthy();
  });

});
