import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureTrainingComponent } from './future-training.component';

describe('FutureTrainingComponent', () => {
  let component: FutureTrainingComponent;
  let fixture: ComponentFixture<FutureTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FutureTrainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FutureTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
