import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProductoComponent } from './service-producto.component';

describe('ServiceProductoComponent', () => {
  let component: ServiceProductoComponent;
  let fixture: ComponentFixture<ServiceProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
