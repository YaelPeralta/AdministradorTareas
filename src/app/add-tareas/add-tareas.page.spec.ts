import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddTareasPage } from './add-tareas.page';

describe('AddTareasPage', () => {
  let component: AddTareasPage;
  let fixture: ComponentFixture<AddTareasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTareasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
