import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterRtComponent } from './register-rt.component';

describe('RegisterRtComponent', () => {
  let component: RegisterRtComponent;
  let fixture: ComponentFixture<RegisterRtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterRtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterRtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
