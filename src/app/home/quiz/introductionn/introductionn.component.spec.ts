import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionnComponent } from './introductionn.component';

describe('IntroductionnComponent', () => {
  let component: IntroductionnComponent;
  let fixture: ComponentFixture<IntroductionnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroductionnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
