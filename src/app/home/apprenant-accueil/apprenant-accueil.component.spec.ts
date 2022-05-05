import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprenantAccueilComponent } from './apprenant-accueil.component';

describe('ApprenantAccueilComponent', () => {
  let component: ApprenantAccueilComponent;
  let fixture: ComponentFixture<ApprenantAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprenantAccueilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprenantAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
