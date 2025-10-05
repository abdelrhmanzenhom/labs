import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwtichTask } from './swtich-task';

describe('SwtichTask', () => {
  let component: SwtichTask;
  let fixture: ComponentFixture<SwtichTask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwtichTask]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwtichTask);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
