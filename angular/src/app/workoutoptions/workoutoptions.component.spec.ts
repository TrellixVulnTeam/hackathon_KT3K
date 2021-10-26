import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutoptionsComponent } from './workoutoptions.component';

describe('WorkoutoptionsComponent', () => {
  let component: WorkoutoptionsComponent;
  let fixture: ComponentFixture<WorkoutoptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutoptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutoptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
