import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesEspeciesComponent } from './detalles-especies.component';

describe('DetallesEspeciesComponent', () => {
  let component: DetallesEspeciesComponent;
  let fixture: ComponentFixture<DetallesEspeciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesEspeciesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesEspeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
