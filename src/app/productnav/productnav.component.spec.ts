import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductnavComponent } from './productnav.component';

describe('ProductnavComponent', () => {
  let component: ProductnavComponent;
  let fixture: ComponentFixture<ProductnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductnavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
