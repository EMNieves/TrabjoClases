import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCochesComponent } from './crear-coches.component';

describe('CrearCochesComponent', () => {
  let component: CrearCochesComponent;
  let fixture: ComponentFixture<CrearCochesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearCochesComponent]
    });
    fixture = TestBed.createComponent(CrearCochesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
