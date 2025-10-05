import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDashBoard } from './product-dash-board';

describe('ProductDashBoard', () => {
  let component: ProductDashBoard;
  let fixture: ComponentFixture<ProductDashBoard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDashBoard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDashBoard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
