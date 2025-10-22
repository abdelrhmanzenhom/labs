import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwithTask } from './swith-task';

describe('SwithTask', () => {
  let component: SwithTask;
  let fixture: ComponentFixture<SwithTask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwithTask]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwithTask);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
