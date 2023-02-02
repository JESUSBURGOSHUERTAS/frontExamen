import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesRazasComponent } from './detalles-razas.component';

describe('DetallesRazasComponent', () => {
  let component: DetallesRazasComponent;
  let fixture: ComponentFixture<DetallesRazasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesRazasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesRazasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
