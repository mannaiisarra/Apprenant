import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerLearnerComponent } from './trainer-learner.component';

describe('TrainerLearnerComponent', () => {
  let component: TrainerLearnerComponent;
  let fixture: ComponentFixture<TrainerLearnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerLearnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerLearnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
