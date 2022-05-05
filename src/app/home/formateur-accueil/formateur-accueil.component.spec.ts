import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormateurAccueilComponent } from './formateur-accueil.component';

describe('FormateurAccueilComponent', () => {
  let component: FormateurAccueilComponent;
  let fixture: ComponentFixture<FormateurAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormateurAccueilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormateurAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
