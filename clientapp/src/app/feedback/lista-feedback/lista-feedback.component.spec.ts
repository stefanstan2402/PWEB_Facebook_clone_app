import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFeedbackComponent } from './lista-feedback.component';

describe('ListaFeedbackComponent', () => {
  let component: ListaFeedbackComponent;
  let fixture: ComponentFixture<ListaFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaFeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
