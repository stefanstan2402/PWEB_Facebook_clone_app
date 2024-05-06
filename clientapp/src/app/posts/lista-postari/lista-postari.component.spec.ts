import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPostariComponent } from './lista-postari.component';

describe('ListaPostariComponent', () => {
  let component: ListaPostariComponent;
  let fixture: ComponentFixture<ListaPostariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPostariComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPostariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
