import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesDuenosComponent } from './detalles-duenos.component';

describe('DetallesDuenosComponent', () => {
  let component: DetallesDuenosComponent;
  let fixture: ComponentFixture<DetallesDuenosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesDuenosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesDuenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
