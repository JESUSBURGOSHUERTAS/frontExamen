import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoDuenosComponent } from './nuevo-duenos.component';

describe('NuevoDuenosComponent', () => {
  let component: NuevoDuenosComponent;
  let fixture: ComponentFixture<NuevoDuenosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoDuenosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoDuenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
