import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendarViajeComponent } from './agendar-viaje.component';

describe('AgendarViajeComponent', () => {
  let component: AgendarViajeComponent;
  let fixture: ComponentFixture<AgendarViajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendarViajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendarViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
