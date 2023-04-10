import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistertdfComponent } from './registertdf.component';

describe('RegistertdfComponent', () => {
  let component: RegistertdfComponent;
  let fixture: ComponentFixture<RegistertdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistertdfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistertdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
