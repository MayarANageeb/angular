import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutcbyidComponent } from './produtcbyid.component';

describe('ProdutcbyidComponent', () => {
  let component: ProdutcbyidComponent;
  let fixture: ComponentFixture<ProdutcbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutcbyidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutcbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
