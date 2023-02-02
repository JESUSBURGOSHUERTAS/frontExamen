import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoRazasComponent } from './nuevo-razas.component';

describe('NuevoRazasComponent', () => {
  let component: NuevoRazasComponent;
  let fixture: ComponentFixture<NuevoRazasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoRazasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoRazasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
