import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarVentasComponent } from './agregar-ventas.component';

describe('AgregarVentasComponent', () => {
  let component: AgregarVentasComponent;
  let fixture: ComponentFixture<AgregarVentasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarVentasComponent]
    });
    fixture = TestBed.createComponent(AgregarVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
