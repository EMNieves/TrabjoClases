import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarCochesComponent } from './eliminar-coches.component';

describe('EliminarCochesComponent', () => {
  let component: EliminarCochesComponent;
  let fixture: ComponentFixture<EliminarCochesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarCochesComponent]
    });
    fixture = TestBed.createComponent(EliminarCochesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
