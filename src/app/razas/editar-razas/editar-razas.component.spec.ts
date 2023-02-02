import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarRazasComponent } from './editar-razas.component';

describe('EditarRazasComponent', () => {
  let component: EditarRazasComponent;
  let fixture: ComponentFixture<EditarRazasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarRazasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarRazasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
