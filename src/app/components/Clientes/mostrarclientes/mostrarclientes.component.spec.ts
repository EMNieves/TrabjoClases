import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarclientesComponent } from './mostrarclientes.component';

describe('MostrarclientesComponent', () => {
  let component: MostrarclientesComponent;
  let fixture: ComponentFixture<MostrarclientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarclientesComponent]
    });
    fixture = TestBed.createComponent(MostrarclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
