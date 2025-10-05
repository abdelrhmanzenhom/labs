import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapTasks } from './swap-tasks';

describe('SwapTasks', () => {
  let component: SwapTasks;
  let fixture: ComponentFixture<SwapTasks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwapTasks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwapTasks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
