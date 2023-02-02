import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEspeciesComponent } from './editar-especies.component';

describe('EditarEspeciesComponent', () => {
  let component: EditarEspeciesComponent;
  let fixture: ComponentFixture<EditarEspeciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarEspeciesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarEspeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
