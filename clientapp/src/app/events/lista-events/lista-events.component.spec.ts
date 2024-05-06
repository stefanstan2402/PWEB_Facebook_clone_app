import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEventsComponent } from './lista-events.component';

describe('ListaEventsComponent', () => {
  let component: ListaEventsComponent;
  let fixture: ComponentFixture<ListaEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
