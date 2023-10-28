import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarmarcasComponent } from './mostrarmarcas.component';

describe('MostrarmarcasComponent', () => {
  let component: MostrarmarcasComponent;
  let fixture: ComponentFixture<MostrarmarcasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarmarcasComponent]
    });
    fixture = TestBed.createComponent(MostrarmarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
