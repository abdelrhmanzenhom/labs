import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDb } from './product-db';

describe('ProductDb', () => {
  let component: ProductDb;
  let fixture: ComponentFixture<ProductDb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDb]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDb);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
