import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoEspeciesComponent } from './nuevo-especies.component';

describe('NuevoEspeciesComponent', () => {
  let component: NuevoEspeciesComponent;
  let fixture: ComponentFixture<NuevoEspeciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoEspeciesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoEspeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
