import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarCochesComponent } from './actualizar-coches.component';

describe('ActualizarCochesComponent', () => {
  let component: ActualizarCochesComponent;
  let fixture: ComponentFixture<ActualizarCochesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarCochesComponent]
    });
    fixture = TestBed.createComponent(ActualizarCochesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
