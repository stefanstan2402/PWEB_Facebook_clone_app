import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaEventsComponent } from './modifica-events.component';

describe('ModificaEventsComponent', () => {
  let component: ModificaEventsComponent;
  let fixture: ComponentFixture<ModificaEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificaEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificaEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
