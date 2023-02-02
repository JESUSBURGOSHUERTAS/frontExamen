import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoPacientesComponent } from './nuevo-pacientes.component';

describe('NuevoPacientesComponent', () => {
  let component: NuevoPacientesComponent;
  let fixture: ComponentFixture<NuevoPacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoPacientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
