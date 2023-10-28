import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarcochesComponent } from './mostrarcoches.component';

describe('MostrarcochesComponent', () => {
  let component: MostrarcochesComponent;
  let fixture: ComponentFixture<MostrarcochesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarcochesComponent]
    });
    fixture = TestBed.createComponent(MostrarcochesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
