import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogintdfComponent } from './logintdf.component';

describe('LogintdfComponent', () => {
  let component: LogintdfComponent;
  let fixture: ComponentFixture<LogintdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogintdfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogintdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
