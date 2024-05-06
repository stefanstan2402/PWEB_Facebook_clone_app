import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCommentsComponent } from './lista-comments.component';

describe('ListaCommentsComponent', () => {
  let component: ListaCommentsComponent;
  let fixture: ComponentFixture<ListaCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
